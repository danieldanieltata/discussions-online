(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-view/main-view.component */ "./src/app/components/main-view/main-view.component.ts");
/* harmony import */ var _components_make_discussion_make_discussion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/make-discussion/make-discussion.component */ "./src/app/components/make-discussion/make-discussion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'main-page', component: _components_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_2__["MainViewComponent"] },
    { path: 'make-discussion', component: _components_make_discussion_make_discussion_component__WEBPACK_IMPORTED_MODULE_3__["MakeDiscussionComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'discussionOnline';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-view/main-view.component */ "./src/app/components/main-view/main-view.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_make_discussion_make_discussion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/make-discussion/make-discussion.component */ "./src/app/components/make-discussion/make-discussion.component.ts");
/* harmony import */ var _services_ipc_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/ipc.service */ "./src/app/services/ipc.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _shared_dialogs_add_discussion_add_discussion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/dialogs/add-discussion/add-discussion.component */ "./src/app/shared/dialogs/add-discussion/add-discussion.component.ts");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__["MainViewComponent"],
                _components_make_discussion_make_discussion_component__WEBPACK_IMPORTED_MODULE_7__["MakeDiscussionComponent"],
                _shared_dialogs_add_discussion_add_discussion_component__WEBPACK_IMPORTED_MODULE_12__["AddDiscussionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_countdown__WEBPACK_IMPORTED_MODULE_3__["CountdownModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                ngx_electron__WEBPACK_IMPORTED_MODULE_13__["NgxElectronModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
            ],
            providers: [_services_ipc_service__WEBPACK_IMPORTED_MODULE_8__["IpcService"]],
            entryComponents: [_shared_dialogs_add_discussion_add_discussion_component__WEBPACK_IMPORTED_MODULE_12__["AddDiscussionComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/main-view/main-view.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/main-view/main-view.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contaner{\r\n    text-align: right;\r\n  \r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .top-section{\r\n    margin-top: 50px;\r\n  \r\n    text-align: center;\r\n  }\r\n  \r\n  .bottom-section{\r\n    width: 100%;\r\n    height: 290px;\r\n  \r\n    text-align: center;\r\n  \r\n    direction: rtl;\r\n  }\r\n  \r\n  .footer{\r\n    width: 100%;\r\n    height: 200px;\r\n  \r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n  \r\n  }\r\n  \r\n  .footer > .right-section-footer{\r\n    width: 600px;\r\n    height: 70px;\r\n  \r\n    background-color: #002060;\r\n  \r\n    margin-top: 23px;\r\n    margin-right: 215px;\r\n  \r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n  }\r\n  \r\n  .footer > .left-section-footer{\r\n    width: 600px;\r\n    height: 70px;\r\n  \r\n    background-color: #002060;\r\n  \r\n    margin-right: 280px;\r\n    margin-top: 25px;\r\n  \r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n  }\r\n  \r\n  .discuttion-description{\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n  \r\n    justify-content: space-around;\r\n  \r\n    direction: rtl\r\n  }\r\n  \r\n  .logo{\r\n    width: 200px;\r\n    height: 250px;\r\n  \r\n    margin: auto;\r\n    margin-top: 100px;\r\n  \r\n    background: url('/assets/images/hagana-avirit-logo.png');\r\n    background-size: 200px 250px;\r\n  }\r\n  \r\n  .presentors-container{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n  }\r\n  \r\n  .example-list {\r\n    width: 350px;\r\n    height: 300px;\r\n    max-width: 100%;\r\n    border: solid 1px #ccc;\r\n    min-height: 60px;\r\n    display: block;\r\n    background: white;\r\n    border-radius: 4px;\r\n    overflow-y: scroll;\r\n  \r\n    margin-left: 15px;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .example-box {\r\n    padding: 20px 10px;\r\n    border-bottom: solid 1px #ccc;\r\n    color: rgba(0, 0, 0, 0.87);\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    box-sizing: border-box;\r\n    cursor: move;\r\n    background: white;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .cdk-drag-preview {\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  }\r\n  \r\n  .cdk-drag-placeholder {\r\n    opacity: 0;\r\n  }\r\n  \r\n  .cdk-drag-animating {\r\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n  \r\n  .example-box:last-child {\r\n    border: none;\r\n  }\r\n  \r\n  .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\r\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n  \r\n  .disscussion-name-container{\r\n    font-size: 50px;\r\n    word-wrap: break;\r\n  \r\n    color: white;\r\n  \r\n    width: 100%;\r\n    \r\n    text-align: center;\r\n  }\r\n  \r\n  .disscussion-name{\r\n    width: 500px;\r\n  \r\n    margin: auto;\r\n    padding-left: 60px;\r\n    padding-top: 20px;\r\n  \r\n    overflow-wrap: break-word;\r\n  \r\n    text-align: center;\r\n    vertical-align: middle;\r\n    line-height: 60px;\r\n  }\r\n  \r\n  .standard-btn{\r\n    width: 210px; \r\n    height: 90px; \r\n    font-size: 30px; \r\n    border: 1px solid black; \r\n    background-color: #5b9bd5; \r\n    color: white;\r\n  }\r\n  \r\n  .top-section-container{\r\n    width: 100%;\r\n    height: 200px;\r\n  \r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n  \r\n  .middle-section-container{\r\n    width: 100%;\r\n    height: 750px;\r\n  \r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .middle-section-container >.top{\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    justify-content: space-between;\r\n  \r\n    width: 100%;\r\n    height: 400px;\r\n  }\r\n  \r\n  .middle-section-container >.bottom{ \r\n    width: 100%;\r\n    height: 350px;\r\n  \r\n    display: flex;\r\n    flex-direction: column;\r\n  \r\n    align-items: flex-end;\r\n  \r\n    margin-top: 95px;\r\n  }\r\n  \r\n  .middle-section-container >.top > .left-section{ \r\n    width: 520px;\r\n    height: 400px;\r\n  \r\n    margin-left: 75px;\r\n  \r\n    display: flex;\r\n    flex-direction: column;\r\n  \r\n    align-items: center;\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .middle-section-container > .top > .right-section{\r\n    width: 520px;\r\n    height: 400px;\r\n  \r\n    margin-right: 75px;\r\n  \r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .timer{\r\n    font-size: 150px;\r\n    font-weight: bold;\r\n  \r\n    margin-right: 610px;\r\n    margin-bottom: 45px;\r\n  \r\n    color: #e00000;\r\n  }"

/***/ }),

/***/ "./src/app/components/main-view/main-view.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/main-view/main-view.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container\" [style.background-image]=\"'url(assets/images/main-background.png)'\" style=\"height: 100%; width: 100%; background-size: contain; overflow: hidden;\">\r\n  <div class=\"top-section-container\">\r\n    <button style=\"position: fixed; right: 65px; top: 90px;\" class='standard-btn' (click)='exit()'>יציאה</button>\r\n    <button style=\"position: fixed; right: 298px; top: 90px;\" class='standard-btn' (click)=\"previousPresentor()\">מציג קודם</button>\r\n\r\n    <div class=\"disscussion-name-container\">\r\n        <div class=\"disscussion-name\">{{discussionTitle}}</div>\r\n    </div>\r\n\r\n    <button style=\"position: fixed; left: 340px; top: 72px; width: 230px\" class='standard-btn' (click)=\"nextPresentor()\">מציג הבא</button>\r\n    <button style=\"position: fixed; left: 69px; top: 72px; width: 230px\" class='standard-btn' (click)=\"cdt.pause(); isPaused = true;\" *ngIf='isPaused == false'>השהה</button>\r\n    <button style=\"position: fixed; left: 69px; top: 72px; width: 230px\" class='standard-btn' (click)=\"cdt.resume(); isPaused = false;\" *ngIf='isPaused == true'>המשך</button>\r\n  </div>\r\n\r\n  <div class=\"middle-section-container\">\r\n      <div class=\"top\">\r\n\r\n          <div class=\"right-section\">\r\n              <h1 style=\"max-width: 450px; direction: rtl; word-wrap: break-word; color: white;\">המציג כעת -  {{currentPresentor.presentorName}}</h1>\r\n              <h2 style=\"max-width: 450px; direction: rtl; word-wrap: break-word; color: white;\">{{currentPresentor.presentorTitle}}</h2>\r\n          </div>\r\n\r\n          <div class=\"left-section\">\r\n              <div style=\"direction: rtl; width: 300px; height: 100px; text-align: center; background-color: #5b9bd5; align-items: center; color: white;\">\r\n                  <h1 style=\"direction: rtl; font-size: 35px;\">המציגים הבאים:</h1>\r\n              </div>\r\n\r\n              <div style=\"width: 450px; height: 250px; margin-top: 20px; display: flex; flex-direction: column; align-items: center; overflow: hidden; color: white;\">\r\n                    <h2 style=\"margin: 10px;\" *ngFor='let presentor of presentorsCopy'>{{presentor.presentorName}}</h2>\r\n              </div>\r\n          </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"bottom\">\r\n          <div style=\"width: 260px; color: white; background-color: #5b9bd5; margin-right: 370px;\">\r\n            <h1 style=\"direction: rtl; font-size: 50px\">זמן למציג:</h1>\r\n          </div>\r\n\r\n          <countdown class='timer' [config]=\"{leftTime: currentPresentor.presentorTime}\" (finished)=\"onFinished()\" #cdt>$!h!:$!m!:$!s!</countdown>\r\n      </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"footer\">\r\n        <div class=\"right-section-footer\">\r\n          <h2 style=\"direction: rtl; margin-right: 10px; color: white;\">שם דיון הבא:</h2>\r\n          <h2 style=\"direction: rtl; margin-right: 10px; color: white;\">{{nextDiscussionName}}</h2>\r\n        </div>\r\n\r\n        <div class=\"left-section-footer\">\r\n          <h2 style=\"direction: rtl; margin-right: 10px; color: white;\">שעת תחילת דיון הבא:</h2>\r\n          <h2 style=\"direction: rtl; margin-right: 10px; color: white;\">{{nextDiscussionTime}}</h2>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/main-view/main-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-view/main-view.component.ts ***!
  \*************************************************************/
/*! exports provided: MainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponent", function() { return MainViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainViewComponent = /** @class */ (function () {
    function MainViewComponent(_electronService) {
        var _this = this;
        this._electronService = _electronService;
        this.isPaused = false;
        this.presentors = [];
        this.presentorsCopy = [];
        this.currentPresentor = { presentorName: '', presentorTitle: '', presentorTime: 0 };
        this.nextDiscussionName = '-';
        this.nextDiscussionTime = '-';
        this.discussionTitle = '';
        _electronService.ipcRenderer.send('getData', '');
        _electronService.ipcRenderer.on('getData', function (event, data) {
            _this.discussionTitle = data.discussionTitle;
            _this.presentors = data.presentors;
            _this.presentorsCopy = _this.presentors.slice();
            _this.currentPresentor = _this.presentorsCopy.shift();
        });
    }
    MainViewComponent.prototype.ngOnInit = function () {
    };
    MainViewComponent.prototype.onFinished = function () {
        if (this.presentorsCopy.length == 0)
            return;
        this.currentPresentor = this.presentorsCopy.shift();
    };
    MainViewComponent.prototype.nextPresentor = function () {
        var nextPresentorIndex = this.presentors.indexOf(this.currentPresentor) + 1;
        if (nextPresentorIndex != this.presentors.length) {
            this.currentPresentor = this.presentors[nextPresentorIndex];
            this.presentorsCopy.shift();
        }
    };
    MainViewComponent.prototype.previousPresentor = function () {
        var preveiousPresentorIndex = this.presentors.indexOf(this.currentPresentor) - 1;
        if (preveiousPresentorIndex >= 0) {
            this.presentorsCopy.unshift(this.currentPresentor);
            this.currentPresentor = this.presentors[preveiousPresentorIndex];
        }
    };
    MainViewComponent.prototype.exit = function () {
        this._electronService.ipcRenderer.send('exit');
    };
    MainViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-view',
            template: __webpack_require__(/*! ./main-view.component.html */ "./src/app/components/main-view/main-view.component.html"),
            styles: [__webpack_require__(/*! ./main-view.component.css */ "./src/app/components/main-view/main-view.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_electron__WEBPACK_IMPORTED_MODULE_1__["ElectronService"]])
    ], MainViewComponent);
    return MainViewComponent;
}());



/***/ }),

/***/ "./src/app/components/make-discussion/make-discussion.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/make-discussion/make-discussion.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.top-container{\r\n    margin: auto;\r\n    \r\n    margin-bottom: 30px;\r\n}\r\n\r\n.bottom-container{\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n\r\n    justify-content: space-between;\r\n\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n}\r\n\r\n.right-section{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    align-items: center;\r\n}\r\n\r\n.left-section{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    align-items: center;\r\n}\r\n\r\n/* Drag and drop section */\r\n\r\n.example-list {\r\n    width: 400px;\r\n    height: 300px;\r\n    max-width: 80%;\r\n    border: solid 1px #ccc;\r\n    min-height: 60px;\r\n    display: block;\r\n    background: white;\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n\r\n    direction: rtl;\r\n    \r\n    overflow-y: scroll;\r\n  }\r\n\r\n::-webkit-scrollbar {\r\n    display: none;\r\n    }\r\n\r\n.example-box {\r\n    padding: 20px 10px;\r\n    border-bottom: solid 1px #ccc;\r\n    color: rgba(0, 0, 0, 0.87);\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    box-sizing: border-box;\r\n    cursor: move;\r\n    background: white;\r\n    font-size: 14px;\r\n  }\r\n\r\n.cdk-drag-preview {\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  }\r\n\r\n.cdk-drag-placeholder {\r\n    opacity: 0;\r\n  }\r\n\r\n.cdk-drag-animating {\r\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n\r\n.example-box:last-child {\r\n    border: none;\r\n  }\r\n\r\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\r\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/components/make-discussion/make-discussion.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/make-discussion/make-discussion.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"top-container\">\n    <mat-form-field style=\"width: 300px; text-align: center;\">\n      <mat-label>מזהה דיון</mat-label>\n      <mat-select (selectionChange)='changeDiscussion($event)'>\n        <mat-option value=\"[דיון חדש]\" style=\"text-align: center;\">[דיון חדש]</mat-option>\n        <mat-option *ngFor=\"let discussion of discussions ; let i = index\" [value]=\"discussion.discussionTitle + '.' + i\" style=\"text-align: center;\">\n         {{discussion.discussionTitle}}.{{i+1}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <div class=\"bottom-container\">\n\n      <div class=\"right-section\">\n \n          <mat-form-field style=\"text-align: center;\">\n              <input matInput placeholder=\"נושא דיון\" [(ngModel)]='discussionTitle'>\n          </mat-form-field>\n\n          <mat-form-field style=\"text-align: center;\">\n              <input matInput placeholder=\"זמן משוער\" type=\"number\" min='1' [(ngModel)]='discussionTime'>\n          </mat-form-field>\n\n          <mat-form-field style=\"text-align: center;\">\n              <input matInput placeholder=\"פירוט\" [(ngModel)]='discussionDesc'>\n          </mat-form-field>\n\n          <div class=\"\" style=\"display: flex; flex-direction: row-reverse;\">\n            <button mat-mini-fab color='primary' style=\"margin-top: 10px; margin-bottom: 5px; margin-left: 10px;\" (click)='showDiscussion()' matTooltip='הצג דיון'><i class=\"material-icons\">movie_filter</i></button>\n            <button mat-mini-fab color='primary' style=\"margin-top: 10px; margin-bottom: 5px;\" (click)='saveDiscussion()'><i class=\"material-icons\" matTooltip='שמור דיון'>save</i></button>\n        </div>\n      </div>\n      \n      <div class=\"left-section\">\n\n          <div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n              <div class=\"example-box\" style=\"display: flex; flex-direction: row; height: 50px;\" *ngFor=\"let presentor of presentors; let i = index\" cdkDrag>\n\n                {{presentor.presentorName}}\n\n                <div class=\"actions-container\">\n                    <button mat-icon-button (click)='editPresentor(i)'><i class=\"material-icons\" style=\"color: rgb(21, 56, 250); font-size: 20px;\">edit</i></button>\n                    <button mat-icon-button (click)='deletePresentor(i)'><i class=\"material-icons\" style=\"color: red; font-size: 20px;\">delete</i></button>\n                </div>\n\n              </div>\n          </div>\n\n\n          <button mat-fab color='primary' style=\"margin-top: 10px; margin-bottom: 5px;\" (click)='openAddPresentor()' matTooltip='הוסף מציג'><i class=\"material-icons\">group_add</i></button>\n      </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/make-discussion/make-discussion.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/make-discussion/make-discussion.component.ts ***!
  \*************************************************************************/
/*! exports provided: MakeDiscussionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeDiscussionComponent", function() { return MakeDiscussionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_dialogs_add_discussion_add_discussion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/dialogs/add-discussion/add-discussion.component */ "./src/app/shared/dialogs/add-discussion/add-discussion.component.ts");
/* harmony import */ var _services_ipc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ipc.service */ "./src/app/services/ipc.service.ts");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MakeDiscussionComponent = /** @class */ (function () {
    function MakeDiscussionComponent(_electronService, dialog) {
        this._electronService = _electronService;
        this.dialog = dialog;
        this.discussions = [];
        this.presentors = [];
        this.discussionTitle = '';
        this.discussionDesc = '';
        this.editIndex = -1;
    }
    MakeDiscussionComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('discussions'))
            this.discussions = JSON.parse(localStorage.getItem('discussions'));
    };
    MakeDiscussionComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.presentors, event.previousIndex, event.currentIndex);
    };
    MakeDiscussionComponent.prototype.changeDiscussion = function (event) {
        if (event.value == '[דיון חדש]') {
            this.discussionTitle = '';
            this.discussionTime = null;
            this.discussionDesc = '';
            this.presentors = [];
            this.editIndex = -1;
            return;
        }
        var i = event.value.split('.')[1];
        this.editIndex = i;
        var selectedDiscussion = this.discussions[i];
        this.discussionTitle = selectedDiscussion.discussionTitle;
        this.discussionTime = selectedDiscussion.discussionTime;
        this.discussionDesc = selectedDiscussion.discussionDesc;
        this.presentors = selectedDiscussion.presentors;
    };
    MakeDiscussionComponent.prototype.openAddPresentor = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_dialogs_add_discussion_add_discussion_component__WEBPACK_IMPORTED_MODULE_3__["AddDiscussionComponent"], {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(function (presentorData) {
            if (presentorData) {
                presentorData.presentorTime = presentorData.presentorTime + Number('0.' + new Date().getMilliseconds());
                _this.presentors.push(presentorData);
            }
        });
    };
    MakeDiscussionComponent.prototype.deletePresentor = function (i) {
        this.presentors.splice(i, 1);
    };
    MakeDiscussionComponent.prototype.editPresentor = function (i) {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_dialogs_add_discussion_add_discussion_component__WEBPACK_IMPORTED_MODULE_3__["AddDiscussionComponent"], {
            width: '400px',
            data: this.presentors[i]
        });
        dialogRef.afterClosed().subscribe(function (presentorData) {
            if (presentorData) {
                presentorData.presentorTime = presentorData.presentorTime + Number('0.' + new Date().getMilliseconds());
                _this.presentors[i] = presentorData;
            }
        });
    };
    MakeDiscussionComponent.prototype.showDiscussion = function () {
        electron.ipcRenderer.send('showDiscussion', { discussionTitle: this.discussionTitle, discussionTime: this.discussionTime, discussionDesc: this.discussionDesc, presentors: this.presentors.slice() });
        // if(this._electronService.isElectronApp) 
        // this._electronService.ipcRenderer.send('showDiscussion', { discussionTitle: this.discussionTitle, discussionTime: this.discussionTime, discussionDesc: this.discussionDesc, presentors: [...this.presentors] });
    };
    MakeDiscussionComponent.prototype.saveDiscussion = function () {
        var disucssionData = {
            discussionTitle: this.discussionTitle,
            discussionTime: this.discussionTime,
            discussionDesc: this.discussionDesc,
            presentors: this.presentors
        };
        if (this.editIndex != -1) {
            var discussions = JSON.parse(localStorage.getItem('discussions'));
            discussions[this.editIndex] = disucssionData;
            localStorage.setItem('discussions', JSON.stringify(discussions));
            this.discussions = JSON.parse(localStorage.getItem('discussions'));
            return;
        }
        if (localStorage.getItem('discussions')) {
            var discussions = JSON.parse(localStorage.getItem('discussions'));
            discussions.push(disucssionData);
            localStorage.setItem('discussions', JSON.stringify(discussions));
        }
        else {
            localStorage.setItem('discussions', JSON.stringify([disucssionData]));
        }
        this.discussions = JSON.parse(localStorage.getItem('discussions'));
    };
    MakeDiscussionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-make-discussion',
            template: __webpack_require__(/*! ./make-discussion.component.html */ "./src/app/components/make-discussion/make-discussion.component.html"),
            styles: [__webpack_require__(/*! ./make-discussion.component.css */ "./src/app/components/make-discussion/make-discussion.component.css")],
            providers: [_services_ipc_service__WEBPACK_IMPORTED_MODULE_4__["IpcService"]]
        }),
        __metadata("design:paramtypes", [ngx_electron__WEBPACK_IMPORTED_MODULE_5__["ElectronService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], MakeDiscussionComponent);
    return MakeDiscussionComponent;
}());



/***/ }),

/***/ "./src/app/services/ipc.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/ipc.service.ts ***!
  \*****************************************/
/*! exports provided: IpcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpcService", function() { return IpcService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IpcService = /** @class */ (function () {
    function IpcService() {
        if (window.require) {
            try {
                this._ipc = window.require('electron').ipcRenderer;
            }
            catch (e) {
                throw e;
            }
        }
        else {
            console.warn('Electron\'s IPC was not loaded');
        }
    }
    IpcService.prototype.on = function (channel, listener) {
        if (!this._ipc) {
            return;
        }
        this._ipc.on(channel, listener);
    };
    IpcService.prototype.send = function (channel) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a;
        if (!this._ipc) {
            return;
        }
        (_a = this._ipc).send.apply(_a, [channel].concat(args));
    };
    IpcService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], IpcService);
    return IpcService;
}());



/***/ }),

/***/ "./src/app/shared/dialogs/add-discussion/add-discussion.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/shared/dialogs/add-discussion/add-discussion.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/dialogs/add-discussion/add-discussion.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/dialogs/add-discussion/add-discussion.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"direction: rtl;\">פרטי מציג</h1>\n<div mat-dialog-content>\n\n  <mat-form-field style=\"text-align: center; width: 100%;\">\n    <input matInput placeholder=\"שם מציג\" [(ngModel)]='presentorName'>\n  </mat-form-field>\n\n  <mat-form-field style=\"text-align: center; width: 100%;\">\n      <input matInput placeholder=\"זמן הצגה\" type=\"number\" min='1' [(ngModel)]='presentorTime'>\n  </mat-form-field>\n\n  <mat-form-field style=\"text-align: center; width: 100%;\">\n      <input matInput placeholder=\"נושא\" [(ngModel)]='presentorTitle'>\n  </mat-form-field>\n\n</div>\n\n<div mat-dialog-actions>\n\n  <button mat-button cdkFocusInitial (click)='acceptPresentor()'>אישור</button>\n  <button mat-button (click)=\"dialogRef.close()\">ביטול</button>\n\n</div>"

/***/ }),

/***/ "./src/app/shared/dialogs/add-discussion/add-discussion.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/dialogs/add-discussion/add-discussion.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddDiscussionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDiscussionComponent", function() { return AddDiscussionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AddDiscussionComponent = /** @class */ (function () {
    function AddDiscussionComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        if (data) {
            this.presentorName = data.presentorName;
            this.presentorTime = data.presentorTime;
            this.presentorTitle = data.presentorTitle;
        }
    }
    AddDiscussionComponent.prototype.ngOnInit = function () {
    };
    AddDiscussionComponent.prototype.acceptPresentor = function () {
        if (this.presentorName && this.presentorTime && this.presentorTitle)
            this.dialogRef.close({ presentorName: this.presentorName, presentorTime: this.presentorTime, presentorTitle: this.presentorTitle });
    };
    AddDiscussionComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    AddDiscussionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-discussion',
            template: __webpack_require__(/*! ./add-discussion.component.html */ "./src/app/shared/dialogs/add-discussion/add-discussion.component.html"),
            styles: [__webpack_require__(/*! ./add-discussion.component.css */ "./src/app/shared/dialogs/add-discussion/add-discussion.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AddDiscussionComponent);
    return AddDiscussionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Development\discussionOnline\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map