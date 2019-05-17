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

module.exports = "<!-- <router-outlet></router-outlet> -->\n<app-main-view class=\"\"></app-main-view>"

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

module.exports = ".contaner{\n    text-align: right;\n  \n    display: flex;\n    flex-direction: column;\n  }\n  \n  .top-section{\n    margin-top: 50px;\n  \n    text-align: center;\n  }\n  \n  .bottom-section{\n    width: 100%;\n    height: 290px;\n  \n    text-align: center;\n  \n    direction: rtl;\n  }\n  \n  .footer{\n    width: 100%;\n    height: 200px;\n  \n    display: flex;\n    flex-direction: row-reverse;\n  \n  }\n  \n  .footer > .right-section-footer{\n    width: 600px;\n    height: 70px;\n  \n    background-color: #002060;\n  \n    margin-top: 23px;\n    margin-right: 215px;\n  \n    display: flex;\n    flex-direction: row-reverse;\n  }\n  \n  .footer > .left-section-footer{\n    width: 600px;\n    height: 70px;\n  \n    background-color: #002060;\n  \n    margin-right: 280px;\n    margin-top: 25px;\n  \n    display: flex;\n    flex-direction: row-reverse;\n  }\n  \n  .discuttion-description{\n    display: flex;\n    flex-direction: row-reverse;\n  \n    justify-content: space-around;\n  \n    direction: rtl\n  }\n  \n  .logo{\n    width: 200px;\n    height: 250px;\n  \n    margin: auto;\n    margin-top: 100px;\n  \n    background: url('/assets/images/hagana-avirit-logo.png');\n    background-size: 200px 250px;\n  }\n  \n  .presentors-container{\n    width: 100%;\n    display: flex;\n    flex-direction: row-reverse;\n  }\n  \n  .example-list {\n    width: 350px;\n    height: 300px;\n    max-width: 100%;\n    border: solid 1px #ccc;\n    min-height: 60px;\n    display: block;\n    background: white;\n    border-radius: 4px;\n    overflow-y: scroll;\n  \n    margin-left: 15px;\n    margin-top: 10px;\n  }\n  \n  .example-box {\n    padding: 20px 10px;\n    border-bottom: solid 1px #ccc;\n    color: rgba(0, 0, 0, 0.87);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    cursor: move;\n    background: white;\n    font-size: 14px;\n  }\n  \n  .cdk-drag-preview {\n    box-sizing: border-box;\n    border-radius: 4px;\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  }\n  \n  .cdk-drag-placeholder {\n    opacity: 0;\n  }\n  \n  .cdk-drag-animating {\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  }\n  \n  .example-box:last-child {\n    border: none;\n  }\n  \n  .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  }\n  \n  .disscussion-name-container{\n    font-size: 50px;\n    word-wrap: break;\n  \n    color: white;\n  \n    width: 100%;\n    \n    text-align: center;\n  }\n  \n  .disscussion-name{\n    width: 500px;\n  \n    margin: auto;\n    padding-left: 60px;\n    padding-top: 20px;\n  \n    overflow-wrap: break-word;\n  \n    text-align: center;\n    vertical-align: middle;\n    line-height: 60px;\n  }\n  \n  .standard-btn{\n    width: 210px; \n    height: 90px; \n    font-size: 30px; \n    border: 1px solid black; \n    background-color: #5b9bd5; \n    color: white;\n  }\n  \n  .top-section-container{\n    width: 100%;\n    height: 200px;\n  \n    display: flex;\n    flex-direction: row;\n  }\n  \n  .middle-section-container{\n    width: 100%;\n    height: 750px;\n  \n    display: flex;\n    flex-direction: column;\n  }\n  \n  .middle-section-container >.top{\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n  \n    width: 100%;\n    height: 400px;\n  }\n  \n  .middle-section-container >.bottom{ \n    width: 100%;\n    height: 350px;\n  \n    display: flex;\n    flex-direction: column;\n  \n    align-items: flex-end;\n  \n    margin-top: 95px;\n  }\n  \n  .middle-section-container >.top > .left-section{ \n    width: 520px;\n    height: 400px;\n  \n    margin-left: 75px;\n  \n    display: flex;\n    flex-direction: column;\n  \n    align-items: center;\n    margin-top: 30px;\n  }\n  \n  .middle-section-container > .top > .right-section{\n    width: 520px;\n    height: 400px;\n  \n    margin-right: 75px;\n  \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 30px;\n  }\n  \n  .timer{\n    font-size: 150px;\n    font-weight: bold;\n  \n    margin-right: 610px;\n    margin-bottom: 45px;\n  \n    color: #e00000;\n  }"

/***/ }),

/***/ "./src/app/components/main-view/main-view.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/main-view/main-view.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container\" [style.background-image]=\"'url(assets/images/main-background.png)'\" style=\"height: 100%; width: 100%; background-size: contain; overflow: hidden;\">\n  <div class=\"top-section-container\">\n    <button style=\"position: fixed; right: 65px; top: 90px;\" class='standard-btn' (click)='exit()'>יציאה</button>\n    <button style=\"position: fixed; right: 298px; top: 90px;\" class='standard-btn' (click)=\"previousPresentor()\">מציג קודם</button>\n\n    <div class=\"disscussion-name-container\">\n        <div class=\"disscussion-name\">{{discussionTitle}}</div>\n    </div>\n\n    <button style=\"position: fixed; left: 340px; top: 72px; width: 230px\" class='standard-btn' (click)=\"nextPresentor()\">מציג הבא</button>\n    <button style=\"position: fixed; left: 69px; top: 72px; width: 230px\" class='standard-btn' (click)=\"cdt.pause(); isPaused = true;\" *ngIf='isPaused == false'>השהה</button>\n    <button style=\"position: fixed; left: 69px; top: 72px; width: 230px\" class='standard-btn' (click)=\"cdt.resume(); isPaused = false;\" *ngIf='isPaused == true'>המשך</button>\n  </div>\n\n  <div class=\"middle-section-container\">\n      <div class=\"top\">\n\n          <div class=\"right-section\">\n              <h1 style=\"max-width: 450px; direction: rtl; word-wrap: break-word; color: white;\">המציג כעת -  {{currentPresentor.presentorName}}</h1>\n              <h2 style=\"max-width: 450px; direction: rtl; word-wrap: break-word; color: white;\">{{currentPresentor.presentorTitle}}</h2>\n          </div>\n\n          <div class=\"left-section\">\n              <div style=\"direction: rtl; width: 300px; height: 100px; text-align: center; background-color: #5b9bd5; align-items: center; color: white;\">\n                  <h1 style=\"direction: rtl; font-size: 35px;\">המציגים הבאים:</h1>\n              </div>\n\n              <div style=\"width: 450px; height: 250px; margin-top: 20px; display: flex; flex-direction: column; align-items: center; overflow: hidden; color: white;\">\n                    <h2 style=\"margin: 10px;\" *ngFor='let presentor of presentorsCopy'>{{presentor.presentorName}}</h2>\n              </div>\n          </div>\n\n      </div>\n\n      <div class=\"bottom\">\n          <div style=\"width: 260px; color: white; background-color: #5b9bd5; margin-right: 370px;\">\n            <h1 style=\"direction: rtl; font-size: 50px\">זמן למציג:</h1>\n          </div>\n\n          <countdown class='timer' [config]=\"{leftTime: currentPresentor.presentorTime}\" (finished)=\"onFinished()\" #cdt>$!h!:$!m!:$!s!</countdown>\n      </div>\n\n  </div>\n\n  <div class=\"footer\">\n        <div class=\"right-section-footer\">\n          <h2 style=\"direction: rtl; margin-right: 10px; color: white;\">שם דיון הבא:</h2>\n          <!-- <h2 style=\"direction: rtl; margin-right: 10px; color: white;\">{{nextDiscussionName}}</h2> -->\n          <input type='file' accept=\".json\" (change)=\"fileChanged($event)\">\n        </div>\n\n        <div class=\"left-section-footer\">\n          <h2 style=\"direction: rtl; margin-right: 10px; color: white;\">שעת תחילת דיון הבא:</h2>\n          <h2 style=\"direction: rtl; margin-right: 10px; color: white;\">{{nextDiscussionTime}}</h2>\n        </div>\n    </div>\n</div>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { ElectronService } from 'ngx-electron';
// import discussionData from '../../../assets/data/discussionData.json';
var MainViewComponent = /** @class */ (function () {
    function MainViewComponent() {
        // _electronService.ipcRenderer.send('getData', '');
        // _electronService.ipcRenderer.on('getData', (event, data) => {
        this.isPaused = false;
        this.presentors = [];
        this.presentorsCopy = [];
        this.currentPresentor = { presentorName: '', presentorTitle: '', presentorTime: 0 };
        this.nextDiscussionName = '-';
        this.nextDiscussionTime = '-';
        this.discussionTitle = '';
        //   this.discussionTitle = data.discussionTitle;
        //   this.presentors = data.presentors;
        //   this.presentorsCopy = this.presentors.slice();
        //   this.currentPresentor = this.presentorsCopy.shift();
        // });
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
        // this._electronService.ipcRenderer.send('exit');
        window.close();
    };
    MainViewComponent.prototype.fileChanged = function (e) {
        this.file = e.target.files[0];
        this.uploadDocument(this.file);
    };
    MainViewComponent.prototype.uploadDocument = function (file) {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            console.dir(String(fileReader.result));
            var discussionData = JSON.parse(String(fileReader.result));
            if ("discussionName" in discussionData && "presentors" in discussionData) {
                _this.discussionTitle = discussionData.discussionName;
                _this.presentors = discussionData.presentors;
                _this.presentorsCopy = _this.presentors.slice();
                _this.currentPresentor = _this.presentorsCopy.shift();
            }
            else
                alert("Bad Data");
        };
        console.dir(fileReader.readAsText(this.file));
    };
    MainViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-view',
            template: __webpack_require__(/*! ./main-view.component.html */ "./src/app/components/main-view/main-view.component.html"),
            styles: [__webpack_require__(/*! ./main-view.component.css */ "./src/app/components/main-view/main-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = ".container{\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.top-container{\n    margin: auto;\n    \n    margin-bottom: 30px;\n}\n\n.bottom-container{\n    display: flex;\n    flex-direction: row-reverse;\n\n    justify-content: space-between;\n\n    margin-left: 20px;\n    margin-right: 20px;\n}\n\n.right-section{\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n}\n\n.left-section{\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n}\n\n/* Drag and drop section */\n\n.example-list {\n    width: 400px;\n    height: 300px;\n    max-width: 80%;\n    border: solid 1px #ccc;\n    min-height: 60px;\n    display: block;\n    background: white;\n    border-radius: 4px;\n    overflow: hidden;\n\n    direction: rtl;\n    \n    overflow-y: scroll;\n  }\n\n::-webkit-scrollbar {\n    display: none;\n    }\n\n.example-box {\n    padding: 20px 10px;\n    border-bottom: solid 1px #ccc;\n    color: rgba(0, 0, 0, 0.87);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    cursor: move;\n    background: white;\n    font-size: 14px;\n  }\n\n.cdk-drag-preview {\n    box-sizing: border-box;\n    border-radius: 4px;\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  }\n\n.cdk-drag-placeholder {\n    opacity: 0;\n  }\n\n.cdk-drag-animating {\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  }\n\n.example-box:last-child {\n    border: none;\n  }\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  }\n  "

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

module.exports = __webpack_require__(/*! /Users/danieltalormoses/Desktop/ANGULAR/discussions-online/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map