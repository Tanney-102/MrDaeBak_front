webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ManagerPage/index.js":
/*!*****************************************!*\
  !*** ./components/ManagerPage/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useWindowSize */ \"./hooks/useWindowSize.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ \"./components/ManagerPage/style.js\");\n/* harmony import */ var _StockPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../StockPage */ \"./components/StockPage/index.js\");\n/* harmony import */ var _LoadingPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../LoadingPage */ \"./components/LoadingPage.js\");\n\n\nvar _jsxFileName = \"/Users/taeeun/Desktop/Programming/Projects/MrDaeBak/MrDaeBak_front/components/ManagerPage/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar ManagerPage = function ManagerPage() {\n  _s();\n\n  var winSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      curPage = _useState[0],\n      setCurPage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      loaded = _useState2[0],\n      setLoaded = _useState2[1];\n\n  var slideRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setLoaded(true);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (loaded) slideRef.current.style.transform = \"translateX(-\".concat(curPage * 100 / 3, \"%)\");\n  }, [curPage]);\n  return !loaded ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_LoadingPage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 11\n  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"Main\"], {\n    style: {\n      height: winSize[1]\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"Slide\"], {\n      ref: slideRef,\n      style: {\n        width: winSize[0] * 3\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"PageContainer\"], {\n        style: {\n          width: winSize[0],\n          height: winSize[1]\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StockPage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"PageContainer\"], {\n        style: {\n          width: winSize[0],\n          height: winSize[1]\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"BtnContainer\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"MenuBtn\"], {\n            className: \"btn-hover\",\n            onClick: function onClick() {\n              return setCurPage(2);\n            },\n            children: \"\\uC8FC\\uBB38 \\uD655\\uC778\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"MenuBtn\"], {\n            className: \"btn-hover\",\n            onClick: function onClick() {\n              return setCurPage(0);\n            },\n            children: \"\\uC7AC\\uACE0 \\uAD00\\uB9AC\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"PageContainer\"], {\n        style: {\n          width: winSize[0],\n          height: winSize[1]\n        },\n        children: \"\\uC8FC\\uBB38 \\uD655\\uC778 \\uD398\\uC774\\uC9C0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"BackBtn\"], {\n      onClick: function onClick() {\n        return setCurPage(1);\n      },\n      className: \"btn-hover\",\n      style: {\n        display: curPage === 0 ? '' : 'none',\n        right: '0'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faChevronRight\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"BackBtn\"], {\n      onClick: function onClick() {\n        return setCurPage(1);\n      },\n      className: \"btn-hover\",\n      style: {\n        display: curPage === 2 ? '' : 'none',\n        left: '0'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faChevronLeft\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(ManagerPage, \"I1F8uX4bvU0k3Xego2Oyb+V5NtY=\", false, function () {\n  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = ManagerPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManagerPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ManagerPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYW5hZ2VyUGFnZS9pbmRleC5qcz82NGRhIl0sIm5hbWVzIjpbIk1hbmFnZXJQYWdlIiwid2luU2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsImN1clBhZ2UiLCJzZXRDdXJQYWdlIiwibG9hZGVkIiwic2V0TG9hZGVkIiwic2xpZGVSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJoZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJyaWdodCIsImZhQ2hldnJvblJpZ2h0IiwibGVmdCIsImZhQ2hldnJvbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN0QixNQUFNQyxPQUFPLEdBQUdDLG9FQUFhLEVBQTdCOztBQURzQixrQkFFUUMsc0RBQVEsQ0FBQyxDQUFELENBRmhCO0FBQUEsTUFFZkMsT0FGZTtBQUFBLE1BRU5DLFVBRk07O0FBQUEsbUJBR01GLHNEQUFRLENBQUMsS0FBRCxDQUhkO0FBQUEsTUFHZkcsTUFIZTtBQUFBLE1BR1BDLFNBSE87O0FBSXRCLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXZCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaSCxhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBRyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFHSixNQUFILEVBQ0lFLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsS0FBakIsQ0FBdUJDLFNBQXZCLHlCQUFrRFQsT0FBTyxHQUFDLEdBQVIsR0FBWSxDQUE5RDtBQUNQLEdBSFEsRUFHTixDQUFDQSxPQUFELENBSE0sQ0FBVDtBQUtBLFNBQ0ksQ0FBQ0UsTUFBRCxnQkFD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dCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQ2hldnJvbkxlZnQsIGZhQ2hldnJvblJpZ2h0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vLi4vaG9va3MvdXNlV2luZG93U2l6ZSc7XG5pbXBvcnQgeyBNYWluLCBCdG5Db250YWluZXIsIE1lbnVCdG4sIFNsaWRlLCBQYWdlQ29udGFpbmVyLCBCYWNrQnRuIH0gZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgU3RvY2tQYWdlIGZyb20gJy4uL1N0b2NrUGFnZSc7XG5pbXBvcnQgTG9hZGluZ1BhZ2UgZnJvbSAnLi4vTG9hZGluZ1BhZ2UnO1xuXG5jb25zdCBNYW5hZ2VyUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCB3aW5TaXplID0gdXNlV2luZG93U2l6ZSgpO1xuICAgIGNvbnN0IFtjdXJQYWdlLCBzZXRDdXJQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2xpZGVSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYobG9hZGVkKVxuICAgICAgICAgICAgc2xpZGVSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtjdXJQYWdlKjEwMC8zfSUpYDtcbiAgICB9LCBbY3VyUGFnZV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgIWxvYWRlZFxuICAgICAgICA/IDxMb2FkaW5nUGFnZSAvPlxuICAgICAgICA6IFxuICAgICAgICA8TWFpbiBzdHlsZT17e2hlaWdodDp3aW5TaXplWzFdfX0+XG4gICAgICAgICAgICA8U2xpZGUgcmVmPXtzbGlkZVJlZn0gc3R5bGU9e3t3aWR0aDp3aW5TaXplWzBdKjN9fT5cbiAgICAgICAgICAgICAgICA8UGFnZUNvbnRhaW5lciBzdHlsZT17e3dpZHRoOndpblNpemVbMF0sIGhlaWdodDp3aW5TaXplWzFdfX0+XG4gICAgICAgICAgICAgICAgICAgIDxTdG9ja1BhZ2UgLz5cbiAgICAgICAgICAgICAgICA8L1BhZ2VDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFBhZ2VDb250YWluZXIgc3R5bGU9e3t3aWR0aDp3aW5TaXplWzBdLCBoZWlnaHQ6d2luU2l6ZVsxXX19PlxuICAgICAgICAgICAgICAgICAgICA8QnRuQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVCdG4gY2xhc3NOYW1lPVwiYnRuLWhvdmVyXCIgb25DbGljaz17KCk9PnNldEN1clBhZ2UoMil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyjvOusuCDtmZXsnbhcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51QnRuIGNsYXNzTmFtZT1cImJ0bi1ob3ZlclwiIG9uQ2xpY2s9eygpPT5zZXRDdXJQYWdlKDApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDsnqzqs6Ag6rSA66asXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVCdG4+XG4gICAgICAgICAgICAgICAgICAgIDwvQnRuQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvUGFnZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8UGFnZUNvbnRhaW5lciBzdHlsZT17e3dpZHRoOndpblNpemVbMF0sIGhlaWdodDp3aW5TaXplWzFdfX0+XG4gICAgICAgICAgICAgICAgICAgIOyjvOusuCDtmZXsnbgg7Y6Y7J207KeAXG4gICAgICAgICAgICAgICAgPC9QYWdlQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9TbGlkZT5cbiAgICAgICAgICAgIDxCYWNrQnRuXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCk9PnNldEN1clBhZ2UoMSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWhvdmVyXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmN1clBhZ2U9PT0wPycnOidub25lJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6JzAnXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IC8+XG4gICAgICAgICAgICA8L0JhY2tCdG4+XG4gICAgICAgICAgICA8QmFja0J0biBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+c2V0Q3VyUGFnZSgxKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4taG92ZXJcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6Y3VyUGFnZT09PTI/Jyc6J25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OicwJyxcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25MZWZ0fSAvPlxuICAgICAgICAgICAgPC9CYWNrQnRuPlxuICAgICAgICA8L01haW4+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXJQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ManagerPage/index.js\n");

/***/ })

})