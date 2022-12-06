/*
//	Project 3: Interactive Form
//	Team Treehouse
//	Joel Cruz
//	script.js
//
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>100
Version.: (A)
Note....:	
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// Variables
const nameText 	= document.getElementById('name');
const otherJobText	= document.getElementById('other-job-role');
const titleSelect	= document.getElementById('title');
const colorSelect	= document.getElementById('color');
const designSelect	= document.getElementById('design');



// Default
nameText.focus();
otherJobText.hidden = true;



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
	const selectedDesign = e.currentTarget.value;

	// Change in design-selection -> focus on color selection, new message
	colorSelect.disabled = false;
	colorSelect.focus();
	colorSelect.selectedIndex = 0;
	colorSelect.options[0].textContent = 'Select a color';

	if( selectedDesign === 'js puns' || selectedDesign === 'heart js' ) {
		for( const x of colorSelect.options ) {
			if( x.dataset.theme === `${selectedDesign}` ) { x.hidden = false; } 
			else { x.hidden = true; }
		}
	}
})