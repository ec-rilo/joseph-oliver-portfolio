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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ \"./src/styles/reset.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _modules_ham_btn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ham-btn.js */ \"./src/modules/ham-btn.js\");\n/* harmony import */ var _modules_page_switch_logic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/page-switch-logic.js */ \"./src/modules/page-switch-logic.js\");\n\n\n\n\n\nif (!localStorage.getItem('pageArr')) {\n  var homePage = 'home-pg';\n  var aboutPage = 'about-me-pg';\n  var photogPage = 'photography-pg';\n  var contactPage = 'contact-pg';\n  var pageArr = [];\n  pageArr.push(homePage);\n  pageArr.push(aboutPage);\n  pageArr.push(photogPage);\n  pageArr.push(contactPage);\n  localStorage.setItem('pageArr', JSON.stringify(pageArr));\n}\n\n//# sourceURL=webpack://joseph-oliver-portfolio/./src/index.js?");

/***/ }),

/***/ "./src/modules/ham-btn.js":
/*!********************************!*\
  !*** ./src/modules/ham-btn.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hamBtnLogic\": () => (/* binding */ hamBtnLogic)\n/* harmony export */ });\n/* harmony import */ var _page_switch_logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-switch-logic.js */ \"./src/modules/page-switch-logic.js\");\n\n\nvar hamBtnLogic = function () {\n  var hamBtn = document.querySelector('.nav-icon4');\n\n  function toggleHamBtn() {\n    hamBtn.classList.toggle('open');\n  }\n\n  hamBtn.addEventListener('click', function () {\n    hamBtn.classList.toggle('open');\n    _page_switch_logic_js__WEBPACK_IMPORTED_MODULE_0__.pageLogic.toggleMenuPg();\n  });\n  return {\n    toggleHamBtn: toggleHamBtn\n  };\n}();\n\n\n\n//# sourceURL=webpack://joseph-oliver-portfolio/./src/modules/ham-btn.js?");

/***/ }),

/***/ "./src/modules/page-switch-logic.js":
/*!******************************************!*\
  !*** ./src/modules/page-switch-logic.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLogic\": () => (/* binding */ pageLogic),\n/* harmony export */   \"compStorage\": () => (/* binding */ compStorage)\n/* harmony export */ });\n/* harmony import */ var _ham_btn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ham-btn */ \"./src/modules/ham-btn.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar compStorage = function compStorage() {\n  function setPage() {}\n\n  return {\n    setPage: setPage\n  };\n};\n\nvar pageLogic = function () {\n  function createPageElemArr() {\n    var pageNamesArr = JSON.parse(localStorage.getItem('pageArr'));\n    var numOfPgNames = pageNamesArr.length;\n    var pageElemArr = [];\n\n    for (var i = 0; i < numOfPgNames; ++i) {\n      var page = document.querySelector(\".\".concat(pageNamesArr[i]));\n      pageElemArr.push(page);\n    }\n\n    return pageElemArr;\n  }\n\n  function createMenuItemArr() {}\n\n  function hideAllPages() {\n    var pageElemArr = createPageElemArr();\n    pageElemArr.forEach(function (page) {\n      page.style.display = 'none';\n    });\n  }\n\n  function toggleMenuPg() {\n    var body = document.querySelector('body');\n    var menuPg = document.querySelector('.menu-pg');\n    menuPg.style.pointerEvents = 'auto';\n    menuPg.classList.toggle('open-menu');\n    body.style.overflowY = 'hidden';\n\n    if (!menuPg.classList.contains('open-menu')) {\n      menuPg.style.pointerEvents = 'none';\n      var delayedMenuClose = setTimeout(function () {\n        body.style.overflowY = 'auto';\n        clearTimeout(delayedMenuClose);\n      }, 250);\n    }\n  }\n\n  function switchPg(clickedPgName) {\n    var pgName = clickedPgName.innerHTML.toLowerCase() + '-pg';\n    pgName = pgName.replace(/\\s/g, '-');\n    var pageElemArr = createPageElemArr();\n    pageElemArr.forEach(function (page) {\n      if (pgName === 'artstation-pg') {\n        console.log('welp');\n        window.open('https://www.artstation.com/josepholiver/profile', '_blank');\n      } else if (page.classList.contains(pgName)) {\n        hideAllPages();\n        page.style.display = 'block';\n      }\n    });\n  }\n\n  function togglePointerEve(elem) {\n    console.log(elem);\n    elem.classList.toggle('curr-page-disabled');\n  }\n\n  function menuItemLogic() {\n    var menuArr = _toConsumableArray(document.querySelector('.menu-pg-item-container').children);\n\n    menuArr.forEach(function (item) {\n      item.addEventListener('click', function () {\n        switchPg(item);\n        toggleMenuPg();\n        _ham_btn__WEBPACK_IMPORTED_MODULE_0__.hamBtnLogic.toggleHamBtn();\n      });\n    });\n  }\n\n  menuItemLogic();\n  return {\n    toggleMenuPg: toggleMenuPg\n  };\n}();\n\n\n\n//# sourceURL=webpack://joseph-oliver-portfolio/./src/modules/page-switch-logic.js?");

/***/ }),

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