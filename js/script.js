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



// Global Variables
/////////////////////////////////////////////////////////////////////////////////////////////////100
/** Integer index
 * @type {Number} i */
var i = 0;

/** Track email-input error-type using blankMsg, formatMsg strings
 * @type {Object} emailError */
const emailError = {};

/** Error message for email-input error: blank entry
 * @type {String} blankMsg */
const blankMsg	= 'Email address cannot be left blank';

/** Error message for email-input error: bad format
 * @type {String} formatMsg */
const formatMsg = 'Email address must be formatted correctly';

// Global HTML Elements
/////////////////////////////////////////////////////////////////////////////////////////////////100
/** Text-input: Optional, custom job title input
 * @type {HTMLInputElement} otherJobInput */
const otherJobInput = document.getElementById('other-job-role');

/** Job title select
 * @type {HTMLSelectElement} titleSelect 
 * @fires titleSelectChange */
const titleSelect = document.getElementById('title');

/** Color select
 * @type {HTMLSelectElement} colorSelect */
const colorSelect = document.getElementById('color');

/** T-Shirt design select
 * @type {HTMLSelectElement} designSelect 
 * @fires designSelectChange */
const designSelect = document.getElementById('design');

/** Activity fieldset
 * @type {HTMLFieldSetElement} activityFieldSet 
 * @fires activityChange */
const activityFieldset = document.getElementById('activities');

/** Activity container-div: Contains all activity elements
 * @type {HTMLDivElement} activityDiv */
const activityDiv = document.getElementById('activities-box');

/** Each label holds one activity, i.e. all elements associated with one activity, notably, the checkbox-inputs
 * @type {HTMLCollection<HTMLLabelElement>} activityCollection */
const activityCollection = activityDiv.children;

/** Payment select
 * @type {HTMLSelectElement} paySelect 
 * @fires paySelectChange */
const paySelect = document.getElementById('payment');

/** Form
 * @type {HTMLFormElement} form */
const form = document.querySelector('form');

// Text-input elements for validation
/////////////////////////////////////////////////////////////////////////////////////////////////100

/** Text-input: Name
 * @type {HTMLInputElement} nameInput */
const nameInput = document.getElementById('name');
nameInput.parentElement.lastElementChild.textContent = 'Name field cannot be blank, nor contain numbers.';

/** Email-input
 * @type {HTMLInputElement} emailInput */
const emailInput = document.getElementById('email');

/** Text-input: Credit card
 * @type {HTMLInputElement} ccInput */
const ccInput = document.getElementById('cc-num');

/** Text-input: Zip code
 * @type {HTMLInputElement} zipInput */
const zipInput = document.getElementById('zip');

/** Text-input: CVV
 * @type {HTMLInputElement} cvvInput */
const cvvInput = document.getElementById('cvv');

/** 
 * Each container-div holds one payment option, i.e. all elements associated with one payment option. (index. option):
 * 1. Credit Card
 * 2. Paypal
 * 3. Bitcoin
 * @type {Array<HTMLDivElement>} pay */
const pay	= [];
pay.push(document.getElementById('credit-card'));
pay.push(document.getElementById('paypal'));
pay.push(document.getElementById('bitcoin'));

// Default: select credit card option; Hide other payment containers
paySelect.options[1].selected = true;
pay[1].hidden = true;
pay[2].hidden = true;

// Site Defaults
nameInput.focus();
otherJobInput.hidden = true;

// Default (until t-shirt design selected)
//		1. Disable color selection
//		2. Hide color options
colorSelect.disabled = true;
for(const x of colorSelect.options) { x.hidden = true; }

/**
 * Change in title select element
 * @event titleSelectChange */

/**
 * If 'other' job-title is selected, show and focus() on 'other-job-role' text-input element, else keep it hidden
 * @name titleSelectListener
 * @function
 * @param {Event} titleSelectChange
 * @listens titleSelectChange */
titleSelect.addEventListener('change', 
	(e) => {
		/** Job-title from select element
		 * @type {String} selectedTitle */
		const selectedTitle = e.currentTarget.value;

		if( selectedTitle === 'other' ) { 
			otherJobInput.hidden = false;
			otherJobInput.focus();
			return; 
		}
		otherJobInput.hidden = true;
	})

/**
 * Change in design select element
 * @event designSelectChange */

/**
 * If a design select option is set:
 * 1. Change color-select dispalyed message (option[0].textContent) to "Select color:"
 * 2. Focus() on color-select
 * 3. Enable color options available for selected t-shirt design
 * @name designSelectListener
 * @function
 * @param {Event} designSelectChange
 * @listens designSelectChange */
designSelect.addEventListener('change', (e) => {
	/** T-Shirt design type from design select element: 'js puns' or 'heart js'
	 * @type {String} selectedDesign */
	const selectedDesign = e.currentTarget.value;

	// Enable, Focus, Change Message
	colorSelect.disabled = false;
	colorSelect.focus();
	colorSelect.selectedIndex = 0;
	colorSelect.options[0].textContent = 'Select a color';

	// Enable color options
	for( const x of colorSelect.options ) {
		if( x.dataset.theme === `${selectedDesign}` ) { x.hidden = false; } 
		else { x.hidden = true; }
	}
})



/** Change in activity fieldset
 * @event activityChange */

/** If change (check or uncheck) occurs on any activity checkbox-input:
 * 1. Re-initialize: (1) Reset total cost to $0, (2) Enable all checkbox-inputs
 * 2. Find a checked input: (1) Add price to total cost, (2) Disable other activities if time-conflicting
 * @name activityListener
 * @function
 * @param {Event} activityChange
 * @listens activityChange */
activityFieldset.addEventListener('change', (e) => {
	// Initialize variables
	var activityLabel1, activityLabel2, activityInput1, activityInput2;
	var totalCost = 0;

	const activityCollection = e.currentTarget.children[1].children;

	// Reset disabled flags
	for( activityLabel1 of activityCollection ) {
		activityInput1 = activityLabel1.firstElementChild;

		activityInput1.disabled = false;
		activityLabel1.classList.remove('disabled');
	}

	// If activityInput is checked: 1. Add price to cost, 2. Cross-reference against all other activities and disable time-conflicting ones
	for( activityLabel1 of activityCollection ) {
		activityInput1 = activityLabel1.firstElementChild;


		if( activityInput1.checked === true ) { 
			totalCost+=parseInt(activityInput1.dataset.cost);
			
			// Cross-reference
			for( activityLabel2 of activityCollection ) {
				activityInput2 = activityLabel2.firstElementChild;

				// Omit same name; Check day and time
				if(	(activityInput2.name) !== (activityInput1.name) &&
					(activityInput2.dataset.dayAndTime) === 
					(activityInput1.dataset.dayAndTime) ){
							activityInput2.disabled = true;
							activityLabel2.classList.add('disabled');
						}
			}
		}
	}

	// Print cost
	const costParagraph = document.getElementById('activities-cost');
	costParagraph.textContent = `Total: $${totalCost}`;

	// Validation
	if(totalCost===0) {
		activityFieldset.classList.remove('valid');
		activityFieldset.classList.add('not-valid');
		activityFieldset.lastElementChild.style.display='inline';
		return;
	}
	activityFieldset.classList.remove('not-valid');
	activityFieldset.classList.add('valid');
	activityFieldset.lastElementChild.style.display='none';
})



/** Change in payment select element
 * @event paySelectChange */

/** 
 * 1. Hide all payment containers
 * 2. Show selected type
 * - Select Option --- paySelect.value/pay[i].id --- i --- Type
 * - 1 --------------- credit-card ----------------- 0 --- Credit Card
 * - 2 --------------- paypal ---------------------- 1 --- Paypal
 * - 3 --------------- bitcoin --------------------- 2 --- Bitcoin
 * @name paySelectListener
 * @function
 * @param {Event} paySelectChange
 * @listens paySelectChange */
paySelect.addEventListener('change', (e) => {
	/** Value of payment select option
	 * @type {String} paymentType */
	const paymentType = e.currentTarget.value;

	for(i=0 ; i<3; i++) { 
		pay[i].hidden = true; // Initialize: Hide all

		if( paymentType === pay[i].id ) { 
			pay[i].hidden = false; 
		}
	}
})



/** Generalized 'input'-Listener Callback
 * 1. If input is not valid: Flag parent container as invalid
 * 2. [NOTE]: Show hints, Modify messages for specific email errors
 * 3. Else: hide hints, reset messages, reset flags
 * @function createListenerCB
 * @param {callback} validatorCB - {bool} = validatorCB({string}) */
function createListenerCB(validatorCB) {
	return e => {
		const text = e.target.value;
		/** Hint-p shown for invalid 'input'
		 * @type {HTMLParagraphElement} hint */
		const hint = e.target.parentElement.lastElementChild;
		const inputContainer = e.target.parentElement;

		// Callback for input validity
		const valid = validatorCB(text);

		// If input not valid, flag containers as invalid, show
		if(!valid) { 
			inputContainer.classList.remove('valid');
			inputContainer.classList.add('not-valid');

			// Conditional Error Message: Email
			if(emailError.blank) 	{ 
				hint.textContent = blankMsg; 
				delete emailError.blank;
			}
			if(emailError.badFormat) { 
				hint.textContent = formatMsg;
				delete emailError.badFormat;
			}

			// Show hint-p
			hint.style.display = 'inline';

			return; 
		}

		// Hide hint-p. Reset validity.
		hint.style.display = 'none';
		inputContainer.classList.remove('not-valid');
		inputContainer.classList.add('valid');
		
		// Reset email entry hint message
		if(e.target.id==='email') { hint.textContent = formatMsg; }
	}
}



/** User input for name text-input element
 * @event nameEInput */

/** Name text-input event listener
 * @name nameInputListener
 * @function
 * @param {Event} nameEInput
 * @listens nameEInput */
nameInput.addEventListener("input", createListenerCB(isValidName));

/** User input for email-input element
 * @event emailEInput */

/** Email-input event listener
 * @name emailInputListener
 * @function
 * @param {Event} emailEInput
 * @listens emailEInput */
emailInput.addEventListener	( "input", createListenerCB(isValidEmail) );

/** User input for credit card text-input element
 * @event ccEInput */

/** Credit card text-input event listener
 * @name ccInputListener
 * @function
 * @param {Event} ccEInput
 * @listens ccEInput */
ccInput.addEventListener		( "input", createListenerCB(isValidCc) );

/** User input for zip code text-input element
 * @event zipEInput */

/** Credit card text-input event listener
 * @name zipInputListener
 * @function
 * @param {Event} zipEInput
 * @listens zipEInput */
zipInput.addEventListener	( "input", createListenerCB(isValidZip) );

/** User input for CVV text-input element
 * @event cvvEInput */

/** Credit card text-input event listener
 * @name cvvInputListener
 * @function
 * @param {Event} cvvEInput
 * @listens cvvEInput */
cvvInput.addEventListener	( "input", createListenerCB(isValidCvv) );



// Validator callback function declarations

/** Name validator: Argument for createListenerCB()
 * @function isValidName
 * @param {string} name 
 * @returns {bool}
 */
function isValidName( name ) { 
	const re = /[ \t]+/g;

	// Reformatting
	name = name.trim();
	name = name.replace(re, ' ');

	return /^[A-Za-z ]+$/.test( name );
}

/** Email validator: Argument for createListenerCB()
 * @function isValidEmail
 * @param {string} email
 * @returns {bool}
 */
 function isValidEmail( email ) 	{ 
	if( email === '' ) { 
		emailError['blank'] = true; 
		delete emailError.badFormat;
		return false;
	}
	if( !/^\w+@\w+\b.com\b$/i.test(email) ) { 
		emailError['badFormat']=true; 
		delete emailError.blank;
		return false;
	}
	return true; /*/^\w+@\w+\b.com\b$/i.test(email);*/
}

/**
 * Credit card validator: Argument for createListenerCB()
 * @function isValidCc
 * @param {string} cc 
 * @returns {bool}
 */
function isValidCc( cc )			{ return /^\d{13,16}$/.test(cc); }

/** Zip code validator: Argument for createListenerCB()
 * @function isValidZip
 * @param {string} zip
 * @returns {bool}
 */
function isValidZip( zip )		{ return /^\d{5}$/.test(zip); }

/** CVV validator: Argument for createListenerCB()
 * @function isValidCvv
 * @param {string} cvv
 * @returns {bool}
 */
function isValidCvv( cvv )		{ return /^\d{3}$/.test(cvv); }



/** User submit event for form element
 * @event formSubmit */

/** Form submit event listener: Verify valid form completion
 * @name formSubmitListener
 * @function
 * @param {Event} formSubmit
 * @listens formSubmit */
form.addEventListener('submit', 
	(e) => {
	var fail = false;

	// 1. Call text-input validators
	// 2. If failure
	//		a. Execute failure protocol failure()
	// 		b. Focus on invalid input
	// 		c. Set fail flag
	if(!isValidName( nameInput.value )) 	{ 
		failure(e, nameInput); 
		if(fail===false) { nameInput.focus(); }
		fail = true;
	}
	if(!isValidEmail( emailInput.value )) 	{ 
		failure(e, emailInput); 
		if(fail===false) { emailInput.focus(); }	
		fail = true;
	}
	
	// Special validator
	if(!isValidActivitySelection()) { 
		failure(e, activityDiv);
		if(fail===false) { activityDiv.lastElementChild.firstElementChild.focus(); }
		fail = true;
	}

	// Only validate credit card text-inputs if CC payment option selected
	if( pay[0].hidden===false) { 
		if(!isValidCc(ccInput.value))		{ 
			failure(e, ccInput);
			if(fail===false) { ccInput.focus(); }
			fail = true;
		}
		if(!isValidZip(zipInput.value))	{ 
			failure(e, zipInput);
			if(fail===false) { zipInput.focus(); }
			fail = true; 
		}
		if(!isValidCvv(cvvInput.value))	{ 
			failure(e, cvvInput);
			if(fail===false) { cvvInput.focus(); }
			fail = true; 
		}
	}
})



/** Submit Event Failure Protocol
 * @function failure
 * @param {formSubmit} e - Prevent default submission behavior
 * @param {HTMLInputElement} elem  - input that failed validator test  */
function failure(e, elem) {
	/** @type {HTMLInputElement} - Input that failed validator test */
	const inputContainer = elem.parentElement;
	/** @type {HTMLParagraphElement} hint - Holds invalid 'input' message */
	const hint = inputContainer.lastElementChild;
	
	inputContainer.classList.remove('valid');
	inputContainer.classList.add('not-valid');
	
	// Conditional Email Error Message
	if(elem.id==='email') {
		if(emailError.blank) { 
			hint.textContent = blankMsg; 
			delete emailError.blank; 
		}
		if(emailError.badFormat) { 
			hint.textContent = formatMsg;
			delete emailError.badFormat;
		}
	}

	hint.style.display = 'inline';
	e.preventDefault();
}



/** Verify that at least 1 activity is selected
 * @function isValidActivitySelection
 * @returns {bool} */
function isValidActivitySelection() {
	var valid=false;
	/** @type {HTMLInputElement} activityInput - Activity checkbox-input */
	var activityInput;
	/** @type {HTMLLabelElement} activityLabel - activityInput container */
	var activityLabel;

	for(activityLabel of activityCollection) {
		/** @type {HTMLInputElement} activityInput - checkbox-input */
		activityInput=activityLabel.firstElementChild;
		if(activityInput.checked) { valid = true; }
	}

	return valid;
}



// Accessibility: Use 'focus' class label to highlight currently focused checkbox-input
for(activityLabel of activityCollection ) {
	const activityInput = activityLabel.firstElementChild;

	activityInput.addEventListener('focus', (e) => {
		e.target.parentElement.classList.add('focus');
	})

	activityInput.addEventListener('blur', (e) => {
		e.target.parentElement.classList.remove('focus');
	})
}