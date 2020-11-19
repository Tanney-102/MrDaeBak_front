webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.js\");\n/* harmony import */ var _components_OrderTypeBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/OrderTypeBtn */ \"./components/OrderTypeBtn/index.js\");\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useWindowSize */ \"./hooks/useWindowSize.js\");\n/* harmony import */ var _style_indexStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/indexStyle */ \"./style/indexStyle.js\");\n\n\n\nvar _jsxFileName = \"/Users/taeeun/Desktop/Programming/Projects/MrDaeBak/MrDaeBak_front/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var winSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      curPage = _useState[0],\n      setCurPage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollPos = _useState2[0],\n      setScrollPos = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      scrollDir = _useState3[0],\n      setScrollDir = _useState3[1];\n\n  var mainRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var movePage = function movePage() {\n    setScrollDir(scrollPos - document.documentElement.scrollTop < 0 ? 1 : 0);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log('page loaded');\n    window.addEventListener('scroll', movePage);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (scrollDir ^ curPage) setCurPage(scrollDir);\n  }, [scrollDir]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    mainRef.current.style.transform = \"translateY(-\".concat(curPage, \"00%)\");\n  }, [curPage]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      headerType: curPage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style_indexStyle__WEBPACK_IMPORTED_MODULE_7__[\"Main\"], {\n      style: {\n        height: winSize[1] * 1.01\n      },\n      onScroll: movePage,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style_indexStyle__WEBPACK_IMPORTED_MODULE_7__[\"Slide\"], {\n        ref: mainRef,\n        style: {\n          height: winSize[1]\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style_indexStyle__WEBPACK_IMPORTED_MODULE_7__[\"FirstPage\"], {\n          style: {\n            height: winSize[1]\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style_indexStyle__WEBPACK_IMPORTED_MODULE_7__[\"MainCopy\"], {\n            children: [\"\\uD2B9\\uBCC4\\uD55C \\uB0A0\\uC744\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 35\n            }, _this), \"\\uB354\\uC6B1 \\uD2B9\\uBCC4\\uD558\\uAC8C\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style_indexStyle__WEBPACK_IMPORTED_MODULE_7__[\"ScrollGuide\"], {\n            children: [\"\\uC544\\uB798\\uB85C \\uC2A4\\uD06C\\uB864\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faAngleDown\"],\n              style: {\n                marginLeft: '20px'\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style_indexStyle__WEBPACK_IMPORTED_MODULE_7__[\"SecondPage\"], {\n          style: {\n            height: winSize[1] * 1.01\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style_indexStyle__WEBPACK_IMPORTED_MODULE_7__[\"SecondCopyBack\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style_indexStyle__WEBPACK_IMPORTED_MODULE_7__[\"SecondCopy\"], {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                style: {\n                  position: 'absolute',\n                  left: '70px',\n                  top: '60px'\n                },\n                children: [\"\\uC5EC\\uBCF4!\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 40\n                }, _this), \"\\uC6B0\\uB9AC \\uC624\\uB298 \\uC800\\uB141\\uC5D0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 58,\n                  columnNumber: 46\n                }, _this), \"\\uBBF8\\uC2A4\\uD130 \\uB300\\uBC15 \\uC5B4\\uB54C\\uC694?\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 59,\n                  columnNumber: 48\n                }, _this), \"\\uB2F9\\uC2E0 \\uCDE8\\uD5A5\\uB300\\uB85C\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 60,\n                  columnNumber: 44\n                }, _this), \"\\uC8FC\\uBB38\\uD574\\uC918\\uC694~\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            style: {\n              display: 'flex',\n              flexDirection: 'column'\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style_indexStyle__WEBPACK_IMPORTED_MODULE_7__[\"SecondCopy\"], {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                style: {\n                  position: 'absolute',\n                  left: '70px',\n                  top: '60px'\n                },\n                children: [\"\\uC5EC\\uBCF4!\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 75,\n                  columnNumber: 40\n                }, _this), \"\\uC6B0\\uB9AC \\uC624\\uB298 \\uC800\\uB141\\uC5D0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 76,\n                  columnNumber: 46\n                }, _this), \"\\uBBF8\\uC2A4\\uD130 \\uB300\\uBC15 \\uC5B4\\uB54C\\uC694?\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 77,\n                  columnNumber: 48\n                }, _this), \"\\uB2F9\\uC2E0 \\uCDE8\\uD5A5\\uB300\\uB85C\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 78,\n                  columnNumber: 44\n                }, _this), \"\\uC8FC\\uBB38\\uD574\\uC918\\uC694~\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_OrderTypeBtn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Home, \"zc8SV8pWfa0atJ4k5uK92Uj9euU=\", false, function () {\n  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__[\"default\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwid2luU2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsImN1clBhZ2UiLCJzZXRDdXJQYWdlIiwic2Nyb2xsUG9zIiwic2V0U2Nyb2xsUG9zIiwic2Nyb2xsRGlyIiwic2V0U2Nyb2xsRGlyIiwibWFpblJlZiIsInVzZVJlZiIsIm1vdmVQYWdlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnJlbnQiLCJzdHlsZSIsInRyYW5zZm9ybSIsImhlaWdodCIsImZhQW5nbGVEb3duIiwibWFyZ2luTGVmdCIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2YsTUFBTUMsT0FBTyxHQUFHQyxvRUFBYSxFQUE3Qjs7QUFEZSxrQkFFZUMsc0RBQVEsQ0FBQyxDQUFELENBRnZCO0FBQUEsTUFFUkMsT0FGUTtBQUFBLE1BRUNDLFVBRkQ7O0FBQUEsbUJBR21CRixzREFBUSxDQUFDLENBQUQsQ0FIM0I7QUFBQSxNQUdSRyxTQUhRO0FBQUEsTUFHR0MsWUFISDs7QUFBQSxtQkFJbUJKLHNEQUFRLENBQUMsQ0FBRCxDQUozQjtBQUFBLE1BSVJLLFNBSlE7QUFBQSxNQUlHQyxZQUpIOztBQUtmLE1BQU1DLE9BQU8sR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXRCOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkJILGdCQUFZLENBQUNILFNBQVMsR0FBR08sUUFB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QUFBQTtBQUFBO0FBQUEseUJBTmIsc0VBT2U7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQZix3REFRVztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkosZUFpQkkscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUEsa0JBREo7QUFzREgsQ0EvRUQ7O0dBQU03QixJO1VBQ2NFLDREOzs7S0FEZEYsSTtBQWlGU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFBbmdsZURvd24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBPcmRlclR5cGVCdG4gZnJvbSAnLi4vY29tcG9uZW50cy9PcmRlclR5cGVCdG4nO1xuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vaG9va3MvdXNlV2luZG93U2l6ZSc7XG5pbXBvcnQgeyBNYWluLCBTbGlkZSwgRmlyc3RQYWdlLCBTZWNvbmRQYWdlLCBNYWluQ29weSwgU2Nyb2xsR3VpZGUsIFNlY29uZENvcHksIFNlY29uZENvcHlCYWNrIH0gZnJvbSAnLi4vc3R5bGUvaW5kZXhTdHlsZSc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2luU2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcbiAgICBjb25zdCBbY3VyUGFnZSwgc2V0Q3VyUGFnZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbc2Nyb2xsUG9zLCBzZXRTY3JvbGxQb3NdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3Njcm9sbERpciwgc2V0U2Nyb2xsRGlyXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IG1haW5SZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgXG4gICAgY29uc3QgbW92ZVBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIHNldFNjcm9sbERpcihzY3JvbGxQb3MgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIDwgMCA/IDEgOiAwKTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BhZ2UgbG9hZGVkJyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBtb3ZlUGFnZSk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoc2Nyb2xsRGlyXmN1clBhZ2UpIHNldEN1clBhZ2Uoc2Nyb2xsRGlyKVxuICAgIH0sIFtzY3JvbGxEaXJdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIG1haW5SZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgtJHtjdXJQYWdlfTAwJSlgO1xuICAgIH0sIFtjdXJQYWdlXSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyIGhlYWRlclR5cGU9e2N1clBhZ2V9IC8+XG4gICAgICAgICAgICA8TWFpbiBzdHlsZT17e2hlaWdodDp3aW5TaXplWzFdKjEuMDF9fSBvblNjcm9sbD17bW92ZVBhZ2V9PlxuICAgICAgICAgICAgICAgIDxTbGlkZSByZWY9e21haW5SZWZ9IHN0eWxlPXt7aGVpZ2h0OndpblNpemVbMV19fT5cbiAgICAgICAgICAgICAgICAgICAgPEZpcnN0UGFnZSBzdHlsZT17e2hlaWdodDp3aW5TaXplWzFdfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFpbkNvcHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg7Yq567OE7ZWcIOuCoOydhDxiciAvPuuNlOyasSDtirnrs4TtlZjqsoxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWFpbkNvcHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsR3VpZGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg7JWE656Y66GcIOyKpO2BrOuhpFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBbmdsZURvd259IHN0eWxlPXt7bWFyZ2luTGVmdDonMjBweCd9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxHdWlkZT5cbiAgICAgICAgICAgICAgICAgICAgPC9GaXJzdFBhZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxTZWNvbmRQYWdlIHN0eWxlPXt7aGVpZ2h0OndpblNpemVbMV0qMS4wMX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlY29uZENvcHlCYWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWNvbmRDb3B5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDonNzBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6JzYwcHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7Jes67O0ITxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7Jqw66asIOyYpOuKmCDsoIDrhYHsl5A8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOuvuOyKpO2EsCDrjIDrsJUg7Ja065WM7JqUPzxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg64u57IugIOy3qO2WpeuMgOuhnDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7KO866y47ZW07KSY7JqUflxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlY29uZENvcHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlY29uZENvcHlCYWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6J2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246J2NvbHVtbidcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWNvbmRDb3B5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDonNzBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6JzYwcHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7Jes67O0ITxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7Jqw66asIOyYpOuKmCDsoIDrhYHsl5A8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOuvuOyKpO2EsCDrjIDrsJUg7Ja065WM7JqUPzxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg64u57IugIOy3qO2WpeuMgOuhnDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7KO866y47ZW07KSY7JqUflxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlY29uZENvcHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9yZGVyVHlwZUJ0bi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9TZWNvbmRQYWdlPlxuICAgICAgICAgICAgICAgIDwvU2xpZGU+XG4gICAgICAgICAgICA8L01haW4+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})