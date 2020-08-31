webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CorpContent1.js":
/*!************************************!*\
  !*** ./components/CorpContent1.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\CorpContent1.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var CorpContent = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CorpContent, _React$Component);

  var _super = _createSuper(CorpContent);

  function CorpContent(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CorpContent);

    _this = _super.call(this, props);
    _this.state = {
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
    _this.flip1 = _this.flip1.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.unflip1 = _this.unflip1.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.flip2 = _this.flip2.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.unflip2 = _this.unflip2.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.flip3 = _this.flip3.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.unflip3 = _this.unflip3.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CorpContent, [{
    key: "flip1",
    value: function flip1() {
      this.setState({
        className1: "flipCard is-flipped",
        fadeOneA: "fade",
        fadeOneB: "unFade"
      });
    }
  }, {
    key: "unflip1",
    value: function unflip1() {
      this.setState({
        className1: "flipCard",
        fadeOneA: "unFade",
        fadeOneB: "fade"
      });
    }
  }, {
    key: "flip2",
    value: function flip2() {
      this.setState({
        className2: "flipCard is-flipped",
        fadeTwoA: "fade",
        fadeTwoB: "unFade"
      });
    }
  }, {
    key: "unflip2",
    value: function unflip2() {
      this.setState({
        className2: "flipCard",
        fadeTwoA: "unFade",
        fadeTwoB: "fade"
      });
    }
  }, {
    key: "flip3",
    value: function flip3() {
      this.setState({
        className3: "flipCard is-flipped",
        fadeThreeA: "fade",
        fadeThreeB: "unFade"
      });
    }
  }, {
    key: "unflip3",
    value: function unflip3() {
      this.setState({
        className3: "flipCard",
        fadeThreeA: "unFade",
        fadeThreeB: "fade"
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        id: "contentContainer",
        className: "jsx-4192985508",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-4192985508" + " " + "contentCanvas contentCanvas--card",
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
        className: "jsx-4192985508" + " " + "flipCardContainer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 19
        }
      }, __jsx("div", {
        id: "card1",
        className: "jsx-4192985508" + " " + (this.state.className1 || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }
      }, __jsx("div", {
        id: this.state.fadeOneA,
        style: {
          backgroundImage: "url(" + "".concat(__webpack_require__(/*! ../public/assets/CCON-7-loading-bay.jpg */ "./public/assets/CCON-7-loading-bay.jpg")) + ")",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        },
        className: "jsx-4192985508" + " " + "card__face card__face--front",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 25
        }
      }), __jsx("div", {
        id: this.state.fadeOneB,
        className: "jsx-4192985508" + " " + "card__face card__face--back",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 25
        }
      }, __jsx("div", {
        style: {
          backgroundImage: "url(" + "".concat(__webpack_require__(/*! ../public/assets/CCON-7-loading-bay.jpg */ "./public/assets/CCON-7-loading-bay.jpg")) + ")",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "blur(20px)"
        },
        className: "jsx-4192985508",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 27
        }
      }), __jsx("p", {
        id: "cardText1",
        className: "jsx-4192985508" + " " + "cardText",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 27
        }
      }, "Ccon Metals can act as a main receiving hub for multi-location clientele. This allows shipments from each location are tracked, organized, graded, and invoiced, assuring you peace of mind.")))), __jsx("div", {
        id: "flipContainer2",
        onMouseEnter: this.flip2,
        onMouseLeave: this.unflip2,
        className: "jsx-4192985508" + " " + "flipCardContainer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 19
        }
      }, __jsx("div", {
        id: "card2",
        className: "jsx-4192985508" + " " + (this.state.className2 || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 19
        }
      }, __jsx("div", {
        id: this.state.fadeTwoA,
        style: {
          backgroundImage: "url(" + "".concat(__webpack_require__(/*! ../public/assets/CCON-8-invoice.jpeg */ "./public/assets/CCON-8-invoice.jpeg")) + ")",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        },
        className: "jsx-4192985508" + " " + "card__face card__face--front",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 25
        }
      }), __jsx("div", {
        id: this.state.fadeTwoB,
        className: "jsx-4192985508" + " " + "card__face card__face--back",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 25
        }
      }, __jsx("div", {
        style: {
          backgroundImage: "url(" + "".concat(__webpack_require__(/*! ../public/assets/CCON-8-invoice.jpeg */ "./public/assets/CCON-8-invoice.jpeg")) + ")",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "blur(20px)"
        },
        className: "jsx-4192985508",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 27
        }
      }), __jsx("p", {
        id: "cardText2",
        className: "jsx-4192985508" + " " + "cardText",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 27
        }
      }, "Ccon Metals is well versed in all aspects of multi layer accounts and their specific needs, either standard or customized.")))), __jsx("div", {
        id: "flipContainer3",
        onMouseEnter: this.flip3,
        onMouseLeave: this.unflip3,
        className: "jsx-4192985508" + " " + "flipCardContainer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 19
        }
      }, __jsx("div", {
        id: "card3",
        className: "jsx-4192985508" + " " + (this.state.className3 || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 19
        }
      }, __jsx("div", {
        id: this.state.fadeThreeA,
        style: {
          backgroundImage: "url(" + "".concat(__webpack_require__(/*! ../public/assets/CCON-369-catalyst-jars.jpg */ "./public/assets/CCON-369-catalyst-jars.jpg")) + ")",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        },
        className: "jsx-4192985508" + " " + "card__face card__face--front",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 25
        }
      }), __jsx("div", {
        id: this.state.fadeThreeB,
        className: "jsx-4192985508" + " " + "card__face card__face--back",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 25
        }
      }, __jsx("div", {
        style: {
          backgroundImage: "url(" + "".concat(__webpack_require__(/*! ../public/assets/CCON-369-catalyst-jars.jpg */ "./public/assets/CCON-369-catalyst-jars.jpg")) + ")",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "blur(20px)"
        },
        className: "jsx-4192985508",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 27
        }
      }), __jsx("p", {
        id: "cardText3",
        className: "jsx-4192985508" + " " + "cardText",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 27
        }
      }, "Ccon Metals specializes in loose material assay services: running lots as small as only a few pounds, with no upper limit. We offer exceptional refining terms that match current scrap catalytic converter prices; with a highly competitive turnaround time."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "4192985508",
        __self: this
      }, "@-webkit-keyframes fadeIn-jsx-4192985508{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeIn-jsx-4192985508{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadeOut-jsx-4192985508{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}@keyframes fadeOut-jsx-4192985508{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}#fade.jsx-4192985508{-webkit-animation:fadeOut-jsx-4192985508 ease 0.5s;animation:fadeOut-jsx-4192985508 ease 0.5s;}#unFade.jsx-4192985508{-webkit-animation:fadeIn-jsx-4192985508 ease 0.5s;animation:fadeIn-jsx-4192985508 ease 0.5s;}.cardText.jsx-4192985508{position:absolute;height:100%;width:80%;-webkit-transform:translateY(-105%);-ms-transform:translateY(-105%);transform:translateY(-105%);}#cardText1.jsx-4192985508{text-align:right;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;font-size:calc(12px + 1.3vw);text-shadow:2px 2px 2px white;}#cardText2.jsx-4192985508{text-align:center;width:90%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:white;font-size:calc(12px + 1.3vw);text-shadow:2px 2px 2px black;}#cardText3.jsx-4192985508{text-align:left;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.15vw);text-shadow:2px 2px 2px black;}#contentContainer.jsx-4192985508{position:absolute;height:100%;width:100%;background-image:url('image');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%);-webkit-transform:translateX(-225%);-ms-transform:translateX(-225%);transform:translateX(-225%);overflow:hidden;border:5px solid silver;box-sizing:border-box;}.contentCanvas.jsx-4192985508{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}.flipCard.jsx-4192985508{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}.card__face.jsx-4192985508{position:absolute;height:100%;width:100%;text-align:center;}.card__face--front.jsx-4192985508{background:white;overflow:hidden;}.card__face--back.jsx-4192985508{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );overflow:hidden;}.flipCard.is-flipped.jsx-4192985508{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCardContainer.jsx-4192985508{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333333333333333333333333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-4192985508{width:100%;height:33%;margin-top:0%;}#card3.jsx-4192985508{margin-top:0%;}.card__face--back.jsx-4192985508{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-4192985508{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}#card2.jsx-4192985508{margin-top:0%;}.flipCard.jsx-4192985508{width:100%;height:100%;}.contentCanvas.jsx-4192985508{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:102%;width:100%;margin-top:0%;}#contentContainer.jsx-4192985508{height:100%;min-height:575px;overflow:hidden;}#cardText1.jsx-4192985508{text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:black;font-size:calc(12px + 1.4vw);}#cardText2.jsx-4192985508{text-align:center;width:75%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:black;font-size:calc(12px + 1.4vw);}#cardText3.jsx-4192985508{text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:black;font-size:calc(12px + 1.3vw);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycENvbnRlbnQxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThJaUIsQUFLaUMsQUFJQSxBQU1BLEFBSUEsQUFJQSxBQUtnQixBQUlELEFBSVQsQUFPRCxBQVVDLEFBV0YsQUFXRSxBQWNSLEFBUUUsQUFlTSxBQVFELEFBS0EsQUFNVyxBQVFWLEFBV0wsQUFPZCxBQUdvQixBQUtXLEFBTS9CLEFBR2MsQUFLZ0IsQUFRZixBQU1NLEFBVUEsQUFVQSxVQS9NcEIsQUFJQSxBQU1BLEFBSUEsQUFJQSxBQWtFWSxDQTZEQyxBQXdCQyxDQTdFRSxBQTBGRyxFQS9CbkIsQUFjQSxFQTFHUyxDQXJCQSxBQTZFTyxBQUtZLEFBbUNFLENBNUhsQixBQWlCRixBQXNCRSxBQXFDQSxBQWlGRCxBQVVDLEFBVUQsSUEzSEEsQUE2REssQ0F3QmhCLEVBOUdRLENBckJBLENBc0pFLEFBb0JBLENBaEtELEFBNENPLEFBMEdMLENBaEJPLENBdkpSLEFBdUNDLEFBcUNBLEdBL0NxQixBQXlCcEIsQUE4QmQsQ0E1RWtDLENBc0pFLEFBb0JBLENBL0RsQyxDQWpHUSxBQXNKRSxHQXZLa0IsQ0F1Q0UsQUFzQ1osR0FoQlAsQ0EzQ3FCLEFBb0NsQixBQWlHZCxBQWlCa0MsVUExR3RCLElBUGQsQUF1QkEsUUFmWSxJQXZCd0IsTUF3QmIsWUFxQ1gsQ0F3Q1MsRUFuSnJCLEVBSkEsRUF1R0EsQUFrQ0UsRUE5RDBCLENBcUNkLE1BN0RNLEVBcUdKLElBdkNxQixFQWZuQixBQW1DaEIsTUFvQmEsSUFyR1ksTUErQzNCLENBdURrQixNQS9JbEIsRUE0QlksQ0FyQkEsQ0FzSkUsQUFvQkEsSUFqQ1osRUF6Q1ksRUExRUEsQ0FyQmlCLENBVWpCLEFBNElFLEFBVUEsQUFVQSxRQTFFTyxFQTFFUyxFQVhELEFBNElFLEFBVUEsQUFVQSxnQkExS0QsQ0FpR2hDLFdBM0VnQyxDQVhBLEFBNEk5QixBQVVBLEFBVUEsU0FuSDRCLFFBdkQ5QixFQWdDOEIsVUFWOUIsQ0FYQSwyRUE2Q29CLFVBdkJGLFFBd0JELFFBdkJTLE9BeUIxQixpQkF4QndCLHNCQUN4QiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXENvcnBDb250ZW50MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDb3JwQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgICAgZmFkZU9uZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVPbmVCOiBcImZhZGVcIixcclxuICAgICAgZmFkZVR3b0E6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUd29COiBcImZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQjogXCJmYWRlXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mbGlwMSA9IHRoaXMuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMSA9IHRoaXMudW5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMiA9IHRoaXMuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMiA9IHRoaXMudW5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMyA9IHRoaXMuZmxpcDMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMyA9IHRoaXMudW5mbGlwMy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlT25lQSA6IFwiZmFkZVwiLCBmYWRlT25lQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiwgZmFkZU9uZUEgOiBcInVuRmFkZVwiLCBmYWRlT25lQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUd29BIDogXCJmYWRlXCIsIGZhZGVUd29CIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZFwiLCBmYWRlVHdvQSA6IFwidW5GYWRlXCIsIGZhZGVUd29CIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVRocmVlQSA6IFwiZmFkZVwiLCBmYWRlVGhyZWVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiLCBmYWRlVGhyZWVBIDogXCJ1bkZhZGVcIiwgZmFkZVRocmVlQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMVwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMX0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTF9ICBpZD1cImNhcmQxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPXt0aGlzLnN0YXRlLmZhZGVPbmVBfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQ0NPTi03LWxvYWRpbmctYmF5LmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPXt0aGlzLnN0YXRlLmZhZGVPbmVCfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQ0NPTi03LWxvYWRpbmctYmF5LmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDIwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiIGlkPVwiY2FyZFRleHQxXCI+Q2NvbiBNZXRhbHMgY2FuIGFjdCBhcyBhIG1haW4gcmVjZWl2aW5nIGh1YiBmb3IgbXVsdGktbG9jYXRpb24gY2xpZW50ZWxlLiBUaGlzIGFsbG93cyBzaGlwbWVudHMgZnJvbSBlYWNoIGxvY2F0aW9uIGFyZSB0cmFja2VkLCBvcmdhbml6ZWQsIGdyYWRlZCwgYW5kIGludm9pY2VkLCBhc3N1cmluZyB5b3UgcGVhY2Ugb2YgbWluZC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIyXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAyfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMn0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTJ9ICBpZD1cImNhcmQyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPXt0aGlzLnN0YXRlLmZhZGVUd29BfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQ0NPTi04LWludm9pY2UuanBlZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPXt0aGlzLnN0YXRlLmZhZGVUd29CfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQ0NPTi04LWludm9pY2UuanBlZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDIwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiIGlkPVwiY2FyZFRleHQyXCI+Q2NvbiBNZXRhbHMgaXMgd2VsbCB2ZXJzZWQgaW4gYWxsIGFzcGVjdHMgb2YgbXVsdGkgbGF5ZXIgYWNjb3VudHMgYW5kIHRoZWlyIHNwZWNpZmljIG5lZWRzLCBlaXRoZXIgc3RhbmRhcmQgb3IgY3VzdG9taXplZC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIzXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAzfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwM30+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTN9ICBpZD1cImNhcmQzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPXt0aGlzLnN0YXRlLmZhZGVUaHJlZUF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTM2OS1jYXRhbHlzdC1qYXJzLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPXt0aGlzLnN0YXRlLmZhZGVUaHJlZUJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTM2OS1jYXRhbHlzdC1qYXJzLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDIwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiIGlkPVwiY2FyZFRleHQzXCI+Q2NvbiBNZXRhbHMgc3BlY2lhbGl6ZXMgaW4gbG9vc2UgbWF0ZXJpYWwgYXNzYXkgc2VydmljZXM6IHJ1bm5pbmcgbG90cyBhcyBzbWFsbCBhcyBvbmx5IGEgZmV3IHBvdW5kcywgd2l0aCBubyB1cHBlciBsaW1pdC4gV2Ugb2ZmZXIgZXhjZXB0aW9uYWwgcmVmaW5pbmcgdGVybXMgdGhhdCBtYXRjaCBjdXJyZW50IHNjcmFwIGNhdGFseXRpYyBjb252ZXJ0ZXIgcHJpY2VzOyB3aXRoIGEgaGlnaGx5IGNvbXBldGl0aXZlIHR1cm5hcm91bmQgdGltZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2ZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZU91dCBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICN1bkZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDUlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjN2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZFRleHQyIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4zdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjE1dncpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjI1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmQxIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuNHZ3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS40dncpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZFRleHQzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjN2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbik7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb3JwQ29udGVudDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\CorpContent1.js */"));
    }
  }]);

  return CorpContent;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CorpContent);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvcnBDb250ZW50MS5qcyJdLCJuYW1lcyI6WyJDb3JwQ29udGVudCIsInByb3BzIiwic3RhdGUiLCJjbGFzc05hbWUxIiwiY2xhc3NOYW1lMiIsImNsYXNzTmFtZTMiLCJmYWRlT25lQSIsImZhZGVPbmVCIiwiZmFkZVR3b0EiLCJmYWRlVHdvQiIsImZhZGVUaHJlZUEiLCJmYWRlVGhyZWVCIiwiZmxpcDEiLCJiaW5kIiwidW5mbGlwMSIsImZsaXAyIiwidW5mbGlwMiIsImZsaXAzIiwidW5mbGlwMyIsInNldFN0YXRlIiwiYmFja2dyb3VuZEltYWdlIiwicmVxdWlyZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZmlsdGVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLFc7Ozs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQVc7QUFDVEMsZ0JBQVUsRUFBRSxVQURIO0FBRVRDLGdCQUFVLEVBQUUsVUFGSDtBQUdUQyxnQkFBVSxFQUFFLFVBSEg7QUFJVEMsY0FBUSxFQUFFLFFBSkQ7QUFLVEMsY0FBUSxFQUFFLE1BTEQ7QUFNVEMsY0FBUSxFQUFFLFFBTkQ7QUFPVEMsY0FBUSxFQUFFLE1BUEQ7QUFRVEMsZ0JBQVUsRUFBRSxRQVJIO0FBU1RDLGdCQUFVLEVBQUU7QUFUSCxLQUFYO0FBWUEsVUFBS0MsS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBV0MsSUFBWCx5R0FBYjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIseUdBQWY7QUFDQSxVQUFLRSxLQUFMLEdBQWEsTUFBS0EsS0FBTCxDQUFXRixJQUFYLHlH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bUJBQU8sQ0FBQywrRkFBRCxDQUFuQixJQUF1RSxHQUQ5RTtBQUVWQyxlQUFLLEVBQUUsTUFGRztBQUdWQyxnQkFBTSxFQUFDLE1BSEc7QUFJVkMsMEJBQWdCLEVBQUUsV0FKUjtBQUtWRSw0QkFBa0IsRUFBRSxRQUxWO0FBTVZELHdCQUFjLEVBQUUsT0FOTjtBQU9WRSxnQkFBTSxFQUFFO0FBUEUsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQVdFO0FBQXdCLFVBQUUsRUFBQyxXQUEzQjtBQUFBLDRDQUFhLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwUUFYRixDQVpOLENBREEsQ0F6REosQ0FETjtBQUFBO0FBQUE7QUFBQSxxc3lCQUROO0FBNFREOzs7O0VBL1d5QkMsNENBQUssQ0FBQ0MsUzs7QUFpWGpCN0IsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjk1NjhkMzBkMjNlNzAzMjc1NzI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQ29ycENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgIGNsYXNzTmFtZTE6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMjogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUzOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGZhZGVPbmVBOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlT25lQjogXCJmYWRlXCIsXHJcbiAgICAgIGZhZGVUd29BOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlVHdvQjogXCJmYWRlXCIsXHJcbiAgICAgIGZhZGVUaHJlZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUaHJlZUI6IFwiZmFkZVwiLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmxpcDEgPSB0aGlzLmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDEgPSB0aGlzLnVuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDIgPSB0aGlzLmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDIgPSB0aGlzLnVuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDMgPSB0aGlzLmZsaXAzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDMgPSB0aGlzLnVuZmxpcDMuYmluZCh0aGlzKTtcclxufVxyXG5cclxuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZU9uZUEgOiBcImZhZGVcIiwgZmFkZU9uZUIgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkXCIsIGZhZGVPbmVBIDogXCJ1bkZhZGVcIiwgZmFkZU9uZUIgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlVHdvQSA6IFwiZmFkZVwiLCBmYWRlVHdvQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmRcIiwgZmFkZVR3b0EgOiBcInVuRmFkZVwiLCBmYWRlVHdvQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUaHJlZUEgOiBcImZhZGVcIiwgZmFkZVRocmVlQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmRcIiwgZmFkZVRocmVlQSA6IFwidW5GYWRlXCIsIGZhZGVUaHJlZUIgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5cclxucmVuZGVyKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzIGNvbnRlbnRDYW52YXMtLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjFcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDF9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAxfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUxfSAgaWQ9XCJjYXJkMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlT25lQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tNy1sb2FkaW5nLWJheS5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD17dGhpcy5zdGF0ZS5mYWRlT25lQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tNy1sb2FkaW5nLWJheS5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cigyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIiBpZD1cImNhcmRUZXh0MVwiPkNjb24gTWV0YWxzIGNhbiBhY3QgYXMgYSBtYWluIHJlY2VpdmluZyBodWIgZm9yIG11bHRpLWxvY2F0aW9uIGNsaWVudGVsZS4gVGhpcyBhbGxvd3Mgc2hpcG1lbnRzIGZyb20gZWFjaCBsb2NhdGlvbiBhcmUgdHJhY2tlZCwgb3JnYW5pemVkLCBncmFkZWQsIGFuZCBpbnZvaWNlZCwgYXNzdXJpbmcgeW91IHBlYWNlIG9mIG1pbmQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyMlwiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwMn0gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUyfSAgaWQ9XCJjYXJkMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVHdvQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tOC1pbnZvaWNlLmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVHdvQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tOC1pbnZvaWNlLmpwZWdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cigyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIiBpZD1cImNhcmRUZXh0MlwiPkNjb24gTWV0YWxzIGlzIHdlbGwgdmVyc2VkIGluIGFsbCBhc3BlY3RzIG9mIG11bHRpIGxheWVyIGFjY291bnRzIGFuZCB0aGVpciBzcGVjaWZpYyBuZWVkcywgZWl0aGVyIHN0YW5kYXJkIG9yIGN1c3RvbWl6ZWQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBDYXJkQ29udGFpbmVyXCIgaWQ9XCJmbGlwQ29udGFpbmVyM1wiIG9uTW91c2VFbnRlcj17dGhpcy5mbGlwM30gb25Nb3VzZUxlYXZlPXt0aGlzLnVuZmxpcDN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUzfSAgaWQ9XCJjYXJkM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVGhyZWVBfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQ0NPTi0zNjktY2F0YWx5c3QtamFycy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD17dGhpcy5zdGF0ZS5mYWRlVGhyZWVCfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQ0NPTi0zNjktY2F0YWx5c3QtamFycy5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cigyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIiBpZD1cImNhcmRUZXh0M1wiPkNjb24gTWV0YWxzIHNwZWNpYWxpemVzIGluIGxvb3NlIG1hdGVyaWFsIGFzc2F5IHNlcnZpY2VzOiBydW5uaW5nIGxvdHMgYXMgc21hbGwgYXMgb25seSBhIGZldyBwb3VuZHMsIHdpdGggbm8gdXBwZXIgbGltaXQuIFdlIG9mZmVyIGV4Y2VwdGlvbmFsIHJlZmluaW5nIHRlcm1zIHRoYXQgbWF0Y2ggY3VycmVudCBzY3JhcCBjYXRhbHl0aWMgY29udmVydGVyIHByaWNlczsgd2l0aCBhIGhpZ2hseSBjb21wZXRpdGl2ZSB0dXJuYXJvdW5kIHRpbWUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNmYWRlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVPdXQgZWFzZSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjdW5GYWRlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTA1JSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4zdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDMge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4xNXZ3KTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIyNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgc2lsdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1mcm9udCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDQwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZFRleHQxIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjR2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuNHZ3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4zdncpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ29ycENvbnRlbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==