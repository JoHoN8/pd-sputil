/*
tests for spUtil.js
6/1/17

each test will run and log the function name and true if passes
or function name and false if fails
*/

import * as spu from './src/library.js';



var testProcess = (function() {
    
    var objProto = {
        test_profileProps: function() {

            var type = Array.isArray(this.spu.profileProps);
            if(type === true) {
                console.log("profileProps", true);
            }
        },
        test_getDataType: function() {

        },
        test_elementTagName: function() {},
        test_argsConverter: function() {},
        test_arrayInsertAtIndex: function() {},
        test_arrayRemoveAtIndex: function() {},
        test_encodeAccountName: function() {},
        test_getPageInfo: function() {},
        test_spGotoUrl: function() {},
        test_hideRibbon: function() {},
        test_URLparameters: function() {},
        test_sesStorage: function() {},
        test_sublish: function() {},
        test_waitForScriptsReady: function() {},
        test_tableRowLoop: function() {},
        test_promiseDelay: function() {},
        test_exportToCSV: function() {},
        test_loadSPScript: function() {},
        init: function() {

            this
            .test_profileProps()

        }
    }; 

    return function() {
        var obj = Object.create(objProto);
        obj.spu = pdsputil;
        return obj;
    };
})();