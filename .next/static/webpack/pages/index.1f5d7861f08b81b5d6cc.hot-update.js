webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoadingPage.js":
/*!***********************************!*\
  !*** ./components/LoadingPage.js ***!
  \***********************************/
/*! exports provided: Main, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return Main; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useWindowSize */ \"./hooks/useWindowSize.js\");\n\n\nvar _jsxFileName = \"/Users/taeeun/Desktop/Programming/Projects/MrDaeBak/MrDaeBak_front/components/LoadingPage.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main.withConfig({\n  displayName: \"LoadingPage__Main\",\n  componentId: \"sc-19ic4s7-0\"\n})([\"width:100%;background-color:#eceae9;display:flex;justify-content:center;align-items:center;\"]);\n_c = Main;\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"LoadingPage__Logo\",\n  componentId: \"sc-19ic4s7-1\"\n})([\"color:#bfbfbf;font-weight:bold;font-family:'GmarketSansMedium','\\uB098\\uB214\\uACE0\\uB515',NanumGothic,'\\uB3CB\\uC6C0',Dotum,sans-serif;font-size:2.5rem;text-shadow:1.5px 1.5px 2px #cfcfcf;\"]);\n_c2 = Logo;\nvar IndicatorBox = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"LoadingPage__IndicatorBox\",\n  componentId: \"sc-19ic4s7-2\"\n})([\"margin-top:10px;width:100%;display:flex;justify-content:center;\"]);\n_c3 = IndicatorBox;\nvar Indicator = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"LoadingPage__Indicator\",\n  componentId: \"sc-19ic4s7-3\"\n})([\"width:12px;height:12px;margin:0 15px;border-radius:6px;background-color:#bfbfbf;\"]);\n_c4 = Indicator;\n\nvar LoadingPage = function LoadingPage() {\n  _s();\n\n  var winSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      dot = _useState[0],\n      setDot = _useState[1];\n\n  var testRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var intv = setInterval(function () {\n      setDot(function (prevDot) {\n        return (prevDot + 1) % 5;\n      });\n    }, 700);\n    return function () {\n      clearInterval(intv);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Main, {\n    style: {\n      height: winSize[1]\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Logo, {\n        children: [\"\\uBBF8\\uC2A4\\uD130\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          style: {\n            fontSize: '3.5rem',\n            position: 'relative',\n            top: '-2px'\n          },\n          children: \"\\uB300\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 21\n        }, _this), \"\\uBC15\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(IndicatorBox, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Indicator, {\n          style: {\n            visibility: dot < 1 ? 'hidden' : ''\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Indicator, {\n          style: {\n            visibility: dot < 2 ? 'hidden' : ''\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Indicator, {\n          style: {\n            visibility: dot < 3 ? 'hidden' : ''\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Indicator, {\n          style: {\n            visibility: dot < 4 ? 'hidden' : ''\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(LoadingPage, \"SbCLwO96fX5Mb1qo2IyltuhpN24=\", false, function () {\n  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c5 = LoadingPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadingPage);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Main\");\n$RefreshReg$(_c2, \"Logo\");\n$RefreshReg$(_c3, \"IndicatorBox\");\n$RefreshReg$(_c4, \"Indicator\");\n$RefreshReg$(_c5, \"LoadingPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2FkaW5nUGFnZS5qcz8xNDY5Il0sIm5hbWVzIjpbIk1haW4iLCJzdHlsZWQiLCJtYWluIiwiTG9nbyIsImRpdiIsIkluZGljYXRvckJveCIsIkluZGljYXRvciIsIkxvYWRpbmdQYWdlIiwid2luU2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsImRvdCIsInNldERvdCIsInRlc3RSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJpbnR2Iiwic2V0SW50ZXJ2YWwiLCJwcmV2RG90IiwiY2xlYXJJbnRlcnZhbCIsImhlaWdodCIsImZvbnRTaXplIiwicG9zaXRpb24iLCJ0b3AiLCJ2aXNpYmlsaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSxtR0FBVjtLQUFNRixJO0FBU2IsSUFBTUcsSUFBSSxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1NQUFWO01BQU1ELEk7QUFRTixJQUFNRSxZQUFZLEdBQUdKLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsdUVBQWxCO01BQU1DLFk7QUFRTixJQUFNQyxTQUFTLEdBQUdMLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0ZBQWY7TUFBTUUsUzs7QUFRTixJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLE9BQU8sR0FBR0Msb0VBQWEsRUFBN0I7O0FBRHNCLGtCQUVBQyxzREFBUSxDQUFDLENBQUQsQ0FGUjtBQUFBLE1BRWZDLEdBRmU7QUFBQSxNQUVWQyxNQUZVOztBQUd0QixNQUFNQyxPQUFPLEdBQUdDLG9EQUFNLEVBQXRCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLElBQUksR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDM0JMLFlBQU0sQ0FBQyxVQUFBTSxPQUFPLEVBQUk7QUFDZCxlQUFPLENBQUNBLE9BQU8sR0FBQyxDQUFULElBQVksQ0FBbkI7QUFDSCxPQUZLLENBQU47QUFHSCxLQUp1QixFQUlyQixHQUpxQixDQUF4QjtBQU1BLFdBQU8sWUFBTTtBQUNUQyxtQkFBYSxDQUFDSCxJQUFELENBQWI7QUFDSCxLQUZEO0FBR0gsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBLHNCQUNJLHFFQUFDLElBQUQ7QUFBTSxTQUFLLEVBQUU7QUFBQ0ksWUFBTSxFQUFDWixPQUFPLENBQUMsQ0FBRDtBQUFmLEtBQWI7QUFBQSwyQkFDSTtBQUFBLDhCQUNJLHFFQUFDLElBQUQ7QUFBQSxzREFFSTtBQUFNLGVBQUssRUFBRTtBQUNUYSxvQkFBUSxFQUFDLFFBREE7QUFFVEMsb0JBQVEsRUFBQyxVQUZBO0FBR1RDLGVBQUcsRUFBQztBQUhLLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFTSSxxRUFBQyxZQUFEO0FBQUEsZ0NBQ0kscUVBQUMsU0FBRDtBQUFXLGVBQUssRUFBRTtBQUFDQyxzQkFBVSxFQUFDYixHQUFHLEdBQUMsQ0FBSixHQUFNLFFBQU4sR0FBZTtBQUEzQjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUkscUVBQUMsU0FBRDtBQUFXLGVBQUssRUFBRTtBQUFDYSxzQkFBVSxFQUFDYixHQUFHLEdBQUMsQ0FBSixHQUFNLFFBQU4sR0FBZTtBQUEzQjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0kscUVBQUMsU0FBRDtBQUFXLGVBQUssRUFBRTtBQUFDYSxzQkFBVSxFQUFDYixHQUFHLEdBQUMsQ0FBSixHQUFNLFFBQU4sR0FBZTtBQUEzQjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUkscUVBQUMsU0FBRDtBQUFXLGVBQUssRUFBRTtBQUFDYSxzQkFBVSxFQUFDYixHQUFHLEdBQUMsQ0FBSixHQUFNLFFBQU4sR0FBZTtBQUEzQjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9CSCxDQXJDRDs7R0FBTUosVztVQUNjRSw0RDs7O01BRGRGLFc7QUF1Q1NBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Mb2FkaW5nUGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uL2hvb2tzL3VzZVdpbmRvd1NpemUnXG5cbmV4cG9ydCBjb25zdCBNYWluID0gc3R5bGVkLm1haW5gXG4gICAgd2lkdGg6MTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlY2VhZTk7XG5cbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG5gO1xuXG5jb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcbiAgICBjb2xvcjojYmZiZmJmO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgZm9udC1mYW1pbHk6ICdHbWFya2V0U2Fuc01lZGl1bScsICfrgpjriJTqs6DrlJUnLCBOYW51bUdvdGhpYywgJ+uPi+ybgCcsIERvdHVtLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIHRleHQtc2hhZG93OjEuNXB4IDEuNXB4IDJweCAjY2ZjZmNmO1xuYDtcblxuY29uc3QgSW5kaWNhdG9yQm94ID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgd2lkdGg6MTAwJTtcblxuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuYDtcblxuY29uc3QgSW5kaWNhdG9yID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDoxMnB4O1xuICAgIGhlaWdodDoxMnB4O1xuICAgIG1hcmdpbjowIDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czo2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojYmZiZmJmO1xuYDtcblxuY29uc3QgTG9hZGluZ1BhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2luU2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcbiAgICBjb25zdCBbZG90LCBzZXREb3RdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgdGVzdFJlZiA9IHVzZVJlZigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaW50diA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHNldERvdChwcmV2RG90ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHByZXZEb3QrMSklNTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCA3MDApO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludHYpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8TWFpbiBzdHlsZT17e2hlaWdodDp3aW5TaXplWzFdfX0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMb2dvPlxuICAgICAgICAgICAgICAgICAgICDrr7jsiqTthLBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiczLjVyZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246J3JlbGF0aXZlJywgXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6Jy0ycHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT7rjIA8L3NwYW4+67CVXG4gICAgICAgICAgICAgICAgPC9Mb2dvPlxuICAgICAgICAgICAgICAgIDxJbmRpY2F0b3JCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxJbmRpY2F0b3Igc3R5bGU9e3t2aXNpYmlsaXR5OmRvdDwxPydoaWRkZW4nOicnfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEluZGljYXRvciBzdHlsZT17e3Zpc2liaWxpdHk6ZG90PDI/J2hpZGRlbic6Jyd9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8SW5kaWNhdG9yIHN0eWxlPXt7dmlzaWJpbGl0eTpkb3Q8Mz8naGlkZGVuJzonJ319IC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbmRpY2F0b3Igc3R5bGU9e3t2aXNpYmlsaXR5OmRvdDw0PydoaWRkZW4nOicnfX0gLz5cbiAgICAgICAgICAgICAgICA8L0luZGljYXRvckJveD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01haW4+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LoadingPage.js\n");

/***/ })

})