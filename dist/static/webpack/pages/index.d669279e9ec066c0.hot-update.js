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

/***/ "./src/components/buttons/CodeButton.tsx":
/*!***********************************************!*\
  !*** ./src/components/buttons/CodeButton.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar CodeButton = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), count = ref[0], setCount = ref[1];\n    var timer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var text = !count ? \"发送验证码\" : \"已发送\".concat(count);\n    var send = function() {\n        if (count) {\n            return;\n        }\n        timer.current = setInterval(function() {\n            if (count === 60) {\n                clearInterval(timer.current);\n                setCount(0);\n                timer.current = null;\n                return;\n            }\n            setCount(function(count) {\n                return count + 1;\n            });\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        return function() {\n            clearInterval(timer.current);\n            timer.current = null;\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"btn btn-primary\", count && \"btn-disabled\", props.className),\n        onClick: send,\n        children: text\n    }, void 0, false, {\n        fileName: \"/Users/alita/doom/src/components/buttons/CodeButton.tsx\",\n        lineNumber: 32,\n        columnNumber: 10\n    }, _this);\n};\n_s(CodeButton, \"lqJeLF8iGQ+ihAD+PMjeIxh9gyo=\");\n_c = CodeButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CodeButton);\nvar _c;\n$RefreshReg$(_c, \"CodeButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9idXR0b25zL0NvZGVCdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFBdUI7QUFDNEI7QUFNbkQsSUFBTUksVUFBVSxHQUE2QyxTQUFDQyxLQUFLLEVBQUs7O0lBQ3RFLElBQTBCRixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQTlCRyxLQUFLLEdBQWNILEdBQVcsR0FBekIsRUFBRUksUUFBUSxHQUFJSixHQUFXLEdBQWY7SUFDdEIsSUFBTUssS0FBSyxHQUFHTiw2Q0FBTSxDQUFNLElBQUksQ0FBQztJQUMvQixJQUFNTyxJQUFJLEdBQUcsQ0FBQ0gsS0FBSyxHQUFHLE9BQU8sR0FBRyxLQUFJLENBQVEsT0FBTkEsS0FBSyxDQUFFO0lBQzdDLElBQU1JLElBQUksR0FBRyxXQUFNO1FBQ2pCLElBQUlKLEtBQUssRUFBRTtZQUNULE9BQU07UUFDUixDQUFDO1FBQ0RFLEtBQUssQ0FBQ0csT0FBTyxHQUFHQyxXQUFXLENBQUMsV0FBTTtZQUNoQyxJQUFJTixLQUFLLEtBQUssRUFBRSxFQUFFO2dCQUNoQk8sYUFBYSxDQUFDTCxLQUFLLENBQUNHLE9BQU8sQ0FBQztnQkFDNUJKLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ1hDLEtBQUssQ0FBQ0csT0FBTyxHQUFHLElBQUk7Z0JBQ3BCLE9BQU07WUFDUixDQUFDO1lBQ0RKLFFBQVEsQ0FBQ0QsU0FBQUEsS0FBSzt1QkFBSUEsS0FBSyxHQUFHLENBQUM7YUFBQSxDQUFDO1FBQzlCLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDVixDQUFDO0lBQ0RMLGdEQUFTLENBQUMsV0FBTTtRQUNkLE9BQU8sV0FBTTtZQUNYWSxhQUFhLENBQUNMLEtBQUssQ0FBQ0csT0FBTyxDQUFDO1lBQzVCSCxLQUFLLENBQUNHLE9BQU8sR0FBRyxJQUFJO1FBQ3RCLENBQUM7SUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ04scUJBQU8sOERBQUNHLFFBQU07UUFBQ0MsU0FBUyxFQUFFZixnREFBSSxDQUFDLGlCQUFpQixFQUFFTSxLQUFLLElBQUksY0FBYyxFQUFFRCxLQUFLLENBQUNVLFNBQVMsQ0FBQztRQUFFQyxPQUFPLEVBQUVOLElBQUk7a0JBQUdELElBQUk7Ozs7O2FBQVU7QUFDN0gsQ0FBQztHQXpCS0wsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBMEJoQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL0NvZGVCdXR0b24udHN4PzQ3ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuaW50ZXJmYWNlIENvZGVCdXR0b25Qcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xufVxuXG5jb25zdCBDb2RlQnV0dG9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxDb2RlQnV0dG9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgdGltZXIgPSB1c2VSZWY8YW55PihudWxsKVxuICBjb25zdCB0ZXh0ID0gIWNvdW50ID8gJ+WPkemAgemqjOivgeeggScgOiBg5bey5Y+R6YCBJHtjb3VudH1gXG4gIGNvbnN0IHNlbmQgPSAoKSA9PiB7XG4gICAgaWYgKGNvdW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGltZXIuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChjb3VudCA9PT0gNjApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lci5jdXJyZW50KVxuICAgICAgICBzZXRDb3VudCgwKVxuICAgICAgICB0aW1lci5jdXJyZW50ID0gbnVsbFxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHNldENvdW50KGNvdW50ID0+IGNvdW50ICsgMSlcbiAgICB9LCAxMDAwKVxuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIuY3VycmVudClcbiAgICAgIHRpbWVyLmN1cnJlbnQgPSBudWxsXG4gICAgfVxuICB9LCBbXSlcbiAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPXtjbHN4KFwiYnRuIGJ0bi1wcmltYXJ5XCIsIGNvdW50ICYmIFwiYnRuLWRpc2FibGVkXCIsIHByb3BzLmNsYXNzTmFtZSl9IG9uQ2xpY2s9e3NlbmR9Pnt0ZXh0fTwvYnV0dG9uPlxufVxuZXhwb3J0IGRlZmF1bHQgQ29kZUJ1dHRvblxuIl0sIm5hbWVzIjpbImNsc3giLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNvZGVCdXR0b24iLCJwcm9wcyIsImNvdW50Iiwic2V0Q291bnQiLCJ0aW1lciIsInRleHQiLCJzZW5kIiwiY3VycmVudCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/buttons/CodeButton.tsx\n"));

/***/ })

});