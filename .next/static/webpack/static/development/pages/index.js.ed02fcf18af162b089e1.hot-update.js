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
        className: "jsx-155028009",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-155028009" + " " + "contentCanvas contentCanvas--card",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 15
        }
      }, __jsx("ul", {
        id: "outer-list",
        className: "jsx-155028009",
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
        className: "jsx-155028009",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }
      }, __jsx("strong", {
        className: "jsx-155028009",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 55
        }
      }, __jsx("u", {
        className: "jsx-155028009",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 63
        }
      }, "Where is your pricelist and how can I get it?")), __jsx("br", {
        className: "jsx-155028009",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 124
        }
      }), "Our pricelist can only be found within the Ccon Revolution Web App. Prospective clients interested in receiving an invitation to join, must submit a request here or contact us to speak with a customer success specialist."), __jsx("li", {
        style: {
          listStyle: "none"
        },
        className: "jsx-155028009",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }
      }, __jsx("strong", {
        className: "jsx-155028009",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 55
        }
      }, __jsx("u", {
        className: "jsx-155028009",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 63
        }
      }, "What is the minimum/maximum amount of catalytic converters I can bring to Ccon Metals?")), __jsx("br", {
        className: "jsx-155028009",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 165
        }
      }), "Unlike most catalytic converter recycling businesses, we at Ccon Metals have no converter minimums or maximums.  Rest assured that regardless of quantity, your converters will be purchased fairly."), __jsx("li", {
        style: {
          listStyle: "none"
        },
        className: "jsx-155028009",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }
      }, __jsx("strong", {
        className: "jsx-155028009",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 56
        }
      }, __jsx("u", {
        className: "jsx-155028009",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 64
        }
      }, "What is Downgrading/Upgrading? Why is it done?  Does Ccon do this?")), __jsx("br", {
        className: "jsx-155028009",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 146
        }
      }), "Downgrading/Upgrading is the process of a buyer taking advantage of a seller by manipulating information. The reason a buyer may do this is to:", __jsx("ul", {
        id: "inner-list",
        className: "jsx-155028009",
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
          margin: "0"
        },
        className: "jsx-155028009",
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
          margin: "0"
        },
        className: "jsx-155028009",
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
          margin: "0"
        },
        className: "jsx-155028009",
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
        className: "jsx-155028009",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 25
        }
      }, __jsx("br", {
        className: "jsx-155028009",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 86
        }
      }), "We at Ccon Metals would never do such a disservice to our valued customers."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "155028009",
        __self: this
      }, "@-webkit-keyframes fadeIn-jsx-155028009{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeIn-jsx-155028009{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadeOut-jsx-155028009{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}@keyframes fadeOut-jsx-155028009{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}#outer-list.jsx-155028009{padding:0;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:100%;width:80%;margin:auto;}#inner-list.jsx-155028009{margin-top:10px;}#inner-list-item.jsx-155028009{display:list-item;}li.jsx-155028009{height:25%;font-size:calc(12px + 0.5vw);display:inline-block;margin-top:5px;}#fade.jsx-155028009{-webkit-animation:fadeOut-jsx-155028009 ease 0.5s;animation:fadeOut-jsx-155028009 ease 0.5s;}#unFade.jsx-155028009{-webkit-animation:fadeIn-jsx-155028009 ease 0.5s;animation:fadeIn-jsx-155028009 ease 0.5s;}.cardText.jsx-155028009{position:absolute;height:100%;width:100%;-webkit-transform:translateY(-65%);-ms-transform:translateY(-65%);transform:translateY(-65%);}#contentContainer.jsx-155028009{position:absolute;height:100%;width:100%;background-image:url('image');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(25%);-ms-transform:translateX(25%);transform:translateX(25%);right:25%;overflow:hidden;border:5px solid silver;box-sizing:border-box;}.contentCanvas.jsx-155028009{z-index:1;height:100%;width:100%;margin:auto;margin-top:0%;}.flipCard.jsx-155028009{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}.card__face.jsx-155028009{position:absolute;height:100%;width:100%;text-align:center;}.card__face--front.jsx-155028009{background:white;overflow:hidden;}.card__face--back.jsx-155028009{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );overflow:hidden;}.flipCard.is-flipped.jsx-155028009{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCardContainer.jsx-155028009{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333333333333333333333333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-155028009{width:100%;height:33%;margin-top:0%;}#card3.jsx-155028009{margin-top:0%;}.card__face--back.jsx-155028009{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-155028009{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}#card2.jsx-155028009{margin-top:0%;}.flipCard.jsx-155028009{width:100%;height:100%;}.contentCanvas.jsx-155028009{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:102%;width:100%;margin-top:0%;}#contentContainer.jsx-155028009{height:100%;min-height:575px;overflow:hidden;}ul.jsx-155028009{list-style:none;padding:0;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:75%;width:80%;margin:auto;}li.jsx-155028009{margin-top:3vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcU21hbGxDb250ZW50My5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RWlCLEFBS2lDLEFBTUEsQUFNQSxBQUlBLEFBSUEsQUFNRixBQVFNLEFBSUUsQUFJUCxBQVFpQixBQUlELEFBSVQsQUFPQSxBQWNSLEFBU0UsQUFlTSxBQVFELEFBS0EsQUFNVyxBQVFWLEFBV0wsQUFPZCxBQUdvQixBQUtXLEFBTS9CLEFBR2MsQUFLZ0IsQUFTZixBQU9JLEFBU0QsVUFsTWpCLEFBTUEsQUFNQSxBQUlBLEFBSUEsQUFNNkIsQUFxRGpCLENBckNpQixBQW1HaEIsQUF3QkMsQ0E3RUUsQUEyRkcsRUFoQ25CLEFBY0EsQ0FrQ0EsQ0FqS0YsQUF3SmMsQ0EzRUksQUFLWSxBQW1DRSxDQWpIaEMsQUFvQmMsQUFPQSxBQXNDQSxJQXZCRCxBQThESyxDQXdCaEIsR0FxQitCLEVBbEdmLENBMkZFLENBekhQLEFBT0EsQUFzQ0EsR0F2QkMsQUErQmQsR0ErQkUsSUFwR3FCLENBa0J4QixBQU1pQyxBQXVDWixHQWhCUCxDQVJHLEFBbUdkLFVBMUZZLElBUGQsQUF1QkEsRUEvRGlCLE1BZ0RMLElBeEJ3QixLQXRCcEMsQ0ErQ3VCLFlBcUNYLENBNUVaLEFBb0hxQixFQXhIckIsSUF3RUEsQUFrQ0UsRUE5RDBCLENBcUNkLE1BOURNLEVBc0dKLElBdkNxQixFQWZuQixBQW1DaEIsTUFvQmEsSUF0R2EsTUFnRDVCLENBdURrQixHQWxKSixDQWtDZCxVQWlIRSxDQWxKVSxDQXlHRSxHQXVEQyxNQS9KRCxHQXlHUyxFQXVEVCxPQS9KZCxHQWdLZ0IsU0F0RGhCLEdBdURFLGtCQWhHNEIsYUF4QmxCLFVBQ00sZ0JBQ1Esd0JBQ0Ysc0JBQ3hCLFdBcUJvQixrQkFDSCxlQUVqQiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXFNtYWxsQ29udGVudDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgU21hbGxDb250ZW50MyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgICAgZmFkZU9uZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVPbmVCOiBcImZhZGVcIixcclxuICAgICAgZmFkZVR3b0E6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUd29COiBcImZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQjogXCJmYWRlXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mbGlwMSA9IHRoaXMuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMSA9IHRoaXMudW5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMiA9IHRoaXMuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMiA9IHRoaXMudW5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMyA9IHRoaXMuZmxpcDMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMyA9IHRoaXMudW5mbGlwMy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlT25lQSA6IFwiZmFkZVwiLCBmYWRlT25lQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiwgZmFkZU9uZUEgOiBcInVuRmFkZVwiLCBmYWRlT25lQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUd29BIDogXCJmYWRlXCIsIGZhZGVUd29CIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZFwiLCBmYWRlVHdvQSA6IFwidW5GYWRlXCIsIGZhZGVUd29CIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVRocmVlQSA6IFwiZmFkZVwiLCBmYWRlVGhyZWVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiLCBmYWRlVGhyZWVBIDogXCJ1bkZhZGVcIiwgZmFkZVRocmVlQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgIDx1bCBpZD1cIm91dGVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiB9fT48c3Ryb25nPjx1PldoZXJlIGlzIHlvdXIgcHJpY2VsaXN0IGFuZCBob3cgY2FuIEkgZ2V0IGl0PzwvdT48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBPdXIgcHJpY2VsaXN0IGNhbiBvbmx5IGJlIGZvdW5kIHdpdGhpbiB0aGUgQ2NvbiBSZXZvbHV0aW9uIFdlYiBBcHAuIFByb3NwZWN0aXZlIGNsaWVudHMgaW50ZXJlc3RlZCBpbiByZWNlaXZpbmcgYW4gaW52aXRhdGlvbiB0byBqb2luLCBtdXN0IHN1Ym1pdCBhIHJlcXVlc3QgaGVyZSBvciBjb250YWN0IHVzIHRvIHNwZWFrIHdpdGggYSBjdXN0b21lciBzdWNjZXNzIHNwZWNpYWxpc3QuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCIgfX0+PHN0cm9uZz48dT5XaGF0IGlzIHRoZSBtaW5pbXVtL21heGltdW0gYW1vdW50IG9mIGNhdGFseXRpYyBjb252ZXJ0ZXJzIEkgY2FuIGJyaW5nIHRvIENjb24gTWV0YWxzPzwvdT48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBVbmxpa2UgbW9zdCBjYXRhbHl0aWMgY29udmVydGVyIHJlY3ljbGluZyBidXNpbmVzc2VzLCB3ZSBhdCBDY29uIE1ldGFscyBoYXZlIG5vIGNvbnZlcnRlciBtaW5pbXVtcyBvciBtYXhpbXVtcy4gIFJlc3QgYXNzdXJlZCB0aGF0IHJlZ2FyZGxlc3Mgb2YgcXVhbnRpdHksIHlvdXIgY29udmVydGVycyB3aWxsIGJlIHB1cmNoYXNlZCBmYWlybHkuIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCIgfX0gPjxzdHJvbmc+PHU+V2hhdCBpcyBEb3duZ3JhZGluZy9VcGdyYWRpbmc/IFdoeSBpcyBpdCBkb25lPyAgRG9lcyBDY29uIGRvIHRoaXM/PC91Pjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIERvd25ncmFkaW5nL1VwZ3JhZGluZyBpcyB0aGUgcHJvY2VzcyBvZiBhIGJ1eWVyIHRha2luZyBhZHZhbnRhZ2Ugb2YgYSBzZWxsZXIgYnkgbWFuaXB1bGF0aW5nIGluZm9ybWF0aW9uLiBUaGUgcmVhc29uIGEgYnV5ZXIgbWF5IGRvIHRoaXMgaXMgdG86IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwiaW5uZXItbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJpbm5lci1saXN0LWl0ZW1cIiBzdHlsZT17eyBsaXN0U3R5bGU6IFwic3F1YXJlXCIsIHBhZGRpbmc6IFwiMFwiLCBtYXJnaW46IFwiMFwiIH19PlNlY3VyZSBuZXcgY2xpZW50cyBieSDigJ13b3dpbmfigJ0gdGhlbSB3aXRoIGFydGlmaWNpYWwgY2F0YWx5dGljIGNvbnZlcnRlciBwcmljZXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJpbm5lci1saXN0LWl0ZW1cIiBzdHlsZT17eyBsaXN0U3R5bGU6IFwic3F1YXJlXCIsIHBhZGRpbmc6IFwiMFwiLCBtYXJnaW46IFwiMFwiIH19PkJvb3N0IHRoZSB2YWx1ZSBvZiBwb3B1bGFyIGNvbnZlcnRlcnMgYnkgcHVsbGluZyB2YWx1ZSBhd2F5IGZyb20gbGVzc2VyIGtub3duIGNvbnZlcnRlcnM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJpbm5lci1saXN0LWl0ZW1cIiBzdHlsZT17eyBsaXN0U3R5bGU6IFwic3F1YXJlXCIsIHBhZGRpbmc6IFwiMFwiLCBtYXJnaW46IFwiMFwiIH19PlRha2UgbW9uZXkgYXdheSBmcm9tIG9uZSBjbGllbnQgc28gYSBtb3JlIOKAnHdvcnRod2hpbGXigJ0gY2xpZW50IGNhbiBiZSBvdmVycGFpZDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBsaXN0U3R5bGU6IFwibm9uZVwiLCBwYWRkaW5nOiBcIjBcIiwgbWFyZ2luOiBcIjBcIiB9fT48YnIgLz5XZSBhdCBDY29uIE1ldGFscyB3b3VsZCBuZXZlciBkbyBzdWNoIGEgZGlzc2VydmljZSB0byBvdXIgdmFsdWVkIGN1c3RvbWVycy48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjb3V0ZXItbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNpbm5lci1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjaW5uZXItbGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuNXZ3KTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjZmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI3VuRmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02NSUpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tZnJvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjY2FyZDEge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiA0MHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZC5pcy1mbGlwcGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY2FyZDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCVcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbik7XHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTbWFsbENvbnRlbnQzOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\SmallContent3.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NtYWxsQ29udGVudDMuanMiXSwibmFtZXMiOlsiU21hbGxDb250ZW50MyIsInByb3BzIiwic3RhdGUiLCJjbGFzc05hbWUxIiwiY2xhc3NOYW1lMiIsImNsYXNzTmFtZTMiLCJmYWRlT25lQSIsImZhZGVPbmVCIiwiZmFkZVR3b0EiLCJmYWRlVHdvQiIsImZhZGVUaHJlZUEiLCJmYWRlVGhyZWVCIiwiZmxpcDEiLCJiaW5kIiwidW5mbGlwMSIsImZsaXAyIiwidW5mbGlwMiIsImZsaXAzIiwidW5mbGlwMyIsInNldFN0YXRlIiwibGlzdFN0eWxlIiwicGFkZGluZyIsIm1hcmdpbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVNQSxhOzs7OztBQUNKLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFXO0FBQ1RDLGdCQUFVLEVBQUUsVUFESDtBQUVUQyxnQkFBVSxFQUFFLFVBRkg7QUFHVEMsZ0JBQVUsRUFBRSxVQUhIO0FBSVRDLGNBQVEsRUFBRSxRQUpEO0FBS1RDLGNBQVEsRUFBRSxNQUxEO0FBTVRDLGNBQVEsRUFBRSxRQU5EO0FBT1RDLGNBQVEsRUFBRSxNQVBEO0FBUVRDLGdCQUFVLEVBQUUsUUFSSDtBQVNUQyxnQkFBVSxFQUFFO0FBVEgsS0FBWDtBQVlBLFVBQUtDLEtBQUwsR0FBYSxNQUFLQSxLQUFMLENBQVdDLElBQVgseUdBQWI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLHlHQUFmO0FBQ0EsVUFBS0UsS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBV0YsSUFBWCx5R0FBYjtBQUNBLFVBQUtHLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFILElBQWIseUdBQWY7QUFDQSxVQUFLSSxLQUFMLEdBQWEsTUFB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LG1CQUFTLEVBQUUsUUFBYjtBQUF1QkMsaUJBQU8sRUFBRSxHQUFoQztBQUFxQ0MsZ0JBQU0sRUFBRTtBQUE3QyxTQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0dBREYsRUFFRTtBQUFJLFVBQUUsRUFBQyxpQkFBUDtBQUF5QixhQUFLLEVBQUU7QUFBRUYsbUJBQVMsRUFBRSxRQUFiO0FBQXVCQyxpQkFBTyxFQUFFLEdBQWhDO0FBQXFDQyxnQkFBTSxFQUFFO0FBQTdDLFNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvR0FGRixFQUdFO0FBQUksVUFBRSxFQUFDLGlCQUFQO0FBQXlCLGFBQUssRUFBRTtBQUFFRixtQkFBUyxFQUFFLFFBQWI7QUFBdUJDLGlCQUFPLEVBQUUsR0FBaEM7QUFBcUNDLGdCQUFNLEVBQUU7QUFBN0MsU0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1HQUhGLEVBSUU7QUFBSSxhQUFLLEVBQUU7QUFBRUYsbUJBQVMsRUFBRSxNQUFiO0FBQXFCQyxpQkFBTyxFQUFFLEdBQTlCO0FBQW1DQyxnQkFBTSxFQUFFO0FBQTNDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUE3RCxnRkFKRixDQUZGLENBUk4sQ0FEQSxDQUROO0FBQUE7QUFBQTtBQUFBLG91a0JBRE47QUF1T0Q7Ozs7RUExUjJCQyw0Q0FBSyxDQUFDQyxTOztBQTRSbkJ4Qiw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZWQwMmZjZjE4YWYxNjJiMDg5ZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTbWFsbENvbnRlbnQzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICBjbGFzc05hbWUxOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTI6IFwiZmxpcENhcmRcIixcclxuICAgICAgY2xhc3NOYW1lMzogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBmYWRlT25lQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZU9uZUI6IFwiZmFkZVwiLFxyXG4gICAgICBmYWRlVHdvQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVR3b0I6IFwiZmFkZVwiLFxyXG4gICAgICBmYWRlVGhyZWVBOiBcInVuRmFkZVwiLFxyXG4gICAgICBmYWRlVGhyZWVCOiBcImZhZGVcIixcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZsaXAxID0gdGhpcy5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAxID0gdGhpcy51bmZsaXAxLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAyID0gdGhpcy5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAyID0gdGhpcy51bmZsaXAyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZsaXAzID0gdGhpcy5mbGlwMy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51bmZsaXAzID0gdGhpcy51bmZsaXAzLmJpbmQodGhpcyk7XHJcbn1cclxuXHJcbmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVPbmVBIDogXCJmYWRlXCIsIGZhZGVPbmVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAxKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUxIDogXCJmbGlwQ2FyZFwiLCBmYWRlT25lQSA6IFwidW5GYWRlXCIsIGZhZGVPbmVCIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVR3b0EgOiBcImZhZGVcIiwgZmFkZVR3b0IgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDIoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTIgOiBcImZsaXBDYXJkXCIsIGZhZGVUd29BIDogXCJ1bkZhZGVcIiwgZmFkZVR3b0IgOiBcImZhZGVcIiB9KVxyXG59XHJcblxyXG5mbGlwMygpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMyA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlVGhyZWVBIDogXCJmYWRlXCIsIGZhZGVUaHJlZUIgOiBcInVuRmFkZVwiIH0pXHJcbn1cclxuXHJcbnVuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkXCIsIGZhZGVUaHJlZUEgOiBcInVuRmFkZVwiLCBmYWRlVGhyZWVCIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuXHJcbnJlbmRlcigpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudENhbnZhcyBjb250ZW50Q2FudmFzLS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgPHVsIGlkPVwib3V0ZXItbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBsaXN0U3R5bGU6IFwibm9uZVwiIH19PjxzdHJvbmc+PHU+V2hlcmUgaXMgeW91ciBwcmljZWxpc3QgYW5kIGhvdyBjYW4gSSBnZXQgaXQ/PC91Pjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIE91ciBwcmljZWxpc3QgY2FuIG9ubHkgYmUgZm91bmQgd2l0aGluIHRoZSBDY29uIFJldm9sdXRpb24gV2ViIEFwcC4gUHJvc3BlY3RpdmUgY2xpZW50cyBpbnRlcmVzdGVkIGluIHJlY2VpdmluZyBhbiBpbnZpdGF0aW9uIHRvIGpvaW4sIG11c3Qgc3VibWl0IGEgcmVxdWVzdCBoZXJlIG9yIGNvbnRhY3QgdXMgdG8gc3BlYWsgd2l0aCBhIGN1c3RvbWVyIHN1Y2Nlc3Mgc3BlY2lhbGlzdC5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiB9fT48c3Ryb25nPjx1PldoYXQgaXMgdGhlIG1pbmltdW0vbWF4aW11bSBhbW91bnQgb2YgY2F0YWx5dGljIGNvbnZlcnRlcnMgSSBjYW4gYnJpbmcgdG8gQ2NvbiBNZXRhbHM/PC91Pjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFVubGlrZSBtb3N0IGNhdGFseXRpYyBjb252ZXJ0ZXIgcmVjeWNsaW5nIGJ1c2luZXNzZXMsIHdlIGF0IENjb24gTWV0YWxzIGhhdmUgbm8gY29udmVydGVyIG1pbmltdW1zIG9yIG1heGltdW1zLiAgUmVzdCBhc3N1cmVkIHRoYXQgcmVnYXJkbGVzcyBvZiBxdWFudGl0eSwgeW91ciBjb252ZXJ0ZXJzIHdpbGwgYmUgcHVyY2hhc2VkIGZhaXJseS4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiB9fSA+PHN0cm9uZz48dT5XaGF0IGlzIERvd25ncmFkaW5nL1VwZ3JhZGluZz8gV2h5IGlzIGl0IGRvbmU/ICBEb2VzIENjb24gZG8gdGhpcz88L3U+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgRG93bmdyYWRpbmcvVXBncmFkaW5nIGlzIHRoZSBwcm9jZXNzIG9mIGEgYnV5ZXIgdGFraW5nIGFkdmFudGFnZSBvZiBhIHNlbGxlciBieSBtYW5pcHVsYXRpbmcgaW5mb3JtYXRpb24uIFRoZSByZWFzb24gYSBidXllciBtYXkgZG8gdGhpcyBpcyB0bzogXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJpbm5lci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cImlubmVyLWxpc3QtaXRlbVwiIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJzcXVhcmVcIiwgcGFkZGluZzogXCIwXCIsIG1hcmdpbjogXCIwXCIgfX0+U2VjdXJlIG5ldyBjbGllbnRzIGJ5IOKAnXdvd2luZ+KAnSB0aGVtIHdpdGggYXJ0aWZpY2lhbCBjYXRhbHl0aWMgY29udmVydGVyIHByaWNlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cImlubmVyLWxpc3QtaXRlbVwiIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJzcXVhcmVcIiwgcGFkZGluZzogXCIwXCIsIG1hcmdpbjogXCIwXCIgfX0+Qm9vc3QgdGhlIHZhbHVlIG9mIHBvcHVsYXIgY29udmVydGVycyBieSBwdWxsaW5nIHZhbHVlIGF3YXkgZnJvbSBsZXNzZXIga25vd24gY29udmVydGVyczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cImlubmVyLWxpc3QtaXRlbVwiIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJzcXVhcmVcIiwgcGFkZGluZzogXCIwXCIsIG1hcmdpbjogXCIwXCIgfX0+VGFrZSBtb25leSBhd2F5IGZyb20gb25lIGNsaWVudCBzbyBhIG1vcmUg4oCcd29ydGh3aGlsZeKAnSBjbGllbnQgY2FuIGJlIG92ZXJwYWlkPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGxpc3RTdHlsZTogXCJub25lXCIsIHBhZGRpbmc6IFwiMFwiLCBtYXJnaW46IFwiMFwiIH19PjxiciAvPldlIGF0IENjb24gTWV0YWxzIHdvdWxkIG5ldmVyIGRvIHN1Y2ggYSBkaXNzZXJ2aWNlIHRvIG91ciB2YWx1ZWQgY3VzdG9tZXJzLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNvdXRlci1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2lubmVyLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNpbm5lci1saXN0LWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMC41dncpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNmYWRlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVPdXQgZWFzZSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjdW5GYWRlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiBlYXNlIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkVGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTY1JSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLDE5MiwxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjUlKTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgc2lsdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlLS1mcm9udCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNjYXJkMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDQwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkLmlzLWZsaXBwZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjYXJkMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudENhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDN2aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuKTtcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNtYWxsQ29udGVudDM7Il0sInNvdXJjZVJvb3QiOiIifQ==