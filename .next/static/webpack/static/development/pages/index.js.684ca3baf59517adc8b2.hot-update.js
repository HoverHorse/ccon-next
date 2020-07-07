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
/* harmony import */ var _SoloContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SoloContent */ "./components/SoloContent.js");
/* harmony import */ var _SmallContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SmallContent */ "./components/SmallContent.js");
/* harmony import */ var _CorpContent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./CorpContent */ "./components/CorpContent.js");
/* harmony import */ var _ContactContent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ContactContent */ "./components/ContactContent.js");
/* harmony import */ var _Revolution__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Revolution */ "./components/Revolution.js");







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
        className: "jsx-1445889213" + " " + "App",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 7
        }
      }, __jsx(_public_video_BackgroundVideo__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "video/mp4",
        autoplay: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "jsx-1445889213" + " " + "Signature",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 9
        }
      }, __jsx("img", {
        id: "logo",
        src: _public_assets_cconTriangle_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-1445889213",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 9
        }
      }), __jsx("h1", {
        className: "jsx-1445889213" + " " + "sigText",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }
      }, "METALS")), __jsx("div", {
        id: "bannerDiv",
        className: "jsx-1445889213",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 9
        }
      }, __jsx("h2", {
        id: "banner",
        className: "jsx-1445889213",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }
      }, __jsx("a", {
        id: "revLink",
        onClick: this.seeRevolution,
        style: {
          cursor: 'pointer'
        },
        className: "jsx-1445889213",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }
      }, "Your _______ ", __jsx("i", {
        id: "revTag",
        className: "jsx-1445889213",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 98
        }
      }, "REVOLUTION"), " in the catalytic converter market"))), __jsx("div", {
        id: "buttonContainer",
        className: "jsx-1445889213",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 10
        }
      }, __jsx("a", {
        onClick: this.seeSolo,
        id: "soloButton",
        style: {
          cursor: 'pointer'
        },
        className: "jsx-1445889213",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 13
        }
      }, __jsx(_SoloButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
        showComponent: this.seeSolo,
        visible: this.state.viewSolo,
        buttonHide: this.state.viewSmall || this.state.viewCorp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 83
        }
      })), __jsx("a", {
        onClick: this.seeSmall,
        id: "smallButton",
        style: {
          cursor: 'pointer'
        },
        className: "jsx-1445889213",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 13
        }
      }, __jsx(_SmallButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
        visible: this.state.viewSmall,
        buttonHide: this.state.viewSolo || this.state.viewCorp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 85
        }
      })), __jsx("a", {
        onClick: this.seeCorp,
        id: "corpButton",
        style: {
          cursor: 'pointer'
        },
        className: "jsx-1445889213",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 13
        }
      }, __jsx(_CorpButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
        visible: this.state.viewCorp,
        buttonHide: this.state.viewSmall || this.state.viewSolo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 83
        }
      })), __jsx("div", {
        id: "footerContainer",
        className: "jsx-1445889213",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 15
        }
      }, __jsx("a", (_jsx = {
        onClick: this.seeContact,
        id: "contactButton",
        style: {
          cursor: 'pointer'
        }
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "id", "footerLink"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "jsx-1445889213"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }), _jsx), __jsx(_Contact__WEBPACK_IMPORTED_MODULE_14__["default"], {
        buttonHide: this.state.viewSolo || this.state.viewSmall || this.state.viewCorp || this.state.viewContact || this.state.viewRevolution,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 108
        }
      })))), __jsx("div", {
        id: "detailContainer",
        className: "jsx-1445889213",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 10
        }
      }, __jsx("a", {
        onClick: this.pageRight,
        style: {
          cursor: 'pointer'
        },
        className: "jsx-1445889213",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 13
        }
      }, __jsx(_ChevronRight__WEBPACK_IMPORTED_MODULE_15__["default"], {
        buttonHide: this.state.viewSolo || this.state.viewSmall || this.state.viewCorp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 68
        }
      })), __jsx("a", {
        onClick: this.pageLeft,
        style: {
          cursor: 'pointer'
        },
        className: "jsx-1445889213",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 13
        }
      }, __jsx(_ChevronLeft__WEBPACK_IMPORTED_MODULE_16__["default"], {
        buttonHide: this.state.viewSolo || this.state.viewSmall || this.state.viewCorp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 67
        }
      })), __jsx("a", {
        onClick: this.closeAll,
        style: {
          cursor: 'pointer'
        },
        className: "jsx-1445889213",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 13
        }
      }, __jsx(_CloseButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
        buttonHide: this.state.viewSolo || this.state.viewSmall || this.state.viewCorp || this.state.viewContact || this.state.viewRevolution,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 67
        }
      })), __jsx(_SoloContent__WEBPACK_IMPORTED_MODULE_18__["default"], {
        visible: this.state.viewSolo,
        pageNum: this.state.contentPage,
        id: "soloContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 13
        }
      }), __jsx(_SmallContent__WEBPACK_IMPORTED_MODULE_19__["default"], {
        visible: this.state.viewSmall,
        pageNum: this.state.contentPage,
        id: "smallContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 13
        }
      }), __jsx(_CorpContent__WEBPACK_IMPORTED_MODULE_20__["default"], {
        visible: this.state.viewCorp,
        pageNum: this.state.contentPage,
        id: "corpContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 13
        }
      }), __jsx(_ContactContent__WEBPACK_IMPORTED_MODULE_21__["default"], {
        visible: this.state.viewContact,
        id: "contactContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 13
        }
      }), __jsx(_Revolution__WEBPACK_IMPORTED_MODULE_22__["default"], {
        visible: this.state.viewRevolution,
        id: "revContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 13
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1445889213",
        __self: this
      }, ".App.jsx-1445889213{text-align:center;}.Signature.jsx-1445889213{font-family:Syncopate;color:rgb(192,192,192);position:fixed;left:-30px;top:-30px;z-index:5;opacity:1;pointer-events:none;}#logo.jsx-1445889213{width:250px;max-width:250px;z-index:-1;pointer-events:none;}.sigText.jsx-1445889213{font-family:Syncopate;font-size:2em;margin-top:-58%;margin-left:61%;border-top:1px solid red;border-bottom:1px solid red;width:7.5em;height:0.95em;}#revTag.jsx-1445889213{color:red;z-index:2;height:100%;}#revLink.jsx-1445889213{font-size:1.7em;height:100%;text-shadow:3px 3px black;}#banner.jsx-1445889213{border-top:1px solid red;border-bottom:1px solid red;width:80vw;margin:auto;color:white;z-index:1;opacity:0.8;}#bannerDiv.jsx-1445889213{-webkit-transform:translate(0%,150px);-ms-transform:translate(0%,150px);transform:translate(0%,150px);}@media (max-width:608px){div.jsx-1445889213 #bannerDiv.jsx-1445889213{display:none;}}div.jsx-1445889213 #buttonContainer.jsx-1445889213{position:absolute;width:80%;left:50%;top:50%;-webkit-transform:translate(-50%,-85%);-ms-transform:translate(-50%,-85%);transform:translate(-50%,-85%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vw;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}@media (max-width:608px){div.jsx-1445889213 #buttonContainer.jsx-1445889213{display:-webkit-inline-box;display:-webkit-inline-flexbox;display:-ms-inline-flexboxbox;display:inline-flexbox;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;width:150px;height:60%;top:60%;-webkit-transform:translate(-120%,-65%);-ms-transform:translate(-120%,-65%);transform:translate(-120%,-65%);}}#corpButton.jsx-1445889213{width:15vw;min-width:150px;min-height:150px;margin:4vw;}#detailContainer.jsx-1445889213{width:80vw;height:60vh;margin:auto;}#smallButton.jsx-1445889213{width:15vw;min-width:150px;min-height:150px;margin:4vw;}#soloButton.jsx-1445889213{width:15vw;min-width:150px;min-height:150px;margin:4vw;}div.jsx-1445889213 #contentContainer.jsx-1445889213{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:60vh;width:80vw;background-color:white;border-radius:8px;}#footerContainer.jsx-1445889213{width:33%;position:fixed;-webkit-transform:translate(0%,500%);-ms-transform:translate(0%,500%);transform:translate(0%,500%);margin-top:20%;}@media (max-width:608px){#footerContainer.jsx-1445889213{width:100%;position:fixed;-webkit-transform:translate(70%,50%);-ms-transform:translate(70%,50%);transform:translate(70%,50%);margin-top:0%;}}#soloButton.jsx-1445889213{z-index:20;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZMc0IsQUFJK0IsQUFJSSxBQVdWLEFBUVUsQUFXWixBQU1NLEFBTVMsQUFXNUIsQUFLa0IsQUFLSyxBQVlLLEFBVWQsQUFPQSxBQU9BLEFBT0EsQUFPTyxBQWVOLEFBUUMsQUFRRixVQWpIRCxBQWtHTyxDQTNDRCxBQU9KLEFBT0ksQUFPQSxBQThCQyxBQVFuQixDQXJJa0IsQ0ErQ2hCLEdBdEJZLEVBeENkLEFBbUVjLEFBa0RILEVBbEZHLEVBL0JhLEFBbUJYLENBMEVGLEVBbkRnQixBQXVGSSxDQVFBLENBbkRmLEFBY0EsQUFPQSxBQU9ULENBdEdHLEFBeUJlLEFBMkJmLElBaENiLEdBK0RBLEFBb0JrQyxDQS9GaEIsQ0E2Q04sRUFwRFUsS0EwRVQsQUFjQSxBQU9BLENBM0dJLEFBaUVtQixPQTdDbEIsQ0FzQkwsQ0FMYixDQWtEQSxBQWNBLEFBT0EsSUEvRkEsQ0FaYSxJQTBDQyxJQXRCYSxHQW5CZixLQTBDRSxLQXpDRixPQTBDQSxHQXpDQSxFQWtCa0IsS0F3QmhCLEdBekNRLENBOEN0QixRQUpBLENBMkJpQyxVQXBFakMsQUFpQmMsR0EwR0ssQ0FRRCxRQWpIRixNQTBHaEIsQUFRQSxDQXZCZSxPQTFGZixHQXlDaUIsZ0VBa0RJLFVBakRMLFVBUUEsRUFQaUIsVUFRbEIsV0FDSCxRQUN5QiwwQ0F1Q0wsb0RBaERoQyxjQVVFLGlEQXVDWSxZQUNELFdBQ1ksdUJBQ0wsa0JBRXBCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYWNrZ3JvdW5kVmlkZW8gZnJvbSAnLi4vcHVibGljL3ZpZGVvL0JhY2tncm91bmRWaWRlbyc7XG5pbXBvcnQgY2NvblRyaWFuZ2xlIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvY2NvblRyaWFuZ2xlLnBuZyc7XG5pbXBvcnQgU29sb0J1dHRvbiBmcm9tICcuL1NvbG9CdXR0b24nO1xuaW1wb3J0IFNtYWxsQnV0dG9uIGZyb20gJy4vU21hbGxCdXR0b24nO1xuaW1wb3J0IENvcnBCdXR0b24gZnJvbSAnLi9Db3JwQnV0dG9uJztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7XG5pbXBvcnQgQ2hldnJvblJpZ2h0IGZyb20gJy4vQ2hldnJvblJpZ2h0JztcbmltcG9ydCBDaGV2cm9uTGVmdCBmcm9tICcuL0NoZXZyb25MZWZ0JztcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICcuL0Nsb3NlQnV0dG9uJztcbmltcG9ydCBTb2xvQ29udGVudCBmcm9tICcuL1NvbG9Db250ZW50JztcbmltcG9ydCBTbWFsbENvbnRlbnQgZnJvbSAnLi9TbWFsbENvbnRlbnQnO1xuaW1wb3J0IENvcnBDb250ZW50IGZyb20gJy4vQ29ycENvbnRlbnQnO1xuaW1wb3J0IENvbnRhY3RDb250ZW50IGZyb20gJy4vQ29udGFjdENvbnRlbnQnO1xuaW1wb3J0IFJldm9sdXRpb24gZnJvbSAnLi9SZXZvbHV0aW9uJztcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIC8vIFN0YXRlIG1hbmFnZW1lbnQgYW5kIGJpbmRpbmdzXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpZXdTb2xvOiBmYWxzZSxcbiAgICAgIHZpZXdTbWFsbDogZmFsc2UsXG4gICAgICB2aWV3Q29ycDogZmFsc2UsXG4gICAgICBjb250ZW50UGFnZTogMyxcbiAgICAgIHZpZXdDb250YWN0OiBmYWxzZSxcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiBmYWxzZSxcbiAgICAgIHNvbG9UcmFuc2l0aW9uOiBcIlwiLFxuICAgICAgc21hbGxUcmFuc2l0aW9uOiBcIlwiLFxuICAgICAgY29ycFRyYW5zaXRpb246IFwiXCIsXG4gICAgfTtcblxuICAgIHRoaXMuc2VlU29sbyA9IHRoaXMuc2VlU29sby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VBbGwgPSB0aGlzLmNsb3NlQWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVTbWFsbCA9IHRoaXMuc2VlU21hbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZUNvcnAgPSB0aGlzLnNlZUNvcnAuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhZ2VSaWdodCA9IHRoaXMucGFnZVJpZ2h0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYWdlTGVmdCA9IHRoaXMucGFnZUxlZnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZUNvbnRhY3QgPSB0aGlzLnNlZUNvbnRhY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZVJldm9sdXRpb24gPSB0aGlzLnNlZVJldm9sdXRpb24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIG9iamVjdHNcbiAgXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1NvbG86IGZhbHNlLFxuICAgICAgdmlld1NtYWxsOiBmYWxzZSxcbiAgICAgIHZpZXdDb3JwOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRQYWdlOiAzLFxuICAgICAgdmlld0NvbnRhY3Q6IGZhbHNlLFxuICAgICAgdmlld1Jldm9sdXRpb246IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlU29sbygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICB2aWV3U29sbzogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBzZWVTbWFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdTbWFsbDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlZUNvcnAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3Q29ycDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlZUNvbnRhY3QoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3Q29udGFjdDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlZVJldm9sdXRpb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3UmV2b2x1dGlvbjogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNldFNvbG9TbGlkZUluKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc29sb1RyYW5zaXRpb246IFwic2xpZGVJblwiXG4gICAgfSlcbiAgfVxuXG4gIHNldFNvbG9TbGlkZU91dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNvbG9UcmFuc2l0aW9uOiBcInNsaWRlT3V0XCJcbiAgICB9KVxuICB9XG5cbiAgc2V0U21hbGxTbGlkZUluKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc21hbGxUcmFuc2l0aW9uOiBcInNsaWRlSW5cIlxuICAgIH0pXG4gIH1cblxuICBzZXRTbWFsbFNsaWRlT3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc21hbGxUcmFuc2l0aW9uOiBcInNsaWRlT3V0XCJcbiAgICB9KVxuICB9XG5cbiAgc2V0Q29ycFNsaWRlSW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb3JwVHJhbnNpdGlvbjogXCJzbGlkZUluXCJcbiAgICB9KVxuICB9XG5cbiAgc2V0Q29ycFNsaWRlT3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29ycFRyYW5zaXRpb246IFwic2xpZGVPdXRcIlxuICAgIH0pXG4gIH1cblxuICBwYWdlUmlnaHQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY29udGVudFBhZ2UgPD0gMikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29udGVudFBhZ2U6IHRoaXMuc3RhdGUuY29udGVudFBhZ2UgKyAxXG4gICAgfSl9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY29udGVudFBhZ2UgPSAzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29udGVudFBhZ2U6IDFcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcGFnZUxlZnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY29udGVudFBhZ2UgPj0gMikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29udGVudFBhZ2U6IHRoaXMuc3RhdGUuY29udGVudFBhZ2UgLSAxXG4gICAgfSl9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY29udGVudFBhZ2UgPSAxKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbnRlbnRQYWdlOiAzXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG5cbiAgLy8gUmVuZGVyZWQgb2JqZWN0c1xuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cblxuICAgICAgICA8QmFja2dyb3VuZFZpZGVvIHR5cGU9J3ZpZGVvL21wNCcgYXV0b3BsYXkgLz5cblxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2lnbmF0dXJlXCI+XG4gICAgICAgIDxpbWcgaWQ9XCJsb2dvXCIgc3JjPXtjY29uVHJpYW5nbGV9IC8+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2lnVGV4dFwiPlxuICAgICAgICAgICAgICAgIE1FVEFMU1xuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gXG4gICAgICAgIDxkaXYgaWQ9J2Jhbm5lckRpdic+XG4gICAgICAgICAgPGgyIGlkPVwiYmFubmVyXCI+XG4gICAgICAgICAgICA8YSBpZD1cInJldkxpbmtcIiBvbkNsaWNrPXt0aGlzLnNlZVJldm9sdXRpb259IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PllvdXIgX19fX19fXyA8aSBpZD1cInJldlRhZ1wiPlJFVk9MVVRJT048L2k+IGluIHRoZSBjYXRhbHl0aWMgY29udmVydGVyIG1hcmtldDwvYT5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uQ29udGFpbmVyXCIgPlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVTb2xvfSAgaWQ9XCJzb2xvQnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PFNvbG9CdXR0b24gc2hvd0NvbXBvbmVudD17dGhpcy5zZWVTb2xvfSB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTb2xvfSBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwfSAvPjwvYT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlU21hbGx9ICBpZD1cInNtYWxsQnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PFNtYWxsQnV0dG9uIHZpc2libGU9e3RoaXMuc3RhdGUudmlld1NtYWxsfSBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld0NvcnB9IC8+PC9hPlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVDb3JwfSAgaWQ9XCJjb3JwQnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PENvcnBCdXR0b24gdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3Q29ycH0gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3U29sb30gLz48L2E+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXJDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZUNvbnRhY3R9IGlkPVwiY29udGFjdEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319IGlkPVwiZm9vdGVyTGlua1wiPjxDb250YWN0IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycCB8fCB0aGlzLnN0YXRlLnZpZXdDb250YWN0IHx8IHRoaXMuc3RhdGUudmlld1Jldm9sdXRpb259PjwvQ29udGFjdD48L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgIDxkaXYgaWQ9XCJkZXRhaWxDb250YWluZXJcIj5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucGFnZVJpZ2h0fSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q2hldnJvblJpZ2h0IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0vPjwvYT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucGFnZUxlZnR9IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDaGV2cm9uTGVmdCBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnB9Lz48L2E+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmNsb3NlQWxsfSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q2xvc2VCdXR0b24gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwIHx8IHRoaXMuc3RhdGUudmlld0NvbnRhY3QgfHwgdGhpcy5zdGF0ZS52aWV3UmV2b2x1dGlvbn0vPjwvYT5cbiAgICAgICAgICAgIDxTb2xvQ29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTb2xvfSBwYWdlTnVtPXt0aGlzLnN0YXRlLmNvbnRlbnRQYWdlfSBpZD1cInNvbG9Db250ZW50XCIgLz5cbiAgICAgICAgICAgIDxTbWFsbENvbnRlbnQgdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U21hbGx9IHBhZ2VOdW09e3RoaXMuc3RhdGUuY29udGVudFBhZ2V9IGlkPVwic21hbGxDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxDb3JwQ29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdDb3JwfSBwYWdlTnVtPXt0aGlzLnN0YXRlLmNvbnRlbnRQYWdlfSBpZD1cImNvcnBDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxDb250YWN0Q29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdDb250YWN0fSBpZD1cImNvbnRhY3RDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxSZXZvbHV0aW9uIHZpc2libGU9e3RoaXMuc3RhdGUudmlld1Jldm9sdXRpb259IGlkPVwicmV2Q29udGVudFwiIC8+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgIC5BcHAge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuU2lnbmF0dXJlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTeW5jb3BhdGU7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgbGVmdDogLTMwcHg7XG4gICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2xvZ28ge1xuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIC5zaWdUZXh0IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTeW5jb3BhdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01OCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNjElO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICB3aWR0aDogNy41ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDAuOTVlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjcmV2VGFnIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjcmV2TGluayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggYmxhY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2Jhbm5lciB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2Jhbm5lckRpdiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMTUwcHgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KXtcblxuICAgICAgICAgICAgZGl2ICNiYW5uZXJEaXZ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2ICNidXR0b25Db250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC04NSUpO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE1dnc7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCkge1xuICAgICAgICAgICAgZGl2ICNidXR0b25Db250YWluZXJ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4Ym94O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgICAgICAgICAgdG9wOiA2MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjAlLCAtNjUlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2NvcnBCdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogNHZ3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNkZXRhaWxDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjc21hbGxCdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogNHZ3O1xuICAgICAgICAgIH1cbiAgIFxuICAgICAgICAgICNzb2xvQnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDE1dnc7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDR2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgZGl2ICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2Zvb3RlckNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwMCUpO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XG4gICAgICAgICAgICAjZm9vdGVyQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzAlLCA1MCUpO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNzb2xvQnV0dG9ue1xuICAgICAgICAgICAgei1pbmRleDogMjA7XG4gICAgICAgICAgfVxuICAgICBcbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\App.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidmlld1NvbG8iLCJ2aWV3U21hbGwiLCJ2aWV3Q29ycCIsImNvbnRlbnRQYWdlIiwidmlld0NvbnRhY3QiLCJ2aWV3UmV2b2x1dGlvbiIsInNvbG9UcmFuc2l0aW9uIiwic21hbGxUcmFuc2l0aW9uIiwiY29ycFRyYW5zaXRpb24iLCJzZWVTb2xvIiwiYmluZCIsImNsb3NlQWxsIiwic2VlU21hbGwiLCJzZWVDb3JwIiwicGFnZVJpZ2h0IiwicGFnZUxlZnQiLCJzZWVDb250YWN0Iiwic2VlUmV2b2x1dGlvbiIsInNldFN0YXRlIiwiY2NvblRyaWFuZ2xlIiwiY3Vyc29yIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBR01BLEc7Ozs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTixFQURpQixDQUdqQjs7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxFQUFFLEtBREM7QUFFWEMsZUFBUyxFQUFFLEtBRkE7QUFHWEMsY0FBUSxFQUFFLEtBSEM7QUFJWEMsaUJBQVcsRUFBRSxDQUpGO0FBS1hDLGlCQUFXLEVBQUUsS0FMRjtBQU1YQyxvQkFBYyxFQUFFLEtBTkw7QUFPWEMsb0JBQWMsRUFBRSxFQVBMO0FBUVhDLHFCQUFlLEVBQUUsRUFSTjtBQVNYQyxvQkFBYyxFQUFFO0FBVEwsS0FBYjtBQVlBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFDLElBQWIseUdBQWY7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FB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QUtKLEtBQUwsQ0FBV0ssV0FBcEM7QUFBaUQsVUFBRSxFQUFDLGdCQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUEgsRUFRRyxNQUFDLG9EQUFEO0FBQVksZUFBTyxFQUFFLEtBQUtMLEtBQUwsQ0FBV00sY0FBaEM7QUFBZ0QsVUFBRSxFQUFDLFlBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFSSCxDQTVCSDtBQUFBO0FBQUE7QUFBQSxtOWhCQURGO0FBcU1EOzs7O0VBelVlZ0IsNENBQUssQ0FBQ0MsUzs7QUE0VVR6QixrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNjg0Y2EzYmFmNTk1MTdhZGM4YjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFja2dyb3VuZFZpZGVvIGZyb20gJy4uL3B1YmxpYy92aWRlby9CYWNrZ3JvdW5kVmlkZW8nO1xuaW1wb3J0IGNjb25UcmlhbmdsZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2Njb25UcmlhbmdsZS5wbmcnO1xuaW1wb3J0IFNvbG9CdXR0b24gZnJvbSAnLi9Tb2xvQnV0dG9uJztcbmltcG9ydCBTbWFsbEJ1dHRvbiBmcm9tICcuL1NtYWxsQnV0dG9uJztcbmltcG9ydCBDb3JwQnV0dG9uIGZyb20gJy4vQ29ycEJ1dHRvbic7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xuaW1wb3J0IENoZXZyb25SaWdodCBmcm9tICcuL0NoZXZyb25SaWdodCc7XG5pbXBvcnQgQ2hldnJvbkxlZnQgZnJvbSAnLi9DaGV2cm9uTGVmdCc7XG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnLi9DbG9zZUJ1dHRvbic7XG5pbXBvcnQgU29sb0NvbnRlbnQgZnJvbSAnLi9Tb2xvQ29udGVudCc7XG5pbXBvcnQgU21hbGxDb250ZW50IGZyb20gJy4vU21hbGxDb250ZW50JztcbmltcG9ydCBDb3JwQ29udGVudCBmcm9tICcuL0NvcnBDb250ZW50JztcbmltcG9ydCBDb250YWN0Q29udGVudCBmcm9tICcuL0NvbnRhY3RDb250ZW50JztcbmltcG9ydCBSZXZvbHV0aW9uIGZyb20gJy4vUmV2b2x1dGlvbic7XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyBTdGF0ZSBtYW5hZ2VtZW50IGFuZCBiaW5kaW5nc1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aWV3U29sbzogZmFsc2UsXG4gICAgICB2aWV3U21hbGw6IGZhbHNlLFxuICAgICAgdmlld0NvcnA6IGZhbHNlLFxuICAgICAgY29udGVudFBhZ2U6IDMsXG4gICAgICB2aWV3Q29udGFjdDogZmFsc2UsXG4gICAgICB2aWV3UmV2b2x1dGlvbjogZmFsc2UsXG4gICAgICBzb2xvVHJhbnNpdGlvbjogXCJcIixcbiAgICAgIHNtYWxsVHJhbnNpdGlvbjogXCJcIixcbiAgICAgIGNvcnBUcmFuc2l0aW9uOiBcIlwiLFxuICAgIH07XG5cbiAgICB0aGlzLnNlZVNvbG8gPSB0aGlzLnNlZVNvbG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlQWxsID0gdGhpcy5jbG9zZUFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlU21hbGwgPSB0aGlzLnNlZVNtYWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVDb3JwID0gdGhpcy5zZWVDb3JwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYWdlUmlnaHQgPSB0aGlzLnBhZ2VSaWdodC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFnZUxlZnQgPSB0aGlzLnBhZ2VMZWZ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVDb250YWN0ID0gdGhpcy5zZWVDb250YWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVSZXZvbHV0aW9uID0gdGhpcy5zZWVSZXZvbHV0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyBGdW5jdGlvbiBvYmplY3RzXG4gIFxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdTb2xvOiBmYWxzZSxcbiAgICAgIHZpZXdTbWFsbDogZmFsc2UsXG4gICAgICB2aWV3Q29ycDogZmFsc2UsXG4gICAgICBjb250ZW50UGFnZTogMyxcbiAgICAgIHZpZXdDb250YWN0OiBmYWxzZSxcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlZVNvbG8oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgdmlld1NvbG86IHRydWUsXG4gICAgfSkpO1xuICB9XG5cbiAgc2VlU21hbGwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3U21hbGw6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZWVDb3JwKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld0NvcnA6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZWVDb250YWN0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld0NvbnRhY3Q6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZWVSZXZvbHV0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1Jldm9sdXRpb246IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZXRTb2xvU2xpZGVJbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNvbG9UcmFuc2l0aW9uOiBcInNsaWRlSW5cIlxuICAgIH0pXG4gIH1cblxuICBzZXRTb2xvU2xpZGVPdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzb2xvVHJhbnNpdGlvbjogXCJzbGlkZU91dFwiXG4gICAgfSlcbiAgfVxuXG4gIHNldFNtYWxsU2xpZGVJbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNtYWxsVHJhbnNpdGlvbjogXCJzbGlkZUluXCJcbiAgICB9KVxuICB9XG5cbiAgc2V0U21hbGxTbGlkZU91dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNtYWxsVHJhbnNpdGlvbjogXCJzbGlkZU91dFwiXG4gICAgfSlcbiAgfVxuXG4gIHNldENvcnBTbGlkZUluKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29ycFRyYW5zaXRpb246IFwic2xpZGVJblwiXG4gICAgfSlcbiAgfVxuXG4gIHNldENvcnBTbGlkZU91dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvcnBUcmFuc2l0aW9uOiBcInNsaWRlT3V0XCJcbiAgICB9KVxuICB9XG5cbiAgcGFnZVJpZ2h0KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlIDw9IDIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbnRlbnRQYWdlOiB0aGlzLnN0YXRlLmNvbnRlbnRQYWdlICsgMVxuICAgIH0pfSBlbHNlIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlID0gMykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbnRlbnRQYWdlOiAxXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHBhZ2VMZWZ0KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlID49IDIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbnRlbnRQYWdlOiB0aGlzLnN0YXRlLmNvbnRlbnRQYWdlIC0gMVxuICAgIH0pfSBlbHNlIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlID0gMSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250ZW50UGFnZTogM1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuXG4gIC8vIFJlbmRlcmVkIG9iamVjdHNcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG5cbiAgICAgICAgPEJhY2tncm91bmRWaWRlbyB0eXBlPSd2aWRlby9tcDQnIGF1dG9wbGF5IC8+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpZ25hdHVyZVwiPlxuICAgICAgICA8aW1nIGlkPVwibG9nb1wiIHNyYz17Y2NvblRyaWFuZ2xlfSAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNpZ1RleHRcIj5cbiAgICAgICAgICAgICAgICBNRVRBTFNcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuIFxuICAgICAgICA8ZGl2IGlkPSdiYW5uZXJEaXYnPlxuICAgICAgICAgIDxoMiBpZD1cImJhbm5lclwiPlxuICAgICAgICAgICAgPGEgaWQ9XCJyZXZMaW5rXCIgb25DbGljaz17dGhpcy5zZWVSZXZvbHV0aW9ufSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5Zb3VyIF9fX19fX18gPGkgaWQ9XCJyZXZUYWdcIj5SRVZPTFVUSU9OPC9pPiBpbiB0aGUgY2F0YWx5dGljIGNvbnZlcnRlciBtYXJrZXQ8L2E+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbkNvbnRhaW5lclwiID5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlU29sb30gIGlkPVwic29sb0J1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxTb2xvQnV0dG9uIHNob3dDb21wb25lbnQ9e3RoaXMuc2VlU29sb30gdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U29sb30gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0gLz48L2E+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZVNtYWxsfSAgaWQ9XCJzbWFsbEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxTbWFsbEJ1dHRvbiB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbH0gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwfSAvPjwvYT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlQ29ycH0gIGlkPVwiY29ycEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDb3JwQnV0dG9uIHZpc2libGU9e3RoaXMuc3RhdGUudmlld0NvcnB9IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld1NvbG99IC8+PC9hPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVDb250YWN0fSBpZD1cImNvbnRhY3RCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fSBpZD1cImZvb3RlckxpbmtcIj48Q29udGFjdCBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnAgfHwgdGhpcy5zdGF0ZS52aWV3Q29udGFjdCB8fCB0aGlzLnN0YXRlLnZpZXdSZXZvbHV0aW9ufT48L0NvbnRhY3Q+PC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8ZGl2IGlkPVwiZGV0YWlsQ29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnBhZ2VSaWdodH0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PENoZXZyb25SaWdodCBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnB9Lz48L2E+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnBhZ2VMZWZ0fSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q2hldnJvbkxlZnQgYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwfS8+PC9hPlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5jbG9zZUFsbH0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PENsb3NlQnV0dG9uIGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycCB8fCB0aGlzLnN0YXRlLnZpZXdDb250YWN0IHx8IHRoaXMuc3RhdGUudmlld1Jldm9sdXRpb259Lz48L2E+XG4gICAgICAgICAgICA8U29sb0NvbnRlbnQgdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U29sb30gcGFnZU51bT17dGhpcy5zdGF0ZS5jb250ZW50UGFnZX0gaWQ9XCJzb2xvQ29udGVudFwiIC8+XG4gICAgICAgICAgICA8U21hbGxDb250ZW50IHZpc2libGU9e3RoaXMuc3RhdGUudmlld1NtYWxsfSBwYWdlTnVtPXt0aGlzLnN0YXRlLmNvbnRlbnRQYWdlfSBpZD1cInNtYWxsQ29udGVudFwiIC8+XG4gICAgICAgICAgICA8Q29ycENvbnRlbnQgdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3Q29ycH0gcGFnZU51bT17dGhpcy5zdGF0ZS5jb250ZW50UGFnZX0gaWQ9XCJjb3JwQ29udGVudFwiIC8+XG4gICAgICAgICAgICA8Q29udGFjdENvbnRlbnQgdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3Q29udGFjdH0gaWQ9XCJjb250YWN0Q29udGVudFwiIC8+XG4gICAgICAgICAgICA8UmV2b2x1dGlvbiB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdSZXZvbHV0aW9ufSBpZD1cInJldkNvbnRlbnRcIiAvPlxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAuQXBwIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLlNpZ25hdHVyZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogU3luY29wYXRlO1xuICAgICAgICAgICAgY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGxlZnQ6IC0zMHB4O1xuICAgICAgICAgICAgdG9wOiAtMzBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNsb2dvIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAuc2lnVGV4dCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogU3luY29wYXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTglO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDYxJTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgd2lkdGg6IDcuNWVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAwLjk1ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI3JldlRhZyB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3Jldkxpbmsge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IGJsYWNrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNiYW5uZXIge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNiYW5uZXJEaXYge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDE1MHB4KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCl7XG5cbiAgICAgICAgICAgIGRpdiAjYmFubmVyRGl2e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpdiAjYnV0dG9uQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtODUlKTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNXZ3O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjA4cHgpIHtcbiAgICAgICAgICAgIGRpdiAjYnV0dG9uQ29udGFpbmVye1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleGJveDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgICAgICAgIHRvcDogNjAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTIwJSwgLTY1JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNjb3JwQnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDE1dnc7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDR2dztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjZGV0YWlsQ29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI3NtYWxsQnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDE1dnc7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDR2dztcbiAgICAgICAgICB9XG4gICBcbiAgICAgICAgICAjc29sb0J1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA0dnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGRpdiAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNmb290ZXJDb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1MDAlKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCkge1xuICAgICAgICAgICAgI2Zvb3RlckNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDcwJSwgNTAlKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjc29sb0J1dHRvbntcbiAgICAgICAgICAgIHotaW5kZXg6IDIwO1xuICAgICAgICAgIH1cbiAgICAgXG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9