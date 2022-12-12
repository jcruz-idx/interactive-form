<br/>

# Interactive Form
- Team Treehouse
- Joel Cruz
- Version 1.0.0
- Submit for grading

# Noteable

## 1. Real-Time Error Messaging
Real-time error notifications are shown for the following:
- Name text-input
- Email input
- Credit-card text-input
- Zip code text-input
- CVV text-input

Create 'input' listener for specified input-elements (above)
- Example: `nameInput.addEventListener("input", createListenerCB(isValidName))`

Use a universal callback function, `createListenerCB`, with a callback function parameter, `validatorCB`, that returns `bool` for use in `.addEventListener(event, callback)`
- See: `createListenerCB(validatorCB)`

validatorCB - Callback functions that check for valid input. Return `bool`.
- Example: `isValidName(name)`

## 2. Contitional Error Messaging
Email input shows conditional error messaging for two different error-types:
1. Empty field
2. Bad email formatting

Check happens in `createListenerCB(validatorCB)`

<br/>
<br/>
<br/>
<br/>
<br/>

# Auto-generated Markdown
The markdown below was automatically generated using JSDoc 3, and jsdoc-to-markdown.

## Members

<dl>
<dt><a href="#i">i</a> : <code>Number</code></dt>
<dd><p>Integer index</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#emailError">emailError</a> : <code>Object</code></dt>
<dd><p>Track email-input error-type using blankMsg, formatMsg strings</p>
</dd>
<dt><a href="#blankMsg">blankMsg</a> : <code>String</code></dt>
<dd><p>Error message for email-input error: blank entry</p>
</dd>
<dt><a href="#formatMsg">formatMsg</a> : <code>String</code></dt>
<dd><p>Error message for email-input error: bad format</p>
</dd>
<dt><a href="#otherJobInput">otherJobInput</a> : <code>HTMLInputElement</code></dt>
<dd><p>Text-input: Optional, custom job title input</p>
</dd>
<dt><a href="#titleSelect">titleSelect</a> : <code>HTMLSelectElement</code></dt>
<dd><p>Job title select</p>
</dd>
<dt><a href="#colorSelect">colorSelect</a> : <code>HTMLSelectElement</code></dt>
<dd><p>Color select</p>
</dd>
<dt><a href="#designSelect">designSelect</a> : <code>HTMLSelectElement</code></dt>
<dd><p>T-Shirt design select</p>
</dd>
<dt><a href="#activityFieldset">activityFieldset</a> : <code>HTMLFieldSetElement</code></dt>
<dd><p>Activity fieldset</p>
</dd>
<dt><a href="#activityDiv">activityDiv</a> : <code>HTMLDivElement</code></dt>
<dd><p>Activity container-div: Contains all activity elements</p>
</dd>
<dt><a href="#activityCollection">activityCollection</a> : <code>HTMLCollection.&lt;HTMLLabelElement&gt;</code></dt>
<dd><p>Each label holds one activity, i.e. all elements associated with one activity, notably, the checkbox-inputs</p>
</dd>
<dt><a href="#paySelect">paySelect</a> : <code>HTMLSelectElement</code></dt>
<dd><p>Payment select</p>
</dd>
<dt><a href="#form">form</a> : <code>HTMLFormElement</code></dt>
<dd><p>Form</p>
</dd>
<dt><a href="#nameInput">nameInput</a> : <code>HTMLInputElement</code></dt>
<dd><p>Text-input: Name</p>
</dd>
<dt><a href="#emailInput">emailInput</a> : <code>HTMLInputElement</code></dt>
<dd><p>Email-input</p>
</dd>
<dt><a href="#ccInput">ccInput</a> : <code>HTMLInputElement</code></dt>
<dd><p>Text-input: Credit card</p>
</dd>
<dt><a href="#zipInput">zipInput</a> : <code>HTMLInputElement</code></dt>
<dd><p>Text-input: Zip code</p>
</dd>
<dt><a href="#cvvInput">cvvInput</a> : <code>HTMLInputElement</code></dt>
<dd><p>Text-input: CVV</p>
</dd>
<dt><a href="#pay">pay</a> : <code>Array.&lt;HTMLDivElement&gt;</code></dt>
<dd><p>Each container-div holds one payment option, i.e. all elements associated with one payment option. (index. option):</p>
<ol>
<li>Credit Card</li>
<li>Paypal</li>
<li>Bitcoin</li>
</ol>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#titleSelectListener">titleSelectListener(titleSelectChange)</a></dt>
<dd><p>If &#39;other&#39; job-title is selected, show and focus() on &#39;other-job-role&#39; text-input element, else keep it hidden</p>
</dd>
<dt><a href="#designSelectListener">designSelectListener(designSelectChange)</a></dt>
<dd><p>If a design select option is set:</p>
<ol>
<li>Change color-select dispalyed message (option[0].textContent) to &quot;Select color:&quot;</li>
<li>Focus() on color-select</li>
<li>Enable color options available for selected t-shirt design</li>
</ol>
</dd>
<dt><a href="#activityListener">activityListener(activityChange)</a></dt>
<dd><p>If change (check or uncheck) occurs on any activity checkbox-input:</p>
<ol>
<li>Re-initialize: (1) Reset total cost to $0, (2) Enable all checkbox-inputs</li>
<li>Find a checked input: (1) Add price to total cost, (2) Disable other activities if time-conflicting</li>
</ol>
</dd>
<dt><a href="#paySelectListener">paySelectListener(paySelectChange)</a></dt>
<dd><ol>
<li>Hide all payment containers</li>
<li>Show selected type</li>
</ol>
<ul>
<li>Select Option --- paySelect.value/pay[i].id --- i --- Type</li>
<li>1 --------------- credit-card ----------------- 0 --- Credit Card</li>
<li>2 --------------- paypal ---------------------- 1 --- Paypal</li>
<li>3 --------------- bitcoin --------------------- 2 --- Bitcoin</li>
</ul>
</dd>
<dt><a href="#createListener">createListener(validator)</a></dt>
<dd><p>Generalized &#39;input&#39;-Listener Callback</p>
<ol>
<li>If input is not valid: Flag parent container as invalid</li>
<li>[NOTE]: Show hints, Modify messages for specific email errors</li>
<li>Else: hide hints, reset messages, reset flags</li>
</ol>
</dd>
<dt><a href="#nameInputListener">nameInputListener(nameEInput)</a></dt>
<dd><p>Name text-input event listener</p>
</dd>
<dt><a href="#emailInputListener">emailInputListener(emailEInput)</a></dt>
<dd><p>Email-input event listener</p>
</dd>
<dt><a href="#ccInputListener">ccInputListener(ccEInput)</a></dt>
<dd><p>Credit card text-input event listener</p>
</dd>
<dt><a href="#zipInputListener">zipInputListener(zipEInput)</a></dt>
<dd><p>Credit card text-input event listener</p>
</dd>
<dt><a href="#cvvInputListener">cvvInputListener(cvvEInput)</a></dt>
<dd><p>Credit card text-input event listener</p>
</dd>
<dt><a href="#isValidName">isValidName(name)</a> ⇒ <code>bool</code></dt>
<dd><p>Name validator: Argument for createListener()</p>
</dd>
<dt><a href="#isValidEmail">isValidEmail(email)</a> ⇒ <code>bool</code></dt>
<dd><p>Email validator: Argument for createListener()</p>
</dd>
<dt><a href="#isValidCc">isValidCc(cc)</a> ⇒ <code>bool</code></dt>
<dd><p>Credit card validator: Argument for createListener()</p>
</dd>
<dt><a href="#isValidZip">isValidZip(zip)</a> ⇒ <code>bool</code></dt>
<dd><p>Zip code validator: Argument for createListener()</p>
</dd>
<dt><a href="#isValidCvv">isValidCvv(cvv)</a> ⇒ <code>bool</code></dt>
<dd><p>CVV validator: Argument for createListener()</p>
</dd>
<dt><a href="#formSubmitListener">formSubmitListener(formSubmit)</a></dt>
<dd><p>Form submit event listener: Verify valid form completion</p>
</dd>
<dt><a href="#failure">failure(e, elem)</a></dt>
<dd><p>Submit Event Failure Protocol</p>
</dd>
<dt><a href="#isValidActivitySelection">isValidActivitySelection()</a> ⇒ <code>bool</code></dt>
<dd><p>Verify that at least 1 activity is selected</p>
</dd>
</dl>

## Events

<dl>
<dt><a href="#event_titleSelectChange">"titleSelectChange"</a></dt>
<dd><p>Change in title select element</p>
</dd>
<dt><a href="#event_designSelectChange">"designSelectChange"</a></dt>
<dd><p>Change in design select element</p>
</dd>
<dt><a href="#event_activityChange">"activityChange"</a></dt>
<dd><p>Change in activity fieldset</p>
</dd>
<dt><a href="#event_paySelectChange">"paySelectChange"</a></dt>
<dd><p>Change in payment select element</p>
</dd>
<dt><a href="#event_nameEInput">"nameEInput"</a></dt>
<dd><p>User input for name text-input element</p>
</dd>
<dt><a href="#event_emailEInput">"emailEInput"</a></dt>
<dd><p>User input for email-input element</p>
</dd>
<dt><a href="#event_ccEInput">"ccEInput"</a></dt>
<dd><p>User input for credit card text-input element</p>
</dd>
<dt><a href="#event_zipEInput">"zipEInput"</a></dt>
<dd><p>User input for zip code text-input element</p>
</dd>
<dt><a href="#event_cvvEInput">"cvvEInput"</a></dt>
<dd><p>User input for CVV text-input element</p>
</dd>
<dt><a href="#event_formSubmit">"formSubmit"</a></dt>
<dd><p>User submit event for form element</p>
</dd>
</dl>

<a name="i"></a>

## i : <code>Number</code>
Integer index

**Kind**: global variable  
<a name="emailError"></a>

## emailError : <code>Object</code>
Track email-input error-type using blankMsg, formatMsg strings

**Kind**: global constant  
<a name="blankMsg"></a>

## blankMsg : <code>String</code>
Error message for email-input error: blank entry

**Kind**: global constant  
<a name="formatMsg"></a>

## formatMsg : <code>String</code>
Error message for email-input error: bad format

**Kind**: global constant  
<a name="otherJobInput"></a>

## otherJobInput : <code>HTMLInputElement</code>
Text-input: Optional, custom job title input

**Kind**: global constant  
<a name="titleSelect"></a>

## titleSelect : <code>HTMLSelectElement</code>
Job title select

**Kind**: global constant  
**Emits**: [<code>titleSelectChange</code>](#event_titleSelectChange)  
<a name="colorSelect"></a>

## colorSelect : <code>HTMLSelectElement</code>
Color select

**Kind**: global constant  
<a name="designSelect"></a>

## designSelect : <code>HTMLSelectElement</code>
T-Shirt design select

**Kind**: global constant  
**Emits**: [<code>designSelectChange</code>](#event_designSelectChange)  
<a name="activityFieldset"></a>

## activityFieldset : <code>HTMLFieldSetElement</code>
Activity fieldset

**Kind**: global constant  
**Emits**: [<code>activityChange</code>](#event_activityChange)  
<a name="activityDiv"></a>

## activityDiv : <code>HTMLDivElement</code>
Activity container-div: Contains all activity elements

**Kind**: global constant  
<a name="activityCollection"></a>

## activityCollection : <code>HTMLCollection.&lt;HTMLLabelElement&gt;</code>
Each label holds one activity, i.e. all elements associated with one activity, notably, the checkbox-inputs

**Kind**: global constant  
<a name="paySelect"></a>

## paySelect : <code>HTMLSelectElement</code>
Payment select

**Kind**: global constant  
**Emits**: [<code>paySelectChange</code>](#event_paySelectChange)  
<a name="form"></a>

## form : <code>HTMLFormElement</code>
Form

**Kind**: global constant  
<a name="nameInput"></a>

## nameInput : <code>HTMLInputElement</code>
Text-input: Name

**Kind**: global constant  
<a name="emailInput"></a>

## emailInput : <code>HTMLInputElement</code>
Email-input

**Kind**: global constant  
<a name="ccInput"></a>

## ccInput : <code>HTMLInputElement</code>
Text-input: Credit card

**Kind**: global constant  
<a name="zipInput"></a>

## zipInput : <code>HTMLInputElement</code>
Text-input: Zip code

**Kind**: global constant  
<a name="cvvInput"></a>

## cvvInput : <code>HTMLInputElement</code>
Text-input: CVV

**Kind**: global constant  
<a name="pay"></a>

## pay : <code>Array.&lt;HTMLDivElement&gt;</code>
Each container-div holds one payment option, i.e. all elements associated with one payment option. (index. option):
1. Credit Card
2. Paypal
3. Bitcoin

**Kind**: global constant  
<a name="titleSelectListener"></a>

## titleSelectListener(titleSelectChange)
If 'other' job-title is selected, show and focus() on 'other-job-role' text-input element, else keep it hidden

**Kind**: global function  

| Param | Type |
| --- | --- |
| titleSelectChange | <code>Event</code> | 

<a name="designSelectListener"></a>

## designSelectListener(designSelectChange)
If a design select option is set:
1. Change color-select dispalyed message (option[0].textContent) to "Select color:"
2. Focus() on color-select
3. Enable color options available for selected t-shirt design

**Kind**: global function  

| Param | Type |
| --- | --- |
| designSelectChange | <code>Event</code> | 

<a name="activityListener"></a>

## activityListener(activityChange)
If change (check or uncheck) occurs on any activity checkbox-input:
1. Re-initialize: (1) Reset total cost to $0, (2) Enable all checkbox-inputs
2. Find a checked input: (1) Add price to total cost, (2) Disable other activities if time-conflicting

**Kind**: global function  

| Param | Type |
| --- | --- |
| activityChange | <code>Event</code> | 

<a name="paySelectListener"></a>

## paySelectListener(paySelectChange)
1. Hide all payment containers
2. Show selected type
- Select Option --- paySelect.value/pay[i].id --- i --- Type
- 1 --------------- credit-card ----------------- 0 --- Credit Card
- 2 --------------- paypal ---------------------- 1 --- Paypal
- 3 --------------- bitcoin --------------------- 2 --- Bitcoin

**Kind**: global function  

| Param | Type |
| --- | --- |
| paySelectChange | <code>Event</code> | 

<a name="createListener"></a>

## createListener(validator)
Generalized 'input'-Listener Callback
1. If input is not valid: Flag parent container as invalid
2. [NOTE]: Show hints, Modify messages for specific email errors
3. Else: hide hints, reset messages, reset flags

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| validator | <code>callback</code> | {bool} = validator({string}) |

<a name="nameInputListener"></a>

## nameInputListener(nameEInput)
Name text-input event listener

**Kind**: global function  

| Param | Type |
| --- | --- |
| nameEInput | <code>Event</code> | 

<a name="emailInputListener"></a>

## emailInputListener(emailEInput)
Email-input event listener

**Kind**: global function  

| Param | Type |
| --- | --- |
| emailEInput | <code>Event</code> | 

<a name="ccInputListener"></a>

## ccInputListener(ccEInput)
Credit card text-input event listener

**Kind**: global function  

| Param | Type |
| --- | --- |
| ccEInput | <code>Event</code> | 

<a name="zipInputListener"></a>

## zipInputListener(zipEInput)
Credit card text-input event listener

**Kind**: global function  

| Param | Type |
| --- | --- |
| zipEInput | <code>Event</code> | 

<a name="cvvInputListener"></a>

## cvvInputListener(cvvEInput)
Credit card text-input event listener

**Kind**: global function  

| Param | Type |
| --- | --- |
| cvvEInput | <code>Event</code> | 

<a name="isValidName"></a>

## isValidName(name) ⇒ <code>bool</code>
Name validator: Argument for createListener()

**Kind**: global function  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="isValidEmail"></a>

## isValidEmail(email) ⇒ <code>bool</code>
Email validator: Argument for createListener()

**Kind**: global function  

| Param | Type |
| --- | --- |
| email | <code>string</code> | 

<a name="isValidCc"></a>

## isValidCc(cc) ⇒ <code>bool</code>
Credit card validator: Argument for createListener()

**Kind**: global function  

| Param | Type |
| --- | --- |
| cc | <code>string</code> | 

<a name="isValidZip"></a>

## isValidZip(zip) ⇒ <code>bool</code>
Zip code validator: Argument for createListener()

**Kind**: global function  

| Param | Type |
| --- | --- |
| zip | <code>string</code> | 

<a name="isValidCvv"></a>

## isValidCvv(cvv) ⇒ <code>bool</code>
CVV validator: Argument for createListener()

**Kind**: global function  

| Param | Type |
| --- | --- |
| cvv | <code>string</code> | 

<a name="formSubmitListener"></a>

## formSubmitListener(formSubmit)
Form submit event listener: Verify valid form completion

**Kind**: global function  

| Param | Type |
| --- | --- |
| formSubmit | <code>Event</code> | 

<a name="failure"></a>

## failure(e, elem)
Submit Event Failure Protocol

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>formSubmit</code> | Prevent default submission behavior |
| elem | <code>HTMLInputElement</code> | input that failed validator test |


* [failure(e, elem)](#failure)
    * [~inputContainer](#failure..inputContainer) : <code>HTMLInputElement</code>
    * [~hint](#failure..hint) : <code>HTMLParagraphElement</code>

<a name="failure..inputContainer"></a>

### failure~inputContainer : <code>HTMLInputElement</code>
- Input that failed validator test

**Kind**: inner constant of [<code>failure</code>](#failure)  
<a name="failure..hint"></a>

### failure~hint : <code>HTMLParagraphElement</code>
hint - Holds invalid 'input' message

**Kind**: inner constant of [<code>failure</code>](#failure)  
<a name="isValidActivitySelection"></a>

## isValidActivitySelection() ⇒ <code>bool</code>
Verify that at least 1 activity is selected

**Kind**: global function  

* [isValidActivitySelection()](#isValidActivitySelection) ⇒ <code>bool</code>
    * [~activityInput](#isValidActivitySelection..activityInput) : <code>HTMLInputElement</code>
    * [~activityLabel](#isValidActivitySelection..activityLabel) : <code>HTMLLabelElement</code>
    * [~activityInput](#isValidActivitySelection..activityInput) : <code>HTMLInputElement</code>

<a name="isValidActivitySelection..activityInput"></a>

### isValidActivitySelection~activityInput : <code>HTMLInputElement</code>
activityInput - Activity checkbox-input

**Kind**: inner property of [<code>isValidActivitySelection</code>](#isValidActivitySelection)  
<a name="isValidActivitySelection..activityLabel"></a>

### isValidActivitySelection~activityLabel : <code>HTMLLabelElement</code>
activityLabel - activityInput container

**Kind**: inner property of [<code>isValidActivitySelection</code>](#isValidActivitySelection)  
<a name="isValidActivitySelection..activityInput"></a>

### isValidActivitySelection~activityInput : <code>HTMLInputElement</code>
activityInput - checkbox-input

**Kind**: inner property of [<code>isValidActivitySelection</code>](#isValidActivitySelection)  
<a name="event_titleSelectChange"></a>

## "titleSelectChange"
Change in title select element

**Kind**: event emitted  
<a name="event_designSelectChange"></a>

## "designSelectChange"
Change in design select element

**Kind**: event emitted  
<a name="event_activityChange"></a>

## "activityChange"
Change in activity fieldset

**Kind**: event emitted  
<a name="event_paySelectChange"></a>

## "paySelectChange"
Change in payment select element

**Kind**: event emitted  
<a name="event_nameEInput"></a>

## "nameEInput"
User input for name text-input element

**Kind**: event emitted  
<a name="event_emailEInput"></a>

## "emailEInput"
User input for email-input element

**Kind**: event emitted  
<a name="event_ccEInput"></a>

## "ccEInput"
User input for credit card text-input element

**Kind**: event emitted  
<a name="event_zipEInput"></a>

## "zipEInput"
User input for zip code text-input element

**Kind**: event emitted  
<a name="event_cvvEInput"></a>

## "cvvEInput"
User input for CVV text-input element

**Kind**: event emitted  
<a name="event_formSubmit"></a>

## "formSubmit"
User submit event for form element

**Kind**: event emitted  
