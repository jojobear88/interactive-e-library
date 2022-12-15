"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Book.js":
/*!****************************!*\
  !*** ./components/Book.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Book = (props)=>{\n    // console.log(props);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-4 gap-4 mx-auto m-4 flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-1 flex flex-col items-center m-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"m-2 object-cover w-full rounded-lg h-100 md:h-auto md:w-48 md:rounded-none md:rounded-lg\",\n                            src: props.props.img,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Book.js\",\n                            lineNumber: 7,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"w-100 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                            href: props.props.url,\n                            children: \"View more\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Book.js\",\n                            lineNumber: 8,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Book.js\",\n                    lineNumber: 6,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-3 flex flex-col justify-between p-4 leading-normal\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-content-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"mb-2 mr-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white\",\n                                    children: props.props.title\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Book.js\",\n                                    lineNumber: 12,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"mr-2 font-normal text-gray-700 dark:text-gray-400\",\n                                    children: [\n                                        \"- \",\n                                        props.props.date\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Book.js\",\n                                    lineNumber: 13,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-normal text-gray-700 dark:text-gray-400\",\n                                    children: [\n                                        \"- \",\n                                        props.props.rating\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Book.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    \"aria-hidden\": \"true\",\n                                    className: \"w-5 h-5 text-yellow-400\",\n                                    fill: \"currentColor\",\n                                    viewBox: \"0 0 20 20\",\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                            children: \"First star\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Book.js\",\n                                            lineNumber: 15,\n                                            columnNumber: 152\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Book.js\",\n                                            lineNumber: 15,\n                                            columnNumber: 177\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Book.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Book.js\",\n                            lineNumber: 11,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"mb-3 font-normal text-gray-700 dark:text-gray-400\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold\",\n                                    children: \"Author:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Book.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 83\n                                }, undefined),\n                                \" \",\n                                props.props.author\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Book.js\",\n                            lineNumber: 17,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"mb-3 font-normal text-gray-700 dark:text-gray-400\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold\",\n                                    children: \"Genre:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Book.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 83\n                                }, undefined),\n                                \" \",\n                                props.props.genre\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Book.js\",\n                            lineNumber: 18,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"mb-3 font-normal text-gray-700 dark:text-gray-400\",\n                            children: props.props.places\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Book.js\",\n                            lineNumber: 19,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-3 font-normal text-gray-700 dark:text-gray-400\",\n                            children: props.props.overview\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Book.js\",\n                            lineNumber: 20,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Book.js\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Book.js\",\n            lineNumber: 5,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Book);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2suanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQSxNQUFNQSxPQUFPLENBQUNDLFFBQVU7SUFDcEIsc0JBQXNCO0lBQ3RCLHFCQUNFO2tCQUNJLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBSUQsV0FBVTs0QkFBMkZFLEtBQUtKLE1BQU1BLEtBQUssQ0FBQ0csR0FBRzs0QkFBRUUsS0FBSTs7Ozs7O3NDQUNwSSw4REFBQ0M7NEJBQUVKLFdBQVU7NEJBQTZFSyxNQUFNUCxNQUFNQSxLQUFLLENBQUNRLEdBQUc7c0NBQUc7Ozs7Ozs7Ozs7Ozs4QkFFcEgsOERBQUNQO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDTztvQ0FBR1AsV0FBVTs4Q0FBNkVGLE1BQU1BLEtBQUssQ0FBQ1UsS0FBSzs7Ozs7OzhDQUM1Ryw4REFBQ0M7b0NBQUtULFdBQVU7O3dDQUFvRDt3Q0FBR0YsTUFBTUEsS0FBSyxDQUFDWSxJQUFJOzs7Ozs7OzhDQUN2Riw4REFBQ0Q7b0NBQUtULFdBQVU7O3dDQUErQzt3Q0FBR0YsTUFBTUEsS0FBSyxDQUFDYSxNQUFNOzs7Ozs7OzhDQUNwRiw4REFBQ0M7b0NBQUlDLGVBQVk7b0NBQU9iLFdBQVU7b0NBQTBCYyxNQUFLO29DQUFlQyxTQUFRO29DQUFZQyxPQUFNOztzREFBNkIsOERBQUNSO3NEQUFNOzs7Ozs7c0RBQWtCLDhEQUFDUzs0Q0FBS0MsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUUxSyw4REFBQ1Q7NEJBQUtULFdBQVU7OzhDQUFvRCw4REFBQ1M7b0NBQUtULFdBQVU7OENBQVk7Ozs7OztnQ0FBYztnQ0FBRUYsTUFBTUEsS0FBSyxDQUFDcUIsTUFBTTs7Ozs7OztzQ0FDbEksOERBQUNWOzRCQUFLVCxXQUFVOzs4Q0FBb0QsOERBQUNTO29DQUFLVCxXQUFVOzhDQUFZOzs7Ozs7Z0NBQWE7Z0NBQUVGLE1BQU1BLEtBQUssQ0FBQ3NCLEtBQUs7Ozs7Ozs7c0NBQ2hJLDhEQUFDWDs0QkFBS1QsV0FBVTtzQ0FBcURGLE1BQU1BLEtBQUssQ0FBQ3VCLE1BQU07Ozs7OztzQ0FDdkYsOERBQUNDOzRCQUFFdEIsV0FBVTtzQ0FBcURGLE1BQU1BLEtBQUssQ0FBQ3lCLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEc7QUFFQSxpRUFBZTFCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jvb2suanM/YzMwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCb29rID0gKHByb3BzKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PiAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNCBteC1hdXRvIG0tNCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBiZy13aGl0ZSBib3JkZXIgcm91bmRlZC1sZyBzaGFkb3ctbWQgbWQ6ZmxleC1yb3cgbWQ6bWF4LXctNHhsIGhvdmVyOmJnLWdyYXktMTAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGRhcms6YmctZ3JheS04MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbS0zXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtLTIgb2JqZWN0LWNvdmVyIHctZnVsbCByb3VuZGVkLWxnIGgtMTAwIG1kOmgtYXV0byBtZDp3LTQ4IG1kOnJvdW5kZWQtbm9uZSBtZDpyb3VuZGVkLWxnXCIgc3JjPXtwcm9wcy5wcm9wcy5pbWd9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3LTEwMCBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiIGhyZWY9e3Byb3BzLnByb3BzLnVybH0gPlZpZXcgbW9yZTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBwLTQgbGVhZGluZy1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0yIG1yLTIgdGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+e3Byb3BzLnByb3BzLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yIGZvbnQtbm9ybWFsIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+LSB7cHJvcHMucHJvcHMuZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPi0ge3Byb3BzLnByb3BzLnJhdGluZ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC15ZWxsb3ctNDAwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHRpdGxlPkZpcnN0IHN0YXI8L3RpdGxlPjxwYXRoIGQ9XCJNOS4wNDkgMi45MjdjLjMtLjkyMSAxLjYwMy0uOTIxIDEuOTAyIDBsMS4wNyAzLjI5MmExIDEgMCAwMC45NS42OWgzLjQ2MmMuOTY5IDAgMS4zNzEgMS4yNC41ODggMS44MWwtMi44IDIuMDM0YTEgMSAwIDAwLS4zNjQgMS4xMThsMS4wNyAzLjI5MmMuMy45MjEtLjc1NSAxLjY4OC0xLjU0IDEuMTE4bC0yLjgtMi4wMzRhMSAxIDAgMDAtMS4xNzUgMGwtMi44IDIuMDM0Yy0uNzg0LjU3LTEuODM4LS4xOTctMS41MzktMS4xMThsMS4wNy0zLjI5MmExIDEgMCAwMC0uMzY0LTEuMTE4TDIuOTggOC43MmMtLjc4My0uNTctLjM4LTEuODEuNTg4LTEuODFoMy40NjFhMSAxIDAgMDAuOTUxLS42OWwxLjA3LTMuMjkyelwiPjwvcGF0aD48L3N2Zz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYi0zIGZvbnQtbm9ybWFsIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+QXV0aG9yOjwvc3Bhbj4ge3Byb3BzLnByb3BzLmF1dGhvcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWItMyBmb250LW5vcm1hbCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPjxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkdlbnJlOjwvc3Bhbj4ge3Byb3BzLnByb3BzLmdlbnJlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYi0zIGZvbnQtbm9ybWFsIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+e3Byb3BzLnByb3BzLnBsYWNlc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMyBmb250LW5vcm1hbCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPntwcm9wcy5wcm9wcy5vdmVydmlld308L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEJvb2s7Il0sIm5hbWVzIjpbIkJvb2siLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImEiLCJocmVmIiwidXJsIiwiaDUiLCJ0aXRsZSIsInNwYW4iLCJkYXRlIiwicmF0aW5nIiwic3ZnIiwiYXJpYS1oaWRkZW4iLCJmaWxsIiwidmlld0JveCIsInhtbG5zIiwicGF0aCIsImQiLCJhdXRob3IiLCJnZW5yZSIsInBsYWNlcyIsInAiLCJvdmVydmlldyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Book.js\n");

/***/ }),

/***/ "./components/Books.js":
/*!*****************************!*\
  !*** ./components/Books.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Book */ \"./components/Book.js\");\n\n\n\nconst Books = (data)=>{\n    const [bookData, setBookData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.data);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let searchString = data.searchString;\n        if (data.searchString !== null && data.searchString !== undefined) setBookData(data.data.filter((book)=>book.title.includes(searchString) || book.author.includes(searchString)));\n        else setBookData(data.data);\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: bookData.map((book, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Book__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                props: book\n            }, index, false, {\n                fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\Books.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined))\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Books);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2tzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTRDO0FBQ2xCO0FBRTFCLE1BQU1HLFFBQVEsQ0FBQ0MsT0FBUztJQUV0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUNHLEtBQUtBLElBQUk7SUFDaERKLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJTyxlQUFlSCxLQUFLRyxZQUFZO1FBQ3BDLElBQUlILEtBQUtHLFlBQVksS0FBSyxJQUFJLElBQUlILEtBQUtHLFlBQVksS0FBS0MsV0FDeERGLFlBQWFGLEtBQUtBLElBQUksQ0FBQ0ssTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDTCxpQkFBaUJHLEtBQUtHLE1BQU0sQ0FBQ0QsUUFBUSxDQUFDTDthQUM3RkQsWUFBWUYsS0FBS0EsSUFBSTtJQUM1QixHQUFFO1FBQUNBO0tBQUs7SUFFUixxQkFDRTtrQkFDS0MsU0FBU1MsR0FBRyxDQUFDLENBQUNKLE1BQU1LLHNCQUNuQiw4REFBQ2IsNkNBQUlBO2dCQUFhYyxPQUFPTjtlQUFkSzs7Ozs7O0FBSXJCO0FBRUEsaUVBQWVaLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jvb2tzLmpzP2I1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQm9vayBmcm9tIFwiLi9Cb29rXCI7XHJcblxyXG5jb25zdCBCb29rcyA9IChkYXRhKSA9PiB7XHJcbiAgIFxyXG4gIGNvbnN0IFtib29rRGF0YSwgc2V0Qm9va0RhdGFdID0gdXNlU3RhdGUoZGF0YS5kYXRhKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IHNlYXJjaFN0cmluZyA9IGRhdGEuc2VhcmNoU3RyaW5nO1xyXG4gICAgICBpZiAoZGF0YS5zZWFyY2hTdHJpbmcgIT09IG51bGwgJiYgZGF0YS5zZWFyY2hTdHJpbmcgIT09IHVuZGVmaW5lZCkgXHJcbiAgICAgIHNldEJvb2tEYXRhKCBkYXRhLmRhdGEuZmlsdGVyKChib29rKSA9PiBib29rLnRpdGxlLmluY2x1ZGVzKHNlYXJjaFN0cmluZykgfHwgYm9vay5hdXRob3IuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSkpO1xyXG4gICAgICBlbHNlIHNldEJvb2tEYXRhKGRhdGEuZGF0YSk7XHJcbiAgICB9LFtkYXRhXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PiAgICAgXHJcbiAgICAgICAgICB7Ym9va0RhdGEubWFwKChib29rLCBpbmRleCkgPT4gXHJcbiAgICAgICAgICAgIDxCb29rIGtleT17aW5kZXh9IHByb3BzPXtib29rfT48L0Jvb2s+XHJcbiAgICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEJvb2tzOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJvb2siLCJCb29rcyIsImRhdGEiLCJib29rRGF0YSIsInNldEJvb2tEYXRhIiwic2VhcmNoU3RyaW5nIiwidW5kZWZpbmVkIiwiZmlsdGVyIiwiYm9vayIsInRpdGxlIiwiaW5jbHVkZXMiLCJhdXRob3IiLCJtYXAiLCJpbmRleCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Books.js\n");

/***/ }),

/***/ "./components/SearchBooks.js":
/*!***********************************!*\
  !*** ./components/SearchBooks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst SearchBooks = (props)=>{\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"search\",\n                name: \"q\",\n                className: \"mx-auto h-10 text-sm text-white bg-gray-900 border rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900\",\n                placeholder: \"Search...\",\n                autoComplete: \"off\",\n                onChange: props.handleChange,\n                ref: inputRef\n            }, void 0, false, {\n                fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\SearchBooks.js\",\n                lineNumber: 11,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\components\\\\SearchBooks.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBooks);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaEJvb2tzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBc0M7QUFFdEMsTUFBTUUsY0FBYyxDQUFDQyxRQUFVO0lBRTNCLE1BQU1DLFdBQVdILDZDQUFNQTtJQUV2QixxQkFDRTtrQkFDQSw0RUFBQ0k7WUFBSUMsV0FBVTtzQkFFWCw0RUFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQVNDLE1BQUs7Z0JBQ3hCSCxXQUFVO2dCQUNWSSxhQUFZO2dCQUFZQyxjQUFhO2dCQUNyQ0MsVUFBVVQsTUFBTVUsWUFBWTtnQkFDNUJDLEtBQUtWOzs7Ozs7Ozs7Ozs7QUFLZjtBQUVBLGlFQUFlRixXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hCb29rcy5qcz80NzU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTZWFyY2hCb29rcyA9IChwcm9wcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIG14LWF1dG8nPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBuYW1lPVwicVwiIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIGgtMTAgdGV4dC1zbSB0ZXh0LXdoaXRlIGJnLWdyYXktOTAwIGJvcmRlciByb3VuZGVkLW1kIHBsLTEwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czp0ZXh0LWdyYXktOTAwXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBTZWFyY2hCb29rczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJTZWFyY2hCb29rcyIsInByb3BzIiwiaW5wdXRSZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJhdXRvQ29tcGxldGUiLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SearchBooks.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_books_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/books.json */ \"./data/books.json\");\n/* harmony import */ var _components_Books__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Books */ \"./components/Books.js\");\n/* harmony import */ var _components_SearchBooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchBooks */ \"./components/SearchBooks.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst Home = ()=>{\n    const [searchString, setSearchString] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const handleChange = (event)=>{\n        setSearchString(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBooks__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    handleChange: handleChange\n                }, void 0, false, {\n                    fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\pages\\\\index.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Books__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    data: _data_books_json__WEBPACK_IMPORTED_MODULE_1__,\n                    searchString: searchString\n                }, void 0, false, {\n                    fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\pages\\\\index.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Interactive E-Library\\\\interactive-e-library\\\\pages\\\\index.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQStDO0FBQ1Q7QUFDRTtBQUNZO0FBQ1o7QUFFeEMsTUFBTU0sT0FBTyxJQUFNO0lBQ2pCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdILCtDQUFRQTtJQUVoRCxNQUFNSSxlQUFlLENBQUNDLFFBQVU7UUFDOUJGLGdCQUFnQkUsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3BDO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDWCwrREFBV0E7b0JBQUNNLGNBQWNBOzs7Ozs7OEJBQzNCLDhEQUFDUCx5REFBS0E7b0JBQUNELE1BQU1BLDZDQUFJQTtvQkFBRU0sY0FBY0E7Ozs7Ozs7Ozs7Ozs7QUFJekM7QUFFQSxpRUFBZUQsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvYm9va3MuanNvbic7XG5pbXBvcnQgQm9va3MgZnJvbSAnLi4vY29tcG9uZW50cy9Cb29rcyc7XG5pbXBvcnQgU2VhcmNoQm9va3MgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hCb29rcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hTdHJpbmcsIHNldFNlYXJjaFN0cmluZ10gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldFNlYXJjaFN0cmluZyhldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD4gICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBteC1hdXRvJz5cbiAgICAgICAgPFNlYXJjaEJvb2tzIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfT48L1NlYXJjaEJvb2tzPlxuICAgICAgICA8Qm9va3MgZGF0YT17ZGF0YX0gc2VhcmNoU3RyaW5nPXtzZWFyY2hTdHJpbmd9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJkYXRhIiwiQm9va3MiLCJTZWFyY2hCb29rcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJIb21lIiwic2VhcmNoU3RyaW5nIiwic2V0U2VhcmNoU3RyaW5nIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./data/books.json":
/*!*************************!*\
  !*** ./data/books.json ***!
  \*************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"The Last Olympian","author":"Rick Riordan and Robert Venditti","genre":"Fiction and Greek Mythology","overview":"The greatest monster of all, the storm giant Typhon, is on the loose, wreaking havoc and destruction across the U.S. - while Kronos\'s army lays siege to Manhattan. Soon Percy Jackson must make the hardest choice of his life - a choice that will save or destroy the world.","rating":4.29,"date":2009,"places":"United States of America","img":"https://covers.openlibrary.org/b/id/6624107-M.jpg","url":"https://openlibrary.org/works/OL492642W/The_last_Olympian?edition=ia%3Alastolympianperc00rior_740"},{"title":"Drought","author":"Graham Masterton","genre":"Fiction, Droughts and Social Workers","overview":"A nationwide drought causes the taps to run dry and ex-marine and social worker Martin Makepeace must take drastic action to protect his family, while corrupt politicians try to use the drought to their advantage.","rating":0,"date":2014,"places":"United States of America","img":"https://covers.openlibrary.org/b/id/8192803-M.jpg","url":"https://openlibrary.org/works/OL17882522W/Drought?edition=ia%3Adrought0000mast"},{"title":"The Infinite Sea","author":"Rick Yancey","genre":"Science fiction, Aliens and Survival skills","overview":"Cassie Sullivan, one of Earth\'s few remaining human survivors, attempts to put a stop to the Others\' plan to destroy the remaining humans.","rating":5,"date":2014,"places":"N/A","img":"https://covers.openlibrary.org/b/id/7385181-M.jpg","url":"https://openlibrary.org/works/OL17305107W/The_Infinite_Sea?edition=ia%3Ainfinitesea0000yanc"},{"title":"The Mummy: A Junior Novelization","author":"David Levithan, Stephen Sommers, Pearson Education Staff, and Mike Dean","genre":"Fiction and Mummies","overview":"Some 3,700 years ago an Egyptian High Priest was mummified and entombed alive and cursed for all eternity. In the 1920s, dashing American Rick O\'Connell, accidentally discovers the Lost City of the Dead. But the ancient curse of the Mummy is not dead. A heart-stopping adventure story based on the hugely successful 1999 film.","rating":0,"date":1999,"places":"Egypt","img":"https://covers.openlibrary.org/b/id/1227950-M.jpg","url":"https://openlibrary.org/works/OL5736969W/The_Mummy?edition=ia%3Amummyjuniornovel00levi"},{"title":"The adventures of Tom Sawyer","author":"Mark Twain, William Dufris, Samuel Langhorne, and Edibook","genre":"Fiction and Classic","overview":"The adventures and pranks of a mischievous boy growing up in a Mississippi River town in the early nineteenth century.","rating":3.97,"date":1983,"places":"United States of America","img":"https://covers.openlibrary.org/b/id/11462426-M.jpg","url":"https://openlibrary.org/works/OL53919W/The_Adventures_of_Tom_Sawyer"},{"title":"Treasure island","author":"Robert Louis Stevenson","genre":"Fiction and Pirates","overview":"While going through the possessions of a deceased guest who owed them money, the mistress of the inn and her son find a treasure map that leads them to a pirate\'s fortune.","rating":3.5,"date":2003,"places":"Caribbean","img":"https://ia802605.us.archive.org/view_archive.php?archive=/18/items/olcovers43/olcovers43-L.zip&file=437393-L.jpg","url":"https://openlibrary.org/works/OL24034W/Treasure_Island"},{"title":"Croc-blanc","author":"Jack London","genre":"Classic literature and Juvenile fiction","overview":"The story of a wolf/dog cross, who is raised by Indians, and becomes a deadly fighter.","rating":4.43,"date":2004,"places":"Canada","img":"https://covers.openlibrary.org/b/id/11444380-M.jpg","url":"https://openlibrary.org/works/OL74504W/White_Fang"},{"title":"Around the world in eighty days","author":"Jules Verne","genre":"Viajes alrededor del mundo and Fiction","overview":"Phileas Fogg, a very punctual man had broken into an argument while conversing about the recent bank robbery. To keep his word of proving that he would travel around the world in 80 days and win the bet, he sets on a long trip, where he is joined by a few other people on the way. A wonderful adventure is about to begin!","rating":3.87,"date":2007,"places":"United Kingdon","img":"https://covers.openlibrary.org/b/id/10730548-M.jpg","url":"https://openlibrary.org/works/OL1100007W/Le_tour_du_monde_en_quatre-vingts_jours"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();