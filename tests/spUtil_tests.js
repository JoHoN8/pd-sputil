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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = library;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _library = __webpack_require__(0);

var spu = _interopRequireWildcard(_library);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var testProcess = function () {

    var objProto = {
        test_profileProps: function test_profileProps() {

            var type = Array.isArray(this.spu.profileProps);
            if (type === true) {
                console.log("profileProps", true);
            }
        },
        test_getDataType: function test_getDataType() {},
        test_elementTagName: function test_elementTagName() {},
        test_argsConverter: function test_argsConverter() {},
        test_arrayInsertAtIndex: function test_arrayInsertAtIndex() {},
        test_arrayRemoveAtIndex: function test_arrayRemoveAtIndex() {},
        test_encodeAccountName: function test_encodeAccountName() {},
        test_getPageInfo: function test_getPageInfo() {},
        test_spGotoUrl: function test_spGotoUrl() {},
        test_hideRibbon: function test_hideRibbon() {},
        test_URLparameters: function test_URLparameters() {},
        test_sesStorage: function test_sesStorage() {},
        test_sublish: function test_sublish() {},
        test_waitForScriptsReady: function test_waitForScriptsReady() {},
        test_tableRowLoop: function test_tableRowLoop() {},
        test_promiseDelay: function test_promiseDelay() {},
        test_exportToCSV: function test_exportToCSV() {},
        test_loadSPScript: function test_loadSPScript() {},
        init: function init() {

            this.test_profileProps();
        }
    };

    return function () {
        var obj = Object.create(objProto);
        obj.spu = pdsputil;
        return obj;
    };
}(); /*
     tests for spUtil.js
     6/1/17
     
     each test will run and log the function name and true if passes
     or function name and false if fails
     */

/***/ })
/******/ ]);
//# sourceMappingURL=spUtil_tests.js.map