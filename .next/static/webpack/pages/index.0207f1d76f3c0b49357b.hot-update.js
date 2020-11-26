webpackHotUpdate_N_E("pages/index",{

/***/ "./components/StockPage/index.js":
/*!***************************************!*\
  !*** ./components/StockPage/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useWindowSize */ \"./hooks/useWindowSize.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ \"./components/StockPage/style.js\");\n/* harmony import */ var _LoadingPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../LoadingPage */ \"./components/LoadingPage.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/taeeun/Desktop/Programming/Projects/MrDaeBak/MrDaeBak_front/components/StockPage/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar StockPage = function StockPage() {\n  _s();\n\n  var winSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      loaded = _useState[0],\n      setLoaded = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      updateMode = _useState3[0],\n      setUpdateMode = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var getStockInfo = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/stock/read').then(function (res) {\n                  console.log(res.data);\n                  setData(res.data);\n                  setLoaded(true);\n                })[\"catch\"](function (err) {\n                  console.error(err);\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getStockInfo() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getStockInfo();\n  }, []);\n\n  var toggleUpdateMode = function toggleUpdateMode() {\n    if (updateMode) {\n      setUpdateMode(false);\n    } else {\n      setUpdateMode(true);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: !loaded ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_LoadingPage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Main\"], {\n      style: {\n        minHeight: winSize[1],\n        overflow: 'auto'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Content\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          style: {\n            display: 'flex',\n            alignItems: 'flex-end',\n            width: '100%',\n            marginBottom: '30px'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Title\"], {\n            children: \"\\uC7AC\\uACE0 \\uC815\\uBCF4\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"UpdateBtn\"], {\n            className: \"btn-hover\",\n            children: \"\\uC218\\uC815\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"table\", {\n          style: {\n            width: '100%'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"thead\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"tr\", {\n              style: {\n                display: 'flex'\n              },\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Th\"], {\n                style: {\n                  width: '30px'\n                },\n                children: \"No\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Th\"], {\n                style: {\n                  width: 'calc((100%-110px)*2/5)'\n                },\n                children: \"\\uBA54\\uB274 \\uC774\\uB984\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Th\"], {\n                style: {\n                  width: '80px'\n                },\n                children: \"\\uC218\\uB7C9\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 57,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Th\"], {\n                style: {\n                  width: 'calc((100%-110px)*3/5)'\n                },\n                children: \"\\uBE44\\uACE0\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 29\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 25\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"tbody\", {\n            children: data.map(function (v, i) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"tr\", {\n                style: {\n                  display: 'flex'\n                },\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Td\"], {\n                  style: {\n                    width: '30px'\n                  },\n                  children: i + 1\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 65,\n                  columnNumber: 33\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Td\"], {\n                  style: {\n                    width: 'calc((100%-110px)*2/5)'\n                  },\n                  children: v.menu_name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 66,\n                  columnNumber: 33\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Td\"], {\n                  style: {\n                    width: '80px'\n                  },\n                  children: v.stock\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 67,\n                  columnNumber: 33\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Td\"], {\n                  style: {\n                    width: 'calc((100%-110px)*3/5)'\n                  },\n                  children: v.note\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 68,\n                  columnNumber: 33\n                }, _this)]\n              }, v.menu_id, true, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 29\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(StockPage, \"CxGovYiLOaLgqt6xBGXdMs2Tmko=\", false, function () {\n  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = StockPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StockPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"StockPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdG9ja1BhZ2UvaW5kZXguanM/OWEyOSJdLCJuYW1lcyI6WyJTdG9ja1BhZ2UiLCJ3aW5TaXplIiwidXNlV2luZG93U2l6ZSIsInVzZVN0YXRlIiwibG9hZGVkIiwic2V0TG9hZGVkIiwiZGF0YSIsInNldERhdGEiLCJ1cGRhdGVNb2RlIiwic2V0VXBkYXRlTW9kZSIsInVzZUVmZmVjdCIsImdldFN0b2NrSW5mbyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsInRvZ2dsZVVwZGF0ZU1vZGUiLCJtaW5IZWlnaHQiLCJvdmVyZmxvdyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJ2IiwiaSIsIm1lbnVfbmFtZSIsInN0b2NrIiwibm90ZSIsIm1lbnVfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsT0FBTyxHQUFHQyxvRUFBYSxFQUE3Qjs7QUFEb0Isa0JBRVFDLHNEQUFRLENBQUMsS0FBRCxDQUZoQjtBQUFBLE1BRWJDLE1BRmE7QUFBQSxNQUVMQyxTQUZLOztBQUFBLG1CQUdJRixzREFBUSxDQUFDLElBQUQsQ0FIWjtBQUFBLE1BR2JHLElBSGE7QUFBQSxNQUdQQyxPQUhPOztBQUFBLG1CQUlnQkosc0RBQVEsQ0FBQyxLQUFELENBSnhCO0FBQUEsTUFJYkssVUFKYTtBQUFBLE1BSURDLGFBSkM7O0FBTXBCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxZQUFZO0FBQUEsa01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ1hDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxhQUFWLEVBQ0xDLElBREssQ0FDQSxV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QkFBSyxFQUFFO0FBQUNKLHlCQUFLLEVBQUM7QUFBUCxtQkFBWDtBQUFBLDRCQUE4Q0csQ0FBQyxDQUFDRTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKLGVBR0kscUVBQUMseUNBQUQ7QUFBSSx1QkFBSyxFQUFFO0FBQUNMLHlCQUFLLEVBQUM7QUFBUCxtQkFBWDtBQUFBLDRCQUE0QkcsQ0FBQyxDQUFDRztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhKLGVBSUkscUVBQUMseUNBQUQ7QUFBSSx1QkFBSyxFQUFFO0FBQUNOLHlCQUFLLEVBQUM7QUFBUCxtQkFBWDtBQUFBLDRCQUE4Q0csQ0FBQyxDQUFDSTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpKO0FBQUEsaUJBQWtDSixDQUFDLENBQUNLLE9BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREE7QUFRSCxhQVRBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBLG1CQURKO0FBd0NILENBdEVEOztHQUFNakMsUztVQUNjRSw0RDs7O0tBRGRGLFM7QUF3RVNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TdG9ja1BhZ2UvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uLy4uL2hvb2tzL3VzZVdpbmRvd1NpemUnO1xuaW1wb3J0IHsgTWFpbiwgQ29udGVudCwgVGl0bGUsIFRoLCBUZCwgVXBkYXRlQnRuIH0gZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgTG9hZGluZ1BhZ2UgZnJvbSAnLi4vTG9hZGluZ1BhZ2UnO1xuXG5jb25zdCBTdG9ja1BhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2luU2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt1cGRhdGVNb2RlLCBzZXRVcGRhdGVNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldFN0b2NrSW5mbyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLmdldCgnL3N0b2NrL3JlYWQnKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgc2V0RGF0YShyZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGdldFN0b2NrSW5mbygpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHRvZ2dsZVVwZGF0ZU1vZGUgPSAoKSA9PiB7XG4gICAgICAgIGlmKHVwZGF0ZU1vZGUpIHtcbiAgICAgICAgICAgIHNldFVwZGF0ZU1vZGUoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VXBkYXRlTW9kZSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIHshbG9hZGVkID9cbiAgICAgICAgPExvYWRpbmdQYWdlIC8+IDpcbiAgICAgICAgPE1haW4gc3R5bGU9e3ttaW5IZWlnaHQ6d2luU2l6ZVsxXSwgb3ZlcmZsb3c6J2F1dG8nfX0+XG4gICAgICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczonZmxleC1lbmQnLCB3aWR0aDonMTAwJScsIG1hcmdpbkJvdHRvbTonMzBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAg7J6s6rOgIOygleuztFxuICAgICAgICAgICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8VXBkYXRlQnRuIGNsYXNzTmFtZT1cImJ0bi1ob3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg7IiY7KCVXG4gICAgICAgICAgICAgICAgICAgIDwvVXBkYXRlQnRuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3tkaXNwbGF5OidmbGV4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaCBzdHlsZT17e3dpZHRoOiczMHB4J319Pk5vPC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGggc3R5bGU9e3t3aWR0aDonY2FsYygoMTAwJS0xMTBweCkqMi81KSd9fT7rqZTribQg7J2066aEPC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGggc3R5bGU9e3t3aWR0aDonODBweCd9fT7siJjrn4k8L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaCBzdHlsZT17e3dpZHRoOidjYWxjKCgxMDAlLTExMHB4KSozLzUpJ319Puu5hOqzoDwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7ZGlzcGxheTonZmxleCd9fSBrZXk9e3YubWVudV9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZCBzdHlsZT17e3dpZHRoOiczMHB4J319PntpKzF9PC9UZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRkIHN0eWxlPXt7d2lkdGg6J2NhbGMoKDEwMCUtMTEwcHgpKjIvNSknfX0+e3YubWVudV9uYW1lfTwvVGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZCBzdHlsZT17e3dpZHRoOic4MHB4J319Pnt2LnN0b2NrfTwvVGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZCBzdHlsZT17e3dpZHRoOidjYWxjKCgxMDAlLTExMHB4KSozLzUpJ319Pnt2Lm5vdGV9PC9UZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICA8L01haW4+fVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RvY2tQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/StockPage/index.js\n");

/***/ })

})