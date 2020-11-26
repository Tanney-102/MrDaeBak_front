webpackHotUpdate_N_E("pages/index",{

/***/ "./components/StockPage/index.js":
/*!***************************************!*\
  !*** ./components/StockPage/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useWindowSize */ \"./hooks/useWindowSize.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style */ \"./components/StockPage/style.js\");\n/* harmony import */ var _LoadingPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../LoadingPage */ \"./components/LoadingPage.js\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useInput */ \"./hooks/useInput.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/taeeun/Desktop/Programming/Projects/MrDaeBak/MrDaeBak_front/components/StockPage/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar getStockInfo = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('/stock/read').then(function (res) {\n              return res.data;\n            })[\"catch\"](function (err) {\n              console.error(err);\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getStockInfo() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar StockPage = function StockPage() {\n  _s();\n\n  var winSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      loaded = _useState[0],\n      setLoaded = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      tmpData = _useState3[0],\n      setTmpData = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      updateMode = _useState4[0],\n      setUpdateMode = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    var _data = getStockInfo();\n\n    setData(_data);\n    setLoaded(true);\n  }, []);\n  var changeMode = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useCallback\"])(function () {\n    setUpdateMode(true);\n    setTmpData(data);\n  }, []);\n  var saveData = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useCallback\"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('/stock/update', {\n              data: data\n            }).then(function (res) {\n              if (res.result === 'success') {\n                alert('수정사항을 성공적으로 저장하였습니다');\n              } else {\n                alert('error');\n              }\n            })[\"catch\"](function (err) {\n              return console.error(err);\n            });\n\n          case 2:\n            setUpdateMode(false);\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  })), []);\n  var cancelUpdate = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useCallback\"])(function () {\n    setData(tmpData);\n    setUpdateMode(false);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"Fragment\"], {\n    children: !loaded ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_LoadingPage__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_8__[\"Main\"], {\n      style: {\n        minHeight: winSize[1],\n        overflow: 'auto'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_8__[\"Content\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n          style: {\n            display: 'flex',\n            alignItems: 'flex-end',\n            width: '100%',\n            marginBottom: '30px'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_8__[\"Title\"], {\n            children: \"\\uC7AC\\uACE0 \\uC815\\uBCF4\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 21\n          }, _this), updateMode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"Fragment\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_8__[\"SmallBtn\"], {\n              className: \"btn-hover\",\n              onClick: saveData,\n              children: \"\\uC800\\uC7A5\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 25\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_8__[\"SmallBtn\"], {\n              className: \"btn-hover\",\n              onClick: cancelUpdate,\n              children: \"\\uCDE8\\uC18C\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 25\n            }, _this)]\n          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_8__[\"SmallBtn\"], {\n            className: \"btn-hover\",\n            onClick: changeMode,\n            children: \"\\uC218\\uC815\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"table\", {\n          style: {\n            width: '100%'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"thead\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"tr\", {\n              style: {\n                display: 'flex'\n              },\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_8__[\"Th\"], {\n                style: {\n                  width: '30px'\n                },\n                children: \"No\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_8__[\"Th\"], {\n                style: {\n                  width: 'calc((100%-110px)*2/5)'\n                },\n                children: \"\\uBA54\\uB274 \\uC774\\uB984\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_8__[\"Th\"], {\n                style: {\n                  width: '80px'\n                },\n                children: \"\\uC218\\uB7C9\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 87,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_8__[\"Th\"], {\n                style: {\n                  width: 'calc((100%-110px)*3/5)'\n                },\n                children: \"\\uBE44\\uACE0\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 88,\n                columnNumber: 29\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 25\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"tbody\", {\n            children: data.map(function (v, i) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"tr\", {\n                style: {\n                  display: 'flex'\n                },\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_8__[\"Td\"], {\n                  style: {\n                    width: '30px'\n                  },\n                  children: i + 1\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 95,\n                  columnNumber: 33\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_8__[\"Td\"], {\n                  style: {\n                    width: 'calc((100%-110px)*2/5)'\n                  },\n                  children: updateMode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n                    type: \"text\",\n                    value: v.menu_name,\n                    autoComplete: \"off\",\n                    onChange: function onChange(e) {\n                      setData(function (prevData) {\n                        var newData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(prevData);\n\n                        newData[i] = _objectSpread(_objectSpread({}, prevData[i]), {}, {\n                          menu_name: e.target.value\n                        });\n                        return newData;\n                      });\n                    }\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 98,\n                    columnNumber: 39\n                  }, _this) : v.menu_name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 33\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_8__[\"Td\"], {\n                  style: {\n                    width: '80px'\n                  },\n                  children: updateMode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n                    type: \"number\",\n                    value: v.stock,\n                    autoComplete: \"off\",\n                    onChange: function onChange(e) {\n                      setData(function (prevData) {\n                        var newData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(prevData);\n\n                        newData[i] = _objectSpread(_objectSpread({}, prevData[i]), {}, {\n                          stock: e.target.value\n                        });\n                        return newData;\n                      });\n                    }\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 115,\n                    columnNumber: 39\n                  }, _this) : v.stock\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 113,\n                  columnNumber: 33\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_8__[\"Td\"], {\n                  style: {\n                    width: 'calc((100%-110px)*3/5)'\n                  },\n                  children: updateMode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n                    type: \"text\",\n                    value: v.note,\n                    autoComplete: \"off\",\n                    onChange: function onChange(e) {\n                      setData(function (prevData) {\n                        var newData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(prevData);\n\n                        newData[i] = _objectSpread(_objectSpread({}, prevData[i]), {}, {\n                          note: e.target.value\n                        });\n                        return newData;\n                      });\n                    }\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 132,\n                    columnNumber: 39\n                  }, _this) : v.note\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 130,\n                  columnNumber: 33\n                }, _this)]\n              }, v.menu_id, true, {\n                fileName: _jsxFileName,\n                lineNumber: 94,\n                columnNumber: 29\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(StockPage, \"jhRGGwrtT0tfCzhqiY4XubNBNLs=\", false, function () {\n  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n});\n\n_c = StockPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StockPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"StockPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdG9ja1BhZ2UvaW5kZXguanM/OWEyOSJdLCJuYW1lcyI6WyJnZXRTdG9ja0luZm8iLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiU3RvY2tQYWdlIiwid2luU2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsImxvYWRlZCIsInNldExvYWRlZCIsInNldERhdGEiLCJ0bXBEYXRhIiwic2V0VG1wRGF0YSIsInVwZGF0ZU1vZGUiLCJzZXRVcGRhdGVNb2RlIiwidXNlRWZmZWN0IiwiX2RhdGEiLCJjaGFuZ2VNb2RlIiwidXNlQ2FsbGJhY2siLCJzYXZlRGF0YSIsInBvc3QiLCJyZXN1bHQiLCJhbGVydCIsImNhbmNlbFVwZGF0ZSIsIm1pbkhlaWdodCIsIm92ZXJmbG93IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsInYiLCJpIiwibWVudV9uYW1lIiwiZSIsInByZXZEYXRhIiwibmV3RGF0YSIsInRhcmdldCIsInZhbHVlIiwic3RvY2siLCJub3RlIiwibWVudV9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZO0FBQUEsOExBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1hDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxhQUFWLEVBQ0xDLElBREssQ0FDQSxVQUFBQyxHQUFHLEVBQUk7QUFDVCxxQkFBT0EsR0FBRyxDQUFDQyxJQUFYO0FBQ0gsYUFISyxXQUlDLFVBQUFDLEdBQUcsRUFBSTtBQUNWQyxxQkFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDSCxhQU5LLENBRFc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7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R0gsQ0F6SUQ7O0dBQU1yQyxTO1VBQ2NFLDREOzs7S0FEZEYsUztBQTJJU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0b2NrUGFnZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uLy4uL2hvb2tzL3VzZVdpbmRvd1NpemUnO1xuaW1wb3J0IHsgTWFpbiwgQ29udGVudCwgVGl0bGUsIFRoLCBUZCwgU21hbGxCdG4sIElucHV0IH0gZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgTG9hZGluZ1BhZ2UgZnJvbSAnLi4vTG9hZGluZ1BhZ2UnO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uLy4uL2hvb2tzL3VzZUlucHV0JztcblxuY29uc3QgZ2V0U3RvY2tJbmZvID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGF4aW9zLmdldCgnL3N0b2NrL3JlYWQnKVxuICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJldHVybiByZXMuZGF0YTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfSk7XG59O1xuXG5jb25zdCBTdG9ja1BhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2luU2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt0bXBEYXRhLCBzZXRUbXBEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt1cGRhdGVNb2RlLCBzZXRVcGRhdGVNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IF9kYXRhID0gZ2V0U3RvY2tJbmZvKCk7XG5cbiAgICAgICAgc2V0RGF0YShfZGF0YSk7XG4gICAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBjaGFuZ2VNb2RlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRVcGRhdGVNb2RlKHRydWUpO1xuICAgICAgICBzZXRUbXBEYXRhKGRhdGEpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHNhdmVEYXRhID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KCcvc3RvY2svdXBkYXRlJywgeyBkYXRhIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZihyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgn7IiY7KCV7IKs7ZWt7J2EIOyEseqzteyggeycvOuhnCDsoIDsnqXtlZjsmIDsirXri4jri6QnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ2Vycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcblxuICAgICAgICBzZXRVcGRhdGVNb2RlKGZhbHNlKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBjYW5jZWxVcGRhdGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldERhdGEodG1wRGF0YSk7XG4gICAgICAgIHNldFVwZGF0ZU1vZGUoZmFsc2UpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIHshbG9hZGVkID9cbiAgICAgICAgPExvYWRpbmdQYWdlIC8+IDpcbiAgICAgICAgPE1haW4gc3R5bGU9e3ttaW5IZWlnaHQ6d2luU2l6ZVsxXSwgb3ZlcmZsb3c6J2F1dG8nfX0+XG4gICAgICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczonZmxleC1lbmQnLCB3aWR0aDonMTAwJScsIG1hcmdpbkJvdHRvbTonMzBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAg7J6s6rOgIOygleuztFxuICAgICAgICAgICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICB7dXBkYXRlTW9kZVxuICAgICAgICAgICAgICAgICAgICA/IFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNtYWxsQnRuIGNsYXNzTmFtZT1cImJ0bi1ob3ZlclwiIG9uQ2xpY2s9e3NhdmVEYXRhfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDsoIDsnqVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU21hbGxCdG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U21hbGxCdG4gY2xhc3NOYW1lPVwiYnRuLWhvdmVyXCIgb25DbGljaz17Y2FuY2VsVXBkYXRlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDst6jshoxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU21hbGxCdG4+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxTbWFsbEJ0biBjbGFzc05hbWU9XCJidG4taG92ZXJcIiBvbkNsaWNrPXtjaGFuZ2VNb2RlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIOyImOyglVxuICAgICAgICAgICAgICAgICAgICA8L1NtYWxsQnRuPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7ZGlzcGxheTonZmxleCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGggc3R5bGU9e3t3aWR0aDonMzBweCd9fT5ObzwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoIHN0eWxlPXt7d2lkdGg6J2NhbGMoKDEwMCUtMTEwcHgpKjIvNSknfX0+66mU64m0IOydtOumhDwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoIHN0eWxlPXt7d2lkdGg6JzgwcHgnfX0+7IiY65+JPC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGggc3R5bGU9e3t3aWR0aDonY2FsYygoMTAwJS0xMTBweCkqMy81KSd9fT7ruYTqs6A8L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnfX0ga2V5PXt2Lm1lbnVfaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGQgc3R5bGU9e3t3aWR0aDonMzBweCd9fT57aSsxfTwvVGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZCBzdHlsZT17e3dpZHRoOidjYWxjKCgxMDAlLTExMHB4KSoyLzUpJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VwZGF0ZU1vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPElucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17di5tZW51X25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEocHJldkRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSBbLi4ucHJldkRhdGFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RhdGFbaV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXZEYXRhW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51X25hbWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3RGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB2Lm1lbnVfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRkIHN0eWxlPXt7d2lkdGg6JzgwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXBkYXRlTW9kZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPElucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Yuc3RvY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShwcmV2RGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IFsuLi5wcmV2RGF0YV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVtpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldkRhdGFbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHYuc3RvY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZCBzdHlsZT17e3dpZHRoOidjYWxjKCgxMDAlLTExMHB4KSozLzUpJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VwZGF0ZU1vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPElucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2Lm5vdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShwcmV2RGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IFsuLi5wcmV2RGF0YV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVtpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldkRhdGFbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3RGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdi5ub3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgIDwvTWFpbj59XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9ja1BhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/StockPage/index.js\n");

/***/ })

})