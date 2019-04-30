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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contaner{\r\n    text-align: right;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.top-section{\r\n    margin-top: 50px;\r\n\r\n    text-align: center;\r\n}\r\n\r\n.bottom-section{\r\n    width: 100%;\r\n    height: 290px;\r\n\r\n    text-align: center;\r\n\r\n    direction: rtl;\r\n}\r\n\r\n.footer{\r\n    width: 100%;\r\n    height: 200px;\r\n\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n\r\n}\r\n\r\n.footer > .right-section-footer{\r\n    width: 600px;\r\n    height: 70px;\r\n\r\n    background-color: #002060;\r\n\r\n    margin-top: 23px;\r\n    margin-right: 215px;\r\n\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n.footer > .left-section-footer{\r\n    width: 600px;\r\n    height: 70px;\r\n\r\n    background-color: #002060;\r\n\r\n    margin-right: 280px;\r\n    margin-top: 25px;\r\n\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n.discuttion-description{\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n\r\n    justify-content: space-around;\r\n\r\n    direction: rtl\r\n}\r\n\r\n.logo{\r\n    width: 200px;\r\n    height: 250px;\r\n\r\n    margin: auto;\r\n    margin-top: 100px;\r\n\r\n    background: url('/assets/images/hagana-avirit-logo.png');\r\n    background-size: 200px 250px;\r\n}\r\n\r\n.presentors-container{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n.example-list {\r\n    width: 350px;\r\n    height: 300px;\r\n    max-width: 100%;\r\n    border: solid 1px #ccc;\r\n    min-height: 60px;\r\n    display: block;\r\n    background: white;\r\n    border-radius: 4px;\r\n    overflow-y: scroll;\r\n\r\n    margin-left: 15px;\r\n    margin-top: 10px;\r\n  }\r\n\r\n.example-box {\r\n    padding: 20px 10px;\r\n    border-bottom: solid 1px #ccc;\r\n    color: rgba(0, 0, 0, 0.87);\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    box-sizing: border-box;\r\n    cursor: move;\r\n    background: white;\r\n    font-size: 14px;\r\n  }\r\n\r\n.cdk-drag-preview {\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  }\r\n\r\n.cdk-drag-placeholder {\r\n    opacity: 0;\r\n  }\r\n\r\n.cdk-drag-animating {\r\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n\r\n.example-box:last-child {\r\n    border: none;\r\n  }\r\n\r\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\r\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n\r\n.disscussion-name-container{\r\n    font-size: 50px;\r\n    word-wrap: break;\r\n\r\n    color: white;\r\n\r\n    width: 100%;\r\n    \r\n    text-align: center;\r\n}\r\n\r\n.disscussion-name{\r\n    width: 500px;\r\n\r\n    margin: auto;\r\n    padding-left: 60px;\r\n    padding-top: 20px;\r\n\r\n    overflow-wrap: break-word;\r\n\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    line-height: 60px;\r\n}\r\n\r\n.standard-btn{\r\n    width: 210px; \r\n    height: 90px; \r\n    font-size: 30px; \r\n    border: 1px solid black; \r\n    background-color: #5b9bd5; \r\n    color: white;\r\n}\r\n\r\n.top-section-container{\r\n    width: 100%;\r\n    height: 200px;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.middle-section-container{\r\n    width: 100%;\r\n    height: 750px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.middle-section-container >.top{\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    justify-content: space-between;\r\n\r\n    width: 100%;\r\n    height: 400px;\r\n}\r\n\r\n.middle-section-container >.bottom{ \r\n    width: 100%;\r\n    height: 350px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    align-items: flex-end;\r\n\r\n    margin-top: 95px;\r\n}\r\n\r\n.middle-section-container >.top > .left-section{ \r\n    width: 520px;\r\n    height: 400px;\r\n\r\n    margin-left: 75px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    align-items: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.middle-section-container > .top > .right-section{\r\n    width: 520px;\r\n    height: 400px;\r\n\r\n    margin-right: 75px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.timer{\r\n    font-size: 150px;\r\n    font-weight: bold;\r\n\r\n    margin-right: 610px;\r\n    margin-bottom: 45px;\r\n\r\n    color: #e00000;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7O0lBRWpCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7O0lBRWhCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhOztJQUViLGtCQUFrQjs7SUFFbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhOztJQUViLGFBQWE7SUFDYiwyQkFBMkI7O0FBRS9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7O0lBRVoseUJBQXlCOztJQUV6QixnQkFBZ0I7SUFDaEIsbUJBQW1COztJQUVuQixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7O0lBRVoseUJBQXlCOztJQUV6QixtQkFBbUI7SUFDbkIsZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjs7SUFFM0IsNkJBQTZCOztJQUU3QjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7O0lBRWIsWUFBWTtJQUNaLGlCQUFpQjs7SUFFakIsd0RBQXdEO0lBQ3hELDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7O0lBRWxCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEI7O2tEQUU4QztFQUNoRDs7QUFFQTtJQUNFLFVBQVU7RUFDWjs7QUFFQTtJQUNFLDhEQUFzRDtJQUF0RCxzREFBc0Q7SUFBdEQsMEdBQXNEO0VBQ3hEOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsOERBQXNEO0lBQXRELHNEQUFzRDtJQUF0RCwwR0FBc0Q7RUFDeEQ7O0FBTUY7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCOztJQUVoQixZQUFZOztJQUVaLFdBQVc7O0lBRVgsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTs7SUFFWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjs7SUFFakIseUJBQXlCOztJQUV6QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFJQTtJQUNJLFdBQVc7SUFDWCxhQUFhOztJQUViLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiw4QkFBOEI7O0lBRTlCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIscUJBQXFCOztJQUVyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTs7SUFFYixpQkFBaUI7O0lBRWpCLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTs7SUFFYixrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7O0lBRWpCLG1CQUFtQjtJQUNuQixtQkFBbUI7O0lBRW5CLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YW5lcntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udG9wLXNlY3Rpb257XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJvdHRvbS1zZWN0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI5MHB4O1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxufVxyXG5cclxuLmZvb3RlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cclxufVxyXG5cclxuLmZvb3RlciA+IC5yaWdodC1zZWN0aW9uLWZvb3RlcntcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyMDYwO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDIzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIxNXB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuXHJcbi5mb290ZXIgPiAubGVmdC1zZWN0aW9uLWZvb3RlcntcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyMDYwO1xyXG5cclxuICAgIG1hcmdpbi1yaWdodDogMjgwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuXHJcbi5kaXNjdXR0aW9uLWRlc2NyaXB0aW9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICBkaXJlY3Rpb246IHJ0bFxyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcblxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9oYWdhbmEtYXZpcml0LWxvZ28ucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4IDI1MHB4O1xyXG59XHJcblxyXG4ucHJlc2VudG9ycy1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3Qge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJveCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuLmRpc3NjdXNzaW9uLW5hbWUtY29udGFpbmVye1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgd29yZC13cmFwOiBicmVhaztcclxuXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRpc3NjdXNzaW9uLW5hbWV7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcblxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcblxyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5zdGFuZGFyZC1idG57XHJcbiAgICB3aWR0aDogMjEwcHg7IFxyXG4gICAgaGVpZ2h0OiA5MHB4OyBcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWI5YmQ1OyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG4udG9wLXNlY3Rpb24tY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ubWlkZGxlLXNlY3Rpb24tY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDc1MHB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubWlkZGxlLXNlY3Rpb24tY29udGFpbmVyID4udG9we1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5taWRkbGUtc2VjdGlvbi1jb250YWluZXIgPi5ib3R0b217IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiA5NXB4O1xyXG59XHJcblxyXG4ubWlkZGxlLXNlY3Rpb24tY29udGFpbmVyID4udG9wID4gLmxlZnQtc2VjdGlvbnsgXHJcbiAgICB3aWR0aDogNTIwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ubWlkZGxlLXNlY3Rpb24tY29udGFpbmVyID4gLnRvcCA+IC5yaWdodC1zZWN0aW9ue1xyXG4gICAgd2lkdGg6IDUyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDc1cHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnRpbWVye1xyXG4gICAgZm9udC1zaXplOiAxNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgIG1hcmdpbi1yaWdodDogNjEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG5cclxuICAgIGNvbG9yOiAjZTAwMDAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"contaner\">\n\n  <div class=\"top-section\">\n    \n    <mat-form-field appearance=\"outline\" style=\"text-align: center; width: 500px; font-size: 16px\">\n      <mat-select placeholder=\"מזהה דיון\">\n        <mat-option value=\"1\" style=\"text-align: right\">1</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n\n  </div>  \n\n  <div class=\"bottom-section\">\n      <h3 style=\"text-align: center\">נושא הדיון: כיפת ברזל</h3>\n\n      <div class=\"discuttion-description\">\n             <h3 style=\"text-align: right\">פרטים: דיון בנושא כיפת 15</h3>\n             <h3 style=\"text-align: right\">משך הדיון: 10 דק</h3>\n      </div>\n\n      <div class=\"presentors-container\">\n              <div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n                  <div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>{{movie}}</div>\n              </div>\n      </div>\n\n  </div>\n\n</div>    \n\n -->\n <div class=\"container\" [style.background-image]=\"'url(assets/images/main-background.png)'\" style=\"height: 100%; width: 100%; background-size: cover; overflow: hidden;\">\n    <div class=\"top-section-container\">\n      <button style=\"position: fixed; right: 65px; top: 90px;\" class='standard-btn'>יציאה</button>\n      <button style=\"position: fixed; right: 298px; top: 90px;\" class='standard-btn' (click)=\"previousPresentor()\">מציג קודם</button>\n\n      <div class=\"disscussion-name-container\">\n          <div class=\"disscussion-name\">שדרוג של כיפה 544</div>\n      </div>\n\n      <button style=\"position: fixed; left: 340px; top: 72px; width: 230px\" class='standard-btn' (click)=\"nextPresentor()\">מציג הבא</button>\n      <button style=\"position: fixed; left: 69px; top: 72px; width: 230px\" class='standard-btn' (click)=\"cdt.pause(); isPaused = true;\" *ngIf='isPaused == false'>השהה</button>\n      <button style=\"position: fixed; left: 69px; top: 72px; width: 230px\" class='standard-btn' (click)=\"cdt.resume(); isPaused = false;\" *ngIf='isPaused == true'>המשך</button>\n    </div>\n\n    <div class=\"middle-section-container\">\n        <div class=\"top\">\n\n            <div class=\"right-section\">\n                <h1 style=\"max-width: 450px; direction: rtl; word-wrap: break-word; color: white;\">המציג כעת -  {{currentPresentor.presentorName}}</h1>\n                <h2 style=\"max-width: 450px; direction: rtl; word-wrap: break-word; color: white;\">{{currentPresentor.title}}</h2>\n            </div>\n\n            <div class=\"left-section\">\n                <div style=\"direction: rtl; width: 300px; height: 100px; text-align: center; background-color: #5b9bd5; align-items: center; color: white;\">\n                    <h1 style=\"direction: rtl; font-size: 35px;\">המציגים הבאים:</h1>\n                </div>\n\n                <div style=\"width: 450px; height: 250px; margin-top: 20px; display: flex; flex-direction: column; align-items: center; overflow: hidden; color: white;\">\n                      <h2 style=\"margin: 10px;\" *ngFor='let presentor of presentorsCopy'>{{presentor.presentorName}}</h2>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"bottom\">\n            <div style=\"width: 260px; color: white; background-color: #5b9bd5; margin-right: 370px;\">\n              <h1 style=\"direction: rtl; font-size: 50px\">זמן למציג:</h1>\n            </div>\n\n            <countdown class='timer' [config]=\"{leftTime: currentPresentor.time}\" (finished)=\"onFinished()\" #cdt>$!h!:$!m!:$!s!</countdown>\n        </div>\n\n    </div>\n\n    <div class=\"footer\">\n          <div class=\"right-section-footer\">\n            <h2 style=\"direction: rtl; margin-right: 10px; color: white;\">שם דיון הבא:</h2>\n            <h2 style=\"direction: rtl; margin-right: 10px; color: white;\">{{nextDiscussionName}}</h2>\n          </div>\n\n          <div class=\"left-section-footer\">\n            <h2 style=\"direction: rtl; margin-right: 10px; color: white;\">שעת תחילת דיון הבא:</h2>\n            <h2 style=\"direction: rtl; margin-right: 10px; color: white;\">{{nextDiscussionTime}}</h2>\n          </div>\n      </div>\n </div>"

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
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'discussionOnline';
        this.movies = [
            'Episode I - The Phantom Menace',
            'Episode II - Attack of the Clones',
            'Episode III - Revenge of the Sith',
            'Episode IV - A New Hope',
            'Episode V - The Empire Strikes Back',
        ];
        this.isPaused = false;
        this.presentors = [
            { presentorName: 'אור בדיחי', title: 'שדרוג של כל כיפות ברדד', time: 10 },
            { presentorName: 'שיר בדיחי', title: 'עד מתי ספמט 16', time: 10.1 },
            { presentorName: 'דניאל טלאור מוזס', title: 'עד מתיייי', time: 60 }
        ];
        this.presentorsCopy = this.presentors.slice();
        this.currentPresentor = { presentorName: '', title: '', time: 0 };
        this.nextDiscussionName = 'דיון על עד מתי';
        this.nextDiscussionTime = '14:20';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.currentPresentor = this.presentorsCopy.shift();
    };
    // Pass to next presentor when the timer finish 
    AppComponent.prototype.onFinished = function () {
        if (this.presentorsCopy.length == 0)
            return;
        this.currentPresentor = this.presentorsCopy.shift();
    };
    // Pass to next presentor when the client clicks 
    AppComponent.prototype.nextPresentor = function () {
        var nextPresentorIndex = this.presentors.indexOf(this.currentPresentor) + 1;
        if (nextPresentorIndex != this.presentors.length) {
            this.currentPresentor = this.presentors[nextPresentorIndex];
            this.presentorsCopy.shift();
        }
    };
    // Pass to previous presentor when the client clicks 
    AppComponent.prototype.previousPresentor = function () {
        var preveiousPresentorIndex = this.presentors.indexOf(this.currentPresentor) - 1;
        if (preveiousPresentorIndex >= 0) {
            this.presentorsCopy.unshift(this.currentPresentor);
            this.currentPresentor = this.presentors[preveiousPresentorIndex];
        }
    };
    AppComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.movies, event.previousIndex, event.currentIndex);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                ngx_countdown__WEBPACK_IMPORTED_MODULE_6__["CountdownModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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