webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_video_BackgroundVideo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/video/BackgroundVideo */ "./public/video/BackgroundVideo.js");
/* harmony import */ var _public_assets_cconTriangle_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/assets/cconTriangle.png */ "./public/assets/cconTriangle.png");
/* harmony import */ var _public_assets_cconTriangle_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_cconTriangle_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _SoloButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SoloButton */ "./components/SoloButton.js");
/* harmony import */ var _SmallButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SmallButton */ "./components/SmallButton.js");
/* harmony import */ var _CorpButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CorpButton */ "./components/CorpButton.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Contact */ "./components/Contact.js");
/* harmony import */ var _SoloExplain__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SoloExplain */ "./components/SoloExplain.js");







var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\App.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var App = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = _super.call(this, props); // State management and bindings

    _this.state = {
      viewSolo: false,
      viewSmall: false,
      viewCorp: false,
      contentPage: 3,
      viewContact: false,
      viewRevolution: false,
      soloTransition: "",
      smallTransition: "",
      corpTransition: ""
    };
    _this.seeSolo = _this.seeSolo.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.closeAll = _this.closeAll.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.seeSmall = _this.seeSmall.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.seeCorp = _this.seeCorp.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.pageRight = _this.pageRight.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.pageLeft = _this.pageLeft.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.seeContact = _this.seeContact.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.seeRevolution = _this.seeRevolution.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  } // Function objects


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "closeAll",
    value: function closeAll() {
      this.setState({
        viewSolo: false,
        viewSmall: false,
        viewCorp: false,
        contentPage: 3,
        viewContact: false,
        viewRevolution: false
      });
    }
  }, {
    key: "seeSolo",
    value: function seeSolo() {
      this.setState(function (state) {
        return {
          viewSolo: true
        };
      });
    }
  }, {
    key: "seeSmall",
    value: function seeSmall() {
      this.setState({
        viewSmall: true
      });
    }
  }, {
    key: "seeCorp",
    value: function seeCorp() {
      this.setState({
        viewCorp: true
      });
    }
  }, {
    key: "seeContact",
    value: function seeContact() {
      this.setState({
        viewContact: true
      });
    }
  }, {
    key: "seeRevolution",
    value: function seeRevolution() {
      this.setState({
        viewRevolution: true
      });
    }
  }, {
    key: "setSoloSlideIn",
    value: function setSoloSlideIn() {
      this.setState({
        soloTransition: "slideIn"
      });
    }
  }, {
    key: "setSoloSlideOut",
    value: function setSoloSlideOut() {
      this.setState({
        soloTransition: "slideOut"
      });
    }
  }, {
    key: "setSmallSlideIn",
    value: function setSmallSlideIn() {
      this.setState({
        smallTransition: "slideIn"
      });
    }
  }, {
    key: "setSmallSlideOut",
    value: function setSmallSlideOut() {
      this.setState({
        smallTransition: "slideOut"
      });
    }
  }, {
    key: "setCorpSlideIn",
    value: function setCorpSlideIn() {
      this.setState({
        corpTransition: "slideIn"
      });
    }
  }, {
    key: "setCorpSlideOut",
    value: function setCorpSlideOut() {
      this.setState({
        corpTransition: "slideOut"
      });
    }
  }, {
    key: "pageRight",
    value: function pageRight() {
      if (this.state.contentPage <= 2) {
        this.setState({
          contentPage: this.state.contentPage + 1
        });
      } else if (this.state.contentPage = 3) {
        this.setState({
          contentPage: 1
        });
      }
    }
  }, {
    key: "pageLeft",
    value: function pageLeft() {
      if (this.state.contentPage >= 2) {
        this.setState({
          contentPage: this.state.contentPage - 1
        });
      } else if (this.state.contentPage = 1) {
        this.setState({
          contentPage: 3
        });
      }
    } // Rendered objects

  }, {
    key: "render",
    value: function render() {
      var _jsx;

      return __jsx("div", {
        className: "jsx-2397708249" + " " + "App",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 7
        }
      }, __jsx(_public_video_BackgroundVideo__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "video/mp4",
        autoplay: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "jsx-2397708249" + " " + "Signature",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 9
        }
      }, __jsx("img", {
        id: "logo",
        src: _public_assets_cconTriangle_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-2397708249",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 9
        }
      }), __jsx("h1", {
        className: "jsx-2397708249" + " " + "sigText",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 13
        }
      }, "METALS")), __jsx("div", {
        id: "bannerDiv",
        className: "jsx-2397708249",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 9
        }
      }, __jsx("h2", {
        id: "banner",
        className: "jsx-2397708249",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }
      }, __jsx("a", {
        id: "revLink",
        onClick: this.seeRevolution,
        style: {
          cursor: 'pointer'
        },
        className: "jsx-2397708249",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 13
        }
      }, "Your _______ ", __jsx("i", {
        id: "revTag",
        className: "jsx-2397708249",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 98
        }
      }, "REVOLUTION"), " in the catalytic converter market"))), __jsx("div", {
        id: "buttonContainer",
        className: "jsx-2397708249",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 10
        }
      }, __jsx("a", {
        onClick: this.seeSolo,
        id: "soloButton",
        style: {
          cursor: 'pointer'
        },
        className: "jsx-2397708249",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 10
        }
      }, __jsx(_SoloButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
        showComponent: this.seeSolo,
        visible: this.state.viewSolo,
        buttonHide: this.state.viewSmall || this.state.viewCorp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 80
        }
      })), __jsx(_SoloExplain__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "soloExplainComponent",
        visible: this.props.visible,
        buttonHide: this.props.buttonHide,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 10
        }
      }), __jsx("a", {
        onClick: this.seeSmall,
        id: "smallButton",
        style: {
          cursor: 'pointer'
        },
        className: "jsx-2397708249",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 10
        }
      }, __jsx(_SmallButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
        visible: this.state.viewSmall,
        buttonHide: this.state.viewSolo || this.state.viewCorp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 82
        }
      })), __jsx("a", {
        onClick: this.seeCorp,
        id: "corpButton",
        style: {
          cursor: 'pointer'
        },
        className: "jsx-2397708249",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 10
        }
      }, __jsx(_CorpButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
        visible: this.state.viewCorp,
        buttonHide: this.state.viewSmall || this.state.viewSolo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 80
        }
      })), __jsx("div", {
        id: "footerContainer",
        className: "jsx-2397708249",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 10
        }
      }, __jsx("a", (_jsx = {
        onClick: this.seeContact,
        id: "contactButton",
        style: {
          cursor: 'pointer'
        }
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "id", "footerLink"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "jsx-2397708249"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }), _jsx), __jsx(_Contact__WEBPACK_IMPORTED_MODULE_14__["default"], {
        buttonHide: this.state.viewSolo || this.state.viewSmall || this.state.viewCorp || this.state.viewContact || this.state.viewRevolution,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 102
        }
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2397708249",
        __self: this
      }, ".App.jsx-2397708249{text-align:center;}.Signature.jsx-2397708249{font-family:Syncopate;color:rgb(192,192,192);position:fixed;left:-30px;top:-30px;z-index:5;opacity:1;}#logo.jsx-2397708249{width:250px;max-width:250px;z-index:-1;pointer-events:none;}.sigText.jsx-2397708249{font-family:Syncopate;font-size:2em;margin-top:-58%;margin-left:61%;border-top:1px solid red;border-bottom:1px solid red;width:7.5em;height:0.95em;}#revTag.jsx-2397708249{color:red;z-index:2;height:100%;}#revLink.jsx-2397708249{font-size:1.7em;height:100%;text-shadow:3px 3px black;}#banner.jsx-2397708249{border-top:1px solid red;border-bottom:1px solid red;width:80vw;margin:auto;color:white;z-index:1;opacity:0.8;}#bannerDiv.jsx-2397708249{-webkit-transform:translate(0%,150px);-ms-transform:translate(0%,150px);transform:translate(0%,150px);}@media (max-width:608px){div.jsx-2397708249 #bannerDiv.jsx-2397708249{display:none;}}div.jsx-2397708249 #buttonContainer.jsx-2397708249{position:absolute;width:80%;left:50%;top:50%;-webkit-transform:translate(-50%,-45%);-ms-transform:translate(-50%,-45%);transform:translate(-50%,-45%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vw;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}@media (max-width:608px){div.jsx-2397708249 #buttonContainer.jsx-2397708249{display:-webkit-inline-box;display:-webkit-inline-flexbox;display:-ms-inline-flexboxbox;display:inline-flexbox;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;width:150px;height:70%;top:62%;-webkit-transform:translate(-120%,-65%);-ms-transform:translate(-120%,-65%);transform:translate(-120%,-65%);}}#corpButton.jsx-2397708249{width:15vw;min-width:150px;min-height:150px;}@media (max-width:608px){#corpButton.jsx-2397708249{width:150px;height:150px;}}#smallButton.jsx-2397708249{width:15vw;min-width:150px;min-height:150px;}@media (max-width:608px){#smallButton.jsx-2397708249{width:150px;height:150px;}}#soloButton.jsx-2397708249{width:15vw;width:150px;height:150px;}@media (max-width:608px){#soloButton.jsx-2397708249{width:150px;height:150px;}}div.jsx-2397708249 #contentContainer.jsx-2397708249{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:60vh;width:80vw;background-color:white;border-radius:8px;}#footerContainer.jsx-2397708249{width:33%;position:fixed;-webkit-transform:translate(0%,500%);-ms-transform:translate(0%,500%);transform:translate(0%,500%);margin-top:20%;}@media (max-width:608px){#footerContainer.jsx-2397708249{width:100%;position:fixed;-webkit-transform:translate(70%,-250%);-ms-transform:translate(70%,-250%);transform:translate(70%,-250%);margin-top:0%;}}#soloButton.jsx-2397708249{z-index:20;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNMc0IsQUFJK0IsQUFJSSxBQVVWLEFBUVUsQUFXWixBQU1NLEFBTVMsQUFXNUIsQUFLa0IsQUFLSyxBQVlLLEFBVWQsQUFPRyxBQU1ILEFBT0csQUFNSCxBQU9HLEFBTUksQUFlTixBQVFDLEFBUUYsVUE1SEQsQUE2R08sQ0F0REQsQUFhQSxBQWFKLEFBb0NLLEFBUW5CLENBaEprQixBQWlGRCxBQWFBLEFBYUEsQ0E1RGYsR0F0QlksRUF2Q2QsQUFrRWMsQUE2REgsRUE3RkcsRUE5QmEsQUFrQlgsQ0E2RkQsRUF0RWUsQUFtRDVCLEFBYUEsQUFhQSxBQXFCZ0MsQ0FRRSxDQTlEakIsQUFhQSxBQTBCVCxDQWpIRyxBQXlCZSxBQTJCZixJQWhDYixHQThGa0MsQ0ExR2hCLEFBNkZsQixDQWhEWSxFQW5EYixLQXlFQyxBQWFBLENBbEdpQixBQWdFbUIsT0E3Q2xCLENBc0JMLENBTGIsS0F4QkEsQ0FYYSxJQXlDQyxJQXRCYSxHQWxCZixLQXlDRSxLQXhDRixPQXlDQSxHQXhDQSxFQWlCa0IsS0F3QmhCLEdBeENkLENBNkNBLFFBSkEsQ0EyQmlDLFVBbkRuQixHQXFISyxPQVFELEVBNUhGLE1BcUhoQixDQWZlLEtBdUJmLEVBNUhBLEdBeUNpQixnRUE2REksVUE1REwsVUFRQSxFQVBpQixVQVFsQixXQUNILFFBQ3lCLDBDQWtETCxvREEzRGhDLGNBVUUsaURBa0RZLFlBQ0QsV0FDWSx1QkFDTCxrQkFFcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhY2tncm91bmRWaWRlbyBmcm9tICcuLi9wdWJsaWMvdmlkZW8vQmFja2dyb3VuZFZpZGVvJztcbmltcG9ydCBjY29uVHJpYW5nbGUgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9jY29uVHJpYW5nbGUucG5nJztcbmltcG9ydCBTb2xvQnV0dG9uIGZyb20gJy4vU29sb0J1dHRvbic7XG5pbXBvcnQgU21hbGxCdXR0b24gZnJvbSAnLi9TbWFsbEJ1dHRvbic7XG5pbXBvcnQgQ29ycEJ1dHRvbiBmcm9tICcuL0NvcnBCdXR0b24nO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcbmltcG9ydCBTb2xvRXhwbGFpbiBmcm9tICcuL1NvbG9FeHBsYWluJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIC8vIFN0YXRlIG1hbmFnZW1lbnQgYW5kIGJpbmRpbmdzXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpZXdTb2xvOiBmYWxzZSxcbiAgICAgIHZpZXdTbWFsbDogZmFsc2UsXG4gICAgICB2aWV3Q29ycDogZmFsc2UsXG4gICAgICBjb250ZW50UGFnZTogMyxcbiAgICAgIHZpZXdDb250YWN0OiBmYWxzZSxcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiBmYWxzZSxcbiAgICAgIHNvbG9UcmFuc2l0aW9uOiBcIlwiLFxuICAgICAgc21hbGxUcmFuc2l0aW9uOiBcIlwiLFxuICAgICAgY29ycFRyYW5zaXRpb246IFwiXCIsXG4gICAgfTtcblxuICAgIHRoaXMuc2VlU29sbyA9IHRoaXMuc2VlU29sby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VBbGwgPSB0aGlzLmNsb3NlQWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVTbWFsbCA9IHRoaXMuc2VlU21hbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZUNvcnAgPSB0aGlzLnNlZUNvcnAuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhZ2VSaWdodCA9IHRoaXMucGFnZVJpZ2h0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYWdlTGVmdCA9IHRoaXMucGFnZUxlZnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZUNvbnRhY3QgPSB0aGlzLnNlZUNvbnRhY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZVJldm9sdXRpb24gPSB0aGlzLnNlZVJldm9sdXRpb24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIG9iamVjdHNcbiAgXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1NvbG86IGZhbHNlLFxuICAgICAgdmlld1NtYWxsOiBmYWxzZSxcbiAgICAgIHZpZXdDb3JwOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRQYWdlOiAzLFxuICAgICAgdmlld0NvbnRhY3Q6IGZhbHNlLFxuICAgICAgdmlld1Jldm9sdXRpb246IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlU29sbygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICB2aWV3U29sbzogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBzZWVTbWFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdTbWFsbDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlZUNvcnAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3Q29ycDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlZUNvbnRhY3QoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3Q29udGFjdDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlZVJldm9sdXRpb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3UmV2b2x1dGlvbjogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNldFNvbG9TbGlkZUluKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc29sb1RyYW5zaXRpb246IFwic2xpZGVJblwiXG4gICAgfSlcbiAgfVxuXG4gIHNldFNvbG9TbGlkZU91dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNvbG9UcmFuc2l0aW9uOiBcInNsaWRlT3V0XCJcbiAgICB9KVxuICB9XG5cbiAgc2V0U21hbGxTbGlkZUluKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc21hbGxUcmFuc2l0aW9uOiBcInNsaWRlSW5cIlxuICAgIH0pXG4gIH1cblxuICBzZXRTbWFsbFNsaWRlT3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc21hbGxUcmFuc2l0aW9uOiBcInNsaWRlT3V0XCJcbiAgICB9KVxuICB9XG5cbiAgc2V0Q29ycFNsaWRlSW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb3JwVHJhbnNpdGlvbjogXCJzbGlkZUluXCJcbiAgICB9KVxuICB9XG5cbiAgc2V0Q29ycFNsaWRlT3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29ycFRyYW5zaXRpb246IFwic2xpZGVPdXRcIlxuICAgIH0pXG4gIH1cblxuICBwYWdlUmlnaHQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY29udGVudFBhZ2UgPD0gMikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29udGVudFBhZ2U6IHRoaXMuc3RhdGUuY29udGVudFBhZ2UgKyAxXG4gICAgfSl9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY29udGVudFBhZ2UgPSAzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29udGVudFBhZ2U6IDFcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcGFnZUxlZnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY29udGVudFBhZ2UgPj0gMikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29udGVudFBhZ2U6IHRoaXMuc3RhdGUuY29udGVudFBhZ2UgLSAxXG4gICAgfSl9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY29udGVudFBhZ2UgPSAxKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbnRlbnRQYWdlOiAzXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG5cbiAgLy8gUmVuZGVyZWQgb2JqZWN0c1xuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cblxuICAgICAgICA8QmFja2dyb3VuZFZpZGVvIHR5cGU9J3ZpZGVvL21wNCcgYXV0b3BsYXkgLz5cblxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2lnbmF0dXJlXCI+XG4gICAgICAgIDxpbWcgaWQ9XCJsb2dvXCIgc3JjPXtjY29uVHJpYW5nbGV9IC8+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2lnVGV4dFwiPlxuICAgICAgICAgICAgICAgIE1FVEFMU1xuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gXG4gICAgICAgIDxkaXYgaWQ9J2Jhbm5lckRpdic+XG4gICAgICAgICAgPGgyIGlkPVwiYmFubmVyXCI+XG4gICAgICAgICAgICA8YSBpZD1cInJldkxpbmtcIiBvbkNsaWNrPXt0aGlzLnNlZVJldm9sdXRpb259IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PllvdXIgX19fX19fXyA8aSBpZD1cInJldlRhZ1wiPlJFVk9MVVRJT048L2k+IGluIHRoZSBjYXRhbHl0aWMgY29udmVydGVyIG1hcmtldDwvYT5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uQ29udGFpbmVyXCIgPlxuICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVTb2xvfSAgaWQ9XCJzb2xvQnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PFNvbG9CdXR0b24gc2hvd0NvbXBvbmVudD17dGhpcy5zZWVTb2xvfSB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTb2xvfSBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwfSAvPjwvYT5cbiAgICAgICAgIDxTb2xvRXhwbGFpbiBpZD1cInNvbG9FeHBsYWluQ29tcG9uZW50XCIgdmlzaWJsZT17dGhpcy5wcm9wcy52aXNpYmxlfSBidXR0b25IaWRlPXt0aGlzLnByb3BzLmJ1dHRvbkhpZGV9IC8+XG4gICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZVNtYWxsfSAgaWQ9XCJzbWFsbEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxTbWFsbEJ1dHRvbiB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbH0gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwfSAvPjwvYT5cbiAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlQ29ycH0gIGlkPVwiY29ycEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDb3JwQnV0dG9uIHZpc2libGU9e3RoaXMuc3RhdGUudmlld0NvcnB9IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld1NvbG99IC8+PC9hPlxuICAgICAgICAgPGRpdiBpZD1cImZvb3RlckNvbnRhaW5lclwiPlxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlQ29udGFjdH0gaWQ9XCJjb250YWN0QnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0gaWQ9XCJmb290ZXJMaW5rXCI+PENvbnRhY3QgYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwIHx8IHRoaXMuc3RhdGUudmlld0NvbnRhY3QgfHwgdGhpcy5zdGF0ZS52aWV3UmV2b2x1dGlvbn0+PC9Db250YWN0PjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbnsvKlxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucGFnZVJpZ2h0fSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q2hldnJvblJpZ2h0IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0vPjwvYT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucGFnZUxlZnR9IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDaGV2cm9uTGVmdCBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnB9Lz48L2E+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmNsb3NlQWxsfSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q2xvc2VCdXR0b24gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwIHx8IHRoaXMuc3RhdGUudmlld0NvbnRhY3QgfHwgdGhpcy5zdGF0ZS52aWV3UmV2b2x1dGlvbn0vPjwvYT5cbiAgICAgICAgICAgIDxTb2xvQ29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTb2xvfSBwYWdlTnVtPXt0aGlzLnN0YXRlLmNvbnRlbnRQYWdlfSBpZD1cInNvbG9Db250ZW50XCIgLz5cbiAgICAgICAgICAgIDxTbWFsbENvbnRlbnQgdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U21hbGx9IHBhZ2VOdW09e3RoaXMuc3RhdGUuY29udGVudFBhZ2V9IGlkPVwic21hbGxDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxDb3JwQ29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdDb3JwfSBwYWdlTnVtPXt0aGlzLnN0YXRlLmNvbnRlbnRQYWdlfSBpZD1cImNvcnBDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxDb250YWN0Q29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdDb250YWN0fSBpZD1cImNvbnRhY3RDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxSZXZvbHV0aW9uIHZpc2libGU9e3RoaXMuc3RhdGUudmlld1Jldm9sdXRpb259IGlkPVwicmV2Q29udGVudFwiIC8+XG4gICAgICAgICA8L2Rpdj4gICAgICovfVxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgLkFwcCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5TaWduYXR1cmUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBsZWZ0OiAtMzBweDtcbiAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2xvZ28ge1xuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmVcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgLnNpZ1RleHQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTU4JTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2MSU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIHdpZHRoOiA3LjVlbTtcbiAgICAgICAgICAgIGhlaWdodDogMC45NWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNyZXZUYWcge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNyZXZMaW5rIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCBibGFjaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjYmFubmVyIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjYmFubmVyRGl2IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAxNTBweClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjA4cHgpe1xuXG4gICAgICAgICAgICBkaXYgI2Jhbm5lckRpdntcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXYgI2J1dHRvbkNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQ1JSk7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTV2dztcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XG4gICAgICAgICAgICBkaXYgI2J1dHRvbkNvbnRhaW5lcntcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXhib3g7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgICAgICB0b3A6IDYyJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMCUsIC02NSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjY29ycEJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCkge1xuICAgICAgICAgICAgI2NvcnBCdXR0b257XG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3NtYWxsQnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDE1dnc7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XG4gICAgICAgICAgICAjc21hbGxCdXR0b257XG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3NvbG9CdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XG4gICAgICAgICAgICAjc29sb0J1dHRvbntcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBkaXYgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjZm9vdGVyQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNTAwJSk7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjA4cHgpIHtcbiAgICAgICAgICAgICNmb290ZXJDb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3MCUsIC0yNTAlKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjc29sb0J1dHRvbntcbiAgICAgICAgICAgIHotaW5kZXg6IDIwO1xuICAgICAgICAgIH1cbiAgICAgXG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\App.js */"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidmlld1NvbG8iLCJ2aWV3U21hbGwiLCJ2aWV3Q29ycCIsImNvbnRlbnRQYWdlIiwidmlld0NvbnRhY3QiLCJ2aWV3UmV2b2x1dGlvbiIsInNvbG9UcmFuc2l0aW9uIiwic21hbGxUcmFuc2l0aW9uIiwiY29ycFRyYW5zaXRpb24iLCJzZWVTb2xvIiwiYmluZCIsImNsb3NlQWxsIiwic2VlU21hbGwiLCJzZWVDb3JwIiwicGFnZVJpZ2h0IiwicGFnZUxlZnQiLCJzZWVDb250YWN0Iiwic2VlUmV2b2x1dGlvbiIsInNldFN0YXRlIiwiY2NvblRyaWFuZ2xlIiwiY3Vyc29yIiwidmlzaWJsZSIsImJ1dHRvbkhpZGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsRzs7Ozs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOLEVBRGlCLENBR2pCOztBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBQUUsS0FEQztBQUVYQyxlQUFTLEVBQUUsS0FGQTtBQUdYQyxjQUFRLEVBQUUsS0FIQztBQUlYQyxpQkFBVyxFQUFFLENBSkY7QUFLWEMsaUJBQVcsRUFBRSxLQUxGO0FBTVhDLG9CQUFjLEVBQUUsS0FOTDtBQU9YQyxvQkFBYyxFQUFFLEVBUEw7QUFRWEMscUJBQWUsRUFBRSxFQVJOO0FBU1hDLG9CQUFjLEVBQUU7QUFUTCxLQUFiO0FBWUEsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUMsSUFBYix5R0FBZjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjRCxJQUFkLHlHQUFoQjtBQUNB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QUwsQ0FBV0MsUUFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUF0RSxDQUpBLEVBS0E7QUFBSyxVQUFFLEVBQUMsaUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBRyxlQUFPLEVBQUUsS0FBS2dCLFVBQWpCO0FBQTZCLFVBQUUsRUFBQyxlQUFoQztBQUFnRCxhQUFLLEVBQUU7QUFBQ0ksZ0JBQU0sRUFBQztBQUFSO0FBQXZELCtHQUE4RSxZQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUEyRixNQUFDLGlEQUFEO0FBQVMsa0JBQVUsRUFBRSxLQUFLckIsS0FBTCxDQUFXQyxRQUFYLElBQXVCLEtBQUtELEtBQUwsQ0FBV0UsU0FBbEMsSUFBK0MsS0FBS0YsS0FBTCxDQUFXRyxRQUExRCxJQUFzRSxLQUFLSCxLQUFMLENBQVdLLFdBQWpGLElBQWdHLEtBQUtMLEtBQUwsQ0FBV00sY0FBaEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUEzRixDQURELENBTEEsQ0FuQkg7QUFBQTtBQUFBO0FBQUEsMGtpQkFERjtBQWdORDs7OztFQXBWZWtCLDRDQUFLLENBQUNDLFM7O0FBdVZUM0Isa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjczODQ5MzhlNzhlMzQzYzlhYTYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhY2tncm91bmRWaWRlbyBmcm9tICcuLi9wdWJsaWMvdmlkZW8vQmFja2dyb3VuZFZpZGVvJztcbmltcG9ydCBjY29uVHJpYW5nbGUgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9jY29uVHJpYW5nbGUucG5nJztcbmltcG9ydCBTb2xvQnV0dG9uIGZyb20gJy4vU29sb0J1dHRvbic7XG5pbXBvcnQgU21hbGxCdXR0b24gZnJvbSAnLi9TbWFsbEJ1dHRvbic7XG5pbXBvcnQgQ29ycEJ1dHRvbiBmcm9tICcuL0NvcnBCdXR0b24nO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcbmltcG9ydCBTb2xvRXhwbGFpbiBmcm9tICcuL1NvbG9FeHBsYWluJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIC8vIFN0YXRlIG1hbmFnZW1lbnQgYW5kIGJpbmRpbmdzXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpZXdTb2xvOiBmYWxzZSxcbiAgICAgIHZpZXdTbWFsbDogZmFsc2UsXG4gICAgICB2aWV3Q29ycDogZmFsc2UsXG4gICAgICBjb250ZW50UGFnZTogMyxcbiAgICAgIHZpZXdDb250YWN0OiBmYWxzZSxcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiBmYWxzZSxcbiAgICAgIHNvbG9UcmFuc2l0aW9uOiBcIlwiLFxuICAgICAgc21hbGxUcmFuc2l0aW9uOiBcIlwiLFxuICAgICAgY29ycFRyYW5zaXRpb246IFwiXCIsXG4gICAgfTtcblxuICAgIHRoaXMuc2VlU29sbyA9IHRoaXMuc2VlU29sby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VBbGwgPSB0aGlzLmNsb3NlQWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVTbWFsbCA9IHRoaXMuc2VlU21hbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZUNvcnAgPSB0aGlzLnNlZUNvcnAuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhZ2VSaWdodCA9IHRoaXMucGFnZVJpZ2h0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYWdlTGVmdCA9IHRoaXMucGFnZUxlZnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZUNvbnRhY3QgPSB0aGlzLnNlZUNvbnRhY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZVJldm9sdXRpb24gPSB0aGlzLnNlZVJldm9sdXRpb24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIG9iamVjdHNcbiAgXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1NvbG86IGZhbHNlLFxuICAgICAgdmlld1NtYWxsOiBmYWxzZSxcbiAgICAgIHZpZXdDb3JwOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRQYWdlOiAzLFxuICAgICAgdmlld0NvbnRhY3Q6IGZhbHNlLFxuICAgICAgdmlld1Jldm9sdXRpb246IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlU29sbygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICB2aWV3U29sbzogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBzZWVTbWFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdTbWFsbDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlZUNvcnAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3Q29ycDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlZUNvbnRhY3QoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3Q29udGFjdDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlZVJldm9sdXRpb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3UmV2b2x1dGlvbjogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNldFNvbG9TbGlkZUluKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc29sb1RyYW5zaXRpb246IFwic2xpZGVJblwiXG4gICAgfSlcbiAgfVxuXG4gIHNldFNvbG9TbGlkZU91dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNvbG9UcmFuc2l0aW9uOiBcInNsaWRlT3V0XCJcbiAgICB9KVxuICB9XG5cbiAgc2V0U21hbGxTbGlkZUluKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc21hbGxUcmFuc2l0aW9uOiBcInNsaWRlSW5cIlxuICAgIH0pXG4gIH1cblxuICBzZXRTbWFsbFNsaWRlT3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc21hbGxUcmFuc2l0aW9uOiBcInNsaWRlT3V0XCJcbiAgICB9KVxuICB9XG5cbiAgc2V0Q29ycFNsaWRlSW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb3JwVHJhbnNpdGlvbjogXCJzbGlkZUluXCJcbiAgICB9KVxuICB9XG5cbiAgc2V0Q29ycFNsaWRlT3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29ycFRyYW5zaXRpb246IFwic2xpZGVPdXRcIlxuICAgIH0pXG4gIH1cblxuICBwYWdlUmlnaHQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY29udGVudFBhZ2UgPD0gMikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29udGVudFBhZ2U6IHRoaXMuc3RhdGUuY29udGVudFBhZ2UgKyAxXG4gICAgfSl9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY29udGVudFBhZ2UgPSAzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29udGVudFBhZ2U6IDFcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcGFnZUxlZnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY29udGVudFBhZ2UgPj0gMikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29udGVudFBhZ2U6IHRoaXMuc3RhdGUuY29udGVudFBhZ2UgLSAxXG4gICAgfSl9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY29udGVudFBhZ2UgPSAxKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbnRlbnRQYWdlOiAzXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG5cbiAgLy8gUmVuZGVyZWQgb2JqZWN0c1xuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cblxuICAgICAgICA8QmFja2dyb3VuZFZpZGVvIHR5cGU9J3ZpZGVvL21wNCcgYXV0b3BsYXkgLz5cblxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2lnbmF0dXJlXCI+XG4gICAgICAgIDxpbWcgaWQ9XCJsb2dvXCIgc3JjPXtjY29uVHJpYW5nbGV9IC8+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2lnVGV4dFwiPlxuICAgICAgICAgICAgICAgIE1FVEFMU1xuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gXG4gICAgICAgIDxkaXYgaWQ9J2Jhbm5lckRpdic+XG4gICAgICAgICAgPGgyIGlkPVwiYmFubmVyXCI+XG4gICAgICAgICAgICA8YSBpZD1cInJldkxpbmtcIiBvbkNsaWNrPXt0aGlzLnNlZVJldm9sdXRpb259IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PllvdXIgX19fX19fXyA8aSBpZD1cInJldlRhZ1wiPlJFVk9MVVRJT048L2k+IGluIHRoZSBjYXRhbHl0aWMgY29udmVydGVyIG1hcmtldDwvYT5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uQ29udGFpbmVyXCIgPlxuICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVTb2xvfSAgaWQ9XCJzb2xvQnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PFNvbG9CdXR0b24gc2hvd0NvbXBvbmVudD17dGhpcy5zZWVTb2xvfSB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTb2xvfSBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwfSAvPjwvYT5cbiAgICAgICAgIDxTb2xvRXhwbGFpbiBpZD1cInNvbG9FeHBsYWluQ29tcG9uZW50XCIgdmlzaWJsZT17dGhpcy5wcm9wcy52aXNpYmxlfSBidXR0b25IaWRlPXt0aGlzLnByb3BzLmJ1dHRvbkhpZGV9IC8+XG4gICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZVNtYWxsfSAgaWQ9XCJzbWFsbEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxTbWFsbEJ1dHRvbiB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbH0gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwfSAvPjwvYT5cbiAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlQ29ycH0gIGlkPVwiY29ycEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDb3JwQnV0dG9uIHZpc2libGU9e3RoaXMuc3RhdGUudmlld0NvcnB9IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld1NvbG99IC8+PC9hPlxuICAgICAgICAgPGRpdiBpZD1cImZvb3RlckNvbnRhaW5lclwiPlxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlQ29udGFjdH0gaWQ9XCJjb250YWN0QnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0gaWQ9XCJmb290ZXJMaW5rXCI+PENvbnRhY3QgYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwIHx8IHRoaXMuc3RhdGUudmlld0NvbnRhY3QgfHwgdGhpcy5zdGF0ZS52aWV3UmV2b2x1dGlvbn0+PC9Db250YWN0PjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbnsvKlxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucGFnZVJpZ2h0fSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q2hldnJvblJpZ2h0IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0vPjwvYT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucGFnZUxlZnR9IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDaGV2cm9uTGVmdCBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnB9Lz48L2E+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmNsb3NlQWxsfSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q2xvc2VCdXR0b24gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwIHx8IHRoaXMuc3RhdGUudmlld0NvbnRhY3QgfHwgdGhpcy5zdGF0ZS52aWV3UmV2b2x1dGlvbn0vPjwvYT5cbiAgICAgICAgICAgIDxTb2xvQ29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTb2xvfSBwYWdlTnVtPXt0aGlzLnN0YXRlLmNvbnRlbnRQYWdlfSBpZD1cInNvbG9Db250ZW50XCIgLz5cbiAgICAgICAgICAgIDxTbWFsbENvbnRlbnQgdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U21hbGx9IHBhZ2VOdW09e3RoaXMuc3RhdGUuY29udGVudFBhZ2V9IGlkPVwic21hbGxDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxDb3JwQ29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdDb3JwfSBwYWdlTnVtPXt0aGlzLnN0YXRlLmNvbnRlbnRQYWdlfSBpZD1cImNvcnBDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxDb250YWN0Q29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdDb250YWN0fSBpZD1cImNvbnRhY3RDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxSZXZvbHV0aW9uIHZpc2libGU9e3RoaXMuc3RhdGUudmlld1Jldm9sdXRpb259IGlkPVwicmV2Q29udGVudFwiIC8+XG4gICAgICAgICA8L2Rpdj4gICAgICovfVxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgLkFwcCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5TaWduYXR1cmUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBsZWZ0OiAtMzBweDtcbiAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2xvZ28ge1xuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmVcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgLnNpZ1RleHQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTU4JTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2MSU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIHdpZHRoOiA3LjVlbTtcbiAgICAgICAgICAgIGhlaWdodDogMC45NWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNyZXZUYWcge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNyZXZMaW5rIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCBibGFjaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjYmFubmVyIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjYmFubmVyRGl2IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAxNTBweClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjA4cHgpe1xuXG4gICAgICAgICAgICBkaXYgI2Jhbm5lckRpdntcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXYgI2J1dHRvbkNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQ1JSk7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTV2dztcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XG4gICAgICAgICAgICBkaXYgI2J1dHRvbkNvbnRhaW5lcntcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXhib3g7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgICAgICB0b3A6IDYyJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMCUsIC02NSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjY29ycEJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCkge1xuICAgICAgICAgICAgI2NvcnBCdXR0b257XG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3NtYWxsQnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDE1dnc7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XG4gICAgICAgICAgICAjc21hbGxCdXR0b257XG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3NvbG9CdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XG4gICAgICAgICAgICAjc29sb0J1dHRvbntcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBkaXYgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjZm9vdGVyQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNTAwJSk7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjA4cHgpIHtcbiAgICAgICAgICAgICNmb290ZXJDb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3MCUsIC0yNTAlKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjc29sb0J1dHRvbntcbiAgICAgICAgICAgIHotaW5kZXg6IDIwO1xuICAgICAgICAgIH1cbiAgICAgXG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9