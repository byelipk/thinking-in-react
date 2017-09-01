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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _data = __webpack_require__(2);\n\nvar _data2 = _interopRequireDefault(_data);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import React from 'react';\n// import ReactDOM from 'react-dom';\n\nconsole.log(_data2.default); // import '../css/styles.css';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2FwcC5qc3g/YjBhZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBfZGF0YSA9IHJlcXVpcmUoJy4uL2RhdGEuanNvbicpO1xuXG52YXIgX2RhdGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGF0YSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY29uc29sZS5sb2coX2RhdGEyLmRlZmF1bHQpOyAvLyBpbXBvcnQgJy4uL2Nzcy9zdHlsZXMuY3NzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2FwcC5qc3hcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = [{\"category\":\"Sporting Goods\",\"price\":\"$49.99\",\"stocked\":true,\"name\":\"Football\"},{\"category\":\"Sporting Goods\",\"price\":\"$9.99\",\"stocked\":true,\"name\":\"Baseball\"},{\"category\":\"Sporting Goods\",\"price\":\"$29.99\",\"stocked\":false,\"name\":\"Basketball\"},{\"category\":\"Electronics\",\"price\":\"$99.99\",\"stocked\":true,\"name\":\"iPod Touch\"},{\"category\":\"Electronics\",\"price\":\"$399.99\",\"stocked\":false,\"name\":\"iPhone 5\"},{\"category\":\"Electronics\",\"price\":\"$199.99\",\"stocked\":true,\"name\":\"Nexus 7\"}]//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RhdGEuanNvbj9jMDAyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gW3tcImNhdGVnb3J5XCI6XCJTcG9ydGluZyBHb29kc1wiLFwicHJpY2VcIjpcIiQ0OS45OVwiLFwic3RvY2tlZFwiOnRydWUsXCJuYW1lXCI6XCJGb290YmFsbFwifSx7XCJjYXRlZ29yeVwiOlwiU3BvcnRpbmcgR29vZHNcIixcInByaWNlXCI6XCIkOS45OVwiLFwic3RvY2tlZFwiOnRydWUsXCJuYW1lXCI6XCJCYXNlYmFsbFwifSx7XCJjYXRlZ29yeVwiOlwiU3BvcnRpbmcgR29vZHNcIixcInByaWNlXCI6XCIkMjkuOTlcIixcInN0b2NrZWRcIjpmYWxzZSxcIm5hbWVcIjpcIkJhc2tldGJhbGxcIn0se1wiY2F0ZWdvcnlcIjpcIkVsZWN0cm9uaWNzXCIsXCJwcmljZVwiOlwiJDk5Ljk5XCIsXCJzdG9ja2VkXCI6dHJ1ZSxcIm5hbWVcIjpcImlQb2QgVG91Y2hcIn0se1wiY2F0ZWdvcnlcIjpcIkVsZWN0cm9uaWNzXCIsXCJwcmljZVwiOlwiJDM5OS45OVwiLFwic3RvY2tlZFwiOmZhbHNlLFwibmFtZVwiOlwiaVBob25lIDVcIn0se1wiY2F0ZWdvcnlcIjpcIkVsZWN0cm9uaWNzXCIsXCJwcmljZVwiOlwiJDE5OS45OVwiLFwic3RvY2tlZFwiOnRydWUsXCJuYW1lXCI6XCJOZXh1cyA3XCJ9XVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGF0YS5qc29uXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);