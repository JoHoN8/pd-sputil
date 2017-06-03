/**
    app name sputil
 */
import * as $ from 'jquery';

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
export const profileProps = ['PreferredName','SPS-JobTitle','WorkPhone','OfficeNumber',
    'WorkEmail','doeaSpecialAccount','SPS-Department','AccountName','SPS-Location',
    'PositionID','Manager','Office', "LastName", "FirstName"];

export function spSaveForm(formId, saveButtonValue) {
    if (!PreSaveItem()) {return false;}
    if (formId && SPClientForms.ClientFormManager.SubmitClientForm(formId)) {return false;}
    WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(saveButtonValue, "", true, "", "", false, true));
}
export function getDataType(item) {

	return Object.prototype.toString.call(item).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
export function elementTagName(element) {
	var ele;
	if (element instanceof $) {
		ele = element.prop('tagName');
	}else {
		ele = element.tagName;
	}

	return ele.toLowerCase();
}
export function argsConverter(args, startAt) {
	var giveBack = [],
		numberToStartAt,
		total = args.length;
	for (numberToStartAt = startAt || 0; numberToStartAt < total; numberToStartAt++){
		giveBack.push(args[numberToStartAt]);
	  }
	  return giveBack;
}
export function arrayInsertAtIndex(array, index) {
	//all items past index will be inserted starting at index number
	var arrayToInsert = Array.prototype.splice.apply(arguments, [2]);
	Array.prototype.splice.apply(array, [index, 0].concat(arrayToInsert));
	return array;
}
export function arrayRemoveAtIndex(array, index) {
	Array.prototype.splice.apply(array, [index, 1]);
	return array;
}
export function encodeAccountName(acctName) {
	var check = /^i:0\#\.f\|membership\|/,
		formattedName;

	if (check.test(acctName)) {
		formattedName = acctName;
	} else {
		formattedName = 'i:0#.f|membership|' + acctName;
	}

	return encodeURIComponent(formattedName);
}
export function promiseDelay(time) {
	var def = $.Deferred(),
		amount = time || 5000;

	setTimeout(function() {
		def.resolve();
	}, amount);
	return def.promise();
}
export class sesStorage {
	//frontEnd to session Storage
    constructor() {
        this.storageAdaptor = sessionStorage;
    }
	toType(obj) {
		return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
	}
	getItem(key) {
		var item = this.storageAdaptor.getItem(key);

		try {
			item = JSON.parse(item);
		} catch (e) {}

		return item;
	}
	setItem(key, value) {
		var type = this.toType(value);

		if (/object|array/.test(type)) {
			value = JSON.stringify(value);
		}

		this.storageAdaptor.setItem(key, value);
	}
	removeItem(key) {
		this.storageAdaptor.removeItem(key);
	}
}
export class sublish {
    constructor() {
        this.cache = {};
    }
    publish(id) {
        var args = argsConverter(arguments, 1),
            ii,
            total;
        if (!this.cache[id]) {
            this.cache[id] = [];
        }
        total = this.cache[id].length;
        for (ii=0; ii < total; ii++) {
            this.cache[id][ii].apply(this, args);
        }

    }
    subscribe(id, fn) {
        if (!this.cache[id]) {
            this.cache[id] = [fn];
        } else {
            this.cache[id].push(fn);
        }
    }
    unsubscribe(id, fn) {
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
    clear(id) {
        if (!this.cache[id]) {
            return;
        }
        this.cache[id] = [];
    }
}
export function exportToCSV(filename, rows) {
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
export function getPageInfo() {
    
    return _spPageContextInfo;
}
export function spGotoUrl(url) {

    STSNavigate(url);
}
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
export function pageEditModeTest() {

    if ($('#MSOLayout_InDesignMode').val() === '1') {
        return false;
    } else{
        return true;
    }
}
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
export function URLparameters() {
    let parastring = location.search;
    return parastring.length === 0 ? {} : parse({}, parastring.substr(1).split('&'));
}
export function waitForScriptsReady(scriptName) {
    var def = $.Deferred();

    ExecuteOrDelayUntilScriptLoaded(function() {
        return def.resolve('Ready');
    }, scriptName);

    return def.promise();
}
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
export function loadSPScript(fileName) {
    //fileName example SP.Search.js
    return $.getScript(`/_layouts/15/${fileName}`);
};