webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/SmallButton.js":
/*!***********************************!*\
  !*** ./components/SmallButton.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_assets_crew_figure_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/assets/crew-figure.png */ "./public/assets/crew-figure.png");
/* harmony import */ var _public_assets_crew_figure_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_assets_crew_figure_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SmallExplain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SmallExplain */ "./components/SmallExplain.js");





var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\SmallButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var SmallButton = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(SmallButton, _React$Component);

  var _super = _createSuper(SmallButton);

  function SmallButton(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SmallButton);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SmallButton, [{
    key: "render",
    value: function render() {
      if (this.props.visible === false && this.props.buttonHide === false) {
        return __jsx("div", {
          id: "buttons",
          className: "jsx-223469207",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 17
          }
        }, __jsx("div", {
          id: "circle",
          className: "jsx-223469207",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 21
          }
        }, __jsx("img", {
          src: _public_assets_crew_figure_png__WEBPACK_IMPORTED_MODULE_7___default.a,
          className: "jsx-223469207" + " " + "smallButtonImage",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }
        })), __jsx("div", {
          id: "smallButtonTag",
          className: "jsx-223469207",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 21
          }
        }, __jsx(_SmallExplain__WEBPACK_IMPORTED_MODULE_8__["default"], {
          visible: this.props.visible,
          buttonHide: this.props.buttonHide,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }
        })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
          id: "223469207",
          __self: this
        }, "div.jsx-223469207 #circle.jsx-223469207{background-color:hsl(0,0%,90%);box-shadow:inset hsla(0,0%,15%,1) 0 0px 0px 4px, inset hsla(0,0%,15%,.8) 0 -1px 5px 4px, inset hsla(0,0%,0%,.25) 0 -1px 0px 7px, inset hsla(0,0%,100%,.7) 0 2px 1px 7px,  hsla(0,0%,0%,.15) 0 -5px 6px 4px, hsla(0,0%,100%,.5) 0 5px 6px 4px;-webkit-transition:color .2s;transition:color .2s;min-width:150px;min-height:150px;width:15vw;height:15vw;line-height:1px;border-radius:50%;background-image: -webkit-radial-gradient( 50% 0%,8% 50%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 50% 100%,12% 50%,hsla(0,0%,100%,.6) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 0% 50%,50% 7%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 100% 50%,50% 5%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%),  -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,0%,0) 0%,hsla(0,0%,0%,0) 3%,hsla(0,0%,0%,.1) 3.5%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 6%,hsla(0,0%,100%,.1) 7.5%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 1.2%,hsla(0,0%,100%,.2) 2.2%),  -webkit-radial-gradient( 50% 50%,200% 50%,hsla(0,0%,90%,1) 5%,hsla(0,0%,85%,1) 30%,hsla(0,0%,60%,1) 100%);}#circle.jsx-223469207:before,#circle.jsx-223469207:after{content:\"\";top:0%;left:0%;position:relative;width:inherit;height:inherit;border-radius:inherit;background-image: -webkit-radial-gradient( 50% 0%,10% 50%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 50% 100%,10% 50%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 0% 50%,50% 10%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 100% 50%,50% 06%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%);}#circle.jsx-223469207:before{-webkit-transform:rotate( 65deg);-ms-transform:rotate( 65deg);transform:rotate( 65deg);}#circle.jsx-223469207:after{-webkit-transform:rotate(-65deg);-ms-transform:rotate(-65deg);transform:rotate(-65deg);}#circle.jsx-223469207:active{color:hsl(210,100%,40%);text-shadow:hsla(210,100%,20%,.3) 0 -1px 0,hsl(210,100%,85%) 0 2px 1px,hsla(200,100%,80%,1) 0 0 5px,hsla(210,100%,50%,.6) 0 0 20px;box-shadow: inset hsla(210,100%,30%,1) 0 0px 0px 4px, inset hsla(210,100%,15%,.4) 0 -1px 5px 4px, inset hsla(210,100%,20%,.25) 0 -1px 0px 7px, inset hsla(210,100%,100%,.7) 0 2px 1px 7px,  hsla(210,100%,75%,.8) 0 0px 3px 2px, hsla(210,50%,40%,.25) 0 -5px 6px 4px, hsla(210,80%,95%,1) 0 5px 6px 4px;}div.jsx-223469207 #buttons.jsx-223469207{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}@media (max-width:608px){div.jsx-223469207 #buttons.jsx-223469207{height:150px;width:150px;}}@media (max-width:608px){#smallButtonTag.jsx-223469207{position:absolute;-webkit-transform:translate(145%,-95%);-ms-transform:translate(145%,-95%);transform:translate(145%,-95%);}}.smallButtonImage.jsx-223469207{position:relative;height:60%;width:80%;min-width:100px;min-height:90px;-webkit-transform:translate(0%,30%);-ms-transform:translate(0%,30%);transform:translate(0%,30%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0J5QixBQUswRCxBQWlDcEIsQUFlNEIsQUFDRCxBQUdaLEFBa0JELEFBTVIsQUFPSyxBQU1GLFdBdkRiLEVBMkNTLEtBMUNSLEFBa0RQLEFBS1ksTUFyQ3VILENBeUJsSSxDQTFDZ0IsR0F1RE4sRUFwRnFCLFFBcUZmLEtBdkRKLFdBd0RJLEdBdkRILGFBd0RnQixFQXZEVCxjQVNrQixBQUNELFFBSGdELElBeUJoRSx3QkFjckIsZ0NBdkJtQyxZQWlDdkMsUUF2QkUsNkZBL0RxQixrREFHTCxnQkFDQyxpQkFDTixXQUNDLFlBQ0ksZ0JBQ0Usa0JBVzJGLGdDQW1CL0csWUFnQkEsc3hCQWpDQSIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXFNtYWxsQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNtYWxsSW1hZ2UgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9jcmV3LWZpZ3VyZS5wbmcnO1xyXG5pbXBvcnQgU21hbGxFeHBsYWluIGZyb20gJy4vU21hbGxFeHBsYWluJztcclxuXHJcbmNsYXNzIFNtYWxsQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlID09PSBmYWxzZSAmJiB0aGlzLnByb3BzLmJ1dHRvbkhpZGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbWFsbEJ1dHRvbkltYWdlXCIgc3JjPXtTbWFsbEltYWdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic21hbGxCdXR0b25UYWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U21hbGxFeHBsYWluIHZpc2libGU9e3RoaXMucHJvcHMudmlzaWJsZX0gYnV0dG9uSGlkZT17dGhpcy5wcm9wcy5idXR0b25IaWRlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2ICNjaXJjbGUge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsMCUsOTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCBoc2xhKDAsMCUsMTUlLCAgMSkgMCAgMHB4IDBweCA0cHgsIC8qIGJvcmRlciAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwxNSUsIC44KSAwIC0xcHggNXB4IDRweCwgLyogc29mdCBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwwJSwgLjI1KSAwIC0xcHggMHB4IDdweCwgLyogYm90dG9tIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDEwMCUsLjcpIDAgIDJweCAxcHggN3B4LCAvKiB0b3AgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDAsMCUsIDAlLC4xNSkgMCAtNXB4IDZweCA0cHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgwLDAlLDEwMCUsLjUpIDAgIDVweCA2cHggNHB4OyAvKiBvdXRlciBITCAqLyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogQnJ1c2hlZCBNZXRhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlICAgMCUsICA4JSA1MCUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgMTAwJSwgMTIlIDUwJSwgaHNsYSgwLDAlLDEwMCUsLjYpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggICAwJSAgNTAlLCA1MCUgIDclLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAxMDAlICA1MCUsIDUwJSAgNSUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwgIDAlLDApIDAlLCBoc2xhKDAsMCUsICAwJSwwKSAgIDMlLCBoc2xhKDAsMCUsICAwJSwuMSkgMy41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAgIDYlLCBoc2xhKDAsMCUsMTAwJSwuMSkgNy41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxLjIlLCBoc2xhKDAsMCUsMTAwJSwuMikgMi4yJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDIwMCUgNTAlLCBoc2xhKDAsMCUsOTAlLDEpIDUlLCBoc2xhKDAsMCUsODUlLDEpIDMwJSwgaHNsYSgwLDAlLDYwJSwxKSAxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmJlZm9yZSwgI2NpcmNsZTphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBmYWtlIGNvbmljYWwgZ3JhZGllbnRzICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAgIDAlLCAxMCUgNTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgMTAwJSwgMTAlIDUwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgIDAlICA1MCUsIDUwJSAxMCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggMTAwJSAgNTAlLCA1MCUgMDYlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YmVmb3JlIHsgdHJhbnNmb3JtOiByb3RhdGUoIDY1ZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmFmdGVyIHsgdHJhbnNmb3JtOiByb3RhdGUoLTY1ZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsKDIxMCwgMTAwJSwgNDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IGhzbGEoMjEwLDEwMCUsMjAlLC4zKSAwIC0xcHggMCwgaHNsKDIxMCwxMDAlLDg1JSkgMCAycHggMXB4LCBoc2xhKDIwMCwxMDAlLDgwJSwxKSAwIDAgNXB4LCBoc2xhKDIxMCwxMDAlLDUwJSwuNikgMCAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMzAlLCAgMSkgMCAgMHB4IDBweCA0cHgsIC8qIGJvcmRlciAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMTUlLCAuNCkgMCAtMXB4IDVweCA0cHgsIC8qIHNvZnQgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDIwJSwuMjUpIDAgLTFweCAwcHggN3B4LCAvKiBib3R0b20gU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDEwMCUsLjcpIDAgIDJweCAxcHggN3B4LCAvKiB0b3AgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCwxMDAlLDc1JSwgLjgpIDAgIDBweCAzcHggMnB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDUwJSw0MCUsIC4yNSkgMCAtNXB4IDZweCA0cHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsODAlLDk1JSwgICAxKSAwICA1cHggNnB4IDRweDsgLyogb3V0ZXIgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogRW5kIEJydXNoZWQgTWV0YWwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiAjYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2ICNidXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjc21hbGxCdXR0b25UYWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0NSUsIC05NSUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc21hbGxCdXR0b25JbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAzMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNtYWxsQnV0dG9uOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SmallButton.js */"));
      } else {
        return null;
      }
    }
  }]);

  return SmallButton;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SmallButton);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NtYWxsQnV0dG9uLmpzIl0sIm5hbWVzIjpbIlNtYWxsQnV0dG9uIiwicHJvcHMiLCJ2aXNpYmxlIiwiYnV0dG9uSGlkZSIsIlNtYWxsSW1hZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxXOzs7OztBQUNGLHVCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsNkJBQ1ZBLEtBRFU7QUFHZjs7Ozs2QkFFUTtBQUNMLFVBQUksS0FBS0EsS0FBTCxDQUFXQyxPQUFYLEtBQXVCLEtBQXZCLElBQWdDLEtBQUtELEtBQUwsQ0FBV0UsVUFBWCxLQUEwQixLQUE5RCxFQUFxRTtBQUNyRSxlQUNJO0FBQUssWUFBRSxFQUFDLFNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0k7QUFBSyxZQUFFLEVBQUMsUUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFrQyxhQUFHLEVBQUVDLHFFQUF2QztBQUFBLDZDQUFlLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESixDQURKLEVBTUk7QUFBSyxZQUFFLEVBQUMsZ0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0EsTUFBQyxxREFBRDtBQUFjLGlCQUFPLEVBQUUsS0FBS0gsS0FBTCxDQUFXQyxPQUFsQztBQUEyQyxvQkFBVSxFQUFFLEtBQUtELEtBQUwsQ0FBV0UsVUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBLENBTko7QUFBQTtBQUFBO0FBQUEsOGlhQURKO0FBbUhFLE9BcEhGLE1Bb0hRO0FBQ0osZUFBTyxJQUFQO0FBQ0g7QUFDSjs7OztFQTlIaUJFLDRDQUFLLENBQUNDLFM7O0FBaUlqQk4sMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmM0ZDU2YmVmNjQ5YjQyNjBkMTA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU21hbGxJbWFnZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2NyZXctZmlndXJlLnBuZyc7XHJcbmltcG9ydCBTbWFsbEV4cGxhaW4gZnJvbSAnLi9TbWFsbEV4cGxhaW4nO1xyXG5cclxuY2xhc3MgU21hbGxCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUgPT09IGZhbHNlICYmIHRoaXMucHJvcHMuYnV0dG9uSGlkZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNtYWxsQnV0dG9uSW1hZ2VcIiBzcmM9e1NtYWxsSW1hZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzbWFsbEJ1dHRvblRhZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTbWFsbEV4cGxhaW4gdmlzaWJsZT17dGhpcy5wcm9wcy52aXNpYmxlfSBidXR0b25IaWRlPXt0aGlzLnByb3BzLmJ1dHRvbkhpZGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYgI2NpcmNsZSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwwJSw5MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IGhzbGEoMCwwJSwxNSUsICAxKSAwICAwcHggMHB4IDRweCwgLyogYm9yZGVyICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDE1JSwgLjgpIDAgLTFweCA1cHggNHB4LCAvKiBzb2Z0IFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDAlLCAuMjUpIDAgLTFweCAwcHggN3B4LCAvKiBib3R0b20gU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDAsMCUsMTAwJSwuNykgMCAgMnB4IDFweCA3cHgsIC8qIHRvcCBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMCwwJSwgMCUsLjE1KSAwIC01cHggNnB4IDRweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDAsMCUsMTAwJSwuNSkgMCAgNXB4IDZweCA0cHg7IC8qIG91dGVyIEhMICovIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBCcnVzaGVkIE1ldGFsICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTV2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgICAwJSwgIDglIDUwJSwgaHNsYSgwLDAlLDEwMCUsLjUpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAxMDAlLCAxMiUgNTAlLCBoc2xhKDAsMCUsMTAwJSwuNikgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgIDAlICA1MCUsIDUwJSAgNyUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDEwMCUgIDUwJSwgNTAlICA1JSwgaHNsYSgwLDAlLDEwMCUsLjUpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDEwMCUgMTAwJSwgaHNsYSgwLDAlLCAgMCUsMCkgMCUsIGhzbGEoMCwwJSwgIDAlLDApICAgMyUsIGhzbGEoMCwwJSwgIDAlLC4xKSAzLjUlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDEwMCUgMTAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMCUsIGhzbGEoMCwwJSwxMDAlLDApICAgNiUsIGhzbGEoMCwwJSwxMDAlLC4xKSA3LjUlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDEwMCUgMTAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEuMiUsIGhzbGEoMCwwJSwxMDAlLC4yKSAyLjIlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMjAwJSA1MCUsIGhzbGEoMCwwJSw5MCUsMSkgNSUsIGhzbGEoMCwwJSw4NSUsMSkgMzAlLCBoc2xhKDAsMCUsNjAlLDEpIDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YmVmb3JlLCAjY2lyY2xlOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGZha2UgY29uaWNhbCBncmFkaWVudHMgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlICAgMCUsIDEwJSA1MCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAxMDAlLCAxMCUgNTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICAgMCUgIDUwJSwgNTAlIDEwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAxMDAlICA1MCUsIDUwJSAwNiUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTpiZWZvcmUgeyB0cmFuc2Zvcm06IHJvdGF0ZSggNjVkZWcpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YWZ0ZXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtNjVkZWcpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2woMjEwLCAxMDAlLCA0MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogaHNsYSgyMTAsMTAwJSwyMCUsLjMpIDAgLTFweCAwLCBoc2woMjEwLDEwMCUsODUlKSAwIDJweCAxcHgsIGhzbGEoMjAwLDEwMCUsODAlLDEpIDAgMCA1cHgsIGhzbGEoMjEwLDEwMCUsNTAlLC42KSAwIDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwzMCUsICAxKSAwICAwcHggMHB4IDRweCwgLyogYm9yZGVyICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwxNSUsIC40KSAwIC0xcHggNXB4IDRweCwgLyogc29mdCBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMjAlLC4yNSkgMCAtMXB4IDBweCA3cHgsIC8qIGJvdHRvbSBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMTAwJSwuNykgMCAgMnB4IDFweCA3cHgsIC8qIHRvcCBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDEwMCUsNzUlLCAuOCkgMCAgMHB4IDNweCAycHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsNTAlLDQwJSwgLjI1KSAwIC01cHggNnB4IDRweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCw4MCUsOTUlLCAgIDEpIDAgIDVweCA2cHggNHB4OyAvKiBvdXRlciBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBFbmQgQnJ1c2hlZCBNZXRhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2ICNidXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYgI2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjA4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNzbWFsbEJ1dHRvblRhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQ1JSwgLTk1JSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zbWFsbEJ1dHRvbkltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDMwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU21hbGxCdXR0b247Il0sInNvdXJjZVJvb3QiOiIifQ==