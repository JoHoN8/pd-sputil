/*
tests for spUtil.js
6/1/17

each test will run and log the function name and true if passes
or function name and false if fails
*/

import * as spu from './src/library.js';
// import * as jquery from 'jquery';
var $ = require('jquery');

$.noConflict();

const testProcess = (function() {
    var objProto = {
        test_profileProps: function() {

            var type = Array.isArray(spu.profileProps);
            if(type === true) {
                console.log("profileProps", true);
            }
            return this;
        },
        test_getDataType: function() {

            let ary = [];
            let type = spu.getDataType(ary);

            if(type === 'array') {
                console.log("getDataType", true);
            } else {
                console.log("getDataType", false);
            }
            return this;
        },
        test_elementTagName: function() {
            
            let ele = $("<div/>");
            let tagName = spu.elementTagName(ele);

            if(tagName === 'div') {
                console.log("elementTagName", true);
            } else {
                console.log("elementTagName", false);
            }
            return this;
        },
        test_argsConverter: function() {
            let result = spu.argsConverter(arguments,1);

            if(Array.isArray(result) && result.length > 0) {
                console.log("argsConverter", true);
            } else {
                console.log("argsConverter", false);
            }
            return this;
        },
        test_arrayInsertAtIndex: function() {

            let ary = [1,2,3,5];
            spu.arrayInsertAtIndex(ary,3,4);

            if(ary[3] === 4) {
                console.log("arrayInsertAtIndex", true);
            } else {
                console.log("arrayInsertAtIndex", false);
            }
            return this;

        },
        test_arrayRemoveAtIndex: function() {

            let ary = [1,2,3,4,5];
            spu.arrayRemoveAtIndex(ary,1);

            if(ary[1] !== 2) {
                console.log("arrayRemoveAtIndex", true);
            } else {
                console.log("arrayRemoveAtIndex", false);
            }
            return this;
        },
        test_encodeAccountName: function() {

            let acctName = spu.encodeAccountName("kjkfjdk@deghi.com");

            if(acctName) {
                console.log("encodeAccountName", true);
            } else {
                console.log("encodeAccountName", false);
            }
            return this;
        },
        test_getPageInfo: function() {

            let data = spu.getPageInfo();

            if(data) {
                console.log("getPageInfo", true);
            } else {
                console.log("getPageInfo", false);
            }
            return this;
        },
        test_hideRibbon: function() {

            spu.domReady(function() {
                spu.hideRibbon();
            });
            return this;
        },
        test_URLparameters: function() {

            let data = spu.URLparameters();

            if(Object.keys(data).length > 0) {
                console.log("urlParams", true);
            } else {
                console.log("urlParams", false);
            }
            return this;
        },
        test_sesStorage: function() {

            let obj = new spu.sesStorage();

            obj.setItem("stuff", 33);
            let data = obj.getItem("stuff");

            if(data === 33) {
                console.log("sessionStorage", true);
            } else {
                console.log("sessionStorage", false);
            }
            return this;
        },
        test_sublish: function() {

            let obj = new spu.sublish();
            let val;

            obj.subscribe('33', num => {val = num;});

            obj.publish('33',70);

            if(val === 70) {
                console.log("sublish", true);
            } else {
                console.log("sublish", false);
            }
            return this;
        },
        test_waitForScriptsReady: function() {

            return spu.waitForScriptsReady("SP.js")
            .then(() => {

                console.log("waitForScriptsReady", true);
            }).fail(() => {
                console.log("waitForScriptsReady", false);
            });

        },
        test_loadSPScript: function() {

            return spu.loadSPScript("sp.taxonomy.js")
            .then(() => {

                console.log("loadSPScirpt", true);
            }).fail(() => {
                console.log("loadSPScirpt", false);
            });
        },
        // test_spGotoUrl: function() {},
        // test_tableRowLoop: function() {},
        // test_promiseDelay: function() {},
        // test_exportToCSV: function() {},
        init: function() {

            let self = this;

            this
            .test_profileProps()
            .test_getDataType()
            .test_elementTagName()
            .test_argsConverter("11", "22", "33")
            .test_arrayInsertAtIndex()
            .test_arrayRemoveAtIndex()
            .test_encodeAccountName()
            .test_hideRibbon()
            .test_URLparameters()
            .test_sesStorage()
            .test_sublish()
            .test_waitForScriptsReady()
            .then(() => {
                self.test_loadSPScript();
                self.test_getPageInfo();
            });
        }
    }; 

    return function() {
        var obj = Object.create(objProto);
        return obj;
    };
})();

testProcess().init();
