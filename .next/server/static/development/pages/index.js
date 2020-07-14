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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
      contentPage: 3,
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
    }, ".fadeIn.jsx-148974471{opacity:1;-webkit-transition:opacity 0.5s linear;transition:opacity 0.5s linear;z-Index:5;}.fadeOut.jsx-148974471{opacity:0;-webkit-transition:opacity 0.5s linear;transition:opacity 0.5s linear;pointer-events:none;}.App.jsx-148974471{text-align:center;height:100%;width:100%;}.Signature.jsx-148974471{font-family:Syncopate;color:rgb(192,192,192);position:fixed;left:-30px;top:-30px;z-index:5;opacity:1;pointer-events:none;}#logo.jsx-148974471{width:250px;max-width:250px;z-index:-1;pointer-events:none;}.sigText.jsx-148974471{font-family:Syncopate;font-size:2em;margin-top:-58%;margin-left:61%;border-top:1px solid red;border-bottom:1px solid red;width:7.5em;height:0.95em;}#revTag.jsx-148974471{color:red;z-index:2;height:100%;}#revLink.jsx-148974471{font-size:1.7em;height:100%;text-shadow:3px 3px black;}#banner.jsx-148974471{min-width:800px;width:80vw;margin:auto;color:white;z-index:1;opacity:0.8;}#bannerDiv.jsx-148974471{-webkit-transform:translate(0%,120px);-ms-transform:translate(0%,120px);transform:translate(0%,120px);}@media (max-width:720px){div.jsx-148974471 #bannerDiv.jsx-148974471{display:none;}}#buttonContainer.jsx-148974471{position:absolute;width:80%;left:50%;margin-top:150px;-webkit-transform:translate(-50%,-0%);-ms-transform:translate(-50%,-0%);transform:translate(-50%,-0%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15vw;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}@media (max-width:720px){div.jsx-148974471 #buttonContainer.jsx-148974471{display:-webkit-inline-box;display:-webkit-inline-flexbox;display:-ms-inline-flexboxbox;display:inline-flexbox;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;width:150px;height:60%;top:60%;-webkit-transform:translate(-120%,-65%);-ms-transform:translate(-120%,-65%);transform:translate(-120%,-65%);margin-top:0;}}#corpButton.jsx-148974471{width:15vw;min-width:150px;min-height:150px;margin-left:4vw;}#smallButton.jsx-148974471{width:15vw;min-width:150px;min-height:150px;margin-left:4vw;margin-right:4vw;}#soloButton.jsx-148974471{width:15vw;min-width:150px;min-height:150px;margin-right:4vw;}#footerContainer.jsx-148974471{width:33%;position:fixed;-webkit-transform:translate(0%,600%);-ms-transform:translate(0%,600%);transform:translate(0%,600%);margin-top:11vw;}@media (max-width:720px){#footerContainer.jsx-148974471{width:100%;position:fixed;-webkit-transform:translate(70%,50%);-ms-transform:translate(70%,50%);transform:translate(70%,50%);margin-top:0%;}}#soloButton.jsx-148974471{z-index:20;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNLc0IsQUFJdUIsQUFNQSxBQU9RLEFBTUksQUFXVixBQU9VLEFBV1osQUFNTSxBQU9BLEFBVW5CLEFBS2tCLEFBS0ssQUFZSyxBQVdkLEFBT0EsQUFRQSxBQU9DLEFBUUMsQUFRRixVQTdJb0IsQUFNQSxBQTBDckIsQUE4RU8sQ0F0QkQsQUFPQSxBQVFBLEFBZUMsQUFRbkIsQ0FoSGtCLENBOENoQixHQXRCWSxBQU9ELEVBaERDLEFBb0VBLEVBaENBLEVBOUJhLEFBa0JYLEdBMEZrQixDQVFBLENBekVwQixBQTJDSyxBQU9BLEFBUUEsQ0F6Rk4sQUF3QmUsQUEyQmYsRUFwRUEsRUFvQ2IsSUFaa0IsQ0E2Q0csRUFuREMsQUErQlIsRUFoRGQsR0EyRmtCLEFBT0EsQUFRQyxDQXJHRixNQTRDTCxDQXpCTSxFQWtCbEIsQUEyQm1DLEtBbkRuQyxDQVphLEFBc0ZiLEFBT21CLENBakRMLEFBeURkLE9BbEYyQixHQWxCZixFQTRDWixJQWlEQSxHQWxIWSxBQU1VLENBZ0JWLFNBckJaLENBc0JZLEVBaUJrQixPQWpDOUIsQ0FpQnNCLENBNkN0QixTQXVCaUMsVUFuRWpDLEFBZ0JjLEdBc0ZNLENBUUYsUUE3RkYsTUE4RmhCLENBUkEsT0FyRkEsU0F5Q2lCLDBFQUNELElBUUEsUUFQaUIsSUFRbEIsV0FDSCxRQUN5QixvR0FUckMsUUFVaUIsYUFDZiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFja2dyb3VuZFZpZGVvIGZyb20gJy4uL3B1YmxpYy92aWRlby9CYWNrZ3JvdW5kVmlkZW8nO1xuaW1wb3J0IGNjb25UcmlhbmdsZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2Njb25UcmlhbmdsZS5wbmcnO1xuaW1wb3J0IFNvbG9CdXR0b24gZnJvbSAnLi9Tb2xvQnV0dG9uJztcbmltcG9ydCBTbWFsbEJ1dHRvbiBmcm9tICcuL1NtYWxsQnV0dG9uJztcbmltcG9ydCBDb3JwQnV0dG9uIGZyb20gJy4vQ29ycEJ1dHRvbic7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xuaW1wb3J0IFNsaWRlclNvbG8gZnJvbSAnLi9TbGlkZXJTb2xvJztcbmltcG9ydCBTbGlkZXJTbWFsbCBmcm9tICcuL1NsaWRlclNtYWxsJztcbmltcG9ydCBTbGlkZXJDb3JwIGZyb20gJy4vU2xpZGVyQ29ycCc7XG5pbXBvcnQgQ29udGFjdENvbnRlbnQgZnJvbSAnLi9Db250YWN0Q29udGVudCc7XG5pbXBvcnQgUmV2b2x1dGlvbiBmcm9tICcuL1Jldm9sdXRpb24nO1xuaW1wb3J0IFdvcmRMb29wIGZyb20gJy4vVGV4dExvb3AnO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgLy8gU3RhdGUgbWFuYWdlbWVudCBhbmQgYmluZGluZ3NcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlld1NvbG86IGZhbHNlLFxuICAgICAgdmlld1NtYWxsOiBmYWxzZSxcbiAgICAgIHZpZXdDb3JwOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRQYWdlOiAzLFxuICAgICAgdmlld0NvbnRhY3Q6IGZhbHNlLFxuICAgICAgdmlld1Jldm9sdXRpb246IGZhbHNlLFxuICAgICAgYnV0dG9uRmFkZTogXCJmYWRlSW5cIixcbiAgICAgIGNvbnRlbnRGYWRlOiBcImZhZGVPdXRcIixcbiAgICAgIGFycm93RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICByZW5kZXJCdXR0b25zOiB0cnVlLFxuICAgIH07XG5cbiAgICB0aGlzLnNlZVNvbG8gPSB0aGlzLnNlZVNvbG8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlQWxsID0gdGhpcy5jbG9zZUFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlU21hbGwgPSB0aGlzLnNlZVNtYWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVDb3JwID0gdGhpcy5zZWVDb3JwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVDb250YWN0ID0gdGhpcy5zZWVDb250YWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWVSZXZvbHV0aW9uID0gdGhpcy5zZWVSZXZvbHV0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy50aW1lckNsb3NlQ29udGVudCA9IHRoaXMudGltZXJDbG9zZUNvbnRlbnQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIG9iamVjdHNcblxuICBjbG9zZUFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdTb2xvOiBmYWxzZSxcbiAgICAgIHZpZXdTbWFsbDogZmFsc2UsXG4gICAgICB2aWV3Q29ycDogZmFsc2UsXG4gICAgICBjb250ZW50UGFnZTogMSxcbiAgICAgIHZpZXdDb250YWN0OiBmYWxzZSxcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiBmYWxzZSxcbiAgICAgIGJ1dHRvbkZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBjb250ZW50RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICBhcnJvd0ZhZGU6IFwiZmFkZU91dFwiLFxuICAgIH0pO1xuICB9XG5cbiAgdGltZXJDbG9zZUNvbnRlbnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBidXR0b25GYWRlOiBcImZhZGVJblwiLFxuICAgICAgY29udGVudEZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgYXJyb3dGYWRlOiBcImZhZGVPdXRcIixcbiAgICB9KVxuICAgIHNldFRpbWVvdXQodGhpcy5jbG9zZUFsbCwgNTAwKTtcbiAgfVxuXG4gIHNlZVNvbG8oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3U29sbzogdHJ1ZSxcbiAgICAgIGJ1dHRvbkZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgY29udGVudEZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBhcnJvd0ZhZGU6IFwiZmFkZUluXCIsXG4gICAgfSk7XG4gIH1cblxuICBzZWVTbWFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdTbWFsbDogdHJ1ZSxcbiAgICAgIGJ1dHRvbkZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgY29udGVudEZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBhcnJvd0ZhZGU6IFwiZmFkZUluXCIsXG4gICAgfSk7XG4gIH1cblxuICBzZWVDb3JwKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld0NvcnA6IHRydWUsXG4gICAgICBidXR0b25GYWRlOiBcImZhZGVPdXRcIixcbiAgICAgIGNvbnRlbnRGYWRlOiBcImZhZGVJblwiLFxuICAgICAgYXJyb3dGYWRlOiBcImZhZGVJblwiLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlQ29udGFjdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdDb250YWN0OiB0cnVlLFxuICAgICAgYnV0dG9uRmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICBjb250ZW50RmFkZTogXCJmYWRlSW5cIixcbiAgICAgIGFycm93RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgfSk7XG4gIH1cblxuICBzZWVSZXZvbHV0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1Jldm9sdXRpb246IHRydWUsXG4gICAgICBidXR0b25GYWRlOiBcImZhZGVPdXRcIixcbiAgICAgIGNvbnRlbnRGYWRlOiBcImZhZGVJblwiLFxuICAgICAgYXJyb3dGYWRlOiBcImZhZGVPdXRcIixcbiAgICB9KTtcbiAgfVxuICBcblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cblxuICAgICAgICA8QmFja2dyb3VuZFZpZGVvIHR5cGU9J3ZpZGVvL21wNCcgYXV0b3BsYXkgLz5cblxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2lnbmF0dXJlXCI+XG4gICAgICAgIDxpbWcgaWQ9XCJsb2dvXCIgc3JjPXtjY29uVHJpYW5nbGV9IC8+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2lnVGV4dFwiPlxuICAgICAgICAgICAgICAgIE1FVEFMU1xuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gXG4gICAgICAgIDxkaXYgaWQ9J2Jhbm5lckRpdic+XG4gICAgICAgICAgPGgyIGlkPVwiYmFubmVyXCI+XG4gICAgICAgICAgICA8YSBpZD1cInJldkxpbmtcIiBvbkNsaWNrPXt0aGlzLnNlZVJldm9sdXRpb259IHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PjxXb3JkTG9vcCBpZD1cInRleHQtbG9vcFwiIC8+PC9hPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgIDxkaXYgaWQ9XCJidXR0b25Db250YWluZXJcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYnV0dG9uRmFkZX0+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZVNvbG99ICBpZD1cInNvbG9CdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5cbiAgICAgICAgICAgICAgPFNvbG9CdXR0b24gLz5cbiAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVTbWFsbH0gIGlkPVwic21hbGxCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5cbiAgICAgICAgICAgICAgPFNtYWxsQnV0dG9uIC8+XG4gICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlQ29ycH0gIGlkPVwiY29ycEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319PlxuICAgICAgICAgICAgICA8Q29ycEJ1dHRvbiAvPlxuICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXJDb250YWluZXJcIj5cblxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlQ29udGFjdH0gaWQ9XCJjb250YWN0QnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0gaWQ9XCJmb290ZXJMaW5rXCI+XG4gICAgICAgICAgICAgICAgICA8Q29udGFjdCAvPlxuICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jb250ZW50RmFkZX0+XG4gICAgICAgICAgICA8U2xpZGVyU29sbyBzaG93PXt0aGlzLnN0YXRlLnZpZXdTb2xvfSBvbkNsb3NlPXt0aGlzLnRpbWVyQ2xvc2VDb250ZW50fSBpZD1cInNvbG9Db250ZW50XCIgLz5cbiAgICAgICAgICAgIDxTbGlkZXJTbWFsbCBzaG93PXt0aGlzLnN0YXRlLnZpZXdTbWFsbH0gb25DbG9zZT17dGhpcy50aW1lckNsb3NlQ29udGVudH0gaWQ9XCJzbWFsbENvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPFNsaWRlckNvcnAgc2hvdz17dGhpcy5zdGF0ZS52aWV3Q29ycH0gb25DbG9zZT17dGhpcy50aW1lckNsb3NlQ29udGVudH0gaWQ9XCJjb3JwQ29udGVudFwiIC8+XG4gICAgICAgICAgICA8Q29udGFjdENvbnRlbnQgc2hvdz17dGhpcy5zdGF0ZS52aWV3Q29udGFjdH0gb25DbG9zZT17dGhpcy50aW1lckNsb3NlQ29udGVudH0gaWQ9XCJjb250YWN0Q29udGVudFwiIC8+XG4gICAgICAgICAgICA8UmV2b2x1dGlvbiBzaG93PXt0aGlzLnN0YXRlLnZpZXdSZXZvbHV0aW9ufSBvbkNsb3NlPXt0aGlzLnRpbWVyQ2xvc2VDb250ZW50fSBpZD1cInJldkNvbnRlbnRcIiAvPlxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAuZmFkZUluIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICAgICAgICAgICAgei1JbmRleDogNTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmFkZU91dCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLkFwcCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLlNpZ25hdHVyZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogU3luY29wYXRlO1xuICAgICAgICAgICAgY29sb3I6IHJnYigxOTIsIDE5MiwgMTkyKTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGxlZnQ6IC0zMHB4O1xuICAgICAgICAgICAgdG9wOiAtMzBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNsb2dvIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuc2lnVGV4dCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogU3luY29wYXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTglO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDYxJTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgd2lkdGg6IDcuNWVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAwLjk1ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI3JldlRhZyB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3Jldkxpbmsge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IGJsYWNrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2Jhbm5lciB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjYmFubmVyRGl2IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAxMjBweClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpe1xuXG4gICAgICAgICAgICBkaXYgI2Jhbm5lckRpdntcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjYnV0dG9uQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMCUpO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE1dnc7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICAgICAgICAgZGl2ICNidXR0b25Db250YWluZXJ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4Ym94O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgICAgICAgICAgdG9wOiA2MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMjAlLCAtNjUlKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2NvcnBCdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0dnc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI3NtYWxsQnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDE1dnc7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHZ3O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0dnc7XG4gICAgICAgICAgfVxuICAgXG4gICAgICAgICAgI3NvbG9CdXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTV2dztcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjZm9vdGVyQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgNjAwJSk7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDExdnc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgICAjZm9vdGVyQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzAlLCA1MCUpO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNzb2xvQnV0dG9ue1xuICAgICAgICAgICAgei1pbmRleDogMjA7XG4gICAgICAgICAgfVxuICAgICBcbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\App.js */"));
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
      }, "#closeLink.jsx-3093267444{position:absolute;width:25px;height:25px;cursor:pointer;right:1%;top:1%;}#contentContainer.jsx-3093267444{position:absolute;margin-top:100px;height:60vh;margin-left:10%;width:80vw;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==');background-color:rgb(192,192,192);border-radius:8px;min-width:450px;}@media (max-width:720px){#contentContainer.jsx-3093267444{height:73vh;min-height:575px;top:9%;}}#mapImg.jsx-3093267444{width:100%;height:80%;border-radius:12px;position:relative;-webkit-transform:translate(0%,12.5%);-ms-transform:translate(0%,12.5%);transform:translate(0%,12.5%);}@media (max-width:720px){#mapImg.jsx-3093267444{height:300px;}}.contentCanvas.jsx-3093267444{width:55%;height:100%;-webkit-transform:translate(0%,0%);-ms-transform:translate(0%,0%);transform:translate(0%,0%);right:0px;position:absolute;margin-right:5%;}@media (max-width:720px){.contentCanvas.jsx-3093267444{width:90%;}}#contactText.jsx-3093267444{width:40%;position:absolute;top:40%;}@media (max-width:720px){#contactText.jsx-3093267444{width:80%;position:absolute;top:70%;left:10%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29udGFjdENvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JxQixBQUlxQyxBQVNBLEFBYUosQUFPSCxBQVNJLEFBS0wsQUFVRSxBQUtGLEFBT0UsVUFyQkEsQUFVWixBQUtrQixBQU9FLENBcENULENBUFEsQ0FnQm5CLEtBdENXLEFBU00sSUFxQkUsQUFjUyxNQWVwQixBQU9FLENBakVFLEFBc0JILE1BYkcsQ0FjWixBQW9DRixBQVFDLEtBbEVnQixBQTZCRyxJQXFDbEIsRUF6RGdCLFNBUlAsR0E2QnNCLElBcEJwQixFQVJKLE9BQ1AsRUFRMmtFLHlDQWdDamtFLFVBQ1Esa0JBQ0YsZ0JBQ2xCLEVBZkEsby9EQW5Cb0Msa0NBQ2hCLGtCQUNGLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXENvbnRhY3RDb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1hcEltYWdlIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvbWFwLWltYWdlLnBuZyc7XHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICcuL0Nsb3NlQnV0dG9uJztcclxuXHJcbmNsYXNzIENvbnRhY3RDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5zaG93KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgaWQ9XCJjb250YWN0VGV4dFwiPkNvbnRhY3QgaW5mbyBnb2VzIGhlcmU8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGlkPVwibWFwSW1nXCIgIHNyYz17TWFwSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0gaWQ9XCJjbG9zZUxpbmtcIj48Q2xvc2VCdXR0b24gaWQ9XCJjbG9zZVwiIC8+PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAjY2xvc2VMaW5rIHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxJTtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAxJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogODB2dztcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbVpnTTVEY3MzWVNORkRIVW8yTEdmWnV1a1NXeVVZaXJKQWRZYkYzTWZxRUttak0rSTJFZmhBOTRpRzNMN3VLclIrR2RXRDczeWRsSUIrNmhncmVmMVFUbG1nbWJNMy9MZVg1R0kxVXgxUldwZ3hwTHVaMitJK0lqelo4d3FFNG5pbHZRZGtVZGZoekk1UURXeStrdzVXZ2cycEdwZUVWZUNDQTdiODVCTzNGOUR6eEIzY2RxdkJ6V2NtemJ5TWlxaHp1WXF0SFJWRzJ5NHgrS09sbnlxbGE4QW9XV3B1Qm9ZUnh6WHJmS3VJTGw2U2ZpV0NianhvWkpVYUNCajFDakg3R0lhRGJjOWtxQlkzVy9SZ2pkYTFpcVFjT0p1MldXKzc2cFpDOVFHN00wMGRmZmU5aE5uc2V1cEZMNTNyOEY3WUhTd0pXVUtQMnErazdSZHN4eU9CMTFuMHh0T3ZuVzRpck1NRk5WNEgwdXF3UzVFeHNtUDlBeGJEVGM5SndnbmVBVDV2VGlVU20xRTdCU2ZsU3QzYmZhMXR2OERpM1I4bjNBZjdNTld6czQ5aG1hdUUyd1ArdHRycStBc1dwRkcyYXd2c3VPcWJpcFdIZ3R1dnVhQUUrQTFaLzdnQzloZXNucis3d3FDd0c4YzV5QWczQUwxZm04VDlBWnRwL2JiSkd3bDFwTnJFN1J1T1g3UGVNUlVFUlZhUHBFcyt5cWVvU211T2xva3F3NDlwZ29takxlaDdpY0hObEcxOXlqczZYWE9NZWRZbTV4SDJZeHBWMnRjMFJvMmpKZnhDNTBBcHV4R29iN2xNc3hmVGJlVXYwN1R5WXhwZUx1Y0VIMWdOZDRJS0gyTEFnNVRkVmhsQ2FmWnZwc2tmbmNDZng4cE9oSnpkNzZiSldlWUZuRmNpd2NZZnViUmMxMklwL3BwSWhBMS9tU1ovUnhqRkRySkM1eGlmRmpKcFkyWGw1elhkZ3VGcVl5VFIxelNwMVk5cCt0a3REWVlTTmZsY3hJMGl5TzRUUEJkbFJjcGVxaksvcGlGNWJrbHE3N1ZTRWFBK3o4cW1KVEZ6SVdpaXRibnpSNzk0VVNLQlVhVDBOVEVzVmpacUxhRlZxSm9QTjlPREc3MElQYmZCSEtLKy9xL0FXUjB0SnpZSFJVTE9hNE1QK1cvSGZHYWRaVWJmdzE3N0c3ai9PR2JJczhUYWhMeXlubDRYNFJpbkY3OTNPeitCVTBzYVh0VUhyVkJGVC9EbkEzY3ROUG9HYnM0aFJJalRvazhpK2FsZ1QxbFRIaTRTeEZ2T05LTnJnUUZBcTIvZ0ZuV01YZ3dmZmdZTUpwaUtZa21XM3RUZzNaUTlKcStmOFhOK0E1ZWVVS0hXdkpXSjJzZ0oxU29wK3d3aHFGVmlqcVdhSmh3dEQ4TU5sU0JlV05OV1RhNVo1a1BadzUrTGJWVDk5d3FUZHgyOWxNVUg0T0lHL0Q4NnJ1S0VhdUJqdkg1eHk2dW0vU2ZqN2VpNlVVVms0QUlsM015RDRNU1NUT0ZnU3dzSC9RSldhUTVhczdaY21nQlprempqVTFVclE3NGNpMWdXQkNTR0h0dVYxSDJtaFNuTzNXcC8zZkVWNWErNHd6Ly82cXk4SnhqWnNteHh5NSs0dzlDRE5KWTA5VDA3MmlLRzBFbk9TMGFyRVlnWHFZblhjWUh3alR0VU5BY01lbE9kNHhwa29xaVRZSUNXRnEwSlNpUGZQRFFkbnQrNC93dXFjWFk0N1FJTGJnQUFBQUJKUlU1RXJrSmdnZz09Jyk7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzN2aDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDklO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICNtYXBJbWcge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDEyLjUlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgI21hcEltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjY29udGFjdFRleHQge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAjY29udGFjdFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwJVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgKX0gZWxzZSB7XHJcbiAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdENvbnRlbnQ7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\ContactContent.js */"));
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
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-1374480556",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-1374480556" + " " + "contentCanvas",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 19
      }
    }, __jsx("ul", {
      id: "soloProList",
      className: "jsx-1374480556",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 23
      }
    }, __jsx("li", {
      id: "soloPro1",
      className: "jsx-1374480556",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 27
      }
    }), __jsx("li", {
      id: "soloPro1",
      className: "jsx-1374480556",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 27
      }
    }), __jsx("li", {
      id: "soloPro1",
      className: "jsx-1374480556",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 27
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1374480556",
      __self: this
    }, "#contentContainer.jsx-1374480556{position:absolute;height:100%;width:90%;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;left:5%;}@media (max-width:720px){#contentContainer.jsx-1374480556{height:73vh;min-height:575px;top:9%;}}.contentCanvas.jsx-1374480556{margin-top:0px;z-index:15;height:100%;width:100%;-webkit-transform:translate(0,7.5%);-ms-transform:translate(0,7.5%);transform:translate(0,7.5%);}@media (max-width:720px){.contentCanvas.jsx-1374480556{-webkit-transform:translate(0,5.5%);-ms-transform:translate(0,5.5%);transform:translate(0,5.5%);}}#soloProList.jsx-1374480556{margin:auto;list-style:none;font-size:1.6em;width:80%;height:90%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:0;position:absolute;display:table;vertical-align:middle;}@media (max-width:720px){#soloProList.jsx-1374480556{width:60%;min-width:300px;}}#soloPro1.jsx-1374480556{display:table-row;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycENvbnRlbnQxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCcUIsQUFHMkMsQUFZSixBQU9DLEFBU2dCLEFBS25CLEFBZ0JBLEFBTU0sVUFMQSxFQXJDQyxBQXFCSCxHQWRMLEdBbkJDLEFBdURkLFFBbkNjLEFBOEJaLEVBaEJnQixDQXJCUCxDQVpDLE1BYVYsRUFPVyxFQW5CZ2tFLElBaUNqa0UsS0FibUIsS0FjbEIsV0FDRixTQUNELFFBQ3dCLGNBWGhDLGlEQUxGLDBDQWlCWSxVQUNRLGtCQUNKLGNBQ1Esc0JBQ3hCLHczREF6Q29DLGtDQUNoQixrQkFDVixRQUNWIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycENvbnRlbnQxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIENvcnBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJzb2xvUHJvTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInNvbG9Qcm8xXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJzb2xvUHJvMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic29sb1BybzFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FNQUFBQXA0WGlEQUFBQVVWQk1WRVdGaFlXRGc0TjNkM2R0YlcxN2UzdDFkWFdCZ1lHSGg0ZDVlWGx6YzNPTGk0dWJtNXVWbFpXUGo0K05qWTE5ZlgySmlZbC9mMzlyYTJ1UmtaR1ptWmxwYVdtWGw1ZHZiMjl4Y1hHVGs1Tm5aMmM4VFYxbUFBQUFHM1JTVGxOQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVBdkVPd3RBQUFGVmtsRVFWUjRYcFdXQjY3YzJCVUZiM2c1NTdUL2hSbzkvV1VNWkhsZ3I0Qmc4WjRxUWdRSmxISTRBOFN6RlZyYXB2bVRGOU83ZG1ZUkZaNjBZaUJoSlJDZ2gxRlloaUxBbWR2WDBDelRPcE5FNzdNRTBadHkvbldXemNoRHRpcXJtUURldXYzcG93UTV0YTJlTjBGWTBJbmtxREQ3M2xUOWM5bEV6d1VOcWdGSHM5VlFjZTNUVkNsRkNRclNUZk9pWWtWSlFCbXBicTJMNmlaYXZQbkFQY29VMGRTdzBTVVRxei9HdHJHdVhmYnl5Qm5pS3lrT1dRV0dxd3dNQTdRaVlBeGkrSWxQZHFvK2hZSG5VdDVaUGZuc0hKeU5pRHRucEp5YXlOQmtGNmNXb1lHQU1ZOTJVMmhYSEYvQzFNOHVQL1p0WWRpdWoyNlVkQWRRUVNYUUVyd1NPTXp0L1hXUldBejVHdVNCSWt3RzFIM0ZhYkoyT3NVT1VoR0M2dEs0RU10Sk8wdHRDNklCRDNrTTB2ZTB0SndNZFNmalpvK0VFSVNhZVRyOVAzd1lyR2pYcXlDMWtyY0tkaE1weEVudDVKZXRvdWxzY3B5emhYTjVGUnB1UEh2YmVRYUt4RkFFQjZFTitjWU42eEQ3UllHcFhwTm5kTW1aZ001RGNzM1lTTkZESFVvMkxHZlp1dWtTV3lVWWlySkFkWWJGM01mcUVLbWpNK0kyRWZoQTk0aUczTDd1S3JSK0dkV0Q3M3lkbElCKzZoZ3JlZjFRVGxtZ21iTTMvTGVYNUdJMVV4MVJXcGd4cEx1WjIrSStJanpaOHdxRTRuaWx2UWRrVWRmaHpJNVFEV3kra3c1V2dnMnBHcGVFVmVDQ0E3Yjg1Qk8zRjlEenhCM2NkcXZCeldjbXpieU1pcWh6dVlxdEhSVkcyeTR4K0tPbG55cWxhOEFvV1dwdUJvWVJ4elhyZkt1SUxsNlNmaVdDYmp4b1pKVWFDQmoxQ2pIN0dJYURiYzlrcUJZM1cvUmdqZGExaXFRY09KdTJXVys3NnBaQzlRRzdNMDBkZmZlOWhObnNldXBGTDUzcjhGN1lIU3dKV1VLUDJxK2s3UmRzeHlPQjExbjB4dE92blc0aXJNTUZOVjRIMHVxd1M1RXhzbVA5QXhiRFRjOUp3Z25lQVQ1dlRpVVNtMUU3QlNmbFN0M2JmYTF0djhEaTNSOG4zQWY3TU5XenM0OWhtYXVFMndQK3R0cnErQXNXcEZHMmF3dnN1T3FiaXBXSGd0dXZ1YUFFK0ExWi83Z0M5aGVzbnIrN3dxQ3dHOGM1eUFnM0FMMWZtOFQ5QVp0cC9iYkpHd2wxcE5yRTdSdU9YN1BlTVJVRVJWYVBwRXMreXFlb1NtdU9sb2txdzQ5cGdvbWpMZWg3aWNITmxHMTl5anM2WFhPTWVkWW01eEgyWXhwVjJ0YzBSbzJqSmZ4QzUwQXB1eEdvYjdsTXN4ZlRiZVV2MDdUeVl4cGVMdWNFSDFnTmQ0SUtIMkxBZzVUZFZobENhZlp2cHNrZm5jQ2Z4OHBPaEp6ZDc2YkpXZVlGbkZjaXdjWWZ1YlJjMTJJcC9wcEloQTEvbVNaL1J4akZEckpDNXhpZkZqSnBZMlhsNXpYZGd1RnFZeVRSMXpTcDFZOXArdGt0RFlZU05mbGN4STBpeU80VFBCZGxSY3BlcWpLL3BpRjVia2xxNzdWU0VhQSt6OHFtSlRGeklXaWl0Ym56Ujc5NFVTS0JVYVQwTlRFc1ZqWnFMYUZWcUpvUE45T0RHNzBJUGJmQkhLSysvcS9BV1IwdEp6WUhSVUxPYTRNUCtXL0hmR2FkWlViZncxNzdHN2ovT0diSXM4VGFoTHl5bmw0WDRSaW5GNzkzT3orQlUwc2FYdFVIclZCRlQvRG5BM2N0TlBvR2JzNGhSSWpUb2s4aSthbGdUMWxUSGk0U3hGdk9OS05yZ1FGQXEyL2dGbldNWGd3ZmZnWU1KcGlLWWttVzN0VGczWlE5SnErZjhYTitBNWVlVUtIV3ZKV0oyc2dKMVNvcCt3d2hxRlZpanFXYUpod3REOE1ObFNCZVdOTldUYTVaNWtQWnc1K0xiVlQ5OXdxVGR4MjlsTVVINE9JRy9EODZydUtFYXVCanZINXh5NnVtL1NmajdlaTZVVVZrNEFJbDNNeUQ0TVNTVE9GZ1N3c0gvUUpXYVE1YXM3WmNtZ0Jaa3pqalUxVXJRNzRjaTFnV0JDU0dIdHVWMUgybWhTbk8zV3AvM2ZFVjVhKzR3ei8vNnF5OEp4alpzbXh4eTUrNHc5Q0ROSlkwOVQwNzJpS0cwRW5PUzBhckVZZ1hxWW5YY1lId2pUdFVOQWNNZWxPZDR4cGtvcWlUWUlDV0ZxMEpTaVBmUERRZG50KzQvd3VxY1hZNDdRSUxiZ0FBQUFCSlJVNUVya0pnZ2c9PScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzN2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDklO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDcuNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNS41JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICNzb2xvUHJvTGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAjc29sb1Byb0xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgI3NvbG9Qcm8xIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3JwQ29udGVudDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\CorpContent1.js */"));
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
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-2090813256",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-2090813256" + " " + "contentCanvas",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 19
      }
    }, __jsx("ul", {
      id: "soloProList",
      className: "jsx-2090813256",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 23
      }
    }, __jsx("li", {
      id: "soloPro1",
      className: "jsx-2090813256",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 27
      }
    }), __jsx("li", {
      id: "soloPro1",
      className: "jsx-2090813256",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 27
      }
    }), __jsx("li", {
      id: "soloPro1",
      className: "jsx-2090813256",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 27
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2090813256",
      __self: this
    }, "#contentContainer.jsx-2090813256{position:absolute;height:100%;width:90%;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);right:15%;}@media (max-width:720px){#contentContainer.jsx-2090813256{height:73vh;min-height:575px;top:9%;}}.contentCanvas.jsx-2090813256{margin-top:0px;z-index:15;height:100%;width:100%;-webkit-transform:translate(0,7.5%);-ms-transform:translate(0,7.5%);transform:translate(0,7.5%);}@media (max-width:720px){.contentCanvas.jsx-2090813256{-webkit-transform:translate(0,5.5%);-ms-transform:translate(0,5.5%);transform:translate(0,5.5%);}}#soloProList.jsx-2090813256{margin:auto;list-style:none;font-size:1.6em;width:80%;height:90%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:0;position:absolute;display:table;vertical-align:middle;}@media (max-width:720px){#soloProList.jsx-2090813256{width:60%;min-width:300px;}}#soloPro1.jsx-2090813256{display:table-row;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycENvbnRlbnQyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCcUIsQUFHMkMsQUFhSixBQU9DLEFBU2dCLEFBS25CLEFBZ0JBLEFBTU0sVUFMQSxFQXJDQyxBQXFCSCxHQWRMLEdBcEJDLEFBd0RkLFFBbkNjLEFBOEJaLEVBaEJnQixDQXJCUCxDQWJDLE1BY1YsRUFPVyxFQXBCZ2tFLElBa0Nqa0UsS0FibUIsS0FjbEIsV0FDRixTQUNELFFBQ3dCLGNBWGhDLGlEQUxGLDBDQWlCWSxVQUNRLGtCQUNKLGNBQ1Esc0JBQ3hCLHczREExQ29DLGtDQUNoQixrQkFDVSxnR0FDbEIsVUFDWiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXENvcnBDb250ZW50Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDb3JwQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwic29sb1Byb0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJzb2xvUHJvMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic29sb1BybzFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInNvbG9Qcm8xXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFVVkJNVkVXRmhZV0RnNE4zZDNkdGJXMTdlM3QxZFhXQmdZR0hoNGQ1ZVhsemMzT0xpNHVibTV1VmxaV1BqNCtOalkxOWZYMkppWWwvZjM5cmEydVJrWkdabVpscGFXbVhsNWR2YjI5eGNYR1RrNU5uWjJjOFRWMW1BQUFBRzNSU1RsTkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQXZFT3d0QUFBRlZrbEVRVlI0WHBXV0I2N2MyQlVGYjNnNTU3VC9oUm85L1dVTVpIbGdyNEJnOFo0cVFnUUpsSEk0QThTekZWcmFwdm1URjlPN2RtWVJGWjYwWWlCaEpSQ2doMUZZaGlMQW1kdlgwQ3pUT3BORTc3TUUwWnR5L25XV3pjaER0aXFybVFEZXV2M3Bvd1E1dGEyZU4wRlkwSW5rcURENzNsVDljOWxFendVTnFnRkhzOVZRY2UzVFZDbEZDUXJTVGZPaVlrVkpRQm1wYnEyTDZpWmF2UG5BUGNvVTBkU3cwU1VUcXovR3RyR3VYZmJ5eUJuaUt5a09XUVdHcXd3TUE3UWlZQXhpK0lsUGRxbytoWUhuVXQ1WlBmbnNISnlOaUR0bnBKeWF5TkJrRjZjV29ZR0FNWTkyVTJoWEhGL0MxTTh1UC9adFlkaXVqMjZVZEFkUVFTWFFFcndTT016dC9YV1JXQXo1R3VTQklrd0cxSDNGYWJKMk9zVU9VaEdDNnRLNEVNdEpPMHR0QzZJQkQza00wdmUwdEp3TWRTZmpabytFRUlTYWVUcjlQM3dZckdqWHF5QzFrcmNLZGhNcHhFbnQ1SmV0b3Vsc2NweXpoWE41RlJwdVBIdmJlUWFLeEZBRUI2RU4rY1lONnhEN1JZR3BYcE5uZE1tWmdNNURjczNZU05GREhVbzJMR2ZadXVrU1d5VVlpckpBZFliRjNNZnFFS21qTStJMkVmaEE5NGlHM0w3dUtyUitHZFdENzN5ZGxJQis2aGdyZWYxUVRsbWdtYk0zL0xlWDVHSTFVeDFSV3BneHBMdVoyK0krSWp6Wjh3cUU0bmlsdlFka1VkZmh6STVRRFd5K2t3NVdnZzJwR3BlRVZlQ0NBN2I4NUJPM0Y5RHp4QjNjZHF2QnpXY216YnlNaXFoenVZcXRIUlZHMnk0eCtLT2xueXFsYThBb1dXcHVCb1lSeHpYcmZLdUlMbDZTZmlXQ2JqeG9aSlVhQ0JqMUNqSDdHSWFEYmM5a3FCWTNXL1JnamRhMWlxUWNPSnUyV1crNzZwWkM5UUc3TTAwZGZmZTloTm5zZXVwRkw1M3I4RjdZSFN3SldVS1AycStrN1Jkc3h5T0IxMW4weHRPdm5XNGlyTU1GTlY0SDB1cXdTNUV4c21QOUF4YkRUYzlKd2duZUFUNXZUaVVTbTFFN0JTZmxTdDNiZmExdHY4RGkzUjhuM0FmN01OV3pzNDlobWF1RTJ3UCt0dHJxK0FzV3BGRzJhd3ZzdU9xYmlwV0hndHV2dWFBRStBMVovN2dDOWhlc25yKzd3cUN3RzhjNXlBZzNBTDFmbThUOUFadHAvYmJKR3dsMXBOckU3UnVPWDdQZU1SVUVSVmFQcEVzK3lxZW9TbXVPbG9rcXc0OXBnb21qTGVoN2ljSE5sRzE5eWpzNlhYT01lZFltNXhIMll4cFYydGMwUm8yakpmeEM1MEFwdXhHb2I3bE1zeGZUYmVVdjA3VHlZeHBlTHVjRUgxZ05kNElLSDJMQWc1VGRWaGxDYWZadnBza2ZuY0NmeDhwT2hKemQ3NmJKV2VZRm5GY2l3Y1lmdWJSYzEySXAvcHBJaEExL21TWi9SeGpGRHJKQzV4aWZGakpwWTJYbDV6WGRndUZxWXlUUjF6U3AxWTlwK3RrdERZWVNOZmxjeEkwaXlPNFRQQmRsUmNwZXFqSy9waUY1YmtscTc3VlNFYUErejhxbUpURnpJV2lpdGJuelI3OTRVU0tCVWFUME5URXNWalpxTGFGVnFKb1BOOU9ERzcwSVBiZkJIS0srL3EvQVdSMHRKellIUlVMT2E0TVArVy9IZkdhZFpVYmZ3MTc3RzdqL09HYklzOFRhaEx5eW5sNFg0UmluRjc5M096K0JVMHNhWHRVSHJWQkZUL0RuQTNjdE5Qb0diczRoUklqVG9rOGkrYWxnVDFsVEhpNFN4RnZPTktOcmdRRkFxMi9nRm5XTVhnd2ZmZ1lNSnBpS1lrbVczdFRnM1pROUpxK2Y4WE4rQTVlZVVLSFd2SldKMnNnSjFTb3Ard3docUZWaWpxV2FKaHd0RDhNTmxTQmVXTk5XVGE1WjVrUFp3NStMYlZUOTl3cVRkeDI5bE1VSDRPSUcvRDg2cnVLRWF1Qmp2SDV4eTZ1bS9TZmo3ZWk2VVVWazRBSWwzTXlENE1TU1RPRmdTd3NIL1FKV2FRNWFzN1pjbWdCWmt6ampVMVVyUTc0Y2kxZ1dCQ1NHSHR1VjFIMm1oU25PM1dwLzNmRVY1YSs0d3ovLzZxeThKeGpac214eHk1KzR3OUNETkpZMDlUMDcyaUtHMEVuT1MwYXJFWWdYcVluWGNZSHdqVHRVTkFjTWVsT2Q0eHBrb3FpVFlJQ1dGcTBKU2lQZlBEUWRudCs0L3d1cWNYWTQ3UUlMYmdBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzN2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDklO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDcuNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNS41JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICNzb2xvUHJvTGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAjc29sb1Byb0xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgI3NvbG9Qcm8xIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3JwQ29udGVudDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\CorpContent2.js */"));
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
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-3839678119",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-3839678119" + " " + "contentCanvas",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 19
      }
    }, __jsx("ul", {
      id: "soloProList",
      className: "jsx-3839678119",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 23
      }
    }, __jsx("li", {
      id: "soloPro1",
      className: "jsx-3839678119",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 27
      }
    }), __jsx("li", {
      id: "soloPro1",
      className: "jsx-3839678119",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 27
      }
    }), __jsx("li", {
      id: "soloPro1",
      className: "jsx-3839678119",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 27
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3839678119",
      __self: this
    }, "#contentContainer.jsx-3839678119{position:absolute;height:100%;width:90%;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(-200%);-ms-transform:translateX(-200%);transform:translateX(-200%);right:25%;}@media (max-width:720px){#contentContainer.jsx-3839678119{height:73vh;min-height:575px;top:9%;}}.contentCanvas.jsx-3839678119{margin-top:0px;z-index:15;height:100%;width:100%;-webkit-transform:translate(0,7.5%);-ms-transform:translate(0,7.5%);transform:translate(0,7.5%);}@media (max-width:720px){.contentCanvas.jsx-3839678119{-webkit-transform:translate(0,5.5%);-ms-transform:translate(0,5.5%);transform:translate(0,5.5%);}}#soloProList.jsx-3839678119{margin:auto;list-style:none;font-size:1.6em;width:80%;height:90%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:0;position:absolute;display:table;vertical-align:middle;}@media (max-width:720px){#soloProList.jsx-3839678119{width:60%;min-width:300px;}}#soloPro1.jsx-3839678119{display:table-row;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycENvbnRlbnQzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCcUIsQUFHMkMsQUFhSixBQU9DLEFBU2dCLEFBS25CLEFBZ0JBLEFBTU0sVUFMQSxFQXJDQyxBQXFCSCxHQWRMLEdBcEJDLEFBd0RkLFFBbkNjLEFBOEJaLEVBaEJnQixDQXJCUCxDQWJDLE1BY1YsRUFPVyxFQXBCZ2tFLElBa0Nqa0UsS0FibUIsS0FjbEIsV0FDRixTQUNELFFBQ3dCLGNBWGhDLGlEQUxGLDBDQWlCWSxVQUNRLGtCQUNKLGNBQ1Esc0JBQ3hCLHczREExQ29DLGtDQUNoQixrQkFDVSxnR0FDbEIsVUFDWiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXENvcnBDb250ZW50My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDb3JwQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwic29sb1Byb0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJzb2xvUHJvMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic29sb1BybzFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInNvbG9Qcm8xXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFVVkJNVkVXRmhZV0RnNE4zZDNkdGJXMTdlM3QxZFhXQmdZR0hoNGQ1ZVhsemMzT0xpNHVibTV1VmxaV1BqNCtOalkxOWZYMkppWWwvZjM5cmEydVJrWkdabVpscGFXbVhsNWR2YjI5eGNYR1RrNU5uWjJjOFRWMW1BQUFBRzNSU1RsTkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQXZFT3d0QUFBRlZrbEVRVlI0WHBXV0I2N2MyQlVGYjNnNTU3VC9oUm85L1dVTVpIbGdyNEJnOFo0cVFnUUpsSEk0QThTekZWcmFwdm1URjlPN2RtWVJGWjYwWWlCaEpSQ2doMUZZaGlMQW1kdlgwQ3pUT3BORTc3TUUwWnR5L25XV3pjaER0aXFybVFEZXV2M3Bvd1E1dGEyZU4wRlkwSW5rcURENzNsVDljOWxFendVTnFnRkhzOVZRY2UzVFZDbEZDUXJTVGZPaVlrVkpRQm1wYnEyTDZpWmF2UG5BUGNvVTBkU3cwU1VUcXovR3RyR3VYZmJ5eUJuaUt5a09XUVdHcXd3TUE3UWlZQXhpK0lsUGRxbytoWUhuVXQ1WlBmbnNISnlOaUR0bnBKeWF5TkJrRjZjV29ZR0FNWTkyVTJoWEhGL0MxTTh1UC9adFlkaXVqMjZVZEFkUVFTWFFFcndTT016dC9YV1JXQXo1R3VTQklrd0cxSDNGYWJKMk9zVU9VaEdDNnRLNEVNdEpPMHR0QzZJQkQza00wdmUwdEp3TWRTZmpabytFRUlTYWVUcjlQM3dZckdqWHF5QzFrcmNLZGhNcHhFbnQ1SmV0b3Vsc2NweXpoWE41RlJwdVBIdmJlUWFLeEZBRUI2RU4rY1lONnhEN1JZR3BYcE5uZE1tWmdNNURjczNZU05GREhVbzJMR2ZadXVrU1d5VVlpckpBZFliRjNNZnFFS21qTStJMkVmaEE5NGlHM0w3dUtyUitHZFdENzN5ZGxJQis2aGdyZWYxUVRsbWdtYk0zL0xlWDVHSTFVeDFSV3BneHBMdVoyK0krSWp6Wjh3cUU0bmlsdlFka1VkZmh6STVRRFd5K2t3NVdnZzJwR3BlRVZlQ0NBN2I4NUJPM0Y5RHp4QjNjZHF2QnpXY216YnlNaXFoenVZcXRIUlZHMnk0eCtLT2xueXFsYThBb1dXcHVCb1lSeHpYcmZLdUlMbDZTZmlXQ2JqeG9aSlVhQ0JqMUNqSDdHSWFEYmM5a3FCWTNXL1JnamRhMWlxUWNPSnUyV1crNzZwWkM5UUc3TTAwZGZmZTloTm5zZXVwRkw1M3I4RjdZSFN3SldVS1AycStrN1Jkc3h5T0IxMW4weHRPdm5XNGlyTU1GTlY0SDB1cXdTNUV4c21QOUF4YkRUYzlKd2duZUFUNXZUaVVTbTFFN0JTZmxTdDNiZmExdHY4RGkzUjhuM0FmN01OV3pzNDlobWF1RTJ3UCt0dHJxK0FzV3BGRzJhd3ZzdU9xYmlwV0hndHV2dWFBRStBMVovN2dDOWhlc25yKzd3cUN3RzhjNXlBZzNBTDFmbThUOUFadHAvYmJKR3dsMXBOckU3UnVPWDdQZU1SVUVSVmFQcEVzK3lxZW9TbXVPbG9rcXc0OXBnb21qTGVoN2ljSE5sRzE5eWpzNlhYT01lZFltNXhIMll4cFYydGMwUm8yakpmeEM1MEFwdXhHb2I3bE1zeGZUYmVVdjA3VHlZeHBlTHVjRUgxZ05kNElLSDJMQWc1VGRWaGxDYWZadnBza2ZuY0NmeDhwT2hKemQ3NmJKV2VZRm5GY2l3Y1lmdWJSYzEySXAvcHBJaEExL21TWi9SeGpGRHJKQzV4aWZGakpwWTJYbDV6WGRndUZxWXlUUjF6U3AxWTlwK3RrdERZWVNOZmxjeEkwaXlPNFRQQmRsUmNwZXFqSy9waUY1YmtscTc3VlNFYUErejhxbUpURnpJV2lpdGJuelI3OTRVU0tCVWFUME5URXNWalpxTGFGVnFKb1BOOU9ERzcwSVBiZkJIS0srL3EvQVdSMHRKellIUlVMT2E0TVArVy9IZkdhZFpVYmZ3MTc3RzdqL09HYklzOFRhaEx5eW5sNFg0UmluRjc5M096K0JVMHNhWHRVSHJWQkZUL0RuQTNjdE5Qb0diczRoUklqVG9rOGkrYWxnVDFsVEhpNFN4RnZPTktOcmdRRkFxMi9nRm5XTVhnd2ZmZ1lNSnBpS1lrbVczdFRnM1pROUpxK2Y4WE4rQTVlZVVLSFd2SldKMnNnSjFTb3Ard3docUZWaWpxV2FKaHd0RDhNTmxTQmVXTk5XVGE1WjVrUFp3NStMYlZUOTl3cVRkeDI5bE1VSDRPSUcvRDg2cnVLRWF1Qmp2SDV4eTZ1bS9TZmo3ZWk2VVVWazRBSWwzTXlENE1TU1RPRmdTd3NIL1FKV2FRNWFzN1pjbWdCWmt6ampVMVVyUTc0Y2kxZ1dCQ1NHSHR1VjFIMm1oU25PM1dwLzNmRVY1YSs0d3ovLzZxeThKeGpac214eHk1KzR3OUNETkpZMDlUMDcyaUtHMEVuT1MwYXJFWWdYcVluWGNZSHdqVHRVTkFjTWVsT2Q0eHBrb3FpVFlJQ1dGcTBKU2lQZlBEUWRudCs0L3d1cWNYWTQ3UUlMYmdBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzN2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDklO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDcuNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNS41JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICNzb2xvUHJvTGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAjc29sb1Byb0xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgI3NvbG9Qcm8xIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29ycENvbnRlbnQ7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\CorpContent3.js */"));
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
      slideClass: "slide1"
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
        className: "jsx-2186887169" + " " + "slider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2186887169" + " " + (this.state.slideClass || ""),
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
        className: "jsx-2186887169",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 25
        }
      }, __jsx("i", {
        id: "left",
        className: "jsx-2186887169" + " " + "ChevronLeft",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 71
        }
      })), __jsx("button", {
        id: "goRight",
        onClick: this.slideLeft,
        className: "jsx-2186887169",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }
      }, __jsx("i", {
        id: "right",
        className: "jsx-2186887169" + " " + "ChevronRight",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 63
        }
      })), __jsx("a", {
        onClick: this.props.onClose,
        id: "closeLink",
        className: "jsx-2186887169",
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
        id: "2186887169",
        __self: this
      }, ".ChevronLeft.jsx-2186887169{position:absolute;height:75px;width:75px;z-index:10;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.ChevronRight.jsx-2186887169{position:absolute;height:75px;width:75px;z-index:10;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}#left.jsx-2186887169{right:27px;top:0px;}#right.jsx-2186887169{right:-30px;top:-5px;}.ChevronLeft.jsx-2186887169::before,.ChevronLeft.jsx-2186887169::after{position:absolute;display:block;content:\"\";border:35px solid transparent;}.ChevronLeft.jsx-2186887169::before{border-top-color:#b00;}.ChevronLeft.jsx-2186887169::after{top:-10px;border-top-color:#fff;}.ChevronRight.jsx-2186887169::before,.ChevronRight.jsx-2186887169::after{position:absolute;display:block;content:\"\";border:35px solid transparent;}.ChevronRight.jsx-2186887169::before{border-top-color:#b00;}.ChevronRight.jsx-2186887169::after{top:-10px;border-top-color:#fff;}#closeLink.jsx-2186887169{position:absolute;width:25px;height:25px;cursor:pointer;right:6%;top:2%;}button.jsx-2186887169{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:75px;height:75px;background:none;border:none;cursor:pointer;}button.jsx-2186887169:focus{outline:none;box-shadow:none;}#goLeft.jsx-2186887169{left:5.5%;}#goRight.jsx-2186887169{right:5.5%;}.slider.jsx-2186887169{position:relative;width:100%;height:100%;box-sizing:border-box;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;margin-top:130px;min-width:450px;}i.jsx-2186887169{font-size:2vw;}.slide1.jsx-2186887169{position:relative;width:100%;height:60vh;-webkit-transition:0.5s;transition:0.5s;margin:auto;}.slide2.jsx-2186887169{position:relative;width:100%;height:60vh;-webkit-transition:0.5s;transition:0.5s;margin:auto;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);}.slide3.jsx-2186887169{position:relative;width:100%;height:60vh;-webkit-transition:0.5s;transition:0.5s;margin:auto;-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU2xpZGVyQ29ycC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRXFCLEFBSStDLEFBUUEsQUFRUCxBQUtDLEFBTUssQUFRSSxBQUdaLEFBTVEsQUFRSSxBQUdaLEFBS1MsQUFTQSxBQVdMLEFBS0gsQUFJQyxBQUlPLEFBZUosQUFJSSxBQVFBLEFBU0EsVUExRkcsQUFpQkEsQUE4QnpCLENBckVZLEFBeUVaLENBcEVhLENBMkRPLENBNEJwQixJQTVHZ0IsQUFRQSxBQW1CQyxBQWlCQSxBQWdCRixBQVNILEFBd0JHLEFBbUJBLEFBUUEsQUFTQSxDQWhIZixFQUtBLENBYUEsQUFpQkEsSUFrQitCLEdBVGYsQUFvQmhCLEFBYWdCLEFBbUJBLEFBUUEsQUFTQSxDQWpJRCxBQVFBLEVBbUJELEFBV2QsQUFNYyxBQVdkLFNBdERlLEFBUUEsQUFvREksQUFpQ08sQUFtQk4sQUFRQSxBQVNBLEVBdEdhLEFBaUJBLFNBMUNsQyxBQVFBLElBbURjLE9BaUNBLEVBaENGLE9BQ1gsQUFnQ2MsQ0FuRWQsQUFpQkEsUUFvRWdCLEFBUUEsQUFTQSxDQWxDQyxXQWtCakIsQUFTRCxBQVNBLDBCQS9EZ0IsV0FDQyxNQXBFaEIsR0FRQSxHQTZEb0IsY0EwQkcsRUF6QlAsWUFDRyxlQUNuQixDQWlEQSxBQVNBLCtEQWxDb0IsZ0JBQ0MsaUJBQ0QsZ0JBRXBCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU2xpZGVyQ29ycC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb3JwQ29udGVudDEgZnJvbSAnLi9Db3JwQ29udGVudDEnO1xyXG5pbXBvcnQgQ29ycENvbnRlbnQyIGZyb20gJy4vQ29ycENvbnRlbnQyJztcclxuaW1wb3J0IENvcnBDb250ZW50MyBmcm9tICcuL0NvcnBDb250ZW50Myc7XHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICcuL0Nsb3NlQnV0dG9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIHNsaWRlMTogXCJzbGlkZTFcIixcclxuICAgICAgICAgICAgc2xpZGUyOiBcInNsaWRlMlwiLFxyXG4gICAgICAgICAgICBzbGlkZTM6IFwic2xpZGUzXCIsXHJcbiAgICAgICAgICAgIHNsaWRlQ2xhc3M6IFwic2xpZGUxXCIsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNsaWRlTGVmdCA9IHRoaXMuc2xpZGVMZWZ0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZVJpZ2h0ID0gdGhpcy5zbGlkZVJpZ2h0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBzbGlkZVJpZ2h0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMiB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTMgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUxIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNsaWRlTGVmdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMSkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUzIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMiB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTEgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93ID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2xpZGVDbGFzc30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29ycENvbnRlbnQxIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3JwQ29udGVudDIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcnBDb250ZW50MyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImdvTGVmdFwiIG9uQ2xpY2s9e3RoaXMuc2xpZGVSaWdodH0+PGkgY2xhc3NOYW1lPVwiQ2hldnJvbkxlZnRcIiBpZD1cImxlZnRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZ29SaWdodFwiIG9uQ2xpY2s9e3RoaXMuc2xpZGVMZWZ0fT48aSBjbGFzc05hbWU9XCJDaGV2cm9uUmlnaHRcIiBpZD1cInJpZ2h0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfSBpZD1cImNsb3NlTGlua1wiPjxDbG9zZUJ1dHRvbiBpZD1cImNsb3NlXCIgLz48L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MzVweCBzb2xpZCB0cmFuc3BhcmVudDsgLyphZGp1c3Qgc2l6ZSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypDaGFuZ2UgdGhlIGZvdXIgaW5zdGFuY2VzIG9mICd0b3AnIGJlbG93IHRvIHJvdGF0ZSAodG9wL3JpZ2h0L2JvdHRvbS9sZWZ0KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojYjAwOyAvKkNoZXZyb24gQ29sb3IqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOi0xMHB4OyAvKmFkanVzdCB0aGlja25lc3MqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojZmZmOyAvKk1hdGNoIGJhY2tncm91bmQgY29sb3VyKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MzVweCBzb2xpZCB0cmFuc3BhcmVudDsgLyphZGp1c3Qgc2l6ZSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypDaGFuZ2UgdGhlIGZvdXIgaW5zdGFuY2VzIG9mICd0b3AnIGJlbG93IHRvIHJvdGF0ZSAodG9wL3JpZ2h0L2JvdHRvbS9sZWZ0KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2IwMDsgLypDaGV2cm9uIENvbG9yKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6LTEwcHg7IC8qYWRqdXN0IHRoaWNrbmVzcyovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNmZmY7IC8qTWF0Y2ggYmFja2dyb3VuZCBjb2xvdXIqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2xvc2VMaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDYlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b246Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNnb0xlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNS41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2dvUmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTt9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SliderCorp.js */"));
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
      slideClass: "slide1"
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
        className: "jsx-2186887169" + " " + "slider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2186887169" + " " + (this.state.slideClass || ""),
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
        className: "jsx-2186887169",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 25
        }
      }, __jsx("i", {
        id: "left",
        className: "jsx-2186887169" + " " + "ChevronLeft",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 71
        }
      })), __jsx("button", {
        id: "goRight",
        onClick: this.slideLeft,
        className: "jsx-2186887169",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      }, __jsx("i", {
        id: "right",
        className: "jsx-2186887169" + " " + "ChevronRight",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 63
        }
      })), __jsx("a", {
        onClick: this.props.onClose,
        id: "closeLink",
        className: "jsx-2186887169",
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
        id: "2186887169",
        __self: this
      }, ".ChevronLeft.jsx-2186887169{position:absolute;height:75px;width:75px;z-index:10;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.ChevronRight.jsx-2186887169{position:absolute;height:75px;width:75px;z-index:10;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}#left.jsx-2186887169{right:27px;top:0px;}#right.jsx-2186887169{right:-30px;top:-5px;}.ChevronLeft.jsx-2186887169::before,.ChevronLeft.jsx-2186887169::after{position:absolute;display:block;content:\"\";border:35px solid transparent;}.ChevronLeft.jsx-2186887169::before{border-top-color:#b00;}.ChevronLeft.jsx-2186887169::after{top:-10px;border-top-color:#fff;}.ChevronRight.jsx-2186887169::before,.ChevronRight.jsx-2186887169::after{position:absolute;display:block;content:\"\";border:35px solid transparent;}.ChevronRight.jsx-2186887169::before{border-top-color:#b00;}.ChevronRight.jsx-2186887169::after{top:-10px;border-top-color:#fff;}#closeLink.jsx-2186887169{position:absolute;width:25px;height:25px;cursor:pointer;right:6%;top:2%;}button.jsx-2186887169{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:75px;height:75px;background:none;border:none;cursor:pointer;}button.jsx-2186887169:focus{outline:none;box-shadow:none;}#goLeft.jsx-2186887169{left:5.5%;}#goRight.jsx-2186887169{right:5.5%;}.slider.jsx-2186887169{position:relative;width:100%;height:100%;box-sizing:border-box;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;margin-top:130px;min-width:450px;}i.jsx-2186887169{font-size:2vw;}.slide1.jsx-2186887169{position:relative;width:100%;height:60vh;-webkit-transition:0.5s;transition:0.5s;margin:auto;}.slide2.jsx-2186887169{position:relative;width:100%;height:60vh;-webkit-transition:0.5s;transition:0.5s;margin:auto;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);}.slide3.jsx-2186887169{position:relative;width:100%;height:60vh;-webkit-transition:0.5s;transition:0.5s;margin:auto;-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU2xpZGVyU21hbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VxQixBQUkrQyxBQVFBLEFBUVAsQUFLQyxBQU1LLEFBUUksQUFHWixBQU1RLEFBUUksQUFHWixBQUtTLEFBU0EsQUFXTCxBQUtILEFBSUMsQUFJTyxBQWVKLEFBSUksQUFRQSxBQVNBLFVBMUZHLEFBaUJBLEFBOEJ6QixDQXJFWSxBQXlFWixDQXBFYSxDQTJETyxDQTRCcEIsSUE1R2dCLEFBUUEsQUFtQkMsQUFpQkEsQUFnQkYsQUFTSCxBQXdCRyxBQW1CQSxBQVFBLEFBU0EsQ0FoSGYsRUFLQSxDQWFBLEFBaUJBLElBa0IrQixHQVRmLEFBb0JoQixBQWFnQixBQW1CQSxBQVFBLEFBU0EsQ0FqSUQsQUFRQSxFQW1CRCxBQVdkLEFBTWMsQUFXZCxTQXREZSxBQVFBLEFBb0RJLEFBaUNPLEFBbUJOLEFBUUEsQUFTQSxFQXRHYSxBQWlCQSxTQTFDbEMsQUFRQSxJQW1EYyxPQWlDQSxFQWhDRixPQUNYLEFBZ0NjLENBbkVkLEFBaUJBLFFBb0VnQixBQVFBLEFBU0EsQ0FsQ0MsV0FrQmpCLEFBU0QsQUFTQSwwQkEvRGdCLFdBQ0MsTUFwRWhCLEdBUUEsR0E2RG9CLGNBMEJHLEVBekJQLFlBQ0csZUFDbkIsQ0FpREEsQUFTQSwrREFsQ29CLGdCQUNDLGlCQUNELGdCQUVwQiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXFNsaWRlclNtYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNtYWxsQ29udGVudDEgZnJvbSAnLi9TbWFsbENvbnRlbnQxJztcclxuaW1wb3J0IFNtYWxsQ29udGVudDIgZnJvbSAnLi9TbWFsbENvbnRlbnQyJztcclxuaW1wb3J0IFNtYWxsQ29udGVudDMgZnJvbSAnLi9TbWFsbENvbnRlbnQzJztcclxuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJy4vQ2xvc2VCdXR0b24nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIHNsaWRlMTogXCJzbGlkZTFcIixcclxuICAgICAgICAgICAgc2xpZGUyOiBcInNsaWRlMlwiLFxyXG4gICAgICAgICAgICBzbGlkZTM6IFwic2xpZGUzXCIsXHJcbiAgICAgICAgICAgIHNsaWRlQ2xhc3M6IFwic2xpZGUxXCIsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNsaWRlTGVmdCA9IHRoaXMuc2xpZGVMZWZ0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZVJpZ2h0ID0gdGhpcy5zbGlkZVJpZ2h0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBzbGlkZVJpZ2h0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMiB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTMgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUxIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNsaWRlTGVmdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMSkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUzIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMiB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTEgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93ID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2xpZGVDbGFzc30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8U21hbGxDb250ZW50MSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8U21hbGxDb250ZW50MiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8U21hbGxDb250ZW50MyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImdvTGVmdFwiIG9uQ2xpY2s9e3RoaXMuc2xpZGVSaWdodH0+PGkgY2xhc3NOYW1lPVwiQ2hldnJvbkxlZnRcIiBpZD1cImxlZnRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZ29SaWdodFwiIG9uQ2xpY2s9e3RoaXMuc2xpZGVMZWZ0fT48aSBjbGFzc05hbWU9XCJDaGV2cm9uUmlnaHRcIiBpZD1cInJpZ2h0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfSBpZD1cImNsb3NlTGlua1wiPjxDbG9zZUJ1dHRvbiBpZD1cImNsb3NlXCIgLz48L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MzVweCBzb2xpZCB0cmFuc3BhcmVudDsgLyphZGp1c3Qgc2l6ZSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypDaGFuZ2UgdGhlIGZvdXIgaW5zdGFuY2VzIG9mICd0b3AnIGJlbG93IHRvIHJvdGF0ZSAodG9wL3JpZ2h0L2JvdHRvbS9sZWZ0KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojYjAwOyAvKkNoZXZyb24gQ29sb3IqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOi0xMHB4OyAvKmFkanVzdCB0aGlja25lc3MqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojZmZmOyAvKk1hdGNoIGJhY2tncm91bmQgY29sb3VyKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MzVweCBzb2xpZCB0cmFuc3BhcmVudDsgLyphZGp1c3Qgc2l6ZSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypDaGFuZ2UgdGhlIGZvdXIgaW5zdGFuY2VzIG9mICd0b3AnIGJlbG93IHRvIHJvdGF0ZSAodG9wL3JpZ2h0L2JvdHRvbS9sZWZ0KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2IwMDsgLypDaGV2cm9uIENvbG9yKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6LTEwcHg7IC8qYWRqdXN0IHRoaWNrbmVzcyovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNmZmY7IC8qTWF0Y2ggYmFja2dyb3VuZCBjb2xvdXIqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2xvc2VMaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDYlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b246Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNnb0xlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNS41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2dvUmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTt9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SliderSmall.js */"));
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
      slideClass: "slide1"
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
        className: "jsx-3738346726" + " " + "slider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-3738346726" + " " + (this.state.slideClass || ""),
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
        className: "jsx-3738346726",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }
      }, __jsx("i", {
        id: "left",
        className: "jsx-3738346726" + " " + "ChevronLeft",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 63
        }
      })), __jsx("button", {
        id: "goRight",
        onClick: this.slideLeft,
        className: "jsx-3738346726",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      }, __jsx("i", {
        id: "right",
        className: "jsx-3738346726" + " " + "ChevronRight",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 63
        }
      })), __jsx("a", {
        onClick: this.props.onClose,
        id: "closeLink",
        className: "jsx-3738346726",
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
        id: "3738346726",
        __self: this
      }, ".ChevronLeft.jsx-3738346726{position:absolute;height:75px;width:75px;z-index:10;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.ChevronRight.jsx-3738346726{position:absolute;height:75px;width:75px;z-index:10;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}#left.jsx-3738346726{right:27px;top:0px;}#right.jsx-3738346726{right:-30px;top:-5px;}.ChevronLeft.jsx-3738346726::before,.ChevronLeft.jsx-3738346726::after{position:absolute;display:block;content:\"\";border:35px solid transparent;}.ChevronLeft.jsx-3738346726::before{border-top-color:#b00;}.ChevronLeft.jsx-3738346726::after{top:-10px;border-top-color:#fff;}.ChevronRight.jsx-3738346726::before,.ChevronRight.jsx-3738346726::after{position:absolute;display:block;content:\"\";border:35px solid transparent;}.ChevronRight.jsx-3738346726::before{border-top-color:#b00;}.ChevronRight.jsx-3738346726::after{top:-10px;border-top-color:#fff;}#closeLink.jsx-3738346726{position:absolute;width:25px;height:25px;cursor:pointer;right:6%;top:2%;}button.jsx-3738346726{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:75px;height:75px;background:none;border:none;cursor:pointer;}button.jsx-3738346726:focus{outline:none;box-shadow:none;}#goLeft.jsx-3738346726{left:5.5%;}#goRight.jsx-3738346726{right:5.5%;}.slider.jsx-3738346726{position:relative;width:100%;height:100%;box-sizing:border-box;margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;margin-top:130px;min-width:450px;}i.jsx-3738346726{font-size:2vw;}.slide1.jsx-3738346726{position:relative;width:100%;height:60vh;-webkit-transition:0.5s;transition:0.5s;margin:auto;}.slide2.jsx-3738346726{position:relative;width:100%;height:60vh;-webkit-transition:0.5s;transition:0.5s;margin:auto;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);}.slide3.jsx-3738346726{position:relative;width:100%;height:60vh;-webkit-transition:0.5s;transition:0.5s;margin:auto;-webkit-transform:translateX(200%);-ms-transform:translateX(200%);transform:translateX(200%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU2xpZGVyU29sby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRXFCLEFBSStDLEFBUUEsQUFRUCxBQUtDLEFBTUssQUFRSSxBQUdaLEFBTVEsQUFRSSxBQUdaLEFBS1MsQUFTQSxBQVdMLEFBS0gsQUFJQyxBQUlPLEFBZUosQUFJSSxBQVFBLEFBU0EsVUExRkcsQUFpQkEsQUE4QnpCLENBckVZLEFBeUVaLENBcEVhLENBMkRPLENBNEJwQixJQTVHZ0IsQUFRQSxBQW1CQyxBQWlCQSxBQWdCRixBQVNILEFBd0JHLEFBbUJBLEFBUUEsQUFTQSxDQWhIZixFQUtBLENBYUEsQUFpQkEsSUFrQitCLEdBVGYsQUFvQmhCLEFBYWdCLEFBbUJBLEFBUUEsQUFTQSxDQWpJRCxBQVFBLEVBbUJELEFBV2QsQUFNYyxBQVdkLFNBdERlLEFBUUEsQUFvREksQUFpQ08sQUFtQk4sQUFRQSxBQVNBLEVBdEdhLEFBaUJBLFNBMUNsQyxBQVFBLElBbURjLE9BaUNBLEVBaENGLE9BQ1gsQUFnQ2MsQ0FuRWQsQUFpQkEsUUFvRWdCLEFBUUEsQUFTQSxDQWxDQyxXQWtCakIsQUFTRCxBQVNBLDBCQS9EZ0IsV0FDQyxNQXBFaEIsR0FRQSxHQTZEb0IsY0EwQkcsRUF6QlAsWUFDRyxlQUNuQixDQWlEQSxBQVNBLCtEQWxDb0IsZ0JBQ0MsaUJBQ0QsZ0JBRXBCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU2xpZGVyU29sby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTb2xvQ29udGVudDEgZnJvbSAnLi9Tb2xvQ29udGVudDEnO1xyXG5pbXBvcnQgU29sb0NvbnRlbnQyIGZyb20gJy4vU29sb0NvbnRlbnQyJztcclxuaW1wb3J0IFNvbG9Db250ZW50MyBmcm9tICcuL1NvbG9Db250ZW50Myc7XHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICcuL0Nsb3NlQnV0dG9uJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJTb2xvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgc2xpZGUxOiBcInNsaWRlMVwiLFxyXG4gICAgICAgICAgICBzbGlkZTI6IFwic2xpZGUyXCIsXHJcbiAgICAgICAgICAgIHNsaWRlMzogXCJzbGlkZTNcIixcclxuICAgICAgICAgICAgc2xpZGVDbGFzczogXCJzbGlkZTFcIixcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVMZWZ0ID0gdGhpcy5zbGlkZUxlZnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNsaWRlUmlnaHQgPSB0aGlzLnNsaWRlUmlnaHQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHNsaWRlUmlnaHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUyIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMyB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTEgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVMZWZ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUxKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTMgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUyIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zbGlkZUNsYXNzfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTb2xvQ29udGVudDEgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNvbG9Db250ZW50MiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8U29sb0NvbnRlbnQzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImdvTGVmdFwiIG9uQ2xpY2s9e3RoaXMuc2xpZGVSaWdodH0+PGkgY2xhc3NOYW1lPVwiQ2hldnJvbkxlZnRcIiBpZD1cImxlZnRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZ29SaWdodFwiIG9uQ2xpY2s9e3RoaXMuc2xpZGVMZWZ0fT48aSBjbGFzc05hbWU9XCJDaGV2cm9uUmlnaHRcIiBpZD1cInJpZ2h0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfSBpZD1cImNsb3NlTGlua1wiPjxDbG9zZUJ1dHRvbiBpZD1cImNsb3NlXCIgLz48L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MzVweCBzb2xpZCB0cmFuc3BhcmVudDsgLyphZGp1c3Qgc2l6ZSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypDaGFuZ2UgdGhlIGZvdXIgaW5zdGFuY2VzIG9mICd0b3AnIGJlbG93IHRvIHJvdGF0ZSAodG9wL3JpZ2h0L2JvdHRvbS9sZWZ0KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojYjAwOyAvKkNoZXZyb24gQ29sb3IqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOi0xMHB4OyAvKmFkanVzdCB0aGlja25lc3MqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojZmZmOyAvKk1hdGNoIGJhY2tncm91bmQgY29sb3VyKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MzVweCBzb2xpZCB0cmFuc3BhcmVudDsgLyphZGp1c3Qgc2l6ZSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypDaGFuZ2UgdGhlIGZvdXIgaW5zdGFuY2VzIG9mICd0b3AnIGJlbG93IHRvIHJvdGF0ZSAodG9wL3JpZ2h0L2JvdHRvbS9sZWZ0KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2IwMDsgLypDaGV2cm9uIENvbG9yKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6LTEwcHg7IC8qYWRqdXN0IHRoaWNrbmVzcyovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNmZmY7IC8qTWF0Y2ggYmFja2dyb3VuZCBjb2xvdXIqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2xvc2VMaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDYlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b246Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNnb0xlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNS41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2dvUmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTt9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SliderSolo.js */"));
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
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-1374480556",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-1374480556" + " " + "contentCanvas",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 19
      }
    }, __jsx("ul", {
      id: "soloProList",
      className: "jsx-1374480556",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 23
      }
    }, __jsx("li", {
      id: "soloPro1",
      className: "jsx-1374480556",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 27
      }
    }), __jsx("li", {
      id: "soloPro1",
      className: "jsx-1374480556",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 27
      }
    }), __jsx("li", {
      id: "soloPro1",
      className: "jsx-1374480556",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 27
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1374480556",
      __self: this
    }, "#contentContainer.jsx-1374480556{position:absolute;height:100%;width:90%;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;left:5%;}@media (max-width:720px){#contentContainer.jsx-1374480556{height:73vh;min-height:575px;top:9%;}}.contentCanvas.jsx-1374480556{margin-top:0px;z-index:15;height:100%;width:100%;-webkit-transform:translate(0,7.5%);-ms-transform:translate(0,7.5%);transform:translate(0,7.5%);}@media (max-width:720px){.contentCanvas.jsx-1374480556{-webkit-transform:translate(0,5.5%);-ms-transform:translate(0,5.5%);transform:translate(0,5.5%);}}#soloProList.jsx-1374480556{margin:auto;list-style:none;font-size:1.6em;width:80%;height:90%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:0;position:absolute;display:table;vertical-align:middle;}@media (max-width:720px){#soloProList.jsx-1374480556{width:60%;min-width:300px;}}#soloPro1.jsx-1374480556{display:table-row;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxDb250ZW50MS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQnFCLEFBRzJDLEFBWUosQUFPQyxBQVNnQixBQUtuQixBQWdCQSxBQU1NLFVBTEEsRUFyQ0MsQUFxQkgsR0FkTCxHQW5CQyxBQXVEZCxRQW5DYyxBQThCWixFQWhCZ0IsQ0FyQlAsQ0FaQyxNQWFWLEVBT1csRUFuQmdrRSxJQWlDamtFLEtBYm1CLEtBY2xCLFdBQ0YsU0FDRCxRQUN3QixjQVhoQyxpREFMRiwwQ0FpQlksVUFDUSxrQkFDSixjQUNRLHNCQUN4Qix3M0RBekNvQyxrQ0FDaEIsa0JBQ1YsUUFDViIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXFNtYWxsQ29udGVudDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgU21hbGxDb250ZW50MSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwic29sb1Byb0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJzb2xvUHJvMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic29sb1BybzFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInNvbG9Qcm8xXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFVVkJNVkVXRmhZV0RnNE4zZDNkdGJXMTdlM3QxZFhXQmdZR0hoNGQ1ZVhsemMzT0xpNHVibTV1VmxaV1BqNCtOalkxOWZYMkppWWwvZjM5cmEydVJrWkdabVpscGFXbVhsNWR2YjI5eGNYR1RrNU5uWjJjOFRWMW1BQUFBRzNSU1RsTkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQXZFT3d0QUFBRlZrbEVRVlI0WHBXV0I2N2MyQlVGYjNnNTU3VC9oUm85L1dVTVpIbGdyNEJnOFo0cVFnUUpsSEk0QThTekZWcmFwdm1URjlPN2RtWVJGWjYwWWlCaEpSQ2doMUZZaGlMQW1kdlgwQ3pUT3BORTc3TUUwWnR5L25XV3pjaER0aXFybVFEZXV2M3Bvd1E1dGEyZU4wRlkwSW5rcURENzNsVDljOWxFendVTnFnRkhzOVZRY2UzVFZDbEZDUXJTVGZPaVlrVkpRQm1wYnEyTDZpWmF2UG5BUGNvVTBkU3cwU1VUcXovR3RyR3VYZmJ5eUJuaUt5a09XUVdHcXd3TUE3UWlZQXhpK0lsUGRxbytoWUhuVXQ1WlBmbnNISnlOaUR0bnBKeWF5TkJrRjZjV29ZR0FNWTkyVTJoWEhGL0MxTTh1UC9adFlkaXVqMjZVZEFkUVFTWFFFcndTT016dC9YV1JXQXo1R3VTQklrd0cxSDNGYWJKMk9zVU9VaEdDNnRLNEVNdEpPMHR0QzZJQkQza00wdmUwdEp3TWRTZmpabytFRUlTYWVUcjlQM3dZckdqWHF5QzFrcmNLZGhNcHhFbnQ1SmV0b3Vsc2NweXpoWE41RlJwdVBIdmJlUWFLeEZBRUI2RU4rY1lONnhEN1JZR3BYcE5uZE1tWmdNNURjczNZU05GREhVbzJMR2ZadXVrU1d5VVlpckpBZFliRjNNZnFFS21qTStJMkVmaEE5NGlHM0w3dUtyUitHZFdENzN5ZGxJQis2aGdyZWYxUVRsbWdtYk0zL0xlWDVHSTFVeDFSV3BneHBMdVoyK0krSWp6Wjh3cUU0bmlsdlFka1VkZmh6STVRRFd5K2t3NVdnZzJwR3BlRVZlQ0NBN2I4NUJPM0Y5RHp4QjNjZHF2QnpXY216YnlNaXFoenVZcXRIUlZHMnk0eCtLT2xueXFsYThBb1dXcHVCb1lSeHpYcmZLdUlMbDZTZmlXQ2JqeG9aSlVhQ0JqMUNqSDdHSWFEYmM5a3FCWTNXL1JnamRhMWlxUWNPSnUyV1crNzZwWkM5UUc3TTAwZGZmZTloTm5zZXVwRkw1M3I4RjdZSFN3SldVS1AycStrN1Jkc3h5T0IxMW4weHRPdm5XNGlyTU1GTlY0SDB1cXdTNUV4c21QOUF4YkRUYzlKd2duZUFUNXZUaVVTbTFFN0JTZmxTdDNiZmExdHY4RGkzUjhuM0FmN01OV3pzNDlobWF1RTJ3UCt0dHJxK0FzV3BGRzJhd3ZzdU9xYmlwV0hndHV2dWFBRStBMVovN2dDOWhlc25yKzd3cUN3RzhjNXlBZzNBTDFmbThUOUFadHAvYmJKR3dsMXBOckU3UnVPWDdQZU1SVUVSVmFQcEVzK3lxZW9TbXVPbG9rcXc0OXBnb21qTGVoN2ljSE5sRzE5eWpzNlhYT01lZFltNXhIMll4cFYydGMwUm8yakpmeEM1MEFwdXhHb2I3bE1zeGZUYmVVdjA3VHlZeHBlTHVjRUgxZ05kNElLSDJMQWc1VGRWaGxDYWZadnBza2ZuY0NmeDhwT2hKemQ3NmJKV2VZRm5GY2l3Y1lmdWJSYzEySXAvcHBJaEExL21TWi9SeGpGRHJKQzV4aWZGakpwWTJYbDV6WGRndUZxWXlUUjF6U3AxWTlwK3RrdERZWVNOZmxjeEkwaXlPNFRQQmRsUmNwZXFqSy9waUY1YmtscTc3VlNFYUErejhxbUpURnpJV2lpdGJuelI3OTRVU0tCVWFUME5URXNWalpxTGFGVnFKb1BOOU9ERzcwSVBiZkJIS0srL3EvQVdSMHRKellIUlVMT2E0TVArVy9IZkdhZFpVYmZ3MTc3RzdqL09HYklzOFRhaEx5eW5sNFg0UmluRjc5M096K0JVMHNhWHRVSHJWQkZUL0RuQTNjdE5Qb0diczRoUklqVG9rOGkrYWxnVDFsVEhpNFN4RnZPTktOcmdRRkFxMi9nRm5XTVhnd2ZmZ1lNSnBpS1lrbVczdFRnM1pROUpxK2Y4WE4rQTVlZVVLSFd2SldKMnNnSjFTb3Ard3docUZWaWpxV2FKaHd0RDhNTmxTQmVXTk5XVGE1WjVrUFp3NStMYlZUOTl3cVRkeDI5bE1VSDRPSUcvRDg2cnVLRWF1Qmp2SDV4eTZ1bS9TZmo3ZWk2VVVWazRBSWwzTXlENE1TU1RPRmdTd3NIL1FKV2FRNWFzN1pjbWdCWmt6ampVMVVyUTc0Y2kxZ1dCQ1NHSHR1VjFIMm1oU25PM1dwLzNmRVY1YSs0d3ovLzZxeThKeGpac214eHk1KzR3OUNETkpZMDlUMDcyaUtHMEVuT1MwYXJFWWdYcVluWGNZSHdqVHRVTkFjTWVsT2Q0eHBrb3FpVFlJQ1dGcTBKU2lQZlBEUWRudCs0L3d1cWNYWTQ3UUlMYmdBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDczdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA5JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA3LjUlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUuNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAjc29sb1Byb0xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NvbG9Qcm9MaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICNzb2xvUHJvMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbik7XHJcbn1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNtYWxsQ29udGVudDE7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SmallContent1.js */"));
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
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-2090813256",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-2090813256" + " " + "contentCanvas",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 19
      }
    }, __jsx("ul", {
      id: "soloProList",
      className: "jsx-2090813256",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 23
      }
    }, __jsx("li", {
      id: "soloPro1",
      className: "jsx-2090813256",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 27
      }
    }), __jsx("li", {
      id: "soloPro1",
      className: "jsx-2090813256",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 27
      }
    }), __jsx("li", {
      id: "soloPro1",
      className: "jsx-2090813256",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 27
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2090813256",
      __self: this
    }, "#contentContainer.jsx-2090813256{position:absolute;height:100%;width:90%;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);right:15%;}@media (max-width:720px){#contentContainer.jsx-2090813256{height:73vh;min-height:575px;top:9%;}}.contentCanvas.jsx-2090813256{margin-top:0px;z-index:15;height:100%;width:100%;-webkit-transform:translate(0,7.5%);-ms-transform:translate(0,7.5%);transform:translate(0,7.5%);}@media (max-width:720px){.contentCanvas.jsx-2090813256{-webkit-transform:translate(0,5.5%);-ms-transform:translate(0,5.5%);transform:translate(0,5.5%);}}#soloProList.jsx-2090813256{margin:auto;list-style:none;font-size:1.6em;width:80%;height:90%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:0;position:absolute;display:table;vertical-align:middle;}@media (max-width:720px){#soloProList.jsx-2090813256{width:60%;min-width:300px;}}#soloPro1.jsx-2090813256{display:table-row;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxDb250ZW50Mi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQnFCLEFBRzJDLEFBYUosQUFPQyxBQVNnQixBQUtuQixBQWdCQSxBQU1NLFVBTEEsRUFyQ0MsQUFxQkgsR0FkTCxHQXBCQyxBQXdEZCxRQW5DYyxBQThCWixFQWhCZ0IsQ0FyQlAsQ0FiQyxNQWNWLEVBT1csRUFwQmdrRSxJQWtDamtFLEtBYm1CLEtBY2xCLFdBQ0YsU0FDRCxRQUN3QixjQVhoQyxpREFMRiwwQ0FpQlksVUFDUSxrQkFDSixjQUNRLHNCQUN4Qix3M0RBMUNvQyxrQ0FDaEIsa0JBQ1UsZ0dBQ2xCLFVBQ1oiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxTbWFsbENvbnRlbnQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFNtYWxsQ29udGVudDIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJzb2xvUHJvTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInNvbG9Qcm8xXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJzb2xvUHJvMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic29sb1BybzFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FNQUFBQXA0WGlEQUFBQVVWQk1WRVdGaFlXRGc0TjNkM2R0YlcxN2UzdDFkWFdCZ1lHSGg0ZDVlWGx6YzNPTGk0dWJtNXVWbFpXUGo0K05qWTE5ZlgySmlZbC9mMzlyYTJ1UmtaR1ptWmxwYVdtWGw1ZHZiMjl4Y1hHVGs1Tm5aMmM4VFYxbUFBQUFHM1JTVGxOQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVBdkVPd3RBQUFGVmtsRVFWUjRYcFdXQjY3YzJCVUZiM2c1NTdUL2hSbzkvV1VNWkhsZ3I0Qmc4WjRxUWdRSmxISTRBOFN6RlZyYXB2bVRGOU83ZG1ZUkZaNjBZaUJoSlJDZ2gxRlloaUxBbWR2WDBDelRPcE5FNzdNRTBadHkvbldXemNoRHRpcXJtUURldXYzcG93UTV0YTJlTjBGWTBJbmtxREQ3M2xUOWM5bEV6d1VOcWdGSHM5VlFjZTNUVkNsRkNRclNUZk9pWWtWSlFCbXBicTJMNmlaYXZQbkFQY29VMGRTdzBTVVRxei9HdHJHdVhmYnl5Qm5pS3lrT1dRV0dxd3dNQTdRaVlBeGkrSWxQZHFvK2hZSG5VdDVaUGZuc0hKeU5pRHRucEp5YXlOQmtGNmNXb1lHQU1ZOTJVMmhYSEYvQzFNOHVQL1p0WWRpdWoyNlVkQWRRUVNYUUVyd1NPTXp0L1hXUldBejVHdVNCSWt3RzFIM0ZhYkoyT3NVT1VoR0M2dEs0RU10Sk8wdHRDNklCRDNrTTB2ZTB0SndNZFNmalpvK0VFSVNhZVRyOVAzd1lyR2pYcXlDMWtyY0tkaE1weEVudDVKZXRvdWxzY3B5emhYTjVGUnB1UEh2YmVRYUt4RkFFQjZFTitjWU42eEQ3UllHcFhwTm5kTW1aZ001RGNzM1lTTkZESFVvMkxHZlp1dWtTV3lVWWlySkFkWWJGM01mcUVLbWpNK0kyRWZoQTk0aUczTDd1S3JSK0dkV0Q3M3lkbElCKzZoZ3JlZjFRVGxtZ21iTTMvTGVYNUdJMVV4MVJXcGd4cEx1WjIrSStJanpaOHdxRTRuaWx2UWRrVWRmaHpJNVFEV3kra3c1V2dnMnBHcGVFVmVDQ0E3Yjg1Qk8zRjlEenhCM2NkcXZCeldjbXpieU1pcWh6dVlxdEhSVkcyeTR4K0tPbG55cWxhOEFvV1dwdUJvWVJ4elhyZkt1SUxsNlNmaVdDYmp4b1pKVWFDQmoxQ2pIN0dJYURiYzlrcUJZM1cvUmdqZGExaXFRY09KdTJXVys3NnBaQzlRRzdNMDBkZmZlOWhObnNldXBGTDUzcjhGN1lIU3dKV1VLUDJxK2s3UmRzeHlPQjExbjB4dE92blc0aXJNTUZOVjRIMHVxd1M1RXhzbVA5QXhiRFRjOUp3Z25lQVQ1dlRpVVNtMUU3QlNmbFN0M2JmYTF0djhEaTNSOG4zQWY3TU5XenM0OWhtYXVFMndQK3R0cnErQXNXcEZHMmF3dnN1T3FiaXBXSGd0dXZ1YUFFK0ExWi83Z0M5aGVzbnIrN3dxQ3dHOGM1eUFnM0FMMWZtOFQ5QVp0cC9iYkpHd2wxcE5yRTdSdU9YN1BlTVJVRVJWYVBwRXMreXFlb1NtdU9sb2txdzQ5cGdvbWpMZWg3aWNITmxHMTl5anM2WFhPTWVkWW01eEgyWXhwVjJ0YzBSbzJqSmZ4QzUwQXB1eEdvYjdsTXN4ZlRiZVV2MDdUeVl4cGVMdWNFSDFnTmQ0SUtIMkxBZzVUZFZobENhZlp2cHNrZm5jQ2Z4OHBPaEp6ZDc2YkpXZVlGbkZjaXdjWWZ1YlJjMTJJcC9wcEloQTEvbVNaL1J4akZEckpDNXhpZkZqSnBZMlhsNXpYZGd1RnFZeVRSMXpTcDFZOXArdGt0RFlZU05mbGN4STBpeU80VFBCZGxSY3BlcWpLL3BpRjVia2xxNzdWU0VhQSt6OHFtSlRGeklXaWl0Ym56Ujc5NFVTS0JVYVQwTlRFc1ZqWnFMYUZWcUpvUE45T0RHNzBJUGJmQkhLSysvcS9BV1IwdEp6WUhSVUxPYTRNUCtXL0hmR2FkWlViZncxNzdHN2ovT0diSXM4VGFoTHl5bmw0WDRSaW5GNzkzT3orQlUwc2FYdFVIclZCRlQvRG5BM2N0TlBvR2JzNGhSSWpUb2s4aSthbGdUMWxUSGk0U3hGdk9OS05yZ1FGQXEyL2dGbldNWGd3ZmZnWU1KcGlLWWttVzN0VGczWlE5SnErZjhYTitBNWVlVUtIV3ZKV0oyc2dKMVNvcCt3d2hxRlZpanFXYUpod3REOE1ObFNCZVdOTldUYTVaNWtQWnc1K0xiVlQ5OXdxVGR4MjlsTVVINE9JRy9EODZydUtFYXVCanZINXh5NnVtL1NmajdlaTZVVVZrNEFJbDNNeUQ0TVNTVE9GZ1N3c0gvUUpXYVE1YXM3WmNtZ0Jaa3pqalUxVXJRNzRjaTFnV0JDU0dIdHVWMUgybWhTbk8zV3AvM2ZFVjVhKzR3ei8vNnF5OEp4alpzbXh4eTUrNHc5Q0ROSlkwOVQwNzJpS0cwRW5PUzBhckVZZ1hxWW5YY1lId2pUdFVOQWNNZWxPZDR4cGtvcWlUWUlDV0ZxMEpTaVBmUERRZG50KzQvd3VxY1hZNDdRSUxiZ0FBQUFCSlJVNUVya0pnZ2c9PScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3M3ZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogOSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNy41JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1LjUlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgI3NvbG9Qcm9MaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNzb2xvUHJvTGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAjc29sb1BybzEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbWFsbENvbnRlbnQyOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SmallContent2.js */"));
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
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-3839678119",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-3839678119" + " " + "contentCanvas",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 19
      }
    }, __jsx("ul", {
      id: "soloProList",
      className: "jsx-3839678119",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 23
      }
    }, __jsx("li", {
      id: "soloPro1",
      className: "jsx-3839678119",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 27
      }
    }), __jsx("li", {
      id: "soloPro1",
      className: "jsx-3839678119",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 27
      }
    }), __jsx("li", {
      id: "soloPro1",
      className: "jsx-3839678119",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 27
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3839678119",
      __self: this
    }, "#contentContainer.jsx-3839678119{position:absolute;height:100%;width:90%;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(-200%);-ms-transform:translateX(-200%);transform:translateX(-200%);right:25%;}@media (max-width:720px){#contentContainer.jsx-3839678119{height:73vh;min-height:575px;top:9%;}}.contentCanvas.jsx-3839678119{margin-top:0px;z-index:15;height:100%;width:100%;-webkit-transform:translate(0,7.5%);-ms-transform:translate(0,7.5%);transform:translate(0,7.5%);}@media (max-width:720px){.contentCanvas.jsx-3839678119{-webkit-transform:translate(0,5.5%);-ms-transform:translate(0,5.5%);transform:translate(0,5.5%);}}#soloProList.jsx-3839678119{margin:auto;list-style:none;font-size:1.6em;width:80%;height:90%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:0;position:absolute;display:table;vertical-align:middle;}@media (max-width:720px){#soloProList.jsx-3839678119{width:60%;min-width:300px;}}#soloPro1.jsx-3839678119{display:table-row;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxDb250ZW50My5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQnFCLEFBRzJDLEFBYUosQUFPQyxBQVNnQixBQUtuQixBQWdCQSxBQU1NLFVBTEEsRUFyQ0MsQUFxQkgsR0FkTCxHQXBCQyxBQXdEZCxRQW5DYyxBQThCWixFQWhCZ0IsQ0FyQlAsQ0FiQyxNQWNWLEVBT1csRUFwQmdrRSxJQWtDamtFLEtBYm1CLEtBY2xCLFdBQ0YsU0FDRCxRQUN3QixjQVhoQyxpREFMRiwwQ0FpQlksVUFDUSxrQkFDSixjQUNRLHNCQUN4Qix3M0RBMUNvQyxrQ0FDaEIsa0JBQ1UsZ0dBQ2xCLFVBQ1oiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxTbWFsbENvbnRlbnQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFNtYWxsQ29udGVudDMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJzb2xvUHJvTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInNvbG9Qcm8xXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJzb2xvUHJvMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic29sb1BybzFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FNQUFBQXA0WGlEQUFBQVVWQk1WRVdGaFlXRGc0TjNkM2R0YlcxN2UzdDFkWFdCZ1lHSGg0ZDVlWGx6YzNPTGk0dWJtNXVWbFpXUGo0K05qWTE5ZlgySmlZbC9mMzlyYTJ1UmtaR1ptWmxwYVdtWGw1ZHZiMjl4Y1hHVGs1Tm5aMmM4VFYxbUFBQUFHM1JTVGxOQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVBdkVPd3RBQUFGVmtsRVFWUjRYcFdXQjY3YzJCVUZiM2c1NTdUL2hSbzkvV1VNWkhsZ3I0Qmc4WjRxUWdRSmxISTRBOFN6RlZyYXB2bVRGOU83ZG1ZUkZaNjBZaUJoSlJDZ2gxRlloaUxBbWR2WDBDelRPcE5FNzdNRTBadHkvbldXemNoRHRpcXJtUURldXYzcG93UTV0YTJlTjBGWTBJbmtxREQ3M2xUOWM5bEV6d1VOcWdGSHM5VlFjZTNUVkNsRkNRclNUZk9pWWtWSlFCbXBicTJMNmlaYXZQbkFQY29VMGRTdzBTVVRxei9HdHJHdVhmYnl5Qm5pS3lrT1dRV0dxd3dNQTdRaVlBeGkrSWxQZHFvK2hZSG5VdDVaUGZuc0hKeU5pRHRucEp5YXlOQmtGNmNXb1lHQU1ZOTJVMmhYSEYvQzFNOHVQL1p0WWRpdWoyNlVkQWRRUVNYUUVyd1NPTXp0L1hXUldBejVHdVNCSWt3RzFIM0ZhYkoyT3NVT1VoR0M2dEs0RU10Sk8wdHRDNklCRDNrTTB2ZTB0SndNZFNmalpvK0VFSVNhZVRyOVAzd1lyR2pYcXlDMWtyY0tkaE1weEVudDVKZXRvdWxzY3B5emhYTjVGUnB1UEh2YmVRYUt4RkFFQjZFTitjWU42eEQ3UllHcFhwTm5kTW1aZ001RGNzM1lTTkZESFVvMkxHZlp1dWtTV3lVWWlySkFkWWJGM01mcUVLbWpNK0kyRWZoQTk0aUczTDd1S3JSK0dkV0Q3M3lkbElCKzZoZ3JlZjFRVGxtZ21iTTMvTGVYNUdJMVV4MVJXcGd4cEx1WjIrSStJanpaOHdxRTRuaWx2UWRrVWRmaHpJNVFEV3kra3c1V2dnMnBHcGVFVmVDQ0E3Yjg1Qk8zRjlEenhCM2NkcXZCeldjbXpieU1pcWh6dVlxdEhSVkcyeTR4K0tPbG55cWxhOEFvV1dwdUJvWVJ4elhyZkt1SUxsNlNmaVdDYmp4b1pKVWFDQmoxQ2pIN0dJYURiYzlrcUJZM1cvUmdqZGExaXFRY09KdTJXVys3NnBaQzlRRzdNMDBkZmZlOWhObnNldXBGTDUzcjhGN1lIU3dKV1VLUDJxK2s3UmRzeHlPQjExbjB4dE92blc0aXJNTUZOVjRIMHVxd1M1RXhzbVA5QXhiRFRjOUp3Z25lQVQ1dlRpVVNtMUU3QlNmbFN0M2JmYTF0djhEaTNSOG4zQWY3TU5XenM0OWhtYXVFMndQK3R0cnErQXNXcEZHMmF3dnN1T3FiaXBXSGd0dXZ1YUFFK0ExWi83Z0M5aGVzbnIrN3dxQ3dHOGM1eUFnM0FMMWZtOFQ5QVp0cC9iYkpHd2wxcE5yRTdSdU9YN1BlTVJVRVJWYVBwRXMreXFlb1NtdU9sb2txdzQ5cGdvbWpMZWg3aWNITmxHMTl5anM2WFhPTWVkWW01eEgyWXhwVjJ0YzBSbzJqSmZ4QzUwQXB1eEdvYjdsTXN4ZlRiZVV2MDdUeVl4cGVMdWNFSDFnTmQ0SUtIMkxBZzVUZFZobENhZlp2cHNrZm5jQ2Z4OHBPaEp6ZDc2YkpXZVlGbkZjaXdjWWZ1YlJjMTJJcC9wcEloQTEvbVNaL1J4akZEckpDNXhpZkZqSnBZMlhsNXpYZGd1RnFZeVRSMXpTcDFZOXArdGt0RFlZU05mbGN4STBpeU80VFBCZGxSY3BlcWpLL3BpRjVia2xxNzdWU0VhQSt6OHFtSlRGeklXaWl0Ym56Ujc5NFVTS0JVYVQwTlRFc1ZqWnFMYUZWcUpvUE45T0RHNzBJUGJmQkhLSysvcS9BV1IwdEp6WUhSVUxPYTRNUCtXL0hmR2FkWlViZncxNzdHN2ovT0diSXM4VGFoTHl5bmw0WDRSaW5GNzkzT3orQlUwc2FYdFVIclZCRlQvRG5BM2N0TlBvR2JzNGhSSWpUb2s4aSthbGdUMWxUSGk0U3hGdk9OS05yZ1FGQXEyL2dGbldNWGd3ZmZnWU1KcGlLWWttVzN0VGczWlE5SnErZjhYTitBNWVlVUtIV3ZKV0oyc2dKMVNvcCt3d2hxRlZpanFXYUpod3REOE1ObFNCZVdOTldUYTVaNWtQWnc1K0xiVlQ5OXdxVGR4MjlsTVVINE9JRy9EODZydUtFYXVCanZINXh5NnVtL1NmajdlaTZVVVZrNEFJbDNNeUQ0TVNTVE9GZ1N3c0gvUUpXYVE1YXM3WmNtZ0Jaa3pqalUxVXJRNzRjaTFnV0JDU0dIdHVWMUgybWhTbk8zV3AvM2ZFVjVhKzR3ei8vNnF5OEp4alpzbXh4eTUrNHc5Q0ROSlkwOVQwNzJpS0cwRW5PUzBhckVZZ1hxWW5YY1lId2pUdFVOQWNNZWxPZDR4cGtvcWlUWUlDV0ZxMEpTaVBmUERRZG50KzQvd3VxY1hZNDdRSUxiZ0FBQUFCSlJVNUVya0pnZ2c9PScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3M3ZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogOSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNy41JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1LjUlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgI3NvbG9Qcm9MaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNzb2xvUHJvTGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAjc29sb1BybzEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbWFsbENvbnRlbnQzOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SmallContent3.js */"));
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
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-1374480556",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-1374480556" + " " + "contentCanvas",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 19
      }
    }, __jsx("ul", {
      id: "soloProList",
      className: "jsx-1374480556",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 23
      }
    }, __jsx("li", {
      id: "soloPro1",
      className: "jsx-1374480556",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 27
      }
    }), __jsx("li", {
      id: "soloPro1",
      className: "jsx-1374480556",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 27
      }
    }), __jsx("li", {
      id: "soloPro1",
      className: "jsx-1374480556",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 27
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1374480556",
      __self: this
    }, "#contentContainer.jsx-1374480556{position:absolute;height:100%;width:90%;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;left:5%;}@media (max-width:720px){#contentContainer.jsx-1374480556{height:73vh;min-height:575px;top:9%;}}.contentCanvas.jsx-1374480556{margin-top:0px;z-index:15;height:100%;width:100%;-webkit-transform:translate(0,7.5%);-ms-transform:translate(0,7.5%);transform:translate(0,7.5%);}@media (max-width:720px){.contentCanvas.jsx-1374480556{-webkit-transform:translate(0,5.5%);-ms-transform:translate(0,5.5%);transform:translate(0,5.5%);}}#soloProList.jsx-1374480556{margin:auto;list-style:none;font-size:1.6em;width:80%;height:90%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:0;position:absolute;display:table;vertical-align:middle;}@media (max-width:720px){#soloProList.jsx-1374480556{width:60%;min-width:300px;}}#soloPro1.jsx-1374480556{display:table-row;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0NvbnRlbnQxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CcUIsQUFHMkMsQUFZSixBQU9DLEFBU2dCLEFBS25CLEFBZ0JBLEFBTU0sVUFMQSxFQXJDQyxBQXFCSCxHQWRMLEdBbkJDLEFBdURkLFFBbkNjLEFBOEJaLEVBaEJnQixDQXJCUCxDQVpDLE1BYVYsRUFPVyxFQW5CZ2tFLElBaUNqa0UsS0FibUIsS0FjbEIsV0FDRixTQUNELFFBQ3dCLGNBWGhDLGlEQUxGLDBDQWlCWSxVQUNRLGtCQUNKLGNBQ1Esc0JBQ3hCLHczREF6Q29DLGtDQUNoQixrQkFDVixRQUNWIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0NvbnRlbnQxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFNvbG9Db250ZW50MSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJzb2xvUHJvTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInNvbG9Qcm8xXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJzb2xvUHJvMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic29sb1BybzFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FNQUFBQXA0WGlEQUFBQVVWQk1WRVdGaFlXRGc0TjNkM2R0YlcxN2UzdDFkWFdCZ1lHSGg0ZDVlWGx6YzNPTGk0dWJtNXVWbFpXUGo0K05qWTE5ZlgySmlZbC9mMzlyYTJ1UmtaR1ptWmxwYVdtWGw1ZHZiMjl4Y1hHVGs1Tm5aMmM4VFYxbUFBQUFHM1JTVGxOQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVBdkVPd3RBQUFGVmtsRVFWUjRYcFdXQjY3YzJCVUZiM2c1NTdUL2hSbzkvV1VNWkhsZ3I0Qmc4WjRxUWdRSmxISTRBOFN6RlZyYXB2bVRGOU83ZG1ZUkZaNjBZaUJoSlJDZ2gxRlloaUxBbWR2WDBDelRPcE5FNzdNRTBadHkvbldXemNoRHRpcXJtUURldXYzcG93UTV0YTJlTjBGWTBJbmtxREQ3M2xUOWM5bEV6d1VOcWdGSHM5VlFjZTNUVkNsRkNRclNUZk9pWWtWSlFCbXBicTJMNmlaYXZQbkFQY29VMGRTdzBTVVRxei9HdHJHdVhmYnl5Qm5pS3lrT1dRV0dxd3dNQTdRaVlBeGkrSWxQZHFvK2hZSG5VdDVaUGZuc0hKeU5pRHRucEp5YXlOQmtGNmNXb1lHQU1ZOTJVMmhYSEYvQzFNOHVQL1p0WWRpdWoyNlVkQWRRUVNYUUVyd1NPTXp0L1hXUldBejVHdVNCSWt3RzFIM0ZhYkoyT3NVT1VoR0M2dEs0RU10Sk8wdHRDNklCRDNrTTB2ZTB0SndNZFNmalpvK0VFSVNhZVRyOVAzd1lyR2pYcXlDMWtyY0tkaE1weEVudDVKZXRvdWxzY3B5emhYTjVGUnB1UEh2YmVRYUt4RkFFQjZFTitjWU42eEQ3UllHcFhwTm5kTW1aZ001RGNzM1lTTkZESFVvMkxHZlp1dWtTV3lVWWlySkFkWWJGM01mcUVLbWpNK0kyRWZoQTk0aUczTDd1S3JSK0dkV0Q3M3lkbElCKzZoZ3JlZjFRVGxtZ21iTTMvTGVYNUdJMVV4MVJXcGd4cEx1WjIrSStJanpaOHdxRTRuaWx2UWRrVWRmaHpJNVFEV3kra3c1V2dnMnBHcGVFVmVDQ0E3Yjg1Qk8zRjlEenhCM2NkcXZCeldjbXpieU1pcWh6dVlxdEhSVkcyeTR4K0tPbG55cWxhOEFvV1dwdUJvWVJ4elhyZkt1SUxsNlNmaVdDYmp4b1pKVWFDQmoxQ2pIN0dJYURiYzlrcUJZM1cvUmdqZGExaXFRY09KdTJXVys3NnBaQzlRRzdNMDBkZmZlOWhObnNldXBGTDUzcjhGN1lIU3dKV1VLUDJxK2s3UmRzeHlPQjExbjB4dE92blc0aXJNTUZOVjRIMHVxd1M1RXhzbVA5QXhiRFRjOUp3Z25lQVQ1dlRpVVNtMUU3QlNmbFN0M2JmYTF0djhEaTNSOG4zQWY3TU5XenM0OWhtYXVFMndQK3R0cnErQXNXcEZHMmF3dnN1T3FiaXBXSGd0dXZ1YUFFK0ExWi83Z0M5aGVzbnIrN3dxQ3dHOGM1eUFnM0FMMWZtOFQ5QVp0cC9iYkpHd2wxcE5yRTdSdU9YN1BlTVJVRVJWYVBwRXMreXFlb1NtdU9sb2txdzQ5cGdvbWpMZWg3aWNITmxHMTl5anM2WFhPTWVkWW01eEgyWXhwVjJ0YzBSbzJqSmZ4QzUwQXB1eEdvYjdsTXN4ZlRiZVV2MDdUeVl4cGVMdWNFSDFnTmQ0SUtIMkxBZzVUZFZobENhZlp2cHNrZm5jQ2Z4OHBPaEp6ZDc2YkpXZVlGbkZjaXdjWWZ1YlJjMTJJcC9wcEloQTEvbVNaL1J4akZEckpDNXhpZkZqSnBZMlhsNXpYZGd1RnFZeVRSMXpTcDFZOXArdGt0RFlZU05mbGN4STBpeU80VFBCZGxSY3BlcWpLL3BpRjVia2xxNzdWU0VhQSt6OHFtSlRGeklXaWl0Ym56Ujc5NFVTS0JVYVQwTlRFc1ZqWnFMYUZWcUpvUE45T0RHNzBJUGJmQkhLSysvcS9BV1IwdEp6WUhSVUxPYTRNUCtXL0hmR2FkWlViZncxNzdHN2ovT0diSXM4VGFoTHl5bmw0WDRSaW5GNzkzT3orQlUwc2FYdFVIclZCRlQvRG5BM2N0TlBvR2JzNGhSSWpUb2s4aSthbGdUMWxUSGk0U3hGdk9OS05yZ1FGQXEyL2dGbldNWGd3ZmZnWU1KcGlLWWttVzN0VGczWlE5SnErZjhYTitBNWVlVUtIV3ZKV0oyc2dKMVNvcCt3d2hxRlZpanFXYUpod3REOE1ObFNCZVdOTldUYTVaNWtQWnc1K0xiVlQ5OXdxVGR4MjlsTVVINE9JRy9EODZydUtFYXVCanZINXh5NnVtL1NmajdlaTZVVVZrNEFJbDNNeUQ0TVNTVE9GZ1N3c0gvUUpXYVE1YXM3WmNtZ0Jaa3pqalUxVXJRNzRjaTFnV0JDU0dIdHVWMUgybWhTbk8zV3AvM2ZFVjVhKzR3ei8vNnF5OEp4alpzbXh4eTUrNHc5Q0ROSlkwOVQwNzJpS0cwRW5PUzBhckVZZ1hxWW5YY1lId2pUdFVOQWNNZWxPZDR4cGtvcWlUWUlDV0ZxMEpTaVBmUERRZG50KzQvd3VxY1hZNDdRSUxiZ0FBQUFCSlJVNUVya0pnZ2c9PScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzN2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDklO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDcuNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNS41JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICNzb2xvUHJvTGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAjc29sb1Byb0xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgI3NvbG9Qcm8xIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29sb0NvbnRlbnQxOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SoloContent1.js */"));
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
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-2090813256",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-2090813256" + " " + "contentCanvas",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 19
      }
    }, __jsx("ul", {
      id: "soloProList",
      className: "jsx-2090813256",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 23
      }
    }, __jsx("li", {
      id: "soloPro1",
      className: "jsx-2090813256",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 27
      }
    }), __jsx("li", {
      id: "soloPro1",
      className: "jsx-2090813256",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 27
      }
    }), __jsx("li", {
      id: "soloPro1",
      className: "jsx-2090813256",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 27
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2090813256",
      __self: this
    }, "#contentContainer.jsx-2090813256{position:absolute;height:100%;width:90%;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);right:15%;}@media (max-width:720px){#contentContainer.jsx-2090813256{height:73vh;min-height:575px;top:9%;}}.contentCanvas.jsx-2090813256{margin-top:0px;z-index:15;height:100%;width:100%;-webkit-transform:translate(0,7.5%);-ms-transform:translate(0,7.5%);transform:translate(0,7.5%);}@media (max-width:720px){.contentCanvas.jsx-2090813256{-webkit-transform:translate(0,5.5%);-ms-transform:translate(0,5.5%);transform:translate(0,5.5%);}}#soloProList.jsx-2090813256{margin:auto;list-style:none;font-size:1.6em;width:80%;height:90%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:0;position:absolute;display:table;vertical-align:middle;}@media (max-width:720px){#soloProList.jsx-2090813256{width:60%;min-width:300px;}}#soloPro1.jsx-2090813256{display:table-row;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0NvbnRlbnQyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CcUIsQUFHMkMsQUFhSixBQU9DLEFBU2dCLEFBS25CLEFBZ0JBLEFBTU0sVUFMQSxFQXJDQyxBQXFCSCxHQWRMLEdBcEJDLEFBd0RkLFFBbkNjLEFBOEJaLEVBaEJnQixDQXJCUCxDQWJDLE1BY1YsRUFPVyxFQXBCZ2tFLElBa0Nqa0UsS0FibUIsS0FjbEIsV0FDRixTQUNELFFBQ3dCLGNBWGhDLGlEQUxGLDBDQWlCWSxVQUNRLGtCQUNKLGNBQ1Esc0JBQ3hCLHczREExQ29DLGtDQUNoQixrQkFDVSxnR0FDbEIsVUFDWiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXFNvbG9Db250ZW50Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTb2xvQ29udGVudDIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwic29sb1Byb0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJzb2xvUHJvMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic29sb1BybzFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInNvbG9Qcm8xXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFVVkJNVkVXRmhZV0RnNE4zZDNkdGJXMTdlM3QxZFhXQmdZR0hoNGQ1ZVhsemMzT0xpNHVibTV1VmxaV1BqNCtOalkxOWZYMkppWWwvZjM5cmEydVJrWkdabVpscGFXbVhsNWR2YjI5eGNYR1RrNU5uWjJjOFRWMW1BQUFBRzNSU1RsTkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQXZFT3d0QUFBRlZrbEVRVlI0WHBXV0I2N2MyQlVGYjNnNTU3VC9oUm85L1dVTVpIbGdyNEJnOFo0cVFnUUpsSEk0QThTekZWcmFwdm1URjlPN2RtWVJGWjYwWWlCaEpSQ2doMUZZaGlMQW1kdlgwQ3pUT3BORTc3TUUwWnR5L25XV3pjaER0aXFybVFEZXV2M3Bvd1E1dGEyZU4wRlkwSW5rcURENzNsVDljOWxFendVTnFnRkhzOVZRY2UzVFZDbEZDUXJTVGZPaVlrVkpRQm1wYnEyTDZpWmF2UG5BUGNvVTBkU3cwU1VUcXovR3RyR3VYZmJ5eUJuaUt5a09XUVdHcXd3TUE3UWlZQXhpK0lsUGRxbytoWUhuVXQ1WlBmbnNISnlOaUR0bnBKeWF5TkJrRjZjV29ZR0FNWTkyVTJoWEhGL0MxTTh1UC9adFlkaXVqMjZVZEFkUVFTWFFFcndTT016dC9YV1JXQXo1R3VTQklrd0cxSDNGYWJKMk9zVU9VaEdDNnRLNEVNdEpPMHR0QzZJQkQza00wdmUwdEp3TWRTZmpabytFRUlTYWVUcjlQM3dZckdqWHF5QzFrcmNLZGhNcHhFbnQ1SmV0b3Vsc2NweXpoWE41RlJwdVBIdmJlUWFLeEZBRUI2RU4rY1lONnhEN1JZR3BYcE5uZE1tWmdNNURjczNZU05GREhVbzJMR2ZadXVrU1d5VVlpckpBZFliRjNNZnFFS21qTStJMkVmaEE5NGlHM0w3dUtyUitHZFdENzN5ZGxJQis2aGdyZWYxUVRsbWdtYk0zL0xlWDVHSTFVeDFSV3BneHBMdVoyK0krSWp6Wjh3cUU0bmlsdlFka1VkZmh6STVRRFd5K2t3NVdnZzJwR3BlRVZlQ0NBN2I4NUJPM0Y5RHp4QjNjZHF2QnpXY216YnlNaXFoenVZcXRIUlZHMnk0eCtLT2xueXFsYThBb1dXcHVCb1lSeHpYcmZLdUlMbDZTZmlXQ2JqeG9aSlVhQ0JqMUNqSDdHSWFEYmM5a3FCWTNXL1JnamRhMWlxUWNPSnUyV1crNzZwWkM5UUc3TTAwZGZmZTloTm5zZXVwRkw1M3I4RjdZSFN3SldVS1AycStrN1Jkc3h5T0IxMW4weHRPdm5XNGlyTU1GTlY0SDB1cXdTNUV4c21QOUF4YkRUYzlKd2duZUFUNXZUaVVTbTFFN0JTZmxTdDNiZmExdHY4RGkzUjhuM0FmN01OV3pzNDlobWF1RTJ3UCt0dHJxK0FzV3BGRzJhd3ZzdU9xYmlwV0hndHV2dWFBRStBMVovN2dDOWhlc25yKzd3cUN3RzhjNXlBZzNBTDFmbThUOUFadHAvYmJKR3dsMXBOckU3UnVPWDdQZU1SVUVSVmFQcEVzK3lxZW9TbXVPbG9rcXc0OXBnb21qTGVoN2ljSE5sRzE5eWpzNlhYT01lZFltNXhIMll4cFYydGMwUm8yakpmeEM1MEFwdXhHb2I3bE1zeGZUYmVVdjA3VHlZeHBlTHVjRUgxZ05kNElLSDJMQWc1VGRWaGxDYWZadnBza2ZuY0NmeDhwT2hKemQ3NmJKV2VZRm5GY2l3Y1lmdWJSYzEySXAvcHBJaEExL21TWi9SeGpGRHJKQzV4aWZGakpwWTJYbDV6WGRndUZxWXlUUjF6U3AxWTlwK3RrdERZWVNOZmxjeEkwaXlPNFRQQmRsUmNwZXFqSy9waUY1YmtscTc3VlNFYUErejhxbUpURnpJV2lpdGJuelI3OTRVU0tCVWFUME5URXNWalpxTGFGVnFKb1BOOU9ERzcwSVBiZkJIS0srL3EvQVdSMHRKellIUlVMT2E0TVArVy9IZkdhZFpVYmZ3MTc3RzdqL09HYklzOFRhaEx5eW5sNFg0UmluRjc5M096K0JVMHNhWHRVSHJWQkZUL0RuQTNjdE5Qb0diczRoUklqVG9rOGkrYWxnVDFsVEhpNFN4RnZPTktOcmdRRkFxMi9nRm5XTVhnd2ZmZ1lNSnBpS1lrbVczdFRnM1pROUpxK2Y4WE4rQTVlZVVLSFd2SldKMnNnSjFTb3Ard3docUZWaWpxV2FKaHd0RDhNTmxTQmVXTk5XVGE1WjVrUFp3NStMYlZUOTl3cVRkeDI5bE1VSDRPSUcvRDg2cnVLRWF1Qmp2SDV4eTZ1bS9TZmo3ZWk2VVVWazRBSWwzTXlENE1TU1RPRmdTd3NIL1FKV2FRNWFzN1pjbWdCWmt6ampVMVVyUTc0Y2kxZ1dCQ1NHSHR1VjFIMm1oU25PM1dwLzNmRVY1YSs0d3ovLzZxeThKeGpac214eHk1KzR3OUNETkpZMDlUMDcyaUtHMEVuT1MwYXJFWWdYcVluWGNZSHdqVHRVTkFjTWVsT2Q0eHBrb3FpVFlJQ1dGcTBKU2lQZlBEUWRudCs0L3d1cWNYWTQ3UUlMYmdBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzN2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDklO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDcuNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNS41JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICNzb2xvUHJvTGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAjc29sb1Byb0xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgI3NvbG9Qcm8xIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29sb0NvbnRlbnQyOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SoloContent2.js */"));
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
  }

  render() {
    return __jsx("div", {
      id: "contentContainer",
      className: "jsx-2239918660",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "jsx-2239918660" + " " + "contentCanvas",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, __jsx("ul", {
      id: "soloProList",
      className: "jsx-2239918660",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 29
      }
    }, __jsx("li", {
      id: "soloPro1",
      className: "jsx-2239918660",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 33
      }
    }), __jsx("li", {
      id: "soloPro1",
      className: "jsx-2239918660",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 33
      }
    }), __jsx("li", {
      id: "soloPro1",
      className: "jsx-2239918660",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 33
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2239918660",
      __self: this
    }, "#contentContainer.jsx-2239918660{position:absolute;height:100%;width:90%;background-image:url('data:image/png;base64,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');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(-200%);-ms-transform:translateX(-200%);transform:translateX(-200%);right:25%;}@media (max-width:720px){#contentContainer.jsx-2239918660{height:73vh;min-height:575px;top:9%;}}.contentCanvas.jsx-2239918660{margin-top:0px;z-index:15;height:100%;width:100%;-webkit-transform:translate(0,7.5%);-ms-transform:translate(0,7.5%);transform:translate(0,7.5%);}@media (max-width:720px){.contentCanvas.jsx-2239918660{-webkit-transform:translate(0,5.5%);-ms-transform:translate(0,5.5%);transform:translate(0,5.5%);}}#soloProList.jsx-2239918660{margin:auto;list-style:none;font-size:1.6em;width:80%;height:90%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:0;position:absolute;display:table;vertical-align:middle;}@media (max-width:720px){#soloProList.jsx-2239918660{width:60%;min-width:300px;}}#soloPro1.jsx-2239918660{display:table-row;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU29sb0NvbnRlbnQzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CMkIsQUFHaUQsQUFhSixBQU9DLEFBU2dCLEFBS25CLEFBZ0JBLEFBTU0sVUFMQSxFQXJDQyxBQXFCSCxHQWRMLEdBcEJDLEFBd0RkLFFBbkNjLEFBOEJaLEVBaEJnQixDQXJCUCxDQWJDLE1BY1YsRUFPVyxFQXBCZ2tFLElBa0Nqa0UsS0FibUIsS0FjbEIsV0FDRixTQUNELFFBQ3dCLGNBWGhDLGlEQUxGLDBDQWlCWSxVQUNRLGtCQUNKLGNBQ1Esc0JBQ3hCLHczREExQ29DLGtDQUNoQixrQkFDVSxnR0FDbEIsVUFDWiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXFNvbG9Db250ZW50My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTb2xvQ29udGVudDMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwic29sb1Byb0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJzb2xvUHJvMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic29sb1BybzFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInNvbG9Qcm8xXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFVVkJNVkVXRmhZV0RnNE4zZDNkdGJXMTdlM3QxZFhXQmdZR0hoNGQ1ZVhsemMzT0xpNHVibTV1VmxaV1BqNCtOalkxOWZYMkppWWwvZjM5cmEydVJrWkdabVpscGFXbVhsNWR2YjI5eGNYR1RrNU5uWjJjOFRWMW1BQUFBRzNSU1RsTkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQXZFT3d0QUFBRlZrbEVRVlI0WHBXV0I2N2MyQlVGYjNnNTU3VC9oUm85L1dVTVpIbGdyNEJnOFo0cVFnUUpsSEk0QThTekZWcmFwdm1URjlPN2RtWVJGWjYwWWlCaEpSQ2doMUZZaGlMQW1kdlgwQ3pUT3BORTc3TUUwWnR5L25XV3pjaER0aXFybVFEZXV2M3Bvd1E1dGEyZU4wRlkwSW5rcURENzNsVDljOWxFendVTnFnRkhzOVZRY2UzVFZDbEZDUXJTVGZPaVlrVkpRQm1wYnEyTDZpWmF2UG5BUGNvVTBkU3cwU1VUcXovR3RyR3VYZmJ5eUJuaUt5a09XUVdHcXd3TUE3UWlZQXhpK0lsUGRxbytoWUhuVXQ1WlBmbnNISnlOaUR0bnBKeWF5TkJrRjZjV29ZR0FNWTkyVTJoWEhGL0MxTTh1UC9adFlkaXVqMjZVZEFkUVFTWFFFcndTT016dC9YV1JXQXo1R3VTQklrd0cxSDNGYWJKMk9zVU9VaEdDNnRLNEVNdEpPMHR0QzZJQkQza00wdmUwdEp3TWRTZmpabytFRUlTYWVUcjlQM3dZckdqWHF5QzFrcmNLZGhNcHhFbnQ1SmV0b3Vsc2NweXpoWE41RlJwdVBIdmJlUWFLeEZBRUI2RU4rY1lONnhEN1JZR3BYcE5uZE1tWmdNNURjczNZU05GREhVbzJMR2ZadXVrU1d5VVlpckpBZFliRjNNZnFFS21qTStJMkVmaEE5NGlHM0w3dUtyUitHZFdENzN5ZGxJQis2aGdyZWYxUVRsbWdtYk0zL0xlWDVHSTFVeDFSV3BneHBMdVoyK0krSWp6Wjh3cUU0bmlsdlFka1VkZmh6STVRRFd5K2t3NVdnZzJwR3BlRVZlQ0NBN2I4NUJPM0Y5RHp4QjNjZHF2QnpXY216YnlNaXFoenVZcXRIUlZHMnk0eCtLT2xueXFsYThBb1dXcHVCb1lSeHpYcmZLdUlMbDZTZmlXQ2JqeG9aSlVhQ0JqMUNqSDdHSWFEYmM5a3FCWTNXL1JnamRhMWlxUWNPSnUyV1crNzZwWkM5UUc3TTAwZGZmZTloTm5zZXVwRkw1M3I4RjdZSFN3SldVS1AycStrN1Jkc3h5T0IxMW4weHRPdm5XNGlyTU1GTlY0SDB1cXdTNUV4c21QOUF4YkRUYzlKd2duZUFUNXZUaVVTbTFFN0JTZmxTdDNiZmExdHY4RGkzUjhuM0FmN01OV3pzNDlobWF1RTJ3UCt0dHJxK0FzV3BGRzJhd3ZzdU9xYmlwV0hndHV2dWFBRStBMVovN2dDOWhlc25yKzd3cUN3RzhjNXlBZzNBTDFmbThUOUFadHAvYmJKR3dsMXBOckU3UnVPWDdQZU1SVUVSVmFQcEVzK3lxZW9TbXVPbG9rcXc0OXBnb21qTGVoN2ljSE5sRzE5eWpzNlhYT01lZFltNXhIMll4cFYydGMwUm8yakpmeEM1MEFwdXhHb2I3bE1zeGZUYmVVdjA3VHlZeHBlTHVjRUgxZ05kNElLSDJMQWc1VGRWaGxDYWZadnBza2ZuY0NmeDhwT2hKemQ3NmJKV2VZRm5GY2l3Y1lmdWJSYzEySXAvcHBJaEExL21TWi9SeGpGRHJKQzV4aWZGakpwWTJYbDV6WGRndUZxWXlUUjF6U3AxWTlwK3RrdERZWVNOZmxjeEkwaXlPNFRQQmRsUmNwZXFqSy9waUY1YmtscTc3VlNFYUErejhxbUpURnpJV2lpdGJuelI3OTRVU0tCVWFUME5URXNWalpxTGFGVnFKb1BOOU9ERzcwSVBiZkJIS0srL3EvQVdSMHRKellIUlVMT2E0TVArVy9IZkdhZFpVYmZ3MTc3RzdqL09HYklzOFRhaEx5eW5sNFg0UmluRjc5M096K0JVMHNhWHRVSHJWQkZUL0RuQTNjdE5Qb0diczRoUklqVG9rOGkrYWxnVDFsVEhpNFN4RnZPTktOcmdRRkFxMi9nRm5XTVhnd2ZmZ1lNSnBpS1lrbVczdFRnM1pROUpxK2Y4WE4rQTVlZVVLSFd2SldKMnNnSjFTb3Ard3docUZWaWpxV2FKaHd0RDhNTmxTQmVXTk5XVGE1WjVrUFp3NStMYlZUOTl3cVRkeDI5bE1VSDRPSUcvRDg2cnVLRWF1Qmp2SDV4eTZ1bS9TZmo3ZWk2VVVWazRBSWwzTXlENE1TU1RPRmdTd3NIL1FKV2FRNWFzN1pjbWdCWmt6ampVMVVyUTc0Y2kxZ1dCQ1NHSHR1VjFIMm1oU25PM1dwLzNmRVY1YSs0d3ovLzZxeThKeGpac214eHk1KzR3OUNETkpZMDlUMDcyaUtHMEVuT1MwYXJFWWdYcVluWGNZSHdqVHRVTkFjTWVsT2Q0eHBrb3FpVFlJQ1dGcTBKU2lQZlBEUWRudCs0L3d1cWNYWTQ3UUlMYmdBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzN2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDklO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDcuNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNS41JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNzb2xvUHJvTGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjc29sb1Byb0xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3NvbG9Qcm8xIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2xvQ29udGVudDM7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SoloContent3.js */"));
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

/***/ 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DbG9zZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250YWN0Q29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvcnBCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db3JwQ29udGVudDEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db3JwQ29udGVudDIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db3JwQ29udGVudDMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db3JwRXhwbGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jldm9sdXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbGlkZXJDb3JwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2xpZGVyU21hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbGlkZXJTb2xvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU21hbGxCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbWFsbENvbnRlbnQxLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU21hbGxDb250ZW50Mi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NtYWxsQ29udGVudDMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbWFsbEV4cGxhaW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Tb2xvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29sb0NvbnRlbnQxLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29sb0NvbnRlbnQyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29sb0NvbnRlbnQzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU29sb0V4cGxhaW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZXh0TG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2Njb25UcmlhbmdsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9jcmV3LWZpZ3VyZS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9mYWN0b3J5LWZpZ3VyZS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9tYXAtaW1hZ2UucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvc2luZ2xlLWZpZ3VyZS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3ZpZGVvL0JhY2tncm91bmRWaWRlby5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9icmFuZHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL3JlZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9zb2xpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdGV4dC1sb29wXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwidmlld1NvbG8iLCJ2aWV3U21hbGwiLCJ2aWV3Q29ycCIsImNvbnRlbnRQYWdlIiwidmlld0NvbnRhY3QiLCJ2aWV3UmV2b2x1dGlvbiIsImJ1dHRvbkZhZGUiLCJjb250ZW50RmFkZSIsImFycm93RmFkZSIsInJlbmRlckJ1dHRvbnMiLCJzZWVTb2xvIiwiYmluZCIsImNsb3NlQWxsIiwic2VlU21hbGwiLCJzZWVDb3JwIiwic2VlQ29udGFjdCIsInNlZVJldm9sdXRpb24iLCJ0aW1lckNsb3NlQ29udGVudCIsInNldFN0YXRlIiwic2V0VGltZW91dCIsInJlbmRlciIsImNjb25UcmlhbmdsZSIsImN1cnNvciIsIkNsb3NlQnV0dG9uIiwiQ29udGFjdCIsIkNvbnRhY3RDb250ZW50Iiwic2hvdyIsIk1hcEltYWdlIiwib25DbG9zZSIsIkNvcnBCdXR0b24iLCJDb3JwSW1hZ2UiLCJDb3JwQ29udGVudCIsIkNvcnBFeHBsYWluIiwiUmV2b2x1dGlvbiIsIlNsaWRlciIsInNsaWRlMSIsInNsaWRlMiIsInNsaWRlMyIsInNsaWRlQ2xhc3MiLCJzbGlkZUxlZnQiLCJzbGlkZVJpZ2h0IiwiU2xpZGVyU29sbyIsIlNtYWxsQnV0dG9uIiwiU21hbGxJbWFnZSIsIlNtYWxsQ29udGVudDEiLCJTbWFsbENvbnRlbnQyIiwiU21hbGxDb250ZW50MyIsIlNtYWxsRXhwbGFpbiIsIlNvbG9CdXR0b24iLCJTaW5nbGVGaWd1cmUiLCJTb2xvQ29udGVudDEiLCJTb2xvQ29udGVudDIiLCJTb2xvQ29udGVudDMiLCJTb2xvRXhwbGFpbiIsIldvcmRMb29wIiwiSW5kZXgiLCJCYWNrZ3JvdW5kVmlkZW8iLCJ2aWRlb1VSTCIsImhlaWdodCIsIndpZHRoIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsInBhZGRpbmciLCJwb3NpdGlvbiIsIm9wYWNpdHkiLCJvYmplY3RGaXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQSxvRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhY2tncm91bmRWaWRlbyBmcm9tICcuLi9wdWJsaWMvdmlkZW8vQmFja2dyb3VuZFZpZGVvJztcbmltcG9ydCBjY29uVHJpYW5nbGUgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9jY29uVHJpYW5nbGUucG5nJztcbmltcG9ydCBTb2xvQnV0dG9uIGZyb20gJy4vU29sb0J1dHRvbic7XG5pbXBvcnQgU21hbGxCdXR0b24gZnJvbSAnLi9TbWFsbEJ1dHRvbic7XG5pbXBvcnQgQ29ycEJ1dHRvbiBmcm9tICcuL0NvcnBCdXR0b24nO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcbmltcG9ydCBTbGlkZXJTb2xvIGZyb20gJy4vU2xpZGVyU29sbyc7XG5pbXBvcnQgU2xpZGVyU21hbGwgZnJvbSAnLi9TbGlkZXJTbWFsbCc7XG5pbXBvcnQgU2xpZGVyQ29ycCBmcm9tICcuL1NsaWRlckNvcnAnO1xuaW1wb3J0IENvbnRhY3RDb250ZW50IGZyb20gJy4vQ29udGFjdENvbnRlbnQnO1xuaW1wb3J0IFJldm9sdXRpb24gZnJvbSAnLi9SZXZvbHV0aW9uJztcbmltcG9ydCBXb3JkTG9vcCBmcm9tICcuL1RleHRMb29wJztcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIC8vIFN0YXRlIG1hbmFnZW1lbnQgYW5kIGJpbmRpbmdzXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpZXdTb2xvOiBmYWxzZSxcbiAgICAgIHZpZXdTbWFsbDogZmFsc2UsXG4gICAgICB2aWV3Q29ycDogZmFsc2UsXG4gICAgICBjb250ZW50UGFnZTogMyxcbiAgICAgIHZpZXdDb250YWN0OiBmYWxzZSxcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiBmYWxzZSxcbiAgICAgIGJ1dHRvbkZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBjb250ZW50RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICBhcnJvd0ZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgcmVuZGVyQnV0dG9uczogdHJ1ZSxcbiAgICB9O1xuXG4gICAgdGhpcy5zZWVTb2xvID0gdGhpcy5zZWVTb2xvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZUFsbCA9IHRoaXMuY2xvc2VBbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlZVNtYWxsID0gdGhpcy5zZWVTbWFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlQ29ycCA9IHRoaXMuc2VlQ29ycC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlQ29udGFjdCA9IHRoaXMuc2VlQ29udGFjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VlUmV2b2x1dGlvbiA9IHRoaXMuc2VlUmV2b2x1dGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGltZXJDbG9zZUNvbnRlbnQgPSB0aGlzLnRpbWVyQ2xvc2VDb250ZW50LmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyBGdW5jdGlvbiBvYmplY3RzXG5cbiAgY2xvc2VBbGwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3U29sbzogZmFsc2UsXG4gICAgICB2aWV3U21hbGw6IGZhbHNlLFxuICAgICAgdmlld0NvcnA6IGZhbHNlLFxuICAgICAgY29udGVudFBhZ2U6IDEsXG4gICAgICB2aWV3Q29udGFjdDogZmFsc2UsXG4gICAgICB2aWV3UmV2b2x1dGlvbjogZmFsc2UsXG4gICAgICBidXR0b25GYWRlOiBcImZhZGVJblwiLFxuICAgICAgY29udGVudEZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgYXJyb3dGYWRlOiBcImZhZGVPdXRcIixcbiAgICB9KTtcbiAgfVxuXG4gIHRpbWVyQ2xvc2VDb250ZW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYnV0dG9uRmFkZTogXCJmYWRlSW5cIixcbiAgICAgIGNvbnRlbnRGYWRlOiBcImZhZGVPdXRcIixcbiAgICAgIGFycm93RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgfSlcbiAgICBzZXRUaW1lb3V0KHRoaXMuY2xvc2VBbGwsIDUwMCk7XG4gIH1cblxuICBzZWVTb2xvKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlld1NvbG86IHRydWUsXG4gICAgICBidXR0b25GYWRlOiBcImZhZGVPdXRcIixcbiAgICAgIGNvbnRlbnRGYWRlOiBcImZhZGVJblwiLFxuICAgICAgYXJyb3dGYWRlOiBcImZhZGVJblwiLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlU21hbGwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3U21hbGw6IHRydWUsXG4gICAgICBidXR0b25GYWRlOiBcImZhZGVPdXRcIixcbiAgICAgIGNvbnRlbnRGYWRlOiBcImZhZGVJblwiLFxuICAgICAgYXJyb3dGYWRlOiBcImZhZGVJblwiLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlQ29ycCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdDb3JwOiB0cnVlLFxuICAgICAgYnV0dG9uRmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICBjb250ZW50RmFkZTogXCJmYWRlSW5cIixcbiAgICAgIGFycm93RmFkZTogXCJmYWRlSW5cIixcbiAgICB9KTtcbiAgfVxuXG4gIHNlZUNvbnRhY3QoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWV3Q29udGFjdDogdHJ1ZSxcbiAgICAgIGJ1dHRvbkZhZGU6IFwiZmFkZU91dFwiLFxuICAgICAgY29udGVudEZhZGU6IFwiZmFkZUluXCIsXG4gICAgICBhcnJvd0ZhZGU6IFwiZmFkZU91dFwiLFxuICAgIH0pO1xuICB9XG5cbiAgc2VlUmV2b2x1dGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZXdSZXZvbHV0aW9uOiB0cnVlLFxuICAgICAgYnV0dG9uRmFkZTogXCJmYWRlT3V0XCIsXG4gICAgICBjb250ZW50RmFkZTogXCJmYWRlSW5cIixcbiAgICAgIGFycm93RmFkZTogXCJmYWRlT3V0XCIsXG4gICAgfSk7XG4gIH1cbiAgXG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG5cbiAgICAgICAgPEJhY2tncm91bmRWaWRlbyB0eXBlPSd2aWRlby9tcDQnIGF1dG9wbGF5IC8+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpZ25hdHVyZVwiPlxuICAgICAgICA8aW1nIGlkPVwibG9nb1wiIHNyYz17Y2NvblRyaWFuZ2xlfSAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNpZ1RleHRcIj5cbiAgICAgICAgICAgICAgICBNRVRBTFNcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuIFxuICAgICAgICA8ZGl2IGlkPSdiYW5uZXJEaXYnPlxuICAgICAgICAgIDxoMiBpZD1cImJhbm5lclwiPlxuICAgICAgICAgICAgPGEgaWQ9XCJyZXZMaW5rXCIgb25DbGljaz17dGhpcy5zZWVSZXZvbHV0aW9ufSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT48V29yZExvb3AgaWQ9XCJ0ZXh0LWxvb3BcIiAvPjwvYT5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uQ29udGFpbmVyXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmJ1dHRvbkZhZGV9PlxuICAgICAgICAgIFxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zZWVTb2xvfSAgaWQ9XCJzb2xvQnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+XG4gICAgICAgICAgICAgIDxTb2xvQnV0dG9uIC8+XG4gICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc2VlU21hbGx9ICBpZD1cInNtYWxsQnV0dG9uXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+XG4gICAgICAgICAgICAgIDxTbWFsbEJ1dHRvbiAvPlxuICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZUNvcnB9ICBpZD1cImNvcnBCdXR0b25cIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fT5cbiAgICAgICAgICAgICAgPENvcnBCdXR0b24gLz5cbiAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyQ29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNlZUNvbnRhY3R9IGlkPVwiY29udGFjdEJ1dHRvblwiIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319IGlkPVwiZm9vdGVyTGlua1wiPlxuICAgICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY29udGVudEZhZGV9PlxuICAgICAgICAgICAgPFNsaWRlclNvbG8gc2hvdz17dGhpcy5zdGF0ZS52aWV3U29sb30gb25DbG9zZT17dGhpcy50aW1lckNsb3NlQ29udGVudH0gaWQ9XCJzb2xvQ29udGVudFwiIC8+XG4gICAgICAgICAgICA8U2xpZGVyU21hbGwgc2hvdz17dGhpcy5zdGF0ZS52aWV3U21hbGx9IG9uQ2xvc2U9e3RoaXMudGltZXJDbG9zZUNvbnRlbnR9IGlkPVwic21hbGxDb250ZW50XCIgLz5cbiAgICAgICAgICAgIDxTbGlkZXJDb3JwIHNob3c9e3RoaXMuc3RhdGUudmlld0NvcnB9IG9uQ2xvc2U9e3RoaXMudGltZXJDbG9zZUNvbnRlbnR9IGlkPVwiY29ycENvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPENvbnRhY3RDb250ZW50IHNob3c9e3RoaXMuc3RhdGUudmlld0NvbnRhY3R9IG9uQ2xvc2U9e3RoaXMudGltZXJDbG9zZUNvbnRlbnR9IGlkPVwiY29udGFjdENvbnRlbnRcIiAvPlxuICAgICAgICAgICAgPFJldm9sdXRpb24gc2hvdz17dGhpcy5zdGF0ZS52aWV3UmV2b2x1dGlvbn0gb25DbG9zZT17dGhpcy50aW1lckNsb3NlQ29udGVudH0gaWQ9XCJyZXZDb250ZW50XCIgLz5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgLmZhZGVJbiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcbiAgICAgICAgICAgIHotSW5kZXg6IDU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZhZGVPdXQge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIC5BcHAge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5TaWduYXR1cmUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBsZWZ0OiAtMzBweDtcbiAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjbG9nbyB7XG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnNpZ1RleHQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFN5bmNvcGF0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTU4JTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2MSU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIHdpZHRoOiA3LjVlbTtcbiAgICAgICAgICAgIGhlaWdodDogMC45NWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNyZXZUYWcge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNyZXZMaW5rIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCBibGFjaztcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgICNiYW5uZXIge1xuICAgICAgICAgICAgbWluLXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2Jhbm5lckRpdiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMTIwcHgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KXtcblxuICAgICAgICAgICAgZGl2ICNiYW5uZXJEaXZ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2J1dHRvbkNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTAlKTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNXZ3O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAgIGRpdiAjYnV0dG9uQ29udGFpbmVye1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleGJveDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgICAgICAgIHRvcDogNjAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTIwJSwgLTY1JSk7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNjb3JwQnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDE1dnc7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHZ3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNzbWFsbEJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDR2dztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHZ3O1xuICAgICAgICAgIH1cbiAgIFxuICAgICAgICAgICNzb2xvQnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDE1dnc7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDR2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI2Zvb3RlckNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDYwMCUpO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMXZ3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICAgICAgICAgI2Zvb3RlckNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDcwJSwgNTAlKTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjc29sb0J1dHRvbntcbiAgICAgICAgICAgIHotaW5kZXg6IDIwO1xuICAgICAgICAgIH1cbiAgICAgXG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQ2xvc2VCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJtZGl2XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAjbWRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogNDA7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5tZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgWi1pbmRleDogMTE7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5tZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIFotaW5kZXg6IDIyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbG9zZUJ1dHRvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQ29udGFjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0QnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXNcclxuICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIC5jb250YWN0QnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsMCUsOTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgaHNsYSgwLDAlLDE1JSwgIDEpIDAgIDBweCAwcHggNHB4LCAvKiBib3JkZXIgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDE1JSwgLjgpIDAgLTFweCA1cHggNHB4LCAvKiBzb2Z0IFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwwJSwgLjI1KSAwIC0xcHggMHB4IDdweCwgLyogYm90dG9tIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwxMDAlLC43KSAwICAycHggMXB4IDdweCwgLyogdG9wIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDAsMCUsIDAlLC4xNSkgMCAtNXB4IDZweCA0cHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMCwwJSwxMDAlLC41KSAwICA1cHggNnB4IDRweDsgLyogb3V0ZXIgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxOTMsIDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3ZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQobGVmdCwgaHNsYSgwLDAlLDEwMCUsMCkgMCUsIGhzbGEoMCwwJSwxMDAlLDApICAgNiUsIGhzbGEoMCwwJSwxMDAlLCAuMSkgNy41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChsZWZ0LCBoc2xhKDAsMCUsICAwJSwwKSAwJSwgaHNsYSgwLDAlLCAgMCUsMCkgICA0JSwgaHNsYSgwLDAlLCAgMCUsLjAzKSA0LjUlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KGxlZnQsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxLjIlLCBoc2xhKDAsMCUsMTAwJSwuMTUpIDEuNSUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgaHNsKDAsMCUsNzglKSAgMCUsIGhzbCgwLDAlLDkwJSkgNDclLCBoc2woMCwwJSw3OCUpIDUzJSxoc2woMCwwJSw3MCUpMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3RCdXR0b246YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbCgyMTAsIDEwMCUsIDQwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBoc2xhKDIxMCwxMDAlLDIwJSwuMykgMCAtMXB4IDAsIGhzbCgyMTAsMTAwJSw4NSUpIDAgMnB4IDFweCwgaHNsYSgyMDAsMTAwJSw4MCUsMSkgMCAwIDVweCwgaHNsYSgyMTAsMTAwJSw1MCUsLjYpIDAgMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDMwJSwgIDEpIDAgIDBweCAwcHggNHB4LCAvKiBib3JkZXIgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDE1JSwgLjQpIDAgLTFweCA1cHggNHB4LCAvKiBzb2Z0IFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwyMCUsLjI1KSAwIC0xcHggMHB4IDdweCwgLyogYm90dG9tIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwxMDAlLC43KSAwICAycHggMXB4IDdweCwgLyogdG9wIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsMTAwJSw3NSUsIC44KSAwICAwcHggM3B4IDJweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCw1MCUsNDAlLCAuMjUpIDAgLTVweCA2cHggNHB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDgwJSw5NSUsICAgMSkgMCAgNXB4IDZweCA0cHg7IC8qIG91dGVyIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1hcEltYWdlIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvbWFwLWltYWdlLnBuZyc7XHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICcuL0Nsb3NlQnV0dG9uJztcclxuXHJcbmNsYXNzIENvbnRhY3RDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5zaG93KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgaWQ9XCJjb250YWN0VGV4dFwiPkNvbnRhY3QgaW5mbyBnb2VzIGhlcmU8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGlkPVwibWFwSW1nXCIgIHNyYz17TWFwSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0gaWQ9XCJjbG9zZUxpbmtcIj48Q2xvc2VCdXR0b24gaWQ9XCJjbG9zZVwiIC8+PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAjY2xvc2VMaW5rIHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxJTtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAxJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogODB2dztcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbVpnTTVEY3MzWVNORkRIVW8yTEdmWnV1a1NXeVVZaXJKQWRZYkYzTWZxRUttak0rSTJFZmhBOTRpRzNMN3VLclIrR2RXRDczeWRsSUIrNmhncmVmMVFUbG1nbWJNMy9MZVg1R0kxVXgxUldwZ3hwTHVaMitJK0lqelo4d3FFNG5pbHZRZGtVZGZoekk1UURXeStrdzVXZ2cycEdwZUVWZUNDQTdiODVCTzNGOUR6eEIzY2RxdkJ6V2NtemJ5TWlxaHp1WXF0SFJWRzJ5NHgrS09sbnlxbGE4QW9XV3B1Qm9ZUnh6WHJmS3VJTGw2U2ZpV0NianhvWkpVYUNCajFDakg3R0lhRGJjOWtxQlkzVy9SZ2pkYTFpcVFjT0p1MldXKzc2cFpDOVFHN00wMGRmZmU5aE5uc2V1cEZMNTNyOEY3WUhTd0pXVUtQMnErazdSZHN4eU9CMTFuMHh0T3ZuVzRpck1NRk5WNEgwdXF3UzVFeHNtUDlBeGJEVGM5SndnbmVBVDV2VGlVU20xRTdCU2ZsU3QzYmZhMXR2OERpM1I4bjNBZjdNTld6czQ5aG1hdUUyd1ArdHRycStBc1dwRkcyYXd2c3VPcWJpcFdIZ3R1dnVhQUUrQTFaLzdnQzloZXNucis3d3FDd0c4YzV5QWczQUwxZm04VDlBWnRwL2JiSkd3bDFwTnJFN1J1T1g3UGVNUlVFUlZhUHBFcyt5cWVvU211T2xva3F3NDlwZ29takxlaDdpY0hObEcxOXlqczZYWE9NZWRZbTV4SDJZeHBWMnRjMFJvMmpKZnhDNTBBcHV4R29iN2xNc3hmVGJlVXYwN1R5WXhwZUx1Y0VIMWdOZDRJS0gyTEFnNVRkVmhsQ2FmWnZwc2tmbmNDZng4cE9oSnpkNzZiSldlWUZuRmNpd2NZZnViUmMxMklwL3BwSWhBMS9tU1ovUnhqRkRySkM1eGlmRmpKcFkyWGw1elhkZ3VGcVl5VFIxelNwMVk5cCt0a3REWVlTTmZsY3hJMGl5TzRUUEJkbFJjcGVxaksvcGlGNWJrbHE3N1ZTRWFBK3o4cW1KVEZ6SVdpaXRibnpSNzk0VVNLQlVhVDBOVEVzVmpacUxhRlZxSm9QTjlPREc3MElQYmZCSEtLKy9xL0FXUjB0SnpZSFJVTE9hNE1QK1cvSGZHYWRaVWJmdzE3N0c3ai9PR2JJczhUYWhMeXlubDRYNFJpbkY3OTNPeitCVTBzYVh0VUhyVkJGVC9EbkEzY3ROUG9HYnM0aFJJalRvazhpK2FsZ1QxbFRIaTRTeEZ2T05LTnJnUUZBcTIvZ0ZuV01YZ3dmZmdZTUpwaUtZa21XM3RUZzNaUTlKcStmOFhOK0E1ZWVVS0hXdkpXSjJzZ0oxU29wK3d3aHFGVmlqcVdhSmh3dEQ4TU5sU0JlV05OV1RhNVo1a1BadzUrTGJWVDk5d3FUZHgyOWxNVUg0T0lHL0Q4NnJ1S0VhdUJqdkg1eHk2dW0vU2ZqN2VpNlVVVms0QUlsM015RDRNU1NUT0ZnU3dzSC9RSldhUTVhczdaY21nQlprempqVTFVclE3NGNpMWdXQkNTR0h0dVYxSDJtaFNuTzNXcC8zZkVWNWErNHd6Ly82cXk4SnhqWnNteHh5NSs0dzlDRE5KWTA5VDA3MmlLRzBFbk9TMGFyRVlnWHFZblhjWUh3alR0VU5BY01lbE9kNHhwa29xaVRZSUNXRnEwSlNpUGZQRFFkbnQrNC93dXFjWFk0N1FJTGJnQUFBQUJKUlU1RXJrSmdnZz09Jyk7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzN2aDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDklO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICNtYXBJbWcge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDEyLjUlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgI21hcEltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjY29udGFjdFRleHQge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAjY29udGFjdFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwJVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgKX0gZWxzZSB7XHJcbiAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdENvbnRlbnQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvcnBJbWFnZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2ZhY3RvcnktZmlndXJlLnBuZyc7XHJcbmltcG9ydCBDb3JwRXhwbGFpbiBmcm9tICcuL0NvcnBFeHBsYWluJztcclxuXHJcbmNsYXNzIENvcnBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjb3JwQnV0dG9uSW1hZ2VcIiBzcmM9e0NvcnBJbWFnZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29ycEJ1dHRvblRhZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvcnBFeHBsYWluIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwwJSw5MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IGhzbGEoMCwwJSwxNSUsICAxKSAwICAwcHggMHB4IDRweCwgLyogYm9yZGVyICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDE1JSwgLjgpIDAgLTFweCA1cHggNHB4LCAvKiBzb2Z0IFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDAlLCAuMjUpIDAgLTFweCAwcHggN3B4LCAvKiBib3R0b20gU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDAsMCUsMTAwJSwuNykgMCAgMnB4IDFweCA3cHgsIC8qIHRvcCBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMCwwJSwgMCUsLjE1KSAwIC01cHggNnB4IDRweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDAsMCUsMTAwJSwuNSkgMCAgNXB4IDZweCA0cHg7IC8qIG91dGVyIEhMICovIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBCcnVzaGVkIE1ldGFsICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTV2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgICAwJSwgIDglIDUwJSwgaHNsYSgwLDAlLDEwMCUsLjUpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAxMDAlLCAxMiUgNTAlLCBoc2xhKDAsMCUsMTAwJSwuNikgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgIDAlICA1MCUsIDUwJSAgNyUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDEwMCUgIDUwJSwgNTAlICA1JSwgaHNsYSgwLDAlLDEwMCUsLjUpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDEwMCUgMTAwJSwgaHNsYSgwLDAlLCAgMCUsMCkgMCUsIGhzbGEoMCwwJSwgIDAlLDApICAgMyUsIGhzbGEoMCwwJSwgIDAlLC4xKSAzLjUlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDEwMCUgMTAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMCUsIGhzbGEoMCwwJSwxMDAlLDApICAgNiUsIGhzbGEoMCwwJSwxMDAlLC4xKSA3LjUlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDEwMCUgMTAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEuMiUsIGhzbGEoMCwwJSwxMDAlLC4yKSAyLjIlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMjAwJSA1MCUsIGhzbGEoMCwwJSw5MCUsMSkgNSUsIGhzbGEoMCwwJSw4NSUsMSkgMzAlLCBoc2xhKDAsMCUsNjAlLDEpIDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YmVmb3JlLCAjY2lyY2xlOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGZha2UgY29uaWNhbCBncmFkaWVudHMgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlICAgMCUsIDEwJSA1MCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAxMDAlLCAxMCUgNTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICAgMCUgIDUwJSwgNTAlIDEwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAxMDAlICA1MCUsIDUwJSAwNiUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTpiZWZvcmUgeyB0cmFuc2Zvcm06IHJvdGF0ZSggNjVkZWcpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YWZ0ZXIgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtNjVkZWcpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2woMjEwLCAxMDAlLCA0MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogaHNsYSgyMTAsMTAwJSwyMCUsLjMpIDAgLTFweCAwLCBoc2woMjEwLDEwMCUsODUlKSAwIDJweCAxcHgsIGhzbGEoMjAwLDEwMCUsODAlLDEpIDAgMCA1cHgsIGhzbGEoMjEwLDEwMCUsNTAlLC42KSAwIDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwzMCUsICAxKSAwICAwcHggMHB4IDRweCwgLyogYm9yZGVyICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwxNSUsIC40KSAwIC0xcHggNXB4IDRweCwgLyogc29mdCBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMjAlLC4yNSkgMCAtMXB4IDBweCA3cHgsIC8qIGJvdHRvbSBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMTAwJSwuNykgMCAgMnB4IDFweCA3cHgsIC8qIHRvcCBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDEwMCUsNzUlLCAuOCkgMCAgMHB4IDNweCAycHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsNTAlLDQwJSwgLjI1KSAwIC01cHggNnB4IDRweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCw4MCUsOTUlLCAgIDEpIDAgIDVweCA2cHggNHB4OyAvKiBvdXRlciBITCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEVuZCBCcnVzaGVkIE1ldGFsICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYgI2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2ICNidXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY29ycEJ1dHRvblRhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQwJSwgLTkwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29ycEJ1dHRvbkltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDMwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3JwQnV0dG9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDb3JwQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwic29sb1Byb0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJzb2xvUHJvMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic29sb1BybzFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInNvbG9Qcm8xXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFVVkJNVkVXRmhZV0RnNE4zZDNkdGJXMTdlM3QxZFhXQmdZR0hoNGQ1ZVhsemMzT0xpNHVibTV1VmxaV1BqNCtOalkxOWZYMkppWWwvZjM5cmEydVJrWkdabVpscGFXbVhsNWR2YjI5eGNYR1RrNU5uWjJjOFRWMW1BQUFBRzNSU1RsTkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQXZFT3d0QUFBRlZrbEVRVlI0WHBXV0I2N2MyQlVGYjNnNTU3VC9oUm85L1dVTVpIbGdyNEJnOFo0cVFnUUpsSEk0QThTekZWcmFwdm1URjlPN2RtWVJGWjYwWWlCaEpSQ2doMUZZaGlMQW1kdlgwQ3pUT3BORTc3TUUwWnR5L25XV3pjaER0aXFybVFEZXV2M3Bvd1E1dGEyZU4wRlkwSW5rcURENzNsVDljOWxFendVTnFnRkhzOVZRY2UzVFZDbEZDUXJTVGZPaVlrVkpRQm1wYnEyTDZpWmF2UG5BUGNvVTBkU3cwU1VUcXovR3RyR3VYZmJ5eUJuaUt5a09XUVdHcXd3TUE3UWlZQXhpK0lsUGRxbytoWUhuVXQ1WlBmbnNISnlOaUR0bnBKeWF5TkJrRjZjV29ZR0FNWTkyVTJoWEhGL0MxTTh1UC9adFlkaXVqMjZVZEFkUVFTWFFFcndTT016dC9YV1JXQXo1R3VTQklrd0cxSDNGYWJKMk9zVU9VaEdDNnRLNEVNdEpPMHR0QzZJQkQza00wdmUwdEp3TWRTZmpabytFRUlTYWVUcjlQM3dZckdqWHF5QzFrcmNLZGhNcHhFbnQ1SmV0b3Vsc2NweXpoWE41RlJwdVBIdmJlUWFLeEZBRUI2RU4rY1lONnhEN1JZR3BYcE5uZE1tWmdNNURjczNZU05GREhVbzJMR2ZadXVrU1d5VVlpckpBZFliRjNNZnFFS21qTStJMkVmaEE5NGlHM0w3dUtyUitHZFdENzN5ZGxJQis2aGdyZWYxUVRsbWdtYk0zL0xlWDVHSTFVeDFSV3BneHBMdVoyK0krSWp6Wjh3cUU0bmlsdlFka1VkZmh6STVRRFd5K2t3NVdnZzJwR3BlRVZlQ0NBN2I4NUJPM0Y5RHp4QjNjZHF2QnpXY216YnlNaXFoenVZcXRIUlZHMnk0eCtLT2xueXFsYThBb1dXcHVCb1lSeHpYcmZLdUlMbDZTZmlXQ2JqeG9aSlVhQ0JqMUNqSDdHSWFEYmM5a3FCWTNXL1JnamRhMWlxUWNPSnUyV1crNzZwWkM5UUc3TTAwZGZmZTloTm5zZXVwRkw1M3I4RjdZSFN3SldVS1AycStrN1Jkc3h5T0IxMW4weHRPdm5XNGlyTU1GTlY0SDB1cXdTNUV4c21QOUF4YkRUYzlKd2duZUFUNXZUaVVTbTFFN0JTZmxTdDNiZmExdHY4RGkzUjhuM0FmN01OV3pzNDlobWF1RTJ3UCt0dHJxK0FzV3BGRzJhd3ZzdU9xYmlwV0hndHV2dWFBRStBMVovN2dDOWhlc25yKzd3cUN3RzhjNXlBZzNBTDFmbThUOUFadHAvYmJKR3dsMXBOckU3UnVPWDdQZU1SVUVSVmFQcEVzK3lxZW9TbXVPbG9rcXc0OXBnb21qTGVoN2ljSE5sRzE5eWpzNlhYT01lZFltNXhIMll4cFYydGMwUm8yakpmeEM1MEFwdXhHb2I3bE1zeGZUYmVVdjA3VHlZeHBlTHVjRUgxZ05kNElLSDJMQWc1VGRWaGxDYWZadnBza2ZuY0NmeDhwT2hKemQ3NmJKV2VZRm5GY2l3Y1lmdWJSYzEySXAvcHBJaEExL21TWi9SeGpGRHJKQzV4aWZGakpwWTJYbDV6WGRndUZxWXlUUjF6U3AxWTlwK3RrdERZWVNOZmxjeEkwaXlPNFRQQmRsUmNwZXFqSy9waUY1YmtscTc3VlNFYUErejhxbUpURnpJV2lpdGJuelI3OTRVU0tCVWFUME5URXNWalpxTGFGVnFKb1BOOU9ERzcwSVBiZkJIS0srL3EvQVdSMHRKellIUlVMT2E0TVArVy9IZkdhZFpVYmZ3MTc3RzdqL09HYklzOFRhaEx5eW5sNFg0UmluRjc5M096K0JVMHNhWHRVSHJWQkZUL0RuQTNjdE5Qb0diczRoUklqVG9rOGkrYWxnVDFsVEhpNFN4RnZPTktOcmdRRkFxMi9nRm5XTVhnd2ZmZ1lNSnBpS1lrbVczdFRnM1pROUpxK2Y4WE4rQTVlZVVLSFd2SldKMnNnSjFTb3Ard3docUZWaWpxV2FKaHd0RDhNTmxTQmVXTk5XVGE1WjVrUFp3NStMYlZUOTl3cVRkeDI5bE1VSDRPSUcvRDg2cnVLRWF1Qmp2SDV4eTZ1bS9TZmo3ZWk2VVVWazRBSWwzTXlENE1TU1RPRmdTd3NIL1FKV2FRNWFzN1pjbWdCWmt6ampVMVVyUTc0Y2kxZ1dCQ1NHSHR1VjFIMm1oU25PM1dwLzNmRVY1YSs0d3ovLzZxeThKeGpac214eHk1KzR3OUNETkpZMDlUMDcyaUtHMEVuT1MwYXJFWWdYcVluWGNZSHdqVHRVTkFjTWVsT2Q0eHBrb3FpVFlJQ1dGcTBKU2lQZlBEUWRudCs0L3d1cWNYWTQ3UUlMYmdBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDczdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA5JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA3LjUlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUuNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAjc29sb1Byb0xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NvbG9Qcm9MaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICNzb2xvUHJvMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbik7XHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29ycENvbnRlbnQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIENvcnBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJzb2xvUHJvTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInNvbG9Qcm8xXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJzb2xvUHJvMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic29sb1BybzFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FNQUFBQXA0WGlEQUFBQVVWQk1WRVdGaFlXRGc0TjNkM2R0YlcxN2UzdDFkWFdCZ1lHSGg0ZDVlWGx6YzNPTGk0dWJtNXVWbFpXUGo0K05qWTE5ZlgySmlZbC9mMzlyYTJ1UmtaR1ptWmxwYVdtWGw1ZHZiMjl4Y1hHVGs1Tm5aMmM4VFYxbUFBQUFHM1JTVGxOQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVBdkVPd3RBQUFGVmtsRVFWUjRYcFdXQjY3YzJCVUZiM2c1NTdUL2hSbzkvV1VNWkhsZ3I0Qmc4WjRxUWdRSmxISTRBOFN6RlZyYXB2bVRGOU83ZG1ZUkZaNjBZaUJoSlJDZ2gxRlloaUxBbWR2WDBDelRPcE5FNzdNRTBadHkvbldXemNoRHRpcXJtUURldXYzcG93UTV0YTJlTjBGWTBJbmtxREQ3M2xUOWM5bEV6d1VOcWdGSHM5VlFjZTNUVkNsRkNRclNUZk9pWWtWSlFCbXBicTJMNmlaYXZQbkFQY29VMGRTdzBTVVRxei9HdHJHdVhmYnl5Qm5pS3lrT1dRV0dxd3dNQTdRaVlBeGkrSWxQZHFvK2hZSG5VdDVaUGZuc0hKeU5pRHRucEp5YXlOQmtGNmNXb1lHQU1ZOTJVMmhYSEYvQzFNOHVQL1p0WWRpdWoyNlVkQWRRUVNYUUVyd1NPTXp0L1hXUldBejVHdVNCSWt3RzFIM0ZhYkoyT3NVT1VoR0M2dEs0RU10Sk8wdHRDNklCRDNrTTB2ZTB0SndNZFNmalpvK0VFSVNhZVRyOVAzd1lyR2pYcXlDMWtyY0tkaE1weEVudDVKZXRvdWxzY3B5emhYTjVGUnB1UEh2YmVRYUt4RkFFQjZFTitjWU42eEQ3UllHcFhwTm5kTW1aZ001RGNzM1lTTkZESFVvMkxHZlp1dWtTV3lVWWlySkFkWWJGM01mcUVLbWpNK0kyRWZoQTk0aUczTDd1S3JSK0dkV0Q3M3lkbElCKzZoZ3JlZjFRVGxtZ21iTTMvTGVYNUdJMVV4MVJXcGd4cEx1WjIrSStJanpaOHdxRTRuaWx2UWRrVWRmaHpJNVFEV3kra3c1V2dnMnBHcGVFVmVDQ0E3Yjg1Qk8zRjlEenhCM2NkcXZCeldjbXpieU1pcWh6dVlxdEhSVkcyeTR4K0tPbG55cWxhOEFvV1dwdUJvWVJ4elhyZkt1SUxsNlNmaVdDYmp4b1pKVWFDQmoxQ2pIN0dJYURiYzlrcUJZM1cvUmdqZGExaXFRY09KdTJXVys3NnBaQzlRRzdNMDBkZmZlOWhObnNldXBGTDUzcjhGN1lIU3dKV1VLUDJxK2s3UmRzeHlPQjExbjB4dE92blc0aXJNTUZOVjRIMHVxd1M1RXhzbVA5QXhiRFRjOUp3Z25lQVQ1dlRpVVNtMUU3QlNmbFN0M2JmYTF0djhEaTNSOG4zQWY3TU5XenM0OWhtYXVFMndQK3R0cnErQXNXcEZHMmF3dnN1T3FiaXBXSGd0dXZ1YUFFK0ExWi83Z0M5aGVzbnIrN3dxQ3dHOGM1eUFnM0FMMWZtOFQ5QVp0cC9iYkpHd2wxcE5yRTdSdU9YN1BlTVJVRVJWYVBwRXMreXFlb1NtdU9sb2txdzQ5cGdvbWpMZWg3aWNITmxHMTl5anM2WFhPTWVkWW01eEgyWXhwVjJ0YzBSbzJqSmZ4QzUwQXB1eEdvYjdsTXN4ZlRiZVV2MDdUeVl4cGVMdWNFSDFnTmQ0SUtIMkxBZzVUZFZobENhZlp2cHNrZm5jQ2Z4OHBPaEp6ZDc2YkpXZVlGbkZjaXdjWWZ1YlJjMTJJcC9wcEloQTEvbVNaL1J4akZEckpDNXhpZkZqSnBZMlhsNXpYZGd1RnFZeVRSMXpTcDFZOXArdGt0RFlZU05mbGN4STBpeU80VFBCZGxSY3BlcWpLL3BpRjVia2xxNzdWU0VhQSt6OHFtSlRGeklXaWl0Ym56Ujc5NFVTS0JVYVQwTlRFc1ZqWnFMYUZWcUpvUE45T0RHNzBJUGJmQkhLSysvcS9BV1IwdEp6WUhSVUxPYTRNUCtXL0hmR2FkWlViZncxNzdHN2ovT0diSXM4VGFoTHl5bmw0WDRSaW5GNzkzT3orQlUwc2FYdFVIclZCRlQvRG5BM2N0TlBvR2JzNGhSSWpUb2s4aSthbGdUMWxUSGk0U3hGdk9OS05yZ1FGQXEyL2dGbldNWGd3ZmZnWU1KcGlLWWttVzN0VGczWlE5SnErZjhYTitBNWVlVUtIV3ZKV0oyc2dKMVNvcCt3d2hxRlZpanFXYUpod3REOE1ObFNCZVdOTldUYTVaNWtQWnc1K0xiVlQ5OXdxVGR4MjlsTVVINE9JRy9EODZydUtFYXVCanZINXh5NnVtL1NmajdlaTZVVVZrNEFJbDNNeUQ0TVNTVE9GZ1N3c0gvUUpXYVE1YXM3WmNtZ0Jaa3pqalUxVXJRNzRjaTFnV0JDU0dIdHVWMUgybWhTbk8zV3AvM2ZFVjVhKzR3ei8vNnF5OEp4alpzbXh4eTUrNHc5Q0ROSlkwOVQwNzJpS0cwRW5PUzBhckVZZ1hxWW5YY1lId2pUdFVOQWNNZWxPZDR4cGtvcWlUWUlDV0ZxMEpTaVBmUERRZG50KzQvd3VxY1hZNDdRSUxiZ0FBQUFCSlJVNUVya0pnZ2c9PScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3M3ZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogOSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNy41JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1LjUlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgI3NvbG9Qcm9MaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNzb2xvUHJvTGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAjc29sb1BybzEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcnBDb250ZW50OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDb3JwQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwic29sb1Byb0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJzb2xvUHJvMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic29sb1BybzFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInNvbG9Qcm8xXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFVVkJNVkVXRmhZV0RnNE4zZDNkdGJXMTdlM3QxZFhXQmdZR0hoNGQ1ZVhsemMzT0xpNHVibTV1VmxaV1BqNCtOalkxOWZYMkppWWwvZjM5cmEydVJrWkdabVpscGFXbVhsNWR2YjI5eGNYR1RrNU5uWjJjOFRWMW1BQUFBRzNSU1RsTkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQXZFT3d0QUFBRlZrbEVRVlI0WHBXV0I2N2MyQlVGYjNnNTU3VC9oUm85L1dVTVpIbGdyNEJnOFo0cVFnUUpsSEk0QThTekZWcmFwdm1URjlPN2RtWVJGWjYwWWlCaEpSQ2doMUZZaGlMQW1kdlgwQ3pUT3BORTc3TUUwWnR5L25XV3pjaER0aXFybVFEZXV2M3Bvd1E1dGEyZU4wRlkwSW5rcURENzNsVDljOWxFendVTnFnRkhzOVZRY2UzVFZDbEZDUXJTVGZPaVlrVkpRQm1wYnEyTDZpWmF2UG5BUGNvVTBkU3cwU1VUcXovR3RyR3VYZmJ5eUJuaUt5a09XUVdHcXd3TUE3UWlZQXhpK0lsUGRxbytoWUhuVXQ1WlBmbnNISnlOaUR0bnBKeWF5TkJrRjZjV29ZR0FNWTkyVTJoWEhGL0MxTTh1UC9adFlkaXVqMjZVZEFkUVFTWFFFcndTT016dC9YV1JXQXo1R3VTQklrd0cxSDNGYWJKMk9zVU9VaEdDNnRLNEVNdEpPMHR0QzZJQkQza00wdmUwdEp3TWRTZmpabytFRUlTYWVUcjlQM3dZckdqWHF5QzFrcmNLZGhNcHhFbnQ1SmV0b3Vsc2NweXpoWE41RlJwdVBIdmJlUWFLeEZBRUI2RU4rY1lONnhEN1JZR3BYcE5uZE1tWmdNNURjczNZU05GREhVbzJMR2ZadXVrU1d5VVlpckpBZFliRjNNZnFFS21qTStJMkVmaEE5NGlHM0w3dUtyUitHZFdENzN5ZGxJQis2aGdyZWYxUVRsbWdtYk0zL0xlWDVHSTFVeDFSV3BneHBMdVoyK0krSWp6Wjh3cUU0bmlsdlFka1VkZmh6STVRRFd5K2t3NVdnZzJwR3BlRVZlQ0NBN2I4NUJPM0Y5RHp4QjNjZHF2QnpXY216YnlNaXFoenVZcXRIUlZHMnk0eCtLT2xueXFsYThBb1dXcHVCb1lSeHpYcmZLdUlMbDZTZmlXQ2JqeG9aSlVhQ0JqMUNqSDdHSWFEYmM5a3FCWTNXL1JnamRhMWlxUWNPSnUyV1crNzZwWkM5UUc3TTAwZGZmZTloTm5zZXVwRkw1M3I4RjdZSFN3SldVS1AycStrN1Jkc3h5T0IxMW4weHRPdm5XNGlyTU1GTlY0SDB1cXdTNUV4c21QOUF4YkRUYzlKd2duZUFUNXZUaVVTbTFFN0JTZmxTdDNiZmExdHY4RGkzUjhuM0FmN01OV3pzNDlobWF1RTJ3UCt0dHJxK0FzV3BGRzJhd3ZzdU9xYmlwV0hndHV2dWFBRStBMVovN2dDOWhlc25yKzd3cUN3RzhjNXlBZzNBTDFmbThUOUFadHAvYmJKR3dsMXBOckU3UnVPWDdQZU1SVUVSVmFQcEVzK3lxZW9TbXVPbG9rcXc0OXBnb21qTGVoN2ljSE5sRzE5eWpzNlhYT01lZFltNXhIMll4cFYydGMwUm8yakpmeEM1MEFwdXhHb2I3bE1zeGZUYmVVdjA3VHlZeHBlTHVjRUgxZ05kNElLSDJMQWc1VGRWaGxDYWZadnBza2ZuY0NmeDhwT2hKemQ3NmJKV2VZRm5GY2l3Y1lmdWJSYzEySXAvcHBJaEExL21TWi9SeGpGRHJKQzV4aWZGakpwWTJYbDV6WGRndUZxWXlUUjF6U3AxWTlwK3RrdERZWVNOZmxjeEkwaXlPNFRQQmRsUmNwZXFqSy9waUY1YmtscTc3VlNFYUErejhxbUpURnpJV2lpdGJuelI3OTRVU0tCVWFUME5URXNWalpxTGFGVnFKb1BOOU9ERzcwSVBiZkJIS0srL3EvQVdSMHRKellIUlVMT2E0TVArVy9IZkdhZFpVYmZ3MTc3RzdqL09HYklzOFRhaEx5eW5sNFg0UmluRjc5M096K0JVMHNhWHRVSHJWQkZUL0RuQTNjdE5Qb0diczRoUklqVG9rOGkrYWxnVDFsVEhpNFN4RnZPTktOcmdRRkFxMi9nRm5XTVhnd2ZmZ1lNSnBpS1lrbVczdFRnM1pROUpxK2Y4WE4rQTVlZVVLSFd2SldKMnNnSjFTb3Ard3docUZWaWpxV2FKaHd0RDhNTmxTQmVXTk5XVGE1WjVrUFp3NStMYlZUOTl3cVRkeDI5bE1VSDRPSUcvRDg2cnVLRWF1Qmp2SDV4eTZ1bS9TZmo3ZWk2VVVWazRBSWwzTXlENE1TU1RPRmdTd3NIL1FKV2FRNWFzN1pjbWdCWmt6ampVMVVyUTc0Y2kxZ1dCQ1NHSHR1VjFIMm1oU25PM1dwLzNmRVY1YSs0d3ovLzZxeThKeGpac214eHk1KzR3OUNETkpZMDlUMDcyaUtHMEVuT1MwYXJFWWdYcVluWGNZSHdqVHRVTkFjTWVsT2Q0eHBrb3FpVFlJQ1dGcTBKU2lQZlBEUWRudCs0L3d1cWNYWTQ3UUlMYmdBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzN2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDklO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDcuNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNS41JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICNzb2xvUHJvTGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAjc29sb1Byb0xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgI3NvbG9Qcm8xIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29ycENvbnRlbnQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIENvcnBFeHBsYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImV4cGxhaW5Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImNvcnBCdXR0b25UYWdcIiA+TXVsdGktTG9jYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiY29ycEV4cGxhaW5cIj5NdWx0aXBsZSBjb252ZXJ0ZXIgYnV5ZXJzIGZyb20gc2V2ZXJhbCBwaHlzaWNhbCBsb2NhdGlvbnMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NvcnBFeHBsYWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0zNSUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjA4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNleHBsYWluQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMCUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjb3JwQnV0dG9uVGFnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAgd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNjNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcnBFeHBsYWluOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICcuL0Nsb3NlQnV0dG9uJztcclxuXHJcbmNsYXNzIFJldm9sdXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUkVWT0xVVElPTiBQTFVHUyBHTyBIRVJFXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfSBpZD1cImNsb3NlTGlua1wiPjxDbG9zZUJ1dHRvbiBpZD1cImNsb3NlXCIgLz48L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2Nsb3NlTGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbVpnTTVEY3MzWVNORkRIVW8yTEdmWnV1a1NXeVVZaXJKQWRZYkYzTWZxRUttak0rSTJFZmhBOTRpRzNMN3VLclIrR2RXRDczeWRsSUIrNmhncmVmMVFUbG1nbWJNMy9MZVg1R0kxVXgxUldwZ3hwTHVaMitJK0lqelo4d3FFNG5pbHZRZGtVZGZoekk1UURXeStrdzVXZ2cycEdwZUVWZUNDQTdiODVCTzNGOUR6eEIzY2RxdkJ6V2NtemJ5TWlxaHp1WXF0SFJWRzJ5NHgrS09sbnlxbGE4QW9XV3B1Qm9ZUnh6WHJmS3VJTGw2U2ZpV0NianhvWkpVYUNCajFDakg3R0lhRGJjOWtxQlkzVy9SZ2pkYTFpcVFjT0p1MldXKzc2cFpDOVFHN00wMGRmZmU5aE5uc2V1cEZMNTNyOEY3WUhTd0pXVUtQMnErazdSZHN4eU9CMTFuMHh0T3ZuVzRpck1NRk5WNEgwdXF3UzVFeHNtUDlBeGJEVGM5SndnbmVBVDV2VGlVU20xRTdCU2ZsU3QzYmZhMXR2OERpM1I4bjNBZjdNTld6czQ5aG1hdUUyd1ArdHRycStBc1dwRkcyYXd2c3VPcWJpcFdIZ3R1dnVhQUUrQTFaLzdnQzloZXNucis3d3FDd0c4YzV5QWczQUwxZm04VDlBWnRwL2JiSkd3bDFwTnJFN1J1T1g3UGVNUlVFUlZhUHBFcyt5cWVvU211T2xva3F3NDlwZ29takxlaDdpY0hObEcxOXlqczZYWE9NZWRZbTV4SDJZeHBWMnRjMFJvMmpKZnhDNTBBcHV4R29iN2xNc3hmVGJlVXYwN1R5WXhwZUx1Y0VIMWdOZDRJS0gyTEFnNVRkVmhsQ2FmWnZwc2tmbmNDZng4cE9oSnpkNzZiSldlWUZuRmNpd2NZZnViUmMxMklwL3BwSWhBMS9tU1ovUnhqRkRySkM1eGlmRmpKcFkyWGw1elhkZ3VGcVl5VFIxelNwMVk5cCt0a3REWVlTTmZsY3hJMGl5TzRUUEJkbFJjcGVxaksvcGlGNWJrbHE3N1ZTRWFBK3o4cW1KVEZ6SVdpaXRibnpSNzk0VVNLQlVhVDBOVEVzVmpacUxhRlZxSm9QTjlPREc3MElQYmZCSEtLKy9xL0FXUjB0SnpZSFJVTE9hNE1QK1cvSGZHYWRaVWJmdzE3N0c3ai9PR2JJczhUYWhMeXlubDRYNFJpbkY3OTNPeitCVTBzYVh0VUhyVkJGVC9EbkEzY3ROUG9HYnM0aFJJalRvazhpK2FsZ1QxbFRIaTRTeEZ2T05LTnJnUUZBcTIvZ0ZuV01YZ3dmZmdZTUpwaUtZa21XM3RUZzNaUTlKcStmOFhOK0E1ZWVVS0hXdkpXSjJzZ0oxU29wK3d3aHFGVmlqcVdhSmh3dEQ4TU5sU0JlV05OV1RhNVo1a1BadzUrTGJWVDk5d3FUZHgyOWxNVUg0T0lHL0Q4NnJ1S0VhdUJqdkg1eHk2dW0vU2ZqN2VpNlVVVms0QUlsM015RDRNU1NUT0ZnU3dzSC9RSldhUTVhczdaY21nQlprempqVTFVclE3NGNpMWdXQkNTR0h0dVYxSDJtaFNuTzNXcC8zZkVWNWErNHd6Ly82cXk4SnhqWnNteHh5NSs0dzlDRE5KWTA5VDA3MmlLRzBFbk9TMGFyRVlnWHFZblhjWUh3alR0VU5BY01lbE9kNHhwa29xaVRZSUNXRnEwSlNpUGZQRFFkbnQrNC93dXFjWFk0N1FJTGJnQUFBQUJKUlU1RXJrSmdnZz09Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAjY29ycFByb0xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01LjMlLCAxMSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgI2NvcnBQcm8xIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwJSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChudWxsKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZvbHV0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb3JwQ29udGVudDEgZnJvbSAnLi9Db3JwQ29udGVudDEnO1xyXG5pbXBvcnQgQ29ycENvbnRlbnQyIGZyb20gJy4vQ29ycENvbnRlbnQyJztcclxuaW1wb3J0IENvcnBDb250ZW50MyBmcm9tICcuL0NvcnBDb250ZW50Myc7XHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICcuL0Nsb3NlQnV0dG9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIHNsaWRlMTogXCJzbGlkZTFcIixcclxuICAgICAgICAgICAgc2xpZGUyOiBcInNsaWRlMlwiLFxyXG4gICAgICAgICAgICBzbGlkZTM6IFwic2xpZGUzXCIsXHJcbiAgICAgICAgICAgIHNsaWRlQ2xhc3M6IFwic2xpZGUxXCIsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNsaWRlTGVmdCA9IHRoaXMuc2xpZGVMZWZ0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZVJpZ2h0ID0gdGhpcy5zbGlkZVJpZ2h0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBzbGlkZVJpZ2h0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMiB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTMgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUxIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNsaWRlTGVmdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMSkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUzIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMiB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTEgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93ID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2xpZGVDbGFzc30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29ycENvbnRlbnQxIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3JwQ29udGVudDIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcnBDb250ZW50MyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImdvTGVmdFwiIG9uQ2xpY2s9e3RoaXMuc2xpZGVSaWdodH0+PGkgY2xhc3NOYW1lPVwiQ2hldnJvbkxlZnRcIiBpZD1cImxlZnRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZ29SaWdodFwiIG9uQ2xpY2s9e3RoaXMuc2xpZGVMZWZ0fT48aSBjbGFzc05hbWU9XCJDaGV2cm9uUmlnaHRcIiBpZD1cInJpZ2h0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfSBpZD1cImNsb3NlTGlua1wiPjxDbG9zZUJ1dHRvbiBpZD1cImNsb3NlXCIgLz48L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MzVweCBzb2xpZCB0cmFuc3BhcmVudDsgLyphZGp1c3Qgc2l6ZSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypDaGFuZ2UgdGhlIGZvdXIgaW5zdGFuY2VzIG9mICd0b3AnIGJlbG93IHRvIHJvdGF0ZSAodG9wL3JpZ2h0L2JvdHRvbS9sZWZ0KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojYjAwOyAvKkNoZXZyb24gQ29sb3IqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOi0xMHB4OyAvKmFkanVzdCB0aGlja25lc3MqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojZmZmOyAvKk1hdGNoIGJhY2tncm91bmQgY29sb3VyKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MzVweCBzb2xpZCB0cmFuc3BhcmVudDsgLyphZGp1c3Qgc2l6ZSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypDaGFuZ2UgdGhlIGZvdXIgaW5zdGFuY2VzIG9mICd0b3AnIGJlbG93IHRvIHJvdGF0ZSAodG9wL3JpZ2h0L2JvdHRvbS9sZWZ0KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2IwMDsgLypDaGV2cm9uIENvbG9yKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6LTEwcHg7IC8qYWRqdXN0IHRoaWNrbmVzcyovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNmZmY7IC8qTWF0Y2ggYmFja2dyb3VuZCBjb2xvdXIqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2xvc2VMaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDYlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b246Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNnb0xlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNS41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2dvUmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTt9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU21hbGxDb250ZW50MSBmcm9tICcuL1NtYWxsQ29udGVudDEnO1xyXG5pbXBvcnQgU21hbGxDb250ZW50MiBmcm9tICcuL1NtYWxsQ29udGVudDInO1xyXG5pbXBvcnQgU21hbGxDb250ZW50MyBmcm9tICcuL1NtYWxsQ29udGVudDMnO1xyXG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnLi9DbG9zZUJ1dHRvbic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgc2xpZGUxOiBcInNsaWRlMVwiLFxyXG4gICAgICAgICAgICBzbGlkZTI6IFwic2xpZGUyXCIsXHJcbiAgICAgICAgICAgIHNsaWRlMzogXCJzbGlkZTNcIixcclxuICAgICAgICAgICAgc2xpZGVDbGFzczogXCJzbGlkZTFcIixcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVMZWZ0ID0gdGhpcy5zbGlkZUxlZnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNsaWRlUmlnaHQgPSB0aGlzLnNsaWRlUmlnaHQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHNsaWRlUmlnaHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUyIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMyB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTEgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVMZWZ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUxKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTMgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUyIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zbGlkZUNsYXNzfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbENvbnRlbnQxIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbENvbnRlbnQyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbENvbnRlbnQzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZ29MZWZ0XCIgb25DbGljaz17dGhpcy5zbGlkZVJpZ2h0fT48aSBjbGFzc05hbWU9XCJDaGV2cm9uTGVmdFwiIGlkPVwibGVmdFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJnb1JpZ2h0XCIgb25DbGljaz17dGhpcy5zbGlkZUxlZnR9PjxpIGNsYXNzTmFtZT1cIkNoZXZyb25SaWdodFwiIGlkPVwicmlnaHRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xvc2V9IGlkPVwiY2xvc2VMaW5rXCI+PENsb3NlQnV0dG9uIGlkPVwiY2xvc2VcIiAvPjwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNsZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNyaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjozNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAvKmFkanVzdCBzaXplKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKkNoYW5nZSB0aGUgZm91ciBpbnN0YW5jZXMgb2YgJ3RvcCcgYmVsb3cgdG8gcm90YXRlICh0b3AvcmlnaHQvYm90dG9tL2xlZnQpKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNiMDA7IC8qQ2hldnJvbiBDb2xvciovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6LTEwcHg7IC8qYWRqdXN0IHRoaWNrbmVzcyovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNmZmY7IC8qTWF0Y2ggYmFja2dyb3VuZCBjb2xvdXIqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjozNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAvKmFkanVzdCBzaXplKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKkNoYW5nZSB0aGUgZm91ciBpbnN0YW5jZXMgb2YgJ3RvcCcgYmVsb3cgdG8gcm90YXRlICh0b3AvcmlnaHQvYm90dG9tL2xlZnQpKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojYjAwOyAvKkNoZXZyb24gQ29sb3IqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDotMTBweDsgLyphZGp1c3QgdGhpY2tuZXNzKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2ZmZjsgLypNYXRjaCBiYWNrZ3JvdW5kIGNvbG91ciovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjbG9zZUxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2dvTGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1LjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjZ29SaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNS41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJ2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZTEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO30gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTb2xvQ29udGVudDEgZnJvbSAnLi9Tb2xvQ29udGVudDEnO1xyXG5pbXBvcnQgU29sb0NvbnRlbnQyIGZyb20gJy4vU29sb0NvbnRlbnQyJztcclxuaW1wb3J0IFNvbG9Db250ZW50MyBmcm9tICcuL1NvbG9Db250ZW50Myc7XHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICcuL0Nsb3NlQnV0dG9uJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJTb2xvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgc2xpZGUxOiBcInNsaWRlMVwiLFxyXG4gICAgICAgICAgICBzbGlkZTI6IFwic2xpZGUyXCIsXHJcbiAgICAgICAgICAgIHNsaWRlMzogXCJzbGlkZTNcIixcclxuICAgICAgICAgICAgc2xpZGVDbGFzczogXCJzbGlkZTFcIixcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVMZWZ0ID0gdGhpcy5zbGlkZUxlZnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNsaWRlUmlnaHQgPSB0aGlzLnNsaWRlUmlnaHQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHNsaWRlUmlnaHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUyIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMyB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5zbGlkZUNsYXNzID09PSB0aGlzLnN0YXRlLnNsaWRlMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTEgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVMZWZ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUxKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbGlkZUNsYXNzIDogdGhpcy5zdGF0ZS5zbGlkZTMgfSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUuc2xpZGVDbGFzcyA9PT0gdGhpcy5zdGF0ZS5zbGlkZTMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVDbGFzcyA6IHRoaXMuc3RhdGUuc2xpZGUyIH0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlLnNsaWRlQ2xhc3MgPT09IHRoaXMuc3RhdGUuc2xpZGUyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlQ2xhc3MgOiB0aGlzLnN0YXRlLnNsaWRlMSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3cgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zbGlkZUNsYXNzfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTb2xvQ29udGVudDEgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNvbG9Db250ZW50MiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8U29sb0NvbnRlbnQzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImdvTGVmdFwiIG9uQ2xpY2s9e3RoaXMuc2xpZGVSaWdodH0+PGkgY2xhc3NOYW1lPVwiQ2hldnJvbkxlZnRcIiBpZD1cImxlZnRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZ29SaWdodFwiIG9uQ2xpY2s9e3RoaXMuc2xpZGVMZWZ0fT48aSBjbGFzc05hbWU9XCJDaGV2cm9uUmlnaHRcIiBpZD1cInJpZ2h0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfSBpZD1cImNsb3NlTGlua1wiPjxDbG9zZUJ1dHRvbiBpZD1cImNsb3NlXCIgLz48L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvbkxlZnQ6OmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25MZWZ0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MzVweCBzb2xpZCB0cmFuc3BhcmVudDsgLyphZGp1c3Qgc2l6ZSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypDaGFuZ2UgdGhlIGZvdXIgaW5zdGFuY2VzIG9mICd0b3AnIGJlbG93IHRvIHJvdGF0ZSAodG9wL3JpZ2h0L2JvdHRvbS9sZWZ0KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojYjAwOyAvKkNoZXZyb24gQ29sb3IqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uTGVmdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOi0xMHB4OyAvKmFkanVzdCB0aGlja25lc3MqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjojZmZmOyAvKk1hdGNoIGJhY2tncm91bmQgY29sb3VyKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkNoZXZyb25SaWdodDo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MzVweCBzb2xpZCB0cmFuc3BhcmVudDsgLyphZGp1c3Qgc2l6ZSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypDaGFuZ2UgdGhlIGZvdXIgaW5zdGFuY2VzIG9mICd0b3AnIGJlbG93IHRvIHJvdGF0ZSAodG9wL3JpZ2h0L2JvdHRvbS9sZWZ0KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DaGV2cm9uUmlnaHQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2IwMDsgLypDaGV2cm9uIENvbG9yKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ2hldnJvblJpZ2h0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6LTEwcHg7IC8qYWRqdXN0IHRoaWNrbmVzcyovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiNmZmY7IC8qTWF0Y2ggYmFja2dyb3VuZCBjb2xvdXIqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2xvc2VMaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDYlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b246Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNnb0xlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNS41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2dvUmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTt9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU21hbGxJbWFnZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2NyZXctZmlndXJlLnBuZyc7XHJcbmltcG9ydCBTbWFsbEV4cGxhaW4gZnJvbSAnLi9TbWFsbEV4cGxhaW4nO1xyXG5cclxuY2xhc3MgU21hbGxCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbWFsbEJ1dHRvbkltYWdlXCIgc3JjPXtTbWFsbEltYWdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic21hbGxCdXR0b25UYWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U21hbGxFeHBsYWluIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLDAlLDkwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgaHNsYSgwLDAlLDE1JSwgIDEpIDAgIDBweCAwcHggNHB4LCAvKiBib3JkZXIgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDAsMCUsMTUlLCAuOCkgMCAtMXB4IDVweCA0cHgsIC8qIHNvZnQgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDAsMCUsMCUsIC4yNSkgMCAtMXB4IDBweCA3cHgsIC8qIGJvdHRvbSBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwxMDAlLC43KSAwICAycHggMXB4IDdweCwgLyogdG9wIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgwLDAlLCAwJSwuMTUpIDAgLTVweCA2cHggNHB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMCwwJSwxMDAlLC41KSAwICA1cHggNnB4IDRweDsgLyogb3V0ZXIgSEwgKi8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycztcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEJydXNoZWQgTWV0YWwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTV2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAgIDAlLCAgOCUgNTAlLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlIDEwMCUsIDEyJSA1MCUsIGhzbGEoMCwwJSwxMDAlLC42KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICAgMCUgIDUwJSwgNTAlICA3JSwgaHNsYSgwLDAlLDEwMCUsLjUpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggMTAwJSAgNTAlLCA1MCUgIDUlLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMTAwJSAxMDAlLCBoc2xhKDAsMCUsICAwJSwwKSAwJSwgaHNsYSgwLDAlLCAgMCUsMCkgICAzJSwgaHNsYSgwLDAlLCAgMCUsLjEpIDMuNSUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMTAwJSAxMDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgICA2JSwgaHNsYSgwLDAlLDEwMCUsLjEpIDcuNSUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCggNTAlIDUwJSwgMTAwJSAxMDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMS4yJSwgaHNsYSgwLDAlLDEwMCUsLjIpIDIuMiUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAyMDAlIDUwJSwgaHNsYSgwLDAlLDkwJSwxKSA1JSwgaHNsYSgwLDAlLDg1JSwxKSAzMCUsIGhzbGEoMCwwJSw2MCUsMSkgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTpiZWZvcmUsICNjaXJjbGU6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZmFrZSBjb25pY2FsIGdyYWRpZW50cyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgICAwJSwgMTAlIDUwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlIDEwMCUsIDEwJSA1MCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggICAwJSAgNTAlLCA1MCUgMTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDEwMCUgIDUwJSwgNTAlIDA2JSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmJlZm9yZSB7IHRyYW5zZm9ybTogcm90YXRlKCA2NWRlZyk7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NpcmNsZTphZnRlciB7IHRyYW5zZm9ybTogcm90YXRlKC02NWRlZyk7IH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbCgyMTAsIDEwMCUsIDQwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBoc2xhKDIxMCwxMDAlLDIwJSwuMykgMCAtMXB4IDAsIGhzbCgyMTAsMTAwJSw4NSUpIDAgMnB4IDFweCwgaHNsYSgyMDAsMTAwJSw4MCUsMSkgMCAwIDVweCwgaHNsYSgyMTAsMTAwJSw1MCUsLjYpIDAgMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDMwJSwgIDEpIDAgIDBweCAwcHggNHB4LCAvKiBib3JkZXIgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDE1JSwgLjQpIDAgLTFweCA1cHggNHB4LCAvKiBzb2Z0IFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwyMCUsLjI1KSAwIC0xcHggMHB4IDdweCwgLyogYm90dG9tIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgyMTAsMTAwJSwxMDAlLC43KSAwICAycHggMXB4IDdweCwgLyogdG9wIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsMTAwJSw3NSUsIC44KSAwICAwcHggM3B4IDJweCwgLyogb3V0ZXIgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCw1MCUsNDAlLCAuMjUpIDAgLTVweCA2cHggNHB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDgwJSw5NSUsICAgMSkgMCAgNXB4IDZweCA0cHg7IC8qIG91dGVyIEhMICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogRW5kIEJydXNoZWQgTWV0YWwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiAjYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2ICNidXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjc21hbGxCdXR0b25UYWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE0NSUsIC05NSUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc21hbGxCdXR0b25JbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAzMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbWFsbEJ1dHRvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgU21hbGxDb250ZW50MSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwic29sb1Byb0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJzb2xvUHJvMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic29sb1BybzFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInNvbG9Qcm8xXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFVVkJNVkVXRmhZV0RnNE4zZDNkdGJXMTdlM3QxZFhXQmdZR0hoNGQ1ZVhsemMzT0xpNHVibTV1VmxaV1BqNCtOalkxOWZYMkppWWwvZjM5cmEydVJrWkdabVpscGFXbVhsNWR2YjI5eGNYR1RrNU5uWjJjOFRWMW1BQUFBRzNSU1RsTkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQXZFT3d0QUFBRlZrbEVRVlI0WHBXV0I2N2MyQlVGYjNnNTU3VC9oUm85L1dVTVpIbGdyNEJnOFo0cVFnUUpsSEk0QThTekZWcmFwdm1URjlPN2RtWVJGWjYwWWlCaEpSQ2doMUZZaGlMQW1kdlgwQ3pUT3BORTc3TUUwWnR5L25XV3pjaER0aXFybVFEZXV2M3Bvd1E1dGEyZU4wRlkwSW5rcURENzNsVDljOWxFendVTnFnRkhzOVZRY2UzVFZDbEZDUXJTVGZPaVlrVkpRQm1wYnEyTDZpWmF2UG5BUGNvVTBkU3cwU1VUcXovR3RyR3VYZmJ5eUJuaUt5a09XUVdHcXd3TUE3UWlZQXhpK0lsUGRxbytoWUhuVXQ1WlBmbnNISnlOaUR0bnBKeWF5TkJrRjZjV29ZR0FNWTkyVTJoWEhGL0MxTTh1UC9adFlkaXVqMjZVZEFkUVFTWFFFcndTT016dC9YV1JXQXo1R3VTQklrd0cxSDNGYWJKMk9zVU9VaEdDNnRLNEVNdEpPMHR0QzZJQkQza00wdmUwdEp3TWRTZmpabytFRUlTYWVUcjlQM3dZckdqWHF5QzFrcmNLZGhNcHhFbnQ1SmV0b3Vsc2NweXpoWE41RlJwdVBIdmJlUWFLeEZBRUI2RU4rY1lONnhEN1JZR3BYcE5uZE1tWmdNNURjczNZU05GREhVbzJMR2ZadXVrU1d5VVlpckpBZFliRjNNZnFFS21qTStJMkVmaEE5NGlHM0w3dUtyUitHZFdENzN5ZGxJQis2aGdyZWYxUVRsbWdtYk0zL0xlWDVHSTFVeDFSV3BneHBMdVoyK0krSWp6Wjh3cUU0bmlsdlFka1VkZmh6STVRRFd5K2t3NVdnZzJwR3BlRVZlQ0NBN2I4NUJPM0Y5RHp4QjNjZHF2QnpXY216YnlNaXFoenVZcXRIUlZHMnk0eCtLT2xueXFsYThBb1dXcHVCb1lSeHpYcmZLdUlMbDZTZmlXQ2JqeG9aSlVhQ0JqMUNqSDdHSWFEYmM5a3FCWTNXL1JnamRhMWlxUWNPSnUyV1crNzZwWkM5UUc3TTAwZGZmZTloTm5zZXVwRkw1M3I4RjdZSFN3SldVS1AycStrN1Jkc3h5T0IxMW4weHRPdm5XNGlyTU1GTlY0SDB1cXdTNUV4c21QOUF4YkRUYzlKd2duZUFUNXZUaVVTbTFFN0JTZmxTdDNiZmExdHY4RGkzUjhuM0FmN01OV3pzNDlobWF1RTJ3UCt0dHJxK0FzV3BGRzJhd3ZzdU9xYmlwV0hndHV2dWFBRStBMVovN2dDOWhlc25yKzd3cUN3RzhjNXlBZzNBTDFmbThUOUFadHAvYmJKR3dsMXBOckU3UnVPWDdQZU1SVUVSVmFQcEVzK3lxZW9TbXVPbG9rcXc0OXBnb21qTGVoN2ljSE5sRzE5eWpzNlhYT01lZFltNXhIMll4cFYydGMwUm8yakpmeEM1MEFwdXhHb2I3bE1zeGZUYmVVdjA3VHlZeHBlTHVjRUgxZ05kNElLSDJMQWc1VGRWaGxDYWZadnBza2ZuY0NmeDhwT2hKemQ3NmJKV2VZRm5GY2l3Y1lmdWJSYzEySXAvcHBJaEExL21TWi9SeGpGRHJKQzV4aWZGakpwWTJYbDV6WGRndUZxWXlUUjF6U3AxWTlwK3RrdERZWVNOZmxjeEkwaXlPNFRQQmRsUmNwZXFqSy9waUY1YmtscTc3VlNFYUErejhxbUpURnpJV2lpdGJuelI3OTRVU0tCVWFUME5URXNWalpxTGFGVnFKb1BOOU9ERzcwSVBiZkJIS0srL3EvQVdSMHRKellIUlVMT2E0TVArVy9IZkdhZFpVYmZ3MTc3RzdqL09HYklzOFRhaEx5eW5sNFg0UmluRjc5M096K0JVMHNhWHRVSHJWQkZUL0RuQTNjdE5Qb0diczRoUklqVG9rOGkrYWxnVDFsVEhpNFN4RnZPTktOcmdRRkFxMi9nRm5XTVhnd2ZmZ1lNSnBpS1lrbVczdFRnM1pROUpxK2Y4WE4rQTVlZVVLSFd2SldKMnNnSjFTb3Ard3docUZWaWpxV2FKaHd0RDhNTmxTQmVXTk5XVGE1WjVrUFp3NStMYlZUOTl3cVRkeDI5bE1VSDRPSUcvRDg2cnVLRWF1Qmp2SDV4eTZ1bS9TZmo3ZWk2VVVWazRBSWwzTXlENE1TU1RPRmdTd3NIL1FKV2FRNWFzN1pjbWdCWmt6ampVMVVyUTc0Y2kxZ1dCQ1NHSHR1VjFIMm1oU25PM1dwLzNmRVY1YSs0d3ovLzZxeThKeGpac214eHk1KzR3OUNETkpZMDlUMDcyaUtHMEVuT1MwYXJFWWdYcVluWGNZSHdqVHRVTkFjTWVsT2Q0eHBrb3FpVFlJQ1dGcTBKU2lQZlBEUWRudCs0L3d1cWNYWTQ3UUlMYmdBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDczdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA5JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA3LjUlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUuNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAjc29sb1Byb0xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NvbG9Qcm9MaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICNzb2xvUHJvMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbik7XHJcbn1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNtYWxsQ29udGVudDE7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFNtYWxsQ29udGVudDIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJzb2xvUHJvTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInNvbG9Qcm8xXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJzb2xvUHJvMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic29sb1BybzFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FNQUFBQXA0WGlEQUFBQVVWQk1WRVdGaFlXRGc0TjNkM2R0YlcxN2UzdDFkWFdCZ1lHSGg0ZDVlWGx6YzNPTGk0dWJtNXVWbFpXUGo0K05qWTE5ZlgySmlZbC9mMzlyYTJ1UmtaR1ptWmxwYVdtWGw1ZHZiMjl4Y1hHVGs1Tm5aMmM4VFYxbUFBQUFHM1JTVGxOQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVBdkVPd3RBQUFGVmtsRVFWUjRYcFdXQjY3YzJCVUZiM2c1NTdUL2hSbzkvV1VNWkhsZ3I0Qmc4WjRxUWdRSmxISTRBOFN6RlZyYXB2bVRGOU83ZG1ZUkZaNjBZaUJoSlJDZ2gxRlloaUxBbWR2WDBDelRPcE5FNzdNRTBadHkvbldXemNoRHRpcXJtUURldXYzcG93UTV0YTJlTjBGWTBJbmtxREQ3M2xUOWM5bEV6d1VOcWdGSHM5VlFjZTNUVkNsRkNRclNUZk9pWWtWSlFCbXBicTJMNmlaYXZQbkFQY29VMGRTdzBTVVRxei9HdHJHdVhmYnl5Qm5pS3lrT1dRV0dxd3dNQTdRaVlBeGkrSWxQZHFvK2hZSG5VdDVaUGZuc0hKeU5pRHRucEp5YXlOQmtGNmNXb1lHQU1ZOTJVMmhYSEYvQzFNOHVQL1p0WWRpdWoyNlVkQWRRUVNYUUVyd1NPTXp0L1hXUldBejVHdVNCSWt3RzFIM0ZhYkoyT3NVT1VoR0M2dEs0RU10Sk8wdHRDNklCRDNrTTB2ZTB0SndNZFNmalpvK0VFSVNhZVRyOVAzd1lyR2pYcXlDMWtyY0tkaE1weEVudDVKZXRvdWxzY3B5emhYTjVGUnB1UEh2YmVRYUt4RkFFQjZFTitjWU42eEQ3UllHcFhwTm5kTW1aZ001RGNzM1lTTkZESFVvMkxHZlp1dWtTV3lVWWlySkFkWWJGM01mcUVLbWpNK0kyRWZoQTk0aUczTDd1S3JSK0dkV0Q3M3lkbElCKzZoZ3JlZjFRVGxtZ21iTTMvTGVYNUdJMVV4MVJXcGd4cEx1WjIrSStJanpaOHdxRTRuaWx2UWRrVWRmaHpJNVFEV3kra3c1V2dnMnBHcGVFVmVDQ0E3Yjg1Qk8zRjlEenhCM2NkcXZCeldjbXpieU1pcWh6dVlxdEhSVkcyeTR4K0tPbG55cWxhOEFvV1dwdUJvWVJ4elhyZkt1SUxsNlNmaVdDYmp4b1pKVWFDQmoxQ2pIN0dJYURiYzlrcUJZM1cvUmdqZGExaXFRY09KdTJXVys3NnBaQzlRRzdNMDBkZmZlOWhObnNldXBGTDUzcjhGN1lIU3dKV1VLUDJxK2s3UmRzeHlPQjExbjB4dE92blc0aXJNTUZOVjRIMHVxd1M1RXhzbVA5QXhiRFRjOUp3Z25lQVQ1dlRpVVNtMUU3QlNmbFN0M2JmYTF0djhEaTNSOG4zQWY3TU5XenM0OWhtYXVFMndQK3R0cnErQXNXcEZHMmF3dnN1T3FiaXBXSGd0dXZ1YUFFK0ExWi83Z0M5aGVzbnIrN3dxQ3dHOGM1eUFnM0FMMWZtOFQ5QVp0cC9iYkpHd2wxcE5yRTdSdU9YN1BlTVJVRVJWYVBwRXMreXFlb1NtdU9sb2txdzQ5cGdvbWpMZWg3aWNITmxHMTl5anM2WFhPTWVkWW01eEgyWXhwVjJ0YzBSbzJqSmZ4QzUwQXB1eEdvYjdsTXN4ZlRiZVV2MDdUeVl4cGVMdWNFSDFnTmQ0SUtIMkxBZzVUZFZobENhZlp2cHNrZm5jQ2Z4OHBPaEp6ZDc2YkpXZVlGbkZjaXdjWWZ1YlJjMTJJcC9wcEloQTEvbVNaL1J4akZEckpDNXhpZkZqSnBZMlhsNXpYZGd1RnFZeVRSMXpTcDFZOXArdGt0RFlZU05mbGN4STBpeU80VFBCZGxSY3BlcWpLL3BpRjVia2xxNzdWU0VhQSt6OHFtSlRGeklXaWl0Ym56Ujc5NFVTS0JVYVQwTlRFc1ZqWnFMYUZWcUpvUE45T0RHNzBJUGJmQkhLSysvcS9BV1IwdEp6WUhSVUxPYTRNUCtXL0hmR2FkWlViZncxNzdHN2ovT0diSXM4VGFoTHl5bmw0WDRSaW5GNzkzT3orQlUwc2FYdFVIclZCRlQvRG5BM2N0TlBvR2JzNGhSSWpUb2s4aSthbGdUMWxUSGk0U3hGdk9OS05yZ1FGQXEyL2dGbldNWGd3ZmZnWU1KcGlLWWttVzN0VGczWlE5SnErZjhYTitBNWVlVUtIV3ZKV0oyc2dKMVNvcCt3d2hxRlZpanFXYUpod3REOE1ObFNCZVdOTldUYTVaNWtQWnc1K0xiVlQ5OXdxVGR4MjlsTVVINE9JRy9EODZydUtFYXVCanZINXh5NnVtL1NmajdlaTZVVVZrNEFJbDNNeUQ0TVNTVE9GZ1N3c0gvUUpXYVE1YXM3WmNtZ0Jaa3pqalUxVXJRNzRjaTFnV0JDU0dIdHVWMUgybWhTbk8zV3AvM2ZFVjVhKzR3ei8vNnF5OEp4alpzbXh4eTUrNHc5Q0ROSlkwOVQwNzJpS0cwRW5PUzBhckVZZ1hxWW5YY1lId2pUdFVOQWNNZWxPZDR4cGtvcWlUWUlDV0ZxMEpTaVBmUERRZG50KzQvd3VxY1hZNDdRSUxiZ0FBQUFCSlJVNUVya0pnZ2c9PScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3M3ZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogOSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNy41JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1LjUlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgI3NvbG9Qcm9MaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNzb2xvUHJvTGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAjc29sb1BybzEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbWFsbENvbnRlbnQyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTbWFsbENvbnRlbnQzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwic29sb1Byb0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJzb2xvUHJvMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic29sb1BybzFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInNvbG9Qcm8xXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFVVkJNVkVXRmhZV0RnNE4zZDNkdGJXMTdlM3QxZFhXQmdZR0hoNGQ1ZVhsemMzT0xpNHVibTV1VmxaV1BqNCtOalkxOWZYMkppWWwvZjM5cmEydVJrWkdabVpscGFXbVhsNWR2YjI5eGNYR1RrNU5uWjJjOFRWMW1BQUFBRzNSU1RsTkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQXZFT3d0QUFBRlZrbEVRVlI0WHBXV0I2N2MyQlVGYjNnNTU3VC9oUm85L1dVTVpIbGdyNEJnOFo0cVFnUUpsSEk0QThTekZWcmFwdm1URjlPN2RtWVJGWjYwWWlCaEpSQ2doMUZZaGlMQW1kdlgwQ3pUT3BORTc3TUUwWnR5L25XV3pjaER0aXFybVFEZXV2M3Bvd1E1dGEyZU4wRlkwSW5rcURENzNsVDljOWxFendVTnFnRkhzOVZRY2UzVFZDbEZDUXJTVGZPaVlrVkpRQm1wYnEyTDZpWmF2UG5BUGNvVTBkU3cwU1VUcXovR3RyR3VYZmJ5eUJuaUt5a09XUVdHcXd3TUE3UWlZQXhpK0lsUGRxbytoWUhuVXQ1WlBmbnNISnlOaUR0bnBKeWF5TkJrRjZjV29ZR0FNWTkyVTJoWEhGL0MxTTh1UC9adFlkaXVqMjZVZEFkUVFTWFFFcndTT016dC9YV1JXQXo1R3VTQklrd0cxSDNGYWJKMk9zVU9VaEdDNnRLNEVNdEpPMHR0QzZJQkQza00wdmUwdEp3TWRTZmpabytFRUlTYWVUcjlQM3dZckdqWHF5QzFrcmNLZGhNcHhFbnQ1SmV0b3Vsc2NweXpoWE41RlJwdVBIdmJlUWFLeEZBRUI2RU4rY1lONnhEN1JZR3BYcE5uZE1tWmdNNURjczNZU05GREhVbzJMR2ZadXVrU1d5VVlpckpBZFliRjNNZnFFS21qTStJMkVmaEE5NGlHM0w3dUtyUitHZFdENzN5ZGxJQis2aGdyZWYxUVRsbWdtYk0zL0xlWDVHSTFVeDFSV3BneHBMdVoyK0krSWp6Wjh3cUU0bmlsdlFka1VkZmh6STVRRFd5K2t3NVdnZzJwR3BlRVZlQ0NBN2I4NUJPM0Y5RHp4QjNjZHF2QnpXY216YnlNaXFoenVZcXRIUlZHMnk0eCtLT2xueXFsYThBb1dXcHVCb1lSeHpYcmZLdUlMbDZTZmlXQ2JqeG9aSlVhQ0JqMUNqSDdHSWFEYmM5a3FCWTNXL1JnamRhMWlxUWNPSnUyV1crNzZwWkM5UUc3TTAwZGZmZTloTm5zZXVwRkw1M3I4RjdZSFN3SldVS1AycStrN1Jkc3h5T0IxMW4weHRPdm5XNGlyTU1GTlY0SDB1cXdTNUV4c21QOUF4YkRUYzlKd2duZUFUNXZUaVVTbTFFN0JTZmxTdDNiZmExdHY4RGkzUjhuM0FmN01OV3pzNDlobWF1RTJ3UCt0dHJxK0FzV3BGRzJhd3ZzdU9xYmlwV0hndHV2dWFBRStBMVovN2dDOWhlc25yKzd3cUN3RzhjNXlBZzNBTDFmbThUOUFadHAvYmJKR3dsMXBOckU3UnVPWDdQZU1SVUVSVmFQcEVzK3lxZW9TbXVPbG9rcXc0OXBnb21qTGVoN2ljSE5sRzE5eWpzNlhYT01lZFltNXhIMll4cFYydGMwUm8yakpmeEM1MEFwdXhHb2I3bE1zeGZUYmVVdjA3VHlZeHBlTHVjRUgxZ05kNElLSDJMQWc1VGRWaGxDYWZadnBza2ZuY0NmeDhwT2hKemQ3NmJKV2VZRm5GY2l3Y1lmdWJSYzEySXAvcHBJaEExL21TWi9SeGpGRHJKQzV4aWZGakpwWTJYbDV6WGRndUZxWXlUUjF6U3AxWTlwK3RrdERZWVNOZmxjeEkwaXlPNFRQQmRsUmNwZXFqSy9waUY1YmtscTc3VlNFYUErejhxbUpURnpJV2lpdGJuelI3OTRVU0tCVWFUME5URXNWalpxTGFGVnFKb1BOOU9ERzcwSVBiZkJIS0srL3EvQVdSMHRKellIUlVMT2E0TVArVy9IZkdhZFpVYmZ3MTc3RzdqL09HYklzOFRhaEx5eW5sNFg0UmluRjc5M096K0JVMHNhWHRVSHJWQkZUL0RuQTNjdE5Qb0diczRoUklqVG9rOGkrYWxnVDFsVEhpNFN4RnZPTktOcmdRRkFxMi9nRm5XTVhnd2ZmZ1lNSnBpS1lrbVczdFRnM1pROUpxK2Y4WE4rQTVlZVVLSFd2SldKMnNnSjFTb3Ard3docUZWaWpxV2FKaHd0RDhNTmxTQmVXTk5XVGE1WjVrUFp3NStMYlZUOTl3cVRkeDI5bE1VSDRPSUcvRDg2cnVLRWF1Qmp2SDV4eTZ1bS9TZmo3ZWk2VVVWazRBSWwzTXlENE1TU1RPRmdTd3NIL1FKV2FRNWFzN1pjbWdCWmt6ampVMVVyUTc0Y2kxZ1dCQ1NHSHR1VjFIMm1oU25PM1dwLzNmRVY1YSs0d3ovLzZxeThKeGpac214eHk1KzR3OUNETkpZMDlUMDcyaUtHMEVuT1MwYXJFWWdYcVluWGNZSHdqVHRVTkFjTWVsT2Q0eHBrb3FpVFlJQ1dGcTBKU2lQZlBEUWRudCs0L3d1cWNYWTQ3UUlMYmdBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzN2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDklO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDcuNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNS41JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICNzb2xvUHJvTGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAjc29sb1Byb0xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgI3NvbG9Qcm8xIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU21hbGxDb250ZW50MzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgU21hbGxFeHBsYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImV4cGxhaW5Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInNtYWxsQnV0dG9uVGFnXCI+TXVsdGktVXNlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJzbWFsbEV4cGxhaW5cIj5NdWx0aXBsZSBjb252ZXJ0ZXIgYnV5ZXJzIGZyb20gYSBzaW5nbGUgcGh5c2ljYWwgbG9jYXRpb24uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NtYWxsRXhwbGFpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMzUlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwOHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZXhwbGFpbkNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNzbWFsbEJ1dHRvblRhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU21hbGxFeHBsYWluOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTb2xvRXhwbGFpbiBmcm9tICcuL1NvbG9FeHBsYWluJztcclxuaW1wb3J0IFNpbmdsZUZpZ3VyZSBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL3NpbmdsZS1maWd1cmUucG5nJztcclxuXHJcblxyXG5jbGFzcyBTb2xvQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzb2xvQnV0dG9uSW1hZ2VcIiBzcmM9e1NpbmdsZUZpZ3VyZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzb2xvQnV0dG9uVGFnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U29sb0V4cGxhaW4gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGUge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsMCUsOTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCBoc2xhKDAsMCUsMTUlLCAgMSkgMCAgMHB4IDBweCA0cHgsIC8qIGJvcmRlciAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwxNSUsIC44KSAwIC0xcHggNXB4IDRweCwgLyogc29mdCBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMCwwJSwwJSwgLjI1KSAwIC0xcHggMHB4IDdweCwgLyogYm90dG9tIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgaHNsYSgwLDAlLDEwMCUsLjcpIDAgIDJweCAxcHggN3B4LCAvKiB0b3AgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDAsMCUsIDAlLC4xNSkgMCAtNXB4IDZweCA0cHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgwLDAlLDEwMCUsLjUpIDAgIDVweCA2cHggNHB4OyAvKiBvdXRlciBITCAqLyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogQnJ1c2hlZCBNZXRhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgNTAlICAgMCUsICA4JSA1MCUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgMTAwJSwgMTIlIDUwJSwgaHNsYSgwLDAlLDEwMCUsLjYpIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxMDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggICAwJSAgNTAlLCA1MCUgIDclLCBoc2xhKDAsMCUsMTAwJSwuNSkgMCUsIGhzbGEoMCwwJSwxMDAlLDApIDEwMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAxMDAlICA1MCUsIDUwJSAgNSUsIGhzbGEoMCwwJSwxMDAlLC41KSAwJSwgaHNsYSgwLDAlLDEwMCUsMCkgMTAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwgIDAlLDApIDAlLCBoc2xhKDAsMCUsICAwJSwwKSAgIDMlLCBoc2xhKDAsMCUsICAwJSwuMSkgMy41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAgIDYlLCBoc2xhKDAsMCUsMTAwJSwuMSkgNy41JSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KCA1MCUgNTAlLCAxMDAlIDEwMCUsIGhzbGEoMCwwJSwxMDAlLDApIDAlLCBoc2xhKDAsMCUsMTAwJSwwKSAxLjIlLCBoc2xhKDAsMCUsMTAwJSwuMikgMi4yJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDUwJSA1MCUsIDIwMCUgNTAlLCBoc2xhKDAsMCUsOTAlLDEpIDUlLCBoc2xhKDAsMCUsODUlLDEpIDMwJSwgaHNsYSgwLDAlLDYwJSwxKSAxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmJlZm9yZSwgI2NpcmNsZTphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBmYWtlIGNvbmljYWwgZ3JhZGllbnRzICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggIDUwJSAgIDAlLCAxMCUgNTAlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoICA1MCUgMTAwJSwgMTAlIDUwJSwgaHNsYSgwLDAlLDAlLC4xKSAwJSwgaHNsYSgwLDAlLDAlLDApIDAlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCAgIDAlICA1MCUsIDUwJSAxMCUsIGhzbGEoMCwwJSwwJSwuMSkgMCUsIGhzbGEoMCwwJSwwJSwwKSAwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggMTAwJSAgNTAlLCA1MCUgMDYlLCBoc2xhKDAsMCUsMCUsLjEpIDAlLCBoc2xhKDAsMCUsMCUsMCkgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YmVmb3JlIHsgdHJhbnNmb3JtOiByb3RhdGUoIDY1ZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2lyY2xlOmFmdGVyIHsgdHJhbnNmb3JtOiByb3RhdGUoLTY1ZGVnKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjaXJjbGU6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsKDIxMCwgMTAwJSwgNDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IGhzbGEoMjEwLDEwMCUsMjAlLC4zKSAwIC0xcHggMCwgaHNsKDIxMCwxMDAlLDg1JSkgMCAycHggMXB4LCBoc2xhKDIwMCwxMDAlLDgwJSwxKSAwIDAgNXB4LCBoc2xhKDIxMCwxMDAlLDUwJSwuNikgMCAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMzAlLCAgMSkgMCAgMHB4IDBweCA0cHgsIC8qIGJvcmRlciAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2V0IGhzbGEoMjEwLDEwMCUsMTUlLCAuNCkgMCAtMXB4IDVweCA0cHgsIC8qIHNvZnQgU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDIwJSwuMjUpIDAgLTFweCAwcHggN3B4LCAvKiBib3R0b20gU0QgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCBoc2xhKDIxMCwxMDAlLDEwMCUsLjcpIDAgIDJweCAxcHggN3B4LCAvKiB0b3AgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoc2xhKDIxMCwxMDAlLDc1JSwgLjgpIDAgIDBweCAzcHggMnB4LCAvKiBvdXRlciBTRCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhzbGEoMjEwLDUwJSw0MCUsIC4yNSkgMCAtNXB4IDZweCA0cHgsIC8qIG91dGVyIFNEICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHNsYSgyMTAsODAlLDk1JSwgICAxKSAwICA1cHggNnB4IDRweDsgLyogb3V0ZXIgSEwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBFbmQgQnJ1c2hlZCBNZXRhbCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2ICNidXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiAjYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3NvbG9CdXR0b25UYWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTQ1JSwgLTEwNSUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29sb0J1dHRvbkltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDEwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2xvQnV0dG9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTb2xvQ29udGVudDEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwic29sb1Byb0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJzb2xvUHJvMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic29sb1BybzFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInNvbG9Qcm8xXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBTUFBQUFwNFhpREFBQUFVVkJNVkVXRmhZV0RnNE4zZDNkdGJXMTdlM3QxZFhXQmdZR0hoNGQ1ZVhsemMzT0xpNHVibTV1VmxaV1BqNCtOalkxOWZYMkppWWwvZjM5cmEydVJrWkdabVpscGFXbVhsNWR2YjI5eGNYR1RrNU5uWjJjOFRWMW1BQUFBRzNSU1RsTkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQXZFT3d0QUFBRlZrbEVRVlI0WHBXV0I2N2MyQlVGYjNnNTU3VC9oUm85L1dVTVpIbGdyNEJnOFo0cVFnUUpsSEk0QThTekZWcmFwdm1URjlPN2RtWVJGWjYwWWlCaEpSQ2doMUZZaGlMQW1kdlgwQ3pUT3BORTc3TUUwWnR5L25XV3pjaER0aXFybVFEZXV2M3Bvd1E1dGEyZU4wRlkwSW5rcURENzNsVDljOWxFendVTnFnRkhzOVZRY2UzVFZDbEZDUXJTVGZPaVlrVkpRQm1wYnEyTDZpWmF2UG5BUGNvVTBkU3cwU1VUcXovR3RyR3VYZmJ5eUJuaUt5a09XUVdHcXd3TUE3UWlZQXhpK0lsUGRxbytoWUhuVXQ1WlBmbnNISnlOaUR0bnBKeWF5TkJrRjZjV29ZR0FNWTkyVTJoWEhGL0MxTTh1UC9adFlkaXVqMjZVZEFkUVFTWFFFcndTT016dC9YV1JXQXo1R3VTQklrd0cxSDNGYWJKMk9zVU9VaEdDNnRLNEVNdEpPMHR0QzZJQkQza00wdmUwdEp3TWRTZmpabytFRUlTYWVUcjlQM3dZckdqWHF5QzFrcmNLZGhNcHhFbnQ1SmV0b3Vsc2NweXpoWE41RlJwdVBIdmJlUWFLeEZBRUI2RU4rY1lONnhEN1JZR3BYcE5uZE1tWmdNNURjczNZU05GREhVbzJMR2ZadXVrU1d5VVlpckpBZFliRjNNZnFFS21qTStJMkVmaEE5NGlHM0w3dUtyUitHZFdENzN5ZGxJQis2aGdyZWYxUVRsbWdtYk0zL0xlWDVHSTFVeDFSV3BneHBMdVoyK0krSWp6Wjh3cUU0bmlsdlFka1VkZmh6STVRRFd5K2t3NVdnZzJwR3BlRVZlQ0NBN2I4NUJPM0Y5RHp4QjNjZHF2QnpXY216YnlNaXFoenVZcXRIUlZHMnk0eCtLT2xueXFsYThBb1dXcHVCb1lSeHpYcmZLdUlMbDZTZmlXQ2JqeG9aSlVhQ0JqMUNqSDdHSWFEYmM5a3FCWTNXL1JnamRhMWlxUWNPSnUyV1crNzZwWkM5UUc3TTAwZGZmZTloTm5zZXVwRkw1M3I4RjdZSFN3SldVS1AycStrN1Jkc3h5T0IxMW4weHRPdm5XNGlyTU1GTlY0SDB1cXdTNUV4c21QOUF4YkRUYzlKd2duZUFUNXZUaVVTbTFFN0JTZmxTdDNiZmExdHY4RGkzUjhuM0FmN01OV3pzNDlobWF1RTJ3UCt0dHJxK0FzV3BGRzJhd3ZzdU9xYmlwV0hndHV2dWFBRStBMVovN2dDOWhlc25yKzd3cUN3RzhjNXlBZzNBTDFmbThUOUFadHAvYmJKR3dsMXBOckU3UnVPWDdQZU1SVUVSVmFQcEVzK3lxZW9TbXVPbG9rcXc0OXBnb21qTGVoN2ljSE5sRzE5eWpzNlhYT01lZFltNXhIMll4cFYydGMwUm8yakpmeEM1MEFwdXhHb2I3bE1zeGZUYmVVdjA3VHlZeHBlTHVjRUgxZ05kNElLSDJMQWc1VGRWaGxDYWZadnBza2ZuY0NmeDhwT2hKemQ3NmJKV2VZRm5GY2l3Y1lmdWJSYzEySXAvcHBJaEExL21TWi9SeGpGRHJKQzV4aWZGakpwWTJYbDV6WGRndUZxWXlUUjF6U3AxWTlwK3RrdERZWVNOZmxjeEkwaXlPNFRQQmRsUmNwZXFqSy9waUY1YmtscTc3VlNFYUErejhxbUpURnpJV2lpdGJuelI3OTRVU0tCVWFUME5URXNWalpxTGFGVnFKb1BOOU9ERzcwSVBiZkJIS0srL3EvQVdSMHRKellIUlVMT2E0TVArVy9IZkdhZFpVYmZ3MTc3RzdqL09HYklzOFRhaEx5eW5sNFg0UmluRjc5M096K0JVMHNhWHRVSHJWQkZUL0RuQTNjdE5Qb0diczRoUklqVG9rOGkrYWxnVDFsVEhpNFN4RnZPTktOcmdRRkFxMi9nRm5XTVhnd2ZmZ1lNSnBpS1lrbVczdFRnM1pROUpxK2Y4WE4rQTVlZVVLSFd2SldKMnNnSjFTb3Ard3docUZWaWpxV2FKaHd0RDhNTmxTQmVXTk5XVGE1WjVrUFp3NStMYlZUOTl3cVRkeDI5bE1VSDRPSUcvRDg2cnVLRWF1Qmp2SDV4eTZ1bS9TZmo3ZWk2VVVWazRBSWwzTXlENE1TU1RPRmdTd3NIL1FKV2FRNWFzN1pjbWdCWmt6ampVMVVyUTc0Y2kxZ1dCQ1NHSHR1VjFIMm1oU25PM1dwLzNmRVY1YSs0d3ovLzZxeThKeGpac214eHk1KzR3OUNETkpZMDlUMDcyaUtHMEVuT1MwYXJFWWdYcVluWGNZSHdqVHRVTkFjTWVsT2Q0eHBrb3FpVFlJQ1dGcTBKU2lQZlBEUWRudCs0L3d1cWNYWTQ3UUlMYmdBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDczdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA5JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA3LjUlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUuNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAjc29sb1Byb0xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NvbG9Qcm9MaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICNzb2xvUHJvMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbik7XHJcbn1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvbG9Db250ZW50MTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgU29sb0NvbnRlbnQyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cInNvbG9Qcm9MaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic29sb1BybzFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInNvbG9Qcm8xXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJzb2xvUHJvMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbVpnTTVEY3MzWVNORkRIVW8yTEdmWnV1a1NXeVVZaXJKQWRZYkYzTWZxRUttak0rSTJFZmhBOTRpRzNMN3VLclIrR2RXRDczeWRsSUIrNmhncmVmMVFUbG1nbWJNMy9MZVg1R0kxVXgxUldwZ3hwTHVaMitJK0lqelo4d3FFNG5pbHZRZGtVZGZoekk1UURXeStrdzVXZ2cycEdwZUVWZUNDQTdiODVCTzNGOUR6eEIzY2RxdkJ6V2NtemJ5TWlxaHp1WXF0SFJWRzJ5NHgrS09sbnlxbGE4QW9XV3B1Qm9ZUnh6WHJmS3VJTGw2U2ZpV0NianhvWkpVYUNCajFDakg3R0lhRGJjOWtxQlkzVy9SZ2pkYTFpcVFjT0p1MldXKzc2cFpDOVFHN00wMGRmZmU5aE5uc2V1cEZMNTNyOEY3WUhTd0pXVUtQMnErazdSZHN4eU9CMTFuMHh0T3ZuVzRpck1NRk5WNEgwdXF3UzVFeHNtUDlBeGJEVGM5SndnbmVBVDV2VGlVU20xRTdCU2ZsU3QzYmZhMXR2OERpM1I4bjNBZjdNTld6czQ5aG1hdUUyd1ArdHRycStBc1dwRkcyYXd2c3VPcWJpcFdIZ3R1dnVhQUUrQTFaLzdnQzloZXNucis3d3FDd0c4YzV5QWczQUwxZm04VDlBWnRwL2JiSkd3bDFwTnJFN1J1T1g3UGVNUlVFUlZhUHBFcyt5cWVvU211T2xva3F3NDlwZ29takxlaDdpY0hObEcxOXlqczZYWE9NZWRZbTV4SDJZeHBWMnRjMFJvMmpKZnhDNTBBcHV4R29iN2xNc3hmVGJlVXYwN1R5WXhwZUx1Y0VIMWdOZDRJS0gyTEFnNVRkVmhsQ2FmWnZwc2tmbmNDZng4cE9oSnpkNzZiSldlWUZuRmNpd2NZZnViUmMxMklwL3BwSWhBMS9tU1ovUnhqRkRySkM1eGlmRmpKcFkyWGw1elhkZ3VGcVl5VFIxelNwMVk5cCt0a3REWVlTTmZsY3hJMGl5TzRUUEJkbFJjcGVxaksvcGlGNWJrbHE3N1ZTRWFBK3o4cW1KVEZ6SVdpaXRibnpSNzk0VVNLQlVhVDBOVEVzVmpacUxhRlZxSm9QTjlPREc3MElQYmZCSEtLKy9xL0FXUjB0SnpZSFJVTE9hNE1QK1cvSGZHYWRaVWJmdzE3N0c3ai9PR2JJczhUYWhMeXlubDRYNFJpbkY3OTNPeitCVTBzYVh0VUhyVkJGVC9EbkEzY3ROUG9HYnM0aFJJalRvazhpK2FsZ1QxbFRIaTRTeEZ2T05LTnJnUUZBcTIvZ0ZuV01YZ3dmZmdZTUpwaUtZa21XM3RUZzNaUTlKcStmOFhOK0E1ZWVVS0hXdkpXSjJzZ0oxU29wK3d3aHFGVmlqcVdhSmh3dEQ4TU5sU0JlV05OV1RhNVo1a1BadzUrTGJWVDk5d3FUZHgyOWxNVUg0T0lHL0Q4NnJ1S0VhdUJqdkg1eHk2dW0vU2ZqN2VpNlVVVms0QUlsM015RDRNU1NUT0ZnU3dzSC9RSldhUTVhczdaY21nQlprempqVTFVclE3NGNpMWdXQkNTR0h0dVYxSDJtaFNuTzNXcC8zZkVWNWErNHd6Ly82cXk4SnhqWnNteHh5NSs0dzlDRE5KWTA5VDA3MmlLRzBFbk9TMGFyRVlnWHFZblhjWUh3alR0VU5BY01lbE9kNHhwa29xaVRZSUNXRnEwSlNpUGZQRFFkbnQrNC93dXFjWFk0N1FJTGJnQUFBQUJKUlU1RXJrSmdnZz09Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDczdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA5JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA3LjUlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUuNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAjc29sb1Byb0xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgI3NvbG9Qcm9MaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICNzb2xvUHJvMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbik7XHJcbn1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvbG9Db250ZW50MjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgU29sb0NvbnRlbnQzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cInNvbG9Qcm9MaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwic29sb1BybzFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInNvbG9Qcm8xXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJzb2xvUHJvMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbVpnTTVEY3MzWVNORkRIVW8yTEdmWnV1a1NXeVVZaXJKQWRZYkYzTWZxRUttak0rSTJFZmhBOTRpRzNMN3VLclIrR2RXRDczeWRsSUIrNmhncmVmMVFUbG1nbWJNMy9MZVg1R0kxVXgxUldwZ3hwTHVaMitJK0lqelo4d3FFNG5pbHZRZGtVZGZoekk1UURXeStrdzVXZ2cycEdwZUVWZUNDQTdiODVCTzNGOUR6eEIzY2RxdkJ6V2NtemJ5TWlxaHp1WXF0SFJWRzJ5NHgrS09sbnlxbGE4QW9XV3B1Qm9ZUnh6WHJmS3VJTGw2U2ZpV0NianhvWkpVYUNCajFDakg3R0lhRGJjOWtxQlkzVy9SZ2pkYTFpcVFjT0p1MldXKzc2cFpDOVFHN00wMGRmZmU5aE5uc2V1cEZMNTNyOEY3WUhTd0pXVUtQMnErazdSZHN4eU9CMTFuMHh0T3ZuVzRpck1NRk5WNEgwdXF3UzVFeHNtUDlBeGJEVGM5SndnbmVBVDV2VGlVU20xRTdCU2ZsU3QzYmZhMXR2OERpM1I4bjNBZjdNTld6czQ5aG1hdUUyd1ArdHRycStBc1dwRkcyYXd2c3VPcWJpcFdIZ3R1dnVhQUUrQTFaLzdnQzloZXNucis3d3FDd0c4YzV5QWczQUwxZm04VDlBWnRwL2JiSkd3bDFwTnJFN1J1T1g3UGVNUlVFUlZhUHBFcyt5cWVvU211T2xva3F3NDlwZ29takxlaDdpY0hObEcxOXlqczZYWE9NZWRZbTV4SDJZeHBWMnRjMFJvMmpKZnhDNTBBcHV4R29iN2xNc3hmVGJlVXYwN1R5WXhwZUx1Y0VIMWdOZDRJS0gyTEFnNVRkVmhsQ2FmWnZwc2tmbmNDZng4cE9oSnpkNzZiSldlWUZuRmNpd2NZZnViUmMxMklwL3BwSWhBMS9tU1ovUnhqRkRySkM1eGlmRmpKcFkyWGw1elhkZ3VGcVl5VFIxelNwMVk5cCt0a3REWVlTTmZsY3hJMGl5TzRUUEJkbFJjcGVxaksvcGlGNWJrbHE3N1ZTRWFBK3o4cW1KVEZ6SVdpaXRibnpSNzk0VVNLQlVhVDBOVEVzVmpacUxhRlZxSm9QTjlPREc3MElQYmZCSEtLKy9xL0FXUjB0SnpZSFJVTE9hNE1QK1cvSGZHYWRaVWJmdzE3N0c3ai9PR2JJczhUYWhMeXlubDRYNFJpbkY3OTNPeitCVTBzYVh0VUhyVkJGVC9EbkEzY3ROUG9HYnM0aFJJalRvazhpK2FsZ1QxbFRIaTRTeEZ2T05LTnJnUUZBcTIvZ0ZuV01YZ3dmZmdZTUpwaUtZa21XM3RUZzNaUTlKcStmOFhOK0E1ZWVVS0hXdkpXSjJzZ0oxU29wK3d3aHFGVmlqcVdhSmh3dEQ4TU5sU0JlV05OV1RhNVo1a1BadzUrTGJWVDk5d3FUZHgyOWxNVUg0T0lHL0Q4NnJ1S0VhdUJqdkg1eHk2dW0vU2ZqN2VpNlVVVms0QUlsM015RDRNU1NUT0ZnU3dzSC9RSldhUTVhczdaY21nQlprempqVTFVclE3NGNpMWdXQkNTR0h0dVYxSDJtaFNuTzNXcC8zZkVWNWErNHd6Ly82cXk4SnhqWnNteHh5NSs0dzlDRE5KWTA5VDA3MmlLRzBFbk9TMGFyRVlnWHFZblhjWUh3alR0VU5BY01lbE9kNHhwa29xaVRZSUNXRnEwSlNpUGZQRFFkbnQrNC93dXFjWFk0N1FJTGJnQUFBQUJKUlU1RXJrSmdnZz09Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDczdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA5JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA3LjUlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUuNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjc29sb1Byb0xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3NvbG9Qcm9MaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNzb2xvUHJvMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29sb0NvbnRlbnQzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTb2xvRXhwbGFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJleHBsYWluQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJzb2xvQnV0dG9uVGFnXCI+U2luZ2xlLVVzZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwic29sb0V4cGxhaW5cIj5PbmUgYnV5ZXIgYWNjZXNzIHRvIHRoZSBSZXZvbHV0aW9uIGFwcC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjc29sb0V4cGxhaW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2V4cGxhaW5Db250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjc29sb0J1dHRvblRhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29sb0V4cGxhaW47IiwiaW1wb3J0IFRleHRMb29wIGZyb20gXCJyZWFjdC10ZXh0LWxvb3BcIjtcclxuXHJcbmNsYXNzIFdvcmRMb29wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aDMgaWQ9XCJsb29wRWxlbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgWW91ciB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8VGV4dExvb3AgaWQ9XCJsb29wQ29tcG9uZW50XCIgY2hpbGRyZW49e1tcIiBXT1JEIEhFUkVcIiwgXCIgV09SRCBIRVJFXCIsIFwiIFdPUkQgSEVSRVwiLCBcIiBXT1JEIEhFUkVcIl19PlxyXG4gICAgICAgICAgICAgICAgPC9UZXh0TG9vcD57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8aSBpZD1cInJldlRhZ1wiPlJFVk9MVVRJT048L2k+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICNyZXZUYWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjbG9vcEVsZW1lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29yZExvb3A7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL0FwcCc7XHJcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvZm9udGF3ZXNvbWUnXHJcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvc29saWQnXHJcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvcmVndWxhcidcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9icmFuZHMnXHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cIm5leHQtYm9keVwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxBcHA+PC9BcHA+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTeW5jb3BhdGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBsb2NhbCgnU3luY29wYXRlLUJvbGQnKSwgdXJsKC4vZm9udHMvU3luY29wYXRlLUJvbGQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwsIGJvZHksICNfX25leHQsICNuZXh0LWJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzM0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Njb25UcmlhbmdsZS1mNTllMWZjNDgxNTI1MGU0NGIyODZjNjc1MTBhZDcyNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvY3Jldy1maWd1cmUtMmU4NmZiMjNjOWY4Yzg5NTUxZmYyMzBmY2VhNTM4YTcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ZhY3RvcnktZmlndXJlLTgyOWQxYzJhZTAzZTdjYzc4YWE1NjI4OWFjNjNjYjUwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tYXAtaW1hZ2UtZTNkN2E5MzU0N2IzNTk4YzA0ZGJlYTI5MzZhOGM3YTMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NpbmdsZS1maWd1cmUtMmYzNzI2MWU5ZmE3OWM4YjRhMjQ3MTAzN2IyNGRlNjcucG5nXCI7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBCYWNrZ3JvdW5kVmlkZW8gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2aWRlb1VSTDogJy4vdmlkZW8vQm94RmlsbExvb3AubXA0J1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx2aWRlbyBpZD1cImJhY2tncm91bmQtdmlkZW9cIiB0eXBlPVwidmlkZW8vbXA0XCIgbG9vcCBhdXRvUGxheSBzdHlsZT17e1xyXG5cclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwdncnLFxyXG4gICAgICAgICAgICAgICAgdG9wOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICdub25lJyxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogJzAuMycsXHJcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcblxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXt0aGlzLnN0YXRlLnZpZGVvVVJMfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXt0aGlzLnN0YXRlLnZpZGVvVVJMfSB0eXBlPVwidmlkZW8vb2dnXCIgLz5cclxuICAgICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWcuXHJcbiAgICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZFZpZGVvOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2JyYW5kc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9yZWd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL3NvbGlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRleHQtbG9vcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=