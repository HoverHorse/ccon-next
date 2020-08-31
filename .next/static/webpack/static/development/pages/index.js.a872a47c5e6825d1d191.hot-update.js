webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/SmallContent1.js":
/*!*************************************!*\
  !*** ./components/SmallContent1.js ***!
  \*************************************/
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






var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\SmallContent1.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var SmallContent1 = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(SmallContent1, _React$Component);

  var _super = _createSuper(SmallContent1);

  function SmallContent1(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SmallContent1);

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

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SmallContent1, [{
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
          backgroundImage: "url(" + "".concat(__webpack_require__(/*! ../public/assets/CCON-4-data-guy.jpg */ "./public/assets/CCON-4-data-guy.jpg")) + ")",
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
          backgroundImage: "url(" + "".concat(__webpack_require__(/*! ../public/assets/CCON-4-data-guy.jpg */ "./public/assets/CCON-4-data-guy.jpg")) + ")",
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
      }, "Ccon Metals offers cutting-edge catalytic converter training for all clients; ensuring efficiency and accuracy when looking uo catalytic converter numbers and prices are always readily available.")))), __jsx("div", {
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
          backgroundImage: "url(" + "".concat(__webpack_require__(/*! ../public/assets/CCON-5-longhaul.jpg */ "./public/assets/CCON-5-longhaul.jpg")) + ")",
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
          backgroundImage: "url(" + "".concat(__webpack_require__(/*! ../public/assets/CCON-5-longhaul.jpg */ "./public/assets/CCON-5-longhaul.jpg")) + ")",
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
      }, "For non-mobile clients, Ccon Metals offers weekly, bi-weekly, or monthly pickup services throughout the Lower Mainland and the Fraser Valley. We also offer custom freight solutions with several logistics companies for clients outside our service area.")))), __jsx("div", {
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
          backgroundImage: "url(" + "".concat(__webpack_require__(/*! ../public/assets/CCON-369-catalyst-jars.jpg */ "./public/assets/CCON-369-catalyst-jars.jpg")) + ")",
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
          backgroundImage: "url(" + "".concat(__webpack_require__(/*! ../public/assets/CCON-369-catalyst-jars.jpg */ "./public/assets/CCON-369-catalyst-jars.jpg")) + ")",
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
      }, "Ccon Metals specializes in loose material assay services with the ability to run small lots from several pounds to several thousand pounds. We offer exceptional refining terms that match current scrap catalytic converter prices, plus a quick turnaround."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1203748430",
        __self: this
      }, "@-webkit-keyframes fadeIn-jsx-1203748430{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeIn-jsx-1203748430{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadeOut-jsx-1203748430{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}@keyframes fadeOut-jsx-1203748430{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}#fade.jsx-1203748430{-webkit-animation:fadeOut-jsx-1203748430 ease 0.5s;animation:fadeOut-jsx-1203748430 ease 0.5s;}#unFade.jsx-1203748430{-webkit-animation:fadeIn-jsx-1203748430 ease 0.5s;animation:fadeIn-jsx-1203748430 ease 0.5s;}p.jsx-1203748430{text-shadow:2px 2px 2px black;}.cardText.jsx-1203748430{position:absolute;height:100%;width:80%;-webkit-transform:translateY(-105%);-ms-transform:translateY(-105%);transform:translateY(-105%);}#cardText1.jsx-1203748430{text-align:right;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.3vw);}#cardText2.jsx-1203748430{text-align:center;width:90%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:white;font-size:calc(12px + 1.3vw);}#cardText3.jsx-1203748430{text-align:left;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.1vw);}#contentContainer.jsx-1203748430{position:absolute;height:100%;width:100%;background-image:url('image');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(-225%);-ms-transform:translateX(-225%);transform:translateX(-225%);overflow:hidden;border:5px solid silver;box-sizing:border-box;}.contentCanvas.jsx-1203748430{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}.flipCard.jsx-1203748430{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}.card__face.jsx-1203748430{position:absolute;height:100%;width:100%;text-align:center;}.card__face--front.jsx-1203748430{background:white;overflow:hidden;}.card__face--back.jsx-1203748430{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );overflow:hidden;}.flipCard.is-flipped.jsx-1203748430{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCardContainer.jsx-1203748430{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333333333333333333333333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-1203748430{width:100%;height:33%;margin-top:0%;}#card3.jsx-1203748430{margin-top:0%;}.card__face--back.jsx-1203748430{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-1203748430{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}#card2.jsx-1203748430{margin-top:0%;}.flipCard.jsx-1203748430{width:100%;height:100%;}.contentCanvas.jsx-1203748430{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:102%;width:100%;margin-top:0%;}#contentContainer.jsx-1203748430{height:100%;min-height:575px;overflow:hidden;}#cardText1.jsx-1203748430{text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.4vw);}#cardText2.jsx-1203748430{text-align:center;width:75%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:black;font-size:calc(12px + 1.4vw);}#cardText3.jsx-1203748430{text-align:center;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:75%;color:white;font-size:calc(12px + 1.2vw);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxDb250ZW50MS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSWlCLEFBS2lDLEFBTUEsQUFNQSxBQUlBLEFBSUEsQUFLZ0IsQUFJRCxBQUlHLEFBSVosQUFPRCxBQVVDLEFBVUYsQUFVRSxBQWFSLEFBUUUsQUFlTSxBQVFELEFBS0EsQUFNVyxBQVFWLEFBV0wsQUFPZCxBQUdvQixBQUtXLEFBTS9CLEFBR2MsQUFLZ0IsQUFRZixBQU1NLEFBVUEsQUFVQSxVQWxOcEIsQUFNQSxBQU1BLEFBSUEsQUFJQSxBQW1FWSxDQTZEQyxBQXdCQyxDQTdFRSxBQTBGRyxFQS9CbkIsQUFjQSxFQXhHUyxDQXBCQSxBQTBFTyxBQUtZLEFBbUNFLENBekhsQixBQWlCRixBQW9CRSxBQW9DQSxBQWlGRCxBQVVDLEFBVUQsSUEzSEEsQUE2REssQ0F3QmhCLEVBNUdRLENBcEJBLENBbUpFLEFBb0JBLENBN0pELEFBeUNPLEFBMEdMLENBaEJPLENBekpwQixBQUtZLEFBcUNDLEFBb0NBLEdBN0NxQixBQXVCcEIsQUE4QmQsQ0F6RWtDLENBbUpFLEFBb0JBLENBL0RsQyxDQTlGUSxBQW1KRSxHQXBLa0IsQ0FxQ0UsQUFxQ1osR0FoQlAsQ0F4Q3FCLEFBaUNsQixBQWlHZCxBQWlCa0MsVUExR3RCLElBUGQsQUF1QkEsUUFmWSxJQXRCd0IsTUF1QmIsWUFxQ1gsQ0F3Q1MsRUFwSnJCLEVBSkEsRUF3R0EsQUFrQ0UsRUE5RDBCLENBcUNkLE1BNURNLEVBb0dKLElBdkNxQixFQWZuQixBQW1DaEIsTUFvQmEsSUFwR2UsTUE4QzlCLENBdURrQixNQTVJbEIsRUEyQlksQ0FwQkEsQ0FtSkUsQUFvQkEsSUFqQ1osRUF6Q1ksRUF4RUEsQ0FwQkEsQ0FVQSxBQXlJRSxBQVVBLEFBVUEsUUExRU8sRUF4RVEsQ0FwQkEsQ0FVQSxBQXlJRSxBQVVBLEFBVUEsaUJBekVqQyxVQXpFQSxDQXBCQSxDQVVBLEFBeUlFLEFBVUEsQUFVQSxTQW5INEIsbUJBdEJaLGdCQUNRLHdCQUNGLHNCQUN4QixlQW9Cb0Isa0JBQ0gsZUFFakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaGFuZVxcZG9jdW1lbnRzXFxHaXRIdWIgUmVwb3NpdG9yeVxcY2Nvbi1uZXh0XFxjb21wb25lbnRzXFxTbWFsbENvbnRlbnQxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jbGFzcyBTbWFsbENvbnRlbnQxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICBjbGFzc05hbWUxOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTI6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMzogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBmYWRlT25lQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZU9uZUI6IFwiZmFkZVwiLFxyXG4gICAgICBmYWRlVHdvQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVR3b0I6IFwiZmFkZVwiLFxyXG4gICAgICBmYWRlVGhyZWVBOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlVGhyZWVCOiBcImZhZGVcIixcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZsaXAxID0gdGhpcy5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAxID0gdGhpcy51bmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAyID0gdGhpcy5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAyID0gdGhpcy51bmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAzID0gdGhpcy5mbGlwMy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAzID0gdGhpcy51bmZsaXAzLmJpbmQodGhpcyk7XHJcbn1cclxuXHJcbmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVPbmVBIDogXCJmYWRlXCIsIGZhZGVPbmVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZFwiLCBmYWRlT25lQSA6IFwidW5GYWRlXCIsIGZhZGVPbmVCIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVR3b0EgOiBcImZhZGVcIiwgZmFkZVR3b0IgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkXCIsIGZhZGVUd29BIDogXCJ1bkZhZGVcIiwgZmFkZVR3b0IgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlVGhyZWVBIDogXCJmYWRlXCIsIGZhZGVUaHJlZUIgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkXCIsIGZhZGVUaHJlZUEgOiBcInVuRmFkZVwiLCBmYWRlVGhyZWVCIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuXHJcbnJlbmRlcigpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhcyBjb250ZW50Q2FudmFzLS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIxXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAxfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMX0gIGlkPVwiY2FyZDFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9e3RoaXMuc3RhdGUuZmFkZU9uZUF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTQtZGF0YS1ndXkuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZU9uZUJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTQtZGF0YS1ndXkuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDFcIj5DY29uIE1ldGFscyBvZmZlcnMgY3V0dGluZy1lZGdlIGNhdGFseXRpYyBjb252ZXJ0ZXIgdHJhaW5pbmcgZm9yIGFsbCBjbGllbnRzOyBlbnN1cmluZyBlZmZpY2llbmN5IGFuZCBhY2N1cmFjeSB3aGVuIGxvb2tpbmcgdW8gY2F0YWx5dGljIGNvbnZlcnRlciBudW1iZXJzIGFuZCBwcmljZXMgYXJlIGFsd2F5cyByZWFkaWx5IGF2YWlsYWJsZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIyXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAyfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwMn0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTJ9ICBpZD1cImNhcmQyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPXt0aGlzLnN0YXRlLmZhZGVUd29BfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQ0NPTi01LWxvbmdoYXVsLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPXt0aGlzLnN0YXRlLmZhZGVUd29CfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvQ0NPTi01LWxvbmdoYXVsLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDIwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiIGlkPVwiY2FyZFRleHQyXCI+Rm9yIG5vbi1tb2JpbGUgY2xpZW50cywgQ2NvbiBNZXRhbHMgb2ZmZXJzIHdlZWtseSwgYmktd2Vla2x5LCBvciBtb250aGx5IHBpY2t1cCBzZXJ2aWNlcyB0aHJvdWdob3V0IHRoZSBMb3dlciBNYWlubGFuZCBhbmQgdGhlIEZyYXNlciBWYWxsZXkuIFdlIGFsc28gb2ZmZXIgY3VzdG9tIGZyZWlnaHQgc29sdXRpb25zIHdpdGggc2V2ZXJhbCBsb2dpc3RpY3MgY29tcGFuaWVzIGZvciBjbGllbnRzIG91dHNpZGUgb3VyIHNlcnZpY2UgYXJlYS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxpcENhcmRDb250YWluZXJcIiBpZD1cImZsaXBDb250YWluZXIzXCIgb25Nb3VzZUVudGVyPXt0aGlzLmZsaXAzfSBvbk1vdXNlTGVhdmU9e3RoaXMudW5mbGlwM30+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZTN9ICBpZD1cImNhcmQzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiIGlkPXt0aGlzLnN0YXRlLmZhZGVUaHJlZUF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTM2OS1jYXRhbHlzdC1qYXJzLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiIGlkPXt0aGlzLnN0YXRlLmZhZGVUaHJlZUJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTM2OS1jYXRhbHlzdC1qYXJzLmpwZ1wiKX1gICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogXCJibHVyKDIwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkVGV4dFwiIGlkPVwiY2FyZFRleHQzXCI+Q2NvbiBNZXRhbHMgc3BlY2lhbGl6ZXMgaW4gbG9vc2UgbWF0ZXJpYWwgYXNzYXkgc2VydmljZXMgd2l0aCB0aGUgYWJpbGl0eSB0byBydW4gc21hbGwgbG90cyBmcm9tIHNldmVyYWwgcG91bmRzIHRvIHNldmVyYWwgdGhvdXNhbmQgcG91bmRzLiBXZSBvZmZlciBleGNlcHRpb25hbCByZWZpbmluZyB0ZXJtcyB0aGF0IG1hdGNoIGN1cnJlbnQgc2NyYXAgY2F0YWx5dGljIGNvbnZlcnRlciBwcmljZXMsIHBsdXMgYSBxdWljayB0dXJuYXJvdW5kLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2ZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZU91dCBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICN1bkZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwNSUpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZFRleHQxIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjN2dyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjN2dyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDMge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS4xdncpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjI1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmQxIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuNHZ3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS40dncpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZFRleHQzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjJ2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbik7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTbWFsbENvbnRlbnQxOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SmallContent1.js */"));
    }
  }]);

  return SmallContent1;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SmallContent1);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NtYWxsQ29udGVudDEuanMiXSwibmFtZXMiOlsiU21hbGxDb250ZW50MSIsInByb3BzIiwic3RhdGUiLCJjbGFzc05hbWUxIiwiY2xhc3NOYW1lMiIsImNsYXNzTmFtZTMiLCJmYWRlT25lQSIsImZhZGVPbmVCIiwiZmFkZVR3b0EiLCJmYWRlVHdvQiIsImZhZGVUaHJlZUEiLCJmYWRlVGhyZWVCIiwiZmxpcDEiLCJiaW5kIiwidW5mbGlwMSIsImZsaXAyIiwidW5mbGlwMiIsImZsaXAzIiwidW5mbGlwMyIsInNldFN0YXRlIiwiYmFja2dyb3VuZEltYWdlIiwicmVxdWlyZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZmlsdGVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBR01BLGE7Ozs7O0FBQ0oseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQVc7QUFDVEMsZ0JBQVUsRUFBRSxVQURIO0FBRVRDLGdCQUFVLEVBQUUsVUFGSDtBQUdUQyxnQkFBVSxFQUFFLFVBSEg7QUFJVEMsY0FBUSxFQUFFLFFBSkQ7QUFLVEMsY0FBUSxFQUFFLE1BTEQ7QUFNVEMsY0FBUSxFQUFFLFFBTkQ7QUFPVEMsY0FBUSxFQUFFLE1BUEQ7QUFRVEMsZ0JBQVUsRUFBRSxRQVJIO0FBU1RDLGdCQUFVLEVBQUU7QUFUSCxLQUFYO0FBWUEsVUFBS0MsS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBV0MsSUFBWCx5R0FBYjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIseUdBQWY7QUFDQSxVQUFLRSxLQUFMLEdBQWEsTUFBS0EsS0FBTCxDQUFXRixJQUFY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WUMsbUJBQU8sQ0FBQywrRkFBRCxDQUFuQixJQUF1RSxHQUQ5RTtBQUVWQyxlQUFLLEVBQUUsTUFGRztBQUdWQyxnQkFBTSxFQUFDLE1BSEc7QUFJVkMsMEJBQWdCLEVBQUUsV0FKUjtBQUtWRSw0QkFBa0IsRUFBRSxRQUxWO0FBTVZELHdCQUFjLEVBQUUsT0FOTjtBQU9WRSxnQkFBTSxFQUFFO0FBUEUsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQVdFO0FBQXdCLFVBQUUsRUFBQyxXQUEzQjtBQUFBLDRDQUFhLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5UUFYRixDQVpOLENBREEsQ0F6REosQ0FETjtBQUFBO0FBQUE7QUFBQSw0c3lCQUROO0FBK1REOzs7O0VBbFgyQkMsNENBQUssQ0FBQ0MsUzs7QUFvWG5CN0IsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmE4NzJhNDdjNWU2ODI1ZDFkMTkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNsYXNzIFNtYWxsQ29udGVudDEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgIGNsYXNzTmFtZTE6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMjogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUzOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGZhZGVPbmVBOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlT25lQjogXCJmYWRlXCIsXHJcbiAgICAgIGZhZGVUd29BOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlVHdvQjogXCJmYWRlXCIsXHJcbiAgICAgIGZhZGVUaHJlZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUaHJlZUI6IFwiZmFkZVwiLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmxpcDEgPSB0aGlzLmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDEgPSB0aGlzLnVuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDIgPSB0aGlzLmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDIgPSB0aGlzLnVuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDMgPSB0aGlzLmZsaXAzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDMgPSB0aGlzLnVuZmxpcDMuYmluZCh0aGlzKTtcclxufVxyXG5cclxuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZU9uZUEgOiBcImZhZGVcIiwgZmFkZU9uZUIgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkXCIsIGZhZGVPbmVBIDogXCJ1bkZhZGVcIiwgZmFkZU9uZUIgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlVHdvQSA6IFwiZmFkZVwiLCBmYWRlVHdvQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmRcIiwgZmFkZVR3b0EgOiBcInVuRmFkZVwiLCBmYWRlVHdvQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUaHJlZUEgOiBcImZhZGVcIiwgZmFkZVRocmVlQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmRcIiwgZmFkZVRocmVlQSA6IFwidW5GYWRlXCIsIGZhZGVUaHJlZUIgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5cclxucmVuZGVyKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzIGNvbnRlbnRDYW52YXMtLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjFcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDF9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAxfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWUxfSAgaWQ9XCJjYXJkMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIiBpZD17dGhpcy5zdGF0ZS5mYWRlT25lQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tNC1kYXRhLWd1eS5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIiBpZD17dGhpcy5zdGF0ZS5mYWRlT25lQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tNC1kYXRhLWd1eS5qcGdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiYmx1cigyMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZFRleHRcIiBpZD1cImNhcmRUZXh0MVwiPkNjb24gTWV0YWxzIG9mZmVycyBjdXR0aW5nLWVkZ2UgY2F0YWx5dGljIGNvbnZlcnRlciB0cmFpbmluZyBmb3IgYWxsIGNsaWVudHM7IGVuc3VyaW5nIGVmZmljaWVuY3kgYW5kIGFjY3VyYWN5IHdoZW4gbG9va2luZyB1byBjYXRhbHl0aWMgY29udmVydGVyIG51bWJlcnMgYW5kIHByaWNlcyBhcmUgYWx3YXlzIHJlYWRpbHkgYXZhaWxhYmxlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjJcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDJ9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lMn0gIGlkPVwiY2FyZDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVR3b0F9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTUtbG9uZ2hhdWwuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVR3b0J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBgJHtyZXF1aXJlKFwiLi4vcHVibGljL2Fzc2V0cy9DQ09OLTUtbG9uZ2hhdWwuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDJcIj5Gb3Igbm9uLW1vYmlsZSBjbGllbnRzLCBDY29uIE1ldGFscyBvZmZlcnMgd2Vla2x5LCBiaS13ZWVrbHksIG9yIG1vbnRobHkgcGlja3VwIHNlcnZpY2VzIHRocm91Z2hvdXQgdGhlIExvd2VyIE1haW5sYW5kIGFuZCB0aGUgRnJhc2VyIFZhbGxleS4gV2UgYWxzbyBvZmZlciBjdXN0b20gZnJlaWdodCBzb2x1dGlvbnMgd2l0aCBzZXZlcmFsIGxvZ2lzdGljcyBjb21wYW5pZXMgZm9yIGNsaWVudHMgb3V0c2lkZSBvdXIgc2VydmljZSBhcmVhLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGlwQ2FyZENvbnRhaW5lclwiIGlkPVwiZmxpcENvbnRhaW5lcjNcIiBvbk1vdXNlRW50ZXI9e3RoaXMuZmxpcDN9IG9uTW91c2VMZWF2ZT17dGhpcy51bmZsaXAzfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lM30gIGlkPVwiY2FyZDNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVRocmVlQX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tMzY5LWNhdGFseXN0LWphcnMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCIgaWQ9e3RoaXMuc3RhdGUuZmFkZVRocmVlQn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3JlcXVpcmUoXCIuLi9wdWJsaWMvYXNzZXRzL0NDT04tMzY5LWNhdGFseXN0LWphcnMuanBnXCIpfWAgKyBcIilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBcImJsdXIoMjBweClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmRUZXh0XCIgaWQ9XCJjYXJkVGV4dDNcIj5DY29uIE1ldGFscyBzcGVjaWFsaXplcyBpbiBsb29zZSBtYXRlcmlhbCBhc3NheSBzZXJ2aWNlcyB3aXRoIHRoZSBhYmlsaXR5IHRvIHJ1biBzbWFsbCBsb3RzIGZyb20gc2V2ZXJhbCBwb3VuZHMgdG8gc2V2ZXJhbCB0aG91c2FuZCBwb3VuZHMuIFdlIG9mZmVyIGV4Y2VwdGlvbmFsIHJlZmluaW5nIHRlcm1zIHRoYXQgbWF0Y2ggY3VycmVudCBzY3JhcCBjYXRhbHl0aWMgY29udmVydGVyIHByaWNlcywgcGx1cyBhIHF1aWNrIHR1cm5hcm91bmQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjZmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI3VuRmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTA1JSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuM3Z3KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjF2dyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMjUlKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tZnJvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiA0MHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmRUZXh0MSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMS40dncpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAjY2FyZFRleHQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxLjR2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkVGV4dDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDEuMnZ3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNtYWxsQ29udGVudDE7Il0sInNvdXJjZVJvb3QiOiIifQ==