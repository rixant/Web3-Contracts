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

/***/ "./factory.js":
/*!********************!*\
  !*** ./factory.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ \"./web3.js\");\n/* harmony import */ var _build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/CampaignFactory.json */ \"./build/CampaignFactory.json\");\n\n\nvar instance = new _web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eth.Contract(JSON.parse(_build_CampaignFactory_json__WEBPACK_IMPORTED_MODULE_1__[\"interface\"]), \"0xd873Fe6F8abE6cc7e48F4Cd8E3f3036c9Bd5365f\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mYWN0b3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUEwQjtBQUNpQztBQUUzRCxJQUFNRSxRQUFRLEdBQUcsSUFBSUYsMERBQWlCLENBQ2xDSyxJQUFJLENBQUNDLEtBQUssQ0FBQ0wscUVBQXlCLENBQUMsRUFDckMsNENBQTRDLENBQy9DO0FBRUQsK0RBQWVDLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9mYWN0b3J5LmpzP2E0MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlYjMgZnJvbSBcIi4vd2ViM1wiO1xuaW1wb3J0IENhbXBhaWduRmFjdG9yeSBmcm9tICcuL2J1aWxkL0NhbXBhaWduRmFjdG9yeS5qc29uJztcblxuY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG4gICAgSlNPTi5wYXJzZShDYW1wYWlnbkZhY3RvcnkuaW50ZXJmYWNlKSxcbiAgICAnMHhkODczRmU2RjhhYkU2Y2M3ZTQ4RjRDZDhFM2YzMDM2YzlCZDUzNjVmJ1xuKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7Il0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./factory.js\n"));

/***/ })

});