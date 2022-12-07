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
const nameText 		= document.getElementById('name');
const otherJobText		= document.getElementById('other-job-role');
const titleSelect		= document.getElementById('title');
const colorSelect		= document.getElementById('color');
const designSelect		= document.getElementById('design');
const activityFieldset	= document.getElementById('activities');
const paySelect		= document.getElementById('payment');

const pay				= [];
pay.push(document.getElementById('credit-card'));
pay.push(document.getElementById('paypal'));
pay.push(document.getElementById('bitcoin'));

// Default
nameText.focus();
otherJobText.hidden			= true;
paySelect.options[1].selected = true; //Option: 1. Credit Card
pay[1].hidden				= true;
pay[2].hidden				= true;


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



// [] Activities
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

	document.getElementById('activities-cost').textContent = `Total: $${totalCost}`;

	//activityCollection[3].firstElementChild.disabled = true;
	//activityCollection[3].classList.add('disabled');

	//console.log( activityCollection[3] );

	/*for( const x of colorSelect.options ) {
		if( x.dataset.theme === `${selectedDesign}` ) { x.hidden = false; } 
		else { x.hidden = true; }
	}*/
})



// [] Payments
paySelect.addEventListener('change', (e) => {
	const selectedPayment = e.currentTarget.value;

	for(i=0 ; i<3; i++) { 
		pay[i].hidden = true; 

		if( selectedPayment === pay[i].id ) {
			pay[i].hidden = false;
		}
	}
})



// [] Validation
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/