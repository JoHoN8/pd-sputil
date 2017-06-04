/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = pdsputil;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _library = __webpack_require__(1);

var spu = _interopRequireWildcard(_library);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import * as jquery from 'jquery';
var $ = __webpack_require__(0); /*
                           tests for spUtil.js
                           6/1/17
                           
                           each test will run and log the function name and true if passes
                           or function name and false if fails
                           */

$.noConflict();

var testProcess = function () {
    var objProto = {
        test_profileProps: function test_profileProps() {

            var type = Array.isArray(spu.profileProps);
            if (type === true) {
                console.log("profileProps", true);
            }
            return this;
        },
        test_getDataType: function test_getDataType() {

            var ary = [];
            var type = spu.getDataType(ary);

            if (type === 'array') {
                console.log("getDataType", true);
            } else {
                console.log("getDataType", false);
            }
            return this;
        },
        test_elementTagName: function test_elementTagName() {

            var ele = $("<div/>");
            var tagName = spu.elementTagName(ele);

            if (tagName === 'div') {
                console.log("elementTagName", true);
            } else {
                console.log("elementTagName", false);
            }
            return this;
        },
        test_argsConverter: function test_argsConverter() {
            var result = spu.argsConverter(arguments, 1);

            if (Array.isArray(result) && result.length > 0) {
                console.log("argsConverter", true);
            } else {
                console.log("argsConverter", false);
            }
            return this;
        },
        test_arrayInsertAtIndex: function test_arrayInsertAtIndex() {

            var ary = [1, 2, 3, 5];
            spu.arrayInsertAtIndex(ary, 3, 4);

            if (ary[3] === 4) {
                console.log("arrayInsertAtIndex", true);
            } else {
                console.log("arrayInsertAtIndex", false);
            }
            return this;
        },
        test_arrayRemoveAtIndex: function test_arrayRemoveAtIndex() {

            var ary = [1, 2, 3, 4, 5];
            spu.arrayRemoveAtIndex(ary, 1);

            if (ary[1] !== 2) {
                console.log("arrayRemoveAtIndex", true);
            } else {
                console.log("arrayRemoveAtIndex", false);
            }
            return this;
        },
        test_encodeAccountName: function test_encodeAccountName() {

            var acctName = spu.encodeAccountName("kjkfjdk@deghi.com");

            if (acctName) {
                console.log("encodeAccountName", true);
            } else {
                console.log("encodeAccountName", false);
            }
            return this;
        },
        test_getPageInfo: function test_getPageInfo() {

            var data = spu.getPageInfo();

            if (data) {
                console.log("getPageInfo", true);
            } else {
                console.log("getPageInfo", false);
            }
            return this;
        },
        test_hideRibbon: function test_hideRibbon() {

            spu.domReady(function () {
                spu.hideRibbon();
            });
            return this;
        },
        test_URLparameters: function test_URLparameters() {

            var data = spu.URLparameters();

            if (Object.keys(data).length > 0) {
                console.log("urlParams", true);
            } else {
                console.log("urlParams", false);
            }
            return this;
        },
        test_sesStorage: function test_sesStorage() {

            var obj = new spu.sesStorage();

            obj.setItem("stuff", 33);
            var data = obj.getItem("stuff");

            if (data === 33) {
                console.log("sessionStorage", true);
            } else {
                console.log("sessionStorage", false);
            }
            return this;
        },
        test_sublish: function test_sublish() {

            var obj = new spu.sublish();
            var val = void 0;

            obj.subscribe('33', function (num) {
                val = num;
            });

            obj.publish('1', 33);

            if (val === 33) {
                console.log("sublish", true);
            } else {
                console.log("sublish", false);
            }
            return this;
        },
        test_waitForScriptsReady: function test_waitForScriptsReady() {

            return spu.waitForScriptsReady("SP.js").then(function () {

                console.log("sessionStorage", true);
            }).fail(function () {
                console.log("sessionStorage", false);
            });
        },
        test_loadSPScript: function test_loadSPScript() {

            return spu.loadSPScript("sp.taxonomy.js").then(function () {

                console.log("sessionStorage", true);
            }).fail(function () {
                console.log("sessionStorage", false);
            });
        },
        // test_spGotoUrl: function() {},
        // test_tableRowLoop: function() {},
        // test_promiseDelay: function() {},
        // test_exportToCSV: function() {},
        init: function init() {

            var self = this;

            this.test_profileProps().test_getDataType().test_elementTagName().test_argsConverter("11", "22", "33").test_arrayInsertAtIndex().test_arrayRemoveAtIndex().test_encodeAccountName().test_getPageInfo().test_hideRibbon().test_URLparameters().test_sesStorage().test_sublish().test_waitForScriptsReady().then(function () {
                self.test_loadSPScript();
            });
        }
    };

    return function () {
        var obj = Object.create(objProto);
        return obj;
    };
}();

testProcess().init();

/***/ })
/******/ ]);
//# sourceMappingURL=spUtil_tests.js.map