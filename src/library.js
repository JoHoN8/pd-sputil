/**
    Common utilities for working with SharePoint
    @module pdsputil
 */
var $ = require('jquery');

const processRow = function (row) {
    var finalVal = '';
    for (var j = 0; j < row.length; j++) {
        var innerValue = row[j] === null ? '' : row[j].toString();
        if (row[j] instanceof Date) {
            innerValue = row[j].toLocaleString();
        }
        var result = innerValue.replace(/"/g, '""');
        if (result.search(/("|,|\n)/g) >= 0) {
            result = '"' + result + '"';
        }
        if (j > 0) {
            finalVal += ',';
        }
        finalVal += result;
    }
    return finalVal + '\r\n';
};
const ready = function(obj) {
    if (!obj.readyFired) {
        // this must be set to true before we start calling callbacks
        obj.readyFired = true;
        for (var i = 0; i < obj.readyList.length; i++) {
            // if a callback here happens to add new ready handlers,
            // the docReady() function will see that it already fired
            // and will schedule the callback to run right after
            // this event loop finishes so all handlers will still execute
            // in order and no new ones will be added to the readyList
            // while we are processing the list
            obj.readyList[i].fn.call(window, obj.readyList[i].ctx);
        }
        obj.readyList = [];
    }
};

const readyStateChange = function() {
    if ( document.readyState === "complete" ) {
        ready();
    }
};
const guidHexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const checkDep = function() {
    try {
        var dep1 = Promise;
    } catch (error) {
        throw new Error("Promise API is required for spUtil library, please polyfill Promise to continue.");
    }
};
//this is to ensure need dependencies are present
checkDep();


/**
     * Saves SP out of the box form Editform, Newform
     * @param {string} [formId]
     * @param {string} saveButtonValue
     * @returns {void}
*/
export function spSaveForm(formId, saveButtonValue) {
    if (!PreSaveItem()) {return false;}
    if (formId && SPClientForms.ClientFormManager.SubmitClientForm(formId)) {return false;}
    WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(saveButtonValue, "", true, "", "", false, true));
}
/**
     * Invokes the callback when dom is ready
     * context is passed to the call back as first parameter
     * @param {requestCallback} callback
     * @param {object} context
     * @returns {void}
*/
export function domReady(callback, context) {
    /**
     * Function that is called when the dom is ready
     *
     * @callback requestCallback
     * @param {*} context
     * @returns {void}
     */
    let obj = {
        readyList: [],
        readyFired: false,
        readyEventHandlersInstalled: false
    };

    if (typeof callback !== "function") {
        throw new TypeError("callback for docReady(fn) must be a function");
    }
    // if ready has already fired, then just schedule the callback
    // to fire asynchronously, but right away
    if (obj.readyFired) {
        setTimeout(() => {
            callback(context);
        }, 1);
        return;
    } else {
        // add the function and context to the list
        obj.readyList.push({fn: callback, ctx: context});
    }
    // if document already ready to go, schedule the ready function to run
    // IE only safe when readyState is "complete", others safe when readyState is "interactive"
    if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) {
        setTimeout(() => {
            ready(obj);
        }, 1);
    } else if (!obj.readyEventHandlersInstalled) {
        // otherwise if we don't have event handlers installed, install them
        if (document.addEventListener) {
            // first choice is DOMContentLoaded event
            document.addEventListener("DOMContentLoaded", () => {
                ready(obj);
            }, false);
            // backup is window load event
            window.addEventListener("load", () => {
                ready(obj);
            }, false);
        } else {
            // must be IE
            document.attachEvent("onreadystatechange", readyStateChange);
            window.attachEvent("onload", () => {
                ready(obj);
            });
        }
        obj.readyEventHandlersInstalled = true;
    }
} 
/**
     * Return the javascript type in lowercase, ex array object
     * @param {*} item
     * @returns {string}
*/
export function getDataType(item) {

	return Object.prototype.toString.call(item).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
/**
     * Returns a lower case element tag name ex div
     * @param {(JQuery|HTMLElement)} element
     * @returns {string}
*/
export function elementTagName(element) {
	var ele;
	if (element instanceof $) {
		ele = element.prop('tagName');
	}else {
		ele = element.tagName;
	}

	return ele.toLowerCase();
}
/**
     * Takes a functions arguments and converts it to an array
     * @param {Array} args
     * @param {number} startAt
     * @returns {Array}
*/
export function argsConverter(args, startAt) {
	var giveBack = [],
		numberToStartAt,
		total = args.length;
	for (numberToStartAt = startAt || 0; numberToStartAt < total; numberToStartAt++){
		giveBack.push(args[numberToStartAt]);
	}
	return giveBack;
}
/**
     * Inserts an item or items starting at the passed index
     * @param {Array} array
     * @param {number} index
     * @returns {Array}
*/
export function arrayInsertAtIndex(array, index) {
	//all items past index will be inserted starting at index number
	var arrayToInsert = argsConverter(arguments, 2);
	Array.prototype.splice.apply(array, [index, 0].concat(arrayToInsert));
	return array;
}
/**
     * Removes an item from index of the passed array
     * @param {Array} array
     * @param {number} index
     * @returns {Array}
*/
export function arrayRemoveAtIndex(array, index) {
	Array.prototype.splice.apply(array, [index, 1]);
	return array;
}
/**
     * Adds the beginning string to an email and encodes it for url use
     * @param {string} acctName
     * @returns {string}
*/
export function encodeAccountName(acctName) {
	var check = /^i:0#\.f\|membership\|/,
		formattedName;

	if (check.test(acctName)) {
		formattedName = acctName;
	} else {
		formattedName = 'i:0#.f|membership|' + acctName;
	}

	return encodeURIComponent(formattedName);
}
/**
     * Returns a promise that will resolve in the given time or default to 5 secs
     * @param {number} time
     * @returns {promise}
*/
export function promiseDelay(time) {
    return new Promise((resolve, reject) => {
        let amount = time || 5000;

        setTimeout(function() {
            resolve(true);
        }, amount);
    });
}
/**Class creates a new instance of sesStorage 
 * 
 * @class sesStorage
*/
export class sesStorage {
    constructor() {
        this.storageAdaptor = sessionStorage;
    }
	toType(obj) {
		return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
	}
    /**
         * Retrieves an item from session storage
         * @param {string} key
         * @returns {*}
    */
	getItem(key) {
		var item = this.storageAdaptor.getItem(key);

		try {
			item = JSON.parse(item);
		} catch (e) {}

		return item;
	}
    /**
         * Stores an item from session storage
         * @param {string} key
         * @param {*} value
         * @returns {void}
    */
	setItem(key, value) {
		var type = this.toType(value);

		if (/object|array/.test(type)) {
			value = JSON.stringify(value);
		}

		this.storageAdaptor.setItem(key, value);
	}
    /**
         * Removes an item from session storage
         * @param {string} key
         * @returns {void}
    */
	removeItem(key) {
		this.storageAdaptor.removeItem(key);
	}
}
/**Class creates a new pub sub object
 * @class Sublish
 */
export class Sublish {
    constructor() {
        this.cache = {};
    }
    /**
         * Publishes data to subscribers
         * @param {string} id
         * @param {...args} - all items passed in will be added as parameters of function with same id 
         * @returns {void}
    */
    publish(id, ...args) {
        var ii,
            total;
        if (!this.cache[id]) {
            this.cache[id] = [];
        }
        total = this.cache[id].length;
        for (ii=0; ii < total; ii++) {
            this.cache[id][ii].apply(this, args);
        }

    }
    /**
         * Subscribes a function to  an id
         * for the fn the function will recieve whatever arguments are passed to publish
         * so your parameters to the function should be whatever you are going to pass publish to the given id
         * @param {string} id
         * @param {subscription} fn
         * @returns {void}
    */
    subscribe(id, fn) {
        /**
         * function typedef for callback to subscribe to an emitted event.
         *
         * @callback subscription
         * @param {...args} - whatever you pass into publish will be passed in here
         * @returns {void} responseMessage
         */
        if (!this.cache[id]) {
            this.cache[id] = [fn];
        } else {
            this.cache[id].push(fn);
        }
    }
    /**
         * Unsubscribes a function
         * for the fn the function passed must be an exact reference to the function or it will not match
         * @param {string} id
         * @param {unsub} fn
         * @returns {void}
    */
    unsubscribe(id, fn) {
        /**
         * This function is a identifier for matching so it can be removed.
         *
         * @callback unsub
         * @param {...args} - whatever you pass into publish will be passed in here
         * @returns {void} - responseMessage
         */
        var ii,
            total;
        if (!this.cache[id]) {
            return;
        }
        total = this.cache[id].length;
        for(ii = 0; ii < total; ii++){
            if (this.cache[id][ii] === fn) {
                this.cache[id].splice(ii, 1);
            }
        }
    }
    /**
         * Clears the internal cache so all subscribed function all be removed
         * @param {string} id
         * @returns {void}
    */
    clear(id) {
        if (!this.cache[id]) {
            return;
        }
        this.cache[id] = [];
    }
}
/**
     * Creates a CSV file from the passed array
     * @param {string} filename
     * @param {string[][]} rows
     * @returns {void}
*/
export function exportToCSV(filename, rows) {
    /*
        todo fix, to use filesaver
        rows should be
        exportToCsv('export.csv', [
            ['name','description'],	
            ['david','123'],
            ['jona','""'],
            ['a','b'],

        ])
    
    */
    var csvFile = '';
    for (var i = 0; i < rows.length; i++) {
        csvFile += processRow(rows[i]);
    }

    var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}
/**
     * Returns the SP pageObj that is on all SP pages
     * @returns {object}
*/
export function getPageInfo() {
    
    return window._spPageContextInfo;
}
/**
     * Navigates the user to the url passed
     * @param {string} url
     * @returns {void}
*/
export function spGotoUrl(url) {

    STSNavigate(url);
}
/**
     * Cleans the ajax search results to an array of objects
     * @param {object[]} results
     * @param {string[]} neededProps
     * @returns {object[]}
*/
export function spSearchResultsCleaner(results, neededProps) {
    if (!neededProps) {
        // nothing to compare to
        throw new Error('Need array to compare to.');
    }
    var ii,cleanProps,properties,totalItems;

    return results.map(function(item) {
        cleanProps = {};
        properties = item.Cells;
        totalItems = properties.length;

        for (ii = 0; ii < totalItems; ii++) {
            if(neededProps.indexOf(properties[ii].Key) !== -1){
                cleanProps[properties[ii].Key] = properties[ii].Value;
            }
            continue;
        }
        return cleanProps;
    });
}
/**
     * Lets the script know if the SP page is in edit mode
     * @returns {boolean}
*/
export function pageEditModeTest() {

    if ($('#MSOLayout_InDesignMode').val() === '1') {
        return false;
    } else{
        return true;
    }
}
/**
     * Hides the ribbon at the top of an SP page
     * @returns {void}
*/
export function hideRibbon() {
    
    let ribbon = document.getElementById('s4-ribbonrow'),
        currentHeight = parseInt(ribbon.style.height, 10);

    ribbon.style.display = "none";
    
    if ( currentHeight !== 0 ) {
        SelectRibbonTab("Ribbon.Read", true);

        setTimeout(hideRibbon, 300);
    }
}
const parse = function(params, pairs) {
    var pair = pairs[0],
        parts = pair.split('='),
        key = decodeURIComponent(parts[0]),
        value = decodeURIComponent(parts.slice(1).join('='));

    // Handle multiple parameters of the same name
    if (typeof params[key] === "undefined") {
        params[key] = value;
    } else {
        params[key] = [].concat(params[key], value);
    }

    return pairs.length === 1 ? params : parse(params, pairs.slice(1));
};
/**
     * Returns an object of the search properties in a url
     * @returns {object}
*/
export function URLparameters() {
    let parastring = location.search;
    return parastring.length === 0 ? {} : parse({}, parastring.substr(1).split('&'));
}
/**
     * Returns a promise that is resolved when the passed SP (only) script file is loaded
     * @param {string} scriptName
     * @returns {Promise}
*/
export function waitForScriptsReady(scriptName) {
    return new Promise((resolve, reject) => {

        ExecuteOrDelayUntilScriptLoaded(function() {
            resolve(true);
        }, scriptName);

    });
}
/**
     * Loops through all rows of the passed table
     * @param {JQuery} table
     * @param {function(JQuery, number):*} cb
     * @returns {void}
*/
export function tableRowLoop(table, cb) {
	var rows = table.children('tbody').children('tr'),
		totalRows = rows.length,
		$row,
		ii;

	for (ii=0; ii < totalRows; ii++) {
		$row = $(rows[ii]);

		if (cb.call(this, $row, ii) === false) {
			break;
		}
	}
}
/**
     * Returns a promise that resolves when the script file is loaded, any script file
     * @param {string} fileName
     * @returns {Promise}
*/
export function loadSPScript(fileName) {
    var url,
        pageInfo = getPageInfo(),
        ele = document.createElement( 'script' ),
        fileUrl = `${pageInfo.siteAbsoluteUrl}/_layouts/15/`;
        //firstScriptTag = document.getElementsByTagName('script')[0];

    url = fileUrl + fileName;

    ele.setAttribute( 'src', url );
    ele.setAttribute('type', "text/javascript");
    document.head.appendChild(ele);
    return waitForScriptsReady(fileName);
}
/**
 * Test a string to ensure it is a valid guid
 * @param {string} guid 
 * @returns {boolean}
 */
export function validGuid(guid) {
    var a = /^[{|\\(]?[0-9a-fA-F]{8}[-]?([0-9a-fA-F]{4}[-]?){3}[0-9a-fA-F]{12}[\\)|}]?$/;
    return a.test(guid);
}
/**
     * Returns the origin of the current site
     * @returns {string}
*/
export function getURLOrigin() {
    let win = window.location;
 
    if (!win.origin) {
        win.origin = win.protocol + "//"
            + win.hostname
            + (win.port ? ':' + win.port : '');
    }
    return win.origin;
}
/**
 * Creates a SharePoint GUID in format
 * xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx 
 * @returns {string}
 */
export function createGUID() {
	var result = '';

	for (var index = 0; index < 32; index++) {
		var value = Math.floor(Math.random() * 16);

		switch (index) {
		case 8:
			result += '-';
			break;
		case 12:
			value = 4;
			result += '-';
			break;
		case 16:
			value = value & 3 | 8;
			result += '-';
			break;
		case 20:
			result += '-';
			break;
		}
		result += guidHexCodes[value];
	}
	return result;
}