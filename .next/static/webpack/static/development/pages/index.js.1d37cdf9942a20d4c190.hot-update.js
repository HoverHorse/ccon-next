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
/* harmony import */ var _ChevronRight__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ChevronRight */ "./components/ChevronRight.js");
/* harmony import */ var _ChevronLeft__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ChevronLeft */ "./components/ChevronLeft.js");







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
        className: "jsx-1810751851" + " " + "App",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 7
        }
      }, __jsx(_public_video_BackgroundVideo__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "video/mp4",
        autoplay: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "jsx-1810751851" + " " + "Signature",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 9
        }
      }, __jsx("img", {
        id: "logo",
        src: _public_assets_cconTriangle_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 9
        }
      }), __jsx("h1", {
        className: "jsx-1810751851" + " " + "sigText",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 13
        }
      }, "METALS")), __jsx("div", {
        id: "bannerDiv",
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 9
        }
      }, __jsx("h2", {
        id: "banner",
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }
      }, __jsx("a", {
        id: "revLink",
        onClick: this.seeRevolution,
        style: {
          cursor: 'pointer'
        },
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }
      }, "Your _______ ", __jsx("i", {
        id: "revTag",
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 98
        }
      }, "REVOLUTION"), " in the catalytic converter market"))), __jsx("div", {
        id: "buttonContainer",
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 10
        }
      }, __jsx("a", {
        onClick: this.seeSolo,
        id: "soloButton",
        style: {
          cursor: 'pointer'
        },
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 13
        }
      }, __jsx(_SoloButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
        showComponent: this.seeSolo,
        visible: this.state.viewSolo,
        buttonHide: this.state.viewSmall || this.state.viewCorp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 83
        }
      })), __jsx("a", {
        onClick: this.seeSmall,
        id: "smallButton",
        style: {
          cursor: 'pointer'
        },
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }
      }, __jsx(_SmallButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
        visible: this.state.viewSmall,
        buttonHide: this.state.viewSolo || this.state.viewCorp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 85
        }
      })), __jsx("a", {
        onClick: this.seeCorp,
        id: "corpButton",
        style: {
          cursor: 'pointer'
        },
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 13
        }
      }, __jsx(_CorpButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
        visible: this.state.viewCorp,
        buttonHide: this.state.viewSmall || this.state.viewSolo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 83
        }
      })), __jsx("div", {
        id: "footerContainer",
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 15
        }
      }, __jsx("a", (_jsx = {
        onClick: this.seeContact,
        id: "contactButton",
        style: {
          cursor: 'pointer'
        }
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "id", "footerLink"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "jsx-1810751851"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }), _jsx), __jsx(_Contact__WEBPACK_IMPORTED_MODULE_14__["default"], {
        buttonHide: this.state.viewSolo || this.state.viewSmall || this.state.viewCorp || this.state.viewContact || this.state.viewRevolution,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 108
        }
      })))), __jsx("div", {
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 10
        }
      }, __jsx("a", {
        onClick: this.pageRight,
        style: {
          cursor: 'pointer'
        },
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 13
        }
      }, __jsx(_ChevronRight__WEBPACK_IMPORTED_MODULE_15__["default"], {
        buttonHide: this.state.viewSolo || this.state.viewSmall || this.state.viewCorp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 68
        }
      })), __jsx("a", {
        onClick: this.pageLeft,
        style: {
          cursor: 'pointer'
        },
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }
      }, __jsx(_ChevronLeft__WEBPACK_IMPORTED_MODULE_16__["default"], {
        buttonHide: this.state.viewSolo || this.state.viewSmall || this.state.viewCorp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 67
        }
      })), __jsx("a", {
        onClick: this.closeAll,
        style: {
          cursor: 'pointer'
        },
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }
      }, __jsx(CloseButton, {
        buttonHide: this.state.viewSolo || this.state.viewSmall || this.state.viewCorp || this.state.viewContact || this.state.viewRevolution,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 67
        }
      })), __jsx(SoloContent, {
        visible: this.state.viewSolo,
        pageNum: this.state.contentPage,
        id: "soloContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 13
        }
      }), __jsx(SmallContent, {
        visible: this.state.viewSmall,
        pageNum: this.state.contentPage,
        id: "smallContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 13
        }
      }), __jsx(CorpContent, {
        visible: this.state.viewCorp,
        pageNum: this.state.contentPage,
        id: "corpContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 13
        }
      }), __jsx(ContactContent, {
        visible: this.state.viewContact,
        id: "contactContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 13
        }
      }), __jsx(Revolution, {
        visible: this.state.viewRevolution,
        id: "revContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 13
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1810751851",
        __self: this
      }, ".App.jsx-1810751851{text-align:center;}.Signature.jsx-1810751851{font-family:Syncopate;color:rgb(192,192,192);position:fixed;left:-30px;top:-30px;z-index:5;opacity:1;pointer-events:none;}#logo.jsx-1810751851{width:250px;max-width:250px;z-index:-1;pointer-events:none;}.sigText.jsx-1810751851{font-family:Syncopate;font-size:2em;margin-top:-58%;margin-left:61%;border-top:1px solid red;border-bottom:1px solid red;width:7.5em;height:0.95em;}#revTag.jsx-1810751851{color:red;z-index:2;height:100%;}#revLink.jsx-1810751851{font-size:1.7em;height:100%;text-shadow:3px 3px black;}#banner.jsx-1810751851{border-top:1px solid red;border-bottom:1px solid red;width:80vw;margin:auto;color:white;z-index:1;opacity:0.8;}#bannerDiv.jsx-1810751851{-webkit-transform:translate(0%,150px);-ms-transform:translate(0%,150px);transform:translate(0%,150px);}@media (max-width:608px){div.jsx-1810751851 #bannerDiv.jsx-1810751851{display:none;}}div.jsx-1810751851 #buttonContainer.jsx-1810751851{position:absolute;width:80%;left:50%;top:50%;-webkit-transform:translate(-50%,-85%);-ms-transform:translate(-50%,-85%);transform:translate(-50%,-85%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vw;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}@media (max-width:608px){div.jsx-1810751851 #buttonContainer.jsx-1810751851{display:-webkit-inline-box;display:-webkit-inline-flexbox;display:-ms-inline-flexboxbox;display:inline-flexbox;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;width:150px;height:60%;top:60%;-webkit-transform:translate(-120%,-65%);-ms-transform:translate(-120%,-65%);transform:translate(-120%,-65%);}}#corpButton.jsx-1810751851{width:15vw;min-width:150px;min-height:150px;margin:3vw;}#smallButton.jsx-1810751851{width:15vw;min-width:150px;min-height:150px;margin:4vw;}#soloButton.jsx-1810751851{width:15vw;min-width:150px;min-height:150px;margin:4vw;}div.jsx-1810751851 #contentContainer.jsx-1810751851{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:60vh;width:80vw;background-color:white;border-radius:8px;}#footerContainer.jsx-1810751851{width:33%;position:fixed;-webkit-transform:translate(0%,500%);-ms-transform:translate(0%,500%);transform:translate(0%,500%);margin-top:20%;}@media (max-width:608px){#footerContainer.jsx-1810751851{width:100%;position:fixed;-webkit-transform:translate(70%,50%);-ms-transform:translate(70%,50%);transform:translate(70%,50%);margin-top:0%;}}#soloButton.jsx-1810751851{z-index:20;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNMc0IsQUFJK0IsQUFJSSxBQVdWLEFBUVUsQUFXWixBQU1NLEFBTVMsQUFXNUIsQUFLa0IsQUFLSyxBQVlLLEFBVWQsQUFPQSxBQU9BLEFBT08sQUFlTixBQVFDLEFBUUYsVUExR0QsQUEyRk8sQ0FwQ0QsQUFPQSxBQU9BLEFBOEJDLEFBUW5CLENBOUhrQixDQStDaEIsR0F0QlksRUF4Q2QsQUFtRWMsQUEyQ0gsRUEzRUcsRUEvQmEsQUFtQlgsR0F1QmMsQUFnRkksQ0FRQSxDQTVDZixBQU9BLEFBT0EsQUFPVCxDQS9GRyxBQXlCZSxBQTJCZixJQWhDYixHQTRFa0MsQ0F4RmhCLENBNkNOLEVBcERVLEtBMEVULEFBT0EsQUFPQSxDQXBHSSxBQWlFbUIsT0E3Q2xCLENBc0JMLENBTGIsQ0FrREEsQUFPQSxBQU9BLElBeEZBLENBWmEsSUEwQ0MsSUF0QmEsR0FuQmYsS0EwQ0UsS0F6Q0YsT0EwQ0EsR0F6Q0EsRUFrQmtCLEtBd0JoQixHQXpDUSxDQThDdEIsUUFKQSxDQTJCaUMsVUFwRWpDLEFBaUJjLEdBbUdLLENBUUQsUUExR0YsTUFtR2hCLEFBUUEsQ0F2QmUsT0FuRmYsR0F5Q2lCLGdFQTJDSSxVQTFDTCxVQVFBLEVBUGlCLFVBUWxCLFdBQ0gsUUFDeUIsMENBZ0NMLG9EQXpDaEMsY0FVRSxpREFnQ1ksWUFDRCxXQUNZLHVCQUNMLGtCQUVwQiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFja2dyb3VuZFZpZGVvIGZyb20gJy4uL3B1YmxpYy92aWRlby9CYWNrZ3JvdW5kVmlkZW8nO1xuaW1wb3J0IGNjb25UcmlhbmdsZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2Njb25UcmlhbmdsZS5wbmcnO1xuaW1wb3J0IFNvbG9CdXR0b24gZnJvbSAnLi9Tb2xvQnV0dG9uJztcbmltcG9ydCBTbWFsbEJ1dHRvbiBmcm9tICcuL1NtYWxsQnV0dG9uJztcbmltcG9ydCBDb3JwQnV0dG9uIGZyb20gJy4vQ29ycEJ1dHRvbic7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xuaW1wb3J0IENoZXZyb25SaWdodCBmcm9tICcuL0NoZXZyb25SaWdodCc7XG5pbXBvcnQgQ2hldnJvbkxlZnQgZnJvbSAnLi9DaGV2cm9uTGVmdCc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgLy8gU3RhdGUgbWFuYWdlbWVudCBhbmQgYmluZGluZ3NcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlld1NvbG86IGZhbHNlLFxuICAgICAgdmlld1NtYWxsOiBmYWxzZSxcbiAgICAgIHZpZXdDb3JwOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRQYWdlOiAzLFxuICAgICAgdmlld0NvbnRhY3Q6IGZhbHNlLFxuICAgICAgdmlld1Jldm9sdXRpb246IGZhbHNlLFxuICAgICAgc29sb1RyYW5zaXRpb246IFwiXCIsXG4gICAgICBzbWFsbFRyYW5zaXRpb246IFwiXCIsXG4gICAgICBjb3JwVHJhbnNpdGlvbjogXCJcIixcbiAgICB9O1xuXG4gICAgdGhpcy5zZWVTb2xvID0gdGhpcy5zZWVTb2xvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZUFsbCA9IHRoaXMuY2xvc2VBbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZVNtYWxsID0gdGhpcy5zZWVTbWFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlQ29ycCA9IHRoaXMuc2VlQ29ycC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFnZVJpZ2h0ID0gdGhpcy5wYWdlUmlnaHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhZ2VMZWZ0ID0gdGhpcy5wYWdlTGVmdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlQ29udGFjdCA9IHRoaXMuc2VlQ29udGFjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlUmV2b2x1dGlvbiA9IHRoaXMuc2VlUmV2b2x1dGlvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gb2JqZWN0c1xuICBcbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3U29sbzogZmFsc2UsXG4gICAgICB2aWV3U21hbGw6IGZhbHNlLFxuICAgICAgdmlld0NvcnA6IGZhbHNlLFxuICAgICAgY29udGVudFBhZ2U6IDMsXG4gICAgICB2aWV3Q29udGFjdDogZmFsc2UsXG4gICAgICB2aWV3UmV2b2x1dGlvbjogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBzZWVTb2xvKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIHZpZXdTb2xvOiB0cnVlLFxuICAgIH0pKTtcbiAgfVxuXG4gIHNlZVNtYWxsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1NtYWxsOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlQ29ycCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdDb3JwOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlQ29udGFjdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdDb250YWN0OiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlUmV2b2x1dGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U29sb1NsaWRlSW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzb2xvVHJhbnNpdGlvbjogXCJzbGlkZUluXCJcbiAgICB9KVxuICB9XG5cbiAgc2V0U29sb1NsaWRlT3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc29sb1RyYW5zaXRpb246IFwic2xpZGVPdXRcIlxuICAgIH0pXG4gIH1cblxuICBzZXRTbWFsbFNsaWRlSW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzbWFsbFRyYW5zaXRpb246IFwic2xpZGVJblwiXG4gICAgfSlcbiAgfVxuXG4gIHNldFNtYWxsU2xpZGVPdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzbWFsbFRyYW5zaXRpb246IFwic2xpZGVPdXRcIlxuICAgIH0pXG4gIH1cblxuICBzZXRDb3JwU2xpZGVJbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvcnBUcmFuc2l0aW9uOiBcInNsaWRlSW5cIlxuICAgIH0pXG4gIH1cblxuICBzZXRDb3JwU2xpZGVPdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb3JwVHJhbnNpdGlvbjogXCJzbGlkZU91dFwiXG4gICAgfSlcbiAgfVxuXG4gIHBhZ2VSaWdodCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA8PSAyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250ZW50UGFnZTogdGhpcy5zdGF0ZS5jb250ZW50UGFnZSArIDFcbiAgICB9KX0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA9IDMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250ZW50UGFnZTogMVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwYWdlTGVmdCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA+PSAyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250ZW50UGFnZTogdGhpcy5zdGF0ZS5jb250ZW50UGFnZSAtIDFcbiAgICB9KX0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA9IDEpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29udGVudFBhZ2U6IDNcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cblxuICAvLyBSZW5kZXJlZCBvYmplY3RzXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuXG4gICAgICAgIDxCYWNrZ3JvdW5kVmlkZW8gdHlwZT0ndmlkZW8vbXA0JyBhdXRvcGxheSAvPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaWduYXR1cmVcIj5cbiAgICAgICAgPGltZyBpZD1cImxvZ29cIiBzcmM9e2Njb25UcmlhbmdsZX0gLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzaWdUZXh0XCI+XG4gICAgICAgICAgICAgICAgTUVUQUxTXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiBcbiAgICAgICAgPGRpdiBpZD0nYmFubmVyRGl2Jz5cbiAgICAgICAgICA8aDIgaWQ9XCJiYW5uZXJcIj5cbiAgICAgICAgICAgIDxhIGlkPVwicmV2TGlua1wiIG9uQ2xpY2s9e3RoaXMuc2VlUmV2b2x1dGlvbn0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+WW91ciBfX19fX19fIDxpIGlkPVwicmV2VGFnXCI+UkVWT0xVVElPTjwvaT4gaW4gdGhlIGNhdGFseXRpYyBjb252ZXJ0ZXIgbWFya2V0PC9hPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25Db250YWluZXJcIiA+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZVNvbG99ICBpZD1cInNvbG9CdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48U29sb0J1dHRvbiBzaG93Q29tcG9uZW50PXt0aGlzLnNlZVNvbG99IHZpc2libGU9e3RoaXMuc3RhdGUudmlld1NvbG99IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnB9IC8+PC9hPlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVTbWFsbH0gIGlkPVwic21hbGxCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48U21hbGxCdXR0b24gdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U21hbGx9IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0gLz48L2E+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZUNvcnB9ICBpZD1cImNvcnBCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q29ycEJ1dHRvbiB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdDb3JwfSBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdTb2xvfSAvPjwvYT5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImZvb3RlckNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlQ29udGFjdH0gaWQ9XCJjb250YWN0QnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0gaWQ9XCJmb290ZXJMaW5rXCI+PENvbnRhY3QgYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwIHx8IHRoaXMuc3RhdGUudmlld0NvbnRhY3QgfHwgdGhpcy5zdGF0ZS52aWV3UmV2b2x1dGlvbn0+PC9Db250YWN0PjwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucGFnZVJpZ2h0fSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q2hldnJvblJpZ2h0IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0vPjwvYT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucGFnZUxlZnR9IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDaGV2cm9uTGVmdCBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnB9Lz48L2E+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmNsb3NlQWxsfSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q2xvc2VCdXR0b24gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwIHx8IHRoaXMuc3RhdGUudmlld0NvbnRhY3QgfHwgdGhpcy5zdGF0ZS52aWV3UmV2b2x1dGlvbn0vPjwvYT5cbiAgICAgICAgICAgIDxTb2xvQ29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTb2xvfSBwYWdlTnVtPXt0aGlzLnN0YXRlLmNvbnRlbnRQYWdlfSBpZD1cInNvbG9Db250ZW50XCIgLz5cbiAgICAgICAgICAgIDxTbWFsbENvbnRlbnQgdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U21hbGx9IHBhZ2VOdW09e3RoaXMuc3RhdGUuY29udGVudFBhZ2V9IGlkPVwic21hbGxDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxDb3JwQ29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdDb3JwfSBwYWdlTnVtPXt0aGlzLnN0YXRlLmNvbnRlbnRQYWdlfSBpZD1cImNvcnBDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxDb250YWN0Q29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdDb250YWN0fSBpZD1cImNvbnRhY3RDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxSZXZvbHV0aW9uIHZpc2libGU9e3RoaXMuc3RhdGUudmlld1Jldm9sdXRpb259IGlkPVwicmV2Q29udGVudFwiIC8+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgIC5BcHAge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuU2lnbmF0dXJlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTeW5jb3BhdGU7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgbGVmdDogLTMwcHg7XG4gICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2xvZ28ge1xuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIC5zaWdUZXh0IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTeW5jb3BhdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01OCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNjElO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICB3aWR0aDogNy41ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDAuOTVlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjcmV2VGFnIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjcmV2TGluayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggYmxhY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2Jhbm5lciB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2Jhbm5lckRpdiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMTUwcHgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KXtcblxuICAgICAgICAgICAgZGl2ICNiYW5uZXJEaXZ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2ICNidXR0b25Db250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC04NSUpO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE1dnc7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCkge1xuICAgICAgICAgICAgZGl2ICNidXR0b25Db250YWluZXJ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4Ym94O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgICAgICAgICAgdG9wOiA2MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjAlLCAtNjUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2NvcnBCdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogM3Z3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNzbWFsbEJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA0dnc7XG4gICAgICAgICAgfVxuICAgXG4gICAgICAgICAgI3NvbG9CdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogNHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBkaXYgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjZm9vdGVyQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNTAwJSk7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjA4cHgpIHtcbiAgICAgICAgICAgICNmb290ZXJDb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3MCUsIDUwJSk7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3NvbG9CdXR0b257XG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgICB9XG4gICAgIFxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\App.js */"));
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

/***/ }),

/***/ "./components/ChevronLeft.js":
/*!***********************************!*\
  !*** ./components/ChevronLeft.js ***!
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





var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\ChevronLeft.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var ChevronLeft = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ChevronLeft, _React$Component);

  var _super = _createSuper(ChevronLeft);

  function ChevronLeft(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChevronLeft);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChevronLeft, [{
    key: "render",
    value: function render() {
      if (this.props.buttonHide === true) {
        return __jsx("div", {
          className: "jsx-1384696511" + " " + "ChevronL",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 9
          }
        }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
          id: "1384696511",
          __self: this
        }, ".ChevronL.jsx-1384696511{position:absolute;display:block;height:50px;width:50px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:59%;left:10%;z-index:10;}.ChevronL.jsx-1384696511::before,.ChevronL.jsx-1384696511::after{position:absolute;display:block;content:\"\";border:25px solid transparent;}.ChevronL.jsx-1384696511::before{top:0;border-top-color:#b00;}.ChevronL.jsx-1384696511::after{top:-10px;border-top-color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ2hldnJvbkxlZnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWEsQUFJa0MsQUFZQSxBQU9aLEFBS0ksTUFKWSxJQUtBLFFBeEJSLEFBWUEsVUFTakIsSUFwQmUsQUFZRCxBQWFkLFdBWmlDLENBWmxCLFdBQ2Esa0JBWTVCLGtFQVhZLFFBQ0MsU0FDRSxXQUVmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ2hldnJvbkxlZnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQ2hldnJvbkxlZnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5idXR0b25IaWRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoZXZyb25MXCI+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuQ2hldnJvbkwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjUwcHg7IC8qaGVpZ2h0IHNob3VsZCBiZSBkb3VibGUgYm9yZGVyKi9cclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1OSU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5DaGV2cm9uTDo6YmVmb3JlLFxyXG4gICAgICAgICAgICAuQ2hldnJvbkw6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjoyNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAvKmFkanVzdCBzaXplKi9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKkNoYW5nZSB0aGUgZm91ciBpbnN0YW5jZXMgb2YgJ3RvcCcgYmVsb3cgdG8gcm90YXRlICh0b3AvcmlnaHQvYm90dG9tL2xlZnQpKi9cclxuICAgICAgICAgICAgLkNoZXZyb25MOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNiMDA7IC8qQ2hldnJvbiBDb2xvciovXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuQ2hldnJvbkw6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHRvcDotMTBweDsgLyphZGp1c3QgdGhpY2tuZXNzKi9cclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2ZmZjsgLypNYXRjaCBiYWNrZ3JvdW5kIGNvbG91ciovXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT4gICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZXZyb25MZWZ0OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\ChevronLeft.js */"));
      } else {
        return null;
      }
    }
  }]);

  return ChevronLeft;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ChevronLeft);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoZXZyb25MZWZ0LmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJ2aWV3U29sbyIsInZpZXdTbWFsbCIsInZpZXdDb3JwIiwiY29udGVudFBhZ2UiLCJ2aWV3Q29udGFjdCIsInZpZXdSZXZvbHV0aW9uIiwic29sb1RyYW5zaXRpb24iLCJzbWFsbFRyYW5zaXRpb24iLCJjb3JwVHJhbnNpdGlvbiIsInNlZVNvbG8iLCJiaW5kIiwiY2xvc2VBbGwiLCJzZWVTbWFsbCIsInNlZUNvcnAiLCJwYWdlUmlnaHQiLCJwYWdlTGVmdCIsInNlZUNvbnRhY3QiLCJzZWVSZXZvbHV0aW9uIiwic2V0U3RhdGUiLCJjY29uVHJpYW5nbGUiLCJjdXJzb3IiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNoZXZyb25MZWZ0IiwiYnV0dG9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsRzs7Ozs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOLEVBRGlCLENBR2pCOztBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBQUUsS0FEQztBQUVYQyxlQUFTLEVBQUUsS0FGQTtBQUdYQyxjQUFRLEVBQUUsS0FIQztBQUlYQyxpQkFBVyxFQUFFLENBSkY7QUFLWEMsaUJBQVcsRUFBRSxLQUxGO0FBTVhDLG9CQUFjLEVBQUUsS0FOTDtBQU9YQyxvQkFBYyxFQUFFLEVBUEw7QUFRWEMscUJBQWUsRUFBRSxFQVJOO0FBU1hDLG9CQUFjLEVBQUU7QUFUTCxLQUFiO0FBWUEsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUMsSUFBYix5R0FBZjtBQUNB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QUFFLEtBQUtKLEtBQUwsQ0FBV0ssV0FBcEM7QUFBaUQsVUFBRSxFQUFDLGdCQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUEgsRUFRRyxNQUFDLFVBQUQ7QUFBWSxlQUFPLEVBQUUsS0FBS0wsS0FBTCxDQUFXTSxjQUFoQztBQUFnRCxVQUFFLEVBQUMsWUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVJILENBNUJIO0FBQUE7QUFBQTtBQUFBLDJ6Z0JBREY7QUE4TEQ7Ozs7RUFsVWVnQiw0Q0FBSyxDQUFDQyxTOztBQXFVVHpCLGtFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9VQTs7SUFFTTBCLFc7Ozs7O0FBQ0YsdUJBQVl6QixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1RBLEtBRFM7QUFHbEI7Ozs7NkJBRVE7QUFDTCxVQUFJLEtBQUtBLEtBQUwsQ0FBVzBCLFVBQVgsS0FBMEIsSUFBOUIsRUFBb0M7QUFDcEMsZUFDQTtBQUFBLDhDQUFlLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1c0dBREE7QUFzQ0UsT0F2Q0YsTUF1Q1E7QUFDSixlQUFPLElBQVA7QUFDSDtBQUNKOzs7O0VBakRxQkgsNENBQUssQ0FBQ0MsUzs7QUFvRGpCQywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMWQzN2NkZjk5NDJhMjBkNGMxOTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFja2dyb3VuZFZpZGVvIGZyb20gJy4uL3B1YmxpYy92aWRlby9CYWNrZ3JvdW5kVmlkZW8nO1xuaW1wb3J0IGNjb25UcmlhbmdsZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2Njb25UcmlhbmdsZS5wbmcnO1xuaW1wb3J0IFNvbG9CdXR0b24gZnJvbSAnLi9Tb2xvQnV0dG9uJztcbmltcG9ydCBTbWFsbEJ1dHRvbiBmcm9tICcuL1NtYWxsQnV0dG9uJztcbmltcG9ydCBDb3JwQnV0dG9uIGZyb20gJy4vQ29ycEJ1dHRvbic7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xuaW1wb3J0IENoZXZyb25SaWdodCBmcm9tICcuL0NoZXZyb25SaWdodCc7XG5pbXBvcnQgQ2hldnJvbkxlZnQgZnJvbSAnLi9DaGV2cm9uTGVmdCc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgLy8gU3RhdGUgbWFuYWdlbWVudCBhbmQgYmluZGluZ3NcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlld1NvbG86IGZhbHNlLFxuICAgICAgdmlld1NtYWxsOiBmYWxzZSxcbiAgICAgIHZpZXdDb3JwOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRQYWdlOiAzLFxuICAgICAgdmlld0NvbnRhY3Q6IGZhbHNlLFxuICAgICAgdmlld1Jldm9sdXRpb246IGZhbHNlLFxuICAgICAgc29sb1RyYW5zaXRpb246IFwiXCIsXG4gICAgICBzbWFsbFRyYW5zaXRpb246IFwiXCIsXG4gICAgICBjb3JwVHJhbnNpdGlvbjogXCJcIixcbiAgICB9O1xuXG4gICAgdGhpcy5zZWVTb2xvID0gdGhpcy5zZWVTb2xvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZUFsbCA9IHRoaXMuY2xvc2VBbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZVNtYWxsID0gdGhpcy5zZWVTbWFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlQ29ycCA9IHRoaXMuc2VlQ29ycC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFnZVJpZ2h0ID0gdGhpcy5wYWdlUmlnaHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhZ2VMZWZ0ID0gdGhpcy5wYWdlTGVmdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlQ29udGFjdCA9IHRoaXMuc2VlQ29udGFjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlUmV2b2x1dGlvbiA9IHRoaXMuc2VlUmV2b2x1dGlvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gb2JqZWN0c1xuICBcbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3U29sbzogZmFsc2UsXG4gICAgICB2aWV3U21hbGw6IGZhbHNlLFxuICAgICAgdmlld0NvcnA6IGZhbHNlLFxuICAgICAgY29udGVudFBhZ2U6IDMsXG4gICAgICB2aWV3Q29udGFjdDogZmFsc2UsXG4gICAgICB2aWV3UmV2b2x1dGlvbjogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBzZWVTb2xvKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIHZpZXdTb2xvOiB0cnVlLFxuICAgIH0pKTtcbiAgfVxuXG4gIHNlZVNtYWxsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1NtYWxsOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlQ29ycCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdDb3JwOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlQ29udGFjdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdDb250YWN0OiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlUmV2b2x1dGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U29sb1NsaWRlSW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzb2xvVHJhbnNpdGlvbjogXCJzbGlkZUluXCJcbiAgICB9KVxuICB9XG5cbiAgc2V0U29sb1NsaWRlT3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc29sb1RyYW5zaXRpb246IFwic2xpZGVPdXRcIlxuICAgIH0pXG4gIH1cblxuICBzZXRTbWFsbFNsaWRlSW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzbWFsbFRyYW5zaXRpb246IFwic2xpZGVJblwiXG4gICAgfSlcbiAgfVxuXG4gIHNldFNtYWxsU2xpZGVPdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzbWFsbFRyYW5zaXRpb246IFwic2xpZGVPdXRcIlxuICAgIH0pXG4gIH1cblxuICBzZXRDb3JwU2xpZGVJbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvcnBUcmFuc2l0aW9uOiBcInNsaWRlSW5cIlxuICAgIH0pXG4gIH1cblxuICBzZXRDb3JwU2xpZGVPdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb3JwVHJhbnNpdGlvbjogXCJzbGlkZU91dFwiXG4gICAgfSlcbiAgfVxuXG4gIHBhZ2VSaWdodCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA8PSAyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250ZW50UGFnZTogdGhpcy5zdGF0ZS5jb250ZW50UGFnZSArIDFcbiAgICB9KX0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA9IDMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250ZW50UGFnZTogMVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwYWdlTGVmdCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA+PSAyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250ZW50UGFnZTogdGhpcy5zdGF0ZS5jb250ZW50UGFnZSAtIDFcbiAgICB9KX0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA9IDEpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29udGVudFBhZ2U6IDNcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cblxuICAvLyBSZW5kZXJlZCBvYmplY3RzXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuXG4gICAgICAgIDxCYWNrZ3JvdW5kVmlkZW8gdHlwZT0ndmlkZW8vbXA0JyBhdXRvcGxheSAvPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaWduYXR1cmVcIj5cbiAgICAgICAgPGltZyBpZD1cImxvZ29cIiBzcmM9e2Njb25UcmlhbmdsZX0gLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzaWdUZXh0XCI+XG4gICAgICAgICAgICAgICAgTUVUQUxTXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiBcbiAgICAgICAgPGRpdiBpZD0nYmFubmVyRGl2Jz5cbiAgICAgICAgICA8aDIgaWQ9XCJiYW5uZXJcIj5cbiAgICAgICAgICAgIDxhIGlkPVwicmV2TGlua1wiIG9uQ2xpY2s9e3RoaXMuc2VlUmV2b2x1dGlvbn0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+WW91ciBfX19fX19fIDxpIGlkPVwicmV2VGFnXCI+UkVWT0xVVElPTjwvaT4gaW4gdGhlIGNhdGFseXRpYyBjb252ZXJ0ZXIgbWFya2V0PC9hPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25Db250YWluZXJcIiA+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZVNvbG99ICBpZD1cInNvbG9CdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48U29sb0J1dHRvbiBzaG93Q29tcG9uZW50PXt0aGlzLnNlZVNvbG99IHZpc2libGU9e3RoaXMuc3RhdGUudmlld1NvbG99IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnB9IC8+PC9hPlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVTbWFsbH0gIGlkPVwic21hbGxCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48U21hbGxCdXR0b24gdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U21hbGx9IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0gLz48L2E+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZUNvcnB9ICBpZD1cImNvcnBCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q29ycEJ1dHRvbiB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdDb3JwfSBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdTb2xvfSAvPjwvYT5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImZvb3RlckNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlQ29udGFjdH0gaWQ9XCJjb250YWN0QnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0gaWQ9XCJmb290ZXJMaW5rXCI+PENvbnRhY3QgYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwIHx8IHRoaXMuc3RhdGUudmlld0NvbnRhY3QgfHwgdGhpcy5zdGF0ZS52aWV3UmV2b2x1dGlvbn0+PC9Db250YWN0PjwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucGFnZVJpZ2h0fSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q2hldnJvblJpZ2h0IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0vPjwvYT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucGFnZUxlZnR9IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDaGV2cm9uTGVmdCBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnB9Lz48L2E+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmNsb3NlQWxsfSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q2xvc2VCdXR0b24gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwIHx8IHRoaXMuc3RhdGUudmlld0NvbnRhY3QgfHwgdGhpcy5zdGF0ZS52aWV3UmV2b2x1dGlvbn0vPjwvYT5cbiAgICAgICAgICAgIDxTb2xvQ29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTb2xvfSBwYWdlTnVtPXt0aGlzLnN0YXRlLmNvbnRlbnRQYWdlfSBpZD1cInNvbG9Db250ZW50XCIgLz5cbiAgICAgICAgICAgIDxTbWFsbENvbnRlbnQgdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U21hbGx9IHBhZ2VOdW09e3RoaXMuc3RhdGUuY29udGVudFBhZ2V9IGlkPVwic21hbGxDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxDb3JwQ29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdDb3JwfSBwYWdlTnVtPXt0aGlzLnN0YXRlLmNvbnRlbnRQYWdlfSBpZD1cImNvcnBDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxDb250YWN0Q29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdDb250YWN0fSBpZD1cImNvbnRhY3RDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxSZXZvbHV0aW9uIHZpc2libGU9e3RoaXMuc3RhdGUudmlld1Jldm9sdXRpb259IGlkPVwicmV2Q29udGVudFwiIC8+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgIC5BcHAge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuU2lnbmF0dXJlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTeW5jb3BhdGU7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgbGVmdDogLTMwcHg7XG4gICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2xvZ28ge1xuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIC5zaWdUZXh0IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTeW5jb3BhdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01OCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNjElO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICB3aWR0aDogNy41ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDAuOTVlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjcmV2VGFnIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjcmV2TGluayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggYmxhY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2Jhbm5lciB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2Jhbm5lckRpdiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMTUwcHgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KXtcblxuICAgICAgICAgICAgZGl2ICNiYW5uZXJEaXZ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2ICNidXR0b25Db250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC04NSUpO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE1dnc7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCkge1xuICAgICAgICAgICAgZGl2ICNidXR0b25Db250YWluZXJ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4Ym94O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgICAgICAgICAgdG9wOiA2MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjAlLCAtNjUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2NvcnBCdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogM3Z3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNzbWFsbEJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA0dnc7XG4gICAgICAgICAgfVxuICAgXG4gICAgICAgICAgI3NvbG9CdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogNHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBkaXYgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjZm9vdGVyQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNTAwJSk7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjA4cHgpIHtcbiAgICAgICAgICAgICNmb290ZXJDb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3MCUsIDUwJSk7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3NvbG9CdXR0b257XG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgICB9XG4gICAgIFxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIENoZXZyb25MZWZ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYnV0dG9uSGlkZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGV2cm9uTFwiPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLkNoZXZyb25MIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgIGhlaWdodDo1MHB4OyAvKmhlaWdodCBzaG91bGQgYmUgZG91YmxlIGJvcmRlciovXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTklO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTAlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuQ2hldnJvbkw6OmJlZm9yZSxcclxuICAgICAgICAgICAgLkNoZXZyb25MOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6MjVweCBzb2xpZCB0cmFuc3BhcmVudDsgLyphZGp1c3Qgc2l6ZSovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLypDaGFuZ2UgdGhlIGZvdXIgaW5zdGFuY2VzIG9mICd0b3AnIGJlbG93IHRvIHJvdGF0ZSAodG9wL3JpZ2h0L2JvdHRvbS9sZWZ0KSovXHJcbiAgICAgICAgICAgIC5DaGV2cm9uTDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojYjAwOyAvKkNoZXZyb24gQ29sb3IqL1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLkNoZXZyb25MOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICB0b3A6LTEwcHg7IC8qYWRqdXN0IHRoaWNrbmVzcyovXHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNmZmY7IC8qTWF0Y2ggYmFja2dyb3VuZCBjb2xvdXIqL1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+ICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGV2cm9uTGVmdDsiXSwic291cmNlUm9vdCI6IiJ9