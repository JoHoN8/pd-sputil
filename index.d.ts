// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/*~ This is the module template file for function modules.
 *~ You should rename it to index.d.ts and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

/*~ Note that ES6 modules cannot directly export callable functions.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

/*~ If this module is a UMD module that exposes a global variable 'myFuncLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace pdsputil;

//interfaces
interface anyOject {
	[key:string]: any
}

/*~ This example shows how to have multiple overloads for your function */
export function spSaveForm(formId:string, saveButtonValue: string): void;
export function domReady(callback:(context:any) => void, context: any): void;
export function getDataType(item:any): string;
export function elementTagName(elementTagName: JQuery|HTMLElement): string;
export function argsConverter(args:any, startAt:number): any[];
export function arrayInsertAtIndex(array:any[], index:number): any[];
export function arrayRemoveAtIndex(array:any[], index:number): any[];
export function encodeAccountName(acctName:string): string;
export function promiseDelay(time:number): Promise<boolean>;
export function exportToCSV(filename:string, row:string[][]): void;
export function getPageInfo(): anyOject;
export function spGotoUrl(url:string): void;
export function spSearchResultsCleaner(results:any[], neededProps: string[]): anyOject[];
export function pageEditModeTest(): boolean;
export function hideRibbon(): void;
export function URLparameters(): anyOject;
export function waitForScriptsReady(scriptName:string): Promise<boolean>;
export function tableRowLoop(table:JQuery, cb:(row:JQuery, index?:number) => void): void;
export function loadSPScript(filename:string): Promise<boolean>;
export function validGuid(guid:string): boolean;
export function getURLOrigin(): string;
export function createGUID(): string;

export class Sublish {
	publish(id:string, ...args:any[]): void
	subscribe(id:string, fn: (...args:any[]) => void): void
	unsubscribe(id:string, fn: (...args:any[]) => void): void
	clear(id:string): void
}
export class sesStorage {
	getItem(key:string): any
	setItem(key:string, value:any): void
	removeItem(key:string): void
}