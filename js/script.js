/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>100
//	
//	script.js
//
//	Project 3: Interactive Form
//	Team Treehouse
//	Joel Cruz
//	
//	Date....: Printed Tuesday, December 6, 2022
//	Version.: (A)
//	Note....:	
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// Variables
var i = 0;

// HTML Element - General
const otherJobText		= document.getElementById('other-job-role');
const titleSelect		= document.getElementById('title');
const colorSelect		= document.getElementById('color');
const designSelect		= document.getElementById('design');
const activityFieldset	= document.getElementById('activities');
const activityBox		= document.getElementById('activities-box');
const paySelect		= document.getElementById('payment');
const form			= document.querySelector('form');
// HTML Element - Validation - GOTO [VALID]
const nameInput 		= document.getElementById('name');
const emailInput		= document.getElementById('email');
const ccInput			= document.getElementById('cc-num');
const zipInput			= document.getElementById('zip');
const cvvInput			= document.getElementById('cvv');

// console.log(form);
// form.addEventListener('submit', ()=>{})

// Variable - Payment
const pay	= [];
pay.push(document.getElementById('credit-card'));
pay.push(document.getElementById('paypal'));
pay.push(document.getElementById('bitcoin'));
paySelect.options[1].selected = true; //Option: 1. Credit Card
pay[1].hidden				= true;
pay[2].hidden				= true;

// Default
nameInput.focus();
otherJobText.hidden	= true;



// SHOW custom job-title text-field if 'Other' selected as Job Role
//   Otherwise HIDE
titleSelect.addEventListener('change', (e) => {
	const selectedTitle = e.currentTarget.value;

	if( selectedTitle === 'other' ) { 
		otherJobText.hidden = false;
		otherJobText.focus();
		return; 
	}
	otherJobText.hidden = true;
})



// Disable t-shirt color selection until design is selected
colorSelect.disabled = true;
for(const x of colorSelect.options) { x.hidden = true; }



// SHOW colors available for selected t-shirt design
designSelect.addEventListener('change', (e) => {
	const selectedDesign = e.currentTarget.value; // 'js puns' or 'heart js'

	// Change in design-selection -> Enable, Focus color selection, new message
	colorSelect.disabled = false;
	colorSelect.focus();
	colorSelect.selectedIndex = 0;
	colorSelect.options[0].textContent = 'Select a color';

	for( const x of colorSelect.options ) {
		if( x.dataset.theme === `${selectedDesign}` ) { x.hidden = false; } 
		else { x.hidden = true; }
	}
})



// [1] Activities
activityFieldset.addEventListener('change', (e) => {
	var totalCost = 0;
	const activityCollection = e.currentTarget.children[1].children;

	for( const x of activityCollection ) {
		x.firstElementChild.disabled = false;
		x.classList.remove('disabled');
	}

	for( const x of activityCollection ) {
		var input = x.firstElementChild;
		if( input.checked === true ) { 
			totalCost+=parseInt(input.dataset.cost);
			
			//console.log(input.dataset.dayAndTime);
			for( const y of activityCollection ) {
				if(	y.firstElementChild.name !== input.name &&
					y.firstElementChild.dataset.dayAndTime === 
						input.dataset.dayAndTime) {
							y.firstElementChild.disabled = true;
							y.classList.add('disabled');
						}
			}
		}
	}

	const costP = document.getElementById('activities-cost');
	costP.textContent = `Total: $${totalCost}`;
	if(totalCost==0) { 
		costP.parentElement.lastElementChild.style.display='inline'; 
		return;
	}
	costP.parentElement.lastElementChild.style.display='none';

	//activityCollection[3].firstElementChild.disabled = true;
	//activityCollection[3].classList.add('disabled');

	//console.log( activityCollection[3] );

	/*for( const x of colorSelect.options ) {
		if( x.dataset.theme === `${selectedDesign}` ) { x.hidden = false; } 
		else { x.hidden = true; }
	}*/
})



// [1] Payments
paySelect.addEventListener('change', (e) => {
	const selectedPayment = e.currentTarget.value;

	for(i=0 ; i<3; i++) { 
		pay[i].hidden = true; 

		if( selectedPayment === pay[i].id ) {
			pay[i].hidden = false;
		}
	}
})



// [1] Validation GOTO [VALID]
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
// Ctrl+F: "HTML Element - Validation" section to add elements e.g.
// const nameInput = document.getElementById('name');

// Generalized Listener Creator
function createListener( validator ) {
	return e => {
		const text = e.target.value;

		const hint = e.target.parentElement.lastElementChild;
		const valid = validator(text);

		if(!valid) { hint.style.display = 'inline'; return; }
		hint.style.display = 'none';
	}
}

// Listeners - Text
nameInput.addEventListener	( "input", createListener(isValidName) );
emailInput.addEventListener	( "input", createListener(isValidEmail) );
ccInput.addEventListener		( "input", createListener(isValidCc) );
zipInput.addEventListener	( "input", createListener(isValidZip) );
cvvInput.addEventListener	( "input", createListener(isValidCvv) );
// Listeners - Focus

// Validators
function isValidName( name ) { 
	const re = /[ \t]+/g;

	// Reformatting
	name = name.trim();
	name = name.replace(re, ' ');

	return /^[A-Za-z ]+$/.test( name );
}

function isValidEmail( email ) 	{ return /^\w+@\w+\b.com\b$/i.test(email); }
function isValidCc( cc )			{ return /^\d{13,16}$/.test(cc); }
function isValidZip( zip )		{ return /^\d{5}$/.test(zip); }
function isValidCvv( cvv )		{ return /^\d{3}$/.test(cvv); }



// Validate - Form Submission
form.addEventListener('submit', (e) => {
	var fail = false;
	
	//isValidActivitySelection();

	if(!isValidName( nameInput.value )) 	{ failure(e, nameInput, 'name'); fail = true; }
	if(!isValidEmail( emailInput.value )) 	{ failure(e, emailInput, 'email'); fail = true; }
	if(!isValidActivitySelection()) 		{ failure(e, activityBox, 'activity'); fail = true; }
	if( pay[0].hidden===false) { 
		if(!isValidCc(ccInput.value))		{ failure(e, ccInput, 'cc-num'); fail = true; }
		if(!isValidZip(zipInput.value))	{ failure(e, zipInput, 'zip'); fail = true; }
		if(!isValidCvv(cvvInput.value))	{ failure(e, cvvInput, 'cvv'); fail = true; }
	}

	//console.log(pay[0].hidden, pay[1].hidden, pay[2].hidden);

	if(fail === true) { return; }

	console.log( "Accepted" );
})

function failure(e, elem, msg) {
	//console.log( `${msg}` );
	const hint = elem.parentElement.lastElementChild;
	hint.style.display = 'inline';

	e.preventDefault();
}

function isValidActivitySelection() {
	const activityCollection = document.getElementById('activities-box').children;
	var oneActivitySelected = false;

	for(x of activityCollection) {
		if(x.firstElementChild.checked) { oneActivitySelected = true; };
	}

	return oneActivitySelected;
}
