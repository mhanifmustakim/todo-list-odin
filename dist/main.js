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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: inherit;\n    color: inherit;\n}\n\n:root {\n    --header-color: #1F3541;\n    --footer-color: #5289B5;\n    --bg-color: #AFD8F2;\n    --nav-color: #cee6f5;\n    --custom-white: #EDF2F3;\n    --fade-color: #505050;\n    --red: #ff6e6e;\n    --green: #bada55;\n    font-size: 16px;\n    font-family: \"Roboto\", sans-serif;\n}\n\nli::marker {\n    content: none;\n}\n\n.icon {\n    width: 1em;\n    height: 1em;\n}\n\n.display-none {\n    display: none !important;\n}\n\n.text-bold {\n    font-weight: bold;\n}\n\n#page-container {\n    width: 100vw;\n    min-height: 100vh;\n    background-color: var(--bg-color);\n    display: grid;\n    grid-template: 4rem 1fr 2rem / 1fr;\n}\n\n#page-header,\n#page-footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--custom-white);\n}\n\n#page-header {\n    background-color: var(--header-color);\n    justify-content: space-between;\n    padding: 0 1rem;\n    font-size: 1.5rem;\n}\n\n#nav-dropdown {\n    background-color: var(--header-color);\n    outline: none;\n    border: none;\n}\n\n#nav {\n    grid-area: nav;\n    background-color: var(--nav-color);\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    font-size: 1.2rem;\n}\n\n#nav header {\n    font-size: 1.3em;\n    font-weight: bold;\n    padding-bottom: 1rem;\n}\n\n#nav ul>li {\n    padding: 0.5rem;\n    border-radius: 0.5em;\n    cursor: pointer;\n    display: grid;\n    align-items: center;\n    justify-items: start;\n    grid-template-columns: auto 1fr auto;\n    gap: 0.5rem;\n}\n\n#nav button.delete-btn {\n    float: right;\n    background-color: transparent;\n    border: none;\n    color: var(--header-color);\n    font-size: 0.9rem;\n    font-weight: bold;\n    padding: 0.2em 0.3em;\n    border-radius: 0.2em;\n}\n\n#nav ul>li.active {\n    font-weight: bold;\n    background-color: var(--bg-color);\n}\n\n#add-project {\n    cursor: pointer;\n}\n\n#add-project-form {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 0.5rem;\n}\n\n#add-project-form>* {\n    border-radius: 0.5em;\n}\n\n#add-project-form>input {\n    grid-area: 1 / 1 / 1 / -1;\n    padding: 2px 0;\n    padding-left: 1ch;\n}\n\n#add-project-form>button {\n    padding: 0.5rem 0;\n    font-weight: bold;\n}\n\n#add-project-btn {\n    background-color: var(--green);\n}\n\n#cancel-project-btn {\n    background-color: var(--red);\n}\n\n#main {\n    display: grid;\n    padding: clamp(1rem, 5vw, 3rem);\n    grid-template: auto 1fr / 1fr;\n    gap: 1rem;\n}\n\n#main .project-header {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.project-header>.project-title {\n    font-size: 2.5rem;\n}\n\n.input-group-description {\n    position: relative;\n}\n\n.input-group-description .enabler-description {\n    color: var(--fade-color);\n    padding-left: 0.5rem;\n}\n\n.input-group-description .input-description {\n    background-color: var(--nav-color);\n    border-radius: 1em;\n    width: 100%;\n    height: 10ch;\n    padding: 0.5rem;\n    border: none;\n    resize: none;\n}\n\n.input-group-description button {\n    padding: 0.5rem 1.2rem;\n    float: right;\n    border-radius: 1em;\n}\n\n.input-group-description .save-description-btn {\n    background-color: var(--green);\n}\n\n.input-group-description .cancel-description-btn {\n    background-color: var(--red);\n    margin-right: 0.5rem;\n}\n\n#page-footer {\n    background-color: var(--footer-color);\n}\n\n@media screen and (min-width: 650px) {\n    #page-header {\n        justify-content: center;\n    }\n\n    #nav-dropdown {\n        display: none;\n    }\n\n    #page-main {\n        display: grid;\n        grid-template: 1fr / 17.5rem 1fr;\n        grid-template-areas:\n            \"nav main\";\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,oBAAoB;IACpB,uBAAuB;IACvB,qBAAqB;IACrB,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,iCAAiC;IACjC,aAAa;IACb,kCAAkC;AACtC;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;IACI,qCAAqC;IACrC,8BAA8B;IAC9B,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,kCAAkC;IAClC,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,oBAAoB;IACpB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,6BAA6B;IAC7B,YAAY;IACZ,0BAA0B;IAC1B,iBAAiB;IACjB,iBAAiB;IACjB,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,iCAAiC;AACrC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,WAAW;AACf;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,6BAA6B;IAC7B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,oBAAoB;AACxB;;AAEA;IACI,kCAAkC;IAClC,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,4BAA4B;IAC5B,oBAAoB;AACxB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI;QACI,uBAAuB;IAC3B;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;QACb,gCAAgC;QAChC;sBACc;IAClB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: inherit;\n    color: inherit;\n}\n\n:root {\n    --header-color: #1F3541;\n    --footer-color: #5289B5;\n    --bg-color: #AFD8F2;\n    --nav-color: #cee6f5;\n    --custom-white: #EDF2F3;\n    --fade-color: #505050;\n    --red: #ff6e6e;\n    --green: #bada55;\n    font-size: 16px;\n    font-family: \"Roboto\", sans-serif;\n}\n\nli::marker {\n    content: none;\n}\n\n.icon {\n    width: 1em;\n    height: 1em;\n}\n\n.display-none {\n    display: none !important;\n}\n\n.text-bold {\n    font-weight: bold;\n}\n\n#page-container {\n    width: 100vw;\n    min-height: 100vh;\n    background-color: var(--bg-color);\n    display: grid;\n    grid-template: 4rem 1fr 2rem / 1fr;\n}\n\n#page-header,\n#page-footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--custom-white);\n}\n\n#page-header {\n    background-color: var(--header-color);\n    justify-content: space-between;\n    padding: 0 1rem;\n    font-size: 1.5rem;\n}\n\n#nav-dropdown {\n    background-color: var(--header-color);\n    outline: none;\n    border: none;\n}\n\n#nav {\n    grid-area: nav;\n    background-color: var(--nav-color);\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    font-size: 1.2rem;\n}\n\n#nav header {\n    font-size: 1.3em;\n    font-weight: bold;\n    padding-bottom: 1rem;\n}\n\n#nav ul>li {\n    padding: 0.5rem;\n    border-radius: 0.5em;\n    cursor: pointer;\n    display: grid;\n    align-items: center;\n    justify-items: start;\n    grid-template-columns: auto 1fr auto;\n    gap: 0.5rem;\n}\n\n#nav button.delete-btn {\n    float: right;\n    background-color: transparent;\n    border: none;\n    color: var(--header-color);\n    font-size: 0.9rem;\n    font-weight: bold;\n    padding: 0.2em 0.3em;\n    border-radius: 0.2em;\n}\n\n#nav ul>li.active {\n    font-weight: bold;\n    background-color: var(--bg-color);\n}\n\n#add-project {\n    cursor: pointer;\n}\n\n#add-project-form {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 0.5rem;\n}\n\n#add-project-form>* {\n    border-radius: 0.5em;\n}\n\n#add-project-form>input {\n    grid-area: 1 / 1 / 1 / -1;\n    padding: 2px 0;\n    padding-left: 1ch;\n}\n\n#add-project-form>button {\n    padding: 0.5rem 0;\n    font-weight: bold;\n}\n\n#add-project-btn {\n    background-color: var(--green);\n}\n\n#cancel-project-btn {\n    background-color: var(--red);\n}\n\n#main {\n    display: grid;\n    padding: clamp(1rem, 5vw, 3rem);\n    grid-template: auto 1fr / 1fr;\n    gap: 1rem;\n}\n\n#main .project-header {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.project-header>.project-title {\n    font-size: 2.5rem;\n}\n\n.input-group-description {\n    position: relative;\n}\n\n.input-group-description .enabler-description {\n    color: var(--fade-color);\n    padding-left: 0.5rem;\n}\n\n.input-group-description .input-description {\n    background-color: var(--nav-color);\n    border-radius: 1em;\n    width: 100%;\n    height: 10ch;\n    padding: 0.5rem;\n    border: none;\n    resize: none;\n}\n\n.input-group-description button {\n    padding: 0.5rem 1.2rem;\n    float: right;\n    border-radius: 1em;\n}\n\n.input-group-description .save-description-btn {\n    background-color: var(--green);\n}\n\n.input-group-description .cancel-description-btn {\n    background-color: var(--red);\n    margin-right: 0.5rem;\n}\n\n#page-footer {\n    background-color: var(--footer-color);\n}\n\n@media screen and (min-width: 650px) {\n    #page-header {\n        justify-content: center;\n    }\n\n    #nav-dropdown {\n        display: none;\n    }\n\n    #page-main {\n        display: grid;\n        grid-template: 1fr / 17.5rem 1fr;\n        grid-template-areas:\n            \"nav main\";\n    }\n}"],"sourceRoot":""}]);
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
    const description = document.createElement("p");
    description.classList.add("project-description");
    description.appendChild(document.createTextNode(project.description));
    return description
}

const createDescInput = (project) => {
    const div = document.createElement("div");
    div.classList.add("input-group-description");

    const enabler = document.createElement("p");
    enabler.classList.add("enabler-description");
    enabler.appendChild(document.createTextNode("+ Add project description..."));

    const input = document.createElement("form");
    input.classList.add("display-none");
    input.setAttribute("data-id", project.id);

    const textarea = document.createElement("textarea");
    textarea.name = "project-description";
    textarea.placeholder = "Enter your project description here.";
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

    enabler.addEventListener("click", _Utils_js__WEBPACK_IMPORTED_MODULE_1__.displayDelete.bind(window, input, enabler));
    cancelBtn.addEventListener("click", _Utils_js__WEBPACK_IMPORTED_MODULE_1__.displayDelete.bind(window, enabler, input));
    input.addEventListener("submit", _MainControl_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveDescription);

    input.appendChild(textarea);
    input.appendChild(saveBtn);
    input.appendChild(cancelBtn);
    div.appendChild(enabler);
    div.appendChild(input);
    return div
}

const createProjectHeader = (project) => {
    const div = document.createElement("div");
    div.classList.add("project-header");

    const title = createTitle(project);
    div.appendChild(title);

    if (project.description) {
        const description = createDesc(project);
        div.appendChild(description);
    } else {
        const inputDesc = createDescInput(project);
        div.appendChild(inputDesc);
    }
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
    if (deleteNode.nodeName === "FORM") {
        [...deleteNode.querySelectorAll("textarea"), ...deleteNode.querySelectorAll("input")].forEach((input) => {
            input.value = "";
        })
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW1EO0FBQ2xCO0FBQ0k7QUFDRjtBQUNkOztBQUVyQixvQkFBb0IsdURBQU87QUFDM0I7QUFDQSxnRUFBb0I7QUFDcEIsa0VBQXNCOztBQUV0QixvQkFBb0IsdURBQU87QUFDM0IsZ0VBQW9COztBQUVwQix5REFBYSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vbm9kZV9tb2R1bGVzL3B1YnN1Yi5qcy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9FdmVudEFnZ3JlZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9zcmMvSWNvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9NYWluQ29udHJvbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9NYWluVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9NZW1vcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9zcmMvTmF2Q29udHJvbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9OYXZWaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL1BhZ2VWaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9zcmMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1oZWFkZXItY29sb3I6ICMxRjM1NDE7XFxuICAgIC0tZm9vdGVyLWNvbG9yOiAjNTI4OUI1O1xcbiAgICAtLWJnLWNvbG9yOiAjQUZEOEYyO1xcbiAgICAtLW5hdi1jb2xvcjogI2NlZTZmNTtcXG4gICAgLS1jdXN0b20td2hpdGU6ICNFREYyRjM7XFxuICAgIC0tZmFkZS1jb2xvcjogIzUwNTA1MDtcXG4gICAgLS1yZWQ6ICNmZjZlNmU7XFxuICAgIC0tZ3JlZW46ICNiYWRhNTU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5saTo6bWFya2VyIHtcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxuXFxuLmljb24ge1xcbiAgICB3aWR0aDogMWVtO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG59XFxuXFxuLmRpc3BsYXktbm9uZSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnRleHQtYm9sZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jcGFnZS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDRyZW0gMWZyIDJyZW0gLyAxZnI7XFxufVxcblxcbiNwYWdlLWhlYWRlcixcXG4jcGFnZS1mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWN1c3RvbS13aGl0ZSk7XFxufVxcblxcbiNwYWdlLWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI25hdi1kcm9wZG93biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI25hdiB7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4jbmF2IGhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI25hdiB1bD5saSB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNuYXYgYnV0dG9uLmRlbGV0ZS1idG4ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDAuMmVtIDAuM2VtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcXG59XFxuXFxuI25hdiB1bD5saS5hY3RpdmUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG4jYWRkLXByb2plY3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtcHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtZm9ybT4qIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxufVxcblxcbiNhZGQtcHJvamVjdC1mb3JtPmlucHV0IHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAtMTtcXG4gICAgcGFkZGluZzogMnB4IDA7XFxuICAgIHBhZGRpbmctbGVmdDogMWNoO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtZm9ybT5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbiNjYW5jZWwtcHJvamVjdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4jbWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IGNsYW1wKDFyZW0sIDV2dywgM3JlbSk7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gMWZyIC8gMWZyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiNtYWluIC5wcm9qZWN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXI+LnByb2plY3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmlucHV0LWdyb3VwLWRlc2NyaXB0aW9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW5wdXQtZ3JvdXAtZGVzY3JpcHRpb24gLmVuYWJsZXItZGVzY3JpcHRpb24ge1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZS1jb2xvcik7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG5cXG4uaW5wdXQtZ3JvdXAtZGVzY3JpcHRpb24gLmlucHV0LWRlc2NyaXB0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMGNoO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uaW5wdXQtZ3JvdXAtZGVzY3JpcHRpb24gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbi5pbnB1dC1ncm91cC1kZXNjcmlwdGlvbiAuc2F2ZS1kZXNjcmlwdGlvbi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi5pbnB1dC1ncm91cC1kZXNjcmlwdGlvbiAuY2FuY2VsLWRlc2NyaXB0aW9uLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4jcGFnZS1mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItY29sb3IpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xcbiAgICAjcGFnZS1oZWFkZXIge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI25hdi1kcm9wZG93biB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgICNwYWdlLW1haW4ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDE3LjVyZW0gMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICBcXFwibmF2IG1haW5cXFwiO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztJQUdJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2Isa0NBQWtDO0FBQ3RDOztBQUVBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsZ0NBQWdDO1FBQ2hDO3NCQUNjO0lBQ2xCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWhlYWRlci1jb2xvcjogIzFGMzU0MTtcXG4gICAgLS1mb290ZXItY29sb3I6ICM1Mjg5QjU7XFxuICAgIC0tYmctY29sb3I6ICNBRkQ4RjI7XFxuICAgIC0tbmF2LWNvbG9yOiAjY2VlNmY1O1xcbiAgICAtLWN1c3RvbS13aGl0ZTogI0VERjJGMztcXG4gICAgLS1mYWRlLWNvbG9yOiAjNTA1MDUwO1xcbiAgICAtLXJlZDogI2ZmNmU2ZTtcXG4gICAgLS1ncmVlbjogI2JhZGE1NTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmxpOjptYXJrZXIge1xcbiAgICBjb250ZW50OiBub25lO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIHdpZHRoOiAxZW07XFxuICAgIGhlaWdodDogMWVtO1xcbn1cXG5cXG4uZGlzcGxheS1ub25lIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGV4dC1ib2xkIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNwYWdlLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNHJlbSAxZnIgMnJlbSAvIDFmcjtcXG59XFxuXFxuI3BhZ2UtaGVhZGVyLFxcbiNwYWdlLWZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tY3VzdG9tLXdoaXRlKTtcXG59XFxuXFxuI3BhZ2UtaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jbmF2LWRyb3Bkb3duIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jbmF2IHtcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNuYXYgaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jbmF2IHVsPmxpIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI25hdiBidXR0b24uZGVsZXRlLWJ0biB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMC4yZW0gMC4zZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbn1cXG5cXG4jbmF2IHVsPmxpLmFjdGl2ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbiNhZGQtcHJvamVjdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNhZGQtcHJvamVjdC1mb3JtPioge1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0+aW5wdXQge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIC0xO1xcbiAgICBwYWRkaW5nOiAycHggMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxY2g7XFxufVxcblxcbiNhZGQtcHJvamVjdC1mb3JtPmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuI2NhbmNlbC1wcm9qZWN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogY2xhbXAoMXJlbSwgNXZ3LCAzcmVtKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgLyAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI21haW4gLnByb2plY3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcj4ucHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uaW5wdXQtZ3JvdXAtZGVzY3JpcHRpb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5pbnB1dC1ncm91cC1kZXNjcmlwdGlvbiAuZW5hYmxlci1kZXNjcmlwdGlvbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1mYWRlLWNvbG9yKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5pbnB1dC1ncm91cC1kZXNjcmlwdGlvbiAuaW5wdXQtZGVzY3JpcHRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwY2g7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5pbnB1dC1ncm91cC1kZXNjcmlwdGlvbiBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLmlucHV0LWdyb3VwLWRlc2NyaXB0aW9uIC5zYXZlLWRlc2NyaXB0aW9uLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLmlucHV0LWdyb3VwLWRlc2NyaXB0aW9uIC5jYW5jZWwtZGVzY3JpcHRpb24tYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbiNwYWdlLWZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1jb2xvcik7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XFxuICAgICNwYWdlLWhlYWRlciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjbmF2LWRyb3Bkb3duIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI3BhZ2UtbWFpbiB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMTcuNXJlbSAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJuYXYgbWFpblxcXCI7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIihmdW5jdGlvbihzY29wZSkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBwdWJzdWJJbnN0YW5jZSA9IG51bGw7XG5cdHZhciBwdWJzdWJDb25maWcgPSBudWxsO1xuXG5cdGlmKHR5cGVvZiBwdWJzdWIgPT09ICdvYmplY3QnKSB7XG5cdFx0cHVic3ViQ29uZmlnID0gcHVic3ViO1xuXHQvL25vZGUuanMgY29uZmlnIGZyb20gZ2xvYmFsXG5cdH0gZWxzZSBpZih0eXBlb2YgZ2xvYmFsID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZ2xvYmFsLnB1YnN1YkNvbmZpZyA9PT0gJ29iamVjdCcpIHtcblx0XHRwdWJzdWJDb25maWcgPSBnbG9iYWwucHVic3ViQ29uZmlnO1xuXHR9XG5cblx0ZnVuY3Rpb24gUHVic3ViKGNvbmZpZykge1xuXHRcdHZhciBfZXZlbnRPYmplY3QgPSB7fTtcblx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdHNlcGFyYXRvciA6IChjb25maWcgJiYgY29uZmlnLnNlcGFyYXRvcikgPyBjb25maWcuc2VwYXJhdG9yIDogJy8nLFxuXHRcdFx0cmVjdXJyZW50IDogKGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnLnJlY3VycmVudCA9PT0gJ2Jvb2xlYW4nKSA/IGNvbmZpZy5yZWN1cnJlbnQgOiAoZmFsc2UpLFxuXHRcdFx0ZGVwdGggICAgIDogKGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnLmRlcHRoID09PSAnbnVtYmVyJykgPyBjb25maWcuZGVwdGggOiBudWxsLFxuXHRcdFx0YXN5bmMgICAgIDogKGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnLmFzeW5jID09PSAnYm9vbGVhbicpID8gY29uZmlnLmFzeW5jIDogKGZhbHNlKSxcblx0XHRcdGNvbnRleHQgICA6IChjb25maWcgJiYgY29uZmlnLmNvbnRleHQpID8gY29uZmlnLmNvbnRleHQgOiBudWxsLFxuXHRcdFx0bG9nICAgICAgIDogKGNvbmZpZyAmJiBjb25maWcubG9nKSA/IGNvbmZpZy5sb2cgOiAoZmFsc2UpXG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGZvckVhY2goZGF0YUFycmF5LCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIGkgPSAwLFxuXHRcdFx0XHRhcnJheUxlbmd0aCA9IGRhdGFBcnJheS5sZW5ndGg7XG5cblx0XHRcdGZvcihpID0gMDsgaSA8IGFycmF5TGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y2FsbGJhY2soaSwgZGF0YUFycmF5W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNBcnJheSAob2JqKSB7XG5cdFx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheSA/IEFycmF5LmlzQXJyYXkob2JqKSA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrKHN1YnNjcmlwdGlvbnMsIGFyZ3MsIGFzeW5jKSB7XG5cdFx0XHRhc3luYyA9ICh0eXBlb2YgYXN5bmMgPT09ICdib29sZWFuJykgPyBhc3luYyA6IG9wdGlvbnMuYXN5bmM7XG5cdFx0XHRpZighc3Vic2NyaXB0aW9ucy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjbG9uZSBhcnJheSAtIGNhbGxiYWNrcyBjYW4gdW5zdWJzY3JpYmUgb3RoZXIgc3Vic2NyaXB0aW9uc1xuXHRcdFx0Ly8gcmVkdWNlcyBhIGxvdCBwZXJmb3JtYW5jZSBidXQgaXMgc2FmZVxuXHRcdFx0dmFyIGV4ZWN1dGVkU3Vic2NyaXB0aW9ucyA9IHN1YnNjcmlwdGlvbnMuc2xpY2UoKTtcblxuXHRcdFx0Zm9yRWFjaChleGVjdXRlZFN1YnNjcmlwdGlvbnMsIGZ1bmN0aW9uKHN1YnNjcmlwdGlvbklkLCBzdWJzY3JpcHRpb24pIHtcblx0XHRcdFx0aWYodHlwZW9mIHN1YnNjcmlwdGlvbiA9PT0gJ29iamVjdCcgJiYgZXhlY3V0ZWRTdWJzY3JpcHRpb25zLmhhc093blByb3BlcnR5KHN1YnNjcmlwdGlvbklkKSkge1xuXHRcdFx0XHRcdGlmKGFzeW5jKSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRzdWJzY3JpcHRpb24uY2FsbGJhY2suYXBwbHkoc3Vic2NyaXB0aW9uLmNvbnRleHQsIGFyZ3MpO1xuXHRcdFx0XHRcdFx0fSwgNCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN1YnNjcmlwdGlvbi5jYWxsYmFjay5hcHBseShzdWJzY3JpcHRpb24uY29udGV4dCwgYXJncyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBleGVjdXRlUHVibGlzaFdpbGRjYXJkKG5zT2JqZWN0LCBhcmdzKSB7XG5cdFx0XHR2YXIgbnNFbGVtZW50O1xuXHRcdFx0Zm9yKG5zRWxlbWVudCBpbiBuc09iamVjdCkge1xuXHRcdFx0XHRpZihuc0VsZW1lbnRbMF0gIT09ICdfJyAmJiBuc09iamVjdC5oYXNPd25Qcm9wZXJ0eShuc0VsZW1lbnQpKSB7XG5cdFx0XHRcdFx0ZXhlY3V0ZUNhbGxiYWNrKG5zT2JqZWN0W25zRWxlbWVudF0uX2V2ZW50cywgYXJncyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBwdWJsaXNoKG5zT2JqZWN0LCBhcmdzLCBwYXJ0cywgcGFyYW1zKSB7XG5cdFx0XHQvLyB3b3JrIG9uIGNvcHkgLSBub3Qgb24gcmVmZXJlbmNlXG5cdFx0XHRwYXJ0cyA9IHBhcnRzLnNsaWNlKCk7XG5cblx0XHRcdHZhciBpUGFydCA9IHBhcnRzLnNoaWZ0KCk7XG5cdFx0XHR2YXIgZGVwdGggPSBwYXJhbXMuZGVwdGg7XG5cdFx0XHR2YXIgYXN5bmMgPSBwYXJhbXMuYXN5bmM7XG5cdFx0XHR2YXIgcGFydHNMZW5ndGggPSBwYXJhbXMucGFydHNMZW5ndGg7XG5cdFx0XHR2YXIgcmVjdXJyZW50ID0gcGFyYW1zLnJlY3VycmVudDtcblx0XHRcdHZhciBwYXJ0TnVtYmVyID0gKHBhcnRzTGVuZ3RoIC0gcGFydHMubGVuZ3RoKTtcblxuXHRcdFx0Ly8gcGFydHMgaXMgZW1wdHlcblx0XHRcdGlmKCFpUGFydCkge1xuXHRcdFx0XHRleGVjdXRlQ2FsbGJhY2sobnNPYmplY3QuX2V2ZW50cywgYXJncywgYXN5bmMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBoYW5kbGUgc3Vic2NyaWJlIHdpbGRjYXJkXG5cdFx0XHRpZih0eXBlb2YgbnNPYmplY3RbJyonXSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cHVibGlzaChuc09iamVjdFsnKiddLCBhcmdzLCBwYXJ0cywgcGFyYW1zKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gaGFuZGxlIHB1Ymxpc2ggd2lsZGNhcmRcblx0XHRcdGlmKGlQYXJ0ID09PSAnKicpIHtcblx0XHRcdFx0ZXhlY3V0ZVB1Ymxpc2hXaWxkY2FyZChuc09iamVjdCwgYXJncywgYXN5bmMpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBubyBuYW1lc3BhY2UgPSBsZWF2ZSBwdWJsaXNoXG5cdFx0XHRpZih0eXBlb2YgbnNPYmplY3RbaVBhcnRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdGlmKHBhcmFtcy5sb2cpIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oJ1RoZXJlIGlzIG5vICcgKyBwYXJhbXMubnNTdHJpbmcgKyAnIHN1YnNjcmlwdGlvbicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bnNPYmplY3QgPSBuc09iamVjdFtpUGFydF07XG5cblx0XHRcdGlmKHJlY3VycmVudCA9PT0gdHJ1ZSAmJiB0eXBlb2YgZGVwdGggIT09ICdudW1iZXInKSB7IC8vZGVwdGggaXMgbm90IGRlZmluZWRcblx0XHRcdFx0ZXhlY3V0ZUNhbGxiYWNrKG5zT2JqZWN0Ll9ldmVudHMsIGFyZ3MsIGFzeW5jKTtcblx0XHRcdFx0aWYocGFydHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYocmVjdXJyZW50ID09PSB0cnVlICYmIHR5cGVvZiBkZXB0aCA9PT0gJ251bWJlcicgJiYgcGFydE51bWJlciA+PSAocGFydHNMZW5ndGggLSBkZXB0aCkpIHsgLy9pZiBkZXB0aCBpcyBkZWZpbmVkXG5cdFx0XHRcdGV4ZWN1dGVDYWxsYmFjayhuc09iamVjdC5fZXZlbnRzLCBhcmdzLCBhc3luYyk7XG5cdFx0XHR9XG5cblx0XHRcdHB1Ymxpc2gobnNPYmplY3QsIGFyZ3MsIHBhcnRzLCBwYXJhbXMpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGV4ZWN1dGVTdWJzY3JpYmVXaWxkY2FyZChuc09iamVjdCwgYXJncywgcGFyYW1zKSB7XG5cdFx0XHR2YXIgcGFydHMgPSBwYXJhbXMucGFydHM7XG5cdFx0XHR2YXIgYXN5bmMgPSBwYXJhbXMuYXN5bmM7XG5cdFx0XHR2YXIgbmV4dFBhcnQgPSBudWxsO1xuXG5cdFx0XHRpZihwYXJ0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0ZXhlY3V0ZUNhbGxiYWNrKG5zT2JqZWN0Ll9ldmVudHMsIGFyZ3MsIGFzeW5jKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5leHRQYXJ0ID0gcGFydHMuc2hpZnQoKTtcblxuXHRcdFx0XHRpZihuc09iamVjdFtuZXh0UGFydF0pIHtcblx0XHRcdFx0XHRleGVjdXRlU3Vic2NyaWJlV2lsZGNhcmQobnNPYmplY3RbbmV4dFBhcnRdLCBhcmdzLCB7XG5cdFx0XHRcdFx0XHRwYXJ0cyA6IHBhcnRzLFxuXHRcdFx0XHRcdFx0YXN5bmMgOiBhc3luYyxcblx0XHRcdFx0XHRcdG5zU3RyaW5nIDogcGFyYW1zLm5zU3RyaW5nXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBzdWJzY3JpYmUobnNTdHJpbmcsIGNhbGxiYWNrLCBwYXJhbXMpIHtcblx0XHRcdHZhciBwYXJ0cyA9IG5zU3RyaW5nLnNwbGl0KG9wdGlvbnMuc2VwYXJhdG9yKSxcblx0XHRcdFx0bnNPYmplY3QsIC8vTmFtZXNwYWNlIG9iamVjdCB0byB3aGljaCB3ZSBhdHRhY2ggZXZlbnRcblx0XHRcdFx0Y29udGV4dCA9IChwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcy5jb250ZXh0ICE9PSAndW5kZWZpbmVkJykgPyBwYXJhbXMuY29udGV4dCA6IG9wdGlvbnMuY29udGV4dCxcblx0XHRcdFx0ZXZlbnRPYmplY3QgPSBudWxsLFxuXHRcdFx0XHRpID0gMDtcblxuXHRcdFx0aWYoIWNvbnRleHQpIHtcblx0XHRcdFx0Y29udGV4dCA9IGNhbGxiYWNrO1xuXHRcdFx0fVxuXG5cdFx0XHQvL0l0ZXJhdGluZyB0aHJvdWdoIF9ldmVudE9iamVjdCB0byBmaW5kIHByb3BlciBuc09iamVjdFxuXHRcdFx0bnNPYmplY3QgPSBfZXZlbnRPYmplY3Q7XG5cdFx0XHRmb3IoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHRpZih0eXBlb2YgbnNPYmplY3RbcGFydHNbaV1dID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0bnNPYmplY3RbcGFydHNbaV1dID0ge307XG5cdFx0XHRcdFx0bnNPYmplY3RbcGFydHNbaV1dLl9ldmVudHMgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRuc09iamVjdCA9IG5zT2JqZWN0W3BhcnRzW2ldXTtcblx0XHRcdH1cblxuXHRcdFx0ZXZlbnRPYmplY3QgPSB7XG5cdFx0XHRcdGNhbGxiYWNrXHQ6IGNhbGxiYWNrLFxuXHRcdFx0XHRjb250ZXh0XHRcdDogY29udGV4dCAvLyBcInRoaXNcIiBwYXJhbWV0ZXIgaW4gZXhlY3V0ZWQgZnVuY3Rpb25cblx0XHRcdH07XG5cblx0XHRcdG5zT2JqZWN0Ll9ldmVudHMucHVzaChldmVudE9iamVjdCk7XG5cdFx0XHRyZXR1cm4geyBuYW1lc3BhY2UgOiBwYXJ0cy5qb2luKG9wdGlvbnMuc2VwYXJhdG9yKSxcblx0XHRcdFx0ZXZlbnQgOiBldmVudE9iamVjdCB9O1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHVuc3Vic2NyaWJlKHN1YnNjcmliZU9iamVjdCkge1xuXHRcdFx0aWYoc3Vic2NyaWJlT2JqZWN0ID09PSBudWxsIHx8IHR5cGVvZiBzdWJzY3JpYmVPYmplY3QgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0dmFyIG5zU3RyaW5nID0gc3Vic2NyaWJlT2JqZWN0Lm5hbWVzcGFjZSxcblx0XHRcdFx0ZXZlbnRPYmplY3QgPSBzdWJzY3JpYmVPYmplY3QuZXZlbnQsXG5cdFx0XHRcdHBhcnRzID0gbnNTdHJpbmcuc3BsaXQob3B0aW9ucy5zZXBhcmF0b3IpLFxuXHRcdFx0XHRuc09iamVjdCxcblx0XHRcdFx0aSA9IDA7XG5cblx0XHRcdC8vSXRlcmF0aW5nIHRocm91Z2ggX2V2ZW50T2JqZWN0IHRvIGZpbmQgcHJvcGVyIG5zT2JqZWN0XG5cdFx0XHRuc09iamVjdCA9IF9ldmVudE9iamVjdDtcblx0XHRcdGZvcihpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdGlmKHR5cGVvZiBuc09iamVjdFtwYXJ0c1tpXV0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRpZihvcHRpb25zLmxvZykge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignVGhlcmUgaXMgbm8gJyArIG5zU3RyaW5nICsgJyBzdWJzY3JpcHRpb24nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0bnNPYmplY3QgPSBuc09iamVjdFtwYXJ0c1tpXV07XG5cdFx0XHR9XG5cblx0XHRcdGZvckVhY2gobnNPYmplY3QuX2V2ZW50cywgZnVuY3Rpb24oZXZlbnRJZCkge1xuXHRcdFx0XHRpZihuc09iamVjdC5fZXZlbnRzW2V2ZW50SWRdID09PSBldmVudE9iamVjdCkge1xuXHRcdFx0XHRcdG5zT2JqZWN0Ll9ldmVudHMuc3BsaWNlKGV2ZW50SWQsIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBQdWJsaXNoIGV2ZW50XG5cdFx0XHQgKiBAcGFyYW0gbnNTdHJpbmcgc3RyaW5nIG5hbWVzcGFjZSBzdHJpbmcgc3BsaXRlZCBieSBkb3RzXG5cdFx0XHQgKiBAcGFyYW0gYXJncyBhcnJheSBvZiBhcmd1bWVudHMgZ2l2ZW4gdG8gY2FsbGJhY2tzXG5cdFx0XHQgKiBAcGFyYW0gcGFyYW1zIHBhcmFtYXRlcnMgcG9zc2libGU6XG5cdFx0XHQgKiAgICAgICAgQHBhcmFtIHJlY3VycmVudCBib29sIHNob3VsZCBleGVjdXRpb24gYmUgYnViYmxlZCB0aHJvdWdodCBuYW1lc3BhY2Vcblx0XHRcdCAqICAgICAgICBAcGFyYW0gZGVwdGggaW50ZWdlciBob3cgbWFueSBuYW1lc3BhY2VzIHNlcGFyYXRlZCBieSBkb3RzIHdpbGwgYmUgZXhlY3V0ZWRcblx0XHRcdCAqL1xuXHRcdFx0cHVibGlzaCA6IGZ1bmN0aW9uKG5zU3RyaW5nLCBhcmdzLCBwYXJhbXMpIHtcblx0XHRcdFx0dmFyIHBhcnRzID0gbnNTdHJpbmcuc3BsaXQob3B0aW9ucy5zZXBhcmF0b3IpLFxuXHRcdFx0XHRcdHJlY3VycmVudCA9ICh0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0JyAmJiBwYXJhbXMucmVjdXJyZW50KSA/IHBhcmFtcy5yZWN1cnJlbnQgOiBvcHRpb25zLnJlY3VycmVudCwgLy8gYnViYmxlcyBldmVudCB0aHJvdWdodCBuYW1lc3BhY2UgaWYgdHJ1ZVxuXHRcdFx0XHRcdGRlcHRoID0gKHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnICYmIHBhcmFtcy5kZXB0aCkgPyBwYXJhbXMuZGVwdGggOiBvcHRpb25zLmRlcHRoLFxuXHRcdFx0XHRcdGFzeW5jID0gKHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnICYmIHBhcmFtcy5hc3luYykgPyBwYXJhbXMuYXN5bmMgOiBvcHRpb25zLmFzeW5jLFxuXHRcdFx0XHRcdHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG5cdFx0XHRcdGlmKCFwYXJ0cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRpZihvcHRpb25zLmxvZykge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignV3JvbmcgbmFtZXNwYWNlIHByb3ZpZGVkICcgKyBuc1N0cmluZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHB1Ymxpc2goX2V2ZW50T2JqZWN0LCBhcmdzLCBwYXJ0cywge1xuXHRcdFx0XHRcdHJlY3VycmVudCA6IHJlY3VycmVudCxcblx0XHRcdFx0XHRkZXB0aCA6IGRlcHRoLFxuXHRcdFx0XHRcdGFzeW5jIDogYXN5bmMsXG5cdFx0XHRcdFx0cGFydHMgOiBwYXJ0cyxcblx0XHRcdFx0XHRuc1N0cmluZyA6IG5zU3RyaW5nLFxuXHRcdFx0XHRcdHBhcnRzTGVuZ3RoIDogcGFydHNMZW5ndGhcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTdWJzY3JpYmUgZXZlbnRcblx0XHRcdCAqIEBwYXJhbSBuc1N0cmluZyBzdHJpbmcgbmFtZXNwYWNlIHN0cmluZyBzcGxpdGVkIGJ5IGRvdHNcblx0XHRcdCAqIEBwYXJhbSBjYWxsYmFjayBmdW5jdGlvbiBmdW5jdGlvbiBleGVjdXRlZCBhZnRlciBwdWJsaXNoaW5nIGV2ZW50XG5cdFx0XHQgKiBAcGFyYW0gcGFyYW1zIGdpdmVuIHBhcmFtc1xuXHRcdFx0ICpcdFx0QHBhcmFtIGNvbnRleHQgb2JqZWN0L25vdGhpbmcgT3B0aW9uYWwgb2JqZWN0IHdoaWNoIHdpbGwgYmUgdXNlZCBhcyBcInRoaXNcIiBpbiBjYWxsYmFja1xuXHRcdFx0ICovXG5cdFx0XHRzdWJzY3JpYmUgOiBmdW5jdGlvbihuc1N0cmluZywgY2FsbGJhY2ssIHBhcmFtcykge1xuXHRcdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdFx0c3Vic2NyaXB0aW9ucyA9IFtdO1xuXG5cdFx0XHRcdC8vIGFycmF5IG9mIGNhbGxiYWNrcyAtIG11bHRpcGxlIHN1YnNjcmlwdGlvblxuXHRcdFx0XHRpZihpc0FycmF5KGNhbGxiYWNrKSkge1xuXHRcdFx0XHRcdGZvckVhY2goY2FsbGJhY2ssIGZ1bmN0aW9uKG51bWJlcikge1xuXHRcdFx0XHRcdFx0dmFyIG9uZUNhbGxiYWNrID0gY2FsbGJhY2tbbnVtYmVyXTtcblxuXHRcdFx0XHRcdFx0c3Vic2NyaXB0aW9ucyA9XHRzdWJzY3JpcHRpb25zLmNvbmNhdChzZWxmLnN1YnNjcmliZShuc1N0cmluZywgb25lQ2FsbGJhY2ssIHBhcmFtcykpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBhcnJheSBvZiBuYW1lc3BhY2VzIC0gbXVsdGlwbGUgc3Vic2NyaXB0aW9uXG5cdFx0XHRcdH0gZWxzZSBpZihpc0FycmF5KG5zU3RyaW5nKSkge1xuXHRcdFx0XHRcdGZvckVhY2gobnNTdHJpbmcsIGZ1bmN0aW9uKG51bWJlcikge1xuXHRcdFx0XHRcdFx0dmFyIG5hbWVzcGFjZSA9IG5zU3RyaW5nW251bWJlcl07XG5cblx0XHRcdFx0XHRcdHN1YnNjcmlwdGlvbnMgPVx0c3Vic2NyaXB0aW9ucy5jb25jYXQoc2VsZi5zdWJzY3JpYmUobmFtZXNwYWNlLCBjYWxsYmFjaywgcGFyYW1zKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHN1YnNjcmliZS5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBzdWJzY3JpcHRpb25zO1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogc3Vic2NyaWJlT25jZSBldmVudCAtIHN1YnNjcmliZSBvbmNlIHRvIHNvbWUgZXZlbnQsIHRoZW4gdW5zdWJzY3JpYmUgaW1tYWRpYXRlbHlcblx0XHRcdCAqIEBwYXJhbSBuc1N0cmluZyBzdHJpbmcgbmFtZXNwYWNlIHN0cmluZyBzcGxpdGVkIGJ5IGRvdHNcblx0XHRcdCAqIEBwYXJhbSBjYWxsYmFjayBmdW5jdGlvbiBmdW5jdGlvbiBleGVjdXRlZCBhZnRlciBwdWJsaXNoaW5nIGV2ZW50XG5cdFx0XHQgKiBAcGFyYW0gcGFyYW1zIGdpdmVuIHBhcmFtc1xuXHRcdFx0ICpcdFx0QHBhcmFtIGNvbnRleHQgb2JqZWN0L25vdGhpbmcgT3B0aW9uYWwgb2JqZWN0IHdoaWNoIHdpbGwgYmUgdXNlZCBhcyBcInRoaXNcIiBpbiBjYWxsYmFja1xuXHRcdFx0ICovXG5cdFx0XHRzdWJzY3JpYmVPbmNlIDogZnVuY3Rpb24obnNTdHJpbmcsIGNhbGxiYWNrLCBwYXJhbXMpIHtcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdFx0XHRcdHN1YnNjcmlwdGlvbiA9IG51bGw7XG5cblx0XHRcdFx0ZnVuY3Rpb24gc3Vic2NyaXB0aW9uQ2FsbGJhY2soKSB7XG5cdFx0XHRcdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xuXG5cdFx0XHRcdFx0Y2FsbGJhY2suYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcblx0XHRcdFx0XHRzZWxmLnVuc3Vic2NyaWJlKHN1YnNjcmlwdGlvbik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdWJzY3JpcHRpb24gPSBzZWxmLnN1YnNjcmliZShuc1N0cmluZywgc3Vic2NyaXB0aW9uQ2FsbGJhY2ssIHBhcmFtcyk7XG5cdFx0XHRcdHJldHVybiBzdWJzY3JpcHRpb247XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBVbnN1YnNjcmliZSBmcm9tIGdpdmVuIHN1YnNjcmlwdGlvblxuXHRcdFx0ICogQHBhcmFtIHN1YnNjcmliZU9iamVjdCBzdWJzY3JpcHRpb24gb2JqZWN0IGdpdmVuIG9uIHN1YnNjcmliZSAocmV0dXJuZWQgZnJvbSBzdWJzY3JpcHRpb24pXG5cdFx0XHQgKi9cblx0XHRcdHVuc3Vic2NyaWJlIDogZnVuY3Rpb24oc3Vic2NyaWJlT2JqZWN0KSB7XG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdFx0XHQvL2lmIHdlIGhhdmUgYXJyYXkgb2YgY2FsbGJhY2tzIC0gbXVsdGlwbGUgc3Vic2NyaXB0aW9uXG5cdFx0XHRcdGlmKGlzQXJyYXkoc3Vic2NyaWJlT2JqZWN0KSkge1xuXHRcdFx0XHRcdGZvckVhY2goc3Vic2NyaWJlT2JqZWN0LCBmdW5jdGlvbihudW1iZXIpIHtcblx0XHRcdFx0XHRcdHZhciBvbmVTdWJzY3JpYnRpb24gPSBzdWJzY3JpYmVPYmplY3RbbnVtYmVyXTtcblxuXHRcdFx0XHRcdFx0dW5zdWJzY3JpYmUuYXBwbHkoc2VsZiwgW29uZVN1YnNjcmlidGlvbl0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHVuc3Vic2NyaWJlLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIG5ld0luc3RhbmNlIC0gbWFrZXMgbmV3IGluc3RhbmNlIG9mIHB1YnN1YiBvYmplY3Qgd2l0aCBpdHMgb3duIGNvbmZpZ1xuXHRcdFx0ICogQHBhcmFtIHBhcmFtcyBpbnN0YW5jZSBjb25maWd1cmF0aW9uXG5cdFx0XHQgKiAgICAgICAgQHBhcmFtIHNlcGFyYXRvciBzZXBhcmF0b3IgKGRlZmF1bHQgaXMgXCIvXCIpXG5cdFx0XHQgKiAgICAgICAgQHBhcmFtIHJlY3VycmVudCBzaG91bGQgcHVibGlzaCBldmVudHMgYmUgYnViYmxlZCB0aHJvdWdoIG5hbWVzcGFjZVxuXHRcdFx0ICogICAgICAgIEBwYXJhbSBhc3luYyBzaG91bGQgcHVibGlzaCBldmVudHMgYmUgYXN5bmNocm9ub3VzIC0gbm90IGJsb2NraW5nIGZ1bmN0aW9uIGV4ZWN1dGlvblxuXHRcdFx0ICogICAgICAgIEBwYXJhbSBsb2cgY29uc29sZS53YXJuL2Vycm9yIGV2ZXJ5IHByb2JsZW1cblx0XHRcdCAqL1xuXHRcdFx0bmV3SW5zdGFuY2UgOiBmdW5jdGlvbihwYXJhbXMpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBQdWJzdWIocGFyYW1zKTtcblx0XHRcdH1cblx0XHR9OyAvL3JldHVybiBibG9ja1xuXHR9XG5cdHB1YnN1Ykluc3RhbmNlID0gbmV3IFB1YnN1YihwdWJzdWJDb25maWcpO1xuXG5cdC8vaWYgc2JkJ3MgdXNpbmcgcmVxdWlyZWpzIGxpYnJhcnkgdG8gbG9hZCBwdWJzdWIuanNcblx0aWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGRlZmluZShwdWJzdWJJbnN0YW5jZSk7XG5cdH1cblxuXHQvL25vZGUuanNcblx0aWYodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IHB1YnN1Ykluc3RhbmNlO1xuXHR9XG5cblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcblx0XHR3aW5kb3cucHVic3ViID0gcHVic3ViSW5zdGFuY2U7XG5cdFx0aWYod2luZG93ICE9PSBzY29wZSkge1xuXHRcdFx0c2NvcGUucHVic3ViID0gcHVic3ViSW5zdGFuY2U7XG5cdFx0fVxuXHR9XG59KSh0aGlzKTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHVic3ViIGZyb20gJ3B1YnN1Yi5qcyc7XG5pbXBvcnQgTmF2Q29udHJvbCBmcm9tICcuL05hdkNvbnRyb2wuanMnO1xuaW1wb3J0IE1lbW9yeSBmcm9tICcuL01lbW9yeS5qcyc7XG5pbXBvcnQgTWFpbkNvbnRyb2wgZnJvbSAnLi9NYWluQ29udHJvbC5qcyc7XG5cbmNvbnN0IEV2ZW50QWdncmVnYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdXBkYXRlTmF2VG9rZW4gPSBwdWJzdWIuc3Vic2NyaWJlKFxuICAgICAgICBcIlByb2plY3RBZGRlZFwiLFxuICAgICAgICBOYXZDb250cm9sLnVwZGF0ZU5hdlNlY3Rpb24uYmluZChOYXZDb250cm9sLCBNZW1vcnkpKTtcblxuICAgIGNvbnN0IGRlbGV0ZU5hdlRva2VuID0gcHVic3ViLnN1YnNjcmliZShcbiAgICAgICAgXCJQcm9qZWN0RGVsZXRlZFwiLFxuICAgICAgICBOYXZDb250cm9sLnVwZGF0ZU5hdlNlY3Rpb24uYmluZChOYXZDb250cm9sLCBNZW1vcnkpXG4gICAgKVxuXG4gICAgY29uc3QgdG9nZ2xlQm9va21hcmtlZFRva2VuID0gcHVic3ViLnN1YnNjcmliZShcbiAgICAgICAgXCJUb2dnbGVCb29rbWFya2VkXCIsXG4gICAgICAgIE5hdkNvbnRyb2wudXBkYXRlTmF2U2VjdGlvbi5iaW5kKE5hdkNvbnRyb2wsIE1lbW9yeSlcbiAgICApXG5cbiAgICBjb25zdCBzZXRBY3RpdmVQcm9qZWN0VG9rZW4gPSBwdWJzdWIuc3Vic2NyaWJlKFxuICAgICAgICBcIlNldEFjdGl2ZVByb2plY3RcIixcbiAgICAgICAgKGlkKSA9PiBNYWluQ29udHJvbC51cGRhdGVNYWluKE1lbW9yeS5nZXRQcm9qZWN0SWQoaWQpKVxuICAgIClcblxuICAgIGNvbnN0IGFkZFByb2plY3REZXNjVG9rZW4gPSBwdWJzdWIuc3Vic2NyaWJlKFxuICAgICAgICBcIkFkZFByb2plY3REZXNjXCIsXG4gICAgICAgIChpZCwgZGVzYykgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IE1lbW9yeS5nZXRQcm9qZWN0SWQoaWQpO1xuICAgICAgICAgICAgcHJvamVjdC5zZXREZXNjcmlwdGlvbihkZXNjKTtcbiAgICAgICAgICAgIE1haW5Db250cm9sLnVwZGF0ZU1haW4ocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICApXG5cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRBZ2dyZWdhdG9yIiwiY29uc3QgSWNvbiA9IChzcmMpID0+IHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuICAgIGljb24uc3JjID0gc3JjO1xuXG4gICAgcmV0dXJuIGljb25cbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvbiIsImltcG9ydCBwdWJzdWIgZnJvbSAncHVic3ViLmpzJztcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RIZWFkZXIgfSBmcm9tICcuL01haW5WaWV3LmpzJztcbmltcG9ydCB7IGRpc3BsYXlEZWxldGUgfSBmcm9tICcuL1V0aWxzLmpzJztcblxuY29uc3QgTWFpbkNvbnRyb2wgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHVwZGF0ZU1haW4gPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICAgICAgICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEhlYWRlcihwcm9qZWN0KSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2F2ZURlc2NyaXB0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInByb2plY3QtZGVzY3JpcHRpb25cIl0nKS52YWx1ZTtcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJBZGRQcm9qZWN0RGVzY1wiLCBbcGFyc2VJbnQocHJvamVjdElkKSwgZGVzY3JpcHRpb25dKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGVNYWluLFxuICAgICAgICBzYXZlRGVzY3JpcHRpb25cbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udHJvbCIsImltcG9ydCBNYWluQ29udHJvbCBmcm9tIFwiLi9NYWluQ29udHJvbC5qc1wiO1xuaW1wb3J0IHsgZGlzcGxheURlbGV0ZSB9IGZyb20gXCIuL1V0aWxzLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZVRpdGxlID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgICB0aXRsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwcm9qZWN0LnRpdGxlKSk7XG4gICAgcmV0dXJuIHRpdGxlXG59XG5cbmNvbnN0IGNyZWF0ZURlc2MgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocHJvamVjdC5kZXNjcmlwdGlvbikpO1xuICAgIHJldHVybiBkZXNjcmlwdGlvblxufVxuXG5jb25zdCBjcmVhdGVEZXNjSW5wdXQgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1ncm91cC1kZXNjcmlwdGlvblwiKTtcblxuICAgIGNvbnN0IGVuYWJsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBlbmFibGVyLmNsYXNzTGlzdC5hZGQoXCJlbmFibGVyLWRlc2NyaXB0aW9uXCIpO1xuICAgIGVuYWJsZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIrIEFkZCBwcm9qZWN0IGRlc2NyaXB0aW9uLi4uXCIpKTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIHByb2plY3QuaWQpO1xuXG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgdGV4dGFyZWEubmFtZSA9IFwicHJvamVjdC1kZXNjcmlwdGlvblwiO1xuICAgIHRleHRhcmVhLnBsYWNlaG9sZGVyID0gXCJFbnRlciB5b3VyIHByb2plY3QgZGVzY3JpcHRpb24gaGVyZS5cIjtcbiAgICB0ZXh0YXJlYS5yZXF1aXJlZCA9IHRydWU7XG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZChcImlucHV0LWRlc2NyaXB0aW9uXCIpO1xuXG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc2F2ZUJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNhdmVcIikpO1xuICAgIHNhdmVCdG4udHlwZSA9IFwic3VibWl0XCI7XG4gICAgc2F2ZUJ0bi5jbGFzc0xpc3QuYWRkKFwic2F2ZS1kZXNjcmlwdGlvbi1idG5cIik7XG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNhbmNlbFwiKSk7XG4gICAgY2FuY2VsQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWRlc2NyaXB0aW9uLWJ0blwiKTtcblxuICAgIGVuYWJsZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlEZWxldGUuYmluZCh3aW5kb3csIGlucHV0LCBlbmFibGVyKSk7XG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5RGVsZXRlLmJpbmQod2luZG93LCBlbmFibGVyLCBpbnB1dCkpO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgTWFpbkNvbnRyb2wuc2F2ZURlc2NyaXB0aW9uKTtcblxuICAgIGlucHV0LmFwcGVuZENoaWxkKHRleHRhcmVhKTtcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChzYXZlQnRuKTtcbiAgICBpbnB1dC5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChlbmFibGVyKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHJldHVybiBkaXZcbn1cblxuY29uc3QgY3JlYXRlUHJvamVjdEhlYWRlciA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUaXRsZShwcm9qZWN0KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgaWYgKHByb2plY3QuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVEZXNjKHByb2plY3QpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGlucHV0RGVzYyA9IGNyZWF0ZURlc2NJbnB1dChwcm9qZWN0KTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGlucHV0RGVzYyk7XG4gICAgfVxuICAgIHJldHVybiBkaXZcbn1cblxuY29uc3QgY3JlYXRlTWFpbiA9IChtZW1vcnkpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmlkID0gXCJtYWluXCI7XG5cbiAgICBjb25zdCBiYXNlUHJvamVjdCA9IG1lbW9yeS5nZXRQcm9qZWN0SWQoMSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0SGVhZGVyKGJhc2VQcm9qZWN0KSk7XG4gICAgcmV0dXJuIG1haW47XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU1haW4sIGNyZWF0ZVByb2plY3RIZWFkZXIgfSIsImltcG9ydCBwdWJzdWIgZnJvbSAncHVic3ViLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdC5qcyc7XG5pbXBvcnQgeyByZW1vdmVCeUlkIH0gZnJvbSBcIi4vVXRpbHMuanNcIjtcblxuY29uc3QgTWVtb3J5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgICBsZXQgYm9va21hcmtlZFByb2plY3RzID0gW107XG5cbiAgICBjb25zdCBhZGRUb1Byb2plY3RzID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3QudHlwZSAhPT0gXCJQcm9qZWN0XCIpIHByb2plY3QgPSBQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRvQm9va21hcmtlZCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkluZGV4IG9mIGl0ZW0gbm90IGZvdW5kIGluIFByb2plY3RzIGxpc3RcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHByb2plY3RzW2luZGV4XTtcbiAgICAgICAgdGFyZ2V0LnNldEJvb2ttYXJrZWQodHJ1ZSk7XG4gICAgICAgIGJvb2ttYXJrZWRQcm9qZWN0cy5wdXNoKHRhcmdldCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlRnJvbUJvb2ttYXJrZWQgPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYm9va21hcmtlZFByb2plY3RzLmZpbmRJbmRleChcbiAgICAgICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWRcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW5kZXggb2YgaXRlbSBub3QgZm91bmQgaW4gUHJvamVjdHMgbGlzdFwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBib29rbWFya2VkUHJvamVjdHNbaW5kZXhdO1xuICAgICAgICB0YXJnZXQuc2V0Qm9va21hcmtlZChmYWxzZSk7XG4gICAgICAgIGJvb2ttYXJrZWRQcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3RJZCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICAgICAgcmVtb3ZlQnlJZChwcm9qZWN0cywgcHJvamVjdElkKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0SWQgPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0c1tpbmRleF07XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvamVjdFRva2VuID0gcHVic3ViLnN1YnNjcmliZShcIlByb2plY3RBZGRlZFwiLCBhZGRUb1Byb2plY3RzKTtcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0VG9rZW4gPSBwdWJzdWIuc3Vic2NyaWJlKFwiUHJvamVjdERlbGV0ZWRcIiwgcmVtb3ZlUHJvamVjdElkKTtcbiAgICBjb25zdCB0b2dnbGVCb29rbWFya2VkVG9rZW4gPSBwdWJzdWIuc3Vic2NyaWJlKFxuICAgICAgICBcIlRvZ2dsZUJvb2ttYXJrZWRcIixcbiAgICAgICAgKGlkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdElkKGlkKTtcbiAgICAgICAgICAgIHByb2plY3QuaXNCb29rbWFya2VkID8gcmVtb3ZlRnJvbUJvb2ttYXJrZWQoaWQpIDogYWRkVG9Cb29rbWFya2VkKGlkKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0cyxcbiAgICAgICAgYm9va21hcmtlZFByb2plY3RzLFxuICAgICAgICBhZGRUb1Byb2plY3RzLFxuICAgICAgICByZW1vdmVQcm9qZWN0SWQsXG4gICAgICAgIGFkZFRvQm9va21hcmtlZCxcbiAgICAgICAgcmVtb3ZlRnJvbUJvb2ttYXJrZWQsXG4gICAgICAgIGdldFByb2plY3RJZFxuICAgIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgTWVtb3J5IiwiaW1wb3J0IHB1YnN1YiBmcm9tICdwdWJzdWIuanMnO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdE5vZGUgfSBmcm9tICcuL05hdlZpZXcuanMnO1xuXG5jb25zdCBOYXZDb250cm9sID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY3VycmVudEFjdGl2ZSA9IDE7XG5cbiAgICBjb25zdCB1cGRhdGVBY3RpdmVOYXYgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBjdXJyZW50QWN0aXZlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgICAgICAgICBjb25zdCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXYgLmFjdGl2ZVwiKVxuICAgICAgICAgICAgcHJldi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgcHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXBkYXRlQWN0aXZlTmF2KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbmF2IFtkYXRhLWlkPVwiJHtjdXJyZW50QWN0aXZlfVwiXWApO1xuICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgbmF2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGRhdGVBY3RpdmVOYXYpO1xuICAgICAgICBwdWJzdWIucHVibGlzaChcIlNldEFjdGl2ZVByb2plY3RcIiwgW3BhcnNlSW50KGN1cnJlbnRBY3RpdmUpXSk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlQWRkUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtZm9ybVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzcGxheS1ub25lXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlQm9va21hcmtlZCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0UHJvamVjdElkID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcblxuICAgICAgICBwdWJzdWIucHVibGlzaChcIlRvZ2dsZUJvb2ttYXJrZWRcIiwgW3BhcnNlSW50KHRhcmdldFByb2plY3RJZCldKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVOYXYgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cInByb2plY3QtdGl0bGVcIl1gKTtcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJQcm9qZWN0QWRkZWRcIiwgW3RpdGxlLnZhbHVlXSk7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgdG9nZ2xlQWRkUHJvamVjdEZvcm0oKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVOYXZTZWN0aW9uID0gKG1lbW9yeSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzPnVsXCIpO1xuICAgICAgICBjb25zdCBib29rbWFya2VkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtYm9va21hcmtlZFwiKTtcblxuICAgICAgICBwcm9qZWN0c0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgYm9va21hcmtlZExpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIG1lbW9yeS5wcm9qZWN0cykge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5vZGUgPSBjcmVhdGVQcm9qZWN0Tm9kZShwcm9qZWN0KTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmlzQm9va21hcmtlZCkge1xuICAgICAgICAgICAgICAgIGJvb2ttYXJrZWRMaXN0LmFwcGVuZENoaWxkKHByb2plY3ROb2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2plY3ROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUFjdGl2ZU5hdigpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0UHJvamVjdElkID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcblxuICAgICAgICAvLyBJZiBkZWxldGUgY3VycmVudCBhY3RpdmUgbmF2LCBkZWZhdWx0IGJhY2sgdG8gaG9tZSBuYXZcbiAgICAgICAgaWYgKGN1cnJlbnRBY3RpdmUgPT09IHRhcmdldFByb2plY3RJZCkgY3VycmVudEFjdGl2ZSA9IDE7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwiUHJvamVjdERlbGV0ZWRcIiwgW3BhcnNlSW50KHRhcmdldFByb2plY3RJZCldKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgY3VycmVudEFjdGl2ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50QWN0aXZlXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZUFjdGl2ZU5hdixcbiAgICAgICAgdG9nZ2xlQWRkUHJvamVjdEZvcm0sXG4gICAgICAgIHRvZ2dsZU5hdixcbiAgICAgICAgdG9nZ2xlQm9va21hcmtlZCxcbiAgICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgICB1cGRhdGVOYXZTZWN0aW9uLFxuICAgICAgICBoYW5kbGVEZWxldGVcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IE5hdkNvbnRyb2wiLCJpbXBvcnQgTmF2Q29udHJvbCBmcm9tICcuL05hdkNvbnRyb2wuanMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uLmpzJztcbmltcG9ydCBzdGFySWNvbiBmcm9tICcuL0ljb25zL3N0YXIuc3ZnJztcbmltcG9ydCBzdGFydE91dGxpbmVJY29uIGZyb20gJy4vSWNvbnMvc3Rhci1vdXRsaW5lLnN2Zyc7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3ROb2RlID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBwcm9qZWN0LmlkKTtcblxuICAgIGlmIChwcm9qZWN0LmlkICE9PSAxKSB7XG4gICAgICAgIGNvbnN0IGljb24gPSBwcm9qZWN0LmlzQm9va21hcmtlZCA/IEljb24oc3Rhckljb24pIDogSWNvbihzdGFydE91dGxpbmVJY29uKTtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTmF2Q29udHJvbC50b2dnbGVCb29rbWFya2VkKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICB9XG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByb2plY3QudGl0bGUpKTtcblxuICAgIGlmIChwcm9qZWN0LmlkICE9PSAxKSB7XG4gICAgICAgIGNvbnN0IGRsdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRsdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTtcbiAgICAgICAgZGx0QnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIGRsdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTmF2Q29udHJvbC5oYW5kbGVEZWxldGUpO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGRsdEJ0bik7XG4gICAgfVxuXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTmF2Q29udHJvbC51cGRhdGVBY3RpdmVOYXYpO1xuICAgIHJldHVybiBpdGVtXG59XG5cbmNvbnN0IGNyZWF0ZUJvb2ttYXJrZWRTZWN0aW9uID0gKG1lbW9yeSkgPT4ge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHVsLmlkID0gXCJwcm9qZWN0cy1ib29rbWFya2VkXCI7XG5cbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIG1lbW9yeS5ib29rbWFya2VkUHJvamVjdHMpIHtcbiAgICAgICAgLy8gT25seSBzaG93cyBib29rbWFya2VkIHByb2plY3RzIGluIHRoZSB0b3Agb2YgbmF2IHNlY3Rpb25cbiAgICAgICAgY29uc3QgaXRlbSA9IGNyZWF0ZVByb2plY3ROb2RlKHByb2plY3QpO1xuXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiB1bFxufVxuXG5jb25zdCBjcmVhdGVQcm9qZWN0U2VjdGlvbiA9IChtZW1vcnkpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5pZCA9IFwicHJvamVjdHNcIjtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIG1lbW9yeS5wcm9qZWN0cykge1xuICAgICAgICAvLyBza2lwIERlZmF1bHQgKEhvbWUpIFByb2plY3RcbiAgICAgICAgaWYgKHByb2plY3QuaXNCb29rbWFya2VkKSBjb250aW51ZVxuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVQcm9qZWN0Tm9kZShwcm9qZWN0KTtcblxuICAgICAgICB1bC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9XG4gICAgZGl2LmFwcGVuZENoaWxkKHVsKTtcblxuICAgIHJldHVybiBkaXZcbn1cblxuY29uc3QgY3JlYXRlQWRkUHJvamVjdEJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5pZCA9IFwiYWRkLXByb2plY3RcIjtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRleHQtYm9sZFwiKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBOYXZDb250cm9sLnRvZ2dsZUFkZFByb2plY3RGb3JtKTtcblxuICAgIHJldHVybiBkaXZcbn1cblxuY29uc3QgY3JlYXRlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uaWQgPSBcImFkZC1wcm9qZWN0LWZvcm1cIjtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW5vbmVcIik7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGlucHV0Lm5hbWUgPSBcInByb2plY3QtdGl0bGVcIjtcbiAgICBpbnB1dC5pZCA9IFwicHJvamVjdC10aXRsZVwiO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJOZXcgUHJvamVjdCBUaXRsZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnRuLmlkID0gXCJjYW5jZWwtcHJvamVjdC1idG5cIjtcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBOYXZDb250cm9sLnRvZ2dsZUFkZFByb2plY3RGb3JtKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBhZGRCdG4uaWQgPSBcImFkZC1wcm9qZWN0LWJ0blwiO1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIE5hdkNvbnRyb2wuaGFuZGxlU3VibWl0KTtcbiAgICByZXR1cm4gZm9ybVxufVxuXG5jb25zdCBjcmVhdGVOYXYgPSAobWVtb3J5KSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXYuaWQgPSBcIm5hdlwiO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZUJvb2ttYXJrZWRTZWN0aW9uKG1lbW9yeSkpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0U2VjdGlvbihtZW1vcnkpKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkUHJvamVjdEJ0bigpKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEZvcm0oKSk7XG4gICAgcmV0dXJuIG5hdlxufVxuXG5leHBvcnQgeyBjcmVhdGVOYXYsIGNyZWF0ZVByb2plY3ROb2RlIH0iLCJpbXBvcnQgeyBjcmVhdGVNYWluIH0gZnJvbSAnLi9NYWluVmlldy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVOYXYgfSBmcm9tICcuL05hdlZpZXcuanMnO1xuaW1wb3J0IE5hdkNvbnRyb2wgZnJvbSAnLi9OYXZDb250cm9sLmpzJztcbmltcG9ydCBNZW1vcnkgZnJvbSAnLi9NZW1vcnkuanMnO1xuaW1wb3J0IHB1YnN1YiBmcm9tICdwdWJzdWIuanMnO1xuXG5jb25zdCBQYWdlVmlldyA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcGFnZU1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2UtbWFpblwiKTtcbiAgICBjb25zdCBuYXZEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2LWRyb3Bkb3duXCIpO1xuXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgbmF2RHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE5hdkNvbnRyb2wudG9nZ2xlTmF2KTtcbiAgICAgICAgcGFnZU1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KE1lbW9yeSkpO1xuICAgICAgICBwYWdlTWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNYWluKE1lbW9yeSkpO1xuICAgICAgICBOYXZDb250cm9sLnVwZGF0ZUFjdGl2ZU5hdigpO1xuXG4gICAgICAgIC8vIEFsd2F5cyBtYWtlcyB0aGUgbmF2IGFwcGVhciBpZiB3aW5kb3cgd2lkdGggaXMgPj0gNjUwcHhcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDY1MCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXRcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VWaWV3IiwiaW1wb3J0IHsgcmVtb3ZlQnlJZCB9IGZyb20gXCIuL1V0aWxzXCI7XG5cbmNvbnN0IFByb2plY3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XG4gICAgY29uc3QgaWQgPSBQcm9qZWN0LmdldElkKCk7XG4gICAgY29uc3QgdHlwZSA9IFwiUHJvamVjdFwiO1xuICAgIGxldCB0b2RvTGlzdCA9IFtdO1xuICAgIGxldCB0aXRsZSA9IHByb2plY3RUaXRsZTtcbiAgICBsZXQgaXNCb29rbWFya2VkID0gZmFsc2U7XG4gICAgbGV0IGRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIHRvZG9MaXN0LnB1c2godG9kbyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVG9kb0lkID0gKHRvZG9JZCkgPT4ge1xuICAgICAgICByZW1vdmVCeUlkKHRvZG9MaXN0LCB0b2RvSWQpXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChkZXNjKSA9PiB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gZGVzYztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRCb29rbWFya2VkID0gKGJvb2wpID0+IHtcbiAgICAgICAgaXNCb29rbWFya2VkID0gYm9vbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRpdGxlXG4gICAgICAgIH0sXG4gICAgICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBkZXNjcmlwdGlvblxuICAgICAgICB9LFxuICAgICAgICBnZXQgdG9kb0xpc3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9kb0xpc3RcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGlzQm9va21hcmtlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBpc0Jvb2ttYXJrZWRcbiAgICAgICAgfSxcbiAgICAgICAgYWRkVG9kbyxcbiAgICAgICAgcmVtb3ZlVG9kb0lkLFxuICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgc2V0RGVzY3JpcHRpb24sXG4gICAgICAgIHNldEJvb2ttYXJrZWRcbiAgICB9XG59XG5cbi8vIFNldCBQcm9qZWN0IHN0YXRpYyBjb3VudGVyIGZvciBpZFxuUHJvamVjdC5jb3VudGVyID0gMTtcblByb2plY3QuZ2V0SWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFByb2plY3QuY291bnRlcisrXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3QiLCJjb25zdCByZW1vdmVCeUlkID0gKGxpc3QsIG9iamVjdElkKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBsaXN0LmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT09IG9iamVjdElkKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlRyeWluZyB0byBkZWxldGUgYW4gaXRlbSB0aGF0IGRvZXMgbm90IGV4aXN0IVwiKTtcbiAgICB9XG59XG5cbmNvbnN0IGRpc3BsYXlEZWxldGUgPSAoZGlzcGxheU5vZGUsIGRlbGV0ZU5vZGUpID0+IHtcbiAgICBpZiAoZGVsZXRlTm9kZS5ub2RlTmFtZSA9PT0gXCJGT1JNXCIpIHtcbiAgICAgICAgWy4uLmRlbGV0ZU5vZGUucXVlcnlTZWxlY3RvckFsbChcInRleHRhcmVhXCIpLCAuLi5kZWxldGVOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKV0uZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkaXNwbGF5Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheS1ub25lXCIpO1xuICAgIGRlbGV0ZU5vZGUuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKTtcbn1cblxuZXhwb3J0IHsgcmVtb3ZlQnlJZCwgZGlzcGxheURlbGV0ZSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBFdmVudEFnZ3JlZ2F0b3IgZnJvbSAnLi9FdmVudEFnZ3JlZ2F0b3IuanMnO1xuaW1wb3J0IE1lbW9yeSBmcm9tICcuL01lbW9yeS5qcyc7XG5pbXBvcnQgUGFnZVZpZXcgZnJvbSAnLi9QYWdlVmlldy5qcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGhvbWVQcm9qZWN0ID0gUHJvamVjdChcIkhvbWVcIik7XG5ob21lUHJvamVjdC5zZXREZXNjcmlwdGlvbihcIllvdXIgcGVyc29uYWwgZGVmYXVsdCBwcm9qZWN0IHRvIHN0b3JlIHlvdXIgdG9kb3MuXCIpO1xuTWVtb3J5LmFkZFRvUHJvamVjdHMoaG9tZVByb2plY3QpO1xuTWVtb3J5LmFkZFRvQm9va21hcmtlZChob21lUHJvamVjdC5pZCk7XG5cbmNvbnN0IHRlc3RQcm9qZWN0ID0gUHJvamVjdChcIlRlc3QgUHJvamVjdFwiKTtcbk1lbW9yeS5hZGRUb1Byb2plY3RzKHRlc3RQcm9qZWN0KTtcblxuUGFnZVZpZXcuaW5pdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==