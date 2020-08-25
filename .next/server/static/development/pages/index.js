module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_video_BackgroundVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/video/BackgroundVideo */ "./public/video/BackgroundVideo.js");
/* harmony import */ var _public_assets_cconTriangle_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/assets/cconTriangle.png */ "./public/assets/cconTriangle.png");
/* harmony import */ var _public_assets_cconTriangle_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_cconTriangle_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SoloButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SoloButton */ "./components/SoloButton.js");
/* harmony import */ var _SmallButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SmallButton */ "./components/SmallButton.js");
/* harmony import */ var _CorpButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CorpButton */ "./components/CorpButton.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Contact */ "./components/Contact.js");
/* harmony import */ var _SliderSolo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SliderSolo */ "./components/SliderSolo.js");
/* harmony import */ var _SliderSmall__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SliderSmall */ "./components/SliderSmall.js");
/* harmony import */ var _SliderCorp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SliderCorp */ "./components/SliderCorp.js");
/* harmony import */ var _ContactContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ContactContent */ "./components/ContactContent.js");
/* harmony import */ var _Revolution__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Revolution */ "./components/Revolution.js");
/* harmony import */ var _TextLoop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TextLoop */ "./components/TextLoop.js");
/* harmony import */ var _Who__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Who */ "./components/Who.js");
/* harmony import */ var _What__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./What */ "./components/What.js");
/* harmony import */ var _Why__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Why */ "./components/Why.js");
/* harmony import */ var _ClickMe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ClickMe */ "./components/ClickMe.js");
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\App.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


















class App extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props); // State management and bindings

    this.state = {
      viewSolo: false,
      viewSmall: false,
      viewCorp: false,
      contentPage: 1,
      viewContact: false,
      viewRevolution: false,
      buttonFade: "fadeIn",
      contentFade: "fadeOut",
      arrowFade: "fadeOut",
      renderButtons: true,
      bannerState: ""
    };
    this.seeSolo = this.seeSolo.bind(this);
    this.closeAll = this.closeAll.bind(this);
    this.seeSmall = this.seeSmall.bind(this);
    this.seeCorp = this.seeCorp.bind(this);
    this.seeContact = this.seeContact.bind(this);
    this.seeRevolution = this.seeRevolution.bind(this);
    this.timerCloseContent = this.timerCloseContent.bind(this);
  } // Function objects


  closeAll() {
    this.setState({
      viewSolo: false,
      viewSmall: false,
      viewCorp: false,
      contentPage: 2,
      viewContact: false,
      viewRevolution: false,
      buttonFade: "fadeIn",
      contentFade: "fadeOut",
      arrowFade: "fadeOut",
      bannerState: ""
    });
  }

  timerCloseContent() {
    this.setState({
      buttonFade: "fadeIn",
      contentFade: "fadeOut",
      arrowFade: "fadeOut"
    });
    setTimeout(this.closeAll, 500);
  }

  seeSolo() {
    this.setState({
      viewSolo: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeIn",
      bannerState: "Single-User"
    });
  }

  seeSmall() {
    this.setState({
      viewSmall: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeIn",
      bannerState: "Multi-User"
    });
  }

  seeCorp() {
    this.setState({
      viewCorp: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeIn",
      bannerState: "Multi-Location"
    });
  }

  seeContact() {
    this.setState({
      viewContact: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeOut",
      viewSolo: false,
      viewSmall: false,
      viewCorp: false,
      viewRevolution: false,
      bannerState: "Contact Us"
    });
  }

  seeRevolution() {
    this.setState({
      viewRevolution: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeOut",
      viewSolo: false,
      viewSmall: false,
      viewCorp: false,
      viewContact: false,
      bannerState: "Join the Ccon Revolution!"
    });
  }

  handleBannerChange() {}

  render() {
    return __jsx("div", {
      className: "jsx-1151295485" + " " + "App",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 7
      }
    }, __jsx("head", {
      className: "jsx-1151295485",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }
    }, __jsx("title", {
      className: "jsx-1151295485",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 11
      }
    }, "Ccon Metals Inc. - The best catalytic converter scrap price"), __jsx("meta", {
      desc: "Sell catalytic converters with transparency, security, and integrity.",
      className: "jsx-1151295485",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 11
      }
    })), __jsx(_public_video_BackgroundVideo__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "video/mp4",
      autoplay: true,
      mute: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }
    }), __jsx("a", {
      onClick: this.closeAll,
      className: "jsx-1151295485",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "clickAway",
      className: "jsx-1151295485",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 36
      }
    })), __jsx("div", {
      className: "jsx-1151295485" + " " + "Signature",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }
    }, __jsx("img", {
      id: "logo",
      src: _public_assets_cconTriangle_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "catalytic converter scrap price",
      className: "jsx-1151295485",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 11
      }
    }), __jsx("h1", {
      className: "jsx-1151295485" + " " + "sigText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 13
      }
    }, "METALS"), __jsx("a", {
      id: "footerLink",
      className: "jsx-1151295485",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 13
      }
    }, __jsx("div", {
      id: "footerContainer",
      className: "jsx-1151295485",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 15
      }
    }, __jsx(_Contact__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }
    })))), __jsx("div", {
      id: "bannerDiv",
      className: "jsx-1151295485",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }
    }, __jsx("h2", {
      id: "banner",
      className: "jsx-1151295485" + " " + (this.state.buttonFade || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }
    }, __jsx("a", {
      id: "revLink",
      onClick: this.seeRevolution,
      style: {
        cursor: 'pointer'
      },
      className: "jsx-1151295485",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 13
      }
    }, __jsx(_TextLoop__WEBPACK_IMPORTED_MODULE_13__["default"], {
      id: "text-loop",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 85
      }
    }))), __jsx("h2", {
      id: "banner2",
      className: "jsx-1151295485" + " " + (this.state.contentFade || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 11
      }
    }, __jsx("span", {
      id: "spanLink",
      className: "jsx-1151295485",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 13
      }
    }, this.state.bannerState))), __jsx("div", {
      id: "showcase",
      className: "jsx-1151295485",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "bioContainer",
      className: "jsx-1151295485" + " " + (this.state.buttonFade || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "who",
      className: "jsx-1151295485" + " " + (this.state.buttonFade || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 13
      }
    }, __jsx(_Who__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 61
      }
    })), __jsx("div", {
      id: "what",
      className: "jsx-1151295485" + " " + (this.state.buttonFade || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 13
      }
    }, __jsx(_What__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 62
      }
    })), __jsx("div", {
      id: "why",
      className: "jsx-1151295485" + " " + (this.state.buttonFade || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 13
      }
    }, __jsx(_Why__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 61
      }
    }))), __jsx("div", {
      id: "clickMe",
      className: "jsx-1151295485" + " " + (this.state.buttonFade || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }
    }, __jsx(_ClickMe__WEBPACK_IMPORTED_MODULE_17__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 11
      }
    })), __jsx("div", {
      id: "buttonContainer",
      className: "jsx-1151295485" + " " + (this.state.buttonFade || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 10
      }
    }, __jsx("a", {
      onClick: this.seeSolo,
      id: "soloButton",
      style: {
        cursor: 'pointer'
      },
      className: "jsx-1151295485",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 13
      }
    }, __jsx(_SoloButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 15
      }
    })), __jsx("a", {
      onClick: this.seeSmall,
      id: "smallButton",
      style: {
        cursor: 'pointer'
      },
      className: "jsx-1151295485",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 13
      }
    }, __jsx(_SmallButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 15
      }
    })), __jsx("a", {
      onClick: this.seeCorp,
      id: "corpButton",
      style: {
        cursor: 'pointer'
      },
      className: "jsx-1151295485",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 13
      }
    }, __jsx(_CorpButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 15
      }
    })))), __jsx("div", {
      id: "contentContainer",
      className: "jsx-1151295485" + " " + (this.state.contentFade || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 10
      }
    }, __jsx(_SliderSolo__WEBPACK_IMPORTED_MODULE_8__["default"], {
      show: this.state.viewSolo,
      onClose: this.timerCloseContent,
      id: "soloContent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }
    }), __jsx(_SliderSmall__WEBPACK_IMPORTED_MODULE_9__["default"], {
      show: this.state.viewSmall,
      onClose: this.timerCloseContent,
      id: "smallContent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 13
      }
    }), __jsx(_SliderCorp__WEBPACK_IMPORTED_MODULE_10__["default"], {
      show: this.state.viewCorp,
      onClose: this.timerCloseContent,
      id: "corpContent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 13
      }
    }), __jsx(_ContactContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
      show: this.state.viewContact,
      onClose: this.timerCloseContent,
      id: "contactContent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 13
      }
    }), __jsx(_Revolution__WEBPACK_IMPORTED_MODULE_12__["default"], {
      show: this.state.viewRevolution,
      onClose: this.timerCloseContent,
      id: "revContent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 13
      }
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1151295485",
      __self: this
    }, "#showcase.jsx-1151295485{height:100vh;width:100%;}#contentContainer.jsx-1151295485{position:absolute;height:65vh;width:90%;top:220px;margin-left:5%;overflow-y:auto;overflow-x:hidden;}.fadeIn.jsx-1151295485{opacity:1;-webkit-transition:opacity 0.5s linear;transition:opacity 0.5s linear;}.fadeOut.jsx-1151295485{opacity:0;-webkit-transition:opacity 0.5s linear;transition:opacity 0.5s linear;pointer-events:none;}.App.jsx-1151295485{text-align:center;height:100vh;width:100%;box-sizing:border-box;}.Signature.jsx-1151295485{font-family:Syncopate;color:rgb(192,192,192);position:fixed;z-Index:5;opacity:1;width:100%;height:100px;margin-top:0px;min-width:630px;}#logo.jsx-1151295485{width:200px;max-width:200px;margin-top:-30px;margin-left:-30px;float:left;pointer-events:none;}.sigText.jsx-1151295485{font-family:Syncopate;font-size:1.8em;margin-top:52px;margin-left:90px;width:7.5em;height:0.95em;position:fixed;z-Index:-1;pointer-events:none;border-top:1px solid red;border-bottom:1px solid red;}#revTag.jsx-1151295485{color:red;height:100%;}#revLink.jsx-1151295485{font-size:1.7em;height:100%;text-shadow:3px 3px black;}#spanLink.jsx-1151295485{font-size:1.7em;height:100%;text-shadow:3px 3px black;}#banner.jsx-1151295485{min-width:716px;width:80%;height:100%;margin:auto;color:white;border-top:1px solid red;border-bottom:1px solid red;}#banner2.jsx-1151295485{min-width:716px;width:80%;font-size:1.7em;height:100%;text-shadow:3px 3px black;margin:auto;color:white;border-top:1px solid red;border-bottom:1px solid red;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);}#bannerDiv.jsx-1151295485{position:absolute;height:66px;width:100%;top:130px;min-width:716px;margin:auto;z-Index:4;}#buttonContainer.jsx-1151295485{width:80%;margin:auto;-webkit-transform:translate(0%,0);-ms-transform:translate(0%,0);transform:translate(0%,0);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:60px;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}#corpButton.jsx-1151295485{width:200px;height:60px;margin-left:4vw;}#smallButton.jsx-1151295485{width:200px;height:60px;margin-left:4vw;margin-right:4vw;}#soloButton.jsx-1151295485{margin-right:4vw;width:200px;height:60px;}#clickMe.jsx-1151295485{height:50px;width:100%;font-size:1.5em;position:relative;margin-top:70px;}#clickAway.jsx-1151295485{position:fixed;width:100vw;height:100vh;background:transparent;top:0;z-Index;10;opacity:0.99;}#bioContainer.jsx-1151295485{width:80%;margin:auto;opacity:0.99;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin-top:225px;height:300px;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}#who.jsx-1151295485{width:200px;height:60px;margin-right:4vw;}#what.jsx-1151295485{width:200px;height:60px;margin-left:4vw;margin-right:4vw;}#why.jsx-1151295485{margin-left:4vw;width:200px;height:60px;}#footerContainer.jsx-1151295485{width:216px;height:27px;float:right;margin-top:52px;text-align:center;display:inline-block;}@media (max-width:720px){#bannerDiv.jsx-1151295485{display:none;}#contentContainer.jsx-1151295485{height:80vh;-webkit-transform:translate(0,-90px);-ms-transform:translate(0,-90px);transform:translate(0,-90px);min-height:600px;}#bioContainer.jsx-1151295485{width:100%;height:50%;display:inline-block;margin-top:110px;margin-bottom:0px;position:relative;min-width:650px;}#who.jsx-1151295485{width:100%;height:33%;margin-right:0vw;margin-top:0px;}#what.jsx-1151295485{width:100%;height:33%;margin-right:0vw;margin-left:0vw;margin-top:0px;}#why.jsx-1151295485{width:100%;height:33%;margin-left:0vw;margin-top:0px;}#buttonContainer.jsx-1151295485{position:absolute;display:-webkit-inline-box;display:-webkit-inline-flexbox;display:-ms-inline-flexboxbox;display:inline-flexbox;width:100vw;height:25vh;margin:auto;left:0;min-width:635px;margin-top:-35px;}#corpButton.jsx-1151295485{position:absolute;width:90%;height:50px;left:0%;margin-top:120px;margin-left:5vw;}#smallButton.jsx-1151295485{position:absolute;width:90%;height:50px;left:0%;margin-top:60px;margin-left:5vw;margin-right:0;}#soloButton.jsx-1151295485{position:absolute;width:90%;height:50px;left:0%;margin-right:0;margin-left:5vw;}#clickMe.jsx-1151295485{-webkit-transform:translate(0,-60px);-ms-transform:translate(0,-60px);transform:translate(0,-60px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdOc0IsQUFLMEIsQUFLSyxBQVVSLEFBTUEsQUFPUSxBQVNJLEFBWVYsQUFTVSxBQWNaLEFBS00sQUFPQSxBQU9BLEFBV0EsQUFhRSxBQVdOLEFBU0EsQUFPQSxBQVFLLEFBT0wsQUFRRyxBQVdMLEFBV0UsQUFPQSxBQVFJLEFBT0YsQUFjQyxBQUtELEFBTUQsQUFXRSxBQVFBLEFBU0EsQUFRSyxBQVdBLEFBU0EsQUFVQSxBQVdyQixVQXZTZ0MsQUFNQSxBQW1EbkIsQUFzREUsQUFrREYsQ0EwREMsQUFXRSxBQVFBLEFBU0EsQ0FyTkMsQUFzRkosQUFPQSxBQWVELEFBOEJDLEFBT0EsQUFlRSxBQW1Ca0IsQ0FwT3JCLEFBZ09YLEVBM0RZLENBeEZBLEFBT0EsQUFPRixBQVdBLEFBb0dFLENBcERBLENBakpBLEFBdUJDLEFBdUZELEFBMkphLEFBV2IsQUFTQSxBQVVBLElBdlFhLEFBcUJULEFBZWxCLEFBc0QrQixBQWtEaEIsQUEwRFUsQUFXRixBQVFBLEFBU0QsQ0F6R0osQ0E3SmxCLEFBdUlrQixBQU9BLEFBNkNDLEFBT0QsQUFlRixFQXRIRixBQVdJLENBK0RILENBcEhJLEFBNEJTLEFBT0EsQUFzSGQsQUErRUUsQUFTQSxBQVVBLENBdEpGLENBakpGLEFBOEdDLENBdkZBLElBcUpTLENBaUNGLEVBeEpGLEFBa0NKLEFBMktPLENBekdELEFBd0ZDLEFBUUMsQ0F4UFYsQUFtSVosQUFNbUIsQUF1Qk0sQUE2Qk4sQUFTbkIsQUE4RVksQUFTQSxBQVVBLENBekxBLEFBb0NaLEFBcUNBLENBaEt3QixBQTBFVixDQW9JTyxFQXRNSixBQWFHLEdBeU9DLEFBU0QsQUFVRCxFQXZTRixBQXNGSCxDQXdCSSxDQThGSSxDQXNEbEIsQ0E5TWUsQUFvQm5CLEFBT0EsQUFrQjRCLEFBZ0p4QixDQU9pQixFQTlHckIsQUFja0IsQUFzQ2xCLEdBL0pZLEFBc01VLEVBOUlLLENBM0NkLEFBb0hMLEFBd0lZLENBL1FwQixBQXFRb0IsQ0E3UkYsQUFvUkUsRUF0S04sRUFrREwsQ0FqSUcsQUE2S2EsQUE2Q3JCLENBck1VLEVBb0dkLENBNUdzQixHQW9IVixDQXFFVSxDQXRIVixBQXlMVixDQWhTRixBQUtzQixBQW1CVCxBQWlFQyxBQWtFZixBQTJIb0IsQ0E3UkMsQUFvUmxCLEVBaE9jLElBa0NjLEVBMEI5QixFQWhGZSxBQTRLZixDQTNHYyxDQWlFZCxDQXRIQSxDQWtQRSxDQXpEa0IsQ0FoTEgsRUFwRGpCLEFBMlNFLENBL1JGLElBb0JpQixBQWlFVSxPQXlITixDQXJLUixBQWdFSSxBQWlIYixHQS9JSixJQXREa0IsSUFxQkksS0FxS3BCLENBekg0QixBQWtLZCxNQWxPaEIsRUFzSW1CLElBNkZILEVBOU1XLFVBK01YLENBN0ZELEdBdEVlLFFBb0tuQixFQTdGb0IsQ0FsSEQsSUFnTlYsY0FsSkosRUFtSkssUUFoTnJCLEVBOERpQyxPQW1KL0IsZ0RBdEtGLHFDQXdFRSwrQkFwREYiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhY2tncm91bmRWaWRlbyBmcm9tICcuLi9wdWJsaWMvdmlkZW8vQmFja2dyb3VuZFZpZGVvJztcbmltcG9ydCBjY29uVHJpYW5nbGUgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9jY29uVHJpYW5nbGUucG5nJztcbmltcG9ydCBTb2xvQnV0dG9uIGZyb20gJy4vU29sb0J1dHRvbic7XG5pbXBvcnQgU21hbGxCdXR0b24gZnJvbSAnLi9TbWFsbEJ1dHRvbic7XG5pbXBvcnQgQ29ycEJ1dHRvbiBmcm9tICcuL0NvcnBCdXR0b24nO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcbmltcG9ydCBTbGlkZXJTb2xvIGZyb20gJy4vU2xpZGVyU29sbyc7XG5pbXBvcnQgU2xpZGVyU21hbGwgZnJvbSAnLi9TbGlkZXJTbWFsbCc7XG5pbXBvcnQgU2xpZGVyQ29ycCBmcm9tICcuL1NsaWRlckNvcnAnO1xuaW1wb3J0IENvbnRhY3RDb250ZW50IGZyb20gJy4vQ29udGFjdENvbnRlbnQnO1xuaW1wb3J0IFJldm9sdXRpb24gZnJvbSAnLi9SZXZvbHV0aW9uJztcbmltcG9ydCBXb3JkTG9vcCBmcm9tICcuL1RleHRMb29wJztcbmltcG9ydCBXaG8gZnJvbSAnLi9XaG8nO1xuaW1wb3J0IFdoYXQgZnJvbSAnLi9XaGF0JztcbmltcG9ydCBXaHkgZnJvbSAnLi9XaHknO1xuaW1wb3J0IENsaWNrTWUgZnJvbSAnLi9DbGlja01lJztcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIC8vIFN0YXRlIG1hbmFnZW1lbnQgYW5kIGJpbmRpbmdzXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpZXdTb2xvOiBmYWxzZSxcbiAgICAgIHZpZXdTbWFsbDogZmFsc2UsXG4gICAgICB2aWV3Q29ycDogZmFsc2UsXG4gICAgICBjb250ZW50UGFnZTogMSxcbiAgICAgIHZpZXdDb250YWN0OiBmYWxzZSxcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiBmYWxzZSxcbiAgICAgIGJ1dHRvbkZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBjb250ZW50RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICBhcnJvd0ZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgcmVuZGVyQnV0dG9uczogdHJ1ZSxcbiAgICAgIGJhbm5lclN0YXRlOiBcIlwiLFxuICAgIH07XG5cbiAgICB0aGlzLnNlZVNvbG8gPSB0aGlzLnNlZVNvbG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlQWxsID0gdGhpcy5jbG9zZUFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlU21hbGwgPSB0aGlzLnNlZVNtYWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVDb3JwID0gdGhpcy5zZWVDb3JwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVDb250YWN0ID0gdGhpcy5zZWVDb250YWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVSZXZvbHV0aW9uID0gdGhpcy5zZWVSZXZvbHV0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy50aW1lckNsb3NlQ29udGVudCA9IHRoaXMudGltZXJDbG9zZUNvbnRlbnQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIG9iamVjdHNcblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdTb2xvOiBmYWxzZSxcbiAgICAgIHZpZXdTbWFsbDogZmFsc2UsXG4gICAgICB2aWV3Q29ycDogZmFsc2UsXG4gICAgICBjb250ZW50UGFnZTogMixcbiAgICAgIHZpZXdDb250YWN0OiBmYWxzZSxcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiBmYWxzZSxcbiAgICAgIGJ1dHRvbkZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBjb250ZW50RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICBhcnJvd0ZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgYmFubmVyU3RhdGU6IFwiXCIsXG4gICAgfSk7XG4gIH1cblxuICB0aW1lckNsb3NlQ29udGVudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGJ1dHRvbkZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBjb250ZW50RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICBhcnJvd0ZhZGU6IFwiZmFkZU91dFwiLFxuICAgIH0pXG4gICAgc2V0VGltZW91dCh0aGlzLmNsb3NlQWxsLCA1MDApO1xuICB9XG5cbiAgc2VlU29sbygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdTb2xvOiB0cnVlLFxuICAgICAgYnV0dG9uRmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICBjb250ZW50RmFkZTogXCJmYWRlSW5cIixcbiAgICAgIGFycm93RmFkZTogXCJmYWRlSW5cIixcbiAgICAgIGJhbm5lclN0YXRlOiBcIlNpbmdsZS1Vc2VyXCIsXG4gICAgfSk7XG4gIH1cblxuICBzZWVTbWFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdTbWFsbDogdHJ1ZSxcbiAgICAgIGJ1dHRvbkZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgY29udGVudEZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBhcnJvd0ZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBiYW5uZXJTdGF0ZTogXCJNdWx0aS1Vc2VyXCIsXG4gICAgfSk7XG4gIH1cblxuICBzZWVDb3JwKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld0NvcnA6IHRydWUsXG4gICAgICBidXR0b25GYWRlOiBcImZhZGVPdXRcIixcbiAgICAgIGNvbnRlbnRGYWRlOiBcImZhZGVJblwiLFxuICAgICAgYXJyb3dGYWRlOiBcImZhZGVJblwiLFxuICAgICAgYmFubmVyU3RhdGU6IFwiTXVsdGktTG9jYXRpb25cIixcbiAgICB9KTtcbiAgfVxuXG4gIHNlZUNvbnRhY3QoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3Q29udGFjdDogdHJ1ZSxcbiAgICAgIGJ1dHRvbkZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgY29udGVudEZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBhcnJvd0ZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgdmlld1NvbG86IGZhbHNlLFxuICAgICAgdmlld1NtYWxsOiBmYWxzZSxcbiAgICAgIHZpZXdDb3JwOiBmYWxzZSxcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiBmYWxzZSxcbiAgICAgIGJhbm5lclN0YXRlOiBcIkNvbnRhY3QgVXNcIixcbiAgICB9KTtcbiAgfVxuXG4gIHNlZVJldm9sdXRpb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3UmV2b2x1dGlvbjogdHJ1ZSxcbiAgICAgIGJ1dHRvbkZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgY29udGVudEZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBhcnJvd0ZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgdmlld1NvbG86IGZhbHNlLFxuICAgICAgdmlld1NtYWxsOiBmYWxzZSxcbiAgICAgIHZpZXdDb3JwOiBmYWxzZSxcbiAgICAgIHZpZXdDb250YWN0OiBmYWxzZSxcbiAgICAgIGJhbm5lclN0YXRlOiBcIkpvaW4gdGhlIENjb24gUmV2b2x1dGlvbiFcIixcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUJhbm5lckNoYW5nZSgpIHtcblxuICB9XG4gIFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cblxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICA8dGl0bGU+Q2NvbiBNZXRhbHMgSW5jLiAtIFRoZSBiZXN0IGNhdGFseXRpYyBjb252ZXJ0ZXIgc2NyYXAgcHJpY2U8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIGRlc2M9XCJTZWxsIGNhdGFseXRpYyBjb252ZXJ0ZXJzIHdpdGggdHJhbnNwYXJlbmN5LCBzZWN1cml0eSwgYW5kIGludGVncml0eS5cIi8+XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIDxCYWNrZ3JvdW5kVmlkZW8gdHlwZT0ndmlkZW8vbXA0JyBhdXRvcGxheSBtdXRlIC8+XG4gICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuY2xvc2VBbGx9PjxkaXYgaWQ9XCJjbGlja0F3YXlcIiA+XG5cbiAgICAgICAgPC9kaXY+PC9hPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaWduYXR1cmVcIj5cbiAgICAgICAgICA8aW1nIGlkPVwibG9nb1wiIHNyYz17Y2NvblRyaWFuZ2xlfSBhbHQ9XCJjYXRhbHl0aWMgY29udmVydGVyIHNjcmFwIHByaWNlXCIgLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzaWdUZXh0XCI+XG4gICAgICAgICAgICAgICAgTUVUQUxTXG4gICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICA8YSBpZD1cImZvb3RlckxpbmtcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImZvb3RlckNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxDb250YWN0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD0nYmFubmVyRGl2JyA+XG4gICAgICAgICAgPGgyIGlkPVwiYmFubmVyXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmJ1dHRvbkZhZGV9ID5cbiAgICAgICAgICAgIDxhIGlkPVwicmV2TGlua1wiIG9uQ2xpY2s9e3RoaXMuc2VlUmV2b2x1dGlvbn0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PFdvcmRMb29wIGlkPVwidGV4dC1sb29wXCIgLz48L2E+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8aDIgaWQ9XCJiYW5uZXIyXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNvbnRlbnRGYWRlfT5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwic3BhbkxpbmtcIj57dGhpcy5zdGF0ZS5iYW5uZXJTdGF0ZX08L3NwYW4+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD1cInNob3djYXNlXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJiaW9Db250YWluZXJcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYnV0dG9uRmFkZX0+XG4gICAgICAgICAgICA8ZGl2IGlkPVwid2hvXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmJ1dHRvbkZhZGV9PjxXaG8gLz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ3aGF0XCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmJ1dHRvbkZhZGV9PjxXaGF0IC8+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwid2h5XCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmJ1dHRvbkZhZGV9PjxXaHkgLz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8ZGl2IGlkPVwiY2xpY2tNZVwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5idXR0b25GYWRlfT5cbiAgICAgICAgICA8Q2xpY2tNZSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICBcblxuICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbkNvbnRhaW5lclwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5idXR0b25GYWRlfT5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlU29sb30gIGlkPVwic29sb0J1dHRvblwiIFxuICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+XG4gICAgICAgICAgICAgIDxTb2xvQnV0dG9uIC8+XG4gICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlU21hbGx9ICBpZD1cInNtYWxsQnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+XG4gICAgICAgICAgICAgIDxTbWFsbEJ1dHRvbiAvPlxuICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZUNvcnB9ICBpZD1cImNvcnBCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5cbiAgICAgICAgICAgICAgPENvcnBCdXR0b24gLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcblxuICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY29udGVudEZhZGV9PlxuICAgICAgICAgICAgPFNsaWRlclNvbG8gc2hvdz17dGhpcy5zdGF0ZS52aWV3U29sb30gb25DbG9zZT17dGhpcy50aW1lckNsb3NlQ29udGVudH0gaWQ9XCJzb2xvQ29udGVudFwiIC8+XG4gICAgICAgICAgICA8U2xpZGVyU21hbGwgc2hvdz17dGhpcy5zdGF0ZS52aWV3U21hbGx9IG9uQ2xvc2U9e3RoaXMudGltZXJDbG9zZUNvbnRlbnR9IGlkPVwic21hbGxDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxTbGlkZXJDb3JwIHNob3c9e3RoaXMuc3RhdGUudmlld0NvcnB9IG9uQ2xvc2U9e3RoaXMudGltZXJDbG9zZUNvbnRlbnR9IGlkPVwiY29ycENvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPENvbnRhY3RDb250ZW50IHNob3c9e3RoaXMuc3RhdGUudmlld0NvbnRhY3R9IG9uQ2xvc2U9e3RoaXMudGltZXJDbG9zZUNvbnRlbnR9IGlkPVwiY29udGFjdENvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPFJldm9sdXRpb24gc2hvdz17dGhpcy5zdGF0ZS52aWV3UmV2b2x1dGlvbn0gb25DbG9zZT17dGhpcy50aW1lckNsb3NlQ29udGVudH0gaWQ9XCJyZXZDb250ZW50XCIgLz5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIFxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgI3Nob3djYXNlIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGhlaWdodDogNjV2aDtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICB0b3A6IDIyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmFkZUluIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZhZGVPdXQge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIC5BcHAge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5TaWduYXR1cmUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB6LUluZGV4OiA1O1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNjMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNsb2dvIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5zaWdUZXh0IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTeW5jb3BhdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuOGVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTJweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDcuNWVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAwLjk1ZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB6LUluZGV4OiAtMTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI3JldlRhZyB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjcmV2TGluayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggYmxhY2s7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjc3Bhbkxpbmsge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IGJsYWNrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2Jhbm5lciB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDcxNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2Jhbm5lcjIge1xuICAgICAgICAgICAgbWluLXdpZHRoOiA3MTZweDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggYmxhY2s7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNiYW5uZXJEaXYge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0b3A6IDEzMHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiA3MTZweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHotSW5kZXg6IDQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjYnV0dG9uQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCk7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2NvcnBCdXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDR2dztcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgICNzbWFsbEJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHZ3O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0dnc7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICBcbiAgICAgICAgICAjc29sb0J1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDR2dztcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgICNjbGlja01lIHtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2NsaWNrQXdheSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB6LUluZGV4OyAxMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTlcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgICNiaW9Db250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTk7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3dobyB7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDR2dztcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgICN3aGF0IHtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0dnc7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDR2dztcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgIFxuICAgICAgICAgICN3aHkge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDR2dztcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjZm9vdGVyQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDIxNnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI3cHg7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTJweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgICAjZm9vdGVyQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNiYW5uZXJEaXZ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTkwcHgpO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI2Jpb0NvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNjUwcHg7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICN3aG8ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHZ3O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgI3doYXQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHZ3O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwdnc7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9XG4gICAgICAgXG4gICAgICAgICAgICAjd2h5IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHZ3O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjYnV0dG9uQ29udGFpbmVye1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4Ym94O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgIGhlaWdodDogMjV2aDtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDYzNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI2NvcnBCdXR0b24ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgbGVmdDogMCU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXZ3O1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICNzbWFsbEJ1dHRvbiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBsZWZ0OiAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICBcbiAgICAgICAgICAgICNzb2xvQnV0dG9uIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1dnc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNjbGlja01lIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTYwcHgpXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\App.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/ClickMe.js":
/*!*******************************!*\
  !*** ./components/ClickMe.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\ClickMe.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class ClickMe extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      id: "clickThis",
      className: "jsx-3746521536",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, __jsx("div", {
      id: "words",
      className: "jsx-3746521536",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, "Click one of the options below to learn about the Revolution App!"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3746521536",
      __self: this
    }, "#clickThis.jsx-3746521536{height:50px;width:100%;color:white;}#words.jsx-3746521536{border-top:1px solid red;border-bottom:1px solid red;width:73%;margin:auto;opacity:0.999;text-shadow:3px 3px 3px black;min-width:699px;}@media (max-width:720px){#words.jsx-3746521536{min-width:512px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ2xpY2tNZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQnlCLEFBSXlDLEFBT2EsQUFZTCxZQWxCVCxJQW1CWCxPQWxCWSxFQU1nQixVQUpoQyxrQkFLYyxVQUNFLFlBQ0UsY0FDZ0IsOEJBQ2QsZ0JBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ2xpY2tNZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDbGlja01lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNsaWNrVGhpc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3b3Jkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbGljayBvbmUgb2YgdGhlIG9wdGlvbnMgYmVsb3cgdG8gbGVhcm4gYWJvdXQgdGhlIFJldm9sdXRpb24gQXBwISAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjbGlja1RoaXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3dvcmRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDczJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA2OTlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3dvcmRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGlja01lOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\ClickMe.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ClickMe);

/***/ }),

/***/ "./components/CloseButton.js":
/*!***********************************!*\
  !*** ./components/CloseButton.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\CloseButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class CloseButton extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      id: "mdiv",
      className: "jsx-2837646664",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-2837646664" + " " + "mdiv",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "jsx-2837646664" + " " + "md",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2837646664",
      __self: this
    }, "#mdiv.jsx-2837646664{width:25px;height:25px;opacity:0.8;position:absolute;z-index:40;}.mdiv.jsx-2837646664{height:35px;width:4px;margin-left:12px;background-color:black;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);Z-index:11;-webkit-filter:drop-shadow(4px 3px 3px white);filter:drop-shadow(4px 3px 3px white);}.md.jsx-2837646664{height:35px;width:4px;background-color:black;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);Z-index:22;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ2xvc2VCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JtQixBQUlnQyxBQVNDLEFBVUEsV0FsQkEsQ0FTRixBQVVBLFVBVE8sQUFVSyxDQW5CVixZQUNNLElBU0ksTUFVRSxRQWxCYixTQVNhLEVBUDFCLGlFQWlCYSxXQUNiLE1BVmEsV0FDMkIsb0ZBQ3hDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ2xvc2VCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQ2xvc2VCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJtZGl2XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAjbWRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogNDA7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5tZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICBaLWluZGV4OiAxMTtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAzcHggM3B4IHdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLm1kIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICBaLWluZGV4OiAyMjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xvc2VCdXR0b247Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\CloseButton.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CloseButton);

/***/ }),

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\Contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Contact extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "jsx-4235054345" + " " + "contactButton",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 15
      }
    }, __jsx("ul", {
      className: "jsx-4235054345",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 19
      }
    }, __jsx("li", {
      className: "jsx-4235054345",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    }, "1-604-859-2855"), __jsx("li", {
      className: "jsx-4235054345",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }, "REVOLUTION@CCON.CA"), __jsx("li", {
      id: "address",
      className: "jsx-4235054345",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }, "107-2707 PROGRESSIVE WAY", __jsx("br", {
      className: "jsx-4235054345",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 62
      }
    }), "ABBOTSFORD, BC V2T 0A7")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4235054345",
      __self: this
    }, ".contactButton.jsx-4235054345{font-family:Syncopate;font-size:1em;width:360px;height:1em;position:fixed;z-Index:-1;-webkit-transform:translate(-160px,-40px);-ms-transform:translate(-160px,-40px);transform:translate(-160px,-40px);}ul.jsx-4235054345{list-style:none;padding:0;text-align:right;}@media (max-width:720px){#address.jsx-4235054345{opacity:1;}.contactButton.jsx-4235054345{-webkit-transform:translate(-160px,-40px);-ms-transform:translate(-160px,-40px);transform:translate(-160px,-40px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQnVCLEFBSStDLEFBV04sQUFRSixBQUl5QixVQUhyQyxNQVJVLE1BWEksSUFZRyxVQVhMLE9BWWQsS0FYYSxXQUNJLGVBQ0osV0FDd0IsNkJBa0JuQyxxRkFoQkYiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxDb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdEJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjEtNjA0LTg1OS0yODU1PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+UkVWT0xVVElPTkBDQ09OLkNBPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJhZGRyZXNzXCI+MTA3LTI3MDcgUFJPR1JFU1NJVkUgV0FZPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFCQk9UU0ZPUkQsIEJDIFYyVCAwQTc8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAuY29udGFjdEJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTeW5jb3BhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotSW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTYwcHgsIC00MHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNhZGRyZXNzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGFjdEJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE2MHB4LCAtNDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\Contact.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/ContactContent.js":
/*!**************************************!*\
  !*** ./components/ContactContent.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_map_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/map-image.png */ "./public/assets/map-image.png");
/* harmony import */ var _public_assets_map_image_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_map_image_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CloseButton */ "./components/CloseButton.js");
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\ContactContent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class ContactContent extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.show) {
      return __jsx("div", {
        id: "contentContainer",
        className: "jsx-2709107970",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }
      }, __jsx("div", {
        id: "contactInfo",
        className: "jsx-2709107970",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 15
        }
      }, __jsx("p", {
        id: "contactText",
        className: "jsx-2709107970",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }
      }, "Contact Us: revolution@ccon.ca / Phone number / Office Hours")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "2709107970",
        __self: this
      }, "#contentContainer.jsx-2709107970{height:6%;width:60%;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;min-width:450px;margin:auto;-webkit-transform:translate(0%,-370%);-ms-transform:translate(0%,-370%);transform:translate(0%,-370%);}.contentCanvas.jsx-2709107970{width:55%;height:100%;-webkit-transform:translate(0%,0%);-ms-transform:translate(0%,0%);transform:translate(0%,0%);right:0px;position:absolute;margin-right:5%;}#contactInfo.jsx-2709107970{width:100%;position:absolute;top:-25%;}@media (max-width:720px){#mailerDiv.jsx-2709107970{height:300px;}#contentContainer.jsx-2709107970{height:73vh;min-height:575px;top:9%;}#contactInfo.jsx-2709107970{width:80%;position:absolute;top:70%;left:10%;}.contentCanvas.jsx-2709107970{width:80%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29udGFjdENvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JxQixBQUk2QixBQVdBLEFBU0MsQUFRSSxBQUlELEFBTUYsQUFPQSxVQTVDRixBQVdFLEFBMkJRLEFBT3BCLENBekJrQixDQVlDLENBSm5CLE9BM0Iya0UsRUFXL2lFLE1BMkJsQixDQWxCRCxBQVlBLE9BQ1QsQUFPRCxFQW5CRCxPQW1CRSxzRUE1QlUsVUFDUSxrQkFDRixnQkFDbEIsZzhEQWRvQyxrQ0FDaEIsa0JBQ0YsZ0JBQ0osWUFDbUIsc0dBQ2pDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29udGFjdENvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFwSW1hZ2UgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9tYXAtaW1hZ2UucG5nJztcclxuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJy4vQ2xvc2VCdXR0b24nO1xyXG5cclxuXHJcbmNsYXNzIENvbnRhY3RDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5zaG93KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRhY3RJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD1cImNvbnRhY3RUZXh0XCI+Q29udGFjdCBVczogcmV2b2x1dGlvbkBjY29uLmNhIC8gUGhvbmUgbnVtYmVyIC8gT2ZmaWNlIEhvdXJzPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNiU7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FNQUFBQXA0WGlEQUFBQVVWQk1WRVdGaFlXRGc0TjNkM2R0YlcxN2UzdDFkWFdCZ1lHSGg0ZDVlWGx6YzNPTGk0dWJtNXVWbFpXUGo0K05qWTE5ZlgySmlZbC9mMzlyYTJ1UmtaR1ptWmxwYVdtWGw1ZHZiMjl4Y1hHVGs1Tm5aMmM4VFYxbUFBQUFHM1JTVGxOQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVBdkVPd3RBQUFGVmtsRVFWUjRYcFdXQjY3YzJCVUZiM2c1NTdUL2hSbzkvV1VNWkhsZ3I0Qmc4WjRxUWdRSmxISTRBOFN6RlZyYXB2bVRGOU83ZG1ZUkZaNjBZaUJoSlJDZ2gxRlloaUxBbWR2WDBDelRPcE5FNzdNRTBadHkvbldXemNoRHRpcXJtUURldXYzcG93UTV0YTJlTjBGWTBJbmtxREQ3M2xUOWM5bEV6d1VOcWdGSHM5VlFjZTNUVkNsRkNRclNUZk9pWWtWSlFCbXBicTJMNmlaYXZQbkFQY29VMGRTdzBTVVRxei9HdHJHdVhmYnl5Qm5pS3lrT1dRV0dxd3dNQTdRaVlBeGkrSWxQZHFvK2hZSG5VdDVaUGZuc0hKeU5pRHRucEp5YXlOQmtGNmNXb1lHQU1ZOTJVMmhYSEYvQzFNOHVQL1p0WWRpdWoyNlVkQWRRUVNYUUVyd1NPTXp0L1hXUldBejVHdVNCSWt3RzFIM0ZhYkoyT3NVT1VoR0M2dEs0RU10Sk8wdHRDNklCRDNrTTB2ZTB0SndNZFNmalpvK0VFSVNhZVRyOVAzd1lyR2pYcXlDMWtyY0tkaE1weEVudDVKZXRvdWxzY3B5emhYTjVGUnB1UEh2YmVRYUt4RkFFQjZFTitjWU42eEQ3UllHcFhwTm5kTW1aZ001RGNzM1lTTkZESFVvMkxHZlp1dWtTV3lVWWlySkFkWWJGM01mcUVLbWpNK0kyRWZoQTk0aUczTDd1S3JSK0dkV0Q3M3lkbElCKzZoZ3JlZjFRVGxtZ21iTTMvTGVYNUdJMVV4MVJXcGd4cEx1WjIrSStJanpaOHdxRTRuaWx2UWRrVWRmaHpJNVFEV3kra3c1V2dnMnBHcGVFVmVDQ0E3Yjg1Qk8zRjlEenhCM2NkcXZCeldjbXpieU1pcWh6dVlxdEhSVkcyeTR4K0tPbG55cWxhOEFvV1dwdUJvWVJ4elhyZkt1SUxsNlNmaVdDYmp4b1pKVWFDQmoxQ2pIN0dJYURiYzlrcUJZM1cvUmdqZGExaXFRY09KdTJXVys3NnBaQzlRRzdNMDBkZmZlOWhObnNldXBGTDUzcjhGN1lIU3dKV1VLUDJxK2s3UmRzeHlPQjExbjB4dE92blc0aXJNTUZOVjRIMHVxd1M1RXhzbVA5QXhiRFRjOUp3Z25lQVQ1dlRpVVNtMUU3QlNmbFN0M2JmYTF0djhEaTNSOG4zQWY3TU5XenM0OWhtYXVFMndQK3R0cnErQXNXcEZHMmF3dnN1T3FiaXBXSGd0dXZ1YUFFK0ExWi83Z0M5aGVzbnIrN3dxQ3dHOGM1eUFnM0FMMWZtOFQ5QVp0cC9iYkpHd2wxcE5yRTdSdU9YN1BlTVJVRVJWYVBwRXMreXFlb1NtdU9sb2txdzQ5cGdvbWpMZWg3aWNITmxHMTl5anM2WFhPTWVkWW01eEgyWXhwVjJ0YzBSbzJqSmZ4QzUwQXB1eEdvYjdsTXN4ZlRiZVV2MDdUeVl4cGVMdWNFSDFnTmQ0SUtIMkxBZzVUZFZobENhZlp2cHNrZm5jQ2Z4OHBPaEp6ZDc2YkpXZVlGbkZjaXdjWWZ1YlJjMTJJcC9wcEloQTEvbVNaL1J4akZEckpDNXhpZkZqSnBZMlhsNXpYZGd1RnFZeVRSMXpTcDFZOXArdGt0RFlZU05mbGN4STBpeU80VFBCZGxSY3BlcWpLL3BpRjVia2xxNzdWU0VhQSt6OHFtSlRGeklXaWl0Ym56Ujc5NFVTS0JVYVQwTlRFc1ZqWnFMYUZWcUpvUE45T0RHNzBJUGJmQkhLSysvcS9BV1IwdEp6WUhSVUxPYTRNUCtXL0hmR2FkWlViZncxNzdHN2ovT0diSXM4VGFoTHl5bmw0WDRSaW5GNzkzT3orQlUwc2FYdFVIclZCRlQvRG5BM2N0TlBvR2JzNGhSSWpUb2s4aSthbGdUMWxUSGk0U3hGdk9OS05yZ1FGQXEyL2dGbldNWGd3ZmZnWU1KcGlLWWttVzN0VGczWlE5SnErZjhYTitBNWVlVUtIV3ZKV0oyc2dKMVNvcCt3d2hxRlZpanFXYUpod3REOE1ObFNCZVdOTldUYTVaNWtQWnc1K0xiVlQ5OXdxVGR4MjlsTVVINE9JRy9EODZydUtFYXVCanZINXh5NnVtL1NmajdlaTZVVVZrNEFJbDNNeUQ0TVNTVE9GZ1N3c0gvUUpXYVE1YXM3WmNtZ0Jaa3pqalUxVXJRNzRjaTFnV0JDU0dIdHVWMUgybWhTbk8zV3AvM2ZFVjVhKzR3ei8vNnF5OEp4alpzbXh4eTUrNHc5Q0ROSlkwOVQwNzJpS0cwRW5PUzBhckVZZ1hxWW5YY1lId2pUdFVOQWNNZWxPZDR4cGtvcWlUWUlDV0ZxMEpTaVBmUERRZG50KzQvd3VxY1hZNDdRSUxiZ0FBQUFCSlJVNUVya0pnZ2c9PScpO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0zNzAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNjb250YWN0SW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogLTI1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICNtYWlsZXJEaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDczdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA5JTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NvbnRhY3RJbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMCVcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgKX0gZWxzZSB7XHJcbiAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdENvbnRlbnQ7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\ContactContent.js */"));
    } else {
      return null;
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ContactContent);

/***/ }),

/***/ "./components/CorpButton.js":
/*!**********************************!*\
  !*** ./components/CorpButton.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_factory_figure_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/factory-figure.png */ "./public/assets/factory-figure.png");
/* harmony import */ var _public_assets_factory_figure_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_factory_figure_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CorpExplain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CorpExplain */ "./components/CorpExplain.js");
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\CorpButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class CorpButton extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      id: "buttons",
      className: "jsx-1516630020",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, __jsx("div", {
      id: "circle",
      className: "jsx-1516630020",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }), __jsx(_CorpExplain__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 23
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1516630020",
      __self: this
    }, "#circle.jsx-1516630020{background-color:hsl(0,0%,90%);box-shadow:inset hsla(0,0%,15%,1) 0 0px 0px 4px, inset hsla(0,0%,15%,.8) 0 -1px 5px 4px, inset hsla(0,0%,0%,.25) 0 -1px 0px 7px, inset hsla(0,0%,100%,.7) 0 2px 1px 7px,  hsla(0,0%,0%,.15) 0 -5px 6px 4px, hsla(0,0%,100%,.5) 0 5px 6px 4px;-webkit-transition:color .2s;transition:color .2s;min-width:150px;width:200px;height:50px;line-height:1px;border-radius:8px;background-image: -webkit-radial-gradient( 50% 0%,8% 50%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 50% 100%,12% 50%,hsla(0,0%,100%,.6) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 0% 50%,50% 7%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 100% 50%,50% 5%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%),  -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,0%,0) 0%,hsla(0,0%,0%,0) 3%,hsla(0,0%,0%,.1) 3.5%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 6%,hsla(0,0%,100%,.1) 7.5%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 1.2%,hsla(0,0%,100%,.2) 2.2%),  -webkit-radial-gradient( 50% 50%,200% 50%,hsla(0,0%,90%,1) 5%,hsla(0,0%,85%,1) 30%,hsla(0,0%,60%,1) 100%);}#circle.jsx-1516630020:before,#circle.jsx-1516630020:after{content:\"\";top:0%;left:0%;position:relative;width:inherit;height:inherit;border-radius:inherit;background-image: -webkit-radial-gradient( 50% 0%,10% 50%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 50% 100%,10% 50%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 0% 50%,50% 10%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 100% 50%,50% 06%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%);}#circle.jsx-1516630020:before{-webkit-transform:rotate( 65deg);-ms-transform:rotate( 65deg);transform:rotate( 65deg);}#circle.jsx-1516630020:after{-webkit-transform:rotate(-65deg);-ms-transform:rotate(-65deg);transform:rotate(-65deg);}#circle.jsx-1516630020:active{color:hsl(210,100%,40%);text-shadow:hsla(210,100%,20%,.3) 0 -1px 0,hsl(210,100%,85%) 0 2px 1px,hsla(200,100%,80%,1) 0 0 5px,hsla(210,100%,50%,.6) 0 0 20px;box-shadow: inset hsla(210,100%,30%,1) 0 0px 0px 4px, inset hsla(210,100%,15%,.4) 0 -1px 5px 4px, inset hsla(210,100%,20%,.25) 0 -1px 0px 7px, inset hsla(210,100%,100%,.7) 0 2px 1px 7px,  hsla(210,100%,75%,.8) 0 0px 3px 2px, hsla(210,50%,40%,.25) 0 -5px 6px 4px, hsla(210,80%,95%,1) 0 5px 6px 4px;}#buttons.jsx-1516630020{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;max-height:75px;}@media (max-width:720px){#buttons.jsx-1516630020{display:inline-block;height:50px;width:100%;margin:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycEJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQnVCLEFBSzBELEFBZ0NwQixBQWU0QixBQUNELEFBR1osQUFrQkgsQUFPQSxXQTNDaEIsT0FDQyxHQTJDWSxHQXpCZ0gsRUFqQmxILEtBNUJlLEVBdUVkLFdBMUNMLEFBMkNNLFlBQ3BCLEVBM0NlLGVBQ08sY0FTa0IsQUFDRCxRQUhnRCxJQXlCbEUsd0RBVGdCLG9CQVVyQixnQkFDbEIsNkVBL0R1QixrREFHTCxnQkFDSixZQUNBLFlBQ0ksZ0JBQ0Usa0JBVzJGLGdEQW1CL0csWUFnQkEsc3dCQWpDQSIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXENvcnBCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29ycEltYWdlIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvZmFjdG9yeS1maWd1cmUucG5nJztcclxuaW1wb3J0IENvcnBFeHBsYWluIGZyb20gJy4vQ29ycEV4cGxhaW4nO1xyXG5cclxuY2xhc3MgQ29ycEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29ycEV4cGxhaW4gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGUge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsMCUsOTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCBoc2xhKDAsMCUsMTUlLCAgMSkgMCAgMHB4IDBweCA0cHgsIC8qIGJvcmRlciAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwxNSUsIC44KSAwIC0xcHggNXB4IDRweCwgLyogc29mdCBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwwJSwgLjI1KSAwIC0xcHggMHB4IDdweCwgLyogYm90dG9tIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDEwMCUsLjcpIDAgIDJweCAxcHggN3B4LCAvKiB0b3AgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDAsMCUsIDAlLC4xNSkgMCAtNXB4IDZweCA0cHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgwLDAlLDEwMCUsLjUpIDAgIDVweCA2cHggNHB4OyAvKiBvdXRlciBITCAqLyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogQnJ1c2hlZCBNZXRhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAgIDAlLCAgOCUgNTAlLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlIDEwMCUsIDEyJSA1MCUsIGhzbGEoMCwwJSwxMDAlLC42KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICAgMCUgIDUwJSwgNTAlICA3JSwgaHNsYSgwLDAlLDEwMCUsLjUpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggMTAwJSAgNTAlLCA1MCUgIDUlLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMTAwJSAxMDAlLCBoc2xhKDAsMCUsICAwJSwwKSAwJSwgaHNsYSgwLDAlLCAgMCUsMCkgICAzJSwgaHNsYSgwLDAlLCAgMCUsLjEpIDMuNSUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMTAwJSAxMDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgICA2JSwgaHNsYSgwLDAlLDEwMCUsLjEpIDcuNSUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMTAwJSAxMDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMS4yJSwgaHNsYSgwLDAlLDEwMCUsLjIpIDIuMiUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAyMDAlIDUwJSwgaHNsYSgwLDAlLDkwJSwxKSA1JSwgaHNsYSgwLDAlLDg1JSwxKSAzMCUsIGhzbGEoMCwwJSw2MCUsMSkgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTpiZWZvcmUsICNjaXJjbGU6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZmFrZSBjb25pY2FsIGdyYWRpZW50cyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgICAwJSwgMTAlIDUwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlIDEwMCUsIDEwJSA1MCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggICAwJSAgNTAlLCA1MCUgMTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDEwMCUgIDUwJSwgNTAlIDA2JSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmJlZm9yZSB7IHRyYW5zZm9ybTogcm90YXRlKCA2NWRlZyk7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTphZnRlciB7IHRyYW5zZm9ybTogcm90YXRlKC02NWRlZyk7IH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbCgyMTAsIDEwMCUsIDQwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBoc2xhKDIxMCwxMDAlLDIwJSwuMykgMCAtMXB4IDAsIGhzbCgyMTAsMTAwJSw4NSUpIDAgMnB4IDFweCwgaHNsYSgyMDAsMTAwJSw4MCUsMSkgMCAwIDVweCwgaHNsYSgyMTAsMTAwJSw1MCUsLjYpIDAgMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDMwJSwgIDEpIDAgIDBweCAwcHggNHB4LCAvKiBib3JkZXIgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDE1JSwgLjQpIDAgLTFweCA1cHggNHB4LCAvKiBzb2Z0IFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwyMCUsLjI1KSAwIC0xcHggMHB4IDdweCwgLyogYm90dG9tIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwxMDAlLC43KSAwICAycHggMXB4IDdweCwgLyogdG9wIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsMTAwJSw3NSUsIC44KSAwICAwcHggM3B4IDJweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCw1MCUsNDAlLCAuMjUpIDAgLTVweCA2cHggNHB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDgwJSw5NSUsICAgMSkgMCAgNXB4IDZweCA0cHg7IC8qIG91dGVyIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogRW5kIEJydXNoZWQgTWV0YWwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNidXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgI2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcnBCdXR0b247Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\CorpButton.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CorpButton);

/***/ }),

/***/ "./components/CorpContent1.js":
/*!************************************!*\
  !*** ./components/CorpContent1.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\CorpContent1.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class CorpContent extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      className1: "flipCard",
      className2: "flipCard",
      className3: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade",
      fadeTwoA: "unFade",
      fadeTwoB: "fade",
      fadeThreeA: "unFade",
      fadeThreeB: "fade"
    };
    this.flip1 = this.flip1.bind(this);
    this.unflip1 = this.unflip1.bind(this);
    this.flip2 = this.flip2.bind(this);
    this.unflip2 = this.unflip2.bind(this);
    this.flip3 = this.flip3.bind(this);
    this.unflip3 = this.unflip3.bind(this);
  }

  flip1() {
    this.setState({
      className1: "flipCard is-flipped",
      fadeOneA: "fade",
      fadeOneB: "unFade"
    });
  }

  unflip1() {
    this.setState({
      className1: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade"
    });
  }

  flip2() {
    this.setState({
      className2: "flipCard is-flipped",
      fadeTwoA: "fade",
      fadeTwoB: "unFade"
    });
  }

  unflip2() {
    this.setState({
      className2: "flipCard",
      fadeTwoA: "unFade",
      fadeTwoB: "fade"
    });
  }

  flip3() {
    this.setState({
      className3: "flipCard is-flipped",
      fadeThreeA: "fade",
      fadeThreeB: "unFade"
    });
  }

  unflip3() {
    this.setState({
      className3: "flipCard",
      fadeThreeA: "unFade",
      fadeThreeB: "fade"
    });
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-362595368",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-362595368" + " " + "contentCanvas contentCanvas--card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "flipContainer1",
      onMouseEnter: this.flip1,
      onMouseLeave: this.unflip1,
      className: "jsx-362595368" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-362595368" + " " + (this.state.className1 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx("div", {
      id: this.state.fadeOneA,
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/CCON-7-loading-bay.jpg */ "./public/assets/CCON-7-loading-bay.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-362595368" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: this.state.fadeOneB,
      className: "jsx-362595368" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/CCON-7-loading-bay.jpg */ "./public/assets/CCON-7-loading-bay.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(20px)"
      },
      className: "jsx-362595368",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 27
      }
    }), __jsx("p", {
      id: "cardText1",
      className: "jsx-362595368" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 27
      }
    }, "Ccon Metals can act as a main receiving hub for multi-location clientele. This allows shipments from each location to be tracked, organized, graded, and invoiced; providing our clients peace of mind.")))), __jsx("div", {
      id: "flipContainer2",
      onMouseEnter: this.flip2,
      onMouseLeave: this.unflip2,
      className: "jsx-362595368" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card2",
      className: "jsx-362595368" + " " + (this.state.className2 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: this.state.fadeTwoA,
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/CCON-8-invoice.jpeg */ "./public/assets/CCON-8-invoice.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-362595368" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: this.state.fadeTwoB,
      className: "jsx-362595368" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/CCON-8-invoice.jpeg */ "./public/assets/CCON-8-invoice.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(20px)"
      },
      className: "jsx-362595368",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 27
      }
    }), __jsx("p", {
      id: "cardText2",
      className: "jsx-362595368" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 27
      }
    }, "Ccon Metals is well versed in all aspects of multi layer accounts and their specific needs, either standard or customized. Call or email us today to find out how we can customize your Revolution experience!")))), __jsx("div", {
      id: "flipContainer3",
      onMouseEnter: this.flip3,
      onMouseLeave: this.unflip3,
      className: "jsx-362595368" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card3",
      className: "jsx-362595368" + " " + (this.state.className3 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: this.state.fadeThreeA,
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/CCON-369-catalyst-jars.jpg */ "./public/assets/CCON-369-catalyst-jars.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-362595368" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: this.state.fadeThreeB,
      className: "jsx-362595368" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/CCON-369-catalyst-jars.jpg */ "./public/assets/CCON-369-catalyst-jars.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(20px)"
      },
      className: "jsx-362595368",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 27
      }
    }), __jsx("p", {
      id: "cardText3",
      className: "jsx-362595368" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 27
      }
    }, "Ccon Metals specializes in loose material assay services: running lots as small as only a few pounds, with no upper limit. We offer exceptional refining terms that match current scrap catalytic converter prices; with a highly competitive turnaround time."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "362595368",
      __self: this
    }, "@-webkit-keyframes fadeIn-jsx-362595368{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeIn-jsx-362595368{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadeOut-jsx-362595368{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}@keyframes fadeOut-jsx-362595368{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}#fade.jsx-362595368{-webkit-animation:fadeOut-jsx-362595368 ease 0.5s;animation:fadeOut-jsx-362595368 ease 0.5s;}#unFade.jsx-362595368{-webkit-animation:fadeIn-jsx-362595368 ease 0.5s;animation:fadeIn-jsx-362595368 ease 0.5s;}.cardText.jsx-362595368{position:absolute;height:100%;width:80%;-webkit-transform:translateY(-105%);-ms-transform:translateY(-105%);transform:translateY(-105%);}#cardText1.jsx-362595368{text-align:right;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.3vw);text-shadow:2px 2px 2px black;}#cardText2.jsx-362595368{text-align:center;width:90%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:white;font-size:calc(12px + 1.3vw);text-shadow:2px 2px 2px black;}#cardText3.jsx-362595368{text-align:left;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.15vw);text-shadow:2px 2px 2px black;}#contentContainer.jsx-362595368{position:absolute;height:100%;width:100%;background-image:url('image');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%);-webkit-transform:translateX(-225%);-ms-transform:translateX(-225%);transform:translateX(-225%);overflow:hidden;border:5px solid silver;box-sizing:border-box;}.contentCanvas.jsx-362595368{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}.flipCard.jsx-362595368{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}.card__face.jsx-362595368{position:absolute;height:100%;width:100%;text-align:center;}.card__face--front.jsx-362595368{background:white;overflow:hidden;}.card__face--back.jsx-362595368{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );overflow:hidden;}.flipCard.is-flipped.jsx-362595368{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCardContainer.jsx-362595368{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333333333333333333333333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-362595368{width:100%;height:33%;margin-top:0%;}#card3.jsx-362595368{margin-top:0%;}.card__face--back.jsx-362595368{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-362595368{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}#card2.jsx-362595368{margin-top:0%;}.flipCard.jsx-362595368{width:100%;height:100%;}.contentCanvas.jsx-362595368{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:102%;width:100%;margin-top:0%;}#contentContainer.jsx-362595368{height:100%;min-height:575px;overflow:hidden;}#cardText1.jsx-362595368{text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.4vw);}#cardText2.jsx-362595368{text-align:center;width:75%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:white;font-size:calc(12px + 1.4vw);}#cardText3.jsx-362595368{text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.3vw);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycENvbnRlbnQxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThJaUIsQUFLaUMsQUFJQSxBQU1BLEFBSUEsQUFJQSxBQUtnQixBQUlELEFBSVQsQUFPRCxBQVdDLEFBV0YsQUFXRSxBQWNSLEFBUUUsQUFlTSxBQVFELEFBS0EsQUFNVyxBQVFWLEFBV0wsQUFPZCxBQUdvQixBQUtXLEFBTS9CLEFBR2MsQUFLZ0IsQUFRZixBQU1NLEFBVUEsQUFVQSxVQWhOcEIsQUFJQSxBQU1BLEFBSUEsQUFJQSxBQW1FWSxDQTZEQyxBQXdCQyxDQTdFRSxBQTBGRyxFQS9CbkIsQUFjQSxFQTFHUyxDQXRCQSxBQThFTyxBQUtZLEFBbUNFLENBN0hsQixBQWtCRixBQXNCRSxBQXFDQSxBQWlGRCxBQVVDLEFBVUQsSUEzSEEsQUE2REssQ0F3QmhCLEVBOUdRLENBdEJBLENBdUpFLEFBb0JBLENBaEtELEFBNENPLEFBMEdMLENBaEJPLENBeEpSLEFBd0NDLEFBcUNBLEdBL0NxQixBQXlCcEIsQUE4QmQsQ0E3RWtDLENBdUpFLEFBb0JBLENBL0RsQyxDQWpHUSxBQXNKRSxHQXhLa0IsQ0F3Q0UsQUFzQ1osR0FoQlAsQ0EzQ3FCLEFBb0NsQixBQWlHZCxBQWlCa0MsVUExR3RCLElBUGQsQUF1QkEsUUFmWSxJQXZCd0IsTUF3QmIsWUFxQ1gsQ0E1R1osQUFvSnFCLEVBeEpyQixJQXdHQSxBQWtDRSxFQTlEMEIsQ0FxQ2QsTUE3RE0sRUFxR0osSUF2Q3FCLEVBZm5CLEFBbUNoQixNQW9CYSxJQXJHWSxNQStDM0IsQ0F1RGtCLE1BaEpsQixFQTZCWSxDQXRCQSxDQXVKRSxBQW9CQSxJQWpDWixFQXpDWSxFQTFFQSxDQXRCQSxDQVdBLEFBNElFLEFBVUEsQUFVQSxRQTFFTyxFQTFFUyxDQXRCRCxDQVdBLEFBNElFLEFBVUEsQUFVQSxpQkF6RWpDLFdBakdnQyxBQXNCQSxDQVhBLEFBNEk5QixBQVVBLEFBVUEsU0FuSDRCLFVBdkJBLFVBaEM5QixBQXNCQSxDQVhBLDJFQTZDb0IsVUF2QkYsUUF3QkQsUUF2QlMsT0F5QjFCLGlCQXhCd0Isc0JBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycENvbnRlbnQxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIENvcnBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICBjbGFzc05hbWUxOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTI6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMzogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBmYWRlT25lQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZU9uZUI6IFwiZmFkZVwiLFxyXG4gICAgICBmYWRlVHdvQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVR3b0I6IFwiZmFkZVwiLFxyXG4gICAgICBmYWRlVGhyZWVBOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlVGhyZWVCOiBcImZhZGVcIixcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZsaXAxID0gdGhpcy5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAxID0gdGhpcy51bmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAyID0gdGhpcy5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAyID0gdGhpcy51bmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAzID0gdGhpcy5mbGlwMy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAzID0gdGhpcy51bmZsaXAzLmJpbmQodGhpcyk7XHJcbn1cclxuXHJcbmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVPbmVBIDogXCJmYWRlXCIsIGZhZGVPbmVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZFwiLCBmYWRlT25lQSA6IFwidW5GYWRlXCIsIGZhZGVPbmVCIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVR3b0EgOiBcImZhZGVcIiwgZmFkZVR3b0IgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkXCIsIGZhZGVUd29BIDogXCJ1bkZhZGVcIiwgZmFkZVR3b0IgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlVGhyZWVBIDogXCJmYWRlXCIsIGZhZGVUaHJlZUIgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkXCIsIGZhZGVUaHJlZUEgOiBcInVuRmFkZVwiLCBmYWRlVGhyZWVCIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuXHJcbnJlbmRlcigpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhcyBjb250ZW50Q2FudmFzLS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIxXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAxfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMX0gIGlkPVwiY2FyZDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9e3RoaXMuc3RhdGUuZmFkZU9uZUF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTctbG9hZGluZy1iYXkuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZU9uZUJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTctbG9hZGluZy1iYXkuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDFcIj5DY29uIE1ldGFscyBjYW4gYWN0IGFzIGEgbWFpbiByZWNlaXZpbmcgaHViIGZvciBtdWx0aS1sb2NhdGlvbiBjbGllbnRlbGUuIFRoaXMgYWxsb3dzIHNoaXBtZW50cyBmcm9tIGVhY2ggbG9jYXRpb24gdG8gYmUgdHJhY2tlZCwgb3JnYW5pemVkLCBncmFkZWQsIGFuZCBpbnZvaWNlZDsgcHJvdmlkaW5nIG91ciBjbGllbnRzIHBlYWNlIG9mIG1pbmQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMlwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMn0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUyfSAgaWQ9XCJjYXJkMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVHdvQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tOC1pbnZvaWNlLmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVHdvQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tOC1pbnZvaWNlLmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cigyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIiBpZD1cImNhcmRUZXh0MlwiPkNjb24gTWV0YWxzIGlzIHdlbGwgdmVyc2VkIGluIGFsbCBhc3BlY3RzIG9mIG11bHRpIGxheWVyIGFjY291bnRzIGFuZCB0aGVpciBzcGVjaWZpYyBuZWVkcywgZWl0aGVyIHN0YW5kYXJkIG9yIGN1c3RvbWl6ZWQuIENhbGwgb3IgZW1haWwgdXMgdG9kYXkgdG8gZmluZCBvdXQgaG93IHdlIGNhbiBjdXN0b21pemUgeW91ciBSZXZvbHV0aW9uIGV4cGVyaWVuY2UhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyM1wiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwM30gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUzfSAgaWQ9XCJjYXJkM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVGhyZWVBfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQ0NPTi0zNjktY2F0YWx5c3QtamFycy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVGhyZWVCfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQ0NPTi0zNjktY2F0YWx5c3QtamFycy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cigyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIiBpZD1cImNhcmRUZXh0M1wiPkNjb24gTWV0YWxzIHNwZWNpYWxpemVzIGluIGxvb3NlIG1hdGVyaWFsIGFzc2F5IHNlcnZpY2VzOiBydW5uaW5nIGxvdHMgYXMgc21hbGwgYXMgb25seSBhIGZldyBwb3VuZHMsIHdpdGggbm8gdXBwZXIgbGltaXQuIFdlIG9mZmVyIGV4Y2VwdGlvbmFsIHJlZmluaW5nIHRlcm1zIHRoYXQgbWF0Y2ggY3VycmVudCBzY3JhcCBjYXRhbHl0aWMgY29udmVydGVyIHByaWNlczsgd2l0aCBhIGhpZ2hseSBjb21wZXRpdGl2ZSB0dXJuYXJvdW5kIHRpbWUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNmYWRlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVPdXQgZWFzZSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjdW5GYWRlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTA1JSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjN2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZFRleHQzIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuMTV2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMjUlKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tZnJvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiA0MHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS40dncpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZFRleHQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjR2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvcnBDb250ZW50OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\CorpContent1.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CorpContent);

/***/ }),

/***/ "./components/CorpContent2.js":
/*!************************************!*\
  !*** ./components/CorpContent2.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\CorpContent2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class CorpContent extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      className1: "flipCard",
      className2: "flipCard",
      className3: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade",
      fadeTwoA: "unFade",
      fadeTwoB: "fade",
      fadeThreeA: "unFade",
      fadeThreeB: "fade"
    };
    this.flip1 = this.flip1.bind(this);
    this.unflip1 = this.unflip1.bind(this);
    this.flip2 = this.flip2.bind(this);
    this.unflip2 = this.unflip2.bind(this);
    this.flip3 = this.flip3.bind(this);
    this.unflip3 = this.unflip3.bind(this);
  }

  flip1() {
    this.setState({
      className1: "flipCard is-flipped",
      fadeOneA: "fade",
      fadeOneB: "unFade"
    });
  }

  unflip1() {
    this.setState({
      className1: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade"
    });
  }

  flip2() {
    this.setState({
      className2: "flipCard is-flipped",
      fadeTwoA: "fade",
      fadeTwoB: "unFade"
    });
  }

  unflip2() {
    this.setState({
      className2: "flipCard",
      fadeTwoA: "unFade",
      fadeTwoB: "fade"
    });
  }

  flip3() {
    this.setState({
      className3: "flipCard is-flipped",
      fadeThreeA: "fade",
      fadeThreeB: "unFade"
    });
  }

  unflip3() {
    this.setState({
      className3: "flipCard",
      fadeThreeA: "unFade",
      fadeThreeB: "fade"
    });
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-2488032103",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-2488032103" + " " + "contentCanvas contentCanvas--card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "flipContainer1",
      onMouseEnter: this.flip1,
      onMouseLeave: this.unflip1,
      className: "jsx-2488032103" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-2488032103" + " " + (this.state.className1 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx("div", {
      id: this.state.fadeOneA,
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/APP-7-team.jpg */ "./public/assets/APP-7-team.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-2488032103" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: this.state.fadeOneB,
      className: "jsx-2488032103" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/APP-7-team.jpg */ "./public/assets/APP-7-team.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(20px)"
      },
      className: "jsx-2488032103",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 27
      }
    }), __jsx("p", {
      id: "cardText1",
      className: "jsx-2488032103" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 27
      }
    }, "The Ccon Revolution App gives the Administrator clear oversight of all physical locations. This is accomplished by managing and tracking profitability, viewing purchase invoices, and analyzing each shipment.")))), __jsx("div", {
      id: "flipContainer2",
      onMouseEnter: this.flip2,
      onMouseLeave: this.unflip2,
      className: "jsx-2488032103" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card2",
      className: "jsx-2488032103" + " " + (this.state.className2 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: this.state.fadeTwoA,
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/APP-8-control.jpg */ "./public/assets/APP-8-control.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-2488032103" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: this.state.fadeTwoB,
      className: "jsx-2488032103" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/APP-8-control.jpg */ "./public/assets/APP-8-control.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(20px)"
      },
      className: "jsx-2488032103",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 27
      }
    }), __jsx("p", {
      id: "cardText2",
      className: "jsx-2488032103" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 27
      }
    }, "Within the Ccon Revolution App the Administrator can assign specific privileges for each location's staff via 3 role assignments: Manager, Supervisor, and Grader.")))), __jsx("div", {
      id: "flipContainer3",
      onMouseEnter: this.flip3,
      onMouseLeave: this.unflip3,
      className: "jsx-2488032103" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card3",
      className: "jsx-2488032103" + " " + (this.state.className3 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: this.state.fadeThreeA,
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/APP-9-security.jpg */ "./public/assets/APP-9-security.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-2488032103" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: this.state.fadeThreeB,
      className: "jsx-2488032103" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/APP-9-security.jpg */ "./public/assets/APP-9-security.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(20px)"
      },
      className: "jsx-2488032103",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 27
      }
    }), __jsx("p", {
      id: "cardText3",
      className: "jsx-2488032103" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 27
      }
    }, "The Ccon Revolution App keeps a list of your clients, their pertinent information, and order history in your hands. This mitigates the risk of trusted staff leaving your employ and taking your catalytic converter recycling customers with them; stay protected with instant staff access denial."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2488032103",
      __self: this
    }, "@-webkit-keyframes fadeIn-jsx-2488032103{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeIn-jsx-2488032103{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadeOut-jsx-2488032103{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}@keyframes fadeOut-jsx-2488032103{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}#fade.jsx-2488032103{-webkit-animation:fadeOut-jsx-2488032103 ease 0.5s;animation:fadeOut-jsx-2488032103 ease 0.5s;}#unFade.jsx-2488032103{-webkit-animation:fadeIn-jsx-2488032103 ease 0.5s;animation:fadeIn-jsx-2488032103 ease 0.5s;}.cardText.jsx-2488032103{position:absolute;height:100%;width:80%;-webkit-transform:translateY(-105%);-ms-transform:translateY(-105%);transform:translateY(-105%);}#cardText1.jsx-2488032103{text-align:right;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.1vw);text-shadow:2px 2px 2px black;}#cardText2.jsx-2488032103{text-align:center;width:90%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:white;font-size:calc(12px + 1.2vw);text-shadow:2px 2px 2px black;}#cardText3.jsx-2488032103{text-align:left;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:white;font-size:calc(12px + 1vw);width:75%;text-shadow:2px 2px 2px black;}#contentContainer.jsx-2488032103{position:absolute;height:100%;width:100%;background-image:url('image');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);right:15%;overflow:hidden;border:5px solid silver;box-sizing:border-box;}.contentCanvas.jsx-2488032103{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}.flipCard.jsx-2488032103{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}.card__face.jsx-2488032103{position:absolute;height:100%;width:100%;text-align:center;}.card__face--front.jsx-2488032103{background:white;overflow:hidden;}.card__face--back.jsx-2488032103{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );overflow:hidden;}.flipCard.is-flipped.jsx-2488032103{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCardContainer.jsx-2488032103{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333333333333333333333333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-2488032103{width:100%;height:33%;margin-top:0%;}#card3.jsx-2488032103{margin-top:0%;}.card__face--back.jsx-2488032103{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-2488032103{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}#card2.jsx-2488032103{margin-top:0%;}.flipCard.jsx-2488032103{width:100%;height:100%;}.contentCanvas.jsx-2488032103{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:102%;width:100%;margin-top:0%;}#contentContainer.jsx-2488032103{height:100%;min-height:575px;overflow:hidden;}#cardText1.jsx-2488032103{text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.4vw);}#cardText2.jsx-2488032103{text-align:center;width:75%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:white;font-size:calc(12px + 1.3vw);}#cardText3.jsx-2488032103{text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.3vw);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycENvbnRlbnQyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStJaUIsQUFLaUMsQUFJQSxBQU1BLEFBSUEsQUFJQSxBQUtnQixBQUlELEFBSVQsQUFPRCxBQVdDLEFBV0YsQUFXRSxBQWNSLEFBUUUsQUFlTSxBQVFELEFBS0EsQUFNVyxBQVFWLEFBV0wsQUFPZCxBQUdvQixBQUtXLEFBTS9CLEFBR2MsQUFLZ0IsQUFRZixBQU1NLEFBVUEsQUFVQSxVQWhOcEIsQUFJQSxBQU1BLEFBSUEsQUFJQSxBQW1FWSxDQTZEQyxBQXdCQyxDQTdFRSxBQTBGRyxFQS9CbkIsQUFjQSxFQTFHUyxDQXRCQSxBQThFTyxBQUtZLEFBbUNFLENBN0hsQixBQWtCRixBQXNCRSxBQXFDQSxBQWlGRCxBQVVDLEFBVUQsSUEzSEEsQUE2REssQ0F3QmhCLEVBOUdRLENBdEJBLENBdUpFLEFBb0JBLENBaEtELEFBNENPLEFBMEdMLENBaEJPLENBeEpSLEFBd0NDLEFBcUNBLEdBL0NxQixBQXlCcEIsQUE4QmQsQ0E3RWtDLENBdUpFLEFBb0JBLENBL0RsQyxDQWpHUSxBQXNKRSxHQXhLa0IsQ0F3Q0UsQUFzQ1osR0FoQlAsQ0EzQ3FCLEFBb0NsQixBQWlHZCxBQWlCa0MsVUExR3RCLElBUGQsQUF1QkEsUUFmWSxJQXZCd0IsTUF3QmIsWUFxQ1gsQ0F3Q1MsRUFwSnJCLEVBSkEsRUF3R0EsQUFrQ0UsRUE5RDBCLENBcUNkLE1BN0RNLEVBcUdKLElBdkNxQixFQWZuQixBQW1DaEIsTUFvQmEsSUFyR2UsTUErQzlCLENBdURrQixNQWhKbEIsRUE2QmMsQ0F0QkYsQ0F1SkUsQUFvQkEsSUFqQ1osRUF6Q1ksR0FoR0EsQ0FXQSxBQVdlLEFBaUliLEFBVUEsQUFVQSxRQTFFTyxHQWhHUSxDQVdBLEFBNElFLEFBVUEsQUFVQSxlQXJKckIsRUE0RVosUUEzRWdDLEdBdEJBLENBV0EsQUE0STlCLEFBVUEsQUFVQSxTQW5INEIsaUJBakM5QixFQVVZLENBaENaLENBV0EsUUFzQmtCLGdCQUNRLHdCQUNGLHNCQUN4QixLQW9Cb0Isa0JBQ0gsZUFFakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxDb3JwQ29udGVudDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQ29ycENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgIGNsYXNzTmFtZTE6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMjogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUzOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGZhZGVPbmVBOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlT25lQjogXCJmYWRlXCIsXHJcbiAgICAgIGZhZGVUd29BOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlVHdvQjogXCJmYWRlXCIsXHJcbiAgICAgIGZhZGVUaHJlZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUaHJlZUI6IFwiZmFkZVwiLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmxpcDEgPSB0aGlzLmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDEgPSB0aGlzLnVuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDIgPSB0aGlzLmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDIgPSB0aGlzLnVuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDMgPSB0aGlzLmZsaXAzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDMgPSB0aGlzLnVuZmxpcDMuYmluZCh0aGlzKTtcclxufVxyXG5cclxuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZU9uZUEgOiBcImZhZGVcIiwgZmFkZU9uZUIgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkXCIsIGZhZGVPbmVBIDogXCJ1bkZhZGVcIiwgZmFkZU9uZUIgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlVHdvQSA6IFwiZmFkZVwiLCBmYWRlVHdvQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmRcIiwgZmFkZVR3b0EgOiBcInVuRmFkZVwiLCBmYWRlVHdvQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUaHJlZUEgOiBcImZhZGVcIiwgZmFkZVRocmVlQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmRcIiwgZmFkZVRocmVlQSA6IFwidW5GYWRlXCIsIGZhZGVUaHJlZUIgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5cclxucmVuZGVyKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzIGNvbnRlbnRDYW52YXMtLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjFcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDF9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAxfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUxfSAgaWQ9XCJjYXJkMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlT25lQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0FQUC03LXRlYW0uanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZU9uZUJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9BUFAtNy10ZWFtLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDIwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiIGlkPVwiY2FyZFRleHQxXCI+VGhlIENjb24gUmV2b2x1dGlvbiBBcHAgZ2l2ZXMgdGhlIEFkbWluaXN0cmF0b3IgY2xlYXIgb3ZlcnNpZ2h0IG9mIGFsbCBwaHlzaWNhbCBsb2NhdGlvbnMuIFRoaXMgaXMgYWNjb21wbGlzaGVkIGJ5IG1hbmFnaW5nIGFuZCB0cmFja2luZyBwcm9maXRhYmlsaXR5LCB2aWV3aW5nIHB1cmNoYXNlIGludm9pY2VzLCBhbmQgYW5hbHl6aW5nIGVhY2ggc2hpcG1lbnQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMlwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMn0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUyfSAgaWQ9XCJjYXJkMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVHdvQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0FQUC04LWNvbnRyb2wuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVR3b0J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9BUFAtOC1jb250cm9sLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDIwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiIGlkPVwiY2FyZFRleHQyXCI+V2l0aGluIHRoZSBDY29uIFJldm9sdXRpb24gQXBwIHRoZSBBZG1pbmlzdHJhdG9yIGNhbiBhc3NpZ24gc3BlY2lmaWMgcHJpdmlsZWdlcyBmb3IgZWFjaCBsb2NhdGlvbidzIHN0YWZmIHZpYSAzIHJvbGUgYXNzaWdubWVudHM6IE1hbmFnZXIsIFN1cGVydmlzb3IsIGFuZCBHcmFkZXIuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyM1wiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwM30gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUzfSAgaWQ9XCJjYXJkM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVGhyZWVBfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQVBQLTktc2VjdXJpdHkuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVRocmVlQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0FQUC05LXNlY3VyaXR5LmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDIwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDNcIj5UaGUgQ2NvbiBSZXZvbHV0aW9uIEFwcCBrZWVwcyBhIGxpc3Qgb2YgeW91ciBjbGllbnRzLCB0aGVpciBwZXJ0aW5lbnQgaW5mb3JtYXRpb24sIGFuZCBvcmRlciBoaXN0b3J5IGluIHlvdXIgaGFuZHMuIFRoaXMgbWl0aWdhdGVzIHRoZSByaXNrIG9mIHRydXN0ZWQgc3RhZmYgbGVhdmluZyB5b3VyIGVtcGxveSBhbmQgdGFraW5nIHlvdXIgY2F0YWx5dGljIGNvbnZlcnRlciByZWN5Y2xpbmcgY3VzdG9tZXJzIHdpdGggdGhlbTsgc3RheSBwcm90ZWN0ZWQgd2l0aCBpbnN0YW50IHN0YWZmIGFjY2VzcyBkZW5pYWwuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNmYWRlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVPdXQgZWFzZSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjdW5GYWRlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTA1JSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuMXZ3KTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjJ2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZFRleHQzIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1JTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tZnJvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiA0MHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS40dncpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZFRleHQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjN2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvcnBDb250ZW50OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\CorpContent2.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CorpContent);

/***/ }),

/***/ "./components/CorpContent3.js":
/*!************************************!*\
  !*** ./components/CorpContent3.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\CorpContent3.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class CorpContent extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      className1: "flipCard",
      className2: "flipCard",
      className3: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade",
      fadeTwoA: "unFade",
      fadeTwoB: "fade",
      fadeThreeA: "unFade",
      fadeThreeB: "fade"
    };
    this.flip1 = this.flip1.bind(this);
    this.unflip1 = this.unflip1.bind(this);
    this.flip2 = this.flip2.bind(this);
    this.unflip2 = this.unflip2.bind(this);
    this.flip3 = this.flip3.bind(this);
    this.unflip3 = this.unflip3.bind(this);
  }

  flip1() {
    this.setState({
      className1: "flipCard is-flipped",
      fadeOneA: "fade",
      fadeOneB: "unFade"
    });
  }

  unflip1() {
    this.setState({
      className1: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade"
    });
  }

  flip2() {
    this.setState({
      className2: "flipCard is-flipped",
      fadeTwoA: "fade",
      fadeTwoB: "unFade"
    });
  }

  unflip2() {
    this.setState({
      className2: "flipCard",
      fadeTwoA: "unFade",
      fadeTwoB: "fade"
    });
  }

  flip3() {
    this.setState({
      className3: "flipCard is-flipped",
      fadeThreeA: "fade",
      fadeThreeB: "unFade"
    });
  }

  unflip3() {
    this.setState({
      className3: "flipCard",
      fadeThreeA: "unFade",
      fadeThreeB: "fade"
    });
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-839369979" + " " + "contentCanvas contentCanvas--card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, __jsx("ul", {
      id: "outer-list",
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }, __jsx("li", {
      style: {
        listStyle: "none"
      },
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx("strong", {
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 55
      }
    }, __jsx("u", {
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 63
      }
    }, "If I create an account, do my staff need to create their own accounts as well?")), __jsx("br", {
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 157
      }
    }), "The primary account holder is responsible for sending any Ccon Revolution App invitations to their employees. This can be done via the \u201Cstaff\u201C option, under the \"management\" heading, within the App."), __jsx("li", {
      style: {
        listStyle: "none"
      },
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, __jsx("strong", {
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 55
      }
    }, __jsx("u", {
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 63
      }
    }, "What is the minimum/maximum amount of catalytic converters I can bring to Ccon Metals?")), __jsx("br", {
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 165
      }
    }), "Unlike most catalytic converter recycling businesses, Ccon Metals has no converter minimums or maximums.  Rest assured that, regardless of quantity, your converters will be purchased fairly. Call us to learn more!"), __jsx("li", {
      style: {
        listStyle: "none"
      },
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, __jsx("strong", {
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 56
      }
    }, __jsx("u", {
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 64
      }
    }, "What is Downgrading/Upgrading? Why is it done?  Does Ccon do this?")), __jsx("br", {
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 146
      }
    }), "Downgrading/Upgrading occurs when a buyer takes advantage of a seller by manipulating information. The reason a buyer may do this is to:", __jsx("ul", {
      id: "inner-list",
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 23
      }
    }, __jsx("li", {
      id: "inner-list-item",
      style: {
        listStyle: "square",
        padding: "0",
        margin: "0",
        listStylePosition: "inside"
      },
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      }
    }, "Secure new clients by \u201Dwowing\u201D them with artificial catalytic converter prices"), __jsx("li", {
      id: "inner-list-item",
      style: {
        listStyle: "square",
        padding: "0",
        margin: "0",
        listStylePosition: "inside"
      },
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 25
      }
    }, "Boost the value of popular converters by pulling value away from lesser known converters"), __jsx("li", {
      id: "inner-list-item",
      style: {
        listStyle: "square",
        padding: "0",
        margin: "0",
        listStylePosition: "inside"
      },
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, "Take money away from one client so a more \u201Cworthwhile\u201D client can be overpaid"), __jsx("li", {
      style: {
        listStyle: "none",
        padding: "0",
        margin: "0"
      },
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }
    }, __jsx("br", {
      className: "jsx-839369979",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 86
      }
    }), "We at Ccon Metals would never do such a disservice to our valued customers."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "839369979",
      __self: this
    }, "@-webkit-keyframes fadeIn-jsx-839369979{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeIn-jsx-839369979{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadeOut-jsx-839369979{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}@keyframes fadeOut-jsx-839369979{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}#outer-list.jsx-839369979{padding:0;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:100%;width:80%;margin:auto;}#inner-list.jsx-839369979{margin-top:10px;}#inner-list-item.jsx-839369979{display:list-item;}li.jsx-839369979{height:25%;font-size:calc(12px + 0.5vw);display:inline-block;margin-top:5px;}#fade.jsx-839369979{-webkit-animation:fadeOut-jsx-839369979 ease 0.5s;animation:fadeOut-jsx-839369979 ease 0.5s;}#unFade.jsx-839369979{-webkit-animation:fadeIn-jsx-839369979 ease 0.5s;animation:fadeIn-jsx-839369979 ease 0.5s;}.cardText.jsx-839369979{position:absolute;height:100%;width:100%;-webkit-transform:translateY(-65%);-ms-transform:translateY(-65%);transform:translateY(-65%);}#contentContainer.jsx-839369979{position:absolute;height:100%;width:100%;background-image:url('image');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(25%);-ms-transform:translateX(25%);transform:translateX(25%);right:25%;overflow-y:auto;border:5px solid silver;box-sizing:border-box;}.contentCanvas.jsx-839369979{z-index:1;height:90%;width:100%;margin:auto;margin-top:0%;}.flipCard.jsx-839369979{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}.card__face.jsx-839369979{position:absolute;height:100%;width:100%;text-align:center;}.card__face--front.jsx-839369979{background:white;overflow:hidden;}.card__face--back.jsx-839369979{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );overflow:hidden;}.flipCard.is-flipped.jsx-839369979{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCardContainer.jsx-839369979{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333333333333333333333333%;margin:auto;display:inline-block;}@media (max-width:720px){#outer-list.jsx-839369979{height:90%;}#inner-list-item.jsx-839369979{height:auto;}.flipCardContainer.jsx-839369979{width:100%;height:33%;margin-top:0%;}#card3.jsx-839369979{margin-top:0%;}.card__face--back.jsx-839369979{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-839369979{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}#card2.jsx-839369979{margin-top:0%;}.flipCard.jsx-839369979{width:100%;height:100%;}.contentCanvas.jsx-839369979{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:100%;width:100%;margin-top:0%;}#contentContainer.jsx-839369979{height:100%;min-height:575px;overflow-y:auto;}ul.jsx-839369979{padding:0;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:75%;width:80%;margin:auto;}li.jsx-839369979{margin-top:2vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycENvbnRlbnQzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFaUIsQUFLaUMsQUFJQSxBQU1BLEFBSUEsQUFJQSxBQU1GLEFBUU0sQUFJRSxBQUlQLEFBUWlCLEFBSUQsQUFJVCxBQU9BLEFBY1IsQUFRRSxBQWVNLEFBUUQsQUFLQSxBQU1XLEFBUVYsQUFXTCxBQUlDLEFBSUQsQUFPZCxBQUdvQixBQUtXLEFBTS9CLEFBR2MsQUFLZ0IsQUFTZixBQVFGLEFBUUssVUF2TWpCLEFBSUEsQUFNQSxBQUlBLEFBSUEsQUFNNkIsQUFxRGxCLEFBbUhvQixDQXhKRixBQWtHN0IsQUFRYSxBQXdCQyxDQXJGRSxBQXlEaEIsQUEwQ21CLEVBaENuQixBQWNBLENBa0NBLENBeEtGLENBNEVrQixBQUtZLEFBMkNFLENBeEhoQyxBQW9CYyxBQU9BLEFBcUNBLEdBdEJELENBcUVLLENBd0JoQixLQXJGZ0IsQ0FtR0UsQ0FoSVAsQUFPQSxBQXFDQSxFQXRCQyxDQThCZCxHQXVDRSxJQTNHcUIsQ0FrQnhCLEFBTWlDLEFBc0NaLEdBdkJKLEFBT0gsQ0FtR1gsVUFsR1ksR0FQZCxDQXVCQSxFQTlEaUIsTUErQ0wsSUF2QndCLEtBdEJwQyxDQThDdUIsWUFxQ1gsQ0EzRVosQUEySHFCLEVBL0hyQixJQXVFQSxBQTBDRSxFQXRFMEIsQ0FxQ2QsTUE3RE0sRUE2R0osSUEvQ3FCLEVBZm5CLEFBMkNoQixNQW9CYSxJQTdHYSxNQStDNUIsQ0ErRGtCLEdBekpKLEFBd0tDLENBdElmLFVBd0hFLEFBZVksQ0F4S0YsQ0F3R0UsUUFpRUUsQ0F4S0YsR0F3R1MsUUFpRXJCLENBeEtGLFlBeUdBLHFCQXpDOEIsYUF2QmxCLFVBQ00sZ0JBQ1Esd0JBQ0Ysc0JBQ3hCLFdBb0JvQixrQkFDSCxlQUVqQiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXENvcnBDb250ZW50My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDb3JwQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgICAgZmFkZU9uZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVPbmVCOiBcImZhZGVcIixcclxuICAgICAgZmFkZVR3b0E6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUd29COiBcImZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQjogXCJmYWRlXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mbGlwMSA9IHRoaXMuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMSA9IHRoaXMudW5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMiA9IHRoaXMuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMiA9IHRoaXMudW5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMyA9IHRoaXMuZmxpcDMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMyA9IHRoaXMudW5mbGlwMy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlT25lQSA6IFwiZmFkZVwiLCBmYWRlT25lQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiwgZmFkZU9uZUEgOiBcInVuRmFkZVwiLCBmYWRlT25lQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUd29BIDogXCJmYWRlXCIsIGZhZGVUd29CIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZFwiLCBmYWRlVHdvQSA6IFwidW5GYWRlXCIsIGZhZGVUd29CIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVRocmVlQSA6IFwiZmFkZVwiLCBmYWRlVGhyZWVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiLCBmYWRlVGhyZWVBIDogXCJ1bkZhZGVcIiwgZmFkZVRocmVlQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgIDx1bCBpZD1cIm91dGVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiB9fT48c3Ryb25nPjx1PklmIEkgY3JlYXRlIGFuIGFjY291bnQsIGRvIG15IHN0YWZmIG5lZWQgdG8gY3JlYXRlIHRoZWlyIG93biBhY2NvdW50cyBhcyB3ZWxsPzwvdT48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgcHJpbWFyeSBhY2NvdW50IGhvbGRlciBpcyByZXNwb25zaWJsZSBmb3Igc2VuZGluZyBhbnkgQ2NvbiBSZXZvbHV0aW9uIEFwcCBpbnZpdGF0aW9ucyB0byB0aGVpciBlbXBsb3llZXMuIFRoaXMgY2FuIGJlIGRvbmUgdmlhIHRoZSDigJxzdGFmZuKAnCBvcHRpb24sIHVuZGVyIHRoZSBcIm1hbmFnZW1lbnRcIiBoZWFkaW5nLCB3aXRoaW4gdGhlIEFwcC5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiB9fT48c3Ryb25nPjx1PldoYXQgaXMgdGhlIG1pbmltdW0vbWF4aW11bSBhbW91bnQgb2YgY2F0YWx5dGljIGNvbnZlcnRlcnMgSSBjYW4gYnJpbmcgdG8gQ2NvbiBNZXRhbHM/PC91Pjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFVubGlrZSBtb3N0IGNhdGFseXRpYyBjb252ZXJ0ZXIgcmVjeWNsaW5nIGJ1c2luZXNzZXMsIENjb24gTWV0YWxzIGhhcyBubyBjb252ZXJ0ZXIgbWluaW11bXMgb3IgbWF4aW11bXMuICBSZXN0IGFzc3VyZWQgdGhhdCwgcmVnYXJkbGVzcyBvZiBxdWFudGl0eSwgeW91ciBjb252ZXJ0ZXJzIHdpbGwgYmUgcHVyY2hhc2VkIGZhaXJseS4gQ2FsbCB1cyB0byBsZWFybiBtb3JlIVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCIgfX0gPjxzdHJvbmc+PHU+V2hhdCBpcyBEb3duZ3JhZGluZy9VcGdyYWRpbmc/IFdoeSBpcyBpdCBkb25lPyAgRG9lcyBDY29uIGRvIHRoaXM/PC91Pjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIERvd25ncmFkaW5nL1VwZ3JhZGluZyBvY2N1cnMgd2hlbiBhIGJ1eWVyIHRha2VzIGFkdmFudGFnZSBvZiBhIHNlbGxlciBieSBtYW5pcHVsYXRpbmcgaW5mb3JtYXRpb24uIFRoZSByZWFzb24gYSBidXllciBtYXkgZG8gdGhpcyBpcyB0bzogXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJpbm5lci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cImlubmVyLWxpc3QtaXRlbVwiIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJzcXVhcmVcIiwgcGFkZGluZzogXCIwXCIsIG1hcmdpbjogXCIwXCIsIGxpc3RTdHlsZVBvc2l0aW9uOiBcImluc2lkZVwiIH19PlNlY3VyZSBuZXcgY2xpZW50cyBieSDigJ13b3dpbmfigJ0gdGhlbSB3aXRoIGFydGlmaWNpYWwgY2F0YWx5dGljIGNvbnZlcnRlciBwcmljZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJpbm5lci1saXN0LWl0ZW1cIiBzdHlsZT17eyBsaXN0U3R5bGU6IFwic3F1YXJlXCIsIHBhZGRpbmc6IFwiMFwiLCBtYXJnaW46IFwiMFwiLCBsaXN0U3R5bGVQb3NpdGlvbjogXCJpbnNpZGVcIiB9fT5Cb29zdCB0aGUgdmFsdWUgb2YgcG9wdWxhciBjb252ZXJ0ZXJzIGJ5IHB1bGxpbmcgdmFsdWUgYXdheSBmcm9tIGxlc3NlciBrbm93biBjb252ZXJ0ZXJzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiaW5uZXItbGlzdC1pdGVtXCIgc3R5bGU9e3sgbGlzdFN0eWxlOiBcInNxdWFyZVwiLCBwYWRkaW5nOiBcIjBcIiwgbWFyZ2luOiBcIjBcIiwgbGlzdFN0eWxlUG9zaXRpb246IFwiaW5zaWRlXCIgfX0+VGFrZSBtb25leSBhd2F5IGZyb20gb25lIGNsaWVudCBzbyBhIG1vcmUg4oCcd29ydGh3aGlsZeKAnSBjbGllbnQgY2FuIGJlIG92ZXJwYWlkPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCIsIHBhZGRpbmc6IFwiMFwiLCBtYXJnaW46IFwiMFwiIH19PjxiciAvPldlIGF0IENjb24gTWV0YWxzIHdvdWxkIG5ldmVyIGRvIHN1Y2ggYSBkaXNzZXJ2aWNlIHRvIG91ciB2YWx1ZWQgY3VzdG9tZXJzLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI291dGVyLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjaW5uZXItbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2lubmVyLWxpc3QtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjV2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2ZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZU91dCBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICN1bkZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjUlKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tZnJvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiA0MHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICNvdXRlci1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2lubmVyLWxpc3QtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvcnBDb250ZW50OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\CorpContent3.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CorpContent);

/***/ }),

/***/ "./components/CorpExplain.js":
/*!***********************************!*\
  !*** ./components/CorpExplain.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\CorpExplain.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class CorpExplain extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      id: "explainContainer",
      className: "jsx-2951859949",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-2951859949" + " " + "allText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, __jsx("p", {
      id: "corpButtonTag",
      className: "jsx-2951859949",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, "Multi-Location"), __jsx("p", {
      id: "corpExplain",
      className: "jsx-2951859949",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    }, "Multiple converter buyers from several physical locations.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2951859949",
      __self: this
    }, "#explainContainer.jsx-2951859949{-webkit-transform:translate(0%,-75px);-ms-transform:translate(0%,-75px);transform:translate(0%,-75px);}.allText.jsx-2951859949{-webkit-transform:translate(0%,0%);-ms-transform:translate(0%,0%);transform:translate(0%,0%);}#corpButtonTag.jsx-2951859949{font-weight:600;font-size:1.5em;color:black;-webkit-text-decoration:underline;text-decoration:underline;-webkit-transform:translate(0%,6px);-ms-transform:translate(0%,6px);transform:translate(0%,6px);}#corpExplain.jsx-2951859949{color:white;pointer-events:none;-webkit-transform:translate(0%,5px);-ms-transform:translate(0%,5px);transform:translate(0%,5px);font-size:calc(14px + 0.4vw);}@media (max-width:720px){#explainContainer.jsx-2951859949{position:absolute;width:100%;height:100%;-webkit-transform:translate(0%,-50px);-ms-transform:translate(0%,-50px);transform:translate(0%,-50px);}.allText.jsx-2951859949{position:absolute;width:100%;height:100%;margin:auto;}#corpButtonTag.jsx-2951859949{position:absolute;height:50px;width:200px;-webkit-transform:translate(0%,-20px);-ms-transform:translate(0%,-20px);transform:translate(0%,-20px);}#corpExplain.jsx-2951859949{position:absolute;color:white;pointer-events:none;width:400px;height:50px;margin-left:220px;-webkit-transform:translate(0%,-15px);-ms-transform:translate(0%,-15px);transform:translate(0%,-15px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycEV4cGxhaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJ5QixBQUt3QixBQUlBLEFBR3FCLEFBUUosQUFTVSxBQU9BLEFBT0EsQUFPQSxZQTdCRixJQVJKLEVBaUJELEFBT0EsQUFPQyxBQU9BLFdBcEJBLEFBT0EsQ0FPQSxBQU9RLEVBdENaLEFBUWlCLFNBVzlCLEFBTWlCLENBUWpCLEVBaEMyQixNQXNDVixHQWJoQixTQWNnQixZQUNNLGtCQUV2QixDQWhESCxTQUpBLEVBWUQsd0JBTWtDLGVBVTdCLENBY0EsYUF2QkoscUNBaUNJLE1BeENKIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycEV4cGxhaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQ29ycEV4cGxhaW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXhwbGFpbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImNvcnBCdXR0b25UYWdcIiA+TXVsdGktTG9jYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiY29ycEV4cGxhaW5cIj5NdWx0aXBsZSBjb252ZXJ0ZXIgYnV5ZXJzIGZyb20gc2V2ZXJhbCBwaHlzaWNhbCBsb2NhdGlvbnMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2V4cGxhaW5Db250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC03NXB4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWxsVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjb3JwQnV0dG9uVGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNnB4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY29ycEV4cGxhaW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNXB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMC40dncpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZXhwbGFpbkNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTBweClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWxsVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NvcnBCdXR0b25UYWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMjBweClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY29ycEV4cGxhaW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0xNXB4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcnBFeHBsYWluOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\CorpExplain.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CorpExplain);

/***/ }),

/***/ "./components/Revolution.js":
/*!**********************************!*\
  !*** ./components/Revolution.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CloseButton */ "./components/CloseButton.js");
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\Revolution.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Revolution extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.show) {
      return __jsx("div", {
        id: "contentContainer",
        className: "jsx-2524393851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "jsx-2524393851" + " " + "contentCanvas",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }
      }, "REVOLUTION PLUGS GO HERE"), __jsx("a", {
        onClick: this.props.onClose,
        id: "closeLink",
        className: "jsx-2524393851",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }
      }, __jsx(_CloseButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: "close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 68
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "2524393851",
        __self: this
      }, "#closeLink.jsx-2524393851{position:absolute;width:25px;height:25px;cursor:pointer;right:1%;top:1%;}#contentContainer.jsx-2524393851{height:100%;width:100%;margin:auto;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==');background-color:rgb(192,192,192);border-radius:8px;min-width:450px;}.contentCanvas.jsx-2524393851{margin:auto;z-index:15;}#corpProList.jsx-2524393851{list-style-type:none;font-size:1.6em;width:100%;-webkit-transform:translate(-5.3%,11%);-ms-transform:translate(-5.3%,11%);transform:translate(-5.3%,11%);}#corpPro1.jsx-2524393851{margin:0 0 10% 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcUmV2b2x1dGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQnFCLEFBSStDLEFBU04sQUFVQSxBQUtTLEFBUUosWUF0Qk4sQUFVQSxLQWFiLENBaENhLEdBd0JLLEVBZEosQUFVZCxNQW5CYyxNQVUrakUsRUFlaGtFLElBeEJJLE9BeUJpQixRQXhCdkIsU0FDRixPQUNYLGlGQXVCRSxxOURBaEJvQyxrQ0FDaEIsa0JBQ0YsZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcUmV2b2x1dGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICcuL0Nsb3NlQnV0dG9uJztcclxuXHJcbmNsYXNzIFJldm9sdXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUkVWT0xVVElPTiBQTFVHUyBHTyBIRVJFXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfSBpZD1cImNsb3NlTGlua1wiPjxDbG9zZUJ1dHRvbiBpZD1cImNsb3NlXCIgLz48L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2Nsb3NlTGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbVpnTTVEY3MzWVNORkRIVW8yTEdmWnV1a1NXeVVZaXJKQWRZYkYzTWZxRUttak0rSTJFZmhBOTRpRzNMN3VLclIrR2RXRDczeWRsSUIrNmhncmVmMVFUbG1nbWJNMy9MZVg1R0kxVXgxUldwZ3hwTHVaMitJK0lqelo4d3FFNG5pbHZRZGtVZGZoekk1UURXeStrdzVXZ2cycEdwZUVWZUNDQTdiODVCTzNGOUR6eEIzY2RxdkJ6V2NtemJ5TWlxaHp1WXF0SFJWRzJ5NHgrS09sbnlxbGE4QW9XV3B1Qm9ZUnh6WHJmS3VJTGw2U2ZpV0NianhvWkpVYUNCajFDakg3R0lhRGJjOWtxQlkzVy9SZ2pkYTFpcVFjT0p1MldXKzc2cFpDOVFHN00wMGRmZmU5aE5uc2V1cEZMNTNyOEY3WUhTd0pXVUtQMnErazdSZHN4eU9CMTFuMHh0T3ZuVzRpck1NRk5WNEgwdXF3UzVFeHNtUDlBeGJEVGM5SndnbmVBVDV2VGlVU20xRTdCU2ZsU3QzYmZhMXR2OERpM1I4bjNBZjdNTld6czQ5aG1hdUUyd1ArdHRycStBc1dwRkcyYXd2c3VPcWJpcFdIZ3R1dnVhQUUrQTFaLzdnQzloZXNucis3d3FDd0c4YzV5QWczQUwxZm04VDlBWnRwL2JiSkd3bDFwTnJFN1J1T1g3UGVNUlVFUlZhUHBFcyt5cWVvU211T2xva3F3NDlwZ29takxlaDdpY0hObEcxOXlqczZYWE9NZWRZbTV4SDJZeHBWMnRjMFJvMmpKZnhDNTBBcHV4R29iN2xNc3hmVGJlVXYwN1R5WXhwZUx1Y0VIMWdOZDRJS0gyTEFnNVRkVmhsQ2FmWnZwc2tmbmNDZng4cE9oSnpkNzZiSldlWUZuRmNpd2NZZnViUmMxMklwL3BwSWhBMS9tU1ovUnhqRkRySkM1eGlmRmpKcFkyWGw1elhkZ3VGcVl5VFIxelNwMVk5cCt0a3REWVlTTmZsY3hJMGl5TzRUUEJkbFJjcGVxaksvcGlGNWJrbHE3N1ZTRWFBK3o4cW1KVEZ6SVdpaXRibnpSNzk0VVNLQlVhVDBOVEVzVmpacUxhRlZxSm9QTjlPREc3MElQYmZCSEtLKy9xL0FXUjB0SnpZSFJVTE9hNE1QK1cvSGZHYWRaVWJmdzE3N0c3ai9PR2JJczhUYWhMeXlubDRYNFJpbkY3OTNPeitCVTBzYVh0VUhyVkJGVC9EbkEzY3ROUG9HYnM0aFJJalRvazhpK2FsZ1QxbFRIaTRTeEZ2T05LTnJnUUZBcTIvZ0ZuV01YZ3dmZmdZTUpwaUtZa21XM3RUZzNaUTlKcStmOFhOK0E1ZWVVS0hXdkpXSjJzZ0oxU29wK3d3aHFGVmlqcVdhSmh3dEQ4TU5sU0JlV05OV1RhNVo1a1BadzUrTGJWVDk5d3FUZHgyOWxNVUg0T0lHL0Q4NnJ1S0VhdUJqdkg1eHk2dW0vU2ZqN2VpNlVVVms0QUlsM015RDRNU1NUT0ZnU3dzSC9RSldhUTVhczdaY21nQlprempqVTFVclE3NGNpMWdXQkNTR0h0dVYxSDJtaFNuTzNXcC8zZkVWNWErNHd6Ly82cXk4SnhqWnNteHh5NSs0dzlDRE5KWTA5VDA3MmlLRzBFbk9TMGFyRVlnWHFZblhjWUh3alR0VU5BY01lbE9kNHhwa29xaVRZSUNXRnEwSlNpUGZQRFFkbnQrNC93dXFjWFk0N1FJTGJnQUFBQUJKUlU1RXJrSmdnZz09Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgI2NvcnBQcm9MaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNS4zJSwgMTElKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICNjb3JwUHJvMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxMCUgMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobnVsbClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2b2x1dGlvbjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\Revolution.js */"));
    } else {
      return null;
    }

    ;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Revolution);

/***/ }),

/***/ "./components/SliderCorp.js":
/*!**********************************!*\
  !*** ./components/SliderCorp.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CorpContent1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CorpContent1 */ "./components/CorpContent1.js");
/* harmony import */ var _CorpContent2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CorpContent2 */ "./components/CorpContent2.js");
/* harmony import */ var _CorpContent3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CorpContent3 */ "./components/CorpContent3.js");
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CloseButton */ "./components/CloseButton.js");
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\SliderCorp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Slider extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide1: "slide1",
      slide2: "slide2",
      slide3: "slide3",
      slideClass: "slide3",
      seeArrowRight: "visible",
      seeArrowLeft: "hidden"
    };
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  slideRight() {
    if (this.state.slideClass === this.state.slide1) {
      this.setState({
        slideClass: this.state.slide2,
        seeArrowRight: "visible"
      });
    } else if (this.state.slideClass === this.state.slide2) {
      this.setState({
        slideClass: this.state.slide3,
        seeArrowLeft: "hidden"
      });
    }
  }

  slideLeft() {
    if (this.state.slideClass === this.state.slide3) {
      this.setState({
        slideClass: this.state.slide2,
        seeArrowLeft: "visible"
      });
    } else if (this.state.slideClass === this.state.slide2) {
      this.setState({
        slideClass: this.state.slide1,
        seeArrowRight: "hidden"
      });
    }
  }

  render() {
    if (this.props.show === true) {
      return __jsx("div", {
        className: "jsx-2288755239" + " " + "slider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2288755239" + " " + (this.state.slideClass || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }
      }, __jsx(_CorpContent1__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 28
        }
      }), __jsx(_CorpContent2__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 28
        }
      }), __jsx(_CorpContent3__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 28
        }
      })), __jsx("button", {
        id: "goLeft",
        onClick: this.slideRight,
        className: "jsx-2288755239" + " " + (this.state.seeArrowLeft || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }
      }, __jsx("i", {
        id: "left",
        className: "jsx-2288755239" + " " + "ChevronLeft",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 99
        }
      })), __jsx("button", {
        id: "goRight",
        onClick: this.slideLeft,
        className: "jsx-2288755239" + " " + (this.state.seeArrowRight || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }
      }, __jsx("i", {
        id: "right",
        className: "jsx-2288755239" + " " + "ChevronRight",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 100
        }
      })), __jsx("a", {
        onClick: this.props.onClose,
        id: "closeLink",
        className: "jsx-2288755239",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }
      }, __jsx(_CloseButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 64
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "2288755239",
        __self: this
      }, ".hidden.jsx-2288755239{opacity:0;-webkit-transition:opacity 0.5s linear;transition:opacity 0.5s linear;pointer-events:none;}.visible.jsx-2288755239{opacity:1;-webkit-transition:opacity 0.5s linear;transition:opacity 0.5s linear;pointer-events:visible;}.ChevronLeft.jsx-2288755239{position:absolute;height:75px;width:75px;z-index:10;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.ChevronRight.jsx-2288755239{position:absolute;height:75px;width:75px;z-index:10;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}#left.jsx-2288755239{right:40px;top:0px;-webkit-filter:drop-shadow(4px 3px 3px black);filter:drop-shadow(4px 3px 3px black);}#right.jsx-2288755239{right:-40px;top:-5px;-webkit-filter:drop-shadow(-4px 3px 3px black);filter:drop-shadow(-4px 3px 3px black);}.ChevronLeft.jsx-2288755239::before,.ChevronLeft.jsx-2288755239::after{position:absolute;display:block;content:\"\";border:35px solid transparent;}.ChevronLeft.jsx-2288755239::before{border-top-color:#b00;}.ChevronLeft.jsx-2288755239::after{top:-10px;border-top-color:#fff;}.ChevronRight.jsx-2288755239::before,.ChevronRight.jsx-2288755239::after{position:absolute;display:block;content:\"\";border:35px solid transparent;}.ChevronRight.jsx-2288755239::before{border-top-color:#b00;}.ChevronRight.jsx-2288755239::after{top:-10px;border-top-color:#fff;}#closeLink.jsx-2288755239{position:absolute;width:25px;height:25px;cursor:pointer;right:2.5%;top:4.5%;}button.jsx-2288755239{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:75px;height:75px;background:none;border:none;cursor:pointer;}button.jsx-2288755239:focus{outline:none;box-shadow:none;}#goLeft.jsx-2288755239{left:0.5%;}#goRight.jsx-2288755239{right:0.5%;}.slider.jsx-2288755239{width:100%;height:100%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:450px;overflow:hidden;}i.jsx-2288755239{font-size:2vw;}.slide1.jsx-2288755239{position:relative;width:100%;height:60vh;margin:auto;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}.slide2.jsx-2288755239{position:relative;width:100%;height:60vh;margin:auto;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform:translateX(115%);-ms-transform:translateX(115%);transform:translateX(115%);}.slide3.jsx-2288755239{position:relative;width:100%;height:60vh;margin:auto;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform:translateX(225%);-ms-transform:translateX(225%);transform:translateX(225%);}@media (max-width:720px){#closeLink.jsx-2288755239{top:10px;right:15px;}.slider.jsx-2288755239{min-height:525px;}.slide1.jsx-2288755239{height:80vh;margin-top:0%;}.slide2.jsx-2288755239{height:80vh;margin-top:0%;}.slide3.jsx-2288755239{height:80vh;margin-top:0%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU2xpZGVyQ29ycC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RHFCLEFBSXVDLEFBTUEsQUFNUSxBQVFBLEFBUVAsQUFNQyxBQU9LLEFBUUksQUFHWixBQU1RLEFBUUksQUFHWixBQUtTLEFBU0EsQUFXTCxBQUtILEFBSUMsQUFJQSxBQVdHLEFBSUksQUFRQSxBQVNBLEFBV0wsQUFLUSxBQUlMLEFBS0EsQUFLQSxTQWxCRCxDQXRKZ0IsQUFNQSxBQThDVixBQWlCQSxBQThCekIsQ0F2RVksQUEyRVosQUFJZ0IsQ0F6RUgsQUE4SFYsQUFLQSxBQUtBLENBNUVpQixDQXdCcEIsR0FxQ0ksQ0EvSVksQUFRQSxBQXFCQyxBQWlCQSxBQWdCRixBQVNILEFBdUNHLEFBUUEsQUFTQSxDQTlHMkIsQ0EwSHRDLENBcEh1QyxDQWMzQyxBQWlCQSxDQTBDMEIsR0F4QkssQUE0RTNCLEFBS0EsQUFLQSxHQS9GWSxBQW9CaEIsQUE0QmdCLEFBUUEsQUFTQSxDQS9IRCxBQVFBLEVBcUJELEFBV2QsQUFNYyxBQVdkLFNBeERlLEFBUUEsQUFzREksQUFnREgsQUFRQSxBQVNBLEVBbEdpQixBQWlCQSxFQWlEaEIsT0E3RmxCLEFBUUEsQ0FxRytCLEFBUUEsQUFTQSxHQWpFZixXQUNGLE1BbENiLEFBaUJBLEdBa0JBLElBOUV3QixBQU1HLG9CQUwzQixHQU1BLEFBc0JBLElBTUEsWUFpRGUsQUF5QlEsV0F4QlAsTUF0RWhCLEdBUUEsR0ErRG9CLGFBdUNwQixBQVErQixBQVNBLEdBdkRmLFlBQ0csZUFDbkIsMkJBcUJvQixnQkFDQSxnQkFFcEIsSUFxQkEsQUFTQSIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXFNsaWRlckNvcnAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29ycENvbnRlbnQxIGZyb20gJy4vQ29ycENvbnRlbnQxJztcclxuaW1wb3J0IENvcnBDb250ZW50MiBmcm9tICcuL0NvcnBDb250ZW50Mic7XHJcbmltcG9ydCBDb3JwQ29udGVudDMgZnJvbSAnLi9Db3JwQ29udGVudDMnO1xyXG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnLi9DbG9zZUJ1dHRvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICBzbGlkZTE6IFwic2xpZGUxXCIsXHJcbiAgICAgICAgICAgIHNsaWRlMjogXCJzbGlkZTJcIixcclxuICAgICAgICAgICAgc2xpZGUzOiBcInNsaWRlM1wiLFxyXG4gICAgICAgICAgICBzbGlkZUNsYXNzOiBcInNsaWRlM1wiLFxyXG4gICAgICAgICAgICBzZWVBcnJvd1JpZ2h0OiBcInZpc2libGVcIixcclxuICAgICAgICAgICAgc2VlQXJyb3dMZWZ0OiBcImhpZGRlblwiLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zbGlkZUxlZnQgPSB0aGlzLnNsaWRlTGVmdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVSaWdodCA9IHRoaXMuc2xpZGVSaWdodC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgc2xpZGVSaWdodCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTIsIHNlZUFycm93UmlnaHQgOiBcInZpc2libGVcIiB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTMsIHNlZUFycm93TGVmdCA6IFwiaGlkZGVuXCIgfSlcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIHNsaWRlTGVmdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTIsIHNlZUFycm93TGVmdCA6IFwidmlzaWJsZVwiIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMSwgc2VlQXJyb3dSaWdodCA6IFwiaGlkZGVuXCIgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93ID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2xpZGVDbGFzc30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29ycENvbnRlbnQxIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3JwQ29udGVudDIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcnBDb250ZW50MyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNlZUFycm93TGVmdH0gaWQ9XCJnb0xlZnRcIiBvbkNsaWNrPXt0aGlzLnNsaWRlUmlnaHR9PjxpIGNsYXNzTmFtZT1cIkNoZXZyb25MZWZ0XCIgaWQ9XCJsZWZ0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2VlQXJyb3dSaWdodH0gaWQ9XCJnb1JpZ2h0XCIgb25DbGljaz17dGhpcy5zbGlkZUxlZnR9PjxpIGNsYXNzTmFtZT1cIkNoZXZyb25SaWdodFwiIGlkPVwicmlnaHRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xvc2V9IGlkPVwiY2xvc2VMaW5rXCI+PENsb3NlQnV0dG9uIGlkPVwiY2xvc2VcIiAvPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGlkZGVuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2xlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDNweCAzcHggYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC00MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygtNHB4IDNweCAzcHggYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MzVweCBzb2xpZCB0cmFuc3BhcmVudDsgLyphZGp1c3Qgc2l6ZSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypDaGFuZ2UgdGhlIGZvdXIgaW5zdGFuY2VzIG9mICd0b3AnIGJlbG93IHRvIHJvdGF0ZSAodG9wL3JpZ2h0L2JvdHRvbS9sZWZ0KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojYjAwOyAvKkNoZXZyb24gQ29sb3IqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOi0xMHB4OyAvKmFkanVzdCB0aGlja25lc3MqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojZmZmOyAvKk1hdGNoIGJhY2tncm91bmQgY29sb3VyKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MzVweCBzb2xpZCB0cmFuc3BhcmVudDsgLyphZGp1c3Qgc2l6ZSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypDaGFuZ2UgdGhlIGZvdXIgaW5zdGFuY2VzIG9mICd0b3AnIGJlbG93IHRvIHJvdGF0ZSAodG9wL3JpZ2h0L2JvdHRvbS9sZWZ0KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2IwMDsgLypDaGV2cm9uIENvbG9yKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6LTEwcHg7IC8qYWRqdXN0IHRoaWNrbmVzcyovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNmZmY7IC8qTWF0Y2ggYmFja2dyb3VuZCBjb2xvdXIqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2xvc2VMaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDQuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjZ29MZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNnb1JpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJ2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZTEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjI1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjbG9zZUxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTt9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SliderCorp.js */"));
    } else {
      return null;
    }
  }

}

/***/ }),

/***/ "./components/SliderSmall.js":
/*!***********************************!*\
  !*** ./components/SliderSmall.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SmallContent1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SmallContent1 */ "./components/SmallContent1.js");
/* harmony import */ var _SmallContent2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SmallContent2 */ "./components/SmallContent2.js");
/* harmony import */ var _SmallContent3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SmallContent3 */ "./components/SmallContent3.js");
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CloseButton */ "./components/CloseButton.js");
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\SliderSmall.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Slider extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide1: "slide1",
      slide2: "slide2",
      slide3: "slide3",
      slideClass: "slide3",
      seeArrowRight: "visible",
      seeArrowLeft: "hidden"
    };
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  slideRight() {
    if (this.state.slideClass === this.state.slide1) {
      this.setState({
        slideClass: this.state.slide2,
        seeArrowRight: "visible"
      });
    } else if (this.state.slideClass === this.state.slide2) {
      this.setState({
        slideClass: this.state.slide3,
        seeArrowLeft: "hidden"
      });
    }
  }

  slideLeft() {
    if (this.state.slideClass === this.state.slide3) {
      this.setState({
        slideClass: this.state.slide2,
        seeArrowLeft: "visible"
      });
    } else if (this.state.slideClass === this.state.slide2) {
      this.setState({
        slideClass: this.state.slide1,
        seeArrowRight: "hidden"
      });
    }
  }

  render() {
    if (this.props.show === true) {
      return __jsx("div", {
        className: "jsx-2323727871" + " " + "slider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2323727871" + " " + (this.state.slideClass || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 25
        }
      }, __jsx(_SmallContent3__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 28
        }
      }), __jsx(_SmallContent1__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 28
        }
      }), __jsx(_SmallContent2__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 28
        }
      })), __jsx("button", {
        id: "goLeft",
        onClick: this.slideRight,
        className: "jsx-2323727871" + " " + (this.state.seeArrowLeft || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }
      }, __jsx("i", {
        id: "left",
        className: "jsx-2323727871" + " " + "ChevronLeft",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 99
        }
      })), __jsx("button", {
        id: "goRight",
        onClick: this.slideLeft,
        className: "jsx-2323727871" + " " + (this.state.seeArrowRight || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }
      }, __jsx("i", {
        id: "right",
        className: "jsx-2323727871" + " " + "ChevronRight",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 100
        }
      })), __jsx("a", {
        onClick: this.props.onClose,
        id: "closeLink",
        className: "jsx-2323727871",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }
      }, __jsx(_CloseButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 64
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "2323727871",
        __self: this
      }, ".hidden.jsx-2323727871{opacity:0;-webkit-transition:opacity 0.5s linear;transition:opacity 0.5s linear;pointer-events:none;}.visible.jsx-2323727871{opacity:1;-webkit-transition:opacity 0.5s linear;transition:opacity 0.5s linear;pointer-events:visible;}.ChevronLeft.jsx-2323727871{position:absolute;height:75px;width:75px;z-index:10;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.ChevronRight.jsx-2323727871{position:absolute;height:75px;width:75px;z-index:10;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}#left.jsx-2323727871{right:40px;top:0px;}#right.jsx-2323727871{right:-40px;top:-5px;}.ChevronLeft.jsx-2323727871::before,.ChevronLeft.jsx-2323727871::after{position:absolute;display:block;content:\"\";border:35px solid transparent;}.ChevronLeft.jsx-2323727871::before{border-top-color:#b00;}.ChevronLeft.jsx-2323727871::after{top:-10px;border-top-color:#fff;}.ChevronRight.jsx-2323727871::before,.ChevronRight.jsx-2323727871::after{position:absolute;display:block;content:\"\";border:35px solid transparent;}.ChevronRight.jsx-2323727871::before{border-top-color:#b00;}.ChevronRight.jsx-2323727871::after{top:-10px;border-top-color:#fff;}#closeLink.jsx-2323727871{position:absolute;width:25px;height:25px;cursor:pointer;right:2.5%;top:4.5%;}button.jsx-2323727871{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:75px;height:75px;background:none;border:none;cursor:pointer;}button.jsx-2323727871:focus{outline:none;box-shadow:none;}#goLeft.jsx-2323727871{left:0.5%;-webkit-filter:drop-shadow(-4px 3px 3px black);filter:drop-shadow(-4px 3px 3px black);}#goRight.jsx-2323727871{right:0.5%;-webkit-filter:drop-shadow(4px 3px 3px black);filter:drop-shadow(4px 3px 3px black);}.slider.jsx-2323727871{width:100%;height:100%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:450px;overflow:hidden;}i.jsx-2323727871{font-size:2vw;}.slide1.jsx-2323727871{position:relative;width:100%;height:60vh;margin:auto;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}.slide2.jsx-2323727871{position:relative;width:100%;height:60vh;margin:auto;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform:translateX(115%);-ms-transform:translateX(115%);transform:translateX(115%);}.slide3.jsx-2323727871{position:relative;width:100%;height:60vh;margin:auto;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform:translateX(225%);-ms-transform:translateX(225%);transform:translateX(225%);}@media (max-width:720px){#closeLink.jsx-2323727871{top:10px;right:15px;}.slider.jsx-2323727871{min-height:525px;}.slide1.jsx-2323727871{height:80vh;margin-top:0%;}.slide2.jsx-2323727871{height:80vh;margin-top:0%;}.slide3.jsx-2323727871{height:80vh;margin-top:0%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU2xpZGVyU21hbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RxQixBQUl1QyxBQU1BLEFBTVEsQUFRQSxBQVFQLEFBS0MsQUFNSyxBQVFJLEFBR1osQUFNUSxBQVFJLEFBR1osQUFLUyxBQVNBLEFBV0wsQUFLSCxBQUtDLEFBS0EsQUFXRyxBQUlJLEFBUUEsQUFTQSxBQVdMLEFBS1EsQUFJTCxBQUtBLEFBS0EsU0FsQkQsQ0F0SmdCLEFBTUEsQUE0Q1YsQUFpQkEsQUE4QmtCLENBckUvQixBQTBFOEIsQUFLMUIsQ0ExRUgsQUErSFYsQUFLQSxBQUtBLENBOUVpQixDQTBCcEIsR0FxQ0ksQ0EvSVksQUFRQSxBQW1CQyxBQWlCQSxBQWdCRixBQVNILEFBeUNHLEFBUUEsQUFTQSxDQTlHZixDQTBISSxDQXJISixDQWFBLEFBaUJBLENBNEMwQixHQTFCSyxBQThFM0IsQUFLQSxBQUtBLEdBakdZLEFBb0JoQixBQThCZ0IsQUFRQSxBQVNBLENBL0hELEFBUUEsRUFtQkQsQUFXZCxBQU1jLEFBV2QsU0F0RGUsQUFRQSxBQW9ESSxBQWtESCxBQVFBLEFBU0EsRUFwR2lCLEFBaUJBLEVBbURoQixPQTdGbEIsQUFRQSxDQXFHK0IsQUFRQSxBQVNBLEdBbkVmLFdBQ0YsTUFsQ2IsQUFpQkEsR0FrQkEsSUE1RXdCLEFBTUcsZUFnRzNCLENBTEEsSUFoR0EsR0FNQSxnQkEyRWUsQUEyQlEsV0ExQlAsTUFwRWhCLEdBUUEsR0E2RG9CLGFBeUNwQixBQVErQixBQVNBLEdBekRmLFlBQ0csZUFDbkIsMkJBdUJvQixnQkFDQSxnQkFFcEIsSUFxQkEsQUFTQSIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXFNsaWRlclNtYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNtYWxsQ29udGVudDEgZnJvbSAnLi9TbWFsbENvbnRlbnQxJztcclxuaW1wb3J0IFNtYWxsQ29udGVudDIgZnJvbSAnLi9TbWFsbENvbnRlbnQyJztcclxuaW1wb3J0IFNtYWxsQ29udGVudDMgZnJvbSAnLi9TbWFsbENvbnRlbnQzJztcclxuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJy4vQ2xvc2VCdXR0b24nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIHNsaWRlMTogXCJzbGlkZTFcIixcclxuICAgICAgICAgICAgc2xpZGUyOiBcInNsaWRlMlwiLFxyXG4gICAgICAgICAgICBzbGlkZTM6IFwic2xpZGUzXCIsXHJcbiAgICAgICAgICAgIHNsaWRlQ2xhc3M6IFwic2xpZGUzXCIsXHJcbiAgICAgICAgICAgIHNlZUFycm93UmlnaHQ6IFwidmlzaWJsZVwiLFxyXG4gICAgICAgICAgICBzZWVBcnJvd0xlZnQ6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNsaWRlTGVmdCA9IHRoaXMuc2xpZGVMZWZ0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZVJpZ2h0ID0gdGhpcy5zbGlkZVJpZ2h0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBzbGlkZVJpZ2h0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMiwgc2VlQXJyb3dSaWdodCA6IFwidmlzaWJsZVwiIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMywgc2VlQXJyb3dMZWZ0IDogXCJoaWRkZW5cIiB9KVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVMZWZ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMiwgc2VlQXJyb3dMZWZ0IDogXCJ2aXNpYmxlXCIgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUxLCBzZWVBcnJvd1JpZ2h0IDogXCJoaWRkZW5cIiB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zbGlkZUNsYXNzfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbENvbnRlbnQzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbENvbnRlbnQxIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbENvbnRlbnQyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNlZUFycm93TGVmdH0gaWQ9XCJnb0xlZnRcIiBvbkNsaWNrPXt0aGlzLnNsaWRlUmlnaHR9PjxpIGNsYXNzTmFtZT1cIkNoZXZyb25MZWZ0XCIgaWQ9XCJsZWZ0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2VlQXJyb3dSaWdodH0gaWQ9XCJnb1JpZ2h0XCIgb25DbGljaz17dGhpcy5zbGlkZUxlZnR9PjxpIGNsYXNzTmFtZT1cIkNoZXZyb25SaWdodFwiIGlkPVwicmlnaHRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xvc2V9IGlkPVwiY2xvc2VMaW5rXCI+PENsb3NlQnV0dG9uIGlkPVwiY2xvc2VcIiAvPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGlkZGVuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2xlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3JpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjM1cHggc29saWQgdHJhbnNwYXJlbnQ7IC8qYWRqdXN0IHNpemUqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qQ2hhbmdlIHRoZSBmb3VyIGluc3RhbmNlcyBvZiAndG9wJyBiZWxvdyB0byByb3RhdGUgKHRvcC9yaWdodC9ib3R0b20vbGVmdCkqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2IwMDsgLypDaGV2cm9uIENvbG9yKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDotMTBweDsgLyphZGp1c3QgdGhpY2tuZXNzKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2ZmZjsgLypNYXRjaCBiYWNrZ3JvdW5kIGNvbG91ciovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjM1cHggc29saWQgdHJhbnNwYXJlbnQ7IC8qYWRqdXN0IHNpemUqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qQ2hhbmdlIHRoZSBmb3VyIGluc3RhbmNlcyBvZiAndG9wJyBiZWxvdyB0byByb3RhdGUgKHRvcC9yaWdodC9ib3R0b20vbGVmdCkqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNiMDA7IC8qQ2hldnJvbiBDb2xvciovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOi0xMHB4OyAvKmFkanVzdCB0aGlja25lc3MqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojZmZmOyAvKk1hdGNoIGJhY2tncm91bmQgY29sb3VyKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2Nsb3NlTGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA0LjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2dvTGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygtNHB4IDNweCAzcHggYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjZ29SaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMC41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDNweCAzcHggYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJ2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZTEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjI1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjbG9zZUxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTt9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SliderSmall.js */"));
    } else {
      return null;
    }
  }

}

/***/ }),

/***/ "./components/SliderSolo.js":
/*!**********************************!*\
  !*** ./components/SliderSolo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderSolo; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SoloContent1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SoloContent1 */ "./components/SoloContent1.js");
/* harmony import */ var _SoloContent2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SoloContent2 */ "./components/SoloContent2.js");
/* harmony import */ var _SoloContent3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SoloContent3 */ "./components/SoloContent3.js");
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CloseButton */ "./components/CloseButton.js");
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\SliderSolo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class SliderSolo extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide1: "slide1",
      slide2: "slide2",
      slide3: "slide3",
      slideClass: "slide3",
      seeArrowRight: "visible",
      seeArrowLeft: "hidden"
    };
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  slideRight() {
    if (this.state.slideClass === this.state.slide1) {
      this.setState({
        slideClass: this.state.slide2,
        seeArrowRight: "visible"
      });
    } else if (this.state.slideClass === this.state.slide2) {
      this.setState({
        slideClass: this.state.slide3,
        seeArrowLeft: "hidden"
      });
    }
  }

  slideLeft() {
    if (this.state.slideClass === this.state.slide3) {
      this.setState({
        slideClass: this.state.slide2,
        seeArrowLeft: "visible"
      });
    } else if (this.state.slideClass === this.state.slide2) {
      this.setState({
        slideClass: this.state.slide1,
        seeArrowRight: "hidden"
      });
    }
  }

  render() {
    if (this.props.show === true) {
      return __jsx("div", {
        className: "jsx-4236255055" + " " + "slider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-4236255055" + " " + (this.state.slideClass || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }
      }, __jsx(_SoloContent1__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 28
        }
      }), __jsx(_SoloContent2__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 28
        }
      }), __jsx(_SoloContent3__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 28
        }
      })), __jsx("button", {
        id: "goLeft",
        onClick: this.slideRight,
        className: "jsx-4236255055" + " " + (this.state.seeArrowLeft || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }
      }, __jsx("i", {
        id: "left",
        className: "jsx-4236255055" + " " + "ChevronLeft",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 99
        }
      })), __jsx("button", {
        id: "goRight",
        onClick: this.slideLeft,
        className: "jsx-4236255055" + " " + (this.state.seeArrowRight || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }
      }, __jsx("i", {
        id: "right",
        className: "jsx-4236255055" + " " + "ChevronRight",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 100
        }
      })), __jsx("a", {
        onClick: this.props.onClose,
        id: "closeLink",
        className: "jsx-4236255055",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }
      }, __jsx(_CloseButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 64
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "4236255055",
        __self: this
      }, ".hidden.jsx-4236255055{opacity:0;-webkit-transition:opacity 0.5s linear;transition:opacity 0.5s linear;pointer-events:none;}.visible.jsx-4236255055{opacity:1;-webkit-transition:opacity 0.5s linear;transition:opacity 0.5s linear;pointer-events:visible;}.ChevronLeft.jsx-4236255055{position:absolute;height:75px;width:75px;z-index:10;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.ChevronRight.jsx-4236255055{position:absolute;height:75px;width:75px;z-index:10;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}#left.jsx-4236255055{right:40px;top:0px;}#right.jsx-4236255055{right:-40px;top:-5px;}.ChevronLeft.jsx-4236255055::before,.ChevronLeft.jsx-4236255055::after{position:absolute;display:block;content:\"\";border:35px solid transparent;}.ChevronLeft.jsx-4236255055::before{border-top-color:#b00;}.ChevronLeft.jsx-4236255055::after{top:-10px;border-top-color:#fff;}.ChevronRight.jsx-4236255055::before,.ChevronRight.jsx-4236255055::after{position:absolute;display:block;content:\"\";border:35px solid transparent;}.ChevronRight.jsx-4236255055::before{border-top-color:#b00;}.ChevronRight.jsx-4236255055::after{top:-10px;border-top-color:#fff;}#closeLink.jsx-4236255055{position:absolute;width:25px;height:25px;cursor:pointer;right:2.5%;top:4.5%;}button.jsx-4236255055{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:75px;height:75px;background:none;border:none;cursor:pointer;}button.jsx-4236255055:focus{outline:none;box-shadow:none;}#goLeft.jsx-4236255055{left:0.5%;-webkit-filter:drop-shadow(-4px 3px 3px black);filter:drop-shadow(-4px 3px 3px black);}#goRight.jsx-4236255055{right:0.5%;-webkit-filter:drop-shadow(4px 3px 3px black);filter:drop-shadow(4px 3px 3px black);}.my-transition.jsx-4236255055{-webkit-transition:-webkit-transform;-webkit-transition:transform;transition:transform;}.translate_100.jsx-4236255055{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);}.translate_200.jsx-4236255055{-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);}.slider.jsx-4236255055{width:100%;height:100%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:450px;overflow:hidden;}i.jsx-4236255055{font-size:2vw;}.slide1.jsx-4236255055{position:relative;width:100%;height:60vh;margin:auto;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}.slide2.jsx-4236255055{position:relative;width:100%;height:60vh;margin:auto;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform:translateX(115%);-ms-transform:translateX(115%);transform:translateX(115%);}.slide3.jsx-4236255055{position:relative;width:100%;height:60vh;margin:auto;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform:translateX(225%);-ms-transform:translateX(225%);transform:translateX(225%);}@media (max-width:720px){.slider.jsx-4236255055{min-height:525px;}.slide3.jsx-4236255055{height:80vh;margin-top:0%;}.slide2.jsx-4236255055{height:80vh;margin-top:0%;}.slide1.jsx-4236255055{height:80vh;margin-top:0%;}#closeLink.jsx-4236255055{top:10px;right:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU2xpZGVyU29sby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRXFCLEFBSXVDLEFBTUEsQUFNUSxBQVFBLEFBUVAsQUFLQyxBQU1LLEFBUUksQUFHWixBQU1RLEFBUUksQUFHWixBQUtTLEFBVUEsQUFXTCxBQUtILEFBS0MsQUFLVSxBQUsxQixBQUlBLEFBR2dCLEFBV0csQUFJSSxBQVFBLEFBVUEsQUFXRyxBQUlMLEFBS0EsQUFLQSxBQUtILFNBQ0UsQ0F2TGdCLEFBTUEsQUE0Q1YsQUFpQkEsQUErQmtCLENBdEUvQixBQTJFOEIsQUFpQjFCLENBdkZILEFBd0lWLEFBS0EsQUFLQSxDQXRGaUIsQ0FzQ3BCLEdBaUNJLENBeEpZLEFBUUEsQUFtQkMsQUFpQkEsQUFnQkYsQUFVSCxBQXFERyxBQVFBLEFBVUEsQ0E1SGYsQ0EySkksQ0F0SkosQ0FhQSxBQWlCQSxDQXlEMEIsR0F0Q0ssQUFzRjNCLEFBS0EsQUFLQSxHQTFHWSxBQXFCaEIsQUEwQ2dCLEFBUUEsQUFVQSxDQTdJRCxBQVFBLEVBbUJELEFBV2QsQUFNYyxBQVdkLFNBdERlLEFBUUEsQUFvREksQUErREgsQUFRQSxBQVVBLEVBbEhpQixBQWlCQSxFQWdFaEIsT0ExR2xCLEFBUUEsQ0FrSCtCLEFBUUEsQUFVQSxHQWpGZixXQUNGLE1BbENiLEFBaUJBLEdBbUJBLElBN0V3QixBQU1HLE9BcUczQixNQUlBLEFBSUEsRUFaQSxDQUxBLElBakdBLEdBTUEsZ0JBNEVlLEFBdUNRLFdBdENQLE1BckVoQixHQVFBLEdBOERvQixhQXFEcEIsQUFRK0IsQUFVQSxHQXRFZixZQUNHLGVBQ25CLDJCQW1Db0IsZ0JBQ0EsZ0JBRXBCLElBc0JBLEFBU0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxTbGlkZXJTb2xvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNvbG9Db250ZW50MSBmcm9tICcuL1NvbG9Db250ZW50MSc7XHJcbmltcG9ydCBTb2xvQ29udGVudDIgZnJvbSAnLi9Tb2xvQ29udGVudDInO1xyXG5pbXBvcnQgU29sb0NvbnRlbnQzIGZyb20gJy4vU29sb0NvbnRlbnQzJztcclxuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJy4vQ2xvc2VCdXR0b24nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlclNvbG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICBzbGlkZTE6IFwic2xpZGUxXCIsXHJcbiAgICAgICAgICAgIHNsaWRlMjogXCJzbGlkZTJcIixcclxuICAgICAgICAgICAgc2xpZGUzOiBcInNsaWRlM1wiLFxyXG4gICAgICAgICAgICBzbGlkZUNsYXNzOiBcInNsaWRlM1wiLFxyXG4gICAgICAgICAgICBzZWVBcnJvd1JpZ2h0OiBcInZpc2libGVcIixcclxuICAgICAgICAgICAgc2VlQXJyb3dMZWZ0OiBcImhpZGRlblwiLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zbGlkZUxlZnQgPSB0aGlzLnNsaWRlTGVmdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVSaWdodCA9IHRoaXMuc2xpZGVSaWdodC5iaW5kKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzbGlkZVJpZ2h0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMiwgc2VlQXJyb3dSaWdodCA6IFwidmlzaWJsZVwiIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMywgc2VlQXJyb3dMZWZ0IDogXCJoaWRkZW5cIiB9KVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVMZWZ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMiwgc2VlQXJyb3dMZWZ0IDogXCJ2aXNpYmxlXCIgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUxLCBzZWVBcnJvd1JpZ2h0IDogXCJoaWRkZW5cIiB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93ID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNsaWRlQ2xhc3N9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNvbG9Db250ZW50MSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8U29sb0NvbnRlbnQyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTb2xvQ29udGVudDMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2VlQXJyb3dMZWZ0fSBpZD1cImdvTGVmdFwiIG9uQ2xpY2s9e3RoaXMuc2xpZGVSaWdodH0+PGkgY2xhc3NOYW1lPVwiQ2hldnJvbkxlZnRcIiBpZD1cImxlZnRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zZWVBcnJvd1JpZ2h0fSBpZD1cImdvUmlnaHRcIiBvbkNsaWNrPXt0aGlzLnNsaWRlTGVmdH0+PGkgY2xhc3NOYW1lPVwiQ2hldnJvblJpZ2h0XCIgaWQ9XCJyaWdodFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0gaWQ9XCJjbG9zZUxpbmtcIj48Q2xvc2VCdXR0b24gaWQ9XCJjbG9zZVwiIC8+PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRkZW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogdmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC00MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MzVweCBzb2xpZCB0cmFuc3BhcmVudDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojYjAwOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDotMTBweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNmZmY7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjozNXB4IHNvbGlkIHRyYW5zcGFyZW50OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojYjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDotMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2Nsb3NlTGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA0LjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjZ29MZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KC00cHggM3B4IDNweCBibGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNnb1JpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggM3B4IDNweCBibGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5teS10cmFuc2l0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyYW5zbGF0ZV8xMDAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2xhdGVfMjAwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJ2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZTEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZTMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMjUlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2Nsb3NlTGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO30gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SliderSolo.js */"));
    } else {
      return null;
    }
  }

}

/***/ }),

/***/ "./components/SmallButton.js":
/*!***********************************!*\
  !*** ./components/SmallButton.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_crew_figure_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/crew-figure.png */ "./public/assets/crew-figure.png");
/* harmony import */ var _public_assets_crew_figure_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_crew_figure_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SmallExplain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SmallExplain */ "./components/SmallExplain.js");
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\SmallButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class SmallButton extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      id: "buttons",
      className: "jsx-1348448201",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, __jsx("div", {
      id: "circle",
      className: "jsx-1348448201",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }), __jsx(_SmallExplain__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1348448201",
      __self: this
    }, "#circle.jsx-1348448201{background-color:hsl(0,0%,90%);box-shadow:inset hsla(0,0%,15%,1) 0 0px 0px 4px, inset hsla(0,0%,15%,.8) 0 -1px 5px 4px, inset hsla(0,0%,0%,.25) 0 -1px 0px 7px, inset hsla(0,0%,100%,.7) 0 2px 1px 7px,  hsla(0,0%,0%,.15) 0 -5px 6px 4px, hsla(0,0%,100%,.5) 0 5px 6px 4px;-webkit-transition:color .2s;transition:color .2s;min-width:150px;width:200px;height:50px;line-height:1px;border-radius:8px;background-image: -webkit-radial-gradient( 50% 0%,8% 50%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 50% 100%,12% 50%,hsla(0,0%,100%,.6) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 0% 50%,50% 7%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 100% 50%,50% 5%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%),  -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,0%,0) 0%,hsla(0,0%,0%,0) 3%,hsla(0,0%,0%,.1) 3.5%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 6%,hsla(0,0%,100%,.1) 7.5%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 1.2%,hsla(0,0%,100%,.2) 2.2%),  -webkit-radial-gradient( 50% 50%,200% 50%,hsla(0,0%,90%,1) 5%,hsla(0,0%,85%,1) 30%,hsla(0,0%,60%,1) 100%);}#circle.jsx-1348448201:before,#circle.jsx-1348448201:after{content:\"\";top:0%;left:0%;position:relative;width:inherit;height:inherit;border-radius:inherit;background-image: -webkit-radial-gradient( 50% 0%,10% 50%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 50% 100%,10% 50%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 0% 50%,50% 10%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 100% 50%,50% 06%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%);}#circle.jsx-1348448201:before{-webkit-transform:rotate( 65deg);-ms-transform:rotate( 65deg);transform:rotate( 65deg);}#circle.jsx-1348448201:after{-webkit-transform:rotate(-65deg);-ms-transform:rotate(-65deg);transform:rotate(-65deg);}#circle.jsx-1348448201:active{color:hsl(210,100%,40%);text-shadow:hsla(210,100%,20%,.3) 0 -1px 0,hsl(210,100%,85%) 0 2px 1px,hsla(200,100%,80%,1) 0 0 5px,hsla(210,100%,50%,.6) 0 0 20px;box-shadow: inset hsla(210,100%,30%,1) 0 0px 0px 4px, inset hsla(210,100%,15%,.4) 0 -1px 5px 4px, inset hsla(210,100%,20%,.25) 0 -1px 0px 7px, inset hsla(210,100%,100%,.7) 0 2px 1px 7px,  hsla(210,100%,75%,.8) 0 0px 3px 2px, hsla(210,50%,40%,.25) 0 -5px 6px 4px, hsla(210,80%,95%,1) 0 5px 6px 4px;}#buttons.jsx-1348448201{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;max-height:75px;}@media (max-width:720px){#buttons.jsx-1348448201{display:inline-block;height:50px;width:100%;margin:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0J5QixBQUswRCxBQWdDcEIsQUFlNEIsQUFDRCxBQUdaLEFBa0JILEFBT0EsV0EzQ2hCLE9BQ0MsR0EyQ1ksR0F6QmdILEVBakJsSCxLQTVCZSxFQXVFZCxXQTFDTCxBQTJDTSxZQUNwQixFQTNDZSxlQUNPLGNBU2tCLEFBQ0QsUUFIZ0QsSUF5QmxFLHdEQVRnQixvQkFVckIsZ0JBQ2xCLDZFQS9EdUIsa0RBR0wsZ0JBQ0osWUFDQSxZQUNJLGdCQUNFLGtCQVcyRixnREFtQi9HLFlBZ0JBLHN3QkFqQ0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxTbWFsbEJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTbWFsbEltYWdlIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvY3Jldy1maWd1cmUucG5nJztcclxuaW1wb3J0IFNtYWxsRXhwbGFpbiBmcm9tICcuL1NtYWxsRXhwbGFpbic7XHJcblxyXG5jbGFzcyBTbWFsbEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFNtYWxsRXhwbGFpbiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwwJSw5MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IGhzbGEoMCwwJSwxNSUsICAxKSAwICAwcHggMHB4IDRweCwgLyogYm9yZGVyICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDE1JSwgLjgpIDAgLTFweCA1cHggNHB4LCAvKiBzb2Z0IFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDAlLCAuMjUpIDAgLTFweCAwcHggN3B4LCAvKiBib3R0b20gU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDAsMCUsMTAwJSwuNykgMCAgMnB4IDFweCA3cHgsIC8qIHRvcCBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMCwwJSwgMCUsLjE1KSAwIC01cHggNnB4IDRweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDAsMCUsMTAwJSwuNSkgMCAgNXB4IDZweCA0cHg7IC8qIG91dGVyIEhMICovIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBCcnVzaGVkIE1ldGFsICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlICAgMCUsICA4JSA1MCUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgMTAwJSwgMTIlIDUwJSwgaHNsYSgwLDAlLDEwMCUsLjYpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggICAwJSAgNTAlLCA1MCUgIDclLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAxMDAlICA1MCUsIDUwJSAgNSUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwgIDAlLDApIDAlLCBoc2xhKDAsMCUsICAwJSwwKSAgIDMlLCBoc2xhKDAsMCUsICAwJSwuMSkgMy41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAgIDYlLCBoc2xhKDAsMCUsMTAwJSwuMSkgNy41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxLjIlLCBoc2xhKDAsMCUsMTAwJSwuMikgMi4yJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDIwMCUgNTAlLCBoc2xhKDAsMCUsOTAlLDEpIDUlLCBoc2xhKDAsMCUsODUlLDEpIDMwJSwgaHNsYSgwLDAlLDYwJSwxKSAxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmJlZm9yZSwgI2NpcmNsZTphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBmYWtlIGNvbmljYWwgZ3JhZGllbnRzICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAgIDAlLCAxMCUgNTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgMTAwJSwgMTAlIDUwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgIDAlICA1MCUsIDUwJSAxMCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggMTAwJSAgNTAlLCA1MCUgMDYlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YmVmb3JlIHsgdHJhbnNmb3JtOiByb3RhdGUoIDY1ZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmFmdGVyIHsgdHJhbnNmb3JtOiByb3RhdGUoLTY1ZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsKDIxMCwgMTAwJSwgNDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IGhzbGEoMjEwLDEwMCUsMjAlLC4zKSAwIC0xcHggMCwgaHNsKDIxMCwxMDAlLDg1JSkgMCAycHggMXB4LCBoc2xhKDIwMCwxMDAlLDgwJSwxKSAwIDAgNXB4LCBoc2xhKDIxMCwxMDAlLDUwJSwuNikgMCAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMzAlLCAgMSkgMCAgMHB4IDBweCA0cHgsIC8qIGJvcmRlciAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMTUlLCAuNCkgMCAtMXB4IDVweCA0cHgsIC8qIHNvZnQgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDIwJSwuMjUpIDAgLTFweCAwcHggN3B4LCAvKiBib3R0b20gU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDEwMCUsLjcpIDAgIDJweCAxcHggN3B4LCAvKiB0b3AgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCwxMDAlLDc1JSwgLjgpIDAgIDBweCAzcHggMnB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDUwJSw0MCUsIC4yNSkgMCAtNXB4IDZweCA0cHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsODAlLDk1JSwgICAxKSAwICA1cHggNnB4IDRweDsgLyogb3V0ZXIgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBFbmQgQnJ1c2hlZCBNZXRhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAjYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU21hbGxCdXR0b247Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SmallButton.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SmallButton);

/***/ }),

/***/ "./components/SmallContent1.js":
/*!*************************************!*\
  !*** ./components/SmallContent1.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\SmallContent1.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class SmallContent1 extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      className1: "flipCard",
      className2: "flipCard",
      className3: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade",
      fadeTwoA: "unFade",
      fadeTwoB: "fade",
      fadeThreeA: "unFade",
      fadeThreeB: "fade"
    };
    this.flip1 = this.flip1.bind(this);
    this.unflip1 = this.unflip1.bind(this);
    this.flip2 = this.flip2.bind(this);
    this.unflip2 = this.unflip2.bind(this);
    this.flip3 = this.flip3.bind(this);
    this.unflip3 = this.unflip3.bind(this);
  }

  flip1() {
    this.setState({
      className1: "flipCard is-flipped",
      fadeOneA: "fade",
      fadeOneB: "unFade"
    });
  }

  unflip1() {
    this.setState({
      className1: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade"
    });
  }

  flip2() {
    this.setState({
      className2: "flipCard is-flipped",
      fadeTwoA: "fade",
      fadeTwoB: "unFade"
    });
  }

  unflip2() {
    this.setState({
      className2: "flipCard",
      fadeTwoA: "unFade",
      fadeTwoB: "fade"
    });
  }

  flip3() {
    this.setState({
      className3: "flipCard is-flipped",
      fadeThreeA: "fade",
      fadeThreeB: "unFade"
    });
  }

  unflip3() {
    this.setState({
      className3: "flipCard",
      fadeThreeA: "unFade",
      fadeThreeB: "fade"
    });
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-1203748430",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-1203748430" + " " + "contentCanvas contentCanvas--card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "flipContainer1",
      onMouseEnter: this.flip1,
      onMouseLeave: this.unflip1,
      className: "jsx-1203748430" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-1203748430" + " " + (this.state.className1 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    }, __jsx("div", {
      id: this.state.fadeOneA,
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/CCON-4-data-guy.jpg */ "./public/assets/CCON-4-data-guy.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-1203748430" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: this.state.fadeOneB,
      className: "jsx-1203748430" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/CCON-4-data-guy.jpg */ "./public/assets/CCON-4-data-guy.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(20px)"
      },
      className: "jsx-1203748430",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 27
      }
    }), __jsx("p", {
      id: "cardText1",
      className: "jsx-1203748430" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 27
      }
    }, "Ccon Metals offers cutting-edge catalytic converter training for all clients; ensuring your efficiency and accuracy when searching catalytic converter numbers and prices.")))), __jsx("div", {
      id: "flipContainer2",
      onMouseEnter: this.flip2,
      onMouseLeave: this.unflip2,
      className: "jsx-1203748430" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card2",
      className: "jsx-1203748430" + " " + (this.state.className2 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: this.state.fadeTwoA,
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/CCON-5-longhaul.jpg */ "./public/assets/CCON-5-longhaul.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-1203748430" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: this.state.fadeTwoB,
      className: "jsx-1203748430" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/CCON-5-longhaul.jpg */ "./public/assets/CCON-5-longhaul.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(20px)"
      },
      className: "jsx-1203748430",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 27
      }
    }), __jsx("p", {
      id: "cardText2",
      className: "jsx-1203748430" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 27
      }
    }, "For non-mobile clients: Ccon Metals offers weekly, bi-weekly, or monthly pickup services throughout the Lower Mainland and the Fraser Valley. We also offer custom freight solutions for clients outside our service area.")))), __jsx("div", {
      id: "flipContainer3",
      onMouseEnter: this.flip3,
      onMouseLeave: this.unflip3,
      className: "jsx-1203748430" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card3",
      className: "jsx-1203748430" + " " + (this.state.className3 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: this.state.fadeThreeA,
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/CCON-369-catalyst-jars.jpg */ "./public/assets/CCON-369-catalyst-jars.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-1203748430" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: this.state.fadeThreeB,
      className: "jsx-1203748430" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/CCON-369-catalyst-jars.jpg */ "./public/assets/CCON-369-catalyst-jars.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(20px)"
      },
      className: "jsx-1203748430",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 27
      }
    }), __jsx("p", {
      id: "cardText3",
      className: "jsx-1203748430" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 27
      }
    }, "Ccon Metals specializes in loose material assay services: running lots as small as only a few pounds, with no upper limit. We offer exceptional refining terms that match current scrap catalytic converter prices; with a highly competitive turnaround time."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1203748430",
      __self: this
    }, "@-webkit-keyframes fadeIn-jsx-1203748430{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeIn-jsx-1203748430{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadeOut-jsx-1203748430{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}@keyframes fadeOut-jsx-1203748430{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}#fade.jsx-1203748430{-webkit-animation:fadeOut-jsx-1203748430 ease 0.5s;animation:fadeOut-jsx-1203748430 ease 0.5s;}#unFade.jsx-1203748430{-webkit-animation:fadeIn-jsx-1203748430 ease 0.5s;animation:fadeIn-jsx-1203748430 ease 0.5s;}p.jsx-1203748430{text-shadow:2px 2px 2px black;}.cardText.jsx-1203748430{position:absolute;height:100%;width:80%;-webkit-transform:translateY(-105%);-ms-transform:translateY(-105%);transform:translateY(-105%);}#cardText1.jsx-1203748430{text-align:right;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.3vw);}#cardText2.jsx-1203748430{text-align:center;width:90%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:white;font-size:calc(12px + 1.3vw);}#cardText3.jsx-1203748430{text-align:left;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.1vw);}#contentContainer.jsx-1203748430{position:absolute;height:100%;width:100%;background-image:url('image');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(-225%);-ms-transform:translateX(-225%);transform:translateX(-225%);overflow:hidden;border:5px solid silver;box-sizing:border-box;}.contentCanvas.jsx-1203748430{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}.flipCard.jsx-1203748430{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}.card__face.jsx-1203748430{position:absolute;height:100%;width:100%;text-align:center;}.card__face--front.jsx-1203748430{background:white;overflow:hidden;}.card__face--back.jsx-1203748430{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );overflow:hidden;}.flipCard.is-flipped.jsx-1203748430{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCardContainer.jsx-1203748430{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333333333333333333333333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-1203748430{width:100%;height:33%;margin-top:0%;}#card3.jsx-1203748430{margin-top:0%;}.card__face--back.jsx-1203748430{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-1203748430{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}#card2.jsx-1203748430{margin-top:0%;}.flipCard.jsx-1203748430{width:100%;height:100%;}.contentCanvas.jsx-1203748430{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:102%;width:100%;margin-top:0%;}#contentContainer.jsx-1203748430{height:100%;min-height:575px;overflow:hidden;}#cardText1.jsx-1203748430{text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.4vw);}#cardText2.jsx-1203748430{text-align:center;width:75%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:black;font-size:calc(12px + 1.4vw);}#cardText3.jsx-1203748430{text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.2vw);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxDb250ZW50MS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSWlCLEFBS2lDLEFBTUEsQUFNQSxBQUlBLEFBSUEsQUFLZ0IsQUFJRCxBQUlHLEFBSVosQUFPRCxBQVVDLEFBVUYsQUFVRSxBQWFSLEFBUUUsQUFlTSxBQVFELEFBS0EsQUFNVyxBQVFWLEFBV0wsQUFPZCxBQUdvQixBQUtXLEFBTS9CLEFBR2MsQUFLZ0IsQUFRZixBQU1NLEFBVUEsQUFVQSxVQWxOcEIsQUFNQSxBQU1BLEFBSUEsQUFJQSxBQW1FWSxDQTZEQyxBQXdCQyxDQTdFRSxBQTBGRyxFQS9CbkIsQUFjQSxFQXhHUyxDQXBCQSxBQTBFTyxBQUtZLEFBbUNFLENBekhsQixBQWlCRixBQW9CRSxBQW9DQSxBQWlGRCxBQVVDLEFBVUQsSUEzSEEsQUE2REssQ0F3QmhCLEVBNUdRLENBcEJBLENBbUpFLEFBb0JBLENBN0pELEFBeUNPLEFBMEdMLENBaEJPLENBekpwQixBQUtZLEFBcUNDLEFBb0NBLEdBN0NxQixBQXVCcEIsQUE4QmQsQ0F6RWtDLENBbUpFLEFBb0JBLENBL0RsQyxDQTlGUSxBQW1KRSxHQXBLa0IsQ0FxQ0UsQUFxQ1osR0FoQlAsQ0F4Q3FCLEFBaUNsQixBQWlHZCxBQWlCa0MsVUExR3RCLElBUGQsQUF1QkEsUUFmWSxJQXRCd0IsTUF1QmIsWUFxQ1gsQ0F3Q1MsRUFwSnJCLEVBSkEsRUF3R0EsQUFrQ0UsRUE5RDBCLENBcUNkLE1BNURNLEVBb0dKLElBdkNxQixFQWZuQixBQW1DaEIsTUFvQmEsSUFwR2UsTUE4QzlCLENBdURrQixNQTVJbEIsRUEyQlksQ0FwQkEsQ0FtSkUsQUFvQkEsSUFqQ1osRUF6Q1ksRUF4RUEsQ0FwQkEsQ0FVQSxBQXlJRSxBQVVBLEFBVUEsUUExRU8sRUF4RVEsQ0FwQkEsQ0FVQSxBQXlJRSxBQVVBLEFBVUEsaUJBekVqQyxVQXpFQSxDQXBCQSxDQVVBLEFBeUlFLEFBVUEsQUFVQSxTQW5INEIsbUJBdEJaLGdCQUNRLHdCQUNGLHNCQUN4QixlQW9Cb0Isa0JBQ0gsZUFFakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxTbWFsbENvbnRlbnQxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jbGFzcyBTbWFsbENvbnRlbnQxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICBjbGFzc05hbWUxOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTI6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMzogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBmYWRlT25lQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZU9uZUI6IFwiZmFkZVwiLFxyXG4gICAgICBmYWRlVHdvQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVR3b0I6IFwiZmFkZVwiLFxyXG4gICAgICBmYWRlVGhyZWVBOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlVGhyZWVCOiBcImZhZGVcIixcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZsaXAxID0gdGhpcy5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAxID0gdGhpcy51bmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAyID0gdGhpcy5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAyID0gdGhpcy51bmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAzID0gdGhpcy5mbGlwMy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAzID0gdGhpcy51bmZsaXAzLmJpbmQodGhpcyk7XHJcbn1cclxuXHJcbmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVPbmVBIDogXCJmYWRlXCIsIGZhZGVPbmVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZFwiLCBmYWRlT25lQSA6IFwidW5GYWRlXCIsIGZhZGVPbmVCIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVR3b0EgOiBcImZhZGVcIiwgZmFkZVR3b0IgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkXCIsIGZhZGVUd29BIDogXCJ1bkZhZGVcIiwgZmFkZVR3b0IgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlVGhyZWVBIDogXCJmYWRlXCIsIGZhZGVUaHJlZUIgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkXCIsIGZhZGVUaHJlZUEgOiBcInVuRmFkZVwiLCBmYWRlVGhyZWVCIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuXHJcbnJlbmRlcigpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhcyBjb250ZW50Q2FudmFzLS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIxXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAxfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMX0gIGlkPVwiY2FyZDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9e3RoaXMuc3RhdGUuZmFkZU9uZUF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTQtZGF0YS1ndXkuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZU9uZUJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTQtZGF0YS1ndXkuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDFcIj5DY29uIE1ldGFscyBvZmZlcnMgY3V0dGluZy1lZGdlIGNhdGFseXRpYyBjb252ZXJ0ZXIgdHJhaW5pbmcgZm9yIGFsbCBjbGllbnRzOyBlbnN1cmluZyB5b3VyIGVmZmljaWVuY3kgYW5kIGFjY3VyYWN5IHdoZW4gc2VhcmNoaW5nIGNhdGFseXRpYyBjb252ZXJ0ZXIgbnVtYmVycyBhbmQgcHJpY2VzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjJcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDJ9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMn0gIGlkPVwiY2FyZDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVR3b0F9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTUtbG9uZ2hhdWwuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVR3b0J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTUtbG9uZ2hhdWwuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDJcIj5Gb3Igbm9uLW1vYmlsZSBjbGllbnRzOiBDY29uIE1ldGFscyBvZmZlcnMgd2Vla2x5LCBiaS13ZWVrbHksIG9yIG1vbnRobHkgcGlja3VwIHNlcnZpY2VzIHRocm91Z2hvdXQgdGhlIExvd2VyIE1haW5sYW5kIGFuZCB0aGUgRnJhc2VyIFZhbGxleS4gV2UgYWxzbyBvZmZlciBjdXN0b20gZnJlaWdodCBzb2x1dGlvbnMgZm9yIGNsaWVudHMgb3V0c2lkZSBvdXIgc2VydmljZSBhcmVhLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjNcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDN9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAzfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lM30gIGlkPVwiY2FyZDNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVRocmVlQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tMzY5LWNhdGFseXN0LWphcnMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVRocmVlQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tMzY5LWNhdGFseXN0LWphcnMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDNcIj5DY29uIE1ldGFscyBzcGVjaWFsaXplcyBpbiBsb29zZSBtYXRlcmlhbCBhc3NheSBzZXJ2aWNlczogcnVubmluZyBsb3RzIGFzIHNtYWxsIGFzIG9ubHkgYSBmZXcgcG91bmRzLCB3aXRoIG5vIHVwcGVyIGxpbWl0LiBXZSBvZmZlciBleGNlcHRpb25hbCByZWZpbmluZyB0ZXJtcyB0aGF0IG1hdGNoIGN1cnJlbnQgc2NyYXAgY2F0YWx5dGljIGNvbnZlcnRlciBwcmljZXM7IHdpdGggYSBoaWdobHkgY29tcGV0aXRpdmUgdHVybmFyb3VuZCB0aW1lLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2ZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZU91dCBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICN1bkZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwNSUpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZFRleHQxIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjN2dyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjN2dyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDMge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4xdncpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjI1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmQxIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuNHZ3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS40dncpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZFRleHQzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjJ2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbik7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTbWFsbENvbnRlbnQxOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SmallContent1.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SmallContent1);

/***/ }),

/***/ "./components/SmallContent2.js":
/*!*************************************!*\
  !*** ./components/SmallContent2.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\SmallContent2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class SmallContent2 extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      className1: "flipCard",
      className2: "flipCard",
      className3: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade",
      fadeTwoA: "unFade",
      fadeTwoB: "fade",
      fadeThreeA: "unFade",
      fadeThreeB: "fade"
    };
    this.flip1 = this.flip1.bind(this);
    this.unflip1 = this.unflip1.bind(this);
    this.flip2 = this.flip2.bind(this);
    this.unflip2 = this.unflip2.bind(this);
    this.flip3 = this.flip3.bind(this);
    this.unflip3 = this.unflip3.bind(this);
  }

  flip1() {
    this.setState({
      className1: "flipCard is-flipped",
      fadeOneA: "fade",
      fadeOneB: "unFade"
    });
  }

  unflip1() {
    this.setState({
      className1: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade"
    });
  }

  flip2() {
    this.setState({
      className2: "flipCard is-flipped",
      fadeTwoA: "fade",
      fadeTwoB: "unFade"
    });
  }

  unflip2() {
    this.setState({
      className2: "flipCard",
      fadeTwoA: "unFade",
      fadeTwoB: "fade"
    });
  }

  flip3() {
    this.setState({
      className3: "flipCard is-flipped",
      fadeThreeA: "fade",
      fadeThreeB: "unFade"
    });
  }

  unflip3() {
    this.setState({
      className3: "flipCard",
      fadeThreeA: "unFade",
      fadeThreeB: "fade"
    });
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-1214369551",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-1214369551" + " " + "contentCanvas contentCanvas--card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "flipContainer1",
      onMouseEnter: this.flip1,
      onMouseLeave: this.unflip1,
      className: "jsx-1214369551" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-1214369551" + " " + (this.state.className1 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx("div", {
      id: this.state.fadeOneA,
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/APP-4-scroll.jpg */ "./public/assets/APP-4-scroll.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-1214369551" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: this.state.fadeOneB,
      className: "jsx-1214369551" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, __jsx("div", {
      id: "background",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/APP-4-scroll.jpg */ "./public/assets/APP-4-scroll.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(20px)"
      },
      className: "jsx-1214369551",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 27
      }
    }), __jsx("p", {
      id: "cardText1",
      className: "jsx-1214369551" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 27
      }
    }, "The Ccon Revolution App gives you the ability to accurately look up and track your current purchases via the order number system. Contact us to get started!")))), __jsx("div", {
      id: "flipContainer2",
      onMouseEnter: this.flip2,
      onMouseLeave: this.unflip2,
      className: "jsx-1214369551" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card2",
      className: "jsx-1214369551" + " " + (this.state.className2 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: this.state.fadeTwoA,
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/APP-5-invoice.jpg */ "./public/assets/APP-5-invoice.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-1214369551" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: this.state.fadeTwoB,
      className: "jsx-1214369551" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/APP-5-invoice.jpg */ "./public/assets/APP-5-invoice.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(20px)"
      },
      className: "jsx-1214369551",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 27
      }
    }), __jsx("p", {
      id: "cardText2",
      className: "jsx-1214369551" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 27
      }
    }, "The Revolution App offers a unique, dual function, invoicing option. Providing you and/or your clients with an itemized invoice with references to serial number, manufacturer, size, and body style; just like the invoices you would receive on each and every transaction made when you sell catalytic converters to Ccon.")))), __jsx("div", {
      id: "flipContainer3",
      onMouseEnter: this.flip3,
      onMouseLeave: this.unflip3,
      className: "jsx-1214369551" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card3",
      className: "jsx-1214369551" + " " + (this.state.className3 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: this.state.fadeThreeA,
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/APP-6-shipping.jpg */ "./public/assets/APP-6-shipping.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-1214369551" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: this.state.fadeThreeB,
      className: "jsx-1214369551" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/APP-6-shipping.jpg */ "./public/assets/APP-6-shipping.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(20px)"
      },
      className: "jsx-1214369551",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 27
      }
    }), __jsx("p", {
      id: "cardText3",
      className: "jsx-1214369551" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 27
      }
    }, "The Revolution App features our price lock guarantee. Once the client taps the \u201Cship\u201D button, this locks in the catalytic converter scrap price of that shipment until it arrives at our dock. This protects our clients from market volatility and price swings."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1214369551",
      __self: this
    }, "@-webkit-keyframes fadeIn-jsx-1214369551{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeIn-jsx-1214369551{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadeOut-jsx-1214369551{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}@keyframes fadeOut-jsx-1214369551{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}#fade.jsx-1214369551{-webkit-animation:fadeOut-jsx-1214369551 ease 0.5s;animation:fadeOut-jsx-1214369551 ease 0.5s;}#unFade.jsx-1214369551{-webkit-animation:fadeIn-jsx-1214369551 ease 0.5s;animation:fadeIn-jsx-1214369551 ease 0.5s;}.cardText.jsx-1214369551{position:absolute;height:100%;width:80%;-webkit-transform:translateY(-105%);-ms-transform:translateY(-105%);transform:translateY(-105%);}#cardText1.jsx-1214369551{text-align:right;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.3vw);text-shadow:2px 2px 2px black;}#cardText2.jsx-1214369551{text-align:center;width:90%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:white;font-size:calc(12px + 1.1vw);text-shadow:2px 2px 2px black;}#cardText3.jsx-1214369551{text-align:left;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.12vw);text-shadow:2px 2px 2px black;}#contentContainer.jsx-1214369551{position:absolute;height:100%;width:100%;background-image:url('image');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);right:15%;overflow:hidden;border:5px solid silver;box-sizing:border-box;}.contentCanvas.jsx-1214369551{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}.flipCard.jsx-1214369551{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}.card__face.jsx-1214369551{position:absolute;height:100%;width:100%;text-align:center;}.card__face--front.jsx-1214369551{background:white;overflow:hidden;}.card__face--back.jsx-1214369551{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );overflow:hidden;}.flipCard.is-flipped.jsx-1214369551{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCardContainer.jsx-1214369551{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333333333333333333333333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-1214369551{width:100%;height:33%;margin-top:0%;}#card3.jsx-1214369551{margin-top:0%;}.card__face--back.jsx-1214369551{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-1214369551{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}#card2.jsx-1214369551{margin-top:0%;}.flipCard.jsx-1214369551{width:100%;height:100%;}.contentCanvas.jsx-1214369551{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:100%;width:100%;margin-top:0%;}#contentContainer.jsx-1214369551{height:100%;min-height:575px;overflow:hidden;}#cardText1.jsx-1214369551{text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.3vw);}#cardText2.jsx-1214369551{text-align:center;width:75%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:black;font-size:calc(12px + 1.1vw);}#cardText3.jsx-1214369551{text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.3vw);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxDb250ZW50Mi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SWlCLEFBS2lDLEFBTUEsQUFNQSxBQUlBLEFBSUEsQUFLZ0IsQUFJRCxBQUlULEFBT0QsQUFXQyxBQVdGLEFBV0UsQUFjUixBQVFFLEFBZU0sQUFRRCxBQUtBLEFBTVcsQUFRVixBQWFMLEFBT2QsQUFHb0IsQUFLVyxBQU0vQixBQUdjLEFBS2dCLEFBUWYsQUFNTSxBQVVBLEFBVUEsVUFwTnBCLEFBTUEsQUFNQSxBQUlBLEFBSUEsQUFtRVksQ0ErREMsQUF3QkMsQ0EvRUUsQUE0RkcsRUEvQm5CLEFBY0EsRUE1R1MsQ0F0QkEsQUE4RU8sQUFLWSxBQXFDRSxDQS9IbEIsQUFrQkYsQUFzQkUsQUFxQ0EsQUFtRkQsQUFVQyxBQVVELElBN0hBLEFBK0RLLENBd0JoQixFQWhIUSxDQXRCQSxDQXlKRSxBQW9CQSxDQWxLRCxBQTRDTyxBQTRHTCxDQWhCTyxDQTFKUixBQXdDQyxBQXFDQSxHQS9DcUIsQUF5QnBCLEFBOEJkLENBN0VrQyxDQXlKRSxBQW9CQSxDQS9EbEMsQ0FuR1EsQUF3SkUsR0ExS2tCLENBd0NFLEFBc0NaLEdBaEJQLENBM0NxQixBQW9DbEIsQUFtR2QsQUFpQmtDLFVBNUd0QixJQVBkLEFBdUJBLFFBZlksSUF2QndCLE1Bd0JiLFlBcUNYLENBMENTLEVBdEpyQixFQUpBLEVBd0dBLEFBb0NFLEVBaEUwQixDQXFDZCxNQTdETSxFQXVHSixJQXpDcUIsRUFmbkIsQUFxQ2hCLE1Bb0JhLElBdkdlLE1BK0M5QixDQXlEa0IsTUFsSmxCLEVBNkJZLENBdEJBLENBeUpFLEFBb0JBLElBakNaLEVBM0NZLEVBMUVBLENBdEJBLENBV0EsQUE4SUUsQUFVQSxBQVVBLFFBNUVPLEVBMUVTLENBdEJELENBV0EsQUE4SUUsQUFVQSxBQVVBLGlCQTNFakMsV0FqR2dDLEFBc0JBLENBWEEsQUE4STlCLEFBVUEsQUFVQSxTQXJINEIsbUJBdkJsQixDQWhDWixBQXNCQSxDQVhBLFFBc0JrQixnQkFDUSx3QkFDRixzQkFDeEIsS0FvQm9CLGtCQUNILGVBRWpCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxDb250ZW50Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTbWFsbENvbnRlbnQyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICBjbGFzc05hbWUxOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTI6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMzogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBmYWRlT25lQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZU9uZUI6IFwiZmFkZVwiLFxyXG4gICAgICBmYWRlVHdvQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVR3b0I6IFwiZmFkZVwiLFxyXG4gICAgICBmYWRlVGhyZWVBOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlVGhyZWVCOiBcImZhZGVcIixcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZsaXAxID0gdGhpcy5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAxID0gdGhpcy51bmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAyID0gdGhpcy5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAyID0gdGhpcy51bmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAzID0gdGhpcy5mbGlwMy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAzID0gdGhpcy51bmZsaXAzLmJpbmQodGhpcyk7XHJcbn1cclxuXHJcbmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVPbmVBIDogXCJmYWRlXCIsIGZhZGVPbmVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZFwiLCBmYWRlT25lQSA6IFwidW5GYWRlXCIsIGZhZGVPbmVCIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVR3b0EgOiBcImZhZGVcIiwgZmFkZVR3b0IgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkXCIsIGZhZGVUd29BIDogXCJ1bkZhZGVcIiwgZmFkZVR3b0IgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlVGhyZWVBIDogXCJmYWRlXCIsIGZhZGVUaHJlZUIgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkXCIsIGZhZGVUaHJlZUEgOiBcInVuRmFkZVwiLCBmYWRlVGhyZWVCIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuXHJcbnJlbmRlcigpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhcyBjb250ZW50Q2FudmFzLS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIxXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAxfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMX0gIGlkPVwiY2FyZDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9e3RoaXMuc3RhdGUuZmFkZU9uZUF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9BUFAtNC1zY3JvbGwuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZU9uZUJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJiYWNrZ3JvdW5kXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9BUFAtNC1zY3JvbGwuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDFcIj5UaGUgQ2NvbiBSZXZvbHV0aW9uIEFwcCBnaXZlcyB5b3UgdGhlIGFiaWxpdHkgdG8gYWNjdXJhdGVseSBsb29rIHVwIGFuZCB0cmFjayB5b3VyIGN1cnJlbnQgcHVyY2hhc2VzIHZpYSB0aGUgb3JkZXIgbnVtYmVyIHN5c3RlbS4gQ29udGFjdCB1cyB0byBnZXQgc3RhcnRlZCE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIyXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAyfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMn0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTJ9ICBpZD1cImNhcmQyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPXt0aGlzLnN0YXRlLmZhZGVUd29BfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQVBQLTUtaW52b2ljZS5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVHdvQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0FQUC01LWludm9pY2UuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDJcIj5UaGUgUmV2b2x1dGlvbiBBcHAgb2ZmZXJzIGEgdW5pcXVlLCBkdWFsIGZ1bmN0aW9uLCBpbnZvaWNpbmcgb3B0aW9uLiBQcm92aWRpbmcgeW91IGFuZC9vciB5b3VyIGNsaWVudHMgd2l0aCBhbiBpdGVtaXplZCBpbnZvaWNlIHdpdGggcmVmZXJlbmNlcyB0byBzZXJpYWwgbnVtYmVyLCBtYW51ZmFjdHVyZXIsIHNpemUsIGFuZCBib2R5IHN0eWxlOyBqdXN0IGxpa2UgdGhlIGludm9pY2VzIHlvdSB3b3VsZCByZWNlaXZlIG9uIGVhY2ggYW5kIGV2ZXJ5IHRyYW5zYWN0aW9uIG1hZGUgd2hlbiB5b3Ugc2VsbCBjYXRhbHl0aWMgY29udmVydGVycyB0byBDY29uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjNcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDN9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAzfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lM30gIGlkPVwiY2FyZDNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVRocmVlQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0FQUC02LXNoaXBwaW5nLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPXt0aGlzLnN0YXRlLmZhZGVUaHJlZUJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9BUFAtNi1zaGlwcGluZy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cigyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIiBpZD1cImNhcmRUZXh0M1wiPlRoZSBSZXZvbHV0aW9uIEFwcCBmZWF0dXJlcyBvdXIgcHJpY2UgbG9jayBndWFyYW50ZWUuIE9uY2UgdGhlIGNsaWVudCB0YXBzIHRoZSDigJxzaGlw4oCdIGJ1dHRvbiwgdGhpcyBsb2NrcyBpbiB0aGUgY2F0YWx5dGljIGNvbnZlcnRlciBzY3JhcCBwcmljZSBvZiB0aGF0IHNoaXBtZW50IHVudGlsIGl0IGFycml2ZXMgYXQgb3VyIGRvY2suIFRoaXMgcHJvdGVjdHMgb3VyIGNsaWVudHMgZnJvbSBtYXJrZXQgdm9sYXRpbGl0eSBhbmQgcHJpY2Ugc3dpbmdzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2ZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZU91dCBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICN1bkZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDUlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4zdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuMXZ3KTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDMge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4xMnZ3KTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgc2lsdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1mcm9udCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDQwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4zdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZFRleHQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjF2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNtYWxsQ29udGVudDI7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SmallContent2.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SmallContent2);

/***/ }),

/***/ "./components/SmallContent3.js":
/*!*************************************!*\
  !*** ./components/SmallContent3.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\SmallContent3.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class SmallContent3 extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      className1: "flipCard",
      className2: "flipCard",
      className3: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade",
      fadeTwoA: "unFade",
      fadeTwoB: "fade",
      fadeThreeA: "unFade",
      fadeThreeB: "fade"
    };
    this.flip1 = this.flip1.bind(this);
    this.unflip1 = this.unflip1.bind(this);
    this.flip2 = this.flip2.bind(this);
    this.unflip2 = this.unflip2.bind(this);
    this.flip3 = this.flip3.bind(this);
    this.unflip3 = this.unflip3.bind(this);
  }

  flip1() {
    this.setState({
      className1: "flipCard is-flipped",
      fadeOneA: "fade",
      fadeOneB: "unFade"
    });
  }

  unflip1() {
    this.setState({
      className1: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade"
    });
  }

  flip2() {
    this.setState({
      className2: "flipCard is-flipped",
      fadeTwoA: "fade",
      fadeTwoB: "unFade"
    });
  }

  unflip2() {
    this.setState({
      className2: "flipCard",
      fadeTwoA: "unFade",
      fadeTwoB: "fade"
    });
  }

  flip3() {
    this.setState({
      className3: "flipCard is-flipped",
      fadeThreeA: "fade",
      fadeThreeB: "unFade"
    });
  }

  unflip3() {
    this.setState({
      className3: "flipCard",
      fadeThreeA: "unFade",
      fadeThreeB: "fade"
    });
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-2386499142" + " " + "contentCanvas contentCanvas--card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, __jsx("ul", {
      id: "outer-list",
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }, __jsx("li", {
      style: {
        listStyle: "none"
      },
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx("strong", {
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 55
      }
    }, __jsx("u", {
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 63
      }
    }, "Where is your pricelist and how can I get it?")), __jsx("br", {
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 124
      }
    }), "Our pricelist can only be found within the Ccon Revolution Web App. Prospective clients desiring an invitation to the app must contact us by phone or email."), __jsx("li", {
      style: {
        listStyle: "none"
      },
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }, __jsx("strong", {
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 55
      }
    }, __jsx("u", {
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 63
      }
    }, "What is the minimum/maximum amount of catalytic converters I can bring to Ccon Metals?")), __jsx("br", {
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 165
      }
    }), "Unlike most catalytic converter recycling businesses, Ccon Metals has no converter minimums or maximums.  Rest assured that, regardless of quantity, your converters will be purchased fairly. Call us to learn more!"), __jsx("li", {
      style: {
        listStyle: "none"
      },
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, __jsx("strong", {
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 56
      }
    }, __jsx("u", {
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 64
      }
    }, "What is Downgrading/Upgrading? Why is it done?  Does Ccon do this?")), __jsx("br", {
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 146
      }
    }), "Downgrading/Upgrading occurs when a buyer takes advantage of a seller by manipulating information. The reason a buyer may do this is to:", __jsx("ul", {
      id: "inner-list",
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 23
      }
    }, __jsx("li", {
      id: "inner-list-item",
      style: {
        listStyle: "square",
        padding: "0",
        margin: "0",
        listStylePosition: "inside"
      },
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }
    }, "Secure new clients by \u201Dwowing\u201D them with artificial catalytic converter prices"), __jsx("li", {
      id: "inner-list-item",
      style: {
        listStyle: "square",
        padding: "0",
        margin: "0",
        listStylePosition: "inside"
      },
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      }
    }, "Boost the value of popular converters by pulling value away from lesser known converters"), __jsx("li", {
      id: "inner-list-item",
      style: {
        listStyle: "square",
        padding: "0",
        margin: "0",
        listStylePosition: "inside"
      },
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 25
      }
    }, "Take money away from one client so a more \u201Cworthwhile\u201D client can be overpaid"), __jsx("li", {
      style: {
        listStyle: "none",
        padding: "0",
        margin: "0"
      },
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, __jsx("br", {
      className: "jsx-2386499142",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 86
      }
    }), "We at Ccon Metals would never do such a disservice to our valued customers."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2386499142",
      __self: this
    }, "@-webkit-keyframes fadeIn-jsx-2386499142{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeIn-jsx-2386499142{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadeOut-jsx-2386499142{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}@keyframes fadeOut-jsx-2386499142{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}#outer-list.jsx-2386499142{padding:0;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:100%;width:80%;margin:auto;}#inner-list.jsx-2386499142{margin-top:10px;}#inner-list-item.jsx-2386499142{display:list-item;}li.jsx-2386499142{height:25%;font-size:calc(12px + 0.5vw);display:inline-block;margin-top:5px;}#fade.jsx-2386499142{-webkit-animation:fadeOut-jsx-2386499142 ease 0.5s;animation:fadeOut-jsx-2386499142 ease 0.5s;}#unFade.jsx-2386499142{-webkit-animation:fadeIn-jsx-2386499142 ease 0.5s;animation:fadeIn-jsx-2386499142 ease 0.5s;}.cardText.jsx-2386499142{position:absolute;height:100%;width:100%;-webkit-transform:translateY(-65%);-ms-transform:translateY(-65%);transform:translateY(-65%);}#contentContainer.jsx-2386499142{position:absolute;height:100%;width:100%;background-image:url('image');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(25%);-ms-transform:translateX(25%);transform:translateX(25%);right:25%;overflow-y:auto;border:5px solid silver;box-sizing:border-box;}.contentCanvas.jsx-2386499142{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}.flipCard.jsx-2386499142{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}.card__face.jsx-2386499142{position:absolute;height:100%;width:100%;text-align:center;}.card__face--front.jsx-2386499142{background:white;overflow:hidden;}.card__face--back.jsx-2386499142{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );overflow:hidden;}.flipCard.is-flipped.jsx-2386499142{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCardContainer.jsx-2386499142{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333333333333333333333333%;margin:auto;display:inline-block;}@media (max-width:720px){#outer-list.jsx-2386499142{height:90%;}#inner-list-item.jsx-2386499142{height:auto;}.flipCardContainer.jsx-2386499142{width:100%;height:33%;margin-top:0%;}#card3.jsx-2386499142{margin-top:0%;}.card__face--back.jsx-2386499142{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-2386499142{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}#card2.jsx-2386499142{margin-top:0%;}.flipCard.jsx-2386499142{width:100%;height:100%;}.contentCanvas.jsx-2386499142{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:100%;width:100%;margin-top:0%;}#contentContainer.jsx-2386499142{height:100%;min-height:575px;overflow-y:auto;}ul.jsx-2386499142{padding:0;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:75%;width:80%;margin:auto;}li.jsx-2386499142{margin-top:2vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxDb250ZW50My5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRWlCLEFBS2lDLEFBTUEsQUFNQSxBQUlBLEFBSUEsQUFNRixBQVFNLEFBSUUsQUFJUCxBQVFpQixBQUlELEFBSVQsQUFPQSxBQWNSLEFBU0UsQUFlTSxBQVFELEFBS0EsQUFNVyxBQVFWLEFBWUwsQUFJQyxBQUlELEFBT2QsQUFHb0IsQUFLVyxBQU0vQixBQUdjLEFBS2dCLEFBU2YsQUFRRixBQVFLLFVBM01qQixBQU1BLEFBTUEsQUFJQSxBQUlBLEFBTTZCLEFBcURqQixBQXFIbUIsQ0ExSkYsQUFvRzdCLEFBUWEsQUF3QkMsQ0F0RkUsQUEwRGhCLEFBMENtQixFQWhDbkIsQUFjQSxDQWtDQSxDQTFLRixDQTZFa0IsQUFLWSxBQTRDRSxDQTFIaEMsQUFvQmMsQUFPQSxBQXNDQSxJQXZCRCxBQXVFSyxDQXdCaEIsS0F0RmdCLENBb0dFLENBbElQLEFBT0EsQUFzQ0EsR0F2QkMsQUErQmQsR0F3Q0UsSUE3R3FCLENBa0J4QixBQU1pQyxBQXVDWixHQWhCUCxDQVJHLEFBNEdkLFVBbkdZLElBUGQsQUF1QkEsRUEvRGlCLE1BZ0RMLElBeEJ3QixLQXRCcEMsQ0ErQ3VCLFlBcUNYLENBaURTLEVBN0hyQixFQUpBLEVBd0VBLEFBMkNFLEVBdkUwQixDQXFDZCxNQTlETSxFQStHSixJQWhEcUIsRUFmbkIsQUE0Q2hCLE1Bb0JhLElBL0dhLE1BZ0Q1QixDQWdFa0IsR0EzSkosQUEwS0MsQ0F4SWYsVUEwSEUsQUFlWSxDQTFLRixDQXlHRSxRQWtFRSxDQTFLRixHQXlHUyxRQWtFckIsQ0ExS0YsWUEwR0EscUJBekM4QixhQXhCbEIsVUFDTSxnQkFDUSx3QkFDRixzQkFDeEIsV0FxQm9CLGtCQUNILGVBRWpCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxDb250ZW50My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTbWFsbENvbnRlbnQzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICBjbGFzc05hbWUxOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTI6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMzogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBmYWRlT25lQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZU9uZUI6IFwiZmFkZVwiLFxyXG4gICAgICBmYWRlVHdvQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVR3b0I6IFwiZmFkZVwiLFxyXG4gICAgICBmYWRlVGhyZWVBOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlVGhyZWVCOiBcImZhZGVcIixcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZsaXAxID0gdGhpcy5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAxID0gdGhpcy51bmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAyID0gdGhpcy5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAyID0gdGhpcy51bmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAzID0gdGhpcy5mbGlwMy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAzID0gdGhpcy51bmZsaXAzLmJpbmQodGhpcyk7XHJcbn1cclxuXHJcbmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVPbmVBIDogXCJmYWRlXCIsIGZhZGVPbmVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZFwiLCBmYWRlT25lQSA6IFwidW5GYWRlXCIsIGZhZGVPbmVCIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVR3b0EgOiBcImZhZGVcIiwgZmFkZVR3b0IgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkXCIsIGZhZGVUd29BIDogXCJ1bkZhZGVcIiwgZmFkZVR3b0IgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlVGhyZWVBIDogXCJmYWRlXCIsIGZhZGVUaHJlZUIgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkXCIsIGZhZGVUaHJlZUEgOiBcInVuRmFkZVwiLCBmYWRlVGhyZWVCIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuXHJcbnJlbmRlcigpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhcyBjb250ZW50Q2FudmFzLS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgPHVsIGlkPVwib3V0ZXItbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBsaXN0U3R5bGU6IFwibm9uZVwiIH19PjxzdHJvbmc+PHU+V2hlcmUgaXMgeW91ciBwcmljZWxpc3QgYW5kIGhvdyBjYW4gSSBnZXQgaXQ/PC91Pjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIE91ciBwcmljZWxpc3QgY2FuIG9ubHkgYmUgZm91bmQgd2l0aGluIHRoZSBDY29uIFJldm9sdXRpb24gV2ViIEFwcC4gUHJvc3BlY3RpdmUgY2xpZW50cyBkZXNpcmluZyBhbiBpbnZpdGF0aW9uIHRvIHRoZSBhcHAgbXVzdCBjb250YWN0IHVzIGJ5IHBob25lIG9yIGVtYWlsLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCIgfX0+PHN0cm9uZz48dT5XaGF0IGlzIHRoZSBtaW5pbXVtL21heGltdW0gYW1vdW50IG9mIGNhdGFseXRpYyBjb252ZXJ0ZXJzIEkgY2FuIGJyaW5nIHRvIENjb24gTWV0YWxzPzwvdT48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBVbmxpa2UgbW9zdCBjYXRhbHl0aWMgY29udmVydGVyIHJlY3ljbGluZyBidXNpbmVzc2VzLCBDY29uIE1ldGFscyBoYXMgbm8gY29udmVydGVyIG1pbmltdW1zIG9yIG1heGltdW1zLiAgUmVzdCBhc3N1cmVkIHRoYXQsIHJlZ2FyZGxlc3Mgb2YgcXVhbnRpdHksIHlvdXIgY29udmVydGVycyB3aWxsIGJlIHB1cmNoYXNlZCBmYWlybHkuIENhbGwgdXMgdG8gbGVhcm4gbW9yZSFcclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBsaXN0U3R5bGU6IFwibm9uZVwiIH19ID48c3Ryb25nPjx1PldoYXQgaXMgRG93bmdyYWRpbmcvVXBncmFkaW5nPyBXaHkgaXMgaXQgZG9uZT8gIERvZXMgQ2NvbiBkbyB0aGlzPzwvdT48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBEb3duZ3JhZGluZy9VcGdyYWRpbmcgb2NjdXJzIHdoZW4gYSBidXllciB0YWtlcyBhZHZhbnRhZ2Ugb2YgYSBzZWxsZXIgYnkgbWFuaXB1bGF0aW5nIGluZm9ybWF0aW9uLiBUaGUgcmVhc29uIGEgYnV5ZXIgbWF5IGRvIHRoaXMgaXMgdG86IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwiaW5uZXItbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJpbm5lci1saXN0LWl0ZW1cIiBzdHlsZT17eyBsaXN0U3R5bGU6IFwic3F1YXJlXCIsIHBhZGRpbmc6IFwiMFwiLCBtYXJnaW46IFwiMFwiLCBsaXN0U3R5bGVQb3NpdGlvbjogXCJpbnNpZGVcIiB9fT5TZWN1cmUgbmV3IGNsaWVudHMgYnkg4oCdd293aW5n4oCdIHRoZW0gd2l0aCBhcnRpZmljaWFsIGNhdGFseXRpYyBjb252ZXJ0ZXIgcHJpY2VzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiaW5uZXItbGlzdC1pdGVtXCIgc3R5bGU9e3sgbGlzdFN0eWxlOiBcInNxdWFyZVwiLCBwYWRkaW5nOiBcIjBcIiwgbWFyZ2luOiBcIjBcIiwgbGlzdFN0eWxlUG9zaXRpb246IFwiaW5zaWRlXCIgfX0+Qm9vc3QgdGhlIHZhbHVlIG9mIHBvcHVsYXIgY29udmVydGVycyBieSBwdWxsaW5nIHZhbHVlIGF3YXkgZnJvbSBsZXNzZXIga25vd24gY29udmVydGVyczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cImlubmVyLWxpc3QtaXRlbVwiIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJzcXVhcmVcIiwgcGFkZGluZzogXCIwXCIsIG1hcmdpbjogXCIwXCIsIGxpc3RTdHlsZVBvc2l0aW9uOiBcImluc2lkZVwiIH19PlRha2UgbW9uZXkgYXdheSBmcm9tIG9uZSBjbGllbnQgc28gYSBtb3JlIOKAnHdvcnRod2hpbGXigJ0gY2xpZW50IGNhbiBiZSBvdmVycGFpZDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBsaXN0U3R5bGU6IFwibm9uZVwiLCBwYWRkaW5nOiBcIjBcIiwgbWFyZ2luOiBcIjBcIiB9fT48YnIgLz5XZSBhdCBDY29uIE1ldGFscyB3b3VsZCBuZXZlciBkbyBzdWNoIGEgZGlzc2VydmljZSB0byBvdXIgdmFsdWVkIGN1c3RvbWVycy48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjb3V0ZXItbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNpbm5lci1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjaW5uZXItbGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuNXZ3KTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjZmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI3VuRmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02NSUpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tZnJvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiA0MHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAjb3V0ZXItbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNpbm5lci1saXN0LWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbik7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTbWFsbENvbnRlbnQzOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SmallContent3.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SmallContent3);

/***/ }),

/***/ "./components/SmallExplain.js":
/*!************************************!*\
  !*** ./components/SmallExplain.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\SmallExplain.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class SmallExplain extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      id: "explainContainer",
      className: "jsx-2664563196",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-2664563196" + " " + "allText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, __jsx("p", {
      id: "smallButtonTag",
      className: "jsx-2664563196",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, "Multi-User"), __jsx("p", {
      id: "smallExplain",
      className: "jsx-2664563196",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    }, "Multiple converter buyers from a single physical location.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2664563196",
      __self: this
    }, "#explainContainer.jsx-2664563196{-webkit-transform:translate(0%,-75px);-ms-transform:translate(0%,-75px);transform:translate(0%,-75px);}.allText.jsx-2664563196{-webkit-transform:translate(0%,0%);-ms-transform:translate(0%,0%);transform:translate(0%,0%);}#smallButtonTag.jsx-2664563196{font-weight:600;font-size:1.5em;color:black;-webkit-text-decoration:underline;text-decoration:underline;-webkit-transform:translate(0%,6px);-ms-transform:translate(0%,6px);transform:translate(0%,6px);}#smallExplain.jsx-2664563196{color:white;pointer-events:none;-webkit-transform:translate(0%,5px);-ms-transform:translate(0%,5px);transform:translate(0%,5px);font-size:calc(14px + 0.4vw);}@media (max-width:720px){#explainContainer.jsx-2664563196{position:absolute;width:100%;height:100%;-webkit-transform:translate(0%,-50px);-ms-transform:translate(0%,-50px);transform:translate(0%,-50px);}.allText.jsx-2664563196{position:absolute;width:100%;height:100%;margin:auto;}#smallButtonTag.jsx-2664563196{position:absolute;height:50px;width:200px;-webkit-transform:translate(0%,-20px);-ms-transform:translate(0%,-20px);transform:translate(0%,-20px);}#smallExplain.jsx-2664563196{position:absolute;color:white;pointer-events:none;width:400px;height:50px;margin-left:220px;-webkit-transform:translate(0%,-16px);-ms-transform:translate(0%,-16px);transform:translate(0%,-16px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxFeHBsYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCeUIsQUFLd0IsQUFJQSxBQUdxQixBQVFKLEFBU1UsQUFPQSxBQU9BLEFBT0EsWUE3QkYsSUFSSixFQWlCRCxBQU9BLEFBT0MsQUFPQSxXQXBCQSxBQU9BLENBT0EsQUFPUSxFQXRDWixBQVFpQixTQVc5QixBQU1pQixDQVFqQixFQWhDMkIsTUFzQ1YsR0FiaEIsU0FjZ0IsWUFDTSxrQkFFdkIsQ0FoREgsU0FKQSxFQVlELHdCQU1rQyxlQVU3QixDQWNBLGFBdkJKLHFDQWlDSSxNQXhDSiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXFNtYWxsRXhwbGFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTbWFsbEV4cGxhaW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXhwbGFpbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInNtYWxsQnV0dG9uVGFnXCI+TXVsdGktVXNlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJzbWFsbEV4cGxhaW5cIj5NdWx0aXBsZSBjb252ZXJ0ZXIgYnV5ZXJzIGZyb20gYSBzaW5nbGUgcGh5c2ljYWwgbG9jYXRpb24uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2V4cGxhaW5Db250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC03NXB4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWxsVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNzbWFsbEJ1dHRvblRhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDZweClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NtYWxsRXhwbGFpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA1cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAwLjR2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNleHBsYWluQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MHB4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbGxUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjc21hbGxCdXR0b25UYWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMjBweClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjc21hbGxFeHBsYWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMTZweClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbWFsbEV4cGxhaW47Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SmallExplain.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SmallExplain);

/***/ }),

/***/ "./components/SoloButton.js":
/*!**********************************!*\
  !*** ./components/SoloButton.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SoloExplain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SoloExplain */ "./components/SoloExplain.js");
/* harmony import */ var _public_assets_single_figure_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/assets/single-figure.png */ "./public/assets/single-figure.png");
/* harmony import */ var _public_assets_single_figure_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_single_figure_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\SoloButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class SoloButton extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      id: "buttons",
      className: "jsx-201809982",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, __jsx("div", {
      id: "circle",
      className: "jsx-201809982",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }), __jsx(_SoloExplain__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 23
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "201809982",
      __self: this
    }, "#circle.jsx-201809982{background-color:hsl(0,0%,90%);box-shadow:inset hsla(0,0%,15%,1) 0 0px 0px 4px, inset hsla(0,0%,15%,.8) 0 -1px 5px 4px, inset hsla(0,0%,0%,.25) 0 -1px 0px 7px, inset hsla(0,0%,100%,.7) 0 2px 1px 7px,  hsla(0,0%,0%,.15) 0 -5px 6px 4px, hsla(0,0%,100%,.5) 0 5px 6px 4px;-webkit-transition:color .2s;transition:color .2s;min-width:150px;width:200px;height:50px;line-height:1px;border-radius:8px;background-image: -webkit-radial-gradient( 50% 0%,8% 50%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 50% 100%,12% 50%,hsla(0,0%,100%,.6) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 0% 50%,50% 7%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 100% 50%,50% 5%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%),  -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,0%,0) 0%,hsla(0,0%,0%,0) 3%,hsla(0,0%,0%,.1) 3.5%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 6%,hsla(0,0%,100%,.1) 7.5%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 1.2%,hsla(0,0%,100%,.2) 2.2%),  -webkit-radial-gradient( 50% 50%,200% 50%,hsla(0,0%,90%,1) 5%,hsla(0,0%,85%,1) 30%,hsla(0,0%,60%,1) 100%);}#circle.jsx-201809982:before,#circle.jsx-201809982:after{content:\"\";top:0%;left:0%;position:relative;width:inherit;height:inherit;border-radius:inherit;background-image: -webkit-radial-gradient( 50% 0%,10% 50%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 50% 100%,10% 50%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 0% 50%,50% 10%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 100% 50%,50% 06%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%);}#circle.jsx-201809982:before{-webkit-transform:rotate( 65deg);-ms-transform:rotate( 65deg);transform:rotate( 65deg);}#circle.jsx-201809982:after{-webkit-transform:rotate(-65deg);-ms-transform:rotate(-65deg);transform:rotate(-65deg);}#circle.jsx-201809982:active{color:hsl(210,100%,40%);text-shadow:hsla(210,100%,20%,.3) 0 -1px 0,hsl(210,100%,85%) 0 2px 1px,hsla(200,100%,80%,1) 0 0 5px,hsla(210,100%,50%,.6) 0 0 20px;box-shadow: inset hsla(210,100%,30%,1) 0 0px 0px 4px, inset hsla(210,100%,15%,.4) 0 -1px 5px 4px, inset hsla(210,100%,20%,.25) 0 -1px 0px 7px, inset hsla(210,100%,100%,.7) 0 2px 1px 7px,  hsla(210,100%,75%,.8) 0 0px 3px 2px, hsla(210,50%,40%,.25) 0 -5px 6px 4px, hsla(210,80%,95%,1) 0 5px 6px 4px;}#buttons.jsx-201809982{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;max-height:75px;}@media (max-width:720px){#buttons.jsx-201809982{display:inline-block;height:50px;width:100%;margin:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QnlCLEFBSWdFLEFBZ0NwQixBQWU0QixBQUNELEFBR1osQUFrQkgsQUFRQSxXQTVDaEIsT0FDQyxHQTRDTSxHQTFCc0gsRUFqQmxILEtBNUJlLEVBd0VwQixXQTNDQyxBQTRDQSxZQUNkLEVBNUNlLGVBQ08sY0FTa0IsQUFDRCxRQUhnRCxJQXlCbEUsd0RBVGdCLG9CQVVyQixnQkFDbEIsNkVBL0R1QixrREFHTCxnQkFDSixZQUNBLFlBQ0ksZ0JBQ0Usa0JBVzJGLGdEQW1CL0csWUFnQkEsc3dCQWpDQSIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXFNvbG9CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU29sb0V4cGxhaW4gZnJvbSAnLi9Tb2xvRXhwbGFpbic7XHJcbmltcG9ydCBTaW5nbGVGaWd1cmUgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9zaW5nbGUtZmlndXJlLnBuZyc7XHJcblxyXG5cclxuY2xhc3MgU29sb0J1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8U29sb0V4cGxhaW4gLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGUge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsMCUsOTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCBoc2xhKDAsMCUsMTUlLCAgMSkgMCAgMHB4IDBweCA0cHgsIC8qIGJvcmRlciAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwxNSUsIC44KSAwIC0xcHggNXB4IDRweCwgLyogc29mdCBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwwJSwgLjI1KSAwIC0xcHggMHB4IDdweCwgLyogYm90dG9tIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDEwMCUsLjcpIDAgIDJweCAxcHggN3B4LCAvKiB0b3AgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDAsMCUsIDAlLC4xNSkgMCAtNXB4IDZweCA0cHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgwLDAlLDEwMCUsLjUpIDAgIDVweCA2cHggNHB4OyAvKiBvdXRlciBITCAqLyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogQnJ1c2hlZCBNZXRhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAgIDAlLCAgOCUgNTAlLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlIDEwMCUsIDEyJSA1MCUsIGhzbGEoMCwwJSwxMDAlLC42KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICAgMCUgIDUwJSwgNTAlICA3JSwgaHNsYSgwLDAlLDEwMCUsLjUpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggMTAwJSAgNTAlLCA1MCUgIDUlLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMTAwJSAxMDAlLCBoc2xhKDAsMCUsICAwJSwwKSAwJSwgaHNsYSgwLDAlLCAgMCUsMCkgICAzJSwgaHNsYSgwLDAlLCAgMCUsLjEpIDMuNSUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMTAwJSAxMDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgICA2JSwgaHNsYSgwLDAlLDEwMCUsLjEpIDcuNSUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMTAwJSAxMDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMS4yJSwgaHNsYSgwLDAlLDEwMCUsLjIpIDIuMiUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAyMDAlIDUwJSwgaHNsYSgwLDAlLDkwJSwxKSA1JSwgaHNsYSgwLDAlLDg1JSwxKSAzMCUsIGhzbGEoMCwwJSw2MCUsMSkgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTpiZWZvcmUsICNjaXJjbGU6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZmFrZSBjb25pY2FsIGdyYWRpZW50cyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgICAwJSwgMTAlIDUwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlIDEwMCUsIDEwJSA1MCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggICAwJSAgNTAlLCA1MCUgMTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDEwMCUgIDUwJSwgNTAlIDA2JSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmJlZm9yZSB7IHRyYW5zZm9ybTogcm90YXRlKCA2NWRlZyk7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTphZnRlciB7IHRyYW5zZm9ybTogcm90YXRlKC02NWRlZyk7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbCgyMTAsIDEwMCUsIDQwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBoc2xhKDIxMCwxMDAlLDIwJSwuMykgMCAtMXB4IDAsIGhzbCgyMTAsMTAwJSw4NSUpIDAgMnB4IDFweCwgaHNsYSgyMDAsMTAwJSw4MCUsMSkgMCAwIDVweCwgaHNsYSgyMTAsMTAwJSw1MCUsLjYpIDAgMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDMwJSwgIDEpIDAgIDBweCAwcHggNHB4LCAvKiBib3JkZXIgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDE1JSwgLjQpIDAgLTFweCA1cHggNHB4LCAvKiBzb2Z0IFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwyMCUsLjI1KSAwIC0xcHggMHB4IDdweCwgLyogYm90dG9tIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwxMDAlLC43KSAwICAycHggMXB4IDdweCwgLyogdG9wIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsMTAwJSw3NSUsIC44KSAwICAwcHggM3B4IDJweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCw1MCUsNDAlLCAuMjUpIDAgLTVweCA2cHggNHB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDgwJSw5NSUsICAgMSkgMCAgNXB4IDZweCA0cHg7IC8qIG91dGVyIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogRW5kIEJydXNoZWQgTWV0YWwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNidXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNidXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2xvQnV0dG9uOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SoloButton.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SoloButton);

/***/ }),

/***/ "./components/SoloContent1.js":
/*!************************************!*\
  !*** ./components/SoloContent1.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\SoloContent1.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class SoloContent1 extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      className1: "flipCard",
      className2: "flipCard",
      className3: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade",
      fadeTwoA: "unFade",
      fadeTwoB: "fade",
      fadeThreeA: "unFade",
      fadeThreeB: "fade"
    };
    this.flip1 = this.flip1.bind(this);
    this.unflip1 = this.unflip1.bind(this);
    this.flip2 = this.flip2.bind(this);
    this.unflip2 = this.unflip2.bind(this);
    this.flip3 = this.flip3.bind(this);
    this.unflip3 = this.unflip3.bind(this);
  }

  flip1() {
    this.setState({
      className1: "flipCard is-flipped",
      fadeOneA: "fade",
      fadeOneB: "unFade"
    });
  }

  unflip1() {
    this.setState({
      className1: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade"
    });
  }

  flip2() {
    this.setState({
      className2: "flipCard is-flipped",
      fadeTwoA: "fade",
      fadeTwoB: "unFade"
    });
  }

  unflip2() {
    this.setState({
      className2: "flipCard",
      fadeTwoA: "unFade",
      fadeTwoB: "fade"
    });
  }

  flip3() {
    this.setState({
      className3: "flipCard is-flipped",
      fadeThreeA: "fade",
      fadeThreeB: "unFade"
    });
  }

  unflip3() {
    this.setState({
      className3: "flipCard",
      fadeThreeA: "unFade",
      fadeThreeB: "fade"
    });
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-3883756355",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-3883756355" + " " + "contentCanvas contentCanvas--card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "flipContainer1",
      onMouseEnter: this.flip1,
      onMouseLeave: this.unflip1,
      className: "jsx-3883756355" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-3883756355" + " " + (this.state.className1 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx("div", {
      id: this.state.fadeOneA,
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/CCON-1-leaving.jpg */ "./public/assets/CCON-1-leaving.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-3883756355" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: this.state.fadeOneB,
      className: "jsx-3883756355" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/CCON-1-leaving.jpg */ "./public/assets/CCON-1-leaving.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(20px)"
      },
      className: "jsx-3883756355",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 27
      }
    }), __jsx("p", {
      id: "cardText1",
      className: "jsx-3883756355" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 27
      }
    }, "Ccon Metals offers fast and accurate grading by our converter specialists, enabling you to sell your catalytic converters quickly and efficiently. Call us to get started!")))), __jsx("div", {
      id: "flipContainer2",
      onMouseEnter: this.flip2,
      onMouseLeave: this.unflip2,
      className: "jsx-3883756355" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card2",
      className: "jsx-3883756355" + " " + (this.state.className2 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: this.state.fadeTwoA,
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/CCON-2-money.jpeg */ "./public/assets/CCON-2-money.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-3883756355" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: this.state.fadeTwoB,
      className: "jsx-3883756355" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/CCON-2-money.jpeg */ "./public/assets/CCON-2-money.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(20px)"
      },
      className: "jsx-3883756355",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 27
      }
    }), __jsx("p", {
      id: "cardText2",
      className: "jsx-3883756355" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 27
      }
    }, "Ccon Metals offers several methods of payment when you sell catalytic converters. Clients can choose between cash, cheque, bank wire, or E-transfer.")))), __jsx("div", {
      id: "flipContainer3",
      onMouseEnter: this.flip3,
      onMouseLeave: this.unflip3,
      className: "jsx-3883756355" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card3",
      className: "jsx-3883756355" + " " + (this.state.className3 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: this.state.fadeThreeA,
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/CCON-369-catalyst-jars.jpg */ "./public/assets/CCON-369-catalyst-jars.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-3883756355" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: this.state.fadeThreeB,
      className: "jsx-3883756355" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/CCON-369-catalyst-jars.jpg */ "./public/assets/CCON-369-catalyst-jars.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(20px)"
      },
      className: "jsx-3883756355",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 27
      }
    }), __jsx("p", {
      id: "cardText3",
      className: "jsx-3883756355" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 27
      }
    }, "Ccon Metals specializes in loose material assay services: running lots as small as only a few pounds, with no upper limit. We offer exceptional refining terms that match current scrap catalytic converter prices; with a highly competitive turnaround time."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3883756355",
      __self: this
    }, "@-webkit-keyframes fadeIn-jsx-3883756355{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeIn-jsx-3883756355{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadeOut-jsx-3883756355{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}@keyframes fadeOut-jsx-3883756355{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}#fade.jsx-3883756355{-webkit-animation:fadeOut-jsx-3883756355 ease 0.5s;animation:fadeOut-jsx-3883756355 ease 0.5s;}#unFade.jsx-3883756355{-webkit-animation:fadeIn-jsx-3883756355 ease 0.5s;animation:fadeIn-jsx-3883756355 ease 0.5s;}.cardText.jsx-3883756355{position:absolute;height:100%;width:80%;-webkit-transform:translateY(-105%);-ms-transform:translateY(-105%);transform:translateY(-105%);}#cardText1.jsx-3883756355{text-align:right;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.3vw);text-shadow:2px 2px 2px black;}#cardText2.jsx-3883756355{text-align:center;width:90%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:white;font-size:calc(12px + 1.3vw);text-shadow:2px 2px 2px black;}#cardText3.jsx-3883756355{text-align:left;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.1vw);text-shadow:2px 2px 2px black;}#contentContainer.jsx-3883756355{position:absolute;height:100%;width:100%;background-image:url('image');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(-225%);-ms-transform:translateX(-225%);transform:translateX(-225%);overflow:hidden;border:5px solid silver;box-sizing:border-box;}.contentCanvas.jsx-3883756355{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}.flipCard.jsx-3883756355{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}.card__face.jsx-3883756355{position:absolute;height:100%;width:100%;text-align:center;}.card__face--front.jsx-3883756355{background:white;overflow:hidden;}.card__face--back.jsx-3883756355{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );overflow:hidden;}.flipCard.is-flipped.jsx-3883756355{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCardContainer.jsx-3883756355{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333333333333333333333333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-3883756355{width:100%;height:33%;margin-top:0%;}#card3.jsx-3883756355{margin-top:0%;}.card__face--back.jsx-3883756355{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-3883756355{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}#card2.jsx-3883756355{margin-top:0%;}.flipCard.jsx-3883756355{width:100%;height:100%;}.contentCanvas.jsx-3883756355{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:102%;width:100%;margin-top:0%;}#contentContainer.jsx-3883756355{height:100%;min-height:575px;overflow:hidden;}#cardText1.jsx-3883756355{text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.4vw);}#cardText2.jsx-3883756355{text-align:center;width:75%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:white;font-size:calc(12px + 1.4vw);}#cardText3.jsx-3883756355{text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.2vw);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0NvbnRlbnQxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThJaUIsQUFLaUMsQUFNQSxBQU1BLEFBSUEsQUFJQSxBQUtnQixBQUlELEFBSVQsQUFPRCxBQVdDLEFBV0YsQUFXRSxBQWFSLEFBUUUsQUFlTSxBQVFELEFBS0EsQUFNVyxBQVFWLEFBV0wsQUFPZCxBQUdvQixBQUtXLEFBTS9CLEFBR2MsQUFLZ0IsQUFRZixBQU1NLEFBVUEsQUFVQSxVQWpOcEIsQUFNQSxBQU1BLEFBSUEsQUFJQSxBQWtFWSxDQTZEQyxBQXdCQyxDQTdFRSxBQTBGRyxFQS9CbkIsQUFjQSxFQXpHUyxDQXRCQSxBQTZFTyxBQUtZLEFBbUNFLENBNUhsQixBQWtCRixBQXNCRSxBQW9DQSxBQWlGRCxBQVVDLEFBVUQsSUEzSEEsQUE2REssQ0F3QmhCLEVBN0dRLENBdEJBLENBc0pFLEFBb0JBLENBL0pELEFBMkNPLEFBMEdMLENBaEJPLENBdkpSLEFBd0NDLEFBb0NBLEdBOUNxQixBQXdCcEIsQUE4QmQsQ0E1RWtDLENBc0pFLEFBb0JBLENBL0RsQyxDQWhHUSxBQXFKRSxHQXZLa0IsQ0F3Q0UsQUFxQ1osR0FoQlAsQ0ExQ3FCLEFBbUNsQixBQWlHZCxBQWlCa0MsVUExR3RCLElBUGQsQUF1QkEsUUFmWSxJQXRCd0IsTUF1QmIsWUFxQ1gsQ0F3Q1MsRUFuSnJCLEVBSkEsRUF1R0EsQUFrQ0UsRUE5RDBCLENBcUNkLE1BNURNLEVBb0dKLElBdkNxQixFQWZuQixBQW1DaEIsTUFvQmEsSUFwR2UsTUE4QzlCLENBdURrQixNQS9JbEIsRUE2QlksQ0F0QkEsQ0FzSkUsQUFvQkEsSUFqQ1osRUF6Q1ksRUF6RUEsQ0F0QkEsQ0FXQSxBQTJJRSxBQVVBLEFBVUEsUUExRU8sRUF6RVEsQ0F0QkEsQ0FXQSxBQTJJRSxBQVVBLEFBVUEsaUJBekVqQyxVQTFFZ0MsQ0F0QkEsQ0FXQSxBQTJJOUIsQUFVQSxBQVVBLFNBbkg0QixtQkFoQzlCLEFBVWtCLENBaENsQixDQVdBLGNBc0IwQix3QkFDRixzQkFDeEIsZUFvQm9CLGtCQUNILGVBRWpCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0NvbnRlbnQxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFNvbG9Db250ZW50MSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgICAgZmFkZU9uZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVPbmVCOiBcImZhZGVcIixcclxuICAgICAgZmFkZVR3b0E6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUd29COiBcImZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQjogXCJmYWRlXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mbGlwMSA9IHRoaXMuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMSA9IHRoaXMudW5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMiA9IHRoaXMuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMiA9IHRoaXMudW5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMyA9IHRoaXMuZmxpcDMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMyA9IHRoaXMudW5mbGlwMy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlT25lQSA6IFwiZmFkZVwiLCBmYWRlT25lQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiwgZmFkZU9uZUEgOiBcInVuRmFkZVwiLCBmYWRlT25lQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUd29BIDogXCJmYWRlXCIsIGZhZGVUd29CIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZFwiLCBmYWRlVHdvQSA6IFwidW5GYWRlXCIsIGZhZGVUd29CIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVRocmVlQSA6IFwiZmFkZVwiLCBmYWRlVGhyZWVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiLCBmYWRlVGhyZWVBIDogXCJ1bkZhZGVcIiwgZmFkZVRocmVlQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMVwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMX0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTF9ICBpZD1cImNhcmQxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPXt0aGlzLnN0YXRlLmZhZGVPbmVBfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQ0NPTi0xLWxlYXZpbmcuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZU9uZUJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTEtbGVhdmluZy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cigyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIiBpZD1cImNhcmRUZXh0MVwiPkNjb24gTWV0YWxzIG9mZmVycyBmYXN0IGFuZCBhY2N1cmF0ZSBncmFkaW5nIGJ5IG91ciBjb252ZXJ0ZXIgc3BlY2lhbGlzdHMsIGVuYWJsaW5nIHlvdSB0byBzZWxsIHlvdXIgY2F0YWx5dGljIGNvbnZlcnRlcnMgcXVpY2tseSBhbmQgZWZmaWNpZW50bHkuIENhbGwgdXMgdG8gZ2V0IHN0YXJ0ZWQhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMlwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMn0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUyfSAgaWQ9XCJjYXJkMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVHdvQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tMi1tb25leS5qcGVnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVR3b0J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTItbW9uZXkuanBlZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDIwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiIGlkPVwiY2FyZFRleHQyXCI+Q2NvbiBNZXRhbHMgb2ZmZXJzIHNldmVyYWwgbWV0aG9kcyBvZiBwYXltZW50IHdoZW4geW91IHNlbGwgY2F0YWx5dGljIGNvbnZlcnRlcnMuIENsaWVudHMgY2FuIGNob29zZSBiZXR3ZWVuIGNhc2gsIGNoZXF1ZSwgYmFuayB3aXJlLCBvciBFLXRyYW5zZmVyLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjNcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDN9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAzfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lM30gIGlkPVwiY2FyZDNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVRocmVlQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tMzY5LWNhdGFseXN0LWphcnMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVRocmVlQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tMzY5LWNhdGFseXN0LWphcnMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDNcIj5DY29uIE1ldGFscyBzcGVjaWFsaXplcyBpbiBsb29zZSBtYXRlcmlhbCBhc3NheSBzZXJ2aWNlczogcnVubmluZyBsb3RzIGFzIHNtYWxsIGFzIG9ubHkgYSBmZXcgcG91bmRzLCB3aXRoIG5vIHVwcGVyIGxpbWl0LiBXZSBvZmZlciBleGNlcHRpb25hbCByZWZpbmluZyB0ZXJtcyB0aGF0IG1hdGNoIGN1cnJlbnQgc2NyYXAgY2F0YWx5dGljIGNvbnZlcnRlciBwcmljZXM7IHdpdGggYSBoaWdobHkgY29tcGV0aXRpdmUgdHVybmFyb3VuZCB0aW1lLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2ZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZU91dCBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICN1bkZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDUlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4zdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDMge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4xdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIyNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgc2lsdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1mcm9udCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDQwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZFRleHQxIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjR2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuNHZ3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4ydncpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU29sb0NvbnRlbnQxOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SoloContent1.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SoloContent1);

/***/ }),

/***/ "./components/SoloContent2.js":
/*!************************************!*\
  !*** ./components/SoloContent2.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\SoloContent2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class SoloContent2 extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      className1: "flipCard",
      className2: "flipCard",
      className3: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade",
      fadeTwoA: "unFade",
      fadeTwoB: "fade",
      fadeThreeA: "unFade",
      fadeThreeB: "fade"
    };
    this.flip1 = this.flip1.bind(this);
    this.unflip1 = this.unflip1.bind(this);
    this.flip2 = this.flip2.bind(this);
    this.unflip2 = this.unflip2.bind(this);
    this.flip3 = this.flip3.bind(this);
    this.unflip3 = this.unflip3.bind(this);
  }

  flip1() {
    this.setState({
      className1: "flipCard is-flipped",
      fadeOneA: "fade",
      fadeOneB: "unFade"
    });
  }

  unflip1() {
    this.setState({
      className1: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade"
    });
  }

  flip2() {
    this.setState({
      className2: "flipCard is-flipped",
      fadeTwoA: "fade",
      fadeTwoB: "unFade"
    });
  }

  unflip2() {
    this.setState({
      className2: "flipCard",
      fadeTwoA: "unFade",
      fadeTwoB: "fade"
    });
  }

  flip3() {
    this.setState({
      className3: "flipCard is-flipped",
      fadeThreeA: "fade",
      fadeThreeB: "unFade"
    });
  }

  unflip3() {
    this.setState({
      className3: "flipCard",
      fadeThreeA: "unFade",
      fadeThreeB: "fade"
    });
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-608381506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-608381506" + " " + "contentCanvas contentCanvas--card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "flipContainer1",
      onMouseEnter: this.flip1,
      onMouseLeave: this.unflip1,
      className: "jsx-608381506" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-608381506" + " " + (this.state.className1 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx("div", {
      id: this.state.fadeOneA,
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/APP-1-graph.jpg */ "./public/assets/APP-1-graph.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-608381506" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: this.state.fadeOneB,
      className: "jsx-608381506" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/APP-1-graph.jpg */ "./public/assets/APP-1-graph.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(20px)"
      },
      className: "jsx-608381506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 27
      }
    }), __jsx("p", {
      id: "cardText1",
      className: "jsx-608381506" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 27
      }
    }, "Ccon Metals catalytic converter scrap price always represents current precious metals markets. The Ccon Revolution App automatically updates as market pricing changes.")))), __jsx("div", {
      id: "flipContainer2",
      onMouseEnter: this.flip2,
      onMouseLeave: this.unflip2,
      className: "jsx-608381506" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card2",
      className: "jsx-608381506" + " " + (this.state.className2 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: this.state.fadeTwoA,
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/APP-2-browse.jpg */ "./public/assets/APP-2-browse.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-608381506" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: this.state.fadeTwoB,
      className: "jsx-608381506" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/APP-2-browse.jpg */ "./public/assets/APP-2-browse.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(20px)"
      },
      className: "jsx-608381506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 27
      }
    }), __jsx("p", {
      id: "cardText2",
      className: "jsx-608381506" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 27
      }
    }, "Our catalytic converter database is at your fingertips: enabling quick and easy unit value assessment. The Ccon Revolution App features thousands of catalytic converter numbers and prices.")))), __jsx("div", {
      id: "flipContainer3",
      onMouseEnter: this.flip3,
      onMouseLeave: this.unflip3,
      className: "jsx-608381506" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card3",
      className: "jsx-608381506" + " " + (this.state.className3 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: this.state.fadeThreeA,
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/APP-3-assist.jpg */ "./public/assets/APP-3-assist.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-608381506" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: this.state.fadeThreeB,
      className: "jsx-608381506" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/APP-3-assist.jpg */ "./public/assets/APP-3-assist.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(20px)"
      },
      className: "jsx-608381506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 27
      }
    }), __jsx("p", {
      id: "cardText3",
      className: "jsx-608381506" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 27
      }
    }, "With the Ccon Revolution App, you have access to our \u201CLive Assist\u201D feature. Allowing real time aid from our catalytic converter experts. Simply submit a picture for a near instant assessment."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "608381506",
      __self: this
    }, "@-webkit-keyframes fadeIn-jsx-608381506{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeIn-jsx-608381506{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadeOut-jsx-608381506{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}@keyframes fadeOut-jsx-608381506{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}#fade.jsx-608381506{-webkit-animation:fadeOut-jsx-608381506 ease 0.5s;animation:fadeOut-jsx-608381506 ease 0.5s;}#unFade.jsx-608381506{-webkit-animation:fadeIn-jsx-608381506 ease 0.5s;animation:fadeIn-jsx-608381506 ease 0.5s;}.cardText.jsx-608381506{position:absolute;height:100%;width:80%;-webkit-transform:translateY(-105%);-ms-transform:translateY(-105%);transform:translateY(-105%);}#cardText1.jsx-608381506{text-align:right;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.3vw);text-shadow:2px 2px 2px black;}#cardText2.jsx-608381506{text-align:center;width:90%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:white;font-size:calc(12px + 1.3vw);text-shadow:2px 2px 2px black;}#cardText3.jsx-608381506{text-align:left;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.2vw);text-shadow:2px 2px 2px black;}#contentContainer.jsx-608381506{position:absolute;height:100%;width:100%;background-image:url('image');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);right:15%;overflow:hidden;border:5px solid silver;box-sizing:border-box;}.contentCanvas.jsx-608381506{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}.flipCard.jsx-608381506{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}.card__face.jsx-608381506{position:absolute;height:100%;width:100%;text-align:center;}.card__face--front.jsx-608381506{background:white;overflow:hidden;}.card__face--back.jsx-608381506{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );overflow:hidden;}.flipCard.is-flipped.jsx-608381506{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCardContainer.jsx-608381506{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333333333333333333333333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-608381506{width:100%;height:33%;margin-top:0%;}#card3.jsx-608381506{margin-top:0%;}.card__face--back.jsx-608381506{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-608381506{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}#card2.jsx-608381506{margin-top:0%;}.flipCard.jsx-608381506{width:100%;height:100%;}.contentCanvas.jsx-608381506{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:102%;width:100%;margin-top:0%;}#contentContainer.jsx-608381506{height:100%;min-height:575px;overflow:hidden;}#cardText1.jsx-608381506{text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;font-size:calc(12px + 1.3vw);color:black;text-shadow:2px 2px 2px white;}#cardText2.jsx-608381506{text-align:center;width:75%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:white;font-size:calc(12px + 1.3vw);}#cardText3.jsx-608381506{text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.2vw);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0NvbnRlbnQyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThJaUIsQUFLaUMsQUFNQSxBQU1BLEFBSUEsQUFJQSxBQUtnQixBQUlELEFBSVQsQUFPRCxBQVdDLEFBV0YsQUFXRSxBQWVSLEFBU0UsQUFlTSxBQVFELEFBS0EsQUFNVyxBQVFWLEFBV0wsQUFPZCxBQUdvQixBQUtXLEFBTS9CLEFBR2MsQUFLZ0IsQUFRZixBQU1NLEFBV0EsQUFVQSxVQXJOcEIsQUFNQSxBQU1BLEFBSUEsQUFJQSxBQW9FWSxDQThEQyxBQXdCQyxDQTdFRSxBQTBGRyxFQS9CbkIsQUFjQSxFQTVHUyxDQXRCQSxBQWdGTyxBQUtZLEFBbUNFLENBL0hsQixBQWtCRixBQXNCRSxBQXVDQSxBQWlGRCxBQVdDLEFBVUQsSUE3SEEsQUE4REssQ0F3QmhCLEVBaEhRLENBdEJBLENBeUpFLEFBcUJBLENBbktELEFBOENPLEFBMkdMLENBakJPLENBMUpSLEFBd0NDLEFBdUNBLEdBakRxQixBQTBCcEIsQUErQmQsQ0EvRWtDLENBeUpFLEFBcUJBLENBaEVsQyxDQW5HUSxBQXlKRSxHQTNLa0IsQ0F3Q0UsQUF3Q1osR0FoQlAsQ0E3Q3FCLEFBcUNsQixBQWtHZCxBQWtCa0MsVUEzR3RCLElBUGQsQUF1QkEsUUFmWSxJQXpCd0IsTUEwQmIsWUFxQ1gsQ0E5R1osQUFzSnFCLEVBMUpyQixJQTBHQSxBQWtDRSxFQTlEMEIsQ0FxQ2QsTUEvRE0sRUF1R0osSUF2Q3FCLEVBZm5CLEFBbUNoQixNQW9CYSxJQXZHZSxNQWlEOUIsQ0F1RGtCLE1BbEpsQixFQTZCWSxDQXRCQSxDQXlKRSxBQXFCQSxJQWxDWixFQXpDWSxFQTVFQSxDQXRCQSxDQVdBLEFBOEltQixBQVdqQixBQVVBLFFBM0VPLEVBNUVRLENBdEJBLENBV0EsQUF5SkUsQUFVQSxpQkExRWpDLEFBcURnQixVQWxJZ0IsQ0F0QkEsQ0FXQSxBQThJRSxBQVdoQyxBQVVBLFNBcEg0QixtQkFuQzlCLEFBVVksQ0FoQ1osQ0FXQSxBQThJRSxRQXhIZ0IsZ0JBQ1Esd0JBQ0Ysc0JBRXhCLEtBcUJvQixrQkFDSCxlQUVqQiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXFNvbG9Db250ZW50Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTb2xvQ29udGVudDIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgIGNsYXNzTmFtZTE6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMjogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUzOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGZhZGVPbmVBOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlT25lQjogXCJmYWRlXCIsXHJcbiAgICAgIGZhZGVUd29BOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlVHdvQjogXCJmYWRlXCIsXHJcbiAgICAgIGZhZGVUaHJlZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUaHJlZUI6IFwiZmFkZVwiLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmxpcDEgPSB0aGlzLmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDEgPSB0aGlzLnVuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDIgPSB0aGlzLmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDIgPSB0aGlzLnVuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDMgPSB0aGlzLmZsaXAzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDMgPSB0aGlzLnVuZmxpcDMuYmluZCh0aGlzKTtcclxufVxyXG5cclxuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZU9uZUEgOiBcImZhZGVcIiwgZmFkZU9uZUIgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkXCIsIGZhZGVPbmVBIDogXCJ1bkZhZGVcIiwgZmFkZU9uZUIgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlVHdvQSA6IFwiZmFkZVwiLCBmYWRlVHdvQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmRcIiwgZmFkZVR3b0EgOiBcInVuRmFkZVwiLCBmYWRlVHdvQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUaHJlZUEgOiBcImZhZGVcIiwgZmFkZVRocmVlQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmRcIiwgZmFkZVRocmVlQSA6IFwidW5GYWRlXCIsIGZhZGVUaHJlZUIgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5cclxucmVuZGVyKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzIGNvbnRlbnRDYW52YXMtLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjFcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDF9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAxfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUxfSAgaWQ9XCJjYXJkMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlT25lQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0FQUC0xLWdyYXBoLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPXt0aGlzLnN0YXRlLmZhZGVPbmVCfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQVBQLTEtZ3JhcGguanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDFcIj5DY29uIE1ldGFscyBjYXRhbHl0aWMgY29udmVydGVyIHNjcmFwIHByaWNlIGFsd2F5cyByZXByZXNlbnRzIGN1cnJlbnQgcHJlY2lvdXMgbWV0YWxzIG1hcmtldHMuIFRoZSBDY29uIFJldm9sdXRpb24gQXBwIGF1dG9tYXRpY2FsbHkgdXBkYXRlcyBhcyBtYXJrZXQgcHJpY2luZyBjaGFuZ2VzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjJcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDJ9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMn0gIGlkPVwiY2FyZDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVR3b0F9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9BUFAtMi1icm93c2UuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVR3b0J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9BUFAtMi1icm93c2UuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDJcIj5PdXIgY2F0YWx5dGljIGNvbnZlcnRlciBkYXRhYmFzZSBpcyBhdCB5b3VyIGZpbmdlcnRpcHM6IGVuYWJsaW5nIHF1aWNrIGFuZCBlYXN5IHVuaXQgdmFsdWUgYXNzZXNzbWVudC4gVGhlIENjb24gUmV2b2x1dGlvbiBBcHAgZmVhdHVyZXMgdGhvdXNhbmRzIG9mIGNhdGFseXRpYyBjb252ZXJ0ZXIgbnVtYmVycyBhbmQgcHJpY2VzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjNcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDN9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAzfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lM30gIGlkPVwiY2FyZDNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVRocmVlQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0FQUC0zLWFzc2lzdC5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVGhyZWVCfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQVBQLTMtYXNzaXN0LmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDIwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiIGlkPVwiY2FyZFRleHQzXCI+V2l0aCB0aGUgQ2NvbiBSZXZvbHV0aW9uIEFwcCwgeW91IGhhdmUgYWNjZXNzIHRvIG91ciDigJxMaXZlIEFzc2lzdOKAnSBmZWF0dXJlLiBBbGxvd2luZyByZWFsIHRpbWUgYWlkIGZyb20gb3VyIGNhdGFseXRpYyBjb252ZXJ0ZXIgZXhwZXJ0cy4gU2ltcGx5IHN1Ym1pdCBhIHBpY3R1cmUgZm9yIGEgbmVhciBpbnN0YW50IGFzc2Vzc21lbnQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjZmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI3VuRmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwNSUpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZFRleHQxIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjN2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZFRleHQyIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4zdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjJ2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1JTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmQxIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4zdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZFRleHQzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjJ2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbik7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTb2xvQ29udGVudDI7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SoloContent2.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SoloContent2);

/***/ }),

/***/ "./components/SoloContent3.js":
/*!************************************!*\
  !*** ./components/SoloContent3.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\SoloContent3.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class SoloContent3 extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      className1: "flipCard",
      className2: "flipCard",
      className3: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade",
      fadeTwoA: "unFade",
      fadeTwoB: "fade",
      fadeThreeA: "unFade",
      fadeThreeB: "fade"
    };
    this.flip1 = this.flip1.bind(this);
    this.unflip1 = this.unflip1.bind(this);
    this.flip2 = this.flip2.bind(this);
    this.unflip2 = this.unflip2.bind(this);
    this.flip3 = this.flip3.bind(this);
    this.unflip3 = this.unflip3.bind(this);
  }

  flip1() {
    this.setState({
      className1: "flipCard is-flipped",
      fadeOneA: "fade",
      fadeOneB: "unFade"
    });
  }

  unflip1() {
    this.setState({
      className1: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade"
    });
  }

  flip2() {
    this.setState({
      className2: "flipCard is-flipped",
      fadeTwoA: "fade",
      fadeTwoB: "unFade"
    });
  }

  unflip2() {
    this.setState({
      className2: "flipCard",
      fadeTwoA: "unFade",
      fadeTwoB: "fade"
    });
  }

  flip3() {
    this.setState({
      className3: "flipCard is-flipped",
      fadeThreeA: "fade",
      fadeThreeB: "unFade"
    });
  }

  unflip3() {
    this.setState({
      className3: "flipCard",
      fadeThreeA: "unFade",
      fadeThreeB: "fade"
    });
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-824198506" + " " + "contentCanvas contentCanvas--card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, __jsx("ul", {
      id: "outer-list",
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    }, __jsx("li", {
      style: {
        listStyle: "none"
      },
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx("strong", {
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 56
      }
    }, __jsx("u", {
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 64
      }
    }, "How much is a catalytic converter worth in scrap?")), __jsx("br", {
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 129
      }
    }), "Catalytic converter scrap prices change often. A catalytic converter's value comes from 3 specific platinum group metals (PGM) found inside each converter: Platinum, Palladium, and Rhodium. Entry into the PMR (Precious Metals Recycling) industry is the safest it\u2019s ever been, thanks to Ccon Revolution."), __jsx("li", {
      style: {
        listStyle: "none"
      },
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }, __jsx("strong", {
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 55
      }
    }, __jsx("u", {
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 63
      }
    }, "What is the minimum/maximum amount of catalytic converters I can bring to Ccon Metals?")), __jsx("br", {
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 165
      }
    }), "Unlike most catalytic converter recycling businesses, Ccon Metals has no converter minimums or maximums.  Rest assured that, regardless of quantity, your converters will be purchased fairly. Call us to learn more!"), __jsx("li", {
      style: {
        listStyle: "none"
      },
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, __jsx("strong", {
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 56
      }
    }, __jsx("u", {
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 64
      }
    }, "What is Downgrading/Upgrading? Why is it done?  Does Ccon do this?")), __jsx("br", {
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 146
      }
    }), "Downgrading/Upgrading occurs when a buyer takes advantage of a seller by manipulating information. The reason a buyer may do this is to:", __jsx("ul", {
      id: "inner-list",
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 23
      }
    }, __jsx("li", {
      id: "inner-list-item",
      style: {
        listStyle: "square",
        padding: "0",
        margin: "0",
        listStylePosition: "inside"
      },
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }
    }, "Secure new clients by \u201Dwowing\u201D them with artificial catalytic converter prices"), __jsx("li", {
      id: "inner-list-item",
      style: {
        listStyle: "square",
        padding: "0",
        margin: "0",
        listStylePosition: "inside"
      },
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      }
    }, "Boost the value of popular converters by pulling value away from lesser known converters"), __jsx("li", {
      id: "inner-list-item",
      style: {
        listStyle: "square",
        padding: "0",
        margin: "0",
        listStylePosition: "inside"
      },
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 25
      }
    }, "Take money away from one client so a more \u201Cworthwhile\u201D client can be overpaid"), __jsx("li", {
      style: {
        listStyle: "none",
        padding: "0",
        margin: "0"
      },
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, __jsx("br", {
      className: "jsx-824198506",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 86
      }
    }), "We at Ccon Metals would never do such a disservice to our valued customers."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "824198506",
      __self: this
    }, "@-webkit-keyframes fadeIn-jsx-824198506{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeIn-jsx-824198506{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadeOut-jsx-824198506{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}@keyframes fadeOut-jsx-824198506{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}#outer-list.jsx-824198506{padding:0;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:100%;width:80%;margin:auto;}#inner-list.jsx-824198506{margin-top:10px;}#inner-list-item.jsx-824198506{display:list-item;}li.jsx-824198506{height:25%;font-size:calc(12px + 0.5vw);display:inline-block;margin-top:5px;}#fade.jsx-824198506{-webkit-animation:fadeOut-jsx-824198506 ease 0.5s;animation:fadeOut-jsx-824198506 ease 0.5s;}#unFade.jsx-824198506{-webkit-animation:fadeIn-jsx-824198506 ease 0.5s;animation:fadeIn-jsx-824198506 ease 0.5s;}.cardText.jsx-824198506{position:absolute;height:100%;width:100%;-webkit-transform:translateY(-65%);-ms-transform:translateY(-65%);transform:translateY(-65%);}#contentContainer.jsx-824198506{position:absolute;height:100%;width:100%;background-image:url('image');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(25%);-ms-transform:translateX(25%);transform:translateX(25%);right:25%;overflow-y:auto;border:5px solid silver;box-sizing:border-box;}.contentCanvas.jsx-824198506{z-index:1;height:90%;width:100%;margin:auto;margin-top:0%;}.flipCard.jsx-824198506{margin:auto;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}.card__face.jsx-824198506{position:absolute;height:100%;width:100%;text-align:center;}.card__face--front.jsx-824198506{background:white;overflow:hidden;}.card__face--back.jsx-824198506{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );overflow:hidden;}.flipCard.is-flipped.jsx-824198506{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCardContainer.jsx-824198506{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333333333333333333333333%;margin:auto;display:inline-block;}@media (max-width:720px){#outer-list.jsx-824198506{height:90%;}#inner-list-item.jsx-824198506{height:auto;}.flipCardContainer.jsx-824198506{width:100%;height:33%;margin-top:0%;}#card3.jsx-824198506{margin-top:0%;}.card__face--back.jsx-824198506{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-824198506{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}#card2.jsx-824198506{margin-top:0%;}.flipCard.jsx-824198506{width:100%;height:100%;}.contentCanvas.jsx-824198506{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:100%;width:100%;margin-top:0%;}#contentContainer.jsx-824198506{height:100%;min-height:575px;overflow-y:auto;}ul.jsx-824198506{padding:0;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:75%;width:80%;margin:auto;}li.jsx-824198506{margin-top:2vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0NvbnRlbnQzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFaUIsQUFLaUMsQUFNQSxBQU1BLEFBSUEsQUFJQSxBQU1GLEFBUU0sQUFLRSxBQUtQLEFBUWlCLEFBSUQsQUFJVCxBQU9BLEFBZVIsQUFTRSxBQWVNLEFBUUQsQUFLQSxBQU1XLEFBUVYsQUFZTCxBQUlDLEFBSUQsQUFPZCxBQUdvQixBQUtXLEFBTS9CLEFBR2MsQUFLZ0IsQUFTZixBQVFGLEFBUUssVUE5TWpCLEFBTUEsQUFNQSxBQUlBLEFBSUEsQUFNNkIsQUF3RGxCLEFBcUhvQixDQTNKRixBQXFHN0IsQUFRYSxBQXdCQyxDQXJGRSxBQXlEaEIsQUEwQ21CLEVBaENuQixBQWNBLENBa0NBLENBNUtGLENBK0VrQixBQUtZLEFBNENFLENBM0hoQyxBQW9CYyxBQU9BLEFBdUNBLEdBdkJELENBdUVLLENBd0JoQixLQXJGVyxDQW1HTyxDQW5JUCxBQU9BLEFBdUNBLEVBdkJDLENBK0JkLEdBd0NFLEdBN0RZLENBakRTLENBa0J4QixBQU1pQyxBQXdDWixHQXhCSixDQTRHZCxNQWxHVSxPQVJaLENBdUJBLEVBaEVpQixBQWtETSxVQTFCYSxLQXRCcEMsTUFpRDRCLE9Bb0NoQixDQTdFWixBQThIcUIsRUFsSXJCLElBeUVBLEFBMkNFLEdBbENZLE1BL0RNLEVBZ0hKLElBaERxQixFQWZuQixBQTRDaEIsTUFvQmEsSUFoSGEsTUFpRDVCLENBZ0VrQixHQTlKSixBQTZLQyxDQXpJZixVQTJIRSxBQWVZLENBN0tGLENBNEdFLFFBa0VFLENBN0tGLEdBNEdTLFFBa0VyQixDQTdLRixZQTZHQSxLQXpDOEIsNkJBekJsQixVQUNNLGdCQUNRLHdCQUNGLGlCQXVCSixLQXJCcEIsYUFzQmlCLGVBRWpCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0NvbnRlbnQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFNvbG9Db250ZW50MyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgICAgZmFkZU9uZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVPbmVCOiBcImZhZGVcIixcclxuICAgICAgZmFkZVR3b0E6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUd29COiBcImZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQjogXCJmYWRlXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mbGlwMSA9IHRoaXMuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMSA9IHRoaXMudW5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMiA9IHRoaXMuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMiA9IHRoaXMudW5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMyA9IHRoaXMuZmxpcDMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMyA9IHRoaXMudW5mbGlwMy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlT25lQSA6IFwiZmFkZVwiLCBmYWRlT25lQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiwgZmFkZU9uZUEgOiBcInVuRmFkZVwiLCBmYWRlT25lQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUd29BIDogXCJmYWRlXCIsIGZhZGVUd29CIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZFwiLCBmYWRlVHdvQSA6IFwidW5GYWRlXCIsIGZhZGVUd29CIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVRocmVlQSA6IFwiZmFkZVwiLCBmYWRlVGhyZWVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiLCBmYWRlVGhyZWVBIDogXCJ1bkZhZGVcIiwgZmFkZVRocmVlQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJvdXRlci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCIgfX0gPjxzdHJvbmc+PHU+SG93IG11Y2ggaXMgYSBjYXRhbHl0aWMgY29udmVydGVyIHdvcnRoIGluIHNjcmFwPzwvdT48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBDYXRhbHl0aWMgY29udmVydGVyIHNjcmFwIHByaWNlcyBjaGFuZ2Ugb2Z0ZW4uIEEgY2F0YWx5dGljIGNvbnZlcnRlcidzIHZhbHVlIGNvbWVzIGZyb20gMyBzcGVjaWZpYyBwbGF0aW51bSBncm91cCBtZXRhbHMgKFBHTSkgZm91bmQgaW5zaWRlIGVhY2ggY29udmVydGVyOiBQbGF0aW51bSwgUGFsbGFkaXVtLCBhbmQgUmhvZGl1bS4gRW50cnkgaW50byB0aGUgUE1SIChQcmVjaW91cyBNZXRhbHMgUmVjeWNsaW5nKSBpbmR1c3RyeSBpcyB0aGUgc2FmZXN0IGl04oCZcyBldmVyIGJlZW4sIHRoYW5rcyB0byBDY29uIFJldm9sdXRpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiB9fT48c3Ryb25nPjx1PldoYXQgaXMgdGhlIG1pbmltdW0vbWF4aW11bSBhbW91bnQgb2YgY2F0YWx5dGljIGNvbnZlcnRlcnMgSSBjYW4gYnJpbmcgdG8gQ2NvbiBNZXRhbHM/PC91Pjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFVubGlrZSBtb3N0IGNhdGFseXRpYyBjb252ZXJ0ZXIgcmVjeWNsaW5nIGJ1c2luZXNzZXMsIENjb24gTWV0YWxzIGhhcyBubyBjb252ZXJ0ZXIgbWluaW11bXMgb3IgbWF4aW11bXMuICBSZXN0IGFzc3VyZWQgdGhhdCwgcmVnYXJkbGVzcyBvZiBxdWFudGl0eSwgeW91ciBjb252ZXJ0ZXJzIHdpbGwgYmUgcHVyY2hhc2VkIGZhaXJseS4gQ2FsbCB1cyB0byBsZWFybiBtb3JlIVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCIgfX0gPjxzdHJvbmc+PHU+V2hhdCBpcyBEb3duZ3JhZGluZy9VcGdyYWRpbmc/IFdoeSBpcyBpdCBkb25lPyAgRG9lcyBDY29uIGRvIHRoaXM/PC91Pjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIERvd25ncmFkaW5nL1VwZ3JhZGluZyBvY2N1cnMgd2hlbiBhIGJ1eWVyIHRha2VzIGFkdmFudGFnZSBvZiBhIHNlbGxlciBieSBtYW5pcHVsYXRpbmcgaW5mb3JtYXRpb24uIFRoZSByZWFzb24gYSBidXllciBtYXkgZG8gdGhpcyBpcyB0bzogXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJpbm5lci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cImlubmVyLWxpc3QtaXRlbVwiIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJzcXVhcmVcIiwgcGFkZGluZzogXCIwXCIsIG1hcmdpbjogXCIwXCIsIGxpc3RTdHlsZVBvc2l0aW9uOiBcImluc2lkZVwiIH19PlNlY3VyZSBuZXcgY2xpZW50cyBieSDigJ13b3dpbmfigJ0gdGhlbSB3aXRoIGFydGlmaWNpYWwgY2F0YWx5dGljIGNvbnZlcnRlciBwcmljZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJpbm5lci1saXN0LWl0ZW1cIiBzdHlsZT17eyBsaXN0U3R5bGU6IFwic3F1YXJlXCIsIHBhZGRpbmc6IFwiMFwiLCBtYXJnaW46IFwiMFwiLCBsaXN0U3R5bGVQb3NpdGlvbjogXCJpbnNpZGVcIiB9fT5Cb29zdCB0aGUgdmFsdWUgb2YgcG9wdWxhciBjb252ZXJ0ZXJzIGJ5IHB1bGxpbmcgdmFsdWUgYXdheSBmcm9tIGxlc3NlciBrbm93biBjb252ZXJ0ZXJzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiaW5uZXItbGlzdC1pdGVtXCIgc3R5bGU9e3sgbGlzdFN0eWxlOiBcInNxdWFyZVwiLCBwYWRkaW5nOiBcIjBcIiwgbWFyZ2luOiBcIjBcIiwgbGlzdFN0eWxlUG9zaXRpb246IFwiaW5zaWRlXCIgfX0+VGFrZSBtb25leSBhd2F5IGZyb20gb25lIGNsaWVudCBzbyBhIG1vcmUg4oCcd29ydGh3aGlsZeKAnSBjbGllbnQgY2FuIGJlIG92ZXJwYWlkPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCIsIHBhZGRpbmc6IFwiMFwiLCBtYXJnaW46IFwiMFwiIH19PjxiciAvPldlIGF0IENjb24gTWV0YWxzIHdvdWxkIG5ldmVyIGRvIHN1Y2ggYSBkaXNzZXJ2aWNlIHRvIG91ciB2YWx1ZWQgY3VzdG9tZXJzLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI291dGVyLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjaW5uZXItbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2lubmVyLWxpc3QtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjV2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2ZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZU91dCBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICN1bkZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjUlKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmQxIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI291dGVyLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjaW5uZXItbGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU29sb0NvbnRlbnQzO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SoloContent3.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SoloContent3);

/***/ }),

/***/ "./components/SoloExplain.js":
/*!***********************************!*\
  !*** ./components/SoloExplain.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\SoloExplain.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class SoloExplain extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      id: "explainContainer",
      className: "jsx-3742708266",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-3742708266" + " " + "allText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, __jsx("p", {
      id: "soloButtonTag",
      className: "jsx-3742708266",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, "Single-User"), __jsx("p", {
      id: "soloExplain",
      className: "jsx-3742708266",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    }, "One buyer access to the Revolution app.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3742708266",
      __self: this
    }, "#explainContainer.jsx-3742708266{-webkit-transform:translate(0%,-75px);-ms-transform:translate(0%,-75px);transform:translate(0%,-75px);}.allText.jsx-3742708266{-webkit-transform:translate(0%,0%);-ms-transform:translate(0%,0%);transform:translate(0%,0%);}#soloExplain.jsx-3742708266{color:white;pointer-events:none;-webkit-transform:translate(0%,5px);-ms-transform:translate(0%,5px);transform:translate(0%,5px);font-size:calc(14px + 0.4vw);}#soloButtonTag.jsx-3742708266{color:black;-webkit-text-decoration:underline;text-decoration:underline;font-weight:600;font-size:1.5em;-webkit-transform:translate(0%,6px);-ms-transform:translate(0%,6px);transform:translate(0%,6px);}@media (max-width:720px){#explainContainer.jsx-3742708266{position:absolute;width:100%;height:50px;-webkit-transform:translate(0%,-50px);-ms-transform:translate(0%,-50px);transform:translate(0%,-50px);}.allText.jsx-3742708266{position:absolute;width:100%;height:50px;margin:auto;}#soloButtonTag.jsx-3742708266{position:absolute;height:50px;width:200px;-webkit-transform:translate(0%,-20px);-ms-transform:translate(0%,-20px);transform:translate(0%,-20px);}#soloExplain.jsx-3742708266{position:absolute;color:white;pointer-events:none;width:400px;height:50px;margin-left:220px;-webkit-transform:translate(0px,-2px);-ms-transform:translate(0px,-2px);transform:translate(0px,-2px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0V4cGxhaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJ5QixBQU13QixBQUtBLEFBR2lCLEFBT0EsQUFXVSxBQU9BLEFBT0EsQUFPQSxZQXRDRixBQU9NLE1BV1gsQUFPQSxBQU9DLEFBT0EsV0FwQkEsQUFPQSxDQU9BLEFBT1EsRUF2Q0ssU0FvQjlCLEFBTWlCLENBUWpCLFFBTWlCLEdBYmhCLFNBY2dCLFVBbENBLEVBbUNNLGNBbENOLElBb0NqQixDQWpESCxTQUxBLEVBb0JDLHdCQVRnQyxlQW1CN0IsQ0FjQSxhQWhDSixxQ0EwQ0ksTUFsQ0YiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxTb2xvRXhwbGFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTb2xvRXhwbGFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJleHBsYWluQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGxUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwic29sb0J1dHRvblRhZ1wiPlNpbmdsZS1Vc2VyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInNvbG9FeHBsYWluXCI+T25lIGJ1eWVyIGFjY2VzcyB0byB0aGUgUmV2b2x1dGlvbiBhcHAuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2V4cGxhaW5Db250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC03NXB4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbGxUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjc29sb0V4cGxhaW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNXB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMC40dncpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjc29sb0J1dHRvblRhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDZweClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2V4cGxhaW5Db250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwcHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFsbFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNzb2xvQnV0dG9uVGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTIwcHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3NvbG9FeHBsYWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTJweClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2xvRXhwbGFpbjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SoloExplain.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SoloExplain);

/***/ }),

/***/ "./components/TextLoop.js":
/*!********************************!*\
  !*** ./components/TextLoop.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_text_loop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-text-loop */ "react-text-loop");
/* harmony import */ var react_text_loop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_text_loop__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\TextLoop.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class WordLoop extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("h3", {
      id: "loopElement",
      className: "jsx-130562243",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, "Your ", " ", __jsx(react_text_loop__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "loopComponent",
      children: [" CCON", " buying", " selling", " managing", " information"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }), " ", __jsx("i", {
      id: "revTag",
      className: "jsx-130562243",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }, "REVOLUTION"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "130562243",
      __self: this
    }, "#loopElement.jsx-130562243{width:100%;height:66px;margin-top:0;overflow:hidden;}#revTag.jsx-130562243{color:red;z-index:2;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcVGV4dExvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVzRCLEFBSW9DLEFBT0QsVUFDQSxDQVBFLFNBUUEsR0FQQyxTQVFqQixJQVBvQixnQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxUZXh0TG9vcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZXh0TG9vcCBmcm9tIFwicmVhY3QtdGV4dC1sb29wXCI7XHJcblxyXG5jbGFzcyBXb3JkTG9vcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGgzIGlkPVwibG9vcEVsZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgIFlvdXIge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPFRleHRMb29wIGlkPVwibG9vcENvbXBvbmVudFwiIGNoaWxkcmVuPXtbXCIgQ0NPTlwiLCBcIiBidXlpbmdcIiwgXCIgc2VsbGluZ1wiLCBcIiBtYW5hZ2luZ1wiLCBcIiBpbmZvcm1hdGlvblwiXX0+XHJcbiAgICAgICAgICAgICAgICA8L1RleHRMb29wPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxpIGlkPVwicmV2VGFnXCI+UkVWT0xVVElPTjwvaT5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgI2xvb3BFbGVtZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNyZXZUYWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JkTG9vcDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\TextLoop.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WordLoop);

/***/ }),

/***/ "./components/What.js":
/*!****************************!*\
  !*** ./components/What.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\What.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class What extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: './assets/what-we-do.jpg'
    };
  }

  render() {
    return __jsx("div", {
      id: "whatContainer",
      className: "jsx-639783822",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, __jsx("div", {
      id: "imgContainer",
      style: {
        textAlign: "center"
      },
      className: "jsx-639783822",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    }, __jsx("img", {
      id: "whatImg",
      src: this.state.imgURL,
      style: {},
      className: "jsx-639783822",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "whatContent",
      className: "jsx-639783822",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, __jsx("strong", {
      className: "jsx-639783822",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 25
      }
    }, __jsx("u", {
      style: {
        textShadow: "1px 1px 1px black"
      },
      className: "jsx-639783822",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 33
      }
    }, "What we do:")), __jsx("br", {
      className: "jsx-639783822",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 102
      }
    }), "We are the largest volume buyer and processor of catalytic converters in western Canada.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "639783822",
      __self: this
    }, "#whatContainer.jsx-639783822{height:100%;width:200px;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#whatImg.jsx-639783822{height:200px;width:200px;background-color:black;margin:auto;border-radius:50%;border:2px black solid;box-sizing:border-box;}#whatContent.jsx-639783822{color:white;margin-top:0px;-webkit-transform:translate(0,0px);-ms-transform:translate(0,0px);transform:translate(0,0px);font-size:calc(12px + 0.3vw);}@media (max-width:720px){#imgContainer.jsx-639783822{height:100%;width:100%;overflow:hidden;border-radius:0%;border:2px black solid;box-sizing:border-box;}#whatContainer.jsx-639783822{height:100%;width:100%;margin:auto;overflow:hidden;}#whatImg.jsx-639783822{height:100vh;width:100%;max-width:720px;max-height:400px;background-color:black;margin:auto;border-radius:0%;border:2px black solid;box-sizing:border-box;top:50%;left:50%;-webkit-transform:translate(0%,-30%);-ms-transform:translate(0%,-30%);transform:translate(0%,-30%);}#whatContent.jsx-639783822{color:white;-webkit-transform:translate(0,-370px);-ms-transform:translate(0,-370px);transform:translate(0,-370px);width:90%;margin:auto;font-size:calc(12px + 1.3vw);text-shadow:2px 2px 2px black;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcV2hhdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQnlCLEFBTXlDLEFBT0MsQUFXRCxBQVNJLEFBU0EsQUFPQyxBQWlCRCxZQTNESixBQWtCRyxBQVNBLEFBU0EsQUF3Qm9CLENBckR2QixBQW9DRyxVQWZLLEFBU0osQ0FwQ0UsQUEyQ0UsQ0FwQ0csRUFXSyxRQW1CUixJQVRDLENBZ0JBLEVBM0NFLE1BT1gsR0E4QlosS0FUMkIsQ0FnQkEsR0FwQ1Qsa0JBQ0ssQ0FvQkcsQ0FnQlYsWUFDSyxTQXBDQyxBQW9CdEIsUUFpQjJCLEtBWWIsTUF6Q2UsR0FOakMsQ0FnRG9CLFFBWlUsSUFhTyxLQTVEckMsUUFrQkEsS0ErQmdCLFFBQ0MsR0FXcUIsTUFWQSx3QkFXbEMsMkVBVEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxXaGF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFdoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpbWdVUkw6ICcuL2Fzc2V0cy93aGF0LXdlLWRvLmpwZydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3aGF0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImltZ0NvbnRhaW5lclwiIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJ3aGF0SW1nXCIgc3JjPXt0aGlzLnN0YXRlLmltZ1VSTH0gc3R5bGU9e3t9fT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwid2hhdENvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48dSBzdHlsZT17e3RleHRTaGFkb3c6IFwiMXB4IDFweCAxcHggYmxhY2tcIn19PldoYXQgd2UgZG86PC91Pjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZSBhcmUgdGhlIGxhcmdlc3Qgdm9sdW1lIGJ1eWVyIGFuZCBwcm9jZXNzb3Igb2YgY2F0YWx5dGljIGNvbnZlcnRlcnMgaW4gd2VzdGVybiBDYW5hZGEuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3doYXRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICN3aGF0SW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjd2hhdENvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMC4zdncpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjaW1nQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN3aGF0Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN3aGF0SW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMzAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3doYXRDb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTM3MHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoYXQ7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\What.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (What);

/***/ }),

/***/ "./components/Who.js":
/*!***************************!*\
  !*** ./components/Who.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\Who.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Who extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: './assets/who-we-are.jpg'
    };
  }

  render() {
    return __jsx("div", {
      id: "whoContainer",
      className: "jsx-237074569",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, __jsx("div", {
      id: "imgContainer",
      style: {
        textAlign: "center"
      },
      className: "jsx-237074569",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    }, __jsx("img", {
      id: "whoImg",
      src: this.state.imgURL,
      style: {},
      className: "jsx-237074569",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }), __jsx("div", {
      id: "whoContent",
      className: "jsx-237074569",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, __jsx("strong", {
      className: "jsx-237074569",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 25
      }
    }, __jsx("u", {
      style: {
        textShadow: "1px 1px 1px black"
      },
      className: "jsx-237074569",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 33
      }
    }, "Who we are:")), __jsx("br", {
      className: "jsx-237074569",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 102
      }
    }), "Since 2005 Ccon Metals has served the precious metal recycling industry with our fully equipped processing facility in Abbotsford B.C.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "237074569",
      __self: this
    }, "#whoContainer.jsx-237074569{height:100%;width:200px;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#whoImg.jsx-237074569{height:200px;width:200px;background-color:black;margin:auto;border-radius:50%;border:2px black solid;box-sizing:border-box;}#whoContent.jsx-237074569{color:white;margin-top:0px;-webkit-transform:translate(0,0px);-ms-transform:translate(0,0px);transform:translate(0,0px);font-size:calc(12px + 0.3vw);}@media (max-width:720px){#imgContainer.jsx-237074569{height:100%;width:100%;overflow:hidden;border-radius:0%;border:2px black solid;box-sizing:border-box;}#whoContainer.jsx-237074569{height:100%;width:100%;margin:auto;overflow:hidden;}#whoImg.jsx-237074569{height:100vh;width:100%;max-width:720px;max-height:400px;background-color:black;margin:auto;border-radius:0%;border:2px black solid;box-sizing:border-box;top:50%;left:50%;-webkit-transform:translate(0%,-30%);-ms-transform:translate(0%,-30%);transform:translate(0%,-30%);}#whoContent.jsx-237074569{-webkit-transform:translate(0,-385px);-ms-transform:translate(0,-385px);transform:translate(0,-385px);width:90%;margin:auto;color:white;font-size:calc(12px + 1.3vw);text-shadow:2px 2px 2px black;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcV2hvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCeUIsQUFJeUMsQUFPQyxBQVdELEFBVUksQUFTQSxBQU9DLEFBa0JrQixZQTdEdkIsQUFrQkcsQUFVQSxBQVNBLENBOUJILEFBcUNHLFVBZkssQUFTSixDQXJDRSxBQTRDRSxDQXJDRyxFQVdLLFFBb0JSLElBVEMsQ0FnQkEsRUE1Q0UsTUFPWCxHQStCWixLQVQyQixDQWdCQSxHQXJDVCxrQkFDSyxDQXFCRyxDQWdCVixZQUNLLFNBckNDLEFBcUJ0QixDQTZCYyxPQVphLEdBYVgsUUEzQ2EsR0FOakMsQ0FrRG9CLFFBYlUsSUFjTyxLQTlEckMsUUFtQkEsS0ErQmdCLFFBQ0MsR0FZcUIsTUFYQSx3QkFZbEMsMkVBVkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxXaG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgV2hvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaW1nVVJMOiAnLi9hc3NldHMvd2hvLXdlLWFyZS5qcGcnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwid2hvQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImltZ0NvbnRhaW5lclwiIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cIndob0ltZ1wiIHNyYz17dGhpcy5zdGF0ZS5pbWdVUkx9IHN0eWxlPXt7fX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIndob0NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz48dSBzdHlsZT17e3RleHRTaGFkb3c6IFwiMXB4IDFweCAxcHggYmxhY2tcIn19PldobyB3ZSBhcmU6PC91Pjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaW5jZSAyMDA1IENjb24gTWV0YWxzIGhhcyBzZXJ2ZWQgdGhlIHByZWNpb3VzIG1ldGFsIHJlY3ljbGluZyBpbmR1c3RyeSB3aXRoIG91ciBmdWxseSBlcXVpcHBlZCBwcm9jZXNzaW5nIGZhY2lsaXR5IGluIEFiYm90c2ZvcmQgQi5DLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjd2hvQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjd2hvSW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjd2hvQ29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjN2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ltZ0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjd2hvQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN3aG9JbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0zMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjd2hvQ29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTM4NXB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjN2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaG87Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\Who.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Who);

/***/ }),

/***/ "./components/Why.js":
/*!***************************!*\
  !*** ./components/Why.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\Why.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Why extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: './assets/why-we-do.jpg'
    };
  }

  render() {
    return __jsx("div", {
      id: "whoContainer",
      className: "jsx-1827632303",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, __jsx("div", {
      id: "imgContainer",
      style: {
        textAlign: "center"
      },
      className: "jsx-1827632303",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    }, __jsx("img", {
      id: "whoImg",
      src: this.state.imgURL,
      style: {},
      className: "jsx-1827632303",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }), __jsx("div", {
      id: "whoContent",
      className: "jsx-1827632303",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, __jsx("strong", {
      className: "jsx-1827632303",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 25
      }
    }, __jsx("u", {
      style: {
        textShadow: "1px 1px 1px black"
      },
      className: "jsx-1827632303",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 33
      }
    }, "Why we do it:")), __jsx("br", {
      className: "jsx-1827632303",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 104
      }
    }), "To bring clarity and integrity to an industry that is plagued with cloudiness and uncertainty.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1827632303",
      __self: this
    }, "#whoContainer.jsx-1827632303{height:100%;width:200px;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#whoImg.jsx-1827632303{height:200px;width:200px;background-color:black;margin:auto;border-radius:50%;border:2px black solid;box-sizing:border-box;}#whoContent.jsx-1827632303{color:white;margin-top:0px;-webkit-transform:translate(0,0px);-ms-transform:translate(0,0px);transform:translate(0,0px);font-size:calc(12px + 0.3vw);}@media (max-width:720px){#imgContainer.jsx-1827632303{height:100%;width:100%;overflow:hidden;border-radius:0%;border:2px black solid;box-sizing:border-box;}#whoContainer.jsx-1827632303{height:100%;width:100%;margin:auto;overflow:hidden;}#whoImg.jsx-1827632303{height:100vh;width:100%;max-width:720px;max-height:400px;background-color:black;margin:auto;border-radius:0%;border:2px black solid;box-sizing:border-box;top:50%;left:50%;-webkit-transform:translate(0%,-30%);-ms-transform:translate(0%,-30%);transform:translate(0%,-30%);}#whoContent.jsx-1827632303{-webkit-transform:translate(0,-370px);-ms-transform:translate(0,-370px);transform:translate(0,-370px);width:90%;margin:auto;color:white;font-size:calc(12px + 1.3vw);text-shadow:2px 2px 2px black;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcV2h5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCeUIsQUFJeUMsQUFPQyxBQVdELEFBU0ksQUFTQSxBQU9DLEFBaUJrQixZQTNEdkIsQUFrQkcsQUFTQSxBQVNBLENBN0JILEFBb0NHLFVBZkssQUFTSixDQXBDRSxBQTJDRSxDQXBDRyxFQVdLLFFBbUJSLElBVEMsQ0FnQkEsRUEzQ0UsTUFPWCxHQThCWixLQVQyQixDQWdCQSxHQXBDVCxrQkFDSyxDQW9CRyxDQWdCVixZQUNLLFNBcENDLEFBb0J0QixDQTRCYyxPQVhhLEdBWVgsUUF6Q2EsR0FOakMsQ0FnRG9CLFFBWlUsSUFhTyxLQTVEckMsUUFrQkEsS0E4QmdCLFFBQ0MsR0FZcUIsTUFYQSx3QkFZbEMsMkVBVkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxXaHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgV2h5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaW1nVVJMOiAnLi9hc3NldHMvd2h5LXdlLWRvLmpwZydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3aG9Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW1nQ29udGFpbmVyXCIgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwid2hvSW1nXCIgc3JjPXt0aGlzLnN0YXRlLmltZ1VSTH0gc3R5bGU9e3t9fT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwid2hvQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjx1IHN0eWxlPXt7dGV4dFNoYWRvdzogXCIxcHggMXB4IDFweCBibGFja1wifX0+V2h5IHdlIGRvIGl0OjwvdT48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVG8gYnJpbmcgY2xhcml0eSBhbmQgaW50ZWdyaXR5IHRvIGFuIGluZHVzdHJ5IHRoYXQgaXMgcGxhZ3VlZCB3aXRoIGNsb3VkaW5lc3MgYW5kIHVuY2VydGFpbnR5LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjd2hvQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjd2hvSW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjd2hvQ29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjN2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNpbWdDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3dob0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjd2hvSW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMzAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3dob0NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0zNzBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4zdncpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2h5OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\Why.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Why);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/fontawesome */ "@fortawesome/fontawesome-free/js/fontawesome");
/* harmony import */ var _fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/solid */ "@fortawesome/fontawesome-free/js/solid");
/* harmony import */ var _fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_free_js_regular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/regular */ "@fortawesome/fontawesome-free/js/regular");
/* harmony import */ var _fortawesome_fontawesome_free_js_regular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_regular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/brands */ "@fortawesome/fontawesome-free/js/brands");
/* harmony import */ var _fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }, "My page title"), __jsx("link", {
      rel: "icon",
      type: "image/ico",
      href: "/favicon.ico?=v1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    })), __jsx(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }), __jsx("style", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, `
                        @font-face {
                            font-family: 'Syncopate';
                            src: local('Syncopate-Bold'), url(./fonts/Syncopate-Bold.ttf) format('truetype');
                          }
                          
                          html, body, #__next, #next-body {
                            margin: auto;
                            margin-top: 0;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                              sans-serif;
                            -webkit-font-smoothing: antialiased;
                            -moz-osx-font-smoothing: grayscale;
                            
                            background-color: #282c34;
                            width: 100%;
                            max-height: 800px;
                            
                            min-width: 630px;
                          }

                        @media (max-width: 720px) {

                            body {
                                overflow: hidden;
                            }

                        }
                    `));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./public/assets/APP-1-graph.jpg":
/*!***************************************!*\
  !*** ./public/assets/APP-1-graph.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/APP-1-graph-11aa4158a1dcdd74cee2ecad4415ab5d.jpg";

/***/ }),

/***/ "./public/assets/APP-2-browse.jpg":
/*!****************************************!*\
  !*** ./public/assets/APP-2-browse.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/APP-2-browse-cda9576ac7e4d9122c14776703417d4b.jpg";

/***/ }),

/***/ "./public/assets/APP-3-assist.jpg":
/*!****************************************!*\
  !*** ./public/assets/APP-3-assist.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/APP-3-assist-3a8731d546805a1a4aa5434a65850840.jpg";

/***/ }),

/***/ "./public/assets/APP-4-scroll.jpg":
/*!****************************************!*\
  !*** ./public/assets/APP-4-scroll.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/APP-4-scroll-db1a76511f4b654379c9cc8110454b2d.jpg";

/***/ }),

/***/ "./public/assets/APP-5-invoice.jpg":
/*!*****************************************!*\
  !*** ./public/assets/APP-5-invoice.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/APP-5-invoice-f505fce97b05a9e27d759c93a5c1414e.jpg";

/***/ }),

/***/ "./public/assets/APP-6-shipping.jpg":
/*!******************************************!*\
  !*** ./public/assets/APP-6-shipping.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/APP-6-shipping-10d92cecdf2d69a603437990990c104c.jpg";

/***/ }),

/***/ "./public/assets/APP-7-team.jpg":
/*!**************************************!*\
  !*** ./public/assets/APP-7-team.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/APP-7-team-9475a49ec5997792083aaabf6f2fa704.jpg";

/***/ }),

/***/ "./public/assets/APP-8-control.jpg":
/*!*****************************************!*\
  !*** ./public/assets/APP-8-control.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/APP-8-control-69a518dc999b2a3be99479279d3a1181.jpg";

/***/ }),

/***/ "./public/assets/APP-9-security.jpg":
/*!******************************************!*\
  !*** ./public/assets/APP-9-security.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/APP-9-security-c151e9227eb0268aaec62a782abcc2f8.jpg";

/***/ }),

/***/ "./public/assets/CCON-1-leaving.jpg":
/*!******************************************!*\
  !*** ./public/assets/CCON-1-leaving.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/CCON-1-leaving-38b38a50a025a42d70ecb0047f3159d9.jpg";

/***/ }),

/***/ "./public/assets/CCON-2-money.jpeg":
/*!*****************************************!*\
  !*** ./public/assets/CCON-2-money.jpeg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/CCON-2-money-613331df1c0a1c93c24b8f806d4e81b5.jpeg";

/***/ }),

/***/ "./public/assets/CCON-369-catalyst-jars.jpg":
/*!**************************************************!*\
  !*** ./public/assets/CCON-369-catalyst-jars.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/CCON-369-catalyst-jars-0d092a55e6231a33817524f9a6b62176.jpg";

/***/ }),

/***/ "./public/assets/CCON-4-data-guy.jpg":
/*!*******************************************!*\
  !*** ./public/assets/CCON-4-data-guy.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/CCON-4-data-guy-046688161b0f5309a26db80bec7ecc6c.jpg";

/***/ }),

/***/ "./public/assets/CCON-5-longhaul.jpg":
/*!*******************************************!*\
  !*** ./public/assets/CCON-5-longhaul.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/CCON-5-longhaul-ca2db2e849ff9a844eda29333008b6af.jpg";

/***/ }),

/***/ "./public/assets/CCON-7-loading-bay.jpg":
/*!**********************************************!*\
  !*** ./public/assets/CCON-7-loading-bay.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/CCON-7-loading-bay-4c50b38f465d204bf3965d3ba7173d2f.jpg";

/***/ }),

/***/ "./public/assets/CCON-8-invoice.jpeg":
/*!*******************************************!*\
  !*** ./public/assets/CCON-8-invoice.jpeg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/CCON-8-invoice-0c05dc4196e7a519d0d8de34275ae8fb.jpeg";

/***/ }),

/***/ "./public/assets/cconTriangle.png":
/*!****************************************!*\
  !*** ./public/assets/cconTriangle.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cconTriangle-f59e1fc4815250e44b286c67510ad726.png";

/***/ }),

/***/ "./public/assets/crew-figure.png":
/*!***************************************!*\
  !*** ./public/assets/crew-figure.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/crew-figure-2e86fb23c9f8c89551ff230fcea538a7.png";

/***/ }),

/***/ "./public/assets/factory-figure.png":
/*!******************************************!*\
  !*** ./public/assets/factory-figure.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/factory-figure-829d1c2ae03e7cc78aa56289ac63cb50.png";

/***/ }),

/***/ "./public/assets/map-image.png":
/*!*************************************!*\
  !*** ./public/assets/map-image.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-image-e3d7a93547b3598c04dbea2936a8c7a3.png";

/***/ }),

/***/ "./public/assets/single-figure.png":
/*!*****************************************!*\
  !*** ./public/assets/single-figure.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/single-figure-2f37261e9fa79c8b4a2471037b24de67.png";

/***/ }),

/***/ "./public/video/BackgroundVideo.js":
/*!*****************************************!*\
  !*** ./public/video/BackgroundVideo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\public\\video\\BackgroundVideo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class BackgroundVideo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      videoURL: './video/BoxFillLoop.mp4'
    };
  }

  render() {
    return __jsx("video", {
      alt: "Sell catalytic converters",
      id: "background-video",
      type: "video/mp4",
      loop: true,
      autoPlay: true,
      style: {
        height: '100vh',
        width: '100vw',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: 'none',
        position: 'fixed',
        opacity: '0.3',
        objectFit: 'cover'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, __jsx("source", {
      src: this.state.videoURL,
      type: "video/mp4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }), __jsx("source", {
      src: this.state.videoURL,
      type: "video/ogg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }), "Your browser does not support the video tag.");
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (BackgroundVideo);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shane\documents\GitHub Repository\ccon-next\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/fontawesome-free/js/brands":
/*!**********************************************************!*\
  !*** external "@fortawesome/fontawesome-free/js/brands" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free/js/brands");

/***/ }),

/***/ "@fortawesome/fontawesome-free/js/fontawesome":
/*!***************************************************************!*\
  !*** external "@fortawesome/fontawesome-free/js/fontawesome" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free/js/fontawesome");

/***/ }),

/***/ "@fortawesome/fontawesome-free/js/regular":
/*!***********************************************************!*\
  !*** external "@fortawesome/fontawesome-free/js/regular" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free/js/regular");

/***/ }),

/***/ "@fortawesome/fontawesome-free/js/solid":
/*!*********************************************************!*\
  !*** external "@fortawesome/fontawesome-free/js/solid" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free/js/solid");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-text-loop":
/*!**********************************!*\
  !*** external "react-text-loop" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-text-loop");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DbGlja01lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2xvc2VCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250YWN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db3JwQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29ycENvbnRlbnQxLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29ycENvbnRlbnQyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29ycENvbnRlbnQzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29ycEV4cGxhaW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXZvbHV0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2xpZGVyQ29ycC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NsaWRlclNtYWxsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2xpZGVyU29sby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NtYWxsQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU21hbGxDb250ZW50MS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NtYWxsQ29udGVudDIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbWFsbENvbnRlbnQzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU21hbGxFeHBsYWluLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29sb0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvbG9Db250ZW50MS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvbG9Db250ZW50Mi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvbG9Db250ZW50My5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NvbG9FeHBsYWluLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGV4dExvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9XaGF0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV2hvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV2h5LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvQVBQLTEtZ3JhcGguanBnIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvQVBQLTItYnJvd3NlLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL0FQUC0zLWFzc2lzdC5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9BUFAtNC1zY3JvbGwuanBnIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvQVBQLTUtaW52b2ljZS5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9BUFAtNi1zaGlwcGluZy5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9BUFAtNy10ZWFtLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL0FQUC04LWNvbnRyb2wuanBnIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvQVBQLTktc2VjdXJpdHkuanBnIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvQ0NPTi0xLWxlYXZpbmcuanBnIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvQ0NPTi0yLW1vbmV5LmpwZWciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9DQ09OLTM2OS1jYXRhbHlzdC1qYXJzLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL0NDT04tNC1kYXRhLWd1eS5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9DQ09OLTUtbG9uZ2hhdWwuanBnIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvQ0NPTi03LWxvYWRpbmctYmF5LmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL0NDT04tOC1pbnZvaWNlLmpwZWciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9jY29uVHJpYW5nbGUucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvY3Jldy1maWd1cmUucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvZmFjdG9yeS1maWd1cmUucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvbWFwLWltYWdlLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3NpbmdsZS1maWd1cmUucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy92aWRlby9CYWNrZ3JvdW5kVmlkZW8uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYnJhbmRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9yZWd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvc29saWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRleHQtbG9vcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInZpZXdTb2xvIiwidmlld1NtYWxsIiwidmlld0NvcnAiLCJjb250ZW50UGFnZSIsInZpZXdDb250YWN0Iiwidmlld1Jldm9sdXRpb24iLCJidXR0b25GYWRlIiwiY29udGVudEZhZGUiLCJhcnJvd0ZhZGUiLCJyZW5kZXJCdXR0b25zIiwiYmFubmVyU3RhdGUiLCJzZWVTb2xvIiwiYmluZCIsImNsb3NlQWxsIiwic2VlU21hbGwiLCJzZWVDb3JwIiwic2VlQ29udGFjdCIsInNlZVJldm9sdXRpb24iLCJ0aW1lckNsb3NlQ29udGVudCIsInNldFN0YXRlIiwic2V0VGltZW91dCIsImhhbmRsZUJhbm5lckNoYW5nZSIsInJlbmRlciIsImNjb25UcmlhbmdsZSIsImN1cnNvciIsIkNsaWNrTWUiLCJDbG9zZUJ1dHRvbiIsIkNvbnRhY3QiLCJDb250YWN0Q29udGVudCIsInNob3ciLCJDb3JwQnV0dG9uIiwiQ29ycENvbnRlbnQiLCJjbGFzc05hbWUxIiwiY2xhc3NOYW1lMiIsImNsYXNzTmFtZTMiLCJmYWRlT25lQSIsImZhZGVPbmVCIiwiZmFkZVR3b0EiLCJmYWRlVHdvQiIsImZhZGVUaHJlZUEiLCJmYWRlVGhyZWVCIiwiZmxpcDEiLCJ1bmZsaXAxIiwiZmxpcDIiLCJ1bmZsaXAyIiwiZmxpcDMiLCJ1bmZsaXAzIiwiYmFja2dyb3VuZEltYWdlIiwicmVxdWlyZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZmlsdGVyIiwibGlzdFN0eWxlIiwicGFkZGluZyIsIm1hcmdpbiIsImxpc3RTdHlsZVBvc2l0aW9uIiwiQ29ycEV4cGxhaW4iLCJSZXZvbHV0aW9uIiwib25DbG9zZSIsIlNsaWRlciIsInNsaWRlMSIsInNsaWRlMiIsInNsaWRlMyIsInNsaWRlQ2xhc3MiLCJzZWVBcnJvd1JpZ2h0Iiwic2VlQXJyb3dMZWZ0Iiwic2xpZGVMZWZ0Iiwic2xpZGVSaWdodCIsIlNsaWRlclNvbG8iLCJTbWFsbEJ1dHRvbiIsIlNtYWxsQ29udGVudDEiLCJTbWFsbENvbnRlbnQyIiwiU21hbGxDb250ZW50MyIsIlNtYWxsRXhwbGFpbiIsIlNvbG9CdXR0b24iLCJTb2xvQ29udGVudDEiLCJTb2xvQ29udGVudDIiLCJTb2xvQ29udGVudDMiLCJTb2xvRXhwbGFpbiIsIldvcmRMb29wIiwiV2hhdCIsImltZ1VSTCIsInRleHRBbGlnbiIsInRleHRTaGFkb3ciLCJXaG8iLCJXaHkiLCJJbmRleCIsIkJhY2tncm91bmRWaWRlbyIsInZpZGVvVVJMIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsInBvc2l0aW9uIiwib3BhY2l0eSIsIm9iamVjdEZpdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7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USxTQUFHLEVBQUUsS0FBSzVGLEtBQUwsQ0FBVzRGLFFBQXhCO0FBQWtDLFVBQUksRUFBQyxXQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BZEosaURBREo7QUFtQkg7O0FBN0JtQzs7QUE4QnZDO0FBRWNELDhFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBLG9FOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFja2dyb3VuZFZpZGVvIGZyb20gJy4uL3B1YmxpYy92aWRlby9CYWNrZ3JvdW5kVmlkZW8nO1xuaW1wb3J0IGNjb25UcmlhbmdsZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2Njb25UcmlhbmdsZS5wbmcnO1xuaW1wb3J0IFNvbG9CdXR0b24gZnJvbSAnLi9Tb2xvQnV0dG9uJztcbmltcG9ydCBTbWFsbEJ1dHRvbiBmcm9tICcuL1NtYWxsQnV0dG9uJztcbmltcG9ydCBDb3JwQnV0dG9uIGZyb20gJy4vQ29ycEJ1dHRvbic7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xuaW1wb3J0IFNsaWRlclNvbG8gZnJvbSAnLi9TbGlkZXJTb2xvJztcbmltcG9ydCBTbGlkZXJTbWFsbCBmcm9tICcuL1NsaWRlclNtYWxsJztcbmltcG9ydCBTbGlkZXJDb3JwIGZyb20gJy4vU2xpZGVyQ29ycCc7XG5pbXBvcnQgQ29udGFjdENvbnRlbnQgZnJvbSAnLi9Db250YWN0Q29udGVudCc7XG5pbXBvcnQgUmV2b2x1dGlvbiBmcm9tICcuL1Jldm9sdXRpb24nO1xuaW1wb3J0IFdvcmRMb29wIGZyb20gJy4vVGV4dExvb3AnO1xuaW1wb3J0IFdobyBmcm9tICcuL1dobyc7XG5pbXBvcnQgV2hhdCBmcm9tICcuL1doYXQnO1xuaW1wb3J0IFdoeSBmcm9tICcuL1doeSc7XG5pbXBvcnQgQ2xpY2tNZSBmcm9tICcuL0NsaWNrTWUnO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgLy8gU3RhdGUgbWFuYWdlbWVudCBhbmQgYmluZGluZ3NcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlld1NvbG86IGZhbHNlLFxuICAgICAgdmlld1NtYWxsOiBmYWxzZSxcbiAgICAgIHZpZXdDb3JwOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRQYWdlOiAxLFxuICAgICAgdmlld0NvbnRhY3Q6IGZhbHNlLFxuICAgICAgdmlld1Jldm9sdXRpb246IGZhbHNlLFxuICAgICAgYnV0dG9uRmFkZTogXCJmYWRlSW5cIixcbiAgICAgIGNvbnRlbnRGYWRlOiBcImZhZGVPdXRcIixcbiAgICAgIGFycm93RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICByZW5kZXJCdXR0b25zOiB0cnVlLFxuICAgICAgYmFubmVyU3RhdGU6IFwiXCIsXG4gICAgfTtcblxuICAgIHRoaXMuc2VlU29sbyA9IHRoaXMuc2VlU29sby5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VBbGwgPSB0aGlzLmNsb3NlQWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVTbWFsbCA9IHRoaXMuc2VlU21hbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZUNvcnAgPSB0aGlzLnNlZUNvcnAuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZUNvbnRhY3QgPSB0aGlzLnNlZUNvbnRhY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZVJldm9sdXRpb24gPSB0aGlzLnNlZVJldm9sdXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnRpbWVyQ2xvc2VDb250ZW50ID0gdGhpcy50aW1lckNsb3NlQ29udGVudC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gb2JqZWN0c1xuXG4gIGNsb3NlQWxsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1NvbG86IGZhbHNlLFxuICAgICAgdmlld1NtYWxsOiBmYWxzZSxcbiAgICAgIHZpZXdDb3JwOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRQYWdlOiAyLFxuICAgICAgdmlld0NvbnRhY3Q6IGZhbHNlLFxuICAgICAgdmlld1Jldm9sdXRpb246IGZhbHNlLFxuICAgICAgYnV0dG9uRmFkZTogXCJmYWRlSW5cIixcbiAgICAgIGNvbnRlbnRGYWRlOiBcImZhZGVPdXRcIixcbiAgICAgIGFycm93RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICBiYW5uZXJTdGF0ZTogXCJcIixcbiAgICB9KTtcbiAgfVxuXG4gIHRpbWVyQ2xvc2VDb250ZW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYnV0dG9uRmFkZTogXCJmYWRlSW5cIixcbiAgICAgIGNvbnRlbnRGYWRlOiBcImZhZGVPdXRcIixcbiAgICAgIGFycm93RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgfSlcbiAgICBzZXRUaW1lb3V0KHRoaXMuY2xvc2VBbGwsIDUwMCk7XG4gIH1cblxuICBzZWVTb2xvKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1NvbG86IHRydWUsXG4gICAgICBidXR0b25GYWRlOiBcImZhZGVPdXRcIixcbiAgICAgIGNvbnRlbnRGYWRlOiBcImZhZGVJblwiLFxuICAgICAgYXJyb3dGYWRlOiBcImZhZGVJblwiLFxuICAgICAgYmFubmVyU3RhdGU6IFwiU2luZ2xlLVVzZXJcIixcbiAgICB9KTtcbiAgfVxuXG4gIHNlZVNtYWxsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1NtYWxsOiB0cnVlLFxuICAgICAgYnV0dG9uRmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICBjb250ZW50RmFkZTogXCJmYWRlSW5cIixcbiAgICAgIGFycm93RmFkZTogXCJmYWRlSW5cIixcbiAgICAgIGJhbm5lclN0YXRlOiBcIk11bHRpLVVzZXJcIixcbiAgICB9KTtcbiAgfVxuXG4gIHNlZUNvcnAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3Q29ycDogdHJ1ZSxcbiAgICAgIGJ1dHRvbkZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgY29udGVudEZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBhcnJvd0ZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBiYW5uZXJTdGF0ZTogXCJNdWx0aS1Mb2NhdGlvblwiLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlQ29udGFjdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdDb250YWN0OiB0cnVlLFxuICAgICAgYnV0dG9uRmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICBjb250ZW50RmFkZTogXCJmYWRlSW5cIixcbiAgICAgIGFycm93RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICB2aWV3U29sbzogZmFsc2UsXG4gICAgICB2aWV3U21hbGw6IGZhbHNlLFxuICAgICAgdmlld0NvcnA6IGZhbHNlLFxuICAgICAgdmlld1Jldm9sdXRpb246IGZhbHNlLFxuICAgICAgYmFubmVyU3RhdGU6IFwiQ29udGFjdCBVc1wiLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlUmV2b2x1dGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiB0cnVlLFxuICAgICAgYnV0dG9uRmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICBjb250ZW50RmFkZTogXCJmYWRlSW5cIixcbiAgICAgIGFycm93RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICB2aWV3U29sbzogZmFsc2UsXG4gICAgICB2aWV3U21hbGw6IGZhbHNlLFxuICAgICAgdmlld0NvcnA6IGZhbHNlLFxuICAgICAgdmlld0NvbnRhY3Q6IGZhbHNlLFxuICAgICAgYmFubmVyU3RhdGU6IFwiSm9pbiB0aGUgQ2NvbiBSZXZvbHV0aW9uIVwiLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQmFubmVyQ2hhbmdlKCkge1xuXG4gIH1cbiAgXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuXG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDx0aXRsZT5DY29uIE1ldGFscyBJbmMuIC0gVGhlIGJlc3QgY2F0YWx5dGljIGNvbnZlcnRlciBzY3JhcCBwcmljZTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgZGVzYz1cIlNlbGwgY2F0YWx5dGljIGNvbnZlcnRlcnMgd2l0aCB0cmFuc3BhcmVuY3ksIHNlY3VyaXR5LCBhbmQgaW50ZWdyaXR5LlwiLz5cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICBcblxuICAgICAgICBcbiAgICAgICAgPEJhY2tncm91bmRWaWRlbyB0eXBlPSd2aWRlby9tcDQnIGF1dG9wbGF5IG11dGUgLz5cbiAgICAgICAgPGEgb25DbGljaz17dGhpcy5jbG9zZUFsbH0+PGRpdiBpZD1cImNsaWNrQXdheVwiID5cblxuICAgICAgICA8L2Rpdj48L2E+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpZ25hdHVyZVwiPlxuICAgICAgICAgIDxpbWcgaWQ9XCJsb2dvXCIgc3JjPXtjY29uVHJpYW5nbGV9IGFsdD1cImNhdGFseXRpYyBjb252ZXJ0ZXIgc2NyYXAgcHJpY2VcIiAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNpZ1RleHRcIj5cbiAgICAgICAgICAgICAgICBNRVRBTFNcbiAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgIDxhIGlkPVwiZm9vdGVyTGlua1wiPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlkPSdiYW5uZXJEaXYnID5cbiAgICAgICAgICA8aDIgaWQ9XCJiYW5uZXJcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYnV0dG9uRmFkZX0gPlxuICAgICAgICAgICAgPGEgaWQ9XCJyZXZMaW5rXCIgb25DbGljaz17dGhpcy5zZWVSZXZvbHV0aW9ufSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48V29yZExvb3AgaWQ9XCJ0ZXh0LWxvb3BcIiAvPjwvYT5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxoMiBpZD1cImJhbm5lcjJcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY29udGVudEZhZGV9PlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJzcGFuTGlua1wiPnt0aGlzLnN0YXRlLmJhbm5lclN0YXRlfTwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlkPVwic2hvd2Nhc2VcIj5cbiAgICAgICAgPGRpdiBpZD1cImJpb0NvbnRhaW5lclwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5idXR0b25GYWRlfT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ3aG9cIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYnV0dG9uRmFkZX0+PFdobyAvPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cIndoYXRcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYnV0dG9uRmFkZX0+PFdoYXQgLz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ3aHlcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYnV0dG9uRmFkZX0+PFdoeSAvPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxkaXYgaWQ9XCJjbGlja01lXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmJ1dHRvbkZhZGV9PlxuICAgICAgICAgIDxDbGlja01lIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIFxuXG4gICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uQ29udGFpbmVyXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmJ1dHRvbkZhZGV9PlxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVTb2xvfSAgaWQ9XCJzb2xvQnV0dG9uXCIgXG4gICAgICAgICAgICBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5cbiAgICAgICAgICAgICAgPFNvbG9CdXR0b24gLz5cbiAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVTbWFsbH0gIGlkPVwic21hbGxCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5cbiAgICAgICAgICAgICAgPFNtYWxsQnV0dG9uIC8+XG4gICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlQ29ycH0gIGlkPVwiY29ycEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PlxuICAgICAgICAgICAgICA8Q29ycEJ1dHRvbiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuXG4gICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jb250ZW50RmFkZX0+XG4gICAgICAgICAgICA8U2xpZGVyU29sbyBzaG93PXt0aGlzLnN0YXRlLnZpZXdTb2xvfSBvbkNsb3NlPXt0aGlzLnRpbWVyQ2xvc2VDb250ZW50fSBpZD1cInNvbG9Db250ZW50XCIgLz5cbiAgICAgICAgICAgIDxTbGlkZXJTbWFsbCBzaG93PXt0aGlzLnN0YXRlLnZpZXdTbWFsbH0gb25DbG9zZT17dGhpcy50aW1lckNsb3NlQ29udGVudH0gaWQ9XCJzbWFsbENvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPFNsaWRlckNvcnAgc2hvdz17dGhpcy5zdGF0ZS52aWV3Q29ycH0gb25DbG9zZT17dGhpcy50aW1lckNsb3NlQ29udGVudH0gaWQ9XCJjb3JwQ29udGVudFwiIC8+XG4gICAgICAgICAgICA8Q29udGFjdENvbnRlbnQgc2hvdz17dGhpcy5zdGF0ZS52aWV3Q29udGFjdH0gb25DbG9zZT17dGhpcy50aW1lckNsb3NlQ29udGVudH0gaWQ9XCJjb250YWN0Q29udGVudFwiIC8+XG4gICAgICAgICAgICA8UmV2b2x1dGlvbiBzaG93PXt0aGlzLnN0YXRlLnZpZXdSZXZvbHV0aW9ufSBvbkNsb3NlPXt0aGlzLnRpbWVyQ2xvc2VDb250ZW50fSBpZD1cInJldkNvbnRlbnRcIiAvPlxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgXG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAjc2hvd2Nhc2Uge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiA2NXZoO1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIHRvcDogMjIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mYWRlSW4ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmFkZU91dCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLkFwcCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLlNpZ25hdHVyZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogU3luY29wYXRlO1xuICAgICAgICAgICAgY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHotSW5kZXg6IDU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiA2MzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2xvZ28ge1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnNpZ1RleHQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDkwcHg7XG4gICAgICAgICAgICB3aWR0aDogNy41ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDAuOTVlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHotSW5kZXg6IC0xO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjcmV2VGFnIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNyZXZMaW5rIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCBibGFjaztcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgICNzcGFuTGluayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggYmxhY2s7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjYmFubmVyIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNzE2cHg7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjYmFubmVyMiB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDcxNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCBibGFjaztcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2Jhbm5lckRpdiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRvcDogMTMwcHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDcxNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgei1JbmRleDogNDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgICNidXR0b25Db250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwKTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjY29ycEJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHZ3O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI3NtYWxsQnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0dnc7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDR2dztcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgIFxuICAgICAgICAgICNzb2xvQnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHZ3O1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2NsaWNrTWUge1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjY2xpY2tBd2F5IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHotSW5kZXg7IDEwO1xuICAgICAgICAgICAgb3BhY2l0eTogMC45OVxuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2Jpb0NvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgb3BhY2l0eTogMC45OTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjd2hvIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHZ3O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI3doYXQge1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDR2dztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHZ3O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgXG4gICAgICAgICAgI3doeSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHZ3O1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNmb290ZXJDb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMjE2cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjdweDtcbiAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MnB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAgICNmb290ZXJDb250YWluZXIge1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI2Jhbm5lckRpdntcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtOTBweCk7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjYmlvQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDExMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiA2NTBweDtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI3dobyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwdnc7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAjd2hhdCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwdnc7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDB2dztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgICAgICN3aHkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwdnc7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNidXR0b25Db250YWluZXJ7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXhib3g7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNXZoO1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNjM1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjY29ycEJ1dHRvbiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBsZWZ0OiAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1dnc7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgI3NtYWxsQnV0dG9uIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXZ3O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgIFxuICAgICAgICAgICAgI3NvbG9CdXR0b24ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgbGVmdDogMCU7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI2NsaWNrTWUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNjBweClcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDbGlja01lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNsaWNrVGhpc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3b3Jkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbGljayBvbmUgb2YgdGhlIG9wdGlvbnMgYmVsb3cgdG8gbGVhcm4gYWJvdXQgdGhlIFJldm9sdXRpb24gQXBwISAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjbGlja1RoaXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3dvcmRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDczJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggM3B4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA2OTlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3dvcmRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGlja01lOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDbG9zZUJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cIm1kaXZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kaXZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICNtZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA0MDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLm1kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIFotaW5kZXg6IDExO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDNweCAzcHggd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAubWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIFotaW5kZXg6IDIyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbG9zZUJ1dHRvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQ29udGFjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0QnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+MS02MDQtODU5LTI4NTU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5SRVZPTFVUSU9OQENDT04uQ0E8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cImFkZHJlc3NcIj4xMDctMjcwNyBQUk9HUkVTU0lWRSBXQVk8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQUJCT1RTRk9SRCwgQkMgVjJUIDBBNzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIC5jb250YWN0QnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1JbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNjBweCwgLTQwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2FkZHJlc3Mge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWN0QnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTYwcHgsIC00MHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYXBJbWFnZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL21hcC1pbWFnZS5wbmcnO1xyXG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnLi9DbG9zZUJ1dHRvbic7XHJcblxyXG5cclxuY2xhc3MgQ29udGFjdENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLnNob3cpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFjdEluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwiY29udGFjdFRleHRcIj5Db250YWN0IFVzOiByZXZvbHV0aW9uQGNjb24uY2EgLyBQaG9uZSBudW1iZXIgLyBPZmZpY2UgSG91cnM8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2JTtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbVpnTTVEY3MzWVNORkRIVW8yTEdmWnV1a1NXeVVZaXJKQWRZYkYzTWZxRUttak0rSTJFZmhBOTRpRzNMN3VLclIrR2RXRDczeWRsSUIrNmhncmVmMVFUbG1nbWJNMy9MZVg1R0kxVXgxUldwZ3hwTHVaMitJK0lqelo4d3FFNG5pbHZRZGtVZGZoekk1UURXeStrdzVXZ2cycEdwZUVWZUNDQTdiODVCTzNGOUR6eEIzY2RxdkJ6V2NtemJ5TWlxaHp1WXF0SFJWRzJ5NHgrS09sbnlxbGE4QW9XV3B1Qm9ZUnh6WHJmS3VJTGw2U2ZpV0NianhvWkpVYUNCajFDakg3R0lhRGJjOWtxQlkzVy9SZ2pkYTFpcVFjT0p1MldXKzc2cFpDOVFHN00wMGRmZmU5aE5uc2V1cEZMNTNyOEY3WUhTd0pXVUtQMnErazdSZHN4eU9CMTFuMHh0T3ZuVzRpck1NRk5WNEgwdXF3UzVFeHNtUDlBeGJEVGM5SndnbmVBVDV2VGlVU20xRTdCU2ZsU3QzYmZhMXR2OERpM1I4bjNBZjdNTld6czQ5aG1hdUUyd1ArdHRycStBc1dwRkcyYXd2c3VPcWJpcFdIZ3R1dnVhQUUrQTFaLzdnQzloZXNucis3d3FDd0c4YzV5QWczQUwxZm04VDlBWnRwL2JiSkd3bDFwTnJFN1J1T1g3UGVNUlVFUlZhUHBFcyt5cWVvU211T2xva3F3NDlwZ29takxlaDdpY0hObEcxOXlqczZYWE9NZWRZbTV4SDJZeHBWMnRjMFJvMmpKZnhDNTBBcHV4R29iN2xNc3hmVGJlVXYwN1R5WXhwZUx1Y0VIMWdOZDRJS0gyTEFnNVRkVmhsQ2FmWnZwc2tmbmNDZng4cE9oSnpkNzZiSldlWUZuRmNpd2NZZnViUmMxMklwL3BwSWhBMS9tU1ovUnhqRkRySkM1eGlmRmpKcFkyWGw1elhkZ3VGcVl5VFIxelNwMVk5cCt0a3REWVlTTmZsY3hJMGl5TzRUUEJkbFJjcGVxaksvcGlGNWJrbHE3N1ZTRWFBK3o4cW1KVEZ6SVdpaXRibnpSNzk0VVNLQlVhVDBOVEVzVmpacUxhRlZxSm9QTjlPREc3MElQYmZCSEtLKy9xL0FXUjB0SnpZSFJVTE9hNE1QK1cvSGZHYWRaVWJmdzE3N0c3ai9PR2JJczhUYWhMeXlubDRYNFJpbkY3OTNPeitCVTBzYVh0VUhyVkJGVC9EbkEzY3ROUG9HYnM0aFJJalRvazhpK2FsZ1QxbFRIaTRTeEZ2T05LTnJnUUZBcTIvZ0ZuV01YZ3dmZmdZTUpwaUtZa21XM3RUZzNaUTlKcStmOFhOK0E1ZWVVS0hXdkpXSjJzZ0oxU29wK3d3aHFGVmlqcVdhSmh3dEQ4TU5sU0JlV05OV1RhNVo1a1BadzUrTGJWVDk5d3FUZHgyOWxNVUg0T0lHL0Q4NnJ1S0VhdUJqdkg1eHk2dW0vU2ZqN2VpNlVVVms0QUlsM015RDRNU1NUT0ZnU3dzSC9RSldhUTVhczdaY21nQlprempqVTFVclE3NGNpMWdXQkNTR0h0dVYxSDJtaFNuTzNXcC8zZkVWNWErNHd6Ly82cXk4SnhqWnNteHh5NSs0dzlDRE5KWTA5VDA3MmlLRzBFbk9TMGFyRVlnWHFZblhjWUh3alR0VU5BY01lbE9kNHhwa29xaVRZSUNXRnEwSlNpUGZQRFFkbnQrNC93dXFjWFk0N1FJTGJnQUFBQUJKUlU1RXJrSmdnZz09Jyk7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTM3MCUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI2NvbnRhY3RJbmZvIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAtMjUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgI21haWxlckRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzN2aDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDklO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY29udGFjdEluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwJVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICApfSBlbHNlIHtcclxuICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgIH1cclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Q29udGVudDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29ycEltYWdlIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvZmFjdG9yeS1maWd1cmUucG5nJztcclxuaW1wb3J0IENvcnBFeHBsYWluIGZyb20gJy4vQ29ycEV4cGxhaW4nO1xyXG5cclxuY2xhc3MgQ29ycEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29ycEV4cGxhaW4gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGUge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsMCUsOTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCBoc2xhKDAsMCUsMTUlLCAgMSkgMCAgMHB4IDBweCA0cHgsIC8qIGJvcmRlciAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwxNSUsIC44KSAwIC0xcHggNXB4IDRweCwgLyogc29mdCBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwwJSwgLjI1KSAwIC0xcHggMHB4IDdweCwgLyogYm90dG9tIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDEwMCUsLjcpIDAgIDJweCAxcHggN3B4LCAvKiB0b3AgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDAsMCUsIDAlLC4xNSkgMCAtNXB4IDZweCA0cHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgwLDAlLDEwMCUsLjUpIDAgIDVweCA2cHggNHB4OyAvKiBvdXRlciBITCAqLyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogQnJ1c2hlZCBNZXRhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAgIDAlLCAgOCUgNTAlLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlIDEwMCUsIDEyJSA1MCUsIGhzbGEoMCwwJSwxMDAlLC42KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICAgMCUgIDUwJSwgNTAlICA3JSwgaHNsYSgwLDAlLDEwMCUsLjUpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggMTAwJSAgNTAlLCA1MCUgIDUlLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMTAwJSAxMDAlLCBoc2xhKDAsMCUsICAwJSwwKSAwJSwgaHNsYSgwLDAlLCAgMCUsMCkgICAzJSwgaHNsYSgwLDAlLCAgMCUsLjEpIDMuNSUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMTAwJSAxMDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgICA2JSwgaHNsYSgwLDAlLDEwMCUsLjEpIDcuNSUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMTAwJSAxMDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMS4yJSwgaHNsYSgwLDAlLDEwMCUsLjIpIDIuMiUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAyMDAlIDUwJSwgaHNsYSgwLDAlLDkwJSwxKSA1JSwgaHNsYSgwLDAlLDg1JSwxKSAzMCUsIGhzbGEoMCwwJSw2MCUsMSkgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTpiZWZvcmUsICNjaXJjbGU6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZmFrZSBjb25pY2FsIGdyYWRpZW50cyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgICAwJSwgMTAlIDUwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlIDEwMCUsIDEwJSA1MCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggICAwJSAgNTAlLCA1MCUgMTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDEwMCUgIDUwJSwgNTAlIDA2JSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmJlZm9yZSB7IHRyYW5zZm9ybTogcm90YXRlKCA2NWRlZyk7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTphZnRlciB7IHRyYW5zZm9ybTogcm90YXRlKC02NWRlZyk7IH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbCgyMTAsIDEwMCUsIDQwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBoc2xhKDIxMCwxMDAlLDIwJSwuMykgMCAtMXB4IDAsIGhzbCgyMTAsMTAwJSw4NSUpIDAgMnB4IDFweCwgaHNsYSgyMDAsMTAwJSw4MCUsMSkgMCAwIDVweCwgaHNsYSgyMTAsMTAwJSw1MCUsLjYpIDAgMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDMwJSwgIDEpIDAgIDBweCAwcHggNHB4LCAvKiBib3JkZXIgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDE1JSwgLjQpIDAgLTFweCA1cHggNHB4LCAvKiBzb2Z0IFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwyMCUsLjI1KSAwIC0xcHggMHB4IDdweCwgLyogYm90dG9tIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwxMDAlLC43KSAwICAycHggMXB4IDdweCwgLyogdG9wIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsMTAwJSw3NSUsIC44KSAwICAwcHggM3B4IDJweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCw1MCUsNDAlLCAuMjUpIDAgLTVweCA2cHggNHB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDgwJSw5NSUsICAgMSkgMCAgNXB4IDZweCA0cHg7IC8qIG91dGVyIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogRW5kIEJydXNoZWQgTWV0YWwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNidXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgI2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcnBCdXR0b247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIENvcnBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICBjbGFzc05hbWUxOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTI6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMzogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBmYWRlT25lQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZU9uZUI6IFwiZmFkZVwiLFxyXG4gICAgICBmYWRlVHdvQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVR3b0I6IFwiZmFkZVwiLFxyXG4gICAgICBmYWRlVGhyZWVBOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlVGhyZWVCOiBcImZhZGVcIixcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZsaXAxID0gdGhpcy5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAxID0gdGhpcy51bmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAyID0gdGhpcy5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAyID0gdGhpcy51bmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAzID0gdGhpcy5mbGlwMy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAzID0gdGhpcy51bmZsaXAzLmJpbmQodGhpcyk7XHJcbn1cclxuXHJcbmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVPbmVBIDogXCJmYWRlXCIsIGZhZGVPbmVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZFwiLCBmYWRlT25lQSA6IFwidW5GYWRlXCIsIGZhZGVPbmVCIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVR3b0EgOiBcImZhZGVcIiwgZmFkZVR3b0IgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkXCIsIGZhZGVUd29BIDogXCJ1bkZhZGVcIiwgZmFkZVR3b0IgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlVGhyZWVBIDogXCJmYWRlXCIsIGZhZGVUaHJlZUIgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkXCIsIGZhZGVUaHJlZUEgOiBcInVuRmFkZVwiLCBmYWRlVGhyZWVCIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuXHJcbnJlbmRlcigpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhcyBjb250ZW50Q2FudmFzLS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIxXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAxfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMX0gIGlkPVwiY2FyZDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9e3RoaXMuc3RhdGUuZmFkZU9uZUF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTctbG9hZGluZy1iYXkuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZU9uZUJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTctbG9hZGluZy1iYXkuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDFcIj5DY29uIE1ldGFscyBjYW4gYWN0IGFzIGEgbWFpbiByZWNlaXZpbmcgaHViIGZvciBtdWx0aS1sb2NhdGlvbiBjbGllbnRlbGUuIFRoaXMgYWxsb3dzIHNoaXBtZW50cyBmcm9tIGVhY2ggbG9jYXRpb24gdG8gYmUgdHJhY2tlZCwgb3JnYW5pemVkLCBncmFkZWQsIGFuZCBpbnZvaWNlZDsgcHJvdmlkaW5nIG91ciBjbGllbnRzIHBlYWNlIG9mIG1pbmQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMlwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMn0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUyfSAgaWQ9XCJjYXJkMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVHdvQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tOC1pbnZvaWNlLmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVHdvQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tOC1pbnZvaWNlLmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cigyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIiBpZD1cImNhcmRUZXh0MlwiPkNjb24gTWV0YWxzIGlzIHdlbGwgdmVyc2VkIGluIGFsbCBhc3BlY3RzIG9mIG11bHRpIGxheWVyIGFjY291bnRzIGFuZCB0aGVpciBzcGVjaWZpYyBuZWVkcywgZWl0aGVyIHN0YW5kYXJkIG9yIGN1c3RvbWl6ZWQuIENhbGwgb3IgZW1haWwgdXMgdG9kYXkgdG8gZmluZCBvdXQgaG93IHdlIGNhbiBjdXN0b21pemUgeW91ciBSZXZvbHV0aW9uIGV4cGVyaWVuY2UhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyM1wiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwM30gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUzfSAgaWQ9XCJjYXJkM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVGhyZWVBfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQ0NPTi0zNjktY2F0YWx5c3QtamFycy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVGhyZWVCfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQ0NPTi0zNjktY2F0YWx5c3QtamFycy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cigyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIiBpZD1cImNhcmRUZXh0M1wiPkNjb24gTWV0YWxzIHNwZWNpYWxpemVzIGluIGxvb3NlIG1hdGVyaWFsIGFzc2F5IHNlcnZpY2VzOiBydW5uaW5nIGxvdHMgYXMgc21hbGwgYXMgb25seSBhIGZldyBwb3VuZHMsIHdpdGggbm8gdXBwZXIgbGltaXQuIFdlIG9mZmVyIGV4Y2VwdGlvbmFsIHJlZmluaW5nIHRlcm1zIHRoYXQgbWF0Y2ggY3VycmVudCBzY3JhcCBjYXRhbHl0aWMgY29udmVydGVyIHByaWNlczsgd2l0aCBhIGhpZ2hseSBjb21wZXRpdGl2ZSB0dXJuYXJvdW5kIHRpbWUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNmYWRlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVPdXQgZWFzZSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjdW5GYWRlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTA1JSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjN2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZFRleHQzIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuMTV2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMjUlKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tZnJvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiA0MHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS40dncpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZFRleHQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjR2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvcnBDb250ZW50OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDb3JwQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgICAgZmFkZU9uZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVPbmVCOiBcImZhZGVcIixcclxuICAgICAgZmFkZVR3b0E6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUd29COiBcImZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQjogXCJmYWRlXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mbGlwMSA9IHRoaXMuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMSA9IHRoaXMudW5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMiA9IHRoaXMuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMiA9IHRoaXMudW5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMyA9IHRoaXMuZmxpcDMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMyA9IHRoaXMudW5mbGlwMy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlT25lQSA6IFwiZmFkZVwiLCBmYWRlT25lQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiwgZmFkZU9uZUEgOiBcInVuRmFkZVwiLCBmYWRlT25lQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUd29BIDogXCJmYWRlXCIsIGZhZGVUd29CIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZFwiLCBmYWRlVHdvQSA6IFwidW5GYWRlXCIsIGZhZGVUd29CIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVRocmVlQSA6IFwiZmFkZVwiLCBmYWRlVGhyZWVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiLCBmYWRlVGhyZWVBIDogXCJ1bkZhZGVcIiwgZmFkZVRocmVlQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMVwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMX0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTF9ICBpZD1cImNhcmQxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPXt0aGlzLnN0YXRlLmZhZGVPbmVBfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQVBQLTctdGVhbS5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD17dGhpcy5zdGF0ZS5mYWRlT25lQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0FQUC03LXRlYW0uanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDFcIj5UaGUgQ2NvbiBSZXZvbHV0aW9uIEFwcCBnaXZlcyB0aGUgQWRtaW5pc3RyYXRvciBjbGVhciBvdmVyc2lnaHQgb2YgYWxsIHBoeXNpY2FsIGxvY2F0aW9ucy4gVGhpcyBpcyBhY2NvbXBsaXNoZWQgYnkgbWFuYWdpbmcgYW5kIHRyYWNraW5nIHByb2ZpdGFiaWxpdHksIHZpZXdpbmcgcHVyY2hhc2UgaW52b2ljZXMsIGFuZCBhbmFseXppbmcgZWFjaCBzaGlwbWVudC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIyXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAyfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMn0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTJ9ICBpZD1cImNhcmQyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPXt0aGlzLnN0YXRlLmZhZGVUd29BfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQVBQLTgtY29udHJvbC5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVHdvQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0FQUC04LWNvbnRyb2wuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDJcIj5XaXRoaW4gdGhlIENjb24gUmV2b2x1dGlvbiBBcHAgdGhlIEFkbWluaXN0cmF0b3IgY2FuIGFzc2lnbiBzcGVjaWZpYyBwcml2aWxlZ2VzIGZvciBlYWNoIGxvY2F0aW9uJ3Mgc3RhZmYgdmlhIDMgcm9sZSBhc3NpZ25tZW50czogTWFuYWdlciwgU3VwZXJ2aXNvciwgYW5kIEdyYWRlci48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIzXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAzfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwM30+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTN9ICBpZD1cImNhcmQzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPXt0aGlzLnN0YXRlLmZhZGVUaHJlZUF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9BUFAtOS1zZWN1cml0eS5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVGhyZWVCfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQVBQLTktc2VjdXJpdHkuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIiBpZD1cImNhcmRUZXh0M1wiPlRoZSBDY29uIFJldm9sdXRpb24gQXBwIGtlZXBzIGEgbGlzdCBvZiB5b3VyIGNsaWVudHMsIHRoZWlyIHBlcnRpbmVudCBpbmZvcm1hdGlvbiwgYW5kIG9yZGVyIGhpc3RvcnkgaW4geW91ciBoYW5kcy4gVGhpcyBtaXRpZ2F0ZXMgdGhlIHJpc2sgb2YgdHJ1c3RlZCBzdGFmZiBsZWF2aW5nIHlvdXIgZW1wbG95IGFuZCB0YWtpbmcgeW91ciBjYXRhbHl0aWMgY29udmVydGVyIHJlY3ljbGluZyBjdXN0b21lcnMgd2l0aCB0aGVtOyBzdGF5IHByb3RlY3RlZCB3aXRoIGluc3RhbnQgc3RhZmYgYWNjZXNzIGRlbmlhbC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2ZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZU91dCBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICN1bkZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDUlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4xdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuMnZ3KTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDMge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDF2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgc2lsdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1mcm9udCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDQwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZFRleHQxIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjR2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4zdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ29ycENvbnRlbnQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIENvcnBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICBjbGFzc05hbWUxOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTI6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMzogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBmYWRlT25lQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZU9uZUI6IFwiZmFkZVwiLFxyXG4gICAgICBmYWRlVHdvQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVR3b0I6IFwiZmFkZVwiLFxyXG4gICAgICBmYWRlVGhyZWVBOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlVGhyZWVCOiBcImZhZGVcIixcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZsaXAxID0gdGhpcy5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAxID0gdGhpcy51bmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAyID0gdGhpcy5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAyID0gdGhpcy51bmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAzID0gdGhpcy5mbGlwMy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAzID0gdGhpcy51bmZsaXAzLmJpbmQodGhpcyk7XHJcbn1cclxuXHJcbmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVPbmVBIDogXCJmYWRlXCIsIGZhZGVPbmVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZFwiLCBmYWRlT25lQSA6IFwidW5GYWRlXCIsIGZhZGVPbmVCIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVR3b0EgOiBcImZhZGVcIiwgZmFkZVR3b0IgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkXCIsIGZhZGVUd29BIDogXCJ1bkZhZGVcIiwgZmFkZVR3b0IgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlVGhyZWVBIDogXCJmYWRlXCIsIGZhZGVUaHJlZUIgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkXCIsIGZhZGVUaHJlZUEgOiBcInVuRmFkZVwiLCBmYWRlVGhyZWVCIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuXHJcbnJlbmRlcigpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhcyBjb250ZW50Q2FudmFzLS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgPHVsIGlkPVwib3V0ZXItbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBsaXN0U3R5bGU6IFwibm9uZVwiIH19PjxzdHJvbmc+PHU+SWYgSSBjcmVhdGUgYW4gYWNjb3VudCwgZG8gbXkgc3RhZmYgbmVlZCB0byBjcmVhdGUgdGhlaXIgb3duIGFjY291bnRzIGFzIHdlbGw/PC91Pjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBwcmltYXJ5IGFjY291bnQgaG9sZGVyIGlzIHJlc3BvbnNpYmxlIGZvciBzZW5kaW5nIGFueSBDY29uIFJldm9sdXRpb24gQXBwIGludml0YXRpb25zIHRvIHRoZWlyIGVtcGxveWVlcy4gVGhpcyBjYW4gYmUgZG9uZSB2aWEgdGhlIOKAnHN0YWZm4oCcIG9wdGlvbiwgdW5kZXIgdGhlIFwibWFuYWdlbWVudFwiIGhlYWRpbmcsIHdpdGhpbiB0aGUgQXBwLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBsaXN0U3R5bGU6IFwibm9uZVwiIH19PjxzdHJvbmc+PHU+V2hhdCBpcyB0aGUgbWluaW11bS9tYXhpbXVtIGFtb3VudCBvZiBjYXRhbHl0aWMgY29udmVydGVycyBJIGNhbiBicmluZyB0byBDY29uIE1ldGFscz88L3U+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgVW5saWtlIG1vc3QgY2F0YWx5dGljIGNvbnZlcnRlciByZWN5Y2xpbmcgYnVzaW5lc3NlcywgQ2NvbiBNZXRhbHMgaGFzIG5vIGNvbnZlcnRlciBtaW5pbXVtcyBvciBtYXhpbXVtcy4gIFJlc3QgYXNzdXJlZCB0aGF0LCByZWdhcmRsZXNzIG9mIHF1YW50aXR5LCB5b3VyIGNvbnZlcnRlcnMgd2lsbCBiZSBwdXJjaGFzZWQgZmFpcmx5LiBDYWxsIHVzIHRvIGxlYXJuIG1vcmUhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiB9fSA+PHN0cm9uZz48dT5XaGF0IGlzIERvd25ncmFkaW5nL1VwZ3JhZGluZz8gV2h5IGlzIGl0IGRvbmU/ICBEb2VzIENjb24gZG8gdGhpcz88L3U+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgRG93bmdyYWRpbmcvVXBncmFkaW5nIG9jY3VycyB3aGVuIGEgYnV5ZXIgdGFrZXMgYWR2YW50YWdlIG9mIGEgc2VsbGVyIGJ5IG1hbmlwdWxhdGluZyBpbmZvcm1hdGlvbi4gVGhlIHJlYXNvbiBhIGJ1eWVyIG1heSBkbyB0aGlzIGlzIHRvOiBcclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cImlubmVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiaW5uZXItbGlzdC1pdGVtXCIgc3R5bGU9e3sgbGlzdFN0eWxlOiBcInNxdWFyZVwiLCBwYWRkaW5nOiBcIjBcIiwgbWFyZ2luOiBcIjBcIiwgbGlzdFN0eWxlUG9zaXRpb246IFwiaW5zaWRlXCIgfX0+U2VjdXJlIG5ldyBjbGllbnRzIGJ5IOKAnXdvd2luZ+KAnSB0aGVtIHdpdGggYXJ0aWZpY2lhbCBjYXRhbHl0aWMgY29udmVydGVyIHByaWNlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cImlubmVyLWxpc3QtaXRlbVwiIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJzcXVhcmVcIiwgcGFkZGluZzogXCIwXCIsIG1hcmdpbjogXCIwXCIsIGxpc3RTdHlsZVBvc2l0aW9uOiBcImluc2lkZVwiIH19PkJvb3N0IHRoZSB2YWx1ZSBvZiBwb3B1bGFyIGNvbnZlcnRlcnMgYnkgcHVsbGluZyB2YWx1ZSBhd2F5IGZyb20gbGVzc2VyIGtub3duIGNvbnZlcnRlcnM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJpbm5lci1saXN0LWl0ZW1cIiBzdHlsZT17eyBsaXN0U3R5bGU6IFwic3F1YXJlXCIsIHBhZGRpbmc6IFwiMFwiLCBtYXJnaW46IFwiMFwiLCBsaXN0U3R5bGVQb3NpdGlvbjogXCJpbnNpZGVcIiB9fT5UYWtlIG1vbmV5IGF3YXkgZnJvbSBvbmUgY2xpZW50IHNvIGEgbW9yZSDigJx3b3J0aHdoaWxl4oCdIGNsaWVudCBjYW4gYmUgb3ZlcnBhaWQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiwgcGFkZGluZzogXCIwXCIsIG1hcmdpbjogXCIwXCIgfX0+PGJyIC8+V2UgYXQgQ2NvbiBNZXRhbHMgd291bGQgbmV2ZXIgZG8gc3VjaCBhIGRpc3NlcnZpY2UgdG8gb3VyIHZhbHVlZCBjdXN0b21lcnMuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjb3V0ZXItbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNpbm5lci1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjaW5uZXItbGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuNXZ3KTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjZmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI3VuRmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02NSUpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1mcm9udCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDQwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgI291dGVyLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjaW5uZXItbGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ29ycENvbnRlbnQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIENvcnBFeHBsYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImV4cGxhaW5Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbFRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJjb3JwQnV0dG9uVGFnXCIgPk11bHRpLUxvY2F0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImNvcnBFeHBsYWluXCI+TXVsdGlwbGUgY29udmVydGVyIGJ1eWVycyBmcm9tIHNldmVyYWwgcGh5c2ljYWwgbG9jYXRpb25zLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNleHBsYWluQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNzVweClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFsbFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY29ycEJ1dHRvblRhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDZweClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NvcnBFeHBsYWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDVweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTRweCArIDAuNHZ3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2V4cGxhaW5Db250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwcHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFsbFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjb3JwQnV0dG9uVGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTIwcHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NvcnBFeHBsYWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMTVweClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3JwRXhwbGFpbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnLi9DbG9zZUJ1dHRvbic7XHJcblxyXG5jbGFzcyBSZXZvbHV0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFJFVk9MVVRJT04gUExVR1MgR08gSEVSRVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0gaWQ9XCJjbG9zZUxpbmtcIj48Q2xvc2VCdXR0b24gaWQ9XCJjbG9zZVwiIC8+PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjbG9zZUxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDElO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FNQUFBQXA0WGlEQUFBQVVWQk1WRVdGaFlXRGc0TjNkM2R0YlcxN2UzdDFkWFdCZ1lHSGg0ZDVlWGx6YzNPTGk0dWJtNXVWbFpXUGo0K05qWTE5ZlgySmlZbC9mMzlyYTJ1UmtaR1ptWmxwYVdtWGw1ZHZiMjl4Y1hHVGs1Tm5aMmM4VFYxbUFBQUFHM1JTVGxOQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVBdkVPd3RBQUFGVmtsRVFWUjRYcFdXQjY3YzJCVUZiM2c1NTdUL2hSbzkvV1VNWkhsZ3I0Qmc4WjRxUWdRSmxISTRBOFN6RlZyYXB2bVRGOU83ZG1ZUkZaNjBZaUJoSlJDZ2gxRlloaUxBbWR2WDBDelRPcE5FNzdNRTBadHkvbldXemNoRHRpcXJtUURldXYzcG93UTV0YTJlTjBGWTBJbmtxREQ3M2xUOWM5bEV6d1VOcWdGSHM5VlFjZTNUVkNsRkNRclNUZk9pWWtWSlFCbXBicTJMNmlaYXZQbkFQY29VMGRTdzBTVVRxei9HdHJHdVhmYnl5Qm5pS3lrT1dRV0dxd3dNQTdRaVlBeGkrSWxQZHFvK2hZSG5VdDVaUGZuc0hKeU5pRHRucEp5YXlOQmtGNmNXb1lHQU1ZOTJVMmhYSEYvQzFNOHVQL1p0WWRpdWoyNlVkQWRRUVNYUUVyd1NPTXp0L1hXUldBejVHdVNCSWt3RzFIM0ZhYkoyT3NVT1VoR0M2dEs0RU10Sk8wdHRDNklCRDNrTTB2ZTB0SndNZFNmalpvK0VFSVNhZVRyOVAzd1lyR2pYcXlDMWtyY0tkaE1weEVudDVKZXRvdWxzY3B5emhYTjVGUnB1UEh2YmVRYUt4RkFFQjZFTitjWU42eEQ3UllHcFhwTm5kTW1aZ001RGNzM1lTTkZESFVvMkxHZlp1dWtTV3lVWWlySkFkWWJGM01mcUVLbWpNK0kyRWZoQTk0aUczTDd1S3JSK0dkV0Q3M3lkbElCKzZoZ3JlZjFRVGxtZ21iTTMvTGVYNUdJMVV4MVJXcGd4cEx1WjIrSStJanpaOHdxRTRuaWx2UWRrVWRmaHpJNVFEV3kra3c1V2dnMnBHcGVFVmVDQ0E3Yjg1Qk8zRjlEenhCM2NkcXZCeldjbXpieU1pcWh6dVlxdEhSVkcyeTR4K0tPbG55cWxhOEFvV1dwdUJvWVJ4elhyZkt1SUxsNlNmaVdDYmp4b1pKVWFDQmoxQ2pIN0dJYURiYzlrcUJZM1cvUmdqZGExaXFRY09KdTJXVys3NnBaQzlRRzdNMDBkZmZlOWhObnNldXBGTDUzcjhGN1lIU3dKV1VLUDJxK2s3UmRzeHlPQjExbjB4dE92blc0aXJNTUZOVjRIMHVxd1M1RXhzbVA5QXhiRFRjOUp3Z25lQVQ1dlRpVVNtMUU3QlNmbFN0M2JmYTF0djhEaTNSOG4zQWY3TU5XenM0OWhtYXVFMndQK3R0cnErQXNXcEZHMmF3dnN1T3FiaXBXSGd0dXZ1YUFFK0ExWi83Z0M5aGVzbnIrN3dxQ3dHOGM1eUFnM0FMMWZtOFQ5QVp0cC9iYkpHd2wxcE5yRTdSdU9YN1BlTVJVRVJWYVBwRXMreXFlb1NtdU9sb2txdzQ5cGdvbWpMZWg3aWNITmxHMTl5anM2WFhPTWVkWW01eEgyWXhwVjJ0YzBSbzJqSmZ4QzUwQXB1eEdvYjdsTXN4ZlRiZVV2MDdUeVl4cGVMdWNFSDFnTmQ0SUtIMkxBZzVUZFZobENhZlp2cHNrZm5jQ2Z4OHBPaEp6ZDc2YkpXZVlGbkZjaXdjWWZ1YlJjMTJJcC9wcEloQTEvbVNaL1J4akZEckpDNXhpZkZqSnBZMlhsNXpYZGd1RnFZeVRSMXpTcDFZOXArdGt0RFlZU05mbGN4STBpeU80VFBCZGxSY3BlcWpLL3BpRjVia2xxNzdWU0VhQSt6OHFtSlRGeklXaWl0Ym56Ujc5NFVTS0JVYVQwTlRFc1ZqWnFMYUZWcUpvUE45T0RHNzBJUGJmQkhLSysvcS9BV1IwdEp6WUhSVUxPYTRNUCtXL0hmR2FkWlViZncxNzdHN2ovT0diSXM4VGFoTHl5bmw0WDRSaW5GNzkzT3orQlUwc2FYdFVIclZCRlQvRG5BM2N0TlBvR2JzNGhSSWpUb2s4aSthbGdUMWxUSGk0U3hGdk9OS05yZ1FGQXEyL2dGbldNWGd3ZmZnWU1KcGlLWWttVzN0VGczWlE5SnErZjhYTitBNWVlVUtIV3ZKV0oyc2dKMVNvcCt3d2hxRlZpanFXYUpod3REOE1ObFNCZVdOTldUYTVaNWtQWnc1K0xiVlQ5OXdxVGR4MjlsTVVINE9JRy9EODZydUtFYXVCanZINXh5NnVtL1NmajdlaTZVVVZrNEFJbDNNeUQ0TVNTVE9GZ1N3c0gvUUpXYVE1YXM3WmNtZ0Jaa3pqalUxVXJRNzRjaTFnV0JDU0dIdHVWMUgybWhTbk8zV3AvM2ZFVjVhKzR3ei8vNnF5OEp4alpzbXh4eTUrNHc5Q0ROSlkwOVQwNzJpS0cwRW5PUzBhckVZZ1hxWW5YY1lId2pUdFVOQWNNZWxPZDR4cGtvcWlUWUlDV0ZxMEpTaVBmUERRZG50KzQvd3VxY1hZNDdRSUxiZ0FBQUFCSlJVNUVya0pnZ2c9PScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICNjb3JwUHJvTGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUuMyUsIDExJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAjY29ycFBybzEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTAlIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG51bGwpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldm9sdXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvcnBDb250ZW50MSBmcm9tICcuL0NvcnBDb250ZW50MSc7XHJcbmltcG9ydCBDb3JwQ29udGVudDIgZnJvbSAnLi9Db3JwQ29udGVudDInO1xyXG5pbXBvcnQgQ29ycENvbnRlbnQzIGZyb20gJy4vQ29ycENvbnRlbnQzJztcclxuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJy4vQ2xvc2VCdXR0b24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgc2xpZGUxOiBcInNsaWRlMVwiLFxyXG4gICAgICAgICAgICBzbGlkZTI6IFwic2xpZGUyXCIsXHJcbiAgICAgICAgICAgIHNsaWRlMzogXCJzbGlkZTNcIixcclxuICAgICAgICAgICAgc2xpZGVDbGFzczogXCJzbGlkZTNcIixcclxuICAgICAgICAgICAgc2VlQXJyb3dSaWdodDogXCJ2aXNpYmxlXCIsXHJcbiAgICAgICAgICAgIHNlZUFycm93TGVmdDogXCJoaWRkZW5cIixcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVMZWZ0ID0gdGhpcy5zbGlkZUxlZnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNsaWRlUmlnaHQgPSB0aGlzLnNsaWRlUmlnaHQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHNsaWRlUmlnaHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUyLCBzZWVBcnJvd1JpZ2h0IDogXCJ2aXNpYmxlXCIgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUzLCBzZWVBcnJvd0xlZnQgOiBcImhpZGRlblwiIH0pXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBzbGlkZUxlZnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUyLCBzZWVBcnJvd0xlZnQgOiBcInZpc2libGVcIiB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTEsIHNlZUFycm93UmlnaHQgOiBcImhpZGRlblwiIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNsaWRlQ2xhc3N9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcnBDb250ZW50MSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29ycENvbnRlbnQyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3JwQ29udGVudDMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zZWVBcnJvd0xlZnR9IGlkPVwiZ29MZWZ0XCIgb25DbGljaz17dGhpcy5zbGlkZVJpZ2h0fT48aSBjbGFzc05hbWU9XCJDaGV2cm9uTGVmdFwiIGlkPVwibGVmdFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNlZUFycm93UmlnaHR9IGlkPVwiZ29SaWdodFwiIG9uQ2xpY2s9e3RoaXMuc2xpZGVMZWZ0fT48aSBjbGFzc05hbWU9XCJDaGV2cm9uUmlnaHRcIiBpZD1cInJpZ2h0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfSBpZD1cImNsb3NlTGlua1wiPjxDbG9zZUJ1dHRvbiBpZD1cImNsb3NlXCIgLz48L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmhpZGRlbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNsZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAzcHggM3B4IGJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3JpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coLTRweCAzcHggM3B4IGJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjM1cHggc29saWQgdHJhbnNwYXJlbnQ7IC8qYWRqdXN0IHNpemUqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qQ2hhbmdlIHRoZSBmb3VyIGluc3RhbmNlcyBvZiAndG9wJyBiZWxvdyB0byByb3RhdGUgKHRvcC9yaWdodC9ib3R0b20vbGVmdCkqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2IwMDsgLypDaGV2cm9uIENvbG9yKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDotMTBweDsgLyphZGp1c3QgdGhpY2tuZXNzKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2ZmZjsgLypNYXRjaCBiYWNrZ3JvdW5kIGNvbG91ciovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjM1cHggc29saWQgdHJhbnNwYXJlbnQ7IC8qYWRqdXN0IHNpemUqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qQ2hhbmdlIHRoZSBmb3VyIGluc3RhbmNlcyBvZiAndG9wJyBiZWxvdyB0byByb3RhdGUgKHRvcC9yaWdodC9ib3R0b20vbGVmdCkqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNiMDA7IC8qQ2hldnJvbiBDb2xvciovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOi0xMHB4OyAvKmFkanVzdCB0aGlja25lc3MqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojZmZmOyAvKk1hdGNoIGJhY2tncm91bmQgY29sb3VyKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2Nsb3NlTGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA0LjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2dvTGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjZ29SaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMC41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZTIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMTUlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIyNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2xvc2VMaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7fSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNtYWxsQ29udGVudDEgZnJvbSAnLi9TbWFsbENvbnRlbnQxJztcclxuaW1wb3J0IFNtYWxsQ29udGVudDIgZnJvbSAnLi9TbWFsbENvbnRlbnQyJztcclxuaW1wb3J0IFNtYWxsQ29udGVudDMgZnJvbSAnLi9TbWFsbENvbnRlbnQzJztcclxuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJy4vQ2xvc2VCdXR0b24nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIHNsaWRlMTogXCJzbGlkZTFcIixcclxuICAgICAgICAgICAgc2xpZGUyOiBcInNsaWRlMlwiLFxyXG4gICAgICAgICAgICBzbGlkZTM6IFwic2xpZGUzXCIsXHJcbiAgICAgICAgICAgIHNsaWRlQ2xhc3M6IFwic2xpZGUzXCIsXHJcbiAgICAgICAgICAgIHNlZUFycm93UmlnaHQ6IFwidmlzaWJsZVwiLFxyXG4gICAgICAgICAgICBzZWVBcnJvd0xlZnQ6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNsaWRlTGVmdCA9IHRoaXMuc2xpZGVMZWZ0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZVJpZ2h0ID0gdGhpcy5zbGlkZVJpZ2h0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBzbGlkZVJpZ2h0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMiwgc2VlQXJyb3dSaWdodCA6IFwidmlzaWJsZVwiIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMywgc2VlQXJyb3dMZWZ0IDogXCJoaWRkZW5cIiB9KVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVMZWZ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMiwgc2VlQXJyb3dMZWZ0IDogXCJ2aXNpYmxlXCIgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUxLCBzZWVBcnJvd1JpZ2h0IDogXCJoaWRkZW5cIiB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zbGlkZUNsYXNzfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbENvbnRlbnQzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbENvbnRlbnQxIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbENvbnRlbnQyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNlZUFycm93TGVmdH0gaWQ9XCJnb0xlZnRcIiBvbkNsaWNrPXt0aGlzLnNsaWRlUmlnaHR9PjxpIGNsYXNzTmFtZT1cIkNoZXZyb25MZWZ0XCIgaWQ9XCJsZWZ0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2VlQXJyb3dSaWdodH0gaWQ9XCJnb1JpZ2h0XCIgb25DbGljaz17dGhpcy5zbGlkZUxlZnR9PjxpIGNsYXNzTmFtZT1cIkNoZXZyb25SaWdodFwiIGlkPVwicmlnaHRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xvc2V9IGlkPVwiY2xvc2VMaW5rXCI+PENsb3NlQnV0dG9uIGlkPVwiY2xvc2VcIiAvPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGlkZGVuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2xlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3JpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjM1cHggc29saWQgdHJhbnNwYXJlbnQ7IC8qYWRqdXN0IHNpemUqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qQ2hhbmdlIHRoZSBmb3VyIGluc3RhbmNlcyBvZiAndG9wJyBiZWxvdyB0byByb3RhdGUgKHRvcC9yaWdodC9ib3R0b20vbGVmdCkqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2IwMDsgLypDaGV2cm9uIENvbG9yKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDotMTBweDsgLyphZGp1c3QgdGhpY2tuZXNzKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2ZmZjsgLypNYXRjaCBiYWNrZ3JvdW5kIGNvbG91ciovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjM1cHggc29saWQgdHJhbnNwYXJlbnQ7IC8qYWRqdXN0IHNpemUqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qQ2hhbmdlIHRoZSBmb3VyIGluc3RhbmNlcyBvZiAndG9wJyBiZWxvdyB0byByb3RhdGUgKHRvcC9yaWdodC9ib3R0b20vbGVmdCkqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNiMDA7IC8qQ2hldnJvbiBDb2xvciovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOi0xMHB4OyAvKmFkanVzdCB0aGlja25lc3MqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojZmZmOyAvKk1hdGNoIGJhY2tncm91bmQgY29sb3VyKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2Nsb3NlTGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA0LjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2dvTGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygtNHB4IDNweCAzcHggYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjZ29SaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMC41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDNweCAzcHggYmxhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJ2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZTEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjI1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjbG9zZUxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTt9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU29sb0NvbnRlbnQxIGZyb20gJy4vU29sb0NvbnRlbnQxJztcclxuaW1wb3J0IFNvbG9Db250ZW50MiBmcm9tICcuL1NvbG9Db250ZW50Mic7XHJcbmltcG9ydCBTb2xvQ29udGVudDMgZnJvbSAnLi9Tb2xvQ29udGVudDMnO1xyXG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnLi9DbG9zZUJ1dHRvbic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyU29sbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIHNsaWRlMTogXCJzbGlkZTFcIixcclxuICAgICAgICAgICAgc2xpZGUyOiBcInNsaWRlMlwiLFxyXG4gICAgICAgICAgICBzbGlkZTM6IFwic2xpZGUzXCIsXHJcbiAgICAgICAgICAgIHNsaWRlQ2xhc3M6IFwic2xpZGUzXCIsXHJcbiAgICAgICAgICAgIHNlZUFycm93UmlnaHQ6IFwidmlzaWJsZVwiLFxyXG4gICAgICAgICAgICBzZWVBcnJvd0xlZnQ6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNsaWRlTGVmdCA9IHRoaXMuc2xpZGVMZWZ0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZVJpZ2h0ID0gdGhpcy5zbGlkZVJpZ2h0LmJpbmQodGhpcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNsaWRlUmlnaHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUyLCBzZWVBcnJvd1JpZ2h0IDogXCJ2aXNpYmxlXCIgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUzLCBzZWVBcnJvd0xlZnQgOiBcImhpZGRlblwiIH0pXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBzbGlkZUxlZnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUyLCBzZWVBcnJvd0xlZnQgOiBcInZpc2libGVcIiB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTEsIHNlZUFycm93UmlnaHQgOiBcImhpZGRlblwiIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2xpZGVDbGFzc30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8U29sb0NvbnRlbnQxIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTb2xvQ29udGVudDIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNvbG9Db250ZW50MyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zZWVBcnJvd0xlZnR9IGlkPVwiZ29MZWZ0XCIgb25DbGljaz17dGhpcy5zbGlkZVJpZ2h0fT48aSBjbGFzc05hbWU9XCJDaGV2cm9uTGVmdFwiIGlkPVwibGVmdFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNlZUFycm93UmlnaHR9IGlkPVwiZ29SaWdodFwiIG9uQ2xpY2s9e3RoaXMuc2xpZGVMZWZ0fT48aSBjbGFzc05hbWU9XCJDaGV2cm9uUmlnaHRcIiBpZD1cInJpZ2h0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfSBpZD1cImNsb3NlTGlua1wiPjxDbG9zZUJ1dHRvbiBpZD1cImNsb3NlXCIgLz48L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmhpZGRlbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNsZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNyaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjozNXB4IHNvbGlkIHRyYW5zcGFyZW50OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNiMDA7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOi0xMHB4OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2ZmZjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjM1cHggc29saWQgdHJhbnNwYXJlbnQ7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNiMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOi0xMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2xvc2VMaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDQuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b246Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNnb0xlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMC41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coLTRweCAzcHggM3B4IGJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2dvUmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAzcHggM3B4IGJsYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm15LXRyYW5zaXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNsYXRlXzEwMCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyYW5zbGF0ZV8yMDAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTE1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIyNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2xvc2VMaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7fSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNtYWxsSW1hZ2UgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9jcmV3LWZpZ3VyZS5wbmcnO1xyXG5pbXBvcnQgU21hbGxFeHBsYWluIGZyb20gJy4vU21hbGxFeHBsYWluJztcclxuXHJcbmNsYXNzIFNtYWxsQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U21hbGxFeHBsYWluIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLDAlLDkwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgaHNsYSgwLDAlLDE1JSwgIDEpIDAgIDBweCAwcHggNHB4LCAvKiBib3JkZXIgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDAsMCUsMTUlLCAuOCkgMCAtMXB4IDVweCA0cHgsIC8qIHNvZnQgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDAsMCUsMCUsIC4yNSkgMCAtMXB4IDBweCA3cHgsIC8qIGJvdHRvbSBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwxMDAlLC43KSAwICAycHggMXB4IDdweCwgLyogdG9wIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgwLDAlLCAwJSwuMTUpIDAgLTVweCA2cHggNHB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMCwwJSwxMDAlLC41KSAwICA1cHggNnB4IDRweDsgLyogb3V0ZXIgSEwgKi8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycztcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEJydXNoZWQgTWV0YWwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgICAwJSwgIDglIDUwJSwgaHNsYSgwLDAlLDEwMCUsLjUpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAxMDAlLCAxMiUgNTAlLCBoc2xhKDAsMCUsMTAwJSwuNikgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgIDAlICA1MCUsIDUwJSAgNyUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDEwMCUgIDUwJSwgNTAlICA1JSwgaHNsYSgwLDAlLDEwMCUsLjUpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDEwMCUgMTAwJSwgaHNsYSgwLDAlLCAgMCUsMCkgMCUsIGhzbGEoMCwwJSwgIDAlLDApICAgMyUsIGhzbGEoMCwwJSwgIDAlLC4xKSAzLjUlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDEwMCUgMTAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMCUsIGhzbGEoMCwwJSwxMDAlLDApICAgNiUsIGhzbGEoMCwwJSwxMDAlLC4xKSA3LjUlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDEwMCUgMTAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEuMiUsIGhzbGEoMCwwJSwxMDAlLC4yKSAyLjIlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMjAwJSA1MCUsIGhzbGEoMCwwJSw5MCUsMSkgNSUsIGhzbGEoMCwwJSw4NSUsMSkgMzAlLCBoc2xhKDAsMCUsNjAlLDEpIDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YmVmb3JlLCAjY2lyY2xlOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGZha2UgY29uaWNhbCBncmFkaWVudHMgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlICAgMCUsIDEwJSA1MCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAxMDAlLCAxMCUgNTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICAgMCUgIDUwJSwgNTAlIDEwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAxMDAlICA1MCUsIDUwJSAwNiUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTpiZWZvcmUgeyB0cmFuc2Zvcm06IHJvdGF0ZSggNjVkZWcpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YWZ0ZXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtNjVkZWcpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2woMjEwLCAxMDAlLCA0MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogaHNsYSgyMTAsMTAwJSwyMCUsLjMpIDAgLTFweCAwLCBoc2woMjEwLDEwMCUsODUlKSAwIDJweCAxcHgsIGhzbGEoMjAwLDEwMCUsODAlLDEpIDAgMCA1cHgsIGhzbGEoMjEwLDEwMCUsNTAlLC42KSAwIDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwzMCUsICAxKSAwICAwcHggMHB4IDRweCwgLyogYm9yZGVyICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwxNSUsIC40KSAwIC0xcHggNXB4IDRweCwgLyogc29mdCBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMjAlLC4yNSkgMCAtMXB4IDBweCA3cHgsIC8qIGJvdHRvbSBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMTAwJSwuNykgMCAgMnB4IDFweCA3cHgsIC8qIHRvcCBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDEwMCUsNzUlLCAuOCkgMCAgMHB4IDNweCAycHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsNTAlLDQwJSwgLjI1KSAwIC01cHggNnB4IDRweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCw4MCUsOTUlLCAgIDEpIDAgIDVweCA2cHggNHB4OyAvKiBvdXRlciBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEVuZCBCcnVzaGVkIE1ldGFsICovXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICNidXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbWFsbEJ1dHRvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNsYXNzIFNtYWxsQ29udGVudDEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgIGNsYXNzTmFtZTE6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMjogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUzOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGZhZGVPbmVBOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlT25lQjogXCJmYWRlXCIsXHJcbiAgICAgIGZhZGVUd29BOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlVHdvQjogXCJmYWRlXCIsXHJcbiAgICAgIGZhZGVUaHJlZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUaHJlZUI6IFwiZmFkZVwiLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmxpcDEgPSB0aGlzLmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDEgPSB0aGlzLnVuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDIgPSB0aGlzLmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDIgPSB0aGlzLnVuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDMgPSB0aGlzLmZsaXAzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDMgPSB0aGlzLnVuZmxpcDMuYmluZCh0aGlzKTtcclxufVxyXG5cclxuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZU9uZUEgOiBcImZhZGVcIiwgZmFkZU9uZUIgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkXCIsIGZhZGVPbmVBIDogXCJ1bkZhZGVcIiwgZmFkZU9uZUIgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlVHdvQSA6IFwiZmFkZVwiLCBmYWRlVHdvQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmRcIiwgZmFkZVR3b0EgOiBcInVuRmFkZVwiLCBmYWRlVHdvQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUaHJlZUEgOiBcImZhZGVcIiwgZmFkZVRocmVlQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmRcIiwgZmFkZVRocmVlQSA6IFwidW5GYWRlXCIsIGZhZGVUaHJlZUIgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5cclxucmVuZGVyKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzIGNvbnRlbnRDYW52YXMtLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjFcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDF9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAxfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUxfSAgaWQ9XCJjYXJkMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlT25lQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tNC1kYXRhLWd1eS5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD17dGhpcy5zdGF0ZS5mYWRlT25lQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tNC1kYXRhLWd1eS5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cigyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIiBpZD1cImNhcmRUZXh0MVwiPkNjb24gTWV0YWxzIG9mZmVycyBjdXR0aW5nLWVkZ2UgY2F0YWx5dGljIGNvbnZlcnRlciB0cmFpbmluZyBmb3IgYWxsIGNsaWVudHM7IGVuc3VyaW5nIHlvdXIgZWZmaWNpZW5jeSBhbmQgYWNjdXJhY3kgd2hlbiBzZWFyY2hpbmcgY2F0YWx5dGljIGNvbnZlcnRlciBudW1iZXJzIGFuZCBwcmljZXMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMlwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMn0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUyfSAgaWQ9XCJjYXJkMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVHdvQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tNS1sb25naGF1bC5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVHdvQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tNS1sb25naGF1bC5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cigyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIiBpZD1cImNhcmRUZXh0MlwiPkZvciBub24tbW9iaWxlIGNsaWVudHM6IENjb24gTWV0YWxzIG9mZmVycyB3ZWVrbHksIGJpLXdlZWtseSwgb3IgbW9udGhseSBwaWNrdXAgc2VydmljZXMgdGhyb3VnaG91dCB0aGUgTG93ZXIgTWFpbmxhbmQgYW5kIHRoZSBGcmFzZXIgVmFsbGV5LiBXZSBhbHNvIG9mZmVyIGN1c3RvbSBmcmVpZ2h0IHNvbHV0aW9ucyBmb3IgY2xpZW50cyBvdXRzaWRlIG91ciBzZXJ2aWNlIGFyZWEuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyM1wiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwM30gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUzfSAgaWQ9XCJjYXJkM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVGhyZWVBfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQ0NPTi0zNjktY2F0YWx5c3QtamFycy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVGhyZWVCfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQ0NPTi0zNjktY2F0YWx5c3QtamFycy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cigyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIiBpZD1cImNhcmRUZXh0M1wiPkNjb24gTWV0YWxzIHNwZWNpYWxpemVzIGluIGxvb3NlIG1hdGVyaWFsIGFzc2F5IHNlcnZpY2VzOiBydW5uaW5nIGxvdHMgYXMgc21hbGwgYXMgb25seSBhIGZldyBwb3VuZHMsIHdpdGggbm8gdXBwZXIgbGltaXQuIFdlIG9mZmVyIGV4Y2VwdGlvbmFsIHJlZmluaW5nIHRlcm1zIHRoYXQgbWF0Y2ggY3VycmVudCBzY3JhcCBjYXRhbHl0aWMgY29udmVydGVyIHByaWNlczsgd2l0aCBhIGhpZ2hseSBjb21wZXRpdGl2ZSB0dXJuYXJvdW5kIHRpbWUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjZmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI3VuRmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTA1JSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjF2dyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMjUlKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tZnJvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiA0MHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS40dncpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZFRleHQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjR2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuMnZ3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNtYWxsQ29udGVudDE7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFNtYWxsQ29udGVudDIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgIGNsYXNzTmFtZTE6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMjogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUzOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGZhZGVPbmVBOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlT25lQjogXCJmYWRlXCIsXHJcbiAgICAgIGZhZGVUd29BOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlVHdvQjogXCJmYWRlXCIsXHJcbiAgICAgIGZhZGVUaHJlZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUaHJlZUI6IFwiZmFkZVwiLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmxpcDEgPSB0aGlzLmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDEgPSB0aGlzLnVuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDIgPSB0aGlzLmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDIgPSB0aGlzLnVuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDMgPSB0aGlzLmZsaXAzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDMgPSB0aGlzLnVuZmxpcDMuYmluZCh0aGlzKTtcclxufVxyXG5cclxuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZU9uZUEgOiBcImZhZGVcIiwgZmFkZU9uZUIgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkXCIsIGZhZGVPbmVBIDogXCJ1bkZhZGVcIiwgZmFkZU9uZUIgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlVHdvQSA6IFwiZmFkZVwiLCBmYWRlVHdvQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmRcIiwgZmFkZVR3b0EgOiBcInVuRmFkZVwiLCBmYWRlVHdvQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUaHJlZUEgOiBcImZhZGVcIiwgZmFkZVRocmVlQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmRcIiwgZmFkZVRocmVlQSA6IFwidW5GYWRlXCIsIGZhZGVUaHJlZUIgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5cclxucmVuZGVyKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzIGNvbnRlbnRDYW52YXMtLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjFcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDF9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAxfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUxfSAgaWQ9XCJjYXJkMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlT25lQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0FQUC00LXNjcm9sbC5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD17dGhpcy5zdGF0ZS5mYWRlT25lQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImJhY2tncm91bmRcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0FQUC00LXNjcm9sbC5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cigyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIiBpZD1cImNhcmRUZXh0MVwiPlRoZSBDY29uIFJldm9sdXRpb24gQXBwIGdpdmVzIHlvdSB0aGUgYWJpbGl0eSB0byBhY2N1cmF0ZWx5IGxvb2sgdXAgYW5kIHRyYWNrIHlvdXIgY3VycmVudCBwdXJjaGFzZXMgdmlhIHRoZSBvcmRlciBudW1iZXIgc3lzdGVtLiBDb250YWN0IHVzIHRvIGdldCBzdGFydGVkITwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjJcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDJ9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMn0gIGlkPVwiY2FyZDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVR3b0F9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9BUFAtNS1pbnZvaWNlLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPXt0aGlzLnN0YXRlLmZhZGVUd29CfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQVBQLTUtaW52b2ljZS5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cigyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIiBpZD1cImNhcmRUZXh0MlwiPlRoZSBSZXZvbHV0aW9uIEFwcCBvZmZlcnMgYSB1bmlxdWUsIGR1YWwgZnVuY3Rpb24sIGludm9pY2luZyBvcHRpb24uIFByb3ZpZGluZyB5b3UgYW5kL29yIHlvdXIgY2xpZW50cyB3aXRoIGFuIGl0ZW1pemVkIGludm9pY2Ugd2l0aCByZWZlcmVuY2VzIHRvIHNlcmlhbCBudW1iZXIsIG1hbnVmYWN0dXJlciwgc2l6ZSwgYW5kIGJvZHkgc3R5bGU7IGp1c3QgbGlrZSB0aGUgaW52b2ljZXMgeW91IHdvdWxkIHJlY2VpdmUgb24gZWFjaCBhbmQgZXZlcnkgdHJhbnNhY3Rpb24gbWFkZSB3aGVuIHlvdSBzZWxsIGNhdGFseXRpYyBjb252ZXJ0ZXJzIHRvIENjb24uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyM1wiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwM30gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUzfSAgaWQ9XCJjYXJkM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVGhyZWVBfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQVBQLTYtc2hpcHBpbmcuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVRocmVlQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0FQUC02LXNoaXBwaW5nLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDIwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiIGlkPVwiY2FyZFRleHQzXCI+VGhlIFJldm9sdXRpb24gQXBwIGZlYXR1cmVzIG91ciBwcmljZSBsb2NrIGd1YXJhbnRlZS4gT25jZSB0aGUgY2xpZW50IHRhcHMgdGhlIOKAnHNoaXDigJ0gYnV0dG9uLCB0aGlzIGxvY2tzIGluIHRoZSBjYXRhbHl0aWMgY29udmVydGVyIHNjcmFwIHByaWNlIG9mIHRoYXQgc2hpcG1lbnQgdW50aWwgaXQgYXJyaXZlcyBhdCBvdXIgZG9jay4gVGhpcyBwcm90ZWN0cyBvdXIgY2xpZW50cyBmcm9tIG1hcmtldCB2b2xhdGlsaXR5IGFuZCBwcmljZSBzd2luZ3MuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjZmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI3VuRmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwNSUpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZFRleHQxIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjN2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZFRleHQyIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4xdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjEydncpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmQxIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZFRleHQxIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjN2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuMXZ3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4zdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU21hbGxDb250ZW50MjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgU21hbGxDb250ZW50MyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgICAgZmFkZU9uZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVPbmVCOiBcImZhZGVcIixcclxuICAgICAgZmFkZVR3b0E6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUd29COiBcImZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQjogXCJmYWRlXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mbGlwMSA9IHRoaXMuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMSA9IHRoaXMudW5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMiA9IHRoaXMuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMiA9IHRoaXMudW5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMyA9IHRoaXMuZmxpcDMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMyA9IHRoaXMudW5mbGlwMy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlT25lQSA6IFwiZmFkZVwiLCBmYWRlT25lQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiwgZmFkZU9uZUEgOiBcInVuRmFkZVwiLCBmYWRlT25lQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUd29BIDogXCJmYWRlXCIsIGZhZGVUd29CIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZFwiLCBmYWRlVHdvQSA6IFwidW5GYWRlXCIsIGZhZGVUd29CIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVRocmVlQSA6IFwiZmFkZVwiLCBmYWRlVGhyZWVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiLCBmYWRlVGhyZWVBIDogXCJ1bkZhZGVcIiwgZmFkZVRocmVlQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgIDx1bCBpZD1cIm91dGVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiB9fT48c3Ryb25nPjx1PldoZXJlIGlzIHlvdXIgcHJpY2VsaXN0IGFuZCBob3cgY2FuIEkgZ2V0IGl0PzwvdT48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBPdXIgcHJpY2VsaXN0IGNhbiBvbmx5IGJlIGZvdW5kIHdpdGhpbiB0aGUgQ2NvbiBSZXZvbHV0aW9uIFdlYiBBcHAuIFByb3NwZWN0aXZlIGNsaWVudHMgZGVzaXJpbmcgYW4gaW52aXRhdGlvbiB0byB0aGUgYXBwIG11c3QgY29udGFjdCB1cyBieSBwaG9uZSBvciBlbWFpbC5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBsaXN0U3R5bGU6IFwibm9uZVwiIH19PjxzdHJvbmc+PHU+V2hhdCBpcyB0aGUgbWluaW11bS9tYXhpbXVtIGFtb3VudCBvZiBjYXRhbHl0aWMgY29udmVydGVycyBJIGNhbiBicmluZyB0byBDY29uIE1ldGFscz88L3U+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgVW5saWtlIG1vc3QgY2F0YWx5dGljIGNvbnZlcnRlciByZWN5Y2xpbmcgYnVzaW5lc3NlcywgQ2NvbiBNZXRhbHMgaGFzIG5vIGNvbnZlcnRlciBtaW5pbXVtcyBvciBtYXhpbXVtcy4gIFJlc3QgYXNzdXJlZCB0aGF0LCByZWdhcmRsZXNzIG9mIHF1YW50aXR5LCB5b3VyIGNvbnZlcnRlcnMgd2lsbCBiZSBwdXJjaGFzZWQgZmFpcmx5LiBDYWxsIHVzIHRvIGxlYXJuIG1vcmUhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiB9fSA+PHN0cm9uZz48dT5XaGF0IGlzIERvd25ncmFkaW5nL1VwZ3JhZGluZz8gV2h5IGlzIGl0IGRvbmU/ICBEb2VzIENjb24gZG8gdGhpcz88L3U+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgRG93bmdyYWRpbmcvVXBncmFkaW5nIG9jY3VycyB3aGVuIGEgYnV5ZXIgdGFrZXMgYWR2YW50YWdlIG9mIGEgc2VsbGVyIGJ5IG1hbmlwdWxhdGluZyBpbmZvcm1hdGlvbi4gVGhlIHJlYXNvbiBhIGJ1eWVyIG1heSBkbyB0aGlzIGlzIHRvOiBcclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cImlubmVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiaW5uZXItbGlzdC1pdGVtXCIgc3R5bGU9e3sgbGlzdFN0eWxlOiBcInNxdWFyZVwiLCBwYWRkaW5nOiBcIjBcIiwgbWFyZ2luOiBcIjBcIiwgbGlzdFN0eWxlUG9zaXRpb246IFwiaW5zaWRlXCIgfX0+U2VjdXJlIG5ldyBjbGllbnRzIGJ5IOKAnXdvd2luZ+KAnSB0aGVtIHdpdGggYXJ0aWZpY2lhbCBjYXRhbHl0aWMgY29udmVydGVyIHByaWNlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cImlubmVyLWxpc3QtaXRlbVwiIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJzcXVhcmVcIiwgcGFkZGluZzogXCIwXCIsIG1hcmdpbjogXCIwXCIsIGxpc3RTdHlsZVBvc2l0aW9uOiBcImluc2lkZVwiIH19PkJvb3N0IHRoZSB2YWx1ZSBvZiBwb3B1bGFyIGNvbnZlcnRlcnMgYnkgcHVsbGluZyB2YWx1ZSBhd2F5IGZyb20gbGVzc2VyIGtub3duIGNvbnZlcnRlcnM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJpbm5lci1saXN0LWl0ZW1cIiBzdHlsZT17eyBsaXN0U3R5bGU6IFwic3F1YXJlXCIsIHBhZGRpbmc6IFwiMFwiLCBtYXJnaW46IFwiMFwiLCBsaXN0U3R5bGVQb3NpdGlvbjogXCJpbnNpZGVcIiB9fT5UYWtlIG1vbmV5IGF3YXkgZnJvbSBvbmUgY2xpZW50IHNvIGEgbW9yZSDigJx3b3J0aHdoaWxl4oCdIGNsaWVudCBjYW4gYmUgb3ZlcnBhaWQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiwgcGFkZGluZzogXCIwXCIsIG1hcmdpbjogXCIwXCIgfX0+PGJyIC8+V2UgYXQgQ2NvbiBNZXRhbHMgd291bGQgbmV2ZXIgZG8gc3VjaCBhIGRpc3NlcnZpY2UgdG8gb3VyIHZhbHVlZCBjdXN0b21lcnMuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI291dGVyLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjaW5uZXItbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2lubmVyLWxpc3QtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjV2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2ZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZU91dCBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICN1bkZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjUlKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmQxIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI291dGVyLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjaW5uZXItbGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU21hbGxDb250ZW50MzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgU21hbGxFeHBsYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImV4cGxhaW5Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbFRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJzbWFsbEJ1dHRvblRhZ1wiPk11bHRpLVVzZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwic21hbGxFeHBsYWluXCI+TXVsdGlwbGUgY29udmVydGVyIGJ1eWVycyBmcm9tIGEgc2luZ2xlIHBoeXNpY2FsIGxvY2F0aW9uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNleHBsYWluQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNzVweClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFsbFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjc21hbGxCdXR0b25UYWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA2cHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNzbWFsbEV4cGxhaW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNXB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMC40dncpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZXhwbGFpbkNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTBweClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWxsVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3NtYWxsQnV0dG9uVGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTIwcHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3NtYWxsRXhwbGFpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTE2cHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU21hbGxFeHBsYWluOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTb2xvRXhwbGFpbiBmcm9tICcuL1NvbG9FeHBsYWluJztcclxuaW1wb3J0IFNpbmdsZUZpZ3VyZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL3NpbmdsZS1maWd1cmUucG5nJztcclxuXHJcblxyXG5jbGFzcyBTb2xvQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDxTb2xvRXhwbGFpbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwwJSw5MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IGhzbGEoMCwwJSwxNSUsICAxKSAwICAwcHggMHB4IDRweCwgLyogYm9yZGVyICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDE1JSwgLjgpIDAgLTFweCA1cHggNHB4LCAvKiBzb2Z0IFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDAlLCAuMjUpIDAgLTFweCAwcHggN3B4LCAvKiBib3R0b20gU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDAsMCUsMTAwJSwuNykgMCAgMnB4IDFweCA3cHgsIC8qIHRvcCBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMCwwJSwgMCUsLjE1KSAwIC01cHggNnB4IDRweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDAsMCUsMTAwJSwuNSkgMCAgNXB4IDZweCA0cHg7IC8qIG91dGVyIEhMICovIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBCcnVzaGVkIE1ldGFsICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlICAgMCUsICA4JSA1MCUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgMTAwJSwgMTIlIDUwJSwgaHNsYSgwLDAlLDEwMCUsLjYpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggICAwJSAgNTAlLCA1MCUgIDclLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAxMDAlICA1MCUsIDUwJSAgNSUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwgIDAlLDApIDAlLCBoc2xhKDAsMCUsICAwJSwwKSAgIDMlLCBoc2xhKDAsMCUsICAwJSwuMSkgMy41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAgIDYlLCBoc2xhKDAsMCUsMTAwJSwuMSkgNy41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxLjIlLCBoc2xhKDAsMCUsMTAwJSwuMikgMi4yJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDIwMCUgNTAlLCBoc2xhKDAsMCUsOTAlLDEpIDUlLCBoc2xhKDAsMCUsODUlLDEpIDMwJSwgaHNsYSgwLDAlLDYwJSwxKSAxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmJlZm9yZSwgI2NpcmNsZTphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBmYWtlIGNvbmljYWwgZ3JhZGllbnRzICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAgIDAlLCAxMCUgNTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgMTAwJSwgMTAlIDUwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgIDAlICA1MCUsIDUwJSAxMCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggMTAwJSAgNTAlLCA1MCUgMDYlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YmVmb3JlIHsgdHJhbnNmb3JtOiByb3RhdGUoIDY1ZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmFmdGVyIHsgdHJhbnNmb3JtOiByb3RhdGUoLTY1ZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsKDIxMCwgMTAwJSwgNDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IGhzbGEoMjEwLDEwMCUsMjAlLC4zKSAwIC0xcHggMCwgaHNsKDIxMCwxMDAlLDg1JSkgMCAycHggMXB4LCBoc2xhKDIwMCwxMDAlLDgwJSwxKSAwIDAgNXB4LCBoc2xhKDIxMCwxMDAlLDUwJSwuNikgMCAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMzAlLCAgMSkgMCAgMHB4IDBweCA0cHgsIC8qIGJvcmRlciAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMTUlLCAuNCkgMCAtMXB4IDVweCA0cHgsIC8qIHNvZnQgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDIwJSwuMjUpIDAgLTFweCAwcHggN3B4LCAvKiBib3R0b20gU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDEwMCUsLjcpIDAgIDJweCAxcHggN3B4LCAvKiB0b3AgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCwxMDAlLDc1JSwgLjgpIDAgIDBweCAzcHggMnB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDUwJSw0MCUsIC4yNSkgMCAtNXB4IDZweCA0cHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsODAlLDk1JSwgICAxKSAwICA1cHggNnB4IDRweDsgLyogb3V0ZXIgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBFbmQgQnJ1c2hlZCBNZXRhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvbG9CdXR0b247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFNvbG9Db250ZW50MSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgICAgZmFkZU9uZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVPbmVCOiBcImZhZGVcIixcclxuICAgICAgZmFkZVR3b0E6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUd29COiBcImZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQjogXCJmYWRlXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mbGlwMSA9IHRoaXMuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMSA9IHRoaXMudW5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMiA9IHRoaXMuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMiA9IHRoaXMudW5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMyA9IHRoaXMuZmxpcDMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMyA9IHRoaXMudW5mbGlwMy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlT25lQSA6IFwiZmFkZVwiLCBmYWRlT25lQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiwgZmFkZU9uZUEgOiBcInVuRmFkZVwiLCBmYWRlT25lQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUd29BIDogXCJmYWRlXCIsIGZhZGVUd29CIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZFwiLCBmYWRlVHdvQSA6IFwidW5GYWRlXCIsIGZhZGVUd29CIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVRocmVlQSA6IFwiZmFkZVwiLCBmYWRlVGhyZWVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiLCBmYWRlVGhyZWVBIDogXCJ1bkZhZGVcIiwgZmFkZVRocmVlQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMVwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMX0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTF9ICBpZD1cImNhcmQxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPXt0aGlzLnN0YXRlLmZhZGVPbmVBfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQ0NPTi0xLWxlYXZpbmcuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZU9uZUJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTEtbGVhdmluZy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cigyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIiBpZD1cImNhcmRUZXh0MVwiPkNjb24gTWV0YWxzIG9mZmVycyBmYXN0IGFuZCBhY2N1cmF0ZSBncmFkaW5nIGJ5IG91ciBjb252ZXJ0ZXIgc3BlY2lhbGlzdHMsIGVuYWJsaW5nIHlvdSB0byBzZWxsIHlvdXIgY2F0YWx5dGljIGNvbnZlcnRlcnMgcXVpY2tseSBhbmQgZWZmaWNpZW50bHkuIENhbGwgdXMgdG8gZ2V0IHN0YXJ0ZWQhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMlwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMn0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUyfSAgaWQ9XCJjYXJkMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVHdvQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tMi1tb25leS5qcGVnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVR3b0J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTItbW9uZXkuanBlZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDIwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiIGlkPVwiY2FyZFRleHQyXCI+Q2NvbiBNZXRhbHMgb2ZmZXJzIHNldmVyYWwgbWV0aG9kcyBvZiBwYXltZW50IHdoZW4geW91IHNlbGwgY2F0YWx5dGljIGNvbnZlcnRlcnMuIENsaWVudHMgY2FuIGNob29zZSBiZXR3ZWVuIGNhc2gsIGNoZXF1ZSwgYmFuayB3aXJlLCBvciBFLXRyYW5zZmVyLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjNcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDN9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAzfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lM30gIGlkPVwiY2FyZDNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVRocmVlQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tMzY5LWNhdGFseXN0LWphcnMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVRocmVlQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tMzY5LWNhdGFseXN0LWphcnMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDNcIj5DY29uIE1ldGFscyBzcGVjaWFsaXplcyBpbiBsb29zZSBtYXRlcmlhbCBhc3NheSBzZXJ2aWNlczogcnVubmluZyBsb3RzIGFzIHNtYWxsIGFzIG9ubHkgYSBmZXcgcG91bmRzLCB3aXRoIG5vIHVwcGVyIGxpbWl0LiBXZSBvZmZlciBleGNlcHRpb25hbCByZWZpbmluZyB0ZXJtcyB0aGF0IG1hdGNoIGN1cnJlbnQgc2NyYXAgY2F0YWx5dGljIGNvbnZlcnRlciBwcmljZXM7IHdpdGggYSBoaWdobHkgY29tcGV0aXRpdmUgdHVybmFyb3VuZCB0aW1lLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2ZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZU91dCBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICN1bkZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDUlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4zdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDMge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4xdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIyNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgc2lsdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1mcm9udCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDQwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZFRleHQxIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjR2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuNHZ3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4ydncpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU29sb0NvbnRlbnQxOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTb2xvQ29udGVudDIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgIGNsYXNzTmFtZTE6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMjogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUzOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGZhZGVPbmVBOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlT25lQjogXCJmYWRlXCIsXHJcbiAgICAgIGZhZGVUd29BOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlVHdvQjogXCJmYWRlXCIsXHJcbiAgICAgIGZhZGVUaHJlZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUaHJlZUI6IFwiZmFkZVwiLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmxpcDEgPSB0aGlzLmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDEgPSB0aGlzLnVuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDIgPSB0aGlzLmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDIgPSB0aGlzLnVuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDMgPSB0aGlzLmZsaXAzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDMgPSB0aGlzLnVuZmxpcDMuYmluZCh0aGlzKTtcclxufVxyXG5cclxuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZU9uZUEgOiBcImZhZGVcIiwgZmFkZU9uZUIgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkXCIsIGZhZGVPbmVBIDogXCJ1bkZhZGVcIiwgZmFkZU9uZUIgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlVHdvQSA6IFwiZmFkZVwiLCBmYWRlVHdvQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmRcIiwgZmFkZVR3b0EgOiBcInVuRmFkZVwiLCBmYWRlVHdvQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUaHJlZUEgOiBcImZhZGVcIiwgZmFkZVRocmVlQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmRcIiwgZmFkZVRocmVlQSA6IFwidW5GYWRlXCIsIGZhZGVUaHJlZUIgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5cclxucmVuZGVyKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzIGNvbnRlbnRDYW52YXMtLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjFcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDF9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAxfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUxfSAgaWQ9XCJjYXJkMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlT25lQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0FQUC0xLWdyYXBoLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPXt0aGlzLnN0YXRlLmZhZGVPbmVCfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQVBQLTEtZ3JhcGguanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDFcIj5DY29uIE1ldGFscyBjYXRhbHl0aWMgY29udmVydGVyIHNjcmFwIHByaWNlIGFsd2F5cyByZXByZXNlbnRzIGN1cnJlbnQgcHJlY2lvdXMgbWV0YWxzIG1hcmtldHMuIFRoZSBDY29uIFJldm9sdXRpb24gQXBwIGF1dG9tYXRpY2FsbHkgdXBkYXRlcyBhcyBtYXJrZXQgcHJpY2luZyBjaGFuZ2VzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjJcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDJ9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMn0gIGlkPVwiY2FyZDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVR3b0F9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9BUFAtMi1icm93c2UuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVR3b0J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9BUFAtMi1icm93c2UuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDJcIj5PdXIgY2F0YWx5dGljIGNvbnZlcnRlciBkYXRhYmFzZSBpcyBhdCB5b3VyIGZpbmdlcnRpcHM6IGVuYWJsaW5nIHF1aWNrIGFuZCBlYXN5IHVuaXQgdmFsdWUgYXNzZXNzbWVudC4gVGhlIENjb24gUmV2b2x1dGlvbiBBcHAgZmVhdHVyZXMgdGhvdXNhbmRzIG9mIGNhdGFseXRpYyBjb252ZXJ0ZXIgbnVtYmVycyBhbmQgcHJpY2VzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjNcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDN9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAzfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lM30gIGlkPVwiY2FyZDNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVRocmVlQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0FQUC0zLWFzc2lzdC5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVGhyZWVCfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQVBQLTMtYXNzaXN0LmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDIwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiIGlkPVwiY2FyZFRleHQzXCI+V2l0aCB0aGUgQ2NvbiBSZXZvbHV0aW9uIEFwcCwgeW91IGhhdmUgYWNjZXNzIHRvIG91ciDigJxMaXZlIEFzc2lzdOKAnSBmZWF0dXJlLiBBbGxvd2luZyByZWFsIHRpbWUgYWlkIGZyb20gb3VyIGNhdGFseXRpYyBjb252ZXJ0ZXIgZXhwZXJ0cy4gU2ltcGx5IHN1Ym1pdCBhIHBpY3R1cmUgZm9yIGEgbmVhciBpbnN0YW50IGFzc2Vzc21lbnQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjZmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI3VuRmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwNSUpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZFRleHQxIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjN2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZFRleHQyIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4zdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjJ2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1JTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmQxIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4zdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZFRleHQzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjJ2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbik7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTb2xvQ29udGVudDI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFNvbG9Db250ZW50MyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgICAgZmFkZU9uZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVPbmVCOiBcImZhZGVcIixcclxuICAgICAgZmFkZVR3b0E6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUd29COiBcImZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQjogXCJmYWRlXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mbGlwMSA9IHRoaXMuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMSA9IHRoaXMudW5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMiA9IHRoaXMuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMiA9IHRoaXMudW5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMyA9IHRoaXMuZmxpcDMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMyA9IHRoaXMudW5mbGlwMy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlT25lQSA6IFwiZmFkZVwiLCBmYWRlT25lQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiwgZmFkZU9uZUEgOiBcInVuRmFkZVwiLCBmYWRlT25lQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUd29BIDogXCJmYWRlXCIsIGZhZGVUd29CIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZFwiLCBmYWRlVHdvQSA6IFwidW5GYWRlXCIsIGZhZGVUd29CIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVRocmVlQSA6IFwiZmFkZVwiLCBmYWRlVGhyZWVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiLCBmYWRlVGhyZWVBIDogXCJ1bkZhZGVcIiwgZmFkZVRocmVlQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJvdXRlci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCIgfX0gPjxzdHJvbmc+PHU+SG93IG11Y2ggaXMgYSBjYXRhbHl0aWMgY29udmVydGVyIHdvcnRoIGluIHNjcmFwPzwvdT48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBDYXRhbHl0aWMgY29udmVydGVyIHNjcmFwIHByaWNlcyBjaGFuZ2Ugb2Z0ZW4uIEEgY2F0YWx5dGljIGNvbnZlcnRlcidzIHZhbHVlIGNvbWVzIGZyb20gMyBzcGVjaWZpYyBwbGF0aW51bSBncm91cCBtZXRhbHMgKFBHTSkgZm91bmQgaW5zaWRlIGVhY2ggY29udmVydGVyOiBQbGF0aW51bSwgUGFsbGFkaXVtLCBhbmQgUmhvZGl1bS4gRW50cnkgaW50byB0aGUgUE1SIChQcmVjaW91cyBNZXRhbHMgUmVjeWNsaW5nKSBpbmR1c3RyeSBpcyB0aGUgc2FmZXN0IGl04oCZcyBldmVyIGJlZW4sIHRoYW5rcyB0byBDY29uIFJldm9sdXRpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiB9fT48c3Ryb25nPjx1PldoYXQgaXMgdGhlIG1pbmltdW0vbWF4aW11bSBhbW91bnQgb2YgY2F0YWx5dGljIGNvbnZlcnRlcnMgSSBjYW4gYnJpbmcgdG8gQ2NvbiBNZXRhbHM/PC91Pjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFVubGlrZSBtb3N0IGNhdGFseXRpYyBjb252ZXJ0ZXIgcmVjeWNsaW5nIGJ1c2luZXNzZXMsIENjb24gTWV0YWxzIGhhcyBubyBjb252ZXJ0ZXIgbWluaW11bXMgb3IgbWF4aW11bXMuICBSZXN0IGFzc3VyZWQgdGhhdCwgcmVnYXJkbGVzcyBvZiBxdWFudGl0eSwgeW91ciBjb252ZXJ0ZXJzIHdpbGwgYmUgcHVyY2hhc2VkIGZhaXJseS4gQ2FsbCB1cyB0byBsZWFybiBtb3JlIVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCIgfX0gPjxzdHJvbmc+PHU+V2hhdCBpcyBEb3duZ3JhZGluZy9VcGdyYWRpbmc/IFdoeSBpcyBpdCBkb25lPyAgRG9lcyBDY29uIGRvIHRoaXM/PC91Pjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIERvd25ncmFkaW5nL1VwZ3JhZGluZyBvY2N1cnMgd2hlbiBhIGJ1eWVyIHRha2VzIGFkdmFudGFnZSBvZiBhIHNlbGxlciBieSBtYW5pcHVsYXRpbmcgaW5mb3JtYXRpb24uIFRoZSByZWFzb24gYSBidXllciBtYXkgZG8gdGhpcyBpcyB0bzogXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJpbm5lci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cImlubmVyLWxpc3QtaXRlbVwiIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJzcXVhcmVcIiwgcGFkZGluZzogXCIwXCIsIG1hcmdpbjogXCIwXCIsIGxpc3RTdHlsZVBvc2l0aW9uOiBcImluc2lkZVwiIH19PlNlY3VyZSBuZXcgY2xpZW50cyBieSDigJ13b3dpbmfigJ0gdGhlbSB3aXRoIGFydGlmaWNpYWwgY2F0YWx5dGljIGNvbnZlcnRlciBwcmljZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJpbm5lci1saXN0LWl0ZW1cIiBzdHlsZT17eyBsaXN0U3R5bGU6IFwic3F1YXJlXCIsIHBhZGRpbmc6IFwiMFwiLCBtYXJnaW46IFwiMFwiLCBsaXN0U3R5bGVQb3NpdGlvbjogXCJpbnNpZGVcIiB9fT5Cb29zdCB0aGUgdmFsdWUgb2YgcG9wdWxhciBjb252ZXJ0ZXJzIGJ5IHB1bGxpbmcgdmFsdWUgYXdheSBmcm9tIGxlc3NlciBrbm93biBjb252ZXJ0ZXJzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiaW5uZXItbGlzdC1pdGVtXCIgc3R5bGU9e3sgbGlzdFN0eWxlOiBcInNxdWFyZVwiLCBwYWRkaW5nOiBcIjBcIiwgbWFyZ2luOiBcIjBcIiwgbGlzdFN0eWxlUG9zaXRpb246IFwiaW5zaWRlXCIgfX0+VGFrZSBtb25leSBhd2F5IGZyb20gb25lIGNsaWVudCBzbyBhIG1vcmUg4oCcd29ydGh3aGlsZeKAnSBjbGllbnQgY2FuIGJlIG92ZXJwYWlkPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCIsIHBhZGRpbmc6IFwiMFwiLCBtYXJnaW46IFwiMFwiIH19PjxiciAvPldlIGF0IENjb24gTWV0YWxzIHdvdWxkIG5ldmVyIGRvIHN1Y2ggYSBkaXNzZXJ2aWNlIHRvIG91ciB2YWx1ZWQgY3VzdG9tZXJzLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI291dGVyLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjaW5uZXItbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2lubmVyLWxpc3QtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjV2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2ZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZU91dCBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICN1bkZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjUlKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmQxIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI291dGVyLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjaW5uZXItbGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU29sb0NvbnRlbnQzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgU29sb0V4cGxhaW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXhwbGFpbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInNvbG9CdXR0b25UYWdcIj5TaW5nbGUtVXNlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJzb2xvRXhwbGFpblwiPk9uZSBidXllciBhY2Nlc3MgdG8gdGhlIFJldm9sdXRpb24gYXBwLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNleHBsYWluQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNzVweClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWxsVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NvbG9FeHBsYWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDVweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTRweCArIDAuNHZ3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NvbG9CdXR0b25UYWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA2cHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNleHBsYWluQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MHB4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbGxUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjc29sb0J1dHRvblRhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0yMHB4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNzb2xvRXhwbGFpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0ycHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29sb0V4cGxhaW47IiwiaW1wb3J0IFRleHRMb29wIGZyb20gXCJyZWFjdC10ZXh0LWxvb3BcIjtcclxuXHJcbmNsYXNzIFdvcmRMb29wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aDMgaWQ9XCJsb29wRWxlbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgWW91ciB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8VGV4dExvb3AgaWQ9XCJsb29wQ29tcG9uZW50XCIgY2hpbGRyZW49e1tcIiBDQ09OXCIsIFwiIGJ1eWluZ1wiLCBcIiBzZWxsaW5nXCIsIFwiIG1hbmFnaW5nXCIsIFwiIGluZm9ybWF0aW9uXCJdfT5cclxuICAgICAgICAgICAgICAgIDwvVGV4dExvb3A+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGkgaWQ9XCJyZXZUYWdcIj5SRVZPTFVUSU9OPC9pPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAjbG9vcEVsZW1lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI3JldlRhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmRMb29wOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBXaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaW1nVVJMOiAnLi9hc3NldHMvd2hhdC13ZS1kby5qcGcnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwid2hhdENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbWdDb250YWluZXJcIiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwid2hhdEltZ1wiIHNyYz17dGhpcy5zdGF0ZS5pbWdVUkx9IHN0eWxlPXt7fX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIndoYXRDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+PHUgc3R5bGU9e3t0ZXh0U2hhZG93OiBcIjFweCAxcHggMXB4IGJsYWNrXCJ9fT5XaGF0IHdlIGRvOjwvdT48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2UgYXJlIHRoZSBsYXJnZXN0IHZvbHVtZSBidXllciBhbmQgcHJvY2Vzc29yIG9mIGNhdGFseXRpYyBjb252ZXJ0ZXJzIGluIHdlc3Rlcm4gQ2FuYWRhLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICN3aGF0Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjd2hhdEltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3doYXRDb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ltZ0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjd2hhdENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjd2hhdEltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTMwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN3aGF0Q29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0zNzBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjN2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaGF0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBXaG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpbWdVUkw6ICcuL2Fzc2V0cy93aG8td2UtYXJlLmpwZydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3aG9Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW1nQ29udGFpbmVyXCIgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwid2hvSW1nXCIgc3JjPXt0aGlzLnN0YXRlLmltZ1VSTH0gc3R5bGU9e3t9fT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwid2hvQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjx1IHN0eWxlPXt7dGV4dFNoYWRvdzogXCIxcHggMXB4IDFweCBibGFja1wifX0+V2hvIHdlIGFyZTo8L3U+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpbmNlIDIwMDUgQ2NvbiBNZXRhbHMgaGFzIHNlcnZlZCB0aGUgcHJlY2lvdXMgbWV0YWwgcmVjeWNsaW5nIGluZHVzdHJ5IHdpdGggb3VyIGZ1bGx5IGVxdWlwcGVkIHByb2Nlc3NpbmcgZmFjaWxpdHkgaW4gQWJib3RzZm9yZCBCLkMuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICN3aG9Db250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICN3aG9JbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICN3aG9Db250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjaW1nQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN3aG9Db250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3dob0ltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTMwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN3aG9Db250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMzg1cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdobzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgV2h5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaW1nVVJMOiAnLi9hc3NldHMvd2h5LXdlLWRvLmpwZydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3aG9Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW1nQ29udGFpbmVyXCIgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwid2hvSW1nXCIgc3JjPXt0aGlzLnN0YXRlLmltZ1VSTH0gc3R5bGU9e3t9fT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwid2hvQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjx1IHN0eWxlPXt7dGV4dFNoYWRvdzogXCIxcHggMXB4IDFweCBibGFja1wifX0+V2h5IHdlIGRvIGl0OjwvdT48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVG8gYnJpbmcgY2xhcml0eSBhbmQgaW50ZWdyaXR5IHRvIGFuIGluZHVzdHJ5IHRoYXQgaXMgcGxhZ3VlZCB3aXRoIGNsb3VkaW5lc3MgYW5kIHVuY2VydGFpbnR5LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjd2hvQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjd2hvSW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjd2hvQ29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjN2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNpbWdDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3dob0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjd2hvSW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMzAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3dob0NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0zNzBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4zdncpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2h5OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9BcHAnO1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2ZvbnRhd2Vzb21lJztcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9zb2xpZCc7XHJcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvcmVndWxhcic7XHJcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYnJhbmRzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPk15IHBhZ2UgdGl0bGU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvaWNvXCIgaHJlZj1cIi9mYXZpY29uLmljbz89djFcIi8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFwcD48L0FwcD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3luY29wYXRlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogbG9jYWwoJ1N5bmNvcGF0ZS1Cb2xkJyksIHVybCguL2ZvbnRzL1N5bmNvcGF0ZS1Cb2xkLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sLCBib2R5LCAjX19uZXh0LCAjbmV4dC1ib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJywgJ094eWdlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogODAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvQVBQLTEtZ3JhcGgtMTFhYTQxNThhMWRjZGQ3NGNlZTJlY2FkNDQxNWFiNWQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL0FQUC0yLWJyb3dzZS1jZGE5NTc2YWM3ZTRkOTEyMmMxNDc3NjcwMzQxN2Q0Yi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvQVBQLTMtYXNzaXN0LTNhODczMWQ1NDY4MDVhMWE0YWE1NDM0YTY1ODUwODQwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9BUFAtNC1zY3JvbGwtZGIxYTc2NTExZjRiNjU0Mzc5YzljYzgxMTA0NTRiMmQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL0FQUC01LWludm9pY2UtZjUwNWZjZTk3YjA1YTllMjdkNzU5YzkzYTVjMTQxNGUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL0FQUC02LXNoaXBwaW5nLTEwZDkyY2VjZGYyZDY5YTYwMzQzNzk5MDk5MGMxMDRjLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9BUFAtNy10ZWFtLTk0NzVhNDllYzU5OTc3OTIwODNhYWFiZjZmMmZhNzA0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9BUFAtOC1jb250cm9sLTY5YTUxOGRjOTk5YjJhM2JlOTk0NzkyNzlkM2ExMTgxLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9BUFAtOS1zZWN1cml0eS1jMTUxZTkyMjdlYjAyNjhhYWVjNjJhNzgyYWJjYzJmOC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvQ0NPTi0xLWxlYXZpbmctMzhiMzhhNTBhMDI1YTQyZDcwZWNiMDA0N2YzMTU5ZDkuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL0NDT04tMi1tb25leS02MTMzMzFkZjFjMGExYzkzYzI0YjhmODA2ZDRlODFiNS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL0NDT04tMzY5LWNhdGFseXN0LWphcnMtMGQwOTJhNTVlNjIzMWEzMzgxNzUyNGY5YTZiNjIxNzYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL0NDT04tNC1kYXRhLWd1eS0wNDY2ODgxNjFiMGY1MzA5YTI2ZGI4MGJlYzdlY2M2Yy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvQ0NPTi01LWxvbmdoYXVsLWNhMmRiMmU4NDlmZjlhODQ0ZWRhMjkzMzMwMDhiNmFmLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9DQ09OLTctbG9hZGluZy1iYXktNGM1MGIzOGY0NjVkMjA0YmYzOTY1ZDNiYTcxNzNkMmYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL0NDT04tOC1pbnZvaWNlLTBjMDVkYzQxOTZlN2E1MTlkMGQ4ZGUzNDI3NWFlOGZiLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvY2NvblRyaWFuZ2xlLWY1OWUxZmM0ODE1MjUwZTQ0YjI4NmM2NzUxMGFkNzI2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jcmV3LWZpZ3VyZS0yZTg2ZmIyM2M5ZjhjODk1NTFmZjIzMGZjZWE1MzhhNy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZmFjdG9yeS1maWd1cmUtODI5ZDFjMmFlMDNlN2NjNzhhYTU2Mjg5YWM2M2NiNTAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21hcC1pbWFnZS1lM2Q3YTkzNTQ3YjM1OThjMDRkYmVhMjkzNmE4YzdhMy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2luZ2xlLWZpZ3VyZS0yZjM3MjYxZTlmYTc5YzhiNGEyNDcxMDM3YjI0ZGU2Ny5wbmdcIjsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEJhY2tncm91bmRWaWRlbyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZpZGVvVVJMOiAnLi92aWRlby9Cb3hGaWxsTG9vcC5tcDQnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHZpZGVvIGFsdD1cIlNlbGwgY2F0YWx5dGljIGNvbnZlcnRlcnNcIiBpZD1cImJhY2tncm91bmQtdmlkZW9cIiB0eXBlPVwidmlkZW8vbXA0XCIgbG9vcCBhdXRvUGxheSBzdHlsZT17e1xyXG5cclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwdncnLFxyXG4gICAgICAgICAgICAgICAgdG9wOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICdub25lJyxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogJzAuMycsXHJcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcblxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXt0aGlzLnN0YXRlLnZpZGVvVVJMfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXt0aGlzLnN0YXRlLnZpZGVvVVJMfSB0eXBlPVwidmlkZW8vb2dnXCIgLz5cclxuICAgICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWcuXHJcbiAgICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZFZpZGVvOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2JyYW5kc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9yZWd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL3NvbGlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10ZXh0LWxvb3BcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9