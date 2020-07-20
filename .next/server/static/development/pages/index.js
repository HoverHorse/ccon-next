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
      renderButtons: true
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
      contentPage: 1,
      viewContact: false,
      viewRevolution: false,
      buttonFade: "fadeIn",
      contentFade: "fadeOut",
      arrowFade: "fadeOut"
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
      arrowFade: "fadeIn"
    });
  }

  seeSmall() {
    this.setState({
      viewSmall: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeIn"
    });
  }

  seeCorp() {
    this.setState({
      viewCorp: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeIn"
    });
  }

  seeContact() {
    this.setState({
      viewContact: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeOut"
    });
  }

  seeRevolution() {
    this.setState({
      viewRevolution: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeOut"
    });
  }

  render() {
    return __jsx("div", {
      className: "jsx-148974471" + " " + "App",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 7
      }
    }, __jsx(_public_video_BackgroundVideo__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "video/mp4",
      autoplay: true,
      mute: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "jsx-148974471" + " " + "Signature",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }
    }, __jsx("img", {
      id: "logo",
      src: _public_assets_cconTriangle_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      className: "jsx-148974471",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }
    }), __jsx("h1", {
      className: "jsx-148974471" + " " + "sigText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }
    }, "METALS")), __jsx("div", {
      id: "bannerDiv",
      className: "jsx-148974471",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }
    }, __jsx("h2", {
      id: "banner",
      className: "jsx-148974471",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 11
      }
    }, __jsx("a", {
      id: "revLink",
      onClick: this.seeRevolution,
      style: {
        cursor: 'pointer'
      },
      className: "jsx-148974471",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }
    }, __jsx(_TextLoop__WEBPACK_IMPORTED_MODULE_13__["default"], {
      id: "text-loop",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 85
      }
    })))), __jsx("div", {
      id: "buttonContainer",
      className: "jsx-148974471" + " " + (this.state.buttonFade || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 10
      }
    }, __jsx("a", {
      onClick: this.seeSolo,
      id: "soloButton",
      style: {
        cursor: 'pointer'
      },
      className: "jsx-148974471",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }
    }, __jsx(_SoloButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 15
      }
    })), __jsx("a", {
      onClick: this.seeSmall,
      id: "smallButton",
      style: {
        cursor: 'pointer'
      },
      className: "jsx-148974471",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }
    }, __jsx(_SmallButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 15
      }
    })), __jsx("a", {
      onClick: this.seeCorp,
      id: "corpButton",
      style: {
        cursor: 'pointer'
      },
      className: "jsx-148974471",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }
    }, __jsx(_CorpButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 15
      }
    })), __jsx("div", {
      id: "footerContainer",
      className: "jsx-148974471",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 15
      }
    }, __jsx("a", {
      onClick: this.seeContact,
      id: "contactButton",
      style: {
        cursor: 'pointer'
      },
      id: "footerLink",
      className: "jsx-148974471",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }
    }, __jsx(_Contact__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 19
      }
    })))), __jsx("div", {
      id: "contentContainer",
      className: "jsx-148974471" + " " + (this.state.contentFade || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 10
      }
    }, __jsx(_SliderSolo__WEBPACK_IMPORTED_MODULE_8__["default"], {
      show: this.state.viewSolo,
      onClose: this.timerCloseContent,
      id: "soloContent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 13
      }
    }), __jsx(_SliderSmall__WEBPACK_IMPORTED_MODULE_9__["default"], {
      show: this.state.viewSmall,
      onClose: this.timerCloseContent,
      id: "smallContent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 13
      }
    }), __jsx(_SliderCorp__WEBPACK_IMPORTED_MODULE_10__["default"], {
      show: this.state.viewCorp,
      onClose: this.timerCloseContent,
      id: "corpContent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 13
      }
    }), __jsx(_ContactContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
      show: this.state.viewContact,
      onClose: this.timerCloseContent,
      id: "contactContent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 13
      }
    }), __jsx(_Revolution__WEBPACK_IMPORTED_MODULE_12__["default"], {
      show: this.state.viewRevolution,
      onClose: this.timerCloseContent,
      id: "revContent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 13
      }
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "148974471",
      __self: this
    }, ".fadeIn.jsx-148974471{opacity:1;-webkit-transition:opacity 0.5s linear;transition:opacity 0.5s linear;z-Index:5;}.fadeOut.jsx-148974471{opacity:0;-webkit-transition:opacity 0.5s linear;transition:opacity 0.5s linear;pointer-events:none;}.App.jsx-148974471{text-align:center;height:100%;width:100%;}.Signature.jsx-148974471{font-family:Syncopate;color:rgb(192,192,192);position:fixed;left:-30px;top:-30px;z-index:5;opacity:1;pointer-events:none;}#logo.jsx-148974471{width:250px;max-width:250px;z-index:-1;pointer-events:none;}.sigText.jsx-148974471{font-family:Syncopate;font-size:2em;margin-top:-58%;margin-left:61%;border-top:1px solid red;border-bottom:1px solid red;width:7.5em;height:0.95em;}#revTag.jsx-148974471{color:red;z-index:2;height:100%;}#revLink.jsx-148974471{font-size:1.7em;height:100%;text-shadow:3px 3px black;}#banner.jsx-148974471{min-width:800px;width:80vw;margin:auto;color:white;z-index:1;opacity:0.8;}#bannerDiv.jsx-148974471{-webkit-transform:translate(0%,120px);-ms-transform:translate(0%,120px);transform:translate(0%,120px);}@media (max-width:720px){div.jsx-148974471 #bannerDiv.jsx-148974471{display:none;}}#buttonContainer.jsx-148974471{position:absolute;width:80%;left:50%;margin-top:150px;-webkit-transform:translate(-50%,-0%);-ms-transform:translate(-50%,-0%);transform:translate(-50%,-0%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vw;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}@media (max-width:720px){div.jsx-148974471 #buttonContainer.jsx-148974471{display:-webkit-inline-box;display:-webkit-inline-flexbox;display:-ms-inline-flexboxbox;display:inline-flexbox;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;width:150px;height:60%;top:60%;-webkit-transform:translate(-120%,-65%);-ms-transform:translate(-120%,-65%);transform:translate(-120%,-65%);margin-top:0;}}#corpButton.jsx-148974471{width:15vw;min-width:150px;min-height:150px;margin-left:4vw;}#smallButton.jsx-148974471{width:15vw;min-width:150px;min-height:150px;margin-left:4vw;margin-right:4vw;}#soloButton.jsx-148974471{width:15vw;min-width:150px;min-height:150px;margin-right:4vw;}#footerContainer.jsx-148974471{width:33%;position:fixed;-webkit-transform:translate(0%,600%);-ms-transform:translate(0%,600%);transform:translate(0%,600%);margin-top:11vw;}@media (max-width:720px){#footerContainer.jsx-148974471{width:100%;position:fixed;-webkit-transform:translate(70%,50%);-ms-transform:translate(70%,50%);transform:translate(70%,50%);margin-top:0%;}}#soloButton.jsx-148974471{z-index:20;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNLc0IsQUFJdUIsQUFNQSxBQU9RLEFBTUksQUFXVixBQU9VLEFBV1osQUFNTSxBQU9BLEFBVW5CLEFBS2tCLEFBS0ssQUFZSyxBQVdkLEFBT0EsQUFRQSxBQU9DLEFBUUMsQUFRRixVQTdJb0IsQUFNQSxBQTBDckIsQUE4RU8sQ0F0QkQsQUFPQSxBQVFBLEFBZUMsQUFRbkIsQ0FoSGtCLENBOENoQixHQXRCWSxBQU9ELEVBaERDLEFBb0VBLEVBaENBLEVBOUJhLEFBa0JYLEdBMEZrQixDQVFBLENBekVwQixBQTJDSyxBQU9BLEFBUUEsQ0F6Rk4sQUF3QmUsQUEyQmYsRUFwRUEsRUFvQ2IsSUFaa0IsQ0E2Q0csRUFuREMsQUErQlIsRUFoRGQsR0EyRmtCLEFBT0EsQUFRQyxDQXJHRixNQTRDTCxDQXpCTSxFQWtCbEIsQUEyQm1DLEtBbkRuQyxDQVphLEFBc0ZiLEFBT21CLENBakRMLEFBeURkLE9BbEYyQixHQWxCZixFQTRDWixJQWlEQSxHQWxIWSxBQU1VLENBZ0JWLFNBckJaLENBc0JZLEVBaUJrQixPQWpDOUIsQ0FpQnNCLENBNkN0QixTQXVCaUMsVUFuRWpDLEFBZ0JjLEdBc0ZNLENBUUYsUUE3RkYsTUE4RmhCLENBUkEsT0FyRkEsU0F5Q2lCLDBFQUNELElBUUEsUUFQaUIsSUFRbEIsV0FDSCxRQUN5QixvR0FUckMsUUFVaUIsYUFDZiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFja2dyb3VuZFZpZGVvIGZyb20gJy4uL3B1YmxpYy92aWRlby9CYWNrZ3JvdW5kVmlkZW8nO1xuaW1wb3J0IGNjb25UcmlhbmdsZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2Njb25UcmlhbmdsZS5wbmcnO1xuaW1wb3J0IFNvbG9CdXR0b24gZnJvbSAnLi9Tb2xvQnV0dG9uJztcbmltcG9ydCBTbWFsbEJ1dHRvbiBmcm9tICcuL1NtYWxsQnV0dG9uJztcbmltcG9ydCBDb3JwQnV0dG9uIGZyb20gJy4vQ29ycEJ1dHRvbic7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xuaW1wb3J0IFNsaWRlclNvbG8gZnJvbSAnLi9TbGlkZXJTb2xvJztcbmltcG9ydCBTbGlkZXJTbWFsbCBmcm9tICcuL1NsaWRlclNtYWxsJztcbmltcG9ydCBTbGlkZXJDb3JwIGZyb20gJy4vU2xpZGVyQ29ycCc7XG5pbXBvcnQgQ29udGFjdENvbnRlbnQgZnJvbSAnLi9Db250YWN0Q29udGVudCc7XG5pbXBvcnQgUmV2b2x1dGlvbiBmcm9tICcuL1Jldm9sdXRpb24nO1xuaW1wb3J0IFdvcmRMb29wIGZyb20gJy4vVGV4dExvb3AnO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgLy8gU3RhdGUgbWFuYWdlbWVudCBhbmQgYmluZGluZ3NcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlld1NvbG86IGZhbHNlLFxuICAgICAgdmlld1NtYWxsOiBmYWxzZSxcbiAgICAgIHZpZXdDb3JwOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRQYWdlOiAxLFxuICAgICAgdmlld0NvbnRhY3Q6IGZhbHNlLFxuICAgICAgdmlld1Jldm9sdXRpb246IGZhbHNlLFxuICAgICAgYnV0dG9uRmFkZTogXCJmYWRlSW5cIixcbiAgICAgIGNvbnRlbnRGYWRlOiBcImZhZGVPdXRcIixcbiAgICAgIGFycm93RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICByZW5kZXJCdXR0b25zOiB0cnVlLFxuICAgIH07XG5cbiAgICB0aGlzLnNlZVNvbG8gPSB0aGlzLnNlZVNvbG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlQWxsID0gdGhpcy5jbG9zZUFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlU21hbGwgPSB0aGlzLnNlZVNtYWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVDb3JwID0gdGhpcy5zZWVDb3JwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVDb250YWN0ID0gdGhpcy5zZWVDb250YWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVSZXZvbHV0aW9uID0gdGhpcy5zZWVSZXZvbHV0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy50aW1lckNsb3NlQ29udGVudCA9IHRoaXMudGltZXJDbG9zZUNvbnRlbnQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIG9iamVjdHNcblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdTb2xvOiBmYWxzZSxcbiAgICAgIHZpZXdTbWFsbDogZmFsc2UsXG4gICAgICB2aWV3Q29ycDogZmFsc2UsXG4gICAgICBjb250ZW50UGFnZTogMSxcbiAgICAgIHZpZXdDb250YWN0OiBmYWxzZSxcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiBmYWxzZSxcbiAgICAgIGJ1dHRvbkZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBjb250ZW50RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICBhcnJvd0ZhZGU6IFwiZmFkZU91dFwiLFxuICAgIH0pO1xuICB9XG5cbiAgdGltZXJDbG9zZUNvbnRlbnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBidXR0b25GYWRlOiBcImZhZGVJblwiLFxuICAgICAgY29udGVudEZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgYXJyb3dGYWRlOiBcImZhZGVPdXRcIixcbiAgICB9KVxuICAgIHNldFRpbWVvdXQodGhpcy5jbG9zZUFsbCwgNTAwKTtcbiAgfVxuXG4gIHNlZVNvbG8oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3U29sbzogdHJ1ZSxcbiAgICAgIGJ1dHRvbkZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgY29udGVudEZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBhcnJvd0ZhZGU6IFwiZmFkZUluXCIsXG4gICAgfSk7XG4gIH1cblxuICBzZWVTbWFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdTbWFsbDogdHJ1ZSxcbiAgICAgIGJ1dHRvbkZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgY29udGVudEZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBhcnJvd0ZhZGU6IFwiZmFkZUluXCIsXG4gICAgfSk7XG4gIH1cblxuICBzZWVDb3JwKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld0NvcnA6IHRydWUsXG4gICAgICBidXR0b25GYWRlOiBcImZhZGVPdXRcIixcbiAgICAgIGNvbnRlbnRGYWRlOiBcImZhZGVJblwiLFxuICAgICAgYXJyb3dGYWRlOiBcImZhZGVJblwiLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlQ29udGFjdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdDb250YWN0OiB0cnVlLFxuICAgICAgYnV0dG9uRmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICBjb250ZW50RmFkZTogXCJmYWRlSW5cIixcbiAgICAgIGFycm93RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgfSk7XG4gIH1cblxuICBzZWVSZXZvbHV0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1Jldm9sdXRpb246IHRydWUsXG4gICAgICBidXR0b25GYWRlOiBcImZhZGVPdXRcIixcbiAgICAgIGNvbnRlbnRGYWRlOiBcImZhZGVJblwiLFxuICAgICAgYXJyb3dGYWRlOiBcImZhZGVPdXRcIixcbiAgICB9KTtcbiAgfVxuICBcblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cblxuICAgICAgICA8QmFja2dyb3VuZFZpZGVvIHR5cGU9J3ZpZGVvL21wNCcgYXV0b3BsYXkgbXV0ZSAvPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaWduYXR1cmVcIj5cbiAgICAgICAgPGltZyBpZD1cImxvZ29cIiBzcmM9e2Njb25UcmlhbmdsZX0gLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzaWdUZXh0XCI+XG4gICAgICAgICAgICAgICAgTUVUQUxTXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiBcbiAgICAgICAgPGRpdiBpZD0nYmFubmVyRGl2Jz5cbiAgICAgICAgICA8aDIgaWQ9XCJiYW5uZXJcIj5cbiAgICAgICAgICAgIDxhIGlkPVwicmV2TGlua1wiIG9uQ2xpY2s9e3RoaXMuc2VlUmV2b2x1dGlvbn0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PFdvcmRMb29wIGlkPVwidGV4dC1sb29wXCIgLz48L2E+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbkNvbnRhaW5lclwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5idXR0b25GYWRlfT5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlU29sb30gIGlkPVwic29sb0J1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PlxuICAgICAgICAgICAgICA8U29sb0J1dHRvbiAvPlxuICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZVNtYWxsfSAgaWQ9XCJzbWFsbEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PlxuICAgICAgICAgICAgICA8U21hbGxCdXR0b24gLz5cbiAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVDb3JwfSAgaWQ9XCJjb3JwQnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+XG4gICAgICAgICAgICAgIDxDb3JwQnV0dG9uIC8+XG4gICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImZvb3RlckNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVDb250YWN0fSBpZD1cImNvbnRhY3RCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fSBpZD1cImZvb3RlckxpbmtcIj5cbiAgICAgICAgICAgICAgICAgIDxDb250YWN0IC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNvbnRlbnRGYWRlfT5cbiAgICAgICAgICAgIDxTbGlkZXJTb2xvIHNob3c9e3RoaXMuc3RhdGUudmlld1NvbG99IG9uQ2xvc2U9e3RoaXMudGltZXJDbG9zZUNvbnRlbnR9IGlkPVwic29sb0NvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPFNsaWRlclNtYWxsIHNob3c9e3RoaXMuc3RhdGUudmlld1NtYWxsfSBvbkNsb3NlPXt0aGlzLnRpbWVyQ2xvc2VDb250ZW50fSBpZD1cInNtYWxsQ29udGVudFwiIC8+XG4gICAgICAgICAgICA8U2xpZGVyQ29ycCBzaG93PXt0aGlzLnN0YXRlLnZpZXdDb3JwfSBvbkNsb3NlPXt0aGlzLnRpbWVyQ2xvc2VDb250ZW50fSBpZD1cImNvcnBDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxDb250YWN0Q29udGVudCBzaG93PXt0aGlzLnN0YXRlLnZpZXdDb250YWN0fSBvbkNsb3NlPXt0aGlzLnRpbWVyQ2xvc2VDb250ZW50fSBpZD1cImNvbnRhY3RDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxSZXZvbHV0aW9uIHNob3c9e3RoaXMuc3RhdGUudmlld1Jldm9sdXRpb259IG9uQ2xvc2U9e3RoaXMudGltZXJDbG9zZUNvbnRlbnR9IGlkPVwicmV2Q29udGVudFwiIC8+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgIC5mYWRlSW4ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gICAgICAgICAgICB6LUluZGV4OiA1O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mYWRlT3V0IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAuQXBwIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuU2lnbmF0dXJlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTeW5jb3BhdGU7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgbGVmdDogLTMwcHg7XG4gICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2xvZ28ge1xuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5zaWdUZXh0IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTeW5jb3BhdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01OCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNjElO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICB3aWR0aDogNy41ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDAuOTVlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjcmV2VGFnIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjcmV2TGluayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggYmxhY2s7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjYmFubmVyIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogODAwcHg7XG4gICAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNiYW5uZXJEaXYge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDEyMHB4KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCl7XG5cbiAgICAgICAgICAgIGRpdiAjYmFubmVyRGl2e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICNidXR0b25Db250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0wJSk7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTV2dztcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgICBkaXYgI2J1dHRvbkNvbnRhaW5lcntcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXhib3g7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICAgICAgICB0b3A6IDYwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMCUsIC02NSUpO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjY29ycEJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDR2dztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjc21hbGxCdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0dnc7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDR2dztcbiAgICAgICAgICB9XG4gICBcbiAgICAgICAgICAjc29sb0J1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0dnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNmb290ZXJDb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA2MDAlKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTF2dztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAgICNmb290ZXJDb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3MCUsIDUwJSk7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3NvbG9CdXR0b257XG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgICB9XG4gICAgIFxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\App.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

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
      className: "jsx-851640524",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-851640524" + " " + "mdiv",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "jsx-851640524" + " " + "md",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "851640524",
      __self: this
    }, "#mdiv.jsx-851640524{width:25px;height:25px;opacity:0.8;position:absolute;z-index:40;}.mdiv.jsx-851640524{height:25px;width:4px;margin-left:12px;background-color:black;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);Z-index:11;}.md.jsx-851640524{height:25px;width:4px;background-color:black;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);Z-index:22;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ2xvc2VCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JtQixBQUlnQyxBQVFDLEFBU0EsV0FoQkEsQ0FRRixBQVNBLFVBUk8sQUFTTSxDQWpCWCxZQUNNLElBUUssTUFTQyxRQWhCYixTQVFhLEVBUDFCLGlFQWdCYSxXQUNiLE1BVGEsV0FDYiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXENsb3NlQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIENsb3NlQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwibWRpdlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI21kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDQwO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAubWRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIFotaW5kZXg6IDExO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAubWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICBaLWluZGV4OiAyMjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xvc2VCdXR0b247Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\CloseButton.js */"));
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
      className: "jsx-1198475696" + " " + "contactButton",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 15
      }
    }, "Contact Us", __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1198475696",
      __self: this
    }, ".contactButton.jsx-1198475696{background-color:hsl(0,0%,90%);box-shadow:inset hsla(0,0%,15%,1) 0 0px 0px 4px, inset hsla(0,0%,15%,.8) 0 -1px 5px 4px, inset hsla(0,0%,0%,.25) 0 -1px 0px 7px, inset hsla(0,0%,100%,.7) 0 2px 1px 7px,  hsla(0,0%,0%,.15) 0 -5px 6px 4px, hsla(0,0%,100%,.5) 0 5px 6px 4px;width:100%;height:5vh;background-color:rgb(160,193,255);font-size:3vh;margin-bottom:auto;border-radius:8px;background-image: -webkit-repeating-linear-gradient(left,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 6%,hsla(0,0%,100%,.1) 7.5%), -webkit-repeating-linear-gradient(left,hsla(0,0%,0%,0) 0%,hsla(0,0%,0%,0) 4%,hsla(0,0%,0%,.03) 4.5%), -webkit-repeating-linear-gradient(left,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 1.2%,hsla(0,0%,100%,.15) 1.5%),  linear-gradient(180deg,hsl(0,0%,78%) 0%,hsl(0,0%,90%) 47%,hsl(0,0%,78%) 53%,hsl(0,0%,70%)100%);}.contactButton.jsx-1198475696:active{color:hsl(210,100%,40%);text-shadow:hsla(210,100%,20%,.3) 0 -1px 0,hsl(210,100%,85%) 0 2px 1px,hsla(200,100%,80%,1) 0 0 5px,hsla(210,100%,50%,.6) 0 0 20px;box-shadow: inset hsla(210,100%,30%,1) 0 0px 0px 4px, inset hsla(210,100%,15%,.4) 0 -1px 5px 4px, inset hsla(210,100%,20%,.25) 0 -1px 0px 7px, inset hsla(210,100%,100%,.7) 0 2px 1px 7px,  hsla(210,100%,75%,.8) 0 0px 3px 2px, hsla(210,50%,40%,.25) 0 -5px 6px 4px, hsla(210,80%,95%,1) 0 5px 6px 4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhdUIsQUFJd0QsQUF3Qkwsd0JBQzRHLE9BbEJyRyw0SEEyQk0saUhBekI1QixXQUNBLFdBQ3lCLGtDQUN0QixjQUNLLG1CQUNELGtCQU1nRiw2RUFldEcsb1dBZEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxDb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdEJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAuY29udGFjdEJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLDAlLDkwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IGhzbGEoMCwwJSwxNSUsICAxKSAwICAwcHggMHB4IDRweCwgLyogYm9yZGVyICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwxNSUsIC44KSAwIC0xcHggNXB4IDRweCwgLyogc29mdCBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDAsMCUsMCUsIC4yNSkgMCAtMXB4IDBweCA3cHgsIC8qIGJvdHRvbSBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDAsMCUsMTAwJSwuNykgMCAgMnB4IDFweCA3cHgsIC8qIHRvcCBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgwLDAlLCAwJSwuMTUpIDAgLTVweCA2cHggNHB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDAsMCUsMTAwJSwuNSkgMCAgNXB4IDZweCA0cHg7IC8qIG91dGVyIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDV2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMTkzLCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDN2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KGxlZnQsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAgIDYlLCBoc2xhKDAsMCUsMTAwJSwgLjEpIDcuNSUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQobGVmdCwgaHNsYSgwLDAlLCAgMCUsMCkgMCUsIGhzbGEoMCwwJSwgIDAlLDApICAgNCUsIGhzbGEoMCwwJSwgIDAlLC4wMykgNC41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChsZWZ0LCBoc2xhKDAsMCUsMTAwJSwwKSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMS4yJSwgaHNsYSgwLDAlLDEwMCUsLjE1KSAxLjUlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgxODBkZWcsIGhzbCgwLDAlLDc4JSkgIDAlLCBoc2woMCwwJSw5MCUpIDQ3JSwgaHNsKDAsMCUsNzglKSA1MyUsaHNsKDAsMCUsNzAlKTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIC5jb250YWN0QnV0dG9uOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2woMjEwLCAxMDAlLCA0MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogaHNsYSgyMTAsMTAwJSwyMCUsLjMpIDAgLTFweCAwLCBoc2woMjEwLDEwMCUsODUlKSAwIDJweCAxcHgsIGhzbGEoMjAwLDEwMCUsODAlLDEpIDAgMCA1cHgsIGhzbGEoMjEwLDEwMCUsNTAlLC42KSAwIDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwzMCUsICAxKSAwICAwcHggMHB4IDRweCwgLyogYm9yZGVyICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwxNSUsIC40KSAwIC0xcHggNXB4IDRweCwgLyogc29mdCBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMjAlLC4yNSkgMCAtMXB4IDBweCA3cHgsIC8qIGJvdHRvbSBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMTAwJSwuNykgMCAgMnB4IDFweCA3cHgsIC8qIHRvcCBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDEwMCUsNzUlLCAuOCkgMCAgMHB4IDNweCAycHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsNTAlLDQwJSwgLjI1KSAwIC01cHggNnB4IDRweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCw4MCUsOTUlLCAgIDEpIDAgIDVweCA2cHggNHB4OyAvKiBvdXRlciBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\Contact.js */"));
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
        className: "jsx-3093267444",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }
      }, __jsx("p", {
        id: "contactText",
        className: "jsx-3093267444",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 15
        }
      }, "Contact info goes here"), __jsx("div", {
        className: "jsx-3093267444" + " " + "contentCanvas",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 15
        }
      }, __jsx("img", {
        id: "mapImg",
        src: _public_assets_map_image_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        className: "jsx-3093267444",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }
      })), __jsx("a", {
        onClick: this.props.onClose,
        id: "closeLink",
        className: "jsx-3093267444",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 15
        }
      }, __jsx(_CloseButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 62
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "3093267444",
        __self: this
      }, "#closeLink.jsx-3093267444{position:absolute;width:25px;height:25px;cursor:pointer;right:1%;top:1%;}#contentContainer.jsx-3093267444{position:absolute;margin-top:100px;height:60vh;margin-left:10%;width:80vw;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;min-width:450px;}@media (max-width:720px){#contentContainer.jsx-3093267444{height:73vh;min-height:575px;top:9%;}}#mapImg.jsx-3093267444{width:100%;height:80%;border-radius:12px;position:relative;-webkit-transform:translate(0%,12.5%);-ms-transform:translate(0%,12.5%);transform:translate(0%,12.5%);}@media (max-width:720px){#mapImg.jsx-3093267444{height:300px;}}.contentCanvas.jsx-3093267444{width:55%;height:100%;-webkit-transform:translate(0%,0%);-ms-transform:translate(0%,0%);transform:translate(0%,0%);right:0px;position:absolute;margin-right:5%;}@media (max-width:720px){.contentCanvas.jsx-3093267444{width:90%;}}#contactText.jsx-3093267444{width:40%;position:absolute;top:40%;}@media (max-width:720px){#contactText.jsx-3093267444{width:80%;position:absolute;top:70%;left:10%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29udGFjdENvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JxQixBQUlxQyxBQVNBLEFBYUosQUFPSCxBQVNJLEFBS0wsQUFVRSxBQUtGLEFBT0UsVUFyQkEsQUFVWixBQUtrQixBQU9FLENBcENULENBUFEsQ0FnQm5CLEtBdENXLEFBU00sSUFxQkUsQUFjUyxNQWVwQixBQU9FLENBakVFLEFBc0JILE1BYkcsQ0FjWixBQW9DRixBQVFDLEtBbEVnQixBQTZCRyxJQXFDbEIsRUF6RGdCLFNBUlAsR0E2QnNCLElBcEJwQixFQVJKLE9BQ1AsRUFRMmtFLHlDQWdDamtFLFVBQ1Esa0JBQ0YsZ0JBQ2xCLEVBZkEsby9EQW5Cb0Msa0NBQ2hCLGtCQUNGLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXENvbnRhY3RDb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1hcEltYWdlIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvbWFwLWltYWdlLnBuZyc7XHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICcuL0Nsb3NlQnV0dG9uJztcclxuXHJcbmNsYXNzIENvbnRhY3RDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5zaG93KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgaWQ9XCJjb250YWN0VGV4dFwiPkNvbnRhY3QgaW5mbyBnb2VzIGhlcmU8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGlkPVwibWFwSW1nXCIgIHNyYz17TWFwSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0gaWQ9XCJjbG9zZUxpbmtcIj48Q2xvc2VCdXR0b24gaWQ9XCJjbG9zZVwiIC8+PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAjY2xvc2VMaW5rIHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxJTtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAxJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogODB2dztcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbVpnTTVEY3MzWVNORkRIVW8yTEdmWnV1a1NXeVVZaXJKQWRZYkYzTWZxRUttak0rSTJFZmhBOTRpRzNMN3VLclIrR2RXRDczeWRsSUIrNmhncmVmMVFUbG1nbWJNMy9MZVg1R0kxVXgxUldwZ3hwTHVaMitJK0lqelo4d3FFNG5pbHZRZGtVZGZoekk1UURXeStrdzVXZ2cycEdwZUVWZUNDQTdiODVCTzNGOUR6eEIzY2RxdkJ6V2NtemJ5TWlxaHp1WXF0SFJWRzJ5NHgrS09sbnlxbGE4QW9XV3B1Qm9ZUnh6WHJmS3VJTGw2U2ZpV0NianhvWkpVYUNCajFDakg3R0lhRGJjOWtxQlkzVy9SZ2pkYTFpcVFjT0p1MldXKzc2cFpDOVFHN00wMGRmZmU5aE5uc2V1cEZMNTNyOEY3WUhTd0pXVUtQMnErazdSZHN4eU9CMTFuMHh0T3ZuVzRpck1NRk5WNEgwdXF3UzVFeHNtUDlBeGJEVGM5SndnbmVBVDV2VGlVU20xRTdCU2ZsU3QzYmZhMXR2OERpM1I4bjNBZjdNTld6czQ5aG1hdUUyd1ArdHRycStBc1dwRkcyYXd2c3VPcWJpcFdIZ3R1dnVhQUUrQTFaLzdnQzloZXNucis3d3FDd0c4YzV5QWczQUwxZm04VDlBWnRwL2JiSkd3bDFwTnJFN1J1T1g3UGVNUlVFUlZhUHBFcyt5cWVvU211T2xva3F3NDlwZ29takxlaDdpY0hObEcxOXlqczZYWE9NZWRZbTV4SDJZeHBWMnRjMFJvMmpKZnhDNTBBcHV4R29iN2xNc3hmVGJlVXYwN1R5WXhwZUx1Y0VIMWdOZDRJS0gyTEFnNVRkVmhsQ2FmWnZwc2tmbmNDZng4cE9oSnpkNzZiSldlWUZuRmNpd2NZZnViUmMxMklwL3BwSWhBMS9tU1ovUnhqRkRySkM1eGlmRmpKcFkyWGw1elhkZ3VGcVl5VFIxelNwMVk5cCt0a3REWVlTTmZsY3hJMGl5TzRUUEJkbFJjcGVxaksvcGlGNWJrbHE3N1ZTRWFBK3o4cW1KVEZ6SVdpaXRibnpSNzk0VVNLQlVhVDBOVEVzVmpacUxhRlZxSm9QTjlPREc3MElQYmZCSEtLKy9xL0FXUjB0SnpZSFJVTE9hNE1QK1cvSGZHYWRaVWJmdzE3N0c3ai9PR2JJczhUYWhMeXlubDRYNFJpbkY3OTNPeitCVTBzYVh0VUhyVkJGVC9EbkEzY3ROUG9HYnM0aFJJalRvazhpK2FsZ1QxbFRIaTRTeEZ2T05LTnJnUUZBcTIvZ0ZuV01YZ3dmZmdZTUpwaUtZa21XM3RUZzNaUTlKcStmOFhOK0E1ZWVVS0hXdkpXSjJzZ0oxU29wK3d3aHFGVmlqcVdhSmh3dEQ4TU5sU0JlV05OV1RhNVo1a1BadzUrTGJWVDk5d3FUZHgyOWxNVUg0T0lHL0Q4NnJ1S0VhdUJqdkg1eHk2dW0vU2ZqN2VpNlVVVms0QUlsM015RDRNU1NUT0ZnU3dzSC9RSldhUTVhczdaY21nQlprempqVTFVclE3NGNpMWdXQkNTR0h0dVYxSDJtaFNuTzNXcC8zZkVWNWErNHd6Ly82cXk4SnhqWnNteHh5NSs0dzlDRE5KWTA5VDA3MmlLRzBFbk9TMGFyRVlnWHFZblhjWUh3alR0VU5BY01lbE9kNHhwa29xaVRZSUNXRnEwSlNpUGZQRFFkbnQrNC93dXFjWFk0N1FJTGJnQUFBQUJKUlU1RXJrSmdnZz09Jyk7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzN2aDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDklO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICNtYXBJbWcge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDEyLjUlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgI21hcEltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjY29udGFjdFRleHQge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAjY29udGFjdFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwJVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgKX0gZWxzZSB7XHJcbiAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdENvbnRlbnQ7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\ContactContent.js */"));
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
      className: "jsx-101393221",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, __jsx("div", {
      id: "circle",
      className: "jsx-101393221",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: _public_assets_factory_figure_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      className: "jsx-101393221" + " " + "corpButtonImage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }
    })), __jsx("div", {
      id: "corpButtonTag",
      className: "jsx-101393221",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, __jsx(_CorpExplain__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 23
      }
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "101393221",
      __self: this
    }, "#circle.jsx-101393221{background-color:hsl(0,0%,90%);box-shadow:inset hsla(0,0%,15%,1) 0 0px 0px 4px, inset hsla(0,0%,15%,.8) 0 -1px 5px 4px, inset hsla(0,0%,0%,.25) 0 -1px 0px 7px, inset hsla(0,0%,100%,.7) 0 2px 1px 7px,  hsla(0,0%,0%,.15) 0 -5px 6px 4px, hsla(0,0%,100%,.5) 0 5px 6px 4px;-webkit-transition:color .2s;transition:color .2s;min-width:150px;min-height:150px;width:15vw;height:15vw;line-height:1px;border-radius:50%;background-image: -webkit-radial-gradient( 50% 0%,8% 50%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 50% 100%,12% 50%,hsla(0,0%,100%,.6) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 0% 50%,50% 7%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 100% 50%,50% 5%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%),  -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,0%,0) 0%,hsla(0,0%,0%,0) 3%,hsla(0,0%,0%,.1) 3.5%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 6%,hsla(0,0%,100%,.1) 7.5%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 1.2%,hsla(0,0%,100%,.2) 2.2%),  -webkit-radial-gradient( 50% 50%,200% 50%,hsla(0,0%,90%,1) 5%,hsla(0,0%,85%,1) 30%,hsla(0,0%,60%,1) 100%);}#circle.jsx-101393221:before,#circle.jsx-101393221:after{content:\"\";top:0%;left:0%;position:relative;width:inherit;height:inherit;border-radius:inherit;background-image: -webkit-radial-gradient( 50% 0%,10% 50%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 50% 100%,10% 50%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 0% 50%,50% 10%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 100% 50%,50% 06%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%);}#circle.jsx-101393221:before{-webkit-transform:rotate( 65deg);-ms-transform:rotate( 65deg);transform:rotate( 65deg);}#circle.jsx-101393221:after{-webkit-transform:rotate(-65deg);-ms-transform:rotate(-65deg);transform:rotate(-65deg);}#circle.jsx-101393221:active{color:hsl(210,100%,40%);text-shadow:hsla(210,100%,20%,.3) 0 -1px 0,hsl(210,100%,85%) 0 2px 1px,hsla(200,100%,80%,1) 0 0 5px,hsla(210,100%,50%,.6) 0 0 20px;box-shadow: inset hsla(210,100%,30%,1) 0 0px 0px 4px, inset hsla(210,100%,15%,.4) 0 -1px 5px 4px, inset hsla(210,100%,20%,.25) 0 -1px 0px 7px, inset hsla(210,100%,100%,.7) 0 2px 1px 7px,  hsla(210,100%,75%,.8) 0 0px 3px 2px, hsla(210,50%,40%,.25) 0 -5px 6px 4px, hsla(210,80%,95%,1) 0 5px 6px 4px;}div.jsx-101393221 #buttons.jsx-101393221{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}@media (max-width:720px){div.jsx-101393221 #buttons.jsx-101393221{height:150px;width:150px;}}@media (max-width:720px){#corpButtonTag.jsx-101393221{position:absolute;-webkit-transform:translate(140%,-90%);-ms-transform:translate(140%,-90%);transform:translate(140%,-90%);}}.corpButtonImage.jsx-101393221{position:relative;height:60%;width:80%;min-width:100px;min-height:90px;-webkit-transform:translate(0%,30%);-ms-transform:translate(0%,30%);transform:translate(0%,30%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycEJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQnVCLEFBSTBELEFBaUNwQixBQWU0QixBQUNELEFBR1osQUFrQkQsQUFPUixBQU9LLEFBTUosV0F4RFgsRUE0Q1MsS0EzQ1IsQUFtRFAsQUFLVSxNQXRDeUgsQ0EwQmxJLENBM0NnQixHQXdEUixFQXJGdUIsUUFzRmpCLEtBeERGLFdBeURFLEdBeERELGFBeURjLEVBeERQLGNBU2tCLEFBQ0QsUUFIZ0QsSUF5QmhFLHdCQWVyQixnQ0F4Qm1DLFlBa0N2QyxRQXZCRSw2RkFoRXFCLGtEQUdMLGdCQUNDLGlCQUNOLFdBQ0MsWUFDSSxnQkFDRSxrQkFXMkYsZ0NBbUIvRyxZQWdCQSxzeEJBakNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycEJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb3JwSW1hZ2UgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9mYWN0b3J5LWZpZ3VyZS5wbmcnO1xyXG5pbXBvcnQgQ29ycEV4cGxhaW4gZnJvbSAnLi9Db3JwRXhwbGFpbic7XHJcblxyXG5jbGFzcyBDb3JwQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY29ycEJ1dHRvbkltYWdlXCIgc3JjPXtDb3JwSW1hZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvcnBCdXR0b25UYWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb3JwRXhwbGFpbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGUge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsMCUsOTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCBoc2xhKDAsMCUsMTUlLCAgMSkgMCAgMHB4IDBweCA0cHgsIC8qIGJvcmRlciAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwxNSUsIC44KSAwIC0xcHggNXB4IDRweCwgLyogc29mdCBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwwJSwgLjI1KSAwIC0xcHggMHB4IDdweCwgLyogYm90dG9tIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDEwMCUsLjcpIDAgIDJweCAxcHggN3B4LCAvKiB0b3AgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDAsMCUsIDAlLC4xNSkgMCAtNXB4IDZweCA0cHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgwLDAlLDEwMCUsLjUpIDAgIDVweCA2cHggNHB4OyAvKiBvdXRlciBITCAqLyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogQnJ1c2hlZCBNZXRhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlICAgMCUsICA4JSA1MCUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgMTAwJSwgMTIlIDUwJSwgaHNsYSgwLDAlLDEwMCUsLjYpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggICAwJSAgNTAlLCA1MCUgIDclLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAxMDAlICA1MCUsIDUwJSAgNSUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwgIDAlLDApIDAlLCBoc2xhKDAsMCUsICAwJSwwKSAgIDMlLCBoc2xhKDAsMCUsICAwJSwuMSkgMy41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAgIDYlLCBoc2xhKDAsMCUsMTAwJSwuMSkgNy41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxLjIlLCBoc2xhKDAsMCUsMTAwJSwuMikgMi4yJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDIwMCUgNTAlLCBoc2xhKDAsMCUsOTAlLDEpIDUlLCBoc2xhKDAsMCUsODUlLDEpIDMwJSwgaHNsYSgwLDAlLDYwJSwxKSAxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmJlZm9yZSwgI2NpcmNsZTphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBmYWtlIGNvbmljYWwgZ3JhZGllbnRzICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAgIDAlLCAxMCUgNTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgMTAwJSwgMTAlIDUwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgIDAlICA1MCUsIDUwJSAxMCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggMTAwJSAgNTAlLCA1MCUgMDYlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YmVmb3JlIHsgdHJhbnNmb3JtOiByb3RhdGUoIDY1ZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmFmdGVyIHsgdHJhbnNmb3JtOiByb3RhdGUoLTY1ZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsKDIxMCwgMTAwJSwgNDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IGhzbGEoMjEwLDEwMCUsMjAlLC4zKSAwIC0xcHggMCwgaHNsKDIxMCwxMDAlLDg1JSkgMCAycHggMXB4LCBoc2xhKDIwMCwxMDAlLDgwJSwxKSAwIDAgNXB4LCBoc2xhKDIxMCwxMDAlLDUwJSwuNikgMCAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMzAlLCAgMSkgMCAgMHB4IDBweCA0cHgsIC8qIGJvcmRlciAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMTUlLCAuNCkgMCAtMXB4IDVweCA0cHgsIC8qIHNvZnQgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDIwJSwuMjUpIDAgLTFweCAwcHggN3B4LCAvKiBib3R0b20gU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDEwMCUsLjcpIDAgIDJweCAxcHggN3B4LCAvKiB0b3AgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCwxMDAlLDc1JSwgLjgpIDAgIDBweCAzcHggMnB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDUwJSw0MCUsIC4yNSkgMCAtNXB4IDZweCA0cHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsODAlLDk1JSwgICAxKSAwICA1cHggNnB4IDRweDsgLyogb3V0ZXIgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBFbmQgQnJ1c2hlZCBNZXRhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2ICNidXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiAjYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NvcnBCdXR0b25UYWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0MCUsIC05MCUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvcnBCdXR0b25JbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAzMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29ycEJ1dHRvbjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\CorpButton.js */"));
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
      className3: "flipCard"
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
      className1: "flipCard is-flipped"
    });
  }

  unflip1() {
    this.setState({
      className1: "flipCard"
    });
  }

  flip2() {
    this.setState({
      className2: "flipCard is-flipped"
    });
  }

  unflip2() {
    this.setState({
      className2: "flipCard"
    });
  }

  flip3() {
    this.setState({
      className3: "flipCard is-flipped"
    });
  }

  unflip3() {
    this.setState({
      className3: "flipCard"
    });
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-400967853",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-400967853" + " " + "contentCanvas contentCanvas--card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "flipContainer1",
      onMouseEnter: this.flip1,
      onMouseLeave: this.unflip1,
      className: "jsx-400967853" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-400967853" + " " + (this.state.className1 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/truck.jpg */ "./public/assets/truck.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-400967853" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-400967853" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/truck.jpg */ "./public/assets/truck.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-400967853",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-400967853" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 27
      }
    }, "Card 1 Back")))), __jsx("div", {
      id: "flipContainer2",
      onMouseEnter: this.flip2,
      onMouseLeave: this.unflip2,
      className: "jsx-400967853" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card2",
      className: "jsx-400967853" + " " + (this.state.className2 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/pile-of-cats.jpg */ "./public/assets/pile-of-cats.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-400967853" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-400967853" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/pile-of-cats.jpg */ "./public/assets/pile-of-cats.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-400967853",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-400967853" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 27
      }
    }, "Card 2 Back")))), __jsx("div", {
      id: "flipContainer3",
      onMouseEnter: this.flip3,
      onMouseLeave: this.unflip3,
      className: "jsx-400967853" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-400967853" + " " + (this.state.className3 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/money.jpeg */ "./public/assets/money.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-400967853" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-400967853" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/money.jpeg */ "./public/assets/money.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-400967853",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-400967853" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 27
      }
    }, "Card 3 Back"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "400967853",
      __self: this
    }, ".cardText.jsx-400967853{position:absolute;height:100%;width:100%;-webkit-transform:translateY(-65%);-ms-transform:translateY(-65%);transform:translateY(-65%);}#contentContainer.jsx-400967853{position:absolute;height:100%;width:90%;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%);right:5%;overflow:hidden;border:5px solid silver;box-sizing:border-box;}@media (max-width:720px){#contentContainer.jsx-400967853{height:100%;min-height:575px;overflow:hidden;}}.contentCanvas.jsx-400967853{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}@media (max-width:720px){.contentCanvas.jsx-400967853{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:102%;width:100%;margin-top:0%;}}.flipCard.jsx-400967853{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}@media (max-width:720px){.flipCard.jsx-400967853{width:100%;height:100%;}}.card__face.jsx-400967853{position:absolute;height:100%;width:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;text-align:center;}.card__face--front.jsx-400967853{background:white;}.card__face--back.jsx-400967853{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCard.is-flipped.jsx-400967853{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}@media (max-width:720px){.card__face--back.jsx-400967853{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-400967853{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}}@media (max-width:720px){#card2.jsx-400967853{margin-top:-1%;}}@media (max-width:720px){#card3.jsx-400967853{margin-top:-1%;}}.flipCardContainer.jsx-400967853{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-400967853{width:100%;height:33%;margin-top:0%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycENvbnRlbnQxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdJaUIsQUFJdUMsQUFPQSxBQWdCSixBQVFKLEFBVW1CLEFBVWpCLEFBZUMsQUFNSyxBQVFELEFBSUEsQUFLVyxBQUtULEFBS1csQUFZL0IsQUFPQSxBQUltQixBQVdMLFVBckdELENBbUNFLEFBbUVELENBOUdNLEFBNEJILEdBMkRoQixBQU9BLEVBckNGLEFBSThCLEFBVUUsQ0E5RmxCLEFBT0EsQUFpRUEsSUF4Q0QsQUFzR0ssQ0FuRWhCLEtBZmdCLENBNUJFLENBdkJQLEFBT0QsQUFpRUMsR0F4Q0MsR0FzR1osSUE5SDJrRSxDQU45a0UsQUF1RThCLEdBckJoQixDQTNCWCxBQVFjLFVBb0JGLElBbEJkLFFBbUJZLFVBQ1csWUFrRVgsQ0FqRlMsTUFnRHJCLEFBVUUsRUExQzBCLENBa0VkLElBaERNLElBakNKLElBa0ZBLEVBdkNoQixBQVVFLE1BcERhLEVBaUNmLElBaURjLEtBakZJLElBekNsQixHQTJIdUIsT0FoRnJCLGNBa0ZGLDBDQXRFOEIsZ0dBQ1Ysa0JBQ0gsZUFDakIsMHlEQW5Eb0Msa0NBQ2hCLGtCQUNPLHVGQUNoQixTQUNPLGdCQUNRLHdCQUNGLHNCQUN4QiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXENvcnBDb250ZW50MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDb3JwQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZsaXAxID0gdGhpcy5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAxID0gdGhpcy51bmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAyID0gdGhpcy5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAyID0gdGhpcy51bmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAzID0gdGhpcy5mbGlwMy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAzID0gdGhpcy51bmZsaXAzLmJpbmQodGhpcyk7XHJcbn1cclxuXHJcbmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiB9KVxyXG59XHJcblxyXG5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMVwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMX0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTF9ICBpZD1cImNhcmQxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPVwic29sb1BybzFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvdHJ1Y2suanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy90cnVjay5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMSBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMlwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMn0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUyfSAgaWQ9XCJjYXJkMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3BpbGUtb2YtY2F0cy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3BpbGUtb2YtY2F0cy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMiBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyM1wiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwM30gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUzfSAgaWQ9XCJjYXJkMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL21vbmV5LmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL21vbmV5LmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMyBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjUlKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFVVkJNVkVXRmhZV0RnNE4zZDNkdGJXMTdlM3QxZFhXQmdZR0hoNGQ1ZVhsemMzT0xpNHVibTV1VmxaV1BqNCtOalkxOWZYMkppWWwvZjM5cmEydVJrWkdabVpscGFXbVhsNWR2YjI5eGNYR1RrNU5uWjJjOFRWMW1BQUFBRzNSU1RsTkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQXZFT3d0QUFBRlZrbEVRVlI0WHBXV0I2N2MyQlVGYjNnNTU3VC9oUm85L1dVTVpIbGdyNEJnOFo0cVFnUUpsSEk0QThTekZWcmFwdm1URjlPN2RtWVJGWjYwWWlCaEpSQ2doMUZZaGlMQW1kdlgwQ3pUT3BORTc3TUUwWnR5L25XV3pjaER0aXFybVFEZXV2M3Bvd1E1dGEyZU4wRlkwSW5rcURENzNsVDljOWxFendVTnFnRkhzOVZRY2UzVFZDbEZDUXJTVGZPaVlrVkpRQm1wYnEyTDZpWmF2UG5BUGNvVTBkU3cwU1VUcXovR3RyR3VYZmJ5eUJuaUt5a09XUVdHcXd3TUE3UWlZQXhpK0lsUGRxbytoWUhuVXQ1WlBmbnNISnlOaUR0bnBKeWF5TkJrRjZjV29ZR0FNWTkyVTJoWEhGL0MxTTh1UC9adFlkaXVqMjZVZEFkUVFTWFFFcndTT016dC9YV1JXQXo1R3VTQklrd0cxSDNGYWJKMk9zVU9VaEdDNnRLNEVNdEpPMHR0QzZJQkQza00wdmUwdEp3TWRTZmpabytFRUlTYWVUcjlQM3dZckdqWHF5QzFrcmNLZGhNcHhFbnQ1SmV0b3Vsc2NweXpoWE41RlJwdVBIdmJlUWFLeEZBRUI2RU4rY1lONnhEN1JZR3BYcE5uZE1tWmdNNURjczNZU05GREhVbzJMR2ZadXVrU1d5VVlpckpBZFliRjNNZnFFS21qTStJMkVmaEE5NGlHM0w3dUtyUitHZFdENzN5ZGxJQis2aGdyZWYxUVRsbWdtYk0zL0xlWDVHSTFVeDFSV3BneHBMdVoyK0krSWp6Wjh3cUU0bmlsdlFka1VkZmh6STVRRFd5K2t3NVdnZzJwR3BlRVZlQ0NBN2I4NUJPM0Y5RHp4QjNjZHF2QnpXY216YnlNaXFoenVZcXRIUlZHMnk0eCtLT2xueXFsYThBb1dXcHVCb1lSeHpYcmZLdUlMbDZTZmlXQ2JqeG9aSlVhQ0JqMUNqSDdHSWFEYmM5a3FCWTNXL1JnamRhMWlxUWNPSnUyV1crNzZwWkM5UUc3TTAwZGZmZTloTm5zZXVwRkw1M3I4RjdZSFN3SldVS1AycStrN1Jkc3h5T0IxMW4weHRPdm5XNGlyTU1GTlY0SDB1cXdTNUV4c21QOUF4YkRUYzlKd2duZUFUNXZUaVVTbTFFN0JTZmxTdDNiZmExdHY4RGkzUjhuM0FmN01OV3pzNDlobWF1RTJ3UCt0dHJxK0FzV3BGRzJhd3ZzdU9xYmlwV0hndHV2dWFBRStBMVovN2dDOWhlc25yKzd3cUN3RzhjNXlBZzNBTDFmbThUOUFadHAvYmJKR3dsMXBOckU3UnVPWDdQZU1SVUVSVmFQcEVzK3lxZW9TbXVPbG9rcXc0OXBnb21qTGVoN2ljSE5sRzE5eWpzNlhYT01lZFltNXhIMll4cFYydGMwUm8yakpmeEM1MEFwdXhHb2I3bE1zeGZUYmVVdjA3VHlZeHBlTHVjRUgxZ05kNElLSDJMQWc1VGRWaGxDYWZadnBza2ZuY0NmeDhwT2hKemQ3NmJKV2VZRm5GY2l3Y1lmdWJSYzEySXAvcHBJaEExL21TWi9SeGpGRHJKQzV4aWZGakpwWTJYbDV6WGRndUZxWXlUUjF6U3AxWTlwK3RrdERZWVNOZmxjeEkwaXlPNFRQQmRsUmNwZXFqSy9waUY1YmtscTc3VlNFYUErejhxbUpURnpJV2lpdGJuelI3OTRVU0tCVWFUME5URXNWalpxTGFGVnFKb1BOOU9ERzcwSVBiZkJIS0srL3EvQVdSMHRKellIUlVMT2E0TVArVy9IZkdhZFpVYmZ3MTc3RzdqL09HYklzOFRhaEx5eW5sNFg0UmluRjc5M096K0JVMHNhWHRVSHJWQkZUL0RuQTNjdE5Qb0diczRoUklqVG9rOGkrYWxnVDFsVEhpNFN4RnZPTktOcmdRRkFxMi9nRm5XTVhnd2ZmZ1lNSnBpS1lrbVczdFRnM1pROUpxK2Y4WE4rQTVlZVVLSFd2SldKMnNnSjFTb3Ard3docUZWaWpxV2FKaHd0RDhNTmxTQmVXTk5XVGE1WjVrUFp3NStMYlZUOTl3cVRkeDI5bE1VSDRPSUcvRDg2cnVLRWF1Qmp2SDV4eTZ1bS9TZmo3ZWk2VVVWazRBSWwzTXlENE1TU1RPRmdTd3NIL1FKV2FRNWFzN1pjbWdCWmt6ampVMVVyUTc0Y2kxZ1dCQ1NHSHR1VjFIMm1oU25PM1dwLzNmRVY1YSs0d3ovLzZxeThKeGpac214eHk1KzR3OUNETkpZMDlUMDcyaUtHMEVuT1MwYXJFWWdYcVluWGNZSHdqVHRVTkFjTWVsT2Q0eHBrb3FpVFlJQ1dGcTBKU2lQZlBEUWRudCs0L3d1cWNYWTQ3UUlMYmdBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1mcm9udCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMSVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xJVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiA0MHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMzJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ29ycENvbnRlbnQ7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\CorpContent1.js */"));
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
      className3: "flipCard"
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
      className1: "flipCard is-flipped"
    });
  }

  unflip1() {
    this.setState({
      className1: "flipCard"
    });
  }

  flip2() {
    this.setState({
      className2: "flipCard is-flipped"
    });
  }

  unflip2() {
    this.setState({
      className2: "flipCard"
    });
  }

  flip3() {
    this.setState({
      className3: "flipCard is-flipped"
    });
  }

  unflip3() {
    this.setState({
      className3: "flipCard"
    });
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-2146410261",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-2146410261" + " " + "contentCanvas contentCanvas--card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "flipContainer1",
      onMouseEnter: this.flip1,
      onMouseLeave: this.unflip1,
      className: "jsx-2146410261" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-2146410261" + " " + (this.state.className1 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/truck.jpg */ "./public/assets/truck.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-2146410261" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-2146410261" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/truck.jpg */ "./public/assets/truck.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-2146410261",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-2146410261" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 27
      }
    }, "Card 1 Back")))), __jsx("div", {
      id: "flipContainer2",
      onMouseEnter: this.flip2,
      onMouseLeave: this.unflip2,
      className: "jsx-2146410261" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card2",
      className: "jsx-2146410261" + " " + (this.state.className2 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/pile-of-cats.jpg */ "./public/assets/pile-of-cats.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-2146410261" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-2146410261" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/pile-of-cats.jpg */ "./public/assets/pile-of-cats.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-2146410261",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-2146410261" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 27
      }
    }, "Card 2 Back")))), __jsx("div", {
      id: "flipContainer3",
      onMouseEnter: this.flip3,
      onMouseLeave: this.unflip3,
      className: "jsx-2146410261" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-2146410261" + " " + (this.state.className3 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/money.jpeg */ "./public/assets/money.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-2146410261" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-2146410261" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/money.jpeg */ "./public/assets/money.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-2146410261",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-2146410261" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 27
      }
    }, "Card 3 Back"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2146410261",
      __self: this
    }, ".cardText.jsx-2146410261{position:absolute;height:100%;width:100%;-webkit-transform:translateY(-65%);-ms-transform:translateY(-65%);transform:translateY(-65%);}#contentContainer.jsx-2146410261{position:absolute;height:100%;width:90%;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);right:15%;overflow:hidden;border:5px solid silver;box-sizing:border-box;}@media (max-width:720px){#contentContainer.jsx-2146410261{height:100%;min-height:575px;overflow:hidden;}}.contentCanvas.jsx-2146410261{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}@media (max-width:720px){.contentCanvas.jsx-2146410261{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:102%;width:100%;margin-top:0%;}}.flipCard.jsx-2146410261{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}@media (max-width:720px){.flipCard.jsx-2146410261{width:100%;height:100%;}}.card__face.jsx-2146410261{position:absolute;height:100%;width:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;text-align:center;}.card__face--front.jsx-2146410261{background:white;}.card__face--back.jsx-2146410261{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCard.is-flipped.jsx-2146410261{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}@media (max-width:720px){.card__face--back.jsx-2146410261{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-2146410261{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}}@media (max-width:720px){#card2.jsx-2146410261{margin-top:-1%;}}@media (max-width:720px){#card3.jsx-2146410261{margin-top:-1%;}}.flipCardContainer.jsx-2146410261{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-2146410261{width:100%;height:33%;margin-top:0%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycENvbnRlbnQyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdJaUIsQUFJdUMsQUFPQSxBQWdCSixBQVFKLEFBVW1CLEFBVWpCLEFBZUMsQUFNSyxBQVFELEFBSUEsQUFLVyxBQUtULEFBS1csQUFZL0IsQUFPQSxBQUltQixBQVdMLFVBckdELENBbUNFLEFBbUVELENBOUdNLEFBNEJILEdBMkRoQixBQU9BLEVBckNGLEFBSThCLEFBVUUsQ0E5RmxCLEFBT0EsQUFpRUEsSUF4Q0QsQUFzR0ssQ0FuRWhCLEtBZmdCLENBNUJFLENBdkJQLEFBT0QsQUFpRUMsR0F4Q0MsR0FzR1osSUE5SDJrRSxDQU45a0UsQUF1RThCLEdBckJoQixDQTNCWCxBQVFjLFVBb0JGLElBbEJkLFFBbUJZLFVBQ1csWUFrRVgsQ0FqRlMsTUFnRHJCLEFBVUUsRUExQzBCLENBa0VkLElBaERNLElBakNKLElBa0ZBLEVBdkNoQixBQVVFLE1BcERhLEVBaUNmLElBaURjLEtBakZJLElBekNsQixHQTJIdUIsT0FoRnJCLGNBa0ZGLDBDQXRFOEIsZ0dBQ1Ysa0JBQ0gsZUFDakIsMHlEQW5Eb0Msa0NBQ2hCLGtCQUNVLGdHQUNsQixVQUNNLGdCQUNRLHdCQUNGLHNCQUN4QiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXENvcnBDb250ZW50Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDb3JwQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZsaXAxID0gdGhpcy5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAxID0gdGhpcy51bmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAyID0gdGhpcy5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAyID0gdGhpcy51bmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAzID0gdGhpcy5mbGlwMy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAzID0gdGhpcy51bmZsaXAzLmJpbmQodGhpcyk7XHJcbn1cclxuXHJcbmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiB9KVxyXG59XHJcblxyXG5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMVwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMX0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTF9ICBpZD1cImNhcmQxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPVwic29sb1BybzFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvdHJ1Y2suanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy90cnVjay5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMSBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMlwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMn0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUyfSAgaWQ9XCJjYXJkMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3BpbGUtb2YtY2F0cy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3BpbGUtb2YtY2F0cy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMiBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyM1wiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwM30gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUzfSAgaWQ9XCJjYXJkMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL21vbmV5LmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL21vbmV5LmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMyBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjUlKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFVVkJNVkVXRmhZV0RnNE4zZDNkdGJXMTdlM3QxZFhXQmdZR0hoNGQ1ZVhsemMzT0xpNHVibTV1VmxaV1BqNCtOalkxOWZYMkppWWwvZjM5cmEydVJrWkdabVpscGFXbVhsNWR2YjI5eGNYR1RrNU5uWjJjOFRWMW1BQUFBRzNSU1RsTkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQXZFT3d0QUFBRlZrbEVRVlI0WHBXV0I2N2MyQlVGYjNnNTU3VC9oUm85L1dVTVpIbGdyNEJnOFo0cVFnUUpsSEk0QThTekZWcmFwdm1URjlPN2RtWVJGWjYwWWlCaEpSQ2doMUZZaGlMQW1kdlgwQ3pUT3BORTc3TUUwWnR5L25XV3pjaER0aXFybVFEZXV2M3Bvd1E1dGEyZU4wRlkwSW5rcURENzNsVDljOWxFendVTnFnRkhzOVZRY2UzVFZDbEZDUXJTVGZPaVlrVkpRQm1wYnEyTDZpWmF2UG5BUGNvVTBkU3cwU1VUcXovR3RyR3VYZmJ5eUJuaUt5a09XUVdHcXd3TUE3UWlZQXhpK0lsUGRxbytoWUhuVXQ1WlBmbnNISnlOaUR0bnBKeWF5TkJrRjZjV29ZR0FNWTkyVTJoWEhGL0MxTTh1UC9adFlkaXVqMjZVZEFkUVFTWFFFcndTT016dC9YV1JXQXo1R3VTQklrd0cxSDNGYWJKMk9zVU9VaEdDNnRLNEVNdEpPMHR0QzZJQkQza00wdmUwdEp3TWRTZmpabytFRUlTYWVUcjlQM3dZckdqWHF5QzFrcmNLZGhNcHhFbnQ1SmV0b3Vsc2NweXpoWE41RlJwdVBIdmJlUWFLeEZBRUI2RU4rY1lONnhEN1JZR3BYcE5uZE1tWmdNNURjczNZU05GREhVbzJMR2ZadXVrU1d5VVlpckpBZFliRjNNZnFFS21qTStJMkVmaEE5NGlHM0w3dUtyUitHZFdENzN5ZGxJQis2aGdyZWYxUVRsbWdtYk0zL0xlWDVHSTFVeDFSV3BneHBMdVoyK0krSWp6Wjh3cUU0bmlsdlFka1VkZmh6STVRRFd5K2t3NVdnZzJwR3BlRVZlQ0NBN2I4NUJPM0Y5RHp4QjNjZHF2QnpXY216YnlNaXFoenVZcXRIUlZHMnk0eCtLT2xueXFsYThBb1dXcHVCb1lSeHpYcmZLdUlMbDZTZmlXQ2JqeG9aSlVhQ0JqMUNqSDdHSWFEYmM5a3FCWTNXL1JnamRhMWlxUWNPSnUyV1crNzZwWkM5UUc3TTAwZGZmZTloTm5zZXVwRkw1M3I4RjdZSFN3SldVS1AycStrN1Jkc3h5T0IxMW4weHRPdm5XNGlyTU1GTlY0SDB1cXdTNUV4c21QOUF4YkRUYzlKd2duZUFUNXZUaVVTbTFFN0JTZmxTdDNiZmExdHY4RGkzUjhuM0FmN01OV3pzNDlobWF1RTJ3UCt0dHJxK0FzV3BGRzJhd3ZzdU9xYmlwV0hndHV2dWFBRStBMVovN2dDOWhlc25yKzd3cUN3RzhjNXlBZzNBTDFmbThUOUFadHAvYmJKR3dsMXBOckU3UnVPWDdQZU1SVUVSVmFQcEVzK3lxZW9TbXVPbG9rcXc0OXBnb21qTGVoN2ljSE5sRzE5eWpzNlhYT01lZFltNXhIMll4cFYydGMwUm8yakpmeEM1MEFwdXhHb2I3bE1zeGZUYmVVdjA3VHlZeHBlTHVjRUgxZ05kNElLSDJMQWc1VGRWaGxDYWZadnBza2ZuY0NmeDhwT2hKemQ3NmJKV2VZRm5GY2l3Y1lmdWJSYzEySXAvcHBJaEExL21TWi9SeGpGRHJKQzV4aWZGakpwWTJYbDV6WGRndUZxWXlUUjF6U3AxWTlwK3RrdERZWVNOZmxjeEkwaXlPNFRQQmRsUmNwZXFqSy9waUY1YmtscTc3VlNFYUErejhxbUpURnpJV2lpdGJuelI3OTRVU0tCVWFUME5URXNWalpxTGFGVnFKb1BOOU9ERzcwSVBiZkJIS0srL3EvQVdSMHRKellIUlVMT2E0TVArVy9IZkdhZFpVYmZ3MTc3RzdqL09HYklzOFRhaEx5eW5sNFg0UmluRjc5M096K0JVMHNhWHRVSHJWQkZUL0RuQTNjdE5Qb0diczRoUklqVG9rOGkrYWxnVDFsVEhpNFN4RnZPTktOcmdRRkFxMi9nRm5XTVhnd2ZmZ1lNSnBpS1lrbVczdFRnM1pROUpxK2Y4WE4rQTVlZVVLSFd2SldKMnNnSjFTb3Ard3docUZWaWpxV2FKaHd0RDhNTmxTQmVXTk5XVGE1WjVrUFp3NStMYlZUOTl3cVRkeDI5bE1VSDRPSUcvRDg2cnVLRWF1Qmp2SDV4eTZ1bS9TZmo3ZWk2VVVWazRBSWwzTXlENE1TU1RPRmdTd3NIL1FKV2FRNWFzN1pjbWdCWmt6ampVMVVyUTc0Y2kxZ1dCQ1NHSHR1VjFIMm1oU25PM1dwLzNmRVY1YSs0d3ovLzZxeThKeGpac214eHk1KzR3OUNETkpZMDlUMDcyaUtHMEVuT1MwYXJFWWdYcVluWGNZSHdqVHRVTkFjTWVsT2Q0eHBrb3FpVFlJQ1dGcTBKU2lQZlBEUWRudCs0L3d1cWNYWTQ3UUlMYmdBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tZnJvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTElXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMSVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvcnBDb250ZW50OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\CorpContent2.js */"));
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
      className3: "flipCard"
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
      className1: "flipCard is-flipped"
    });
  }

  unflip1() {
    this.setState({
      className1: "flipCard"
    });
  }

  flip2() {
    this.setState({
      className2: "flipCard is-flipped"
    });
  }

  unflip2() {
    this.setState({
      className2: "flipCard"
    });
  }

  flip3() {
    this.setState({
      className3: "flipCard is-flipped"
    });
  }

  unflip3() {
    this.setState({
      className3: "flipCard"
    });
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-1598990884",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-1598990884" + " " + "contentCanvas contentCanvas--card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "flipContainer1",
      onMouseEnter: this.flip1,
      onMouseLeave: this.unflip1,
      className: "jsx-1598990884" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-1598990884" + " " + (this.state.className1 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/truck.jpg */ "./public/assets/truck.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-1598990884" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-1598990884" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/truck.jpg */ "./public/assets/truck.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-1598990884",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-1598990884" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 27
      }
    }, "Card 1 Back")))), __jsx("div", {
      id: "flipContainer2",
      onMouseEnter: this.flip2,
      onMouseLeave: this.unflip2,
      className: "jsx-1598990884" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card2",
      className: "jsx-1598990884" + " " + (this.state.className2 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/pile-of-cats.jpg */ "./public/assets/pile-of-cats.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-1598990884" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-1598990884" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/pile-of-cats.jpg */ "./public/assets/pile-of-cats.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-1598990884",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-1598990884" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 27
      }
    }, "Card 2 Back")))), __jsx("div", {
      id: "flipContainer3",
      onMouseEnter: this.flip3,
      onMouseLeave: this.unflip3,
      className: "jsx-1598990884" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-1598990884" + " " + (this.state.className3 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/money.jpeg */ "./public/assets/money.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-1598990884" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-1598990884" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/money.jpeg */ "./public/assets/money.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-1598990884",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-1598990884" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 27
      }
    }, "Card 3 Back"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1598990884",
      __self: this
    }, ".cardText.jsx-1598990884{position:absolute;height:100%;width:100%;-webkit-transform:translateY(-65%);-ms-transform:translateY(-65%);transform:translateY(-65%);}#contentContainer.jsx-1598990884{position:absolute;height:100%;width:90%;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(-200%);-ms-transform:translateX(-200%);transform:translateX(-200%);right:25%;overflow:hidden;border:5px solid silver;box-sizing:border-box;}@media (max-width:720px){#contentContainer.jsx-1598990884{height:100%;min-height:575px;overflow:hidden;}}.contentCanvas.jsx-1598990884{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}@media (max-width:720px){.contentCanvas.jsx-1598990884{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:102%;width:100%;margin-top:0%;}}.flipCard.jsx-1598990884{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}@media (max-width:720px){.flipCard.jsx-1598990884{width:100%;height:100%;}}.card__face.jsx-1598990884{position:absolute;height:100%;width:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;text-align:center;}.card__face--front.jsx-1598990884{background:white;}.card__face--back.jsx-1598990884{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCard.is-flipped.jsx-1598990884{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}@media (max-width:720px){.card__face--back.jsx-1598990884{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-1598990884{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}}@media (max-width:720px){#card2.jsx-1598990884{margin-top:-1%;}}@media (max-width:720px){#card3.jsx-1598990884{margin-top:-1%;}}.flipCardContainer.jsx-1598990884{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-1598990884{width:100%;height:33%;margin-top:0%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycENvbnRlbnQzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdJaUIsQUFJdUMsQUFPQSxBQWdCSixBQVFKLEFBVW1CLEFBVWpCLEFBZUMsQUFNSyxBQVFELEFBSUEsQUFLVyxBQUtULEFBS1csQUFZL0IsQUFPQSxBQUltQixBQVdMLFVBckdELENBbUNFLEFBbUVELENBOUdNLEFBNEJILEdBMkRoQixBQU9BLEVBckNGLEFBSThCLEFBVUUsQ0E5RmxCLEFBT0EsQUFpRUEsSUF4Q0QsQUFzR0ssQ0FuRWhCLEtBZmdCLENBNUJFLENBdkJQLEFBT0QsQUFpRUMsR0F4Q0MsR0FzR1osSUE5SDJrRSxDQU45a0UsQUF1RThCLEdBckJoQixDQTNCWCxBQVFjLFVBb0JGLElBbEJkLFFBbUJZLFVBQ1csWUFrRVgsQ0FqRlMsTUFnRHJCLEFBVUUsRUExQzBCLENBa0VkLElBaERNLElBakNKLElBa0ZBLEVBdkNoQixBQVVFLE1BcERhLEVBaUNmLElBaURjLEtBakZJLElBekNsQixHQTJIdUIsT0FoRnJCLGNBa0ZGLDBDQXRFOEIsZ0dBQ1Ysa0JBQ0gsZUFDakIsMHlEQW5Eb0Msa0NBQ2hCLGtCQUNVLGdHQUNsQixVQUNNLGdCQUNRLHdCQUNGLHNCQUN4QiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXENvcnBDb250ZW50My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDb3JwQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZsaXAxID0gdGhpcy5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAxID0gdGhpcy51bmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAyID0gdGhpcy5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAyID0gdGhpcy51bmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAzID0gdGhpcy5mbGlwMy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAzID0gdGhpcy51bmZsaXAzLmJpbmQodGhpcyk7XHJcbn1cclxuXHJcbmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiB9KVxyXG59XHJcblxyXG5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMVwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMX0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTF9ICBpZD1cImNhcmQxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPVwic29sb1BybzFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvdHJ1Y2suanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy90cnVjay5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMSBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMlwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMn0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUyfSAgaWQ9XCJjYXJkMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3BpbGUtb2YtY2F0cy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3BpbGUtb2YtY2F0cy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMiBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyM1wiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwM30gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUzfSAgaWQ9XCJjYXJkMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL21vbmV5LmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL21vbmV5LmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMyBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjUlKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFVVkJNVkVXRmhZV0RnNE4zZDNkdGJXMTdlM3QxZFhXQmdZR0hoNGQ1ZVhsemMzT0xpNHVibTV1VmxaV1BqNCtOalkxOWZYMkppWWwvZjM5cmEydVJrWkdabVpscGFXbVhsNWR2YjI5eGNYR1RrNU5uWjJjOFRWMW1BQUFBRzNSU1RsTkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQXZFT3d0QUFBRlZrbEVRVlI0WHBXV0I2N2MyQlVGYjNnNTU3VC9oUm85L1dVTVpIbGdyNEJnOFo0cVFnUUpsSEk0QThTekZWcmFwdm1URjlPN2RtWVJGWjYwWWlCaEpSQ2doMUZZaGlMQW1kdlgwQ3pUT3BORTc3TUUwWnR5L25XV3pjaER0aXFybVFEZXV2M3Bvd1E1dGEyZU4wRlkwSW5rcURENzNsVDljOWxFendVTnFnRkhzOVZRY2UzVFZDbEZDUXJTVGZPaVlrVkpRQm1wYnEyTDZpWmF2UG5BUGNvVTBkU3cwU1VUcXovR3RyR3VYZmJ5eUJuaUt5a09XUVdHcXd3TUE3UWlZQXhpK0lsUGRxbytoWUhuVXQ1WlBmbnNISnlOaUR0bnBKeWF5TkJrRjZjV29ZR0FNWTkyVTJoWEhGL0MxTTh1UC9adFlkaXVqMjZVZEFkUVFTWFFFcndTT016dC9YV1JXQXo1R3VTQklrd0cxSDNGYWJKMk9zVU9VaEdDNnRLNEVNdEpPMHR0QzZJQkQza00wdmUwdEp3TWRTZmpabytFRUlTYWVUcjlQM3dZckdqWHF5QzFrcmNLZGhNcHhFbnQ1SmV0b3Vsc2NweXpoWE41RlJwdVBIdmJlUWFLeEZBRUI2RU4rY1lONnhEN1JZR3BYcE5uZE1tWmdNNURjczNZU05GREhVbzJMR2ZadXVrU1d5VVlpckpBZFliRjNNZnFFS21qTStJMkVmaEE5NGlHM0w3dUtyUitHZFdENzN5ZGxJQis2aGdyZWYxUVRsbWdtYk0zL0xlWDVHSTFVeDFSV3BneHBMdVoyK0krSWp6Wjh3cUU0bmlsdlFka1VkZmh6STVRRFd5K2t3NVdnZzJwR3BlRVZlQ0NBN2I4NUJPM0Y5RHp4QjNjZHF2QnpXY216YnlNaXFoenVZcXRIUlZHMnk0eCtLT2xueXFsYThBb1dXcHVCb1lSeHpYcmZLdUlMbDZTZmlXQ2JqeG9aSlVhQ0JqMUNqSDdHSWFEYmM5a3FCWTNXL1JnamRhMWlxUWNPSnUyV1crNzZwWkM5UUc3TTAwZGZmZTloTm5zZXVwRkw1M3I4RjdZSFN3SldVS1AycStrN1Jkc3h5T0IxMW4weHRPdm5XNGlyTU1GTlY0SDB1cXdTNUV4c21QOUF4YkRUYzlKd2duZUFUNXZUaVVTbTFFN0JTZmxTdDNiZmExdHY4RGkzUjhuM0FmN01OV3pzNDlobWF1RTJ3UCt0dHJxK0FzV3BGRzJhd3ZzdU9xYmlwV0hndHV2dWFBRStBMVovN2dDOWhlc25yKzd3cUN3RzhjNXlBZzNBTDFmbThUOUFadHAvYmJKR3dsMXBOckU3UnVPWDdQZU1SVUVSVmFQcEVzK3lxZW9TbXVPbG9rcXc0OXBnb21qTGVoN2ljSE5sRzE5eWpzNlhYT01lZFltNXhIMll4cFYydGMwUm8yakpmeEM1MEFwdXhHb2I3bE1zeGZUYmVVdjA3VHlZeHBlTHVjRUgxZ05kNElLSDJMQWc1VGRWaGxDYWZadnBza2ZuY0NmeDhwT2hKemQ3NmJKV2VZRm5GY2l3Y1lmdWJSYzEySXAvcHBJaEExL21TWi9SeGpGRHJKQzV4aWZGakpwWTJYbDV6WGRndUZxWXlUUjF6U3AxWTlwK3RrdERZWVNOZmxjeEkwaXlPNFRQQmRsUmNwZXFqSy9waUY1YmtscTc3VlNFYUErejhxbUpURnpJV2lpdGJuelI3OTRVU0tCVWFUME5URXNWalpxTGFGVnFKb1BOOU9ERzcwSVBiZkJIS0srL3EvQVdSMHRKellIUlVMT2E0TVArVy9IZkdhZFpVYmZ3MTc3RzdqL09HYklzOFRhaEx5eW5sNFg0UmluRjc5M096K0JVMHNhWHRVSHJWQkZUL0RuQTNjdE5Qb0diczRoUklqVG9rOGkrYWxnVDFsVEhpNFN4RnZPTktOcmdRRkFxMi9nRm5XTVhnd2ZmZ1lNSnBpS1lrbVczdFRnM1pROUpxK2Y4WE4rQTVlZVVLSFd2SldKMnNnSjFTb3Ard3docUZWaWpxV2FKaHd0RDhNTmxTQmVXTk5XVGE1WjVrUFp3NStMYlZUOTl3cVRkeDI5bE1VSDRPSUcvRDg2cnVLRWF1Qmp2SDV4eTZ1bS9TZmo3ZWk2VVVWazRBSWwzTXlENE1TU1RPRmdTd3NIL1FKV2FRNWFzN1pjbWdCWmt6ampVMVVyUTc0Y2kxZ1dCQ1NHSHR1VjFIMm1oU25PM1dwLzNmRVY1YSs0d3ovLzZxeThKeGpac214eHk1KzR3OUNETkpZMDlUMDcyaUtHMEVuT1MwYXJFWWdYcVluWGNZSHdqVHRVTkFjTWVsT2Q0eHBrb3FpVFlJQ1dGcTBKU2lQZlBEUWRudCs0L3d1cWNYWTQ3UUlMYmdBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tZnJvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTElXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMSVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvcnBDb250ZW50OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\CorpContent3.js */"));
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
      className: "jsx-4063824779",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-4063824779",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, __jsx("p", {
      id: "corpButtonTag",
      className: "jsx-4063824779",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, "Multi-Location"), __jsx("p", {
      id: "corpExplain",
      className: "jsx-4063824779",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    }, "Multiple converter buyers from several physical locations.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4063824779",
      __self: this
    }, "#corpExplain.jsx-4063824779{color:white;pointer-events:none;-webkit-transform:translate(0%,-35%);-ms-transform:translate(0%,-35%);transform:translate(0%,-35%);}@media only screen and (max-width:608px){#explainContainer.jsx-4063824779{-webkit-transform:translate(0%,-0%);-ms-transform:translate(0%,-0%);transform:translate(0%,-0%);}}#corpButtonTag.jsx-4063824779{color:white;-webkit-text-decoration:underline;text-decoration:underline;position:relative;font-weight:600;font-size:1.5em;min-width:163px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycEV4cGxhaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJ5QixBQUl5QyxBQVFiLEFBSWMsWUFYTyxBQVlNLG9CQVYvQix3Q0FXdUIsa0JBQ0YsTUFQaEIsVUFRZ0IsZ0JBQ0EsU0FkcEIsT0FlRSIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXENvcnBFeHBsYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIENvcnBFeHBsYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImV4cGxhaW5Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImNvcnBCdXR0b25UYWdcIiA+TXVsdGktTG9jYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiY29ycEV4cGxhaW5cIj5NdWx0aXBsZSBjb252ZXJ0ZXIgYnV5ZXJzIGZyb20gc2V2ZXJhbCBwaHlzaWNhbCBsb2NhdGlvbnMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NvcnBFeHBsYWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0zNSUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjA4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNleHBsYWluQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMCUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjb3JwQnV0dG9uVGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAgd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNjNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcnBFeHBsYWluOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\CorpExplain.js */"));
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
        className: "jsx-3739506130",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "jsx-3739506130" + " " + "contentCanvas",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }
      }, "REVOLUTION PLUGS GO HERE"), __jsx("a", {
        onClick: this.props.onClose,
        id: "closeLink",
        className: "jsx-3739506130",
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
        id: "3739506130",
        __self: this
      }, "#closeLink.jsx-3739506130{position:absolute;width:25px;height:25px;cursor:pointer;right:2%;top:2%;}#contentContainer.jsx-3739506130{position:absolute;margin-top:100px;height:60vh;margin-left:10%;width:80vw;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;}.contentCanvas.jsx-3739506130{margin:auto;z-index:15;}#corpProList.jsx-3739506130{list-style-type:none;font-size:1.6em;width:100%;-webkit-transform:translate(-5.3%,11%);-ms-transform:translate(-5.3%,11%);transform:translate(-5.3%,11%);}#corpPro1.jsx-3739506130{margin:0 0 10% 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcUmV2b2x1dGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQnFCLEFBSStDLEFBU0EsQUFXTixBQUtTLEFBUUosWUFaTixLQWFiLENBakNhLEFBU00sR0FnQkQsRUFKbEIsTUFwQmMsTUFTQSxFQWlCRCxJQXpCSSxNQVNDLENBaUJnQixRQXpCdkIsT0FTRSxFQVJKLE9BQ1gsRUFRK2tFLCtFQWdCN2tFLDQvREFmb0Msa0NBQ2hCLGtCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXFJldm9sdXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnLi9DbG9zZUJ1dHRvbic7XHJcblxyXG5jbGFzcyBSZXZvbHV0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFJFVk9MVVRJT04gUExVR1MgR08gSEVSRVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0gaWQ9XCJjbG9zZUxpbmtcIj48Q2xvc2VCdXR0b24gaWQ9XCJjbG9zZVwiIC8+PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjbG9zZUxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODB2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FNQUFBQXA0WGlEQUFBQVVWQk1WRVdGaFlXRGc0TjNkM2R0YlcxN2UzdDFkWFdCZ1lHSGg0ZDVlWGx6YzNPTGk0dWJtNXVWbFpXUGo0K05qWTE5ZlgySmlZbC9mMzlyYTJ1UmtaR1ptWmxwYVdtWGw1ZHZiMjl4Y1hHVGs1Tm5aMmM4VFYxbUFBQUFHM1JTVGxOQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVBdkVPd3RBQUFGVmtsRVFWUjRYcFdXQjY3YzJCVUZiM2c1NTdUL2hSbzkvV1VNWkhsZ3I0Qmc4WjRxUWdRSmxISTRBOFN6RlZyYXB2bVRGOU83ZG1ZUkZaNjBZaUJoSlJDZ2gxRlloaUxBbWR2WDBDelRPcE5FNzdNRTBadHkvbldXemNoRHRpcXJtUURldXYzcG93UTV0YTJlTjBGWTBJbmtxREQ3M2xUOWM5bEV6d1VOcWdGSHM5VlFjZTNUVkNsRkNRclNUZk9pWWtWSlFCbXBicTJMNmlaYXZQbkFQY29VMGRTdzBTVVRxei9HdHJHdVhmYnl5Qm5pS3lrT1dRV0dxd3dNQTdRaVlBeGkrSWxQZHFvK2hZSG5VdDVaUGZuc0hKeU5pRHRucEp5YXlOQmtGNmNXb1lHQU1ZOTJVMmhYSEYvQzFNOHVQL1p0WWRpdWoyNlVkQWRRUVNYUUVyd1NPTXp0L1hXUldBejVHdVNCSWt3RzFIM0ZhYkoyT3NVT1VoR0M2dEs0RU10Sk8wdHRDNklCRDNrTTB2ZTB0SndNZFNmalpvK0VFSVNhZVRyOVAzd1lyR2pYcXlDMWtyY0tkaE1weEVudDVKZXRvdWxzY3B5emhYTjVGUnB1UEh2YmVRYUt4RkFFQjZFTitjWU42eEQ3UllHcFhwTm5kTW1aZ001RGNzM1lTTkZESFVvMkxHZlp1dWtTV3lVWWlySkFkWWJGM01mcUVLbWpNK0kyRWZoQTk0aUczTDd1S3JSK0dkV0Q3M3lkbElCKzZoZ3JlZjFRVGxtZ21iTTMvTGVYNUdJMVV4MVJXcGd4cEx1WjIrSStJanpaOHdxRTRuaWx2UWRrVWRmaHpJNVFEV3kra3c1V2dnMnBHcGVFVmVDQ0E3Yjg1Qk8zRjlEenhCM2NkcXZCeldjbXpieU1pcWh6dVlxdEhSVkcyeTR4K0tPbG55cWxhOEFvV1dwdUJvWVJ4elhyZkt1SUxsNlNmaVdDYmp4b1pKVWFDQmoxQ2pIN0dJYURiYzlrcUJZM1cvUmdqZGExaXFRY09KdTJXVys3NnBaQzlRRzdNMDBkZmZlOWhObnNldXBGTDUzcjhGN1lIU3dKV1VLUDJxK2s3UmRzeHlPQjExbjB4dE92blc0aXJNTUZOVjRIMHVxd1M1RXhzbVA5QXhiRFRjOUp3Z25lQVQ1dlRpVVNtMUU3QlNmbFN0M2JmYTF0djhEaTNSOG4zQWY3TU5XenM0OWhtYXVFMndQK3R0cnErQXNXcEZHMmF3dnN1T3FiaXBXSGd0dXZ1YUFFK0ExWi83Z0M5aGVzbnIrN3dxQ3dHOGM1eUFnM0FMMWZtOFQ5QVp0cC9iYkpHd2wxcE5yRTdSdU9YN1BlTVJVRVJWYVBwRXMreXFlb1NtdU9sb2txdzQ5cGdvbWpMZWg3aWNITmxHMTl5anM2WFhPTWVkWW01eEgyWXhwVjJ0YzBSbzJqSmZ4QzUwQXB1eEdvYjdsTXN4ZlRiZVV2MDdUeVl4cGVMdWNFSDFnTmQ0SUtIMkxBZzVUZFZobENhZlp2cHNrZm5jQ2Z4OHBPaEp6ZDc2YkpXZVlGbkZjaXdjWWZ1YlJjMTJJcC9wcEloQTEvbVNaL1J4akZEckpDNXhpZkZqSnBZMlhsNXpYZGd1RnFZeVRSMXpTcDFZOXArdGt0RFlZU05mbGN4STBpeU80VFBCZGxSY3BlcWpLL3BpRjVia2xxNzdWU0VhQSt6OHFtSlRGeklXaWl0Ym56Ujc5NFVTS0JVYVQwTlRFc1ZqWnFMYUZWcUpvUE45T0RHNzBJUGJmQkhLSysvcS9BV1IwdEp6WUhSVUxPYTRNUCtXL0hmR2FkWlViZncxNzdHN2ovT0diSXM4VGFoTHl5bmw0WDRSaW5GNzkzT3orQlUwc2FYdFVIclZCRlQvRG5BM2N0TlBvR2JzNGhSSWpUb2s4aSthbGdUMWxUSGk0U3hGdk9OS05yZ1FGQXEyL2dGbldNWGd3ZmZnWU1KcGlLWWttVzN0VGczWlE5SnErZjhYTitBNWVlVUtIV3ZKV0oyc2dKMVNvcCt3d2hxRlZpanFXYUpod3REOE1ObFNCZVdOTldUYTVaNWtQWnc1K0xiVlQ5OXdxVGR4MjlsTVVINE9JRy9EODZydUtFYXVCanZINXh5NnVtL1NmajdlaTZVVVZrNEFJbDNNeUQ0TVNTVE9GZ1N3c0gvUUpXYVE1YXM3WmNtZ0Jaa3pqalUxVXJRNzRjaTFnV0JDU0dIdHVWMUgybWhTbk8zV3AvM2ZFVjVhKzR3ei8vNnF5OEp4alpzbXh4eTUrNHc5Q0ROSlkwOVQwNzJpS0cwRW5PUzBhckVZZ1hxWW5YY1lId2pUdFVOQWNNZWxPZDR4cGtvcWlUWUlDV0ZxMEpTaVBmUERRZG50KzQvd3VxY1hZNDdRSUxiZ0FBQUFCSlJVNUVya0pnZ2c9PScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgI2NvcnBQcm9MaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNS4zJSwgMTElKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICNjb3JwUHJvMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxMCUgMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobnVsbClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2b2x1dGlvbjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\Revolution.js */"));
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
      slideClass: "slide3"
    };
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  slideRight() {
    if (this.state.slideClass === this.state.slide1) {
      this.setState({
        slideClass: this.state.slide2
      });
    } else if (this.state.slideClass === this.state.slide2) {
      this.setState({
        slideClass: this.state.slide3
      });
    } else if (this.state.slideClass === this.state.slide3) {
      this.setState({
        slideClass: this.state.slide1
      });
    }
  }

  slideLeft() {
    if (this.state.slideClass === this.state.slide1) {
      this.setState({
        slideClass: this.state.slide3
      });
    } else if (this.state.slideClass === this.state.slide3) {
      this.setState({
        slideClass: this.state.slide2
      });
    } else if (this.state.slideClass === this.state.slide2) {
      this.setState({
        slideClass: this.state.slide1
      });
    }
  }

  render() {
    if (this.props.show === true) {
      return __jsx("div", {
        className: "jsx-224174278" + " " + "slider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-224174278" + " " + (this.state.slideClass || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 25
        }
      }, __jsx(_CorpContent1__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 28
        }
      }), __jsx(_CorpContent2__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 28
        }
      }), __jsx(_CorpContent3__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 28
        }
      })), __jsx("button", {
        id: "goLeft",
        onClick: this.slideRight,
        className: "jsx-224174278",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 25
        }
      }, __jsx("i", {
        id: "left",
        className: "jsx-224174278" + " " + "ChevronLeft",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 71
        }
      })), __jsx("button", {
        id: "goRight",
        onClick: this.slideLeft,
        className: "jsx-224174278",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }
      }, __jsx("i", {
        id: "right",
        className: "jsx-224174278" + " " + "ChevronRight",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 63
        }
      })), __jsx("a", {
        onClick: this.props.onClose,
        id: "closeLink",
        className: "jsx-224174278",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      }, __jsx(_CloseButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 64
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "224174278",
        __self: this
      }, ".ChevronLeft.jsx-224174278{position:absolute;height:75px;width:75px;z-index:10;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.ChevronRight.jsx-224174278{position:absolute;height:75px;width:75px;z-index:10;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}#left.jsx-224174278{right:40px;top:0px;}#right.jsx-224174278{right:-40px;top:-5px;}.ChevronLeft.jsx-224174278::before,.ChevronLeft.jsx-224174278::after{position:absolute;display:block;content:\"\";border:35px solid transparent;}.ChevronLeft.jsx-224174278::before{border-top-color:#b00;}.ChevronLeft.jsx-224174278::after{top:-10px;border-top-color:#fff;}.ChevronRight.jsx-224174278::before,.ChevronRight.jsx-224174278::after{position:absolute;display:block;content:\"\";border:35px solid transparent;}.ChevronRight.jsx-224174278::before{border-top-color:#b00;}.ChevronRight.jsx-224174278::after{top:-10px;border-top-color:#fff;}#closeLink.jsx-224174278{position:absolute;width:25px;height:25px;cursor:pointer;right:6%;top:2%;}@media (max-width:720px){#closeLink.jsx-224174278{top:45px;right:40px;}}button.jsx-224174278{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:75px;height:75px;background:none;border:none;cursor:pointer;}button.jsx-224174278:focus{outline:none;box-shadow:none;}#goLeft.jsx-224174278{left:5.5%;}#goRight.jsx-224174278{right:5.5%;}.slider.jsx-224174278{position:relative;width:100%;height:100%;box-sizing:border-box;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;margin-top:130px;min-width:450px;}i.jsx-224174278{font-size:2vw;}.slide1.jsx-224174278{position:relative;width:100%;height:60vh;-webkit-transition:0.5s;transition:0.5s;margin:auto;}@media (max-width:720px){.slide1.jsx-224174278{height:75vh;margin-top:6%;}}.slide2.jsx-224174278{position:relative;width:100%;height:60vh;-webkit-transition:0.5s;transition:0.5s;margin:auto;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);}@media (max-width:720px){.slide2.jsx-224174278{height:75vh;margin-top:6%;}}.slide3.jsx-224174278{position:relative;width:100%;height:60vh;-webkit-transition:0.5s;transition:0.5s;margin:auto;-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);}@media (max-width:720px){.slide3.jsx-224174278{height:75vh;margin-top:6%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU2xpZGVyQ29ycC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRXFCLEFBSStDLEFBUUEsQUFRUCxBQUtDLEFBTUssQUFRSSxBQUdaLEFBTVEsQUFRSSxBQUdaLEFBS1MsQUFVTCxBQU1LLEFBV0wsQUFLSCxBQUlDLEFBSU8sQUFlSixBQUlJLEFBU0YsQUFNRSxBQVVGLEFBTUUsQUFVRixTQXpGRCxDQWhDTSxBQWlCQSxBQXFDekIsQ0E1RVksQUFnRlosQ0EzRWEsQUE0R1YsQUFnQkEsQUFnQkEsQ0ExRWlCLENBNEJwQixJQW5IZ0IsQUFRQSxBQW1CQyxBQWlCQSxBQWdCRixBQWdCSCxBQXdCRyxBQW1CQSxBQWVBLEFBZ0JBLENBcklmLENBc0RJLENBakRKLENBYUEsQUFpQkEsSUF5QitCLEFBb0QzQixBQWdCQSxBQWdCQSxHQXBHWSxBQTJCaEIsQUFhZ0IsQUFtQkEsQUFlQSxBQWdCQSxDQXRKRCxBQVFBLEVBbUJELEFBV2QsQUFNYyxBQVdkLFNBdERlLEFBUUEsQUFvREksQUF3Q08sQUFtQk4sQUFlQSxBQWdCQSxFQTNIYSxBQWlCQSxTQTFDbEMsQUFRQSxJQW1EYyxPQXdDQSxFQXZDRixPQUNYLEFBdUNjLENBMUVkLEFBaUJBLFFBMkVnQixBQWVBLEFBZ0JBLENBaERDLFdBa0JqQixBQWdCRCxBQWdCQSwwQkE3RWdCLFdBQ0MsTUEzRWhCLEdBUUEsR0FvRW9CLGNBMEJHLEVBekJQLFlBQ0csZUFDbkIsQ0F3REEsQUFnQkEsK0RBaERvQixnQkFDQyxpQkFDRCxnQkFFcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxTbGlkZXJDb3JwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvcnBDb250ZW50MSBmcm9tICcuL0NvcnBDb250ZW50MSc7XHJcbmltcG9ydCBDb3JwQ29udGVudDIgZnJvbSAnLi9Db3JwQ29udGVudDInO1xyXG5pbXBvcnQgQ29ycENvbnRlbnQzIGZyb20gJy4vQ29ycENvbnRlbnQzJztcclxuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJy4vQ2xvc2VCdXR0b24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgc2xpZGUxOiBcInNsaWRlMVwiLFxyXG4gICAgICAgICAgICBzbGlkZTI6IFwic2xpZGUyXCIsXHJcbiAgICAgICAgICAgIHNsaWRlMzogXCJzbGlkZTNcIixcclxuICAgICAgICAgICAgc2xpZGVDbGFzczogXCJzbGlkZTNcIixcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVMZWZ0ID0gdGhpcy5zbGlkZUxlZnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNsaWRlUmlnaHQgPSB0aGlzLnNsaWRlUmlnaHQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHNsaWRlUmlnaHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUyIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMyB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTEgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVMZWZ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUxKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTMgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUyIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zbGlkZUNsYXNzfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3JwQ29udGVudDEgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcnBDb250ZW50MiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29ycENvbnRlbnQzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZ29MZWZ0XCIgb25DbGljaz17dGhpcy5zbGlkZVJpZ2h0fT48aSBjbGFzc05hbWU9XCJDaGV2cm9uTGVmdFwiIGlkPVwibGVmdFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJnb1JpZ2h0XCIgb25DbGljaz17dGhpcy5zbGlkZUxlZnR9PjxpIGNsYXNzTmFtZT1cIkNoZXZyb25SaWdodFwiIGlkPVwicmlnaHRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xvc2V9IGlkPVwiY2xvc2VMaW5rXCI+PENsb3NlQnV0dG9uIGlkPVwiY2xvc2VcIiAvPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNsZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNyaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjozNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAvKmFkanVzdCBzaXplKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKkNoYW5nZSB0aGUgZm91ciBpbnN0YW5jZXMgb2YgJ3RvcCcgYmVsb3cgdG8gcm90YXRlICh0b3AvcmlnaHQvYm90dG9tL2xlZnQpKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNiMDA7IC8qQ2hldnJvbiBDb2xvciovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6LTEwcHg7IC8qYWRqdXN0IHRoaWNrbmVzcyovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNmZmY7IC8qTWF0Y2ggYmFja2dyb3VuZCBjb2xvdXIqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjozNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAvKmFkanVzdCBzaXplKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKkNoYW5nZSB0aGUgZm91ciBpbnN0YW5jZXMgb2YgJ3RvcCcgYmVsb3cgdG8gcm90YXRlICh0b3AvcmlnaHQvYm90dG9tL2xlZnQpKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojYjAwOyAvKkNoZXZyb24gQ29sb3IqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDotMTBweDsgLyphZGp1c3QgdGhpY2tuZXNzKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2ZmZjsgLypNYXRjaCBiYWNrZ3JvdW5kIGNvbG91ciovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjbG9zZUxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjbG9zZUxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b246Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNnb0xlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNS41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2dvUmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNiVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNiVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNiVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTt9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SliderCorp.js */"));
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
      slideClass: "slide3"
    };
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  slideRight() {
    if (this.state.slideClass === this.state.slide1) {
      this.setState({
        slideClass: this.state.slide2
      });
    } else if (this.state.slideClass === this.state.slide2) {
      this.setState({
        slideClass: this.state.slide3
      });
    } else if (this.state.slideClass === this.state.slide3) {
      this.setState({
        slideClass: this.state.slide1
      });
    }
  }

  slideLeft() {
    if (this.state.slideClass === this.state.slide1) {
      this.setState({
        slideClass: this.state.slide3
      });
    } else if (this.state.slideClass === this.state.slide3) {
      this.setState({
        slideClass: this.state.slide2
      });
    } else if (this.state.slideClass === this.state.slide2) {
      this.setState({
        slideClass: this.state.slide1
      });
    }
  }

  render() {
    if (this.props.show === true) {
      return __jsx("div", {
        className: "jsx-224174278" + " " + "slider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-224174278" + " " + (this.state.slideClass || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 25
        }
      }, __jsx(_SmallContent1__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 28
        }
      }), __jsx(_SmallContent2__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 28
        }
      }), __jsx(_SmallContent3__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 28
        }
      })), __jsx("button", {
        id: "goLeft",
        onClick: this.slideRight,
        className: "jsx-224174278",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 25
        }
      }, __jsx("i", {
        id: "left",
        className: "jsx-224174278" + " " + "ChevronLeft",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 71
        }
      })), __jsx("button", {
        id: "goRight",
        onClick: this.slideLeft,
        className: "jsx-224174278",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      }, __jsx("i", {
        id: "right",
        className: "jsx-224174278" + " " + "ChevronRight",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 63
        }
      })), __jsx("a", {
        onClick: this.props.onClose,
        id: "closeLink",
        className: "jsx-224174278",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }
      }, __jsx(_CloseButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 64
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "224174278",
        __self: this
      }, ".ChevronLeft.jsx-224174278{position:absolute;height:75px;width:75px;z-index:10;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.ChevronRight.jsx-224174278{position:absolute;height:75px;width:75px;z-index:10;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}#left.jsx-224174278{right:40px;top:0px;}#right.jsx-224174278{right:-40px;top:-5px;}.ChevronLeft.jsx-224174278::before,.ChevronLeft.jsx-224174278::after{position:absolute;display:block;content:\"\";border:35px solid transparent;}.ChevronLeft.jsx-224174278::before{border-top-color:#b00;}.ChevronLeft.jsx-224174278::after{top:-10px;border-top-color:#fff;}.ChevronRight.jsx-224174278::before,.ChevronRight.jsx-224174278::after{position:absolute;display:block;content:\"\";border:35px solid transparent;}.ChevronRight.jsx-224174278::before{border-top-color:#b00;}.ChevronRight.jsx-224174278::after{top:-10px;border-top-color:#fff;}#closeLink.jsx-224174278{position:absolute;width:25px;height:25px;cursor:pointer;right:6%;top:2%;}@media (max-width:720px){#closeLink.jsx-224174278{top:45px;right:40px;}}button.jsx-224174278{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:75px;height:75px;background:none;border:none;cursor:pointer;}button.jsx-224174278:focus{outline:none;box-shadow:none;}#goLeft.jsx-224174278{left:5.5%;}#goRight.jsx-224174278{right:5.5%;}.slider.jsx-224174278{position:relative;width:100%;height:100%;box-sizing:border-box;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;margin-top:130px;min-width:450px;}i.jsx-224174278{font-size:2vw;}.slide1.jsx-224174278{position:relative;width:100%;height:60vh;-webkit-transition:0.5s;transition:0.5s;margin:auto;}@media (max-width:720px){.slide1.jsx-224174278{height:75vh;margin-top:6%;}}.slide2.jsx-224174278{position:relative;width:100%;height:60vh;-webkit-transition:0.5s;transition:0.5s;margin:auto;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);}@media (max-width:720px){.slide2.jsx-224174278{height:75vh;margin-top:6%;}}.slide3.jsx-224174278{position:relative;width:100%;height:60vh;-webkit-transition:0.5s;transition:0.5s;margin:auto;-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);}@media (max-width:720px){.slide3.jsx-224174278{height:75vh;margin-top:6%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU2xpZGVyU21hbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VxQixBQUkrQyxBQVFBLEFBUVAsQUFLQyxBQU1LLEFBUUksQUFHWixBQU1RLEFBUUksQUFHWixBQUtTLEFBVUwsQUFNSyxBQVdMLEFBS0gsQUFJQyxBQUlPLEFBZUosQUFJSSxBQVNGLEFBTUUsQUFVRixBQU1FLEFBVUYsU0F6RkQsQ0FoQ00sQUFpQkEsQUFxQ3pCLENBNUVZLEFBZ0ZaLENBM0VhLEFBNEdWLEFBZ0JBLEFBZ0JBLENBMUVpQixDQTRCcEIsSUFuSGdCLEFBUUEsQUFtQkMsQUFpQkEsQUFnQkYsQUFnQkgsQUF3QkcsQUFtQkEsQUFlQSxBQWdCQSxDQXJJZixDQXNESSxDQWpESixDQWFBLEFBaUJBLElBeUIrQixBQW9EM0IsQUFnQkEsQUFnQkEsR0FwR1ksQUEyQmhCLEFBYWdCLEFBbUJBLEFBZUEsQUFnQkEsQ0F0SkQsQUFRQSxFQW1CRCxBQVdkLEFBTWMsQUFXZCxTQXREZSxBQVFBLEFBb0RJLEFBd0NPLEFBbUJOLEFBZUEsQUFnQkEsRUEzSGEsQUFpQkEsU0ExQ2xDLEFBUUEsSUFtRGMsT0F3Q0EsRUF2Q0YsT0FDWCxBQXVDYyxDQTFFZCxBQWlCQSxRQTJFZ0IsQUFlQSxBQWdCQSxDQWhEQyxXQWtCakIsQUFnQkQsQUFnQkEsMEJBN0VnQixXQUNDLE1BM0VoQixHQVFBLEdBb0VvQixjQTBCRyxFQXpCUCxZQUNHLGVBQ25CLENBd0RBLEFBZ0JBLCtEQWhEb0IsZ0JBQ0MsaUJBQ0QsZ0JBRXBCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU2xpZGVyU21hbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU21hbGxDb250ZW50MSBmcm9tICcuL1NtYWxsQ29udGVudDEnO1xyXG5pbXBvcnQgU21hbGxDb250ZW50MiBmcm9tICcuL1NtYWxsQ29udGVudDInO1xyXG5pbXBvcnQgU21hbGxDb250ZW50MyBmcm9tICcuL1NtYWxsQ29udGVudDMnO1xyXG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnLi9DbG9zZUJ1dHRvbic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgc2xpZGUxOiBcInNsaWRlMVwiLFxyXG4gICAgICAgICAgICBzbGlkZTI6IFwic2xpZGUyXCIsXHJcbiAgICAgICAgICAgIHNsaWRlMzogXCJzbGlkZTNcIixcclxuICAgICAgICAgICAgc2xpZGVDbGFzczogXCJzbGlkZTNcIixcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVMZWZ0ID0gdGhpcy5zbGlkZUxlZnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNsaWRlUmlnaHQgPSB0aGlzLnNsaWRlUmlnaHQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHNsaWRlUmlnaHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUyIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMyB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTEgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVMZWZ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUxKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTMgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUyIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zbGlkZUNsYXNzfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbENvbnRlbnQxIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbENvbnRlbnQyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbENvbnRlbnQzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZ29MZWZ0XCIgb25DbGljaz17dGhpcy5zbGlkZVJpZ2h0fT48aSBjbGFzc05hbWU9XCJDaGV2cm9uTGVmdFwiIGlkPVwibGVmdFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJnb1JpZ2h0XCIgb25DbGljaz17dGhpcy5zbGlkZUxlZnR9PjxpIGNsYXNzTmFtZT1cIkNoZXZyb25SaWdodFwiIGlkPVwicmlnaHRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xvc2V9IGlkPVwiY2xvc2VMaW5rXCI+PENsb3NlQnV0dG9uIGlkPVwiY2xvc2VcIiAvPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNsZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNyaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjozNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAvKmFkanVzdCBzaXplKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKkNoYW5nZSB0aGUgZm91ciBpbnN0YW5jZXMgb2YgJ3RvcCcgYmVsb3cgdG8gcm90YXRlICh0b3AvcmlnaHQvYm90dG9tL2xlZnQpKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNiMDA7IC8qQ2hldnJvbiBDb2xvciovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6LTEwcHg7IC8qYWRqdXN0IHRoaWNrbmVzcyovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNmZmY7IC8qTWF0Y2ggYmFja2dyb3VuZCBjb2xvdXIqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjozNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAvKmFkanVzdCBzaXplKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKkNoYW5nZSB0aGUgZm91ciBpbnN0YW5jZXMgb2YgJ3RvcCcgYmVsb3cgdG8gcm90YXRlICh0b3AvcmlnaHQvYm90dG9tL2xlZnQpKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojYjAwOyAvKkNoZXZyb24gQ29sb3IqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDotMTBweDsgLyphZGp1c3QgdGhpY2tuZXNzKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2ZmZjsgLypNYXRjaCBiYWNrZ3JvdW5kIGNvbG91ciovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjbG9zZUxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjbG9zZUxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b246Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNnb0xlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNS41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2dvUmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNiVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNiVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNiVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTt9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SliderSmall.js */"));
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
      slideClass: "slide3"
    };
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  slideRight() {
    if (this.state.slideClass === this.state.slide1) {
      this.setState({
        slideClass: this.state.slide2
      });
    } else if (this.state.slideClass === this.state.slide2) {
      this.setState({
        slideClass: this.state.slide3
      });
    } else if (this.state.slideClass === this.state.slide3) {
      this.setState({
        slideClass: this.state.slide1
      });
    }
  }

  slideLeft() {
    if (this.state.slideClass === this.state.slide1) {
      this.setState({
        slideClass: this.state.slide3
      });
    } else if (this.state.slideClass === this.state.slide3) {
      this.setState({
        slideClass: this.state.slide2
      });
    } else if (this.state.slideClass === this.state.slide2) {
      this.setState({
        slideClass: this.state.slide1
      });
    }
  }

  render() {
    if (this.props.show === true) {
      return __jsx("div", {
        className: "jsx-1960696399" + " " + "slider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-1960696399" + " " + (this.state.slideClass || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 25
        }
      }, __jsx(_SoloContent1__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 28
        }
      }), __jsx(_SoloContent2__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 28
        }
      }), __jsx(_SoloContent3__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 28
        }
      })), __jsx("button", {
        id: "goLeft",
        onClick: this.slideRight,
        className: "jsx-1960696399",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }
      }, __jsx("i", {
        id: "left",
        className: "jsx-1960696399" + " " + "ChevronLeft",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 63
        }
      })), __jsx("button", {
        id: "goRight",
        onClick: this.slideLeft,
        className: "jsx-1960696399",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      }, __jsx("i", {
        id: "right",
        className: "jsx-1960696399" + " " + "ChevronRight",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 63
        }
      })), __jsx("a", {
        onClick: this.props.onClose,
        id: "closeLink",
        className: "jsx-1960696399",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }
      }, __jsx(_CloseButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 64
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "1960696399",
        __self: this
      }, ".ChevronLeft.jsx-1960696399{position:absolute;height:75px;width:75px;z-index:10;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.ChevronRight.jsx-1960696399{position:absolute;height:75px;width:75px;z-index:10;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}#left.jsx-1960696399{right:40px;top:0px;}#right.jsx-1960696399{right:-40px;top:-5px;}.ChevronLeft.jsx-1960696399::before,.ChevronLeft.jsx-1960696399::after{position:absolute;display:block;content:\"\";border:35px solid transparent;}.ChevronLeft.jsx-1960696399::before{border-top-color:#b00;}.ChevronLeft.jsx-1960696399::after{top:-10px;border-top-color:#fff;}.ChevronRight.jsx-1960696399::before,.ChevronRight.jsx-1960696399::after{position:absolute;display:block;content:\"\";border:35px solid transparent;}.ChevronRight.jsx-1960696399::before{border-top-color:#b00;}.ChevronRight.jsx-1960696399::after{top:-10px;border-top-color:#fff;}#closeLink.jsx-1960696399{position:absolute;width:25px;height:25px;cursor:pointer;right:6%;top:2%;}@media (max-width:720px){#closeLink.jsx-1960696399{top:45px;right:40px;}}button.jsx-1960696399{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:75px;height:75px;background:none;border:none;cursor:pointer;}button.jsx-1960696399:focus{outline:none;box-shadow:none;}#goLeft.jsx-1960696399{left:5.5%;}#goRight.jsx-1960696399{right:5.5%;}.slider.jsx-1960696399{position:relative;width:100%;height:100%;box-sizing:border-box;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;margin-top:130px;min-width:450px;}i.jsx-1960696399{font-size:2vw;}.slide1.jsx-1960696399{position:relative;width:100%;height:60vh;-webkit-transition:0.5s;transition:0.5s;margin:auto;}@media (max-width:720px){.slide1.jsx-1960696399{height:75vh;margin-top:6%;}}.slide2.jsx-1960696399{position:relative;width:100%;height:60vh;-webkit-transition:0.5s;transition:0.5s;margin:auto;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);}@media (max-width:720px){.slide2.jsx-1960696399{height:75vh;margin-top:6%;}}.slide3.jsx-1960696399{position:relative;width:100%;height:60vh;-webkit-transition:0.5s;transition:0.5s;margin:auto;-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);}@media (max-width:720px){.slide3.jsx-1960696399{height:75vh;margin-top:6%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU2xpZGVyU29sby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRXFCLEFBSStDLEFBUUEsQUFRUCxBQUtDLEFBTUssQUFRSSxBQUdaLEFBTVEsQUFRSSxBQUdaLEFBS1MsQUFVTCxBQU1LLEFBV0wsQUFLSCxBQUlDLEFBSU8sQUFlSixBQUlJLEFBU0YsQUFNRSxBQVVGLEFBTUUsQUFVRixTQXpGRCxDQWhDTSxBQWlCQSxBQXFDekIsQ0E1RVksQUFnRlosQ0EzRWEsQUE0R1YsQUFnQkEsQUFnQkEsQ0ExRWlCLENBNEJwQixJQW5IZ0IsQUFRQSxBQW1CQyxBQWlCQSxBQWdCRixBQWdCSCxBQXdCRyxBQW1CQSxBQWVBLEFBZ0JBLENBcklmLENBc0RJLENBakRKLENBYUEsQUFpQkEsSUF5QitCLEFBb0QzQixBQWdCQSxBQWdCQSxHQXBHWSxBQTJCaEIsQUFhZ0IsQUFtQkEsQUFlQSxBQWdCQSxDQXRKRCxBQVFBLEVBbUJELEFBV2QsQUFNYyxBQVdkLFNBdERlLEFBUUEsQUFvREksQUF3Q08sQUFtQk4sQUFlQSxBQWdCQSxFQTNIYSxBQWlCQSxTQTFDbEMsQUFRQSxJQW1EYyxPQXdDQSxFQXZDRixPQUNYLEFBdUNjLENBMUVkLEFBaUJBLFFBMkVnQixBQWVBLEFBZ0JBLENBaERDLFdBa0JqQixBQWdCRCxBQWdCQSwwQkE3RWdCLFdBQ0MsTUEzRWhCLEdBUUEsR0FvRW9CLGNBMEJHLEVBekJQLFlBQ0csZUFDbkIsQ0F3REEsQUFnQkEsK0RBaERvQixnQkFDQyxpQkFDRCxnQkFFcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxTbGlkZXJTb2xvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNvbG9Db250ZW50MSBmcm9tICcuL1NvbG9Db250ZW50MSc7XHJcbmltcG9ydCBTb2xvQ29udGVudDIgZnJvbSAnLi9Tb2xvQ29udGVudDInO1xyXG5pbXBvcnQgU29sb0NvbnRlbnQzIGZyb20gJy4vU29sb0NvbnRlbnQzJztcclxuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJy4vQ2xvc2VCdXR0b24nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlclNvbG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICBzbGlkZTE6IFwic2xpZGUxXCIsXHJcbiAgICAgICAgICAgIHNsaWRlMjogXCJzbGlkZTJcIixcclxuICAgICAgICAgICAgc2xpZGUzOiBcInNsaWRlM1wiLFxyXG4gICAgICAgICAgICBzbGlkZUNsYXNzOiBcInNsaWRlM1wiLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zbGlkZUxlZnQgPSB0aGlzLnNsaWRlTGVmdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVSaWdodCA9IHRoaXMuc2xpZGVSaWdodC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgc2xpZGVSaWdodCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTIgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUzIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzbGlkZUxlZnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTEpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMyB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTIgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUxIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNsaWRlQ2xhc3N9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNvbG9Db250ZW50MSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8U29sb0NvbnRlbnQyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTb2xvQ29udGVudDMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZ29MZWZ0XCIgb25DbGljaz17dGhpcy5zbGlkZVJpZ2h0fT48aSBjbGFzc05hbWU9XCJDaGV2cm9uTGVmdFwiIGlkPVwibGVmdFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJnb1JpZ2h0XCIgb25DbGljaz17dGhpcy5zbGlkZUxlZnR9PjxpIGNsYXNzTmFtZT1cIkNoZXZyb25SaWdodFwiIGlkPVwicmlnaHRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xvc2V9IGlkPVwiY2xvc2VMaW5rXCI+PENsb3NlQnV0dG9uIGlkPVwiY2xvc2VcIiAvPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNsZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNyaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjozNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAvKmFkanVzdCBzaXplKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKkNoYW5nZSB0aGUgZm91ciBpbnN0YW5jZXMgb2YgJ3RvcCcgYmVsb3cgdG8gcm90YXRlICh0b3AvcmlnaHQvYm90dG9tL2xlZnQpKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNiMDA7IC8qQ2hldnJvbiBDb2xvciovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6LTEwcHg7IC8qYWRqdXN0IHRoaWNrbmVzcyovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNmZmY7IC8qTWF0Y2ggYmFja2dyb3VuZCBjb2xvdXIqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjozNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAvKmFkanVzdCBzaXplKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKkNoYW5nZSB0aGUgZm91ciBpbnN0YW5jZXMgb2YgJ3RvcCcgYmVsb3cgdG8gcm90YXRlICh0b3AvcmlnaHQvYm90dG9tL2xlZnQpKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojYjAwOyAvKkNoZXZyb24gQ29sb3IqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDotMTBweDsgLyphZGp1c3QgdGhpY2tuZXNzKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2ZmZjsgLypNYXRjaCBiYWNrZ3JvdW5kIGNvbG91ciovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjbG9zZUxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjbG9zZUxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b246Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNnb0xlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNS41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2dvUmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNiVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNiVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNiVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTt9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SliderSolo.js */"));
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
      className: "jsx-2533850900",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, __jsx("div", {
      id: "circle",
      className: "jsx-2533850900",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: _public_assets_crew_figure_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      className: "jsx-2533850900" + " " + "smallButtonImage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }
    })), __jsx("div", {
      id: "smallButtonTag",
      className: "jsx-2533850900",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }
    }, __jsx(_SmallExplain__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2533850900",
      __self: this
    }, "#circle.jsx-2533850900{background-color:hsl(0,0%,90%);box-shadow:inset hsla(0,0%,15%,1) 0 0px 0px 4px, inset hsla(0,0%,15%,.8) 0 -1px 5px 4px, inset hsla(0,0%,0%,.25) 0 -1px 0px 7px, inset hsla(0,0%,100%,.7) 0 2px 1px 7px,  hsla(0,0%,0%,.15) 0 -5px 6px 4px, hsla(0,0%,100%,.5) 0 5px 6px 4px;-webkit-transition:color .2s;transition:color .2s;min-width:150px;min-height:150px;width:15vw;height:15vw;line-height:1px;border-radius:50%;background-image: -webkit-radial-gradient( 50% 0%,8% 50%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 50% 100%,12% 50%,hsla(0,0%,100%,.6) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 0% 50%,50% 7%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 100% 50%,50% 5%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%),  -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,0%,0) 0%,hsla(0,0%,0%,0) 3%,hsla(0,0%,0%,.1) 3.5%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 6%,hsla(0,0%,100%,.1) 7.5%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 1.2%,hsla(0,0%,100%,.2) 2.2%),  -webkit-radial-gradient( 50% 50%,200% 50%,hsla(0,0%,90%,1) 5%,hsla(0,0%,85%,1) 30%,hsla(0,0%,60%,1) 100%);}#circle.jsx-2533850900:before,#circle.jsx-2533850900:after{content:\"\";top:0%;left:0%;position:relative;width:inherit;height:inherit;border-radius:inherit;background-image: -webkit-radial-gradient( 50% 0%,10% 50%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 50% 100%,10% 50%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 0% 50%,50% 10%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 100% 50%,50% 06%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%);}#circle.jsx-2533850900:before{-webkit-transform:rotate( 65deg);-ms-transform:rotate( 65deg);transform:rotate( 65deg);}#circle.jsx-2533850900:after{-webkit-transform:rotate(-65deg);-ms-transform:rotate(-65deg);transform:rotate(-65deg);}#circle.jsx-2533850900:active{color:hsl(210,100%,40%);text-shadow:hsla(210,100%,20%,.3) 0 -1px 0,hsl(210,100%,85%) 0 2px 1px,hsla(200,100%,80%,1) 0 0 5px,hsla(210,100%,50%,.6) 0 0 20px;box-shadow: inset hsla(210,100%,30%,1) 0 0px 0px 4px, inset hsla(210,100%,15%,.4) 0 -1px 5px 4px, inset hsla(210,100%,20%,.25) 0 -1px 0px 7px, inset hsla(210,100%,100%,.7) 0 2px 1px 7px,  hsla(210,100%,75%,.8) 0 0px 3px 2px, hsla(210,50%,40%,.25) 0 -5px 6px 4px, hsla(210,80%,95%,1) 0 5px 6px 4px;}div.jsx-2533850900 #buttons.jsx-2533850900{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}@media (max-width:720px){div.jsx-2533850900 #buttons.jsx-2533850900{height:150px;width:150px;}}@media (max-width:720px){#smallButtonTag.jsx-2533850900{position:absolute;-webkit-transform:translate(145%,-95%);-ms-transform:translate(145%,-95%);transform:translate(145%,-95%);}}.smallButtonImage.jsx-2533850900{position:relative;height:60%;width:80%;min-width:100px;min-height:90px;-webkit-transform:translate(0%,30%);-ms-transform:translate(0%,30%);transform:translate(0%,30%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJ5QixBQUswRCxBQWlDcEIsQUFlNEIsQUFDRCxBQUdaLEFBa0JELEFBTVIsQUFPSyxBQU1GLFdBdkRiLEVBMkNTLEtBMUNSLEFBa0RQLEFBS1ksTUFyQ3VILENBeUJsSSxDQTFDZ0IsR0F1RE4sRUFwRnFCLFFBcUZmLEtBdkRKLFdBd0RJLEdBdkRILGFBd0RnQixFQXZEVCxjQVNrQixBQUNELFFBSGdELElBeUJoRSx3QkFjckIsZ0NBdkJtQyxZQWlDdkMsUUF2QkUsNkZBL0RxQixrREFHTCxnQkFDQyxpQkFDTixXQUNDLFlBQ0ksZ0JBQ0Usa0JBVzJGLGdDQW1CL0csWUFnQkEsc3hCQWpDQSIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXFNtYWxsQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNtYWxsSW1hZ2UgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9jcmV3LWZpZ3VyZS5wbmcnO1xyXG5pbXBvcnQgU21hbGxFeHBsYWluIGZyb20gJy4vU21hbGxFeHBsYWluJztcclxuXHJcbmNsYXNzIFNtYWxsQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic21hbGxCdXR0b25JbWFnZVwiIHNyYz17U21hbGxJbWFnZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNtYWxsQnV0dG9uVGFnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNtYWxsRXhwbGFpbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwwJSw5MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IGhzbGEoMCwwJSwxNSUsICAxKSAwICAwcHggMHB4IDRweCwgLyogYm9yZGVyICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDE1JSwgLjgpIDAgLTFweCA1cHggNHB4LCAvKiBzb2Z0IFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDAlLCAuMjUpIDAgLTFweCAwcHggN3B4LCAvKiBib3R0b20gU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDAsMCUsMTAwJSwuNykgMCAgMnB4IDFweCA3cHgsIC8qIHRvcCBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMCwwJSwgMCUsLjE1KSAwIC01cHggNnB4IDRweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDAsMCUsMTAwJSwuNSkgMCAgNXB4IDZweCA0cHg7IC8qIG91dGVyIEhMICovIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBCcnVzaGVkIE1ldGFsICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTV2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgICAwJSwgIDglIDUwJSwgaHNsYSgwLDAlLDEwMCUsLjUpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAxMDAlLCAxMiUgNTAlLCBoc2xhKDAsMCUsMTAwJSwuNikgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgIDAlICA1MCUsIDUwJSAgNyUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDEwMCUgIDUwJSwgNTAlICA1JSwgaHNsYSgwLDAlLDEwMCUsLjUpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDEwMCUgMTAwJSwgaHNsYSgwLDAlLCAgMCUsMCkgMCUsIGhzbGEoMCwwJSwgIDAlLDApICAgMyUsIGhzbGEoMCwwJSwgIDAlLC4xKSAzLjUlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDEwMCUgMTAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMCUsIGhzbGEoMCwwJSwxMDAlLDApICAgNiUsIGhzbGEoMCwwJSwxMDAlLC4xKSA3LjUlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDEwMCUgMTAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEuMiUsIGhzbGEoMCwwJSwxMDAlLC4yKSAyLjIlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMjAwJSA1MCUsIGhzbGEoMCwwJSw5MCUsMSkgNSUsIGhzbGEoMCwwJSw4NSUsMSkgMzAlLCBoc2xhKDAsMCUsNjAlLDEpIDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YmVmb3JlLCAjY2lyY2xlOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGZha2UgY29uaWNhbCBncmFkaWVudHMgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlICAgMCUsIDEwJSA1MCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAxMDAlLCAxMCUgNTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICAgMCUgIDUwJSwgNTAlIDEwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAxMDAlICA1MCUsIDUwJSAwNiUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTpiZWZvcmUgeyB0cmFuc2Zvcm06IHJvdGF0ZSggNjVkZWcpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YWZ0ZXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtNjVkZWcpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2woMjEwLCAxMDAlLCA0MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogaHNsYSgyMTAsMTAwJSwyMCUsLjMpIDAgLTFweCAwLCBoc2woMjEwLDEwMCUsODUlKSAwIDJweCAxcHgsIGhzbGEoMjAwLDEwMCUsODAlLDEpIDAgMCA1cHgsIGhzbGEoMjEwLDEwMCUsNTAlLC42KSAwIDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwzMCUsICAxKSAwICAwcHggMHB4IDRweCwgLyogYm9yZGVyICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwxNSUsIC40KSAwIC0xcHggNXB4IDRweCwgLyogc29mdCBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMjAlLC4yNSkgMCAtMXB4IDBweCA3cHgsIC8qIGJvdHRvbSBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMTAwJSwuNykgMCAgMnB4IDFweCA3cHgsIC8qIHRvcCBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDEwMCUsNzUlLCAuOCkgMCAgMHB4IDNweCAycHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsNTAlLDQwJSwgLjI1KSAwIC01cHggNnB4IDRweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCw4MCUsOTUlLCAgIDEpIDAgIDVweCA2cHggNHB4OyAvKiBvdXRlciBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEVuZCBCcnVzaGVkIE1ldGFsICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYgI2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiAjYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3NtYWxsQnV0dG9uVGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNDUlLCAtOTUlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnNtYWxsQnV0dG9uSW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMzAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU21hbGxCdXR0b247Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SmallButton.js */"));
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
      className3: "flipCard"
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
      className1: "flipCard is-flipped"
    });
  }

  unflip1() {
    this.setState({
      className1: "flipCard"
    });
  }

  flip2() {
    this.setState({
      className2: "flipCard is-flipped"
    });
  }

  unflip2() {
    this.setState({
      className2: "flipCard"
    });
  }

  flip3() {
    this.setState({
      className3: "flipCard is-flipped"
    });
  }

  unflip3() {
    this.setState({
      className3: "flipCard"
    });
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-1037881707",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "jsx-1037881707" + " " + "contentCanvas contentCanvas--card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, __jsx("div", {
      id: "flipContainer1",
      onMouseEnter: this.flip1,
      onMouseLeave: this.unflip1,
      className: "jsx-1037881707" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 25
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-1037881707" + " " + (this.state.className1 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 27
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/truck.jpg */ "./public/assets/truck.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-1037881707" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 31
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-1037881707" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 31
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/truck.jpg */ "./public/assets/truck.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-1037881707",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 33
      }
    }), __jsx("p", {
      className: "jsx-1037881707" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 33
      }
    }, "Card 1 Back")))), __jsx("div", {
      id: "flipContainer2",
      onMouseEnter: this.flip2,
      onMouseLeave: this.unflip2,
      className: "jsx-1037881707" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 25
      }
    }, __jsx("div", {
      id: "card2",
      className: "jsx-1037881707" + " " + (this.state.className2 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/pile-of-cats.jpg */ "./public/assets/pile-of-cats.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-1037881707" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 31
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-1037881707" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 31
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/pile-of-cats.jpg */ "./public/assets/pile-of-cats.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-1037881707",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 33
      }
    }), __jsx("p", {
      className: "jsx-1037881707" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 33
      }
    }, "Card 2 Back")))), __jsx("div", {
      id: "flipContainer3",
      onMouseEnter: this.flip3,
      onMouseLeave: this.unflip3,
      className: "jsx-1037881707" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 25
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-1037881707" + " " + (this.state.className3 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 25
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/money.jpeg */ "./public/assets/money.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-1037881707" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 31
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-1037881707" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 31
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/money.jpeg */ "./public/assets/money.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-1037881707",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 33
      }
    }), __jsx("p", {
      className: "jsx-1037881707" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 33
      }
    }, "Card 3 Back"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1037881707",
      __self: this
    }, ".cardText.jsx-1037881707{position:absolute;height:100%;width:100%;-webkit-transform:translateY(-65%);-ms-transform:translateY(-65%);transform:translateY(-65%);}#contentContainer.jsx-1037881707{position:absolute;height:100%;width:90%;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%);right:5%;overflow:hidden;border:5px solid silver;box-sizing:border-box;}@media (max-width:720px){#contentContainer.jsx-1037881707{height:100%;min-height:575px;overflow:hidden;}}.contentCanvas.jsx-1037881707{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}@media (max-width:720px){.contentCanvas.jsx-1037881707{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:102%;width:100%;margin-top:0%;}}.flipCard.jsx-1037881707{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}@media (max-width:720px){.flipCard.jsx-1037881707{width:100%;height:100%;}}.card__face.jsx-1037881707{position:absolute;height:100%;width:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;text-align:center;}.card__face--front.jsx-1037881707{background:white;}.card__face--back.jsx-1037881707{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCard.is-flipped.jsx-1037881707{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}@media (max-width:720px){.card__face--back.jsx-1037881707{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-1037881707{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}}@media (max-width:720px){#card2.jsx-1037881707{margin-top:-1%;}}@media (max-width:720px){#card3.jsx-1037881707{margin-top:-1%;}}.flipCardContainer.jsx-1037881707{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-1037881707{width:100%;height:33%;margin-top:0%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxDb250ZW50MS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SXVCLEFBSTZDLEFBT0EsQUFnQkosQUFRSixBQVVtQixBQVVqQixBQWVDLEFBTUssQUFRRCxBQUlBLEFBS1csQUFLVCxBQUtXLEFBWS9CLEFBT0EsQUFJbUIsQUFXTCxVQXJHRCxDQW1DRSxBQW1FRCxDQTlHTSxBQTRCSCxHQTJEaEIsQUFPQSxFQXJDRixBQUk4QixBQVVFLENBOUZsQixBQU9BLEFBaUVBLElBeENELEFBc0dLLENBbkVoQixLQWZnQixDQTVCRSxDQXZCUCxBQU9ELEFBaUVDLEdBeENDLEdBc0daLElBOUgya0UsQ0FOOWtFLEFBdUU4QixHQXJCaEIsQ0EzQlgsQUFRYyxVQW9CRixJQWxCZCxRQW1CWSxVQUNXLFlBa0VYLENBakZTLE1BZ0RyQixBQVVFLEVBMUMwQixDQWtFZCxJQWhETSxJQWpDSixJQWtGQSxFQXZDaEIsQUFVRSxNQXBEYSxFQWlDZixJQWlEYyxLQWpGSSxJQXpDbEIsR0EySHVCLE9BaEZyQixjQWtGRiwwQ0F0RThCLGdHQUNWLGtCQUNILGVBQ2pCLDB5REFuRG9DLGtDQUNoQixrQkFDTyx1RkFDaEIsU0FDTyxnQkFDUSx3QkFDRixzQkFDeEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxTbWFsbENvbnRlbnQxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jbGFzcyBTbWFsbENvbnRlbnQxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICBjbGFzc05hbWUxOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTI6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMzogXCJmbGlwQ2FyZFwiLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmxpcDEgPSB0aGlzLmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDEgPSB0aGlzLnVuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDIgPSB0aGlzLmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDIgPSB0aGlzLnVuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDMgPSB0aGlzLmZsaXAzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDMgPSB0aGlzLnVuZmxpcDMuYmluZCh0aGlzKTtcclxufVxyXG5cclxuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiB9KVxyXG59XHJcblxyXG51bmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZFwiIH0pXHJcbn1cclxuXHJcbmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIgfSlcclxufVxyXG5cclxudW5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmRcIiB9KVxyXG59XHJcblxyXG5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkXCIgfSlcclxufVxyXG5cclxuXHJcbnJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhcyBjb250ZW50Q2FudmFzLS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIxXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAxfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMX0gIGlkPVwiY2FyZDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9XCJzb2xvUHJvMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy90cnVjay5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3RydWNrLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDhweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCI+Q2FyZCAxIEJhY2s8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIyXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAyfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTJ9ICBpZD1cImNhcmQyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPVwic29sb1BybzFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvcGlsZS1vZi1jYXRzLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPVwic29sb1BybzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvcGlsZS1vZi1jYXRzLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDhweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCI+Q2FyZCAyIEJhY2s8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIzXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAzfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwM30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTN9ICBpZD1cImNhcmQxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPVwic29sb1BybzFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvbW9uZXkuanBlZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPVwic29sb1BybzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvbW9uZXkuanBlZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDhweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCI+Q2FyZCAzIEJhY2s8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FyZFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02NSUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FNQUFBQXA0WGlEQUFBQVVWQk1WRVdGaFlXRGc0TjNkM2R0YlcxN2UzdDFkWFdCZ1lHSGg0ZDVlWGx6YzNPTGk0dWJtNXVWbFpXUGo0K05qWTE5ZlgySmlZbC9mMzlyYTJ1UmtaR1ptWmxwYVdtWGw1ZHZiMjl4Y1hHVGs1Tm5aMmM4VFYxbUFBQUFHM1JTVGxOQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVBdkVPd3RBQUFGVmtsRVFWUjRYcFdXQjY3YzJCVUZiM2c1NTdUL2hSbzkvV1VNWkhsZ3I0Qmc4WjRxUWdRSmxISTRBOFN6RlZyYXB2bVRGOU83ZG1ZUkZaNjBZaUJoSlJDZ2gxRlloaUxBbWR2WDBDelRPcE5FNzdNRTBadHkvbldXemNoRHRpcXJtUURldXYzcG93UTV0YTJlTjBGWTBJbmtxREQ3M2xUOWM5bEV6d1VOcWdGSHM5VlFjZTNUVkNsRkNRclNUZk9pWWtWSlFCbXBicTJMNmlaYXZQbkFQY29VMGRTdzBTVVRxei9HdHJHdVhmYnl5Qm5pS3lrT1dRV0dxd3dNQTdRaVlBeGkrSWxQZHFvK2hZSG5VdDVaUGZuc0hKeU5pRHRucEp5YXlOQmtGNmNXb1lHQU1ZOTJVMmhYSEYvQzFNOHVQL1p0WWRpdWoyNlVkQWRRUVNYUUVyd1NPTXp0L1hXUldBejVHdVNCSWt3RzFIM0ZhYkoyT3NVT1VoR0M2dEs0RU10Sk8wdHRDNklCRDNrTTB2ZTB0SndNZFNmalpvK0VFSVNhZVRyOVAzd1lyR2pYcXlDMWtyY0tkaE1weEVudDVKZXRvdWxzY3B5emhYTjVGUnB1UEh2YmVRYUt4RkFFQjZFTitjWU42eEQ3UllHcFhwTm5kTW1aZ001RGNzM1lTTkZESFVvMkxHZlp1dWtTV3lVWWlySkFkWWJGM01mcUVLbWpNK0kyRWZoQTk0aUczTDd1S3JSK0dkV0Q3M3lkbElCKzZoZ3JlZjFRVGxtZ21iTTMvTGVYNUdJMVV4MVJXcGd4cEx1WjIrSStJanpaOHdxRTRuaWx2UWRrVWRmaHpJNVFEV3kra3c1V2dnMnBHcGVFVmVDQ0E3Yjg1Qk8zRjlEenhCM2NkcXZCeldjbXpieU1pcWh6dVlxdEhSVkcyeTR4K0tPbG55cWxhOEFvV1dwdUJvWVJ4elhyZkt1SUxsNlNmaVdDYmp4b1pKVWFDQmoxQ2pIN0dJYURiYzlrcUJZM1cvUmdqZGExaXFRY09KdTJXVys3NnBaQzlRRzdNMDBkZmZlOWhObnNldXBGTDUzcjhGN1lIU3dKV1VLUDJxK2s3UmRzeHlPQjExbjB4dE92blc0aXJNTUZOVjRIMHVxd1M1RXhzbVA5QXhiRFRjOUp3Z25lQVQ1dlRpVVNtMUU3QlNmbFN0M2JmYTF0djhEaTNSOG4zQWY3TU5XenM0OWhtYXVFMndQK3R0cnErQXNXcEZHMmF3dnN1T3FiaXBXSGd0dXZ1YUFFK0ExWi83Z0M5aGVzbnIrN3dxQ3dHOGM1eUFnM0FMMWZtOFQ5QVp0cC9iYkpHd2wxcE5yRTdSdU9YN1BlTVJVRVJWYVBwRXMreXFlb1NtdU9sb2txdzQ5cGdvbWpMZWg3aWNITmxHMTl5anM2WFhPTWVkWW01eEgyWXhwVjJ0YzBSbzJqSmZ4QzUwQXB1eEdvYjdsTXN4ZlRiZVV2MDdUeVl4cGVMdWNFSDFnTmQ0SUtIMkxBZzVUZFZobENhZlp2cHNrZm5jQ2Z4OHBPaEp6ZDc2YkpXZVlGbkZjaXdjWWZ1YlJjMTJJcC9wcEloQTEvbVNaL1J4akZEckpDNXhpZkZqSnBZMlhsNXpYZGd1RnFZeVRSMXpTcDFZOXArdGt0RFlZU05mbGN4STBpeU80VFBCZGxSY3BlcWpLL3BpRjVia2xxNzdWU0VhQSt6OHFtSlRGeklXaWl0Ym56Ujc5NFVTS0JVYVQwTlRFc1ZqWnFMYUZWcUpvUE45T0RHNzBJUGJmQkhLSysvcS9BV1IwdEp6WUhSVUxPYTRNUCtXL0hmR2FkWlViZncxNzdHN2ovT0diSXM4VGFoTHl5bmw0WDRSaW5GNzkzT3orQlUwc2FYdFVIclZCRlQvRG5BM2N0TlBvR2JzNGhSSWpUb2s4aSthbGdUMWxUSGk0U3hGdk9OS05yZ1FGQXEyL2dGbldNWGd3ZmZnWU1KcGlLWWttVzN0VGczWlE5SnErZjhYTitBNWVlVUtIV3ZKV0oyc2dKMVNvcCt3d2hxRlZpanFXYUpod3REOE1ObFNCZVdOTldUYTVaNWtQWnc1K0xiVlQ5OXdxVGR4MjlsTVVINE9JRy9EODZydUtFYXVCanZINXh5NnVtL1NmajdlaTZVVVZrNEFJbDNNeUQ0TVNTVE9GZ1N3c0gvUUpXYVE1YXM3WmNtZ0Jaa3pqalUxVXJRNzRjaTFnV0JDU0dIdHVWMUgybWhTbk8zV3AvM2ZFVjVhKzR3ei8vNnF5OEp4alpzbXh4eTUrNHc5Q0ROSlkwOVQwNzJpS0cwRW5PUzBhckVZZ1hxWW5YY1lId2pUdFVOQWNNZWxPZDR4cGtvcWlUWUlDV0ZxMEpTaVBmUERRZG50KzQvd3VxY1hZNDdRSUxiZ0FBQUFCSlJVNUVya0pnZ2c9PScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgc2lsdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTElXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICNjYXJkMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMSVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNtYWxsQ29udGVudDE7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SmallContent1.js */"));
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
      className3: "flipCard"
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
      className1: "flipCard is-flipped"
    });
  }

  unflip1() {
    this.setState({
      className1: "flipCard"
    });
  }

  flip2() {
    this.setState({
      className2: "flipCard is-flipped"
    });
  }

  unflip2() {
    this.setState({
      className2: "flipCard"
    });
  }

  flip3() {
    this.setState({
      className3: "flipCard is-flipped"
    });
  }

  unflip3() {
    this.setState({
      className3: "flipCard"
    });
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-2146410261",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-2146410261" + " " + "contentCanvas contentCanvas--card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "flipContainer1",
      onMouseEnter: this.flip1,
      onMouseLeave: this.unflip1,
      className: "jsx-2146410261" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-2146410261" + " " + (this.state.className1 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/truck.jpg */ "./public/assets/truck.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-2146410261" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-2146410261" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/truck.jpg */ "./public/assets/truck.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-2146410261",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-2146410261" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 27
      }
    }, "Card 1 Back")))), __jsx("div", {
      id: "flipContainer2",
      onMouseEnter: this.flip2,
      onMouseLeave: this.unflip2,
      className: "jsx-2146410261" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card2",
      className: "jsx-2146410261" + " " + (this.state.className2 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/pile-of-cats.jpg */ "./public/assets/pile-of-cats.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-2146410261" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-2146410261" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/pile-of-cats.jpg */ "./public/assets/pile-of-cats.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-2146410261",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-2146410261" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 27
      }
    }, "Card 2 Back")))), __jsx("div", {
      id: "flipContainer3",
      onMouseEnter: this.flip3,
      onMouseLeave: this.unflip3,
      className: "jsx-2146410261" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-2146410261" + " " + (this.state.className3 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/money.jpeg */ "./public/assets/money.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-2146410261" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-2146410261" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/money.jpeg */ "./public/assets/money.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-2146410261",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-2146410261" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 27
      }
    }, "Card 3 Back"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2146410261",
      __self: this
    }, ".cardText.jsx-2146410261{position:absolute;height:100%;width:100%;-webkit-transform:translateY(-65%);-ms-transform:translateY(-65%);transform:translateY(-65%);}#contentContainer.jsx-2146410261{position:absolute;height:100%;width:90%;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);right:15%;overflow:hidden;border:5px solid silver;box-sizing:border-box;}@media (max-width:720px){#contentContainer.jsx-2146410261{height:100%;min-height:575px;overflow:hidden;}}.contentCanvas.jsx-2146410261{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}@media (max-width:720px){.contentCanvas.jsx-2146410261{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:102%;width:100%;margin-top:0%;}}.flipCard.jsx-2146410261{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}@media (max-width:720px){.flipCard.jsx-2146410261{width:100%;height:100%;}}.card__face.jsx-2146410261{position:absolute;height:100%;width:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;text-align:center;}.card__face--front.jsx-2146410261{background:white;}.card__face--back.jsx-2146410261{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCard.is-flipped.jsx-2146410261{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}@media (max-width:720px){.card__face--back.jsx-2146410261{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-2146410261{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}}@media (max-width:720px){#card2.jsx-2146410261{margin-top:-1%;}}@media (max-width:720px){#card3.jsx-2146410261{margin-top:-1%;}}.flipCardContainer.jsx-2146410261{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-2146410261{width:100%;height:33%;margin-top:0%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxDb250ZW50Mi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SWlCLEFBSXVDLEFBT0EsQUFnQkosQUFRSixBQVVtQixBQVVqQixBQWVDLEFBTUssQUFRRCxBQUlBLEFBS1csQUFLVCxBQUtXLEFBWS9CLEFBT0EsQUFJbUIsQUFXTCxVQXJHRCxDQW1DRSxBQW1FRCxDQTlHTSxBQTRCSCxHQTJEaEIsQUFPQSxFQXJDRixBQUk4QixBQVVFLENBOUZsQixBQU9BLEFBaUVBLElBeENELEFBc0dLLENBbkVoQixLQWZnQixDQTVCRSxDQXZCUCxBQU9ELEFBaUVDLEdBeENDLEdBc0daLElBOUgya0UsQ0FOOWtFLEFBdUU4QixHQXJCaEIsQ0EzQlgsQUFRYyxVQW9CRixJQWxCZCxRQW1CWSxVQUNXLFlBa0VYLENBakZTLE1BZ0RyQixBQVVFLEVBMUMwQixDQWtFZCxJQWhETSxJQWpDSixJQWtGQSxFQXZDaEIsQUFVRSxNQXBEYSxFQWlDZixJQWlEYyxLQWpGSSxJQXpDbEIsR0EySHVCLE9BaEZyQixjQWtGRiwwQ0F0RThCLGdHQUNWLGtCQUNILGVBQ2pCLDB5REFuRG9DLGtDQUNoQixrQkFDVSxnR0FDbEIsVUFDTSxnQkFDUSx3QkFDRixzQkFDeEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxTbWFsbENvbnRlbnQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFNtYWxsQ29udGVudDIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgIGNsYXNzTmFtZTE6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMjogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUzOiBcImZsaXBDYXJkXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mbGlwMSA9IHRoaXMuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMSA9IHRoaXMudW5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMiA9IHRoaXMuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMiA9IHRoaXMudW5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMyA9IHRoaXMuZmxpcDMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMyA9IHRoaXMudW5mbGlwMy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkXCIgfSlcclxufVxyXG5cclxuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiB9KVxyXG59XHJcblxyXG51bmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZFwiIH0pXHJcbn1cclxuXHJcbmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIgfSlcclxufVxyXG5cclxudW5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmRcIiB9KVxyXG59XHJcblxyXG5cclxucmVuZGVyKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzIGNvbnRlbnRDYW52YXMtLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjFcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDF9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAxfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUxfSAgaWQ9XCJjYXJkMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3RydWNrLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPVwic29sb1BybzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvdHJ1Y2suanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoOHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIj5DYXJkIDEgQmFjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjJcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDJ9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMn0gIGlkPVwiY2FyZDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9XCJzb2xvUHJvMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9waWxlLW9mLWNhdHMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9waWxlLW9mLWNhdHMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoOHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIj5DYXJkIDIgQmFjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjNcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDN9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAzfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lM30gIGlkPVwiY2FyZDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9XCJzb2xvUHJvMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9tb25leS5qcGVnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9tb25leS5qcGVnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoOHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIj5DYXJkIDMgQmFjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTY1JSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbVpnTTVEY3MzWVNORkRIVW8yTEdmWnV1a1NXeVVZaXJKQWRZYkYzTWZxRUttak0rSTJFZmhBOTRpRzNMN3VLclIrR2RXRDczeWRsSUIrNmhncmVmMVFUbG1nbWJNMy9MZVg1R0kxVXgxUldwZ3hwTHVaMitJK0lqelo4d3FFNG5pbHZRZGtVZGZoekk1UURXeStrdzVXZ2cycEdwZUVWZUNDQTdiODVCTzNGOUR6eEIzY2RxdkJ6V2NtemJ5TWlxaHp1WXF0SFJWRzJ5NHgrS09sbnlxbGE4QW9XV3B1Qm9ZUnh6WHJmS3VJTGw2U2ZpV0NianhvWkpVYUNCajFDakg3R0lhRGJjOWtxQlkzVy9SZ2pkYTFpcVFjT0p1MldXKzc2cFpDOVFHN00wMGRmZmU5aE5uc2V1cEZMNTNyOEY3WUhTd0pXVUtQMnErazdSZHN4eU9CMTFuMHh0T3ZuVzRpck1NRk5WNEgwdXF3UzVFeHNtUDlBeGJEVGM5SndnbmVBVDV2VGlVU20xRTdCU2ZsU3QzYmZhMXR2OERpM1I4bjNBZjdNTld6czQ5aG1hdUUyd1ArdHRycStBc1dwRkcyYXd2c3VPcWJpcFdIZ3R1dnVhQUUrQTFaLzdnQzloZXNucis3d3FDd0c4YzV5QWczQUwxZm04VDlBWnRwL2JiSkd3bDFwTnJFN1J1T1g3UGVNUlVFUlZhUHBFcyt5cWVvU211T2xva3F3NDlwZ29takxlaDdpY0hObEcxOXlqczZYWE9NZWRZbTV4SDJZeHBWMnRjMFJvMmpKZnhDNTBBcHV4R29iN2xNc3hmVGJlVXYwN1R5WXhwZUx1Y0VIMWdOZDRJS0gyTEFnNVRkVmhsQ2FmWnZwc2tmbmNDZng4cE9oSnpkNzZiSldlWUZuRmNpd2NZZnViUmMxMklwL3BwSWhBMS9tU1ovUnhqRkRySkM1eGlmRmpKcFkyWGw1elhkZ3VGcVl5VFIxelNwMVk5cCt0a3REWVlTTmZsY3hJMGl5TzRUUEJkbFJjcGVxaksvcGlGNWJrbHE3N1ZTRWFBK3o4cW1KVEZ6SVdpaXRibnpSNzk0VVNLQlVhVDBOVEVzVmpacUxhRlZxSm9QTjlPREc3MElQYmZCSEtLKy9xL0FXUjB0SnpZSFJVTE9hNE1QK1cvSGZHYWRaVWJmdzE3N0c3ai9PR2JJczhUYWhMeXlubDRYNFJpbkY3OTNPeitCVTBzYVh0VUhyVkJGVC9EbkEzY3ROUG9HYnM0aFJJalRvazhpK2FsZ1QxbFRIaTRTeEZ2T05LTnJnUUZBcTIvZ0ZuV01YZ3dmZmdZTUpwaUtZa21XM3RUZzNaUTlKcStmOFhOK0E1ZWVVS0hXdkpXSjJzZ0oxU29wK3d3aHFGVmlqcVdhSmh3dEQ4TU5sU0JlV05OV1RhNVo1a1BadzUrTGJWVDk5d3FUZHgyOWxNVUg0T0lHL0Q4NnJ1S0VhdUJqdkg1eHk2dW0vU2ZqN2VpNlVVVms0QUlsM015RDRNU1NUT0ZnU3dzSC9RSldhUTVhczdaY21nQlprempqVTFVclE3NGNpMWdXQkNTR0h0dVYxSDJtaFNuTzNXcC8zZkVWNWErNHd6Ly82cXk4SnhqWnNteHh5NSs0dzlDRE5KWTA5VDA3MmlLRzBFbk9TMGFyRVlnWHFZblhjWUh3alR0VU5BY01lbE9kNHhwa29xaVRZSUNXRnEwSlNpUGZQRFFkbnQrNC93dXFjWFk0N1FJTGJnQUFBQUJKUlU1RXJrSmdnZz09Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgc2lsdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmQxIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xJVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTElXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDQwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbik7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTbWFsbENvbnRlbnQyOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SmallContent2.js */"));
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
      className3: "flipCard"
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
      className1: "flipCard is-flipped"
    });
  }

  unflip1() {
    this.setState({
      className1: "flipCard"
    });
  }

  flip2() {
    this.setState({
      className2: "flipCard is-flipped"
    });
  }

  unflip2() {
    this.setState({
      className2: "flipCard"
    });
  }

  flip3() {
    this.setState({
      className3: "flipCard is-flipped"
    });
  }

  unflip3() {
    this.setState({
      className3: "flipCard"
    });
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-1598990884",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-1598990884" + " " + "contentCanvas contentCanvas--card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "flipContainer1",
      onMouseEnter: this.flip1,
      onMouseLeave: this.unflip1,
      className: "jsx-1598990884" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-1598990884" + " " + (this.state.className1 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/truck.jpg */ "./public/assets/truck.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-1598990884" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-1598990884" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/truck.jpg */ "./public/assets/truck.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-1598990884",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-1598990884" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 27
      }
    }, "Card 1 Back")))), __jsx("div", {
      id: "flipContainer2",
      onMouseEnter: this.flip2,
      onMouseLeave: this.unflip2,
      className: "jsx-1598990884" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card2",
      className: "jsx-1598990884" + " " + (this.state.className2 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/pile-of-cats.jpg */ "./public/assets/pile-of-cats.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-1598990884" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-1598990884" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/pile-of-cats.jpg */ "./public/assets/pile-of-cats.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-1598990884",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-1598990884" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 27
      }
    }, "Card 2 Back")))), __jsx("div", {
      id: "flipContainer3",
      onMouseEnter: this.flip3,
      onMouseLeave: this.unflip3,
      className: "jsx-1598990884" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-1598990884" + " " + (this.state.className3 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/money.jpeg */ "./public/assets/money.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-1598990884" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-1598990884" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/money.jpeg */ "./public/assets/money.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-1598990884",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-1598990884" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 27
      }
    }, "Card 3 Back"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1598990884",
      __self: this
    }, ".cardText.jsx-1598990884{position:absolute;height:100%;width:100%;-webkit-transform:translateY(-65%);-ms-transform:translateY(-65%);transform:translateY(-65%);}#contentContainer.jsx-1598990884{position:absolute;height:100%;width:90%;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(-200%);-ms-transform:translateX(-200%);transform:translateX(-200%);right:25%;overflow:hidden;border:5px solid silver;box-sizing:border-box;}@media (max-width:720px){#contentContainer.jsx-1598990884{height:100%;min-height:575px;overflow:hidden;}}.contentCanvas.jsx-1598990884{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}@media (max-width:720px){.contentCanvas.jsx-1598990884{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:102%;width:100%;margin-top:0%;}}.flipCard.jsx-1598990884{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}@media (max-width:720px){.flipCard.jsx-1598990884{width:100%;height:100%;}}.card__face.jsx-1598990884{position:absolute;height:100%;width:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;text-align:center;}.card__face--front.jsx-1598990884{background:white;}.card__face--back.jsx-1598990884{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCard.is-flipped.jsx-1598990884{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}@media (max-width:720px){.card__face--back.jsx-1598990884{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-1598990884{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}}@media (max-width:720px){#card2.jsx-1598990884{margin-top:-1%;}}@media (max-width:720px){#card3.jsx-1598990884{margin-top:-1%;}}.flipCardContainer.jsx-1598990884{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-1598990884{width:100%;height:33%;margin-top:0%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxDb250ZW50My5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SWlCLEFBSXVDLEFBT0EsQUFnQkosQUFRSixBQVVtQixBQVVqQixBQWVDLEFBTUssQUFRRCxBQUlBLEFBS1csQUFLVCxBQUtXLEFBWS9CLEFBT0EsQUFJbUIsQUFXTCxVQXJHRCxDQW1DRSxBQW1FRCxDQTlHTSxBQTRCSCxHQTJEaEIsQUFPQSxFQXJDRixBQUk4QixBQVVFLENBOUZsQixBQU9BLEFBaUVBLElBeENELEFBc0dLLENBbkVoQixLQWZnQixDQTVCRSxDQXZCUCxBQU9ELEFBaUVDLEdBeENDLEdBc0daLElBOUgya0UsQ0FOOWtFLEFBdUU4QixHQXJCaEIsQ0EzQlgsQUFRYyxVQW9CRixJQWxCZCxRQW1CWSxVQUNXLFlBa0VYLENBakZTLE1BZ0RyQixBQVVFLEVBMUMwQixDQWtFZCxJQWhETSxJQWpDSixJQWtGQSxFQXZDaEIsQUFVRSxNQXBEYSxFQWlDZixJQWlEYyxLQWpGSSxJQXpDbEIsR0EySHVCLE9BaEZyQixjQWtGRiwwQ0F0RThCLGdHQUNWLGtCQUNILGVBQ2pCLDB5REFuRG9DLGtDQUNoQixrQkFDVSxnR0FDbEIsVUFDTSxnQkFDUSx3QkFDRixzQkFDeEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxTbWFsbENvbnRlbnQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFNtYWxsQ29udGVudDMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgIGNsYXNzTmFtZTE6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMjogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUzOiBcImZsaXBDYXJkXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mbGlwMSA9IHRoaXMuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMSA9IHRoaXMudW5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMiA9IHRoaXMuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMiA9IHRoaXMudW5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMyA9IHRoaXMuZmxpcDMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMyA9IHRoaXMudW5mbGlwMy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkXCIgfSlcclxufVxyXG5cclxuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiB9KVxyXG59XHJcblxyXG51bmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZFwiIH0pXHJcbn1cclxuXHJcbmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIgfSlcclxufVxyXG5cclxudW5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmRcIiB9KVxyXG59XHJcblxyXG5cclxucmVuZGVyKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzIGNvbnRlbnRDYW52YXMtLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjFcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDF9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAxfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUxfSAgaWQ9XCJjYXJkMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3RydWNrLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPVwic29sb1BybzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvdHJ1Y2suanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoOHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIj5DYXJkIDEgQmFjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjJcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDJ9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMn0gIGlkPVwiY2FyZDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9XCJzb2xvUHJvMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9waWxlLW9mLWNhdHMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9waWxlLW9mLWNhdHMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoOHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIj5DYXJkIDIgQmFjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjNcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDN9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAzfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lM30gIGlkPVwiY2FyZDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9XCJzb2xvUHJvMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9tb25leS5qcGVnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9tb25leS5qcGVnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoOHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIj5DYXJkIDMgQmFjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTY1JSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbVpnTTVEY3MzWVNORkRIVW8yTEdmWnV1a1NXeVVZaXJKQWRZYkYzTWZxRUttak0rSTJFZmhBOTRpRzNMN3VLclIrR2RXRDczeWRsSUIrNmhncmVmMVFUbG1nbWJNMy9MZVg1R0kxVXgxUldwZ3hwTHVaMitJK0lqelo4d3FFNG5pbHZRZGtVZGZoekk1UURXeStrdzVXZ2cycEdwZUVWZUNDQTdiODVCTzNGOUR6eEIzY2RxdkJ6V2NtemJ5TWlxaHp1WXF0SFJWRzJ5NHgrS09sbnlxbGE4QW9XV3B1Qm9ZUnh6WHJmS3VJTGw2U2ZpV0NianhvWkpVYUNCajFDakg3R0lhRGJjOWtxQlkzVy9SZ2pkYTFpcVFjT0p1MldXKzc2cFpDOVFHN00wMGRmZmU5aE5uc2V1cEZMNTNyOEY3WUhTd0pXVUtQMnErazdSZHN4eU9CMTFuMHh0T3ZuVzRpck1NRk5WNEgwdXF3UzVFeHNtUDlBeGJEVGM5SndnbmVBVDV2VGlVU20xRTdCU2ZsU3QzYmZhMXR2OERpM1I4bjNBZjdNTld6czQ5aG1hdUUyd1ArdHRycStBc1dwRkcyYXd2c3VPcWJpcFdIZ3R1dnVhQUUrQTFaLzdnQzloZXNucis3d3FDd0c4YzV5QWczQUwxZm04VDlBWnRwL2JiSkd3bDFwTnJFN1J1T1g3UGVNUlVFUlZhUHBFcyt5cWVvU211T2xva3F3NDlwZ29takxlaDdpY0hObEcxOXlqczZYWE9NZWRZbTV4SDJZeHBWMnRjMFJvMmpKZnhDNTBBcHV4R29iN2xNc3hmVGJlVXYwN1R5WXhwZUx1Y0VIMWdOZDRJS0gyTEFnNVRkVmhsQ2FmWnZwc2tmbmNDZng4cE9oSnpkNzZiSldlWUZuRmNpd2NZZnViUmMxMklwL3BwSWhBMS9tU1ovUnhqRkRySkM1eGlmRmpKcFkyWGw1elhkZ3VGcVl5VFIxelNwMVk5cCt0a3REWVlTTmZsY3hJMGl5TzRUUEJkbFJjcGVxaksvcGlGNWJrbHE3N1ZTRWFBK3o4cW1KVEZ6SVdpaXRibnpSNzk0VVNLQlVhVDBOVEVzVmpacUxhRlZxSm9QTjlPREc3MElQYmZCSEtLKy9xL0FXUjB0SnpZSFJVTE9hNE1QK1cvSGZHYWRaVWJmdzE3N0c3ai9PR2JJczhUYWhMeXlubDRYNFJpbkY3OTNPeitCVTBzYVh0VUhyVkJGVC9EbkEzY3ROUG9HYnM0aFJJalRvazhpK2FsZ1QxbFRIaTRTeEZ2T05LTnJnUUZBcTIvZ0ZuV01YZ3dmZmdZTUpwaUtZa21XM3RUZzNaUTlKcStmOFhOK0E1ZWVVS0hXdkpXSjJzZ0oxU29wK3d3aHFGVmlqcVdhSmh3dEQ4TU5sU0JlV05OV1RhNVo1a1BadzUrTGJWVDk5d3FUZHgyOWxNVUg0T0lHL0Q4NnJ1S0VhdUJqdkg1eHk2dW0vU2ZqN2VpNlVVVms0QUlsM015RDRNU1NUT0ZnU3dzSC9RSldhUTVhczdaY21nQlprempqVTFVclE3NGNpMWdXQkNTR0h0dVYxSDJtaFNuTzNXcC8zZkVWNWErNHd6Ly82cXk4SnhqWnNteHh5NSs0dzlDRE5KWTA5VDA3MmlLRzBFbk9TMGFyRVlnWHFZblhjWUh3alR0VU5BY01lbE9kNHhwa29xaVRZSUNXRnEwSlNpUGZQRFFkbnQrNC93dXFjWFk0N1FJTGJnQUFBQUJKUlU1RXJrSmdnZz09Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgc2lsdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmQxIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xJVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTElXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDQwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbik7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTbWFsbENvbnRlbnQzOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SmallContent3.js */"));
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
      className: "jsx-2276336398",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-2276336398",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, __jsx("p", {
      id: "smallButtonTag",
      className: "jsx-2276336398",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, "Multi-User"), __jsx("p", {
      id: "smallExplain",
      className: "jsx-2276336398",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    }, "Multiple converter buyers from a single physical location.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2276336398",
      __self: this
    }, "#smallExplain.jsx-2276336398{color:white;pointer-events:none;-webkit-transform:translate(0%,-35%);-ms-transform:translate(0%,-35%);transform:translate(0%,-35%);}@media only screen and (max-width:608px){#explainContainer.jsx-2276336398{-webkit-transform:translate(0%,0%);-ms-transform:translate(0%,0%);transform:translate(0%,0%);}}#smallButtonTag.jsx-2276336398{color:white;-webkit-text-decoration:underline;text-decoration:underline;position:relative;font-weight:600;font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxFeHBsYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCeUIsQUFJeUMsQUFRYixBQUlhLFlBWFEsQUFZTSxvQkFWL0Isd0NBV3VCLGtCQUNGLEdBUGhCLGFBUWdCLGdCQUNsQixTQWRGIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxFeHBsYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFNtYWxsRXhwbGFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJleHBsYWluQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJzbWFsbEJ1dHRvblRhZ1wiPk11bHRpLVVzZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwic21hbGxFeHBsYWluXCI+TXVsdGlwbGUgY29udmVydGVyIGJ1eWVycyBmcm9tIGEgc2luZ2xlIHBoeXNpY2FsIGxvY2F0aW9uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNzbWFsbEV4cGxhaW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTM1JSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2V4cGxhaW5Db250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjc21hbGxCdXR0b25UYWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNtYWxsRXhwbGFpbjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SmallExplain.js */"));
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
      className: "jsx-2306726688",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, __jsx("div", {
      id: "circle",
      className: "jsx-2306726688",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: _public_assets_single_figure_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      className: "jsx-2306726688" + " " + "soloButtonImage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 25
      }
    })), __jsx("div", {
      id: "soloButtonTag",
      className: "jsx-2306726688",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }, __jsx(_SoloExplain__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 23
      }
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2306726688",
      __self: this
    }, "#circle.jsx-2306726688{background-color:hsl(0,0%,90%);box-shadow:inset hsla(0,0%,15%,1) 0 0px 0px 4px, inset hsla(0,0%,15%,.8) 0 -1px 5px 4px, inset hsla(0,0%,0%,.25) 0 -1px 0px 7px, inset hsla(0,0%,100%,.7) 0 2px 1px 7px,  hsla(0,0%,0%,.15) 0 -5px 6px 4px, hsla(0,0%,100%,.5) 0 5px 6px 4px;-webkit-transition:color .2s;transition:color .2s;min-width:150px;min-height:150px;width:15vw;height:15vw;line-height:1px;border-radius:50%;background-image: -webkit-radial-gradient( 50% 0%,8% 50%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 50% 100%,12% 50%,hsla(0,0%,100%,.6) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 0% 50%,50% 7%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%), -webkit-radial-gradient( 100% 50%,50% 5%,hsla(0,0%,100%,.5) 0%,hsla(0,0%,100%,0) 100%),  -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,0%,0) 0%,hsla(0,0%,0%,0) 3%,hsla(0,0%,0%,.1) 3.5%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 6%,hsla(0,0%,100%,.1) 7.5%), -webkit-repeating-radial-gradient( 50% 50%,100% 100%,hsla(0,0%,100%,0) 0%,hsla(0,0%,100%,0) 1.2%,hsla(0,0%,100%,.2) 2.2%),  -webkit-radial-gradient( 50% 50%,200% 50%,hsla(0,0%,90%,1) 5%,hsla(0,0%,85%,1) 30%,hsla(0,0%,60%,1) 100%);}#circle.jsx-2306726688:before,#circle.jsx-2306726688:after{content:\"\";top:0%;left:0%;position:relative;width:inherit;height:inherit;border-radius:inherit;background-image: -webkit-radial-gradient( 50% 0%,10% 50%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 50% 100%,10% 50%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 0% 50%,50% 10%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%), -webkit-radial-gradient( 100% 50%,50% 06%,hsla(0,0%,0%,.1) 0%,hsla(0,0%,0%,0) 0%);}#circle.jsx-2306726688:before{-webkit-transform:rotate( 65deg);-ms-transform:rotate( 65deg);transform:rotate( 65deg);}#circle.jsx-2306726688:after{-webkit-transform:rotate(-65deg);-ms-transform:rotate(-65deg);transform:rotate(-65deg);}#circle.jsx-2306726688:active{color:hsl(210,100%,40%);text-shadow:hsla(210,100%,20%,.3) 0 -1px 0,hsl(210,100%,85%) 0 2px 1px,hsla(200,100%,80%,1) 0 0 5px,hsla(210,100%,50%,.6) 0 0 20px;box-shadow: inset hsla(210,100%,30%,1) 0 0px 0px 4px, inset hsla(210,100%,15%,.4) 0 -1px 5px 4px, inset hsla(210,100%,20%,.25) 0 -1px 0px 7px, inset hsla(210,100%,100%,.7) 0 2px 1px 7px,  hsla(210,100%,75%,.8) 0 0px 3px 2px, hsla(210,50%,40%,.25) 0 -5px 6px 4px, hsla(210,80%,95%,1) 0 5px 6px 4px;}div.jsx-2306726688 #buttons.jsx-2306726688{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}@media (max-width:720px){div.jsx-2306726688 #buttons.jsx-2306726688{height:150px;width:150px;}}@media (max-width:720px){#soloButtonTag.jsx-2306726688{position:absolute;-webkit-transform:translate(145%,-105%);-ms-transform:translate(145%,-105%);transform:translate(145%,-105%);}}.soloButtonImage.jsx-2306726688{position:relative;height:80%;width:80%;min-width:100px;min-height:90px;-webkit-transform:translate(0%,10%);-ms-transform:translate(0%,10%);transform:translate(0%,10%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QnlCLEFBSWdFLEFBaUNwQixBQWU0QixBQUNELEFBR1osQUFrQkgsQUFNUixBQU9LLEFBTUYsV0F2RFgsRUEyQ08sS0ExQ04sQUFrRFQsQUFLWSxNQXJDeUgsQ0F5QnBJLENBMUNrQixHQXVEUixFQXBGdUIsUUFxRmpCLEtBdkRGLFdBd0RFLEdBdkRELGFBd0RjLEVBdkRQLGNBU2tCLEFBQ0QsUUFIZ0QsSUF5QmxFLDJCQWNyQiw2QkF2QnFDLFlBaUN2QyxRQXZCQSw2RkEvRHVCLGtEQUdMLGdCQUNDLGlCQUNOLFdBQ0MsWUFDSSxnQkFDRSxrQkFXMkYsZ0NBbUIvRyxZQWdCQSxzeEJBakNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTb2xvRXhwbGFpbiBmcm9tICcuL1NvbG9FeHBsYWluJztcclxuaW1wb3J0IFNpbmdsZUZpZ3VyZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL3NpbmdsZS1maWd1cmUucG5nJztcclxuXHJcblxyXG5jbGFzcyBTb2xvQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzb2xvQnV0dG9uSW1hZ2VcIiBzcmM9e1NpbmdsZUZpZ3VyZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzb2xvQnV0dG9uVGFnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U29sb0V4cGxhaW4gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGUge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsMCUsOTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCBoc2xhKDAsMCUsMTUlLCAgMSkgMCAgMHB4IDBweCA0cHgsIC8qIGJvcmRlciAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwxNSUsIC44KSAwIC0xcHggNXB4IDRweCwgLyogc29mdCBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwwJSwgLjI1KSAwIC0xcHggMHB4IDdweCwgLyogYm90dG9tIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDEwMCUsLjcpIDAgIDJweCAxcHggN3B4LCAvKiB0b3AgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDAsMCUsIDAlLC4xNSkgMCAtNXB4IDZweCA0cHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgwLDAlLDEwMCUsLjUpIDAgIDVweCA2cHggNHB4OyAvKiBvdXRlciBITCAqLyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogQnJ1c2hlZCBNZXRhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlICAgMCUsICA4JSA1MCUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgMTAwJSwgMTIlIDUwJSwgaHNsYSgwLDAlLDEwMCUsLjYpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggICAwJSAgNTAlLCA1MCUgIDclLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAxMDAlICA1MCUsIDUwJSAgNSUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwgIDAlLDApIDAlLCBoc2xhKDAsMCUsICAwJSwwKSAgIDMlLCBoc2xhKDAsMCUsICAwJSwuMSkgMy41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAgIDYlLCBoc2xhKDAsMCUsMTAwJSwuMSkgNy41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxLjIlLCBoc2xhKDAsMCUsMTAwJSwuMikgMi4yJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDIwMCUgNTAlLCBoc2xhKDAsMCUsOTAlLDEpIDUlLCBoc2xhKDAsMCUsODUlLDEpIDMwJSwgaHNsYSgwLDAlLDYwJSwxKSAxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmJlZm9yZSwgI2NpcmNsZTphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBmYWtlIGNvbmljYWwgZ3JhZGllbnRzICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAgIDAlLCAxMCUgNTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgMTAwJSwgMTAlIDUwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgIDAlICA1MCUsIDUwJSAxMCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggMTAwJSAgNTAlLCA1MCUgMDYlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YmVmb3JlIHsgdHJhbnNmb3JtOiByb3RhdGUoIDY1ZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmFmdGVyIHsgdHJhbnNmb3JtOiByb3RhdGUoLTY1ZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsKDIxMCwgMTAwJSwgNDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IGhzbGEoMjEwLDEwMCUsMjAlLC4zKSAwIC0xcHggMCwgaHNsKDIxMCwxMDAlLDg1JSkgMCAycHggMXB4LCBoc2xhKDIwMCwxMDAlLDgwJSwxKSAwIDAgNXB4LCBoc2xhKDIxMCwxMDAlLDUwJSwuNikgMCAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMzAlLCAgMSkgMCAgMHB4IDBweCA0cHgsIC8qIGJvcmRlciAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMTUlLCAuNCkgMCAtMXB4IDVweCA0cHgsIC8qIHNvZnQgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDIwJSwuMjUpIDAgLTFweCAwcHggN3B4LCAvKiBib3R0b20gU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDEwMCUsLjcpIDAgIDJweCAxcHggN3B4LCAvKiB0b3AgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCwxMDAlLDc1JSwgLjgpIDAgIDBweCAzcHggMnB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDUwJSw0MCUsIC4yNSkgMCAtNXB4IDZweCA0cHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsODAlLDk1JSwgICAxKSAwICA1cHggNnB4IDRweDsgLyogb3V0ZXIgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBFbmQgQnJ1c2hlZCBNZXRhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2ICNidXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiAjYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3NvbG9CdXR0b25UYWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQ1JSwgLTEwNSUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29sb0J1dHRvbkltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDEwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2xvQnV0dG9uOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SoloButton.js */"));
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
      className3: "flipCard"
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
      className1: "flipCard is-flipped"
    });
  }

  unflip1() {
    this.setState({
      className1: "flipCard"
    });
  }

  flip2() {
    this.setState({
      className2: "flipCard is-flipped"
    });
  }

  unflip2() {
    this.setState({
      className2: "flipCard"
    });
  }

  flip3() {
    this.setState({
      className3: "flipCard is-flipped"
    });
  }

  unflip3() {
    this.setState({
      className3: "flipCard"
    });
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-583792744",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-583792744" + " " + "contentCanvas contentCanvas--card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "flipContainer1",
      onMouseEnter: this.flip1,
      onMouseLeave: this.unflip1,
      className: "jsx-583792744" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-583792744" + " " + (this.state.className1 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/catalyst-jars.jpg */ "./public/assets/catalyst-jars.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-583792744" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-583792744" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/catalyst-jars.jpg */ "./public/assets/catalyst-jars.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-583792744",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-583792744" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 27
      }
    }, "Card 1 Back")))), __jsx("div", {
      id: "flipContainer2",
      onMouseEnter: this.flip2,
      onMouseLeave: this.unflip2,
      className: "jsx-583792744" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card2",
      className: "jsx-583792744" + " " + (this.state.className2 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/pile-of-cats.jpg */ "./public/assets/pile-of-cats.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-583792744" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-583792744" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/pile-of-cats.jpg */ "./public/assets/pile-of-cats.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-583792744",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-583792744" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 27
      }
    }, "Card 2 Back")))), __jsx("div", {
      id: "flipContainer3",
      onMouseEnter: this.flip3,
      onMouseLeave: this.unflip3,
      className: "jsx-583792744" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card3",
      className: "jsx-583792744" + " " + (this.state.className3 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/shipping.jpg */ "./public/assets/shipping.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-583792744" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-583792744" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/shipping.jpg */ "./public/assets/shipping.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-583792744",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-583792744" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 27
      }
    }, "Card 3 Back"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "583792744",
      __self: this
    }, ".cardText.jsx-583792744{position:absolute;height:100%;width:100%;-webkit-transform:translateY(-65%);-ms-transform:translateY(-65%);transform:translateY(-65%);}#contentContainer.jsx-583792744{position:absolute;height:100%;width:90%;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%);right:5%;overflow:hidden;border:5px solid silver;box-sizing:border-box;}@media (max-width:720px){#contentContainer.jsx-583792744{height:100%;min-height:575px;overflow:hidden;}}.contentCanvas.jsx-583792744{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}@media (max-width:720px){.contentCanvas.jsx-583792744{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:102%;width:100%;margin-top:0%;}}.flipCard.jsx-583792744{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}@media (max-width:720px){.flipCard.jsx-583792744{width:100%;height:100%;}}.card__face.jsx-583792744{position:absolute;height:100%;width:100%;text-align:center;}.card__face--front.jsx-583792744{background:white;}.card__face--back.jsx-583792744{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCard.is-flipped.jsx-583792744{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}@media (max-width:720px){.card__face--back.jsx-583792744{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-583792744{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}}@media (max-width:720px){#card2.jsx-583792744{margin-top:-1%;}}@media (max-width:720px){#card3.jsx-583792744{margin-top:-1%;}}.flipCardContainer.jsx-583792744{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333333333333333333333333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-583792744{width:100%;height:33%;margin-top:0%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0NvbnRlbnQxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdJaUIsQUFJdUMsQUFPQSxBQWdCSixBQVFKLEFBVW1CLEFBVWpCLEFBZ0JDLEFBTUssQUFRRCxBQUlBLEFBS1csQUFLVCxBQUtXLEFBWS9CLEFBT0EsQUFJbUIsQUFXTCxVQXRHRCxDQW9DRSxBQW1FRCxDQS9HTSxBQTRCSCxHQTREaEIsQUFPQSxFQXJDRixBQUk4QixBQVVFLENBL0ZsQixBQU9BLEFBa0VBLElBekNELEFBdUdLLENBbkVoQixLQWhCZ0IsQ0E1QkUsQ0F2QlAsQUFPRCxBQWtFQyxHQXpDQyxHQXVHWixJQS9IMmtFLENBTjlrRSxBQXlFcUIsR0F2QlAsQ0EzQlgsQUFRYyxVQW9CRixJQWxCZCxBQXlDQSxRQXRCWSxVQUNXLFlBbUVYLENBbEZTLE1BaURyQixBQVVFLEVBM0N3QixDQW1FWixRQWxGRSxJQW1GcUIsRUF2Q3JDLEFBVUUsTUFyRGEsV0FDRyxJQXpDbEIsVUEyQ0UsRUFnRlksWUFDUyxxQkFFdkIsZUF2RThCLGdHQUNWLGtCQUNILGVBRWpCLGd6REFwRG9DLGtDQUNoQixrQkFDTyx1RkFDaEIsU0FDTyxnQkFDUSx3QkFDRixzQkFDeEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxTb2xvQ29udGVudDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgU29sb0NvbnRlbnQxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICBjbGFzc05hbWUxOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTI6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMzogXCJmbGlwQ2FyZFwiLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmxpcDEgPSB0aGlzLmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDEgPSB0aGlzLnVuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDIgPSB0aGlzLmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDIgPSB0aGlzLnVuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDMgPSB0aGlzLmZsaXAzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDMgPSB0aGlzLnVuZmxpcDMuYmluZCh0aGlzKTtcclxufVxyXG5cclxuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiB9KVxyXG59XHJcblxyXG51bmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZFwiIH0pXHJcbn1cclxuXHJcbmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIgfSlcclxufVxyXG5cclxudW5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmRcIiB9KVxyXG59XHJcblxyXG5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkXCIgfSlcclxufVxyXG5cclxuXHJcbnJlbmRlcigpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhcyBjb250ZW50Q2FudmFzLS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIxXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAxfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMX0gIGlkPVwiY2FyZDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9XCJzb2xvUHJvMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9jYXRhbHlzdC1qYXJzLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPVwic29sb1BybzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvY2F0YWx5c3QtamFycy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMSBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMlwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMn0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUyfSAgaWQ9XCJjYXJkMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3BpbGUtb2YtY2F0cy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3BpbGUtb2YtY2F0cy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMiBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyM1wiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwM30gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUzfSAgaWQ9XCJjYXJkM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3NoaXBwaW5nLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPVwic29sb1BybzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvc2hpcHBpbmcuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoOHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIj5DYXJkIDMgQmFjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTY1JSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbVpnTTVEY3MzWVNORkRIVW8yTEdmWnV1a1NXeVVZaXJKQWRZYkYzTWZxRUttak0rSTJFZmhBOTRpRzNMN3VLclIrR2RXRDczeWRsSUIrNmhncmVmMVFUbG1nbWJNMy9MZVg1R0kxVXgxUldwZ3hwTHVaMitJK0lqelo4d3FFNG5pbHZRZGtVZGZoekk1UURXeStrdzVXZ2cycEdwZUVWZUNDQTdiODVCTzNGOUR6eEIzY2RxdkJ6V2NtemJ5TWlxaHp1WXF0SFJWRzJ5NHgrS09sbnlxbGE4QW9XV3B1Qm9ZUnh6WHJmS3VJTGw2U2ZpV0NianhvWkpVYUNCajFDakg3R0lhRGJjOWtxQlkzVy9SZ2pkYTFpcVFjT0p1MldXKzc2cFpDOVFHN00wMGRmZmU5aE5uc2V1cEZMNTNyOEY3WUhTd0pXVUtQMnErazdSZHN4eU9CMTFuMHh0T3ZuVzRpck1NRk5WNEgwdXF3UzVFeHNtUDlBeGJEVGM5SndnbmVBVDV2VGlVU20xRTdCU2ZsU3QzYmZhMXR2OERpM1I4bjNBZjdNTld6czQ5aG1hdUUyd1ArdHRycStBc1dwRkcyYXd2c3VPcWJpcFdIZ3R1dnVhQUUrQTFaLzdnQzloZXNucis3d3FDd0c4YzV5QWczQUwxZm04VDlBWnRwL2JiSkd3bDFwTnJFN1J1T1g3UGVNUlVFUlZhUHBFcyt5cWVvU211T2xva3F3NDlwZ29takxlaDdpY0hObEcxOXlqczZYWE9NZWRZbTV4SDJZeHBWMnRjMFJvMmpKZnhDNTBBcHV4R29iN2xNc3hmVGJlVXYwN1R5WXhwZUx1Y0VIMWdOZDRJS0gyTEFnNVRkVmhsQ2FmWnZwc2tmbmNDZng4cE9oSnpkNzZiSldlWUZuRmNpd2NZZnViUmMxMklwL3BwSWhBMS9tU1ovUnhqRkRySkM1eGlmRmpKcFkyWGw1elhkZ3VGcVl5VFIxelNwMVk5cCt0a3REWVlTTmZsY3hJMGl5TzRUUEJkbFJjcGVxaksvcGlGNWJrbHE3N1ZTRWFBK3o4cW1KVEZ6SVdpaXRibnpSNzk0VVNLQlVhVDBOVEVzVmpacUxhRlZxSm9QTjlPREc3MElQYmZCSEtLKy9xL0FXUjB0SnpZSFJVTE9hNE1QK1cvSGZHYWRaVWJmdzE3N0c3ai9PR2JJczhUYWhMeXlubDRYNFJpbkY3OTNPeitCVTBzYVh0VUhyVkJGVC9EbkEzY3ROUG9HYnM0aFJJalRvazhpK2FsZ1QxbFRIaTRTeEZ2T05LTnJnUUZBcTIvZ0ZuV01YZ3dmZmdZTUpwaUtZa21XM3RUZzNaUTlKcStmOFhOK0E1ZWVVS0hXdkpXSjJzZ0oxU29wK3d3aHFGVmlqcVdhSmh3dEQ4TU5sU0JlV05OV1RhNVo1a1BadzUrTGJWVDk5d3FUZHgyOWxNVUg0T0lHL0Q4NnJ1S0VhdUJqdkg1eHk2dW0vU2ZqN2VpNlVVVms0QUlsM015RDRNU1NUT0ZnU3dzSC9RSldhUTVhczdaY21nQlprempqVTFVclE3NGNpMWdXQkNTR0h0dVYxSDJtaFNuTzNXcC8zZkVWNWErNHd6Ly82cXk4SnhqWnNteHh5NSs0dzlDRE5KWTA5VDA3MmlLRzBFbk9TMGFyRVlnWHFZblhjWUh3alR0VU5BY01lbE9kNHhwa29xaVRZSUNXRnEwSlNpUGZQRFFkbnQrNC93dXFjWFk0N1FJTGJnQUFBQUJKUlU1RXJrSmdnZz09Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmQxIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xJVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTElXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDQwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNvbG9Db250ZW50MTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SoloContent1.js */"));
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
      className3: "flipCard"
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
      className1: "flipCard is-flipped"
    });
  }

  unflip1() {
    this.setState({
      className1: "flipCard"
    });
  }

  flip2() {
    this.setState({
      className2: "flipCard is-flipped"
    });
  }

  unflip2() {
    this.setState({
      className2: "flipCard"
    });
  }

  flip3() {
    this.setState({
      className3: "flipCard is-flipped"
    });
  }

  unflip3() {
    this.setState({
      className3: "flipCard"
    });
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-1192280462",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-1192280462" + " " + "contentCanvas contentCanvas--card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "flipContainer1",
      onMouseEnter: this.flip1,
      onMouseLeave: this.unflip1,
      className: "jsx-1192280462" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-1192280462" + " " + (this.state.className1 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/truck.jpg */ "./public/assets/truck.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-1192280462" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-1192280462" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/truck.jpg */ "./public/assets/truck.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-1192280462",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-1192280462" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 27
      }
    }, "Card 1 Back")))), __jsx("div", {
      id: "flipContainer2",
      onMouseEnter: this.flip2,
      onMouseLeave: this.unflip2,
      className: "jsx-1192280462" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card2",
      className: "jsx-1192280462" + " " + (this.state.className2 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/pile-of-cats.jpg */ "./public/assets/pile-of-cats.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-1192280462" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-1192280462" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/pile-of-cats.jpg */ "./public/assets/pile-of-cats.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-1192280462",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-1192280462" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 27
      }
    }, "Card 2 Back")))), __jsx("div", {
      id: "flipContainer3",
      onMouseEnter: this.flip3,
      onMouseLeave: this.unflip3,
      className: "jsx-1192280462" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card3",
      className: "jsx-1192280462" + " " + (this.state.className3 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/money.jpeg */ "./public/assets/money.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-1192280462" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-1192280462" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/money.jpeg */ "./public/assets/money.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-1192280462",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-1192280462" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 27
      }
    }, "Card 3 Back"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1192280462",
      __self: this
    }, ".cardText.jsx-1192280462{position:absolute;height:100%;width:100%;-webkit-transform:translateY(-65%);-ms-transform:translateY(-65%);transform:translateY(-65%);}#contentContainer.jsx-1192280462{position:absolute;height:100%;width:90%;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);right:15%;overflow:hidden;border:5px solid silver;box-sizing:border-box;}@media (max-width:720px){#contentContainer.jsx-1192280462{height:100%;min-height:575px;overflow:hidden;}}.contentCanvas.jsx-1192280462{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}@media (max-width:720px){.contentCanvas.jsx-1192280462{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:102%;width:100%;margin-top:0%;}}.flipCard.jsx-1192280462{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}@media (max-width:720px){.flipCard.jsx-1192280462{width:100%;height:100%;}}.card__face.jsx-1192280462{position:absolute;height:100%;width:100%;text-align:center;}.card__face--front.jsx-1192280462{background:white;}.card__face--back.jsx-1192280462{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCard.is-flipped.jsx-1192280462{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}@media (max-width:720px){.card__face--back.jsx-1192280462{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-1192280462{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}}@media (max-width:720px){#card2.jsx-1192280462{margin-top:-1%;}}@media (max-width:720px){#card3.jsx-1192280462{margin-top:-1%;}}.flipCardContainer.jsx-1192280462{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-1192280462{width:100%;height:33%;margin-top:0%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0NvbnRlbnQyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdJaUIsQUFJdUMsQUFPQSxBQWdCSixBQVFKLEFBVW1CLEFBVWpCLEFBZUMsQUFNSyxBQVFELEFBSUEsQUFLVyxBQUtULEFBS1csQUFZL0IsQUFPQSxBQUltQixBQVdMLFVBckdELENBbUNFLEFBbUVELENBOUdNLEFBNEJILEdBMkRoQixBQU9BLEVBckNGLEFBSThCLEFBVUUsQ0E5RmxCLEFBT0EsQUFpRUEsSUF4Q0QsQUFzR0ssQ0FuRWhCLEtBZmdCLENBNUJFLENBdkJQLEFBT0QsQUFpRUMsR0F4Q0MsR0FzR1osSUE5SDJrRSxDQU45a0UsQUF3RXFCLEdBdEJQLENBM0JYLEFBUWMsVUFvQkYsSUFsQmQsQUF3Q0EsUUFyQlksVUFDVyxZQWtFWCxDQWpGUyxNQWdEckIsQUFVRSxFQTFDMEIsQ0FrRWQsUUFqRkUsSUFrRkEsRUF2Q2hCLEFBVUUsTUFwRGEsTUFrRkQsS0FqRkksSUF6Q2xCLEdBMkh1QixPQWhGckIsY0FrRkYsMENBdEU4QixnR0FDVixrQkFDSCxlQUNqQiwweURBbkRvQyxrQ0FDaEIsa0JBQ1UsZ0dBQ2xCLFVBQ00sZ0JBQ1Esd0JBQ0Ysc0JBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0NvbnRlbnQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFNvbG9Db250ZW50MiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZsaXAxID0gdGhpcy5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAxID0gdGhpcy51bmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAyID0gdGhpcy5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAyID0gdGhpcy51bmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAzID0gdGhpcy5mbGlwMy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAzID0gdGhpcy51bmZsaXAzLmJpbmQodGhpcyk7XHJcbn1cclxuXHJcbmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiB9KVxyXG59XHJcblxyXG5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMVwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMX0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTF9ICBpZD1cImNhcmQxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPVwic29sb1BybzFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvdHJ1Y2suanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy90cnVjay5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMSBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMlwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMn0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUyfSAgaWQ9XCJjYXJkMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3BpbGUtb2YtY2F0cy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3BpbGUtb2YtY2F0cy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMiBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyM1wiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwM30gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUzfSAgaWQ9XCJjYXJkM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL21vbmV5LmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL21vbmV5LmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMyBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjUlKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFVVkJNVkVXRmhZV0RnNE4zZDNkdGJXMTdlM3QxZFhXQmdZR0hoNGQ1ZVhsemMzT0xpNHVibTV1VmxaV1BqNCtOalkxOWZYMkppWWwvZjM5cmEydVJrWkdabVpscGFXbVhsNWR2YjI5eGNYR1RrNU5uWjJjOFRWMW1BQUFBRzNSU1RsTkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQXZFT3d0QUFBRlZrbEVRVlI0WHBXV0I2N2MyQlVGYjNnNTU3VC9oUm85L1dVTVpIbGdyNEJnOFo0cVFnUUpsSEk0QThTekZWcmFwdm1URjlPN2RtWVJGWjYwWWlCaEpSQ2doMUZZaGlMQW1kdlgwQ3pUT3BORTc3TUUwWnR5L25XV3pjaER0aXFybVFEZXV2M3Bvd1E1dGEyZU4wRlkwSW5rcURENzNsVDljOWxFendVTnFnRkhzOVZRY2UzVFZDbEZDUXJTVGZPaVlrVkpRQm1wYnEyTDZpWmF2UG5BUGNvVTBkU3cwU1VUcXovR3RyR3VYZmJ5eUJuaUt5a09XUVdHcXd3TUE3UWlZQXhpK0lsUGRxbytoWUhuVXQ1WlBmbnNISnlOaUR0bnBKeWF5TkJrRjZjV29ZR0FNWTkyVTJoWEhGL0MxTTh1UC9adFlkaXVqMjZVZEFkUVFTWFFFcndTT016dC9YV1JXQXo1R3VTQklrd0cxSDNGYWJKMk9zVU9VaEdDNnRLNEVNdEpPMHR0QzZJQkQza00wdmUwdEp3TWRTZmpabytFRUlTYWVUcjlQM3dZckdqWHF5QzFrcmNLZGhNcHhFbnQ1SmV0b3Vsc2NweXpoWE41RlJwdVBIdmJlUWFLeEZBRUI2RU4rY1lONnhEN1JZR3BYcE5uZE1tWmdNNURjczNZU05GREhVbzJMR2ZadXVrU1d5VVlpckpBZFliRjNNZnFFS21qTStJMkVmaEE5NGlHM0w3dUtyUitHZFdENzN5ZGxJQis2aGdyZWYxUVRsbWdtYk0zL0xlWDVHSTFVeDFSV3BneHBMdVoyK0krSWp6Wjh3cUU0bmlsdlFka1VkZmh6STVRRFd5K2t3NVdnZzJwR3BlRVZlQ0NBN2I4NUJPM0Y5RHp4QjNjZHF2QnpXY216YnlNaXFoenVZcXRIUlZHMnk0eCtLT2xueXFsYThBb1dXcHVCb1lSeHpYcmZLdUlMbDZTZmlXQ2JqeG9aSlVhQ0JqMUNqSDdHSWFEYmM5a3FCWTNXL1JnamRhMWlxUWNPSnUyV1crNzZwWkM5UUc3TTAwZGZmZTloTm5zZXVwRkw1M3I4RjdZSFN3SldVS1AycStrN1Jkc3h5T0IxMW4weHRPdm5XNGlyTU1GTlY0SDB1cXdTNUV4c21QOUF4YkRUYzlKd2duZUFUNXZUaVVTbTFFN0JTZmxTdDNiZmExdHY4RGkzUjhuM0FmN01OV3pzNDlobWF1RTJ3UCt0dHJxK0FzV3BGRzJhd3ZzdU9xYmlwV0hndHV2dWFBRStBMVovN2dDOWhlc25yKzd3cUN3RzhjNXlBZzNBTDFmbThUOUFadHAvYmJKR3dsMXBOckU3UnVPWDdQZU1SVUVSVmFQcEVzK3lxZW9TbXVPbG9rcXc0OXBnb21qTGVoN2ljSE5sRzE5eWpzNlhYT01lZFltNXhIMll4cFYydGMwUm8yakpmeEM1MEFwdXhHb2I3bE1zeGZUYmVVdjA3VHlZeHBlTHVjRUgxZ05kNElLSDJMQWc1VGRWaGxDYWZadnBza2ZuY0NmeDhwT2hKemQ3NmJKV2VZRm5GY2l3Y1lmdWJSYzEySXAvcHBJaEExL21TWi9SeGpGRHJKQzV4aWZGakpwWTJYbDV6WGRndUZxWXlUUjF6U3AxWTlwK3RrdERZWVNOZmxjeEkwaXlPNFRQQmRsUmNwZXFqSy9waUY1YmtscTc3VlNFYUErejhxbUpURnpJV2lpdGJuelI3OTRVU0tCVWFUME5URXNWalpxTGFGVnFKb1BOOU9ERzcwSVBiZkJIS0srL3EvQVdSMHRKellIUlVMT2E0TVArVy9IZkdhZFpVYmZ3MTc3RzdqL09HYklzOFRhaEx5eW5sNFg0UmluRjc5M096K0JVMHNhWHRVSHJWQkZUL0RuQTNjdE5Qb0diczRoUklqVG9rOGkrYWxnVDFsVEhpNFN4RnZPTktOcmdRRkFxMi9nRm5XTVhnd2ZmZ1lNSnBpS1lrbVczdFRnM1pROUpxK2Y4WE4rQTVlZVVLSFd2SldKMnNnSjFTb3Ard3docUZWaWpxV2FKaHd0RDhNTmxTQmVXTk5XVGE1WjVrUFp3NStMYlZUOTl3cVRkeDI5bE1VSDRPSUcvRDg2cnVLRWF1Qmp2SDV4eTZ1bS9TZmo3ZWk2VVVWazRBSWwzTXlENE1TU1RPRmdTd3NIL1FKV2FRNWFzN1pjbWdCWmt6ampVMVVyUTc0Y2kxZ1dCQ1NHSHR1VjFIMm1oU25PM1dwLzNmRVY1YSs0d3ovLzZxeThKeGpac214eHk1KzR3OUNETkpZMDlUMDcyaUtHMEVuT1MwYXJFWWdYcVluWGNZSHdqVHRVTkFjTWVsT2Q0eHBrb3FpVFlJQ1dGcTBKU2lQZlBEUWRudCs0L3d1cWNYWTQ3UUlMYmdBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1mcm9udCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMSVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xJVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiA0MHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMzJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU29sb0NvbnRlbnQyOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SoloContent2.js */"));
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
      className3: "flipCard"
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
      className1: "flipCard is-flipped"
    });
  }

  unflip1() {
    this.setState({
      className1: "flipCard"
    });
  }

  flip2() {
    this.setState({
      className2: "flipCard is-flipped"
    });
  }

  unflip2() {
    this.setState({
      className2: "flipCard"
    });
  }

  flip3() {
    this.setState({
      className3: "flipCard is-flipped"
    });
  }

  unflip3() {
    this.setState({
      className3: "flipCard"
    });
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-2293250755",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-2293250755" + " " + "contentCanvas contentCanvas--card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, __jsx("div", {
      id: "flipContainer1",
      onMouseEnter: this.flip1,
      onMouseLeave: this.unflip1,
      className: "jsx-2293250755" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card1",
      className: "jsx-2293250755" + " " + (this.state.className1 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/truck.jpg */ "./public/assets/truck.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-2293250755" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-2293250755" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/truck.jpg */ "./public/assets/truck.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-2293250755",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-2293250755" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 27
      }
    }, "Card 1 Back")))), __jsx("div", {
      id: "flipContainer2",
      onMouseEnter: this.flip2,
      onMouseLeave: this.unflip2,
      className: "jsx-2293250755" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card2",
      className: "jsx-2293250755" + " " + (this.state.className2 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/pile-of-cats.jpg */ "./public/assets/pile-of-cats.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-2293250755" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-2293250755" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/pile-of-cats.jpg */ "./public/assets/pile-of-cats.jpg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-2293250755",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-2293250755" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 27
      }
    }, "Card 2 Back")))), __jsx("div", {
      id: "flipContainer3",
      onMouseEnter: this.flip3,
      onMouseLeave: this.unflip3,
      className: "jsx-2293250755" + " " + "flipCardContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "card3",
      className: "jsx-2293250755" + " " + (this.state.className3 || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 19
      }
    }, __jsx("div", {
      id: "soloPro1",
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/money.jpeg */ "./public/assets/money.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: "jsx-2293250755" + " " + "card__face card__face--front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 25
      }
    }), __jsx("div", {
      id: "soloPro2",
      className: "jsx-2293250755" + " " + "card__face card__face--back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${__webpack_require__(/*! ../public/assets/money.jpeg */ "./public/assets/money.jpeg")}` + ")",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(8px)"
      },
      className: "jsx-2293250755",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 27
      }
    }), __jsx("p", {
      className: "jsx-2293250755" + " " + "cardText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 27
      }
    }, "Card 3 Back"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2293250755",
      __self: this
    }, ".cardText.jsx-2293250755{position:absolute;height:100%;width:100%;-webkit-transform:translateY(-65%);-ms-transform:translateY(-65%);transform:translateY(-65%);}#contentContainer.jsx-2293250755{position:absolute;height:100%;width:90%;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(-200%);-ms-transform:translateX(-200%);transform:translateX(-200%);right:25%;overflow:hidden;border:5px solid silver;box-sizing:border-box;}@media (max-width:720px){#contentContainer.jsx-2293250755{height:100%;min-height:575px;overflow:hidden;}}.contentCanvas.jsx-2293250755{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}@media (max-width:720px){.contentCanvas.jsx-2293250755{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:102%;width:100%;margin-top:0%;}}.flipCard.jsx-2293250755{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}@media (max-width:720px){.flipCard.jsx-2293250755{width:100%;height:100%;}}.card__face.jsx-2293250755{position:absolute;height:100%;width:100%;text-align:center;}.card__face--front.jsx-2293250755{background:white;}.card__face--back.jsx-2293250755{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCard.is-flipped.jsx-2293250755{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}@media (max-width:720px){.card__face--back.jsx-2293250755{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-2293250755{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}}@media (max-width:720px){#card2.jsx-2293250755{margin-top:-1%;}}@media (max-width:720px){#card3.jsx-2293250755{margin-top:-1%;}}.flipCardContainer.jsx-2293250755{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-2293250755{width:100%;height:33%;margin-top:0%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0NvbnRlbnQzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBJaUIsQUFJdUMsQUFPQSxBQWdCSixBQVFKLEFBVW1CLEFBVWpCLEFBZUMsQUFNSyxBQVFELEFBSUEsQUFNVyxBQUtULEFBS1csQUFZL0IsQUFPQSxBQUltQixBQVdMLFVBdEdELENBbUNFLEFBb0VELENBL0dNLEFBNEJILEdBNERoQixBQU9BLEVBdENGLEFBSThCLEFBV0UsQ0EvRmxCLEFBT0EsQUFpRUEsSUF4Q0QsQUF1R0ssQ0FwRWhCLEtBZmdCLENBNUJFLENBdkJQLEFBT0QsQUFpRUMsR0F4Q0MsR0F1R1osSUEvSDJrRSxDQU45a0UsQUF3RXFCLEdBdEJQLENBM0JYLEFBUWMsVUFvQkYsSUFsQmQsQUF3Q0EsUUFyQlksVUFDVyxZQW1FWCxDQWxGUyxNQWlEckIsQUFVRSxFQTNDMEIsQ0FtRWQsUUFsRkUsSUFtRkEsRUF2Q2hCLEFBVUUsTUFyRGEsTUFtRkQsS0FsRkksSUF6Q2xCLEdBNEh1QixPQWpGckIsY0FtRkYsMENBdkU4QixnR0FDVixrQkFDSCxlQUNqQiwweURBbkRvQyxrQ0FDaEIsa0JBQ1UsZ0dBQ2xCLFVBQ00sZ0JBQ1Esd0JBQ0Ysc0JBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0NvbnRlbnQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFNvbG9Db250ZW50MyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZsaXAxID0gdGhpcy5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAxID0gdGhpcy51bmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAyID0gdGhpcy5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAyID0gdGhpcy51bmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAzID0gdGhpcy5mbGlwMy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAzID0gdGhpcy51bmZsaXAzLmJpbmQodGhpcyk7XHJcbn1cclxuXHJcbmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiB9KVxyXG59XHJcblxyXG5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMVwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMX0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTF9ICBpZD1cImNhcmQxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPVwic29sb1BybzFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvdHJ1Y2suanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy90cnVjay5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMSBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMlwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMn0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUyfSAgaWQ9XCJjYXJkMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3BpbGUtb2YtY2F0cy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3BpbGUtb2YtY2F0cy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMiBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyM1wiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwM30gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUzfSAgaWQ9XCJjYXJkM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL21vbmV5LmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL21vbmV5LmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCI+Q2FyZCAzIEJhY2s8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02NSUpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FNQUFBQXA0WGlEQUFBQVVWQk1WRVdGaFlXRGc0TjNkM2R0YlcxN2UzdDFkWFdCZ1lHSGg0ZDVlWGx6YzNPTGk0dWJtNXVWbFpXUGo0K05qWTE5ZlgySmlZbC9mMzlyYTJ1UmtaR1ptWmxwYVdtWGw1ZHZiMjl4Y1hHVGs1Tm5aMmM4VFYxbUFBQUFHM1JTVGxOQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVBdkVPd3RBQUFGVmtsRVFWUjRYcFdXQjY3YzJCVUZiM2c1NTdUL2hSbzkvV1VNWkhsZ3I0Qmc4WjRxUWdRSmxISTRBOFN6RlZyYXB2bVRGOU83ZG1ZUkZaNjBZaUJoSlJDZ2gxRlloaUxBbWR2WDBDelRPcE5FNzdNRTBadHkvbldXemNoRHRpcXJtUURldXYzcG93UTV0YTJlTjBGWTBJbmtxREQ3M2xUOWM5bEV6d1VOcWdGSHM5VlFjZTNUVkNsRkNRclNUZk9pWWtWSlFCbXBicTJMNmlaYXZQbkFQY29VMGRTdzBTVVRxei9HdHJHdVhmYnl5Qm5pS3lrT1dRV0dxd3dNQTdRaVlBeGkrSWxQZHFvK2hZSG5VdDVaUGZuc0hKeU5pRHRucEp5YXlOQmtGNmNXb1lHQU1ZOTJVMmhYSEYvQzFNOHVQL1p0WWRpdWoyNlVkQWRRUVNYUUVyd1NPTXp0L1hXUldBejVHdVNCSWt3RzFIM0ZhYkoyT3NVT1VoR0M2dEs0RU10Sk8wdHRDNklCRDNrTTB2ZTB0SndNZFNmalpvK0VFSVNhZVRyOVAzd1lyR2pYcXlDMWtyY0tkaE1weEVudDVKZXRvdWxzY3B5emhYTjVGUnB1UEh2YmVRYUt4RkFFQjZFTitjWU42eEQ3UllHcFhwTm5kTW1aZ001RGNzM1lTTkZESFVvMkxHZlp1dWtTV3lVWWlySkFkWWJGM01mcUVLbWpNK0kyRWZoQTk0aUczTDd1S3JSK0dkV0Q3M3lkbElCKzZoZ3JlZjFRVGxtZ21iTTMvTGVYNUdJMVV4MVJXcGd4cEx1WjIrSStJanpaOHdxRTRuaWx2UWRrVWRmaHpJNVFEV3kra3c1V2dnMnBHcGVFVmVDQ0E3Yjg1Qk8zRjlEenhCM2NkcXZCeldjbXpieU1pcWh6dVlxdEhSVkcyeTR4K0tPbG55cWxhOEFvV1dwdUJvWVJ4elhyZkt1SUxsNlNmaVdDYmp4b1pKVWFDQmoxQ2pIN0dJYURiYzlrcUJZM1cvUmdqZGExaXFRY09KdTJXVys3NnBaQzlRRzdNMDBkZmZlOWhObnNldXBGTDUzcjhGN1lIU3dKV1VLUDJxK2s3UmRzeHlPQjExbjB4dE92blc0aXJNTUZOVjRIMHVxd1M1RXhzbVA5QXhiRFRjOUp3Z25lQVQ1dlRpVVNtMUU3QlNmbFN0M2JmYTF0djhEaTNSOG4zQWY3TU5XenM0OWhtYXVFMndQK3R0cnErQXNXcEZHMmF3dnN1T3FiaXBXSGd0dXZ1YUFFK0ExWi83Z0M5aGVzbnIrN3dxQ3dHOGM1eUFnM0FMMWZtOFQ5QVp0cC9iYkpHd2wxcE5yRTdSdU9YN1BlTVJVRVJWYVBwRXMreXFlb1NtdU9sb2txdzQ5cGdvbWpMZWg3aWNITmxHMTl5anM2WFhPTWVkWW01eEgyWXhwVjJ0YzBSbzJqSmZ4QzUwQXB1eEdvYjdsTXN4ZlRiZVV2MDdUeVl4cGVMdWNFSDFnTmQ0SUtIMkxBZzVUZFZobENhZlp2cHNrZm5jQ2Z4OHBPaEp6ZDc2YkpXZVlGbkZjaXdjWWZ1YlJjMTJJcC9wcEloQTEvbVNaL1J4akZEckpDNXhpZkZqSnBZMlhsNXpYZGd1RnFZeVRSMXpTcDFZOXArdGt0RFlZU05mbGN4STBpeU80VFBCZGxSY3BlcWpLL3BpRjVia2xxNzdWU0VhQSt6OHFtSlRGeklXaWl0Ym56Ujc5NFVTS0JVYVQwTlRFc1ZqWnFMYUZWcUpvUE45T0RHNzBJUGJmQkhLSysvcS9BV1IwdEp6WUhSVUxPYTRNUCtXL0hmR2FkWlViZncxNzdHN2ovT0diSXM4VGFoTHl5bmw0WDRSaW5GNzkzT3orQlUwc2FYdFVIclZCRlQvRG5BM2N0TlBvR2JzNGhSSWpUb2s4aSthbGdUMWxUSGk0U3hGdk9OS05yZ1FGQXEyL2dGbldNWGd3ZmZnWU1KcGlLWWttVzN0VGczWlE5SnErZjhYTitBNWVlVUtIV3ZKV0oyc2dKMVNvcCt3d2hxRlZpanFXYUpod3REOE1ObFNCZVdOTldUYTVaNWtQWnc1K0xiVlQ5OXdxVGR4MjlsTVVINE9JRy9EODZydUtFYXVCanZINXh5NnVtL1NmajdlaTZVVVZrNEFJbDNNeUQ0TVNTVE9GZ1N3c0gvUUpXYVE1YXM3WmNtZ0Jaa3pqalUxVXJRNzRjaTFnV0JDU0dIdHVWMUgybWhTbk8zV3AvM2ZFVjVhKzR3ei8vNnF5OEp4alpzbXh4eTUrNHc5Q0ROSlkwOVQwNzJpS0cwRW5PUzBhckVZZ1hxWW5YY1lId2pUdFVOQWNNZWxPZDR4cGtvcWlUWUlDV0ZxMEpTaVBmUERRZG50KzQvd3VxY1hZNDdRSUxiZ0FBQUFCSlJVNUVya0pnZ2c9PScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmQxIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xJVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTElXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDQwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbik7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTb2xvQ29udGVudDM7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SoloContent3.js */"));
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
      className: "jsx-3200114378",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-3200114378",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, __jsx("p", {
      id: "soloButtonTag",
      className: "jsx-3200114378",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, "Single-User"), __jsx("p", {
      id: "soloExplain",
      className: "jsx-3200114378",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    }, "One buyer access to the Revolution app.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3200114378",
      __self: this
    }, "#soloExplain.jsx-3200114378{color:white;pointer-events:none;-webkit-transform:translate(0%,-50%);-ms-transform:translate(0%,-50%);transform:translate(0%,-50%);}@media only screen and (max-width:608px){#explainContainer.jsx-3200114378{-webkit-transform:translate(0%,0%);-ms-transform:translate(0%,0%);transform:translate(0%,0%);}}#soloButtonTag.jsx-3200114378{color:white;-webkit-text-decoration:underline;text-decoration:underline;position:relative;font-weight:600;font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0V4cGxhaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJ5QixBQUl5QyxBQVFiLEFBSWEsWUFYUSxBQVlNLG9CQVYvQix3Q0FXdUIsa0JBQ0YsR0FQaEIsYUFRZ0IsZ0JBQ2xCLFNBZEYiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxTb2xvRXhwbGFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTb2xvRXhwbGFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJleHBsYWluQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJzb2xvQnV0dG9uVGFnXCI+U2luZ2xlLVVzZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwic29sb0V4cGxhaW5cIj5PbmUgYnV5ZXIgYWNjZXNzIHRvIHRoZSBSZXZvbHV0aW9uIGFwcC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjc29sb0V4cGxhaW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2V4cGxhaW5Db250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjc29sb0J1dHRvblRhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29sb0V4cGxhaW47Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SoloExplain.js */"));
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
      className: "jsx-4258365485",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, "Your ", " ", __jsx(react_text_loop__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "loopComponent",
      children: [" WORD HERE", " WORD HERE", " WORD HERE", " WORD HERE"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }), " ", __jsx("i", {
      id: "revTag",
      className: "jsx-4258365485",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }, "REVOLUTION"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4258365485",
      __self: this
    }, "#revTag.jsx-4258365485{color:red;z-index:2;height:100%;}#loopElement.jsx-4258365485{border-top:1px solid red;border-bottom:1px solid red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcVGV4dExvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVzRCLEFBR21DLEFBTWUsVUFMZixVQUNFLEtBS2dCLE9BSmhDLHFCQUtBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcVGV4dExvb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGV4dExvb3AgZnJvbSBcInJlYWN0LXRleHQtbG9vcFwiO1xyXG5cclxuY2xhc3MgV29yZExvb3AgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxoMyBpZD1cImxvb3BFbGVtZW50XCI+XHJcbiAgICAgICAgICAgICAgICBZb3VyIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxUZXh0TG9vcCBpZD1cImxvb3BDb21wb25lbnRcIiBjaGlsZHJlbj17W1wiIFdPUkQgSEVSRVwiLCBcIiBXT1JEIEhFUkVcIiwgXCIgV09SRCBIRVJFXCIsIFwiIFdPUkQgSEVSRVwiXX0+XHJcbiAgICAgICAgICAgICAgICA8L1RleHRMb29wPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxpIGlkPVwicmV2VGFnXCI+UkVWT0xVVElPTjwvaT5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgI3JldlRhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNsb29wRWxlbWVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JkTG9vcDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\TextLoop.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WordLoop);

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
var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      id: "next-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }), __jsx("style", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, `
                        @font-face {
                            font-family: 'Syncopate';
                            src: local('Syncopate-Bold'), url(./fonts/Syncopate-Bold.ttf) format('truetype');
                          }
                          
                          html, body, #__next, #next-body {
                            margin: 0;
                            margin-top: 0;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                              sans-serif;
                            -webkit-font-smoothing: antialiased;
                            -moz-osx-font-smoothing: grayscale;
                            
                            background-color: #282c34;
                            width: 100%;
                            height: 100%;
                            overflow: hidden;

                          }
                    `));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./public/assets/catalyst-jars.jpg":
/*!*****************************************!*\
  !*** ./public/assets/catalyst-jars.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/catalyst-jars-0d092a55e6231a33817524f9a6b62176.jpg";

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

/***/ "./public/assets/money.jpeg":
/*!**********************************!*\
  !*** ./public/assets/money.jpeg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/money-3a0815e679b65fe001ed6f6ea7e22469.jpeg";

/***/ }),

/***/ "./public/assets/pile-of-cats.jpg":
/*!****************************************!*\
  !*** ./public/assets/pile-of-cats.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pile-of-cats-aa5dc4fcc36ba6500a495c2a120d4105.jpg";

/***/ }),

/***/ "./public/assets/shipping.jpg":
/*!************************************!*\
  !*** ./public/assets/shipping.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shipping-10d92cecdf2d69a603437990990c104c.jpg";

/***/ }),

/***/ "./public/assets/single-figure.png":
/*!*****************************************!*\
  !*** ./public/assets/single-figure.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/single-figure-2f37261e9fa79c8b4a2471037b24de67.png";

/***/ }),

/***/ "./public/assets/truck.jpg":
/*!*********************************!*\
  !*** ./public/assets/truck.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/truck-4c50b38f465d204bf3965d3ba7173d2f.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DbG9zZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250YWN0Q29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvcnBCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db3JwQ29udGVudDEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db3JwQ29udGVudDIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db3JwQ29udGVudDMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db3JwRXhwbGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jldm9sdXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbGlkZXJDb3JwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2xpZGVyU21hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbGlkZXJTb2xvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU21hbGxCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbWFsbENvbnRlbnQxLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU21hbGxDb250ZW50Mi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NtYWxsQ29udGVudDMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbWFsbEV4cGxhaW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb2xvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29sb0NvbnRlbnQxLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29sb0NvbnRlbnQyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29sb0NvbnRlbnQzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29sb0V4cGxhaW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXh0TG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2NhdGFseXN0LWphcnMuanBnIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvY2NvblRyaWFuZ2xlLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2NyZXctZmlndXJlLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ZhY3RvcnktZmlndXJlLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL21hcC1pbWFnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9tb25leS5qcGVnIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvcGlsZS1vZi1jYXRzLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3NoaXBwaW5nLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3NpbmdsZS1maWd1cmUucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvdHJ1Y2suanBnIiwid2VicGFjazovLy8uL3B1YmxpYy92aWRlby9CYWNrZ3JvdW5kVmlkZW8uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYnJhbmRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9yZWd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvc29saWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRleHQtbG9vcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInZpZXdTb2xvIiwidmlld1NtYWxsIiwidmlld0NvcnAiLCJjb250ZW50UGFnZSIsInZpZXdDb250YWN0Iiwidmlld1Jldm9sdXRpb24iLCJidXR0b25GYWRlIiwiY29udGVudEZhZGUiLCJhcnJvd0ZhZGUiLCJyZW5kZXJCdXR0b25zIiwic2VlU29sbyIsImJpbmQiLCJjbG9zZUFsbCIsInNlZVNtYWxsIiwic2VlQ29ycCIsInNlZUNvbnRhY3QiLCJzZWVSZXZvbHV0aW9uIiwidGltZXJDbG9zZUNvbnRlbnQiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJyZW5kZXIiLCJjY29uVHJpYW5nbGUiLCJjdXJzb3IiLCJDbG9zZUJ1dHRvbiIsIkNvbnRhY3QiLCJDb250YWN0Q29udGVudCIsInNob3ciLCJNYXBJbWFnZSIsIm9uQ2xvc2UiLCJDb3JwQnV0dG9uIiwiQ29ycEltYWdlIiwiQ29ycENvbnRlbnQiLCJjbGFzc05hbWUxIiwiY2xhc3NOYW1lMiIsImNsYXNzTmFtZTMiLCJmbGlwMSIsInVuZmxpcDEiLCJmbGlwMiIsInVuZmxpcDIiLCJmbGlwMyIsInVuZmxpcDMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZXF1aXJlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJmaWx0ZXIiLCJDb3JwRXhwbGFpbiIsIlJldm9sdXRpb24iLCJTbGlkZXIiLCJzbGlkZTEiLCJzbGlkZTIiLCJzbGlkZTMiLCJzbGlkZUNsYXNzIiwic2xpZGVMZWZ0Iiwic2xpZGVSaWdodCIsIlNsaWRlclNvbG8iLCJTbWFsbEJ1dHRvbiIsIlNtYWxsSW1hZ2UiLCJTbWFsbENvbnRlbnQxIiwiU21hbGxDb250ZW50MiIsIlNtYWxsQ29udGVudDMiLCJTbWFsbEV4cGxhaW4iLCJTb2xvQnV0dG9uIiwiU2luZ2xlRmlndXJlIiwiU29sb0NvbnRlbnQxIiwiU29sb0NvbnRlbnQyIiwiU29sb0NvbnRlbnQzIiwiU29sb0V4cGxhaW4iLCJXb3JkTG9vcCIsIkluZGV4IiwiQmFja2dyb3VuZFZpZGVvIiwidmlkZW9VUkwiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwicGFkZGluZyIsInBvc2l0aW9uIiwib3BhY2l0eSIsIm9iamVjdEZpdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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SzNFLEtBQUwsQ0FBVzJFLFFBQXhCO0FBQWtDLFVBQUksRUFBQyxXQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BZEosaURBREo7QUFtQkg7O0FBN0JtQzs7QUE4QnZDO0FBRWNELDhFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBLG9FOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFja2dyb3VuZFZpZGVvIGZyb20gJy4uL3B1YmxpYy92aWRlby9CYWNrZ3JvdW5kVmlkZW8nO1xuaW1wb3J0IGNjb25UcmlhbmdsZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2Njb25UcmlhbmdsZS5wbmcnO1xuaW1wb3J0IFNvbG9CdXR0b24gZnJvbSAnLi9Tb2xvQnV0dG9uJztcbmltcG9ydCBTbWFsbEJ1dHRvbiBmcm9tICcuL1NtYWxsQnV0dG9uJztcbmltcG9ydCBDb3JwQnV0dG9uIGZyb20gJy4vQ29ycEJ1dHRvbic7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xuaW1wb3J0IFNsaWRlclNvbG8gZnJvbSAnLi9TbGlkZXJTb2xvJztcbmltcG9ydCBTbGlkZXJTbWFsbCBmcm9tICcuL1NsaWRlclNtYWxsJztcbmltcG9ydCBTbGlkZXJDb3JwIGZyb20gJy4vU2xpZGVyQ29ycCc7XG5pbXBvcnQgQ29udGFjdENvbnRlbnQgZnJvbSAnLi9Db250YWN0Q29udGVudCc7XG5pbXBvcnQgUmV2b2x1dGlvbiBmcm9tICcuL1Jldm9sdXRpb24nO1xuaW1wb3J0IFdvcmRMb29wIGZyb20gJy4vVGV4dExvb3AnO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgLy8gU3RhdGUgbWFuYWdlbWVudCBhbmQgYmluZGluZ3NcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlld1NvbG86IGZhbHNlLFxuICAgICAgdmlld1NtYWxsOiBmYWxzZSxcbiAgICAgIHZpZXdDb3JwOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRQYWdlOiAxLFxuICAgICAgdmlld0NvbnRhY3Q6IGZhbHNlLFxuICAgICAgdmlld1Jldm9sdXRpb246IGZhbHNlLFxuICAgICAgYnV0dG9uRmFkZTogXCJmYWRlSW5cIixcbiAgICAgIGNvbnRlbnRGYWRlOiBcImZhZGVPdXRcIixcbiAgICAgIGFycm93RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICByZW5kZXJCdXR0b25zOiB0cnVlLFxuICAgIH07XG5cbiAgICB0aGlzLnNlZVNvbG8gPSB0aGlzLnNlZVNvbG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlQWxsID0gdGhpcy5jbG9zZUFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlU21hbGwgPSB0aGlzLnNlZVNtYWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVDb3JwID0gdGhpcy5zZWVDb3JwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVDb250YWN0ID0gdGhpcy5zZWVDb250YWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVSZXZvbHV0aW9uID0gdGhpcy5zZWVSZXZvbHV0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy50aW1lckNsb3NlQ29udGVudCA9IHRoaXMudGltZXJDbG9zZUNvbnRlbnQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIG9iamVjdHNcblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdTb2xvOiBmYWxzZSxcbiAgICAgIHZpZXdTbWFsbDogZmFsc2UsXG4gICAgICB2aWV3Q29ycDogZmFsc2UsXG4gICAgICBjb250ZW50UGFnZTogMSxcbiAgICAgIHZpZXdDb250YWN0OiBmYWxzZSxcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiBmYWxzZSxcbiAgICAgIGJ1dHRvbkZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBjb250ZW50RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICBhcnJvd0ZhZGU6IFwiZmFkZU91dFwiLFxuICAgIH0pO1xuICB9XG5cbiAgdGltZXJDbG9zZUNvbnRlbnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBidXR0b25GYWRlOiBcImZhZGVJblwiLFxuICAgICAgY29udGVudEZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgYXJyb3dGYWRlOiBcImZhZGVPdXRcIixcbiAgICB9KVxuICAgIHNldFRpbWVvdXQodGhpcy5jbG9zZUFsbCwgNTAwKTtcbiAgfVxuXG4gIHNlZVNvbG8oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3U29sbzogdHJ1ZSxcbiAgICAgIGJ1dHRvbkZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgY29udGVudEZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBhcnJvd0ZhZGU6IFwiZmFkZUluXCIsXG4gICAgfSk7XG4gIH1cblxuICBzZWVTbWFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdTbWFsbDogdHJ1ZSxcbiAgICAgIGJ1dHRvbkZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgY29udGVudEZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBhcnJvd0ZhZGU6IFwiZmFkZUluXCIsXG4gICAgfSk7XG4gIH1cblxuICBzZWVDb3JwKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld0NvcnA6IHRydWUsXG4gICAgICBidXR0b25GYWRlOiBcImZhZGVPdXRcIixcbiAgICAgIGNvbnRlbnRGYWRlOiBcImZhZGVJblwiLFxuICAgICAgYXJyb3dGYWRlOiBcImZhZGVJblwiLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlQ29udGFjdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdDb250YWN0OiB0cnVlLFxuICAgICAgYnV0dG9uRmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICBjb250ZW50RmFkZTogXCJmYWRlSW5cIixcbiAgICAgIGFycm93RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgfSk7XG4gIH1cblxuICBzZWVSZXZvbHV0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1Jldm9sdXRpb246IHRydWUsXG4gICAgICBidXR0b25GYWRlOiBcImZhZGVPdXRcIixcbiAgICAgIGNvbnRlbnRGYWRlOiBcImZhZGVJblwiLFxuICAgICAgYXJyb3dGYWRlOiBcImZhZGVPdXRcIixcbiAgICB9KTtcbiAgfVxuICBcblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cblxuICAgICAgICA8QmFja2dyb3VuZFZpZGVvIHR5cGU9J3ZpZGVvL21wNCcgYXV0b3BsYXkgbXV0ZSAvPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaWduYXR1cmVcIj5cbiAgICAgICAgPGltZyBpZD1cImxvZ29cIiBzcmM9e2Njb25UcmlhbmdsZX0gLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzaWdUZXh0XCI+XG4gICAgICAgICAgICAgICAgTUVUQUxTXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiBcbiAgICAgICAgPGRpdiBpZD0nYmFubmVyRGl2Jz5cbiAgICAgICAgICA8aDIgaWQ9XCJiYW5uZXJcIj5cbiAgICAgICAgICAgIDxhIGlkPVwicmV2TGlua1wiIG9uQ2xpY2s9e3RoaXMuc2VlUmV2b2x1dGlvbn0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+PFdvcmRMb29wIGlkPVwidGV4dC1sb29wXCIgLz48L2E+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbkNvbnRhaW5lclwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5idXR0b25GYWRlfT5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlU29sb30gIGlkPVwic29sb0J1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PlxuICAgICAgICAgICAgICA8U29sb0J1dHRvbiAvPlxuICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZVNtYWxsfSAgaWQ9XCJzbWFsbEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PlxuICAgICAgICAgICAgICA8U21hbGxCdXR0b24gLz5cbiAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVDb3JwfSAgaWQ9XCJjb3JwQnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+XG4gICAgICAgICAgICAgIDxDb3JwQnV0dG9uIC8+XG4gICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImZvb3RlckNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVDb250YWN0fSBpZD1cImNvbnRhY3RCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fSBpZD1cImZvb3RlckxpbmtcIj5cbiAgICAgICAgICAgICAgICAgIDxDb250YWN0IC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNvbnRlbnRGYWRlfT5cbiAgICAgICAgICAgIDxTbGlkZXJTb2xvIHNob3c9e3RoaXMuc3RhdGUudmlld1NvbG99IG9uQ2xvc2U9e3RoaXMudGltZXJDbG9zZUNvbnRlbnR9IGlkPVwic29sb0NvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPFNsaWRlclNtYWxsIHNob3c9e3RoaXMuc3RhdGUudmlld1NtYWxsfSBvbkNsb3NlPXt0aGlzLnRpbWVyQ2xvc2VDb250ZW50fSBpZD1cInNtYWxsQ29udGVudFwiIC8+XG4gICAgICAgICAgICA8U2xpZGVyQ29ycCBzaG93PXt0aGlzLnN0YXRlLnZpZXdDb3JwfSBvbkNsb3NlPXt0aGlzLnRpbWVyQ2xvc2VDb250ZW50fSBpZD1cImNvcnBDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxDb250YWN0Q29udGVudCBzaG93PXt0aGlzLnN0YXRlLnZpZXdDb250YWN0fSBvbkNsb3NlPXt0aGlzLnRpbWVyQ2xvc2VDb250ZW50fSBpZD1cImNvbnRhY3RDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxSZXZvbHV0aW9uIHNob3c9e3RoaXMuc3RhdGUudmlld1Jldm9sdXRpb259IG9uQ2xvc2U9e3RoaXMudGltZXJDbG9zZUNvbnRlbnR9IGlkPVwicmV2Q29udGVudFwiIC8+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgIC5mYWRlSW4ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gICAgICAgICAgICB6LUluZGV4OiA1O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mYWRlT3V0IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAuQXBwIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuU2lnbmF0dXJlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTeW5jb3BhdGU7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgbGVmdDogLTMwcHg7XG4gICAgICAgICAgICB0b3A6IC0zMHB4O1xuICAgICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2xvZ28ge1xuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5zaWdUZXh0IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTeW5jb3BhdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01OCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNjElO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICB3aWR0aDogNy41ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDAuOTVlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjcmV2VGFnIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjcmV2TGluayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggYmxhY2s7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjYmFubmVyIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogODAwcHg7XG4gICAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNiYW5uZXJEaXYge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDEyMHB4KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCl7XG5cbiAgICAgICAgICAgIGRpdiAjYmFubmVyRGl2e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICNidXR0b25Db250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0wJSk7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTV2dztcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgICBkaXYgI2J1dHRvbkNvbnRhaW5lcntcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXhib3g7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICAgICAgICB0b3A6IDYwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyMCUsIC02NSUpO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjY29ycEJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDR2dztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjc21hbGxCdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0dnc7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDR2dztcbiAgICAgICAgICB9XG4gICBcbiAgICAgICAgICAjc29sb0J1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0dnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNmb290ZXJDb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA2MDAlKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTF2dztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAgICNmb290ZXJDb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3MCUsIDUwJSk7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3NvbG9CdXR0b257XG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgICB9XG4gICAgIFxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIENsb3NlQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwibWRpdlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI21kaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDQwO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAubWRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIFotaW5kZXg6IDExO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAubWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICBaLWluZGV4OiAyMjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xvc2VCdXR0b247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdEJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAuY29udGFjdEJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLDAlLDkwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IGhzbGEoMCwwJSwxNSUsICAxKSAwICAwcHggMHB4IDRweCwgLyogYm9yZGVyICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwxNSUsIC44KSAwIC0xcHggNXB4IDRweCwgLyogc29mdCBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDAsMCUsMCUsIC4yNSkgMCAtMXB4IDBweCA3cHgsIC8qIGJvdHRvbSBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDAsMCUsMTAwJSwuNykgMCAgMnB4IDFweCA3cHgsIC8qIHRvcCBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgwLDAlLCAwJSwuMTUpIDAgLTVweCA2cHggNHB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDAsMCUsMTAwJSwuNSkgMCAgNXB4IDZweCA0cHg7IC8qIG91dGVyIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDV2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMTkzLCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDN2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KGxlZnQsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAgIDYlLCBoc2xhKDAsMCUsMTAwJSwgLjEpIDcuNSUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQobGVmdCwgaHNsYSgwLDAlLCAgMCUsMCkgMCUsIGhzbGEoMCwwJSwgIDAlLDApICAgNCUsIGhzbGEoMCwwJSwgIDAlLC4wMykgNC41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChsZWZ0LCBoc2xhKDAsMCUsMTAwJSwwKSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMS4yJSwgaHNsYSgwLDAlLDEwMCUsLjE1KSAxLjUlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgxODBkZWcsIGhzbCgwLDAlLDc4JSkgIDAlLCBoc2woMCwwJSw5MCUpIDQ3JSwgaHNsKDAsMCUsNzglKSA1MyUsaHNsKDAsMCUsNzAlKTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIC5jb250YWN0QnV0dG9uOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2woMjEwLCAxMDAlLCA0MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogaHNsYSgyMTAsMTAwJSwyMCUsLjMpIDAgLTFweCAwLCBoc2woMjEwLDEwMCUsODUlKSAwIDJweCAxcHgsIGhzbGEoMjAwLDEwMCUsODAlLDEpIDAgMCA1cHgsIGhzbGEoMjEwLDEwMCUsNTAlLC42KSAwIDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwzMCUsICAxKSAwICAwcHggMHB4IDRweCwgLyogYm9yZGVyICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwxNSUsIC40KSAwIC0xcHggNXB4IDRweCwgLyogc29mdCBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMjAlLC4yNSkgMCAtMXB4IDBweCA3cHgsIC8qIGJvdHRvbSBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMTAwJSwuNykgMCAgMnB4IDFweCA3cHgsIC8qIHRvcCBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDEwMCUsNzUlLCAuOCkgMCAgMHB4IDNweCAycHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsNTAlLDQwJSwgLjI1KSAwIC01cHggNnB4IDRweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCw4MCUsOTUlLCAgIDEpIDAgIDVweCA2cHggNHB4OyAvKiBvdXRlciBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYXBJbWFnZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL21hcC1pbWFnZS5wbmcnO1xyXG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnLi9DbG9zZUJ1dHRvbic7XHJcblxyXG5jbGFzcyBDb250YWN0Q29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxwIGlkPVwiY29udGFjdFRleHRcIj5Db250YWN0IGluZm8gZ29lcyBoZXJlPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhc1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBpZD1cIm1hcEltZ1wiICBzcmM9e01hcEltYWdlfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xvc2V9IGlkPVwiY2xvc2VMaW5rXCI+PENsb3NlQnV0dG9uIGlkPVwiY2xvc2VcIiAvPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgI2Nsb3NlTGluayB7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogMSU7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogMSU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FNQUFBQXA0WGlEQUFBQVVWQk1WRVdGaFlXRGc0TjNkM2R0YlcxN2UzdDFkWFdCZ1lHSGg0ZDVlWGx6YzNPTGk0dWJtNXVWbFpXUGo0K05qWTE5ZlgySmlZbC9mMzlyYTJ1UmtaR1ptWmxwYVdtWGw1ZHZiMjl4Y1hHVGs1Tm5aMmM4VFYxbUFBQUFHM1JTVGxOQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVBdkVPd3RBQUFGVmtsRVFWUjRYcFdXQjY3YzJCVUZiM2c1NTdUL2hSbzkvV1VNWkhsZ3I0Qmc4WjRxUWdRSmxISTRBOFN6RlZyYXB2bVRGOU83ZG1ZUkZaNjBZaUJoSlJDZ2gxRlloaUxBbWR2WDBDelRPcE5FNzdNRTBadHkvbldXemNoRHRpcXJtUURldXYzcG93UTV0YTJlTjBGWTBJbmtxREQ3M2xUOWM5bEV6d1VOcWdGSHM5VlFjZTNUVkNsRkNRclNUZk9pWWtWSlFCbXBicTJMNmlaYXZQbkFQY29VMGRTdzBTVVRxei9HdHJHdVhmYnl5Qm5pS3lrT1dRV0dxd3dNQTdRaVlBeGkrSWxQZHFvK2hZSG5VdDVaUGZuc0hKeU5pRHRucEp5YXlOQmtGNmNXb1lHQU1ZOTJVMmhYSEYvQzFNOHVQL1p0WWRpdWoyNlVkQWRRUVNYUUVyd1NPTXp0L1hXUldBejVHdVNCSWt3RzFIM0ZhYkoyT3NVT1VoR0M2dEs0RU10Sk8wdHRDNklCRDNrTTB2ZTB0SndNZFNmalpvK0VFSVNhZVRyOVAzd1lyR2pYcXlDMWtyY0tkaE1weEVudDVKZXRvdWxzY3B5emhYTjVGUnB1UEh2YmVRYUt4RkFFQjZFTitjWU42eEQ3UllHcFhwTm5kTW1aZ001RGNzM1lTTkZESFVvMkxHZlp1dWtTV3lVWWlySkFkWWJGM01mcUVLbWpNK0kyRWZoQTk0aUczTDd1S3JSK0dkV0Q3M3lkbElCKzZoZ3JlZjFRVGxtZ21iTTMvTGVYNUdJMVV4MVJXcGd4cEx1WjIrSStJanpaOHdxRTRuaWx2UWRrVWRmaHpJNVFEV3kra3c1V2dnMnBHcGVFVmVDQ0E3Yjg1Qk8zRjlEenhCM2NkcXZCeldjbXpieU1pcWh6dVlxdEhSVkcyeTR4K0tPbG55cWxhOEFvV1dwdUJvWVJ4elhyZkt1SUxsNlNmaVdDYmp4b1pKVWFDQmoxQ2pIN0dJYURiYzlrcUJZM1cvUmdqZGExaXFRY09KdTJXVys3NnBaQzlRRzdNMDBkZmZlOWhObnNldXBGTDUzcjhGN1lIU3dKV1VLUDJxK2s3UmRzeHlPQjExbjB4dE92blc0aXJNTUZOVjRIMHVxd1M1RXhzbVA5QXhiRFRjOUp3Z25lQVQ1dlRpVVNtMUU3QlNmbFN0M2JmYTF0djhEaTNSOG4zQWY3TU5XenM0OWhtYXVFMndQK3R0cnErQXNXcEZHMmF3dnN1T3FiaXBXSGd0dXZ1YUFFK0ExWi83Z0M5aGVzbnIrN3dxQ3dHOGM1eUFnM0FMMWZtOFQ5QVp0cC9iYkpHd2wxcE5yRTdSdU9YN1BlTVJVRVJWYVBwRXMreXFlb1NtdU9sb2txdzQ5cGdvbWpMZWg3aWNITmxHMTl5anM2WFhPTWVkWW01eEgyWXhwVjJ0YzBSbzJqSmZ4QzUwQXB1eEdvYjdsTXN4ZlRiZVV2MDdUeVl4cGVMdWNFSDFnTmQ0SUtIMkxBZzVUZFZobENhZlp2cHNrZm5jQ2Z4OHBPaEp6ZDc2YkpXZVlGbkZjaXdjWWZ1YlJjMTJJcC9wcEloQTEvbVNaL1J4akZEckpDNXhpZkZqSnBZMlhsNXpYZGd1RnFZeVRSMXpTcDFZOXArdGt0RFlZU05mbGN4STBpeU80VFBCZGxSY3BlcWpLL3BpRjVia2xxNzdWU0VhQSt6OHFtSlRGeklXaWl0Ym56Ujc5NFVTS0JVYVQwTlRFc1ZqWnFMYUZWcUpvUE45T0RHNzBJUGJmQkhLSysvcS9BV1IwdEp6WUhSVUxPYTRNUCtXL0hmR2FkWlViZncxNzdHN2ovT0diSXM4VGFoTHl5bmw0WDRSaW5GNzkzT3orQlUwc2FYdFVIclZCRlQvRG5BM2N0TlBvR2JzNGhSSWpUb2s4aSthbGdUMWxUSGk0U3hGdk9OS05yZ1FGQXEyL2dGbldNWGd3ZmZnWU1KcGlLWWttVzN0VGczWlE5SnErZjhYTitBNWVlVUtIV3ZKV0oyc2dKMVNvcCt3d2hxRlZpanFXYUpod3REOE1ObFNCZVdOTldUYTVaNWtQWnc1K0xiVlQ5OXdxVGR4MjlsTVVINE9JRy9EODZydUtFYXVCanZINXh5NnVtL1NmajdlaTZVVVZrNEFJbDNNeUQ0TVNTVE9GZ1N3c0gvUUpXYVE1YXM3WmNtZ0Jaa3pqalUxVXJRNzRjaTFnV0JDU0dIdHVWMUgybWhTbk8zV3AvM2ZFVjVhKzR3ei8vNnF5OEp4alpzbXh4eTUrNHc5Q0ROSlkwOVQwNzJpS0cwRW5PUzBhckVZZ1hxWW5YY1lId2pUdFVOQWNNZWxPZDR4cGtvcWlUWUlDV0ZxMEpTaVBmUERRZG50KzQvd3VxY1hZNDdRSUxiZ0FBQUFCSlJVNUVya0pnZ2c9PScpO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDczdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA5JTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAjbWFwSW1nIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAxMi41JSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICNtYXBJbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI2NvbnRhY3RUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgI2NvbnRhY3RUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMCVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICl9IGVsc2Uge1xyXG4gICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RDb250ZW50OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb3JwSW1hZ2UgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9mYWN0b3J5LWZpZ3VyZS5wbmcnO1xyXG5pbXBvcnQgQ29ycEV4cGxhaW4gZnJvbSAnLi9Db3JwRXhwbGFpbic7XHJcblxyXG5jbGFzcyBDb3JwQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY29ycEJ1dHRvbkltYWdlXCIgc3JjPXtDb3JwSW1hZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvcnBCdXR0b25UYWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb3JwRXhwbGFpbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGUge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsMCUsOTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCBoc2xhKDAsMCUsMTUlLCAgMSkgMCAgMHB4IDBweCA0cHgsIC8qIGJvcmRlciAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwxNSUsIC44KSAwIC0xcHggNXB4IDRweCwgLyogc29mdCBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwwJSwgLjI1KSAwIC0xcHggMHB4IDdweCwgLyogYm90dG9tIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDEwMCUsLjcpIDAgIDJweCAxcHggN3B4LCAvKiB0b3AgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDAsMCUsIDAlLC4xNSkgMCAtNXB4IDZweCA0cHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgwLDAlLDEwMCUsLjUpIDAgIDVweCA2cHggNHB4OyAvKiBvdXRlciBITCAqLyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogQnJ1c2hlZCBNZXRhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlICAgMCUsICA4JSA1MCUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgMTAwJSwgMTIlIDUwJSwgaHNsYSgwLDAlLDEwMCUsLjYpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggICAwJSAgNTAlLCA1MCUgIDclLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAxMDAlICA1MCUsIDUwJSAgNSUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwgIDAlLDApIDAlLCBoc2xhKDAsMCUsICAwJSwwKSAgIDMlLCBoc2xhKDAsMCUsICAwJSwuMSkgMy41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAgIDYlLCBoc2xhKDAsMCUsMTAwJSwuMSkgNy41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxLjIlLCBoc2xhKDAsMCUsMTAwJSwuMikgMi4yJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDIwMCUgNTAlLCBoc2xhKDAsMCUsOTAlLDEpIDUlLCBoc2xhKDAsMCUsODUlLDEpIDMwJSwgaHNsYSgwLDAlLDYwJSwxKSAxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmJlZm9yZSwgI2NpcmNsZTphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBmYWtlIGNvbmljYWwgZ3JhZGllbnRzICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAgIDAlLCAxMCUgNTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgMTAwJSwgMTAlIDUwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgIDAlICA1MCUsIDUwJSAxMCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggMTAwJSAgNTAlLCA1MCUgMDYlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YmVmb3JlIHsgdHJhbnNmb3JtOiByb3RhdGUoIDY1ZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmFmdGVyIHsgdHJhbnNmb3JtOiByb3RhdGUoLTY1ZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsKDIxMCwgMTAwJSwgNDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IGhzbGEoMjEwLDEwMCUsMjAlLC4zKSAwIC0xcHggMCwgaHNsKDIxMCwxMDAlLDg1JSkgMCAycHggMXB4LCBoc2xhKDIwMCwxMDAlLDgwJSwxKSAwIDAgNXB4LCBoc2xhKDIxMCwxMDAlLDUwJSwuNikgMCAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMzAlLCAgMSkgMCAgMHB4IDBweCA0cHgsIC8qIGJvcmRlciAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMTUlLCAuNCkgMCAtMXB4IDVweCA0cHgsIC8qIHNvZnQgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDIwJSwuMjUpIDAgLTFweCAwcHggN3B4LCAvKiBib3R0b20gU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDEwMCUsLjcpIDAgIDJweCAxcHggN3B4LCAvKiB0b3AgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCwxMDAlLDc1JSwgLjgpIDAgIDBweCAzcHggMnB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDUwJSw0MCUsIC4yNSkgMCAtNXB4IDZweCA0cHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsODAlLDk1JSwgICAxKSAwICA1cHggNnB4IDRweDsgLyogb3V0ZXIgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBFbmQgQnJ1c2hlZCBNZXRhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2ICNidXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiAjYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NvcnBCdXR0b25UYWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0MCUsIC05MCUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvcnBCdXR0b25JbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAzMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29ycEJ1dHRvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQ29ycENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgIGNsYXNzTmFtZTE6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMjogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUzOiBcImZsaXBDYXJkXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mbGlwMSA9IHRoaXMuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMSA9IHRoaXMudW5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMiA9IHRoaXMuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMiA9IHRoaXMudW5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMyA9IHRoaXMuZmxpcDMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMyA9IHRoaXMudW5mbGlwMy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkXCIgfSlcclxufVxyXG5cclxuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiB9KVxyXG59XHJcblxyXG51bmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZFwiIH0pXHJcbn1cclxuXHJcbmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIgfSlcclxufVxyXG5cclxudW5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmRcIiB9KVxyXG59XHJcblxyXG5cclxucmVuZGVyKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzIGNvbnRlbnRDYW52YXMtLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjFcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDF9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAxfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUxfSAgaWQ9XCJjYXJkMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3RydWNrLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPVwic29sb1BybzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvdHJ1Y2suanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoOHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIj5DYXJkIDEgQmFjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjJcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDJ9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMn0gIGlkPVwiY2FyZDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9XCJzb2xvUHJvMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9waWxlLW9mLWNhdHMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9waWxlLW9mLWNhdHMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoOHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIj5DYXJkIDIgQmFjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjNcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDN9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAzfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lM30gIGlkPVwiY2FyZDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9XCJzb2xvUHJvMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9tb25leS5qcGVnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9tb25leS5qcGVnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoOHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIj5DYXJkIDMgQmFjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTY1JSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbVpnTTVEY3MzWVNORkRIVW8yTEdmWnV1a1NXeVVZaXJKQWRZYkYzTWZxRUttak0rSTJFZmhBOTRpRzNMN3VLclIrR2RXRDczeWRsSUIrNmhncmVmMVFUbG1nbWJNMy9MZVg1R0kxVXgxUldwZ3hwTHVaMitJK0lqelo4d3FFNG5pbHZRZGtVZGZoekk1UURXeStrdzVXZ2cycEdwZUVWZUNDQTdiODVCTzNGOUR6eEIzY2RxdkJ6V2NtemJ5TWlxaHp1WXF0SFJWRzJ5NHgrS09sbnlxbGE4QW9XV3B1Qm9ZUnh6WHJmS3VJTGw2U2ZpV0NianhvWkpVYUNCajFDakg3R0lhRGJjOWtxQlkzVy9SZ2pkYTFpcVFjT0p1MldXKzc2cFpDOVFHN00wMGRmZmU5aE5uc2V1cEZMNTNyOEY3WUhTd0pXVUtQMnErazdSZHN4eU9CMTFuMHh0T3ZuVzRpck1NRk5WNEgwdXF3UzVFeHNtUDlBeGJEVGM5SndnbmVBVDV2VGlVU20xRTdCU2ZsU3QzYmZhMXR2OERpM1I4bjNBZjdNTld6czQ5aG1hdUUyd1ArdHRycStBc1dwRkcyYXd2c3VPcWJpcFdIZ3R1dnVhQUUrQTFaLzdnQzloZXNucis3d3FDd0c4YzV5QWczQUwxZm04VDlBWnRwL2JiSkd3bDFwTnJFN1J1T1g3UGVNUlVFUlZhUHBFcyt5cWVvU211T2xva3F3NDlwZ29takxlaDdpY0hObEcxOXlqczZYWE9NZWRZbTV4SDJZeHBWMnRjMFJvMmpKZnhDNTBBcHV4R29iN2xNc3hmVGJlVXYwN1R5WXhwZUx1Y0VIMWdOZDRJS0gyTEFnNVRkVmhsQ2FmWnZwc2tmbmNDZng4cE9oSnpkNzZiSldlWUZuRmNpd2NZZnViUmMxMklwL3BwSWhBMS9tU1ovUnhqRkRySkM1eGlmRmpKcFkyWGw1elhkZ3VGcVl5VFIxelNwMVk5cCt0a3REWVlTTmZsY3hJMGl5TzRUUEJkbFJjcGVxaksvcGlGNWJrbHE3N1ZTRWFBK3o4cW1KVEZ6SVdpaXRibnpSNzk0VVNLQlVhVDBOVEVzVmpacUxhRlZxSm9QTjlPREc3MElQYmZCSEtLKy9xL0FXUjB0SnpZSFJVTE9hNE1QK1cvSGZHYWRaVWJmdzE3N0c3ai9PR2JJczhUYWhMeXlubDRYNFJpbkY3OTNPeitCVTBzYVh0VUhyVkJGVC9EbkEzY3ROUG9HYnM0aFJJalRvazhpK2FsZ1QxbFRIaTRTeEZ2T05LTnJnUUZBcTIvZ0ZuV01YZ3dmZmdZTUpwaUtZa21XM3RUZzNaUTlKcStmOFhOK0E1ZWVVS0hXdkpXSjJzZ0oxU29wK3d3aHFGVmlqcVdhSmh3dEQ4TU5sU0JlV05OV1RhNVo1a1BadzUrTGJWVDk5d3FUZHgyOWxNVUg0T0lHL0Q4NnJ1S0VhdUJqdkg1eHk2dW0vU2ZqN2VpNlVVVms0QUlsM015RDRNU1NUT0ZnU3dzSC9RSldhUTVhczdaY21nQlprempqVTFVclE3NGNpMWdXQkNTR0h0dVYxSDJtaFNuTzNXcC8zZkVWNWErNHd6Ly82cXk4SnhqWnNteHh5NSs0dzlDRE5KWTA5VDA3MmlLRzBFbk9TMGFyRVlnWHFZblhjWUh3alR0VU5BY01lbE9kNHhwa29xaVRZSUNXRnEwSlNpUGZQRFFkbnQrNC93dXFjWFk0N1FJTGJnQUFBQUJKUlU1RXJrSmdnZz09Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tZnJvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTElXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMSVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvcnBDb250ZW50OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDb3JwQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZsaXAxID0gdGhpcy5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAxID0gdGhpcy51bmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAyID0gdGhpcy5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAyID0gdGhpcy51bmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAzID0gdGhpcy5mbGlwMy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAzID0gdGhpcy51bmZsaXAzLmJpbmQodGhpcyk7XHJcbn1cclxuXHJcbmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiB9KVxyXG59XHJcblxyXG5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMVwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMX0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTF9ICBpZD1cImNhcmQxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPVwic29sb1BybzFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvdHJ1Y2suanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy90cnVjay5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMSBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMlwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMn0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUyfSAgaWQ9XCJjYXJkMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3BpbGUtb2YtY2F0cy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3BpbGUtb2YtY2F0cy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMiBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyM1wiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwM30gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUzfSAgaWQ9XCJjYXJkMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL21vbmV5LmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL21vbmV5LmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMyBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjUlKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFVVkJNVkVXRmhZV0RnNE4zZDNkdGJXMTdlM3QxZFhXQmdZR0hoNGQ1ZVhsemMzT0xpNHVibTV1VmxaV1BqNCtOalkxOWZYMkppWWwvZjM5cmEydVJrWkdabVpscGFXbVhsNWR2YjI5eGNYR1RrNU5uWjJjOFRWMW1BQUFBRzNSU1RsTkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQXZFT3d0QUFBRlZrbEVRVlI0WHBXV0I2N2MyQlVGYjNnNTU3VC9oUm85L1dVTVpIbGdyNEJnOFo0cVFnUUpsSEk0QThTekZWcmFwdm1URjlPN2RtWVJGWjYwWWlCaEpSQ2doMUZZaGlMQW1kdlgwQ3pUT3BORTc3TUUwWnR5L25XV3pjaER0aXFybVFEZXV2M3Bvd1E1dGEyZU4wRlkwSW5rcURENzNsVDljOWxFendVTnFnRkhzOVZRY2UzVFZDbEZDUXJTVGZPaVlrVkpRQm1wYnEyTDZpWmF2UG5BUGNvVTBkU3cwU1VUcXovR3RyR3VYZmJ5eUJuaUt5a09XUVdHcXd3TUE3UWlZQXhpK0lsUGRxbytoWUhuVXQ1WlBmbnNISnlOaUR0bnBKeWF5TkJrRjZjV29ZR0FNWTkyVTJoWEhGL0MxTTh1UC9adFlkaXVqMjZVZEFkUVFTWFFFcndTT016dC9YV1JXQXo1R3VTQklrd0cxSDNGYWJKMk9zVU9VaEdDNnRLNEVNdEpPMHR0QzZJQkQza00wdmUwdEp3TWRTZmpabytFRUlTYWVUcjlQM3dZckdqWHF5QzFrcmNLZGhNcHhFbnQ1SmV0b3Vsc2NweXpoWE41RlJwdVBIdmJlUWFLeEZBRUI2RU4rY1lONnhEN1JZR3BYcE5uZE1tWmdNNURjczNZU05GREhVbzJMR2ZadXVrU1d5VVlpckpBZFliRjNNZnFFS21qTStJMkVmaEE5NGlHM0w3dUtyUitHZFdENzN5ZGxJQis2aGdyZWYxUVRsbWdtYk0zL0xlWDVHSTFVeDFSV3BneHBMdVoyK0krSWp6Wjh3cUU0bmlsdlFka1VkZmh6STVRRFd5K2t3NVdnZzJwR3BlRVZlQ0NBN2I4NUJPM0Y5RHp4QjNjZHF2QnpXY216YnlNaXFoenVZcXRIUlZHMnk0eCtLT2xueXFsYThBb1dXcHVCb1lSeHpYcmZLdUlMbDZTZmlXQ2JqeG9aSlVhQ0JqMUNqSDdHSWFEYmM5a3FCWTNXL1JnamRhMWlxUWNPSnUyV1crNzZwWkM5UUc3TTAwZGZmZTloTm5zZXVwRkw1M3I4RjdZSFN3SldVS1AycStrN1Jkc3h5T0IxMW4weHRPdm5XNGlyTU1GTlY0SDB1cXdTNUV4c21QOUF4YkRUYzlKd2duZUFUNXZUaVVTbTFFN0JTZmxTdDNiZmExdHY4RGkzUjhuM0FmN01OV3pzNDlobWF1RTJ3UCt0dHJxK0FzV3BGRzJhd3ZzdU9xYmlwV0hndHV2dWFBRStBMVovN2dDOWhlc25yKzd3cUN3RzhjNXlBZzNBTDFmbThUOUFadHAvYmJKR3dsMXBOckU3UnVPWDdQZU1SVUVSVmFQcEVzK3lxZW9TbXVPbG9rcXc0OXBnb21qTGVoN2ljSE5sRzE5eWpzNlhYT01lZFltNXhIMll4cFYydGMwUm8yakpmeEM1MEFwdXhHb2I3bE1zeGZUYmVVdjA3VHlZeHBlTHVjRUgxZ05kNElLSDJMQWc1VGRWaGxDYWZadnBza2ZuY0NmeDhwT2hKemQ3NmJKV2VZRm5GY2l3Y1lmdWJSYzEySXAvcHBJaEExL21TWi9SeGpGRHJKQzV4aWZGakpwWTJYbDV6WGRndUZxWXlUUjF6U3AxWTlwK3RrdERZWVNOZmxjeEkwaXlPNFRQQmRsUmNwZXFqSy9waUY1YmtscTc3VlNFYUErejhxbUpURnpJV2lpdGJuelI3OTRVU0tCVWFUME5URXNWalpxTGFGVnFKb1BOOU9ERzcwSVBiZkJIS0srL3EvQVdSMHRKellIUlVMT2E0TVArVy9IZkdhZFpVYmZ3MTc3RzdqL09HYklzOFRhaEx5eW5sNFg0UmluRjc5M096K0JVMHNhWHRVSHJWQkZUL0RuQTNjdE5Qb0diczRoUklqVG9rOGkrYWxnVDFsVEhpNFN4RnZPTktOcmdRRkFxMi9nRm5XTVhnd2ZmZ1lNSnBpS1lrbVczdFRnM1pROUpxK2Y4WE4rQTVlZVVLSFd2SldKMnNnSjFTb3Ard3docUZWaWpxV2FKaHd0RDhNTmxTQmVXTk5XVGE1WjVrUFp3NStMYlZUOTl3cVRkeDI5bE1VSDRPSUcvRDg2cnVLRWF1Qmp2SDV4eTZ1bS9TZmo3ZWk2VVVWazRBSWwzTXlENE1TU1RPRmdTd3NIL1FKV2FRNWFzN1pjbWdCWmt6ampVMVVyUTc0Y2kxZ1dCQ1NHSHR1VjFIMm1oU25PM1dwLzNmRVY1YSs0d3ovLzZxeThKeGpac214eHk1KzR3OUNETkpZMDlUMDcyaUtHMEVuT1MwYXJFWWdYcVluWGNZSHdqVHRVTkFjTWVsT2Q0eHBrb3FpVFlJQ1dGcTBKU2lQZlBEUWRudCs0L3d1cWNYWTQ3UUlMYmdBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tZnJvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTElXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMSVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvcnBDb250ZW50OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDb3JwQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZsaXAxID0gdGhpcy5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAxID0gdGhpcy51bmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAyID0gdGhpcy5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAyID0gdGhpcy51bmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAzID0gdGhpcy5mbGlwMy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAzID0gdGhpcy51bmZsaXAzLmJpbmQodGhpcyk7XHJcbn1cclxuXHJcbmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiB9KVxyXG59XHJcblxyXG5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMVwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMX0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTF9ICBpZD1cImNhcmQxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPVwic29sb1BybzFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvdHJ1Y2suanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy90cnVjay5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMSBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMlwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMn0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUyfSAgaWQ9XCJjYXJkMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3BpbGUtb2YtY2F0cy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3BpbGUtb2YtY2F0cy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMiBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyM1wiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwM30gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUzfSAgaWQ9XCJjYXJkMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL21vbmV5LmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL21vbmV5LmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMyBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjUlKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFVVkJNVkVXRmhZV0RnNE4zZDNkdGJXMTdlM3QxZFhXQmdZR0hoNGQ1ZVhsemMzT0xpNHVibTV1VmxaV1BqNCtOalkxOWZYMkppWWwvZjM5cmEydVJrWkdabVpscGFXbVhsNWR2YjI5eGNYR1RrNU5uWjJjOFRWMW1BQUFBRzNSU1RsTkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQXZFT3d0QUFBRlZrbEVRVlI0WHBXV0I2N2MyQlVGYjNnNTU3VC9oUm85L1dVTVpIbGdyNEJnOFo0cVFnUUpsSEk0QThTekZWcmFwdm1URjlPN2RtWVJGWjYwWWlCaEpSQ2doMUZZaGlMQW1kdlgwQ3pUT3BORTc3TUUwWnR5L25XV3pjaER0aXFybVFEZXV2M3Bvd1E1dGEyZU4wRlkwSW5rcURENzNsVDljOWxFendVTnFnRkhzOVZRY2UzVFZDbEZDUXJTVGZPaVlrVkpRQm1wYnEyTDZpWmF2UG5BUGNvVTBkU3cwU1VUcXovR3RyR3VYZmJ5eUJuaUt5a09XUVdHcXd3TUE3UWlZQXhpK0lsUGRxbytoWUhuVXQ1WlBmbnNISnlOaUR0bnBKeWF5TkJrRjZjV29ZR0FNWTkyVTJoWEhGL0MxTTh1UC9adFlkaXVqMjZVZEFkUVFTWFFFcndTT016dC9YV1JXQXo1R3VTQklrd0cxSDNGYWJKMk9zVU9VaEdDNnRLNEVNdEpPMHR0QzZJQkQza00wdmUwdEp3TWRTZmpabytFRUlTYWVUcjlQM3dZckdqWHF5QzFrcmNLZGhNcHhFbnQ1SmV0b3Vsc2NweXpoWE41RlJwdVBIdmJlUWFLeEZBRUI2RU4rY1lONnhEN1JZR3BYcE5uZE1tWmdNNURjczNZU05GREhVbzJMR2ZadXVrU1d5VVlpckpBZFliRjNNZnFFS21qTStJMkVmaEE5NGlHM0w3dUtyUitHZFdENzN5ZGxJQis2aGdyZWYxUVRsbWdtYk0zL0xlWDVHSTFVeDFSV3BneHBMdVoyK0krSWp6Wjh3cUU0bmlsdlFka1VkZmh6STVRRFd5K2t3NVdnZzJwR3BlRVZlQ0NBN2I4NUJPM0Y5RHp4QjNjZHF2QnpXY216YnlNaXFoenVZcXRIUlZHMnk0eCtLT2xueXFsYThBb1dXcHVCb1lSeHpYcmZLdUlMbDZTZmlXQ2JqeG9aSlVhQ0JqMUNqSDdHSWFEYmM5a3FCWTNXL1JnamRhMWlxUWNPSnUyV1crNzZwWkM5UUc3TTAwZGZmZTloTm5zZXVwRkw1M3I4RjdZSFN3SldVS1AycStrN1Jkc3h5T0IxMW4weHRPdm5XNGlyTU1GTlY0SDB1cXdTNUV4c21QOUF4YkRUYzlKd2duZUFUNXZUaVVTbTFFN0JTZmxTdDNiZmExdHY4RGkzUjhuM0FmN01OV3pzNDlobWF1RTJ3UCt0dHJxK0FzV3BGRzJhd3ZzdU9xYmlwV0hndHV2dWFBRStBMVovN2dDOWhlc25yKzd3cUN3RzhjNXlBZzNBTDFmbThUOUFadHAvYmJKR3dsMXBOckU3UnVPWDdQZU1SVUVSVmFQcEVzK3lxZW9TbXVPbG9rcXc0OXBnb21qTGVoN2ljSE5sRzE5eWpzNlhYT01lZFltNXhIMll4cFYydGMwUm8yakpmeEM1MEFwdXhHb2I3bE1zeGZUYmVVdjA3VHlZeHBlTHVjRUgxZ05kNElLSDJMQWc1VGRWaGxDYWZadnBza2ZuY0NmeDhwT2hKemQ3NmJKV2VZRm5GY2l3Y1lmdWJSYzEySXAvcHBJaEExL21TWi9SeGpGRHJKQzV4aWZGakpwWTJYbDV6WGRndUZxWXlUUjF6U3AxWTlwK3RrdERZWVNOZmxjeEkwaXlPNFRQQmRsUmNwZXFqSy9waUY1YmtscTc3VlNFYUErejhxbUpURnpJV2lpdGJuelI3OTRVU0tCVWFUME5URXNWalpxTGFGVnFKb1BOOU9ERzcwSVBiZkJIS0srL3EvQVdSMHRKellIUlVMT2E0TVArVy9IZkdhZFpVYmZ3MTc3RzdqL09HYklzOFRhaEx5eW5sNFg0UmluRjc5M096K0JVMHNhWHRVSHJWQkZUL0RuQTNjdE5Qb0diczRoUklqVG9rOGkrYWxnVDFsVEhpNFN4RnZPTktOcmdRRkFxMi9nRm5XTVhnd2ZmZ1lNSnBpS1lrbVczdFRnM1pROUpxK2Y4WE4rQTVlZVVLSFd2SldKMnNnSjFTb3Ard3docUZWaWpxV2FKaHd0RDhNTmxTQmVXTk5XVGE1WjVrUFp3NStMYlZUOTl3cVRkeDI5bE1VSDRPSUcvRDg2cnVLRWF1Qmp2SDV4eTZ1bS9TZmo3ZWk2VVVWazRBSWwzTXlENE1TU1RPRmdTd3NIL1FKV2FRNWFzN1pjbWdCWmt6ampVMVVyUTc0Y2kxZ1dCQ1NHSHR1VjFIMm1oU25PM1dwLzNmRVY1YSs0d3ovLzZxeThKeGpac214eHk1KzR3OUNETkpZMDlUMDcyaUtHMEVuT1MwYXJFWWdYcVluWGNZSHdqVHRVTkFjTWVsT2Q0eHBrb3FpVFlJQ1dGcTBKU2lQZlBEUWRudCs0L3d1cWNYWTQ3UUlMYmdBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tZnJvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTElXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMSVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvcnBDb250ZW50OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDb3JwRXhwbGFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJleHBsYWluQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJjb3JwQnV0dG9uVGFnXCIgPk11bHRpLUxvY2F0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImNvcnBFeHBsYWluXCI+TXVsdGlwbGUgY29udmVydGVyIGJ1eWVycyBmcm9tIHNldmVyYWwgcGh5c2ljYWwgbG9jYXRpb25zLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjb3JwRXhwbGFpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMzUlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwOHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZXhwbGFpbkNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTAlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY29ycEJ1dHRvblRhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTYzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3JwRXhwbGFpbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnLi9DbG9zZUJ1dHRvbic7XHJcblxyXG5jbGFzcyBSZXZvbHV0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFJFVk9MVVRJT04gUExVR1MgR08gSEVSRVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0gaWQ9XCJjbG9zZUxpbmtcIj48Q2xvc2VCdXR0b24gaWQ9XCJjbG9zZVwiIC8+PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjbG9zZUxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODB2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FNQUFBQXA0WGlEQUFBQVVWQk1WRVdGaFlXRGc0TjNkM2R0YlcxN2UzdDFkWFdCZ1lHSGg0ZDVlWGx6YzNPTGk0dWJtNXVWbFpXUGo0K05qWTE5ZlgySmlZbC9mMzlyYTJ1UmtaR1ptWmxwYVdtWGw1ZHZiMjl4Y1hHVGs1Tm5aMmM4VFYxbUFBQUFHM1JTVGxOQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVBdkVPd3RBQUFGVmtsRVFWUjRYcFdXQjY3YzJCVUZiM2c1NTdUL2hSbzkvV1VNWkhsZ3I0Qmc4WjRxUWdRSmxISTRBOFN6RlZyYXB2bVRGOU83ZG1ZUkZaNjBZaUJoSlJDZ2gxRlloaUxBbWR2WDBDelRPcE5FNzdNRTBadHkvbldXemNoRHRpcXJtUURldXYzcG93UTV0YTJlTjBGWTBJbmtxREQ3M2xUOWM5bEV6d1VOcWdGSHM5VlFjZTNUVkNsRkNRclNUZk9pWWtWSlFCbXBicTJMNmlaYXZQbkFQY29VMGRTdzBTVVRxei9HdHJHdVhmYnl5Qm5pS3lrT1dRV0dxd3dNQTdRaVlBeGkrSWxQZHFvK2hZSG5VdDVaUGZuc0hKeU5pRHRucEp5YXlOQmtGNmNXb1lHQU1ZOTJVMmhYSEYvQzFNOHVQL1p0WWRpdWoyNlVkQWRRUVNYUUVyd1NPTXp0L1hXUldBejVHdVNCSWt3RzFIM0ZhYkoyT3NVT1VoR0M2dEs0RU10Sk8wdHRDNklCRDNrTTB2ZTB0SndNZFNmalpvK0VFSVNhZVRyOVAzd1lyR2pYcXlDMWtyY0tkaE1weEVudDVKZXRvdWxzY3B5emhYTjVGUnB1UEh2YmVRYUt4RkFFQjZFTitjWU42eEQ3UllHcFhwTm5kTW1aZ001RGNzM1lTTkZESFVvMkxHZlp1dWtTV3lVWWlySkFkWWJGM01mcUVLbWpNK0kyRWZoQTk0aUczTDd1S3JSK0dkV0Q3M3lkbElCKzZoZ3JlZjFRVGxtZ21iTTMvTGVYNUdJMVV4MVJXcGd4cEx1WjIrSStJanpaOHdxRTRuaWx2UWRrVWRmaHpJNVFEV3kra3c1V2dnMnBHcGVFVmVDQ0E3Yjg1Qk8zRjlEenhCM2NkcXZCeldjbXpieU1pcWh6dVlxdEhSVkcyeTR4K0tPbG55cWxhOEFvV1dwdUJvWVJ4elhyZkt1SUxsNlNmaVdDYmp4b1pKVWFDQmoxQ2pIN0dJYURiYzlrcUJZM1cvUmdqZGExaXFRY09KdTJXVys3NnBaQzlRRzdNMDBkZmZlOWhObnNldXBGTDUzcjhGN1lIU3dKV1VLUDJxK2s3UmRzeHlPQjExbjB4dE92blc0aXJNTUZOVjRIMHVxd1M1RXhzbVA5QXhiRFRjOUp3Z25lQVQ1dlRpVVNtMUU3QlNmbFN0M2JmYTF0djhEaTNSOG4zQWY3TU5XenM0OWhtYXVFMndQK3R0cnErQXNXcEZHMmF3dnN1T3FiaXBXSGd0dXZ1YUFFK0ExWi83Z0M5aGVzbnIrN3dxQ3dHOGM1eUFnM0FMMWZtOFQ5QVp0cC9iYkpHd2wxcE5yRTdSdU9YN1BlTVJVRVJWYVBwRXMreXFlb1NtdU9sb2txdzQ5cGdvbWpMZWg3aWNITmxHMTl5anM2WFhPTWVkWW01eEgyWXhwVjJ0YzBSbzJqSmZ4QzUwQXB1eEdvYjdsTXN4ZlRiZVV2MDdUeVl4cGVMdWNFSDFnTmQ0SUtIMkxBZzVUZFZobENhZlp2cHNrZm5jQ2Z4OHBPaEp6ZDc2YkpXZVlGbkZjaXdjWWZ1YlJjMTJJcC9wcEloQTEvbVNaL1J4akZEckpDNXhpZkZqSnBZMlhsNXpYZGd1RnFZeVRSMXpTcDFZOXArdGt0RFlZU05mbGN4STBpeU80VFBCZGxSY3BlcWpLL3BpRjVia2xxNzdWU0VhQSt6OHFtSlRGeklXaWl0Ym56Ujc5NFVTS0JVYVQwTlRFc1ZqWnFMYUZWcUpvUE45T0RHNzBJUGJmQkhLSysvcS9BV1IwdEp6WUhSVUxPYTRNUCtXL0hmR2FkWlViZncxNzdHN2ovT0diSXM4VGFoTHl5bmw0WDRSaW5GNzkzT3orQlUwc2FYdFVIclZCRlQvRG5BM2N0TlBvR2JzNGhSSWpUb2s4aSthbGdUMWxUSGk0U3hGdk9OS05yZ1FGQXEyL2dGbldNWGd3ZmZnWU1KcGlLWWttVzN0VGczWlE5SnErZjhYTitBNWVlVUtIV3ZKV0oyc2dKMVNvcCt3d2hxRlZpanFXYUpod3REOE1ObFNCZVdOTldUYTVaNWtQWnc1K0xiVlQ5OXdxVGR4MjlsTVVINE9JRy9EODZydUtFYXVCanZINXh5NnVtL1NmajdlaTZVVVZrNEFJbDNNeUQ0TVNTVE9GZ1N3c0gvUUpXYVE1YXM3WmNtZ0Jaa3pqalUxVXJRNzRjaTFnV0JDU0dIdHVWMUgybWhTbk8zV3AvM2ZFVjVhKzR3ei8vNnF5OEp4alpzbXh4eTUrNHc5Q0ROSlkwOVQwNzJpS0cwRW5PUzBhckVZZ1hxWW5YY1lId2pUdFVOQWNNZWxPZDR4cGtvcWlUWUlDV0ZxMEpTaVBmUERRZG50KzQvd3VxY1hZNDdRSUxiZ0FBQUFCSlJVNUVya0pnZ2c9PScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgI2NvcnBQcm9MaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNS4zJSwgMTElKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICNjb3JwUHJvMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxMCUgMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobnVsbClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2b2x1dGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29ycENvbnRlbnQxIGZyb20gJy4vQ29ycENvbnRlbnQxJztcclxuaW1wb3J0IENvcnBDb250ZW50MiBmcm9tICcuL0NvcnBDb250ZW50Mic7XHJcbmltcG9ydCBDb3JwQ29udGVudDMgZnJvbSAnLi9Db3JwQ29udGVudDMnO1xyXG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnLi9DbG9zZUJ1dHRvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICBzbGlkZTE6IFwic2xpZGUxXCIsXHJcbiAgICAgICAgICAgIHNsaWRlMjogXCJzbGlkZTJcIixcclxuICAgICAgICAgICAgc2xpZGUzOiBcInNsaWRlM1wiLFxyXG4gICAgICAgICAgICBzbGlkZUNsYXNzOiBcInNsaWRlM1wiLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zbGlkZUxlZnQgPSB0aGlzLnNsaWRlTGVmdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVSaWdodCA9IHRoaXMuc2xpZGVSaWdodC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgc2xpZGVSaWdodCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTIgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUzIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzbGlkZUxlZnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTEpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMyB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTIgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUxIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNsaWRlQ2xhc3N9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcnBDb250ZW50MSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29ycENvbnRlbnQyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3JwQ29udGVudDMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJnb0xlZnRcIiBvbkNsaWNrPXt0aGlzLnNsaWRlUmlnaHR9PjxpIGNsYXNzTmFtZT1cIkNoZXZyb25MZWZ0XCIgaWQ9XCJsZWZ0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImdvUmlnaHRcIiBvbkNsaWNrPXt0aGlzLnNsaWRlTGVmdH0+PGkgY2xhc3NOYW1lPVwiQ2hldnJvblJpZ2h0XCIgaWQ9XCJyaWdodFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0gaWQ9XCJjbG9zZUxpbmtcIj48Q2xvc2VCdXR0b24gaWQ9XCJjbG9zZVwiIC8+PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2xlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3JpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjM1cHggc29saWQgdHJhbnNwYXJlbnQ7IC8qYWRqdXN0IHNpemUqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qQ2hhbmdlIHRoZSBmb3VyIGluc3RhbmNlcyBvZiAndG9wJyBiZWxvdyB0byByb3RhdGUgKHRvcC9yaWdodC9ib3R0b20vbGVmdCkqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2IwMDsgLypDaGV2cm9uIENvbG9yKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDotMTBweDsgLyphZGp1c3QgdGhpY2tuZXNzKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2ZmZjsgLypNYXRjaCBiYWNrZ3JvdW5kIGNvbG91ciovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjM1cHggc29saWQgdHJhbnNwYXJlbnQ7IC8qYWRqdXN0IHNpemUqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qQ2hhbmdlIHRoZSBmb3VyIGluc3RhbmNlcyBvZiAndG9wJyBiZWxvdyB0byByb3RhdGUgKHRvcC9yaWdodC9ib3R0b20vbGVmdCkqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNiMDA7IC8qQ2hldnJvbiBDb2xvciovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOi0xMHB4OyAvKmFkanVzdCB0aGlja25lc3MqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojZmZmOyAvKk1hdGNoIGJhY2tncm91bmQgY29sb3VyKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2Nsb3NlTGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA2JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2Nsb3NlTGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2dvTGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1LjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjZ29SaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNS41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJ2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZTEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZTEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzV2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2JVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZTIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzV2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2JVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZTMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzV2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2JVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO30gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTbWFsbENvbnRlbnQxIGZyb20gJy4vU21hbGxDb250ZW50MSc7XHJcbmltcG9ydCBTbWFsbENvbnRlbnQyIGZyb20gJy4vU21hbGxDb250ZW50Mic7XHJcbmltcG9ydCBTbWFsbENvbnRlbnQzIGZyb20gJy4vU21hbGxDb250ZW50Myc7XHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICcuL0Nsb3NlQnV0dG9uJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICBzbGlkZTE6IFwic2xpZGUxXCIsXHJcbiAgICAgICAgICAgIHNsaWRlMjogXCJzbGlkZTJcIixcclxuICAgICAgICAgICAgc2xpZGUzOiBcInNsaWRlM1wiLFxyXG4gICAgICAgICAgICBzbGlkZUNsYXNzOiBcInNsaWRlM1wiLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zbGlkZUxlZnQgPSB0aGlzLnNsaWRlTGVmdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVSaWdodCA9IHRoaXMuc2xpZGVSaWdodC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgc2xpZGVSaWdodCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTIgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUzIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzbGlkZUxlZnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTEpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMyB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTIgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUxIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNsaWRlQ2xhc3N9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNtYWxsQ29udGVudDEgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNtYWxsQ29udGVudDIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNtYWxsQ29udGVudDMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJnb0xlZnRcIiBvbkNsaWNrPXt0aGlzLnNsaWRlUmlnaHR9PjxpIGNsYXNzTmFtZT1cIkNoZXZyb25MZWZ0XCIgaWQ9XCJsZWZ0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImdvUmlnaHRcIiBvbkNsaWNrPXt0aGlzLnNsaWRlTGVmdH0+PGkgY2xhc3NOYW1lPVwiQ2hldnJvblJpZ2h0XCIgaWQ9XCJyaWdodFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0gaWQ9XCJjbG9zZUxpbmtcIj48Q2xvc2VCdXR0b24gaWQ9XCJjbG9zZVwiIC8+PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2xlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3JpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjM1cHggc29saWQgdHJhbnNwYXJlbnQ7IC8qYWRqdXN0IHNpemUqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qQ2hhbmdlIHRoZSBmb3VyIGluc3RhbmNlcyBvZiAndG9wJyBiZWxvdyB0byByb3RhdGUgKHRvcC9yaWdodC9ib3R0b20vbGVmdCkqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2IwMDsgLypDaGV2cm9uIENvbG9yKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDotMTBweDsgLyphZGp1c3QgdGhpY2tuZXNzKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2ZmZjsgLypNYXRjaCBiYWNrZ3JvdW5kIGNvbG91ciovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjM1cHggc29saWQgdHJhbnNwYXJlbnQ7IC8qYWRqdXN0IHNpemUqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qQ2hhbmdlIHRoZSBmb3VyIGluc3RhbmNlcyBvZiAndG9wJyBiZWxvdyB0byByb3RhdGUgKHRvcC9yaWdodC9ib3R0b20vbGVmdCkqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNiMDA7IC8qQ2hldnJvbiBDb2xvciovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOi0xMHB4OyAvKmFkanVzdCB0aGlja25lc3MqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojZmZmOyAvKk1hdGNoIGJhY2tncm91bmQgY29sb3VyKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2Nsb3NlTGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA2JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2Nsb3NlTGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2dvTGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1LjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjZ29SaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNS41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJ2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZTEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZTEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzV2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2JVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZTIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzV2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2JVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZTMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzV2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2JVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO30gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTb2xvQ29udGVudDEgZnJvbSAnLi9Tb2xvQ29udGVudDEnO1xyXG5pbXBvcnQgU29sb0NvbnRlbnQyIGZyb20gJy4vU29sb0NvbnRlbnQyJztcclxuaW1wb3J0IFNvbG9Db250ZW50MyBmcm9tICcuL1NvbG9Db250ZW50Myc7XHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICcuL0Nsb3NlQnV0dG9uJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJTb2xvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgc2xpZGUxOiBcInNsaWRlMVwiLFxyXG4gICAgICAgICAgICBzbGlkZTI6IFwic2xpZGUyXCIsXHJcbiAgICAgICAgICAgIHNsaWRlMzogXCJzbGlkZTNcIixcclxuICAgICAgICAgICAgc2xpZGVDbGFzczogXCJzbGlkZTNcIixcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVMZWZ0ID0gdGhpcy5zbGlkZUxlZnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNsaWRlUmlnaHQgPSB0aGlzLnNsaWRlUmlnaHQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHNsaWRlUmlnaHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUyIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMyB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTEgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVMZWZ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUxKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTMgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUyIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zbGlkZUNsYXNzfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTb2xvQ29udGVudDEgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNvbG9Db250ZW50MiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8U29sb0NvbnRlbnQzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImdvTGVmdFwiIG9uQ2xpY2s9e3RoaXMuc2xpZGVSaWdodH0+PGkgY2xhc3NOYW1lPVwiQ2hldnJvbkxlZnRcIiBpZD1cImxlZnRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZ29SaWdodFwiIG9uQ2xpY2s9e3RoaXMuc2xpZGVMZWZ0fT48aSBjbGFzc05hbWU9XCJDaGV2cm9uUmlnaHRcIiBpZD1cInJpZ2h0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfSBpZD1cImNsb3NlTGlua1wiPjxDbG9zZUJ1dHRvbiBpZD1cImNsb3NlXCIgLz48L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC00MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MzVweCBzb2xpZCB0cmFuc3BhcmVudDsgLyphZGp1c3Qgc2l6ZSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypDaGFuZ2UgdGhlIGZvdXIgaW5zdGFuY2VzIG9mICd0b3AnIGJlbG93IHRvIHJvdGF0ZSAodG9wL3JpZ2h0L2JvdHRvbS9sZWZ0KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojYjAwOyAvKkNoZXZyb24gQ29sb3IqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOi0xMHB4OyAvKmFkanVzdCB0aGlja25lc3MqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojZmZmOyAvKk1hdGNoIGJhY2tncm91bmQgY29sb3VyKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MzVweCBzb2xpZCB0cmFuc3BhcmVudDsgLyphZGp1c3Qgc2l6ZSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypDaGFuZ2UgdGhlIGZvdXIgaW5zdGFuY2VzIG9mICd0b3AnIGJlbG93IHRvIHJvdGF0ZSAodG9wL3JpZ2h0L2JvdHRvbS9sZWZ0KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2IwMDsgLypDaGV2cm9uIENvbG9yKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6LTEwcHg7IC8qYWRqdXN0IHRoaWNrbmVzcyovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNmZmY7IC8qTWF0Y2ggYmFja2dyb3VuZCBjb2xvdXIqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2xvc2VMaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDYlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2xvc2VMaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjZ29MZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNnb1JpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1LjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDYlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZTIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDYlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZTMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDYlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7fSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNtYWxsSW1hZ2UgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9jcmV3LWZpZ3VyZS5wbmcnO1xyXG5pbXBvcnQgU21hbGxFeHBsYWluIGZyb20gJy4vU21hbGxFeHBsYWluJztcclxuXHJcbmNsYXNzIFNtYWxsQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic21hbGxCdXR0b25JbWFnZVwiIHNyYz17U21hbGxJbWFnZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNtYWxsQnV0dG9uVGFnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNtYWxsRXhwbGFpbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwwJSw5MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IGhzbGEoMCwwJSwxNSUsICAxKSAwICAwcHggMHB4IDRweCwgLyogYm9yZGVyICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDE1JSwgLjgpIDAgLTFweCA1cHggNHB4LCAvKiBzb2Z0IFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDAlLCAuMjUpIDAgLTFweCAwcHggN3B4LCAvKiBib3R0b20gU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDAsMCUsMTAwJSwuNykgMCAgMnB4IDFweCA3cHgsIC8qIHRvcCBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMCwwJSwgMCUsLjE1KSAwIC01cHggNnB4IDRweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDAsMCUsMTAwJSwuNSkgMCAgNXB4IDZweCA0cHg7IC8qIG91dGVyIEhMICovIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBCcnVzaGVkIE1ldGFsICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTV2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgICAwJSwgIDglIDUwJSwgaHNsYSgwLDAlLDEwMCUsLjUpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAxMDAlLCAxMiUgNTAlLCBoc2xhKDAsMCUsMTAwJSwuNikgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgIDAlICA1MCUsIDUwJSAgNyUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDEwMCUgIDUwJSwgNTAlICA1JSwgaHNsYSgwLDAlLDEwMCUsLjUpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDEwMCUgMTAwJSwgaHNsYSgwLDAlLCAgMCUsMCkgMCUsIGhzbGEoMCwwJSwgIDAlLDApICAgMyUsIGhzbGEoMCwwJSwgIDAlLC4xKSAzLjUlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDEwMCUgMTAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMCUsIGhzbGEoMCwwJSwxMDAlLDApICAgNiUsIGhzbGEoMCwwJSwxMDAlLC4xKSA3LjUlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDEwMCUgMTAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEuMiUsIGhzbGEoMCwwJSwxMDAlLC4yKSAyLjIlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMjAwJSA1MCUsIGhzbGEoMCwwJSw5MCUsMSkgNSUsIGhzbGEoMCwwJSw4NSUsMSkgMzAlLCBoc2xhKDAsMCUsNjAlLDEpIDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YmVmb3JlLCAjY2lyY2xlOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGZha2UgY29uaWNhbCBncmFkaWVudHMgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlICAgMCUsIDEwJSA1MCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAxMDAlLCAxMCUgNTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICAgMCUgIDUwJSwgNTAlIDEwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAxMDAlICA1MCUsIDUwJSAwNiUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTpiZWZvcmUgeyB0cmFuc2Zvcm06IHJvdGF0ZSggNjVkZWcpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YWZ0ZXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtNjVkZWcpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2woMjEwLCAxMDAlLCA0MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogaHNsYSgyMTAsMTAwJSwyMCUsLjMpIDAgLTFweCAwLCBoc2woMjEwLDEwMCUsODUlKSAwIDJweCAxcHgsIGhzbGEoMjAwLDEwMCUsODAlLDEpIDAgMCA1cHgsIGhzbGEoMjEwLDEwMCUsNTAlLC42KSAwIDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwzMCUsICAxKSAwICAwcHggMHB4IDRweCwgLyogYm9yZGVyICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwxNSUsIC40KSAwIC0xcHggNXB4IDRweCwgLyogc29mdCBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMjAlLC4yNSkgMCAtMXB4IDBweCA3cHgsIC8qIGJvdHRvbSBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMTAwJSwuNykgMCAgMnB4IDFweCA3cHgsIC8qIHRvcCBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDEwMCUsNzUlLCAuOCkgMCAgMHB4IDNweCAycHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsNTAlLDQwJSwgLjI1KSAwIC01cHggNnB4IDRweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCw4MCUsOTUlLCAgIDEpIDAgIDVweCA2cHggNHB4OyAvKiBvdXRlciBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEVuZCBCcnVzaGVkIE1ldGFsICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYgI2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiAjYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3NtYWxsQnV0dG9uVGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNDUlLCAtOTUlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnNtYWxsQnV0dG9uSW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMzAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU21hbGxCdXR0b247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jbGFzcyBTbWFsbENvbnRlbnQxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICBjbGFzc05hbWUxOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTI6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMzogXCJmbGlwQ2FyZFwiLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmxpcDEgPSB0aGlzLmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDEgPSB0aGlzLnVuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDIgPSB0aGlzLmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDIgPSB0aGlzLnVuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDMgPSB0aGlzLmZsaXAzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDMgPSB0aGlzLnVuZmxpcDMuYmluZCh0aGlzKTtcclxufVxyXG5cclxuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiB9KVxyXG59XHJcblxyXG51bmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZFwiIH0pXHJcbn1cclxuXHJcbmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIgfSlcclxufVxyXG5cclxudW5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmRcIiB9KVxyXG59XHJcblxyXG5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkXCIgfSlcclxufVxyXG5cclxuXHJcbnJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhcyBjb250ZW50Q2FudmFzLS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIxXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAxfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMX0gIGlkPVwiY2FyZDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9XCJzb2xvUHJvMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy90cnVjay5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3RydWNrLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDhweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCI+Q2FyZCAxIEJhY2s8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIyXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAyfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTJ9ICBpZD1cImNhcmQyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPVwic29sb1BybzFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvcGlsZS1vZi1jYXRzLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPVwic29sb1BybzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvcGlsZS1vZi1jYXRzLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDhweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCI+Q2FyZCAyIEJhY2s8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIzXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAzfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwM30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTN9ICBpZD1cImNhcmQxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPVwic29sb1BybzFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvbW9uZXkuanBlZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPVwic29sb1BybzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvbW9uZXkuanBlZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDhweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCI+Q2FyZCAzIEJhY2s8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FyZFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02NSUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FNQUFBQXA0WGlEQUFBQVVWQk1WRVdGaFlXRGc0TjNkM2R0YlcxN2UzdDFkWFdCZ1lHSGg0ZDVlWGx6YzNPTGk0dWJtNXVWbFpXUGo0K05qWTE5ZlgySmlZbC9mMzlyYTJ1UmtaR1ptWmxwYVdtWGw1ZHZiMjl4Y1hHVGs1Tm5aMmM4VFYxbUFBQUFHM1JTVGxOQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVBdkVPd3RBQUFGVmtsRVFWUjRYcFdXQjY3YzJCVUZiM2c1NTdUL2hSbzkvV1VNWkhsZ3I0Qmc4WjRxUWdRSmxISTRBOFN6RlZyYXB2bVRGOU83ZG1ZUkZaNjBZaUJoSlJDZ2gxRlloaUxBbWR2WDBDelRPcE5FNzdNRTBadHkvbldXemNoRHRpcXJtUURldXYzcG93UTV0YTJlTjBGWTBJbmtxREQ3M2xUOWM5bEV6d1VOcWdGSHM5VlFjZTNUVkNsRkNRclNUZk9pWWtWSlFCbXBicTJMNmlaYXZQbkFQY29VMGRTdzBTVVRxei9HdHJHdVhmYnl5Qm5pS3lrT1dRV0dxd3dNQTdRaVlBeGkrSWxQZHFvK2hZSG5VdDVaUGZuc0hKeU5pRHRucEp5YXlOQmtGNmNXb1lHQU1ZOTJVMmhYSEYvQzFNOHVQL1p0WWRpdWoyNlVkQWRRUVNYUUVyd1NPTXp0L1hXUldBejVHdVNCSWt3RzFIM0ZhYkoyT3NVT1VoR0M2dEs0RU10Sk8wdHRDNklCRDNrTTB2ZTB0SndNZFNmalpvK0VFSVNhZVRyOVAzd1lyR2pYcXlDMWtyY0tkaE1weEVudDVKZXRvdWxzY3B5emhYTjVGUnB1UEh2YmVRYUt4RkFFQjZFTitjWU42eEQ3UllHcFhwTm5kTW1aZ001RGNzM1lTTkZESFVvMkxHZlp1dWtTV3lVWWlySkFkWWJGM01mcUVLbWpNK0kyRWZoQTk0aUczTDd1S3JSK0dkV0Q3M3lkbElCKzZoZ3JlZjFRVGxtZ21iTTMvTGVYNUdJMVV4MVJXcGd4cEx1WjIrSStJanpaOHdxRTRuaWx2UWRrVWRmaHpJNVFEV3kra3c1V2dnMnBHcGVFVmVDQ0E3Yjg1Qk8zRjlEenhCM2NkcXZCeldjbXpieU1pcWh6dVlxdEhSVkcyeTR4K0tPbG55cWxhOEFvV1dwdUJvWVJ4elhyZkt1SUxsNlNmaVdDYmp4b1pKVWFDQmoxQ2pIN0dJYURiYzlrcUJZM1cvUmdqZGExaXFRY09KdTJXVys3NnBaQzlRRzdNMDBkZmZlOWhObnNldXBGTDUzcjhGN1lIU3dKV1VLUDJxK2s3UmRzeHlPQjExbjB4dE92blc0aXJNTUZOVjRIMHVxd1M1RXhzbVA5QXhiRFRjOUp3Z25lQVQ1dlRpVVNtMUU3QlNmbFN0M2JmYTF0djhEaTNSOG4zQWY3TU5XenM0OWhtYXVFMndQK3R0cnErQXNXcEZHMmF3dnN1T3FiaXBXSGd0dXZ1YUFFK0ExWi83Z0M5aGVzbnIrN3dxQ3dHOGM1eUFnM0FMMWZtOFQ5QVp0cC9iYkpHd2wxcE5yRTdSdU9YN1BlTVJVRVJWYVBwRXMreXFlb1NtdU9sb2txdzQ5cGdvbWpMZWg3aWNITmxHMTl5anM2WFhPTWVkWW01eEgyWXhwVjJ0YzBSbzJqSmZ4QzUwQXB1eEdvYjdsTXN4ZlRiZVV2MDdUeVl4cGVMdWNFSDFnTmQ0SUtIMkxBZzVUZFZobENhZlp2cHNrZm5jQ2Z4OHBPaEp6ZDc2YkpXZVlGbkZjaXdjWWZ1YlJjMTJJcC9wcEloQTEvbVNaL1J4akZEckpDNXhpZkZqSnBZMlhsNXpYZGd1RnFZeVRSMXpTcDFZOXArdGt0RFlZU05mbGN4STBpeU80VFBCZGxSY3BlcWpLL3BpRjVia2xxNzdWU0VhQSt6OHFtSlRGeklXaWl0Ym56Ujc5NFVTS0JVYVQwTlRFc1ZqWnFMYUZWcUpvUE45T0RHNzBJUGJmQkhLSysvcS9BV1IwdEp6WUhSVUxPYTRNUCtXL0hmR2FkWlViZncxNzdHN2ovT0diSXM4VGFoTHl5bmw0WDRSaW5GNzkzT3orQlUwc2FYdFVIclZCRlQvRG5BM2N0TlBvR2JzNGhSSWpUb2s4aSthbGdUMWxUSGk0U3hGdk9OS05yZ1FGQXEyL2dGbldNWGd3ZmZnWU1KcGlLWWttVzN0VGczWlE5SnErZjhYTitBNWVlVUtIV3ZKV0oyc2dKMVNvcCt3d2hxRlZpanFXYUpod3REOE1ObFNCZVdOTldUYTVaNWtQWnc1K0xiVlQ5OXdxVGR4MjlsTVVINE9JRy9EODZydUtFYXVCanZINXh5NnVtL1NmajdlaTZVVVZrNEFJbDNNeUQ0TVNTVE9GZ1N3c0gvUUpXYVE1YXM3WmNtZ0Jaa3pqalUxVXJRNzRjaTFnV0JDU0dIdHVWMUgybWhTbk8zV3AvM2ZFVjVhKzR3ei8vNnF5OEp4alpzbXh4eTUrNHc5Q0ROSlkwOVQwNzJpS0cwRW5PUzBhckVZZ1hxWW5YY1lId2pUdFVOQWNNZWxPZDR4cGtvcWlUWUlDV0ZxMEpTaVBmUERRZG50KzQvd3VxY1hZNDdRSUxiZ0FBQUFCSlJVNUVya0pnZ2c9PScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgc2lsdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTElXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICNjYXJkMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMSVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNtYWxsQ29udGVudDE7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFNtYWxsQ29udGVudDIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgIGNsYXNzTmFtZTE6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMjogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUzOiBcImZsaXBDYXJkXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mbGlwMSA9IHRoaXMuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMSA9IHRoaXMudW5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMiA9IHRoaXMuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMiA9IHRoaXMudW5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMyA9IHRoaXMuZmxpcDMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMyA9IHRoaXMudW5mbGlwMy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkXCIgfSlcclxufVxyXG5cclxuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiB9KVxyXG59XHJcblxyXG51bmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZFwiIH0pXHJcbn1cclxuXHJcbmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIgfSlcclxufVxyXG5cclxudW5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmRcIiB9KVxyXG59XHJcblxyXG5cclxucmVuZGVyKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzIGNvbnRlbnRDYW52YXMtLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjFcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDF9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAxfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUxfSAgaWQ9XCJjYXJkMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3RydWNrLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPVwic29sb1BybzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvdHJ1Y2suanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoOHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIj5DYXJkIDEgQmFjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjJcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDJ9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMn0gIGlkPVwiY2FyZDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9XCJzb2xvUHJvMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9waWxlLW9mLWNhdHMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9waWxlLW9mLWNhdHMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoOHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIj5DYXJkIDIgQmFjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjNcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDN9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAzfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lM30gIGlkPVwiY2FyZDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9XCJzb2xvUHJvMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9tb25leS5qcGVnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9tb25leS5qcGVnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoOHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIj5DYXJkIDMgQmFjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTY1JSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbVpnTTVEY3MzWVNORkRIVW8yTEdmWnV1a1NXeVVZaXJKQWRZYkYzTWZxRUttak0rSTJFZmhBOTRpRzNMN3VLclIrR2RXRDczeWRsSUIrNmhncmVmMVFUbG1nbWJNMy9MZVg1R0kxVXgxUldwZ3hwTHVaMitJK0lqelo4d3FFNG5pbHZRZGtVZGZoekk1UURXeStrdzVXZ2cycEdwZUVWZUNDQTdiODVCTzNGOUR6eEIzY2RxdkJ6V2NtemJ5TWlxaHp1WXF0SFJWRzJ5NHgrS09sbnlxbGE4QW9XV3B1Qm9ZUnh6WHJmS3VJTGw2U2ZpV0NianhvWkpVYUNCajFDakg3R0lhRGJjOWtxQlkzVy9SZ2pkYTFpcVFjT0p1MldXKzc2cFpDOVFHN00wMGRmZmU5aE5uc2V1cEZMNTNyOEY3WUhTd0pXVUtQMnErazdSZHN4eU9CMTFuMHh0T3ZuVzRpck1NRk5WNEgwdXF3UzVFeHNtUDlBeGJEVGM5SndnbmVBVDV2VGlVU20xRTdCU2ZsU3QzYmZhMXR2OERpM1I4bjNBZjdNTld6czQ5aG1hdUUyd1ArdHRycStBc1dwRkcyYXd2c3VPcWJpcFdIZ3R1dnVhQUUrQTFaLzdnQzloZXNucis3d3FDd0c4YzV5QWczQUwxZm04VDlBWnRwL2JiSkd3bDFwTnJFN1J1T1g3UGVNUlVFUlZhUHBFcyt5cWVvU211T2xva3F3NDlwZ29takxlaDdpY0hObEcxOXlqczZYWE9NZWRZbTV4SDJZeHBWMnRjMFJvMmpKZnhDNTBBcHV4R29iN2xNc3hmVGJlVXYwN1R5WXhwZUx1Y0VIMWdOZDRJS0gyTEFnNVRkVmhsQ2FmWnZwc2tmbmNDZng4cE9oSnpkNzZiSldlWUZuRmNpd2NZZnViUmMxMklwL3BwSWhBMS9tU1ovUnhqRkRySkM1eGlmRmpKcFkyWGw1elhkZ3VGcVl5VFIxelNwMVk5cCt0a3REWVlTTmZsY3hJMGl5TzRUUEJkbFJjcGVxaksvcGlGNWJrbHE3N1ZTRWFBK3o4cW1KVEZ6SVdpaXRibnpSNzk0VVNLQlVhVDBOVEVzVmpacUxhRlZxSm9QTjlPREc3MElQYmZCSEtLKy9xL0FXUjB0SnpZSFJVTE9hNE1QK1cvSGZHYWRaVWJmdzE3N0c3ai9PR2JJczhUYWhMeXlubDRYNFJpbkY3OTNPeitCVTBzYVh0VUhyVkJGVC9EbkEzY3ROUG9HYnM0aFJJalRvazhpK2FsZ1QxbFRIaTRTeEZ2T05LTnJnUUZBcTIvZ0ZuV01YZ3dmZmdZTUpwaUtZa21XM3RUZzNaUTlKcStmOFhOK0E1ZWVVS0hXdkpXSjJzZ0oxU29wK3d3aHFGVmlqcVdhSmh3dEQ4TU5sU0JlV05OV1RhNVo1a1BadzUrTGJWVDk5d3FUZHgyOWxNVUg0T0lHL0Q4NnJ1S0VhdUJqdkg1eHk2dW0vU2ZqN2VpNlVVVms0QUlsM015RDRNU1NUT0ZnU3dzSC9RSldhUTVhczdaY21nQlprempqVTFVclE3NGNpMWdXQkNTR0h0dVYxSDJtaFNuTzNXcC8zZkVWNWErNHd6Ly82cXk4SnhqWnNteHh5NSs0dzlDRE5KWTA5VDA3MmlLRzBFbk9TMGFyRVlnWHFZblhjWUh3alR0VU5BY01lbE9kNHhwa29xaVRZSUNXRnEwSlNpUGZQRFFkbnQrNC93dXFjWFk0N1FJTGJnQUFBQUJKUlU1RXJrSmdnZz09Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgc2lsdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmQxIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xJVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTElXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDQwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbik7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTbWFsbENvbnRlbnQyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTbWFsbENvbnRlbnQzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICBjbGFzc05hbWUxOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTI6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMzogXCJmbGlwQ2FyZFwiLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmxpcDEgPSB0aGlzLmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDEgPSB0aGlzLnVuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDIgPSB0aGlzLmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDIgPSB0aGlzLnVuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDMgPSB0aGlzLmZsaXAzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDMgPSB0aGlzLnVuZmxpcDMuYmluZCh0aGlzKTtcclxufVxyXG5cclxuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiB9KVxyXG59XHJcblxyXG51bmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZFwiIH0pXHJcbn1cclxuXHJcbmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIgfSlcclxufVxyXG5cclxudW5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmRcIiB9KVxyXG59XHJcblxyXG5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkXCIgfSlcclxufVxyXG5cclxuXHJcbnJlbmRlcigpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhcyBjb250ZW50Q2FudmFzLS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIxXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAxfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMX0gIGlkPVwiY2FyZDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9XCJzb2xvUHJvMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy90cnVjay5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3RydWNrLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDhweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCI+Q2FyZCAxIEJhY2s8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIyXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAyfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMn0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTJ9ICBpZD1cImNhcmQyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPVwic29sb1BybzFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvcGlsZS1vZi1jYXRzLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPVwic29sb1BybzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvcGlsZS1vZi1jYXRzLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDhweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCI+Q2FyZCAyIEJhY2s8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIzXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAzfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwM30+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTN9ICBpZD1cImNhcmQxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPVwic29sb1BybzFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvbW9uZXkuanBlZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPVwic29sb1BybzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvbW9uZXkuanBlZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDhweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCI+Q2FyZCAzIEJhY2s8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02NSUpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FNQUFBQXA0WGlEQUFBQVVWQk1WRVdGaFlXRGc0TjNkM2R0YlcxN2UzdDFkWFdCZ1lHSGg0ZDVlWGx6YzNPTGk0dWJtNXVWbFpXUGo0K05qWTE5ZlgySmlZbC9mMzlyYTJ1UmtaR1ptWmxwYVdtWGw1ZHZiMjl4Y1hHVGs1Tm5aMmM4VFYxbUFBQUFHM1JTVGxOQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVBdkVPd3RBQUFGVmtsRVFWUjRYcFdXQjY3YzJCVUZiM2c1NTdUL2hSbzkvV1VNWkhsZ3I0Qmc4WjRxUWdRSmxISTRBOFN6RlZyYXB2bVRGOU83ZG1ZUkZaNjBZaUJoSlJDZ2gxRlloaUxBbWR2WDBDelRPcE5FNzdNRTBadHkvbldXemNoRHRpcXJtUURldXYzcG93UTV0YTJlTjBGWTBJbmtxREQ3M2xUOWM5bEV6d1VOcWdGSHM5VlFjZTNUVkNsRkNRclNUZk9pWWtWSlFCbXBicTJMNmlaYXZQbkFQY29VMGRTdzBTVVRxei9HdHJHdVhmYnl5Qm5pS3lrT1dRV0dxd3dNQTdRaVlBeGkrSWxQZHFvK2hZSG5VdDVaUGZuc0hKeU5pRHRucEp5YXlOQmtGNmNXb1lHQU1ZOTJVMmhYSEYvQzFNOHVQL1p0WWRpdWoyNlVkQWRRUVNYUUVyd1NPTXp0L1hXUldBejVHdVNCSWt3RzFIM0ZhYkoyT3NVT1VoR0M2dEs0RU10Sk8wdHRDNklCRDNrTTB2ZTB0SndNZFNmalpvK0VFSVNhZVRyOVAzd1lyR2pYcXlDMWtyY0tkaE1weEVudDVKZXRvdWxzY3B5emhYTjVGUnB1UEh2YmVRYUt4RkFFQjZFTitjWU42eEQ3UllHcFhwTm5kTW1aZ001RGNzM1lTTkZESFVvMkxHZlp1dWtTV3lVWWlySkFkWWJGM01mcUVLbWpNK0kyRWZoQTk0aUczTDd1S3JSK0dkV0Q3M3lkbElCKzZoZ3JlZjFRVGxtZ21iTTMvTGVYNUdJMVV4MVJXcGd4cEx1WjIrSStJanpaOHdxRTRuaWx2UWRrVWRmaHpJNVFEV3kra3c1V2dnMnBHcGVFVmVDQ0E3Yjg1Qk8zRjlEenhCM2NkcXZCeldjbXpieU1pcWh6dVlxdEhSVkcyeTR4K0tPbG55cWxhOEFvV1dwdUJvWVJ4elhyZkt1SUxsNlNmaVdDYmp4b1pKVWFDQmoxQ2pIN0dJYURiYzlrcUJZM1cvUmdqZGExaXFRY09KdTJXVys3NnBaQzlRRzdNMDBkZmZlOWhObnNldXBGTDUzcjhGN1lIU3dKV1VLUDJxK2s3UmRzeHlPQjExbjB4dE92blc0aXJNTUZOVjRIMHVxd1M1RXhzbVA5QXhiRFRjOUp3Z25lQVQ1dlRpVVNtMUU3QlNmbFN0M2JmYTF0djhEaTNSOG4zQWY3TU5XenM0OWhtYXVFMndQK3R0cnErQXNXcEZHMmF3dnN1T3FiaXBXSGd0dXZ1YUFFK0ExWi83Z0M5aGVzbnIrN3dxQ3dHOGM1eUFnM0FMMWZtOFQ5QVp0cC9iYkpHd2wxcE5yRTdSdU9YN1BlTVJVRVJWYVBwRXMreXFlb1NtdU9sb2txdzQ5cGdvbWpMZWg3aWNITmxHMTl5anM2WFhPTWVkWW01eEgyWXhwVjJ0YzBSbzJqSmZ4QzUwQXB1eEdvYjdsTXN4ZlRiZVV2MDdUeVl4cGVMdWNFSDFnTmQ0SUtIMkxBZzVUZFZobENhZlp2cHNrZm5jQ2Z4OHBPaEp6ZDc2YkpXZVlGbkZjaXdjWWZ1YlJjMTJJcC9wcEloQTEvbVNaL1J4akZEckpDNXhpZkZqSnBZMlhsNXpYZGd1RnFZeVRSMXpTcDFZOXArdGt0RFlZU05mbGN4STBpeU80VFBCZGxSY3BlcWpLL3BpRjVia2xxNzdWU0VhQSt6OHFtSlRGeklXaWl0Ym56Ujc5NFVTS0JVYVQwTlRFc1ZqWnFMYUZWcUpvUE45T0RHNzBJUGJmQkhLSysvcS9BV1IwdEp6WUhSVUxPYTRNUCtXL0hmR2FkWlViZncxNzdHN2ovT0diSXM4VGFoTHl5bmw0WDRSaW5GNzkzT3orQlUwc2FYdFVIclZCRlQvRG5BM2N0TlBvR2JzNGhSSWpUb2s4aSthbGdUMWxUSGk0U3hGdk9OS05yZ1FGQXEyL2dGbldNWGd3ZmZnWU1KcGlLWWttVzN0VGczWlE5SnErZjhYTitBNWVlVUtIV3ZKV0oyc2dKMVNvcCt3d2hxRlZpanFXYUpod3REOE1ObFNCZVdOTldUYTVaNWtQWnc1K0xiVlQ5OXdxVGR4MjlsTVVINE9JRy9EODZydUtFYXVCanZINXh5NnVtL1NmajdlaTZVVVZrNEFJbDNNeUQ0TVNTVE9GZ1N3c0gvUUpXYVE1YXM3WmNtZ0Jaa3pqalUxVXJRNzRjaTFnV0JDU0dIdHVWMUgybWhTbk8zV3AvM2ZFVjVhKzR3ei8vNnF5OEp4alpzbXh4eTUrNHc5Q0ROSlkwOVQwNzJpS0cwRW5PUzBhckVZZ1hxWW5YY1lId2pUdFVOQWNNZWxPZDR4cGtvcWlUWUlDV0ZxMEpTaVBmUERRZG50KzQvd3VxY1hZNDdRSUxiZ0FBQUFCSlJVNUVya0pnZ2c9PScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1mcm9udCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMSVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xJVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiA0MHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMzJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU21hbGxDb250ZW50MzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgU21hbGxFeHBsYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImV4cGxhaW5Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInNtYWxsQnV0dG9uVGFnXCI+TXVsdGktVXNlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJzbWFsbEV4cGxhaW5cIj5NdWx0aXBsZSBjb252ZXJ0ZXIgYnV5ZXJzIGZyb20gYSBzaW5nbGUgcGh5c2ljYWwgbG9jYXRpb24uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NtYWxsRXhwbGFpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMzUlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwOHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZXhwbGFpbkNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNzbWFsbEJ1dHRvblRhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU21hbGxFeHBsYWluOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTb2xvRXhwbGFpbiBmcm9tICcuL1NvbG9FeHBsYWluJztcclxuaW1wb3J0IFNpbmdsZUZpZ3VyZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL3NpbmdsZS1maWd1cmUucG5nJztcclxuXHJcblxyXG5jbGFzcyBTb2xvQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzb2xvQnV0dG9uSW1hZ2VcIiBzcmM9e1NpbmdsZUZpZ3VyZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzb2xvQnV0dG9uVGFnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U29sb0V4cGxhaW4gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGUge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsMCUsOTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCBoc2xhKDAsMCUsMTUlLCAgMSkgMCAgMHB4IDBweCA0cHgsIC8qIGJvcmRlciAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwxNSUsIC44KSAwIC0xcHggNXB4IDRweCwgLyogc29mdCBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwwJSwgLjI1KSAwIC0xcHggMHB4IDdweCwgLyogYm90dG9tIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDEwMCUsLjcpIDAgIDJweCAxcHggN3B4LCAvKiB0b3AgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDAsMCUsIDAlLC4xNSkgMCAtNXB4IDZweCA0cHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgwLDAlLDEwMCUsLjUpIDAgIDVweCA2cHggNHB4OyAvKiBvdXRlciBITCAqLyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogQnJ1c2hlZCBNZXRhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlICAgMCUsICA4JSA1MCUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgMTAwJSwgMTIlIDUwJSwgaHNsYSgwLDAlLDEwMCUsLjYpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggICAwJSAgNTAlLCA1MCUgIDclLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAxMDAlICA1MCUsIDUwJSAgNSUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwgIDAlLDApIDAlLCBoc2xhKDAsMCUsICAwJSwwKSAgIDMlLCBoc2xhKDAsMCUsICAwJSwuMSkgMy41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAgIDYlLCBoc2xhKDAsMCUsMTAwJSwuMSkgNy41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxLjIlLCBoc2xhKDAsMCUsMTAwJSwuMikgMi4yJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDIwMCUgNTAlLCBoc2xhKDAsMCUsOTAlLDEpIDUlLCBoc2xhKDAsMCUsODUlLDEpIDMwJSwgaHNsYSgwLDAlLDYwJSwxKSAxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmJlZm9yZSwgI2NpcmNsZTphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBmYWtlIGNvbmljYWwgZ3JhZGllbnRzICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAgIDAlLCAxMCUgNTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgMTAwJSwgMTAlIDUwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgIDAlICA1MCUsIDUwJSAxMCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggMTAwJSAgNTAlLCA1MCUgMDYlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YmVmb3JlIHsgdHJhbnNmb3JtOiByb3RhdGUoIDY1ZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmFmdGVyIHsgdHJhbnNmb3JtOiByb3RhdGUoLTY1ZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsKDIxMCwgMTAwJSwgNDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IGhzbGEoMjEwLDEwMCUsMjAlLC4zKSAwIC0xcHggMCwgaHNsKDIxMCwxMDAlLDg1JSkgMCAycHggMXB4LCBoc2xhKDIwMCwxMDAlLDgwJSwxKSAwIDAgNXB4LCBoc2xhKDIxMCwxMDAlLDUwJSwuNikgMCAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMzAlLCAgMSkgMCAgMHB4IDBweCA0cHgsIC8qIGJvcmRlciAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMTUlLCAuNCkgMCAtMXB4IDVweCA0cHgsIC8qIHNvZnQgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDIwJSwuMjUpIDAgLTFweCAwcHggN3B4LCAvKiBib3R0b20gU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDEwMCUsLjcpIDAgIDJweCAxcHggN3B4LCAvKiB0b3AgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCwxMDAlLDc1JSwgLjgpIDAgIDBweCAzcHggMnB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDUwJSw0MCUsIC4yNSkgMCAtNXB4IDZweCA0cHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsODAlLDk1JSwgICAxKSAwICA1cHggNnB4IDRweDsgLyogb3V0ZXIgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBFbmQgQnJ1c2hlZCBNZXRhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2ICNidXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiAjYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3NvbG9CdXR0b25UYWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQ1JSwgLTEwNSUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29sb0J1dHRvbkltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDEwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2xvQnV0dG9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTb2xvQ29udGVudDEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgIGNsYXNzTmFtZTE6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMjogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUzOiBcImZsaXBDYXJkXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mbGlwMSA9IHRoaXMuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMSA9IHRoaXMudW5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMiA9IHRoaXMuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMiA9IHRoaXMudW5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMyA9IHRoaXMuZmxpcDMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMyA9IHRoaXMudW5mbGlwMy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkXCIgfSlcclxufVxyXG5cclxuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiB9KVxyXG59XHJcblxyXG51bmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZFwiIH0pXHJcbn1cclxuXHJcbmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIgfSlcclxufVxyXG5cclxudW5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmRcIiB9KVxyXG59XHJcblxyXG5cclxucmVuZGVyKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzIGNvbnRlbnRDYW52YXMtLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjFcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDF9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAxfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUxfSAgaWQ9XCJjYXJkMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL2NhdGFseXN0LWphcnMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9jYXRhbHlzdC1qYXJzLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDhweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCI+Q2FyZCAxIEJhY2s8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIyXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAyfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMn0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTJ9ICBpZD1cImNhcmQyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPVwic29sb1BybzFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvcGlsZS1vZi1jYXRzLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPVwic29sb1BybzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvcGlsZS1vZi1jYXRzLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDhweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCI+Q2FyZCAyIEJhY2s8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIzXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAzfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwM30+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTN9ICBpZD1cImNhcmQzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPVwic29sb1BybzFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvc2hpcHBpbmcuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9zaGlwcGluZy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cig4cHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiPkNhcmQgMyBCYWNrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjUlKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFVVkJNVkVXRmhZV0RnNE4zZDNkdGJXMTdlM3QxZFhXQmdZR0hoNGQ1ZVhsemMzT0xpNHVibTV1VmxaV1BqNCtOalkxOWZYMkppWWwvZjM5cmEydVJrWkdabVpscGFXbVhsNWR2YjI5eGNYR1RrNU5uWjJjOFRWMW1BQUFBRzNSU1RsTkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQXZFT3d0QUFBRlZrbEVRVlI0WHBXV0I2N2MyQlVGYjNnNTU3VC9oUm85L1dVTVpIbGdyNEJnOFo0cVFnUUpsSEk0QThTekZWcmFwdm1URjlPN2RtWVJGWjYwWWlCaEpSQ2doMUZZaGlMQW1kdlgwQ3pUT3BORTc3TUUwWnR5L25XV3pjaER0aXFybVFEZXV2M3Bvd1E1dGEyZU4wRlkwSW5rcURENzNsVDljOWxFendVTnFnRkhzOVZRY2UzVFZDbEZDUXJTVGZPaVlrVkpRQm1wYnEyTDZpWmF2UG5BUGNvVTBkU3cwU1VUcXovR3RyR3VYZmJ5eUJuaUt5a09XUVdHcXd3TUE3UWlZQXhpK0lsUGRxbytoWUhuVXQ1WlBmbnNISnlOaUR0bnBKeWF5TkJrRjZjV29ZR0FNWTkyVTJoWEhGL0MxTTh1UC9adFlkaXVqMjZVZEFkUVFTWFFFcndTT016dC9YV1JXQXo1R3VTQklrd0cxSDNGYWJKMk9zVU9VaEdDNnRLNEVNdEpPMHR0QzZJQkQza00wdmUwdEp3TWRTZmpabytFRUlTYWVUcjlQM3dZckdqWHF5QzFrcmNLZGhNcHhFbnQ1SmV0b3Vsc2NweXpoWE41RlJwdVBIdmJlUWFLeEZBRUI2RU4rY1lONnhEN1JZR3BYcE5uZE1tWmdNNURjczNZU05GREhVbzJMR2ZadXVrU1d5VVlpckpBZFliRjNNZnFFS21qTStJMkVmaEE5NGlHM0w3dUtyUitHZFdENzN5ZGxJQis2aGdyZWYxUVRsbWdtYk0zL0xlWDVHSTFVeDFSV3BneHBMdVoyK0krSWp6Wjh3cUU0bmlsdlFka1VkZmh6STVRRFd5K2t3NVdnZzJwR3BlRVZlQ0NBN2I4NUJPM0Y5RHp4QjNjZHF2QnpXY216YnlNaXFoenVZcXRIUlZHMnk0eCtLT2xueXFsYThBb1dXcHVCb1lSeHpYcmZLdUlMbDZTZmlXQ2JqeG9aSlVhQ0JqMUNqSDdHSWFEYmM5a3FCWTNXL1JnamRhMWlxUWNPSnUyV1crNzZwWkM5UUc3TTAwZGZmZTloTm5zZXVwRkw1M3I4RjdZSFN3SldVS1AycStrN1Jkc3h5T0IxMW4weHRPdm5XNGlyTU1GTlY0SDB1cXdTNUV4c21QOUF4YkRUYzlKd2duZUFUNXZUaVVTbTFFN0JTZmxTdDNiZmExdHY4RGkzUjhuM0FmN01OV3pzNDlobWF1RTJ3UCt0dHJxK0FzV3BGRzJhd3ZzdU9xYmlwV0hndHV2dWFBRStBMVovN2dDOWhlc25yKzd3cUN3RzhjNXlBZzNBTDFmbThUOUFadHAvYmJKR3dsMXBOckU3UnVPWDdQZU1SVUVSVmFQcEVzK3lxZW9TbXVPbG9rcXc0OXBnb21qTGVoN2ljSE5sRzE5eWpzNlhYT01lZFltNXhIMll4cFYydGMwUm8yakpmeEM1MEFwdXhHb2I3bE1zeGZUYmVVdjA3VHlZeHBlTHVjRUgxZ05kNElLSDJMQWc1VGRWaGxDYWZadnBza2ZuY0NmeDhwT2hKemQ3NmJKV2VZRm5GY2l3Y1lmdWJSYzEySXAvcHBJaEExL21TWi9SeGpGRHJKQzV4aWZGakpwWTJYbDV6WGRndUZxWXlUUjF6U3AxWTlwK3RrdERZWVNOZmxjeEkwaXlPNFRQQmRsUmNwZXFqSy9waUY1YmtscTc3VlNFYUErejhxbUpURnpJV2lpdGJuelI3OTRVU0tCVWFUME5URXNWalpxTGFGVnFKb1BOOU9ERzcwSVBiZkJIS0srL3EvQVdSMHRKellIUlVMT2E0TVArVy9IZkdhZFpVYmZ3MTc3RzdqL09HYklzOFRhaEx5eW5sNFg0UmluRjc5M096K0JVMHNhWHRVSHJWQkZUL0RuQTNjdE5Qb0diczRoUklqVG9rOGkrYWxnVDFsVEhpNFN4RnZPTktOcmdRRkFxMi9nRm5XTVhnd2ZmZ1lNSnBpS1lrbVczdFRnM1pROUpxK2Y4WE4rQTVlZVVLSFd2SldKMnNnSjFTb3Ard3docUZWaWpxV2FKaHd0RDhNTmxTQmVXTk5XVGE1WjVrUFp3NStMYlZUOTl3cVRkeDI5bE1VSDRPSUcvRDg2cnVLRWF1Qmp2SDV4eTZ1bS9TZmo3ZWk2VVVWazRBSWwzTXlENE1TU1RPRmdTd3NIL1FKV2FRNWFzN1pjbWdCWmt6ampVMVVyUTc0Y2kxZ1dCQ1NHSHR1VjFIMm1oU25PM1dwLzNmRVY1YSs0d3ovLzZxeThKeGpac214eHk1KzR3OUNETkpZMDlUMDcyaUtHMEVuT1MwYXJFWWdYcVluWGNZSHdqVHRVTkFjTWVsT2Q0eHBrb3FpVFlJQ1dGcTBKU2lQZlBEUWRudCs0L3d1cWNYWTQ3UUlMYmdBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tZnJvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTElXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMSVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU29sb0NvbnRlbnQxOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTb2xvQ29udGVudDIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgIGNsYXNzTmFtZTE6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMjogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUzOiBcImZsaXBDYXJkXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mbGlwMSA9IHRoaXMuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMSA9IHRoaXMudW5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMiA9IHRoaXMuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMiA9IHRoaXMudW5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMyA9IHRoaXMuZmxpcDMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMyA9IHRoaXMudW5mbGlwMy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkXCIgfSlcclxufVxyXG5cclxuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiB9KVxyXG59XHJcblxyXG51bmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZFwiIH0pXHJcbn1cclxuXHJcbmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIgfSlcclxufVxyXG5cclxudW5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmRcIiB9KVxyXG59XHJcblxyXG5cclxucmVuZGVyKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzIGNvbnRlbnRDYW52YXMtLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjFcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDF9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAxfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUxfSAgaWQ9XCJjYXJkMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD1cInNvbG9Qcm8xXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3RydWNrLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPVwic29sb1BybzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvdHJ1Y2suanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoOHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIj5DYXJkIDEgQmFjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjJcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDJ9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMn0gIGlkPVwiY2FyZDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9XCJzb2xvUHJvMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9waWxlLW9mLWNhdHMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9waWxlLW9mLWNhdHMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoOHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIj5DYXJkIDIgQmFjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjNcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDN9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAzfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lM30gIGlkPVwiY2FyZDNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9XCJzb2xvUHJvMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9tb25leS5qcGVnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9XCJzb2xvUHJvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9tb25leS5qcGVnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoOHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIj5DYXJkIDMgQmFjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTY1JSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbVpnTTVEY3MzWVNORkRIVW8yTEdmWnV1a1NXeVVZaXJKQWRZYkYzTWZxRUttak0rSTJFZmhBOTRpRzNMN3VLclIrR2RXRDczeWRsSUIrNmhncmVmMVFUbG1nbWJNMy9MZVg1R0kxVXgxUldwZ3hwTHVaMitJK0lqelo4d3FFNG5pbHZRZGtVZGZoekk1UURXeStrdzVXZ2cycEdwZUVWZUNDQTdiODVCTzNGOUR6eEIzY2RxdkJ6V2NtemJ5TWlxaHp1WXF0SFJWRzJ5NHgrS09sbnlxbGE4QW9XV3B1Qm9ZUnh6WHJmS3VJTGw2U2ZpV0NianhvWkpVYUNCajFDakg3R0lhRGJjOWtxQlkzVy9SZ2pkYTFpcVFjT0p1MldXKzc2cFpDOVFHN00wMGRmZmU5aE5uc2V1cEZMNTNyOEY3WUhTd0pXVUtQMnErazdSZHN4eU9CMTFuMHh0T3ZuVzRpck1NRk5WNEgwdXF3UzVFeHNtUDlBeGJEVGM5SndnbmVBVDV2VGlVU20xRTdCU2ZsU3QzYmZhMXR2OERpM1I4bjNBZjdNTld6czQ5aG1hdUUyd1ArdHRycStBc1dwRkcyYXd2c3VPcWJpcFdIZ3R1dnVhQUUrQTFaLzdnQzloZXNucis3d3FDd0c4YzV5QWczQUwxZm04VDlBWnRwL2JiSkd3bDFwTnJFN1J1T1g3UGVNUlVFUlZhUHBFcyt5cWVvU211T2xva3F3NDlwZ29takxlaDdpY0hObEcxOXlqczZYWE9NZWRZbTV4SDJZeHBWMnRjMFJvMmpKZnhDNTBBcHV4R29iN2xNc3hmVGJlVXYwN1R5WXhwZUx1Y0VIMWdOZDRJS0gyTEFnNVRkVmhsQ2FmWnZwc2tmbmNDZng4cE9oSnpkNzZiSldlWUZuRmNpd2NZZnViUmMxMklwL3BwSWhBMS9tU1ovUnhqRkRySkM1eGlmRmpKcFkyWGw1elhkZ3VGcVl5VFIxelNwMVk5cCt0a3REWVlTTmZsY3hJMGl5TzRUUEJkbFJjcGVxaksvcGlGNWJrbHE3N1ZTRWFBK3o4cW1KVEZ6SVdpaXRibnpSNzk0VVNLQlVhVDBOVEVzVmpacUxhRlZxSm9QTjlPREc3MElQYmZCSEtLKy9xL0FXUjB0SnpZSFJVTE9hNE1QK1cvSGZHYWRaVWJmdzE3N0c3ai9PR2JJczhUYWhMeXlubDRYNFJpbkY3OTNPeitCVTBzYVh0VUhyVkJGVC9EbkEzY3ROUG9HYnM0aFJJalRvazhpK2FsZ1QxbFRIaTRTeEZ2T05LTnJnUUZBcTIvZ0ZuV01YZ3dmZmdZTUpwaUtZa21XM3RUZzNaUTlKcStmOFhOK0E1ZWVVS0hXdkpXSjJzZ0oxU29wK3d3aHFGVmlqcVdhSmh3dEQ4TU5sU0JlV05OV1RhNVo1a1BadzUrTGJWVDk5d3FUZHgyOWxNVUg0T0lHL0Q4NnJ1S0VhdUJqdkg1eHk2dW0vU2ZqN2VpNlVVVms0QUlsM015RDRNU1NUT0ZnU3dzSC9RSldhUTVhczdaY21nQlprempqVTFVclE3NGNpMWdXQkNTR0h0dVYxSDJtaFNuTzNXcC8zZkVWNWErNHd6Ly82cXk4SnhqWnNteHh5NSs0dzlDRE5KWTA5VDA3MmlLRzBFbk9TMGFyRVlnWHFZblhjWUh3alR0VU5BY01lbE9kNHhwa29xaVRZSUNXRnEwSlNpUGZQRFFkbnQrNC93dXFjWFk0N1FJTGJnQUFBQUJKUlU1RXJrSmdnZz09Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgc2lsdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tZnJvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTElXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMSVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNvbG9Db250ZW50MjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgU29sb0NvbnRlbnQzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICBjbGFzc05hbWUxOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTI6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMzogXCJmbGlwQ2FyZFwiLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmxpcDEgPSB0aGlzLmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDEgPSB0aGlzLnVuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDIgPSB0aGlzLmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDIgPSB0aGlzLnVuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDMgPSB0aGlzLmZsaXAzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDMgPSB0aGlzLnVuZmxpcDMuYmluZCh0aGlzKTtcclxufVxyXG5cclxuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiB9KVxyXG59XHJcblxyXG51bmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZFwiIH0pXHJcbn1cclxuXHJcbmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIgfSlcclxufVxyXG5cclxudW5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmRcIiB9KVxyXG59XHJcblxyXG5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkXCIgfSlcclxufVxyXG5cclxuXHJcbnJlbmRlcigpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhcyBjb250ZW50Q2FudmFzLS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIxXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAxfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMX0gIGlkPVwiY2FyZDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9XCJzb2xvUHJvMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy90cnVjay5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD1cInNvbG9Qcm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL3RydWNrLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDhweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCI+Q2FyZCAxIEJhY2s8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIyXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAyfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMn0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTJ9ICBpZD1cImNhcmQyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPVwic29sb1BybzFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvcGlsZS1vZi1jYXRzLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPVwic29sb1BybzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvcGlsZS1vZi1jYXRzLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDhweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCI+Q2FyZCAyIEJhY2s8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIzXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAzfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwM30+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTN9ICBpZD1cImNhcmQzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPVwic29sb1BybzFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvbW9uZXkuanBlZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPVwic29sb1BybzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvbW9uZXkuanBlZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDhweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIj5DYXJkIDMgQmFjazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTY1JSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbVpnTTVEY3MzWVNORkRIVW8yTEdmWnV1a1NXeVVZaXJKQWRZYkYzTWZxRUttak0rSTJFZmhBOTRpRzNMN3VLclIrR2RXRDczeWRsSUIrNmhncmVmMVFUbG1nbWJNMy9MZVg1R0kxVXgxUldwZ3hwTHVaMitJK0lqelo4d3FFNG5pbHZRZGtVZGZoekk1UURXeStrdzVXZ2cycEdwZUVWZUNDQTdiODVCTzNGOUR6eEIzY2RxdkJ6V2NtemJ5TWlxaHp1WXF0SFJWRzJ5NHgrS09sbnlxbGE4QW9XV3B1Qm9ZUnh6WHJmS3VJTGw2U2ZpV0NianhvWkpVYUNCajFDakg3R0lhRGJjOWtxQlkzVy9SZ2pkYTFpcVFjT0p1MldXKzc2cFpDOVFHN00wMGRmZmU5aE5uc2V1cEZMNTNyOEY3WUhTd0pXVUtQMnErazdSZHN4eU9CMTFuMHh0T3ZuVzRpck1NRk5WNEgwdXF3UzVFeHNtUDlBeGJEVGM5SndnbmVBVDV2VGlVU20xRTdCU2ZsU3QzYmZhMXR2OERpM1I4bjNBZjdNTld6czQ5aG1hdUUyd1ArdHRycStBc1dwRkcyYXd2c3VPcWJpcFdIZ3R1dnVhQUUrQTFaLzdnQzloZXNucis3d3FDd0c4YzV5QWczQUwxZm04VDlBWnRwL2JiSkd3bDFwTnJFN1J1T1g3UGVNUlVFUlZhUHBFcyt5cWVvU211T2xva3F3NDlwZ29takxlaDdpY0hObEcxOXlqczZYWE9NZWRZbTV4SDJZeHBWMnRjMFJvMmpKZnhDNTBBcHV4R29iN2xNc3hmVGJlVXYwN1R5WXhwZUx1Y0VIMWdOZDRJS0gyTEFnNVRkVmhsQ2FmWnZwc2tmbmNDZng4cE9oSnpkNzZiSldlWUZuRmNpd2NZZnViUmMxMklwL3BwSWhBMS9tU1ovUnhqRkRySkM1eGlmRmpKcFkyWGw1elhkZ3VGcVl5VFIxelNwMVk5cCt0a3REWVlTTmZsY3hJMGl5TzRUUEJkbFJjcGVxaksvcGlGNWJrbHE3N1ZTRWFBK3o4cW1KVEZ6SVdpaXRibnpSNzk0VVNLQlVhVDBOVEVzVmpacUxhRlZxSm9QTjlPREc3MElQYmZCSEtLKy9xL0FXUjB0SnpZSFJVTE9hNE1QK1cvSGZHYWRaVWJmdzE3N0c3ai9PR2JJczhUYWhMeXlubDRYNFJpbkY3OTNPeitCVTBzYVh0VUhyVkJGVC9EbkEzY3ROUG9HYnM0aFJJalRvazhpK2FsZ1QxbFRIaTRTeEZ2T05LTnJnUUZBcTIvZ0ZuV01YZ3dmZmdZTUpwaUtZa21XM3RUZzNaUTlKcStmOFhOK0E1ZWVVS0hXdkpXSjJzZ0oxU29wK3d3aHFGVmlqcVdhSmh3dEQ4TU5sU0JlV05OV1RhNVo1a1BadzUrTGJWVDk5d3FUZHgyOWxNVUg0T0lHL0Q4NnJ1S0VhdUJqdkg1eHk2dW0vU2ZqN2VpNlVVVms0QUlsM015RDRNU1NUT0ZnU3dzSC9RSldhUTVhczdaY21nQlprempqVTFVclE3NGNpMWdXQkNTR0h0dVYxSDJtaFNuTzNXcC8zZkVWNWErNHd6Ly82cXk4SnhqWnNteHh5NSs0dzlDRE5KWTA5VDA3MmlLRzBFbk9TMGFyRVlnWHFZblhjWUh3alR0VU5BY01lbE9kNHhwa29xaVRZSUNXRnEwSlNpUGZQRFFkbnQrNC93dXFjWFk0N1FJTGJnQUFBQUJKUlU1RXJrSmdnZz09Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgc2lsdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tZnJvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTElXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMSVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNvbG9Db250ZW50MzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgU29sb0V4cGxhaW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXhwbGFpbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwic29sb0J1dHRvblRhZ1wiPlNpbmdsZS1Vc2VyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInNvbG9FeHBsYWluXCI+T25lIGJ1eWVyIGFjY2VzcyB0byB0aGUgUmV2b2x1dGlvbiBhcHAuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NvbG9FeHBsYWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjA4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNleHBsYWluQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NvbG9CdXR0b25UYWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvbG9FeHBsYWluOyIsImltcG9ydCBUZXh0TG9vcCBmcm9tIFwicmVhY3QtdGV4dC1sb29wXCI7XHJcblxyXG5jbGFzcyBXb3JkTG9vcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGgzIGlkPVwibG9vcEVsZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgIFlvdXIge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPFRleHRMb29wIGlkPVwibG9vcENvbXBvbmVudFwiIGNoaWxkcmVuPXtbXCIgV09SRCBIRVJFXCIsIFwiIFdPUkQgSEVSRVwiLCBcIiBXT1JEIEhFUkVcIiwgXCIgV09SRCBIRVJFXCJdfT5cclxuICAgICAgICAgICAgICAgIDwvVGV4dExvb3A+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGkgaWQ9XCJyZXZUYWdcIj5SRVZPTFVUSU9OPC9pPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAjcmV2VGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2xvb3BFbGVtZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmRMb29wOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9BcHAnO1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2ZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL3NvbGlkJ1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL3JlZ3VsYXInXHJcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYnJhbmRzJ1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJuZXh0LWJvZHlcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QXBwPjwvQXBwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3luY29wYXRlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogbG9jYWwoJ1N5bmNvcGF0ZS1Cb2xkJyksIHVybCguL2ZvbnRzL1N5bmNvcGF0ZS1Cb2xkLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sLCBib2R5LCAjX19uZXh0LCAjbmV4dC1ib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJywgJ094eWdlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jYXRhbHlzdC1qYXJzLTBkMDkyYTU1ZTYyMzFhMzM4MTc1MjRmOWE2YjYyMTc2LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jY29uVHJpYW5nbGUtZjU5ZTFmYzQ4MTUyNTBlNDRiMjg2YzY3NTEwYWQ3MjYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NyZXctZmlndXJlLTJlODZmYjIzYzlmOGM4OTU1MWZmMjMwZmNlYTUzOGE3LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mYWN0b3J5LWZpZ3VyZS04MjlkMWMyYWUwM2U3Y2M3OGFhNTYyODlhYzYzY2I1MC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbWFwLWltYWdlLWUzZDdhOTM1NDdiMzU5OGMwNGRiZWEyOTM2YThjN2EzLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tb25leS0zYTA4MTVlNjc5YjY1ZmUwMDFlZDZmNmVhN2UyMjQ2OS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3BpbGUtb2YtY2F0cy1hYTVkYzRmY2MzNmJhNjUwMGE0OTVjMmExMjBkNDEwNS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2hpcHBpbmctMTBkOTJjZWNkZjJkNjlhNjAzNDM3OTkwOTkwYzEwNGMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NpbmdsZS1maWd1cmUtMmYzNzI2MWU5ZmE3OWM4YjRhMjQ3MTAzN2IyNGRlNjcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3RydWNrLTRjNTBiMzhmNDY1ZDIwNGJmMzk2NWQzYmE3MTczZDJmLmpwZ1wiOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQmFja2dyb3VuZFZpZGVvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmlkZW9VUkw6ICcuL3ZpZGVvL0JveEZpbGxMb29wLm1wNCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dmlkZW8gaWQ9XCJiYWNrZ3JvdW5kLXZpZGVvXCIgdHlwZT1cInZpZGVvL21wNFwiIGxvb3AgYXV0b1BsYXkgc3R5bGU9e3tcclxuXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMHZ3JyxcclxuICAgICAgICAgICAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6ICcwLjMnLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG5cclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17dGhpcy5zdGF0ZS52aWRlb1VSTH0gdHlwZT1cInZpZGVvL21wNFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17dGhpcy5zdGF0ZS52aWRlb1VSTH0gdHlwZT1cInZpZGVvL29nZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnLlxyXG4gICAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmRWaWRlbzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9icmFuZHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvZm9udGF3ZXNvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvcmVndWxhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9zb2xpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10ZXh0LWxvb3BcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9