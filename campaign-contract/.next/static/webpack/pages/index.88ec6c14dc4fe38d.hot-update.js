"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factory */ \"./factory.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction Campaign() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState([]), 2), campaigns = ref[0], setCampaigns = ref[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n                var data;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                _factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.getDeployedCampaigns().call()\n                            ];\n                        case 1:\n                            data = _state.sent();\n                            setCampaigns(data);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData().catch(console.error);\n    });\n    console.log(campaigns);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: campaigns[0]\n    }, void 0, false, {\n        fileName: \"/Users/rixant/My Repositories/First-Contract/campaign-contract/pages/index.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(Campaign, \"cs39QXcNpdqPEeh3JSIjS5rb/Es=\");\n_c = Campaign;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Campaign);\nvar _c;\n$RefreshReg$(_c, \"Campaign\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7QUFBMEI7QUFDTztBQUdqQyxTQUFTRSxRQUFRLEdBQUk7O0lBRWpCLElBQWtDRixHQUFrQixvRkFBbEJBLHFEQUFjLENBQUMsRUFBRSxDQUFDLE1BQTdDSSxTQUFTLEdBQWtCSixHQUFrQixHQUFwQyxFQUFFSyxZQUFZLEdBQUlMLEdBQWtCLEdBQXRCO0lBRTlCQSxzREFBZSxDQUFDLFdBQU07UUFDbEIsSUFBTU8sU0FBUzt1QkFBRywrRkFBWTtvQkFDcEJDLElBQUk7Ozs7NEJBQUc7O2dDQUFNUCw2RUFBb0MsRUFBRSxDQUFDVSxJQUFJLEVBQUU7OEJBQUE7OzRCQUExREgsSUFBSSxHQUFHLGFBQW1EOzRCQUNoRUgsWUFBWSxDQUFDRyxJQUFJLENBQUMsQ0FBQzs7Ozs7O1lBQ3ZCLENBQUM7NEJBSEtELFNBQVM7OztXQUdkO1FBR0ZBLFNBQVMsRUFBRSxDQUFDSyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFFSEQsT0FBTyxDQUFDRSxHQUFHLENBQUNYLFNBQVMsQ0FBQztJQUV0QixxQkFDSSw4REFBQ1ksS0FBRztrQkFBRVosU0FBUyxDQUFDLENBQUMsQ0FBQzs7Ozs7WUFBTyxDQUMzQjtBQUVOLENBQUM7R0FwQlFGLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQXVCakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9mYWN0b3J5JztcblxuXG5mdW5jdGlvbiBDYW1wYWlnbiAoKSB7XG5cbiAgICBjb25zdCBbY2FtcGFpZ25zLCBzZXRDYW1wYWlnbnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4geyBcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XG4gICAgICAgICAgICBzZXRDYW1wYWlnbnMoZGF0YSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgZmV0Y2hEYXRhKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhjYW1wYWlnbnMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PntjYW1wYWlnbnNbMF19PC9kaXY+XG4gICAgKTtcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduOyJdLCJuYW1lcyI6WyJSZWFjdCIsImZhY3RvcnkiLCJDYW1wYWlnbiIsInVzZVN0YXRlIiwiY2FtcGFpZ25zIiwic2V0Q2FtcGFpZ25zIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiZGF0YSIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});