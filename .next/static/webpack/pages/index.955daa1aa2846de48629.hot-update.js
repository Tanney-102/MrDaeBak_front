webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ManagerPage/index.js":
/*!*****************************************!*\
  !*** ./components/ManagerPage/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useWindowSize */ \"./hooks/useWindowSize.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./components/ManagerPage/style.js\");\n\n\nvar _jsxFileName = \"/Users/taeeun/Desktop/Programming/Projects/MrDaeBak/MrDaeBak_front/components/ManagerPage/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar ManagerPage = function ManagerPage() {\n  _s();\n\n  var winSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(2),\n      curPage = _useState[0],\n      setCurPage = _useState[1];\n\n  var slideRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    slideRef.current.style.transform = \"translateX(-\".concat(curPage * 100 / 3, \"%)\");\n  }, [curPage]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_3__[\"Main\"], {\n    style: {\n      height: winSize[1]\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_3__[\"Slide\"], {\n      ref: slideRef,\n      style: {\n        width: winSize[0] * 3\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_3__[\"PageContainer\"], {\n        style: {\n          width: winSize[0],\n          height: winSize[1]\n        },\n        children: \"\\uC7AC\\uACE0 \\uAD00\\uB9AC \\uD398\\uC774\\uC9C0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_3__[\"PageContainer\"], {\n        style: {\n          width: winSize[0],\n          height: winSize[1]\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_3__[\"BtnContainer\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_3__[\"MenuBtn\"], {\n            children: \"\\uC8FC\\uBB38 \\uD655\\uC778\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_3__[\"MenuBtn\"], {\n            children: \"\\uC7AC\\uACE0 \\uAD00\\uB9AC\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_3__[\"PageContainer\"], {\n        style: {\n          width: winSize[0],\n          height: winSize[1]\n        },\n        children: \"\\uC8FC\\uBB38 \\uD655\\uC778 \\uD398\\uC774\\uC9C0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(ManagerPage, \"ZXvM1y5OdAqqyVAzITO5shURovk=\", false, function () {\n  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = ManagerPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManagerPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ManagerPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYW5hZ2VyUGFnZS9pbmRleC5qcz82NGRhIl0sIm5hbWVzIjpbIk1hbmFnZXJQYWdlIiwid2luU2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsImN1clBhZ2UiLCJzZXRDdXJQYWdlIiwic2xpZGVSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJoZWlnaHQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLE9BQU8sR0FBR0Msb0VBQWEsRUFBN0I7O0FBRHNCLGtCQUVRQyxzREFBUSxDQUFDLENBQUQsQ0FGaEI7QUFBQSxNQUVmQyxPQUZlO0FBQUEsTUFFTkMsVUFGTTs7QUFHdEIsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pGLFlBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsS0FBakIsQ0FBdUJDLFNBQXZCLHlCQUFrRFAsT0FBTyxHQUFDLEdBQVIsR0FBWSxDQUE5RDtBQUNILEdBRlEsRUFFTixDQUFDQSxPQUFELENBRk0sQ0FBVDtBQUlBLHNCQUNJLHFFQUFDLDJDQUFEO0FBQU0sU0FBSyxFQUFFO0FBQUNRLFlBQU0sRUFBQ1gsT0FBTyxDQUFDLENBQUQ7QUFBZixLQUFiO0FBQUEsMkJBQ0kscUVBQUMsNENBQUQ7QUFBTyxTQUFHLEVBQUVLLFFBQVo7QUFBc0IsV0FBSyxFQUFFO0FBQUNPLGFBQUssRUFBQ1osT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFXO0FBQWxCLE9BQTdCO0FBQUEsOEJBQ0kscUVBQUMsb0RBQUQ7QUFBZSxhQUFLLEVBQUU7QUFBQ1ksZUFBSyxFQUFDWixPQUFPLENBQUMsQ0FBRCxDQUFkO0FBQW1CVyxnQkFBTSxFQUFDWCxPQUFPLENBQUMsQ0FBRDtBQUFqQyxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBSUkscUVBQUMsb0RBQUQ7QUFBZSxhQUFLLEVBQUU7QUFBQ1ksZUFBSyxFQUFDWixPQUFPLENBQUMsQ0FBRCxDQUFkO0FBQW1CVyxnQkFBTSxFQUFDWCxPQUFPLENBQUMsQ0FBRDtBQUFqQyxTQUF0QjtBQUFBLCtCQUNJLHFFQUFDLG1EQUFEO0FBQUEsa0NBQ0kscUVBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSSxxRUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFjSSxxRUFBQyxvREFBRDtBQUFlLGFBQUssRUFBRTtBQUFDWSxlQUFLLEVBQUNaLE9BQU8sQ0FBQyxDQUFELENBQWQ7QUFBbUJXLGdCQUFNLEVBQUNYLE9BQU8sQ0FBQyxDQUFEO0FBQWpDLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBc0JILENBL0JEOztHQUFNRCxXO1VBQ2NFLDREOzs7S0FEZEYsVztBQWlDU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01hbmFnZXJQYWdlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vLi4vaG9va3MvdXNlV2luZG93U2l6ZSc7XG5pbXBvcnQgeyBNYWluLCBCdG5Db250YWluZXIsIE1lbnVCdG4sIFNsaWRlLCBQYWdlQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZSc7XG5cbmNvbnN0IE1hbmFnZXJQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHdpblNpemUgPSB1c2VXaW5kb3dTaXplKCk7XG4gICAgY29uc3QgW2N1clBhZ2UsIHNldEN1clBhZ2VdID0gdXNlU3RhdGUoMik7XG4gICAgY29uc3Qgc2xpZGVSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzbGlkZVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke2N1clBhZ2UqMTAwLzN9JSlgO1xuICAgIH0sIFtjdXJQYWdlXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TWFpbiBzdHlsZT17e2hlaWdodDp3aW5TaXplWzFdfX0+XG4gICAgICAgICAgICA8U2xpZGUgcmVmPXtzbGlkZVJlZn0gc3R5bGU9e3t3aWR0aDp3aW5TaXplWzBdKjN9fT5cbiAgICAgICAgICAgICAgICA8UGFnZUNvbnRhaW5lciBzdHlsZT17e3dpZHRoOndpblNpemVbMF0sIGhlaWdodDp3aW5TaXplWzFdfX0+XG4gICAgICAgICAgICAgICAgICAgIOyerOqzoCDqtIDrpqwg7Y6Y7J207KeAXG4gICAgICAgICAgICAgICAgPC9QYWdlQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxQYWdlQ29udGFpbmVyIHN0eWxlPXt7d2lkdGg6d2luU2l6ZVswXSwgaGVpZ2h0OndpblNpemVbMV19fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ0bkNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51QnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyjvOusuCDtmZXsnbhcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51QnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyerOqzoCDqtIDrpqxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC9CdG5Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9QYWdlQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxQYWdlQ29udGFpbmVyIHN0eWxlPXt7d2lkdGg6d2luU2l6ZVswXSwgaGVpZ2h0OndpblNpemVbMV19fT5cbiAgICAgICAgICAgICAgICAgICAg7KO866y4IO2ZleyduCDtjpjsnbTsp4BcbiAgICAgICAgICAgICAgICA8L1BhZ2VDb250YWluZXI+XG4gICAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICA8L01haW4+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXJQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ManagerPage/index.js\n");

/***/ })

})