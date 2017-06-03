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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sublish = exports.sesStorage = exports.profileProps = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         app name sputil
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


exports.spSaveForm = spSaveForm;
exports.getDataType = getDataType;
exports.elementTagName = elementTagName;
exports.argsConverter = argsConverter;
exports.arrayInsertAtIndex = arrayInsertAtIndex;
exports.arrayRemoveAtIndex = arrayRemoveAtIndex;
exports.encodeAccountName = encodeAccountName;
exports.promiseDelay = promiseDelay;
exports.exportToCSV = exportToCSV;
exports.getPageInfo = getPageInfo;
exports.spGotoUrl = spGotoUrl;
exports.spSearchResultsCleaner = spSearchResultsCleaner;
exports.pageEditModeTest = pageEditModeTest;
exports.hideRibbon = hideRibbon;
exports.URLparameters = URLparameters;
exports.waitForScriptsReady = waitForScriptsReady;
exports.tableRowLoop = tableRowLoop;
exports.loadSPScript = loadSPScript;

var _jquery = __webpack_require__(0);

var $ = _interopRequireWildcard(_jquery);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var profileProps = exports.profileProps = ['PreferredName', 'SPS-JobTitle', 'WorkPhone', 'OfficeNumber', 'WorkEmail', 'doeaSpecialAccount', 'SPS-Department', 'AccountName', 'SPS-Location', 'PositionID', 'Manager', 'Office', "LastName", "FirstName"];

function spSaveForm(formId, saveButtonValue) {
    if (!PreSaveItem()) {
        return false;
    }
    if (formId && SPClientForms.ClientFormManager.SubmitClientForm(formId)) {
        return false;
    }
    WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(saveButtonValue, "", true, "", "", false, true));
}
function getDataType(item) {

    return Object.prototype.toString.call(item).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function elementTagName(element) {
    var ele;
    if (element instanceof $) {
        ele = element.prop('tagName');
    } else {
        ele = element.tagName;
    }

    return ele.toLowerCase();
}
function argsConverter(args, startAt) {
    var giveBack = [],
        numberToStartAt,
        total = args.length;
    for (numberToStartAt = startAt || 0; numberToStartAt < total; numberToStartAt++) {
        giveBack.push(args[numberToStartAt]);
    }
    return giveBack;
}
function arrayInsertAtIndex(array, index) {
    //all items past index will be inserted starting at index number
    var arrayToInsert = Array.prototype.splice.apply(arguments, [2]);
    Array.prototype.splice.apply(array, [index, 0].concat(arrayToInsert));
    return array;
}
function arrayRemoveAtIndex(array, index) {
    Array.prototype.splice.apply(array, [index, 1]);
    return array;
}
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
function promiseDelay(time) {
    var def = $.Deferred(),
        amount = time || 5000;

    setTimeout(function () {
        def.resolve();
    }, amount);
    return def.promise();
}

var sesStorage = exports.sesStorage = function () {
    //frontEnd to session Storage
    function sesStorage() {
        _classCallCheck(this, sesStorage);

        this.storageAdaptor = sessionStorage;
    }

    _createClass(sesStorage, [{
        key: 'toType',
        value: function toType(obj) {
            return {}.toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
        }
    }, {
        key: 'getItem',
        value: function getItem(key) {
            var item = this.storageAdaptor.getItem(key);

            try {
                item = JSON.parse(item);
            } catch (e) {}

            return item;
        }
    }, {
        key: 'setItem',
        value: function setItem(key, value) {
            var type = this.toType(value);

            if (/object|array/.test(type)) {
                value = JSON.stringify(value);
            }

            this.storageAdaptor.setItem(key, value);
        }
    }, {
        key: 'removeItem',
        value: function removeItem(key) {
            this.storageAdaptor.removeItem(key);
        }
    }]);

    return sesStorage;
}();

var sublish = exports.sublish = function () {
    function sublish() {
        _classCallCheck(this, sublish);

        this.cache = {};
    }

    _createClass(sublish, [{
        key: 'publish',
        value: function publish(id) {
            var args = argsConverter(arguments, 1),
                ii,
                total;
            if (!this.cache[id]) {
                this.cache[id] = [];
            }
            total = this.cache[id].length;
            for (ii = 0; ii < total; ii++) {
                this.cache[id][ii].apply(this, args);
            }
        }
    }, {
        key: 'subscribe',
        value: function subscribe(id, fn) {
            if (!this.cache[id]) {
                this.cache[id] = [fn];
            } else {
                this.cache[id].push(fn);
            }
        }
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
function getPageInfo() {

    return _spPageContextInfo;
}
function spGotoUrl(url) {

    STSNavigate(url);
}
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
function pageEditModeTest() {

    if ($('#MSOLayout_InDesignMode').val() === '1') {
        return false;
    } else {
        return true;
    }
}
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
function URLparameters() {
    var parastring = location.search;
    return parastring.length === 0 ? {} : parse({}, parastring.substr(1).split('&'));
}
function waitForScriptsReady(scriptName) {
    var def = $.Deferred();

    ExecuteOrDelayUntilScriptLoaded(function () {
        return def.resolve('Ready');
    }, scriptName);

    return def.promise();
}
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
function loadSPScript(fileName) {
    //fileName example SP.Search.js
    return $.getScript('/_layouts/15/' + fileName);
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=pd-sputil.js.map