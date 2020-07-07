webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/SoloButton.js":
/*!**********************************!*\
  !*** ./components/SoloButton.js ***!
  \**********************************/
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
/* harmony import */ var _SoloExplain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SoloExplain */ "./components/SoloExplain.js");
/* harmony import */ var _public_assets_single_figure_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/assets/single-figure.png */ "./public/assets/single-figure.png");
/* harmony import */ var _public_assets_single_figure_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_single_figure_png__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\SoloButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var SoloButton = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(SoloButton, _React$Component);

  var _super = _createSuper(SoloButton);

  function SoloButton(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SoloButton);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SoloButton, [{
    key: "render",
    value: function render() {
      if (this.props.visible === false && this.props.buttonHide === false) {
        return __jsx("div", {
          id: "buttons",
          className: "jsx-2989895130",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 17
          }
        }, __jsx("div", {
          id: "circle",
          className: "jsx-2989895130",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 21
          }
        }, __jsx("img", {
          src: _public_assets_single_figure_png__WEBPACK_IMPORTED_MODULE_8___default.a,
          className: "jsx-2989895130" + " " + "soloButtonImage",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }
        })), __jsx("div", {
          className: "jsx-2989895130",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 21
          }
        }, __jsx(_SoloExplain__WEBPACK_IMPORTED_MODULE_7__["default"], {
          id: "soloExplainComponent",
          visible: this.props.visible,
          buttonHide: this.props.buttonHide,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 21
          }
        })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
          id: "2989895130",
          __self: this
        }, "#circle.jsx-2989895130{background-color:hsl(0,0%,90%);box-shadow:inset hsla(0,0%,15%,1) 0 0px 0px 4px, inset hsla(0,0%,15%,.8) 0 -1px 5px 4px, inset hsla(0,0%,0%,.25) 0 -1px 0px 7px, inset hsla(0,0%,100%,.7) 0 2px 1px 7px,  hsla(0,0%,0%,.15) 0 -5px 6px 4px, hsla(0,0%,100%,.5) 0 5px 6px 4px;-webkit-transition:color .2s;transition:color .2s;min-width:150px;min-height:150px;width:15vw;height:15vw;line-height:1px;border-radius:50%;background-image: -webkit-radial-gradient( 50% 0%,8% 50%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 50% 100%,12% 50%,hsla(0,0%,100%,.6) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 0% 50%,50% 7%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 100% 50%,50% 5%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%),  -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,0%,0) 0%,hsla(0,0%,0%,0) 3%,hsla(0,0%,0%,.1) 3.5%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 6%,hsla(0,0%,100%,.1) 7.5%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 1.2%,hsla(0,0%,100%,.2) 2.2%),  -webkit-radial-gradient( 50% 50%,200% 50%,hsla(0,0%,90%,1) 5%,hsla(0,0%,85%,1) 30%,hsla(0,0%,60%,1) 100%);}#circle.jsx-2989895130:before,#circle.jsx-2989895130:after{content:\"\";top:0%;left:0%;position:relative;width:inherit;height:inherit;border-radius:inherit;background-image: -webkit-radial-gradient( 50% 0%,10% 50%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 50% 100%,10% 50%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 0% 50%,50% 10%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 100% 50%,50% 06%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%);}#circle.jsx-2989895130:before{-webkit-transform:rotate( 65deg);-ms-transform:rotate( 65deg);transform:rotate( 65deg);}#circle.jsx-2989895130:after{-webkit-transform:rotate(-65deg);-ms-transform:rotate(-65deg);transform:rotate(-65deg);}#circle.jsx-2989895130:active{color:hsl(210,100%,40%);text-shadow:hsla(210,100%,20%,.3) 0 -1px 0,hsl(210,100%,85%) 0 2px 1px,hsla(200,100%,80%,1) 0 0 5px,hsla(210,100%,50%,.6) 0 0 20px;box-shadow: inset hsla(210,100%,30%,1) 0 0px 0px 4px, inset hsla(210,100%,15%,.4) 0 -1px 5px 4px, inset hsla(210,100%,20%,.25) 0 -1px 0px 7px, inset hsla(210,100%,100%,.7) 0 2px 1px 7px,  hsla(210,100%,75%,.8) 0 0px 3px 2px, hsla(210,50%,40%,.25) 0 -5px 6px 4px, hsla(210,80%,95%,1) 0 5px 6px 4px;}div.jsx-2989895130 #buttons.jsx-2989895130{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}@media (max-width:608px){div.jsx-2989895130 #buttons.jsx-2989895130{height:150px;width:150px;}}@media (max-width:608px){}.soloButtonImage.jsx-2989895130{position:relative;height:80%;width:80%;min-width:100px;min-height:90px;-webkit-transform:translate(0%,10%);-ms-transform:translate(0%,10%);transform:translate(0%,10%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQnlCLEFBSWdFLEFBaUNwQixBQWU0QixBQUNELEFBR1osQUFrQkgsQUFNUixBQVlHLFdBdERYLEVBMkNPLEtBMUNOLEFBc0RHLE1BcEN5SCxDQXlCcEksQ0ExQ2tCLEdBc0RSLEVBbkZ1QixRQW9GakIsS0F0REYsV0F1REUsR0F0REQsYUF1RGMsRUF0RFAsY0FTa0IsQUFDRCxRQUhnRCxJQXlCbEUsd0RBVGdCLFlBZ0N2QyxRQXRCQSw2RkEvRHVCLGtEQUdMLGdCQUNDLGlCQUNOLFdBQ0MsWUFDSSxnQkFDRSxrQkFXMkYsZ0NBbUIvRyxZQWdCQSxzeEJBakNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTb2xvRXhwbGFpbiBmcm9tICcuL1NvbG9FeHBsYWluJztcclxuaW1wb3J0IFNpbmdsZUZpZ3VyZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL3NpbmdsZS1maWd1cmUucG5nJztcclxuXHJcbmNsYXNzIFNvbG9CdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSA9PT0gZmFsc2UgJiYgdGhpcy5wcm9wcy5idXR0b25IaWRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic29sb0J1dHRvbkltYWdlXCIgc3JjPXtTaW5nbGVGaWd1cmV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTb2xvRXhwbGFpbiBpZD1cInNvbG9FeHBsYWluQ29tcG9uZW50XCIgdmlzaWJsZT17dGhpcy5wcm9wcy52aXNpYmxlfSBidXR0b25IaWRlPXt0aGlzLnByb3BzLmJ1dHRvbkhpZGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLDAlLDkwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgaHNsYSgwLDAlLDE1JSwgIDEpIDAgIDBweCAwcHggNHB4LCAvKiBib3JkZXIgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDAsMCUsMTUlLCAuOCkgMCAtMXB4IDVweCA0cHgsIC8qIHNvZnQgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDAsMCUsMCUsIC4yNSkgMCAtMXB4IDBweCA3cHgsIC8qIGJvdHRvbSBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwxMDAlLC43KSAwICAycHggMXB4IDdweCwgLyogdG9wIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgwLDAlLCAwJSwuMTUpIDAgLTVweCA2cHggNHB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMCwwJSwxMDAlLC41KSAwICA1cHggNnB4IDRweDsgLyogb3V0ZXIgSEwgKi8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEJydXNoZWQgTWV0YWwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTV2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAgIDAlLCAgOCUgNTAlLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlIDEwMCUsIDEyJSA1MCUsIGhzbGEoMCwwJSwxMDAlLC42KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICAgMCUgIDUwJSwgNTAlICA3JSwgaHNsYSgwLDAlLDEwMCUsLjUpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggMTAwJSAgNTAlLCA1MCUgIDUlLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMTAwJSAxMDAlLCBoc2xhKDAsMCUsICAwJSwwKSAwJSwgaHNsYSgwLDAlLCAgMCUsMCkgICAzJSwgaHNsYSgwLDAlLCAgMCUsLjEpIDMuNSUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMTAwJSAxMDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgICA2JSwgaHNsYSgwLDAlLDEwMCUsLjEpIDcuNSUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMTAwJSAxMDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMS4yJSwgaHNsYSgwLDAlLDEwMCUsLjIpIDIuMiUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAyMDAlIDUwJSwgaHNsYSgwLDAlLDkwJSwxKSA1JSwgaHNsYSgwLDAlLDg1JSwxKSAzMCUsIGhzbGEoMCwwJSw2MCUsMSkgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTpiZWZvcmUsICNjaXJjbGU6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZmFrZSBjb25pY2FsIGdyYWRpZW50cyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgICAwJSwgMTAlIDUwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlIDEwMCUsIDEwJSA1MCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggICAwJSAgNTAlLCA1MCUgMTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDEwMCUgIDUwJSwgNTAlIDA2JSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmJlZm9yZSB7IHRyYW5zZm9ybTogcm90YXRlKCA2NWRlZyk7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTphZnRlciB7IHRyYW5zZm9ybTogcm90YXRlKC02NWRlZyk7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbCgyMTAsIDEwMCUsIDQwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBoc2xhKDIxMCwxMDAlLDIwJSwuMykgMCAtMXB4IDAsIGhzbCgyMTAsMTAwJSw4NSUpIDAgMnB4IDFweCwgaHNsYSgyMDAsMTAwJSw4MCUsMSkgMCAwIDVweCwgaHNsYSgyMTAsMTAwJSw1MCUsLjYpIDAgMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDMwJSwgIDEpIDAgIDBweCAwcHggNHB4LCAvKiBib3JkZXIgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDE1JSwgLjQpIDAgLTFweCA1cHggNHB4LCAvKiBzb2Z0IFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwyMCUsLjI1KSAwIC0xcHggMHB4IDdweCwgLyogYm90dG9tIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwxMDAlLC43KSAwICAycHggMXB4IDdweCwgLyogdG9wIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsMTAwJSw3NSUsIC44KSAwICAwcHggM3B4IDJweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCw1MCUsNDAlLCAuMjUpIDAgLTVweCA2cHggNHB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDgwJSw5NSUsICAgMSkgMCAgNXB4IDZweCA0cHg7IC8qIG91dGVyIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogRW5kIEJydXNoZWQgTWV0YWwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiAjYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjA4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYgI2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNzb2xvQnV0dG9uVGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvbG9CdXR0b25JbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAxMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2xvQnV0dG9uOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SoloButton.js */"));
      } else {
        return null;
      }
    }
  }]);

  return SoloButton;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SoloButton);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvbG9CdXR0b24uanMiXSwibmFtZXMiOlsiU29sb0J1dHRvbiIsInByb3BzIiwidmlzaWJsZSIsImJ1dHRvbkhpZGUiLCJTaW5nbGVGaWd1cmUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxVOzs7OztBQUNGLHNCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsNkJBQ1ZBLEtBRFU7QUFHZjs7Ozs2QkFFUTtBQUNMLFVBQUksS0FBS0EsS0FBTCxDQUFXQyxPQUFYLEtBQXVCLEtBQXZCLElBQWdDLEtBQUtELEtBQUwsQ0FBV0UsVUFBWCxLQUEwQixLQUE5RCxFQUFxRTtBQUNyRSxlQUNJO0FBQUssWUFBRSxFQUFDLFNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0k7QUFBSyxZQUFFLEVBQUMsUUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFpQyxhQUFHLEVBQUVDLHVFQUF0QztBQUFBLDhDQUFlLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESixDQURKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0EsTUFBQyxvREFBRDtBQUFhLFlBQUUsRUFBQyxzQkFBaEI7QUFBdUMsaUJBQU8sRUFBRSxLQUFLSCxLQUFMLENBQVdDLE9BQTNEO0FBQW9FLG9CQUFVLEVBQUUsS0FBS0QsS0FBTCxDQUFXRSxVQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREEsQ0FKSjtBQUFBO0FBQUE7QUFBQSwrMGFBREo7QUFrSEUsT0FuSEYsTUFtSFE7QUFDSixlQUFPLElBQVA7QUFDSDtBQUNKOzs7O0VBN0hnQkUsNENBQUssQ0FBQ0MsUzs7QUFnSWhCTix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMzQ3ZGE2N2MzY2UwMDg3YjlmNjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTb2xvRXhwbGFpbiBmcm9tICcuL1NvbG9FeHBsYWluJztcclxuaW1wb3J0IFNpbmdsZUZpZ3VyZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL3NpbmdsZS1maWd1cmUucG5nJztcclxuXHJcbmNsYXNzIFNvbG9CdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSA9PT0gZmFsc2UgJiYgdGhpcy5wcm9wcy5idXR0b25IaWRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic29sb0J1dHRvbkltYWdlXCIgc3JjPXtTaW5nbGVGaWd1cmV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTb2xvRXhwbGFpbiBpZD1cInNvbG9FeHBsYWluQ29tcG9uZW50XCIgdmlzaWJsZT17dGhpcy5wcm9wcy52aXNpYmxlfSBidXR0b25IaWRlPXt0aGlzLnByb3BzLmJ1dHRvbkhpZGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLDAlLDkwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgaHNsYSgwLDAlLDE1JSwgIDEpIDAgIDBweCAwcHggNHB4LCAvKiBib3JkZXIgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDAsMCUsMTUlLCAuOCkgMCAtMXB4IDVweCA0cHgsIC8qIHNvZnQgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDAsMCUsMCUsIC4yNSkgMCAtMXB4IDBweCA3cHgsIC8qIGJvdHRvbSBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwxMDAlLC43KSAwICAycHggMXB4IDdweCwgLyogdG9wIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgwLDAlLCAwJSwuMTUpIDAgLTVweCA2cHggNHB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMCwwJSwxMDAlLC41KSAwICA1cHggNnB4IDRweDsgLyogb3V0ZXIgSEwgKi8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEJydXNoZWQgTWV0YWwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTV2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAgIDAlLCAgOCUgNTAlLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlIDEwMCUsIDEyJSA1MCUsIGhzbGEoMCwwJSwxMDAlLC42KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICAgMCUgIDUwJSwgNTAlICA3JSwgaHNsYSgwLDAlLDEwMCUsLjUpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggMTAwJSAgNTAlLCA1MCUgIDUlLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMTAwJSAxMDAlLCBoc2xhKDAsMCUsICAwJSwwKSAwJSwgaHNsYSgwLDAlLCAgMCUsMCkgICAzJSwgaHNsYSgwLDAlLCAgMCUsLjEpIDMuNSUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMTAwJSAxMDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgICA2JSwgaHNsYSgwLDAlLDEwMCUsLjEpIDcuNSUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMTAwJSAxMDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMS4yJSwgaHNsYSgwLDAlLDEwMCUsLjIpIDIuMiUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAyMDAlIDUwJSwgaHNsYSgwLDAlLDkwJSwxKSA1JSwgaHNsYSgwLDAlLDg1JSwxKSAzMCUsIGhzbGEoMCwwJSw2MCUsMSkgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTpiZWZvcmUsICNjaXJjbGU6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZmFrZSBjb25pY2FsIGdyYWRpZW50cyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgICAwJSwgMTAlIDUwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlIDEwMCUsIDEwJSA1MCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggICAwJSAgNTAlLCA1MCUgMTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDEwMCUgIDUwJSwgNTAlIDA2JSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmJlZm9yZSB7IHRyYW5zZm9ybTogcm90YXRlKCA2NWRlZyk7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTphZnRlciB7IHRyYW5zZm9ybTogcm90YXRlKC02NWRlZyk7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbCgyMTAsIDEwMCUsIDQwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBoc2xhKDIxMCwxMDAlLDIwJSwuMykgMCAtMXB4IDAsIGhzbCgyMTAsMTAwJSw4NSUpIDAgMnB4IDFweCwgaHNsYSgyMDAsMTAwJSw4MCUsMSkgMCAwIDVweCwgaHNsYSgyMTAsMTAwJSw1MCUsLjYpIDAgMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDMwJSwgIDEpIDAgIDBweCAwcHggNHB4LCAvKiBib3JkZXIgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDE1JSwgLjQpIDAgLTFweCA1cHggNHB4LCAvKiBzb2Z0IFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwyMCUsLjI1KSAwIC0xcHggMHB4IDdweCwgLyogYm90dG9tIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwxMDAlLC43KSAwICAycHggMXB4IDdweCwgLyogdG9wIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsMTAwJSw3NSUsIC44KSAwICAwcHggM3B4IDJweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCw1MCUsNDAlLCAuMjUpIDAgLTVweCA2cHggNHB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDgwJSw5NSUsICAgMSkgMCAgNXB4IDZweCA0cHg7IC8qIG91dGVyIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogRW5kIEJydXNoZWQgTWV0YWwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiAjYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjA4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYgI2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNzb2xvQnV0dG9uVGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvbG9CdXR0b25JbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAxMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2xvQnV0dG9uOyJdLCJzb3VyY2VSb290IjoiIn0=