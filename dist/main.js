/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://joseph-oliver-portfolio/./src/styles/main.css?");

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://joseph-oliver-portfolio/./src/styles/reset.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ \"./src/styles/reset.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _modules_ham_btn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ham-btn.js */ \"./src/modules/ham-btn.js\");\n/* harmony import */ var _modules_page_switch_logic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/page-switch-logic.js */ \"./src/modules/page-switch-logic.js\");\n\n\n\n\n\nif (!localStorage.getItem('pageArr')) {\n  let homePage = 'home-pg';\n  let aboutPage = 'about-me-pg';\n\n  let pageArr = [];\n  pageArr.push(homePage);\n  pageArr.push(aboutPage);\n  localStorage.setItem('pageArr', JSON.stringify(pageArr));\n}\n\n\n//# sourceURL=webpack://joseph-oliver-portfolio/./src/index.js?");

/***/ }),

/***/ "./src/modules/ham-btn.js":
/*!********************************!*\
  !*** ./src/modules/ham-btn.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hamBtnLogic\": () => (/* binding */ hamBtnLogic)\n/* harmony export */ });\n/* harmony import */ var _page_switch_logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-switch-logic.js */ \"./src/modules/page-switch-logic.js\");\n\n\nconst hamBtnLogic = (() => {\n  let hamBtn = document.querySelector('.nav-icon4');\n\n  function toggleHamBtn() {\n    hamBtn.classList.toggle('open');\n  }\n\n  hamBtn.addEventListener('click', () => {\n    hamBtn.classList.toggle('open');\n    _page_switch_logic_js__WEBPACK_IMPORTED_MODULE_0__.pageLogic.toggleMenuPg();\n  });\n\n  return {\n    toggleHamBtn,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://joseph-oliver-portfolio/./src/modules/ham-btn.js?");

/***/ }),

/***/ "./src/modules/page-switch-logic.js":
/*!******************************************!*\
  !*** ./src/modules/page-switch-logic.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLogic\": () => (/* binding */ pageLogic),\n/* harmony export */   \"compStorage\": () => (/* binding */ compStorage)\n/* harmony export */ });\n/* harmony import */ var _ham_btn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ham-btn */ \"./src/modules/ham-btn.js\");\n\n\nlet compStorage = () => {\n  function setPage() {}\n\n  return {\n    setPage,\n  };\n};\n\nlet pageLogic = (() => {\n  function createPageElemArr() {\n    let pageNamesArr = JSON.parse(localStorage.getItem('pageArr'));\n    let numOfPgNames = pageNamesArr.length;\n    let pageElemArr = [];\n    for (let i = 0; i < numOfPgNames; ++i) {\n      let page = document.querySelector(`.${pageNamesArr[i]}`);\n      pageElemArr.push(page);\n    }\n\n    return pageElemArr;\n  }\n\n  function createMenuItemArr() {}\n\n  function hideAllPages() {\n    let pageElemArr = createPageElemArr();\n    pageElemArr.forEach((page) => {\n      page.style.display = 'none';\n    });\n  }\n\n  function toggleMenuPg() {\n    let body = document.querySelector('body');\n\n    let menuPg = document.querySelector('.menu-pg');\n    menuPg.style.pointerEvents = 'auto';\n    menuPg.classList.toggle('open-menu');\n    body.style.overflow = 'hidden';\n\n    if (!menuPg.classList.contains('open-menu')) {\n      menuPg.style.pointerEvents = 'none';\n      let delayedMenuClose = setTimeout(() => {\n        body.style.overflow = 'auto';\n        clearTimeout(delayedMenuClose);\n      }, 250);\n    }\n  }\n\n  function switchPg(clickedPgName) {\n    let pgName = clickedPgName.innerHTML.toLowerCase() + '-pg';\n    pgName = pgName.replace(/\\s/g, '-');\n    let pageElemArr = createPageElemArr();\n    pageElemArr.forEach((page) => {\n      if (page.classList.contains(pgName)) {\n        hideAllPages();\n        page.style.display = 'block';\n      }\n    });\n  }\n\n  function togglePointerEve(elem) {\n    console.log(elem);\n    elem.classList.toggle('curr-page-disabled');\n  }\n\n  function menuItemLogic() {\n    let menuArr = [\n      ...document.querySelector('.menu-pg-item-container').children,\n    ];\n\n    menuArr.forEach((item) => {\n      item.addEventListener('click', () => {\n        switchPg(item);\n        toggleMenuPg();\n        _ham_btn__WEBPACK_IMPORTED_MODULE_0__.hamBtnLogic.toggleHamBtn();\n      });\n    });\n  }\n\n  menuItemLogic();\n\n  return {\n    toggleMenuPg,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://joseph-oliver-portfolio/./src/modules/page-switch-logic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;