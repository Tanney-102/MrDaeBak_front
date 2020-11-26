webpackHotUpdate_N_E("pages/index",{

/***/ "./components/StockPage/index.js":
/*!***************************************!*\
  !*** ./components/StockPage/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useWindowSize */ \"./hooks/useWindowSize.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ \"./components/StockPage/style.js\");\n/* harmony import */ var _LoadingPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../LoadingPage */ \"./components/LoadingPage.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/taeeun/Desktop/Programming/Projects/MrDaeBak/MrDaeBak_front/components/StockPage/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar StockPage = function StockPage() {\n  _s();\n\n  var winSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      loaded = _useState[0],\n      setLoaded = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var getStockInfo = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/stock/read').then(function (res) {\n                  setData(res.data);\n                  setLoaded(true);\n                })[\"catch\"](function (err) {\n                  console.error(err);\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getStockInfo() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getStockInfo();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: !loaded ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_LoadingPage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Main\"], {\n      style: {\n        height: winSize[1]\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Content\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Title\"], {\n          children: \"\\uC7AC\\uACE0 \\uC815\\uBCF4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"table\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"thead\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"tr\", {\n              style: {\n                display: 'flex'\n              },\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Th\"], {\n                style: {\n                  width: '30px'\n                },\n                children: \"No\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Th\"], {\n                style: {\n                  width: '80px'\n                },\n                children: \"\\uBA54\\uB274 \\uC774\\uB984\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Th\"], {\n                children: \"\\uC218\\uB7C9\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Th\"], {\n                children: \"\\uBE44\\uACE0\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 29\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 25\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"tbody\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(StockPage, \"/9/CyRvyys7VbUkme6PjivDEo7Y=\", false, function () {\n  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = StockPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StockPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"StockPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdG9ja1BhZ2UvaW5kZXguanM/OWEyOSJdLCJuYW1lcyI6WyJTdG9ja1BhZ2UiLCJ3aW5TaXplIiwidXNlV2luZG93U2l6ZSIsInVzZVN0YXRlIiwibG9hZGVkIiwic2V0TG9hZGVkIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJnZXRTdG9ja0luZm8iLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoZWlnaHQiLCJkaXNwbGF5Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsT0FBTyxHQUFHQyxvRUFBYSxFQUE3Qjs7QUFEb0Isa0JBRVFDLHNEQUFRLENBQUMsS0FBRCxDQUZoQjtBQUFBLE1BRWJDLE1BRmE7QUFBQSxNQUVMQyxTQUZLOztBQUFBLG1CQUdJRixzREFBUSxDQUFDLElBQUQsQ0FIWjtBQUFBLE1BR2JHLElBSGE7QUFBQSxNQUdQQyxPQUhPOztBQUtwQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsWUFBWTtBQUFBLGtNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNYQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsYUFBVixFQUNMQyxJQURLLENBQ0EsVUFBQUMsR0FBRyxFQUFJO0FBQ1ROLHlCQUFPLENBQUNNLEdBQUcsQ0FBQ1AsSUFBTCxDQUFQO0FBQ0FELDJCQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0gsaUJBSkssV0FLQyxVQUFBUyxHQUFHLEVBQUk7QUFDVkMseUJBQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQ0gsaUJBUEssQ0FEVzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFaTCxZQUFZO0FBQUE7QUFBQTtBQUFBLE9BQWxCOztBQVdBQSxnQkFBWTtBQUNmLEdBYlEsRUFhTixFQWJNLENBQVQ7QUFlQSxzQkFDSTtBQUFBLGNBQ0MsQ0FBQ0wsTUFBRCxnQkFDRCxxRUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREMsZ0JBRUQscUVBQUMsMkNBQUQ7QUFBTSxXQUFLLEVBQUU7QUFBQ2EsY0FBTSxFQUFDaEIsT0FBTyxDQUFDLENBQUQ7QUFBZixPQUFiO0FBQUEsNkJBQ0kscUVBQUMsOENBQUQ7QUFBQSxnQ0FDSSxxRUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlJO0FBQUEsa0NBQ0k7QUFBQSxtQ0FDSTtBQUFJLG1CQUFLLEVBQUU7QUFBQ2lCLHVCQUFPLEVBQUM7QUFBVCxlQUFYO0FBQUEsc0NBQ0kscUVBQUMseUNBQUQ7QUFBSSxxQkFBSyxFQUFFO0FBQUNDLHVCQUFLLEVBQUM7QUFBUCxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJLHFFQUFDLHlDQUFEO0FBQUkscUJBQUssRUFBRTtBQUFDQSx1QkFBSyxFQUFDO0FBQVAsaUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFHSSxxRUFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISixlQUlJLHFFQUFDLHlDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEEsbUJBREo7QUEwQkgsQ0E5Q0Q7O0dBQU1uQixTO1VBQ2NFLDREOzs7S0FEZEYsUztBQWdEU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0b2NrUGFnZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vLi4vaG9va3MvdXNlV2luZG93U2l6ZSc7XG5pbXBvcnQgeyBNYWluLCBDb250ZW50LCBUaXRsZSwgVGggfSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCBMb2FkaW5nUGFnZSBmcm9tICcuLi9Mb2FkaW5nUGFnZSc7XG5cbmNvbnN0IFN0b2NrUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCB3aW5TaXplID0gdXNlV2luZG93U2l6ZSgpO1xuICAgIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRTdG9ja0luZm8gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCBheGlvcy5nZXQoJy9zdG9jay9yZWFkJylcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RGF0YShyZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGdldFN0b2NrSW5mbygpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIHshbG9hZGVkID9cbiAgICAgICAgPExvYWRpbmdQYWdlIC8+IDpcbiAgICAgICAgPE1haW4gc3R5bGU9e3toZWlnaHQ6d2luU2l6ZVsxXX19PlxuICAgICAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICDsnqzqs6Ag7KCV67O0XG4gICAgICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoIHN0eWxlPXt7d2lkdGg6JzMwcHgnfX0+Tm88L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaCBzdHlsZT17e3dpZHRoOic4MHB4J319PuuplOuJtCDsnbTrpoQ8L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaD7siJjrn4k8L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaD7ruYTqs6A8L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgPC9NYWluPn1cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0b2NrUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/StockPage/index.js\n");

/***/ })

})