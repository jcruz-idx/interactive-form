// (at)ts-check

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

/** Track email-input error-type 
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
 * @type {HTMLSelectElement} titleSelect */
const titleSelect = document.getElementById('title');

/** Color select
 * @type {HTMLSelectElement} colorSelect */
const colorSelect = document.getElementById('color');

/** T-Shirt design select
 * @type {HTMLSelectElement} designSelect */
const designSelect = document.getElementById('design');

/** Activity fieldset
 * @type {HTMLFieldSetElement} activityFieldSet */
const activityFieldset = document.getElementById('activities');

/** Activity container-div: Contains all activity elements
 * @type {HTMLDivElement} activityDiv */
const activityDiv = document.getElementById('activities-box');

/** Each label holds one activity, i.e. all elements associated with one activity, notably, the checkbox-inputs
 * @type {HTMLCollection<HTMLLabelElement>} activityCollection */
const activityCollection = activityDiv.children;

/** Payment select
 * @type {HTMLSelectElement} paySelect */
const paySelect = document.getElementById('payment');

/** Form
 * @type {HTMLFormElement} form */
const form = document.querySelector('form');

// Text-input elements for validation
/////////////////////////////////////////////////////////////////////////////////////////////////100

/** Text-input: Name
 * @type {HTMLInputElement} nameInput */
const nameInput = document.getElementById('name');

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
 * Job: Listen for change-in job-title select-input 
 *  
 * @function
 * @type {HTMLSelectElement} titleSelect - Change event target.  Sets job title.
 * @type {HTMLInputElement} otherJobInput - Show/hide text-input per titleSelect
 * @param {titleSelect~event:change} e - Change event from titleSelect
 * @listens titleSelect~event:change
 */
titleSelect.addEventListener('change', 
	(e) => {
		const selectedTitle = e.currentTarget.value;

		if( selectedTitle === 'other' ) { 
			otherJobInput.hidden = false;
			otherJobInput.focus();
			return; 
		}
		otherJobInput.hidden = true;
	})



/**
 * @description - T-Shirt Design: Listen for change-in <select id='design'>
 * 
 * @type {HTMLSelectElement} designSelect 	- Change event target
 * @property {string} designSelect.value	- 'js puns', 'heart js'
 * @event event:change
 */
designSelect.addEventListener('change', 
	/**
	 * @description - If designSelect option set:
	 * 1. Change <select id='color'> displayed message (option[0].textContent)
	 * 2. Focus on <select id='color'>
	 * 3. Enable color options available for selected t-shirt design
	 * 
	 * @method
	 * @type {HTMLSelectElement} colorSelect - Show/hide options per designSelect
	 * @type {string} selectedDesign - 'js puns', 'heart js'
	 * @param {module:designSelect~event:change} e - Change event from designSelect
	 * @listens module:designSelect~event:change
	 */
	(e) => {
		const selectedDesign = e.currentTarget.value; // 'js puns' or 'heart js'

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


/**
 * @description - Activities: Listen for change-in activity-<input type='checkbox'>.  In
 * 
 * @type {HTMLFieldSetElement} activityFieldset - Change event target; Activity section container
 * @event event:change
 */
activityFieldset.addEventListener('change', 
	/** 
	 * @description - If change (check or uncheck) occurs on an activityInput:
	 * 1. Initialize: Reset cost to $0. Enable all checkbox-inputs.
	 * 2. If one activityInput is checked:
	 * 		a. Add price to total cost
	 * 		b. Cross-reference against other activities; disable time-conflicting ones
	 * 
	 * @method
	 * @type {HTMLInputElement} activityInput - Activity checkbox
	 * @type {HTMLLabelElement} activityLabel - activityInput container
	 * @type {HTMLCollection} activityCollection - activityLabel collection
	 * @param {module:activityFieldset~event:change} e - Change event from activityFieldset
	 * @listens module:activityFieldset~event:change
	 */
	(e) => {
		// Initialize variables
		var activityLabel1, activityLabel2, activityInput1, activityInput2;
		var totalCost = 0;
		//const activityFieldset = e.currentTarget;
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



/**
 * @description - Payments: Listen for change-in <select id='payment'>.
 * 	Select Index	paySelect.value/pay[i].id	i	Type
 * 	1			credit-card				0	Credit Card
 * 	2			paypal					1	Paypal
 * 	3			bitcoin					2	Bitcoin
 * 
 * @type {HTMLSelectElement} paySelect - Change event target
 * @event event:change
 */
paySelect.addEventListener('change', 
	/** 
	 * @description - Initialize: Hide all payment containers
	 * 
	 * @method
	 * @type {HTMLDivElement} pay[i] - <div> container for payment option
	 * @property {string} pay[i].id - <div> element's id string
	 * @type {string} paymentType - Value of option selected with paySelect (paySelect.value)
	 * @param {module:paySelect~event:change} e - Change event from paySelect
	 * @listens module:paySelect~event:change
	 */
	(e) => {
	const paymentType = e.currentTarget.value;

	for(i=0 ; i<3; i++) { 
		pay[i].hidden = true; // Initialize: Hide all

		if( paymentType === pay[i].id ) { 
			pay[i].hidden = false; 
		}
	}
})



/**
 * @description - Real-time Error Messages
 * Generalized Creator for 'input'-Listeners
 * If input-event on <input type='text> is not valid:
 * 1. Flag containers as invalid
 * 2. Show hints
 * 		a. Modify messages for specific email errors
 * Else hide hints, reset messages, reset flags
 * 
 * @function createListener
 * @param {callback} validator - {bool} = validator({string})
 * @type {event:input} e - keyboard 'input' event 
 * @property {HTMLInputElement} e.target - target <input type='text'> element
 * @property {string} e.target.value - target element's text value
 * @type {string} text - See e.target.value
 * @type {bool} valid
 * @type {HTMLParagraphElement} hint - Hint <p> shown for invalid 'input'
 * @type {HTMLLabelElement} inputContainer - parent of input element
 * @event event:input
 */
function createListener( validator ) {
	return e => {
		const text = e.target.value;
		const hint = e.target.parentElement.lastElementChild;
		const inputContainer = e.target.parentElement;

		// Callback for input validity
		const valid = validator(text);

		// If input not valid, flag containers as invalid, show
		if(!valid) { 
			inputContainer.classList.remove('valid');
			inputContainer.classList.add('not-valid');

			/**
			 * @description Conditional Error Message - Email
			 * @type {object} emailError - Global variable. Tracks email-<input> error-type.
			 * @property {bool} emailError.blank
			 * @property {bool} emailError.badFormat
			 * @type {string} blankMsg - Global variable. Blank error-message.
			 * @type {string} formatMsg - Global variable. Bad-format error-message.
			 */
			if(emailError.blank) 	{ 
				hint.textContent = blankMsg; 
				delete emailError.blank;
			}
			if(emailError.badFormat) { 
				hint.textContent = formatMsg;
				delete emailError.badFormat;
			}

			// Show hint-<p>
			hint.style.display = 'inline';

			return; 
		}

		// Hide hint-<p>. Reset validity.
		hint.style.display = 'none';
		inputContainer.classList.remove('not-valid');
		inputContainer.classList.add('valid');
		
		// Reset hint message
		hint.textContent = formatMsg;
	}
}



/** 
 * @description Attach Listeners to <input type='text'>
 * @type {HTMLInputElement} _Input
 */
nameInput.addEventListener	( "input", createListener(isValidName) );
emailInput.addEventListener	( "input", createListener(isValidEmail) );
ccInput.addEventListener		( "input", createListener(isValidCc) );
zipInput.addEventListener	( "input", createListener(isValidZip) );
cvvInput.addEventListener	( "input", createListener(isValidCvv) );



// Validator function declarations
/**
 * @description Validator - argument for generalized createListener() function
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

/**
 * @description Validator - argument for generalized createListener() function
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
 * @description Validator - argument for generalized createListener() function
 * @function isValidCc
 * @param {string} cc 
 * @returns {bool}
 */
function isValidCc( cc )			{ return /^\d{13,16}$/.test(cc); }

/**
 * @description Validator - argument for generalized createListener() function
 * @function isValidZip
 * @param {string} zip
 * @returns {bool}
 */
function isValidZip( zip )		{ return /^\d{5}$/.test(zip); }

/**
 * @description Validator - argument for generalized createListener() function
 * @function isValidCvv
 * @param {string} cvv
 * @returns {bool}
 */
function isValidCvv( cvv )		{ return /^\d{3}$/.test(cvv); }



/**
 * @description Form Submission: Validate all inputs
 *
 * @module
 * @type {HTMLFormElement} form - 'submit' event target
 * @event event:submit
 */
form.addEventListener('submit', 
	/** 
	 * @description Verify valid form completion
	 * 
	 * @method
	 * @type {bool} fail
	 * @param {module:form~event:submit} e - Submit event from form
	 * @listens module:form~event:submit
	 */
	(e) => {
	var fail = false;

	// 1. Call <input> validators
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

	// Only validate credit card text-<inputs> if CC payment option selected
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



/**
 * @description Submit Event Failure Protocol
 * @param {event:submit} e - Prevent default submission behavior
 * @param {HTMLInputElement} elem  - <input> that failed validator test
 * @type {HTMLElement} inputContainer - Parent of failed elem
 * @type {HTMLParagraphElement} hint - <p> holding invalid 'input' message
 */
function failure(e, elem) {
	const inputContainer = elem.parentElement;
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



/**
 * @description Verify that at least 1 activity is selected
 * @function isValidActivitySelection
 * @type {HTMLInputElement} activityInput - Activity <input type='checkbox'>
 * @type {HTMLLabelElement} activityLabel - activityInput container
 * @type {HTMLCollection} activityCollection - activityLabel collection
 * @returns {bool}
 */
function isValidActivitySelection() {
	var valid=false;
	var activityInput;
	var activityLabel;

	for(activityLabel of activityCollection) {
		activityInput=activityLabel.firstElementChild;
		if(activityInput.checked) { valid = true; }
	}

	return valid;
}



/**
 * @description Accessibility - Attach focus, blur listeners to each activity-<input type='checkbox'>. Add, remove focus to parent classlist.
 * 
 */
for(activityLabel of activityCollection ) {
	const activityInput = activityLabel.firstElementChild;

	activityInput.addEventListener('focus', (e) => {
		e.target.parentElement.classList.add('focus');
	})

	activityInput.addEventListener('blur', (e) => {
		e.target.parentElement.classList.remove('focus');
	})
}