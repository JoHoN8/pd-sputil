(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else if(typeof exports === 'object')
		exports["pdsputil"] = factory(require("jquery"));
	else
		root["pdsputil"] = factory(root["$"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sublish", function() { return sublish; });
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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
    app name sputil
 */
var $ = __webpack_require__(0);

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

/**
     * Saves SP out of the box form Dispform, Editform, Newform
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
     * @param {function} callback
     * @param {object} context
     * @returns {void}
*/
function domReady(callback, context) {

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
     * @param {any} item
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
     * @param {any[]} args
     * @param {number} startAt
     * @returns {any[]}
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
     * @param {any[]} array
     * @param {number} index
     * @returns {any[]}
*/
function arrayInsertAtIndex(array, index) {
    //all items past index will be inserted starting at index number
    var arrayToInsert = Array.prototype.splice.apply(arguments, [2]);
    Array.prototype.splice.apply(array, [index, 0].concat(arrayToInsert));
    return array;
}
/**
     * Removes an item from index of the passed array
     * @param {any[]} array
     * @param {number} index
     * @returns {any[]}
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
    var check = /^i:0\#\.f\|membership\|/,
        formattedName;

    if (check.test(acctName)) {
        formattedName = acctName;
    } else {
        formattedName = 'i:0#.f|membership|' + acctName;
    }

    return encodeURIComponent(formattedName);
}
/**
     * Returns a jquery promise that will resolve in the given time or default to 5 secs
     * @param {number} time
     * @returns {promise}
*/
function promiseDelay(time) {
    var def = $.Deferred(),
        amount = time || 5000;

    setTimeout(function () {
        def.resolve();
    }, amount);
    return def.promise();
}
/**Class creates a new instance of sesStorage */
var sesStorage = function () {
    //frontEnd to session Storage
    /**
     * Create a new sesStorage
    */
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
             * @returns {any}
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
             * @param {any} value
             * @returns {any}
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
/**Class creates a new pub sub object */
var sublish = function () {
    /**
         * Creates a new sublish
    */
    function sublish() {
        _classCallCheck(this, sublish);

        this.cache = {};
    }
    /**
         * Publishes data to subscribers
         * @param {string} id
         * @returns {void}
    */


    _createClass(sublish, [{
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
             * @param {function} fn
             * @returns {void}
        */

    }, {
        key: 'subscribe',
        value: function subscribe(id, fn) {
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
             * @param {function} fn
             * @returns {void}
        */

    }, {
        key: 'unsubscribe',
        value: function unsubscribe(id, fn) {
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

    return sublish;
}();
/**
     * Creates a CSV file from the passed array
     * @param {string} filename
     * @param {string[][]} rows
     * @returns {void}
*/
function exportToCSV(filename, rows) {
    /*
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
     * @param {string[]} index
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
     * Returns a jquery promise that is resolved when the passed SP (only) script file is loaded
     * @param {string} scriptName
     * @returns {Promise}
*/
function waitForScriptsReady(scriptName) {
    var def = $.Deferred();

    ExecuteOrDelayUntilScriptLoaded(function () {
        return def.resolve('Ready');
    }, scriptName);

    return def.promise();
}
/**
     * Loops through all rows of the passed table
     * @param {JQuery} table
     * @param {function(JQuery, number):any} cb
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
     * Returns a jquery promise that resolves when the script file is loaded, any script file
     * @param {string} fileName
     * @returns {Promise}
*/
function loadSPScript(fileName) {
    //fileName example SP.Search.js
    return $.getScript('/_layouts/15/' + fileName);
}
/**
 * Test a string to ensure it is a valid guid
 * @param {string} guid 
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
};

/***/ })
/******/ ]);
});