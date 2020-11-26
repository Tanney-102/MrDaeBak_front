webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ManagerPage/index.js":
/*!*****************************************!*\
  !*** ./components/ManagerPage/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useWindowSize */ \"./hooks/useWindowSize.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ \"./components/ManagerPage/style.js\");\n\n\nvar _jsxFileName = \"/Users/taeeun/Desktop/Programming/Projects/MrDaeBak/MrDaeBak_front/components/ManagerPage/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ManagerPage = function ManagerPage() {\n  _s();\n\n  var winSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(2),\n      curPage = _useState[0],\n      setCurPage = _useState[1];\n\n  var slideRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    slideRef.current.style.transform = \"translateX(-\".concat(curPage * 100 / 3, \"%)\");\n  }, [curPage]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"Main\"], {\n    style: {\n      height: winSize[1]\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"Slide\"], {\n      ref: slideRef,\n      style: {\n        width: winSize[0] * 3\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"PageContainer\"], {\n        style: {\n          width: winSize[0],\n          height: winSize[1]\n        },\n        children: \"\\uC7AC\\uACE0 \\uAD00\\uB9AC \\uD398\\uC774\\uC9C0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"PageContainer\"], {\n        style: {\n          width: winSize[0],\n          height: winSize[1]\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"BtnContainer\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"MenuBtn\"], {\n            children: \"\\uC8FC\\uBB38 \\uD655\\uC778\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"MenuBtn\"], {\n            children: \"\\uC7AC\\uACE0 \\uAD00\\uB9AC\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_5__[\"PageContainer\"], {\n        style: {\n          width: winSize[0],\n          height: winSize[1]\n        },\n        children: \"\\uC8FC\\uBB38 \\uD655\\uC778 \\uD398\\uC774\\uC9C0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      style: {\n        position: 'absolute',\n        top: '50%',\n        right: '30px',\n        display: curPage === 0 ? '' : 'none'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faChevronRight\"],\n        style: {\n          color: '#4c4a49',\n          fontSize: '2.5rem'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faChevronLeft\"],\n      style: {\n        position: 'absolute',\n        top: '50%',\n        left: '30px',\n        color: '#4c4a49',\n        fontSize: '2.5rem',\n        display: curPage === 2 ? '' : 'none'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(ManagerPage, \"ZXvM1y5OdAqqyVAzITO5shURovk=\", false, function () {\n  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = ManagerPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManagerPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ManagerPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYW5hZ2VyUGFnZS9pbmRleC5qcz82NGRhIl0sIm5hbWVzIjpbIk1hbmFnZXJQYWdlIiwid2luU2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsImN1clBhZ2UiLCJzZXRDdXJQYWdlIiwic2xpZGVSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJoZWlnaHQiLCJ3aWR0aCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJkaXNwbGF5IiwiZmFDaGV2cm9uUmlnaHQiLCJjb2xvciIsImZvbnRTaXplIiwiZmFDaGV2cm9uTGVmdCIsImxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN0QixNQUFNQyxPQUFPLEdBQUdDLG9FQUFhLEVBQTdCOztBQURzQixrQkFFUUMsc0RBQVEsQ0FBQyxDQUFELENBRmhCO0FBQUEsTUFFZkMsT0FGZTtBQUFBLE1BRU5DLFVBRk07O0FBR3RCLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXZCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaRixZQUFRLENBQUNHLE9BQVQsQ0FBaUJDLEtBQWpCLENBQXVCQyxTQUF2Qix5QkFBa0RQLE9BQU8sR0FBQyxHQUFSLEdBQVksQ0FBOUQ7QUFDSCxHQUZRLEVBRU4sQ0FBQ0EsT0FBRCxDQUZNLENBQVQ7QUFJQSxzQkFDSSxxRUFBQywyQ0FBRDtBQUFNLFNBQUssRUFBRTtBQUFDUSxZQUFNLEVBQUNYLE9BQU8sQ0FBQyxDQUFEO0FBQWYsS0FBYjtBQUFBLDRCQUNJLHFFQUFDLDRDQUFEO0FBQU8sU0FBRyxFQUFFSyxRQUFaO0FBQXNCLFdBQUssRUFBRTtBQUFDTyxhQUFLLEVBQUNaLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBVztBQUFsQixPQUE3QjtBQUFBLDhCQUNJLHFFQUFDLG9EQUFEO0FBQWUsYUFBSyxFQUFFO0FBQUNZLGVBQUssRUFBQ1osT0FBTyxDQUFDLENBQUQsQ0FBZDtBQUFtQlcsZ0JBQU0sRUFBQ1gsT0FBTyxDQUFDLENBQUQ7QUFBakMsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJLHFFQUFDLG9EQUFEO0FBQWUsYUFBSyxFQUFFO0FBQUNZLGVBQUssRUFBQ1osT0FBTyxDQUFDLENBQUQsQ0FBZDtBQUFtQlcsZ0JBQU0sRUFBQ1gsT0FBTyxDQUFDLENBQUQ7QUFBakMsU0FBdEI7QUFBQSwrQkFDSSxxRUFBQyxtREFBRDtBQUFBLGtDQUNJLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUkscUVBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKLGVBY0kscUVBQUMsb0RBQUQ7QUFBZSxhQUFLLEVBQUU7QUFBQ1ksZUFBSyxFQUFDWixPQUFPLENBQUMsQ0FBRCxDQUFkO0FBQW1CVyxnQkFBTSxFQUFDWCxPQUFPLENBQUMsQ0FBRDtBQUFqQyxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBbUJJO0FBQVEsV0FBSyxFQUFFO0FBQ1BhLGdCQUFRLEVBQUMsVUFERjtBQUVQQyxXQUFHLEVBQUMsS0FGRztBQUdQQyxhQUFLLEVBQUMsTUFIQztBQUlQQyxlQUFPLEVBQUNiLE9BQU8sS0FBRyxDQUFWLEdBQVksRUFBWixHQUFlO0FBSmhCLE9BQWY7QUFBQSw2QkFNSSxxRUFBQyw4RUFBRDtBQUNJLFlBQUksRUFBRWMsZ0ZBRFY7QUFFSSxhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFDLFNBQVI7QUFBbUJDLGtCQUFRLEVBQUM7QUFBNUI7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSixlQTZCSSxxRUFBQyw4RUFBRDtBQUNJLFVBQUksRUFBRUMsK0VBRFY7QUFFSSxXQUFLLEVBQUU7QUFDSFAsZ0JBQVEsRUFBQyxVQUROO0FBRUhDLFdBQUcsRUFBQyxLQUZEO0FBR0hPLFlBQUksRUFBQyxNQUhGO0FBSUhILGFBQUssRUFBQyxTQUpIO0FBS0hDLGdCQUFRLEVBQUMsUUFMTjtBQU1ISCxlQUFPLEVBQUNiLE9BQU8sS0FBRyxDQUFWLEdBQVksRUFBWixHQUFlO0FBTnBCO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBDSCxDQW5ERDs7R0FBTUosVztVQUNjRSw0RDs7O0tBRGRGLFc7QUFxRFNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NYW5hZ2VyUGFnZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFDaGV2cm9uTGVmdCwgZmFDaGV2cm9uUmlnaHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICcuLi8uLi9ob29rcy91c2VXaW5kb3dTaXplJztcbmltcG9ydCB7IE1haW4sIEJ0bkNvbnRhaW5lciwgTWVudUJ0biwgU2xpZGUsIFBhZ2VDb250YWluZXIgfSBmcm9tICcuL3N0eWxlJztcblxuY29uc3QgTWFuYWdlclBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2luU2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcbiAgICBjb25zdCBbY3VyUGFnZSwgc2V0Q3VyUGFnZV0gPSB1c2VTdGF0ZSgyKTtcbiAgICBjb25zdCBzbGlkZVJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNsaWRlUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7Y3VyUGFnZSoxMDAvM30lKWA7XG4gICAgfSwgW2N1clBhZ2VdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNYWluIHN0eWxlPXt7aGVpZ2h0OndpblNpemVbMV19fT5cbiAgICAgICAgICAgIDxTbGlkZSByZWY9e3NsaWRlUmVmfSBzdHlsZT17e3dpZHRoOndpblNpemVbMF0qM319PlxuICAgICAgICAgICAgICAgIDxQYWdlQ29udGFpbmVyIHN0eWxlPXt7d2lkdGg6d2luU2l6ZVswXSwgaGVpZ2h0OndpblNpemVbMV19fT5cbiAgICAgICAgICAgICAgICAgICAg7J6s6rOgIOq0gOumrCDtjpjsnbTsp4BcbiAgICAgICAgICAgICAgICA8L1BhZ2VDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFBhZ2VDb250YWluZXIgc3R5bGU9e3t3aWR0aDp3aW5TaXplWzBdLCBoZWlnaHQ6d2luU2l6ZVsxXX19PlxuICAgICAgICAgICAgICAgICAgICA8QnRuQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVCdG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg7KO866y4IO2ZleyduFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51QnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVCdG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg7J6s6rOgIOq0gOumrFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51QnRuPlxuICAgICAgICAgICAgICAgICAgICA8L0J0bkNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L1BhZ2VDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFBhZ2VDb250YWluZXIgc3R5bGU9e3t3aWR0aDp3aW5TaXplWzBdLCBoZWlnaHQ6d2luU2l6ZVsxXX19PlxuICAgICAgICAgICAgICAgICAgICDso7zrrLgg7ZmV7J24IO2OmOydtOyngFxuICAgICAgICAgICAgICAgIDwvUGFnZUNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvU2xpZGU+XG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgIHRvcDonNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6JzMwcHgnLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmN1clBhZ2U9PT0wPycnOidub25lJyxcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIFxuICAgICAgICAgICAgICAgICAgICBpY29uPXtmYUNoZXZyb25SaWdodH0gXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOicjNGM0YTQ5JywgZm9udFNpemU6JzIuNXJlbScsfX0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBcbiAgICAgICAgICAgICAgICBpY29uPXtmYUNoZXZyb25MZWZ0fSBcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICB0b3A6JzUwJScsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6JzMwcHgnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjonIzRjNGE0OScsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOicyLjVyZW0nLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmN1clBhZ2U9PT0yPycnOidub25lJyxcbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICA8L01haW4+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXJQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ManagerPage/index.js\n");

/***/ })

})