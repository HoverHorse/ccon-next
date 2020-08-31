webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/SmallContent3.js":
/*!*************************************!*\
  !*** ./components/SmallContent3.js ***!
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






var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\SmallContent3.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var SmallContent3 = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(SmallContent3, _React$Component);

  var _super = _createSuper(SmallContent3);

  function SmallContent3(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SmallContent3);

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

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SmallContent3, [{
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
        className: "jsx-1470462821",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-1470462821" + " " + "contentCanvas contentCanvas--card",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 15
        }
      }, __jsx("ul", {
        id: "outer-list",
        className: "jsx-1470462821",
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
        className: "jsx-1470462821",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }
      }, __jsx("strong", {
        className: "jsx-1470462821",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 55
        }
      }, __jsx("u", {
        className: "jsx-1470462821",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 63
        }
      }, "Where is your pricelist and how can I get it?")), __jsx("br", {
        className: "jsx-1470462821",
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
        className: "jsx-1470462821",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }
      }, __jsx("strong", {
        className: "jsx-1470462821",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 55
        }
      }, __jsx("u", {
        className: "jsx-1470462821",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 63
        }
      }, "What is the minimum/maximum amount of catalytic converters I can bring to Ccon Metals?")), __jsx("br", {
        className: "jsx-1470462821",
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
        className: "jsx-1470462821",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }
      }, __jsx("strong", {
        className: "jsx-1470462821",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 56
        }
      }, __jsx("u", {
        className: "jsx-1470462821",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 64
        }
      }, "What is Downgrading/Upgrading? Why is it done?  Does Ccon do this?")), __jsx("br", {
        className: "jsx-1470462821",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 146
        }
      }), "Downgrading/Upgrading occurs when a buyer takes advantage of a seller by manipulating information. The reason a buyer may do this is to:", __jsx("ul", {
        id: "inner-list",
        className: "jsx-1470462821",
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
        className: "jsx-1470462821",
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
        className: "jsx-1470462821",
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
        className: "jsx-1470462821",
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
        className: "jsx-1470462821",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 25
        }
      }, __jsx("br", {
        className: "jsx-1470462821",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 86
        }
      }), "We at Ccon Metals would never do such a disservice to our valued customers."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1470462821",
        __self: this
      }, "@-webkit-keyframes fadeIn-jsx-1470462821{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeIn-jsx-1470462821{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadeOut-jsx-1470462821{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}@keyframes fadeOut-jsx-1470462821{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}#outer-list.jsx-1470462821{padding:0;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:100%;width:80%;margin:auto;}#inner-list.jsx-1470462821{margin-top:10px;}#inner-list-item.jsx-1470462821{display:list-item;}li.jsx-1470462821{height:25%;font-size:calc(12px + 0.5vw);display:inline-block;margin-top:5px;}#fade.jsx-1470462821{-webkit-animation:fadeOut-jsx-1470462821 ease 0.5s;animation:fadeOut-jsx-1470462821 ease 0.5s;}#unFade.jsx-1470462821{-webkit-animation:fadeIn-jsx-1470462821 ease 0.5s;animation:fadeIn-jsx-1470462821 ease 0.5s;}.cardText.jsx-1470462821{position:absolute;height:100%;width:100%;-webkit-transform:translateY(-65%);-ms-transform:translateY(-65%);transform:translateY(-65%);}#contentContainer.jsx-1470462821{position:absolute;height:100%;width:100%;background-image:url('image');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(25%);-ms-transform:translateX(25%);transform:translateX(25%);right:25%;overflow-y:auto;border:5px solid silver;box-sizing:border-box;}.contentCanvas.jsx-1470462821{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}.flipCard.jsx-1470462821{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}.card__face.jsx-1470462821{position:absolute;height:100%;width:100%;text-align:center;}.card__face--front.jsx-1470462821{background:white;overflow:hidden;}.card__face--back.jsx-1470462821{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );overflow:hidden;}.flipCard.is-flipped.jsx-1470462821{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCardContainer.jsx-1470462821{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333333333333333333333333%;margin:auto;display:inline-block;}@media (max-width:720px){#outer-list.jsx-1470462821{height:90%;}#inner-list-item.jsx-1470462821{height:auto;}.flipCardContainer.jsx-1470462821{width:100%;height:33%;margin-top:0%;}#card3.jsx-1470462821{margin-top:0%;}.card__face--back.jsx-1470462821{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-1470462821{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}#card2.jsx-1470462821{margin-top:0%;}.flipCard.jsx-1470462821{width:100%;height:100%;}.contentCanvas.jsx-1470462821{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:100%;width:100%;margin-top:0%;}#contentContainer.jsx-1470462821{height:100%;min-height:575px;overflow-y:scroll;}ul.jsx-1470462821{list-style:none;padding:0;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:75%;width:80%;margin:auto;}li.jsx-1470462821{margin-top:3vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxDb250ZW50My5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRWlCLEFBS2lDLEFBTUEsQUFNQSxBQUlBLEFBSUEsQUFNRixBQVFNLEFBSUUsQUFJUCxBQVFpQixBQUlELEFBSVQsQUFPQSxBQWNSLEFBU0UsQUFlTSxBQVFELEFBS0EsQUFNVyxBQVFWLEFBWUwsQUFJQyxBQUlELEFBT2QsQUFHb0IsQUFLVyxBQU0vQixBQUdjLEFBS2dCLEFBU2YsQUFPSSxBQVNELFVBM01qQixBQU1BLEFBTUEsQUFJQSxBQUlBLEFBTTZCLEFBcURqQixDQXJDaUIsQUFvRzdCLEFBUWEsQUF3QkMsQ0F0RkUsQUEwRGhCLEFBMENtQixFQWhDbkIsQUFjQSxDQWtDQSxDQTFLRixBQWlLYyxDQXBGSSxBQUtZLEFBNENFLENBMUhoQyxBQW9CYyxBQU9BLEFBc0NBLElBdkJELEFBdUVLLENBd0JoQixHQXFCK0IsRUEzR2YsQ0FvR0ksQ0FsSVQsQUFPQSxBQXNDQSxHQXZCQyxBQStCZCxHQXdDRSxJQTdHcUIsQ0FrQnhCLEFBTWlDLEFBdUNaLEdBaEJQLENBUkcsRUE0R2QsUUFuR1ksSUFQZCxBQXVCQSxFQS9EaUIsTUFnREwsSUF4QndCLEtBdEJwQyxDQStDdUIsWUFxQ1gsQ0FpRFMsRUE3SHJCLEVBSkEsRUF3RUEsQUEyQ0UsRUF2RTBCLENBcUNkLE1BOURNLEVBK0dKLElBaERxQixFQWZuQixBQTRDaEIsTUFvQmEsSUEvR2EsTUFnRDVCLENBZ0VrQixHQTNKSixDQWtDZCxVQTBIRSxDQTNKVSxDQXlHRSxHQWdFQyxNQXhLRCxHQXlHUyxFQWdFVCxPQXhLZCxHQXlLZ0IsU0EvRGhCLEdBZ0VFLGtCQXpHNEIsYUF4QmxCLFVBQ00sZ0JBQ1Esd0JBQ0Ysc0JBQ3hCLFdBcUJvQixrQkFDSCxlQUVqQiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXFNtYWxsQ29udGVudDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgU21hbGxDb250ZW50MyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgICAgZmFkZU9uZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVPbmVCOiBcImZhZGVcIixcclxuICAgICAgZmFkZVR3b0E6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUd29COiBcImZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQjogXCJmYWRlXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mbGlwMSA9IHRoaXMuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMSA9IHRoaXMudW5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMiA9IHRoaXMuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMiA9IHRoaXMudW5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMyA9IHRoaXMuZmxpcDMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMyA9IHRoaXMudW5mbGlwMy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlT25lQSA6IFwiZmFkZVwiLCBmYWRlT25lQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiwgZmFkZU9uZUEgOiBcInVuRmFkZVwiLCBmYWRlT25lQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUd29BIDogXCJmYWRlXCIsIGZhZGVUd29CIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZFwiLCBmYWRlVHdvQSA6IFwidW5GYWRlXCIsIGZhZGVUd29CIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVRocmVlQSA6IFwiZmFkZVwiLCBmYWRlVGhyZWVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiLCBmYWRlVGhyZWVBIDogXCJ1bkZhZGVcIiwgZmFkZVRocmVlQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgIDx1bCBpZD1cIm91dGVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiB9fT48c3Ryb25nPjx1PldoZXJlIGlzIHlvdXIgcHJpY2VsaXN0IGFuZCBob3cgY2FuIEkgZ2V0IGl0PzwvdT48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBPdXIgcHJpY2VsaXN0IGNhbiBvbmx5IGJlIGZvdW5kIHdpdGhpbiB0aGUgQ2NvbiBSZXZvbHV0aW9uIFdlYiBBcHAuIFByb3NwZWN0aXZlIGNsaWVudHMgZGVzaXJpbmcgYW4gaW52aXRhdGlvbiB0byB0aGUgYXBwIG11c3QgY29udGFjdCB1cyBieSBwaG9uZSBvciBlbWFpbC5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBsaXN0U3R5bGU6IFwibm9uZVwiIH19PjxzdHJvbmc+PHU+V2hhdCBpcyB0aGUgbWluaW11bS9tYXhpbXVtIGFtb3VudCBvZiBjYXRhbHl0aWMgY29udmVydGVycyBJIGNhbiBicmluZyB0byBDY29uIE1ldGFscz88L3U+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgVW5saWtlIG1vc3QgY2F0YWx5dGljIGNvbnZlcnRlciByZWN5Y2xpbmcgYnVzaW5lc3NlcywgQ2NvbiBNZXRhbHMgaGFzIG5vIGNvbnZlcnRlciBtaW5pbXVtcyBvciBtYXhpbXVtcy4gIFJlc3QgYXNzdXJlZCB0aGF0LCByZWdhcmRsZXNzIG9mIHF1YW50aXR5LCB5b3VyIGNvbnZlcnRlcnMgd2lsbCBiZSBwdXJjaGFzZWQgZmFpcmx5LiBDYWxsIHVzIHRvIGxlYXJuIG1vcmUhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiB9fSA+PHN0cm9uZz48dT5XaGF0IGlzIERvd25ncmFkaW5nL1VwZ3JhZGluZz8gV2h5IGlzIGl0IGRvbmU/ICBEb2VzIENjb24gZG8gdGhpcz88L3U+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgRG93bmdyYWRpbmcvVXBncmFkaW5nIG9jY3VycyB3aGVuIGEgYnV5ZXIgdGFrZXMgYWR2YW50YWdlIG9mIGEgc2VsbGVyIGJ5IG1hbmlwdWxhdGluZyBpbmZvcm1hdGlvbi4gVGhlIHJlYXNvbiBhIGJ1eWVyIG1heSBkbyB0aGlzIGlzIHRvOiBcclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cImlubmVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiaW5uZXItbGlzdC1pdGVtXCIgc3R5bGU9e3sgbGlzdFN0eWxlOiBcInNxdWFyZVwiLCBwYWRkaW5nOiBcIjBcIiwgbWFyZ2luOiBcIjBcIiwgbGlzdFN0eWxlUG9zaXRpb246IFwiaW5zaWRlXCIgfX0+U2VjdXJlIG5ldyBjbGllbnRzIGJ5IOKAnXdvd2luZ+KAnSB0aGVtIHdpdGggYXJ0aWZpY2lhbCBjYXRhbHl0aWMgY29udmVydGVyIHByaWNlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cImlubmVyLWxpc3QtaXRlbVwiIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJzcXVhcmVcIiwgcGFkZGluZzogXCIwXCIsIG1hcmdpbjogXCIwXCIsIGxpc3RTdHlsZVBvc2l0aW9uOiBcImluc2lkZVwiIH19PkJvb3N0IHRoZSB2YWx1ZSBvZiBwb3B1bGFyIGNvbnZlcnRlcnMgYnkgcHVsbGluZyB2YWx1ZSBhd2F5IGZyb20gbGVzc2VyIGtub3duIGNvbnZlcnRlcnM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJpbm5lci1saXN0LWl0ZW1cIiBzdHlsZT17eyBsaXN0U3R5bGU6IFwic3F1YXJlXCIsIHBhZGRpbmc6IFwiMFwiLCBtYXJnaW46IFwiMFwiLCBsaXN0U3R5bGVQb3NpdGlvbjogXCJpbnNpZGVcIiB9fT5UYWtlIG1vbmV5IGF3YXkgZnJvbSBvbmUgY2xpZW50IHNvIGEgbW9yZSDigJx3b3J0aHdoaWxl4oCdIGNsaWVudCBjYW4gYmUgb3ZlcnBhaWQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiwgcGFkZGluZzogXCIwXCIsIG1hcmdpbjogXCIwXCIgfX0+PGJyIC8+V2UgYXQgQ2NvbiBNZXRhbHMgd291bGQgbmV2ZXIgZG8gc3VjaCBhIGRpc3NlcnZpY2UgdG8gb3VyIHZhbHVlZCBjdXN0b21lcnMuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI291dGVyLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjaW5uZXItbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2lubmVyLWxpc3QtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjV2dyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2ZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZU91dCBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICN1bkZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjUlKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsMTkyLDE5Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmQxIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI291dGVyLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjaW5uZXItbGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDN2aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNtYWxsQ29udGVudDM7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SmallContent3.js */"));
    }
  }]);

  return SmallContent3;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SmallContent3);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NtYWxsQ29udGVudDMuanMiXSwibmFtZXMiOlsiU21hbGxDb250ZW50MyIsInByb3BzIiwic3RhdGUiLCJjbGFzc05hbWUxIiwiY2xhc3NOYW1lMiIsImNsYXNzTmFtZTMiLCJmYWRlT25lQSIsImZhZGVPbmVCIiwiZmFkZVR3b0EiLCJmYWRlVHdvQiIsImZhZGVUaHJlZUEiLCJmYWRlVGhyZWVCIiwiZmxpcDEiLCJiaW5kIiwidW5mbGlwMSIsImZsaXAyIiwidW5mbGlwMiIsImZsaXAzIiwidW5mbGlwMyIsInNldFN0YXRlIiwibGlzdFN0eWxlIiwicGFkZGluZyIsIm1hcmdpbiIsImxpc3RTdHlsZVBvc2l0aW9uIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLGE7Ozs7O0FBQ0oseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQVc7QUFDVEMsZ0JBQVUsRUFBRSxVQURIO0FBRVRDLGdCQUFVLEVBQUUsVUFGSDtBQUdUQyxnQkFBVSxFQUFFLFVBSEg7QUFJVEMsY0FBUSxFQUFFLFFBSkQ7QUFLVEMsY0FBUSxFQUFFLE1BTEQ7QUFNVEMsY0FBUSxFQUFFLFFBTkQ7QUFPVEMsY0FBUSxFQUFFLE1BUEQ7QUFRVEMsZ0JBQVUsRUFBRSxRQVJIO0FBU1RDLGdCQUFVLEVBQUU7QUFUSCxLQUFYO0FBWUEsVUFBS0MsS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBV0MsSUFBWCx5R0FBYjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIseUdBQWY7QUFDQSxVQUFLRSxLQUFMLEdBQWEsTUFBS0EsS0FBTCxDQUFXRixJQUFYLHlHQUFiO0FBQ0EsVUFBS0csT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUgsSUFBYix5R0FBZjtBQUNB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QUF5QixhQUFLLEVBQUU7QUFBRUEsbUJBQVMsRUFBRSxRQUFiO0FBQXVCQyxpQkFBTyxFQUFFLEdBQWhDO0FBQXFDQyxnQkFBTSxFQUFFLEdBQTdDO0FBQWtEQywyQkFBaUIsRUFBRTtBQUFyRSxTQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0dBREYsRUFFRTtBQUFJLFVBQUUsRUFBQyxpQkFBUDtBQUF5QixhQUFLLEVBQUU7QUFBRUgsbUJBQVMsRUFBRSxRQUFiO0FBQXVCQyxpQkFBTyxFQUFFLEdBQWhDO0FBQXFDQyxnQkFBTSxFQUFFLEdBQTdDO0FBQWtEQywyQkFBaUIsRUFBRTtBQUFyRSxTQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0dBRkYsRUFHRTtBQUFJLFVBQUUsRUFBQyxpQkFBUDtBQUF5QixhQUFLLEVBQUU7QUFBRUgsbUJBQVMsRUFBRSxRQUFiO0FBQXVCQyxpQkFBTyxFQUFFLEdBQWhDO0FBQXFDQyxnQkFBTSxFQUFFLEdBQTdDO0FBQWtEQywyQkFBaUIsRUFBRTtBQUFyRSxTQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUdBSEYsRUFJRTtBQUFJLGFBQUssRUFBRTtBQUFFSCxtQkFBUyxFQUFFLE1BQWI7QUFBcUJDLGlCQUFPLEVBQUUsR0FBOUI7QUFBbUNDLGdCQUFNLEVBQUU7QUFBM0MsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBNkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQTdELGdGQUpGLENBRkYsQ0FQTixDQURBLENBRE47QUFBQTtBQUFBO0FBQUEsdXNsQkFETjtBQStPRDs7OztFQWxTMkJFLDRDQUFLLENBQUNDLFM7O0FBb1NuQnpCLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42NjU3N2I0OThmZDc0MWIxMmE2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFNtYWxsQ29udGVudDMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgIGNsYXNzTmFtZTE6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMjogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUzOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGZhZGVPbmVBOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlT25lQjogXCJmYWRlXCIsXHJcbiAgICAgIGZhZGVUd29BOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlVHdvQjogXCJmYWRlXCIsXHJcbiAgICAgIGZhZGVUaHJlZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUaHJlZUI6IFwiZmFkZVwiLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmxpcDEgPSB0aGlzLmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDEgPSB0aGlzLnVuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDIgPSB0aGlzLmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDIgPSB0aGlzLnVuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZmxpcDMgPSB0aGlzLmZsaXAzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVuZmxpcDMgPSB0aGlzLnVuZmxpcDMuYmluZCh0aGlzKTtcclxufVxyXG5cclxuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZU9uZUEgOiBcImZhZGVcIiwgZmFkZU9uZUIgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDEoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTEgOiBcImZsaXBDYXJkXCIsIGZhZGVPbmVBIDogXCJ1bkZhZGVcIiwgZmFkZU9uZUIgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlVHdvQSA6IFwiZmFkZVwiLCBmYWRlVHdvQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMigpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMiA6IFwiZmxpcENhcmRcIiwgZmFkZVR3b0EgOiBcInVuRmFkZVwiLCBmYWRlVHdvQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUaHJlZUEgOiBcImZhZGVcIiwgZmFkZVRocmVlQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmRcIiwgZmFkZVRocmVlQSA6IFwidW5GYWRlXCIsIGZhZGVUaHJlZUIgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5cclxucmVuZGVyKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2FudmFzIGNvbnRlbnRDYW52YXMtLWNhcmRcIj5cclxuICAgICAgICAgICAgICA8dWwgaWQ9XCJvdXRlci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCIgfX0+PHN0cm9uZz48dT5XaGVyZSBpcyB5b3VyIHByaWNlbGlzdCBhbmQgaG93IGNhbiBJIGdldCBpdD88L3U+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgT3VyIHByaWNlbGlzdCBjYW4gb25seSBiZSBmb3VuZCB3aXRoaW4gdGhlIENjb24gUmV2b2x1dGlvbiBXZWIgQXBwLiBQcm9zcGVjdGl2ZSBjbGllbnRzIGRlc2lyaW5nIGFuIGludml0YXRpb24gdG8gdGhlIGFwcCBtdXN0IGNvbnRhY3QgdXMgYnkgcGhvbmUgb3IgZW1haWwuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiB9fT48c3Ryb25nPjx1PldoYXQgaXMgdGhlIG1pbmltdW0vbWF4aW11bSBhbW91bnQgb2YgY2F0YWx5dGljIGNvbnZlcnRlcnMgSSBjYW4gYnJpbmcgdG8gQ2NvbiBNZXRhbHM/PC91Pjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFVubGlrZSBtb3N0IGNhdGFseXRpYyBjb252ZXJ0ZXIgcmVjeWNsaW5nIGJ1c2luZXNzZXMsIENjb24gTWV0YWxzIGhhcyBubyBjb252ZXJ0ZXIgbWluaW11bXMgb3IgbWF4aW11bXMuICBSZXN0IGFzc3VyZWQgdGhhdCwgcmVnYXJkbGVzcyBvZiBxdWFudGl0eSwgeW91ciBjb252ZXJ0ZXJzIHdpbGwgYmUgcHVyY2hhc2VkIGZhaXJseS4gQ2FsbCB1cyB0byBsZWFybiBtb3JlIVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCIgfX0gPjxzdHJvbmc+PHU+V2hhdCBpcyBEb3duZ3JhZGluZy9VcGdyYWRpbmc/IFdoeSBpcyBpdCBkb25lPyAgRG9lcyBDY29uIGRvIHRoaXM/PC91Pjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIERvd25ncmFkaW5nL1VwZ3JhZGluZyBvY2N1cnMgd2hlbiBhIGJ1eWVyIHRha2VzIGFkdmFudGFnZSBvZiBhIHNlbGxlciBieSBtYW5pcHVsYXRpbmcgaW5mb3JtYXRpb24uIFRoZSByZWFzb24gYSBidXllciBtYXkgZG8gdGhpcyBpcyB0bzogXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJpbm5lci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cImlubmVyLWxpc3QtaXRlbVwiIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJzcXVhcmVcIiwgcGFkZGluZzogXCIwXCIsIG1hcmdpbjogXCIwXCIsIGxpc3RTdHlsZVBvc2l0aW9uOiBcImluc2lkZVwiIH19PlNlY3VyZSBuZXcgY2xpZW50cyBieSDigJ13b3dpbmfigJ0gdGhlbSB3aXRoIGFydGlmaWNpYWwgY2F0YWx5dGljIGNvbnZlcnRlciBwcmljZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJpbm5lci1saXN0LWl0ZW1cIiBzdHlsZT17eyBsaXN0U3R5bGU6IFwic3F1YXJlXCIsIHBhZGRpbmc6IFwiMFwiLCBtYXJnaW46IFwiMFwiLCBsaXN0U3R5bGVQb3NpdGlvbjogXCJpbnNpZGVcIiB9fT5Cb29zdCB0aGUgdmFsdWUgb2YgcG9wdWxhciBjb252ZXJ0ZXJzIGJ5IHB1bGxpbmcgdmFsdWUgYXdheSBmcm9tIGxlc3NlciBrbm93biBjb252ZXJ0ZXJzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiaW5uZXItbGlzdC1pdGVtXCIgc3R5bGU9e3sgbGlzdFN0eWxlOiBcInNxdWFyZVwiLCBwYWRkaW5nOiBcIjBcIiwgbWFyZ2luOiBcIjBcIiwgbGlzdFN0eWxlUG9zaXRpb246IFwiaW5zaWRlXCIgfX0+VGFrZSBtb25leSBhd2F5IGZyb20gb25lIGNsaWVudCBzbyBhIG1vcmUg4oCcd29ydGh3aGlsZeKAnSBjbGllbnQgY2FuIGJlIG92ZXJwYWlkPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCIsIHBhZGRpbmc6IFwiMFwiLCBtYXJnaW46IFwiMFwiIH19PjxiciAvPldlIGF0IENjb24gTWV0YWxzIHdvdWxkIG5ldmVyIGRvIHN1Y2ggYSBkaXNzZXJ2aWNlIHRvIG91ciB2YWx1ZWQgY3VzdG9tZXJzLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNvdXRlci1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2lubmVyLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNpbm5lci1saXN0LWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMC41dncpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNmYWRlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVPdXQgZWFzZSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjdW5GYWRlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTY1JSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjUlKTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgc2lsdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1mcm9udCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDQwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNvdXRlci1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2lubmVyLWxpc3QtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbik7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTbWFsbENvbnRlbnQzOyJdLCJzb3VyY2VSb290IjoiIn0=