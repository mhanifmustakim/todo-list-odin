/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: inherit;\n    color: inherit;\n}\n\n:root {\n    --header-color: #1F3541;\n    --footer-color: #5289B5;\n    --bg-color: #AFD8F2;\n    --nav-color: #cee6f5;\n    --custom-white: #EDF2F3;\n    --fade-color: #505050;\n    --red: #ff6e6e;\n    --green: #bada55;\n    font-size: 16px;\n    font-family: \"Roboto\", sans-serif;\n}\n\nli::marker {\n    content: none;\n}\n\n.icon {\n    width: 1em;\n    height: 1em;\n}\n\n.display-none {\n    display: none !important;\n}\n\n.text-bold {\n    font-weight: bold;\n}\n\n#page-container {\n    width: 100vw;\n    min-height: 100vh;\n    background-color: var(--bg-color);\n    display: grid;\n    grid-template: 4rem 1fr 2rem / 1fr;\n}\n\n#page-header,\n#page-footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--custom-white);\n}\n\n#page-header {\n    background-color: var(--header-color);\n    justify-content: space-between;\n    padding: 0 1rem;\n    font-size: 1.5rem;\n}\n\n#nav-dropdown {\n    background-color: var(--header-color);\n    outline: none;\n    border: none;\n}\n\n#nav {\n    grid-area: nav;\n    background-color: var(--nav-color);\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    font-size: 1.2rem;\n}\n\n#nav header {\n    font-size: 1.3em;\n    font-weight: bold;\n    padding-bottom: 1rem;\n}\n\n#nav ul>li {\n    padding: 0.5rem;\n    border-radius: 0.5em;\n    cursor: pointer;\n    display: grid;\n    align-items: center;\n    justify-items: start;\n    grid-template-columns: auto 1fr auto;\n    gap: 0.5rem;\n}\n\n#nav button.delete-btn {\n    float: right;\n    background-color: transparent;\n    border: none;\n    color: var(--header-color);\n    font-size: 0.9rem;\n    font-weight: bold;\n    padding: 0.2em 0.3em;\n    border-radius: 0.2em;\n}\n\n#nav ul>li.active {\n    font-weight: bold;\n    background-color: var(--bg-color);\n}\n\n#add-project {\n    cursor: pointer;\n}\n\n#add-project-form {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 0.5rem;\n}\n\n#add-project-form>* {\n    border-radius: 0.5em;\n}\n\n#add-project-form>input {\n    grid-area: 1 / 1 / 1 / -1;\n    padding: 2px 0;\n    padding-left: 1ch;\n}\n\n#add-project-form>button {\n    padding: 0.5rem 0;\n    font-weight: bold;\n}\n\n#add-project-btn {\n    background-color: var(--green);\n}\n\n#cancel-project-btn {\n    background-color: var(--red);\n}\n\n#main {\n    display: grid;\n    padding: clamp(1rem, 5vw, 3rem);\n    grid-template: auto 1fr / 1fr;\n    gap: 1rem;\n}\n\n#main .project-header {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.project-header>.project-title {\n    font-size: 2.5rem;\n}\n\n.input-group-description {\n    position: relative;\n}\n\n.input-group-description .prompt {\n    color: var(--fade-color);\n    padding-left: 0.5rem;\n}\n\n.input-group-description .input-description {\n    background-color: var(--nav-color);\n    border-radius: 1em;\n    width: 100%;\n    height: 10ch;\n    padding: 0.5rem;\n    border: none;\n    resize: none;\n    font-family: inherit;\n}\n\n.input-group-description button {\n    padding: 0.5rem 1.2rem;\n    float: right;\n    border-radius: 1em;\n}\n\n.input-group-description .save-description-btn {\n    background-color: var(--green);\n}\n\n.input-group-description .cancel-description-btn {\n    background-color: var(--red);\n    margin-right: 0.5rem;\n}\n\n#todo-list{\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 1.2em;\n}\n\n.todo{\n    background-color: var(--custom-white);\n    padding: 1.3em 1em;\n    border-radius: 1em;\n    width: 100%;\n    display: grid;\n    grid-template: auto / 1fr auto auto;\n    align-items: center;\n    gap: 1ch;\n}\n\n.todo-dueDate{\n    color: var(--fade-color);\n    font-size: 0.9em;\n}\n\n.todo-checkbox{\n    width: 1.5em;\n    height: 1.5em;\n}\n\n#page-footer {\n    background-color: var(--footer-color);\n}\n\n@media screen and (min-width: 650px) {\n    #page-header {\n        justify-content: center;\n    }\n\n    #nav-dropdown {\n        display: none;\n    }\n\n    #page-main {\n        display: grid;\n        grid-template: 1fr / 17.5rem 1fr;\n        grid-template-areas:\n            \"nav main\";\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,oBAAoB;IACpB,uBAAuB;IACvB,qBAAqB;IACrB,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,iCAAiC;IACjC,aAAa;IACb,kCAAkC;AACtC;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;IACI,qCAAqC;IACrC,8BAA8B;IAC9B,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,kCAAkC;IAClC,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,oBAAoB;IACpB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,6BAA6B;IAC7B,YAAY;IACZ,0BAA0B;IAC1B,iBAAiB;IACjB,iBAAiB;IACjB,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,iCAAiC;AACrC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,WAAW;AACf;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,6BAA6B;IAC7B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,kCAAkC;IAClC,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,4BAA4B;IAC5B,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,UAAU;AACd;;AAEA;IACI,qCAAqC;IACrC,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,mCAAmC;IACnC,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI;QACI,uBAAuB;IAC3B;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;QACb,gCAAgC;QAChC;sBACc;IAClB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: inherit;\n    color: inherit;\n}\n\n:root {\n    --header-color: #1F3541;\n    --footer-color: #5289B5;\n    --bg-color: #AFD8F2;\n    --nav-color: #cee6f5;\n    --custom-white: #EDF2F3;\n    --fade-color: #505050;\n    --red: #ff6e6e;\n    --green: #bada55;\n    font-size: 16px;\n    font-family: \"Roboto\", sans-serif;\n}\n\nli::marker {\n    content: none;\n}\n\n.icon {\n    width: 1em;\n    height: 1em;\n}\n\n.display-none {\n    display: none !important;\n}\n\n.text-bold {\n    font-weight: bold;\n}\n\n#page-container {\n    width: 100vw;\n    min-height: 100vh;\n    background-color: var(--bg-color);\n    display: grid;\n    grid-template: 4rem 1fr 2rem / 1fr;\n}\n\n#page-header,\n#page-footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--custom-white);\n}\n\n#page-header {\n    background-color: var(--header-color);\n    justify-content: space-between;\n    padding: 0 1rem;\n    font-size: 1.5rem;\n}\n\n#nav-dropdown {\n    background-color: var(--header-color);\n    outline: none;\n    border: none;\n}\n\n#nav {\n    grid-area: nav;\n    background-color: var(--nav-color);\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    font-size: 1.2rem;\n}\n\n#nav header {\n    font-size: 1.3em;\n    font-weight: bold;\n    padding-bottom: 1rem;\n}\n\n#nav ul>li {\n    padding: 0.5rem;\n    border-radius: 0.5em;\n    cursor: pointer;\n    display: grid;\n    align-items: center;\n    justify-items: start;\n    grid-template-columns: auto 1fr auto;\n    gap: 0.5rem;\n}\n\n#nav button.delete-btn {\n    float: right;\n    background-color: transparent;\n    border: none;\n    color: var(--header-color);\n    font-size: 0.9rem;\n    font-weight: bold;\n    padding: 0.2em 0.3em;\n    border-radius: 0.2em;\n}\n\n#nav ul>li.active {\n    font-weight: bold;\n    background-color: var(--bg-color);\n}\n\n#add-project {\n    cursor: pointer;\n}\n\n#add-project-form {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 0.5rem;\n}\n\n#add-project-form>* {\n    border-radius: 0.5em;\n}\n\n#add-project-form>input {\n    grid-area: 1 / 1 / 1 / -1;\n    padding: 2px 0;\n    padding-left: 1ch;\n}\n\n#add-project-form>button {\n    padding: 0.5rem 0;\n    font-weight: bold;\n}\n\n#add-project-btn {\n    background-color: var(--green);\n}\n\n#cancel-project-btn {\n    background-color: var(--red);\n}\n\n#main {\n    display: grid;\n    padding: clamp(1rem, 5vw, 3rem);\n    grid-template: auto 1fr / 1fr;\n    gap: 1rem;\n}\n\n#main .project-header {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.project-header>.project-title {\n    font-size: 2.5rem;\n}\n\n.input-group-description {\n    position: relative;\n}\n\n.input-group-description .prompt {\n    color: var(--fade-color);\n    padding-left: 0.5rem;\n}\n\n.input-group-description .input-description {\n    background-color: var(--nav-color);\n    border-radius: 1em;\n    width: 100%;\n    height: 10ch;\n    padding: 0.5rem;\n    border: none;\n    resize: none;\n    font-family: inherit;\n}\n\n.input-group-description button {\n    padding: 0.5rem 1.2rem;\n    float: right;\n    border-radius: 1em;\n}\n\n.input-group-description .save-description-btn {\n    background-color: var(--green);\n}\n\n.input-group-description .cancel-description-btn {\n    background-color: var(--red);\n    margin-right: 0.5rem;\n}\n\n#todo-list{\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 1.2em;\n}\n\n.todo{\n    background-color: var(--custom-white);\n    padding: 1.3em 1em;\n    border-radius: 1em;\n    width: 100%;\n    display: grid;\n    grid-template: auto / 1fr auto auto;\n    align-items: center;\n    gap: 1ch;\n}\n\n.todo-dueDate{\n    color: var(--fade-color);\n    font-size: 0.9em;\n}\n\n.todo-checkbox{\n    width: 1.5em;\n    height: 1.5em;\n}\n\n#page-footer {\n    background-color: var(--footer-color);\n}\n\n@media screen and (min-width: 650px) {\n    #page-header {\n        justify-content: center;\n    }\n\n    #nav-dropdown {\n        display: none;\n    }\n\n    #page-main {\n        display: grid;\n        grid-template: 1fr / 17.5rem 1fr;\n        grid-template-areas:\n            \"nav main\";\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/pubsub.js/pubsub.js":
/*!******************************************!*\
  !*** ./node_modules/pubsub.js/pubsub.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(scope) {
	'use strict';
	var pubsubInstance = null;
	var pubsubConfig = null;

	if(typeof pubsub === 'object') {
		pubsubConfig = pubsub;
	//node.js config from global
	} else if(typeof __webpack_require__.g === 'object' && typeof __webpack_require__.g.pubsubConfig === 'object') {
		pubsubConfig = __webpack_require__.g.pubsubConfig;
	}

	function Pubsub(config) {
		var _eventObject = {};
		var options = {
			separator : (config && config.separator) ? config.separator : '/',
			recurrent : (config && typeof config.recurrent === 'boolean') ? config.recurrent : (false),
			depth     : (config && typeof config.depth === 'number') ? config.depth : null,
			async     : (config && typeof config.async === 'boolean') ? config.async : (false),
			context   : (config && config.context) ? config.context : null,
			log       : (config && config.log) ? config.log : (false)
		};

		function forEach(dataArray, callback) {
			var i = 0,
				arrayLength = dataArray.length;

			for(i = 0; i < arrayLength; i++) {
				callback(i, dataArray[i]);
			}
		}

        function isArray (obj) {
			return Array.isArray ? Array.isArray(obj) : Object.prototype.toString.call(obj) === '[object Array]';
        }

        function executeCallback(subscriptions, args, async) {
			async = (typeof async === 'boolean') ? async : options.async;
			if(!subscriptions.length) {
				return;
			}

			// clone array - callbacks can unsubscribe other subscriptions
			// reduces a lot performance but is safe
			var executedSubscriptions = subscriptions.slice();

			forEach(executedSubscriptions, function(subscriptionId, subscription) {
				if(typeof subscription === 'object' && executedSubscriptions.hasOwnProperty(subscriptionId)) {
					if(async) {
						setTimeout(function() {
							subscription.callback.apply(subscription.context, args);
						}, 4);
					} else {
						subscription.callback.apply(subscription.context, args);
					}
				}
			});
		}

		function executePublishWildcard(nsObject, args) {
			var nsElement;
			for(nsElement in nsObject) {
				if(nsElement[0] !== '_' && nsObject.hasOwnProperty(nsElement)) {
					executeCallback(nsObject[nsElement]._events, args);
				}
			}
		}

		function publish(nsObject, args, parts, params) {
			// work on copy - not on reference
			parts = parts.slice();

			var iPart = parts.shift();
			var depth = params.depth;
			var async = params.async;
			var partsLength = params.partsLength;
			var recurrent = params.recurrent;
			var partNumber = (partsLength - parts.length);

			// parts is empty
			if(!iPart) {
				executeCallback(nsObject._events, args, async);
				return;
			}
			// handle subscribe wildcard
			if(typeof nsObject['*'] !== 'undefined') {
				publish(nsObject['*'], args, parts, params);
			}

			// handle publish wildcard
			if(iPart === '*') {
				executePublishWildcard(nsObject, args, async);
			}

			// no namespace = leave publish
			if(typeof nsObject[iPart] === "undefined") {
				if(params.log) {
					console.warn('There is no ' + params.nsString + ' subscription');
				}
				return;
			}

			nsObject = nsObject[iPart];

			if(recurrent === true && typeof depth !== 'number') { //depth is not defined
				executeCallback(nsObject._events, args, async);
				if(parts.length === 0) {
					return;
				}
			} else if(recurrent === true && typeof depth === 'number' && partNumber >= (partsLength - depth)) { //if depth is defined
				executeCallback(nsObject._events, args, async);
			}

			publish(nsObject, args, parts, params);
		}

		function executeSubscribeWildcard(nsObject, args, params) {
			var parts = params.parts;
			var async = params.async;
			var nextPart = null;

			if(parts.length === 0) {
				executeCallback(nsObject._events, args, async);
			} else {
				nextPart = parts.shift();

				if(nsObject[nextPart]) {
					executeSubscribeWildcard(nsObject[nextPart], args, {
						parts : parts,
						async : async,
						nsString : params.nsString
					});
				}
			}
		}

		function subscribe(nsString, callback, params) {
			var parts = nsString.split(options.separator),
				nsObject, //Namespace object to which we attach event
				context = (params && typeof params.context !== 'undefined') ? params.context : options.context,
				eventObject = null,
				i = 0;

			if(!context) {
				context = callback;
			}

			//Iterating through _eventObject to find proper nsObject
			nsObject = _eventObject;
			for(i = 0; i < parts.length; i += 1) {
				if(typeof nsObject[parts[i]] === "undefined") {
					nsObject[parts[i]] = {};
					nsObject[parts[i]]._events = [];
				}
				nsObject = nsObject[parts[i]];
			}

			eventObject = {
				callback	: callback,
				context		: context // "this" parameter in executed function
			};

			nsObject._events.push(eventObject);
			return { namespace : parts.join(options.separator),
				event : eventObject };
		}

		function unsubscribe(subscribeObject) {
			if(subscribeObject === null || typeof subscribeObject === 'undefined') {
				return null;
			}
			var nsString = subscribeObject.namespace,
				eventObject = subscribeObject.event,
				parts = nsString.split(options.separator),
				nsObject,
				i = 0;

			//Iterating through _eventObject to find proper nsObject
			nsObject = _eventObject;
			for(i = 0; i < parts.length; i += 1) {
				if(typeof nsObject[parts[i]] === "undefined") {
					if(options.log) {
						console.error('There is no ' + nsString + ' subscription');
					}
					return null;
				}
				nsObject = nsObject[parts[i]];
			}

			forEach(nsObject._events, function(eventId) {
				if(nsObject._events[eventId] === eventObject) {
					nsObject._events.splice(eventId, 1);
				}
			});
		}

		return {
			/**
			 * Publish event
			 * @param nsString string namespace string splited by dots
			 * @param args array of arguments given to callbacks
			 * @param params paramaters possible:
			 *        @param recurrent bool should execution be bubbled throught namespace
			 *        @param depth integer how many namespaces separated by dots will be executed
			 */
			publish : function(nsString, args, params) {
				var parts = nsString.split(options.separator),
					recurrent = (typeof params === 'object' && params.recurrent) ? params.recurrent : options.recurrent, // bubbles event throught namespace if true
					depth = (typeof params === 'object' && params.depth) ? params.depth : options.depth,
					async = (typeof params === 'object' && params.async) ? params.async : options.async,
					partsLength = parts.length;

				if(!parts.length) {
					if(options.log) {
						console.error('Wrong namespace provided ' + nsString);
					}
					return;
				}

				publish(_eventObject, args, parts, {
					recurrent : recurrent,
					depth : depth,
					async : async,
					parts : parts,
					nsString : nsString,
					partsLength : partsLength
				});
			},
			/**
			 * Subscribe event
			 * @param nsString string namespace string splited by dots
			 * @param callback function function executed after publishing event
			 * @param params given params
			 *		@param context object/nothing Optional object which will be used as "this" in callback
			 */
			subscribe : function(nsString, callback, params) {
				var self = this,
					subscriptions = [];

				// array of callbacks - multiple subscription
				if(isArray(callback)) {
					forEach(callback, function(number) {
						var oneCallback = callback[number];

						subscriptions =	subscriptions.concat(self.subscribe(nsString, oneCallback, params));
					});
				// array of namespaces - multiple subscription
				} else if(isArray(nsString)) {
					forEach(nsString, function(number) {
						var namespace = nsString[number];

						subscriptions =	subscriptions.concat(self.subscribe(namespace, callback, params));
					});
				} else {
					return subscribe.apply(self, arguments);
				}
				return subscriptions;
			},
			/**
			 * subscribeOnce event - subscribe once to some event, then unsubscribe immadiately
			 * @param nsString string namespace string splited by dots
			 * @param callback function function executed after publishing event
			 * @param params given params
			 *		@param context object/nothing Optional object which will be used as "this" in callback
			 */
			subscribeOnce : function(nsString, callback, params) {
				var self = this,
					subscription = null;

				function subscriptionCallback() {
					var context = this;

					callback.apply(context, arguments);
					self.unsubscribe(subscription);
				}

				subscription = self.subscribe(nsString, subscriptionCallback, params);
				return subscription;
			},
			/**
			 * Unsubscribe from given subscription
			 * @param subscribeObject subscription object given on subscribe (returned from subscription)
			 */
			unsubscribe : function(subscribeObject) {
				var self = this;

				//if we have array of callbacks - multiple subscription
				if(isArray(subscribeObject)) {
					forEach(subscribeObject, function(number) {
						var oneSubscribtion = subscribeObject[number];

						unsubscribe.apply(self, [oneSubscribtion]);
					});
				} else {
					unsubscribe.apply(self, arguments);
				}
			},
			/**
			 * newInstance - makes new instance of pubsub object with its own config
			 * @param params instance configuration
			 *        @param separator separator (default is "/")
			 *        @param recurrent should publish events be bubbled through namespace
			 *        @param async should publish events be asynchronous - not blocking function execution
			 *        @param log console.warn/error every problem
			 */
			newInstance : function(params) {
				return new Pubsub(params);
			}
		}; //return block
	}
	pubsubInstance = new Pubsub(pubsubConfig);

	//if sbd's using requirejs library to load pubsub.js
	if(true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (pubsubInstance),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	//node.js
	if( true && module.exports) {
		module.exports = pubsubInstance;
	}

	if(typeof window === 'object') {
		window.pubsub = pubsubInstance;
		if(window !== scope) {
			scope.pubsub = pubsubInstance;
		}
	}
})(this);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/EventAggregator.js":
/*!********************************!*\
  !*** ./src/EventAggregator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub.js */ "./node_modules/pubsub.js/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavControl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavControl.js */ "./src/NavControl.js");
/* harmony import */ var _Memory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Memory.js */ "./src/Memory.js");
/* harmony import */ var _MainControl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainControl.js */ "./src/MainControl.js");





const EventAggregator = (function () {
    const updateNavToken = pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(
        "ProjectAdded",
        _NavControl_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateNavSection.bind(_NavControl_js__WEBPACK_IMPORTED_MODULE_1__["default"], _Memory_js__WEBPACK_IMPORTED_MODULE_2__["default"]));

    const deleteNavToken = pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(
        "ProjectDeleted",
        _NavControl_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateNavSection.bind(_NavControl_js__WEBPACK_IMPORTED_MODULE_1__["default"], _Memory_js__WEBPACK_IMPORTED_MODULE_2__["default"])
    )

    const toggleBookmarkedToken = pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(
        "ToggleBookmarked",
        _NavControl_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateNavSection.bind(_NavControl_js__WEBPACK_IMPORTED_MODULE_1__["default"], _Memory_js__WEBPACK_IMPORTED_MODULE_2__["default"])
    )

    const setActiveProjectToken = pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(
        "SetActiveProject",
        (id) => _MainControl_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateMain(_Memory_js__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectId(id))
    )

    const addProjectDescToken = pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(
        "AddProjectDesc",
        (id, desc) => {
            const project = _Memory_js__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectId(id);
            project.setDescription(desc);
            _MainControl_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateMain(project);
        }
    )

})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventAggregator);

/***/ }),

/***/ "./src/Icon.js":
/*!*********************!*\
  !*** ./src/Icon.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Icon = (src) => {
    const icon = document.createElement("img");
    icon.classList.add("icon");
    icon.src = src;

    return icon
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/MainControl.js":
/*!****************************!*\
  !*** ./src/MainControl.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub.js */ "./node_modules/pubsub.js/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainView.js */ "./src/MainView.js");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils.js */ "./src/Utils.js");




const MainControl = (function () {
    const updateMain = (project) => {
        const main = document.querySelector("#main");
        main.innerHTML = "";
        main.appendChild((0,_MainView_js__WEBPACK_IMPORTED_MODULE_1__.createProjectHeader)(project));
        if (project.todoList) {
            main.appendChild((0,_MainView_js__WEBPACK_IMPORTED_MODULE_1__.createTodos)(project));
        }
    }

    const saveDescription = (event) => {
        event.preventDefault();
        const projectId = event.target.getAttribute("data-id");
        const description = event.target.querySelector('[name="project-description"]').value;
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("AddProjectDesc", [parseInt(projectId), description]);
    }

    return {
        updateMain,
        saveDescription
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainControl);

/***/ }),

/***/ "./src/MainView.js":
/*!*************************!*\
  !*** ./src/MainView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMain": () => (/* binding */ createMain),
/* harmony export */   "createProjectHeader": () => (/* binding */ createProjectHeader),
/* harmony export */   "createTodos": () => (/* binding */ createTodos)
/* harmony export */ });
/* harmony import */ var _MainControl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainControl.js */ "./src/MainControl.js");
/* harmony import */ var _TodoView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoView.js */ "./src/TodoView.js");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils.js */ "./src/Utils.js");




const createTitle = (project) => {
    const title = document.createElement("h3");
    title.classList.add("project-title");
    title.appendChild(document.createTextNode(project.title));
    return title
}

const createDesc = (project) => {
    const div = document.createElement("div");
    div.classList.add("input-group-description");

    const description = document.createElement("p");
    const content = project.description ? project.description : "";
    const prompt = document.createElement("span");
    prompt.classList.add("prompt");
    prompt.textContent = content ? "Edit description..." : "Add a project description...";
    description.classList.add("project-description");
    description.appendChild(document.createTextNode(content));
    description.appendChild(prompt);

    const input = document.createElement("form");
    input.classList.add("display-none");
    input.setAttribute("data-id", project.id);

    const textarea = document.createElement("textarea");
    textarea.name = "project-description";
    textarea.placeholder = "Enter your project description here.";
    textarea.value = project.description ? project.description : "";
    textarea.required = true;
    textarea.classList.add("input-description");

    const saveBtn = document.createElement("button");
    saveBtn.appendChild(document.createTextNode("Save"));
    saveBtn.type = "submit";
    saveBtn.classList.add("save-description-btn");

    const cancelBtn = document.createElement("button");
    cancelBtn.appendChild(document.createTextNode("Cancel"));
    cancelBtn.type = "button";
    cancelBtn.classList.add("cancel-description-btn");

    description.addEventListener("click", _Utils_js__WEBPACK_IMPORTED_MODULE_2__.displayDelete.bind(window, input, description));
    cancelBtn.addEventListener("click", _Utils_js__WEBPACK_IMPORTED_MODULE_2__.displayDelete.bind(window, description, input));
    input.addEventListener("submit", _MainControl_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveDescription);

    input.appendChild(textarea);
    input.appendChild(saveBtn);
    input.appendChild(cancelBtn);
    div.appendChild(description);
    div.appendChild(input);
    return div
}

const createProjectHeader = (project) => {
    const div = document.createElement("div");
    div.classList.add("project-header");

    const title = createTitle(project);
    div.appendChild(title);

    const description = createDesc(project);
    div.appendChild(description);

    return div
}

const createTodos = (project) => {
    const todoList = document.createElement("div");
    todoList.id = "todo-list";
    for (let todo of project.todoList) {
        todoList.appendChild((0,_TodoView_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(todo));
    }
    return todoList
}

const createMain = (memory) => {
    const main = document.createElement("div");
    main.id = "main";

    const baseProject = memory.getProjectId(1);
    main.appendChild(createProjectHeader(baseProject));
    if (baseProject.todoList) {
        main.appendChild(createTodos(baseProject));
    }
    return main;
}



/***/ }),

/***/ "./src/Memory.js":
/*!***********************!*\
  !*** ./src/Memory.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub.js */ "./node_modules/pubsub.js/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils.js */ "./src/Utils.js");




const Memory = (function () {
    let projects = [];
    let bookmarkedProjects = [];

    const addToProjects = (project) => {
        if (project.type !== "Project") project = (0,_Project_js__WEBPACK_IMPORTED_MODULE_1__["default"])(project);
        projects.push(project);
    }

    const addToBookmarked = (projectId) => {
        const index = projects.findIndex(
            (project) => project.id === projectId
        );

        if (index === -1) {
            console.error("Index of item not found in Projects list");
            return
        }

        const target = projects[index];
        target.setBookmarked(true);
        bookmarkedProjects.push(target);
    }

    const removeFromBookmarked = (projectId) => {
        const index = bookmarkedProjects.findIndex(
            (project) => project.id === projectId
        );

        if (index === -1) {
            console.error("Index of item not found in Projects list");
            return
        }


        const target = bookmarkedProjects[index];
        target.setBookmarked(false);
        bookmarkedProjects.splice(index, 1);
    }

    const removeProjectId = (projectId) => {
        ;(0,_Utils_js__WEBPACK_IMPORTED_MODULE_2__.removeById)(projects, projectId);
    }

    const getProjectId = (projectId) => {
        const index = projects.findIndex(
            (project) => project.id === projectId
        );

        return projects[index];
    }

    const addProjectToken = pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("ProjectAdded", addToProjects);
    const removeProjectToken = pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("ProjectDeleted", removeProjectId);
    const toggleBookmarkedToken = pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(
        "ToggleBookmarked",
        (id) => {
            const project = getProjectId(id);
            project.isBookmarked ? removeFromBookmarked(id) : addToBookmarked(id);
        }
    );

    return {
        projects,
        bookmarkedProjects,
        addToProjects,
        removeProjectId,
        addToBookmarked,
        removeFromBookmarked,
        getProjectId
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Memory);

/***/ }),

/***/ "./src/NavControl.js":
/*!***************************!*\
  !*** ./src/NavControl.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub.js */ "./node_modules/pubsub.js/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavView.js */ "./src/NavView.js");



const NavControl = (function () {
    let currentActive = 1;

    const updateActiveNav = (event) => {
        if (event) {
            currentActive = event.target.getAttribute("data-id");
            const prev = document.querySelector("#nav .active")
            prev.classList.remove("active");
            prev.addEventListener("click", updateActiveNav);
        };

        const nav = document.querySelector(`#nav [data-id="${currentActive}"]`);
        nav.classList.add("active");
        nav.removeEventListener("click", updateActiveNav);
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("SetActiveProject", [parseInt(currentActive)]);
    }

    const toggleAddProjectForm = () => {
        document.querySelector("#add-project-form").classList.toggle("display-none");
        document.querySelector("#add-project").classList.toggle("display-none");
    }

    const toggleBookmarked = (event) => {
        event.stopPropagation();
        const targetProjectId = event.target.parentElement.getAttribute("data-id");

        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("ToggleBookmarked", [parseInt(targetProjectId)]);
    }

    const toggleNav = () => {
        document.querySelector("#nav").classList.toggle("display-none");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const title = document.querySelector(`input[name="project-title"]`);
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("ProjectAdded", [title.value]);
        title.value = "";
        toggleAddProjectForm();
    }

    const updateNavSection = (memory) => {
        const projectsList = document.querySelector("#projects>ul");
        const bookmarkedList = document.querySelector("#projects-bookmarked");

        projectsList.innerHTML = "";
        bookmarkedList.innerHTML = "";

        for (let project of memory.projects) {
            const projectNode = (0,_NavView_js__WEBPACK_IMPORTED_MODULE_1__.createProjectNode)(project);
            if (project.isBookmarked) {
                bookmarkedList.appendChild(projectNode);
            } else {
                projectsList.appendChild(projectNode);
            }
        }

        updateActiveNav();
    }

    const handleDelete = (event) => {
        event.stopPropagation();
        const targetProjectId = event.target.parentElement.getAttribute("data-id");

        // If delete current active nav, default back to home nav
        if (currentActive === targetProjectId) currentActive = 1;
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("ProjectDeleted", [parseInt(targetProjectId)]);
    }

    return {
        get currentActive() {
            return currentActive
        },
        updateActiveNav,
        toggleAddProjectForm,
        toggleNav,
        toggleBookmarked,
        handleSubmit,
        updateNavSection,
        handleDelete
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavControl);

/***/ }),

/***/ "./src/NavView.js":
/*!************************!*\
  !*** ./src/NavView.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNav": () => (/* binding */ createNav),
/* harmony export */   "createProjectNode": () => (/* binding */ createProjectNode)
/* harmony export */ });
/* harmony import */ var _NavControl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavControl.js */ "./src/NavControl.js");
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.js */ "./src/Icon.js");
/* harmony import */ var _Icons_star_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons/star.svg */ "./src/Icons/star.svg");
/* harmony import */ var _Icons_star_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/star-outline.svg */ "./src/Icons/star-outline.svg");





const createProjectNode = (project) => {
    const item = document.createElement("li");
    item.setAttribute("data-id", project.id);

    if (project.id !== 1) {
        const icon = project.isBookmarked ? (0,_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_Icons_star_svg__WEBPACK_IMPORTED_MODULE_2__) : (0,_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_Icons_star_outline_svg__WEBPACK_IMPORTED_MODULE_3__);
        icon.addEventListener("click", _NavControl_js__WEBPACK_IMPORTED_MODULE_0__["default"].toggleBookmarked);
        item.appendChild(icon);
    }

    item.appendChild(document.createTextNode(project.title));

    if (project.id !== 1) {
        const dltBtn = document.createElement("button");
        dltBtn.classList.add("delete-btn");
        dltBtn.textContent = "X";
        dltBtn.addEventListener("click", _NavControl_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleDelete);
        item.appendChild(dltBtn);
    }

    item.addEventListener("click", _NavControl_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateActiveNav);
    return item
}

const createBookmarkedSection = (memory) => {
    const ul = document.createElement("ul");
    ul.id = "projects-bookmarked";

    for (let project of memory.bookmarkedProjects) {
        // Only shows bookmarked projects in the top of nav section
        const item = createProjectNode(project);

        ul.appendChild(item);
    }

    return ul
}

const createProjectSection = (memory) => {
    const div = document.createElement("div");
    div.id = "projects";

    const header = document.createElement("header");
    header.textContent = "Projects";
    div.appendChild(header);

    const ul = document.createElement("ul");

    for (let project of memory.projects) {
        // skip Default (Home) Project
        if (project.isBookmarked) continue

        const item = createProjectNode(project);

        ul.appendChild(item);
    }
    div.appendChild(ul);

    return div
}

const createAddProjectBtn = () => {
    const div = document.createElement("div");
    div.id = "add-project";
    div.classList.add("text-bold");
    div.textContent = "Add Project";
    div.addEventListener("click", _NavControl_js__WEBPACK_IMPORTED_MODULE_0__["default"].toggleAddProjectForm);

    return div
}

const createProjectForm = () => {
    const form = document.createElement("form");
    form.id = "add-project-form";
    form.classList.add("display-none");

    const input = document.createElement("input");
    input.type = "text";
    input.required = true;
    input.name = "project-title";
    input.id = "project-title";
    input.placeholder = "New Project Title";
    form.appendChild(input);

    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.id = "cancel-project-btn";
    cancelBtn.textContent = "Cancel"
    cancelBtn.addEventListener("click", _NavControl_js__WEBPACK_IMPORTED_MODULE_0__["default"].toggleAddProjectForm);
    form.appendChild(cancelBtn);

    const addBtn = document.createElement("button");
    addBtn.type = "submit";
    addBtn.id = "add-project-btn";
    addBtn.textContent = "Add";
    form.appendChild(addBtn);

    form.addEventListener("submit", _NavControl_js__WEBPACK_IMPORTED_MODULE_0__["default"].handleSubmit);
    return form
}

const createNav = (memory) => {
    const nav = document.createElement("div");
    nav.id = "nav";

    nav.appendChild(createBookmarkedSection(memory));
    nav.appendChild(createProjectSection(memory));
    nav.appendChild(createAddProjectBtn());
    nav.appendChild(createProjectForm());
    return nav
}



/***/ }),

/***/ "./src/PageView.js":
/*!*************************!*\
  !*** ./src/PageView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainView.js */ "./src/MainView.js");
/* harmony import */ var _NavView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavView.js */ "./src/NavView.js");
/* harmony import */ var _NavControl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavControl.js */ "./src/NavControl.js");
/* harmony import */ var _Memory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Memory.js */ "./src/Memory.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pubsub.js */ "./node_modules/pubsub.js/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_4__);






const PageView = (function () {
    const pageMain = document.querySelector("#page-main");
    const navDropdown = document.querySelector("#nav-dropdown");

    const init = () => {
        navDropdown.addEventListener("click", _NavControl_js__WEBPACK_IMPORTED_MODULE_2__["default"].toggleNav);
        pageMain.appendChild((0,_NavView_js__WEBPACK_IMPORTED_MODULE_1__.createNav)(_Memory_js__WEBPACK_IMPORTED_MODULE_3__["default"]));
        pageMain.appendChild((0,_MainView_js__WEBPACK_IMPORTED_MODULE_0__.createMain)(_Memory_js__WEBPACK_IMPORTED_MODULE_3__["default"]));
        _NavControl_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateActiveNav();

        // Always makes the nav appear if window width is >= 650px
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 650) {
                document.querySelector("#nav").classList.remove("display-none");
            }
        });
    }

    return {
        init
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageView);

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");


const Project = (projectTitle) => {
    const id = Project.getId();
    const type = "Project";
    let todoList = [];
    let title = projectTitle;
    let isBookmarked = false;
    let description;

    const addTodo = (todo) => {
        todoList.push(todo);
    }

    const removeTodoId = (todoId) => {
        ;(0,_Utils__WEBPACK_IMPORTED_MODULE_0__.removeById)(todoList, todoId)
    }

    const setTitle = (newTitle) => {
        title = newTitle;
    }

    const setDescription = (desc) => {
        description = desc;
    }

    const setBookmarked = (bool) => {
        isBookmarked = bool;
    }

    return {
        id,
        type,
        get title() {
            return title
        },
        get description() {
            return description
        },
        get todoList() {
            return todoList
        },
        get isBookmarked() {
            return isBookmarked
        },
        addTodo,
        removeTodoId,
        setTitle,
        setDescription,
        setBookmarked
    }
}

// Set Project static counter for id
Project.counter = 1;
Project.getId = function () {
    return Project.counter++
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Todo = function (title) {
    const type = "Todo";
    const id = Todo.getId();
    let description, dueDate, priority;
    let isDone = false;

    const toggleDone = () => {
        isDone = isDone ? false : true;
    }

    const setTitle = (newTitle) => {
        title = newTitle;
    }

    const setDescription = (desc) => {
        description = desc;
    }

    const setDueDate = (date) => {
        dueDate = date;
    }

    const setPriority = (prio) => {
        priority = prio
    }

    return {
        title,
        description,
        dueDate,
        priority,
        id,
        type,
        isDone,
        toggleDone,
        setTitle,
        setDescription,
        setDueDate,
        setPriority
    }
}

// Initialize static count for Todo
Todo.count = 1;
Todo.getId = function () {
    return Todo.count++;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/TodoView.js":
/*!*************************!*\
  !*** ./src/TodoView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodo": () => (/* binding */ createTodo)
/* harmony export */ });
const createTodo = (todo) => {
    const node = document.createElement("div");
    node.classList.add("todo");

    const title = document.createElement("header");
    title.classList.add("todo-title");
    title.textContent = todo.title;

    const dueDate = document.createElement("p");
    dueDate.classList.add("todo-dueDate");
    if (todo.dueDate) dueDate.textContent = todo.dueDate;
    else dueDate.textContent = "Add a due date";

    const isDone = document.createElement("input");
    isDone.classList.add("todo-checkbox");
    isDone.type = "checkbox";
    isDone.checked = todo.isDone;

    node.appendChild(title);
    node.appendChild(dueDate);
    node.appendChild(isDone);
    return node
}



/***/ }),

/***/ "./src/Utils.js":
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayDelete": () => (/* binding */ displayDelete),
/* harmony export */   "removeById": () => (/* binding */ removeById)
/* harmony export */ });
const removeById = (list, objectId) => {
    const index = list.findIndex((obj) => obj.id === objectId);
    if (index !== -1) {
        return list.splice(index, 1);
    } else {
        console.error("Trying to delete an item that does not exist!");
    }
}

const displayDelete = (displayNode, deleteNode) => {
    displayNode.classList.remove("display-none");
    deleteNode.classList.add("display-none");
}



/***/ }),

/***/ "./src/Icons/star-outline.svg":
/*!************************************!*\
  !*** ./src/Icons/star-outline.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c2e6e6dd118d33c26922.svg";

/***/ }),

/***/ "./src/Icons/star.svg":
/*!****************************!*\
  !*** ./src/Icons/star.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "de7ced177d66bb006694.svg";

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventAggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAggregator.js */ "./src/EventAggregator.js");
/* harmony import */ var _Memory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Memory.js */ "./src/Memory.js");
/* harmony import */ var _PageView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageView.js */ "./src/PageView.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Todo.js */ "./src/Todo.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







const homeProject = (0,_Project_js__WEBPACK_IMPORTED_MODULE_3__["default"])("Home");
homeProject.setDescription("Your personal default project to store your todos.");
homeProject.addTodo((0,_Todo_js__WEBPACK_IMPORTED_MODULE_4__["default"])("I'm a todo lol"));
homeProject.addTodo((0,_Todo_js__WEBPACK_IMPORTED_MODULE_4__["default"])("Another test todo"));
_Memory_js__WEBPACK_IMPORTED_MODULE_1__["default"].addToProjects(homeProject);
_Memory_js__WEBPACK_IMPORTED_MODULE_1__["default"].addToBookmarked(homeProject.id);

const testProject = (0,_Project_js__WEBPACK_IMPORTED_MODULE_3__["default"])("Test Project");
_Memory_js__WEBPACK_IMPORTED_MODULE_1__["default"].addToProjects(testProject);

_PageView_js__WEBPACK_IMPORTED_MODULE_2__["default"].init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxrQkFBa0I7QUFDakk7QUFDQSxvRUFBb0UsZ0JBQWdCLGlCQUFpQiw2QkFBNkIseUJBQXlCLHFCQUFxQixHQUFHLFdBQVcsOEJBQThCLDhCQUE4QiwwQkFBMEIsMkJBQTJCLDhCQUE4Qiw0QkFBNEIscUJBQXFCLHVCQUF1QixzQkFBc0IsMENBQTBDLEdBQUcsZ0JBQWdCLG9CQUFvQixHQUFHLFdBQVcsaUJBQWlCLGtCQUFrQixHQUFHLG1CQUFtQiwrQkFBK0IsR0FBRyxnQkFBZ0Isd0JBQXdCLEdBQUcscUJBQXFCLG1CQUFtQix3QkFBd0Isd0NBQXdDLG9CQUFvQix5Q0FBeUMsR0FBRyxpQ0FBaUMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsaUNBQWlDLEdBQUcsa0JBQWtCLDRDQUE0QyxxQ0FBcUMsc0JBQXNCLHdCQUF3QixHQUFHLG1CQUFtQiw0Q0FBNEMsb0JBQW9CLG1CQUFtQixHQUFHLFVBQVUscUJBQXFCLHlDQUF5QyxvQkFBb0Isb0JBQW9CLDZCQUE2QixnQkFBZ0Isd0JBQXdCLEdBQUcsaUJBQWlCLHVCQUF1Qix3QkFBd0IsMkJBQTJCLEdBQUcsZ0JBQWdCLHNCQUFzQiwyQkFBMkIsc0JBQXNCLG9CQUFvQiwwQkFBMEIsMkJBQTJCLDJDQUEyQyxrQkFBa0IsR0FBRyw0QkFBNEIsbUJBQW1CLG9DQUFvQyxtQkFBbUIsaUNBQWlDLHdCQUF3Qix3QkFBd0IsMkJBQTJCLDJCQUEyQixHQUFHLHVCQUF1Qix3QkFBd0Isd0NBQXdDLEdBQUcsa0JBQWtCLHNCQUFzQixHQUFHLHVCQUF1QixvQkFBb0IscUNBQXFDLGtDQUFrQyxrQkFBa0IsR0FBRyx5QkFBeUIsMkJBQTJCLEdBQUcsNkJBQTZCLGdDQUFnQyxxQkFBcUIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3Qix3QkFBd0IsR0FBRyxzQkFBc0IscUNBQXFDLEdBQUcseUJBQXlCLG1DQUFtQyxHQUFHLFdBQVcsb0JBQW9CLHNDQUFzQyxvQ0FBb0MsZ0JBQWdCLEdBQUcsMkJBQTJCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLEdBQUcsb0NBQW9DLHdCQUF3QixHQUFHLDhCQUE4Qix5QkFBeUIsR0FBRyxzQ0FBc0MsK0JBQStCLDJCQUEyQixHQUFHLGlEQUFpRCx5Q0FBeUMseUJBQXlCLGtCQUFrQixtQkFBbUIsc0JBQXNCLG1CQUFtQixtQkFBbUIsMkJBQTJCLEdBQUcscUNBQXFDLDZCQUE2QixtQkFBbUIseUJBQXlCLEdBQUcsb0RBQW9ELHFDQUFxQyxHQUFHLHNEQUFzRCxtQ0FBbUMsMkJBQTJCLEdBQUcsZUFBZSxvQkFBb0IsK0JBQStCLGlCQUFpQixHQUFHLFVBQVUsNENBQTRDLHlCQUF5Qix5QkFBeUIsa0JBQWtCLG9CQUFvQiwwQ0FBMEMsMEJBQTBCLGVBQWUsR0FBRyxrQkFBa0IsK0JBQStCLHVCQUF1QixHQUFHLG1CQUFtQixtQkFBbUIsb0JBQW9CLEdBQUcsa0JBQWtCLDRDQUE0QyxHQUFHLDBDQUEwQyxvQkFBb0Isa0NBQWtDLE9BQU8sdUJBQXVCLHdCQUF3QixPQUFPLG9CQUFvQix3QkFBd0IsMkNBQTJDLHlEQUF5RCxPQUFPLEdBQUcsT0FBTyxrRkFBa0YsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sTUFBTSwrRkFBK0YsbUJBQW1CLDhCQUE4QixnQkFBZ0IsaUJBQWlCLDZCQUE2Qix5QkFBeUIscUJBQXFCLEdBQUcsV0FBVyw4QkFBOEIsOEJBQThCLDBCQUEwQiwyQkFBMkIsOEJBQThCLDRCQUE0QixxQkFBcUIsdUJBQXVCLHNCQUFzQiwwQ0FBMEMsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsV0FBVyxpQkFBaUIsa0JBQWtCLEdBQUcsbUJBQW1CLCtCQUErQixHQUFHLGdCQUFnQix3QkFBd0IsR0FBRyxxQkFBcUIsbUJBQW1CLHdCQUF3Qix3Q0FBd0Msb0JBQW9CLHlDQUF5QyxHQUFHLGlDQUFpQyxvQkFBb0IsOEJBQThCLDBCQUEwQixpQ0FBaUMsR0FBRyxrQkFBa0IsNENBQTRDLHFDQUFxQyxzQkFBc0Isd0JBQXdCLEdBQUcsbUJBQW1CLDRDQUE0QyxvQkFBb0IsbUJBQW1CLEdBQUcsVUFBVSxxQkFBcUIseUNBQXlDLG9CQUFvQixvQkFBb0IsNkJBQTZCLGdCQUFnQix3QkFBd0IsR0FBRyxpQkFBaUIsdUJBQXVCLHdCQUF3QiwyQkFBMkIsR0FBRyxnQkFBZ0Isc0JBQXNCLDJCQUEyQixzQkFBc0Isb0JBQW9CLDBCQUEwQiwyQkFBMkIsMkNBQTJDLGtCQUFrQixHQUFHLDRCQUE0QixtQkFBbUIsb0NBQW9DLG1CQUFtQixpQ0FBaUMsd0JBQXdCLHdCQUF3QiwyQkFBMkIsMkJBQTJCLEdBQUcsdUJBQXVCLHdCQUF3Qix3Q0FBd0MsR0FBRyxrQkFBa0Isc0JBQXNCLEdBQUcsdUJBQXVCLG9CQUFvQixxQ0FBcUMsa0NBQWtDLGtCQUFrQixHQUFHLHlCQUF5QiwyQkFBMkIsR0FBRyw2QkFBNkIsZ0NBQWdDLHFCQUFxQix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLHdCQUF3QixHQUFHLHNCQUFzQixxQ0FBcUMsR0FBRyx5QkFBeUIsbUNBQW1DLEdBQUcsV0FBVyxvQkFBb0Isc0NBQXNDLG9DQUFvQyxnQkFBZ0IsR0FBRywyQkFBMkIsb0JBQW9CLDZCQUE2QixrQkFBa0IsR0FBRyxvQ0FBb0Msd0JBQXdCLEdBQUcsOEJBQThCLHlCQUF5QixHQUFHLHNDQUFzQywrQkFBK0IsMkJBQTJCLEdBQUcsaURBQWlELHlDQUF5Qyx5QkFBeUIsa0JBQWtCLG1CQUFtQixzQkFBc0IsbUJBQW1CLG1CQUFtQiwyQkFBMkIsR0FBRyxxQ0FBcUMsNkJBQTZCLG1CQUFtQix5QkFBeUIsR0FBRyxvREFBb0QscUNBQXFDLEdBQUcsc0RBQXNELG1DQUFtQywyQkFBMkIsR0FBRyxlQUFlLG9CQUFvQiwrQkFBK0IsaUJBQWlCLEdBQUcsVUFBVSw0Q0FBNEMseUJBQXlCLHlCQUF5QixrQkFBa0Isb0JBQW9CLDBDQUEwQywwQkFBMEIsZUFBZSxHQUFHLGtCQUFrQiwrQkFBK0IsdUJBQXVCLEdBQUcsbUJBQW1CLG1CQUFtQixvQkFBb0IsR0FBRyxrQkFBa0IsNENBQTRDLEdBQUcsMENBQTBDLG9CQUFvQixrQ0FBa0MsT0FBTyx1QkFBdUIsd0JBQXdCLE9BQU8sb0JBQW9CLHdCQUF3QiwyQ0FBMkMseURBQXlELE9BQU8sR0FBRyxtQkFBbUI7QUFDbHNWO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGVBQWUscUJBQU0sd0JBQXdCLHFCQUFNO0FBQ3RELGlCQUFpQixxQkFBTTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxpQkFBaUI7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGtHQUFrRztBQUN2RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLGtCQUFrQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsa0JBQWtCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLElBQUksSUFBNEI7QUFDaEMsRUFBRSxvQ0FBTyxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0dBQUM7QUFDeEI7O0FBRUE7QUFDQSxJQUFJLEtBQTBCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlVELE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YrQjtBQUNVO0FBQ1I7QUFDVTs7QUFFM0M7QUFDQSwyQkFBMkIsMERBQWdCO0FBQzNDO0FBQ0EsUUFBUSw0RUFBZ0MsQ0FBQyxzREFBVSxFQUFFLGtEQUFNOztBQUUzRCwyQkFBMkIsMERBQWdCO0FBQzNDO0FBQ0EsUUFBUSw0RUFBZ0MsQ0FBQyxzREFBVSxFQUFFLGtEQUFNO0FBQzNEOztBQUVBLGtDQUFrQywwREFBZ0I7QUFDbEQ7QUFDQSxRQUFRLDRFQUFnQyxDQUFDLHNEQUFVLEVBQUUsa0RBQU07QUFDM0Q7O0FBRUEsa0NBQWtDLDBEQUFnQjtBQUNsRDtBQUNBLGdCQUFnQixrRUFBc0IsQ0FBQywrREFBbUI7QUFDMUQ7O0FBRUEsZ0NBQWdDLDBEQUFnQjtBQUNoRDtBQUNBO0FBQ0EsNEJBQTRCLCtEQUFtQjtBQUMvQztBQUNBLFlBQVksa0VBQXNCO0FBQ2xDO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDcENmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSZ0I7QUFDa0M7QUFDdEI7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlFQUFtQjtBQUM1QztBQUNBLDZCQUE2Qix5REFBVztBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBYztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0I0QjtBQUNBO0FBQ0E7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyx5REFBa0I7QUFDNUQsd0NBQXdDLHlEQUFrQjtBQUMxRCxxQ0FBcUMsdUVBQTJCOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsd0RBQVU7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekYrQjtBQUNJO0FBQ0s7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCx1REFBTztBQUN6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsc0RBQVU7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0QkFBNEIsMERBQWdCO0FBQzVDLCtCQUErQiwwREFBZ0I7QUFDL0Msa0NBQWtDLDBEQUFnQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VnQjtBQUNrQjs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2REFBNkQsY0FBYztBQUMzRTtBQUNBO0FBQ0EsUUFBUSx3REFBYztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx3REFBYztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBYztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsOERBQWlCO0FBQ2pEO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHdEQUFjO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RjBCO0FBQ1o7QUFDVztBQUNnQjs7QUFFeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLG9EQUFJLENBQUMsNENBQVEsSUFBSSxvREFBSSxDQUFDLG9EQUFnQjtBQUNsRix1Q0FBdUMsdUVBQTJCO0FBQ2xFO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsbUVBQXVCO0FBQ2hFO0FBQ0E7O0FBRUEsbUNBQW1DLHNFQUEwQjtBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsMkVBQStCOztBQUVqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDJFQUErQjtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxtRUFBdUI7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25IMkM7QUFDRjtBQUNBO0FBQ1I7QUFDRjs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLGdFQUFvQjtBQUNsRSw2QkFBNkIsc0RBQVMsQ0FBQyxrREFBTTtBQUM3Qyw2QkFBNkIsd0RBQVUsQ0FBQyxrREFBTTtBQUM5QyxRQUFRLHNFQUEwQjs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JzQjs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxtREFBVTtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzNEZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ2hEZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbUQ7QUFDbEI7QUFDSTtBQUNGO0FBQ047QUFDUjs7QUFFckIsb0JBQW9CLHVEQUFPO0FBQzNCO0FBQ0Esb0JBQW9CLG9EQUFJO0FBQ3hCLG9CQUFvQixvREFBSTtBQUN4QixnRUFBb0I7QUFDcEIsa0VBQXNCOztBQUV0QixvQkFBb0IsdURBQU87QUFDM0IsZ0VBQW9COztBQUVwQix5REFBYSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vbm9kZV9tb2R1bGVzL3B1YnN1Yi5qcy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9FdmVudEFnZ3JlZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9zcmMvSWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9NYWluQ29udHJvbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9NYWluVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9NZW1vcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9zcmMvTmF2Q29udHJvbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9OYXZWaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL1BhZ2VWaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9zcmMvVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9Ub2RvVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9VdGlscy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWhlYWRlci1jb2xvcjogIzFGMzU0MTtcXG4gICAgLS1mb290ZXItY29sb3I6ICM1Mjg5QjU7XFxuICAgIC0tYmctY29sb3I6ICNBRkQ4RjI7XFxuICAgIC0tbmF2LWNvbG9yOiAjY2VlNmY1O1xcbiAgICAtLWN1c3RvbS13aGl0ZTogI0VERjJGMztcXG4gICAgLS1mYWRlLWNvbG9yOiAjNTA1MDUwO1xcbiAgICAtLXJlZDogI2ZmNmU2ZTtcXG4gICAgLS1ncmVlbjogI2JhZGE1NTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmxpOjptYXJrZXIge1xcbiAgICBjb250ZW50OiBub25lO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIHdpZHRoOiAxZW07XFxuICAgIGhlaWdodDogMWVtO1xcbn1cXG5cXG4uZGlzcGxheS1ub25lIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGV4dC1ib2xkIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNwYWdlLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNHJlbSAxZnIgMnJlbSAvIDFmcjtcXG59XFxuXFxuI3BhZ2UtaGVhZGVyLFxcbiNwYWdlLWZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tY3VzdG9tLXdoaXRlKTtcXG59XFxuXFxuI3BhZ2UtaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jbmF2LWRyb3Bkb3duIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jbmF2IHtcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNuYXYgaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jbmF2IHVsPmxpIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI25hdiBidXR0b24uZGVsZXRlLWJ0biB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMC4yZW0gMC4zZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbn1cXG5cXG4jbmF2IHVsPmxpLmFjdGl2ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbiNhZGQtcHJvamVjdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNhZGQtcHJvamVjdC1mb3JtPioge1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0+aW5wdXQge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIC0xO1xcbiAgICBwYWRkaW5nOiAycHggMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxY2g7XFxufVxcblxcbiNhZGQtcHJvamVjdC1mb3JtPmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuI2NhbmNlbC1wcm9qZWN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogY2xhbXAoMXJlbSwgNXZ3LCAzcmVtKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgLyAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI21haW4gLnByb2plY3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcj4ucHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uaW5wdXQtZ3JvdXAtZGVzY3JpcHRpb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5pbnB1dC1ncm91cC1kZXNjcmlwdGlvbiAucHJvbXB0IHtcXG4gICAgY29sb3I6IHZhcigtLWZhZGUtY29sb3IpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLmlucHV0LWdyb3VwLWRlc2NyaXB0aW9uIC5pbnB1dC1kZXNjcmlwdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTBjaDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5pbnB1dC1ncm91cC1kZXNjcmlwdGlvbiBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLmlucHV0LWdyb3VwLWRlc2NyaXB0aW9uIC5zYXZlLWRlc2NyaXB0aW9uLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLmlucHV0LWdyb3VwLWRlc2NyaXB0aW9uIC5jYW5jZWwtZGVzY3JpcHRpb24tYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbiN0b2RvLWxpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgZ2FwOiAxLjJlbTtcXG59XFxuXFxuLnRvZG97XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1c3RvbS13aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDEuM2VtIDFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIDFmciBhdXRvIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMWNoO1xcbn1cXG5cXG4udG9kby1kdWVEYXRle1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZS1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi50b2RvLWNoZWNrYm94e1xcbiAgICB3aWR0aDogMS41ZW07XFxuICAgIGhlaWdodDogMS41ZW07XFxufVxcblxcbiNwYWdlLWZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1jb2xvcik7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XFxuICAgICNwYWdlLWhlYWRlciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjbmF2LWRyb3Bkb3duIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI3BhZ2UtbWFpbiB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMTcuNXJlbSAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJuYXYgbWFpblxcXCI7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0lBR0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixnQ0FBZ0M7UUFDaEM7c0JBQ2M7SUFDbEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0taGVhZGVyLWNvbG9yOiAjMUYzNTQxO1xcbiAgICAtLWZvb3Rlci1jb2xvcjogIzUyODlCNTtcXG4gICAgLS1iZy1jb2xvcjogI0FGRDhGMjtcXG4gICAgLS1uYXYtY29sb3I6ICNjZWU2ZjU7XFxuICAgIC0tY3VzdG9tLXdoaXRlOiAjRURGMkYzO1xcbiAgICAtLWZhZGUtY29sb3I6ICM1MDUwNTA7XFxuICAgIC0tcmVkOiAjZmY2ZTZlO1xcbiAgICAtLWdyZWVuOiAjYmFkYTU1O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxubGk6Om1hcmtlciB7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbi5pY29uIHtcXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgaGVpZ2h0OiAxZW07XFxufVxcblxcbi5kaXNwbGF5LW5vbmUge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi50ZXh0LWJvbGQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3BhZ2UtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiA0cmVtIDFmciAycmVtIC8gMWZyO1xcbn1cXG5cXG4jcGFnZS1oZWFkZXIsXFxuI3BhZ2UtZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1jdXN0b20td2hpdGUpO1xcbn1cXG5cXG4jcGFnZS1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNuYXYtZHJvcGRvd24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNuYXYge1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuI25hdiBoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbiNuYXYgdWw+bGkge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jbmF2IGJ1dHRvbi5kZWxldGUtYnRuIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjNlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxufVxcblxcbiNuYXYgdWw+bGkuYWN0aXZlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0+KiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtZm9ybT5pbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gLTE7XFxuICAgIHBhZGRpbmc6IDJweCAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFjaDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0+YnV0dG9uIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4jY2FuY2VsLXByb2plY3QtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiBjbGFtcCgxcmVtLCA1dncsIDNyZW0pO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciAvIDFmcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jbWFpbiAucHJvamVjdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyPi5wcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5pbnB1dC1ncm91cC1kZXNjcmlwdGlvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmlucHV0LWdyb3VwLWRlc2NyaXB0aW9uIC5wcm9tcHQge1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZS1jb2xvcik7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG5cXG4uaW5wdXQtZ3JvdXAtZGVzY3JpcHRpb24gLmlucHV0LWRlc2NyaXB0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMGNoO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLmlucHV0LWdyb3VwLWRlc2NyaXB0aW9uIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uaW5wdXQtZ3JvdXAtZGVzY3JpcHRpb24gLnNhdmUtZGVzY3JpcHRpb24tYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4uaW5wdXQtZ3JvdXAtZGVzY3JpcHRpb24gLmNhbmNlbC1kZXNjcmlwdGlvbi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuI3RvZG8tbGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDEuMmVtO1xcbn1cXG5cXG4udG9kb3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VzdG9tLXdoaXRlKTtcXG4gICAgcGFkZGluZzogMS4zZW0gMWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gMWZyIGF1dG8gYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxY2g7XFxufVxcblxcbi50b2RvLWR1ZURhdGV7XFxuICAgIGNvbG9yOiB2YXIoLS1mYWRlLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuLnRvZG8tY2hlY2tib3h7XFxuICAgIHdpZHRoOiAxLjVlbTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG59XFxuXFxuI3BhZ2UtZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWNvbG9yKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjUwcHgpIHtcXG4gICAgI3BhZ2UtaGVhZGVyIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNuYXYtZHJvcGRvd24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAjcGFnZS1tYWluIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxNy41cmVtIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgXFxcIm5hdiBtYWluXFxcIjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiKGZ1bmN0aW9uKHNjb3BlKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHB1YnN1Ykluc3RhbmNlID0gbnVsbDtcblx0dmFyIHB1YnN1YkNvbmZpZyA9IG51bGw7XG5cblx0aWYodHlwZW9mIHB1YnN1YiA9PT0gJ29iamVjdCcpIHtcblx0XHRwdWJzdWJDb25maWcgPSBwdWJzdWI7XG5cdC8vbm9kZS5qcyBjb25maWcgZnJvbSBnbG9iYWxcblx0fSBlbHNlIGlmKHR5cGVvZiBnbG9iYWwgPT09ICdvYmplY3QnICYmIHR5cGVvZiBnbG9iYWwucHVic3ViQ29uZmlnID09PSAnb2JqZWN0Jykge1xuXHRcdHB1YnN1YkNvbmZpZyA9IGdsb2JhbC5wdWJzdWJDb25maWc7XG5cdH1cblxuXHRmdW5jdGlvbiBQdWJzdWIoY29uZmlnKSB7XG5cdFx0dmFyIF9ldmVudE9iamVjdCA9IHt9O1xuXHRcdHZhciBvcHRpb25zID0ge1xuXHRcdFx0c2VwYXJhdG9yIDogKGNvbmZpZyAmJiBjb25maWcuc2VwYXJhdG9yKSA/IGNvbmZpZy5zZXBhcmF0b3IgOiAnLycsXG5cdFx0XHRyZWN1cnJlbnQgOiAoY29uZmlnICYmIHR5cGVvZiBjb25maWcucmVjdXJyZW50ID09PSAnYm9vbGVhbicpID8gY29uZmlnLnJlY3VycmVudCA6IChmYWxzZSksXG5cdFx0XHRkZXB0aCAgICAgOiAoY29uZmlnICYmIHR5cGVvZiBjb25maWcuZGVwdGggPT09ICdudW1iZXInKSA/IGNvbmZpZy5kZXB0aCA6IG51bGwsXG5cdFx0XHRhc3luYyAgICAgOiAoY29uZmlnICYmIHR5cGVvZiBjb25maWcuYXN5bmMgPT09ICdib29sZWFuJykgPyBjb25maWcuYXN5bmMgOiAoZmFsc2UpLFxuXHRcdFx0Y29udGV4dCAgIDogKGNvbmZpZyAmJiBjb25maWcuY29udGV4dCkgPyBjb25maWcuY29udGV4dCA6IG51bGwsXG5cdFx0XHRsb2cgICAgICAgOiAoY29uZmlnICYmIGNvbmZpZy5sb2cpID8gY29uZmlnLmxvZyA6IChmYWxzZSlcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gZm9yRWFjaChkYXRhQXJyYXksIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaSA9IDAsXG5cdFx0XHRcdGFycmF5TGVuZ3RoID0gZGF0YUFycmF5Lmxlbmd0aDtcblxuXHRcdFx0Zm9yKGkgPSAwOyBpIDwgYXJyYXlMZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjYWxsYmFjayhpLCBkYXRhQXJyYXlbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuICAgICAgICBmdW5jdGlvbiBpc0FycmF5IChvYmopIHtcblx0XHRcdHJldHVybiBBcnJheS5pc0FycmF5ID8gQXJyYXkuaXNBcnJheShvYmopIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2soc3Vic2NyaXB0aW9ucywgYXJncywgYXN5bmMpIHtcblx0XHRcdGFzeW5jID0gKHR5cGVvZiBhc3luYyA9PT0gJ2Jvb2xlYW4nKSA/IGFzeW5jIDogb3B0aW9ucy5hc3luYztcblx0XHRcdGlmKCFzdWJzY3JpcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNsb25lIGFycmF5IC0gY2FsbGJhY2tzIGNhbiB1bnN1YnNjcmliZSBvdGhlciBzdWJzY3JpcHRpb25zXG5cdFx0XHQvLyByZWR1Y2VzIGEgbG90IHBlcmZvcm1hbmNlIGJ1dCBpcyBzYWZlXG5cdFx0XHR2YXIgZXhlY3V0ZWRTdWJzY3JpcHRpb25zID0gc3Vic2NyaXB0aW9ucy5zbGljZSgpO1xuXG5cdFx0XHRmb3JFYWNoKGV4ZWN1dGVkU3Vic2NyaXB0aW9ucywgZnVuY3Rpb24oc3Vic2NyaXB0aW9uSWQsIHN1YnNjcmlwdGlvbikge1xuXHRcdFx0XHRpZih0eXBlb2Ygc3Vic2NyaXB0aW9uID09PSAnb2JqZWN0JyAmJiBleGVjdXRlZFN1YnNjcmlwdGlvbnMuaGFzT3duUHJvcGVydHkoc3Vic2NyaXB0aW9uSWQpKSB7XG5cdFx0XHRcdFx0aWYoYXN5bmMpIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHN1YnNjcmlwdGlvbi5jYWxsYmFjay5hcHBseShzdWJzY3JpcHRpb24uY29udGV4dCwgYXJncyk7XG5cdFx0XHRcdFx0XHR9LCA0KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3Vic2NyaXB0aW9uLmNhbGxiYWNrLmFwcGx5KHN1YnNjcmlwdGlvbi5jb250ZXh0LCBhcmdzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGV4ZWN1dGVQdWJsaXNoV2lsZGNhcmQobnNPYmplY3QsIGFyZ3MpIHtcblx0XHRcdHZhciBuc0VsZW1lbnQ7XG5cdFx0XHRmb3IobnNFbGVtZW50IGluIG5zT2JqZWN0KSB7XG5cdFx0XHRcdGlmKG5zRWxlbWVudFswXSAhPT0gJ18nICYmIG5zT2JqZWN0Lmhhc093blByb3BlcnR5KG5zRWxlbWVudCkpIHtcblx0XHRcdFx0XHRleGVjdXRlQ2FsbGJhY2sobnNPYmplY3RbbnNFbGVtZW50XS5fZXZlbnRzLCBhcmdzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHB1Ymxpc2gobnNPYmplY3QsIGFyZ3MsIHBhcnRzLCBwYXJhbXMpIHtcblx0XHRcdC8vIHdvcmsgb24gY29weSAtIG5vdCBvbiByZWZlcmVuY2Vcblx0XHRcdHBhcnRzID0gcGFydHMuc2xpY2UoKTtcblxuXHRcdFx0dmFyIGlQYXJ0ID0gcGFydHMuc2hpZnQoKTtcblx0XHRcdHZhciBkZXB0aCA9IHBhcmFtcy5kZXB0aDtcblx0XHRcdHZhciBhc3luYyA9IHBhcmFtcy5hc3luYztcblx0XHRcdHZhciBwYXJ0c0xlbmd0aCA9IHBhcmFtcy5wYXJ0c0xlbmd0aDtcblx0XHRcdHZhciByZWN1cnJlbnQgPSBwYXJhbXMucmVjdXJyZW50O1xuXHRcdFx0dmFyIHBhcnROdW1iZXIgPSAocGFydHNMZW5ndGggLSBwYXJ0cy5sZW5ndGgpO1xuXG5cdFx0XHQvLyBwYXJ0cyBpcyBlbXB0eVxuXHRcdFx0aWYoIWlQYXJ0KSB7XG5cdFx0XHRcdGV4ZWN1dGVDYWxsYmFjayhuc09iamVjdC5fZXZlbnRzLCBhcmdzLCBhc3luYyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGhhbmRsZSBzdWJzY3JpYmUgd2lsZGNhcmRcblx0XHRcdGlmKHR5cGVvZiBuc09iamVjdFsnKiddICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRwdWJsaXNoKG5zT2JqZWN0WycqJ10sIGFyZ3MsIHBhcnRzLCBwYXJhbXMpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBoYW5kbGUgcHVibGlzaCB3aWxkY2FyZFxuXHRcdFx0aWYoaVBhcnQgPT09ICcqJykge1xuXHRcdFx0XHRleGVjdXRlUHVibGlzaFdpbGRjYXJkKG5zT2JqZWN0LCBhcmdzLCBhc3luYyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIG5vIG5hbWVzcGFjZSA9IGxlYXZlIHB1Ymxpc2hcblx0XHRcdGlmKHR5cGVvZiBuc09iamVjdFtpUGFydF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0aWYocGFyYW1zLmxvZykge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybignVGhlcmUgaXMgbm8gJyArIHBhcmFtcy5uc1N0cmluZyArICcgc3Vic2NyaXB0aW9uJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRuc09iamVjdCA9IG5zT2JqZWN0W2lQYXJ0XTtcblxuXHRcdFx0aWYocmVjdXJyZW50ID09PSB0cnVlICYmIHR5cGVvZiBkZXB0aCAhPT0gJ251bWJlcicpIHsgLy9kZXB0aCBpcyBub3QgZGVmaW5lZFxuXHRcdFx0XHRleGVjdXRlQ2FsbGJhY2sobnNPYmplY3QuX2V2ZW50cywgYXJncywgYXN5bmMpO1xuXHRcdFx0XHRpZihwYXJ0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZihyZWN1cnJlbnQgPT09IHRydWUgJiYgdHlwZW9mIGRlcHRoID09PSAnbnVtYmVyJyAmJiBwYXJ0TnVtYmVyID49IChwYXJ0c0xlbmd0aCAtIGRlcHRoKSkgeyAvL2lmIGRlcHRoIGlzIGRlZmluZWRcblx0XHRcdFx0ZXhlY3V0ZUNhbGxiYWNrKG5zT2JqZWN0Ll9ldmVudHMsIGFyZ3MsIGFzeW5jKTtcblx0XHRcdH1cblxuXHRcdFx0cHVibGlzaChuc09iamVjdCwgYXJncywgcGFydHMsIHBhcmFtcyk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZXhlY3V0ZVN1YnNjcmliZVdpbGRjYXJkKG5zT2JqZWN0LCBhcmdzLCBwYXJhbXMpIHtcblx0XHRcdHZhciBwYXJ0cyA9IHBhcmFtcy5wYXJ0cztcblx0XHRcdHZhciBhc3luYyA9IHBhcmFtcy5hc3luYztcblx0XHRcdHZhciBuZXh0UGFydCA9IG51bGw7XG5cblx0XHRcdGlmKHBhcnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRleGVjdXRlQ2FsbGJhY2sobnNPYmplY3QuX2V2ZW50cywgYXJncywgYXN5bmMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bmV4dFBhcnQgPSBwYXJ0cy5zaGlmdCgpO1xuXG5cdFx0XHRcdGlmKG5zT2JqZWN0W25leHRQYXJ0XSkge1xuXHRcdFx0XHRcdGV4ZWN1dGVTdWJzY3JpYmVXaWxkY2FyZChuc09iamVjdFtuZXh0UGFydF0sIGFyZ3MsIHtcblx0XHRcdFx0XHRcdHBhcnRzIDogcGFydHMsXG5cdFx0XHRcdFx0XHRhc3luYyA6IGFzeW5jLFxuXHRcdFx0XHRcdFx0bnNTdHJpbmcgOiBwYXJhbXMubnNTdHJpbmdcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHN1YnNjcmliZShuc1N0cmluZywgY2FsbGJhY2ssIHBhcmFtcykge1xuXHRcdFx0dmFyIHBhcnRzID0gbnNTdHJpbmcuc3BsaXQob3B0aW9ucy5zZXBhcmF0b3IpLFxuXHRcdFx0XHRuc09iamVjdCwgLy9OYW1lc3BhY2Ugb2JqZWN0IHRvIHdoaWNoIHdlIGF0dGFjaCBldmVudFxuXHRcdFx0XHRjb250ZXh0ID0gKHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zLmNvbnRleHQgIT09ICd1bmRlZmluZWQnKSA/IHBhcmFtcy5jb250ZXh0IDogb3B0aW9ucy5jb250ZXh0LFxuXHRcdFx0XHRldmVudE9iamVjdCA9IG51bGwsXG5cdFx0XHRcdGkgPSAwO1xuXG5cdFx0XHRpZighY29udGV4dCkge1xuXHRcdFx0XHRjb250ZXh0ID0gY2FsbGJhY2s7XG5cdFx0XHR9XG5cblx0XHRcdC8vSXRlcmF0aW5nIHRocm91Z2ggX2V2ZW50T2JqZWN0IHRvIGZpbmQgcHJvcGVyIG5zT2JqZWN0XG5cdFx0XHRuc09iamVjdCA9IF9ldmVudE9iamVjdDtcblx0XHRcdGZvcihpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdGlmKHR5cGVvZiBuc09iamVjdFtwYXJ0c1tpXV0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRuc09iamVjdFtwYXJ0c1tpXV0gPSB7fTtcblx0XHRcdFx0XHRuc09iamVjdFtwYXJ0c1tpXV0uX2V2ZW50cyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5zT2JqZWN0ID0gbnNPYmplY3RbcGFydHNbaV1dO1xuXHRcdFx0fVxuXG5cdFx0XHRldmVudE9iamVjdCA9IHtcblx0XHRcdFx0Y2FsbGJhY2tcdDogY2FsbGJhY2ssXG5cdFx0XHRcdGNvbnRleHRcdFx0OiBjb250ZXh0IC8vIFwidGhpc1wiIHBhcmFtZXRlciBpbiBleGVjdXRlZCBmdW5jdGlvblxuXHRcdFx0fTtcblxuXHRcdFx0bnNPYmplY3QuX2V2ZW50cy5wdXNoKGV2ZW50T2JqZWN0KTtcblx0XHRcdHJldHVybiB7IG5hbWVzcGFjZSA6IHBhcnRzLmpvaW4ob3B0aW9ucy5zZXBhcmF0b3IpLFxuXHRcdFx0XHRldmVudCA6IGV2ZW50T2JqZWN0IH07XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdW5zdWJzY3JpYmUoc3Vic2NyaWJlT2JqZWN0KSB7XG5cdFx0XHRpZihzdWJzY3JpYmVPYmplY3QgPT09IG51bGwgfHwgdHlwZW9mIHN1YnNjcmliZU9iamVjdCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHR2YXIgbnNTdHJpbmcgPSBzdWJzY3JpYmVPYmplY3QubmFtZXNwYWNlLFxuXHRcdFx0XHRldmVudE9iamVjdCA9IHN1YnNjcmliZU9iamVjdC5ldmVudCxcblx0XHRcdFx0cGFydHMgPSBuc1N0cmluZy5zcGxpdChvcHRpb25zLnNlcGFyYXRvciksXG5cdFx0XHRcdG5zT2JqZWN0LFxuXHRcdFx0XHRpID0gMDtcblxuXHRcdFx0Ly9JdGVyYXRpbmcgdGhyb3VnaCBfZXZlbnRPYmplY3QgdG8gZmluZCBwcm9wZXIgbnNPYmplY3Rcblx0XHRcdG5zT2JqZWN0ID0gX2V2ZW50T2JqZWN0O1xuXHRcdFx0Zm9yKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0aWYodHlwZW9mIG5zT2JqZWN0W3BhcnRzW2ldXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdGlmKG9wdGlvbnMubG9nKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdUaGVyZSBpcyBubyAnICsgbnNTdHJpbmcgKyAnIHN1YnNjcmlwdGlvbicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRuc09iamVjdCA9IG5zT2JqZWN0W3BhcnRzW2ldXTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yRWFjaChuc09iamVjdC5fZXZlbnRzLCBmdW5jdGlvbihldmVudElkKSB7XG5cdFx0XHRcdGlmKG5zT2JqZWN0Ll9ldmVudHNbZXZlbnRJZF0gPT09IGV2ZW50T2JqZWN0KSB7XG5cdFx0XHRcdFx0bnNPYmplY3QuX2V2ZW50cy5zcGxpY2UoZXZlbnRJZCwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFB1Ymxpc2ggZXZlbnRcblx0XHRcdCAqIEBwYXJhbSBuc1N0cmluZyBzdHJpbmcgbmFtZXNwYWNlIHN0cmluZyBzcGxpdGVkIGJ5IGRvdHNcblx0XHRcdCAqIEBwYXJhbSBhcmdzIGFycmF5IG9mIGFyZ3VtZW50cyBnaXZlbiB0byBjYWxsYmFja3Ncblx0XHRcdCAqIEBwYXJhbSBwYXJhbXMgcGFyYW1hdGVycyBwb3NzaWJsZTpcblx0XHRcdCAqICAgICAgICBAcGFyYW0gcmVjdXJyZW50IGJvb2wgc2hvdWxkIGV4ZWN1dGlvbiBiZSBidWJibGVkIHRocm91Z2h0IG5hbWVzcGFjZVxuXHRcdFx0ICogICAgICAgIEBwYXJhbSBkZXB0aCBpbnRlZ2VyIGhvdyBtYW55IG5hbWVzcGFjZXMgc2VwYXJhdGVkIGJ5IGRvdHMgd2lsbCBiZSBleGVjdXRlZFxuXHRcdFx0ICovXG5cdFx0XHRwdWJsaXNoIDogZnVuY3Rpb24obnNTdHJpbmcsIGFyZ3MsIHBhcmFtcykge1xuXHRcdFx0XHR2YXIgcGFydHMgPSBuc1N0cmluZy5zcGxpdChvcHRpb25zLnNlcGFyYXRvciksXG5cdFx0XHRcdFx0cmVjdXJyZW50ID0gKHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnICYmIHBhcmFtcy5yZWN1cnJlbnQpID8gcGFyYW1zLnJlY3VycmVudCA6IG9wdGlvbnMucmVjdXJyZW50LCAvLyBidWJibGVzIGV2ZW50IHRocm91Z2h0IG5hbWVzcGFjZSBpZiB0cnVlXG5cdFx0XHRcdFx0ZGVwdGggPSAodHlwZW9mIHBhcmFtcyA9PT0gJ29iamVjdCcgJiYgcGFyYW1zLmRlcHRoKSA/IHBhcmFtcy5kZXB0aCA6IG9wdGlvbnMuZGVwdGgsXG5cdFx0XHRcdFx0YXN5bmMgPSAodHlwZW9mIHBhcmFtcyA9PT0gJ29iamVjdCcgJiYgcGFyYW1zLmFzeW5jKSA/IHBhcmFtcy5hc3luYyA6IG9wdGlvbnMuYXN5bmMsXG5cdFx0XHRcdFx0cGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cblx0XHRcdFx0aWYoIXBhcnRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGlmKG9wdGlvbnMubG9nKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdXcm9uZyBuYW1lc3BhY2UgcHJvdmlkZWQgJyArIG5zU3RyaW5nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cHVibGlzaChfZXZlbnRPYmplY3QsIGFyZ3MsIHBhcnRzLCB7XG5cdFx0XHRcdFx0cmVjdXJyZW50IDogcmVjdXJyZW50LFxuXHRcdFx0XHRcdGRlcHRoIDogZGVwdGgsXG5cdFx0XHRcdFx0YXN5bmMgOiBhc3luYyxcblx0XHRcdFx0XHRwYXJ0cyA6IHBhcnRzLFxuXHRcdFx0XHRcdG5zU3RyaW5nIDogbnNTdHJpbmcsXG5cdFx0XHRcdFx0cGFydHNMZW5ndGggOiBwYXJ0c0xlbmd0aFxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIFN1YnNjcmliZSBldmVudFxuXHRcdFx0ICogQHBhcmFtIG5zU3RyaW5nIHN0cmluZyBuYW1lc3BhY2Ugc3RyaW5nIHNwbGl0ZWQgYnkgZG90c1xuXHRcdFx0ICogQHBhcmFtIGNhbGxiYWNrIGZ1bmN0aW9uIGZ1bmN0aW9uIGV4ZWN1dGVkIGFmdGVyIHB1Ymxpc2hpbmcgZXZlbnRcblx0XHRcdCAqIEBwYXJhbSBwYXJhbXMgZ2l2ZW4gcGFyYW1zXG5cdFx0XHQgKlx0XHRAcGFyYW0gY29udGV4dCBvYmplY3Qvbm90aGluZyBPcHRpb25hbCBvYmplY3Qgd2hpY2ggd2lsbCBiZSB1c2VkIGFzIFwidGhpc1wiIGluIGNhbGxiYWNrXG5cdFx0XHQgKi9cblx0XHRcdHN1YnNjcmliZSA6IGZ1bmN0aW9uKG5zU3RyaW5nLCBjYWxsYmFjaywgcGFyYW1zKSB7XG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcyxcblx0XHRcdFx0XHRzdWJzY3JpcHRpb25zID0gW107XG5cblx0XHRcdFx0Ly8gYXJyYXkgb2YgY2FsbGJhY2tzIC0gbXVsdGlwbGUgc3Vic2NyaXB0aW9uXG5cdFx0XHRcdGlmKGlzQXJyYXkoY2FsbGJhY2spKSB7XG5cdFx0XHRcdFx0Zm9yRWFjaChjYWxsYmFjaywgZnVuY3Rpb24obnVtYmVyKSB7XG5cdFx0XHRcdFx0XHR2YXIgb25lQ2FsbGJhY2sgPSBjYWxsYmFja1tudW1iZXJdO1xuXG5cdFx0XHRcdFx0XHRzdWJzY3JpcHRpb25zID1cdHN1YnNjcmlwdGlvbnMuY29uY2F0KHNlbGYuc3Vic2NyaWJlKG5zU3RyaW5nLCBvbmVDYWxsYmFjaywgcGFyYW1zKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIGFycmF5IG9mIG5hbWVzcGFjZXMgLSBtdWx0aXBsZSBzdWJzY3JpcHRpb25cblx0XHRcdFx0fSBlbHNlIGlmKGlzQXJyYXkobnNTdHJpbmcpKSB7XG5cdFx0XHRcdFx0Zm9yRWFjaChuc1N0cmluZywgZnVuY3Rpb24obnVtYmVyKSB7XG5cdFx0XHRcdFx0XHR2YXIgbmFtZXNwYWNlID0gbnNTdHJpbmdbbnVtYmVyXTtcblxuXHRcdFx0XHRcdFx0c3Vic2NyaXB0aW9ucyA9XHRzdWJzY3JpcHRpb25zLmNvbmNhdChzZWxmLnN1YnNjcmliZShuYW1lc3BhY2UsIGNhbGxiYWNrLCBwYXJhbXMpKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gc3Vic2NyaWJlLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHN1YnNjcmlwdGlvbnM7XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBzdWJzY3JpYmVPbmNlIGV2ZW50IC0gc3Vic2NyaWJlIG9uY2UgdG8gc29tZSBldmVudCwgdGhlbiB1bnN1YnNjcmliZSBpbW1hZGlhdGVseVxuXHRcdFx0ICogQHBhcmFtIG5zU3RyaW5nIHN0cmluZyBuYW1lc3BhY2Ugc3RyaW5nIHNwbGl0ZWQgYnkgZG90c1xuXHRcdFx0ICogQHBhcmFtIGNhbGxiYWNrIGZ1bmN0aW9uIGZ1bmN0aW9uIGV4ZWN1dGVkIGFmdGVyIHB1Ymxpc2hpbmcgZXZlbnRcblx0XHRcdCAqIEBwYXJhbSBwYXJhbXMgZ2l2ZW4gcGFyYW1zXG5cdFx0XHQgKlx0XHRAcGFyYW0gY29udGV4dCBvYmplY3Qvbm90aGluZyBPcHRpb25hbCBvYmplY3Qgd2hpY2ggd2lsbCBiZSB1c2VkIGFzIFwidGhpc1wiIGluIGNhbGxiYWNrXG5cdFx0XHQgKi9cblx0XHRcdHN1YnNjcmliZU9uY2UgOiBmdW5jdGlvbihuc1N0cmluZywgY2FsbGJhY2ssIHBhcmFtcykge1xuXHRcdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdFx0c3Vic2NyaXB0aW9uID0gbnVsbDtcblxuXHRcdFx0XHRmdW5jdGlvbiBzdWJzY3JpcHRpb25DYWxsYmFjaygpIHtcblx0XHRcdFx0XHR2YXIgY29udGV4dCA9IHRoaXM7XG5cblx0XHRcdFx0XHRjYWxsYmFjay5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuXHRcdFx0XHRcdHNlbGYudW5zdWJzY3JpYmUoc3Vic2NyaXB0aW9uKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN1YnNjcmlwdGlvbiA9IHNlbGYuc3Vic2NyaWJlKG5zU3RyaW5nLCBzdWJzY3JpcHRpb25DYWxsYmFjaywgcGFyYW1zKTtcblx0XHRcdFx0cmV0dXJuIHN1YnNjcmlwdGlvbjtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIFVuc3Vic2NyaWJlIGZyb20gZ2l2ZW4gc3Vic2NyaXB0aW9uXG5cdFx0XHQgKiBAcGFyYW0gc3Vic2NyaWJlT2JqZWN0IHN1YnNjcmlwdGlvbiBvYmplY3QgZ2l2ZW4gb24gc3Vic2NyaWJlIChyZXR1cm5lZCBmcm9tIHN1YnNjcmlwdGlvbilcblx0XHRcdCAqL1xuXHRcdFx0dW5zdWJzY3JpYmUgOiBmdW5jdGlvbihzdWJzY3JpYmVPYmplY3QpIHtcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0XHRcdC8vaWYgd2UgaGF2ZSBhcnJheSBvZiBjYWxsYmFja3MgLSBtdWx0aXBsZSBzdWJzY3JpcHRpb25cblx0XHRcdFx0aWYoaXNBcnJheShzdWJzY3JpYmVPYmplY3QpKSB7XG5cdFx0XHRcdFx0Zm9yRWFjaChzdWJzY3JpYmVPYmplY3QsIGZ1bmN0aW9uKG51bWJlcikge1xuXHRcdFx0XHRcdFx0dmFyIG9uZVN1YnNjcmlidGlvbiA9IHN1YnNjcmliZU9iamVjdFtudW1iZXJdO1xuXG5cdFx0XHRcdFx0XHR1bnN1YnNjcmliZS5hcHBseShzZWxmLCBbb25lU3Vic2NyaWJ0aW9uXSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dW5zdWJzY3JpYmUuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogbmV3SW5zdGFuY2UgLSBtYWtlcyBuZXcgaW5zdGFuY2Ugb2YgcHVic3ViIG9iamVjdCB3aXRoIGl0cyBvd24gY29uZmlnXG5cdFx0XHQgKiBAcGFyYW0gcGFyYW1zIGluc3RhbmNlIGNvbmZpZ3VyYXRpb25cblx0XHRcdCAqICAgICAgICBAcGFyYW0gc2VwYXJhdG9yIHNlcGFyYXRvciAoZGVmYXVsdCBpcyBcIi9cIilcblx0XHRcdCAqICAgICAgICBAcGFyYW0gcmVjdXJyZW50IHNob3VsZCBwdWJsaXNoIGV2ZW50cyBiZSBidWJibGVkIHRocm91Z2ggbmFtZXNwYWNlXG5cdFx0XHQgKiAgICAgICAgQHBhcmFtIGFzeW5jIHNob3VsZCBwdWJsaXNoIGV2ZW50cyBiZSBhc3luY2hyb25vdXMgLSBub3QgYmxvY2tpbmcgZnVuY3Rpb24gZXhlY3V0aW9uXG5cdFx0XHQgKiAgICAgICAgQHBhcmFtIGxvZyBjb25zb2xlLndhcm4vZXJyb3IgZXZlcnkgcHJvYmxlbVxuXHRcdFx0ICovXG5cdFx0XHRuZXdJbnN0YW5jZSA6IGZ1bmN0aW9uKHBhcmFtcykge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFB1YnN1YihwYXJhbXMpO1xuXHRcdFx0fVxuXHRcdH07IC8vcmV0dXJuIGJsb2NrXG5cdH1cblx0cHVic3ViSW5zdGFuY2UgPSBuZXcgUHVic3ViKHB1YnN1YkNvbmZpZyk7XG5cblx0Ly9pZiBzYmQncyB1c2luZyByZXF1aXJlanMgbGlicmFyeSB0byBsb2FkIHB1YnN1Yi5qc1xuXHRpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0ZGVmaW5lKHB1YnN1Ykluc3RhbmNlKTtcblx0fVxuXG5cdC8vbm9kZS5qc1xuXHRpZih0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gcHVic3ViSW5zdGFuY2U7XG5cdH1cblxuXHRpZih0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xuXHRcdHdpbmRvdy5wdWJzdWIgPSBwdWJzdWJJbnN0YW5jZTtcblx0XHRpZih3aW5kb3cgIT09IHNjb3BlKSB7XG5cdFx0XHRzY29wZS5wdWJzdWIgPSBwdWJzdWJJbnN0YW5jZTtcblx0XHR9XG5cdH1cbn0pKHRoaXMpO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwdWJzdWIgZnJvbSAncHVic3ViLmpzJztcbmltcG9ydCBOYXZDb250cm9sIGZyb20gJy4vTmF2Q29udHJvbC5qcyc7XG5pbXBvcnQgTWVtb3J5IGZyb20gJy4vTWVtb3J5LmpzJztcbmltcG9ydCBNYWluQ29udHJvbCBmcm9tICcuL01haW5Db250cm9sLmpzJztcblxuY29uc3QgRXZlbnRBZ2dyZWdhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB1cGRhdGVOYXZUb2tlbiA9IHB1YnN1Yi5zdWJzY3JpYmUoXG4gICAgICAgIFwiUHJvamVjdEFkZGVkXCIsXG4gICAgICAgIE5hdkNvbnRyb2wudXBkYXRlTmF2U2VjdGlvbi5iaW5kKE5hdkNvbnRyb2wsIE1lbW9yeSkpO1xuXG4gICAgY29uc3QgZGVsZXRlTmF2VG9rZW4gPSBwdWJzdWIuc3Vic2NyaWJlKFxuICAgICAgICBcIlByb2plY3REZWxldGVkXCIsXG4gICAgICAgIE5hdkNvbnRyb2wudXBkYXRlTmF2U2VjdGlvbi5iaW5kKE5hdkNvbnRyb2wsIE1lbW9yeSlcbiAgICApXG5cbiAgICBjb25zdCB0b2dnbGVCb29rbWFya2VkVG9rZW4gPSBwdWJzdWIuc3Vic2NyaWJlKFxuICAgICAgICBcIlRvZ2dsZUJvb2ttYXJrZWRcIixcbiAgICAgICAgTmF2Q29udHJvbC51cGRhdGVOYXZTZWN0aW9uLmJpbmQoTmF2Q29udHJvbCwgTWVtb3J5KVxuICAgIClcblxuICAgIGNvbnN0IHNldEFjdGl2ZVByb2plY3RUb2tlbiA9IHB1YnN1Yi5zdWJzY3JpYmUoXG4gICAgICAgIFwiU2V0QWN0aXZlUHJvamVjdFwiLFxuICAgICAgICAoaWQpID0+IE1haW5Db250cm9sLnVwZGF0ZU1haW4oTWVtb3J5LmdldFByb2plY3RJZChpZCkpXG4gICAgKVxuXG4gICAgY29uc3QgYWRkUHJvamVjdERlc2NUb2tlbiA9IHB1YnN1Yi5zdWJzY3JpYmUoXG4gICAgICAgIFwiQWRkUHJvamVjdERlc2NcIixcbiAgICAgICAgKGlkLCBkZXNjKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gTWVtb3J5LmdldFByb2plY3RJZChpZCk7XG4gICAgICAgICAgICBwcm9qZWN0LnNldERlc2NyaXB0aW9uKGRlc2MpO1xuICAgICAgICAgICAgTWFpbkNvbnRyb2wudXBkYXRlTWFpbihwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIClcblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEFnZ3JlZ2F0b3IiLCJjb25zdCBJY29uID0gKHNyYykgPT4ge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gICAgaWNvbi5zcmMgPSBzcmM7XG5cbiAgICByZXR1cm4gaWNvblxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uIiwiaW1wb3J0IHB1YnN1YiBmcm9tICdwdWJzdWIuanMnO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEhlYWRlciwgY3JlYXRlVG9kb3MgfSBmcm9tICcuL01haW5WaWV3LmpzJztcbmltcG9ydCB7IGRpc3BsYXlEZWxldGUgfSBmcm9tICcuL1V0aWxzLmpzJztcblxuY29uc3QgTWFpbkNvbnRyb2wgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHVwZGF0ZU1haW4gPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICAgICAgICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEhlYWRlcihwcm9qZWN0KSk7XG4gICAgICAgIGlmIChwcm9qZWN0LnRvZG9MaXN0KSB7XG4gICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9zKHByb2plY3QpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNhdmVEZXNjcmlwdGlvbiA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCJdJykudmFsdWU7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwiQWRkUHJvamVjdERlc2NcIiwgW3BhcnNlSW50KHByb2plY3RJZCksIGRlc2NyaXB0aW9uXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlTWFpbixcbiAgICAgICAgc2F2ZURlc2NyaXB0aW9uXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRyb2wiLCJpbXBvcnQgTWFpbkNvbnRyb2wgZnJvbSBcIi4vTWFpbkNvbnRyb2wuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi9Ub2RvVmlldy5qc1wiO1xuaW1wb3J0IHsgZGlzcGxheURlbGV0ZSB9IGZyb20gXCIuL1V0aWxzLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZVRpdGxlID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgICB0aXRsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwcm9qZWN0LnRpdGxlKSk7XG4gICAgcmV0dXJuIHRpdGxlXG59XG5cbmNvbnN0IGNyZWF0ZURlc2MgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1ncm91cC1kZXNjcmlwdGlvblwiKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgY29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb24gPyBwcm9qZWN0LmRlc2NyaXB0aW9uIDogXCJcIjtcbiAgICBjb25zdCBwcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwcm9tcHQuY2xhc3NMaXN0LmFkZChcInByb21wdFwiKTtcbiAgICBwcm9tcHQudGV4dENvbnRlbnQgPSBjb250ZW50ID8gXCJFZGl0IGRlc2NyaXB0aW9uLi4uXCIgOiBcIkFkZCBhIHByb2plY3QgZGVzY3JpcHRpb24uLi5cIjtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSk7XG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocHJvbXB0KTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIHByb2plY3QuaWQpO1xuXG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgdGV4dGFyZWEubmFtZSA9IFwicHJvamVjdC1kZXNjcmlwdGlvblwiO1xuICAgIHRleHRhcmVhLnBsYWNlaG9sZGVyID0gXCJFbnRlciB5b3VyIHByb2plY3QgZGVzY3JpcHRpb24gaGVyZS5cIjtcbiAgICB0ZXh0YXJlYS52YWx1ZSA9IHByb2plY3QuZGVzY3JpcHRpb24gPyBwcm9qZWN0LmRlc2NyaXB0aW9uIDogXCJcIjtcbiAgICB0ZXh0YXJlYS5yZXF1aXJlZCA9IHRydWU7XG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZChcImlucHV0LWRlc2NyaXB0aW9uXCIpO1xuXG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc2F2ZUJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNhdmVcIikpO1xuICAgIHNhdmVCdG4udHlwZSA9IFwic3VibWl0XCI7XG4gICAgc2F2ZUJ0bi5jbGFzc0xpc3QuYWRkKFwic2F2ZS1kZXNjcmlwdGlvbi1idG5cIik7XG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNhbmNlbFwiKSk7XG4gICAgY2FuY2VsQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWRlc2NyaXB0aW9uLWJ0blwiKTtcblxuICAgIGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5RGVsZXRlLmJpbmQod2luZG93LCBpbnB1dCwgZGVzY3JpcHRpb24pKTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlEZWxldGUuYmluZCh3aW5kb3csIGRlc2NyaXB0aW9uLCBpbnB1dCkpO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgTWFpbkNvbnRyb2wuc2F2ZURlc2NyaXB0aW9uKTtcblxuICAgIGlucHV0LmFwcGVuZENoaWxkKHRleHRhcmVhKTtcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChzYXZlQnRuKTtcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICByZXR1cm4gZGl2XG59XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RIZWFkZXIgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlclwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlVGl0bGUocHJvamVjdCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlRGVzYyhwcm9qZWN0KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIGRpdlxufVxuXG5jb25zdCBjcmVhdGVUb2RvcyA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9MaXN0LmlkID0gXCJ0b2RvLWxpc3RcIjtcbiAgICBmb3IgKGxldCB0b2RvIG9mIHByb2plY3QudG9kb0xpc3QpIHtcbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kbyh0b2RvKSk7XG4gICAgfVxuICAgIHJldHVybiB0b2RvTGlzdFxufVxuXG5jb25zdCBjcmVhdGVNYWluID0gKG1lbW9yeSkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uaWQgPSBcIm1haW5cIjtcblxuICAgIGNvbnN0IGJhc2VQcm9qZWN0ID0gbWVtb3J5LmdldFByb2plY3RJZCgxKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RIZWFkZXIoYmFzZVByb2plY3QpKTtcbiAgICBpZiAoYmFzZVByb2plY3QudG9kb0xpc3QpIHtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVUb2RvcyhiYXNlUHJvamVjdCkpO1xuICAgIH1cbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTWFpbiwgY3JlYXRlUHJvamVjdEhlYWRlciwgY3JlYXRlVG9kb3MgfSIsImltcG9ydCBwdWJzdWIgZnJvbSAncHVic3ViLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdC5qcyc7XG5pbXBvcnQgeyByZW1vdmVCeUlkIH0gZnJvbSBcIi4vVXRpbHMuanNcIjtcblxuY29uc3QgTWVtb3J5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgICBsZXQgYm9va21hcmtlZFByb2plY3RzID0gW107XG5cbiAgICBjb25zdCBhZGRUb1Byb2plY3RzID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3QudHlwZSAhPT0gXCJQcm9qZWN0XCIpIHByb2plY3QgPSBQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRvQm9va21hcmtlZCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkluZGV4IG9mIGl0ZW0gbm90IGZvdW5kIGluIFByb2plY3RzIGxpc3RcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHByb2plY3RzW2luZGV4XTtcbiAgICAgICAgdGFyZ2V0LnNldEJvb2ttYXJrZWQodHJ1ZSk7XG4gICAgICAgIGJvb2ttYXJrZWRQcm9qZWN0cy5wdXNoKHRhcmdldCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlRnJvbUJvb2ttYXJrZWQgPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYm9va21hcmtlZFByb2plY3RzLmZpbmRJbmRleChcbiAgICAgICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWRcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW5kZXggb2YgaXRlbSBub3QgZm91bmQgaW4gUHJvamVjdHMgbGlzdFwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBib29rbWFya2VkUHJvamVjdHNbaW5kZXhdO1xuICAgICAgICB0YXJnZXQuc2V0Qm9va21hcmtlZChmYWxzZSk7XG4gICAgICAgIGJvb2ttYXJrZWRQcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3RJZCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICAgICAgcmVtb3ZlQnlJZChwcm9qZWN0cywgcHJvamVjdElkKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0SWQgPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0c1tpbmRleF07XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvamVjdFRva2VuID0gcHVic3ViLnN1YnNjcmliZShcIlByb2plY3RBZGRlZFwiLCBhZGRUb1Byb2plY3RzKTtcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0VG9rZW4gPSBwdWJzdWIuc3Vic2NyaWJlKFwiUHJvamVjdERlbGV0ZWRcIiwgcmVtb3ZlUHJvamVjdElkKTtcbiAgICBjb25zdCB0b2dnbGVCb29rbWFya2VkVG9rZW4gPSBwdWJzdWIuc3Vic2NyaWJlKFxuICAgICAgICBcIlRvZ2dsZUJvb2ttYXJrZWRcIixcbiAgICAgICAgKGlkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdElkKGlkKTtcbiAgICAgICAgICAgIHByb2plY3QuaXNCb29rbWFya2VkID8gcmVtb3ZlRnJvbUJvb2ttYXJrZWQoaWQpIDogYWRkVG9Cb29rbWFya2VkKGlkKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0cyxcbiAgICAgICAgYm9va21hcmtlZFByb2plY3RzLFxuICAgICAgICBhZGRUb1Byb2plY3RzLFxuICAgICAgICByZW1vdmVQcm9qZWN0SWQsXG4gICAgICAgIGFkZFRvQm9va21hcmtlZCxcbiAgICAgICAgcmVtb3ZlRnJvbUJvb2ttYXJrZWQsXG4gICAgICAgIGdldFByb2plY3RJZFxuICAgIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgTWVtb3J5IiwiaW1wb3J0IHB1YnN1YiBmcm9tICdwdWJzdWIuanMnO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdE5vZGUgfSBmcm9tICcuL05hdlZpZXcuanMnO1xuXG5jb25zdCBOYXZDb250cm9sID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY3VycmVudEFjdGl2ZSA9IDE7XG5cbiAgICBjb25zdCB1cGRhdGVBY3RpdmVOYXYgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBjdXJyZW50QWN0aXZlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgICAgICAgICBjb25zdCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXYgLmFjdGl2ZVwiKVxuICAgICAgICAgICAgcHJldi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgcHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXBkYXRlQWN0aXZlTmF2KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbmF2IFtkYXRhLWlkPVwiJHtjdXJyZW50QWN0aXZlfVwiXWApO1xuICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgbmF2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGRhdGVBY3RpdmVOYXYpO1xuICAgICAgICBwdWJzdWIucHVibGlzaChcIlNldEFjdGl2ZVByb2plY3RcIiwgW3BhcnNlSW50KGN1cnJlbnRBY3RpdmUpXSk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlQWRkUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtZm9ybVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzcGxheS1ub25lXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlQm9va21hcmtlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0UHJvamVjdElkID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcblxuICAgICAgICBwdWJzdWIucHVibGlzaChcIlRvZ2dsZUJvb2ttYXJrZWRcIiwgW3BhcnNlSW50KHRhcmdldFByb2plY3RJZCldKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVOYXYgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cInByb2plY3QtdGl0bGVcIl1gKTtcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJQcm9qZWN0QWRkZWRcIiwgW3RpdGxlLnZhbHVlXSk7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgdG9nZ2xlQWRkUHJvamVjdEZvcm0oKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVOYXZTZWN0aW9uID0gKG1lbW9yeSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzPnVsXCIpO1xuICAgICAgICBjb25zdCBib29rbWFya2VkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtYm9va21hcmtlZFwiKTtcblxuICAgICAgICBwcm9qZWN0c0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgYm9va21hcmtlZExpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIG1lbW9yeS5wcm9qZWN0cykge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5vZGUgPSBjcmVhdGVQcm9qZWN0Tm9kZShwcm9qZWN0KTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmlzQm9va21hcmtlZCkge1xuICAgICAgICAgICAgICAgIGJvb2ttYXJrZWRMaXN0LmFwcGVuZENoaWxkKHByb2plY3ROb2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2plY3ROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUFjdGl2ZU5hdigpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0UHJvamVjdElkID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcblxuICAgICAgICAvLyBJZiBkZWxldGUgY3VycmVudCBhY3RpdmUgbmF2LCBkZWZhdWx0IGJhY2sgdG8gaG9tZSBuYXZcbiAgICAgICAgaWYgKGN1cnJlbnRBY3RpdmUgPT09IHRhcmdldFByb2plY3RJZCkgY3VycmVudEFjdGl2ZSA9IDE7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwiUHJvamVjdERlbGV0ZWRcIiwgW3BhcnNlSW50KHRhcmdldFByb2plY3RJZCldKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgY3VycmVudEFjdGl2ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50QWN0aXZlXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZUFjdGl2ZU5hdixcbiAgICAgICAgdG9nZ2xlQWRkUHJvamVjdEZvcm0sXG4gICAgICAgIHRvZ2dsZU5hdixcbiAgICAgICAgdG9nZ2xlQm9va21hcmtlZCxcbiAgICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgICB1cGRhdGVOYXZTZWN0aW9uLFxuICAgICAgICBoYW5kbGVEZWxldGVcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IE5hdkNvbnRyb2wiLCJpbXBvcnQgTmF2Q29udHJvbCBmcm9tICcuL05hdkNvbnRyb2wuanMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uLmpzJztcbmltcG9ydCBzdGFySWNvbiBmcm9tICcuL0ljb25zL3N0YXIuc3ZnJztcbmltcG9ydCBzdGFydE91dGxpbmVJY29uIGZyb20gJy4vSWNvbnMvc3Rhci1vdXRsaW5lLnN2Zyc7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3ROb2RlID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBwcm9qZWN0LmlkKTtcblxuICAgIGlmIChwcm9qZWN0LmlkICE9PSAxKSB7XG4gICAgICAgIGNvbnN0IGljb24gPSBwcm9qZWN0LmlzQm9va21hcmtlZCA/IEljb24oc3Rhckljb24pIDogSWNvbihzdGFydE91dGxpbmVJY29uKTtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTmF2Q29udHJvbC50b2dnbGVCb29rbWFya2VkKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICB9XG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByb2plY3QudGl0bGUpKTtcblxuICAgIGlmIChwcm9qZWN0LmlkICE9PSAxKSB7XG4gICAgICAgIGNvbnN0IGRsdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRsdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTtcbiAgICAgICAgZGx0QnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIGRsdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTmF2Q29udHJvbC5oYW5kbGVEZWxldGUpO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGRsdEJ0bik7XG4gICAgfVxuXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTmF2Q29udHJvbC51cGRhdGVBY3RpdmVOYXYpO1xuICAgIHJldHVybiBpdGVtXG59XG5cbmNvbnN0IGNyZWF0ZUJvb2ttYXJrZWRTZWN0aW9uID0gKG1lbW9yeSkgPT4ge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHVsLmlkID0gXCJwcm9qZWN0cy1ib29rbWFya2VkXCI7XG5cbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIG1lbW9yeS5ib29rbWFya2VkUHJvamVjdHMpIHtcbiAgICAgICAgLy8gT25seSBzaG93cyBib29rbWFya2VkIHByb2plY3RzIGluIHRoZSB0b3Agb2YgbmF2IHNlY3Rpb25cbiAgICAgICAgY29uc3QgaXRlbSA9IGNyZWF0ZVByb2plY3ROb2RlKHByb2plY3QpO1xuXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiB1bFxufVxuXG5jb25zdCBjcmVhdGVQcm9qZWN0U2VjdGlvbiA9IChtZW1vcnkpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5pZCA9IFwicHJvamVjdHNcIjtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIG1lbW9yeS5wcm9qZWN0cykge1xuICAgICAgICAvLyBza2lwIERlZmF1bHQgKEhvbWUpIFByb2plY3RcbiAgICAgICAgaWYgKHByb2plY3QuaXNCb29rbWFya2VkKSBjb250aW51ZVxuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVQcm9qZWN0Tm9kZShwcm9qZWN0KTtcblxuICAgICAgICB1bC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG4gICAgZGl2LmFwcGVuZENoaWxkKHVsKTtcblxuICAgIHJldHVybiBkaXZcbn1cblxuY29uc3QgY3JlYXRlQWRkUHJvamVjdEJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5pZCA9IFwiYWRkLXByb2plY3RcIjtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRleHQtYm9sZFwiKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBOYXZDb250cm9sLnRvZ2dsZUFkZFByb2plY3RGb3JtKTtcblxuICAgIHJldHVybiBkaXZcbn1cblxuY29uc3QgY3JlYXRlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uaWQgPSBcImFkZC1wcm9qZWN0LWZvcm1cIjtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW5vbmVcIik7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGlucHV0Lm5hbWUgPSBcInByb2plY3QtdGl0bGVcIjtcbiAgICBpbnB1dC5pZCA9IFwicHJvamVjdC10aXRsZVwiO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJOZXcgUHJvamVjdCBUaXRsZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnRuLmlkID0gXCJjYW5jZWwtcHJvamVjdC1idG5cIjtcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBOYXZDb250cm9sLnRvZ2dsZUFkZFByb2plY3RGb3JtKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBhZGRCdG4uaWQgPSBcImFkZC1wcm9qZWN0LWJ0blwiO1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIE5hdkNvbnRyb2wuaGFuZGxlU3VibWl0KTtcbiAgICByZXR1cm4gZm9ybVxufVxuXG5jb25zdCBjcmVhdGVOYXYgPSAobWVtb3J5KSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXYuaWQgPSBcIm5hdlwiO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZUJvb2ttYXJrZWRTZWN0aW9uKG1lbW9yeSkpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0U2VjdGlvbihtZW1vcnkpKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkUHJvamVjdEJ0bigpKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEZvcm0oKSk7XG4gICAgcmV0dXJuIG5hdlxufVxuXG5leHBvcnQgeyBjcmVhdGVOYXYsIGNyZWF0ZVByb2plY3ROb2RlIH0iLCJpbXBvcnQgeyBjcmVhdGVNYWluIH0gZnJvbSAnLi9NYWluVmlldy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVOYXYgfSBmcm9tICcuL05hdlZpZXcuanMnO1xuaW1wb3J0IE5hdkNvbnRyb2wgZnJvbSAnLi9OYXZDb250cm9sLmpzJztcbmltcG9ydCBNZW1vcnkgZnJvbSAnLi9NZW1vcnkuanMnO1xuaW1wb3J0IHB1YnN1YiBmcm9tICdwdWJzdWIuanMnO1xuXG5jb25zdCBQYWdlVmlldyA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcGFnZU1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2UtbWFpblwiKTtcbiAgICBjb25zdCBuYXZEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2LWRyb3Bkb3duXCIpO1xuXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgbmF2RHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE5hdkNvbnRyb2wudG9nZ2xlTmF2KTtcbiAgICAgICAgcGFnZU1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KE1lbW9yeSkpO1xuICAgICAgICBwYWdlTWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNYWluKE1lbW9yeSkpO1xuICAgICAgICBOYXZDb250cm9sLnVwZGF0ZUFjdGl2ZU5hdigpO1xuXG4gICAgICAgIC8vIEFsd2F5cyBtYWtlcyB0aGUgbmF2IGFwcGVhciBpZiB3aW5kb3cgd2lkdGggaXMgPj0gNjUwcHhcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDY1MCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXRcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VWaWV3IiwiaW1wb3J0IHsgcmVtb3ZlQnlJZCB9IGZyb20gXCIuL1V0aWxzXCI7XG5cbmNvbnN0IFByb2plY3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XG4gICAgY29uc3QgaWQgPSBQcm9qZWN0LmdldElkKCk7XG4gICAgY29uc3QgdHlwZSA9IFwiUHJvamVjdFwiO1xuICAgIGxldCB0b2RvTGlzdCA9IFtdO1xuICAgIGxldCB0aXRsZSA9IHByb2plY3RUaXRsZTtcbiAgICBsZXQgaXNCb29rbWFya2VkID0gZmFsc2U7XG4gICAgbGV0IGRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIHRvZG9MaXN0LnB1c2godG9kbyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVG9kb0lkID0gKHRvZG9JZCkgPT4ge1xuICAgICAgICByZW1vdmVCeUlkKHRvZG9MaXN0LCB0b2RvSWQpXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChkZXNjKSA9PiB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gZGVzYztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRCb29rbWFya2VkID0gKGJvb2wpID0+IHtcbiAgICAgICAgaXNCb29rbWFya2VkID0gYm9vbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRpdGxlXG4gICAgICAgIH0sXG4gICAgICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBkZXNjcmlwdGlvblxuICAgICAgICB9LFxuICAgICAgICBnZXQgdG9kb0xpc3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9kb0xpc3RcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGlzQm9va21hcmtlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBpc0Jvb2ttYXJrZWRcbiAgICAgICAgfSxcbiAgICAgICAgYWRkVG9kbyxcbiAgICAgICAgcmVtb3ZlVG9kb0lkLFxuICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgc2V0RGVzY3JpcHRpb24sXG4gICAgICAgIHNldEJvb2ttYXJrZWRcbiAgICB9XG59XG5cbi8vIFNldCBQcm9qZWN0IHN0YXRpYyBjb3VudGVyIGZvciBpZFxuUHJvamVjdC5jb3VudGVyID0gMTtcblByb2plY3QuZ2V0SWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFByb2plY3QuY291bnRlcisrXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3QiLCJjb25zdCBUb2RvID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgY29uc3QgdHlwZSA9IFwiVG9kb1wiO1xuICAgIGNvbnN0IGlkID0gVG9kby5nZXRJZCgpO1xuICAgIGxldCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHk7XG4gICAgbGV0IGlzRG9uZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgdG9nZ2xlRG9uZSA9ICgpID0+IHtcbiAgICAgICAgaXNEb25lID0gaXNEb25lID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAoZGVzYykgPT4ge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IGRlc2M7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RHVlRGF0ZSA9IChkYXRlKSA9PiB7XG4gICAgICAgIGR1ZURhdGUgPSBkYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKHByaW8pID0+IHtcbiAgICAgICAgcHJpb3JpdHkgPSBwcmlvXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgaWQsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGlzRG9uZSxcbiAgICAgICAgdG9nZ2xlRG9uZSxcbiAgICAgICAgc2V0VGl0bGUsXG4gICAgICAgIHNldERlc2NyaXB0aW9uLFxuICAgICAgICBzZXREdWVEYXRlLFxuICAgICAgICBzZXRQcmlvcml0eVxuICAgIH1cbn1cblxuLy8gSW5pdGlhbGl6ZSBzdGF0aWMgY291bnQgZm9yIFRvZG9cblRvZG8uY291bnQgPSAxO1xuVG9kby5nZXRJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gVG9kby5jb3VudCsrO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvIiwiY29uc3QgY3JlYXRlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kdWVEYXRlXCIpO1xuICAgIGlmICh0b2RvLmR1ZURhdGUpIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgZWxzZSBkdWVEYXRlLnRleHRDb250ZW50ID0gXCJBZGQgYSBkdWUgZGF0ZVwiO1xuXG4gICAgY29uc3QgaXNEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlzRG9uZS5jbGFzc0xpc3QuYWRkKFwidG9kby1jaGVja2JveFwiKTtcbiAgICBpc0RvbmUudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBpc0RvbmUuY2hlY2tlZCA9IHRvZG8uaXNEb25lO1xuXG4gICAgbm9kZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICBub2RlLmFwcGVuZENoaWxkKGlzRG9uZSk7XG4gICAgcmV0dXJuIG5vZGVcbn1cblxuZXhwb3J0IHtjcmVhdGVUb2RvfSIsImNvbnN0IHJlbW92ZUJ5SWQgPSAobGlzdCwgb2JqZWN0SWQpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGxpc3QuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PT0gb2JqZWN0SWQpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVHJ5aW5nIHRvIGRlbGV0ZSBhbiBpdGVtIHRoYXQgZG9lcyBub3QgZXhpc3QhXCIpO1xuICAgIH1cbn1cblxuY29uc3QgZGlzcGxheURlbGV0ZSA9IChkaXNwbGF5Tm9kZSwgZGVsZXRlTm9kZSkgPT4ge1xuICAgIGRpc3BsYXlOb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgZGVsZXRlTm9kZS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1ub25lXCIpO1xufVxuXG5leHBvcnQgeyByZW1vdmVCeUlkLCBkaXNwbGF5RGVsZXRlIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEV2ZW50QWdncmVnYXRvciBmcm9tICcuL0V2ZW50QWdncmVnYXRvci5qcyc7XG5pbXBvcnQgTWVtb3J5IGZyb20gJy4vTWVtb3J5LmpzJztcbmltcG9ydCBQYWdlVmlldyBmcm9tICcuL1BhZ2VWaWV3LmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdC5qcyc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8uanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGhvbWVQcm9qZWN0ID0gUHJvamVjdChcIkhvbWVcIik7XG5ob21lUHJvamVjdC5zZXREZXNjcmlwdGlvbihcIllvdXIgcGVyc29uYWwgZGVmYXVsdCBwcm9qZWN0IHRvIHN0b3JlIHlvdXIgdG9kb3MuXCIpO1xuaG9tZVByb2plY3QuYWRkVG9kbyhUb2RvKFwiSSdtIGEgdG9kbyBsb2xcIikpO1xuaG9tZVByb2plY3QuYWRkVG9kbyhUb2RvKFwiQW5vdGhlciB0ZXN0IHRvZG9cIikpO1xuTWVtb3J5LmFkZFRvUHJvamVjdHMoaG9tZVByb2plY3QpO1xuTWVtb3J5LmFkZFRvQm9va21hcmtlZChob21lUHJvamVjdC5pZCk7XG5cbmNvbnN0IHRlc3RQcm9qZWN0ID0gUHJvamVjdChcIlRlc3QgUHJvamVjdFwiKTtcbk1lbW9yeS5hZGRUb1Byb2plY3RzKHRlc3RQcm9qZWN0KTtcblxuUGFnZVZpZXcuaW5pdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==