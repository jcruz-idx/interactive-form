## Members

<dl>
<dt><a href="#i">i</a> : <code>Number</code></dt>
<dd><p>i - Integer index</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#emailError">emailError</a> : <code>Object</code></dt>
<dd><p>emailError - Tracks email-<input> error-type</p>
</dd>
<dt><a href="#blankMsg">blankMsg</a> : <code>String</code></dt>
<dd><p>blankMsg - email-<input> error message for blank entry</p>
</dd>
<dt><a href="#formatMsg">formatMsg</a> : <code>String</code></dt>
<dd><p>formatMsg - email-<input> error-message for bad format</p>
</dd>
<dt><a href="#otherJobInput">otherJobInput</a></dt>
<dd><ul>
<li>Global HTML Elements</li>
</ul>
</dd>
<dt><a href="#nameInput">nameInput</a></dt>
<dd><ul>
<li>Global <input> Elements for Validation</li>
</ul>
</dd>
<dt><a href="#pay">pay</a> : <code>Array</code></dt>
<dd><ul>
<li>Payment <div> Elements / Containers</li>
</ul>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#isValidName">isValidName(name)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Validator - argument for generalized createListener() function</p>
</dd>
<dt><a href="#isValidEmail">isValidEmail(email)</a> ⇒ <code>bool</code></dt>
<dd><p>Validator - argument for generalized createListener() function</p>
</dd>
<dt><a href="#isValidCc">isValidCc(cc)</a> ⇒ <code>bool</code></dt>
<dd><p>Validator - argument for generalized createListener() function</p>
</dd>
<dt><a href="#isValidZip">isValidZip(zip)</a> ⇒ <code>bool</code></dt>
<dd><p>Validator - argument for generalized createListener() function</p>
</dd>
<dt><a href="#isValidCvv">isValidCvv(cvv)</a> ⇒ <code>bool</code></dt>
<dd><p>Validator - argument for generalized createListener() function</p>
</dd>
<dt><a href="#failure">failure(e, elem)</a> : <code>HTMLElement</code></dt>
<dd><p>Submit Event Failure Protocol</p>
</dd>
<dt><a href="#isValidActivitySelection">isValidActivitySelection()</a> ⇒ <code>HTMLInputElement</code> | <code>HTMLLabelElement</code> | <code>HTMLCollection</code> | <code>bool</code></dt>
<dd><p>Verify that at least 1 activity is selected</p>
</dd>
</dl>

## Events

<dl>
<dt><a href="#event_change">"event:change"</a></dt>
<dd><ul>
<li>Job: Listen for change-in <select id='title'></li>
</ul>
</dd>
<dt><a href="#event_change">"event:change"</a></dt>
<dd><ul>
<li>T-Shirt Design: Listen for change-in <select id='design'></li>
</ul>
</dd>
<dt><a href="#event_change">"event:change"</a></dt>
<dd><ul>
<li>Activities: Listen for change-in activity-<input type='checkbox'>.  In</li>
</ul>
</dd>
<dt><a href="#event_change">"event:change"</a></dt>
<dd><ul>
<li>Payments: Listen for change-in <select id='payment'>.
  Select Index	paySelect.value/pay[i].id	i	Type
  1			credit-card				0	Credit Card
  2			paypal					1	Paypal
  3			bitcoin					2	Bitcoin</li>
</ul>
</dd>
<dt><a href="#event_input">"event:input" (validator)</a> ⇒ <code><a href="#event_input">event:input</a></code> | <code>string</code> | <code>bool</code> | <code>HTMLParagraphElement</code> | <code>HTMLLabelElement</code></dt>
<dd><ul>
<li>Real-time Error Messages
Generalized Creator for &#39;input&#39;-Listeners
If input-event on &lt;input type=&#39;text&gt; is not valid:</li>
</ul>
<ol>
<li>Flag containers as invalid</li>
<li>Show hints
 a. Modify messages for specific email errors
Else hide hints, reset messages, reset flags</li>
</ol>
</dd>
<dt><a href="#event_submit">"event:submit"</a></dt>
<dd><p>Form Submission: Validate all inputs</p>
</dd>
</dl>

<a name="i"></a>

## i : <code>Number</code>
i - Integer index

**Kind**: global variable  
<a name="emailError"></a>

## emailError : <code>Object</code>
emailError - Tracks email-<input> error-type

**Kind**: global constant  
<a name="blankMsg"></a>

## blankMsg : <code>String</code>
blankMsg - email-<input> error message for blank entry

**Kind**: global constant  
<a name="formatMsg"></a>

## formatMsg : <code>String</code>
formatMsg - email-<input> error-message for bad format

**Kind**: global constant  
<a name="otherJobInput"></a>

## otherJobInput
- Global HTML Elements

**Kind**: global constant  
<a name="nameInput"></a>

## nameInput
- Global <input> Elements for Validation

**Kind**: global constant  
<a name="pay"></a>

## pay : <code>Array</code>
- Payment <div> Elements / Containers

**Kind**: global constant  
<a name="isValidName"></a>

## isValidName(name) ⇒ <code>Boolean</code>
Validator - argument for generalized createListener() function

**Kind**: global function  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="isValidEmail"></a>

## isValidEmail(email) ⇒ <code>bool</code>
Validator - argument for generalized createListener() function

**Kind**: global function  

| Param | Type |
| --- | --- |
| email | <code>string</code> | 

<a name="isValidCc"></a>

## isValidCc(cc) ⇒ <code>bool</code>
Validator - argument for generalized createListener() function

**Kind**: global function  

| Param | Type |
| --- | --- |
| cc | <code>string</code> | 

<a name="isValidZip"></a>

## isValidZip(zip) ⇒ <code>bool</code>
Validator - argument for generalized createListener() function

**Kind**: global function  

| Param | Type |
| --- | --- |
| zip | <code>string</code> | 

<a name="isValidCvv"></a>

## isValidCvv(cvv) ⇒ <code>bool</code>
Validator - argument for generalized createListener() function

**Kind**: global function  

| Param | Type |
| --- | --- |
| cvv | <code>string</code> | 

<a name="failure"></a>

## failure(e, elem) : <code>HTMLElement</code>
Submit Event Failure Protocol

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| e | [<code>event:submit</code>](#event_submit) | Prevent default submission behavior |
| elem | <code>HTMLInputElement</code> | <input> that failed validator test |

<a name="isValidActivitySelection"></a>

## isValidActivitySelection() ⇒ <code>HTMLInputElement</code> \| <code>HTMLLabelElement</code> \| <code>HTMLCollection</code> \| <code>bool</code>
Verify that at least 1 activity is selected

**Kind**: global function  
**Returns**: <code>HTMLInputElement</code> - activityInput - Activity <input type='checkbox'><code>HTMLLabelElement</code> - activityLabel - activityInput container<code>HTMLCollection</code> - activityCollection - activityLabel collection<code>bool</code>  
<a name="event_change"></a>

## "event:change"
- Job: Listen for change-in <select id='title'>

**Kind**: event emitted  
<a name="event_change"></a>

## "event:change"
- T-Shirt Design: Listen for change-in <select id='design'>

**Kind**: event emitted  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| designSelect.value | <code>string</code> | 'js puns', 'heart js' |

<a name="event_change"></a>

## "event:change"
- Activities: Listen for change-in activity-<input type='checkbox'>.  In

**Kind**: event emitted  
<a name="event_change"></a>

## "event:change"
- Payments: Listen for change-in <select id='payment'>.	Select Index	paySelect.value/pay[i].id	i	Type	1			credit-card				0	Credit Card	2			paypal					1	Paypal	3			bitcoin					2	Bitcoin

**Kind**: event emitted  
<a name="event_input"></a>

## "event:input" (validator) ⇒ [<code>event:input</code>](#event_input) \| <code>string</code> \| <code>bool</code> \| <code>HTMLParagraphElement</code> \| <code>HTMLLabelElement</code>
- Real-time Error MessagesGeneralized Creator for 'input'-ListenersIf input-event on <input type='text> is not valid:1. Flag containers as invalid2. Show hints		a. Modify messages for specific email errorsElse hide hints, reset messages, reset flags

**Kind**: event emitted  
**Returns**: [<code>event:input</code>](#event_input) - e - keyboard 'input' event<code>string</code> - text - See e.target.value<code>bool</code> - valid<code>HTMLParagraphElement</code> - hint - Hint <p> shown for invalid 'input'<code>HTMLLabelElement</code> - inputContainer - parent of input element  

| Param | Type | Description |
| --- | --- | --- |
| validator | <code>callback</code> | {bool} = validator({string}) |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| e.target | <code>HTMLInputElement</code> | target <input type='text'> element |
| e.target.value | <code>string</code> | target element's text value |

<a name="event_submit"></a>

## "event:submit"
Form Submission: Validate all inputs

**Kind**: event emitted  
