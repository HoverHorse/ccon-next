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
        className: "jsx-863325929" + " " + "App",
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
        className: "jsx-863325929" + " " + "Signature",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 9
        }
      }, __jsx("img", {
        id: "logo",
        src: _public_assets_cconTriangle_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-863325929",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 9
        }
      }), __jsx("h1", {
        className: "jsx-863325929" + " " + "sigText",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }
      }, "METALS")), __jsx("div", {
        id: "bannerDiv",
        className: "jsx-863325929",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 9
        }
      }, __jsx("h2", {
        id: "banner",
        className: "jsx-863325929",
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
        className: "jsx-863325929",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }
      }, "Your _______ ", __jsx("i", {
        id: "revTag",
        className: "jsx-863325929",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 98
        }
      }, "REVOLUTION"), " in the catalytic converter market"))), __jsx("div", {
        id: "buttonContainer",
        className: "jsx-863325929",
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
        className: "jsx-863325929",
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
        className: "jsx-863325929",
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
        className: "jsx-863325929",
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
        className: "jsx-863325929",
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
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "id", "footerLink"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "jsx-863325929"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
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
        className: "jsx-863325929",
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
        className: "jsx-863325929",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 13
        }
      }, __jsx(_ChevronRight__WEBPACK_IMPORTED_MODULE_15__["default"], {
        id: "chevronRightButton",
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
        className: "jsx-863325929",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 13
        }
      }, __jsx(_ChevronLeft__WEBPACK_IMPORTED_MODULE_16__["default"], {
        id: "chevronLeftButton",
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
        className: "jsx-863325929",
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
        id: "863325929",
        __self: this
      }, ".App.jsx-863325929{text-align:center;}.Signature.jsx-863325929{font-family:Syncopate;color:rgb(192,192,192);position:fixed;left:-30px;top:-30px;z-index:5;opacity:1;pointer-events:none;}#logo.jsx-863325929{width:250px;max-width:250px;z-index:-1;pointer-events:none;}.sigText.jsx-863325929{font-family:Syncopate;font-size:2em;margin-top:-58%;margin-left:61%;border-top:1px solid red;border-bottom:1px solid red;width:7.5em;height:0.95em;}#revTag.jsx-863325929{color:red;z-index:2;height:100%;}#revLink.jsx-863325929{font-size:1.7em;height:100%;text-shadow:3px 3px black;}#banner.jsx-863325929{border-top:1px solid red;border-bottom:1px solid red;width:80vw;margin:auto;color:white;z-index:1;opacity:0.8;}#bannerDiv.jsx-863325929{-webkit-transform:translate(0%,150px);-ms-transform:translate(0%,150px);transform:translate(0%,150px);}@media (max-width:608px){div.jsx-863325929 #bannerDiv.jsx-863325929{display:none;}}div.jsx-863325929 #buttonContainer.jsx-863325929{position:absolute;width:80%;left:50%;top:50%;-webkit-transform:translate(-50%,-85%);-ms-transform:translate(-50%,-85%);transform:translate(-50%,-85%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vw;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}@media (max-width:608px){div.jsx-863325929 #buttonContainer.jsx-863325929{display:-webkit-inline-box;display:-webkit-inline-flexbox;display:-ms-inline-flexboxbox;display:inline-flexbox;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;width:150px;height:60%;top:60%;-webkit-transform:translate(-120%,-65%);-ms-transform:translate(-120%,-65%);transform:translate(-120%,-65%);}}#corpButton.jsx-863325929{width:15vw;min-width:150px;min-height:150px;margin:4vw;}#chevronLeftButton.jsx-863325929{-webkit-transform:translate(0%,-10%);-ms-transform:translate(0%,-10%);transform:translate(0%,-10%);}#detailContainer.jsx-863325929{margin:auto;-webkit-transform:translate(0px,50vh);-ms-transform:translate(0px,50vh);transform:translate(0px,50vh);}#smallButton.jsx-863325929{width:15vw;min-width:150px;min-height:150px;margin:4vw;}#soloButton.jsx-863325929{width:15vw;min-width:150px;min-height:150px;margin:4vw;}div.jsx-863325929 #contentContainer.jsx-863325929{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:60vh;width:80vw;background-color:white;border-radius:8px;}#footerContainer.jsx-863325929{width:33%;position:fixed;-webkit-transform:translate(0%,500%);-ms-transform:translate(0%,500%);transform:translate(0%,500%);margin-top:20%;}@media (max-width:608px){#footerContainer.jsx-863325929{width:100%;position:fixed;-webkit-transform:translate(70%,50%);-ms-transform:translate(70%,50%);transform:translate(70%,50%);margin-top:0%;}}#soloButton.jsx-863325929{z-index:20;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZMc0IsQUFJK0IsQUFJSSxBQVdWLEFBUVUsQUFXWixBQU1NLEFBTVMsQUFXNUIsQUFLa0IsQUFLSyxBQVlLLEFBVWQsQUFZZCxBQUdlLEFBS0QsQUFPQSxBQU9PLEFBZU4sQUFRQyxBQVFGLFVBdkhELEFBd0dPLENBakRELEFBb0JBLEFBT0EsQUE4QkMsQUFRbkIsQ0EzSWtCLEFBMEZuQixDQTNDRyxHQXRCWSxFQXhDZCxBQW1FYyxBQXdESCxFQXhGRyxFQS9CYSxBQW1CWCxHQXVCYyxBQTZGSSxDQVFBLENBekRmLEFBb0JBLEFBT0EsQUFPVCxDQTVHRyxBQXlCZSxBQTJCZixJQWhDYixHQXlGa0MsQ0FyR2hCLENBNkNOLEVBcERVLEtBMEVULEFBb0JBLEFBT0EsQ0FqSEksQUFpRW1CLE9BN0NsQixDQXNCTCxDQUxiLENBa0RBLEFBb0JBLEFBT0EsSUFyR0EsQ0FaYSxJQTBDQyxJQXRCYSxHQW5CZixLQTBDRSxLQXpDRixPQTBDQSxHQXpDQSxFQWtCa0IsS0F3QmhCLENBaURkLEVBMUZzQixDQThDdEIsUUFKQSxDQTJCaUMsR0EwQmpDLE9BOUZBLEFBaUJjLEdBZ0hLLENBUUQsUUF2SEYsTUFnSGhCLEFBUUEsQ0F2QmUsT0FoR2YsR0F5Q2lCLGdFQXdESSxVQXZETCxVQVFBLEVBUGlCLFVBUWxCLFdBQ0gsUUFDeUIsMENBNkNMLG9EQXREaEMsY0FVRSxpREE2Q1ksWUFDRCxXQUNZLHVCQUNMLGtCQUVwQiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFja2dyb3VuZFZpZGVvIGZyb20gJy4uL3B1YmxpYy92aWRlby9CYWNrZ3JvdW5kVmlkZW8nO1xuaW1wb3J0IGNjb25UcmlhbmdsZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2Njb25UcmlhbmdsZS5wbmcnO1xuaW1wb3J0IFNvbG9CdXR0b24gZnJvbSAnLi9Tb2xvQnV0dG9uJztcbmltcG9ydCBTbWFsbEJ1dHRvbiBmcm9tICcuL1NtYWxsQnV0dG9uJztcbmltcG9ydCBDb3JwQnV0dG9uIGZyb20gJy4vQ29ycEJ1dHRvbic7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xuaW1wb3J0IENoZXZyb25SaWdodCBmcm9tICcuL0NoZXZyb25SaWdodCc7XG5pbXBvcnQgQ2hldnJvbkxlZnQgZnJvbSAnLi9DaGV2cm9uTGVmdCc7XG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnLi9DbG9zZUJ1dHRvbic7XG5pbXBvcnQgU29sb0NvbnRlbnQgZnJvbSAnLi9Tb2xvQ29udGVudCc7XG5pbXBvcnQgU21hbGxDb250ZW50IGZyb20gJy4vU21hbGxDb250ZW50JztcbmltcG9ydCBDb3JwQ29udGVudCBmcm9tICcuL0NvcnBDb250ZW50JztcbmltcG9ydCBDb250YWN0Q29udGVudCBmcm9tICcuL0NvbnRhY3RDb250ZW50JztcbmltcG9ydCBSZXZvbHV0aW9uIGZyb20gJy4vUmV2b2x1dGlvbic7XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyBTdGF0ZSBtYW5hZ2VtZW50IGFuZCBiaW5kaW5nc1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aWV3U29sbzogZmFsc2UsXG4gICAgICB2aWV3U21hbGw6IGZhbHNlLFxuICAgICAgdmlld0NvcnA6IGZhbHNlLFxuICAgICAgY29udGVudFBhZ2U6IDMsXG4gICAgICB2aWV3Q29udGFjdDogZmFsc2UsXG4gICAgICB2aWV3UmV2b2x1dGlvbjogZmFsc2UsXG4gICAgICBzb2xvVHJhbnNpdGlvbjogXCJcIixcbiAgICAgIHNtYWxsVHJhbnNpdGlvbjogXCJcIixcbiAgICAgIGNvcnBUcmFuc2l0aW9uOiBcIlwiLFxuICAgIH07XG5cbiAgICB0aGlzLnNlZVNvbG8gPSB0aGlzLnNlZVNvbG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlQWxsID0gdGhpcy5jbG9zZUFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlU21hbGwgPSB0aGlzLnNlZVNtYWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVDb3JwID0gdGhpcy5zZWVDb3JwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYWdlUmlnaHQgPSB0aGlzLnBhZ2VSaWdodC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFnZUxlZnQgPSB0aGlzLnBhZ2VMZWZ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVDb250YWN0ID0gdGhpcy5zZWVDb250YWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVSZXZvbHV0aW9uID0gdGhpcy5zZWVSZXZvbHV0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyBGdW5jdGlvbiBvYmplY3RzXG4gIFxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdTb2xvOiBmYWxzZSxcbiAgICAgIHZpZXdTbWFsbDogZmFsc2UsXG4gICAgICB2aWV3Q29ycDogZmFsc2UsXG4gICAgICBjb250ZW50UGFnZTogMyxcbiAgICAgIHZpZXdDb250YWN0OiBmYWxzZSxcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlZVNvbG8oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgdmlld1NvbG86IHRydWUsXG4gICAgfSkpO1xuICB9XG5cbiAgc2VlU21hbGwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3U21hbGw6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZWVDb3JwKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld0NvcnA6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZWVDb250YWN0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld0NvbnRhY3Q6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZWVSZXZvbHV0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1Jldm9sdXRpb246IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBzZXRTb2xvU2xpZGVJbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNvbG9UcmFuc2l0aW9uOiBcInNsaWRlSW5cIlxuICAgIH0pXG4gIH1cblxuICBzZXRTb2xvU2xpZGVPdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzb2xvVHJhbnNpdGlvbjogXCJzbGlkZU91dFwiXG4gICAgfSlcbiAgfVxuXG4gIHNldFNtYWxsU2xpZGVJbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNtYWxsVHJhbnNpdGlvbjogXCJzbGlkZUluXCJcbiAgICB9KVxuICB9XG5cbiAgc2V0U21hbGxTbGlkZU91dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNtYWxsVHJhbnNpdGlvbjogXCJzbGlkZU91dFwiXG4gICAgfSlcbiAgfVxuXG4gIHNldENvcnBTbGlkZUluKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29ycFRyYW5zaXRpb246IFwic2xpZGVJblwiXG4gICAgfSlcbiAgfVxuXG4gIHNldENvcnBTbGlkZU91dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvcnBUcmFuc2l0aW9uOiBcInNsaWRlT3V0XCJcbiAgICB9KVxuICB9XG5cbiAgcGFnZVJpZ2h0KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlIDw9IDIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbnRlbnRQYWdlOiB0aGlzLnN0YXRlLmNvbnRlbnRQYWdlICsgMVxuICAgIH0pfSBlbHNlIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlID0gMykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbnRlbnRQYWdlOiAxXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHBhZ2VMZWZ0KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlID49IDIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbnRlbnRQYWdlOiB0aGlzLnN0YXRlLmNvbnRlbnRQYWdlIC0gMVxuICAgIH0pfSBlbHNlIGlmICh0aGlzLnN0YXRlLmNvbnRlbnRQYWdlID0gMSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250ZW50UGFnZTogM1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuXG4gIC8vIFJlbmRlcmVkIG9iamVjdHNcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG5cbiAgICAgICAgPEJhY2tncm91bmRWaWRlbyB0eXBlPSd2aWRlby9tcDQnIGF1dG9wbGF5IC8+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpZ25hdHVyZVwiPlxuICAgICAgICA8aW1nIGlkPVwibG9nb1wiIHNyYz17Y2NvblRyaWFuZ2xlfSAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNpZ1RleHRcIj5cbiAgICAgICAgICAgICAgICBNRVRBTFNcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuIFxuICAgICAgICA8ZGl2IGlkPSdiYW5uZXJEaXYnPlxuICAgICAgICAgIDxoMiBpZD1cImJhbm5lclwiPlxuICAgICAgICAgICAgPGEgaWQ9XCJyZXZMaW5rXCIgb25DbGljaz17dGhpcy5zZWVSZXZvbHV0aW9ufSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5Zb3VyIF9fX19fX18gPGkgaWQ9XCJyZXZUYWdcIj5SRVZPTFVUSU9OPC9pPiBpbiB0aGUgY2F0YWx5dGljIGNvbnZlcnRlciBtYXJrZXQ8L2E+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbkNvbnRhaW5lclwiID5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlU29sb30gIGlkPVwic29sb0J1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxTb2xvQnV0dG9uIHNob3dDb21wb25lbnQ9e3RoaXMuc2VlU29sb30gdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U29sb30gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0gLz48L2E+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZVNtYWxsfSAgaWQ9XCJzbWFsbEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxTbWFsbEJ1dHRvbiB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbH0gYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwfSAvPjwvYT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlQ29ycH0gIGlkPVwiY29ycEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDb3JwQnV0dG9uIHZpc2libGU9e3RoaXMuc3RhdGUudmlld0NvcnB9IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld1NvbG99IC8+PC9hPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVDb250YWN0fSBpZD1cImNvbnRhY3RCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fSBpZD1cImZvb3RlckxpbmtcIj48Q29udGFjdCBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnAgfHwgdGhpcy5zdGF0ZS52aWV3Q29udGFjdCB8fCB0aGlzLnN0YXRlLnZpZXdSZXZvbHV0aW9ufT48L0NvbnRhY3Q+PC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8ZGl2IGlkPVwiZGV0YWlsQ29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnBhZ2VSaWdodH0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PENoZXZyb25SaWdodCBpZD1cImNoZXZyb25SaWdodEJ1dHRvblwiIGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0vPjwvYT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucGFnZUxlZnR9IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDaGV2cm9uTGVmdCBpZD1cImNoZXZyb25MZWZ0QnV0dG9uXCIgYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwfS8+PC9hPlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5jbG9zZUFsbH0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PENsb3NlQnV0dG9uIGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycCB8fCB0aGlzLnN0YXRlLnZpZXdDb250YWN0IHx8IHRoaXMuc3RhdGUudmlld1Jldm9sdXRpb259Lz48L2E+XG4gICAgICAgICAgICA8U29sb0NvbnRlbnQgdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U29sb30gcGFnZU51bT17dGhpcy5zdGF0ZS5jb250ZW50UGFnZX0gaWQ9XCJzb2xvQ29udGVudFwiIC8+XG4gICAgICAgICAgICA8U21hbGxDb250ZW50IHZpc2libGU9e3RoaXMuc3RhdGUudmlld1NtYWxsfSBwYWdlTnVtPXt0aGlzLnN0YXRlLmNvbnRlbnRQYWdlfSBpZD1cInNtYWxsQ29udGVudFwiIC8+XG4gICAgICAgICAgICA8Q29ycENvbnRlbnQgdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3Q29ycH0gcGFnZU51bT17dGhpcy5zdGF0ZS5jb250ZW50UGFnZX0gaWQ9XCJjb3JwQ29udGVudFwiIC8+XG4gICAgICAgICAgICA8Q29udGFjdENvbnRlbnQgdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3Q29udGFjdH0gaWQ9XCJjb250YWN0Q29udGVudFwiIC8+XG4gICAgICAgICAgICA8UmV2b2x1dGlvbiB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdSZXZvbHV0aW9ufSBpZD1cInJldkNvbnRlbnRcIiAvPlxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAuQXBwIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLlNpZ25hdHVyZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogU3luY29wYXRlO1xuICAgICAgICAgICAgY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGxlZnQ6IC0zMHB4O1xuICAgICAgICAgICAgdG9wOiAtMzBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNsb2dvIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAuc2lnVGV4dCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogU3luY29wYXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTglO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDYxJTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgd2lkdGg6IDcuNWVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAwLjk1ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI3JldlRhZyB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3Jldkxpbmsge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IGJsYWNrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNiYW5uZXIge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNiYW5uZXJEaXYge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDE1MHB4KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCl7XG5cbiAgICAgICAgICAgIGRpdiAjYmFubmVyRGl2e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpdiAjYnV0dG9uQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtODUlKTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNXZ3O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjA4cHgpIHtcbiAgICAgICAgICAgIGRpdiAjYnV0dG9uQ29udGFpbmVye1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleGJveDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgICAgICAgIHRvcDogNjAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTIwJSwgLTY1JSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNjb3JwQnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDE1dnc7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDR2dztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjY2hldnJvblJpZ2h0QnV0dG9uIHtcblxuICAgICAgICAgIH1cblxuICAgICAgICAgICNjaGV2cm9uTGVmdEJ1dHRvbiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTEwJSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjZGV0YWlsQ29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgNTB2aClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjc21hbGxCdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogNHZ3O1xuICAgICAgICAgIH1cbiAgIFxuICAgICAgICAgICNzb2xvQnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDE1dnc7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDR2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgZGl2ICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2Zvb3RlckNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwMCUpO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XG4gICAgICAgICAgICAjZm9vdGVyQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzAlLCA1MCUpO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNzb2xvQnV0dG9ue1xuICAgICAgICAgICAgei1pbmRleDogMjA7XG4gICAgICAgICAgfVxuICAgICBcbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\App.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwidmlld1NvbG8iLCJ2aWV3U21hbGwiLCJ2aWV3Q29ycCIsImNvbnRlbnRQYWdlIiwidmlld0NvbnRhY3QiLCJ2aWV3UmV2b2x1dGlvbiIsInNvbG9UcmFuc2l0aW9uIiwic21hbGxUcmFuc2l0aW9uIiwiY29ycFRyYW5zaXRpb24iLCJzZWVTb2xvIiwiYmluZCIsImNsb3NlQWxsIiwic2VlU21hbGwiLCJzZWVDb3JwIiwicGFnZVJpZ2h0IiwicGFnZUxlZnQiLCJzZWVDb250YWN0Iiwic2VlUmV2b2x1dGlvbiIsInNldFN0YXRlIiwiY2NvblRyaWFuZ2xlIiwiY3Vyc29yIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBR01BLEc7Ozs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTixFQURpQixDQUdqQjs7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxFQUFFLEtBREM7QUFFWEMsZUFBUyxFQUFFLEtBRkE7QUFHWEMsY0FBUSxFQUFFLEtBSEM7QUFJWEMsaUJBQVcsRUFBRSxDQUpGO0FBS1hDLGlCQUFXLEVBQUUsS0FMRjtBQU1YQyxvQkFBYyxFQUFFLEtBTkw7QUFPWEMsb0JBQWMsRUFBRSxFQVBMO0FBUVhDLHFCQUFlLEVBQUUsRUFSTjtBQVNYQyxvQkFBYyxFQUFFO0FBVEwsS0FBYjtBQVlBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFDLElBQWIseUdBQWY7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FB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QTtBQUFBLFFBTkgsRUFPRyxNQUFDLHdEQUFEO0FBQWdCLGVBQU8sRUFBRSxLQUFLSixLQUFMLENBQVdLLFdBQXBDO0FBQWlELFVBQUUsRUFBQyxnQkFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVBILEVBUUcsTUFBQyxvREFBRDtBQUFZLGVBQU8sRUFBRSxLQUFLTCxLQUFMLENBQVdNLGNBQWhDO0FBQWdELFVBQUUsRUFBQyxZQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUkgsQ0E1Qkg7QUFBQTtBQUFBO0FBQUEsZzRpQkFERjtBQTJNRDs7OztFQS9VZWdCLDRDQUFLLENBQUNDLFM7O0FBa1ZUekIsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjRiNTcxYTk2MGE5MDhkMTFhNmExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhY2tncm91bmRWaWRlbyBmcm9tICcuLi9wdWJsaWMvdmlkZW8vQmFja2dyb3VuZFZpZGVvJztcbmltcG9ydCBjY29uVHJpYW5nbGUgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9jY29uVHJpYW5nbGUucG5nJztcbmltcG9ydCBTb2xvQnV0dG9uIGZyb20gJy4vU29sb0J1dHRvbic7XG5pbXBvcnQgU21hbGxCdXR0b24gZnJvbSAnLi9TbWFsbEJ1dHRvbic7XG5pbXBvcnQgQ29ycEJ1dHRvbiBmcm9tICcuL0NvcnBCdXR0b24nO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcbmltcG9ydCBDaGV2cm9uUmlnaHQgZnJvbSAnLi9DaGV2cm9uUmlnaHQnO1xuaW1wb3J0IENoZXZyb25MZWZ0IGZyb20gJy4vQ2hldnJvbkxlZnQnO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJy4vQ2xvc2VCdXR0b24nO1xuaW1wb3J0IFNvbG9Db250ZW50IGZyb20gJy4vU29sb0NvbnRlbnQnO1xuaW1wb3J0IFNtYWxsQ29udGVudCBmcm9tICcuL1NtYWxsQ29udGVudCc7XG5pbXBvcnQgQ29ycENvbnRlbnQgZnJvbSAnLi9Db3JwQ29udGVudCc7XG5pbXBvcnQgQ29udGFjdENvbnRlbnQgZnJvbSAnLi9Db250YWN0Q29udGVudCc7XG5pbXBvcnQgUmV2b2x1dGlvbiBmcm9tICcuL1Jldm9sdXRpb24nO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgLy8gU3RhdGUgbWFuYWdlbWVudCBhbmQgYmluZGluZ3NcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlld1NvbG86IGZhbHNlLFxuICAgICAgdmlld1NtYWxsOiBmYWxzZSxcbiAgICAgIHZpZXdDb3JwOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRQYWdlOiAzLFxuICAgICAgdmlld0NvbnRhY3Q6IGZhbHNlLFxuICAgICAgdmlld1Jldm9sdXRpb246IGZhbHNlLFxuICAgICAgc29sb1RyYW5zaXRpb246IFwiXCIsXG4gICAgICBzbWFsbFRyYW5zaXRpb246IFwiXCIsXG4gICAgICBjb3JwVHJhbnNpdGlvbjogXCJcIixcbiAgICB9O1xuXG4gICAgdGhpcy5zZWVTb2xvID0gdGhpcy5zZWVTb2xvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZUFsbCA9IHRoaXMuY2xvc2VBbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZVNtYWxsID0gdGhpcy5zZWVTbWFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlQ29ycCA9IHRoaXMuc2VlQ29ycC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFnZVJpZ2h0ID0gdGhpcy5wYWdlUmlnaHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhZ2VMZWZ0ID0gdGhpcy5wYWdlTGVmdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlQ29udGFjdCA9IHRoaXMuc2VlQ29udGFjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlUmV2b2x1dGlvbiA9IHRoaXMuc2VlUmV2b2x1dGlvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gb2JqZWN0c1xuICBcbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3U29sbzogZmFsc2UsXG4gICAgICB2aWV3U21hbGw6IGZhbHNlLFxuICAgICAgdmlld0NvcnA6IGZhbHNlLFxuICAgICAgY29udGVudFBhZ2U6IDMsXG4gICAgICB2aWV3Q29udGFjdDogZmFsc2UsXG4gICAgICB2aWV3UmV2b2x1dGlvbjogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBzZWVTb2xvKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIHZpZXdTb2xvOiB0cnVlLFxuICAgIH0pKTtcbiAgfVxuXG4gIHNlZVNtYWxsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1NtYWxsOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlQ29ycCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdDb3JwOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlQ29udGFjdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdDb250YWN0OiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlUmV2b2x1dGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U29sb1NsaWRlSW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzb2xvVHJhbnNpdGlvbjogXCJzbGlkZUluXCJcbiAgICB9KVxuICB9XG5cbiAgc2V0U29sb1NsaWRlT3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc29sb1RyYW5zaXRpb246IFwic2xpZGVPdXRcIlxuICAgIH0pXG4gIH1cblxuICBzZXRTbWFsbFNsaWRlSW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzbWFsbFRyYW5zaXRpb246IFwic2xpZGVJblwiXG4gICAgfSlcbiAgfVxuXG4gIHNldFNtYWxsU2xpZGVPdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzbWFsbFRyYW5zaXRpb246IFwic2xpZGVPdXRcIlxuICAgIH0pXG4gIH1cblxuICBzZXRDb3JwU2xpZGVJbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvcnBUcmFuc2l0aW9uOiBcInNsaWRlSW5cIlxuICAgIH0pXG4gIH1cblxuICBzZXRDb3JwU2xpZGVPdXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb3JwVHJhbnNpdGlvbjogXCJzbGlkZU91dFwiXG4gICAgfSlcbiAgfVxuXG4gIHBhZ2VSaWdodCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA8PSAyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250ZW50UGFnZTogdGhpcy5zdGF0ZS5jb250ZW50UGFnZSArIDFcbiAgICB9KX0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA9IDMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250ZW50UGFnZTogMVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwYWdlTGVmdCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA+PSAyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250ZW50UGFnZTogdGhpcy5zdGF0ZS5jb250ZW50UGFnZSAtIDFcbiAgICB9KX0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jb250ZW50UGFnZSA9IDEpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29udGVudFBhZ2U6IDNcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cblxuICAvLyBSZW5kZXJlZCBvYmplY3RzXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuXG4gICAgICAgIDxCYWNrZ3JvdW5kVmlkZW8gdHlwZT0ndmlkZW8vbXA0JyBhdXRvcGxheSAvPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaWduYXR1cmVcIj5cbiAgICAgICAgPGltZyBpZD1cImxvZ29cIiBzcmM9e2Njb25UcmlhbmdsZX0gLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzaWdUZXh0XCI+XG4gICAgICAgICAgICAgICAgTUVUQUxTXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiBcbiAgICAgICAgPGRpdiBpZD0nYmFubmVyRGl2Jz5cbiAgICAgICAgICA8aDIgaWQ9XCJiYW5uZXJcIj5cbiAgICAgICAgICAgIDxhIGlkPVwicmV2TGlua1wiIG9uQ2xpY2s9e3RoaXMuc2VlUmV2b2x1dGlvbn0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+WW91ciBfX19fX19fIDxpIGlkPVwicmV2VGFnXCI+UkVWT0xVVElPTjwvaT4gaW4gdGhlIGNhdGFseXRpYyBjb252ZXJ0ZXIgbWFya2V0PC9hPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25Db250YWluZXJcIiA+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZVNvbG99ICBpZD1cInNvbG9CdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48U29sb0J1dHRvbiBzaG93Q29tcG9uZW50PXt0aGlzLnNlZVNvbG99IHZpc2libGU9e3RoaXMuc3RhdGUudmlld1NvbG99IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnB9IC8+PC9hPlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVTbWFsbH0gIGlkPVwic21hbGxCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48U21hbGxCdXR0b24gdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3U21hbGx9IGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0gLz48L2E+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZUNvcnB9ICBpZD1cImNvcnBCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q29ycEJ1dHRvbiB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdDb3JwfSBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdTb2xvfSAvPjwvYT5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImZvb3RlckNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlQ29udGFjdH0gaWQ9XCJjb250YWN0QnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0gaWQ9XCJmb290ZXJMaW5rXCI+PENvbnRhY3QgYnV0dG9uSGlkZT17dGhpcy5zdGF0ZS52aWV3U29sbyB8fCB0aGlzLnN0YXRlLnZpZXdTbWFsbCB8fCB0aGlzLnN0YXRlLnZpZXdDb3JwIHx8IHRoaXMuc3RhdGUudmlld0NvbnRhY3QgfHwgdGhpcy5zdGF0ZS52aWV3UmV2b2x1dGlvbn0+PC9Db250YWN0PjwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgPGRpdiBpZD1cImRldGFpbENvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wYWdlUmlnaHR9IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDaGV2cm9uUmlnaHQgaWQ9XCJjaGV2cm9uUmlnaHRCdXR0b25cIiBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnB9Lz48L2E+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnBhZ2VMZWZ0fSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48Q2hldnJvbkxlZnQgaWQ9XCJjaGV2cm9uTGVmdEJ1dHRvblwiIGJ1dHRvbkhpZGU9e3RoaXMuc3RhdGUudmlld1NvbG8gfHwgdGhpcy5zdGF0ZS52aWV3U21hbGwgfHwgdGhpcy5zdGF0ZS52aWV3Q29ycH0vPjwvYT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuY2xvc2VBbGx9IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxDbG9zZUJ1dHRvbiBidXR0b25IaWRlPXt0aGlzLnN0YXRlLnZpZXdTb2xvIHx8IHRoaXMuc3RhdGUudmlld1NtYWxsIHx8IHRoaXMuc3RhdGUudmlld0NvcnAgfHwgdGhpcy5zdGF0ZS52aWV3Q29udGFjdCB8fCB0aGlzLnN0YXRlLnZpZXdSZXZvbHV0aW9ufS8+PC9hPlxuICAgICAgICAgICAgPFNvbG9Db250ZW50IHZpc2libGU9e3RoaXMuc3RhdGUudmlld1NvbG99IHBhZ2VOdW09e3RoaXMuc3RhdGUuY29udGVudFBhZ2V9IGlkPVwic29sb0NvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPFNtYWxsQ29udGVudCB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpZXdTbWFsbH0gcGFnZU51bT17dGhpcy5zdGF0ZS5jb250ZW50UGFnZX0gaWQ9XCJzbWFsbENvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPENvcnBDb250ZW50IHZpc2libGU9e3RoaXMuc3RhdGUudmlld0NvcnB9IHBhZ2VOdW09e3RoaXMuc3RhdGUuY29udGVudFBhZ2V9IGlkPVwiY29ycENvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPENvbnRhY3RDb250ZW50IHZpc2libGU9e3RoaXMuc3RhdGUudmlld0NvbnRhY3R9IGlkPVwiY29udGFjdENvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPFJldm9sdXRpb24gdmlzaWJsZT17dGhpcy5zdGF0ZS52aWV3UmV2b2x1dGlvbn0gaWQ9XCJyZXZDb250ZW50XCIgLz5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgLkFwcCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5TaWduYXR1cmUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBsZWZ0OiAtMzBweDtcbiAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjbG9nbyB7XG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgLnNpZ1RleHQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTU4JTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2MSU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIHdpZHRoOiA3LjVlbTtcbiAgICAgICAgICAgIGhlaWdodDogMC45NWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNyZXZUYWcge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNyZXZMaW5rIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCBibGFjaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjYmFubmVyIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjYmFubmVyRGl2IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAxNTBweClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjA4cHgpe1xuXG4gICAgICAgICAgICBkaXYgI2Jhbm5lckRpdntcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXYgI2J1dHRvbkNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTg1JSk7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTV2dztcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwOHB4KSB7XG4gICAgICAgICAgICBkaXYgI2J1dHRvbkNvbnRhaW5lcntcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXhib3g7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICAgICAgICB0b3A6IDYwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMCUsIC02NSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjY29ycEJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA0dnc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2NoZXZyb25SaWdodEJ1dHRvbiB7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjY2hldnJvbkxlZnRCdXR0b24ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0xMCUpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2RldGFpbENvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDUwdmgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI3NtYWxsQnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDE1dnc7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDR2dztcbiAgICAgICAgICB9XG4gICBcbiAgICAgICAgICAjc29sb0J1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA0dnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGRpdiAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNmb290ZXJDb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1MDAlKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDhweCkge1xuICAgICAgICAgICAgI2Zvb3RlckNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDcwJSwgNTAlKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjc29sb0J1dHRvbntcbiAgICAgICAgICAgIHotaW5kZXg6IDIwO1xuICAgICAgICAgIH1cbiAgICAgXG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9