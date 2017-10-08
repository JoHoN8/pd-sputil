(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else if(typeof exports === 'object')
		exports["pdsputil"] = factory(require("jquery"));
	else
		root["pdsputil"] = factory(root["$"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["spSaveForm"] = spSaveForm;
/* harmony export (immutable) */ __webpack_exports__["domReady"] = domReady;
/* harmony export (immutable) */ __webpack_exports__["getDataType"] = getDataType;
/* harmony export (immutable) */ __webpack_exports__["elementTagName"] = elementTagName;
/* harmony export (immutable) */ __webpack_exports__["argsConverter"] = argsConverter;
/* harmony export (immutable) */ __webpack_exports__["arrayInsertAtIndex"] = arrayInsertAtIndex;
/* harmony export (immutable) */ __webpack_exports__["arrayRemoveAtIndex"] = arrayRemoveAtIndex;
/* harmony export (immutable) */ __webpack_exports__["encodeAccountName"] = encodeAccountName;
/* harmony export (immutable) */ __webpack_exports__["promiseDelay"] = promiseDelay;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sesStorage", function() { return sesStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sublish", function() { return Sublish; });
/* harmony export (immutable) */ __webpack_exports__["exportToCSV"] = exportToCSV;
/* harmony export (immutable) */ __webpack_exports__["getPageInfo"] = getPageInfo;
/* harmony export (immutable) */ __webpack_exports__["spGotoUrl"] = spGotoUrl;
/* harmony export (immutable) */ __webpack_exports__["spSearchResultsCleaner"] = spSearchResultsCleaner;
/* harmony export (immutable) */ __webpack_exports__["pageEditModeTest"] = pageEditModeTest;
/* harmony export (immutable) */ __webpack_exports__["hideRibbon"] = hideRibbon;
/* harmony export (immutable) */ __webpack_exports__["URLparameters"] = URLparameters;
/* harmony export (immutable) */ __webpack_exports__["waitForScriptsReady"] = waitForScriptsReady;
/* harmony export (immutable) */ __webpack_exports__["tableRowLoop"] = tableRowLoop;
/* harmony export (immutable) */ __webpack_exports__["loadSPScript"] = loadSPScript;
/* harmony export (immutable) */ __webpack_exports__["validGuid"] = validGuid;
/* harmony export (immutable) */ __webpack_exports__["getURLOrigin"] = getURLOrigin;
/* harmony export (immutable) */ __webpack_exports__["createGUID"] = createGUID;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
    Common utilities for working with SharePoint
    @module pdsputil
 */
var $ = __webpack_require__(1);

var processRow = function processRow(row) {
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
var ready = function ready(obj) {
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

var readyStateChange = function readyStateChange() {
    if (document.readyState === "complete") {
        ready();
    }
};
var guidHexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
var checkDep = function checkDep() {
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
function spSaveForm(formId, saveButtonValue) {
    if (!PreSaveItem()) {
        return false;
    }
    if (formId && SPClientForms.ClientFormManager.SubmitClientForm(formId)) {
        return false;
    }
    WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(saveButtonValue, "", true, "", "", false, true));
}
/**
     * Invokes the callback when dom is ready
     * context is passed to the call back as first parameter
     * @param {requestCallback} callback
     * @param {object} context
     * @returns {void}
*/
function domReady(callback, context) {
    /**
     * Function that is called when the dom is ready
     *
     * @callback requestCallback
     * @param {*} context
     * @returns {void}
     */
    var obj = {
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
        setTimeout(function () {
            callback(context);
        }, 1);
        return;
    } else {
        // add the function and context to the list
        obj.readyList.push({ fn: callback, ctx: context });
    }
    // if document already ready to go, schedule the ready function to run
    // IE only safe when readyState is "complete", others safe when readyState is "interactive"
    if (document.readyState === "complete" || !document.attachEvent && document.readyState === "interactive") {
        setTimeout(function () {
            ready(obj);
        }, 1);
    } else if (!obj.readyEventHandlersInstalled) {
        // otherwise if we don't have event handlers installed, install them
        if (document.addEventListener) {
            // first choice is DOMContentLoaded event
            document.addEventListener("DOMContentLoaded", function () {
                ready(obj);
            }, false);
            // backup is window load event
            window.addEventListener("load", function () {
                ready(obj);
            }, false);
        } else {
            // must be IE
            document.attachEvent("onreadystatechange", readyStateChange);
            window.attachEvent("onload", function () {
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
function getDataType(item) {

    return Object.prototype.toString.call(item).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
/**
     * Returns a lower case element tag name ex div
     * @param {(JQuery|HTMLElement)} element
     * @returns {string}
*/
function elementTagName(element) {
    var ele;
    if (element instanceof $) {
        ele = element.prop('tagName');
    } else {
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
function argsConverter(args, startAt) {
    var giveBack = [],
        numberToStartAt,
        total = args.length;
    for (numberToStartAt = startAt || 0; numberToStartAt < total; numberToStartAt++) {
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
function arrayInsertAtIndex(array, index) {
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
function arrayRemoveAtIndex(array, index) {
    Array.prototype.splice.apply(array, [index, 1]);
    return array;
}
/**
     * Adds the beginning string to an email and encodes it for url use
     * @param {string} acctName
     * @returns {string}
*/
function encodeAccountName(acctName) {
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
function promiseDelay(time) {
    return new Promise(function (resolve, reject) {
        var amount = time || 5000;

        setTimeout(function () {
            resolve(true);
        }, amount);
    });
}
/**Class creates a new instance of sesStorage 
 * 
 * @class sesStorage
*/
var sesStorage = function () {
    function sesStorage() {
        _classCallCheck(this, sesStorage);

        this.storageAdaptor = sessionStorage;
    }

    _createClass(sesStorage, [{
        key: 'toType',
        value: function toType(obj) {
            return {}.toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
        }
        /**
             * Retrieves an item from session storage
             * @param {string} key
             * @returns {*}
        */

    }, {
        key: 'getItem',
        value: function getItem(key) {
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

    }, {
        key: 'setItem',
        value: function setItem(key, value) {
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

    }, {
        key: 'removeItem',
        value: function removeItem(key) {
            this.storageAdaptor.removeItem(key);
        }
    }]);

    return sesStorage;
}();
/**Class creates a new pub sub object
 * @class Sublish
 */
var Sublish = function () {
    function Sublish() {
        _classCallCheck(this, Sublish);

        this.cache = {};
    }
    /**
         * Publishes data to subscribers
         * @param {string} id
         * @param {...args} - all items passed in will be added as parameters of function with same id 
         * @returns {void}
    */


    _createClass(Sublish, [{
        key: 'publish',
        value: function publish(id) {
            var ii, total;
            if (!this.cache[id]) {
                this.cache[id] = [];
            }
            total = this.cache[id].length;

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            for (ii = 0; ii < total; ii++) {
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

    }, {
        key: 'subscribe',
        value: function subscribe(id, fn) {
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

    }, {
        key: 'unsubscribe',
        value: function unsubscribe(id, fn) {
            /**
             * This function is a identifier for matching so it can be removed.
             *
             * @callback unsub
             * @param {...args} - whatever you pass into publish will be passed in here
             * @returns {void} - responseMessage
             */
            var ii, total;
            if (!this.cache[id]) {
                return;
            }
            total = this.cache[id].length;
            for (ii = 0; ii < total; ii++) {
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

    }, {
        key: 'clear',
        value: function clear(id) {
            if (!this.cache[id]) {
                return;
            }
            this.cache[id] = [];
        }
    }]);

    return Sublish;
}();
/**
     * Creates a CSV file from the passed array
     * @param {string} filename
     * @param {string[][]} rows
     * @returns {void}
*/
function exportToCSV(filename, rows) {
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
    if (navigator.msSaveBlob) {
        // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) {
            // feature detection
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
function getPageInfo() {

    return window._spPageContextInfo;
}
/**
     * Navigates the user to the url passed
     * @param {string} url
     * @returns {void}
*/
function spGotoUrl(url) {

    STSNavigate(url);
}
/**
     * Cleans the ajax search results to an array of objects
     * @param {object[]} results
     * @param {string[]} neededProps
     * @returns {object[]}
*/
function spSearchResultsCleaner(results, neededProps) {
    if (!neededProps) {
        // nothing to compare to
        throw new Error('Need array to compare to.');
    }
    var ii, cleanProps, properties, totalItems;

    return results.map(function (item) {
        cleanProps = {};
        properties = item.Cells;
        totalItems = properties.length;

        for (ii = 0; ii < totalItems; ii++) {
            if (neededProps.indexOf(properties[ii].Key) !== -1) {
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
function pageEditModeTest() {

    if ($('#MSOLayout_InDesignMode').val() === '1') {
        return false;
    } else {
        return true;
    }
}
/**
     * Hides the ribbon at the top of an SP page
     * @returns {void}
*/
function hideRibbon() {

    var ribbon = document.getElementById('s4-ribbonrow'),
        currentHeight = parseInt(ribbon.style.height, 10);

    ribbon.style.display = "none";

    if (currentHeight !== 0) {
        SelectRibbonTab("Ribbon.Read", true);

        setTimeout(hideRibbon, 300);
    }
}
var parse = function parse(params, pairs) {
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
function URLparameters() {
    var parastring = location.search;
    return parastring.length === 0 ? {} : parse({}, parastring.substr(1).split('&'));
}
/**
     * Returns a promise that is resolved when the passed SP (only) script file is loaded
     * @param {string} scriptName
     * @returns {Promise}
*/
function waitForScriptsReady(scriptName) {
    return new Promise(function (resolve, reject) {

        ExecuteOrDelayUntilScriptLoaded(function () {
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
function tableRowLoop(table, cb) {
    var rows = table.children('tbody').children('tr'),
        totalRows = rows.length,
        $row,
        ii;

    for (ii = 0; ii < totalRows; ii++) {
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
function loadSPScript(fileName) {
    var url,
        pageInfo = getPageInfo(),
        ele = document.createElement('script'),
        fileUrl = pageInfo.siteAbsoluteUrl + '/_layouts/15/';
    //firstScriptTag = document.getElementsByTagName('script')[0];

    url = fileUrl + fileName;

    ele.setAttribute('src', url);
    ele.setAttribute('type', "text/javascript");
    document.head.appendChild(ele);
    return waitForScriptsReady(fileName);
}
/**
 * Test a string to ensure it is a valid guid
 * @param {string} guid 
 * @returns {boolean}
 */
function validGuid(guid) {
    var a = /^[{|\\(]?[0-9a-fA-F]{8}[-]?([0-9a-fA-F]{4}[-]?){3}[0-9a-fA-F]{12}[\\)|}]?$/;
    return a.test(guid);
}
/**
     * Returns the origin of the current site
     * @returns {string}
*/
function getURLOrigin() {
    var win = window.location;

    if (!win.origin) {
        win.origin = win.protocol + "//" + win.hostname + (win.port ? ':' + win.port : '');
    }
    return win.origin;
}
/**
 * Creates a SharePoint GUID in format
 * xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx 
 * @returns {string}
 */
function createGUID() {
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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlOWMyNjhlZmUyYjBkZmQ1YWQzNiIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCIsXCJyb290XCI6XCIkXCJ9Il0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwicHJvY2Vzc1JvdyIsInJvdyIsImZpbmFsVmFsIiwiaiIsImxlbmd0aCIsImlubmVyVmFsdWUiLCJ0b1N0cmluZyIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInJlc3VsdCIsInJlcGxhY2UiLCJzZWFyY2giLCJyZWFkeSIsIm9iaiIsInJlYWR5RmlyZWQiLCJpIiwicmVhZHlMaXN0IiwiZm4iLCJjYWxsIiwid2luZG93IiwiY3R4IiwicmVhZHlTdGF0ZUNoYW5nZSIsImRvY3VtZW50IiwicmVhZHlTdGF0ZSIsImd1aWRIZXhDb2RlcyIsImNoZWNrRGVwIiwiZGVwMSIsIlByb21pc2UiLCJlcnJvciIsIkVycm9yIiwic3BTYXZlRm9ybSIsImZvcm1JZCIsInNhdmVCdXR0b25WYWx1ZSIsIlByZVNhdmVJdGVtIiwiU1BDbGllbnRGb3JtcyIsIkNsaWVudEZvcm1NYW5hZ2VyIiwiU3VibWl0Q2xpZW50Rm9ybSIsIldlYkZvcm1fRG9Qb3N0QmFja1dpdGhPcHRpb25zIiwiV2ViRm9ybV9Qb3N0QmFja09wdGlvbnMiLCJkb21SZWFkeSIsImNhbGxiYWNrIiwiY29udGV4dCIsInJlYWR5RXZlbnRIYW5kbGVyc0luc3RhbGxlZCIsIlR5cGVFcnJvciIsInNldFRpbWVvdXQiLCJwdXNoIiwiYXR0YWNoRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0RGF0YVR5cGUiLCJpdGVtIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibWF0Y2giLCJ0b0xvd2VyQ2FzZSIsImVsZW1lbnRUYWdOYW1lIiwiZWxlbWVudCIsImVsZSIsInByb3AiLCJ0YWdOYW1lIiwiYXJnc0NvbnZlcnRlciIsImFyZ3MiLCJzdGFydEF0IiwiZ2l2ZUJhY2siLCJudW1iZXJUb1N0YXJ0QXQiLCJ0b3RhbCIsImFycmF5SW5zZXJ0QXRJbmRleCIsImFycmF5IiwiaW5kZXgiLCJhcnJheVRvSW5zZXJ0IiwiYXJndW1lbnRzIiwiQXJyYXkiLCJzcGxpY2UiLCJhcHBseSIsImNvbmNhdCIsImFycmF5UmVtb3ZlQXRJbmRleCIsImVuY29kZUFjY291bnROYW1lIiwiYWNjdE5hbWUiLCJjaGVjayIsImZvcm1hdHRlZE5hbWUiLCJ0ZXN0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicHJvbWlzZURlbGF5IiwidGltZSIsInJlc29sdmUiLCJyZWplY3QiLCJhbW91bnQiLCJzZXNTdG9yYWdlIiwic3RvcmFnZUFkYXB0b3IiLCJzZXNzaW9uU3RvcmFnZSIsImtleSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJlIiwidmFsdWUiLCJ0eXBlIiwidG9UeXBlIiwic3RyaW5naWZ5Iiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJTdWJsaXNoIiwiY2FjaGUiLCJpZCIsImlpIiwiZXhwb3J0VG9DU1YiLCJmaWxlbmFtZSIsInJvd3MiLCJjc3ZGaWxlIiwiYmxvYiIsIkJsb2IiLCJuYXZpZ2F0b3IiLCJtc1NhdmVCbG9iIiwibGluayIsImNyZWF0ZUVsZW1lbnQiLCJkb3dubG9hZCIsInVuZGVmaW5lZCIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJnZXRQYWdlSW5mbyIsIl9zcFBhZ2VDb250ZXh0SW5mbyIsInNwR290b1VybCIsIlNUU05hdmlnYXRlIiwic3BTZWFyY2hSZXN1bHRzQ2xlYW5lciIsInJlc3VsdHMiLCJuZWVkZWRQcm9wcyIsImNsZWFuUHJvcHMiLCJwcm9wZXJ0aWVzIiwidG90YWxJdGVtcyIsIm1hcCIsIkNlbGxzIiwiaW5kZXhPZiIsIktleSIsIlZhbHVlIiwicGFnZUVkaXRNb2RlVGVzdCIsInZhbCIsImhpZGVSaWJib24iLCJyaWJib24iLCJnZXRFbGVtZW50QnlJZCIsImN1cnJlbnRIZWlnaHQiLCJwYXJzZUludCIsImhlaWdodCIsImRpc3BsYXkiLCJTZWxlY3RSaWJib25UYWIiLCJwYXJhbXMiLCJwYWlycyIsInBhaXIiLCJwYXJ0cyIsInNwbGl0IiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2xpY2UiLCJqb2luIiwiVVJMcGFyYW1ldGVycyIsInBhcmFzdHJpbmciLCJsb2NhdGlvbiIsInN1YnN0ciIsIndhaXRGb3JTY3JpcHRzUmVhZHkiLCJzY3JpcHROYW1lIiwiRXhlY3V0ZU9yRGVsYXlVbnRpbFNjcmlwdExvYWRlZCIsInRhYmxlUm93TG9vcCIsInRhYmxlIiwiY2IiLCJjaGlsZHJlbiIsInRvdGFsUm93cyIsIiRyb3ciLCJsb2FkU1BTY3JpcHQiLCJmaWxlTmFtZSIsInBhZ2VJbmZvIiwiZmlsZVVybCIsInNpdGVBYnNvbHV0ZVVybCIsImhlYWQiLCJ2YWxpZEd1aWQiLCJndWlkIiwiYSIsImdldFVSTE9yaWdpbiIsIndpbiIsIm9yaWdpbiIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiY3JlYXRlR1VJRCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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LE9BQWhDLEVBQXlDO0FBQ3hDLFlBQUkyQixRQUFROEYsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCLEVBQTNCLENBQVo7O0FBRUEsZ0JBQVEzSCxLQUFSO0FBQ0EsaUJBQUssQ0FBTDtBQUNDMUQsMEJBQVUsR0FBVjtBQUNBO0FBQ0QsaUJBQUssRUFBTDtBQUNDcUYsd0JBQVEsQ0FBUjtBQUNBckYsMEJBQVUsR0FBVjtBQUNBO0FBQ0QsaUJBQUssRUFBTDtBQUNDcUYsd0JBQVFBLFFBQVEsQ0FBUixHQUFZLENBQXBCO0FBQ0FyRiwwQkFBVSxHQUFWO0FBQ0E7QUFDRCxpQkFBSyxFQUFMO0FBQ0NBLDBCQUFVLEdBQVY7QUFDQTtBQWREO0FBZ0JBQSxrQkFBVWUsYUFBYXNFLEtBQWIsQ0FBVjtBQUNBO0FBQ0QsV0FBT3JGLE1BQVA7QUFDQSxDOzs7Ozs7QUN6bEJELCtDIiwiZmlsZSI6Ii4vbGlicmFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGRzcHV0aWxcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInBkc3B1dGlsXCJdID0gZmFjdG9yeShyb290W1wiJFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlOWMyNjhlZmUyYjBkZmQ1YWQzNiIsIi8qKlxyXG4gICAgQ29tbW9uIHV0aWxpdGllcyBmb3Igd29ya2luZyB3aXRoIFNoYXJlUG9pbnRcclxuICAgIEBtb2R1bGUgcGRzcHV0aWxcclxuICovXHJcbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG5jb25zdCBwcm9jZXNzUm93ID0gZnVuY3Rpb24gKHJvdykge1xyXG4gICAgdmFyIGZpbmFsVmFsID0gJyc7XHJcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIHZhciBpbm5lclZhbHVlID0gcm93W2pdID09PSBudWxsID8gJycgOiByb3dbal0udG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAocm93W2pdIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICBpbm5lclZhbHVlID0gcm93W2pdLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXN1bHQgPSBpbm5lclZhbHVlLnJlcGxhY2UoL1wiL2csICdcIlwiJyk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zZWFyY2goLyhcInwsfFxcbikvZykgPj0gMCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSAnXCInICsgcmVzdWx0ICsgJ1wiJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGogPiAwKSB7XHJcbiAgICAgICAgICAgIGZpbmFsVmFsICs9ICcsJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxWYWwgKz0gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpbmFsVmFsICsgJ1xcclxcbic7XHJcbn07XHJcbmNvbnN0IHJlYWR5ID0gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICBpZiAoIW9iai5yZWFkeUZpcmVkKSB7XHJcbiAgICAgICAgLy8gdGhpcyBtdXN0IGJlIHNldCB0byB0cnVlIGJlZm9yZSB3ZSBzdGFydCBjYWxsaW5nIGNhbGxiYWNrc1xyXG4gICAgICAgIG9iai5yZWFkeUZpcmVkID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5yZWFkeUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gaWYgYSBjYWxsYmFjayBoZXJlIGhhcHBlbnMgdG8gYWRkIG5ldyByZWFkeSBoYW5kbGVycyxcclxuICAgICAgICAgICAgLy8gdGhlIGRvY1JlYWR5KCkgZnVuY3Rpb24gd2lsbCBzZWUgdGhhdCBpdCBhbHJlYWR5IGZpcmVkXHJcbiAgICAgICAgICAgIC8vIGFuZCB3aWxsIHNjaGVkdWxlIHRoZSBjYWxsYmFjayB0byBydW4gcmlnaHQgYWZ0ZXJcclxuICAgICAgICAgICAgLy8gdGhpcyBldmVudCBsb29wIGZpbmlzaGVzIHNvIGFsbCBoYW5kbGVycyB3aWxsIHN0aWxsIGV4ZWN1dGVcclxuICAgICAgICAgICAgLy8gaW4gb3JkZXIgYW5kIG5vIG5ldyBvbmVzIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHJlYWR5TGlzdFxyXG4gICAgICAgICAgICAvLyB3aGlsZSB3ZSBhcmUgcHJvY2Vzc2luZyB0aGUgbGlzdFxyXG4gICAgICAgICAgICBvYmoucmVhZHlMaXN0W2ldLmZuLmNhbGwod2luZG93LCBvYmoucmVhZHlMaXN0W2ldLmN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iai5yZWFkeUxpc3QgPSBbXTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHJlYWR5U3RhdGVDaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICggZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiICkge1xyXG4gICAgICAgIHJlYWR5KCk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IGd1aWRIZXhDb2RlcyA9IFsnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICdhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZiddO1xyXG5jb25zdCBjaGVja0RlcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB2YXIgZGVwMSA9IFByb21pc2U7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlByb21pc2UgQVBJIGlzIHJlcXVpcmVkIGZvciBzcFV0aWwgbGlicmFyeSwgcGxlYXNlIHBvbHlmaWxsIFByb21pc2UgdG8gY29udGludWUuXCIpO1xyXG4gICAgfVxyXG59O1xyXG4vL3RoaXMgaXMgdG8gZW5zdXJlIG5lZWQgZGVwZW5kZW5jaWVzIGFyZSBwcmVzZW50XHJcbmNoZWNrRGVwKCk7XHJcblxyXG5cclxuLyoqXHJcbiAgICAgKiBTYXZlcyBTUCBvdXQgb2YgdGhlIGJveCBmb3JtIEVkaXRmb3JtLCBOZXdmb3JtXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2Zvcm1JZF1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzYXZlQnV0dG9uVmFsdWVcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gc3BTYXZlRm9ybShmb3JtSWQsIHNhdmVCdXR0b25WYWx1ZSkge1xyXG4gICAgaWYgKCFQcmVTYXZlSXRlbSgpKSB7cmV0dXJuIGZhbHNlO31cclxuICAgIGlmIChmb3JtSWQgJiYgU1BDbGllbnRGb3Jtcy5DbGllbnRGb3JtTWFuYWdlci5TdWJtaXRDbGllbnRGb3JtKGZvcm1JZCkpIHtyZXR1cm4gZmFsc2U7fVxyXG4gICAgV2ViRm9ybV9Eb1Bvc3RCYWNrV2l0aE9wdGlvbnMobmV3IFdlYkZvcm1fUG9zdEJhY2tPcHRpb25zKHNhdmVCdXR0b25WYWx1ZSwgXCJcIiwgdHJ1ZSwgXCJcIiwgXCJcIiwgZmFsc2UsIHRydWUpKTtcclxufVxyXG4vKipcclxuICAgICAqIEludm9rZXMgdGhlIGNhbGxiYWNrIHdoZW4gZG9tIGlzIHJlYWR5XHJcbiAgICAgKiBjb250ZXh0IGlzIHBhc3NlZCB0byB0aGUgY2FsbCBiYWNrIGFzIGZpcnN0IHBhcmFtZXRlclxyXG4gICAgICogQHBhcmFtIHtyZXF1ZXN0Q2FsbGJhY2t9IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBkb21SZWFkeShjYWxsYmFjaywgY29udGV4dCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBkb20gaXMgcmVhZHlcclxuICAgICAqXHJcbiAgICAgKiBAY2FsbGJhY2sgcmVxdWVzdENhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0geyp9IGNvbnRleHRcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgIHJlYWR5TGlzdDogW10sXHJcbiAgICAgICAgcmVhZHlGaXJlZDogZmFsc2UsXHJcbiAgICAgICAgcmVhZHlFdmVudEhhbmRsZXJzSW5zdGFsbGVkOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2FsbGJhY2sgZm9yIGRvY1JlYWR5KGZuKSBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XHJcbiAgICB9XHJcbiAgICAvLyBpZiByZWFkeSBoYXMgYWxyZWFkeSBmaXJlZCwgdGhlbiBqdXN0IHNjaGVkdWxlIHRoZSBjYWxsYmFja1xyXG4gICAgLy8gdG8gZmlyZSBhc3luY2hyb25vdXNseSwgYnV0IHJpZ2h0IGF3YXlcclxuICAgIGlmIChvYmoucmVhZHlGaXJlZCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhjb250ZXh0KTtcclxuICAgICAgICB9LCAxKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGFkZCB0aGUgZnVuY3Rpb24gYW5kIGNvbnRleHQgdG8gdGhlIGxpc3RcclxuICAgICAgICBvYmoucmVhZHlMaXN0LnB1c2goe2ZuOiBjYWxsYmFjaywgY3R4OiBjb250ZXh0fSk7XHJcbiAgICB9XHJcbiAgICAvLyBpZiBkb2N1bWVudCBhbHJlYWR5IHJlYWR5IHRvIGdvLCBzY2hlZHVsZSB0aGUgcmVhZHkgZnVuY3Rpb24gdG8gcnVuXHJcbiAgICAvLyBJRSBvbmx5IHNhZmUgd2hlbiByZWFkeVN0YXRlIGlzIFwiY29tcGxldGVcIiwgb3RoZXJzIHNhZmUgd2hlbiByZWFkeVN0YXRlIGlzIFwiaW50ZXJhY3RpdmVcIlxyXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiB8fCAoIWRvY3VtZW50LmF0dGFjaEV2ZW50ICYmIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIikpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcmVhZHkob2JqKTtcclxuICAgICAgICB9LCAxKTtcclxuICAgIH0gZWxzZSBpZiAoIW9iai5yZWFkeUV2ZW50SGFuZGxlcnNJbnN0YWxsZWQpIHtcclxuICAgICAgICAvLyBvdGhlcndpc2UgaWYgd2UgZG9uJ3QgaGF2ZSBldmVudCBoYW5kbGVycyBpbnN0YWxsZWQsIGluc3RhbGwgdGhlbVxyXG4gICAgICAgIGlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0IGNob2ljZSBpcyBET01Db250ZW50TG9hZGVkIGV2ZW50XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlYWR5KG9iaik7XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgLy8gYmFja3VwIGlzIHdpbmRvdyBsb2FkIGV2ZW50XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWFkeShvYmopO1xyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbXVzdCBiZSBJRVxyXG4gICAgICAgICAgICBkb2N1bWVudC5hdHRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLCByZWFkeVN0YXRlQ2hhbmdlKTtcclxuICAgICAgICAgICAgd2luZG93LmF0dGFjaEV2ZW50KFwib25sb2FkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlYWR5KG9iaik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYmoucmVhZHlFdmVudEhhbmRsZXJzSW5zdGFsbGVkID0gdHJ1ZTtcclxuICAgIH1cclxufSBcclxuLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGphdmFzY3JpcHQgdHlwZSBpbiBsb3dlcmNhc2UsIGV4IGFycmF5IG9iamVjdFxyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YVR5cGUoaXRlbSkge1xyXG5cclxuXHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZW0pLm1hdGNoKC9cXHMoW2EtekEtWl0rKS8pWzFdLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgbG93ZXIgY2FzZSBlbGVtZW50IHRhZyBuYW1lIGV4IGRpdlxyXG4gICAgICogQHBhcmFtIHsoSlF1ZXJ5fEhUTUxFbGVtZW50KX0gZWxlbWVudFxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRUYWdOYW1lKGVsZW1lbnQpIHtcclxuXHR2YXIgZWxlO1xyXG5cdGlmIChlbGVtZW50IGluc3RhbmNlb2YgJCkge1xyXG5cdFx0ZWxlID0gZWxlbWVudC5wcm9wKCd0YWdOYW1lJyk7XHJcblx0fWVsc2Uge1xyXG5cdFx0ZWxlID0gZWxlbWVudC50YWdOYW1lO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGVsZS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcbi8qKlxyXG4gICAgICogVGFrZXMgYSBmdW5jdGlvbnMgYXJndW1lbnRzIGFuZCBjb252ZXJ0cyBpdCB0byBhbiBhcnJheVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJnc1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0QXRcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFyZ3NDb252ZXJ0ZXIoYXJncywgc3RhcnRBdCkge1xyXG5cdHZhciBnaXZlQmFjayA9IFtdLFxyXG5cdFx0bnVtYmVyVG9TdGFydEF0LFxyXG5cdFx0dG90YWwgPSBhcmdzLmxlbmd0aDtcclxuXHRmb3IgKG51bWJlclRvU3RhcnRBdCA9IHN0YXJ0QXQgfHwgMDsgbnVtYmVyVG9TdGFydEF0IDwgdG90YWw7IG51bWJlclRvU3RhcnRBdCsrKXtcclxuXHRcdGdpdmVCYWNrLnB1c2goYXJnc1tudW1iZXJUb1N0YXJ0QXRdKTtcclxuXHR9XHJcblx0cmV0dXJuIGdpdmVCYWNrO1xyXG59XHJcbi8qKlxyXG4gICAgICogSW5zZXJ0cyBhbiBpdGVtIG9yIGl0ZW1zIHN0YXJ0aW5nIGF0IHRoZSBwYXNzZWQgaW5kZXhcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5SW5zZXJ0QXRJbmRleChhcnJheSwgaW5kZXgpIHtcclxuXHQvL2FsbCBpdGVtcyBwYXN0IGluZGV4IHdpbGwgYmUgaW5zZXJ0ZWQgc3RhcnRpbmcgYXQgaW5kZXggbnVtYmVyXHJcblx0dmFyIGFycmF5VG9JbnNlcnQgPSBhcmdzQ29udmVydGVyKGFyZ3VtZW50cywgMik7XHJcblx0QXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheSwgW2luZGV4LCAwXS5jb25jYXQoYXJyYXlUb0luc2VydCkpO1xyXG5cdHJldHVybiBhcnJheTtcclxufVxyXG4vKipcclxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIGluZGV4IG9mIHRoZSBwYXNzZWQgYXJyYXlcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5UmVtb3ZlQXRJbmRleChhcnJheSwgaW5kZXgpIHtcclxuXHRBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5LCBbaW5kZXgsIDFdKTtcclxuXHRyZXR1cm4gYXJyYXk7XHJcbn1cclxuLyoqXHJcbiAgICAgKiBBZGRzIHRoZSBiZWdpbm5pbmcgc3RyaW5nIHRvIGFuIGVtYWlsIGFuZCBlbmNvZGVzIGl0IGZvciB1cmwgdXNlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWNjdE5hbWVcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVBY2NvdW50TmFtZShhY2N0TmFtZSkge1xyXG5cdHZhciBjaGVjayA9IC9eaTowI1xcLmZcXHxtZW1iZXJzaGlwXFx8LyxcclxuXHRcdGZvcm1hdHRlZE5hbWU7XHJcblxyXG5cdGlmIChjaGVjay50ZXN0KGFjY3ROYW1lKSkge1xyXG5cdFx0Zm9ybWF0dGVkTmFtZSA9IGFjY3ROYW1lO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRmb3JtYXR0ZWROYW1lID0gJ2k6MCMuZnxtZW1iZXJzaGlwfCcgKyBhY2N0TmFtZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoZm9ybWF0dGVkTmFtZSk7XHJcbn1cclxuLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBpbiB0aGUgZ2l2ZW4gdGltZSBvciBkZWZhdWx0IHRvIDUgc2Vjc1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVcclxuICAgICAqIEByZXR1cm5zIHtwcm9taXNlfVxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvbWlzZURlbGF5KHRpbWUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgbGV0IGFtb3VudCA9IHRpbWUgfHwgNTAwMDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICB9LCBhbW91bnQpO1xyXG4gICAgfSk7XHJcbn1cclxuLyoqQ2xhc3MgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBzZXNTdG9yYWdlIFxyXG4gKiBcclxuICogQGNsYXNzIHNlc1N0b3JhZ2VcclxuKi9cclxuZXhwb3J0IGNsYXNzIHNlc1N0b3JhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlQWRhcHRvciA9IHNlc3Npb25TdG9yYWdlO1xyXG4gICAgfVxyXG5cdHRvVHlwZShvYmopIHtcclxuXHRcdHJldHVybiAoe30pLnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXFxzKFthLXp8QS1aXSspLylbMV0udG9Mb3dlckNhc2UoKTtcclxuXHR9XHJcbiAgICAvKipcclxuICAgICAgICAgKiBSZXRyaWV2ZXMgYW4gaXRlbSBmcm9tIHNlc3Npb24gc3RvcmFnZVxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICovXHJcblx0Z2V0SXRlbShrZXkpIHtcclxuXHRcdHZhciBpdGVtID0gdGhpcy5zdG9yYWdlQWRhcHRvci5nZXRJdGVtKGtleSk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0aXRlbSA9IEpTT04ucGFyc2UoaXRlbSk7XHJcblx0XHR9IGNhdGNoIChlKSB7fVxyXG5cclxuXHRcdHJldHVybiBpdGVtO1xyXG5cdH1cclxuICAgIC8qKlxyXG4gICAgICAgICAqIFN0b3JlcyBhbiBpdGVtIGZyb20gc2Vzc2lvbiBzdG9yYWdlXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICovXHJcblx0c2V0SXRlbShrZXksIHZhbHVlKSB7XHJcblx0XHR2YXIgdHlwZSA9IHRoaXMudG9UeXBlKHZhbHVlKTtcclxuXHJcblx0XHRpZiAoL29iamVjdHxhcnJheS8udGVzdCh0eXBlKSkge1xyXG5cdFx0XHR2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnN0b3JhZ2VBZGFwdG9yLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcblx0fVxyXG4gICAgLyoqXHJcbiAgICAgICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gc2Vzc2lvbiBzdG9yYWdlXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgKi9cclxuXHRyZW1vdmVJdGVtKGtleSkge1xyXG5cdFx0dGhpcy5zdG9yYWdlQWRhcHRvci5yZW1vdmVJdGVtKGtleSk7XHJcblx0fVxyXG59XHJcbi8qKkNsYXNzIGNyZWF0ZXMgYSBuZXcgcHViIHN1YiBvYmplY3RcclxuICogQGNsYXNzIFN1Ymxpc2hcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdWJsaXNoIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICAgICAqIFB1Ymxpc2hlcyBkYXRhIHRvIHN1YnNjcmliZXJzXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkXHJcbiAgICAgICAgICogQHBhcmFtIHsuLi5hcmdzfSAtIGFsbCBpdGVtcyBwYXNzZWQgaW4gd2lsbCBiZSBhZGRlZCBhcyBwYXJhbWV0ZXJzIG9mIGZ1bmN0aW9uIHdpdGggc2FtZSBpZCBcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICovXHJcbiAgICBwdWJsaXNoKGlkLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgdmFyIGlpLFxyXG4gICAgICAgICAgICB0b3RhbDtcclxuICAgICAgICBpZiAoIXRoaXMuY2FjaGVbaWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVbaWRdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvdGFsID0gdGhpcy5jYWNoZVtpZF0ubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaWk9MDsgaWkgPCB0b3RhbDsgaWkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlW2lkXVtpaV0uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICAgICAqIFN1YnNjcmliZXMgYSBmdW5jdGlvbiB0byAgYW4gaWRcclxuICAgICAgICAgKiBmb3IgdGhlIGZuIHRoZSBmdW5jdGlvbiB3aWxsIHJlY2lldmUgd2hhdGV2ZXIgYXJndW1lbnRzIGFyZSBwYXNzZWQgdG8gcHVibGlzaFxyXG4gICAgICAgICAqIHNvIHlvdXIgcGFyYW1ldGVycyB0byB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlIHdoYXRldmVyIHlvdSBhcmUgZ29pbmcgdG8gcGFzcyBwdWJsaXNoIHRvIHRoZSBnaXZlbiBpZFxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxyXG4gICAgICAgICAqIEBwYXJhbSB7c3Vic2NyaXB0aW9ufSBmblxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgKi9cclxuICAgIHN1YnNjcmliZShpZCwgZm4pIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBmdW5jdGlvbiB0eXBlZGVmIGZvciBjYWxsYmFjayB0byBzdWJzY3JpYmUgdG8gYW4gZW1pdHRlZCBldmVudC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBjYWxsYmFjayBzdWJzY3JpcHRpb25cclxuICAgICAgICAgKiBAcGFyYW0gey4uLmFyZ3N9IC0gd2hhdGV2ZXIgeW91IHBhc3MgaW50byBwdWJsaXNoIHdpbGwgYmUgcGFzc2VkIGluIGhlcmVcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH0gcmVzcG9uc2VNZXNzYWdlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKCF0aGlzLmNhY2hlW2lkXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlW2lkXSA9IFtmbl07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZVtpZF0ucHVzaChmbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgICAgICogVW5zdWJzY3JpYmVzIGEgZnVuY3Rpb25cclxuICAgICAgICAgKiBmb3IgdGhlIGZuIHRoZSBmdW5jdGlvbiBwYXNzZWQgbXVzdCBiZSBhbiBleGFjdCByZWZlcmVuY2UgdG8gdGhlIGZ1bmN0aW9uIG9yIGl0IHdpbGwgbm90IG1hdGNoXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkXHJcbiAgICAgICAgICogQHBhcmFtIHt1bnN1Yn0gZm5cclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICovXHJcbiAgICB1bnN1YnNjcmliZShpZCwgZm4pIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGEgaWRlbnRpZmllciBmb3IgbWF0Y2hpbmcgc28gaXQgY2FuIGJlIHJlbW92ZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAY2FsbGJhY2sgdW5zdWJcclxuICAgICAgICAgKiBAcGFyYW0gey4uLmFyZ3N9IC0gd2hhdGV2ZXIgeW91IHBhc3MgaW50byBwdWJsaXNoIHdpbGwgYmUgcGFzc2VkIGluIGhlcmVcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH0gLSByZXNwb25zZU1lc3NhZ2VcclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgaWksXHJcbiAgICAgICAgICAgIHRvdGFsO1xyXG4gICAgICAgIGlmICghdGhpcy5jYWNoZVtpZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbCA9IHRoaXMuY2FjaGVbaWRdLmxlbmd0aDtcclxuICAgICAgICBmb3IoaWkgPSAwOyBpaSA8IHRvdGFsOyBpaSsrKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FjaGVbaWRdW2lpXSA9PT0gZm4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVbaWRdLnNwbGljZShpaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAgICAgKiBDbGVhcnMgdGhlIGludGVybmFsIGNhY2hlIHNvIGFsbCBzdWJzY3JpYmVkIGZ1bmN0aW9uIGFsbCBiZSByZW1vdmVkXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAqL1xyXG4gICAgY2xlYXIoaWQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FjaGVbaWRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYWNoZVtpZF0gPSBbXTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICAgICAqIENyZWF0ZXMgYSBDU1YgZmlsZSBmcm9tIHRoZSBwYXNzZWQgYXJyYXlcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlbmFtZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXVtdfSByb3dzXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydFRvQ1NWKGZpbGVuYW1lLCByb3dzKSB7XHJcbiAgICAvKlxyXG4gICAgICAgIHRvZG8gZml4LCB0byB1c2UgZmlsZXNhdmVyXHJcbiAgICAgICAgcm93cyBzaG91bGQgYmVcclxuICAgICAgICBleHBvcnRUb0NzdignZXhwb3J0LmNzdicsIFtcclxuICAgICAgICAgICAgWyduYW1lJywnZGVzY3JpcHRpb24nXSxcdFxyXG4gICAgICAgICAgICBbJ2RhdmlkJywnMTIzJ10sXHJcbiAgICAgICAgICAgIFsnam9uYScsJ1wiXCInXSxcclxuICAgICAgICAgICAgWydhJywnYiddLFxyXG5cclxuICAgICAgICBdKVxyXG4gICAgXHJcbiAgICAqL1xyXG4gICAgdmFyIGNzdkZpbGUgPSAnJztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNzdkZpbGUgKz0gcHJvY2Vzc1Jvdyhyb3dzW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3ZGaWxlXSwgeyB0eXBlOiAndGV4dC9jc3Y7Y2hhcnNldD11dGYtODsnIH0pO1xyXG4gICAgaWYgKG5hdmlnYXRvci5tc1NhdmVCbG9iKSB7IC8vIElFIDEwK1xyXG4gICAgICAgIG5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIGZpbGVuYW1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBpZiAobGluay5kb3dubG9hZCAhPT0gdW5kZWZpbmVkKSB7IC8vIGZlYXR1cmUgZGV0ZWN0aW9uXHJcbiAgICAgICAgICAgIC8vIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCBIVE1MNSBkb3dubG9hZCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgdmFyIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB1cmwpO1xyXG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgbGluay5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBTUCBwYWdlT2JqIHRoYXQgaXMgb24gYWxsIFNQIHBhZ2VzXHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFnZUluZm8oKSB7XHJcbiAgICBcclxuICAgIHJldHVybiB3aW5kb3cuX3NwUGFnZUNvbnRleHRJbmZvO1xyXG59XHJcbi8qKlxyXG4gICAgICogTmF2aWdhdGVzIHRoZSB1c2VyIHRvIHRoZSB1cmwgcGFzc2VkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNwR290b1VybCh1cmwpIHtcclxuXHJcbiAgICBTVFNOYXZpZ2F0ZSh1cmwpO1xyXG59XHJcbi8qKlxyXG4gICAgICogQ2xlYW5zIHRoZSBhamF4IHNlYXJjaCByZXN1bHRzIHRvIGFuIGFycmF5IG9mIG9iamVjdHNcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0W119IHJlc3VsdHNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IG5lZWRlZFByb3BzXHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0W119XHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBzcFNlYXJjaFJlc3VsdHNDbGVhbmVyKHJlc3VsdHMsIG5lZWRlZFByb3BzKSB7XHJcbiAgICBpZiAoIW5lZWRlZFByb3BzKSB7XHJcbiAgICAgICAgLy8gbm90aGluZyB0byBjb21wYXJlIHRvXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZWVkIGFycmF5IHRvIGNvbXBhcmUgdG8uJyk7XHJcbiAgICB9XHJcbiAgICB2YXIgaWksY2xlYW5Qcm9wcyxwcm9wZXJ0aWVzLHRvdGFsSXRlbXM7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdHMubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICBjbGVhblByb3BzID0ge307XHJcbiAgICAgICAgcHJvcGVydGllcyA9IGl0ZW0uQ2VsbHM7XHJcbiAgICAgICAgdG90YWxJdGVtcyA9IHByb3BlcnRpZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICBmb3IgKGlpID0gMDsgaWkgPCB0b3RhbEl0ZW1zOyBpaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKG5lZWRlZFByb3BzLmluZGV4T2YocHJvcGVydGllc1tpaV0uS2V5KSAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgY2xlYW5Qcm9wc1twcm9wZXJ0aWVzW2lpXS5LZXldID0gcHJvcGVydGllc1tpaV0uVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjbGVhblByb3BzO1xyXG4gICAgfSk7XHJcbn1cclxuLyoqXHJcbiAgICAgKiBMZXRzIHRoZSBzY3JpcHQga25vdyBpZiB0aGUgU1AgcGFnZSBpcyBpbiBlZGl0IG1vZGVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFnZUVkaXRNb2RlVGVzdCgpIHtcclxuXHJcbiAgICBpZiAoJCgnI01TT0xheW91dF9JbkRlc2lnbk1vZGUnKS52YWwoKSA9PT0gJzEnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gICAgICogSGlkZXMgdGhlIHJpYmJvbiBhdCB0aGUgdG9wIG9mIGFuIFNQIHBhZ2VcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gaGlkZVJpYmJvbigpIHtcclxuICAgIFxyXG4gICAgbGV0IHJpYmJvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzNC1yaWJib25yb3cnKSxcclxuICAgICAgICBjdXJyZW50SGVpZ2h0ID0gcGFyc2VJbnQocmliYm9uLnN0eWxlLmhlaWdodCwgMTApO1xyXG5cclxuICAgIHJpYmJvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBcclxuICAgIGlmICggY3VycmVudEhlaWdodCAhPT0gMCApIHtcclxuICAgICAgICBTZWxlY3RSaWJib25UYWIoXCJSaWJib24uUmVhZFwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChoaWRlUmliYm9uLCAzMDApO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IHBhcnNlID0gZnVuY3Rpb24ocGFyYW1zLCBwYWlycykge1xyXG4gICAgdmFyIHBhaXIgPSBwYWlyc1swXSxcclxuICAgICAgICBwYXJ0cyA9IHBhaXIuc3BsaXQoJz0nKSxcclxuICAgICAgICBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMF0pLFxyXG4gICAgICAgIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKSk7XHJcblxyXG4gICAgLy8gSGFuZGxlIG11bHRpcGxlIHBhcmFtZXRlcnMgb2YgdGhlIHNhbWUgbmFtZVxyXG4gICAgaWYgKHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHBhcmFtc1trZXldID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhcmFtc1trZXldID0gW10uY29uY2F0KHBhcmFtc1trZXldLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhaXJzLmxlbmd0aCA9PT0gMSA/IHBhcmFtcyA6IHBhcnNlKHBhcmFtcywgcGFpcnMuc2xpY2UoMSkpO1xyXG59O1xyXG4vKipcclxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IG9mIHRoZSBzZWFyY2ggcHJvcGVydGllcyBpbiBhIHVybFxyXG4gICAgICogQHJldHVybnMge29iamVjdH1cclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFVSTHBhcmFtZXRlcnMoKSB7XHJcbiAgICBsZXQgcGFyYXN0cmluZyA9IGxvY2F0aW9uLnNlYXJjaDtcclxuICAgIHJldHVybiBwYXJhc3RyaW5nLmxlbmd0aCA9PT0gMCA/IHt9IDogcGFyc2Uoe30sIHBhcmFzdHJpbmcuc3Vic3RyKDEpLnNwbGl0KCcmJykpO1xyXG59XHJcbi8qKlxyXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aGVuIHRoZSBwYXNzZWQgU1AgKG9ubHkpIHNjcmlwdCBmaWxlIGlzIGxvYWRlZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNjcmlwdE5hbWVcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvclNjcmlwdHNSZWFkeShzY3JpcHROYW1lKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICBFeGVjdXRlT3JEZWxheVVudGlsU2NyaXB0TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgIH0sIHNjcmlwdE5hbWUpO1xyXG5cclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gICAgICogTG9vcHMgdGhyb3VnaCBhbGwgcm93cyBvZiB0aGUgcGFzc2VkIHRhYmxlXHJcbiAgICAgKiBAcGFyYW0ge0pRdWVyeX0gdGFibGVcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oSlF1ZXJ5LCBudW1iZXIpOip9IGNiXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRhYmxlUm93TG9vcCh0YWJsZSwgY2IpIHtcclxuXHR2YXIgcm93cyA9IHRhYmxlLmNoaWxkcmVuKCd0Ym9keScpLmNoaWxkcmVuKCd0cicpLFxyXG5cdFx0dG90YWxSb3dzID0gcm93cy5sZW5ndGgsXHJcblx0XHQkcm93LFxyXG5cdFx0aWk7XHJcblxyXG5cdGZvciAoaWk9MDsgaWkgPCB0b3RhbFJvd3M7IGlpKyspIHtcclxuXHRcdCRyb3cgPSAkKHJvd3NbaWldKTtcclxuXHJcblx0XHRpZiAoY2IuY2FsbCh0aGlzLCAkcm93LCBpaSkgPT09IGZhbHNlKSB7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4vKipcclxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgc2NyaXB0IGZpbGUgaXMgbG9hZGVkLCBhbnkgc2NyaXB0IGZpbGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkU1BTY3JpcHQoZmlsZU5hbWUpIHtcclxuICAgIHZhciB1cmwsXHJcbiAgICAgICAgcGFnZUluZm8gPSBnZXRQYWdlSW5mbygpLFxyXG4gICAgICAgIGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzY3JpcHQnICksXHJcbiAgICAgICAgZmlsZVVybCA9IGAke3BhZ2VJbmZvLnNpdGVBYnNvbHV0ZVVybH0vX2xheW91dHMvMTUvYDtcclxuICAgICAgICAvL2ZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xyXG5cclxuICAgIHVybCA9IGZpbGVVcmwgKyBmaWxlTmFtZTtcclxuXHJcbiAgICBlbGUuc2V0QXR0cmlidXRlKCAnc3JjJywgdXJsICk7XHJcbiAgICBlbGUuc2V0QXR0cmlidXRlKCd0eXBlJywgXCJ0ZXh0L2phdmFzY3JpcHRcIik7XHJcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGVsZSk7XHJcbiAgICByZXR1cm4gd2FpdEZvclNjcmlwdHNSZWFkeShmaWxlTmFtZSk7XHJcbn1cclxuLyoqXHJcbiAqIFRlc3QgYSBzdHJpbmcgdG8gZW5zdXJlIGl0IGlzIGEgdmFsaWQgZ3VpZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZ3VpZCBcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRHdWlkKGd1aWQpIHtcclxuICAgIHZhciBhID0gL15be3xcXFxcKF0/WzAtOWEtZkEtRl17OH1bLV0/KFswLTlhLWZBLUZdezR9Wy1dPyl7M31bMC05YS1mQS1GXXsxMn1bXFxcXCl8fV0/JC87XHJcbiAgICByZXR1cm4gYS50ZXN0KGd1aWQpO1xyXG59XHJcbi8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgb3JpZ2luIG9mIHRoZSBjdXJyZW50IHNpdGVcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkxPcmlnaW4oKSB7XHJcbiAgICBsZXQgd2luID0gd2luZG93LmxvY2F0aW9uO1xyXG4gXHJcbiAgICBpZiAoIXdpbi5vcmlnaW4pIHtcclxuICAgICAgICB3aW4ub3JpZ2luID0gd2luLnByb3RvY29sICsgXCIvL1wiXHJcbiAgICAgICAgICAgICsgd2luLmhvc3RuYW1lXHJcbiAgICAgICAgICAgICsgKHdpbi5wb3J0ID8gJzonICsgd2luLnBvcnQgOiAnJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2luLm9yaWdpbjtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyBhIFNoYXJlUG9pbnQgR1VJRCBpbiBmb3JtYXRcclxuICogeHh4eHh4eHgteHh4eC14eHh4LXh4eHgteHh4eHh4eHh4eHh4IFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdVSUQoKSB7XHJcblx0dmFyIHJlc3VsdCA9ICcnO1xyXG5cclxuXHRmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgMzI7IGluZGV4KyspIHtcclxuXHRcdHZhciB2YWx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KTtcclxuXHJcblx0XHRzd2l0Y2ggKGluZGV4KSB7XHJcblx0XHRjYXNlIDg6XHJcblx0XHRcdHJlc3VsdCArPSAnLSc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAxMjpcclxuXHRcdFx0dmFsdWUgPSA0O1xyXG5cdFx0XHRyZXN1bHQgKz0gJy0nO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMTY6XHJcblx0XHRcdHZhbHVlID0gdmFsdWUgJiAzIHwgODtcclxuXHRcdFx0cmVzdWx0ICs9ICctJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDIwOlxyXG5cdFx0XHRyZXN1bHQgKz0gJy0nO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHJlc3VsdCArPSBndWlkSGV4Q29kZXNbdmFsdWVdO1xyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYnJhcnkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwiLFwicm9vdFwiOlwiJFwifVxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9