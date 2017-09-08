<a name="module_pdsputil"></a>

## pdsputil
Common utilities for working with SharePoint


* [pdsputil](#module_pdsputil)
    * _static_
        * [.spSaveForm([formId], saveButtonValue)](#module_pdsputil.spSaveForm) ⇒ <code>void</code>
        * [.domReady(callback, context)](#module_pdsputil.domReady) ⇒ <code>void</code>
        * [.getDataType(item)](#module_pdsputil.getDataType) ⇒ <code>string</code>
        * [.elementTagName(element)](#module_pdsputil.elementTagName) ⇒ <code>string</code>
        * [.argsConverter(args, startAt)](#module_pdsputil.argsConverter) ⇒ <code>Array.&lt;any&gt;</code>
        * [.arrayInsertAtIndex(array, index)](#module_pdsputil.arrayInsertAtIndex) ⇒ <code>Array.&lt;any&gt;</code>
        * [.arrayRemoveAtIndex(array, index)](#module_pdsputil.arrayRemoveAtIndex) ⇒ <code>Array.&lt;any&gt;</code>
        * [.encodeAccountName(acctName)](#module_pdsputil.encodeAccountName) ⇒ <code>string</code>
        * [.promiseDelay(time)](#module_pdsputil.promiseDelay) ⇒ <code>promise</code>
        * [.exportToCSV(filename, rows)](#module_pdsputil.exportToCSV) ⇒ <code>void</code>
        * [.getPageInfo()](#module_pdsputil.getPageInfo) ⇒ <code>object</code>
        * [.spGotoUrl(url)](#module_pdsputil.spGotoUrl) ⇒ <code>void</code>
        * [.spSearchResultsCleaner(results, index)](#module_pdsputil.spSearchResultsCleaner) ⇒ <code>Array.&lt;object&gt;</code>
        * [.pageEditModeTest()](#module_pdsputil.pageEditModeTest) ⇒ <code>boolean</code>
        * [.hideRibbon()](#module_pdsputil.hideRibbon) ⇒ <code>void</code>
        * [.URLparameters()](#module_pdsputil.URLparameters) ⇒ <code>object</code>
        * [.waitForScriptsReady(scriptName)](#module_pdsputil.waitForScriptsReady) ⇒ <code>Promise</code>
        * [.tableRowLoop(table, cb)](#module_pdsputil.tableRowLoop) ⇒ <code>void</code>
        * [.loadSPScript(fileName)](#module_pdsputil.loadSPScript) ⇒ <code>Promise</code>
        * [.validGuid(guid)](#module_pdsputil.validGuid) ⇒ <code>boolean</code>
        * [.getURLOrigin()](#module_pdsputil.getURLOrigin) ⇒ <code>string</code>
        * [.createGUID()](#module_pdsputil.createGUID) ⇒ <code>string</code>
    * _inner_
        * [~sesStorage](#module_pdsputil..sesStorage)
            * [new sesStorage()](#new_module_pdsputil..sesStorage_new)
            * [.getItem(key)](#module_pdsputil..sesStorage+getItem) ⇒ <code>any</code>
            * [.setItem(key, value)](#module_pdsputil..sesStorage+setItem) ⇒ <code>any</code>
            * [.removeItem(key)](#module_pdsputil..sesStorage+removeItem) ⇒ <code>void</code>
        * [~Sublish](#module_pdsputil..Sublish)
            * [new Sublish()](#new_module_pdsputil..Sublish_new)
            * [.publish(id, ...args)](#module_pdsputil..Sublish+publish) ⇒ <code>void</code>
            * [.subscribe(id, fn)](#module_pdsputil..Sublish+subscribe) ⇒ <code>void</code>
            * [.unsubscribe(id, fn)](#module_pdsputil..Sublish+unsubscribe) ⇒ <code>void</code>
            * [.clear(id)](#module_pdsputil..Sublish+clear) ⇒ <code>void</code>
        * [~requestCallback](#module_pdsputil..requestCallback) ⇒ <code>void</code>
        * [~subscription](#module_pdsputil..subscription) ⇒ <code>void</code>
        * [~unsub](#module_pdsputil..unsub) ⇒ <code>void</code>

<a name="module_pdsputil.spSaveForm"></a>

### pdsputil.spSaveForm([formId], saveButtonValue) ⇒ <code>void</code>
Saves SP out of the box form Editform, Newform

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  

| Param | Type |
| --- | --- |
| [formId] | <code>string</code> | 
| saveButtonValue | <code>string</code> | 

<a name="module_pdsputil.domReady"></a>

### pdsputil.domReady(callback, context) ⇒ <code>void</code>
Invokes the callback when dom is readycontext is passed to the call back as first parameter

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  

| Param | Type |
| --- | --- |
| callback | <code>requestCallback</code> | 
| context | <code>object</code> | 

<a name="module_pdsputil.getDataType"></a>

### pdsputil.getDataType(item) ⇒ <code>string</code>
Return the javascript type in lowercase, ex array object

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  

| Param | Type |
| --- | --- |
| item | <code>any</code> | 

<a name="module_pdsputil.elementTagName"></a>

### pdsputil.elementTagName(element) ⇒ <code>string</code>
Returns a lower case element tag name ex div

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  

| Param | Type |
| --- | --- |
| element | <code>JQuery</code> \| <code>HTMLElement</code> | 

<a name="module_pdsputil.argsConverter"></a>

### pdsputil.argsConverter(args, startAt) ⇒ <code>Array.&lt;any&gt;</code>
Takes a functions arguments and converts it to an array

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  

| Param | Type |
| --- | --- |
| args | <code>Array.&lt;any&gt;</code> | 
| startAt | <code>number</code> | 

<a name="module_pdsputil.arrayInsertAtIndex"></a>

### pdsputil.arrayInsertAtIndex(array, index) ⇒ <code>Array.&lt;any&gt;</code>
Inserts an item or items starting at the passed index

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  

| Param | Type |
| --- | --- |
| array | <code>Array.&lt;any&gt;</code> | 
| index | <code>number</code> | 

<a name="module_pdsputil.arrayRemoveAtIndex"></a>

### pdsputil.arrayRemoveAtIndex(array, index) ⇒ <code>Array.&lt;any&gt;</code>
Removes an item from index of the passed array

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  

| Param | Type |
| --- | --- |
| array | <code>Array.&lt;any&gt;</code> | 
| index | <code>number</code> | 

<a name="module_pdsputil.encodeAccountName"></a>

### pdsputil.encodeAccountName(acctName) ⇒ <code>string</code>
Adds the beginning string to an email and encodes it for url use

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  

| Param | Type |
| --- | --- |
| acctName | <code>string</code> | 

<a name="module_pdsputil.promiseDelay"></a>

### pdsputil.promiseDelay(time) ⇒ <code>promise</code>
Returns a promise that will resolve in the given time or default to 5 secs

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  

| Param | Type |
| --- | --- |
| time | <code>number</code> | 

<a name="module_pdsputil.exportToCSV"></a>

### pdsputil.exportToCSV(filename, rows) ⇒ <code>void</code>
Creates a CSV file from the passed array

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  

| Param | Type |
| --- | --- |
| filename | <code>string</code> | 
| rows | <code>Array.&lt;Array.&lt;string&gt;&gt;</code> | 

<a name="module_pdsputil.getPageInfo"></a>

### pdsputil.getPageInfo() ⇒ <code>object</code>
Returns the SP pageObj that is on all SP pages

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  
<a name="module_pdsputil.spGotoUrl"></a>

### pdsputil.spGotoUrl(url) ⇒ <code>void</code>
Navigates the user to the url passed

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

<a name="module_pdsputil.spSearchResultsCleaner"></a>

### pdsputil.spSearchResultsCleaner(results, index) ⇒ <code>Array.&lt;object&gt;</code>
Cleans the ajax search results to an array of objects

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  

| Param | Type |
| --- | --- |
| results | <code>Array.&lt;object&gt;</code> | 
| index | <code>Array.&lt;string&gt;</code> | 

<a name="module_pdsputil.pageEditModeTest"></a>

### pdsputil.pageEditModeTest() ⇒ <code>boolean</code>
Lets the script know if the SP page is in edit mode

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  
<a name="module_pdsputil.hideRibbon"></a>

### pdsputil.hideRibbon() ⇒ <code>void</code>
Hides the ribbon at the top of an SP page

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  
<a name="module_pdsputil.URLparameters"></a>

### pdsputil.URLparameters() ⇒ <code>object</code>
Returns an object of the search properties in a url

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  
<a name="module_pdsputil.waitForScriptsReady"></a>

### pdsputil.waitForScriptsReady(scriptName) ⇒ <code>Promise</code>
Returns a promise that is resolved when the passed SP (only) script file is loaded

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  

| Param | Type |
| --- | --- |
| scriptName | <code>string</code> | 

<a name="module_pdsputil.tableRowLoop"></a>

### pdsputil.tableRowLoop(table, cb) ⇒ <code>void</code>
Loops through all rows of the passed table

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  

| Param | Type |
| --- | --- |
| table | <code>JQuery</code> | 
| cb | <code>function</code> | 

<a name="module_pdsputil.loadSPScript"></a>

### pdsputil.loadSPScript(fileName) ⇒ <code>Promise</code>
Returns a promise that resolves when the script file is loaded, any script file

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 

<a name="module_pdsputil.validGuid"></a>

### pdsputil.validGuid(guid) ⇒ <code>boolean</code>
Test a string to ensure it is a valid guid

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  

| Param | Type |
| --- | --- |
| guid | <code>string</code> | 

<a name="module_pdsputil.getURLOrigin"></a>

### pdsputil.getURLOrigin() ⇒ <code>string</code>
Returns the origin of the current site

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  
<a name="module_pdsputil.createGUID"></a>

### pdsputil.createGUID() ⇒ <code>string</code>
Creates a SharePoint GUID in formatxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

**Kind**: static method of [<code>pdsputil</code>](#module_pdsputil)  
<a name="module_pdsputil..sesStorage"></a>

### pdsputil~sesStorage
**Kind**: inner class of [<code>pdsputil</code>](#module_pdsputil)  

* [~sesStorage](#module_pdsputil..sesStorage)
    * [new sesStorage()](#new_module_pdsputil..sesStorage_new)
    * [.getItem(key)](#module_pdsputil..sesStorage+getItem) ⇒ <code>any</code>
    * [.setItem(key, value)](#module_pdsputil..sesStorage+setItem) ⇒ <code>any</code>
    * [.removeItem(key)](#module_pdsputil..sesStorage+removeItem) ⇒ <code>void</code>

<a name="new_module_pdsputil..sesStorage_new"></a>

#### new sesStorage()
Class creates a new instance of sesStorage

<a name="module_pdsputil..sesStorage+getItem"></a>

#### sesStorage.getItem(key) ⇒ <code>any</code>
Retrieves an item from session storage

**Kind**: instance method of [<code>sesStorage</code>](#module_pdsputil..sesStorage)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<a name="module_pdsputil..sesStorage+setItem"></a>

#### sesStorage.setItem(key, value) ⇒ <code>any</code>
Stores an item from session storage

**Kind**: instance method of [<code>sesStorage</code>](#module_pdsputil..sesStorage)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| value | <code>any</code> | 

<a name="module_pdsputil..sesStorage+removeItem"></a>

#### sesStorage.removeItem(key) ⇒ <code>void</code>
Removes an item from session storage

**Kind**: instance method of [<code>sesStorage</code>](#module_pdsputil..sesStorage)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<a name="module_pdsputil..Sublish"></a>

### pdsputil~Sublish
**Kind**: inner class of [<code>pdsputil</code>](#module_pdsputil)  

* [~Sublish](#module_pdsputil..Sublish)
    * [new Sublish()](#new_module_pdsputil..Sublish_new)
    * [.publish(id, ...args)](#module_pdsputil..Sublish+publish) ⇒ <code>void</code>
    * [.subscribe(id, fn)](#module_pdsputil..Sublish+subscribe) ⇒ <code>void</code>
    * [.unsubscribe(id, fn)](#module_pdsputil..Sublish+unsubscribe) ⇒ <code>void</code>
    * [.clear(id)](#module_pdsputil..Sublish+clear) ⇒ <code>void</code>

<a name="new_module_pdsputil..Sublish_new"></a>

#### new Sublish()
Class creates a new pub sub object

<a name="module_pdsputil..Sublish+publish"></a>

#### sublish.publish(id, ...args) ⇒ <code>void</code>
Publishes data to subscribers

**Kind**: instance method of [<code>Sublish</code>](#module_pdsputil..Sublish)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> |  |
| ...args | <code>any</code> | all items passed in will be added as parameters of function with same id |

<a name="module_pdsputil..Sublish+subscribe"></a>

#### sublish.subscribe(id, fn) ⇒ <code>void</code>
Subscribes a function to  an idfor the fn the function will recieve whatever arguments are passed to publishso your parameters to the function should be whatever you are going to pass publish to the given id

**Kind**: instance method of [<code>Sublish</code>](#module_pdsputil..Sublish)  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 
| fn | <code>subscription</code> | 

<a name="module_pdsputil..Sublish+unsubscribe"></a>

#### sublish.unsubscribe(id, fn) ⇒ <code>void</code>
Unsubscribes a functionfor the fn the function passed must be an exact reference to the function or it will not match

**Kind**: instance method of [<code>Sublish</code>](#module_pdsputil..Sublish)  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 
| fn | <code>unsub</code> | 

<a name="module_pdsputil..Sublish+clear"></a>

#### sublish.clear(id) ⇒ <code>void</code>
Clears the internal cache so all subscribed function all be removed

**Kind**: instance method of [<code>Sublish</code>](#module_pdsputil..Sublish)  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="module_pdsputil..requestCallback"></a>

### pdsputil~requestCallback ⇒ <code>void</code>
Function that is called when the dom is ready

**Kind**: inner typedef of [<code>pdsputil</code>](#module_pdsputil)  

| Param | Type |
| --- | --- |
| context | <code>any</code> | 

<a name="module_pdsputil..subscription"></a>

### pdsputil~subscription ⇒ <code>void</code>
function typedef for callback to subscribe to an emitted event.

**Kind**: inner typedef of [<code>pdsputil</code>](#module_pdsputil)  
**Returns**: <code>void</code> - responseMessage  

| Type | Description |
| --- | --- |
| <code>any</code> | whatever you pass into publish will be passed in here |

<a name="module_pdsputil..unsub"></a>

### pdsputil~unsub ⇒ <code>void</code>
This function is a identifier for matching so it can be removed.

**Kind**: inner typedef of [<code>pdsputil</code>](#module_pdsputil)  
**Returns**: <code>void</code> - - responseMessage  

| Type | Description |
| --- | --- |
| <code>any</code> | whatever you pass into publish will be passed in here |

