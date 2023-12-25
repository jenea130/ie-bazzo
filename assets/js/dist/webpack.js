/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/src/main.js":
/*!***********************************!*\
  !*** ./src/assets/js/src/main.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_streetMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/streetMap */ \"./src/assets/js/src/modules/streetMap.js\");\n/* harmony import */ var _modules_header_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header/toggleMenu */ \"./src/assets/js/src/modules/header/toggleMenu.js\");\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", function () {\r\n\tconsole.log(\"some thing for me\");\r\n\tObject(_modules_streetMap__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\tObject(_modules_header_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tYWluLmpzP2UxZjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQTRDO0FBQ1M7O0FBRXJEO0FBQ0E7QUFDQSxDQUFDLGtFQUFTO0FBQ1YsQ0FBQywwRUFBVTtBQUNYLENBQUMiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL3NyYy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0cmVldE1hcCBmcm9tIFwiLi9tb2R1bGVzL3N0cmVldE1hcFwiO1xyXG5pbXBvcnQgdG9nZ2xlTWVudSBmcm9tIFwiLi9tb2R1bGVzL2hlYWRlci90b2dnbGVNZW51XCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG5cdGNvbnNvbGUubG9nKFwic29tZSB0aGluZyBmb3IgbWVcIik7XHJcblx0c3RyZWV0TWFwKCk7XHJcblx0dG9nZ2xlTWVudSgpO1xyXG59KTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/js/src/main.js\n");

/***/ }),

/***/ "./src/assets/js/src/modules/header/toggleMenu.js":
/*!********************************************************!*\
  !*** ./src/assets/js/src/modules/header/toggleMenu.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toggleMenu; });\nfunction toggleMenu(){\n    const mainMenu = document.querySelector('#js-main-menu');\n    const sandwichWrap = document.querySelector('#js-sandwich-wrap');\n\n    sandwichWrap.addEventListener('mousedown', function (e) {\n        e.preventDefault();\n\n        if (mainMenu.classList.contains('fixed')) {\n            mainMenu.classList.remove('fixed');\n        } else {\n            mainMenu.classList.add('fixed');\n        }\n        sandwichWrap.classList.toggle('sandwich--active');\n    });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tb2R1bGVzL2hlYWRlci90b2dnbGVNZW51LmpzPzE4MzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9qcy9zcmMvbW9kdWxlcy9oZWFkZXIvdG9nZ2xlTWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKXtcbiAgICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1tYWluLW1lbnUnKTtcbiAgICBjb25zdCBzYW5kd2ljaFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtc2FuZHdpY2gtd3JhcCcpO1xuXG4gICAgc2FuZHdpY2hXcmFwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAobWFpbk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaXhlZCcpKSB7XG4gICAgICAgICAgICBtYWluTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBzYW5kd2ljaFdyYXAuY2xhc3NMaXN0LnRvZ2dsZSgnc2FuZHdpY2gtLWFjdGl2ZScpO1xuICAgIH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/js/src/modules/header/toggleMenu.js\n");

/***/ }),

/***/ "./src/assets/js/src/modules/streetMap.js":
/*!************************************************!*\
  !*** ./src/assets/js/src/modules/streetMap.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return streetMap; });\nfunction streetMap() {\n    const coords = [45.90227702209729, 12.170858766844267];\n    const coords_2 = [46.35054085399973, 11.967401955225618];\n    const addressText = 'Sede Operativa: Via Giacomo Brodolini';\n\n    let map = L.map('map').setView(coords, 8.5);\n\n    let myIcon = L.icon({\n        iconUrl: 'wp-content/themes/ie-bazzo/assets/i/static/map-icon.png',\n        iconSize: [38, 38],\n        iconAnchor: [38, 38],\n        shadowSize: [68, 95],\n        shadowAnchor: [22, 94]\n    });\n\n    L.marker(coords, {icon: myIcon})\n        .bindTooltip(addressText, {\n            direction: 'right',\n            offset: [-10, -30],\n            permanent: false,\n        })\n        .addTo(map);\n    L.marker(coords_2, {icon: myIcon})\n        .bindTooltip(addressText, {\n            direction: 'right',\n            offset: [-10, -30],\n            permanent: false,\n        })\n        .addTo(map);\n\n    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\n        maxZoom: 24,\n        attribution:\n            '&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>',\n    }).addTo(map);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tb2R1bGVzL3N0cmVldE1hcC5qcz81ZjNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLHNCQUFzQixhQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esd0JBQXdCLGFBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUMvRDtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLEtBQUs7QUFDTCIsImZpbGUiOiIuL3NyYy9hc3NldHMvanMvc3JjL21vZHVsZXMvc3RyZWV0TWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RyZWV0TWFwKCkge1xuICAgIGNvbnN0IGNvb3JkcyA9IFs0NS45MDIyNzcwMjIwOTcyOSwgMTIuMTcwODU4NzY2ODQ0MjY3XTtcbiAgICBjb25zdCBjb29yZHNfMiA9IFs0Ni4zNTA1NDA4NTM5OTk3MywgMTEuOTY3NDAxOTU1MjI1NjE4XTtcbiAgICBjb25zdCBhZGRyZXNzVGV4dCA9ICdTZWRlIE9wZXJhdGl2YTogVmlhIEdpYWNvbW8gQnJvZG9saW5pJztcblxuICAgIGxldCBtYXAgPSBMLm1hcCgnbWFwJykuc2V0Vmlldyhjb29yZHMsIDguNSk7XG5cbiAgICBsZXQgbXlJY29uID0gTC5pY29uKHtcbiAgICAgICAgaWNvblVybDogJ2Fzc2V0cy9pL3N0YXRpYy9tYXAtaWNvbi5wbmcnLFxuICAgICAgICBpY29uU2l6ZTogWzM4LCAzOF0sXG4gICAgICAgIGljb25BbmNob3I6IFszOCwgMzhdLFxuICAgICAgICBzaGFkb3dTaXplOiBbNjgsIDk1XSxcbiAgICAgICAgc2hhZG93QW5jaG9yOiBbMjIsIDk0XVxuICAgIH0pO1xuXG4gICAgTC5tYXJrZXIoY29vcmRzLCB7aWNvbjogbXlJY29ufSlcbiAgICAgICAgLmJpbmRUb29sdGlwKGFkZHJlc3NUZXh0LCB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdyaWdodCcsXG4gICAgICAgICAgICBvZmZzZXQ6IFstMTAsIC0zMF0sXG4gICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgICAuYWRkVG8obWFwKTtcbiAgICBMLm1hcmtlcihjb29yZHNfMiwge2ljb246IG15SWNvbn0pXG4gICAgICAgIC5iaW5kVG9vbHRpcChhZGRyZXNzVGV4dCwge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgb2Zmc2V0OiBbLTEwLCAtMzBdLFxuICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZFRvKG1hcCk7XG5cbiAgICBMLnRpbGVMYXllcignaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnLCB7XG4gICAgICAgIG1heFpvb206IDI0LFxuICAgICAgICBhdHRyaWJ1dGlvbjpcbiAgICAgICAgICAgICcmY29weTsgPGEgaHJlZj1cImh0dHA6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4nLFxuICAgIH0pLmFkZFRvKG1hcCk7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/js/src/modules/streetMap.js\n");

/***/ })

/******/ });