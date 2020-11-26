webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ManagerPage/index.js":
/*!*****************************************!*\
  !*** ./components/ManagerPage/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useWindowSize */ \"./hooks/useWindowSize.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ \"./components/ManagerPage/style.js\");\n\n\nvar _jsxFileName = \"/Users/taeeun/Desktop/Programming/Projects/MrDaeBak/MrDaeBak_front/components/ManagerPage/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ManagerPage = function ManagerPage() {\n  _s();\n\n  var winSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      curPage = _useState[0],\n      setCurPage = _useState[1];\n\n  var slideRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    slideRef.current.style.transform = \"translateX(-\".concat(curPage * 100 / 3, \"%)\");\n  }, [curPage]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"Main\"], {\n    style: {\n      height: winSize[1]\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"Slide\"], {\n      ref: slideRef,\n      style: {\n        width: winSize[0] * 3\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"PageContainer\"], {\n        style: {\n          width: winSize[0],\n          height: winSize[1]\n        },\n        children: [\"\\uC7AC\\uACE0 \\uAD00\\uB9AC \\uD398\\uC774\\uC9C0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faChevronRight\"],\n          style: {\n            position: 'absolute',\n            top: '50%',\n            right: '50px',\n            color: '#4c4a49',\n            fontSize: '2rem'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"PageContainer\"], {\n        style: {\n          width: winSize[0],\n          height: winSize[1]\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"BtnContainer\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"MenuBtn\"], {\n            children: \"\\uC8FC\\uBB38 \\uD655\\uC778\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"MenuBtn\"], {\n            children: \"\\uC7AC\\uACE0 \\uAD00\\uB9AC\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"PageContainer\"], {\n        style: {\n          width: winSize[0],\n          height: winSize[1]\n        },\n        children: \"\\uC8FC\\uBB38 \\uD655\\uC778 \\uD398\\uC774\\uC9C0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(ManagerPage, \"No17mMbE2/lVgwlLIEdmQG7WriI=\", false, function () {\n  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = ManagerPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManagerPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ManagerPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYW5hZ2VyUGFnZS9pbmRleC5qcz82NGRhIl0sIm5hbWVzIjpbIk1hbmFnZXJQYWdlIiwid2luU2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsImN1clBhZ2UiLCJzZXRDdXJQYWdlIiwic2xpZGVSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJoZWlnaHQiLCJ3aWR0aCIsImZhQ2hldnJvblJpZ2h0IiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImNvbG9yIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN0QixNQUFNQyxPQUFPLEdBQUdDLG9FQUFhLEVBQTdCOztBQURzQixrQkFFUUMsc0RBQVEsQ0FBQyxDQUFELENBRmhCO0FBQUEsTUFFZkMsT0FGZTtBQUFBLE1BRU5DLFVBRk07O0FBR3RCLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXZCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaRixZQUFRLENBQUNHLE9BQVQsQ0FBaUJDLEtBQWpCLENBQXVCQyxTQUF2Qix5QkFBa0RQLE9BQU8sR0FBQyxHQUFSLEdBQVksQ0FBOUQ7QUFDSCxHQUZRLEVBRU4sQ0FBQ0EsT0FBRCxDQUZNLENBQVQ7QUFJQSxzQkFDSSxxRUFBQywyQ0FBRDtBQUFNLFNBQUssRUFBRTtBQUFDUSxZQUFNLEVBQUNYLE9BQU8sQ0FBQyxDQUFEO0FBQWYsS0FBYjtBQUFBLDJCQUNJLHFFQUFDLDRDQUFEO0FBQU8sU0FBRyxFQUFFSyxRQUFaO0FBQXNCLFdBQUssRUFBRTtBQUFDTyxhQUFLLEVBQUNaLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBVztBQUFsQixPQUE3QjtBQUFBLDhCQUNJLHFFQUFDLG9EQUFEO0FBQWUsYUFBSyxFQUFFO0FBQUNZLGVBQUssRUFBQ1osT0FBTyxDQUFDLENBQUQsQ0FBZDtBQUFtQlcsZ0JBQU0sRUFBQ1gsT0FBTyxDQUFDLENBQUQ7QUFBakMsU0FBdEI7QUFBQSxnRkFFSSxxRUFBQyw4RUFBRDtBQUNJLGNBQUksRUFBRWEsZ0ZBRFY7QUFFSSxlQUFLLEVBQUU7QUFDSEMsb0JBQVEsRUFBQyxVQUROO0FBRUhDLGVBQUcsRUFBQyxLQUZEO0FBR0hDLGlCQUFLLEVBQUMsTUFISDtBQUlIQyxpQkFBSyxFQUFDLFNBSkg7QUFLSEMsb0JBQVEsRUFBQztBQUxOO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQWFJLHFFQUFDLG9EQUFEO0FBQWUsYUFBSyxFQUFFO0FBQUNOLGVBQUssRUFBQ1osT0FBTyxDQUFDLENBQUQsQ0FBZDtBQUFtQlcsZ0JBQU0sRUFBQ1gsT0FBTyxDQUFDLENBQUQ7QUFBakMsU0FBdEI7QUFBQSwrQkFDSSxxRUFBQyxtREFBRDtBQUFBLGtDQUNJLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUkscUVBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJKLGVBdUJJLHFFQUFDLG9EQUFEO0FBQWUsYUFBSyxFQUFFO0FBQUNZLGVBQUssRUFBQ1osT0FBTyxDQUFDLENBQUQsQ0FBZDtBQUFtQlcsZ0JBQU0sRUFBQ1gsT0FBTyxDQUFDLENBQUQ7QUFBakMsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBK0JILENBeENEOztHQUFNRCxXO1VBQ2NFLDREOzs7S0FEZEYsVztBQTBDU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01hbmFnZXJQYWdlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUNoZXZyb25MZWZ0LCBmYUNoZXZyb25SaWdodCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uLy4uL2hvb2tzL3VzZVdpbmRvd1NpemUnO1xuaW1wb3J0IHsgTWFpbiwgQnRuQ29udGFpbmVyLCBNZW51QnRuLCBTbGlkZSwgUGFnZUNvbnRhaW5lciB9IGZyb20gJy4vc3R5bGUnO1xuXG5jb25zdCBNYW5hZ2VyUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCB3aW5TaXplID0gdXNlV2luZG93U2l6ZSgpO1xuICAgIGNvbnN0IFtjdXJQYWdlLCBzZXRDdXJQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IHNsaWRlUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2xpZGVSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtjdXJQYWdlKjEwMC8zfSUpYDtcbiAgICB9LCBbY3VyUGFnZV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1haW4gc3R5bGU9e3toZWlnaHQ6d2luU2l6ZVsxXX19PlxuICAgICAgICAgICAgPFNsaWRlIHJlZj17c2xpZGVSZWZ9IHN0eWxlPXt7d2lkdGg6d2luU2l6ZVswXSozfX0+XG4gICAgICAgICAgICAgICAgPFBhZ2VDb250YWluZXIgc3R5bGU9e3t3aWR0aDp3aW5TaXplWzBdLCBoZWlnaHQ6d2luU2l6ZVsxXX19PlxuICAgICAgICAgICAgICAgICAgICDsnqzqs6Ag6rSA66asIO2OmOydtOyngFxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFDaGV2cm9uUmlnaHR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDonNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDonNTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6JyM0YzRhNDknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOicycmVtJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICA8L1BhZ2VDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFBhZ2VDb250YWluZXIgc3R5bGU9e3t3aWR0aDp3aW5TaXplWzBdLCBoZWlnaHQ6d2luU2l6ZVsxXX19PlxuICAgICAgICAgICAgICAgICAgICA8QnRuQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVCdG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg7KO866y4IO2ZleyduFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51QnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVCdG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg7J6s6rOgIOq0gOumrFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51QnRuPlxuICAgICAgICAgICAgICAgICAgICA8L0J0bkNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L1BhZ2VDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFBhZ2VDb250YWluZXIgc3R5bGU9e3t3aWR0aDp3aW5TaXplWzBdLCBoZWlnaHQ6d2luU2l6ZVsxXX19PlxuICAgICAgICAgICAgICAgICAgICDso7zrrLgg7ZmV7J24IO2OmOydtOyngFxuICAgICAgICAgICAgICAgIDwvUGFnZUNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvU2xpZGU+XG4gICAgICAgIDwvTWFpbj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlclBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ManagerPage/index.js\n");

/***/ })

})