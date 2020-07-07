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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_15__);







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
        className: "jsx-2562915209" + " " + "App",
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
        className: "jsx-2562915209" + " " + "Signature",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 9
        }
      }, __jsx("img", {
        id: "logo",
        src: _public_assets_cconTriangle_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-2562915209",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 9
        }
      }), __jsx("h1", {
        className: "jsx-2562915209" + " " + "sigText",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 13
        }
      }, "METALS")), __jsx("div", {
        id: "bannerDiv",
        className: "jsx-2562915209",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 9
        }
      }, __jsx("h2", {
        id: "banner",
        className: "jsx-2562915209",
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
        className: "jsx-2562915209",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 13
        }
      }, "Your _______ ", __jsx("i", {
        id: "revTag",
        className: "jsx-2562915209",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 98
        }
      }, "REVOLUTION"), " in the catalytic converter market"))), __jsx("div", {
        id: "buttonContainer",
        className: "jsx-2562915209",
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
        className: "jsx-2562915209",
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
      })), __jsx("a", {
        onClick: this.seeSmall,
        id: "smallButton",
        style: {
          cursor: 'pointer'
        },
        className: "jsx-2562915209",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 10
        }
      }, __jsx(_SmallButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
        visible: this.state.viewSmall,
        buttonHide: this.state.viewSolo || this.state.viewCorp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 82
        }
      })), __jsx("a", {
        onClick: this.seeCorp,
        id: "corpButton",
        style: {
          cursor: 'pointer'
        },
        className: "jsx-2562915209",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 10
        }
      }, __jsx(_CorpButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
        visible: this.state.viewCorp,
        buttonHide: this.state.viewSmall || this.state.viewSolo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 80
        }
      })), __jsx("div", {
        id: "footerContainer",
        className: "jsx-2562915209",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 10
        }
      }, __jsx("a", (_jsx = {
        onClick: this.seeContact,
        id: "contactButton",
        style: {
          cursor: 'pointer'
        }
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "id", "footerLink"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "jsx-2562915209"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 11
      }), _jsx), __jsx(_Contact__WEBPACK_IMPORTED_MODULE_14__["default"], {
        buttonHide: this.state.viewSolo || this.state.viewSmall || this.state.viewCorp || this.state.viewContact || this.state.viewRevolution,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 102
        }
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2562915209",
        __self: this
      }, ".App.jsx-2562915209{text-align:center;}.Signature.jsx-2562915209{font-family:Syncopate;color:rgb(192,192,192);position:fixed;left:-30px;top:-30px;z-index:5;opacity:1;}#logo.jsx-2562915209{width:250px;max-width:250px;z-index:-1;pointer-events:none;}.sigText.jsx-2562915209{font-family:Syncopate;font-size:2em;margin-top:-58%;margin-left:61%;border-top:1px solid red;border-bottom:1px solid red;width:7.5em;height:0.95em;}#revTag.jsx-2562915209{color:red;z-index:2;height:100%;}#revLink.jsx-2562915209{font-size:1.7em;height:100%;text-shadow:3px 3px black;}#banner.jsx-2562915209{border-top:1px solid red;border-bottom:1px solid red;width:80vw;margin:auto;color:white;z-index:1;opacity:0.8;}#bannerDiv.jsx-2562915209{-webkit-transform:translate(0%,150px);-ms-transform:translate(0%,150px);transform:translate(0%,150px);}@media (max-width:608px){div.jsx-2562915209 #bannerDiv.jsx-2562915209{display:none;}}div.jsx-2562915209 #buttonContainer.jsx-2562915209{position:absolute;width:80%;left:50%;top:50%;-webkit-transform:translate(-50%,-45%);-ms-transform:translate(-50%,-45%);transform:translate(-50%,-45%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vw;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}@media (max-width:608px){div.jsx-2562915209 #buttonContainer.jsx-2562915209{display:-webkit-inline-box;display:-webkit-inline-flexbox;display:-ms-inline-flexboxbox;display:inline-flexbox;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;width:150px;height:70%;top:62%;-webkit-transform:translate(-120%,-65%);-ms-transform:translate(-120%,-65%);transform:translate(-120%,-65%);}}#corpButton.jsx-2562915209{width:15vw;min-width:150px;min-height:150px;}@media (max-width:608px){}#smallButton.jsx-2562915209{width:15vw;min-width:150px;min-height:150px;}@media (max-width:608px){}#soloButton.jsx-2562915209{width:15vw;min-width:150px;min-height:150px;}div.jsx-2562915209 #contentContainer.jsx-2562915209{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:60vh;width:80vw;background-color:white;border-radius:8px;}#footerContainer.jsx-2562915209{width:33%;position:fixed;-webkit-transform:translate(0%,500%);-ms-transform:translate(0%,500%);transform:translate(0%,500%);margin-top:20%;}@media (max-width:608px){#footerContainer.jsx-2562915209{width:100%;position:fixed;-webkit-transform:translate(70%,-250%);-ms-transform:translate(70%,-250%);transform:translate(70%,-250%);margin-top:0%;}}#soloButton.jsx-2562915209{z-index:20;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFMc0IsQUFJK0IsQUFJSSxBQVVWLEFBUVUsQUFXWixBQU1NLEFBTVMsQUFXNUIsQUFLa0IsQUFLSyxBQVlLLEFBVWQsQUFVQSxBQVVBLEFBTU8sQUFlTixBQVFDLEFBUUYsVUEvR0QsQUFnR08sQ0F6Q0QsQUFVQSxBQVVBLEFBNkJDLEFBUW5CLENBbklrQixDQStDaEIsR0F0QlksRUF2Q2QsQUFrRWMsQUFnREgsRUFoRkcsRUE5QmEsQUFrQlgsR0F1QmMsQUFxRkksQ0FRRSxDQWpEakIsQUFVQSxBQVVBLEFBTVQsQ0FwR0csQUF5QmUsQUEyQmYsSUFoQ2IsR0FpRmtDLENBN0ZoQixDQTZDTixFQW5EYixLQXlFQyxBQVVBLEFBVUEsQ0F6R2lCLEFBZ0VtQixPQTdDbEIsQ0FzQkwsQ0FMYixLQXhCQSxDQVhhLElBeUNDLElBdEJhLEdBbEJmLEtBeUNFLEtBeENGLE9BeUNBLEdBeENBLEVBaUJrQixLQXdCaEIsR0F4Q2QsQ0E2Q0EsUUFKQSxDQTJCaUMsVUFuRG5CLEdBd0dLLE9BUUQsRUEvR0YsTUF3R2hCLENBZmUsS0F1QmYsRUEvR0EsR0F5Q2lCLGdFQWdESSxVQS9DTCxVQVFBLEVBUGlCLFVBUWxCLFdBQ0gsUUFDeUIsMENBcUNMLG9EQTlDaEMsY0FVRSxpREFxQ1ksWUFDRCxXQUNZLHVCQUNMLGtCQUVwQiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFja2dyb3VuZFZpZGVvIGZyb20gJy4uL3B1YmxpYy92aWRlby9CYWNrZ3JvdW5kVmlkZW8nO1xuaW1wb3J0IGNjb25UcmlhbmdsZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2Njb25UcmlhbmdsZS5wbmcnO1xuaW1wb3J0IFNvbG9CdXR0b24gZnJvbSAnLi9Tb2xvQnV0dG9uJztcbmltcG9ydCBTbWFsbEJ1dHRvbiBmcm9tICcuL1NtYWxsQnV0dG9uJztcbmltcG9ydCBDb3JwQnV0dG9uIGZyb20gJy4vQ29ycEJ1dHRvbic7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyBTdGF0ZSBtYW5hZ2VtZW50IGFuZCBiaW5kaW5nc1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aWV3U29sbzogZmFsc2UsXG4gICAgICB2aWV3U21hbGw6IGZhbHNlLFxuICAgICAgdmlld0NvcnA6IGZhbHNlLFxuICAgICAgY29udGVudFBhZ2U6IDMsXG4gICAgICB2aWV3Q29udGFjdDogZmFsc2UsXG4gICAgICB2aWV3UmV2b2x1dGlvbjogZmFsc2UsXG4gICAgICBzb2xvVHJhbnNpdGlvbjogXCJcIixcbiAgICAgIHNtYWxsVHJhbnNpdGlvbjogXCJcIixcbiAgICAgIGNvcnBUcmFuc2l0aW9uOiBcIlwiLFxuICAgIH07XG5cbiAgICB0aGlzLnNlZVNvbG8gPSB0aGlzLnNlZVNvbG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlQWxsID0gdGhpcy5jbG9zZUFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlU21hbGwgPSB0aGlzLnNlZVNtYWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVDb3JwID0gdGhpcy5zZWVDb3JwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYWdlUmlnaHQgPSB0aGlzLnBhZ2VSaWdodC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFnZUxlZnQgPSB0aGlzLnBhZ2VMZWZ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVDb250YWN0ID0gdGhpcy5zZWVDb250YWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVSZXZvbHV0aW9uID0gdGhpcy5zZWVSZXZvbHV0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyBGdW5jdGlvbiBvYmplY3RzXG4gIFxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdTb2xvOiBmYWxzZSxcbiAgICAgIHZpZXdTbWFsbDogZmFsc2UsXG4gICAgICB2aWV3Q29ycDogZmFsc2UsXG4gICAgICBjb250ZW50UGFnZTogMyxcbiAgICAgIHZpZXdDb250YWN0OiBmYWxzZSxcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlZVNvbG8oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgdmlld1NvbG86IHRydWUsXG4gICAgfSkpO1xuICB9XG5cbiAgc2VlU21hbGwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3U21hbGw6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZWVDb3JwKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld0NvcnA6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZWVDb250YWN0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld0NvbnRhY3Q6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZWVSZXZvbHV0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1Jldm9sdXRpb246IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZXRTb2xvU2xpZGVJbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNvbG9UcmFuc2l0aW9uOiBcInNsaWRlSW5cIlxuICAgIH0pXG4gIH1cblxuICBzZXRTb2xvU2xpZGVPdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzb2xvVHJhbnNpdGlvbjogXCJzbGlkZU91dFwiXG4gICAgfSlcbiAgfVxuXG4gIHNldFNtYWxsU2xpZGVJbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNtYWxsVHJhbnNpdGlvbjogXCJzbGlkZUluXCJcbiAgICB9KVxuICB9XG5cbiAgc2V0U21hbGxTbGlkZU91dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNtYWxsVHJhbnNpdGlvbjogXCJzbGlkZU91dFwiXG4gICAgfSlcbiAgfVxuXG4gIHNldENvcnBTbGlkZUluKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29ycFRyYW5zaXRpb246IFwic2xpZGVJblwiXG4gICAgfSlcbiAgfVxuXG4gIHNldENvcnBTbGlkZU91dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvcnBUcmFuc2l0aW9uOiBcInNsaWRlT3V0XCJcbiAgICB9KVxuICB9XG5cbiAgcGFnZVJpZ2h0KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlIDw9IDIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbnRlbnRQYWdlOiB0aGlzLnN0YXRlLmNvbnRlbnRQYWdlICsgMVxuICAgIH0pfSBlbHNlIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlID0gMykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbnRlbnRQYWdlOiAxXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHBhZ2VMZWZ0KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlID49IDIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbnRlbnRQYWdlOiB0aGlzLnN0YXRlLmNvbnRlbnRQYWdlIC0gMVxuICAgIH0pfSBlbHNlIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlID0gMSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250ZW50UGFnZTogM1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuXG4gIC8vIFJlbmRlcmVkIG9iamVjdHNcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG5cbiAgICAgICAgPEJhY2tncm91bmRWaWRlbyB0eXBlPSd2aWRlby9tcDQnIGF1dG9wbGF5IC8+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpZ25hdHVyZVwiPlxuICAgICAgICA8aW1nIGlkPVwibG9nb1wiIHNyYz17Y2NvblRyaWFuZ2xlfSAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNpZ1RleHRcIj5cbiAgICAgICAgICAgICAgICBNRVRBTFNcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuIFxuICAgICAgICA8ZGl2IGlkPSdiYW5uZXJEaXYnPlxuICAgICAgICAgIDxoMiBpZD1cImJhbm5lclwiPlxuICAgICAgICAgICAgPGEgaWQ9XCJyZXZMaW5rXCIgb25DbGljaz17dGhpcy5zZWVSZXZvbHV0aW9ufSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5Zb3VyIF9fX19fX18gPGkgaWQ9XCJyZXZUYWdcIj5SRVZPTFVUSU9OPC9pPiBpbiB0aGUgY2F0YWx5dGljIGNvbnZlcnRlciBtYXJrZXQ8L2E+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbkNvbnRhaW5lclwiID5cbiAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlU29sb30gIGlkPVwic29sb0J1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxTb2xvQnV0dG9uIHNob3dDb21wb25lbnQ9e3RoaXMuc2VlU29sb30gdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U29sb30gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0gLz48L2E+XG4gICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZVNtYWxsfSAgaWQ9XCJzbWFsbEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxTbWFsbEJ1dHRvbiB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbH0gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwfSAvPjwvYT5cbiAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlQ29ycH0gIGlkPVwiY29ycEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDb3JwQnV0dG9uIHZpc2libGU9e3RoaXMuc3RhdGUudmlld0NvcnB9IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld1NvbG99IC8+PC9hPlxuICAgICAgICAgPGRpdiBpZD1cImZvb3RlckNvbnRhaW5lclwiPlxuICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlQ29udGFjdH0gaWQ9XCJjb250YWN0QnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0gaWQ9XCJmb290ZXJMaW5rXCI+PENvbnRhY3QgYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwIHx8IHRoaXMuc3RhdGUudmlld0NvbnRhY3QgfHwgdGhpcy5zdGF0ZS52aWV3UmV2b2x1dGlvbn0+PC9Db250YWN0PjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbnsvKlxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucGFnZVJpZ2h0fSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q2hldnJvblJpZ2h0IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0vPjwvYT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucGFnZUxlZnR9IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDaGV2cm9uTGVmdCBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnB9Lz48L2E+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmNsb3NlQWxsfSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q2xvc2VCdXR0b24gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwIHx8IHRoaXMuc3RhdGUudmlld0NvbnRhY3QgfHwgdGhpcy5zdGF0ZS52aWV3UmV2b2x1dGlvbn0vPjwvYT5cbiAgICAgICAgICAgIDxTb2xvQ29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTb2xvfSBwYWdlTnVtPXt0aGlzLnN0YXRlLmNvbnRlbnRQYWdlfSBpZD1cInNvbG9Db250ZW50XCIgLz5cbiAgICAgICAgICAgIDxTbWFsbENvbnRlbnQgdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U21hbGx9IHBhZ2VOdW09e3RoaXMuc3RhdGUuY29udGVudFBhZ2V9IGlkPVwic21hbGxDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxDb3JwQ29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdDb3JwfSBwYWdlTnVtPXt0aGlzLnN0YXRlLmNvbnRlbnRQYWdlfSBpZD1cImNvcnBDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxDb250YWN0Q29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdDb250YWN0fSBpZD1cImNvbnRhY3RDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxSZXZvbHV0aW9uIHZpc2libGU9e3RoaXMuc3RhdGUudmlld1Jldm9sdXRpb259IGlkPVwicmV2Q29udGVudFwiIC8+XG4gICAgICAgICA8L2Rpdj4gICAgICovfVxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgLkFwcCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5TaWduYXR1cmUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBsZWZ0OiAtMzBweDtcbiAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2xvZ28ge1xuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmVcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgLnNpZ1RleHQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTU4JTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2MSU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIHdpZHRoOiA3LjVlbTtcbiAgICAgICAgICAgIGhlaWdodDogMC45NWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNyZXZUYWcge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNyZXZMaW5rIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCBibGFjaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjYmFubmVyIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjYmFubmVyRGl2IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAxNTBweClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjA4cHgpe1xuXG4gICAgICAgICAgICBkaXYgI2Jhbm5lckRpdntcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXYgI2J1dHRvbkNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQ1JSk7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTV2dztcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XG4gICAgICAgICAgICBkaXYgI2J1dHRvbkNvbnRhaW5lcntcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXhib3g7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgICAgICB0b3A6IDYyJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMCUsIC02NSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjY29ycEJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCkge1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNzbWFsbEJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNzb2xvQnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDE1dnc7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGRpdiAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNmb290ZXJDb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1MDAlKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCkge1xuICAgICAgICAgICAgI2Zvb3RlckNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDcwJSwgLTI1MCUpO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNzb2xvQnV0dG9ue1xuICAgICAgICAgICAgei1pbmRleDogMjA7XG4gICAgICAgICAgfVxuICAgICBcbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\App.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidmlld1NvbG8iLCJ2aWV3U21hbGwiLCJ2aWV3Q29ycCIsImNvbnRlbnRQYWdlIiwidmlld0NvbnRhY3QiLCJ2aWV3UmV2b2x1dGlvbiIsInNvbG9UcmFuc2l0aW9uIiwic21hbGxUcmFuc2l0aW9uIiwiY29ycFRyYW5zaXRpb24iLCJzZWVTb2xvIiwiYmluZCIsImNsb3NlQWxsIiwic2VlU21hbGwiLCJzZWVDb3JwIiwicGFnZVJpZ2h0IiwicGFnZUxlZnQiLCJzZWVDb250YWN0Iiwic2VlUmV2b2x1dGlvbiIsInNldFN0YXRlIiwiY2NvblRyaWFuZ2xlIiwiY3Vyc29yIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxHOzs7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU4sRUFEaUIsQ0FHakI7O0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFBRSxLQURDO0FBRVhDLGVBQVMsRUFBRSxLQUZBO0FBR1hDLGNBQVEsRUFBRSxLQUhDO0FBSVhDLGlCQUFXLEVBQUUsQ0FKRjtBQUtYQyxpQkFBVyxFQUFFLEtBTEY7QUFNWEMsb0JBQWMsRUFBRSxLQU5MO0FBT1hDLG9CQUFjLEVBQUUsRUFQTDtBQVFYQyxxQkFBZSxFQUFFLEVBUk47QUFTWEMsb0JBQWMsRUFBRTtBQVRMLEtBQWI7QUFZQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhQyxJQUFiLHlHQUFmO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNELElBQWQseUdBQWhCO0FBQ0EsVUFBS0UsUUFBTCxHQUFnQixNQUFL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QUFBZ0QsYUFBSyxFQUFFO0FBQUNJLGdCQUFNLEVBQUM7QUFBUjtBQUF2RCwrR0FBOEUsWUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBMkYsTUFBQyxpREFBRDtBQUFTLGtCQUFVLEVBQUUsS0FBS3JCLEtBQUwsQ0FBV0MsUUFBWCxJQUF1QixLQUFLRCxLQUFMLENBQVdFLFNBQWxDLElBQStDLEtBQUtGLEtBQUwsQ0FBV0csUUFBMUQsSUFBc0UsS0FBS0gsS0FBTCxDQUFXSyxXQUFqRixJQUFnRyxLQUFLTCxLQUFMLENBQVdNLGNBQWhJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBM0YsQ0FERCxDQUpBLENBbkJIO0FBQUE7QUFBQTtBQUFBLGd2Z0JBREY7QUFrTUQ7Ozs7RUF0VWVnQiw0Q0FBSyxDQUFDQyxTOztBQXlVVHpCLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40ZTMyZjliZDQwZGFjNzY2ZmU3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYWNrZ3JvdW5kVmlkZW8gZnJvbSAnLi4vcHVibGljL3ZpZGVvL0JhY2tncm91bmRWaWRlbyc7XG5pbXBvcnQgY2NvblRyaWFuZ2xlIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvY2NvblRyaWFuZ2xlLnBuZyc7XG5pbXBvcnQgU29sb0J1dHRvbiBmcm9tICcuL1NvbG9CdXR0b24nO1xuaW1wb3J0IFNtYWxsQnV0dG9uIGZyb20gJy4vU21hbGxCdXR0b24nO1xuaW1wb3J0IENvcnBCdXR0b24gZnJvbSAnLi9Db3JwQnV0dG9uJztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIC8vIFN0YXRlIG1hbmFnZW1lbnQgYW5kIGJpbmRpbmdzXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpZXdTb2xvOiBmYWxzZSxcbiAgICAgIHZpZXdTbWFsbDogZmFsc2UsXG4gICAgICB2aWV3Q29ycDogZmFsc2UsXG4gICAgICBjb250ZW50UGFnZTogMyxcbiAgICAgIHZpZXdDb250YWN0OiBmYWxzZSxcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiBmYWxzZSxcbiAgICAgIHNvbG9UcmFuc2l0aW9uOiBcIlwiLFxuICAgICAgc21hbGxUcmFuc2l0aW9uOiBcIlwiLFxuICAgICAgY29ycFRyYW5zaXRpb246IFwiXCIsXG4gICAgfTtcblxuICAgIHRoaXMuc2VlU29sbyA9IHRoaXMuc2VlU29sby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VBbGwgPSB0aGlzLmNsb3NlQWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVTbWFsbCA9IHRoaXMuc2VlU21hbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZUNvcnAgPSB0aGlzLnNlZUNvcnAuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhZ2VSaWdodCA9IHRoaXMucGFnZVJpZ2h0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYWdlTGVmdCA9IHRoaXMucGFnZUxlZnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZUNvbnRhY3QgPSB0aGlzLnNlZUNvbnRhY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZVJldm9sdXRpb24gPSB0aGlzLnNlZVJldm9sdXRpb24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIG9iamVjdHNcbiAgXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1NvbG86IGZhbHNlLFxuICAgICAgdmlld1NtYWxsOiBmYWxzZSxcbiAgICAgIHZpZXdDb3JwOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRQYWdlOiAzLFxuICAgICAgdmlld0NvbnRhY3Q6IGZhbHNlLFxuICAgICAgdmlld1Jldm9sdXRpb246IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlU29sbygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICB2aWV3U29sbzogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBzZWVTbWFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdTbWFsbDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlZUNvcnAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3Q29ycDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlZUNvbnRhY3QoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3Q29udGFjdDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlZVJldm9sdXRpb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3UmV2b2x1dGlvbjogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNldFNvbG9TbGlkZUluKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc29sb1RyYW5zaXRpb246IFwic2xpZGVJblwiXG4gICAgfSlcbiAgfVxuXG4gIHNldFNvbG9TbGlkZU91dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNvbG9UcmFuc2l0aW9uOiBcInNsaWRlT3V0XCJcbiAgICB9KVxuICB9XG5cbiAgc2V0U21hbGxTbGlkZUluKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc21hbGxUcmFuc2l0aW9uOiBcInNsaWRlSW5cIlxuICAgIH0pXG4gIH1cblxuICBzZXRTbWFsbFNsaWRlT3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc21hbGxUcmFuc2l0aW9uOiBcInNsaWRlT3V0XCJcbiAgICB9KVxuICB9XG5cbiAgc2V0Q29ycFNsaWRlSW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb3JwVHJhbnNpdGlvbjogXCJzbGlkZUluXCJcbiAgICB9KVxuICB9XG5cbiAgc2V0Q29ycFNsaWRlT3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29ycFRyYW5zaXRpb246IFwic2xpZGVPdXRcIlxuICAgIH0pXG4gIH1cblxuICBwYWdlUmlnaHQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY29udGVudFBhZ2UgPD0gMikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29udGVudFBhZ2U6IHRoaXMuc3RhdGUuY29udGVudFBhZ2UgKyAxXG4gICAgfSl9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY29udGVudFBhZ2UgPSAzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29udGVudFBhZ2U6IDFcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcGFnZUxlZnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY29udGVudFBhZ2UgPj0gMikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29udGVudFBhZ2U6IHRoaXMuc3RhdGUuY29udGVudFBhZ2UgLSAxXG4gICAgfSl9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY29udGVudFBhZ2UgPSAxKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbnRlbnRQYWdlOiAzXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG5cbiAgLy8gUmVuZGVyZWQgb2JqZWN0c1xuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cblxuICAgICAgICA8QmFja2dyb3VuZFZpZGVvIHR5cGU9J3ZpZGVvL21wNCcgYXV0b3BsYXkgLz5cblxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2lnbmF0dXJlXCI+XG4gICAgICAgIDxpbWcgaWQ9XCJsb2dvXCIgc3JjPXtjY29uVHJpYW5nbGV9IC8+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2lnVGV4dFwiPlxuICAgICAgICAgICAgICAgIE1FVEFMU1xuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gXG4gICAgICAgIDxkaXYgaWQ9J2Jhbm5lckRpdic+XG4gICAgICAgICAgPGgyIGlkPVwiYmFubmVyXCI+XG4gICAgICAgICAgICA8YSBpZD1cInJldkxpbmtcIiBvbkNsaWNrPXt0aGlzLnNlZVJldm9sdXRpb259IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PllvdXIgX19fX19fXyA8aSBpZD1cInJldlRhZ1wiPlJFVk9MVVRJT048L2k+IGluIHRoZSBjYXRhbHl0aWMgY29udmVydGVyIG1hcmtldDwvYT5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uQ29udGFpbmVyXCIgPlxuICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVTb2xvfSAgaWQ9XCJzb2xvQnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PFNvbG9CdXR0b24gc2hvd0NvbXBvbmVudD17dGhpcy5zZWVTb2xvfSB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTb2xvfSBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwfSAvPjwvYT5cbiAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlU21hbGx9ICBpZD1cInNtYWxsQnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PFNtYWxsQnV0dG9uIHZpc2libGU9e3RoaXMuc3RhdGUudmlld1NtYWxsfSBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld0NvcnB9IC8+PC9hPlxuICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVDb3JwfSAgaWQ9XCJjb3JwQnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PENvcnBCdXR0b24gdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3Q29ycH0gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3U29sb30gLz48L2E+XG4gICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyQ29udGFpbmVyXCI+XG4gICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVDb250YWN0fSBpZD1cImNvbnRhY3RCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fSBpZD1cImZvb3RlckxpbmtcIj48Q29udGFjdCBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnAgfHwgdGhpcy5zdGF0ZS52aWV3Q29udGFjdCB8fCB0aGlzLnN0YXRlLnZpZXdSZXZvbHV0aW9ufT48L0NvbnRhY3Q+PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2Plxuey8qXG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wYWdlUmlnaHR9IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDaGV2cm9uUmlnaHQgYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwfS8+PC9hPlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wYWdlTGVmdH0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PENoZXZyb25MZWZ0IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0vPjwvYT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuY2xvc2VBbGx9IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDbG9zZUJ1dHRvbiBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnAgfHwgdGhpcy5zdGF0ZS52aWV3Q29udGFjdCB8fCB0aGlzLnN0YXRlLnZpZXdSZXZvbHV0aW9ufS8+PC9hPlxuICAgICAgICAgICAgPFNvbG9Db250ZW50IHZpc2libGU9e3RoaXMuc3RhdGUudmlld1NvbG99IHBhZ2VOdW09e3RoaXMuc3RhdGUuY29udGVudFBhZ2V9IGlkPVwic29sb0NvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPFNtYWxsQ29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbH0gcGFnZU51bT17dGhpcy5zdGF0ZS5jb250ZW50UGFnZX0gaWQ9XCJzbWFsbENvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPENvcnBDb250ZW50IHZpc2libGU9e3RoaXMuc3RhdGUudmlld0NvcnB9IHBhZ2VOdW09e3RoaXMuc3RhdGUuY29udGVudFBhZ2V9IGlkPVwiY29ycENvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPENvbnRhY3RDb250ZW50IHZpc2libGU9e3RoaXMuc3RhdGUudmlld0NvbnRhY3R9IGlkPVwiY29udGFjdENvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPFJldm9sdXRpb24gdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3UmV2b2x1dGlvbn0gaWQ9XCJyZXZDb250ZW50XCIgLz5cbiAgICAgICAgIDwvZGl2PiAgICAgKi99XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAuQXBwIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLlNpZ25hdHVyZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogU3luY29wYXRlO1xuICAgICAgICAgICAgY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGxlZnQ6IC0zMHB4O1xuICAgICAgICAgICAgdG9wOiAtMzBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjbG9nbyB7XG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAuc2lnVGV4dCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogU3luY29wYXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTglO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDYxJTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgd2lkdGg6IDcuNWVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAwLjk1ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI3JldlRhZyB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3Jldkxpbmsge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IGJsYWNrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNiYW5uZXIge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNiYW5uZXJEaXYge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDE1MHB4KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCl7XG5cbiAgICAgICAgICAgIGRpdiAjYmFubmVyRGl2e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpdiAjYnV0dG9uQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDUlKTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNXZ3O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjA4cHgpIHtcbiAgICAgICAgICAgIGRpdiAjYnV0dG9uQ29udGFpbmVye1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleGJveDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgICAgIHRvcDogNjIlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTIwJSwgLTY1JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNjb3JwQnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDE1dnc7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3NtYWxsQnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDE1dnc7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3NvbG9CdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgZGl2ICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2Zvb3RlckNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwMCUpO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XG4gICAgICAgICAgICAjZm9vdGVyQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzAlLCAtMjUwJSk7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3NvbG9CdXR0b257XG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgICB9XG4gICAgIFxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==