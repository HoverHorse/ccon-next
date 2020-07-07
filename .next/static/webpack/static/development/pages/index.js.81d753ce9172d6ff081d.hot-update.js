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
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CloseButton */ "./components/CloseButton.js");







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
          lineNumber: 146,
          columnNumber: 7
        }
      }, __jsx(_public_video_BackgroundVideo__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "video/mp4",
        autoplay: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "jsx-1810751851" + " " + "Signature",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 9
        }
      }, __jsx("img", {
        id: "logo",
        src: _public_assets_cconTriangle_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 9
        }
      }), __jsx("h1", {
        className: "jsx-1810751851" + " " + "sigText",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 13
        }
      }, "METALS")), __jsx("div", {
        id: "bannerDiv",
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 9
        }
      }, __jsx("h2", {
        id: "banner",
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
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
          lineNumber: 160,
          columnNumber: 13
        }
      }, "Your _______ ", __jsx("i", {
        id: "revTag",
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 98
        }
      }, "REVOLUTION"), " in the catalytic converter market"))), __jsx("div", {
        id: "buttonContainer",
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
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
          lineNumber: 166,
          columnNumber: 13
        }
      }, __jsx(_SoloButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
        showComponent: this.seeSolo,
        visible: this.state.viewSolo,
        buttonHide: this.state.viewSmall || this.state.viewCorp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
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
          lineNumber: 167,
          columnNumber: 13
        }
      }, __jsx(_SmallButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
        visible: this.state.viewSmall,
        buttonHide: this.state.viewSolo || this.state.viewCorp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
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
          lineNumber: 168,
          columnNumber: 13
        }
      }, __jsx(_CorpButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
        visible: this.state.viewCorp,
        buttonHide: this.state.viewSmall || this.state.viewSolo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 83
        }
      })), __jsx("div", {
        id: "footerContainer",
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
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
        lineNumber: 170,
        columnNumber: 17
      }), _jsx), __jsx(_Contact__WEBPACK_IMPORTED_MODULE_14__["default"], {
        buttonHide: this.state.viewSolo || this.state.viewSmall || this.state.viewCorp || this.state.viewContact || this.state.viewRevolution,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 108
        }
      })))), __jsx("div", {
        className: "jsx-1810751851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
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
          lineNumber: 175,
          columnNumber: 13
        }
      }, __jsx(_ChevronRight__WEBPACK_IMPORTED_MODULE_15__["default"], {
        buttonHide: this.state.viewSolo || this.state.viewSmall || this.state.viewCorp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
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
          lineNumber: 176,
          columnNumber: 13
        }
      }, __jsx(_ChevronLeft__WEBPACK_IMPORTED_MODULE_16__["default"], {
        buttonHide: this.state.viewSolo || this.state.viewSmall || this.state.viewCorp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
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
          lineNumber: 177,
          columnNumber: 13
        }
      }, __jsx(_CloseButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
        buttonHide: this.state.viewSolo || this.state.viewSmall || this.state.viewCorp || this.state.viewContact || this.state.viewRevolution,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 67
        }
      })), __jsx(SoloContent, {
        visible: this.state.viewSolo,
        pageNum: this.state.contentPage,
        id: "soloContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 13
        }
      }), __jsx(SmallContent, {
        visible: this.state.viewSmall,
        pageNum: this.state.contentPage,
        id: "smallContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 13
        }
      }), __jsx(CorpContent, {
        visible: this.state.viewCorp,
        pageNum: this.state.contentPage,
        id: "corpContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 13
        }
      }), __jsx(ContactContent, {
        visible: this.state.viewContact,
        id: "contactContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 13
        }
      }), __jsx(Revolution, {
        visible: this.state.viewRevolution,
        id: "revContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 13
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1810751851",
        __self: this
      }, ".App.jsx-1810751851{text-align:center;}.Signature.jsx-1810751851{font-family:Syncopate;color:rgb(192,192,192);position:fixed;left:-30px;top:-30px;z-index:5;opacity:1;pointer-events:none;}#logo.jsx-1810751851{width:250px;max-width:250px;z-index:-1;pointer-events:none;}.sigText.jsx-1810751851{font-family:Syncopate;font-size:2em;margin-top:-58%;margin-left:61%;border-top:1px solid red;border-bottom:1px solid red;width:7.5em;height:0.95em;}#revTag.jsx-1810751851{color:red;z-index:2;height:100%;}#revLink.jsx-1810751851{font-size:1.7em;height:100%;text-shadow:3px 3px black;}#banner.jsx-1810751851{border-top:1px solid red;border-bottom:1px solid red;width:80vw;margin:auto;color:white;z-index:1;opacity:0.8;}#bannerDiv.jsx-1810751851{-webkit-transform:translate(0%,150px);-ms-transform:translate(0%,150px);transform:translate(0%,150px);}@media (max-width:608px){div.jsx-1810751851 #bannerDiv.jsx-1810751851{display:none;}}div.jsx-1810751851 #buttonContainer.jsx-1810751851{position:absolute;width:80%;left:50%;top:50%;-webkit-transform:translate(-50%,-85%);-ms-transform:translate(-50%,-85%);transform:translate(-50%,-85%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vw;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}@media (max-width:608px){div.jsx-1810751851 #buttonContainer.jsx-1810751851{display:-webkit-inline-box;display:-webkit-inline-flexbox;display:-ms-inline-flexboxbox;display:inline-flexbox;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;width:150px;height:60%;top:60%;-webkit-transform:translate(-120%,-65%);-ms-transform:translate(-120%,-65%);transform:translate(-120%,-65%);}}#corpButton.jsx-1810751851{width:15vw;min-width:150px;min-height:150px;margin:3vw;}#smallButton.jsx-1810751851{width:15vw;min-width:150px;min-height:150px;margin:4vw;}#soloButton.jsx-1810751851{width:15vw;min-width:150px;min-height:150px;margin:4vw;}div.jsx-1810751851 #contentContainer.jsx-1810751851{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:60vh;width:80vw;background-color:white;border-radius:8px;}#footerContainer.jsx-1810751851{width:33%;position:fixed;-webkit-transform:translate(0%,500%);-ms-transform:translate(0%,500%);transform:translate(0%,500%);margin-top:20%;}@media (max-width:608px){#footerContainer.jsx-1810751851{width:100%;position:fixed;-webkit-transform:translate(70%,50%);-ms-transform:translate(70%,50%);transform:translate(70%,50%);margin-top:0%;}}#soloButton.jsx-1810751851{z-index:20;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdMc0IsQUFJK0IsQUFJSSxBQVdWLEFBUVUsQUFXWixBQU1NLEFBTVMsQUFXNUIsQUFLa0IsQUFLSyxBQVlLLEFBVWQsQUFPQSxBQU9BLEFBT08sQUFlTixBQVFDLEFBUUYsVUExR0QsQUEyRk8sQ0FwQ0QsQUFPQSxBQU9BLEFBOEJDLEFBUW5CLENBOUhrQixDQStDaEIsR0F0QlksRUF4Q2QsQUFtRWMsQUEyQ0gsRUEzRUcsRUEvQmEsQUFtQlgsR0F1QmMsQUFnRkksQ0FRQSxDQTVDZixBQU9BLEFBT0EsQUFPVCxDQS9GRyxBQXlCZSxBQTJCZixJQWhDYixHQTRFa0MsQ0F4RmhCLENBNkNOLEVBcERVLEtBMEVULEFBT0EsQUFPQSxDQXBHSSxBQWlFbUIsT0E3Q2xCLENBc0JMLENBTGIsQ0FrREEsQUFPQSxBQU9BLElBeEZBLENBWmEsSUEwQ0MsSUF0QmEsR0FuQmYsS0EwQ0UsS0F6Q0YsT0EwQ0EsR0F6Q0EsRUFrQmtCLEtBd0JoQixHQXpDUSxDQThDdEIsUUFKQSxDQTJCaUMsVUFwRWpDLEFBaUJjLEdBbUdLLENBUUQsUUExR0YsTUFtR2hCLEFBUUEsQ0F2QmUsT0FuRmYsR0F5Q2lCLGdFQTJDSSxVQTFDTCxVQVFBLEVBUGlCLFVBUWxCLFdBQ0gsUUFDeUIsMENBZ0NMLG9EQXpDaEMsY0FVRSxpREFnQ1ksWUFDRCxXQUNZLHVCQUNMLGtCQUVwQiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFja2dyb3VuZFZpZGVvIGZyb20gJy4uL3B1YmxpYy92aWRlby9CYWNrZ3JvdW5kVmlkZW8nO1xuaW1wb3J0IGNjb25UcmlhbmdsZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2Njb25UcmlhbmdsZS5wbmcnO1xuaW1wb3J0IFNvbG9CdXR0b24gZnJvbSAnLi9Tb2xvQnV0dG9uJztcbmltcG9ydCBTbWFsbEJ1dHRvbiBmcm9tICcuL1NtYWxsQnV0dG9uJztcbmltcG9ydCBDb3JwQnV0dG9uIGZyb20gJy4vQ29ycEJ1dHRvbic7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xuaW1wb3J0IENoZXZyb25SaWdodCBmcm9tICcuL0NoZXZyb25SaWdodCc7XG5pbXBvcnQgQ2hldnJvbkxlZnQgZnJvbSAnLi9DaGV2cm9uTGVmdCc7XG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnLi9DbG9zZUJ1dHRvbic7XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyBTdGF0ZSBtYW5hZ2VtZW50IGFuZCBiaW5kaW5nc1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aWV3U29sbzogZmFsc2UsXG4gICAgICB2aWV3U21hbGw6IGZhbHNlLFxuICAgICAgdmlld0NvcnA6IGZhbHNlLFxuICAgICAgY29udGVudFBhZ2U6IDMsXG4gICAgICB2aWV3Q29udGFjdDogZmFsc2UsXG4gICAgICB2aWV3UmV2b2x1dGlvbjogZmFsc2UsXG4gICAgICBzb2xvVHJhbnNpdGlvbjogXCJcIixcbiAgICAgIHNtYWxsVHJhbnNpdGlvbjogXCJcIixcbiAgICAgIGNvcnBUcmFuc2l0aW9uOiBcIlwiLFxuICAgIH07XG5cbiAgICB0aGlzLnNlZVNvbG8gPSB0aGlzLnNlZVNvbG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlQWxsID0gdGhpcy5jbG9zZUFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlU21hbGwgPSB0aGlzLnNlZVNtYWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVDb3JwID0gdGhpcy5zZWVDb3JwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYWdlUmlnaHQgPSB0aGlzLnBhZ2VSaWdodC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFnZUxlZnQgPSB0aGlzLnBhZ2VMZWZ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVDb250YWN0ID0gdGhpcy5zZWVDb250YWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVSZXZvbHV0aW9uID0gdGhpcy5zZWVSZXZvbHV0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyBGdW5jdGlvbiBvYmplY3RzXG4gIFxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdTb2xvOiBmYWxzZSxcbiAgICAgIHZpZXdTbWFsbDogZmFsc2UsXG4gICAgICB2aWV3Q29ycDogZmFsc2UsXG4gICAgICBjb250ZW50UGFnZTogMyxcbiAgICAgIHZpZXdDb250YWN0OiBmYWxzZSxcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlZVNvbG8oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgdmlld1NvbG86IHRydWUsXG4gICAgfSkpO1xuICB9XG5cbiAgc2VlU21hbGwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3U21hbGw6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZWVDb3JwKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld0NvcnA6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZWVDb250YWN0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld0NvbnRhY3Q6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZWVSZXZvbHV0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1Jldm9sdXRpb246IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZXRTb2xvU2xpZGVJbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNvbG9UcmFuc2l0aW9uOiBcInNsaWRlSW5cIlxuICAgIH0pXG4gIH1cblxuICBzZXRTb2xvU2xpZGVPdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzb2xvVHJhbnNpdGlvbjogXCJzbGlkZU91dFwiXG4gICAgfSlcbiAgfVxuXG4gIHNldFNtYWxsU2xpZGVJbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNtYWxsVHJhbnNpdGlvbjogXCJzbGlkZUluXCJcbiAgICB9KVxuICB9XG5cbiAgc2V0U21hbGxTbGlkZU91dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNtYWxsVHJhbnNpdGlvbjogXCJzbGlkZU91dFwiXG4gICAgfSlcbiAgfVxuXG4gIHNldENvcnBTbGlkZUluKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29ycFRyYW5zaXRpb246IFwic2xpZGVJblwiXG4gICAgfSlcbiAgfVxuXG4gIHNldENvcnBTbGlkZU91dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvcnBUcmFuc2l0aW9uOiBcInNsaWRlT3V0XCJcbiAgICB9KVxuICB9XG5cbiAgcGFnZVJpZ2h0KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlIDw9IDIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbnRlbnRQYWdlOiB0aGlzLnN0YXRlLmNvbnRlbnRQYWdlICsgMVxuICAgIH0pfSBlbHNlIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlID0gMykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbnRlbnRQYWdlOiAxXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHBhZ2VMZWZ0KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlID49IDIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbnRlbnRQYWdlOiB0aGlzLnN0YXRlLmNvbnRlbnRQYWdlIC0gMVxuICAgIH0pfSBlbHNlIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlID0gMSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250ZW50UGFnZTogM1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuXG4gIC8vIFJlbmRlcmVkIG9iamVjdHNcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG5cbiAgICAgICAgPEJhY2tncm91bmRWaWRlbyB0eXBlPSd2aWRlby9tcDQnIGF1dG9wbGF5IC8+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpZ25hdHVyZVwiPlxuICAgICAgICA8aW1nIGlkPVwibG9nb1wiIHNyYz17Y2NvblRyaWFuZ2xlfSAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNpZ1RleHRcIj5cbiAgICAgICAgICAgICAgICBNRVRBTFNcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuIFxuICAgICAgICA8ZGl2IGlkPSdiYW5uZXJEaXYnPlxuICAgICAgICAgIDxoMiBpZD1cImJhbm5lclwiPlxuICAgICAgICAgICAgPGEgaWQ9XCJyZXZMaW5rXCIgb25DbGljaz17dGhpcy5zZWVSZXZvbHV0aW9ufSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5Zb3VyIF9fX19fX18gPGkgaWQ9XCJyZXZUYWdcIj5SRVZPTFVUSU9OPC9pPiBpbiB0aGUgY2F0YWx5dGljIGNvbnZlcnRlciBtYXJrZXQ8L2E+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbkNvbnRhaW5lclwiID5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlU29sb30gIGlkPVwic29sb0J1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxTb2xvQnV0dG9uIHNob3dDb21wb25lbnQ9e3RoaXMuc2VlU29sb30gdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U29sb30gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0gLz48L2E+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZVNtYWxsfSAgaWQ9XCJzbWFsbEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxTbWFsbEJ1dHRvbiB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbH0gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwfSAvPjwvYT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlQ29ycH0gIGlkPVwiY29ycEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDb3JwQnV0dG9uIHZpc2libGU9e3RoaXMuc3RhdGUudmlld0NvcnB9IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld1NvbG99IC8+PC9hPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVDb250YWN0fSBpZD1cImNvbnRhY3RCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fSBpZD1cImZvb3RlckxpbmtcIj48Q29udGFjdCBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnAgfHwgdGhpcy5zdGF0ZS52aWV3Q29udGFjdCB8fCB0aGlzLnN0YXRlLnZpZXdSZXZvbHV0aW9ufT48L0NvbnRhY3Q+PC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wYWdlUmlnaHR9IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDaGV2cm9uUmlnaHQgYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwfS8+PC9hPlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wYWdlTGVmdH0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PENoZXZyb25MZWZ0IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0vPjwvYT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuY2xvc2VBbGx9IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDbG9zZUJ1dHRvbiBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnAgfHwgdGhpcy5zdGF0ZS52aWV3Q29udGFjdCB8fCB0aGlzLnN0YXRlLnZpZXdSZXZvbHV0aW9ufS8+PC9hPlxuICAgICAgICAgICAgPFNvbG9Db250ZW50IHZpc2libGU9e3RoaXMuc3RhdGUudmlld1NvbG99IHBhZ2VOdW09e3RoaXMuc3RhdGUuY29udGVudFBhZ2V9IGlkPVwic29sb0NvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPFNtYWxsQ29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbH0gcGFnZU51bT17dGhpcy5zdGF0ZS5jb250ZW50UGFnZX0gaWQ9XCJzbWFsbENvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPENvcnBDb250ZW50IHZpc2libGU9e3RoaXMuc3RhdGUudmlld0NvcnB9IHBhZ2VOdW09e3RoaXMuc3RhdGUuY29udGVudFBhZ2V9IGlkPVwiY29ycENvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPENvbnRhY3RDb250ZW50IHZpc2libGU9e3RoaXMuc3RhdGUudmlld0NvbnRhY3R9IGlkPVwiY29udGFjdENvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPFJldm9sdXRpb24gdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3UmV2b2x1dGlvbn0gaWQ9XCJyZXZDb250ZW50XCIgLz5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgLkFwcCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5TaWduYXR1cmUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBsZWZ0OiAtMzBweDtcbiAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjbG9nbyB7XG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgLnNpZ1RleHQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTU4JTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2MSU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIHdpZHRoOiA3LjVlbTtcbiAgICAgICAgICAgIGhlaWdodDogMC45NWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNyZXZUYWcge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNyZXZMaW5rIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCBibGFjaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjYmFubmVyIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjYmFubmVyRGl2IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAxNTBweClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjA4cHgpe1xuXG4gICAgICAgICAgICBkaXYgI2Jhbm5lckRpdntcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXYgI2J1dHRvbkNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTg1JSk7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTV2dztcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XG4gICAgICAgICAgICBkaXYgI2J1dHRvbkNvbnRhaW5lcntcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXhib3g7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICAgICAgICB0b3A6IDYwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMCUsIC02NSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjY29ycEJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAzdnc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI3NtYWxsQnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDE1dnc7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDR2dztcbiAgICAgICAgICB9XG4gICBcbiAgICAgICAgICAjc29sb0J1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA0dnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGRpdiAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNmb290ZXJDb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1MDAlKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCkge1xuICAgICAgICAgICAgI2Zvb3RlckNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDcwJSwgNTAlKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjc29sb0J1dHRvbntcbiAgICAgICAgICAgIHotaW5kZXg6IDIwO1xuICAgICAgICAgIH1cbiAgICAgXG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\App.js */"));
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

/***/ "./components/CloseButton.js":
/*!***********************************!*\
  !*** ./components/CloseButton.js ***!
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





var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\CloseButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var CloseButton = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CloseButton, _React$Component);

  var _super = _createSuper(CloseButton);

  function CloseButton(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CloseButton);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CloseButton, [{
    key: "render",
    value: function render() {
      if (this.props.buttonHide === true) {
        return __jsx("div", {
          id: "mdiv",
          className: "jsx-2586622754",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "jsx-2586622754" + " " + "mdiv",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 15
          }
        }, __jsx("div", {
          className: "jsx-2586622754" + " " + "md",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 17
          }
        })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
          id: "2586622754",
          __self: this
        }, "#mdiv.jsx-2586622754{width:25px;height:25px;opacity:0.7;right:11%;top:33%;position:fixed;z-index:10;}.mdiv.jsx-2586622754{height:25px;width:4px;margin-left:12px;background-color:black;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);Z-index:1;}.md.jsx-2586622754{height:25px;width:4px;background-color:black;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);Z-index:2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ2xvc2VCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJtQixBQUlnQyxBQVVDLEFBU0EsV0FsQkEsQ0FVRixBQVNBLFVBUk8sQUFTTSxDQW5CWCxZQUNGLElBVWEsTUFUZixBQWtCZ0IsUUFqQlQsU0FTUyxNQVJiLFdBQ2Isa0RBZ0JZLFVBQ1osT0FUWSxVQUNaIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ2xvc2VCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQ2xvc2VCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5idXR0b25IaWRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwibWRpdlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI21kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDExJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5tZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgWi1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLm1kIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgWi1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xvc2VCdXR0b247Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\CloseButton.js */"));
      } else {
        return null;
      }
    }
  }]);

  return CloseButton;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CloseButton);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Nsb3NlQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJ2aWV3U29sbyIsInZpZXdTbWFsbCIsInZpZXdDb3JwIiwiY29udGVudFBhZ2UiLCJ2aWV3Q29udGFjdCIsInZpZXdSZXZvbHV0aW9uIiwic29sb1RyYW5zaXRpb24iLCJzbWFsbFRyYW5zaXRpb24iLCJjb3JwVHJhbnNpdGlvbiIsInNlZVNvbG8iLCJiaW5kIiwiY2xvc2VBbGwiLCJzZWVTbWFsbCIsInNlZUNvcnAiLCJwYWdlUmlnaHQiLCJwYWdlTGVmdCIsInNlZUNvbnRhY3QiLCJzZWVSZXZvbHV0aW9uIiwic2V0U3RhdGUiLCJjY29uVHJpYW5nbGUiLCJjdXJzb3IiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNsb3NlQnV0dG9uIiwiYnV0dG9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFHTUEsRzs7Ozs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOLEVBRGlCLENBR2pCOztBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBQUUsS0FEQztBQUVYQyxlQUFTLEVBQUUsS0FGQTtBQUdYQyxjQUFRLEVBQUUsS0FIQztBQUlYQyxpQkFBVyxFQUFFLENBSkY7QUFLWEMsaUJBQVcsRUFBRSxLQUxGO0FBTVhDLG9CQUFjLEVBQUUsS0FOTDtBQU9YQyxvQkFBYyxFQUFFLEVBUEw7QUFRWEMscUJBQWUsRUFBRSxFQVJOO0FBU1hDLG9CQUFjLEVBQUU7QUFUTCxLQUFiO0FBWUEsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUMsSUFBYix5R0FB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LGVBQU8sRUFBRSxLQUFLSixLQUFMLENBQVdLLFdBQXBDO0FBQWlELFVBQUUsRUFBQyxnQkFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVBILEVBUUcsTUFBQyxVQUFEO0FBQVksZUFBTyxFQUFFLEtBQUtMLEtBQUwsQ0FBV00sY0FBaEM7QUFBZ0QsVUFBRSxFQUFDLFlBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFSSCxDQTVCSDtBQUFBO0FBQUE7QUFBQSx1M2dCQURGO0FBOExEOzs7O0VBbFVlZ0IsNENBQUssQ0FBQ0MsUzs7QUFxVVR6QixrRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqVkE7O0lBRU0wQixXOzs7OztBQUNGLHVCQUFZekIsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTO0FBR2xCOzs7OzZCQUVRO0FBQ0wsVUFBSSxLQUFLQSxLQUFMLENBQVcwQixVQUFYLEtBQTBCLElBQTlCLEVBQW9DO0FBQ3BDLGVBQ0E7QUFBSyxZQUFFLEVBQUMsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDTTtBQUFBLDhDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUEsOENBQWUsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsQ0FETjtBQUFBO0FBQUE7QUFBQSxncEdBREE7QUF1Q0UsT0F4Q0YsTUF3Q1E7QUFDSixlQUFPLElBQVA7QUFDSDtBQUNKOzs7O0VBbERxQkgsNENBQUssQ0FBQ0MsUzs7QUFxRGpCQywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuODFkNzUzY2U5MTcyZDZmZjA4MWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFja2dyb3VuZFZpZGVvIGZyb20gJy4uL3B1YmxpYy92aWRlby9CYWNrZ3JvdW5kVmlkZW8nO1xuaW1wb3J0IGNjb25UcmlhbmdsZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2Njb25UcmlhbmdsZS5wbmcnO1xuaW1wb3J0IFNvbG9CdXR0b24gZnJvbSAnLi9Tb2xvQnV0dG9uJztcbmltcG9ydCBTbWFsbEJ1dHRvbiBmcm9tICcuL1NtYWxsQnV0dG9uJztcbmltcG9ydCBDb3JwQnV0dG9uIGZyb20gJy4vQ29ycEJ1dHRvbic7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xuaW1wb3J0IENoZXZyb25SaWdodCBmcm9tICcuL0NoZXZyb25SaWdodCc7XG5pbXBvcnQgQ2hldnJvbkxlZnQgZnJvbSAnLi9DaGV2cm9uTGVmdCc7XG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnLi9DbG9zZUJ1dHRvbic7XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyBTdGF0ZSBtYW5hZ2VtZW50IGFuZCBiaW5kaW5nc1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aWV3U29sbzogZmFsc2UsXG4gICAgICB2aWV3U21hbGw6IGZhbHNlLFxuICAgICAgdmlld0NvcnA6IGZhbHNlLFxuICAgICAgY29udGVudFBhZ2U6IDMsXG4gICAgICB2aWV3Q29udGFjdDogZmFsc2UsXG4gICAgICB2aWV3UmV2b2x1dGlvbjogZmFsc2UsXG4gICAgICBzb2xvVHJhbnNpdGlvbjogXCJcIixcbiAgICAgIHNtYWxsVHJhbnNpdGlvbjogXCJcIixcbiAgICAgIGNvcnBUcmFuc2l0aW9uOiBcIlwiLFxuICAgIH07XG5cbiAgICB0aGlzLnNlZVNvbG8gPSB0aGlzLnNlZVNvbG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlQWxsID0gdGhpcy5jbG9zZUFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlU21hbGwgPSB0aGlzLnNlZVNtYWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVDb3JwID0gdGhpcy5zZWVDb3JwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYWdlUmlnaHQgPSB0aGlzLnBhZ2VSaWdodC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFnZUxlZnQgPSB0aGlzLnBhZ2VMZWZ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVDb250YWN0ID0gdGhpcy5zZWVDb250YWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVSZXZvbHV0aW9uID0gdGhpcy5zZWVSZXZvbHV0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyBGdW5jdGlvbiBvYmplY3RzXG4gIFxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdTb2xvOiBmYWxzZSxcbiAgICAgIHZpZXdTbWFsbDogZmFsc2UsXG4gICAgICB2aWV3Q29ycDogZmFsc2UsXG4gICAgICBjb250ZW50UGFnZTogMyxcbiAgICAgIHZpZXdDb250YWN0OiBmYWxzZSxcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlZVNvbG8oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgdmlld1NvbG86IHRydWUsXG4gICAgfSkpO1xuICB9XG5cbiAgc2VlU21hbGwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3U21hbGw6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZWVDb3JwKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld0NvcnA6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZWVDb250YWN0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld0NvbnRhY3Q6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZWVSZXZvbHV0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1Jldm9sdXRpb246IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZXRTb2xvU2xpZGVJbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNvbG9UcmFuc2l0aW9uOiBcInNsaWRlSW5cIlxuICAgIH0pXG4gIH1cblxuICBzZXRTb2xvU2xpZGVPdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzb2xvVHJhbnNpdGlvbjogXCJzbGlkZU91dFwiXG4gICAgfSlcbiAgfVxuXG4gIHNldFNtYWxsU2xpZGVJbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNtYWxsVHJhbnNpdGlvbjogXCJzbGlkZUluXCJcbiAgICB9KVxuICB9XG5cbiAgc2V0U21hbGxTbGlkZU91dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNtYWxsVHJhbnNpdGlvbjogXCJzbGlkZU91dFwiXG4gICAgfSlcbiAgfVxuXG4gIHNldENvcnBTbGlkZUluKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29ycFRyYW5zaXRpb246IFwic2xpZGVJblwiXG4gICAgfSlcbiAgfVxuXG4gIHNldENvcnBTbGlkZU91dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvcnBUcmFuc2l0aW9uOiBcInNsaWRlT3V0XCJcbiAgICB9KVxuICB9XG5cbiAgcGFnZVJpZ2h0KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlIDw9IDIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbnRlbnRQYWdlOiB0aGlzLnN0YXRlLmNvbnRlbnRQYWdlICsgMVxuICAgIH0pfSBlbHNlIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlID0gMykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbnRlbnRQYWdlOiAxXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHBhZ2VMZWZ0KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlID49IDIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbnRlbnRQYWdlOiB0aGlzLnN0YXRlLmNvbnRlbnRQYWdlIC0gMVxuICAgIH0pfSBlbHNlIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlID0gMSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250ZW50UGFnZTogM1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuXG4gIC8vIFJlbmRlcmVkIG9iamVjdHNcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG5cbiAgICAgICAgPEJhY2tncm91bmRWaWRlbyB0eXBlPSd2aWRlby9tcDQnIGF1dG9wbGF5IC8+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpZ25hdHVyZVwiPlxuICAgICAgICA8aW1nIGlkPVwibG9nb1wiIHNyYz17Y2NvblRyaWFuZ2xlfSAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNpZ1RleHRcIj5cbiAgICAgICAgICAgICAgICBNRVRBTFNcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuIFxuICAgICAgICA8ZGl2IGlkPSdiYW5uZXJEaXYnPlxuICAgICAgICAgIDxoMiBpZD1cImJhbm5lclwiPlxuICAgICAgICAgICAgPGEgaWQ9XCJyZXZMaW5rXCIgb25DbGljaz17dGhpcy5zZWVSZXZvbHV0aW9ufSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5Zb3VyIF9fX19fX18gPGkgaWQ9XCJyZXZUYWdcIj5SRVZPTFVUSU9OPC9pPiBpbiB0aGUgY2F0YWx5dGljIGNvbnZlcnRlciBtYXJrZXQ8L2E+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbkNvbnRhaW5lclwiID5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlU29sb30gIGlkPVwic29sb0J1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxTb2xvQnV0dG9uIHNob3dDb21wb25lbnQ9e3RoaXMuc2VlU29sb30gdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U29sb30gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0gLz48L2E+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZVNtYWxsfSAgaWQ9XCJzbWFsbEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxTbWFsbEJ1dHRvbiB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbH0gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwfSAvPjwvYT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlQ29ycH0gIGlkPVwiY29ycEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDb3JwQnV0dG9uIHZpc2libGU9e3RoaXMuc3RhdGUudmlld0NvcnB9IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld1NvbG99IC8+PC9hPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVDb250YWN0fSBpZD1cImNvbnRhY3RCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fSBpZD1cImZvb3RlckxpbmtcIj48Q29udGFjdCBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnAgfHwgdGhpcy5zdGF0ZS52aWV3Q29udGFjdCB8fCB0aGlzLnN0YXRlLnZpZXdSZXZvbHV0aW9ufT48L0NvbnRhY3Q+PC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wYWdlUmlnaHR9IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDaGV2cm9uUmlnaHQgYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwfS8+PC9hPlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wYWdlTGVmdH0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PENoZXZyb25MZWZ0IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0vPjwvYT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuY2xvc2VBbGx9IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDbG9zZUJ1dHRvbiBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnAgfHwgdGhpcy5zdGF0ZS52aWV3Q29udGFjdCB8fCB0aGlzLnN0YXRlLnZpZXdSZXZvbHV0aW9ufS8+PC9hPlxuICAgICAgICAgICAgPFNvbG9Db250ZW50IHZpc2libGU9e3RoaXMuc3RhdGUudmlld1NvbG99IHBhZ2VOdW09e3RoaXMuc3RhdGUuY29udGVudFBhZ2V9IGlkPVwic29sb0NvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPFNtYWxsQ29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbH0gcGFnZU51bT17dGhpcy5zdGF0ZS5jb250ZW50UGFnZX0gaWQ9XCJzbWFsbENvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPENvcnBDb250ZW50IHZpc2libGU9e3RoaXMuc3RhdGUudmlld0NvcnB9IHBhZ2VOdW09e3RoaXMuc3RhdGUuY29udGVudFBhZ2V9IGlkPVwiY29ycENvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPENvbnRhY3RDb250ZW50IHZpc2libGU9e3RoaXMuc3RhdGUudmlld0NvbnRhY3R9IGlkPVwiY29udGFjdENvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPFJldm9sdXRpb24gdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3UmV2b2x1dGlvbn0gaWQ9XCJyZXZDb250ZW50XCIgLz5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgLkFwcCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5TaWduYXR1cmUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBsZWZ0OiAtMzBweDtcbiAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjbG9nbyB7XG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgLnNpZ1RleHQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTU4JTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2MSU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIHdpZHRoOiA3LjVlbTtcbiAgICAgICAgICAgIGhlaWdodDogMC45NWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNyZXZUYWcge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNyZXZMaW5rIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCBibGFjaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjYmFubmVyIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjYmFubmVyRGl2IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAxNTBweClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjA4cHgpe1xuXG4gICAgICAgICAgICBkaXYgI2Jhbm5lckRpdntcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXYgI2J1dHRvbkNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTg1JSk7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTV2dztcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XG4gICAgICAgICAgICBkaXYgI2J1dHRvbkNvbnRhaW5lcntcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXhib3g7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICAgICAgICB0b3A6IDYwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMCUsIC02NSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjY29ycEJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAzdnc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI3NtYWxsQnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDE1dnc7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDR2dztcbiAgICAgICAgICB9XG4gICBcbiAgICAgICAgICAjc29sb0J1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA0dnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGRpdiAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNmb290ZXJDb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1MDAlKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCkge1xuICAgICAgICAgICAgI2Zvb3RlckNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDcwJSwgNTAlKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjc29sb0J1dHRvbntcbiAgICAgICAgICAgIHotaW5kZXg6IDIwO1xuICAgICAgICAgIH1cbiAgICAgXG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQ2xvc2VCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5idXR0b25IaWRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwibWRpdlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI21kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDExJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5tZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgWi1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLm1kIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgWi1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xvc2VCdXR0b247Il0sInNvdXJjZVJvb3QiOiIifQ==