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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: inherit;\n    color: inherit;\n}\n\n:root {\n    --header-color: #1F3541;\n    --footer-color: #5289B5;\n    --bg-color: #AFD8F2;\n    --nav-color: #cee6f5;\n    --custom-white: #EDF2F3;\n    --fade-color: #505050;\n    --red: #ff6e6e;\n    --green: #bada55;\n    font-size: 16px;\n    font-family: \"Roboto\", sans-serif;\n}\n\nli::marker {\n    content: none;\n}\n\n.icon {\n    width: 1em;\n    height: 1em;\n}\n\n.display-none {\n    display: none !important;\n}\n\n.text-bold {\n    font-weight: bold;\n}\n\n#page-container {\n    width: 100vw;\n    min-height: 100vh;\n    background-color: var(--bg-color);\n    display: grid;\n    grid-template: 4rem 1fr 2rem / 1fr;\n}\n\n#page-header,\n#page-footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--custom-white);\n}\n\n#page-header {\n    background-color: var(--header-color);\n    justify-content: space-between;\n    padding: 0 1rem;\n    font-size: 1.5rem;\n}\n\n#nav-dropdown {\n    background-color: var(--header-color);\n    outline: none;\n    border: none;\n}\n\n#nav {\n    grid-area: nav;\n    background-color: var(--nav-color);\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    font-size: 1.2rem;\n}\n\n#nav header {\n    font-size: 1.3em;\n    font-weight: bold;\n    padding-bottom: 1rem;\n}\n\n#nav ul>li {\n    padding: 0.5rem;\n    border-radius: 0.5em;\n    cursor: pointer;\n    display: grid;\n    align-items: center;\n    justify-items: start;\n    grid-template-columns: auto 1fr auto;\n    gap: 0.5rem;\n}\n\n#nav button.delete-btn {\n    float: right;\n    background-color: transparent;\n    border: none;\n    color: var(--header-color);\n    font-size: 0.9rem;\n    font-weight: bold;\n    padding: 0.2em 0.3em;\n    border-radius: 0.2em;\n}\n\n#nav ul>li.active {\n    font-weight: bold;\n    background-color: var(--bg-color);\n}\n\n#add-project {\n    cursor: pointer;\n}\n\n#add-project-form {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 0.5rem;\n}\n\n#add-project-form>* {\n    border-radius: 0.5em;\n}\n\n#add-project-form>input {\n    grid-area: 1 / 1 / 1 / -1;\n    padding: 2px 0;\n    padding-left: 1ch;\n}\n\n#add-project-form>button {\n    padding: 0.5rem 0;\n    font-weight: bold;\n}\n\n#add-project-btn {\n    background-color: var(--green);\n}\n\n#cancel-project-btn {\n    background-color: var(--red);\n}\n\n#main {\n    display: grid;\n    padding: clamp(1rem, 5vw, 3rem);\n    grid-template: auto 1fr / 1fr;\n    gap: 1rem;\n}\n\n#main .project-header {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.project-header>.project-title {\n    font-size: 2.5rem;\n}\n\n.input-group-description {\n    position: relative;\n}\n\n.input-group-description .prompt {\n    color: var(--fade-color);\n    padding-left: 0.5rem;\n}\n\n.input-group-description .input-description {\n    background-color: var(--nav-color);\n    border-radius: 1em;\n    width: 100%;\n    height: 10ch;\n    padding: 0.5rem;\n    border: none;\n    resize: none;\n    font-family: inherit;\n}\n\n.input-group-description button {\n    padding: 0.5rem 1.2rem;\n    float: right;\n    border-radius: 1em;\n}\n\n.input-group-description .save-description-btn {\n    background-color: var(--green);\n}\n\n.input-group-description .cancel-description-btn {\n    background-color: var(--red);\n    margin-right: 0.5rem;\n}\n\n#page-footer {\n    background-color: var(--footer-color);\n}\n\n@media screen and (min-width: 650px) {\n    #page-header {\n        justify-content: center;\n    }\n\n    #nav-dropdown {\n        display: none;\n    }\n\n    #page-main {\n        display: grid;\n        grid-template: 1fr / 17.5rem 1fr;\n        grid-template-areas:\n            \"nav main\";\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,oBAAoB;IACpB,uBAAuB;IACvB,qBAAqB;IACrB,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,iCAAiC;IACjC,aAAa;IACb,kCAAkC;AACtC;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;IACI,qCAAqC;IACrC,8BAA8B;IAC9B,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,kCAAkC;IAClC,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,oBAAoB;IACpB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,6BAA6B;IAC7B,YAAY;IACZ,0BAA0B;IAC1B,iBAAiB;IACjB,iBAAiB;IACjB,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,iCAAiC;AACrC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,WAAW;AACf;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,6BAA6B;IAC7B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,kCAAkC;IAClC,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,4BAA4B;IAC5B,oBAAoB;AACxB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI;QACI,uBAAuB;IAC3B;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;QACb,gCAAgC;QAChC;sBACc;IAClB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: inherit;\n    color: inherit;\n}\n\n:root {\n    --header-color: #1F3541;\n    --footer-color: #5289B5;\n    --bg-color: #AFD8F2;\n    --nav-color: #cee6f5;\n    --custom-white: #EDF2F3;\n    --fade-color: #505050;\n    --red: #ff6e6e;\n    --green: #bada55;\n    font-size: 16px;\n    font-family: \"Roboto\", sans-serif;\n}\n\nli::marker {\n    content: none;\n}\n\n.icon {\n    width: 1em;\n    height: 1em;\n}\n\n.display-none {\n    display: none !important;\n}\n\n.text-bold {\n    font-weight: bold;\n}\n\n#page-container {\n    width: 100vw;\n    min-height: 100vh;\n    background-color: var(--bg-color);\n    display: grid;\n    grid-template: 4rem 1fr 2rem / 1fr;\n}\n\n#page-header,\n#page-footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--custom-white);\n}\n\n#page-header {\n    background-color: var(--header-color);\n    justify-content: space-between;\n    padding: 0 1rem;\n    font-size: 1.5rem;\n}\n\n#nav-dropdown {\n    background-color: var(--header-color);\n    outline: none;\n    border: none;\n}\n\n#nav {\n    grid-area: nav;\n    background-color: var(--nav-color);\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    font-size: 1.2rem;\n}\n\n#nav header {\n    font-size: 1.3em;\n    font-weight: bold;\n    padding-bottom: 1rem;\n}\n\n#nav ul>li {\n    padding: 0.5rem;\n    border-radius: 0.5em;\n    cursor: pointer;\n    display: grid;\n    align-items: center;\n    justify-items: start;\n    grid-template-columns: auto 1fr auto;\n    gap: 0.5rem;\n}\n\n#nav button.delete-btn {\n    float: right;\n    background-color: transparent;\n    border: none;\n    color: var(--header-color);\n    font-size: 0.9rem;\n    font-weight: bold;\n    padding: 0.2em 0.3em;\n    border-radius: 0.2em;\n}\n\n#nav ul>li.active {\n    font-weight: bold;\n    background-color: var(--bg-color);\n}\n\n#add-project {\n    cursor: pointer;\n}\n\n#add-project-form {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 0.5rem;\n}\n\n#add-project-form>* {\n    border-radius: 0.5em;\n}\n\n#add-project-form>input {\n    grid-area: 1 / 1 / 1 / -1;\n    padding: 2px 0;\n    padding-left: 1ch;\n}\n\n#add-project-form>button {\n    padding: 0.5rem 0;\n    font-weight: bold;\n}\n\n#add-project-btn {\n    background-color: var(--green);\n}\n\n#cancel-project-btn {\n    background-color: var(--red);\n}\n\n#main {\n    display: grid;\n    padding: clamp(1rem, 5vw, 3rem);\n    grid-template: auto 1fr / 1fr;\n    gap: 1rem;\n}\n\n#main .project-header {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.project-header>.project-title {\n    font-size: 2.5rem;\n}\n\n.input-group-description {\n    position: relative;\n}\n\n.input-group-description .prompt {\n    color: var(--fade-color);\n    padding-left: 0.5rem;\n}\n\n.input-group-description .input-description {\n    background-color: var(--nav-color);\n    border-radius: 1em;\n    width: 100%;\n    height: 10ch;\n    padding: 0.5rem;\n    border: none;\n    resize: none;\n    font-family: inherit;\n}\n\n.input-group-description button {\n    padding: 0.5rem 1.2rem;\n    float: right;\n    border-radius: 1em;\n}\n\n.input-group-description .save-description-btn {\n    background-color: var(--green);\n}\n\n.input-group-description .cancel-description-btn {\n    background-color: var(--red);\n    margin-right: 0.5rem;\n}\n\n#page-footer {\n    background-color: var(--footer-color);\n}\n\n@media screen and (min-width: 650px) {\n    #page-header {\n        justify-content: center;\n    }\n\n    #nav-dropdown {\n        display: none;\n    }\n\n    #page-main {\n        display: grid;\n        grid-template: 1fr / 17.5rem 1fr;\n        grid-template-areas:\n            \"nav main\";\n    }\n}"],"sourceRoot":""}]);
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
/* harmony export */   "createProjectHeader": () => (/* binding */ createProjectHeader)
/* harmony export */ });
/* harmony import */ var _MainControl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainControl.js */ "./src/MainControl.js");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils.js */ "./src/Utils.js");



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

    description.addEventListener("click", _Utils_js__WEBPACK_IMPORTED_MODULE_1__.displayDelete.bind(window, input, description));
    cancelBtn.addEventListener("click", _Utils_js__WEBPACK_IMPORTED_MODULE_1__.displayDelete.bind(window, description, input));
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

const createMain = (memory) => {
    const main = document.createElement("div");
    main.id = "main";

    const baseProject = memory.getProjectId(1);
    main.appendChild(createProjectHeader(baseProject));
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const homeProject = (0,_Project_js__WEBPACK_IMPORTED_MODULE_3__["default"])("Home");
homeProject.setDescription("Your personal default project to store your todos.");
_Memory_js__WEBPACK_IMPORTED_MODULE_1__["default"].addToProjects(homeProject);
_Memory_js__WEBPACK_IMPORTED_MODULE_1__["default"].addToBookmarked(homeProject.id);

const testProject = (0,_Project_js__WEBPACK_IMPORTED_MODULE_3__["default"])("Test Project");
_Memory_js__WEBPACK_IMPORTED_MODULE_1__["default"].addToProjects(testProject);

_PageView_js__WEBPACK_IMPORTED_MODULE_2__["default"].init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbUQ7QUFDbEI7QUFDSTtBQUNGO0FBQ2Q7O0FBRXJCLG9CQUFvQix1REFBTztBQUMzQjtBQUNBLGdFQUFvQjtBQUNwQixrRUFBc0I7O0FBRXRCLG9CQUFvQix1REFBTztBQUMzQixnRUFBb0I7O0FBRXBCLHlEQUFhLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9ub2RlX21vZHVsZXMvcHVic3ViLmpzL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL0V2ZW50QWdncmVnYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9JY29uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL01haW5Db250cm9sLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL01haW5WaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL01lbW9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9OYXZDb250cm9sLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL05hdlZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9zcmMvUGFnZVZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9VdGlscy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWhlYWRlci1jb2xvcjogIzFGMzU0MTtcXG4gICAgLS1mb290ZXItY29sb3I6ICM1Mjg5QjU7XFxuICAgIC0tYmctY29sb3I6ICNBRkQ4RjI7XFxuICAgIC0tbmF2LWNvbG9yOiAjY2VlNmY1O1xcbiAgICAtLWN1c3RvbS13aGl0ZTogI0VERjJGMztcXG4gICAgLS1mYWRlLWNvbG9yOiAjNTA1MDUwO1xcbiAgICAtLXJlZDogI2ZmNmU2ZTtcXG4gICAgLS1ncmVlbjogI2JhZGE1NTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmxpOjptYXJrZXIge1xcbiAgICBjb250ZW50OiBub25lO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIHdpZHRoOiAxZW07XFxuICAgIGhlaWdodDogMWVtO1xcbn1cXG5cXG4uZGlzcGxheS1ub25lIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGV4dC1ib2xkIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNwYWdlLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNHJlbSAxZnIgMnJlbSAvIDFmcjtcXG59XFxuXFxuI3BhZ2UtaGVhZGVyLFxcbiNwYWdlLWZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tY3VzdG9tLXdoaXRlKTtcXG59XFxuXFxuI3BhZ2UtaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jbmF2LWRyb3Bkb3duIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jbmF2IHtcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNuYXYgaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jbmF2IHVsPmxpIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI25hdiBidXR0b24uZGVsZXRlLWJ0biB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMC4yZW0gMC4zZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbn1cXG5cXG4jbmF2IHVsPmxpLmFjdGl2ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbiNhZGQtcHJvamVjdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNhZGQtcHJvamVjdC1mb3JtPioge1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0+aW5wdXQge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIC0xO1xcbiAgICBwYWRkaW5nOiAycHggMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxY2g7XFxufVxcblxcbiNhZGQtcHJvamVjdC1mb3JtPmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuI2NhbmNlbC1wcm9qZWN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogY2xhbXAoMXJlbSwgNXZ3LCAzcmVtKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgLyAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI21haW4gLnByb2plY3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcj4ucHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uaW5wdXQtZ3JvdXAtZGVzY3JpcHRpb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5pbnB1dC1ncm91cC1kZXNjcmlwdGlvbiAucHJvbXB0IHtcXG4gICAgY29sb3I6IHZhcigtLWZhZGUtY29sb3IpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLmlucHV0LWdyb3VwLWRlc2NyaXB0aW9uIC5pbnB1dC1kZXNjcmlwdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTBjaDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5pbnB1dC1ncm91cC1kZXNjcmlwdGlvbiBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLmlucHV0LWdyb3VwLWRlc2NyaXB0aW9uIC5zYXZlLWRlc2NyaXB0aW9uLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLmlucHV0LWdyb3VwLWRlc2NyaXB0aW9uIC5jYW5jZWwtZGVzY3JpcHRpb24tYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbiNwYWdlLWZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1jb2xvcik7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XFxuICAgICNwYWdlLWhlYWRlciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjbmF2LWRyb3Bkb3duIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI3BhZ2UtbWFpbiB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMTcuNXJlbSAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJuYXYgbWFpblxcXCI7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0lBR0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixnQ0FBZ0M7UUFDaEM7c0JBQ2M7SUFDbEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0taGVhZGVyLWNvbG9yOiAjMUYzNTQxO1xcbiAgICAtLWZvb3Rlci1jb2xvcjogIzUyODlCNTtcXG4gICAgLS1iZy1jb2xvcjogI0FGRDhGMjtcXG4gICAgLS1uYXYtY29sb3I6ICNjZWU2ZjU7XFxuICAgIC0tY3VzdG9tLXdoaXRlOiAjRURGMkYzO1xcbiAgICAtLWZhZGUtY29sb3I6ICM1MDUwNTA7XFxuICAgIC0tcmVkOiAjZmY2ZTZlO1xcbiAgICAtLWdyZWVuOiAjYmFkYTU1O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxubGk6Om1hcmtlciB7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbi5pY29uIHtcXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgaGVpZ2h0OiAxZW07XFxufVxcblxcbi5kaXNwbGF5LW5vbmUge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi50ZXh0LWJvbGQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3BhZ2UtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiA0cmVtIDFmciAycmVtIC8gMWZyO1xcbn1cXG5cXG4jcGFnZS1oZWFkZXIsXFxuI3BhZ2UtZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1jdXN0b20td2hpdGUpO1xcbn1cXG5cXG4jcGFnZS1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNuYXYtZHJvcGRvd24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNuYXYge1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuI25hdiBoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbiNuYXYgdWw+bGkge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jbmF2IGJ1dHRvbi5kZWxldGUtYnRuIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjNlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxufVxcblxcbiNuYXYgdWw+bGkuYWN0aXZlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0+KiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtZm9ybT5pbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gLTE7XFxuICAgIHBhZGRpbmc6IDJweCAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFjaDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0+YnV0dG9uIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4jY2FuY2VsLXByb2plY3QtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiBjbGFtcCgxcmVtLCA1dncsIDNyZW0pO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciAvIDFmcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jbWFpbiAucHJvamVjdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyPi5wcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5pbnB1dC1ncm91cC1kZXNjcmlwdGlvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmlucHV0LWdyb3VwLWRlc2NyaXB0aW9uIC5wcm9tcHQge1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZS1jb2xvcik7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG5cXG4uaW5wdXQtZ3JvdXAtZGVzY3JpcHRpb24gLmlucHV0LWRlc2NyaXB0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMGNoO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLmlucHV0LWdyb3VwLWRlc2NyaXB0aW9uIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uaW5wdXQtZ3JvdXAtZGVzY3JpcHRpb24gLnNhdmUtZGVzY3JpcHRpb24tYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4uaW5wdXQtZ3JvdXAtZGVzY3JpcHRpb24gLmNhbmNlbC1kZXNjcmlwdGlvbi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuI3BhZ2UtZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWNvbG9yKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjUwcHgpIHtcXG4gICAgI3BhZ2UtaGVhZGVyIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNuYXYtZHJvcGRvd24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAjcGFnZS1tYWluIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxNy41cmVtIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgXFxcIm5hdiBtYWluXFxcIjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiKGZ1bmN0aW9uKHNjb3BlKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHB1YnN1Ykluc3RhbmNlID0gbnVsbDtcblx0dmFyIHB1YnN1YkNvbmZpZyA9IG51bGw7XG5cblx0aWYodHlwZW9mIHB1YnN1YiA9PT0gJ29iamVjdCcpIHtcblx0XHRwdWJzdWJDb25maWcgPSBwdWJzdWI7XG5cdC8vbm9kZS5qcyBjb25maWcgZnJvbSBnbG9iYWxcblx0fSBlbHNlIGlmKHR5cGVvZiBnbG9iYWwgPT09ICdvYmplY3QnICYmIHR5cGVvZiBnbG9iYWwucHVic3ViQ29uZmlnID09PSAnb2JqZWN0Jykge1xuXHRcdHB1YnN1YkNvbmZpZyA9IGdsb2JhbC5wdWJzdWJDb25maWc7XG5cdH1cblxuXHRmdW5jdGlvbiBQdWJzdWIoY29uZmlnKSB7XG5cdFx0dmFyIF9ldmVudE9iamVjdCA9IHt9O1xuXHRcdHZhciBvcHRpb25zID0ge1xuXHRcdFx0c2VwYXJhdG9yIDogKGNvbmZpZyAmJiBjb25maWcuc2VwYXJhdG9yKSA/IGNvbmZpZy5zZXBhcmF0b3IgOiAnLycsXG5cdFx0XHRyZWN1cnJlbnQgOiAoY29uZmlnICYmIHR5cGVvZiBjb25maWcucmVjdXJyZW50ID09PSAnYm9vbGVhbicpID8gY29uZmlnLnJlY3VycmVudCA6IChmYWxzZSksXG5cdFx0XHRkZXB0aCAgICAgOiAoY29uZmlnICYmIHR5cGVvZiBjb25maWcuZGVwdGggPT09ICdudW1iZXInKSA/IGNvbmZpZy5kZXB0aCA6IG51bGwsXG5cdFx0XHRhc3luYyAgICAgOiAoY29uZmlnICYmIHR5cGVvZiBjb25maWcuYXN5bmMgPT09ICdib29sZWFuJykgPyBjb25maWcuYXN5bmMgOiAoZmFsc2UpLFxuXHRcdFx0Y29udGV4dCAgIDogKGNvbmZpZyAmJiBjb25maWcuY29udGV4dCkgPyBjb25maWcuY29udGV4dCA6IG51bGwsXG5cdFx0XHRsb2cgICAgICAgOiAoY29uZmlnICYmIGNvbmZpZy5sb2cpID8gY29uZmlnLmxvZyA6IChmYWxzZSlcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gZm9yRWFjaChkYXRhQXJyYXksIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaSA9IDAsXG5cdFx0XHRcdGFycmF5TGVuZ3RoID0gZGF0YUFycmF5Lmxlbmd0aDtcblxuXHRcdFx0Zm9yKGkgPSAwOyBpIDwgYXJyYXlMZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjYWxsYmFjayhpLCBkYXRhQXJyYXlbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuICAgICAgICBmdW5jdGlvbiBpc0FycmF5IChvYmopIHtcblx0XHRcdHJldHVybiBBcnJheS5pc0FycmF5ID8gQXJyYXkuaXNBcnJheShvYmopIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2soc3Vic2NyaXB0aW9ucywgYXJncywgYXN5bmMpIHtcblx0XHRcdGFzeW5jID0gKHR5cGVvZiBhc3luYyA9PT0gJ2Jvb2xlYW4nKSA/IGFzeW5jIDogb3B0aW9ucy5hc3luYztcblx0XHRcdGlmKCFzdWJzY3JpcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNsb25lIGFycmF5IC0gY2FsbGJhY2tzIGNhbiB1bnN1YnNjcmliZSBvdGhlciBzdWJzY3JpcHRpb25zXG5cdFx0XHQvLyByZWR1Y2VzIGEgbG90IHBlcmZvcm1hbmNlIGJ1dCBpcyBzYWZlXG5cdFx0XHR2YXIgZXhlY3V0ZWRTdWJzY3JpcHRpb25zID0gc3Vic2NyaXB0aW9ucy5zbGljZSgpO1xuXG5cdFx0XHRmb3JFYWNoKGV4ZWN1dGVkU3Vic2NyaXB0aW9ucywgZnVuY3Rpb24oc3Vic2NyaXB0aW9uSWQsIHN1YnNjcmlwdGlvbikge1xuXHRcdFx0XHRpZih0eXBlb2Ygc3Vic2NyaXB0aW9uID09PSAnb2JqZWN0JyAmJiBleGVjdXRlZFN1YnNjcmlwdGlvbnMuaGFzT3duUHJvcGVydHkoc3Vic2NyaXB0aW9uSWQpKSB7XG5cdFx0XHRcdFx0aWYoYXN5bmMpIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHN1YnNjcmlwdGlvbi5jYWxsYmFjay5hcHBseShzdWJzY3JpcHRpb24uY29udGV4dCwgYXJncyk7XG5cdFx0XHRcdFx0XHR9LCA0KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3Vic2NyaXB0aW9uLmNhbGxiYWNrLmFwcGx5KHN1YnNjcmlwdGlvbi5jb250ZXh0LCBhcmdzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGV4ZWN1dGVQdWJsaXNoV2lsZGNhcmQobnNPYmplY3QsIGFyZ3MpIHtcblx0XHRcdHZhciBuc0VsZW1lbnQ7XG5cdFx0XHRmb3IobnNFbGVtZW50IGluIG5zT2JqZWN0KSB7XG5cdFx0XHRcdGlmKG5zRWxlbWVudFswXSAhPT0gJ18nICYmIG5zT2JqZWN0Lmhhc093blByb3BlcnR5KG5zRWxlbWVudCkpIHtcblx0XHRcdFx0XHRleGVjdXRlQ2FsbGJhY2sobnNPYmplY3RbbnNFbGVtZW50XS5fZXZlbnRzLCBhcmdzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHB1Ymxpc2gobnNPYmplY3QsIGFyZ3MsIHBhcnRzLCBwYXJhbXMpIHtcblx0XHRcdC8vIHdvcmsgb24gY29weSAtIG5vdCBvbiByZWZlcmVuY2Vcblx0XHRcdHBhcnRzID0gcGFydHMuc2xpY2UoKTtcblxuXHRcdFx0dmFyIGlQYXJ0ID0gcGFydHMuc2hpZnQoKTtcblx0XHRcdHZhciBkZXB0aCA9IHBhcmFtcy5kZXB0aDtcblx0XHRcdHZhciBhc3luYyA9IHBhcmFtcy5hc3luYztcblx0XHRcdHZhciBwYXJ0c0xlbmd0aCA9IHBhcmFtcy5wYXJ0c0xlbmd0aDtcblx0XHRcdHZhciByZWN1cnJlbnQgPSBwYXJhbXMucmVjdXJyZW50O1xuXHRcdFx0dmFyIHBhcnROdW1iZXIgPSAocGFydHNMZW5ndGggLSBwYXJ0cy5sZW5ndGgpO1xuXG5cdFx0XHQvLyBwYXJ0cyBpcyBlbXB0eVxuXHRcdFx0aWYoIWlQYXJ0KSB7XG5cdFx0XHRcdGV4ZWN1dGVDYWxsYmFjayhuc09iamVjdC5fZXZlbnRzLCBhcmdzLCBhc3luYyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGhhbmRsZSBzdWJzY3JpYmUgd2lsZGNhcmRcblx0XHRcdGlmKHR5cGVvZiBuc09iamVjdFsnKiddICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRwdWJsaXNoKG5zT2JqZWN0WycqJ10sIGFyZ3MsIHBhcnRzLCBwYXJhbXMpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBoYW5kbGUgcHVibGlzaCB3aWxkY2FyZFxuXHRcdFx0aWYoaVBhcnQgPT09ICcqJykge1xuXHRcdFx0XHRleGVjdXRlUHVibGlzaFdpbGRjYXJkKG5zT2JqZWN0LCBhcmdzLCBhc3luYyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIG5vIG5hbWVzcGFjZSA9IGxlYXZlIHB1Ymxpc2hcblx0XHRcdGlmKHR5cGVvZiBuc09iamVjdFtpUGFydF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0aWYocGFyYW1zLmxvZykge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybignVGhlcmUgaXMgbm8gJyArIHBhcmFtcy5uc1N0cmluZyArICcgc3Vic2NyaXB0aW9uJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRuc09iamVjdCA9IG5zT2JqZWN0W2lQYXJ0XTtcblxuXHRcdFx0aWYocmVjdXJyZW50ID09PSB0cnVlICYmIHR5cGVvZiBkZXB0aCAhPT0gJ251bWJlcicpIHsgLy9kZXB0aCBpcyBub3QgZGVmaW5lZFxuXHRcdFx0XHRleGVjdXRlQ2FsbGJhY2sobnNPYmplY3QuX2V2ZW50cywgYXJncywgYXN5bmMpO1xuXHRcdFx0XHRpZihwYXJ0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZihyZWN1cnJlbnQgPT09IHRydWUgJiYgdHlwZW9mIGRlcHRoID09PSAnbnVtYmVyJyAmJiBwYXJ0TnVtYmVyID49IChwYXJ0c0xlbmd0aCAtIGRlcHRoKSkgeyAvL2lmIGRlcHRoIGlzIGRlZmluZWRcblx0XHRcdFx0ZXhlY3V0ZUNhbGxiYWNrKG5zT2JqZWN0Ll9ldmVudHMsIGFyZ3MsIGFzeW5jKTtcblx0XHRcdH1cblxuXHRcdFx0cHVibGlzaChuc09iamVjdCwgYXJncywgcGFydHMsIHBhcmFtcyk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZXhlY3V0ZVN1YnNjcmliZVdpbGRjYXJkKG5zT2JqZWN0LCBhcmdzLCBwYXJhbXMpIHtcblx0XHRcdHZhciBwYXJ0cyA9IHBhcmFtcy5wYXJ0cztcblx0XHRcdHZhciBhc3luYyA9IHBhcmFtcy5hc3luYztcblx0XHRcdHZhciBuZXh0UGFydCA9IG51bGw7XG5cblx0XHRcdGlmKHBhcnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRleGVjdXRlQ2FsbGJhY2sobnNPYmplY3QuX2V2ZW50cywgYXJncywgYXN5bmMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bmV4dFBhcnQgPSBwYXJ0cy5zaGlmdCgpO1xuXG5cdFx0XHRcdGlmKG5zT2JqZWN0W25leHRQYXJ0XSkge1xuXHRcdFx0XHRcdGV4ZWN1dGVTdWJzY3JpYmVXaWxkY2FyZChuc09iamVjdFtuZXh0UGFydF0sIGFyZ3MsIHtcblx0XHRcdFx0XHRcdHBhcnRzIDogcGFydHMsXG5cdFx0XHRcdFx0XHRhc3luYyA6IGFzeW5jLFxuXHRcdFx0XHRcdFx0bnNTdHJpbmcgOiBwYXJhbXMubnNTdHJpbmdcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHN1YnNjcmliZShuc1N0cmluZywgY2FsbGJhY2ssIHBhcmFtcykge1xuXHRcdFx0dmFyIHBhcnRzID0gbnNTdHJpbmcuc3BsaXQob3B0aW9ucy5zZXBhcmF0b3IpLFxuXHRcdFx0XHRuc09iamVjdCwgLy9OYW1lc3BhY2Ugb2JqZWN0IHRvIHdoaWNoIHdlIGF0dGFjaCBldmVudFxuXHRcdFx0XHRjb250ZXh0ID0gKHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zLmNvbnRleHQgIT09ICd1bmRlZmluZWQnKSA/IHBhcmFtcy5jb250ZXh0IDogb3B0aW9ucy5jb250ZXh0LFxuXHRcdFx0XHRldmVudE9iamVjdCA9IG51bGwsXG5cdFx0XHRcdGkgPSAwO1xuXG5cdFx0XHRpZighY29udGV4dCkge1xuXHRcdFx0XHRjb250ZXh0ID0gY2FsbGJhY2s7XG5cdFx0XHR9XG5cblx0XHRcdC8vSXRlcmF0aW5nIHRocm91Z2ggX2V2ZW50T2JqZWN0IHRvIGZpbmQgcHJvcGVyIG5zT2JqZWN0XG5cdFx0XHRuc09iamVjdCA9IF9ldmVudE9iamVjdDtcblx0XHRcdGZvcihpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdGlmKHR5cGVvZiBuc09iamVjdFtwYXJ0c1tpXV0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRuc09iamVjdFtwYXJ0c1tpXV0gPSB7fTtcblx0XHRcdFx0XHRuc09iamVjdFtwYXJ0c1tpXV0uX2V2ZW50cyA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5zT2JqZWN0ID0gbnNPYmplY3RbcGFydHNbaV1dO1xuXHRcdFx0fVxuXG5cdFx0XHRldmVudE9iamVjdCA9IHtcblx0XHRcdFx0Y2FsbGJhY2tcdDogY2FsbGJhY2ssXG5cdFx0XHRcdGNvbnRleHRcdFx0OiBjb250ZXh0IC8vIFwidGhpc1wiIHBhcmFtZXRlciBpbiBleGVjdXRlZCBmdW5jdGlvblxuXHRcdFx0fTtcblxuXHRcdFx0bnNPYmplY3QuX2V2ZW50cy5wdXNoKGV2ZW50T2JqZWN0KTtcblx0XHRcdHJldHVybiB7IG5hbWVzcGFjZSA6IHBhcnRzLmpvaW4ob3B0aW9ucy5zZXBhcmF0b3IpLFxuXHRcdFx0XHRldmVudCA6IGV2ZW50T2JqZWN0IH07XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdW5zdWJzY3JpYmUoc3Vic2NyaWJlT2JqZWN0KSB7XG5cdFx0XHRpZihzdWJzY3JpYmVPYmplY3QgPT09IG51bGwgfHwgdHlwZW9mIHN1YnNjcmliZU9iamVjdCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHR2YXIgbnNTdHJpbmcgPSBzdWJzY3JpYmVPYmplY3QubmFtZXNwYWNlLFxuXHRcdFx0XHRldmVudE9iamVjdCA9IHN1YnNjcmliZU9iamVjdC5ldmVudCxcblx0XHRcdFx0cGFydHMgPSBuc1N0cmluZy5zcGxpdChvcHRpb25zLnNlcGFyYXRvciksXG5cdFx0XHRcdG5zT2JqZWN0LFxuXHRcdFx0XHRpID0gMDtcblxuXHRcdFx0Ly9JdGVyYXRpbmcgdGhyb3VnaCBfZXZlbnRPYmplY3QgdG8gZmluZCBwcm9wZXIgbnNPYmplY3Rcblx0XHRcdG5zT2JqZWN0ID0gX2V2ZW50T2JqZWN0O1xuXHRcdFx0Zm9yKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0aWYodHlwZW9mIG5zT2JqZWN0W3BhcnRzW2ldXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdGlmKG9wdGlvbnMubG9nKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdUaGVyZSBpcyBubyAnICsgbnNTdHJpbmcgKyAnIHN1YnNjcmlwdGlvbicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRuc09iamVjdCA9IG5zT2JqZWN0W3BhcnRzW2ldXTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yRWFjaChuc09iamVjdC5fZXZlbnRzLCBmdW5jdGlvbihldmVudElkKSB7XG5cdFx0XHRcdGlmKG5zT2JqZWN0Ll9ldmVudHNbZXZlbnRJZF0gPT09IGV2ZW50T2JqZWN0KSB7XG5cdFx0XHRcdFx0bnNPYmplY3QuX2V2ZW50cy5zcGxpY2UoZXZlbnRJZCwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFB1Ymxpc2ggZXZlbnRcblx0XHRcdCAqIEBwYXJhbSBuc1N0cmluZyBzdHJpbmcgbmFtZXNwYWNlIHN0cmluZyBzcGxpdGVkIGJ5IGRvdHNcblx0XHRcdCAqIEBwYXJhbSBhcmdzIGFycmF5IG9mIGFyZ3VtZW50cyBnaXZlbiB0byBjYWxsYmFja3Ncblx0XHRcdCAqIEBwYXJhbSBwYXJhbXMgcGFyYW1hdGVycyBwb3NzaWJsZTpcblx0XHRcdCAqICAgICAgICBAcGFyYW0gcmVjdXJyZW50IGJvb2wgc2hvdWxkIGV4ZWN1dGlvbiBiZSBidWJibGVkIHRocm91Z2h0IG5hbWVzcGFjZVxuXHRcdFx0ICogICAgICAgIEBwYXJhbSBkZXB0aCBpbnRlZ2VyIGhvdyBtYW55IG5hbWVzcGFjZXMgc2VwYXJhdGVkIGJ5IGRvdHMgd2lsbCBiZSBleGVjdXRlZFxuXHRcdFx0ICovXG5cdFx0XHRwdWJsaXNoIDogZnVuY3Rpb24obnNTdHJpbmcsIGFyZ3MsIHBhcmFtcykge1xuXHRcdFx0XHR2YXIgcGFydHMgPSBuc1N0cmluZy5zcGxpdChvcHRpb25zLnNlcGFyYXRvciksXG5cdFx0XHRcdFx0cmVjdXJyZW50ID0gKHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnICYmIHBhcmFtcy5yZWN1cnJlbnQpID8gcGFyYW1zLnJlY3VycmVudCA6IG9wdGlvbnMucmVjdXJyZW50LCAvLyBidWJibGVzIGV2ZW50IHRocm91Z2h0IG5hbWVzcGFjZSBpZiB0cnVlXG5cdFx0XHRcdFx0ZGVwdGggPSAodHlwZW9mIHBhcmFtcyA9PT0gJ29iamVjdCcgJiYgcGFyYW1zLmRlcHRoKSA/IHBhcmFtcy5kZXB0aCA6IG9wdGlvbnMuZGVwdGgsXG5cdFx0XHRcdFx0YXN5bmMgPSAodHlwZW9mIHBhcmFtcyA9PT0gJ29iamVjdCcgJiYgcGFyYW1zLmFzeW5jKSA/IHBhcmFtcy5hc3luYyA6IG9wdGlvbnMuYXN5bmMsXG5cdFx0XHRcdFx0cGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cblx0XHRcdFx0aWYoIXBhcnRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGlmKG9wdGlvbnMubG9nKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdXcm9uZyBuYW1lc3BhY2UgcHJvdmlkZWQgJyArIG5zU3RyaW5nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cHVibGlzaChfZXZlbnRPYmplY3QsIGFyZ3MsIHBhcnRzLCB7XG5cdFx0XHRcdFx0cmVjdXJyZW50IDogcmVjdXJyZW50LFxuXHRcdFx0XHRcdGRlcHRoIDogZGVwdGgsXG5cdFx0XHRcdFx0YXN5bmMgOiBhc3luYyxcblx0XHRcdFx0XHRwYXJ0cyA6IHBhcnRzLFxuXHRcdFx0XHRcdG5zU3RyaW5nIDogbnNTdHJpbmcsXG5cdFx0XHRcdFx0cGFydHNMZW5ndGggOiBwYXJ0c0xlbmd0aFxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIFN1YnNjcmliZSBldmVudFxuXHRcdFx0ICogQHBhcmFtIG5zU3RyaW5nIHN0cmluZyBuYW1lc3BhY2Ugc3RyaW5nIHNwbGl0ZWQgYnkgZG90c1xuXHRcdFx0ICogQHBhcmFtIGNhbGxiYWNrIGZ1bmN0aW9uIGZ1bmN0aW9uIGV4ZWN1dGVkIGFmdGVyIHB1Ymxpc2hpbmcgZXZlbnRcblx0XHRcdCAqIEBwYXJhbSBwYXJhbXMgZ2l2ZW4gcGFyYW1zXG5cdFx0XHQgKlx0XHRAcGFyYW0gY29udGV4dCBvYmplY3Qvbm90aGluZyBPcHRpb25hbCBvYmplY3Qgd2hpY2ggd2lsbCBiZSB1c2VkIGFzIFwidGhpc1wiIGluIGNhbGxiYWNrXG5cdFx0XHQgKi9cblx0XHRcdHN1YnNjcmliZSA6IGZ1bmN0aW9uKG5zU3RyaW5nLCBjYWxsYmFjaywgcGFyYW1zKSB7XG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcyxcblx0XHRcdFx0XHRzdWJzY3JpcHRpb25zID0gW107XG5cblx0XHRcdFx0Ly8gYXJyYXkgb2YgY2FsbGJhY2tzIC0gbXVsdGlwbGUgc3Vic2NyaXB0aW9uXG5cdFx0XHRcdGlmKGlzQXJyYXkoY2FsbGJhY2spKSB7XG5cdFx0XHRcdFx0Zm9yRWFjaChjYWxsYmFjaywgZnVuY3Rpb24obnVtYmVyKSB7XG5cdFx0XHRcdFx0XHR2YXIgb25lQ2FsbGJhY2sgPSBjYWxsYmFja1tudW1iZXJdO1xuXG5cdFx0XHRcdFx0XHRzdWJzY3JpcHRpb25zID1cdHN1YnNjcmlwdGlvbnMuY29uY2F0KHNlbGYuc3Vic2NyaWJlKG5zU3RyaW5nLCBvbmVDYWxsYmFjaywgcGFyYW1zKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIGFycmF5IG9mIG5hbWVzcGFjZXMgLSBtdWx0aXBsZSBzdWJzY3JpcHRpb25cblx0XHRcdFx0fSBlbHNlIGlmKGlzQXJyYXkobnNTdHJpbmcpKSB7XG5cdFx0XHRcdFx0Zm9yRWFjaChuc1N0cmluZywgZnVuY3Rpb24obnVtYmVyKSB7XG5cdFx0XHRcdFx0XHR2YXIgbmFtZXNwYWNlID0gbnNTdHJpbmdbbnVtYmVyXTtcblxuXHRcdFx0XHRcdFx0c3Vic2NyaXB0aW9ucyA9XHRzdWJzY3JpcHRpb25zLmNvbmNhdChzZWxmLnN1YnNjcmliZShuYW1lc3BhY2UsIGNhbGxiYWNrLCBwYXJhbXMpKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gc3Vic2NyaWJlLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHN1YnNjcmlwdGlvbnM7XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBzdWJzY3JpYmVPbmNlIGV2ZW50IC0gc3Vic2NyaWJlIG9uY2UgdG8gc29tZSBldmVudCwgdGhlbiB1bnN1YnNjcmliZSBpbW1hZGlhdGVseVxuXHRcdFx0ICogQHBhcmFtIG5zU3RyaW5nIHN0cmluZyBuYW1lc3BhY2Ugc3RyaW5nIHNwbGl0ZWQgYnkgZG90c1xuXHRcdFx0ICogQHBhcmFtIGNhbGxiYWNrIGZ1bmN0aW9uIGZ1bmN0aW9uIGV4ZWN1dGVkIGFmdGVyIHB1Ymxpc2hpbmcgZXZlbnRcblx0XHRcdCAqIEBwYXJhbSBwYXJhbXMgZ2l2ZW4gcGFyYW1zXG5cdFx0XHQgKlx0XHRAcGFyYW0gY29udGV4dCBvYmplY3Qvbm90aGluZyBPcHRpb25hbCBvYmplY3Qgd2hpY2ggd2lsbCBiZSB1c2VkIGFzIFwidGhpc1wiIGluIGNhbGxiYWNrXG5cdFx0XHQgKi9cblx0XHRcdHN1YnNjcmliZU9uY2UgOiBmdW5jdGlvbihuc1N0cmluZywgY2FsbGJhY2ssIHBhcmFtcykge1xuXHRcdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdFx0c3Vic2NyaXB0aW9uID0gbnVsbDtcblxuXHRcdFx0XHRmdW5jdGlvbiBzdWJzY3JpcHRpb25DYWxsYmFjaygpIHtcblx0XHRcdFx0XHR2YXIgY29udGV4dCA9IHRoaXM7XG5cblx0XHRcdFx0XHRjYWxsYmFjay5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuXHRcdFx0XHRcdHNlbGYudW5zdWJzY3JpYmUoc3Vic2NyaXB0aW9uKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN1YnNjcmlwdGlvbiA9IHNlbGYuc3Vic2NyaWJlKG5zU3RyaW5nLCBzdWJzY3JpcHRpb25DYWxsYmFjaywgcGFyYW1zKTtcblx0XHRcdFx0cmV0dXJuIHN1YnNjcmlwdGlvbjtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIFVuc3Vic2NyaWJlIGZyb20gZ2l2ZW4gc3Vic2NyaXB0aW9uXG5cdFx0XHQgKiBAcGFyYW0gc3Vic2NyaWJlT2JqZWN0IHN1YnNjcmlwdGlvbiBvYmplY3QgZ2l2ZW4gb24gc3Vic2NyaWJlIChyZXR1cm5lZCBmcm9tIHN1YnNjcmlwdGlvbilcblx0XHRcdCAqL1xuXHRcdFx0dW5zdWJzY3JpYmUgOiBmdW5jdGlvbihzdWJzY3JpYmVPYmplY3QpIHtcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0XHRcdC8vaWYgd2UgaGF2ZSBhcnJheSBvZiBjYWxsYmFja3MgLSBtdWx0aXBsZSBzdWJzY3JpcHRpb25cblx0XHRcdFx0aWYoaXNBcnJheShzdWJzY3JpYmVPYmplY3QpKSB7XG5cdFx0XHRcdFx0Zm9yRWFjaChzdWJzY3JpYmVPYmplY3QsIGZ1bmN0aW9uKG51bWJlcikge1xuXHRcdFx0XHRcdFx0dmFyIG9uZVN1YnNjcmlidGlvbiA9IHN1YnNjcmliZU9iamVjdFtudW1iZXJdO1xuXG5cdFx0XHRcdFx0XHR1bnN1YnNjcmliZS5hcHBseShzZWxmLCBbb25lU3Vic2NyaWJ0aW9uXSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dW5zdWJzY3JpYmUuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogbmV3SW5zdGFuY2UgLSBtYWtlcyBuZXcgaW5zdGFuY2Ugb2YgcHVic3ViIG9iamVjdCB3aXRoIGl0cyBvd24gY29uZmlnXG5cdFx0XHQgKiBAcGFyYW0gcGFyYW1zIGluc3RhbmNlIGNvbmZpZ3VyYXRpb25cblx0XHRcdCAqICAgICAgICBAcGFyYW0gc2VwYXJhdG9yIHNlcGFyYXRvciAoZGVmYXVsdCBpcyBcIi9cIilcblx0XHRcdCAqICAgICAgICBAcGFyYW0gcmVjdXJyZW50IHNob3VsZCBwdWJsaXNoIGV2ZW50cyBiZSBidWJibGVkIHRocm91Z2ggbmFtZXNwYWNlXG5cdFx0XHQgKiAgICAgICAgQHBhcmFtIGFzeW5jIHNob3VsZCBwdWJsaXNoIGV2ZW50cyBiZSBhc3luY2hyb25vdXMgLSBub3QgYmxvY2tpbmcgZnVuY3Rpb24gZXhlY3V0aW9uXG5cdFx0XHQgKiAgICAgICAgQHBhcmFtIGxvZyBjb25zb2xlLndhcm4vZXJyb3IgZXZlcnkgcHJvYmxlbVxuXHRcdFx0ICovXG5cdFx0XHRuZXdJbnN0YW5jZSA6IGZ1bmN0aW9uKHBhcmFtcykge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFB1YnN1YihwYXJhbXMpO1xuXHRcdFx0fVxuXHRcdH07IC8vcmV0dXJuIGJsb2NrXG5cdH1cblx0cHVic3ViSW5zdGFuY2UgPSBuZXcgUHVic3ViKHB1YnN1YkNvbmZpZyk7XG5cblx0Ly9pZiBzYmQncyB1c2luZyByZXF1aXJlanMgbGlicmFyeSB0byBsb2FkIHB1YnN1Yi5qc1xuXHRpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0ZGVmaW5lKHB1YnN1Ykluc3RhbmNlKTtcblx0fVxuXG5cdC8vbm9kZS5qc1xuXHRpZih0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gcHVic3ViSW5zdGFuY2U7XG5cdH1cblxuXHRpZih0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xuXHRcdHdpbmRvdy5wdWJzdWIgPSBwdWJzdWJJbnN0YW5jZTtcblx0XHRpZih3aW5kb3cgIT09IHNjb3BlKSB7XG5cdFx0XHRzY29wZS5wdWJzdWIgPSBwdWJzdWJJbnN0YW5jZTtcblx0XHR9XG5cdH1cbn0pKHRoaXMpO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwdWJzdWIgZnJvbSAncHVic3ViLmpzJztcbmltcG9ydCBOYXZDb250cm9sIGZyb20gJy4vTmF2Q29udHJvbC5qcyc7XG5pbXBvcnQgTWVtb3J5IGZyb20gJy4vTWVtb3J5LmpzJztcbmltcG9ydCBNYWluQ29udHJvbCBmcm9tICcuL01haW5Db250cm9sLmpzJztcblxuY29uc3QgRXZlbnRBZ2dyZWdhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB1cGRhdGVOYXZUb2tlbiA9IHB1YnN1Yi5zdWJzY3JpYmUoXG4gICAgICAgIFwiUHJvamVjdEFkZGVkXCIsXG4gICAgICAgIE5hdkNvbnRyb2wudXBkYXRlTmF2U2VjdGlvbi5iaW5kKE5hdkNvbnRyb2wsIE1lbW9yeSkpO1xuXG4gICAgY29uc3QgZGVsZXRlTmF2VG9rZW4gPSBwdWJzdWIuc3Vic2NyaWJlKFxuICAgICAgICBcIlByb2plY3REZWxldGVkXCIsXG4gICAgICAgIE5hdkNvbnRyb2wudXBkYXRlTmF2U2VjdGlvbi5iaW5kKE5hdkNvbnRyb2wsIE1lbW9yeSlcbiAgICApXG5cbiAgICBjb25zdCB0b2dnbGVCb29rbWFya2VkVG9rZW4gPSBwdWJzdWIuc3Vic2NyaWJlKFxuICAgICAgICBcIlRvZ2dsZUJvb2ttYXJrZWRcIixcbiAgICAgICAgTmF2Q29udHJvbC51cGRhdGVOYXZTZWN0aW9uLmJpbmQoTmF2Q29udHJvbCwgTWVtb3J5KVxuICAgIClcblxuICAgIGNvbnN0IHNldEFjdGl2ZVByb2plY3RUb2tlbiA9IHB1YnN1Yi5zdWJzY3JpYmUoXG4gICAgICAgIFwiU2V0QWN0aXZlUHJvamVjdFwiLFxuICAgICAgICAoaWQpID0+IE1haW5Db250cm9sLnVwZGF0ZU1haW4oTWVtb3J5LmdldFByb2plY3RJZChpZCkpXG4gICAgKVxuXG4gICAgY29uc3QgYWRkUHJvamVjdERlc2NUb2tlbiA9IHB1YnN1Yi5zdWJzY3JpYmUoXG4gICAgICAgIFwiQWRkUHJvamVjdERlc2NcIixcbiAgICAgICAgKGlkLCBkZXNjKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gTWVtb3J5LmdldFByb2plY3RJZChpZCk7XG4gICAgICAgICAgICBwcm9qZWN0LnNldERlc2NyaXB0aW9uKGRlc2MpO1xuICAgICAgICAgICAgTWFpbkNvbnRyb2wudXBkYXRlTWFpbihwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIClcblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEFnZ3JlZ2F0b3IiLCJjb25zdCBJY29uID0gKHNyYykgPT4ge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gICAgaWNvbi5zcmMgPSBzcmM7XG5cbiAgICByZXR1cm4gaWNvblxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uIiwiaW1wb3J0IHB1YnN1YiBmcm9tICdwdWJzdWIuanMnO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEhlYWRlciB9IGZyb20gJy4vTWFpblZpZXcuanMnO1xuaW1wb3J0IHsgZGlzcGxheURlbGV0ZSB9IGZyb20gJy4vVXRpbHMuanMnO1xuXG5jb25zdCBNYWluQ29udHJvbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdXBkYXRlTWFpbiA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0SGVhZGVyKHByb2plY3QpKTtcbiAgICB9XG5cbiAgICBjb25zdCBzYXZlRGVzY3JpcHRpb24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZXZlbnQudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicHJvamVjdC1kZXNjcmlwdGlvblwiXScpLnZhbHVlO1xuICAgICAgICBwdWJzdWIucHVibGlzaChcIkFkZFByb2plY3REZXNjXCIsIFtwYXJzZUludChwcm9qZWN0SWQpLCBkZXNjcmlwdGlvbl0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZU1haW4sXG4gICAgICAgIHNhdmVEZXNjcmlwdGlvblxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Db250cm9sIiwiaW1wb3J0IE1haW5Db250cm9sIGZyb20gXCIuL01haW5Db250cm9sLmpzXCI7XG5pbXBvcnQgeyBkaXNwbGF5RGVsZXRlIH0gZnJvbSBcIi4vVXRpbHMuanNcIjtcblxuY29uc3QgY3JlYXRlVGl0bGUgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuICAgIHRpdGxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByb2plY3QudGl0bGUpKTtcbiAgICByZXR1cm4gdGl0bGVcbn1cblxuY29uc3QgY3JlYXRlRGVzYyA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImlucHV0LWdyb3VwLWRlc2NyaXB0aW9uXCIpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBjb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvbiA/IHByb2plY3QuZGVzY3JpcHRpb24gOiBcIlwiO1xuICAgIGNvbnN0IHByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb21wdC5jbGFzc0xpc3QuYWRkKFwicHJvbXB0XCIpO1xuICAgIHByb21wdC50ZXh0Q29udGVudCA9IGNvbnRlbnQgPyBcIkVkaXQgZGVzY3JpcHRpb24uLi5cIiA6IFwiQWRkIGEgcHJvamVjdCBkZXNjcmlwdGlvbi4uLlwiO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpKTtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwcm9tcHQpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1ub25lXCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgcHJvamVjdC5pZCk7XG5cbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICB0ZXh0YXJlYS5uYW1lID0gXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI7XG4gICAgdGV4dGFyZWEucGxhY2Vob2xkZXIgPSBcIkVudGVyIHlvdXIgcHJvamVjdCBkZXNjcmlwdGlvbiBoZXJlLlwiO1xuICAgIHRleHRhcmVhLnZhbHVlID0gcHJvamVjdC5kZXNjcmlwdGlvbiA/IHByb2plY3QuZGVzY3JpcHRpb24gOiBcIlwiO1xuICAgIHRleHRhcmVhLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZGVzY3JpcHRpb25cIik7XG5cbiAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzYXZlQnRuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiU2F2ZVwiKSk7XG4gICAgc2F2ZUJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBzYXZlQnRuLmNsYXNzTGlzdC5hZGQoXCJzYXZlLWRlc2NyaXB0aW9uLWJ0blwiKTtcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnRuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ2FuY2VsXCIpKTtcbiAgICBjYW5jZWxCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtZGVzY3JpcHRpb24tYnRuXCIpO1xuXG4gICAgZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlEZWxldGUuYmluZCh3aW5kb3csIGlucHV0LCBkZXNjcmlwdGlvbikpO1xuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheURlbGV0ZS5iaW5kKHdpbmRvdywgZGVzY3JpcHRpb24sIGlucHV0KSk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBNYWluQ29udHJvbC5zYXZlRGVzY3JpcHRpb24pO1xuXG4gICAgaW5wdXQuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuICAgIGlucHV0LmFwcGVuZENoaWxkKHNhdmVCdG4pO1xuICAgIGlucHV0LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHJldHVybiBkaXZcbn1cblxuY29uc3QgY3JlYXRlUHJvamVjdEhlYWRlciA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUaXRsZShwcm9qZWN0KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVEZXNjKHByb2plY3QpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gZGl2XG59XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAobWVtb3J5KSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5pZCA9IFwibWFpblwiO1xuXG4gICAgY29uc3QgYmFzZVByb2plY3QgPSBtZW1vcnkuZ2V0UHJvamVjdElkKDEpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEhlYWRlcihiYXNlUHJvamVjdCkpO1xuICAgIHJldHVybiBtYWluO1xufVxuXG5leHBvcnQgeyBjcmVhdGVNYWluLCBjcmVhdGVQcm9qZWN0SGVhZGVyIH0iLCJpbXBvcnQgcHVic3ViIGZyb20gJ3B1YnN1Yi5qcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QuanMnO1xuaW1wb3J0IHsgcmVtb3ZlQnlJZCB9IGZyb20gXCIuL1V0aWxzLmpzXCI7XG5cbmNvbnN0IE1lbW9yeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHByb2plY3RzID0gW107XG4gICAgbGV0IGJvb2ttYXJrZWRQcm9qZWN0cyA9IFtdO1xuXG4gICAgY29uc3QgYWRkVG9Qcm9qZWN0cyA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0LnR5cGUgIT09IFwiUHJvamVjdFwiKSBwcm9qZWN0ID0gUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRUb0Jvb2ttYXJrZWQgPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbmRleCBvZiBpdGVtIG5vdCBmb3VuZCBpbiBQcm9qZWN0cyBsaXN0XCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBwcm9qZWN0c1tpbmRleF07XG4gICAgICAgIHRhcmdldC5zZXRCb29rbWFya2VkKHRydWUpO1xuICAgICAgICBib29rbWFya2VkUHJvamVjdHMucHVzaCh0YXJnZXQpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUZyb21Cb29rbWFya2VkID0gKHByb2plY3RJZCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGJvb2ttYXJrZWRQcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkluZGV4IG9mIGl0ZW0gbm90IGZvdW5kIGluIFByb2plY3RzIGxpc3RcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gYm9va21hcmtlZFByb2plY3RzW2luZGV4XTtcbiAgICAgICAgdGFyZ2V0LnNldEJvb2ttYXJrZWQoZmFsc2UpO1xuICAgICAgICBib29rbWFya2VkUHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0SWQgPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgIHJlbW92ZUJ5SWQocHJvamVjdHMsIHByb2plY3RJZCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdElkID0gKHByb2plY3RJZCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChcbiAgICAgICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWRcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gcHJvamVjdHNbaW5kZXhdO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3RUb2tlbiA9IHB1YnN1Yi5zdWJzY3JpYmUoXCJQcm9qZWN0QWRkZWRcIiwgYWRkVG9Qcm9qZWN0cyk7XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdFRva2VuID0gcHVic3ViLnN1YnNjcmliZShcIlByb2plY3REZWxldGVkXCIsIHJlbW92ZVByb2plY3RJZCk7XG4gICAgY29uc3QgdG9nZ2xlQm9va21hcmtlZFRva2VuID0gcHVic3ViLnN1YnNjcmliZShcbiAgICAgICAgXCJUb2dnbGVCb29rbWFya2VkXCIsXG4gICAgICAgIChpZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RJZChpZCk7XG4gICAgICAgICAgICBwcm9qZWN0LmlzQm9va21hcmtlZCA/IHJlbW92ZUZyb21Cb29rbWFya2VkKGlkKSA6IGFkZFRvQm9va21hcmtlZChpZCk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdHMsXG4gICAgICAgIGJvb2ttYXJrZWRQcm9qZWN0cyxcbiAgICAgICAgYWRkVG9Qcm9qZWN0cyxcbiAgICAgICAgcmVtb3ZlUHJvamVjdElkLFxuICAgICAgICBhZGRUb0Jvb2ttYXJrZWQsXG4gICAgICAgIHJlbW92ZUZyb21Cb29rbWFya2VkLFxuICAgICAgICBnZXRQcm9qZWN0SWRcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IE1lbW9yeSIsImltcG9ydCBwdWJzdWIgZnJvbSAncHVic3ViLmpzJztcbmltcG9ydCB7IGNyZWF0ZVByb2plY3ROb2RlIH0gZnJvbSAnLi9OYXZWaWV3LmpzJztcblxuY29uc3QgTmF2Q29udHJvbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGN1cnJlbnRBY3RpdmUgPSAxO1xuXG4gICAgY29uc3QgdXBkYXRlQWN0aXZlTmF2ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgY3VycmVudEFjdGl2ZSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuICAgICAgICAgICAgY29uc3QgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2IC5hY3RpdmVcIilcbiAgICAgICAgICAgIHByZXYuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHByZXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZUFjdGl2ZU5hdik7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI25hdiBbZGF0YS1pZD1cIiR7Y3VycmVudEFjdGl2ZX1cIl1gKTtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIG5hdi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXBkYXRlQWN0aXZlTmF2KTtcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJTZXRBY3RpdmVQcm9qZWN0XCIsIFtwYXJzZUludChjdXJyZW50QWN0aXZlKV0pO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZUFkZFByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWZvcm1cIikuY2xhc3NMaXN0LnRvZ2dsZShcImRpc3BsYXktbm9uZVwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzcGxheS1ub25lXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZUJvb2ttYXJrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHRhcmdldFByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG5cbiAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJUb2dnbGVCb29rbWFya2VkXCIsIFtwYXJzZUludCh0YXJnZXRQcm9qZWN0SWQpXSk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlTmF2ID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdlwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzcGxheS1ub25lXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJwcm9qZWN0LXRpdGxlXCJdYCk7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwiUHJvamVjdEFkZGVkXCIsIFt0aXRsZS52YWx1ZV0pO1xuICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRvZ2dsZUFkZFByb2plY3RGb3JtKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlTmF2U2VjdGlvbiA9IChtZW1vcnkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cz51bFwiKTtcbiAgICAgICAgY29uc3QgYm9va21hcmtlZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWJvb2ttYXJrZWRcIik7XG5cbiAgICAgICAgcHJvamVjdHNMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGJvb2ttYXJrZWRMaXN0LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBtZW1vcnkucHJvamVjdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROb2RlID0gY3JlYXRlUHJvamVjdE5vZGUocHJvamVjdCk7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5pc0Jvb2ttYXJrZWQpIHtcbiAgICAgICAgICAgICAgICBib29rbWFya2VkTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0Tm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVBY3RpdmVOYXYoKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHRhcmdldFByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG5cbiAgICAgICAgLy8gSWYgZGVsZXRlIGN1cnJlbnQgYWN0aXZlIG5hdiwgZGVmYXVsdCBiYWNrIHRvIGhvbWUgbmF2XG4gICAgICAgIGlmIChjdXJyZW50QWN0aXZlID09PSB0YXJnZXRQcm9qZWN0SWQpIGN1cnJlbnRBY3RpdmUgPSAxO1xuICAgICAgICBwdWJzdWIucHVibGlzaChcIlByb2plY3REZWxldGVkXCIsIFtwYXJzZUludCh0YXJnZXRQcm9qZWN0SWQpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IGN1cnJlbnRBY3RpdmUoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEFjdGl2ZVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVBY3RpdmVOYXYsXG4gICAgICAgIHRvZ2dsZUFkZFByb2plY3RGb3JtLFxuICAgICAgICB0b2dnbGVOYXYsXG4gICAgICAgIHRvZ2dsZUJvb2ttYXJrZWQsXG4gICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgdXBkYXRlTmF2U2VjdGlvbixcbiAgICAgICAgaGFuZGxlRGVsZXRlXG4gICAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBOYXZDb250cm9sIiwiaW1wb3J0IE5hdkNvbnRyb2wgZnJvbSAnLi9OYXZDb250cm9sLmpzJztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbi5qcyc7XG5pbXBvcnQgc3Rhckljb24gZnJvbSAnLi9JY29ucy9zdGFyLnN2Zyc7XG5pbXBvcnQgc3RhcnRPdXRsaW5lSWNvbiBmcm9tICcuL0ljb25zL3N0YXItb3V0bGluZS5zdmcnO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0Tm9kZSA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgcHJvamVjdC5pZCk7XG5cbiAgICBpZiAocHJvamVjdC5pZCAhPT0gMSkge1xuICAgICAgICBjb25zdCBpY29uID0gcHJvamVjdC5pc0Jvb2ttYXJrZWQgPyBJY29uKHN0YXJJY29uKSA6IEljb24oc3RhcnRPdXRsaW5lSWNvbik7XG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE5hdkNvbnRyb2wudG9nZ2xlQm9va21hcmtlZCk7XG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgfVxuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwcm9qZWN0LnRpdGxlKSk7XG5cbiAgICBpZiAocHJvamVjdC5pZCAhPT0gMSkge1xuICAgICAgICBjb25zdCBkbHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkbHRCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIik7XG4gICAgICAgIGRsdEJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgICBkbHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE5hdkNvbnRyb2wuaGFuZGxlRGVsZXRlKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChkbHRCdG4pO1xuICAgIH1cblxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE5hdkNvbnRyb2wudXBkYXRlQWN0aXZlTmF2KTtcbiAgICByZXR1cm4gaXRlbVxufVxuXG5jb25zdCBjcmVhdGVCb29rbWFya2VkU2VjdGlvbiA9IChtZW1vcnkpID0+IHtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB1bC5pZCA9IFwicHJvamVjdHMtYm9va21hcmtlZFwiO1xuXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBtZW1vcnkuYm9va21hcmtlZFByb2plY3RzKSB7XG4gICAgICAgIC8vIE9ubHkgc2hvd3MgYm9va21hcmtlZCBwcm9qZWN0cyBpbiB0aGUgdG9wIG9mIG5hdiBzZWN0aW9uXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVQcm9qZWN0Tm9kZShwcm9qZWN0KTtcblxuICAgICAgICB1bC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdWxcbn1cblxuY29uc3QgY3JlYXRlUHJvamVjdFNlY3Rpb24gPSAobWVtb3J5KSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuaWQgPSBcInByb2plY3RzXCI7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBtZW1vcnkucHJvamVjdHMpIHtcbiAgICAgICAgLy8gc2tpcCBEZWZhdWx0IChIb21lKSBQcm9qZWN0XG4gICAgICAgIGlmIChwcm9qZWN0LmlzQm9va21hcmtlZCkgY29udGludWVcblxuICAgICAgICBjb25zdCBpdGVtID0gY3JlYXRlUHJvamVjdE5vZGUocHJvamVjdCk7XG5cbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxuICAgIGRpdi5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgICByZXR1cm4gZGl2XG59XG5cbmNvbnN0IGNyZWF0ZUFkZFByb2plY3RCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuaWQgPSBcImFkZC1wcm9qZWN0XCI7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWJvbGRcIik7XG4gICAgZGl2LnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTmF2Q29udHJvbC50b2dnbGVBZGRQcm9qZWN0Rm9ybSk7XG5cbiAgICByZXR1cm4gZGl2XG59XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmlkID0gXCJhZGQtcHJvamVjdC1mb3JtXCI7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1ub25lXCIpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBpbnB1dC5uYW1lID0gXCJwcm9qZWN0LXRpdGxlXCI7XG4gICAgaW5wdXQuaWQgPSBcInByb2plY3QtdGl0bGVcIjtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiTmV3IFByb2plY3QgVGl0bGVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGNhbmNlbEJ0bi5pZCA9IFwiY2FuY2VsLXByb2plY3QtYnRuXCI7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIlxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTmF2Q29udHJvbC50b2dnbGVBZGRQcm9qZWN0Rm9ybSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdG4udHlwZSA9IFwic3VibWl0XCI7XG4gICAgYWRkQnRuLmlkID0gXCJhZGQtcHJvamVjdC1idG5cIjtcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBOYXZDb250cm9sLmhhbmRsZVN1Ym1pdCk7XG4gICAgcmV0dXJuIGZvcm1cbn1cblxuY29uc3QgY3JlYXRlTmF2ID0gKG1lbW9yeSkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2LmlkID0gXCJuYXZcIjtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChjcmVhdGVCb29rbWFya2VkU2VjdGlvbihtZW1vcnkpKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdFNlY3Rpb24obWVtb3J5KSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZUFkZFByb2plY3RCdG4oKSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RGb3JtKCkpO1xuICAgIHJldHVybiBuYXZcbn1cblxuZXhwb3J0IHsgY3JlYXRlTmF2LCBjcmVhdGVQcm9qZWN0Tm9kZSB9IiwiaW1wb3J0IHsgY3JlYXRlTWFpbiB9IGZyb20gJy4vTWFpblZpZXcuanMnO1xuaW1wb3J0IHsgY3JlYXRlTmF2IH0gZnJvbSAnLi9OYXZWaWV3LmpzJztcbmltcG9ydCBOYXZDb250cm9sIGZyb20gJy4vTmF2Q29udHJvbC5qcyc7XG5pbXBvcnQgTWVtb3J5IGZyb20gJy4vTWVtb3J5LmpzJztcbmltcG9ydCBwdWJzdWIgZnJvbSAncHVic3ViLmpzJztcblxuY29uc3QgUGFnZVZpZXcgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHBhZ2VNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYWdlLW1haW5cIik7XG4gICAgY29uc3QgbmF2RHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdi1kcm9wZG93blwiKTtcblxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgICAgIG5hdkRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBOYXZDb250cm9sLnRvZ2dsZU5hdik7XG4gICAgICAgIHBhZ2VNYWluLmFwcGVuZENoaWxkKGNyZWF0ZU5hdihNZW1vcnkpKTtcbiAgICAgICAgcGFnZU1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbihNZW1vcnkpKTtcbiAgICAgICAgTmF2Q29udHJvbC51cGRhdGVBY3RpdmVOYXYoKTtcblxuICAgICAgICAvLyBBbHdheXMgbWFrZXMgdGhlIG5hdiBhcHBlYXIgaWYgd2luZG93IHdpZHRoIGlzID49IDY1MHB4XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA2NTApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdlwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheS1ub25lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0XG4gICAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlVmlldyIsImltcG9ydCB7IHJlbW92ZUJ5SWQgfSBmcm9tIFwiLi9VdGlsc1wiO1xuXG5jb25zdCBQcm9qZWN0ID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICAgIGNvbnN0IGlkID0gUHJvamVjdC5nZXRJZCgpO1xuICAgIGNvbnN0IHR5cGUgPSBcIlByb2plY3RcIjtcbiAgICBsZXQgdG9kb0xpc3QgPSBbXTtcbiAgICBsZXQgdGl0bGUgPSBwcm9qZWN0VGl0bGU7XG4gICAgbGV0IGlzQm9va21hcmtlZCA9IGZhbHNlO1xuICAgIGxldCBkZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgICAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVRvZG9JZCA9ICh0b2RvSWQpID0+IHtcbiAgICAgICAgcmVtb3ZlQnlJZCh0b2RvTGlzdCwgdG9kb0lkKVxuICAgIH1cblxuICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAoZGVzYykgPT4ge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IGRlc2M7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Qm9va21hcmtlZCA9IChib29sKSA9PiB7XG4gICAgICAgIGlzQm9va21hcmtlZCA9IGJvb2w7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aXRsZVxuICAgICAgICB9LFxuICAgICAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHRvZG9MaXN0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRvZG9MaXN0XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBpc0Jvb2ttYXJrZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNCb29rbWFya2VkXG4gICAgICAgIH0sXG4gICAgICAgIGFkZFRvZG8sXG4gICAgICAgIHJlbW92ZVRvZG9JZCxcbiAgICAgICAgc2V0VGl0bGUsXG4gICAgICAgIHNldERlc2NyaXB0aW9uLFxuICAgICAgICBzZXRCb29rbWFya2VkXG4gICAgfVxufVxuXG4vLyBTZXQgUHJvamVjdCBzdGF0aWMgY291bnRlciBmb3IgaWRcblByb2plY3QuY291bnRlciA9IDE7XG5Qcm9qZWN0LmdldElkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBQcm9qZWN0LmNvdW50ZXIrK1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0IiwiY29uc3QgcmVtb3ZlQnlJZCA9IChsaXN0LCBvYmplY3RJZCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gbGlzdC5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09PSBvYmplY3RJZCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcnlpbmcgdG8gZGVsZXRlIGFuIGl0ZW0gdGhhdCBkb2VzIG5vdCBleGlzdCFcIik7XG4gICAgfVxufVxuXG5jb25zdCBkaXNwbGF5RGVsZXRlID0gKGRpc3BsYXlOb2RlLCBkZWxldGVOb2RlKSA9PiB7XG4gICAgZGlzcGxheU5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXktbm9uZVwiKTtcbiAgICBkZWxldGVOb2RlLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW5vbmVcIik7XG59XG5cbmV4cG9ydCB7IHJlbW92ZUJ5SWQsIGRpc3BsYXlEZWxldGUgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgRXZlbnRBZ2dyZWdhdG9yIGZyb20gJy4vRXZlbnRBZ2dyZWdhdG9yLmpzJztcbmltcG9ydCBNZW1vcnkgZnJvbSAnLi9NZW1vcnkuanMnO1xuaW1wb3J0IFBhZ2VWaWV3IGZyb20gJy4vUGFnZVZpZXcuanMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0LmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBob21lUHJvamVjdCA9IFByb2plY3QoXCJIb21lXCIpO1xuaG9tZVByb2plY3Quc2V0RGVzY3JpcHRpb24oXCJZb3VyIHBlcnNvbmFsIGRlZmF1bHQgcHJvamVjdCB0byBzdG9yZSB5b3VyIHRvZG9zLlwiKTtcbk1lbW9yeS5hZGRUb1Byb2plY3RzKGhvbWVQcm9qZWN0KTtcbk1lbW9yeS5hZGRUb0Jvb2ttYXJrZWQoaG9tZVByb2plY3QuaWQpO1xuXG5jb25zdCB0ZXN0UHJvamVjdCA9IFByb2plY3QoXCJUZXN0IFByb2plY3RcIik7XG5NZW1vcnkuYWRkVG9Qcm9qZWN0cyh0ZXN0UHJvamVjdCk7XG5cblBhZ2VWaWV3LmluaXQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=