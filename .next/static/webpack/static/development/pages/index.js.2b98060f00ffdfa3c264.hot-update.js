webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CorpContent3.js":
/*!************************************!*\
  !*** ./components/CorpContent3.js ***!
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






var _jsxFileName = "C:\\Users\\shane\\documents\\GitHub Repository\\ccon-next\\components\\CorpContent3.js";

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
        className: "jsx-2533265475",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-2533265475" + " " + "contentCanvas contentCanvas--card",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 15
        }
      }, __jsx("ul", {
        id: "outer-list",
        className: "jsx-2533265475",
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
        className: "jsx-2533265475",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }
      }, __jsx("strong", {
        className: "jsx-2533265475",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 55
        }
      }, __jsx("u", {
        className: "jsx-2533265475",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 63
        }
      }, "If I create an account, do my staff need to create their own accounts as well?")), __jsx("br", {
        className: "jsx-2533265475",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 157
        }
      }), "The primary account holder is responsible for sending any Ccon Revolution App invitations to their employees, this can be done by accessing the \u201Cstaff\u201C option under the management tab within the App."), __jsx("li", {
        style: {
          listStyle: "none"
        },
        className: "jsx-2533265475",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }
      }, __jsx("strong", {
        className: "jsx-2533265475",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 55
        }
      }, __jsx("u", {
        className: "jsx-2533265475",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 63
        }
      }, "What is the minimum/maximum amount of catalytic converters I can bring to Ccon Metals?")), __jsx("br", {
        className: "jsx-2533265475",
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
        className: "jsx-2533265475",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }
      }, __jsx("strong", {
        className: "jsx-2533265475",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 56
        }
      }, __jsx("u", {
        className: "jsx-2533265475",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 64
        }
      }, "What is Downgrading/Upgrading? Why is it done?  Does Ccon do this?")), __jsx("br", {
        className: "jsx-2533265475",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 146
        }
      }), "Downgrading/Upgrading is the process of a buyer taking advantage of a seller by manipulating information. The reason a buyer may do this is to:", __jsx("ul", {
        id: "inner-list",
        className: "jsx-2533265475",
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
        className: "jsx-2533265475",
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
        className: "jsx-2533265475",
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
        className: "jsx-2533265475",
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
        className: "jsx-2533265475",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 25
        }
      }, __jsx("br", {
        className: "jsx-2533265475",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 86
        }
      }), "We at Ccon Metals would never do such a disservice to our valued customers."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2533265475",
        __self: this
      }, "@-webkit-keyframes fadeIn-jsx-2533265475{0%{opacity:0;}100%{opacity:1;}}@keyframes fadeIn-jsx-2533265475{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fadeOut-jsx-2533265475{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}@keyframes fadeOut-jsx-2533265475{0%{opacity:1;}50%{opacity:0;}100%{opacity:0;}}#outer-list.jsx-2533265475{padding:0;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:100%;width:80%;margin:auto;}#inner-list.jsx-2533265475{margin-top:10px;}#inner-list-item.jsx-2533265475{display:list-item;}li.jsx-2533265475{height:25%;font-size:calc(12px + 0.5vw);display:inline-block;margin-top:5px;}#fade.jsx-2533265475{-webkit-animation:fadeOut-jsx-2533265475 ease 0.5s;animation:fadeOut-jsx-2533265475 ease 0.5s;}#unFade.jsx-2533265475{-webkit-animation:fadeIn-jsx-2533265475 ease 0.5s;animation:fadeIn-jsx-2533265475 ease 0.5s;}.cardText.jsx-2533265475{position:absolute;height:100%;width:100%;-webkit-transform:translateY(-65%);-ms-transform:translateY(-65%);transform:translateY(-65%);}#contentContainer.jsx-2533265475{position:absolute;height:100%;width:100%;background-image:url('image');background-color:rgb(192,192,192);border-radius:8px;-webkit-transform:translateX(25%);-ms-transform:translateX(25%);transform:translateX(25%);right:25%;overflow-y:auto;border:5px solid silver;box-sizing:border-box;}.contentCanvas.jsx-2533265475{z-index:1;height:90%;width:85%;margin:auto;margin-top:0%;}.flipCard.jsx-2533265475{margin:auto;list-style:none;font-size:1.6em;width:100%;height:100%;padding:0;display:inline-block;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;cursor:pointer;}.card__face.jsx-2533265475{position:absolute;height:100%;width:100%;text-align:center;}.card__face--front.jsx-2533265475{background:white;overflow:hidden;}.card__face--back.jsx-2533265475{background:black;-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );overflow:hidden;}.flipCard.is-flipped.jsx-2533265475{-webkit-transform:rotateY( 180deg );-ms-transform:rotateY( 180deg );transform:rotateY( 180deg );}.flipCardContainer.jsx-2533265475{-webkit-perspective:40rem;-moz-perspective:40rem;-ms-perspective:40rem;perspective:40rem;z-index:1;height:100%;width:33.333333333333333333333333%;margin:auto;display:inline-block;}@media (max-width:720px){.flipCardContainer.jsx-2533265475{width:100%;height:33%;margin-top:0%;}#card3.jsx-2533265475{margin-top:0%;}.card__face--back.jsx-2533265475{background:black;-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}.flipCard.is-flipped.jsx-2533265475{-webkit-transform:rotateX( 180deg );-ms-transform:rotateX( 180deg );transform:rotateX( 180deg );}#card2.jsx-2533265475{margin-top:0%;}.flipCard.jsx-2533265475{width:100%;height:100%;}.contentCanvas.jsx-2533265475{-webkit-transform:translate(0,0%);-ms-transform:translate(0,0%);transform:translate(0,0%);min-height:525px;height:102%;width:100%;margin-top:0%;}#contentContainer.jsx-2533265475{height:100%;min-height:575px;overflow:hidden;}ul.jsx-2533265475{list-style:none;padding:0;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:75%;width:80%;margin:auto;}li.jsx-2533265475{margin-top:3vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhbmVcXGRvY3VtZW50c1xcR2l0SHViIFJlcG9zaXRvcnlcXGNjb24tbmV4dFxcY29tcG9uZW50c1xcQ29ycENvbnRlbnQzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFaUIsQUFLaUMsQUFJQSxBQU1BLEFBSUEsQUFJQSxBQU1GLEFBUU0sQUFJRSxBQUlQLEFBUWlCLEFBSUQsQUFJVCxBQU9BLEFBY1IsQUFRRSxBQWVNLEFBUUQsQUFLQSxBQU1XLEFBUVYsQUFXTCxBQU9kLEFBR29CLEFBS1csQUFNL0IsQUFHYyxBQUtnQixBQVNmLEFBT0ksQUFTRCxVQS9MakIsQUFJQSxBQU1BLEFBSUEsQUFJQSxBQU02QixBQXFEbEIsQ0FyQ2tCLEFBa0doQixBQXdCQyxDQTdFRSxBQTJGRyxFQWhDbkIsQUFjQSxDQWtDQSxDQWhLRixBQXVKYyxDQTNFSSxBQUtZLEFBbUNFLENBaEhoQyxBQW9CYyxBQU9BLEFBcUNBLEdBdEJGLENBNkRNLENBd0JoQixHQXFCK0IsRUFsR2YsQ0EyRkUsQ0F4SFAsQUFPQSxBQXFDQSxDQXRCQyxFQThCZCxHQStCRSxJQW5HcUIsQ0FrQnhCLEFBTWlDLEFBc0NaLEVBdkJKLENBT0gsQ0EyRlgsVUExRlksRUFQZCxFQXVCQSxFQTlEaUIsTUErQ0wsSUF2QndCLEtBdEJwQyxDQThDdUIsWUFxQ1gsQ0F3Q1MsRUFuSHJCLEVBSkEsRUF1RUEsQUFrQ0UsRUE5RDBCLENBcUNkLE1BN0RNLEVBcUdKLElBdkNxQixFQWZuQixBQW1DaEIsTUFvQmEsSUFyR2EsTUErQzVCLENBdURrQixHQWpKSixDQWtDZCxVQWdIRSxDQWpKVSxDQXdHRSxHQXVEQyxNQTlKRCxHQXdHUyxFQXVEVCxPQTlKZCxHQStKZ0IsU0F0RGhCLEdBdURFLGtCQWhHNEIsYUF2QmxCLFVBQ00sZ0JBQ1Esd0JBQ0Ysc0JBQ3hCLFdBb0JvQixrQkFDSCxlQUVqQiIsImZpbGUiOiJDOlxcVXNlcnNcXHNoYW5lXFxkb2N1bWVudHNcXEdpdEh1YiBSZXBvc2l0b3J5XFxjY29uLW5leHRcXGNvbXBvbmVudHNcXENvcnBDb250ZW50My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDb3JwQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgICAgZmFkZU9uZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVPbmVCOiBcImZhZGVcIixcclxuICAgICAgZmFkZVR3b0E6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUd29COiBcImZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQjogXCJmYWRlXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mbGlwMSA9IHRoaXMuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMSA9IHRoaXMudW5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMiA9IHRoaXMuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMiA9IHRoaXMudW5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMyA9IHRoaXMuZmxpcDMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMyA9IHRoaXMudW5mbGlwMy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlT25lQSA6IFwiZmFkZVwiLCBmYWRlT25lQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiwgZmFkZU9uZUEgOiBcInVuRmFkZVwiLCBmYWRlT25lQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUd29BIDogXCJmYWRlXCIsIGZhZGVUd29CIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZFwiLCBmYWRlVHdvQSA6IFwidW5GYWRlXCIsIGZhZGVUd29CIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVRocmVlQSA6IFwiZmFkZVwiLCBmYWRlVGhyZWVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiLCBmYWRlVGhyZWVBIDogXCJ1bkZhZGVcIiwgZmFkZVRocmVlQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgIDx1bCBpZD1cIm91dGVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiB9fT48c3Ryb25nPjx1PklmIEkgY3JlYXRlIGFuIGFjY291bnQsIGRvIG15IHN0YWZmIG5lZWQgdG8gY3JlYXRlIHRoZWlyIG93biBhY2NvdW50cyBhcyB3ZWxsPzwvdT48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgcHJpbWFyeSBhY2NvdW50IGhvbGRlciBpcyByZXNwb25zaWJsZSBmb3Igc2VuZGluZyBhbnkgQ2NvbiBSZXZvbHV0aW9uIEFwcCBpbnZpdGF0aW9ucyB0byB0aGVpciBlbXBsb3llZXMsIHRoaXMgY2FuIGJlIGRvbmUgYnkgYWNjZXNzaW5nIHRoZSDigJxzdGFmZuKAnCBvcHRpb24gdW5kZXIgdGhlIG1hbmFnZW1lbnQgdGFiIHdpdGhpbiB0aGUgQXBwLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBsaXN0U3R5bGU6IFwibm9uZVwiIH19PjxzdHJvbmc+PHU+V2hhdCBpcyB0aGUgbWluaW11bS9tYXhpbXVtIGFtb3VudCBvZiBjYXRhbHl0aWMgY29udmVydGVycyBJIGNhbiBicmluZyB0byBDY29uIE1ldGFscz88L3U+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgVW5saWtlIG1vc3QgY2F0YWx5dGljIGNvbnZlcnRlciByZWN5Y2xpbmcgYnVzaW5lc3Nlcywgd2UgYXQgQ2NvbiBNZXRhbHMgaGF2ZSBubyBjb252ZXJ0ZXIgbWluaW11bXMgb3IgbWF4aW11bXMuICBSZXN0IGFzc3VyZWQgdGhhdCByZWdhcmRsZXNzIG9mIHF1YW50aXR5LCB5b3VyIGNvbnZlcnRlcnMgd2lsbCBiZSBwdXJjaGFzZWQgZmFpcmx5LiBcclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBsaXN0U3R5bGU6IFwibm9uZVwiIH19ID48c3Ryb25nPjx1PldoYXQgaXMgRG93bmdyYWRpbmcvVXBncmFkaW5nPyBXaHkgaXMgaXQgZG9uZT8gIERvZXMgQ2NvbiBkbyB0aGlzPzwvdT48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBEb3duZ3JhZGluZy9VcGdyYWRpbmcgaXMgdGhlIHByb2Nlc3Mgb2YgYSBidXllciB0YWtpbmcgYWR2YW50YWdlIG9mIGEgc2VsbGVyIGJ5IG1hbmlwdWxhdGluZyBpbmZvcm1hdGlvbi4gVGhlIHJlYXNvbiBhIGJ1eWVyIG1heSBkbyB0aGlzIGlzIHRvOiBcclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cImlubmVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiaW5uZXItbGlzdC1pdGVtXCIgc3R5bGU9e3sgbGlzdFN0eWxlOiBcInNxdWFyZVwiLCBwYWRkaW5nOiBcIjBcIiwgbWFyZ2luOiBcIjBcIiB9fT5TZWN1cmUgbmV3IGNsaWVudHMgYnkg4oCdd293aW5n4oCdIHRoZW0gd2l0aCBhcnRpZmljaWFsIGNhdGFseXRpYyBjb252ZXJ0ZXIgcHJpY2VzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiaW5uZXItbGlzdC1pdGVtXCIgc3R5bGU9e3sgbGlzdFN0eWxlOiBcInNxdWFyZVwiLCBwYWRkaW5nOiBcIjBcIiwgbWFyZ2luOiBcIjBcIiB9fT5Cb29zdCB0aGUgdmFsdWUgb2YgcG9wdWxhciBjb252ZXJ0ZXJzIGJ5IHB1bGxpbmcgdmFsdWUgYXdheSBmcm9tIGxlc3NlciBrbm93biBjb252ZXJ0ZXJzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiaW5uZXItbGlzdC1pdGVtXCIgc3R5bGU9e3sgbGlzdFN0eWxlOiBcInNxdWFyZVwiLCBwYWRkaW5nOiBcIjBcIiwgbWFyZ2luOiBcIjBcIiB9fT5UYWtlIG1vbmV5IGF3YXkgZnJvbSBvbmUgY2xpZW50IHNvIGEgbW9yZSDigJx3b3J0aHdoaWxl4oCdIGNsaWVudCBjYW4gYmUgb3ZlcnBhaWQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiwgcGFkZGluZzogXCIwXCIsIG1hcmdpbjogXCIwXCIgfX0+PGJyIC8+V2UgYXQgQ2NvbiBNZXRhbHMgd291bGQgbmV2ZXIgZG8gc3VjaCBhIGRpc3NlcnZpY2UgdG8gb3VyIHZhbHVlZCBjdXN0b21lcnMuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjb3V0ZXItbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNpbm5lci1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjaW5uZXItbGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuNXZ3KTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjZmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI3VuRmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02NSUpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmQxIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ29ycENvbnRlbnQ7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\shane\\\\documents\\\\GitHub Repository\\\\ccon-next\\\\components\\\\CorpContent3.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvcnBDb250ZW50My5qcyJdLCJuYW1lcyI6WyJDb3JwQ29udGVudCIsInByb3BzIiwic3RhdGUiLCJjbGFzc05hbWUxIiwiY2xhc3NOYW1lMiIsImNsYXNzTmFtZTMiLCJmYWRlT25lQSIsImZhZGVPbmVCIiwiZmFkZVR3b0EiLCJmYWRlVHdvQiIsImZhZGVUaHJlZUEiLCJmYWRlVGhyZWVCIiwiZmxpcDEiLCJiaW5kIiwidW5mbGlwMSIsImZsaXAyIiwidW5mbGlwMiIsImZsaXAzIiwidW5mbGlwMyIsInNldFN0YXRlIiwibGlzdFN0eWxlIiwicGFkZGluZyIsIm1hcmdpbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVNQSxXOzs7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFXO0FBQ1RDLGdCQUFVLEVBQUUsVUFESDtBQUVUQyxnQkFBVSxFQUFFLFVBRkg7QUFHVEMsZ0JBQVUsRUFBRSxVQUhIO0FBSVRDLGNBQVEsRUFBRSxRQUpEO0FBS1RDLGNBQVEsRUFBRSxNQUxEO0FBTVRDLGNBQVEsRUFBRSxRQU5EO0FBT1RDLGNBQVEsRUFBRSxNQVBEO0FBUVRDLGdCQUFVLEVBQUUsUUFSSDtBQVNUQyxnQkFBVSxFQUFFO0FBVEgsS0FBWDtBQVlBLFVBQUtDLEtBQUwsR0FBYSxNQUFLQSxLQUFMLENBQVdDLElBQVgseUdBQWI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLHlHQUFmO0FBQ0EsVUFBS0UsS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBV0YsSUFBWCx5R0FBYjtBQUNBLFVBQUtHLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFILElBQWIseUdBQWY7QUFDQSxVQUFLSSxLQUFMLEdBQWEsTUFBS0Es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QUFTLEVBQUUsUUFBYjtBQUF1QkMsaUJBQU8sRUFBRSxHQUFoQztBQUFxQ0MsZ0JBQU0sRUFBRTtBQUE3QyxTQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0dBREYsRUFFRTtBQUFJLFVBQUUsRUFBQyxpQkFBUDtBQUF5QixhQUFLLEVBQUU7QUFBRUYsbUJBQVMsRUFBRSxRQUFiO0FBQXVCQyxpQkFBTyxFQUFFLEdBQWhDO0FBQXFDQyxnQkFBTSxFQUFFO0FBQTdDLFNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvR0FGRixFQUdFO0FBQUksVUFBRSxFQUFDLGlCQUFQO0FBQXlCLGFBQUssRUFBRTtBQUFFRixtQkFBUyxFQUFFLFFBQWI7QUFBdUJDLGlCQUFPLEVBQUUsR0FBaEM7QUFBcUNDLGdCQUFNLEVBQUU7QUFBN0MsU0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1HQUhGLEVBSUU7QUFBSSxhQUFLLEVBQUU7QUFBRUYsbUJBQVMsRUFBRSxNQUFiO0FBQXFCQyxpQkFBTyxFQUFFLEdBQTlCO0FBQW1DQyxnQkFBTSxFQUFFO0FBQTNDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUE3RCxnRkFKRixDQUZGLENBUk4sQ0FEQSxDQUROO0FBQUE7QUFBQTtBQUFBLGtza0JBRE47QUFvT0Q7Ozs7RUF2UnlCQyw0Q0FBSyxDQUFDQyxTOztBQXlSakJ4QiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMmI5ODA2MGYwMGZmZGZhM2MyNjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBDb3JwQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgY2xhc3NOYW1lMTogXCJmbGlwQ2FyZFwiLFxyXG4gICAgICBjbGFzc05hbWUyOiBcImZsaXBDYXJkXCIsXHJcbiAgICAgIGNsYXNzTmFtZTM6IFwiZmxpcENhcmRcIixcclxuICAgICAgZmFkZU9uZUE6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVPbmVCOiBcImZhZGVcIixcclxuICAgICAgZmFkZVR3b0E6IFwidW5GYWRlXCIsXHJcbiAgICAgIGZhZGVUd29COiBcImZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQTogXCJ1bkZhZGVcIixcclxuICAgICAgZmFkZVRocmVlQjogXCJmYWRlXCIsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mbGlwMSA9IHRoaXMuZmxpcDEuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMSA9IHRoaXMudW5mbGlwMS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMiA9IHRoaXMuZmxpcDIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMiA9IHRoaXMudW5mbGlwMi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mbGlwMyA9IHRoaXMuZmxpcDMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5mbGlwMyA9IHRoaXMudW5mbGlwMy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmQgaXMtZmxpcHBlZFwiLCBmYWRlT25lQSA6IFwiZmFkZVwiLCBmYWRlT25lQiA6IFwidW5GYWRlXCIgfSlcclxufVxyXG5cclxudW5mbGlwMSgpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgY2xhc3NOYW1lMSA6IFwiZmxpcENhcmRcIiwgZmFkZU9uZUEgOiBcInVuRmFkZVwiLCBmYWRlT25lQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcbmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZCBpcy1mbGlwcGVkXCIsIGZhZGVUd29BIDogXCJmYWRlXCIsIGZhZGVUd29CIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAyKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUyIDogXCJmbGlwQ2FyZFwiLCBmYWRlVHdvQSA6IFwidW5GYWRlXCIsIGZhZGVUd29CIDogXCJmYWRlXCIgfSlcclxufVxyXG5cclxuZmxpcDMoKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNsYXNzTmFtZTMgOiBcImZsaXBDYXJkIGlzLWZsaXBwZWRcIiwgZmFkZVRocmVlQSA6IFwiZmFkZVwiLCBmYWRlVGhyZWVCIDogXCJ1bkZhZGVcIiB9KVxyXG59XHJcblxyXG51bmZsaXAzKCkge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjbGFzc05hbWUzIDogXCJmbGlwQ2FyZFwiLCBmYWRlVGhyZWVBIDogXCJ1bkZhZGVcIiwgZmFkZVRocmVlQiA6IFwiZmFkZVwiIH0pXHJcbn1cclxuXHJcblxyXG5yZW5kZXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRDYW52YXMgY29udGVudENhbnZhcy0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgIDx1bCBpZD1cIm91dGVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiB9fT48c3Ryb25nPjx1PklmIEkgY3JlYXRlIGFuIGFjY291bnQsIGRvIG15IHN0YWZmIG5lZWQgdG8gY3JlYXRlIHRoZWlyIG93biBhY2NvdW50cyBhcyB3ZWxsPzwvdT48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgcHJpbWFyeSBhY2NvdW50IGhvbGRlciBpcyByZXNwb25zaWJsZSBmb3Igc2VuZGluZyBhbnkgQ2NvbiBSZXZvbHV0aW9uIEFwcCBpbnZpdGF0aW9ucyB0byB0aGVpciBlbXBsb3llZXMsIHRoaXMgY2FuIGJlIGRvbmUgYnkgYWNjZXNzaW5nIHRoZSDigJxzdGFmZuKAnCBvcHRpb24gdW5kZXIgdGhlIG1hbmFnZW1lbnQgdGFiIHdpdGhpbiB0aGUgQXBwLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBsaXN0U3R5bGU6IFwibm9uZVwiIH19PjxzdHJvbmc+PHU+V2hhdCBpcyB0aGUgbWluaW11bS9tYXhpbXVtIGFtb3VudCBvZiBjYXRhbHl0aWMgY29udmVydGVycyBJIGNhbiBicmluZyB0byBDY29uIE1ldGFscz88L3U+PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgVW5saWtlIG1vc3QgY2F0YWx5dGljIGNvbnZlcnRlciByZWN5Y2xpbmcgYnVzaW5lc3Nlcywgd2UgYXQgQ2NvbiBNZXRhbHMgaGF2ZSBubyBjb252ZXJ0ZXIgbWluaW11bXMgb3IgbWF4aW11bXMuICBSZXN0IGFzc3VyZWQgdGhhdCByZWdhcmRsZXNzIG9mIHF1YW50aXR5LCB5b3VyIGNvbnZlcnRlcnMgd2lsbCBiZSBwdXJjaGFzZWQgZmFpcmx5LiBcclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBsaXN0U3R5bGU6IFwibm9uZVwiIH19ID48c3Ryb25nPjx1PldoYXQgaXMgRG93bmdyYWRpbmcvVXBncmFkaW5nPyBXaHkgaXMgaXQgZG9uZT8gIERvZXMgQ2NvbiBkbyB0aGlzPzwvdT48L3N0cm9uZz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBEb3duZ3JhZGluZy9VcGdyYWRpbmcgaXMgdGhlIHByb2Nlc3Mgb2YgYSBidXllciB0YWtpbmcgYWR2YW50YWdlIG9mIGEgc2VsbGVyIGJ5IG1hbmlwdWxhdGluZyBpbmZvcm1hdGlvbi4gVGhlIHJlYXNvbiBhIGJ1eWVyIG1heSBkbyB0aGlzIGlzIHRvOiBcclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cImlubmVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiaW5uZXItbGlzdC1pdGVtXCIgc3R5bGU9e3sgbGlzdFN0eWxlOiBcInNxdWFyZVwiLCBwYWRkaW5nOiBcIjBcIiwgbWFyZ2luOiBcIjBcIiB9fT5TZWN1cmUgbmV3IGNsaWVudHMgYnkg4oCdd293aW5n4oCdIHRoZW0gd2l0aCBhcnRpZmljaWFsIGNhdGFseXRpYyBjb252ZXJ0ZXIgcHJpY2VzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiaW5uZXItbGlzdC1pdGVtXCIgc3R5bGU9e3sgbGlzdFN0eWxlOiBcInNxdWFyZVwiLCBwYWRkaW5nOiBcIjBcIiwgbWFyZ2luOiBcIjBcIiB9fT5Cb29zdCB0aGUgdmFsdWUgb2YgcG9wdWxhciBjb252ZXJ0ZXJzIGJ5IHB1bGxpbmcgdmFsdWUgYXdheSBmcm9tIGxlc3NlciBrbm93biBjb252ZXJ0ZXJzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiaW5uZXItbGlzdC1pdGVtXCIgc3R5bGU9e3sgbGlzdFN0eWxlOiBcInNxdWFyZVwiLCBwYWRkaW5nOiBcIjBcIiwgbWFyZ2luOiBcIjBcIiB9fT5UYWtlIG1vbmV5IGF3YXkgZnJvbSBvbmUgY2xpZW50IHNvIGEgbW9yZSDigJx3b3J0aHdoaWxl4oCdIGNsaWVudCBjYW4gYmUgb3ZlcnBhaWQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlOiBcIm5vbmVcIiwgcGFkZGluZzogXCIwXCIsIG1hcmdpbjogXCIwXCIgfX0+PGJyIC8+V2UgYXQgQ2NvbiBNZXRhbHMgd291bGQgbmV2ZXIgZG8gc3VjaCBhIGRpc3NlcnZpY2UgdG8gb3VyIHZhbHVlZCBjdXN0b21lcnMuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjb3V0ZXItbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICNpbm5lci1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjaW5uZXItbGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuNXZ3KTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAjZmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IGVhc2UgMC41cztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI3VuRmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02NSUpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAjY29udGVudENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwxOTIsMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHNpbHZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNvbnRlbnRDYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJkX19mYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmRfX2ZhY2UtLWZyb250IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgI2NhcmQxIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmZsaXBDYXJkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogNDByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmRDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZF9fZmFjZS0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCggMTgwZGVnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZmxpcENhcmQuaXMtZmxpcHBlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoIDE4MGRlZyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI2NhcmQyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGlwQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50Q2FudmFzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4pO1xyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ29ycENvbnRlbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==