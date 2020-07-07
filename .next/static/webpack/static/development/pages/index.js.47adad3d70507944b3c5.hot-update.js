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
        className: "jsx-293379755" + " " + "App",
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
        className: "jsx-293379755" + " " + "Signature",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 9
        }
      }, __jsx("img", {
        id: "logo",
        src: _public_assets_cconTriangle_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-293379755",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 9
        }
      }), __jsx("h1", {
        className: "jsx-293379755" + " " + "sigText",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 13
        }
      }, "METALS")), __jsx("div", {
        id: "bannerDiv",
        className: "jsx-293379755",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 9
        }
      }, __jsx("h2", {
        id: "banner",
        className: "jsx-293379755",
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
        className: "jsx-293379755",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 13
        }
      }, "Your _______ ", __jsx("i", {
        id: "revTag",
        className: "jsx-293379755",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 98
        }
      }, "REVOLUTION"), " in the catalytic converter market"))), __jsx("div", {
        id: "buttonContainer",
        className: "jsx-293379755",
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
        className: "jsx-293379755",
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
        className: "jsx-293379755",
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
        className: "jsx-293379755",
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
        className: "jsx-293379755",
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
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "id", "footerLink"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "jsx-293379755"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
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
        id: "293379755",
        __self: this
      }, ".App.jsx-293379755{text-align:center;}.Signature.jsx-293379755{font-family:Syncopate;color:rgb(192,192,192);position:fixed;left:-30px;top:-30px;z-index:5;opacity:1;}#logo.jsx-293379755{width:250px;max-width:250px;z-index:-1;pointer-events:none;}.sigText.jsx-293379755{font-family:Syncopate;font-size:2em;margin-top:-58%;margin-left:61%;border-top:1px solid red;border-bottom:1px solid red;width:7.5em;height:0.95em;}#revTag.jsx-293379755{color:red;z-index:2;height:100%;}#revLink.jsx-293379755{font-size:1.7em;height:100%;text-shadow:3px 3px black;}#banner.jsx-293379755{border-top:1px solid red;border-bottom:1px solid red;width:80vw;margin:auto;color:white;z-index:1;opacity:0.8;}#bannerDiv.jsx-293379755{-webkit-transform:translate(0%,150px);-ms-transform:translate(0%,150px);transform:translate(0%,150px);}@media (max-width:608px){div.jsx-293379755 #bannerDiv.jsx-293379755{display:none;}}div.jsx-293379755 #buttonContainer.jsx-293379755{position:absolute;width:80%;left:50%;top:50%;-webkit-transform:translate(-50%,-45%);-ms-transform:translate(-50%,-45%);transform:translate(-50%,-45%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vw;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}@media (max-width:608px){div.jsx-293379755 #buttonContainer.jsx-293379755{display:-webkit-inline-box;display:-webkit-inline-flexbox;display:-ms-inline-flexboxbox;display:inline-flexbox;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;width:150px;height:70%;top:62%;-webkit-transform:translate(-120%,-65%);-ms-transform:translate(-120%,-65%);transform:translate(-120%,-65%);}}#corpButton.jsx-293379755{width:15vw;width:150px;min-height:150px;}#smallButton.jsx-293379755{width:15vw;min-width:150px;min-height:150px;}#soloButton.jsx-293379755{width:15vw;min-width:150px;min-height:150px;}div.jsx-293379755 #contentContainer.jsx-293379755{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:60vh;width:80vw;background-color:white;border-radius:8px;}#footerContainer.jsx-293379755{width:33%;position:fixed;-webkit-transform:translate(0%,500%);-ms-transform:translate(0%,500%);transform:translate(0%,500%);margin-top:20%;}@media (max-width:608px){#footerContainer.jsx-293379755{width:100%;position:fixed;-webkit-transform:translate(70%,-250%);-ms-transform:translate(70%,-250%);transform:translate(70%,-250%);margin-top:0%;}}#soloButton.jsx-293379755{z-index:20;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFMc0IsQUFJK0IsQUFJSSxBQVVWLEFBUVUsQUFXWixBQU1NLEFBTVMsQUFXNUIsQUFLa0IsQUFLSyxBQVlLLEFBVWQsQUFNQSxBQU1BLEFBTU8sQUFlTixBQVFDLEFBUUYsVUF2R0QsQUF3Rk8sQ0FqQ0wsQUFNSSxBQU1BLEFBNkJDLEFBUW5CLENBM0hrQixDQStDaEIsR0F0QlksRUF2Q2QsQUFrRWMsQUF3Q0gsRUF4RUcsRUE5QmEsQUFrQlgsQ0FtRUcsRUE1Q1csQUE2RUksQ0FRRSxDQW5DakIsQUFNQSxBQU1ULENBNUZHLEFBeUJlLEFBMkJmLElBaENiLEdBeUVrQyxDQXJGaEIsQ0E2Q04sRUFuRGIsQ0F5RUMsSUFNQSxBQU1BLENBakdpQixBQWdFbUIsT0E3Q2xCLENBc0JMLENBTGIsS0F4QkEsQ0FYYSxJQXlDQyxJQXRCYSxHQWxCZixLQXlDRSxLQXhDRixPQXlDQSxHQXhDQSxFQWlCa0IsS0F3QmhCLEdBeENkLENBNkNBLFFBSkEsQ0EyQmlDLFVBbkRuQixHQWdHSyxPQVFELEVBdkdGLE1BZ0doQixDQWZlLEtBdUJmLEVBdkdBLEdBeUNpQixnRUF3Q0ksVUF2Q0wsVUFRQSxFQVBpQixVQVFsQixXQUNILFFBQ3lCLDBDQTZCTCxvREF0Q2hDLGNBVUUsaURBNkJZLFlBQ0QsV0FDWSx1QkFDTCxrQkFFcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhY2tncm91bmRWaWRlbyBmcm9tICcuLi9wdWJsaWMvdmlkZW8vQmFja2dyb3VuZFZpZGVvJztcbmltcG9ydCBjY29uVHJpYW5nbGUgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9jY29uVHJpYW5nbGUucG5nJztcbmltcG9ydCBTb2xvQnV0dG9uIGZyb20gJy4vU29sb0J1dHRvbic7XG5pbXBvcnQgU21hbGxCdXR0b24gZnJvbSAnLi9TbWFsbEJ1dHRvbic7XG5pbXBvcnQgQ29ycEJ1dHRvbiBmcm9tICcuL0NvcnBCdXR0b24nO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgLy8gU3RhdGUgbWFuYWdlbWVudCBhbmQgYmluZGluZ3NcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlld1NvbG86IGZhbHNlLFxuICAgICAgdmlld1NtYWxsOiBmYWxzZSxcbiAgICAgIHZpZXdDb3JwOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRQYWdlOiAzLFxuICAgICAgdmlld0NvbnRhY3Q6IGZhbHNlLFxuICAgICAgdmlld1Jldm9sdXRpb246IGZhbHNlLFxuICAgICAgc29sb1RyYW5zaXRpb246IFwiXCIsXG4gICAgICBzbWFsbFRyYW5zaXRpb246IFwiXCIsXG4gICAgICBjb3JwVHJhbnNpdGlvbjogXCJcIixcbiAgICB9O1xuXG4gICAgdGhpcy5zZWVTb2xvID0gdGhpcy5zZWVTb2xvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZUFsbCA9IHRoaXMuY2xvc2VBbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZVNtYWxsID0gdGhpcy5zZWVTbWFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlQ29ycCA9IHRoaXMuc2VlQ29ycC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFnZVJpZ2h0ID0gdGhpcy5wYWdlUmlnaHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhZ2VMZWZ0ID0gdGhpcy5wYWdlTGVmdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlQ29udGFjdCA9IHRoaXMuc2VlQ29udGFjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlUmV2b2x1dGlvbiA9IHRoaXMuc2VlUmV2b2x1dGlvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gb2JqZWN0c1xuICBcbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3U29sbzogZmFsc2UsXG4gICAgICB2aWV3U21hbGw6IGZhbHNlLFxuICAgICAgdmlld0NvcnA6IGZhbHNlLFxuICAgICAgY29udGVudFBhZ2U6IDMsXG4gICAgICB2aWV3Q29udGFjdDogZmFsc2UsXG4gICAgICB2aWV3UmV2b2x1dGlvbjogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBzZWVTb2xvKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIHZpZXdTb2xvOiB0cnVlLFxuICAgIH0pKTtcbiAgfVxuXG4gIHNlZVNtYWxsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1NtYWxsOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlQ29ycCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdDb3JwOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlQ29udGFjdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdDb250YWN0OiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlUmV2b2x1dGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U29sb1NsaWRlSW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzb2xvVHJhbnNpdGlvbjogXCJzbGlkZUluXCJcbiAgICB9KVxuICB9XG5cbiAgc2V0U29sb1NsaWRlT3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc29sb1RyYW5zaXRpb246IFwic2xpZGVPdXRcIlxuICAgIH0pXG4gIH1cblxuICBzZXRTbWFsbFNsaWRlSW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzbWFsbFRyYW5zaXRpb246IFwic2xpZGVJblwiXG4gICAgfSlcbiAgfVxuXG4gIHNldFNtYWxsU2xpZGVPdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzbWFsbFRyYW5zaXRpb246IFwic2xpZGVPdXRcIlxuICAgIH0pXG4gIH1cblxuICBzZXRDb3JwU2xpZGVJbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvcnBUcmFuc2l0aW9uOiBcInNsaWRlSW5cIlxuICAgIH0pXG4gIH1cblxuICBzZXRDb3JwU2xpZGVPdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb3JwVHJhbnNpdGlvbjogXCJzbGlkZU91dFwiXG4gICAgfSlcbiAgfVxuXG4gIHBhZ2VSaWdodCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA8PSAyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250ZW50UGFnZTogdGhpcy5zdGF0ZS5jb250ZW50UGFnZSArIDFcbiAgICB9KX0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA9IDMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250ZW50UGFnZTogMVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwYWdlTGVmdCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA+PSAyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250ZW50UGFnZTogdGhpcy5zdGF0ZS5jb250ZW50UGFnZSAtIDFcbiAgICB9KX0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA9IDEpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29udGVudFBhZ2U6IDNcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cblxuICAvLyBSZW5kZXJlZCBvYmplY3RzXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuXG4gICAgICAgIDxCYWNrZ3JvdW5kVmlkZW8gdHlwZT0ndmlkZW8vbXA0JyBhdXRvcGxheSAvPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaWduYXR1cmVcIj5cbiAgICAgICAgPGltZyBpZD1cImxvZ29cIiBzcmM9e2Njb25UcmlhbmdsZX0gLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzaWdUZXh0XCI+XG4gICAgICAgICAgICAgICAgTUVUQUxTXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiBcbiAgICAgICAgPGRpdiBpZD0nYmFubmVyRGl2Jz5cbiAgICAgICAgICA8aDIgaWQ9XCJiYW5uZXJcIj5cbiAgICAgICAgICAgIDxhIGlkPVwicmV2TGlua1wiIG9uQ2xpY2s9e3RoaXMuc2VlUmV2b2x1dGlvbn0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+WW91ciBfX19fX19fIDxpIGlkPVwicmV2VGFnXCI+UkVWT0xVVElPTjwvaT4gaW4gdGhlIGNhdGFseXRpYyBjb252ZXJ0ZXIgbWFya2V0PC9hPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25Db250YWluZXJcIiA+XG4gICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZVNvbG99ICBpZD1cInNvbG9CdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48U29sb0J1dHRvbiBzaG93Q29tcG9uZW50PXt0aGlzLnNlZVNvbG99IHZpc2libGU9e3RoaXMuc3RhdGUudmlld1NvbG99IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnB9IC8+PC9hPlxuICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVTbWFsbH0gIGlkPVwic21hbGxCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48U21hbGxCdXR0b24gdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U21hbGx9IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0gLz48L2E+XG4gICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZUNvcnB9ICBpZD1cImNvcnBCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q29ycEJ1dHRvbiB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdDb3JwfSBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdTb2xvfSAvPjwvYT5cbiAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXJDb250YWluZXJcIj5cbiAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZUNvbnRhY3R9IGlkPVwiY29udGFjdEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319IGlkPVwiZm9vdGVyTGlua1wiPjxDb250YWN0IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycCB8fCB0aGlzLnN0YXRlLnZpZXdDb250YWN0IHx8IHRoaXMuc3RhdGUudmlld1Jldm9sdXRpb259PjwvQ29udGFjdD48L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG57LypcbiAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnBhZ2VSaWdodH0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PENoZXZyb25SaWdodCBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnB9Lz48L2E+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnBhZ2VMZWZ0fSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q2hldnJvbkxlZnQgYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwfS8+PC9hPlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5jbG9zZUFsbH0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PENsb3NlQnV0dG9uIGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycCB8fCB0aGlzLnN0YXRlLnZpZXdDb250YWN0IHx8IHRoaXMuc3RhdGUudmlld1Jldm9sdXRpb259Lz48L2E+XG4gICAgICAgICAgICA8U29sb0NvbnRlbnQgdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U29sb30gcGFnZU51bT17dGhpcy5zdGF0ZS5jb250ZW50UGFnZX0gaWQ9XCJzb2xvQ29udGVudFwiIC8+XG4gICAgICAgICAgICA8U21hbGxDb250ZW50IHZpc2libGU9e3RoaXMuc3RhdGUudmlld1NtYWxsfSBwYWdlTnVtPXt0aGlzLnN0YXRlLmNvbnRlbnRQYWdlfSBpZD1cInNtYWxsQ29udGVudFwiIC8+XG4gICAgICAgICAgICA8Q29ycENvbnRlbnQgdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3Q29ycH0gcGFnZU51bT17dGhpcy5zdGF0ZS5jb250ZW50UGFnZX0gaWQ9XCJjb3JwQ29udGVudFwiIC8+XG4gICAgICAgICAgICA8Q29udGFjdENvbnRlbnQgdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3Q29udGFjdH0gaWQ9XCJjb250YWN0Q29udGVudFwiIC8+XG4gICAgICAgICAgICA8UmV2b2x1dGlvbiB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdSZXZvbHV0aW9ufSBpZD1cInJldkNvbnRlbnRcIiAvPlxuICAgICAgICAgPC9kaXY+ICAgICAqL31cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgIC5BcHAge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuU2lnbmF0dXJlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTeW5jb3BhdGU7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgbGVmdDogLTMwcHg7XG4gICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNsb2dvIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIC5zaWdUZXh0IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTeW5jb3BhdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01OCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNjElO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICB3aWR0aDogNy41ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDAuOTVlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjcmV2VGFnIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjcmV2TGluayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggYmxhY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2Jhbm5lciB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2Jhbm5lckRpdiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMTUwcHgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KXtcblxuICAgICAgICAgICAgZGl2ICNiYW5uZXJEaXZ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2ICNidXR0b25Db250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00NSUpO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE1dnc7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCkge1xuICAgICAgICAgICAgZGl2ICNidXR0b25Db250YWluZXJ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4Ym94O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgICAgICAgdG9wOiA2MiU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjAlLCAtNjUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2NvcnBCdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjc21hbGxCdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3NvbG9CdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgZGl2ICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2Zvb3RlckNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwMCUpO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XG4gICAgICAgICAgICAjZm9vdGVyQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzAlLCAtMjUwJSk7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3NvbG9CdXR0b257XG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgICB9XG4gICAgIFxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\App.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidmlld1NvbG8iLCJ2aWV3U21hbGwiLCJ2aWV3Q29ycCIsImNvbnRlbnRQYWdlIiwidmlld0NvbnRhY3QiLCJ2aWV3UmV2b2x1dGlvbiIsInNvbG9UcmFuc2l0aW9uIiwic21hbGxUcmFuc2l0aW9uIiwiY29ycFRyYW5zaXRpb24iLCJzZWVTb2xvIiwiYmluZCIsImNsb3NlQWxsIiwic2VlU21hbGwiLCJzZWVDb3JwIiwicGFnZVJpZ2h0IiwicGFnZUxlZnQiLCJzZWVDb250YWN0Iiwic2VlUmV2b2x1dGlvbiIsInNldFN0YXRlIiwiY2NvblRyaWFuZ2xlIiwiY3Vyc29yIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxHOzs7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU4sRUFEaUIsQ0FHakI7O0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFBRSxLQURDO0FBRVhDLGVBQVMsRUFBRSxLQUZBO0FBR1hDLGNBQVEsRUFBRSxLQUhDO0FBSVhDLGlCQUFXLEVBQUUsQ0FKRjtBQUtYQyxpQkFBVyxFQUFFLEtBTEY7QUFNWEMsb0JBQWMsRUFBRSxLQU5MO0FBT1hDLG9CQUFjLEVBQUUsRUFQTDtBQVFYQyxxQkFBZSxFQUFFLEVBUk47QUFTWEMsb0JBQWMsRUFBRTtBQVRMLEtBQWI7QUFZQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhQyxJQUFiLHlHQUFmO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNELElBQWQseUdBQWhCO0FBQ0EsVUFBS0UsUUFBTCxHQUFnQixNQUFL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QUFBZ0QsYUFBSyxFQUFFO0FBQUNJLGdCQUFNLEVBQUM7QUFBUjtBQUF2RCwrR0FBOEUsWUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBMkYsTUFBQyxpREFBRDtBQUFTLGtCQUFVLEVBQUUsS0FBS3JCLEtBQUwsQ0FBV0MsUUFBWCxJQUF1QixLQUFLRCxLQUFMLENBQVdFLFNBQWxDLElBQStDLEtBQUtGLEtBQUwsQ0FBV0csUUFBMUQsSUFBc0UsS0FBS0gsS0FBTCxDQUFXSyxXQUFqRixJQUFnRyxLQUFLTCxLQUFMLENBQVdNLGNBQWhJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBM0YsQ0FERCxDQUpBLENBbkJIO0FBQUE7QUFBQTtBQUFBLHMvZkFERjtBQTBMRDs7OztFQTlUZWdCLDRDQUFLLENBQUNDLFM7O0FBaVVUekIsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjQ3YWRhZDNkNzA1MDc5NDRiM2M1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhY2tncm91bmRWaWRlbyBmcm9tICcuLi9wdWJsaWMvdmlkZW8vQmFja2dyb3VuZFZpZGVvJztcbmltcG9ydCBjY29uVHJpYW5nbGUgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9jY29uVHJpYW5nbGUucG5nJztcbmltcG9ydCBTb2xvQnV0dG9uIGZyb20gJy4vU29sb0J1dHRvbic7XG5pbXBvcnQgU21hbGxCdXR0b24gZnJvbSAnLi9TbWFsbEJ1dHRvbic7XG5pbXBvcnQgQ29ycEJ1dHRvbiBmcm9tICcuL0NvcnBCdXR0b24nO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgLy8gU3RhdGUgbWFuYWdlbWVudCBhbmQgYmluZGluZ3NcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlld1NvbG86IGZhbHNlLFxuICAgICAgdmlld1NtYWxsOiBmYWxzZSxcbiAgICAgIHZpZXdDb3JwOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRQYWdlOiAzLFxuICAgICAgdmlld0NvbnRhY3Q6IGZhbHNlLFxuICAgICAgdmlld1Jldm9sdXRpb246IGZhbHNlLFxuICAgICAgc29sb1RyYW5zaXRpb246IFwiXCIsXG4gICAgICBzbWFsbFRyYW5zaXRpb246IFwiXCIsXG4gICAgICBjb3JwVHJhbnNpdGlvbjogXCJcIixcbiAgICB9O1xuXG4gICAgdGhpcy5zZWVTb2xvID0gdGhpcy5zZWVTb2xvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZUFsbCA9IHRoaXMuY2xvc2VBbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZVNtYWxsID0gdGhpcy5zZWVTbWFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlQ29ycCA9IHRoaXMuc2VlQ29ycC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFnZVJpZ2h0ID0gdGhpcy5wYWdlUmlnaHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhZ2VMZWZ0ID0gdGhpcy5wYWdlTGVmdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlQ29udGFjdCA9IHRoaXMuc2VlQ29udGFjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlUmV2b2x1dGlvbiA9IHRoaXMuc2VlUmV2b2x1dGlvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gb2JqZWN0c1xuICBcbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3U29sbzogZmFsc2UsXG4gICAgICB2aWV3U21hbGw6IGZhbHNlLFxuICAgICAgdmlld0NvcnA6IGZhbHNlLFxuICAgICAgY29udGVudFBhZ2U6IDMsXG4gICAgICB2aWV3Q29udGFjdDogZmFsc2UsXG4gICAgICB2aWV3UmV2b2x1dGlvbjogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBzZWVTb2xvKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIHZpZXdTb2xvOiB0cnVlLFxuICAgIH0pKTtcbiAgfVxuXG4gIHNlZVNtYWxsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1NtYWxsOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlQ29ycCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdDb3JwOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlQ29udGFjdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdDb250YWN0OiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlUmV2b2x1dGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U29sb1NsaWRlSW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzb2xvVHJhbnNpdGlvbjogXCJzbGlkZUluXCJcbiAgICB9KVxuICB9XG5cbiAgc2V0U29sb1NsaWRlT3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc29sb1RyYW5zaXRpb246IFwic2xpZGVPdXRcIlxuICAgIH0pXG4gIH1cblxuICBzZXRTbWFsbFNsaWRlSW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzbWFsbFRyYW5zaXRpb246IFwic2xpZGVJblwiXG4gICAgfSlcbiAgfVxuXG4gIHNldFNtYWxsU2xpZGVPdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzbWFsbFRyYW5zaXRpb246IFwic2xpZGVPdXRcIlxuICAgIH0pXG4gIH1cblxuICBzZXRDb3JwU2xpZGVJbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvcnBUcmFuc2l0aW9uOiBcInNsaWRlSW5cIlxuICAgIH0pXG4gIH1cblxuICBzZXRDb3JwU2xpZGVPdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb3JwVHJhbnNpdGlvbjogXCJzbGlkZU91dFwiXG4gICAgfSlcbiAgfVxuXG4gIHBhZ2VSaWdodCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA8PSAyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250ZW50UGFnZTogdGhpcy5zdGF0ZS5jb250ZW50UGFnZSArIDFcbiAgICB9KX0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA9IDMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250ZW50UGFnZTogMVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwYWdlTGVmdCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA+PSAyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250ZW50UGFnZTogdGhpcy5zdGF0ZS5jb250ZW50UGFnZSAtIDFcbiAgICB9KX0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA9IDEpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29udGVudFBhZ2U6IDNcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cblxuICAvLyBSZW5kZXJlZCBvYmplY3RzXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuXG4gICAgICAgIDxCYWNrZ3JvdW5kVmlkZW8gdHlwZT0ndmlkZW8vbXA0JyBhdXRvcGxheSAvPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaWduYXR1cmVcIj5cbiAgICAgICAgPGltZyBpZD1cImxvZ29cIiBzcmM9e2Njb25UcmlhbmdsZX0gLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzaWdUZXh0XCI+XG4gICAgICAgICAgICAgICAgTUVUQUxTXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiBcbiAgICAgICAgPGRpdiBpZD0nYmFubmVyRGl2Jz5cbiAgICAgICAgICA8aDIgaWQ9XCJiYW5uZXJcIj5cbiAgICAgICAgICAgIDxhIGlkPVwicmV2TGlua1wiIG9uQ2xpY2s9e3RoaXMuc2VlUmV2b2x1dGlvbn0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+WW91ciBfX19fX19fIDxpIGlkPVwicmV2VGFnXCI+UkVWT0xVVElPTjwvaT4gaW4gdGhlIGNhdGFseXRpYyBjb252ZXJ0ZXIgbWFya2V0PC9hPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25Db250YWluZXJcIiA+XG4gICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZVNvbG99ICBpZD1cInNvbG9CdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48U29sb0J1dHRvbiBzaG93Q29tcG9uZW50PXt0aGlzLnNlZVNvbG99IHZpc2libGU9e3RoaXMuc3RhdGUudmlld1NvbG99IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnB9IC8+PC9hPlxuICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVTbWFsbH0gIGlkPVwic21hbGxCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48U21hbGxCdXR0b24gdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U21hbGx9IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0gLz48L2E+XG4gICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZUNvcnB9ICBpZD1cImNvcnBCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q29ycEJ1dHRvbiB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdDb3JwfSBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdTb2xvfSAvPjwvYT5cbiAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXJDb250YWluZXJcIj5cbiAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZUNvbnRhY3R9IGlkPVwiY29udGFjdEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319IGlkPVwiZm9vdGVyTGlua1wiPjxDb250YWN0IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycCB8fCB0aGlzLnN0YXRlLnZpZXdDb250YWN0IHx8IHRoaXMuc3RhdGUudmlld1Jldm9sdXRpb259PjwvQ29udGFjdD48L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG57LypcbiAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnBhZ2VSaWdodH0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PENoZXZyb25SaWdodCBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnB9Lz48L2E+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnBhZ2VMZWZ0fSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q2hldnJvbkxlZnQgYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwfS8+PC9hPlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5jbG9zZUFsbH0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PENsb3NlQnV0dG9uIGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycCB8fCB0aGlzLnN0YXRlLnZpZXdDb250YWN0IHx8IHRoaXMuc3RhdGUudmlld1Jldm9sdXRpb259Lz48L2E+XG4gICAgICAgICAgICA8U29sb0NvbnRlbnQgdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U29sb30gcGFnZU51bT17dGhpcy5zdGF0ZS5jb250ZW50UGFnZX0gaWQ9XCJzb2xvQ29udGVudFwiIC8+XG4gICAgICAgICAgICA8U21hbGxDb250ZW50IHZpc2libGU9e3RoaXMuc3RhdGUudmlld1NtYWxsfSBwYWdlTnVtPXt0aGlzLnN0YXRlLmNvbnRlbnRQYWdlfSBpZD1cInNtYWxsQ29udGVudFwiIC8+XG4gICAgICAgICAgICA8Q29ycENvbnRlbnQgdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3Q29ycH0gcGFnZU51bT17dGhpcy5zdGF0ZS5jb250ZW50UGFnZX0gaWQ9XCJjb3JwQ29udGVudFwiIC8+XG4gICAgICAgICAgICA8Q29udGFjdENvbnRlbnQgdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3Q29udGFjdH0gaWQ9XCJjb250YWN0Q29udGVudFwiIC8+XG4gICAgICAgICAgICA8UmV2b2x1dGlvbiB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdSZXZvbHV0aW9ufSBpZD1cInJldkNvbnRlbnRcIiAvPlxuICAgICAgICAgPC9kaXY+ICAgICAqL31cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgIC5BcHAge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuU2lnbmF0dXJlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTeW5jb3BhdGU7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgbGVmdDogLTMwcHg7XG4gICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNsb2dvIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIC5zaWdUZXh0IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTeW5jb3BhdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01OCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNjElO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICB3aWR0aDogNy41ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDAuOTVlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjcmV2VGFnIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjcmV2TGluayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggYmxhY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2Jhbm5lciB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2Jhbm5lckRpdiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMTUwcHgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KXtcblxuICAgICAgICAgICAgZGl2ICNiYW5uZXJEaXZ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2ICNidXR0b25Db250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00NSUpO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE1dnc7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCkge1xuICAgICAgICAgICAgZGl2ICNidXR0b25Db250YWluZXJ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4Ym94O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgICAgICAgdG9wOiA2MiU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjAlLCAtNjUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2NvcnBCdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjc21hbGxCdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3NvbG9CdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgZGl2ICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2Zvb3RlckNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwMCUpO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XG4gICAgICAgICAgICAjZm9vdGVyQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzAlLCAtMjUwJSk7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3NvbG9CdXR0b257XG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgICB9XG4gICAgIFxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==