"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/Components/Testimonials/TestimonialsCustom.tsx":
/*!************************************************************!*\
  !*** ./src/Components/Testimonials/TestimonialsCustom.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TestimonialsCustom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction TestimonialsCustom() {\n    _s();\n    const testimonialsData = [\n        {\n            id: 1,\n            title: \"Casa en Barrio las Rosas\",\n            content: \"Desde lo personal la relaci\\xf3n comercial con Alfonso comenz\\xf3 en 2020, desde un primer momento los valores, las propuestas y la transparencia fueron grandes motivadores que permitieron llevar adelante la relaci\\xf3n. A lo largo del tiempo fuimos viendo como los proyectos avanzaban y se cumpl\\xedan las expectativas, en algunos casos incluso se superaron. Estamos muy conformes con la vocaci\\xf3n que se lleva adelante este profesional, vemos gran conocimiento y estudio constante que respaldan los proyectos. Desde nuestra posici\\xf3n estamos realmente conformes con la elecci\\xf3n que tomamos, estamos agradecidos y con mucha expectativa de cara al futuro. Recomendamos sus servicios profesionales sin lugar a dudas.\",\n            author: \"Joaqu\\xedn Metral\",\n            position: \"Cliente\",\n            image: \"https://png.pngtree.com/png-clipart/20190925/original/pngtree-cartoon-business-hand-drawn-suit-microdimensional-character-illustration-png-image_4977830.jpg\"\n        },\n        {\n            id: 12,\n            title: \"Dos Arroyos\",\n            content: \" Dos Arroyos me encant\\xf3 por su compromiso con la sustentabilidad. Las caba\\xf1as son hermosas y c\\xf3modas, y se integran perfectamente al entorno natural. Me gust\\xf3 mucho que se usen materiales eco-amigables y energ\\xedas renovables. Adem\\xe1s, la ubicaci\\xf3n es ideal para disfrutar de la naturaleza y la tranquilidad. Si buscas un lugar para relajarte y conectar con el medio ambiente, Dos Arroyos es una excelente opci\\xf3n. Lo recomiendo a todos aquellos que aprecian la belleza natural y la responsabilidad ambiental. \",\n            author: \"Lucas Martin Issler\",\n            position: \"Cliente\",\n            image: \"/gabo.png\"\n        }\n    ];\n    const [currentTestimonialIndex, setCurrentTestimonialIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleNextTestimonial = ()=>{\n        setCurrentTestimonialIndex((prevIndex)=>(prevIndex + 1) % testimonialsData.length);\n    };\n    const handlePrevTestimonial = ()=>{\n        setCurrentTestimonialIndex((prevIndex)=>prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1);\n    };\n    const currentTestimonial = testimonialsData[currentTestimonialIndex];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"bg-gray-900\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"min-h-screen lg:w-1/3\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden w-3/4 min-h-screen bg-gray-800 lg:block\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-semibold  capitalize lg:text-3xl text-white\",\n                            children: [\n                                \"Lo que nuestros\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-blue-500\",\n                                    children: \"clientes\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, this),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 73\n                                }, this),\n                                \" \",\n                                \"dicen de nosotros\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-10 lg:mt-20 lg:flex lg:items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"object-cover object-center w-full lg:w-[32rem] rounded-lg h-[38rem]\",\n                                    src: currentTestimonial.image,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-8 lg:px-10 lg:mt-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-2xl font-semibold text-white lg:w-72\",\n                                            children: currentTestimonial.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"max-w-lg mt-6 text-gray-400\",\n                                            children: currentTestimonial.content\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"mt-6 text-lg font-medium text-blue-500\",\n                                            children: currentTestimonial.author\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-300\",\n                                            children: currentTestimonial.position\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-between mt-12 lg:justify-start\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    title: \"left arrow\",\n                                    onClick: handlePrevTestimonial,\n                                    className: \"p-2  transition-colors duration-300 border rounded-full rtl:-scale-x-100 border-gray-700 text-gray-200 hover:bg-gray-800 \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        className: \"w-6 h-6\",\n                                        fill: \"none\",\n                                        viewBox: \"0 0 24 24\",\n                                        stroke: \"currentColor\",\n                                        strokeWidth: \"2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            strokeLinecap: \"round\",\n                                            strokeLinejoin: \"round\",\n                                            d: \"M15 19l-7-7 7-7\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    title: \"right arrow\",\n                                    onClick: handleNextTestimonial,\n                                    className: \"p-2  transition-colors duration-300 border rounded-full rtl:-scale-x-100 border-gray-700 text-gray-200 hover:bg-gray-800 lg:mx-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        className: \"w-6 h-6\",\n                                        fill: \"none\",\n                                        viewBox: \"0 0 24 24\",\n                                        stroke: \"currentColor\",\n                                        strokeWidth: \"2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            strokeLinecap: \"round\",\n                                            strokeLinejoin: \"round\",\n                                            d: \"M9 5l7 7-7 7\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                                            lineNumber: 114,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\FRANM\\\\OneDrive\\\\Escritorio\\\\New folder (3)\\\\AlfonsoWebFinal\\\\src\\\\Components\\\\Testimonials\\\\TestimonialsCustom.tsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, this);\n}\n_s(TestimonialsCustom, \"PQyCQAKDQVtLyanzvgjMsNxkyoQ=\");\n_c = TestimonialsCustom;\nvar _c;\n$RefreshReg$(_c, \"TestimonialsCustom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL1Rlc3RpbW9uaWFscy9UZXN0aW1vbmlhbHNDdXN0b20udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQUV6QixTQUFTRTs7SUFDcEIsTUFBTUMsbUJBQW1CO1FBQ3JCO1lBQ0lDLElBQUk7WUFDSkMsT0FBTztZQUNQQyxTQUNJO1lBQ0pDLFFBQVE7WUFDUkMsVUFBVTtZQUNWQyxPQUNJO1FBQ1I7UUFDQTtZQUNJTCxJQUFJO1lBQ0pDLE9BQU87WUFDUEMsU0FDSTtZQUNKQyxRQUFRO1lBQ1JDLFVBQVU7WUFDVkMsT0FDSTtRQUNSO0tBQ0g7SUFFRCxNQUFNLENBQUNDLHlCQUF5QkMsMkJBQTJCLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXZFLE1BQU1XLHdCQUF3QjtRQUMxQkQsMkJBQTJCLENBQUNFLFlBQWMsQ0FBQ0EsWUFBWSxLQUFLVixpQkFBaUJXLE1BQU07SUFDdkY7SUFFQSxNQUFNQyx3QkFBd0I7UUFDMUJKLDJCQUEyQixDQUFDRSxZQUN4QkEsY0FBYyxJQUFJVixpQkFBaUJXLE1BQU0sR0FBRyxJQUFJRCxZQUFZO0lBRXBFO0lBRUEsTUFBTUcscUJBQXFCYixnQkFBZ0IsQ0FBQ08sd0JBQXdCO0lBRXBFLHFCQUNJLDhEQUFDTztRQUFRQyxXQUFVO2tCQUNmLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDWCw4REFBQ0M7b0JBQUlELFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0M7b0JBQUlELFdBQVU7Ozs7Ozs4QkFFZiw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUNYLDhEQUFDRTs0QkFBR0YsV0FBVTs7Z0NBQTREO2dDQUN0RDs4Q0FDaEIsOERBQUNHO29DQUFLSCxXQUFVOzhDQUFnQjs7Ozs7O2dDQUFlOzhDQUFDLDhEQUFDSTs7Ozs7Z0NBQU07Z0NBQUk7Ozs7Ozs7c0NBSS9ELDhEQUFDSDs0QkFBSUQsV0FBVTs7OENBQ1gsOERBQUNLO29DQUNHTCxXQUFVO29DQUNWTSxLQUFLUixtQkFBbUJQLEtBQUs7b0NBQzdCZ0IsS0FBSTs7Ozs7OzhDQUdSLDhEQUFDTjtvQ0FBSUQsV0FBVTs7c0RBQ1gsOERBQUNFOzRDQUFHRixXQUFVO3NEQUNURixtQkFBbUJYLEtBQUs7Ozs7OztzREFHN0IsOERBQUNxQjs0Q0FBRVIsV0FBVTtzREFDUkYsbUJBQW1CVixPQUFPOzs7Ozs7c0RBRy9CLDhEQUFDcUI7NENBQUdULFdBQVU7c0RBQ1RGLG1CQUFtQlQsTUFBTTs7Ozs7O3NEQUU5Qiw4REFBQ21COzRDQUFFUixXQUFVO3NEQUNSRixtQkFBbUJSLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLeEMsOERBQUNXOzRCQUFJRCxXQUFVOzs4Q0FDWCw4REFBQ1U7b0NBQ0d2QixPQUFNO29DQUNOd0IsU0FBU2Q7b0NBQ1RHLFdBQVU7OENBRVYsNEVBQUNZO3dDQUNHQyxPQUFNO3dDQUNOYixXQUFVO3dDQUNWYyxNQUFLO3dDQUNMQyxTQUFRO3dDQUNSQyxRQUFPO3dDQUNQQyxhQUFZO2tEQUVaLDRFQUFDQzs0Q0FDR0MsZUFBYzs0Q0FDZEMsZ0JBQWU7NENBQ2ZDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OENBS2QsOERBQUNYO29DQUNHdkIsT0FBTTtvQ0FDTndCLFNBQVNqQjtvQ0FDVE0sV0FBVTs4Q0FFViw0RUFBQ1k7d0NBQ0dDLE9BQU07d0NBQ05iLFdBQVU7d0NBQ1ZjLE1BQUs7d0NBQ0xDLFNBQVE7d0NBQ1JDLFFBQU87d0NBQ1BDLGFBQVk7a0RBRVosNEVBQUNDOzRDQUNHQyxlQUFjOzRDQUNkQyxnQkFBZTs0Q0FDZkMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3RDO0dBM0h3QnJDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL1Rlc3RpbW9uaWFscy9UZXN0aW1vbmlhbHNDdXN0b20udHN4PzZiMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGltb25pYWxzQ3VzdG9tKCkge1xyXG4gICAgY29uc3QgdGVzdGltb25pYWxzRGF0YSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0Nhc2EgZW4gQmFycmlvIGxhcyBSb3NhcycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICAgICAgICAnRGVzZGUgbG8gcGVyc29uYWwgbGEgcmVsYWNpw7NuIGNvbWVyY2lhbCBjb24gQWxmb25zbyBjb21lbnrDsyBlbiAyMDIwLCBkZXNkZSB1biBwcmltZXIgbW9tZW50byBsb3MgdmFsb3JlcywgbGFzIHByb3B1ZXN0YXMgeSBsYSB0cmFuc3BhcmVuY2lhIGZ1ZXJvbiBncmFuZGVzIG1vdGl2YWRvcmVzIHF1ZSBwZXJtaXRpZXJvbiBsbGV2YXIgYWRlbGFudGUgbGEgcmVsYWNpw7NuLiBBIGxvIGxhcmdvIGRlbCB0aWVtcG8gZnVpbW9zIHZpZW5kbyBjb21vIGxvcyBwcm95ZWN0b3MgYXZhbnphYmFuIHkgc2UgY3VtcGzDrWFuIGxhcyBleHBlY3RhdGl2YXMsIGVuIGFsZ3Vub3MgY2Fzb3MgaW5jbHVzbyBzZSBzdXBlcmFyb24uIEVzdGFtb3MgbXV5IGNvbmZvcm1lcyBjb24gbGEgdm9jYWNpw7NuIHF1ZSBzZSBsbGV2YSBhZGVsYW50ZSBlc3RlIHByb2Zlc2lvbmFsLCB2ZW1vcyBncmFuIGNvbm9jaW1pZW50byB5IGVzdHVkaW8gY29uc3RhbnRlIHF1ZSByZXNwYWxkYW4gbG9zIHByb3llY3Rvcy4gRGVzZGUgbnVlc3RyYSBwb3NpY2nDs24gZXN0YW1vcyByZWFsbWVudGUgY29uZm9ybWVzIGNvbiBsYSBlbGVjY2nDs24gcXVlIHRvbWFtb3MsIGVzdGFtb3MgYWdyYWRlY2lkb3MgeSBjb24gbXVjaGEgZXhwZWN0YXRpdmEgZGUgY2FyYSBhbCBmdXR1cm8uIFJlY29tZW5kYW1vcyBzdXMgc2VydmljaW9zIHByb2Zlc2lvbmFsZXMgc2luIGx1Z2FyIGEgZHVkYXMuJyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnSm9hcXXDrW4gTWV0cmFsJyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdDbGllbnRlJyxcclxuICAgICAgICAgICAgaW1hZ2U6XHJcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9wbmcucG5ndHJlZS5jb20vcG5nLWNsaXBhcnQvMjAxOTA5MjUvb3JpZ2luYWwvcG5ndHJlZS1jYXJ0b29uLWJ1c2luZXNzLWhhbmQtZHJhd24tc3VpdC1taWNyb2RpbWVuc2lvbmFsLWNoYXJhY3Rlci1pbGx1c3RyYXRpb24tcG5nLWltYWdlXzQ5Nzc4MzAuanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEyLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0RvcyBBcnJveW9zJyxcclxuICAgICAgICAgICAgY29udGVudDpcclxuICAgICAgICAgICAgICAgICcgRG9zIEFycm95b3MgbWUgZW5jYW50w7MgcG9yIHN1IGNvbXByb21pc28gY29uIGxhIHN1c3RlbnRhYmlsaWRhZC4gTGFzIGNhYmHDsWFzIHNvbiBoZXJtb3NhcyB5IGPDs21vZGFzLCB5IHNlIGludGVncmFuIHBlcmZlY3RhbWVudGUgYWwgZW50b3JubyBuYXR1cmFsLiBNZSBndXN0w7MgbXVjaG8gcXVlIHNlIHVzZW4gbWF0ZXJpYWxlcyBlY28tYW1pZ2FibGVzIHkgZW5lcmfDrWFzIHJlbm92YWJsZXMuIEFkZW3DoXMsIGxhIHViaWNhY2nDs24gZXMgaWRlYWwgcGFyYSBkaXNmcnV0YXIgZGUgbGEgbmF0dXJhbGV6YSB5IGxhIHRyYW5xdWlsaWRhZC4gU2kgYnVzY2FzIHVuIGx1Z2FyIHBhcmEgcmVsYWphcnRlIHkgY29uZWN0YXIgY29uIGVsIG1lZGlvIGFtYmllbnRlLCBEb3MgQXJyb3lvcyBlcyB1bmEgZXhjZWxlbnRlIG9wY2nDs24uIExvIHJlY29taWVuZG8gYSB0b2RvcyBhcXVlbGxvcyBxdWUgYXByZWNpYW4gbGEgYmVsbGV6YSBuYXR1cmFsIHkgbGEgcmVzcG9uc2FiaWxpZGFkIGFtYmllbnRhbC4gJyxcclxuICAgICAgICAgICAgYXV0aG9yOiAnTHVjYXMgTWFydGluIElzc2xlcicsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnQ2xpZW50ZScsXHJcbiAgICAgICAgICAgIGltYWdlOlxyXG4gICAgICAgICAgICAgICAgJy9nYWJvLnBuZycsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRUZXN0aW1vbmlhbEluZGV4LCBzZXRDdXJyZW50VGVzdGltb25pYWxJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVOZXh0VGVzdGltb25pYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q3VycmVudFRlc3RpbW9uaWFsSW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCArIDEpICUgdGVzdGltb25pYWxzRGF0YS5sZW5ndGgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQcmV2VGVzdGltb25pYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q3VycmVudFRlc3RpbW9uaWFsSW5kZXgoKHByZXZJbmRleCkgPT5cclxuICAgICAgICAgICAgcHJldkluZGV4ID09PSAwID8gdGVzdGltb25pYWxzRGF0YS5sZW5ndGggLSAxIDogcHJldkluZGV4IC0gMVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRUZXN0aW1vbmlhbCA9IHRlc3RpbW9uaWFsc0RhdGFbY3VycmVudFRlc3RpbW9uaWFsSW5kZXhdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBsZzp3LTEvM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gdy0zLzQgbWluLWgtc2NyZWVuIGJnLWdyYXktODAwIGxnOmJsb2NrXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbWluLWgtc2NyZWVuIHB4LTYgcHktMTAgbXgtYXV0byBsZzphYnNvbHV0ZSBsZzppbnNldC14LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCAgY2FwaXRhbGl6ZSBsZzp0ZXh0LTN4bCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvIHF1ZSBudWVzdHJvc3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPmNsaWVudGVzPC9zcGFuPiA8YnIgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpY2VuIGRlIG5vc290cm9zXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBsZzptdC0yMCBsZzpmbGV4IGxnOml0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciB3LWZ1bGwgbGc6dy1bMzJyZW1dIHJvdW5kZWQtbGcgaC1bMzhyZW1dXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y3VycmVudFRlc3RpbW9uaWFsLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IGxnOnB4LTEwIGxnOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgbGc6dy03MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50VGVzdGltb25pYWwudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1heC13LWxnIG10LTYgdGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50VGVzdGltb25pYWwuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtYmx1ZS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFRlc3RpbW9uaWFsLmF1dGhvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRUZXN0aW1vbmlhbC5wb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTEyIGxnOmp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJsZWZ0IGFycm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZUZXN0aW1vbmlhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGJvcmRlciByb3VuZGVkLWZ1bGwgcnRsOi1zY2FsZS14LTEwMCBib3JkZXItZ3JheS03MDAgdGV4dC1ncmF5LTIwMCBob3ZlcjpiZy1ncmF5LTgwMCBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNSAxOWwtNy03IDctN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwicmlnaHQgYXJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dFRlc3RpbW9uaWFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yICB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgYm9yZGVyIHJvdW5kZWQtZnVsbCBydGw6LXNjYWxlLXgtMTAwIGJvcmRlci1ncmF5LTcwMCB0ZXh0LWdyYXktMjAwIGhvdmVyOmJnLWdyYXktODAwIGxnOm14LTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk05IDVsNyA3LTcgN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUZXN0aW1vbmlhbHNDdXN0b20iLCJ0ZXN0aW1vbmlhbHNEYXRhIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJhdXRob3IiLCJwb3NpdGlvbiIsImltYWdlIiwiY3VycmVudFRlc3RpbW9uaWFsSW5kZXgiLCJzZXRDdXJyZW50VGVzdGltb25pYWxJbmRleCIsImhhbmRsZU5leHRUZXN0aW1vbmlhbCIsInByZXZJbmRleCIsImxlbmd0aCIsImhhbmRsZVByZXZUZXN0aW1vbmlhbCIsImN1cnJlbnRUZXN0aW1vbmlhbCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInNwYW4iLCJiciIsImltZyIsInNyYyIsImFsdCIsInAiLCJoMyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/Testimonials/TestimonialsCustom.tsx\n"));

/***/ })

});