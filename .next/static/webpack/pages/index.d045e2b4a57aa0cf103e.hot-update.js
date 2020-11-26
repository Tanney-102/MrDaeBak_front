webpackHotUpdate_N_E("pages/index",{

/***/ "./components/StockPage/index.js":
/*!***************************************!*\
  !*** ./components/StockPage/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useWindowSize */ \"./hooks/useWindowSize.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ \"./components/StockPage/style.js\");\n/* harmony import */ var _LoadingPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../LoadingPage */ \"./components/LoadingPage.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/taeeun/Desktop/Programming/Projects/MrDaeBak/MrDaeBak_front/components/StockPage/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar StockPage = function StockPage() {\n  _s();\n\n  var winSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      loaded = _useState[0],\n      setLoaded = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var getStockInfo = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/stock/read').then(function (res) {\n                  setData(res.data);\n                  setLoaded(true);\n                })[\"catch\"](function (err) {\n                  console.error(err);\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getStockInfo() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getStockInfo();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: !loaded ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_LoadingPage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Main\"], {\n      style: {\n        height: winSize[1]\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Content\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Title\"], {\n          children: \"\\uC7AC\\uACE0 \\uC815\\uBCF4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"table\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"thead\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"tr\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Th\"], {\n                style: {\n                  width: '20px'\n                },\n                children: \"No\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Th\"], {\n                children: \"\\uBA54\\uB274 \\uC774\\uB984\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Th\"], {\n                children: \"\\uC218\\uB7C9\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Th\"], {\n                children: \"\\uBE44\\uACE0\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 29\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 25\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"tbody\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(StockPage, \"/9/CyRvyys7VbUkme6PjivDEo7Y=\", false, function () {\n  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = StockPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StockPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"StockPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdG9ja1BhZ2UvaW5kZXguanM/OWEyOSJdLCJuYW1lcyI6WyJTdG9ja1BhZ2UiLCJ3aW5TaXplIiwidXNlV2luZG93U2l6ZSIsInVzZVN0YXRlIiwibG9hZGVkIiwic2V0TG9hZGVkIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJnZXRTdG9ja0luZm8iLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoZWlnaHQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUNwQixNQUFNQyxPQUFPLEdBQUdDLG9FQUFhLEVBQTdCOztBQURvQixrQkFFUUMsc0RBQVEsQ0FBQyxLQUFELENBRmhCO0FBQUEsTUFFYkMsTUFGYTtBQUFBLE1BRUxDLFNBRks7O0FBQUEsbUJBR0lGLHNEQUFRLENBQUMsSUFBRCxDQUhaO0FBQUEsTUFHYkcsSUFIYTtBQUFBLE1BR1BDLE9BSE87O0FBS3BCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxZQUFZO0FBQUEsa01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ1hDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxhQUFWLEVBQ0xDLElBREssQ0FDQSxVQUFBQyxHQUFHLEVBQUk7QUFDVE4seUJBQU8sQ0FBQ00sR0FBRyxDQUFDUCxJQUFMLENBQVA7QUFDQUQsMkJBQVMsQ0FBQyxJQUFELENBQVQ7QUFDSCxpQkFKSyxXQUtDLFVBQUFTLEdBQUcsRUFBSTtBQUNWQyx5QkFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDSCxpQkFQSyxDQURXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVpMLFlBQVk7QUFBQTtBQUFBO0FBQUEsT0FBbEI7O0FBV0FBLGdCQUFZO0FBQ2YsR0FiUSxFQWFOLEVBYk0sQ0FBVDtBQWVBLHNCQUNJO0FBQUEsY0FDQyxDQUFDTCxNQUFELGdCQUNELHFFQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQyxnQkFFRCxxRUFBQywyQ0FBRDtBQUFNLFdBQUssRUFBRTtBQUFDYSxjQUFNLEVBQUNoQixPQUFPLENBQUMsQ0FBRDtBQUFmLE9BQWI7QUFBQSw2QkFDSSxxRUFBQyw4Q0FBRDtBQUFBLGdDQUNJLHFFQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUk7QUFBQSxrQ0FDSTtBQUFBLG1DQUNJO0FBQUEsc0NBQ0kscUVBQUMseUNBQUQ7QUFBSSxxQkFBSyxFQUFFO0FBQUNpQix1QkFBSyxFQUFDO0FBQVAsaUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSSxxRUFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixlQUdJLHFFQUFDLHlDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKLGVBSUkscUVBQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQSxtQkFESjtBQTBCSCxDQTlDRDs7R0FBTWxCLFM7VUFDY0UsNEQ7OztLQURkRixTO0FBZ0RTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3RvY2tQYWdlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICcuLi8uLi9ob29rcy91c2VXaW5kb3dTaXplJztcbmltcG9ydCB7IE1haW4sIENvbnRlbnQsIFRpdGxlLCBUaCB9IGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IExvYWRpbmdQYWdlIGZyb20gJy4uL0xvYWRpbmdQYWdlJztcblxuY29uc3QgU3RvY2tQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHdpblNpemUgPSB1c2VXaW5kb3dTaXplKCk7XG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldFN0b2NrSW5mbyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLmdldCgnL3N0b2NrL3JlYWQnKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBzZXREYXRhKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZ2V0U3RvY2tJbmZvKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgeyFsb2FkZWQgP1xuICAgICAgICA8TG9hZGluZ1BhZ2UgLz4gOlxuICAgICAgICA8TWFpbiBzdHlsZT17e2hlaWdodDp3aW5TaXplWzFdfX0+XG4gICAgICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICAgICAgICA8VGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIOyerOqzoCDsoJXrs7RcbiAgICAgICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaCBzdHlsZT17e3dpZHRoOicyMHB4J319Pk5vPC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGg+66mU64m0IOydtOumhDwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoPuyImOufiTwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoPuu5hOqzoDwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG5cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICA8L01haW4+fVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RvY2tQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/StockPage/index.js\n");

/***/ }),

/***/ "./components/StockPage/style.js":
/*!***************************************!*\
  !*** ./components/StockPage/style.js ***!
  \***************************************/
/*! exports provided: Main, Content, Title, Th */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return Main; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Content\", function() { return Content; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Th\", function() { return Th; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style/theme */ \"./style/theme.js\");\n\n\nvar Main = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].main.withConfig({\n  displayName: \"style__Main\",\n  componentId: \"vur0gt-0\"\n})([\"width:100%;background-color:#eceae9;display:flex;justify-content:center;align-items:center;\"]);\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Content\",\n  componentId: \"vur0gt-1\"\n})([\"width:60%;border:1px solid black;@media \", \"{width:80%;}@media \", \"{width:90%;}\"], _style_theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tabletL, _style_theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mobileL);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"style__Title\",\n  componentId: \"vur0gt-2\"\n})([\"font-family:'GmarketSansMedium','\\uB098\\uB214\\uACE0\\uB515',NanumGothic,'\\uB3CB\\uC6C0',Dotum,sans-serif;font-size:1.6rem;font-weight:bold color:#333;padding:0 15px;\"]);\nvar Th = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].th.withConfig({\n  displayName: \"style__Th\",\n  componentId: \"vur0gt-3\"\n})([\"background-color:#9c9a99;border:1px solid #dfdfdf;height:30px;font-size:1rem;font-weight:bold;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdG9ja1BhZ2Uvc3R5bGUuanM/NzAwYSJdLCJuYW1lcyI6WyJNYWluIiwic3R5bGVkIiwibWFpbiIsIkNvbnRlbnQiLCJkaXYiLCJ0aGVtZSIsInRhYmxldEwiLCJtb2JpbGVMIiwiVGl0bGUiLCJoMSIsIlRoIiwidGgiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSxtR0FBVjtBQVNBLElBQU1DLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSx3RkFJUEMsb0RBQUssQ0FBQ0MsT0FKQyxFQVFQRCxvREFBSyxDQUFDRSxPQVJDLENBQWI7QUFhQSxJQUFNQyxLQUFLLEdBQUdQLHlEQUFNLENBQUNRLEVBQVY7QUFBQTtBQUFBO0FBQUEsMktBQVg7QUFRQSxJQUFNQyxFQUFFLEdBQUdULHlEQUFNLENBQUNVLEVBQVY7QUFBQTtBQUFBO0FBQUEsc0dBQVIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0b2NrUGFnZS9zdHlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL3N0eWxlL3RoZW1lJztcblxuZXhwb3J0IGNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2VjZWFlOTtcblxuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDo2MCU7XG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcblxuICAgIEBtZWRpYSAke3RoZW1lLnRhYmxldEx9IHtcbiAgICAgICAgd2lkdGg6ODAlO1xuICAgIH1cblxuICAgIEBtZWRpYSAke3RoZW1lLm1vYmlsZUx9IHtcbiAgICAgICAgd2lkdGg6OTAlO1xuICAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgICBmb250LWZhbWlseTogJ0dtYXJrZXRTYW5zTWVkaXVtJywgJ+uCmOuIlOqzoOuUlScsIE5hbnVtR290aGljLCAn64+L7JuAJywgRG90dW0sIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOjEuNnJlbTtcbiAgICBmb250LXdlaWdodDpib2xkXG4gICAgY29sb3I6IzMzMztcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgVGggPSBzdHlsZWQudGhgXG4gICAgYmFja2dyb3VuZC1jb2xvcjojOWM5YTk5O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2RmZGZkZjtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICBmb250LXNpemU6MXJlbTtcbiAgICBmb250LXdlaWdodDpib2xkOyAgICBcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/StockPage/style.js\n");

/***/ })

})