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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: inherit;\n    color: inherit;\n}\n\n:root {\n    --header-color: #1F3541;\n    --footer-color: #5289B5;\n    --bg-color: #AFD8F2;\n    --nav-color: #cee6f5;\n    --custom-white: #EDF2F3;\n    --fade-color: #505050;\n    --red: #ff6e6e;\n    --green: #bada55;\n    font-size: 16px;\n    font-family: \"Roboto\", sans-serif;\n}\n\nli::marker {\n    content: none;\n}\n\n.icon {\n    width: 1em;\n    height: 1em;\n}\n\n.display-none {\n    display: none !important;\n}\n\n.text-bold {\n    font-weight: bold;\n}\n\n.text-fade {\n    color: var(--fade-color);\n}\n\n.float-right{\n    float: right;\n}\n\n#page-container {\n    width: 100vw;\n    min-height: 100vh;\n    background-color: var(--bg-color);\n    display: grid;\n    grid-template: 4rem 1fr 2rem / 1fr;\n}\n\n#page-header,\n#page-footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--custom-white);\n}\n\n#page-header {\n    background-color: var(--header-color);\n    justify-content: space-between;\n    padding: 0 1rem;\n    font-size: 1.5rem;\n}\n\n#nav-dropdown {\n    background-color: var(--header-color);\n    outline: none;\n    border: none;\n}\n\n#nav {\n    grid-area: nav;\n    background-color: var(--nav-color);\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    font-size: 1.2rem;\n}\n\n#nav header {\n    font-size: 1.3em;\n    font-weight: bold;\n    padding-bottom: 1rem;\n}\n\n#nav ul>li {\n    padding: 0.5rem;\n    border-radius: 0.5em;\n    cursor: pointer;\n    display: grid;\n    align-items: center;\n    justify-items: start;\n    grid-template-columns: auto 1fr auto;\n    gap: 0.5rem;\n}\n\n#nav button.delete-btn {\n    float: right;\n    background-color: transparent;\n    border: none;\n    color: var(--header-color);\n    font-size: 0.9rem;\n    font-weight: bold;\n    padding: 0.2em 0.3em;\n    border-radius: 0.2em;\n}\n\n#nav ul>li.active {\n    font-weight: bold;\n    background-color: var(--bg-color);\n}\n\n#add-project {\n    cursor: pointer;\n}\n\n#add-project-form {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 0.5rem;\n}\n\n#add-project-form>* {\n    border-radius: 0.5em;\n}\n\n#add-project-form>input {\n    grid-area: 1 / 1 / 1 / -1;\n    padding: 2px 0;\n    padding-left: 1ch;\n}\n\n#add-project-form>button {\n    padding: 0.5rem 0;\n    font-weight: bold;\n}\n\n#add-project-btn {\n    background-color: var(--green);\n}\n\n#cancel-project-btn {\n    background-color: var(--red);\n}\n\n#main {\n    display: grid;\n    padding: clamp(1rem, 5vw, 3rem);\n    grid-template: auto 1fr / 1fr;\n    gap: 1rem;\n}\n\n#main .project-header {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.project-header>.project-title {\n    font-size: 2.5rem;\n}\n\n.input-group-description {\n    position: relative;\n}\n\n.input-group-description .prompt {\n    color: var(--fade-color);\n    padding-left: 0.5rem;\n}\n\n.input-description {\n    background-color: var(--nav-color);\n    border-radius: 1em;\n    width: 100%;\n    height: 10ch;\n    padding: 0.5rem;\n    border: none;\n    resize: none;\n    font-family: inherit;\n}\n\n.input-todo-description {\n    border-radius: 0.5em;\n    width: 100%;\n    height: 10ch;\n    padding: 1ch;\n    border: none;\n    resize: none;\n    font-family: inherit;\n    margin-bottom: 0.7em;\n}\n\nbutton {\n    padding: 0.5rem 1.2rem;\n    float: right;\n    border-radius: 1em;\n}\n\n.save-description-btn {\n    background-color: var(--green);\n}\n\n.cancel-description-btn {\n    background-color: var(--red);\n    margin-right: 0.5rem;\n}\n\n#todo-list{\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 1.2em;\n}\n\n.todo{\n    background-color: var(--custom-white);\n    padding: 1.3em 1em;\n    border-radius: 1em;\n    width: 100%;\n    display: grid;\n    grid-template: auto / 1fr auto auto;\n    align-items: center;\n    gap: 1ch;\n}\n\n.todo-title{\n    font-weight: bold;\n    font-size: 1.1em;\n}\n\n.todo-dueDate{\n    color: var(--fade-color);\n    font-size: 0.9em;\n}\n\n.todo-checkbox{\n    width: 1.5em;\n    height: 1.5em;\n}\n\n.todo-desc{\n    grid-column: 1 / -1;\n    padding: 0 0.5rem;\n}\n\n#page-footer {\n    background-color: var(--footer-color);\n}\n\n@media screen and (min-width: 650px) {\n    #page-header {\n        justify-content: center;\n    }\n\n    #nav-dropdown {\n        display: none;\n    }\n\n    #page-main {\n        display: grid;\n        grid-template: 1fr / 17.5rem 1fr;\n        grid-template-areas:\n            \"nav main\";\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: inherit;\n    color: inherit;\n}\n\n:root {\n    --header-color: #1F3541;\n    --footer-color: #5289B5;\n    --bg-color: #AFD8F2;\n    --nav-color: #cee6f5;\n    --custom-white: #EDF2F3;\n    --fade-color: #505050;\n    --red: #ff6e6e;\n    --green: #bada55;\n    font-size: 16px;\n    font-family: \"Roboto\", sans-serif;\n}\n\nli::marker {\n    content: none;\n}\n\n.icon {\n    width: 1em;\n    height: 1em;\n}\n\n.display-none {\n    display: none !important;\n}\n\n.text-bold {\n    font-weight: bold;\n}\n\n.text-fade {\n    color: var(--fade-color);\n}\n\n.float-right{\n    float: right;\n}\n\n#page-container {\n    width: 100vw;\n    min-height: 100vh;\n    background-color: var(--bg-color);\n    display: grid;\n    grid-template: 4rem 1fr 2rem / 1fr;\n}\n\n#page-header,\n#page-footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--custom-white);\n}\n\n#page-header {\n    background-color: var(--header-color);\n    justify-content: space-between;\n    padding: 0 1rem;\n    font-size: 1.5rem;\n}\n\n#nav-dropdown {\n    background-color: var(--header-color);\n    outline: none;\n    border: none;\n}\n\n#nav {\n    grid-area: nav;\n    background-color: var(--nav-color);\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    font-size: 1.2rem;\n}\n\n#nav header {\n    font-size: 1.3em;\n    font-weight: bold;\n    padding-bottom: 1rem;\n}\n\n#nav ul>li {\n    padding: 0.5rem;\n    border-radius: 0.5em;\n    cursor: pointer;\n    display: grid;\n    align-items: center;\n    justify-items: start;\n    grid-template-columns: auto 1fr auto;\n    gap: 0.5rem;\n}\n\n#nav button.delete-btn {\n    float: right;\n    background-color: transparent;\n    border: none;\n    color: var(--header-color);\n    font-size: 0.9rem;\n    font-weight: bold;\n    padding: 0.2em 0.3em;\n    border-radius: 0.2em;\n}\n\n#nav ul>li.active {\n    font-weight: bold;\n    background-color: var(--bg-color);\n}\n\n#add-project {\n    cursor: pointer;\n}\n\n#add-project-form {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: 0.5rem;\n}\n\n#add-project-form>* {\n    border-radius: 0.5em;\n}\n\n#add-project-form>input {\n    grid-area: 1 / 1 / 1 / -1;\n    padding: 2px 0;\n    padding-left: 1ch;\n}\n\n#add-project-form>button {\n    padding: 0.5rem 0;\n    font-weight: bold;\n}\n\n#add-project-btn {\n    background-color: var(--green);\n}\n\n#cancel-project-btn {\n    background-color: var(--red);\n}\n\n#main {\n    display: grid;\n    padding: clamp(1rem, 5vw, 3rem);\n    grid-template: auto 1fr / 1fr;\n    gap: 1rem;\n}\n\n#main .project-header {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.project-header>.project-title {\n    font-size: 2.5rem;\n}\n\n.input-group-description {\n    position: relative;\n}\n\n.input-group-description .prompt {\n    color: var(--fade-color);\n    padding-left: 0.5rem;\n}\n\n.input-description {\n    background-color: var(--nav-color);\n    border-radius: 1em;\n    width: 100%;\n    height: 10ch;\n    padding: 0.5rem;\n    border: none;\n    resize: none;\n    font-family: inherit;\n}\n\n.input-todo-description {\n    border-radius: 0.5em;\n    width: 100%;\n    height: 10ch;\n    padding: 1ch;\n    border: none;\n    resize: none;\n    font-family: inherit;\n    margin-bottom: 0.7em;\n}\n\nbutton {\n    padding: 0.5rem 1.2rem;\n    float: right;\n    border-radius: 1em;\n}\n\n.save-description-btn {\n    background-color: var(--green);\n}\n\n.cancel-description-btn {\n    background-color: var(--red);\n    margin-right: 0.5rem;\n}\n\n#todo-list{\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 1.2em;\n}\n\n.todo{\n    background-color: var(--custom-white);\n    padding: 1.3em 1em;\n    border-radius: 1em;\n    width: 100%;\n    display: grid;\n    grid-template: auto / 1fr auto auto;\n    align-items: center;\n    gap: 1ch;\n}\n\n.todo-title{\n    font-weight: bold;\n    font-size: 1.1em;\n}\n\n.todo-dueDate{\n    color: var(--fade-color);\n    font-size: 0.9em;\n}\n\n.todo-checkbox{\n    width: 1.5em;\n    height: 1.5em;\n}\n\n.todo-desc{\n    grid-column: 1 / -1;\n    padding: 0 0.5rem;\n}\n\n#page-footer {\n    background-color: var(--footer-color);\n}\n\n@media screen and (min-width: 650px) {\n    #page-header {\n        justify-content: center;\n    }\n\n    #nav-dropdown {\n        display: none;\n    }\n\n    #page-main {\n        display: grid;\n        grid-template: 1fr / 17.5rem 1fr;\n        grid-template-areas:\n            \"nav main\";\n    }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _NavControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavControl */ "./src/NavControl.js");
/* harmony import */ var _Memory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Memory */ "./src/Memory.js");
/* harmony import */ var _MainControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainControl */ "./src/MainControl.js");





const EventAggregator = (function () {
  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("ProjectAdded", (data) => {
    _Memory__WEBPACK_IMPORTED_MODULE_2__["default"].addToProjects(data);
    _NavControl__WEBPACK_IMPORTED_MODULE_1__["default"].updateNavSection(_Memory__WEBPACK_IMPORTED_MODULE_2__["default"]);
  });

  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("ProjectDeleted", (data) => {
    _Memory__WEBPACK_IMPORTED_MODULE_2__["default"].removeProjectId(data);
    _NavControl__WEBPACK_IMPORTED_MODULE_1__["default"].updateNavSection(_Memory__WEBPACK_IMPORTED_MODULE_2__["default"]);
  });

  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("ToggleBookmarked", (id) => {
    const project = _Memory__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectId(id);
    if (project.isBookmarked) {
      _Memory__WEBPACK_IMPORTED_MODULE_2__["default"].removeFromBookmarked(id);
    } else {
      _Memory__WEBPACK_IMPORTED_MODULE_2__["default"].addToBookmarked(id);
    }
    _NavControl__WEBPACK_IMPORTED_MODULE_1__["default"].updateNavSection(_Memory__WEBPACK_IMPORTED_MODULE_2__["default"]);
  });

  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("SetActiveProject", (id) =>
    _MainControl__WEBPACK_IMPORTED_MODULE_3__["default"].updateMain(_Memory__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectId(id))
  );

  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("AddProjectDesc", (id, desc) => {
    const project = _Memory__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectId(id);
    project.setDescription(desc);
    _MainControl__WEBPACK_IMPORTED_MODULE_3__["default"].updateMain(project);
  });

  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("ToggleIsDoneTodo", (todo) => {
    const obj = _Memory__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectId(todo.projectId).getTodoId(todo.id);
    obj.toggleDone();
  });

  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe("ChangeTodoDescription", (id, desc) => {
    const projectId = parseInt(
      document.querySelector("[data-projectId]").getAttribute("data-projectId")
    );
    const todo = _Memory__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoId(projectId, id);
    todo.setDescription(desc);
    _MainControl__WEBPACK_IMPORTED_MODULE_3__["default"].updateMain(_Memory__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectId(projectId));
  });
})();

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

  return icon;
};

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
/* harmony import */ var _MainView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainView */ "./src/MainView.js");



const MainControl = (function () {
  const updateMain = (project) => {
    const main = document.querySelector("#main");
    main.innerHTML = "";
    main.appendChild((0,_MainView__WEBPACK_IMPORTED_MODULE_1__.createProjectHeader)(project));
    if (project.todoList) {
      main.appendChild((0,_MainView__WEBPACK_IMPORTED_MODULE_1__.createTodos)(project));
    }
  };

  const saveDescription = (event) => {
    event.preventDefault();
    const projectId = event.target.getAttribute("data-id");
    const description = event.target.querySelector(
      '[name="project-description"]'
    ).value;
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("AddProjectDesc", [parseInt(projectId), description]);
  };

  return {
    updateMain,
    saveDescription,
  };
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
/* harmony import */ var _MainControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainControl */ "./src/MainControl.js");
/* harmony import */ var _TodoView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoView */ "./src/TodoView.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");




const createTitle = (project) => {
  const title = document.createElement("h3");
  title.classList.add("project-title");
  title.appendChild(document.createTextNode(project.title));
  return title;
};

const createDesc = (project) => {
  const div = document.createElement("div");
  div.classList.add("input-group-description");

  const description = document.createElement("p");
  const content = project.description ? project.description : "";
  const prompt = document.createElement("span");
  prompt.classList.add("prompt");
  if (content) {
    prompt.textContent = "Edit description";
    prompt.classList.add("float-right");
  } else {
    prompt.textContent = "Add a project description...";
  }

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

  prompt.addEventListener(
    "click",
    _Utils__WEBPACK_IMPORTED_MODULE_2__.displayDelete.bind(window, input, description)
  );
  cancelBtn.addEventListener(
    "click",
    _Utils__WEBPACK_IMPORTED_MODULE_2__.displayDelete.bind(window, description, input)
  );
  input.addEventListener("submit", _MainControl__WEBPACK_IMPORTED_MODULE_0__["default"].saveDescription);

  input.appendChild(textarea);
  input.appendChild(saveBtn);
  input.appendChild(cancelBtn);
  div.appendChild(description);
  div.appendChild(input);
  return div;
};

const createProjectHeader = (project) => {
  const div = document.createElement("div");
  div.classList.add("project-header");
  div.setAttribute("data-projectId", project.id);

  const title = createTitle(project);
  div.appendChild(title);

  const description = createDesc(project);
  div.appendChild(description);

  return div;
};

const createTodos = (project) => {
  const todoList = document.createElement("div");
  todoList.id = "todo-list";
  for (const todo of project.todoList) {
    todoList.appendChild((0,_TodoView__WEBPACK_IMPORTED_MODULE_1__.createTodo)(todo));
  }
  return todoList;
};

const createMain = (memory) => {
  const main = document.createElement("div");
  main.id = "main";

  const baseProject = memory.getProjectId(1);
  main.appendChild(createProjectHeader(baseProject));
  if (baseProject.todoList) {
    main.appendChild(createTodos(baseProject));
  }
  return main;
};




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
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");



const Memory = (function () {
  const projects = [];
  const bookmarkedProjects = [];

  const addToProjects = (project) => {
    // eslint-disable-next-line no-param-reassign
    if (project.type !== "Project") project = (0,_Project__WEBPACK_IMPORTED_MODULE_0__["default"])(project);
    projects.push(project);
  };

  const addToBookmarked = (projectId) => {
    const index = projects.findIndex((project) => project.id === projectId);
    const target = projects[index];
    target.setBookmarked(true);
    bookmarkedProjects.push(target);
  };

  const removeFromBookmarked = (projectId) => {
    const index = bookmarkedProjects.findIndex(
      (project) => project.id === projectId
    );
    const target = bookmarkedProjects[index];
    target.setBookmarked(false);
    bookmarkedProjects.splice(index, 1);
  };

  const removeProjectId = (projectId) => {
    (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.removeById)(projects, projectId);
  };

  const getProjectId = (projectId) => {
    const index = projects.findIndex((project) => project.id === projectId);

    return projects[index];
  };

  const getTodoId = (projectId, todoId) => {
    const project = getProjectId(projectId);
    return project.getTodoId(todoId);
  };

  return {
    projects,
    bookmarkedProjects,
    addToProjects,
    removeProjectId,
    addToBookmarked,
    removeFromBookmarked,
    getProjectId,
    getTodoId,
  };
})();

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
/* harmony import */ var _NavView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavView */ "./src/NavView.js");



const NavControl = (function () {
  let currentActive = 1;

  const updateActiveNav = (event) => {
    if (event) {
      currentActive = event.target.getAttribute("data-id");
      const prev = document.querySelector("#nav .active");
      prev.classList.remove("active");
      prev.addEventListener("click", updateActiveNav);
    }

    const nav = document.querySelector(`#nav [data-id="${currentActive}"]`);
    nav.classList.add("active");
    nav.removeEventListener("click", updateActiveNav);
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("SetActiveProject", [parseInt(currentActive)]);
  };

  const toggleAddProjectForm = () => {
    document
      .querySelector("#add-project-form")
      .classList.toggle("display-none");
    document.querySelector("#add-project").classList.toggle("display-none");
  };

  const toggleBookmarked = (event) => {
    event.stopPropagation();
    const targetProjectId = event.target.parentElement.getAttribute("data-id");

    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("ToggleBookmarked", [parseInt(targetProjectId)]);
  };

  const toggleNav = () => {
    document.querySelector("#nav").classList.toggle("display-none");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = document.querySelector(`input[name="project-title"]`);
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("ProjectAdded", [title.value]);
    title.value = "";
    toggleAddProjectForm();
  };

  const updateNavSection = (memory) => {
    const projectsList = document.querySelector("#projects>ul");
    const bookmarkedList = document.querySelector("#projects-bookmarked");

    projectsList.innerHTML = "";
    bookmarkedList.innerHTML = "";

    for (const project of memory.projects) {
      const projectNode = (0,_NavView__WEBPACK_IMPORTED_MODULE_1__.createProjectNode)(project);
      if (project.isBookmarked) {
        bookmarkedList.appendChild(projectNode);
      } else {
        projectsList.appendChild(projectNode);
      }
    }

    updateActiveNav();
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    const targetProjectId = event.target.parentElement.getAttribute("data-id");

    // If delete current active nav, default back to home nav
    if (currentActive === targetProjectId) currentActive = 1;
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("ProjectDeleted", [parseInt(targetProjectId)]);
  };

  return {
    get currentActive() {
      return currentActive;
    },
    updateActiveNav,
    toggleAddProjectForm,
    toggleNav,
    toggleBookmarked,
    handleSubmit,
    updateNavSection,
    handleDelete,
  };
})();

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
/* harmony import */ var _NavControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavControl */ "./src/NavControl.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon */ "./src/Icon.js");
/* harmony import */ var _Icons_star_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons/star.svg */ "./src/Icons/star.svg");
/* harmony import */ var _Icons_star_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/star-outline.svg */ "./src/Icons/star-outline.svg");





const createProjectNode = (project) => {
  const item = document.createElement("li");
  item.setAttribute("data-id", project.id);

  if (project.id !== 1) {
    const icon = project.isBookmarked ? (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])(_Icons_star_svg__WEBPACK_IMPORTED_MODULE_2__) : (0,_Icon__WEBPACK_IMPORTED_MODULE_1__["default"])(_Icons_star_outline_svg__WEBPACK_IMPORTED_MODULE_3__);
    icon.addEventListener("click", _NavControl__WEBPACK_IMPORTED_MODULE_0__["default"].toggleBookmarked);
    item.appendChild(icon);
  }

  item.appendChild(document.createTextNode(project.title));

  if (project.id !== 1) {
    const dltBtn = document.createElement("button");
    dltBtn.classList.add("delete-btn");
    dltBtn.textContent = "X";
    dltBtn.addEventListener("click", _NavControl__WEBPACK_IMPORTED_MODULE_0__["default"].handleDelete);
    item.appendChild(dltBtn);
  }

  item.addEventListener("click", _NavControl__WEBPACK_IMPORTED_MODULE_0__["default"].updateActiveNav);
  return item;
};

const createBookmarkedSection = (memory) => {
  const ul = document.createElement("ul");
  ul.id = "projects-bookmarked";

  for (const project of memory.bookmarkedProjects) {
    // Only shows bookmarked projects in the top of nav section
    const item = createProjectNode(project);

    ul.appendChild(item);
  }

  return ul;
};

const createProjectSection = (memory) => {
  const div = document.createElement("div");
  div.id = "projects";

  const header = document.createElement("header");
  header.textContent = "Projects";
  div.appendChild(header);

  const ul = document.createElement("ul");

  for (const project of memory.projects) {
    // skip Default (Home) Project
    if (project.isBookmarked) continue;

    const item = createProjectNode(project);

    ul.appendChild(item);
  }
  div.appendChild(ul);

  return div;
};

const createAddProjectBtn = () => {
  const div = document.createElement("div");
  div.id = "add-project";
  div.classList.add("text-bold");
  div.textContent = "Add Project";
  div.addEventListener("click", _NavControl__WEBPACK_IMPORTED_MODULE_0__["default"].toggleAddProjectForm);

  return div;
};

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
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", _NavControl__WEBPACK_IMPORTED_MODULE_0__["default"].toggleAddProjectForm);
  form.appendChild(cancelBtn);

  const addBtn = document.createElement("button");
  addBtn.type = "submit";
  addBtn.id = "add-project-btn";
  addBtn.textContent = "Add";
  form.appendChild(addBtn);

  form.addEventListener("submit", _NavControl__WEBPACK_IMPORTED_MODULE_0__["default"].handleSubmit);
  return form;
};

const createNav = (memory) => {
  const nav = document.createElement("div");
  nav.id = "nav";

  nav.appendChild(createBookmarkedSection(memory));
  nav.appendChild(createProjectSection(memory));
  nav.appendChild(createAddProjectBtn());
  nav.appendChild(createProjectForm());
  return nav;
};




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
/* harmony import */ var _MainView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainView */ "./src/MainView.js");
/* harmony import */ var _NavView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavView */ "./src/NavView.js");
/* harmony import */ var _NavControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavControl */ "./src/NavControl.js");
/* harmony import */ var _Memory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Memory */ "./src/Memory.js");





const PageView = (function () {
  const pageMain = document.querySelector("#page-main");
  const navDropdown = document.querySelector("#nav-dropdown");

  const init = () => {
    navDropdown.addEventListener("click", _NavControl__WEBPACK_IMPORTED_MODULE_2__["default"].toggleNav);
    pageMain.appendChild((0,_NavView__WEBPACK_IMPORTED_MODULE_1__.createNav)(_Memory__WEBPACK_IMPORTED_MODULE_3__["default"]));
    pageMain.appendChild((0,_MainView__WEBPACK_IMPORTED_MODULE_0__.createMain)(_Memory__WEBPACK_IMPORTED_MODULE_3__["default"]));
    _NavControl__WEBPACK_IMPORTED_MODULE_2__["default"].updateActiveNav();

    // Always makes the nav appear if window width is >= 650px
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 650) {
        document.querySelector("#nav").classList.remove("display-none");
      }
    });
  };

  return {
    init,
  };
})();

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
  const todoList = [];
  let title = projectTitle;
  let isBookmarked = false;
  let description;

  const addTodo = (todo) => {
    // eslint-disable-next-line no-param-reassign
    todo.projectId = id;
    todoList.push(todo);
  };

  const removeTodoId = (todoId) => {
    (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.removeById)(todoList, todoId);
  };

  const setTitle = (newTitle) => {
    title = newTitle;
  };

  const setDescription = (desc) => {
    description = desc;
  };

  const setBookmarked = (bool) => {
    isBookmarked = bool;
  };

  const getTodoId = (todoId) => {
    const index = todoList.findIndex((todo) => todo.id === todoId);

    return todoList[index];
  };

  return {
    id,
    type,
    get title() {
      return title;
    },
    get description() {
      return description;
    },
    get todoList() {
      return todoList;
    },
    get isBookmarked() {
      return isBookmarked;
    },
    addTodo,
    removeTodoId,
    setTitle,
    setDescription,
    setBookmarked,
    getTodoId,
  };
};

// Set Project static counter for id
Project.counter = 1;
Project.getId = function () {
  const current = Project.counter;
  Project.counter += 1;
  return current;
};

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
const Todo = function (_title) {
  const type = "Todo";
  const id = Todo.getId();
  let title = _title;
  let description;
  let dueDate;
  let priority;
  let isDone = false;

  const toggleDone = () => {
    isDone = !isDone;
  };

  const setTitle = (newTitle) => {
    title = newTitle;
  };

  const setDescription = (desc) => {
    description = desc;
  };

  const setDueDate = (date) => {
    dueDate = date;
  };

  const setPriority = (prio) => {
    priority = prio;
  };

  return {
    get title() {
      return title;
    },
    get description() {
      return description;
    },
    get dueDate() {
      return dueDate;
    },
    get priority() {
      return priority;
    },
    get isDone() {
      return isDone;
    },
    id,
    type,
    toggleDone,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
  };
};

// Initialize static count for Todo
Todo.count = 1;
Todo.getId = function () {
  const current = Todo.count;
  Todo.count += 1;
  return current;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./src/TodoControl.js":
/*!****************************!*\
  !*** ./src/TodoControl.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub.js */ "./node_modules/pubsub.js/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);


const TodoControl = (function () {
  const toggleDone = (todo) => {
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("ToggleIsDoneTodo", [todo]);
  };

  const submitDescription = (event) => {
    event.preventDefault();
    const todoId = event.target.getAttribute("data-id");
    const descValue = document.querySelector(
      `[data-id="${todoId}"]>[name="todo-description"]`
    ).value;
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("ChangeTodoDescription", [parseInt(todoId), descValue]);
  };

  return {
    toggleDone,
    submitDescription,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoControl);


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
/* harmony import */ var _TodoControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoControl */ "./src/TodoControl.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/Utils.js");



const createTitle = (todo) => {
  const title = document.createElement("header");
  title.classList.add("todo-title");
  title.textContent = todo.title;

  return title;
};

const createDueDate = (todo) => {
  const dueDate = document.createElement("p");
  dueDate.classList.add("todo-dueDate");
  if (todo.dueDate) dueDate.textContent = todo.dueDate;
  else dueDate.textContent = "Add a due date";

  return dueDate;
};

const createCheckbox = (todo) => {
  const isDone = document.createElement("input");
  isDone.classList.add("todo-checkbox");
  isDone.type = "checkbox";
  isDone.checked = todo.isDone;
  isDone.addEventListener("click", _TodoControl__WEBPACK_IMPORTED_MODULE_0__["default"].toggleDone.bind(window, todo));

  return isDone;
};

const createDescription = (todo) => {
  const div = document.createElement("div");
  const desc = document.createElement("div");
  let prompt;

  div.classList.add("display-none");
  div.classList.add("todo-desc");
  if (todo.description) {
    const todoDesc = document.createElement("p");
    todoDesc.textContent = todo.description;
    desc.appendChild(todoDesc);

    prompt = document.createElement("span");
    prompt.classList.add("float-right");
    prompt.textContent = "Edit description ";
  } else {
    prompt = document.createElement("p");
    prompt.textContent = "Add description";
  }

  const input = document.createElement("form");
  input.classList.add("display-none");
  input.setAttribute("data-id", todo.id);

  const textarea = document.createElement("textarea");
  textarea.name = "todo-description";
  textarea.placeholder = "Enter your todo description here.";
  textarea.value = todo.description ? todo.description : "";
  textarea.required = true;
  textarea.classList.add("input-todo-description");

  const saveBtn = document.createElement("button");
  saveBtn.appendChild(document.createTextNode("Save"));
  saveBtn.type = "submit";
  saveBtn.classList.add("save-description-btn");

  const cancelBtn = document.createElement("button");
  cancelBtn.appendChild(document.createTextNode("Cancel"));
  cancelBtn.type = "button";
  cancelBtn.classList.add("cancel-description-btn");

  prompt.addEventListener("click", _Utils__WEBPACK_IMPORTED_MODULE_1__.displayDelete.bind(window, input, desc));
  cancelBtn.addEventListener("click", _Utils__WEBPACK_IMPORTED_MODULE_1__.displayDelete.bind(window, desc, input));
  input.addEventListener("submit", _TodoControl__WEBPACK_IMPORTED_MODULE_0__["default"].submitDescription);

  input.appendChild(textarea);
  input.appendChild(saveBtn);
  input.appendChild(cancelBtn);

  prompt.classList.add("text-fade");
  desc.appendChild(prompt);
  desc.appendChild(input);
  div.appendChild(desc);
  div.appendChild(input);
  return div;
};

const createTodo = (todo) => {
  const node = document.createElement("div");
  node.classList.add("todo");

  const title = createTitle(todo);
  const dueDate = createDueDate(todo);
  const isDone = createCheckbox(todo);
  const description = createDescription(todo);
  title.addEventListener("click", () =>
    description.classList.toggle("display-none")
  );

  node.appendChild(title);
  node.appendChild(dueDate);
  node.appendChild(isDone);
  node.appendChild(description);
  return node;
};

// eslint-disable-next-line import/prefer-default-export



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
  return list.splice(index, 1);
};

const displayDelete = (displayNode, deleteNode) => {
  displayNode.classList.remove("display-none");
  deleteNode.classList.add("display-none");
};




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
/* harmony import */ var _EventAggregator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAggregator */ "./src/EventAggregator.js");
/* harmony import */ var _Memory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Memory */ "./src/Memory.js");
/* harmony import */ var _PageView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageView */ "./src/PageView.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Todo */ "./src/Todo.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







const homeProject = (0,_Project__WEBPACK_IMPORTED_MODULE_3__["default"])("Home");
const firstTodo = (0,_Todo__WEBPACK_IMPORTED_MODULE_4__["default"])("I'm a todo lol");
firstTodo.setDescription("Hello, I'm a description");
homeProject.setDescription(
  "Your personal default project to store your todos."
);
homeProject.addTodo(firstTodo);
homeProject.addTodo((0,_Todo__WEBPACK_IMPORTED_MODULE_4__["default"])("Another test todo"));
_Memory__WEBPACK_IMPORTED_MODULE_1__["default"].addToProjects(homeProject);
_Memory__WEBPACK_IMPORTED_MODULE_1__["default"].addToBookmarked(homeProject.id);

const testProject = (0,_Project__WEBPACK_IMPORTED_MODULE_3__["default"])("Test Project");
_Memory__WEBPACK_IMPORTED_MODULE_1__["default"].addToProjects(testProject);

_PageView__WEBPACK_IMPORTED_MODULE_2__["default"].init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxrQkFBa0I7QUFDakk7QUFDQSxvRUFBb0UsZ0JBQWdCLGlCQUFpQiw2QkFBNkIseUJBQXlCLHFCQUFxQixHQUFHLFdBQVcsOEJBQThCLDhCQUE4QiwwQkFBMEIsMkJBQTJCLDhCQUE4Qiw0QkFBNEIscUJBQXFCLHVCQUF1QixzQkFBc0IsMENBQTBDLEdBQUcsZ0JBQWdCLG9CQUFvQixHQUFHLFdBQVcsaUJBQWlCLGtCQUFrQixHQUFHLG1CQUFtQiwrQkFBK0IsR0FBRyxnQkFBZ0Isd0JBQXdCLEdBQUcsZ0JBQWdCLCtCQUErQixHQUFHLGlCQUFpQixtQkFBbUIsR0FBRyxxQkFBcUIsbUJBQW1CLHdCQUF3Qix3Q0FBd0Msb0JBQW9CLHlDQUF5QyxHQUFHLGlDQUFpQyxvQkFBb0IsOEJBQThCLDBCQUEwQixpQ0FBaUMsR0FBRyxrQkFBa0IsNENBQTRDLHFDQUFxQyxzQkFBc0Isd0JBQXdCLEdBQUcsbUJBQW1CLDRDQUE0QyxvQkFBb0IsbUJBQW1CLEdBQUcsVUFBVSxxQkFBcUIseUNBQXlDLG9CQUFvQixvQkFBb0IsNkJBQTZCLGdCQUFnQix3QkFBd0IsR0FBRyxpQkFBaUIsdUJBQXVCLHdCQUF3QiwyQkFBMkIsR0FBRyxnQkFBZ0Isc0JBQXNCLDJCQUEyQixzQkFBc0Isb0JBQW9CLDBCQUEwQiwyQkFBMkIsMkNBQTJDLGtCQUFrQixHQUFHLDRCQUE0QixtQkFBbUIsb0NBQW9DLG1CQUFtQixpQ0FBaUMsd0JBQXdCLHdCQUF3QiwyQkFBMkIsMkJBQTJCLEdBQUcsdUJBQXVCLHdCQUF3Qix3Q0FBd0MsR0FBRyxrQkFBa0Isc0JBQXNCLEdBQUcsdUJBQXVCLG9CQUFvQixxQ0FBcUMsa0NBQWtDLGtCQUFrQixHQUFHLHlCQUF5QiwyQkFBMkIsR0FBRyw2QkFBNkIsZ0NBQWdDLHFCQUFxQix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLHdCQUF3QixHQUFHLHNCQUFzQixxQ0FBcUMsR0FBRyx5QkFBeUIsbUNBQW1DLEdBQUcsV0FBVyxvQkFBb0Isc0NBQXNDLG9DQUFvQyxnQkFBZ0IsR0FBRywyQkFBMkIsb0JBQW9CLDZCQUE2QixrQkFBa0IsR0FBRyxvQ0FBb0Msd0JBQXdCLEdBQUcsOEJBQThCLHlCQUF5QixHQUFHLHNDQUFzQywrQkFBK0IsMkJBQTJCLEdBQUcsd0JBQXdCLHlDQUF5Qyx5QkFBeUIsa0JBQWtCLG1CQUFtQixzQkFBc0IsbUJBQW1CLG1CQUFtQiwyQkFBMkIsR0FBRyw2QkFBNkIsMkJBQTJCLGtCQUFrQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsMkJBQTJCLDJCQUEyQixHQUFHLFlBQVksNkJBQTZCLG1CQUFtQix5QkFBeUIsR0FBRywyQkFBMkIscUNBQXFDLEdBQUcsNkJBQTZCLG1DQUFtQywyQkFBMkIsR0FBRyxlQUFlLG9CQUFvQiwrQkFBK0IsaUJBQWlCLEdBQUcsVUFBVSw0Q0FBNEMseUJBQXlCLHlCQUF5QixrQkFBa0Isb0JBQW9CLDBDQUEwQywwQkFBMEIsZUFBZSxHQUFHLGdCQUFnQix3QkFBd0IsdUJBQXVCLEdBQUcsa0JBQWtCLCtCQUErQix1QkFBdUIsR0FBRyxtQkFBbUIsbUJBQW1CLG9CQUFvQixHQUFHLGVBQWUsMEJBQTBCLHdCQUF3QixHQUFHLGtCQUFrQiw0Q0FBNEMsR0FBRywwQ0FBMEMsb0JBQW9CLGtDQUFrQyxPQUFPLHVCQUF1Qix3QkFBd0IsT0FBTyxvQkFBb0Isd0JBQXdCLDJDQUEyQyx5REFBeUQsT0FBTyxHQUFHLE9BQU8sa0ZBQWtGLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtB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QUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMkI7QUFDRztBQUNJO0FBQ0Y7QUFDTjtBQUNMOztBQUVyQixvQkFBb0Isb0RBQU87QUFDM0Isa0JBQWtCLGlEQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQUk7QUFDeEIsNkRBQW9CO0FBQ3BCLCtEQUFzQjs7QUFFdEIsb0JBQW9CLG9EQUFPO0FBQzNCLDZEQUFvQjs7QUFFcEIsc0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9ub2RlX21vZHVsZXMvcHVic3ViLmpzL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL0V2ZW50QWdncmVnYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9JY29uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL01haW5Db250cm9sLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL01haW5WaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL01lbW9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9OYXZDb250cm9sLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL05hdlZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9zcmMvUGFnZVZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL1RvZG9Db250cm9sLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL1RvZG9WaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLy4vc3JjL1V0aWxzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0taGVhZGVyLWNvbG9yOiAjMUYzNTQxO1xcbiAgICAtLWZvb3Rlci1jb2xvcjogIzUyODlCNTtcXG4gICAgLS1iZy1jb2xvcjogI0FGRDhGMjtcXG4gICAgLS1uYXYtY29sb3I6ICNjZWU2ZjU7XFxuICAgIC0tY3VzdG9tLXdoaXRlOiAjRURGMkYzO1xcbiAgICAtLWZhZGUtY29sb3I6ICM1MDUwNTA7XFxuICAgIC0tcmVkOiAjZmY2ZTZlO1xcbiAgICAtLWdyZWVuOiAjYmFkYTU1O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxubGk6Om1hcmtlciB7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbi5pY29uIHtcXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgaGVpZ2h0OiAxZW07XFxufVxcblxcbi5kaXNwbGF5LW5vbmUge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi50ZXh0LWJvbGQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRleHQtZmFkZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1mYWRlLWNvbG9yKTtcXG59XFxuXFxuLmZsb2F0LXJpZ2h0e1xcbiAgICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbiNwYWdlLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNHJlbSAxZnIgMnJlbSAvIDFmcjtcXG59XFxuXFxuI3BhZ2UtaGVhZGVyLFxcbiNwYWdlLWZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tY3VzdG9tLXdoaXRlKTtcXG59XFxuXFxuI3BhZ2UtaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jbmF2LWRyb3Bkb3duIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jbmF2IHtcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNuYXYgaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jbmF2IHVsPmxpIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI25hdiBidXR0b24uZGVsZXRlLWJ0biB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMC4yZW0gMC4zZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbn1cXG5cXG4jbmF2IHVsPmxpLmFjdGl2ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbiNhZGQtcHJvamVjdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNhZGQtcHJvamVjdC1mb3JtPioge1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0+aW5wdXQge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMSAvIC0xO1xcbiAgICBwYWRkaW5nOiAycHggMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxY2g7XFxufVxcblxcbiNhZGQtcHJvamVjdC1mb3JtPmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuI2NhbmNlbC1wcm9qZWN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogY2xhbXAoMXJlbSwgNXZ3LCAzcmVtKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgLyAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI21haW4gLnByb2plY3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcj4ucHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uaW5wdXQtZ3JvdXAtZGVzY3JpcHRpb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5pbnB1dC1ncm91cC1kZXNjcmlwdGlvbiAucHJvbXB0IHtcXG4gICAgY29sb3I6IHZhcigtLWZhZGUtY29sb3IpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLmlucHV0LWRlc2NyaXB0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMGNoO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLmlucHV0LXRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTBjaDtcXG4gICAgcGFkZGluZzogMWNoO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuN2VtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLnNhdmUtZGVzY3JpcHRpb24tYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4uY2FuY2VsLWRlc2NyaXB0aW9uLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4jdG9kby1saXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogMS4yZW07XFxufVxcblxcbi50b2Rve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdXN0b20td2hpdGUpO1xcbiAgICBwYWRkaW5nOiAxLjNlbSAxZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyAxZnIgYXV0byBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFjaDtcXG59XFxuXFxuLnRvZG8tdGl0bGV7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbn1cXG5cXG4udG9kby1kdWVEYXRle1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZS1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi50b2RvLWNoZWNrYm94e1xcbiAgICB3aWR0aDogMS41ZW07XFxuICAgIGhlaWdodDogMS41ZW07XFxufVxcblxcbi50b2RvLWRlc2N7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xcbn1cXG5cXG4jcGFnZS1mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItY29sb3IpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xcbiAgICAjcGFnZS1oZWFkZXIge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI25hdi1kcm9wZG93biB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgICNwYWdlLW1haW4ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDE3LjVyZW0gMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICBcXFwibmF2IG1haW5cXFwiO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztJQUdJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FB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YUFBYTtRQUNiLGdDQUFnQztRQUNoQztzQkFDYztJQUNsQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1oZWFkZXItY29sb3I6ICMxRjM1NDE7XFxuICAgIC0tZm9vdGVyLWNvbG9yOiAjNTI4OUI1O1xcbiAgICAtLWJnLWNvbG9yOiAjQUZEOEYyO1xcbiAgICAtLW5hdi1jb2xvcjogI2NlZTZmNTtcXG4gICAgLS1jdXN0b20td2hpdGU6ICNFREYyRjM7XFxuICAgIC0tZmFkZS1jb2xvcjogIzUwNTA1MDtcXG4gICAgLS1yZWQ6ICNmZjZlNmU7XFxuICAgIC0tZ3JlZW46ICNiYWRhNTU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5saTo6bWFya2VyIHtcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxuXFxuLmljb24ge1xcbiAgICB3aWR0aDogMWVtO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG59XFxuXFxuLmRpc3BsYXktbm9uZSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnRleHQtYm9sZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGV4dC1mYWRlIHtcXG4gICAgY29sb3I6IHZhcigtLWZhZGUtY29sb3IpO1xcbn1cXG5cXG4uZmxvYXQtcmlnaHR7XFxuICAgIGZsb2F0OiByaWdodDtcXG59XFxuXFxuI3BhZ2UtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiA0cmVtIDFmciAycmVtIC8gMWZyO1xcbn1cXG5cXG4jcGFnZS1oZWFkZXIsXFxuI3BhZ2UtZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1jdXN0b20td2hpdGUpO1xcbn1cXG5cXG4jcGFnZS1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNuYXYtZHJvcGRvd24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNuYXYge1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuI25hdiBoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbiNuYXYgdWw+bGkge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jbmF2IGJ1dHRvbi5kZWxldGUtYnRuIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjNlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxufVxcblxcbiNuYXYgdWw+bGkuYWN0aXZlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0+KiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtZm9ybT5pbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gLTE7XFxuICAgIHBhZGRpbmc6IDJweCAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFjaDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0+YnV0dG9uIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4jY2FuY2VsLXByb2plY3QtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiBjbGFtcCgxcmVtLCA1dncsIDNyZW0pO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciAvIDFmcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jbWFpbiAucHJvamVjdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyPi5wcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5pbnB1dC1ncm91cC1kZXNjcmlwdGlvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmlucHV0LWdyb3VwLWRlc2NyaXB0aW9uIC5wcm9tcHQge1xcbiAgICBjb2xvcjogdmFyKC0tZmFkZS1jb2xvcik7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG5cXG4uaW5wdXQtZGVzY3JpcHRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwY2g7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4uaW5wdXQtdG9kby1kZXNjcmlwdGlvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMGNoO1xcbiAgICBwYWRkaW5nOiAxY2g7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43ZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uc2F2ZS1kZXNjcmlwdGlvbi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi5jYW5jZWwtZGVzY3JpcHRpb24tYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbiN0b2RvLWxpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgZ2FwOiAxLjJlbTtcXG59XFxuXFxuLnRvZG97XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1c3RvbS13aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDEuM2VtIDFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIDFmciBhdXRvIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMWNoO1xcbn1cXG5cXG4udG9kby10aXRsZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxufVxcblxcbi50b2RvLWR1ZURhdGV7XFxuICAgIGNvbG9yOiB2YXIoLS1mYWRlLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuLnRvZG8tY2hlY2tib3h7XFxuICAgIHdpZHRoOiAxLjVlbTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG59XFxuXFxuLnRvZG8tZGVzY3tcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgcGFkZGluZzogMCAwLjVyZW07XFxufVxcblxcbiNwYWdlLWZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci1jb2xvcik7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XFxuICAgICNwYWdlLWhlYWRlciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjbmF2LWRyb3Bkb3duIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI3BhZ2UtbWFpbiB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMTcuNXJlbSAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJuYXYgbWFpblxcXCI7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIihmdW5jdGlvbihzY29wZSkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBwdWJzdWJJbnN0YW5jZSA9IG51bGw7XG5cdHZhciBwdWJzdWJDb25maWcgPSBudWxsO1xuXG5cdGlmKHR5cGVvZiBwdWJzdWIgPT09ICdvYmplY3QnKSB7XG5cdFx0cHVic3ViQ29uZmlnID0gcHVic3ViO1xuXHQvL25vZGUuanMgY29uZmlnIGZyb20gZ2xvYmFsXG5cdH0gZWxzZSBpZih0eXBlb2YgZ2xvYmFsID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZ2xvYmFsLnB1YnN1YkNvbmZpZyA9PT0gJ29iamVjdCcpIHtcblx0XHRwdWJzdWJDb25maWcgPSBnbG9iYWwucHVic3ViQ29uZmlnO1xuXHR9XG5cblx0ZnVuY3Rpb24gUHVic3ViKGNvbmZpZykge1xuXHRcdHZhciBfZXZlbnRPYmplY3QgPSB7fTtcblx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdHNlcGFyYXRvciA6IChjb25maWcgJiYgY29uZmlnLnNlcGFyYXRvcikgPyBjb25maWcuc2VwYXJhdG9yIDogJy8nLFxuXHRcdFx0cmVjdXJyZW50IDogKGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnLnJlY3VycmVudCA9PT0gJ2Jvb2xlYW4nKSA/IGNvbmZpZy5yZWN1cnJlbnQgOiAoZmFsc2UpLFxuXHRcdFx0ZGVwdGggICAgIDogKGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnLmRlcHRoID09PSAnbnVtYmVyJykgPyBjb25maWcuZGVwdGggOiBudWxsLFxuXHRcdFx0YXN5bmMgICAgIDogKGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnLmFzeW5jID09PSAnYm9vbGVhbicpID8gY29uZmlnLmFzeW5jIDogKGZhbHNlKSxcblx0XHRcdGNvbnRleHQgICA6IChjb25maWcgJiYgY29uZmlnLmNvbnRleHQpID8gY29uZmlnLmNvbnRleHQgOiBudWxsLFxuXHRcdFx0bG9nICAgICAgIDogKGNvbmZpZyAmJiBjb25maWcubG9nKSA/IGNvbmZpZy5sb2cgOiAoZmFsc2UpXG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGZvckVhY2goZGF0YUFycmF5LCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIGkgPSAwLFxuXHRcdFx0XHRhcnJheUxlbmd0aCA9IGRhdGFBcnJheS5sZW5ndGg7XG5cblx0XHRcdGZvcihpID0gMDsgaSA8IGFycmF5TGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y2FsbGJhY2soaSwgZGF0YUFycmF5W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNBcnJheSAob2JqKSB7XG5cdFx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheSA/IEFycmF5LmlzQXJyYXkob2JqKSA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrKHN1YnNjcmlwdGlvbnMsIGFyZ3MsIGFzeW5jKSB7XG5cdFx0XHRhc3luYyA9ICh0eXBlb2YgYXN5bmMgPT09ICdib29sZWFuJykgPyBhc3luYyA6IG9wdGlvbnMuYXN5bmM7XG5cdFx0XHRpZighc3Vic2NyaXB0aW9ucy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjbG9uZSBhcnJheSAtIGNhbGxiYWNrcyBjYW4gdW5zdWJzY3JpYmUgb3RoZXIgc3Vic2NyaXB0aW9uc1xuXHRcdFx0Ly8gcmVkdWNlcyBhIGxvdCBwZXJmb3JtYW5jZSBidXQgaXMgc2FmZVxuXHRcdFx0dmFyIGV4ZWN1dGVkU3Vic2NyaXB0aW9ucyA9IHN1YnNjcmlwdGlvbnMuc2xpY2UoKTtcblxuXHRcdFx0Zm9yRWFjaChleGVjdXRlZFN1YnNjcmlwdGlvbnMsIGZ1bmN0aW9uKHN1YnNjcmlwdGlvbklkLCBzdWJzY3JpcHRpb24pIHtcblx0XHRcdFx0aWYodHlwZW9mIHN1YnNjcmlwdGlvbiA9PT0gJ29iamVjdCcgJiYgZXhlY3V0ZWRTdWJzY3JpcHRpb25zLmhhc093blByb3BlcnR5KHN1YnNjcmlwdGlvbklkKSkge1xuXHRcdFx0XHRcdGlmKGFzeW5jKSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRzdWJzY3JpcHRpb24uY2FsbGJhY2suYXBwbHkoc3Vic2NyaXB0aW9uLmNvbnRleHQsIGFyZ3MpO1xuXHRcdFx0XHRcdFx0fSwgNCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN1YnNjcmlwdGlvbi5jYWxsYmFjay5hcHBseShzdWJzY3JpcHRpb24uY29udGV4dCwgYXJncyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBleGVjdXRlUHVibGlzaFdpbGRjYXJkKG5zT2JqZWN0LCBhcmdzKSB7XG5cdFx0XHR2YXIgbnNFbGVtZW50O1xuXHRcdFx0Zm9yKG5zRWxlbWVudCBpbiBuc09iamVjdCkge1xuXHRcdFx0XHRpZihuc0VsZW1lbnRbMF0gIT09ICdfJyAmJiBuc09iamVjdC5oYXNPd25Qcm9wZXJ0eShuc0VsZW1lbnQpKSB7XG5cdFx0XHRcdFx0ZXhlY3V0ZUNhbGxiYWNrKG5zT2JqZWN0W25zRWxlbWVudF0uX2V2ZW50cywgYXJncyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBwdWJsaXNoKG5zT2JqZWN0LCBhcmdzLCBwYXJ0cywgcGFyYW1zKSB7XG5cdFx0XHQvLyB3b3JrIG9uIGNvcHkgLSBub3Qgb24gcmVmZXJlbmNlXG5cdFx0XHRwYXJ0cyA9IHBhcnRzLnNsaWNlKCk7XG5cblx0XHRcdHZhciBpUGFydCA9IHBhcnRzLnNoaWZ0KCk7XG5cdFx0XHR2YXIgZGVwdGggPSBwYXJhbXMuZGVwdGg7XG5cdFx0XHR2YXIgYXN5bmMgPSBwYXJhbXMuYXN5bmM7XG5cdFx0XHR2YXIgcGFydHNMZW5ndGggPSBwYXJhbXMucGFydHNMZW5ndGg7XG5cdFx0XHR2YXIgcmVjdXJyZW50ID0gcGFyYW1zLnJlY3VycmVudDtcblx0XHRcdHZhciBwYXJ0TnVtYmVyID0gKHBhcnRzTGVuZ3RoIC0gcGFydHMubGVuZ3RoKTtcblxuXHRcdFx0Ly8gcGFydHMgaXMgZW1wdHlcblx0XHRcdGlmKCFpUGFydCkge1xuXHRcdFx0XHRleGVjdXRlQ2FsbGJhY2sobnNPYmplY3QuX2V2ZW50cywgYXJncywgYXN5bmMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBoYW5kbGUgc3Vic2NyaWJlIHdpbGRjYXJkXG5cdFx0XHRpZih0eXBlb2YgbnNPYmplY3RbJyonXSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cHVibGlzaChuc09iamVjdFsnKiddLCBhcmdzLCBwYXJ0cywgcGFyYW1zKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gaGFuZGxlIHB1Ymxpc2ggd2lsZGNhcmRcblx0XHRcdGlmKGlQYXJ0ID09PSAnKicpIHtcblx0XHRcdFx0ZXhlY3V0ZVB1Ymxpc2hXaWxkY2FyZChuc09iamVjdCwgYXJncywgYXN5bmMpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBubyBuYW1lc3BhY2UgPSBsZWF2ZSBwdWJsaXNoXG5cdFx0XHRpZih0eXBlb2YgbnNPYmplY3RbaVBhcnRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdGlmKHBhcmFtcy5sb2cpIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oJ1RoZXJlIGlzIG5vICcgKyBwYXJhbXMubnNTdHJpbmcgKyAnIHN1YnNjcmlwdGlvbicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bnNPYmplY3QgPSBuc09iamVjdFtpUGFydF07XG5cblx0XHRcdGlmKHJlY3VycmVudCA9PT0gdHJ1ZSAmJiB0eXBlb2YgZGVwdGggIT09ICdudW1iZXInKSB7IC8vZGVwdGggaXMgbm90IGRlZmluZWRcblx0XHRcdFx0ZXhlY3V0ZUNhbGxiYWNrKG5zT2JqZWN0Ll9ldmVudHMsIGFyZ3MsIGFzeW5jKTtcblx0XHRcdFx0aWYocGFydHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYocmVjdXJyZW50ID09PSB0cnVlICYmIHR5cGVvZiBkZXB0aCA9PT0gJ251bWJlcicgJiYgcGFydE51bWJlciA+PSAocGFydHNMZW5ndGggLSBkZXB0aCkpIHsgLy9pZiBkZXB0aCBpcyBkZWZpbmVkXG5cdFx0XHRcdGV4ZWN1dGVDYWxsYmFjayhuc09iamVjdC5fZXZlbnRzLCBhcmdzLCBhc3luYyk7XG5cdFx0XHR9XG5cblx0XHRcdHB1Ymxpc2gobnNPYmplY3QsIGFyZ3MsIHBhcnRzLCBwYXJhbXMpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGV4ZWN1dGVTdWJzY3JpYmVXaWxkY2FyZChuc09iamVjdCwgYXJncywgcGFyYW1zKSB7XG5cdFx0XHR2YXIgcGFydHMgPSBwYXJhbXMucGFydHM7XG5cdFx0XHR2YXIgYXN5bmMgPSBwYXJhbXMuYXN5bmM7XG5cdFx0XHR2YXIgbmV4dFBhcnQgPSBudWxsO1xuXG5cdFx0XHRpZihwYXJ0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0ZXhlY3V0ZUNhbGxiYWNrKG5zT2JqZWN0Ll9ldmVudHMsIGFyZ3MsIGFzeW5jKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5leHRQYXJ0ID0gcGFydHMuc2hpZnQoKTtcblxuXHRcdFx0XHRpZihuc09iamVjdFtuZXh0UGFydF0pIHtcblx0XHRcdFx0XHRleGVjdXRlU3Vic2NyaWJlV2lsZGNhcmQobnNPYmplY3RbbmV4dFBhcnRdLCBhcmdzLCB7XG5cdFx0XHRcdFx0XHRwYXJ0cyA6IHBhcnRzLFxuXHRcdFx0XHRcdFx0YXN5bmMgOiBhc3luYyxcblx0XHRcdFx0XHRcdG5zU3RyaW5nIDogcGFyYW1zLm5zU3RyaW5nXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBzdWJzY3JpYmUobnNTdHJpbmcsIGNhbGxiYWNrLCBwYXJhbXMpIHtcblx0XHRcdHZhciBwYXJ0cyA9IG5zU3RyaW5nLnNwbGl0KG9wdGlvbnMuc2VwYXJhdG9yKSxcblx0XHRcdFx0bnNPYmplY3QsIC8vTmFtZXNwYWNlIG9iamVjdCB0byB3aGljaCB3ZSBhdHRhY2ggZXZlbnRcblx0XHRcdFx0Y29udGV4dCA9IChwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcy5jb250ZXh0ICE9PSAndW5kZWZpbmVkJykgPyBwYXJhbXMuY29udGV4dCA6IG9wdGlvbnMuY29udGV4dCxcblx0XHRcdFx0ZXZlbnRPYmplY3QgPSBudWxsLFxuXHRcdFx0XHRpID0gMDtcblxuXHRcdFx0aWYoIWNvbnRleHQpIHtcblx0XHRcdFx0Y29udGV4dCA9IGNhbGxiYWNrO1xuXHRcdFx0fVxuXG5cdFx0XHQvL0l0ZXJhdGluZyB0aHJvdWdoIF9ldmVudE9iamVjdCB0byBmaW5kIHByb3BlciBuc09iamVjdFxuXHRcdFx0bnNPYmplY3QgPSBfZXZlbnRPYmplY3Q7XG5cdFx0XHRmb3IoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHRpZih0eXBlb2YgbnNPYmplY3RbcGFydHNbaV1dID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0bnNPYmplY3RbcGFydHNbaV1dID0ge307XG5cdFx0XHRcdFx0bnNPYmplY3RbcGFydHNbaV1dLl9ldmVudHMgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRuc09iamVjdCA9IG5zT2JqZWN0W3BhcnRzW2ldXTtcblx0XHRcdH1cblxuXHRcdFx0ZXZlbnRPYmplY3QgPSB7XG5cdFx0XHRcdGNhbGxiYWNrXHQ6IGNhbGxiYWNrLFxuXHRcdFx0XHRjb250ZXh0XHRcdDogY29udGV4dCAvLyBcInRoaXNcIiBwYXJhbWV0ZXIgaW4gZXhlY3V0ZWQgZnVuY3Rpb25cblx0XHRcdH07XG5cblx0XHRcdG5zT2JqZWN0Ll9ldmVudHMucHVzaChldmVudE9iamVjdCk7XG5cdFx0XHRyZXR1cm4geyBuYW1lc3BhY2UgOiBwYXJ0cy5qb2luKG9wdGlvbnMuc2VwYXJhdG9yKSxcblx0XHRcdFx0ZXZlbnQgOiBldmVudE9iamVjdCB9O1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHVuc3Vic2NyaWJlKHN1YnNjcmliZU9iamVjdCkge1xuXHRcdFx0aWYoc3Vic2NyaWJlT2JqZWN0ID09PSBudWxsIHx8IHR5cGVvZiBzdWJzY3JpYmVPYmplY3QgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0dmFyIG5zU3RyaW5nID0gc3Vic2NyaWJlT2JqZWN0Lm5hbWVzcGFjZSxcblx0XHRcdFx0ZXZlbnRPYmplY3QgPSBzdWJzY3JpYmVPYmplY3QuZXZlbnQsXG5cdFx0XHRcdHBhcnRzID0gbnNTdHJpbmcuc3BsaXQob3B0aW9ucy5zZXBhcmF0b3IpLFxuXHRcdFx0XHRuc09iamVjdCxcblx0XHRcdFx0aSA9IDA7XG5cblx0XHRcdC8vSXRlcmF0aW5nIHRocm91Z2ggX2V2ZW50T2JqZWN0IHRvIGZpbmQgcHJvcGVyIG5zT2JqZWN0XG5cdFx0XHRuc09iamVjdCA9IF9ldmVudE9iamVjdDtcblx0XHRcdGZvcihpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdGlmKHR5cGVvZiBuc09iamVjdFtwYXJ0c1tpXV0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRpZihvcHRpb25zLmxvZykge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignVGhlcmUgaXMgbm8gJyArIG5zU3RyaW5nICsgJyBzdWJzY3JpcHRpb24nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0bnNPYmplY3QgPSBuc09iamVjdFtwYXJ0c1tpXV07XG5cdFx0XHR9XG5cblx0XHRcdGZvckVhY2gobnNPYmplY3QuX2V2ZW50cywgZnVuY3Rpb24oZXZlbnRJZCkge1xuXHRcdFx0XHRpZihuc09iamVjdC5fZXZlbnRzW2V2ZW50SWRdID09PSBldmVudE9iamVjdCkge1xuXHRcdFx0XHRcdG5zT2JqZWN0Ll9ldmVudHMuc3BsaWNlKGV2ZW50SWQsIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBQdWJsaXNoIGV2ZW50XG5cdFx0XHQgKiBAcGFyYW0gbnNTdHJpbmcgc3RyaW5nIG5hbWVzcGFjZSBzdHJpbmcgc3BsaXRlZCBieSBkb3RzXG5cdFx0XHQgKiBAcGFyYW0gYXJncyBhcnJheSBvZiBhcmd1bWVudHMgZ2l2ZW4gdG8gY2FsbGJhY2tzXG5cdFx0XHQgKiBAcGFyYW0gcGFyYW1zIHBhcmFtYXRlcnMgcG9zc2libGU6XG5cdFx0XHQgKiAgICAgICAgQHBhcmFtIHJlY3VycmVudCBib29sIHNob3VsZCBleGVjdXRpb24gYmUgYnViYmxlZCB0aHJvdWdodCBuYW1lc3BhY2Vcblx0XHRcdCAqICAgICAgICBAcGFyYW0gZGVwdGggaW50ZWdlciBob3cgbWFueSBuYW1lc3BhY2VzIHNlcGFyYXRlZCBieSBkb3RzIHdpbGwgYmUgZXhlY3V0ZWRcblx0XHRcdCAqL1xuXHRcdFx0cHVibGlzaCA6IGZ1bmN0aW9uKG5zU3RyaW5nLCBhcmdzLCBwYXJhbXMpIHtcblx0XHRcdFx0dmFyIHBhcnRzID0gbnNTdHJpbmcuc3BsaXQob3B0aW9ucy5zZXBhcmF0b3IpLFxuXHRcdFx0XHRcdHJlY3VycmVudCA9ICh0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0JyAmJiBwYXJhbXMucmVjdXJyZW50KSA/IHBhcmFtcy5yZWN1cnJlbnQgOiBvcHRpb25zLnJlY3VycmVudCwgLy8gYnViYmxlcyBldmVudCB0aHJvdWdodCBuYW1lc3BhY2UgaWYgdHJ1ZVxuXHRcdFx0XHRcdGRlcHRoID0gKHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnICYmIHBhcmFtcy5kZXB0aCkgPyBwYXJhbXMuZGVwdGggOiBvcHRpb25zLmRlcHRoLFxuXHRcdFx0XHRcdGFzeW5jID0gKHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnICYmIHBhcmFtcy5hc3luYykgPyBwYXJhbXMuYXN5bmMgOiBvcHRpb25zLmFzeW5jLFxuXHRcdFx0XHRcdHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG5cdFx0XHRcdGlmKCFwYXJ0cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRpZihvcHRpb25zLmxvZykge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignV3JvbmcgbmFtZXNwYWNlIHByb3ZpZGVkICcgKyBuc1N0cmluZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHB1Ymxpc2goX2V2ZW50T2JqZWN0LCBhcmdzLCBwYXJ0cywge1xuXHRcdFx0XHRcdHJlY3VycmVudCA6IHJlY3VycmVudCxcblx0XHRcdFx0XHRkZXB0aCA6IGRlcHRoLFxuXHRcdFx0XHRcdGFzeW5jIDogYXN5bmMsXG5cdFx0XHRcdFx0cGFydHMgOiBwYXJ0cyxcblx0XHRcdFx0XHRuc1N0cmluZyA6IG5zU3RyaW5nLFxuXHRcdFx0XHRcdHBhcnRzTGVuZ3RoIDogcGFydHNMZW5ndGhcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTdWJzY3JpYmUgZXZlbnRcblx0XHRcdCAqIEBwYXJhbSBuc1N0cmluZyBzdHJpbmcgbmFtZXNwYWNlIHN0cmluZyBzcGxpdGVkIGJ5IGRvdHNcblx0XHRcdCAqIEBwYXJhbSBjYWxsYmFjayBmdW5jdGlvbiBmdW5jdGlvbiBleGVjdXRlZCBhZnRlciBwdWJsaXNoaW5nIGV2ZW50XG5cdFx0XHQgKiBAcGFyYW0gcGFyYW1zIGdpdmVuIHBhcmFtc1xuXHRcdFx0ICpcdFx0QHBhcmFtIGNvbnRleHQgb2JqZWN0L25vdGhpbmcgT3B0aW9uYWwgb2JqZWN0IHdoaWNoIHdpbGwgYmUgdXNlZCBhcyBcInRoaXNcIiBpbiBjYWxsYmFja1xuXHRcdFx0ICovXG5cdFx0XHRzdWJzY3JpYmUgOiBmdW5jdGlvbihuc1N0cmluZywgY2FsbGJhY2ssIHBhcmFtcykge1xuXHRcdFx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRcdFx0c3Vic2NyaXB0aW9ucyA9IFtdO1xuXG5cdFx0XHRcdC8vIGFycmF5IG9mIGNhbGxiYWNrcyAtIG11bHRpcGxlIHN1YnNjcmlwdGlvblxuXHRcdFx0XHRpZihpc0FycmF5KGNhbGxiYWNrKSkge1xuXHRcdFx0XHRcdGZvckVhY2goY2FsbGJhY2ssIGZ1bmN0aW9uKG51bWJlcikge1xuXHRcdFx0XHRcdFx0dmFyIG9uZUNhbGxiYWNrID0gY2FsbGJhY2tbbnVtYmVyXTtcblxuXHRcdFx0XHRcdFx0c3Vic2NyaXB0aW9ucyA9XHRzdWJzY3JpcHRpb25zLmNvbmNhdChzZWxmLnN1YnNjcmliZShuc1N0cmluZywgb25lQ2FsbGJhY2ssIHBhcmFtcykpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBhcnJheSBvZiBuYW1lc3BhY2VzIC0gbXVsdGlwbGUgc3Vic2NyaXB0aW9uXG5cdFx0XHRcdH0gZWxzZSBpZihpc0FycmF5KG5zU3RyaW5nKSkge1xuXHRcdFx0XHRcdGZvckVhY2gobnNTdHJpbmcsIGZ1bmN0aW9uKG51bWJlcikge1xuXHRcdFx0XHRcdFx0dmFyIG5hbWVzcGFjZSA9IG5zU3RyaW5nW251bWJlcl07XG5cblx0XHRcdFx0XHRcdHN1YnNjcmlwdGlvbnMgPVx0c3Vic2NyaXB0aW9ucy5jb25jYXQoc2VsZi5zdWJzY3JpYmUobmFtZXNwYWNlLCBjYWxsYmFjaywgcGFyYW1zKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHN1YnNjcmliZS5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBzdWJzY3JpcHRpb25zO1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogc3Vic2NyaWJlT25jZSBldmVudCAtIHN1YnNjcmliZSBvbmNlIHRvIHNvbWUgZXZlbnQsIHRoZW4gdW5zdWJzY3JpYmUgaW1tYWRpYXRlbHlcblx0XHRcdCAqIEBwYXJhbSBuc1N0cmluZyBzdHJpbmcgbmFtZXNwYWNlIHN0cmluZyBzcGxpdGVkIGJ5IGRvdHNcblx0XHRcdCAqIEBwYXJhbSBjYWxsYmFjayBmdW5jdGlvbiBmdW5jdGlvbiBleGVjdXRlZCBhZnRlciBwdWJsaXNoaW5nIGV2ZW50XG5cdFx0XHQgKiBAcGFyYW0gcGFyYW1zIGdpdmVuIHBhcmFtc1xuXHRcdFx0ICpcdFx0QHBhcmFtIGNvbnRleHQgb2JqZWN0L25vdGhpbmcgT3B0aW9uYWwgb2JqZWN0IHdoaWNoIHdpbGwgYmUgdXNlZCBhcyBcInRoaXNcIiBpbiBjYWxsYmFja1xuXHRcdFx0ICovXG5cdFx0XHRzdWJzY3JpYmVPbmNlIDogZnVuY3Rpb24obnNTdHJpbmcsIGNhbGxiYWNrLCBwYXJhbXMpIHtcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdFx0XHRcdHN1YnNjcmlwdGlvbiA9IG51bGw7XG5cblx0XHRcdFx0ZnVuY3Rpb24gc3Vic2NyaXB0aW9uQ2FsbGJhY2soKSB7XG5cdFx0XHRcdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xuXG5cdFx0XHRcdFx0Y2FsbGJhY2suYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcblx0XHRcdFx0XHRzZWxmLnVuc3Vic2NyaWJlKHN1YnNjcmlwdGlvbik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdWJzY3JpcHRpb24gPSBzZWxmLnN1YnNjcmliZShuc1N0cmluZywgc3Vic2NyaXB0aW9uQ2FsbGJhY2ssIHBhcmFtcyk7XG5cdFx0XHRcdHJldHVybiBzdWJzY3JpcHRpb247XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBVbnN1YnNjcmliZSBmcm9tIGdpdmVuIHN1YnNjcmlwdGlvblxuXHRcdFx0ICogQHBhcmFtIHN1YnNjcmliZU9iamVjdCBzdWJzY3JpcHRpb24gb2JqZWN0IGdpdmVuIG9uIHN1YnNjcmliZSAocmV0dXJuZWQgZnJvbSBzdWJzY3JpcHRpb24pXG5cdFx0XHQgKi9cblx0XHRcdHVuc3Vic2NyaWJlIDogZnVuY3Rpb24oc3Vic2NyaWJlT2JqZWN0KSB7XG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdFx0XHQvL2lmIHdlIGhhdmUgYXJyYXkgb2YgY2FsbGJhY2tzIC0gbXVsdGlwbGUgc3Vic2NyaXB0aW9uXG5cdFx0XHRcdGlmKGlzQXJyYXkoc3Vic2NyaWJlT2JqZWN0KSkge1xuXHRcdFx0XHRcdGZvckVhY2goc3Vic2NyaWJlT2JqZWN0LCBmdW5jdGlvbihudW1iZXIpIHtcblx0XHRcdFx0XHRcdHZhciBvbmVTdWJzY3JpYnRpb24gPSBzdWJzY3JpYmVPYmplY3RbbnVtYmVyXTtcblxuXHRcdFx0XHRcdFx0dW5zdWJzY3JpYmUuYXBwbHkoc2VsZiwgW29uZVN1YnNjcmlidGlvbl0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHVuc3Vic2NyaWJlLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIG5ld0luc3RhbmNlIC0gbWFrZXMgbmV3IGluc3RhbmNlIG9mIHB1YnN1YiBvYmplY3Qgd2l0aCBpdHMgb3duIGNvbmZpZ1xuXHRcdFx0ICogQHBhcmFtIHBhcmFtcyBpbnN0YW5jZSBjb25maWd1cmF0aW9uXG5cdFx0XHQgKiAgICAgICAgQHBhcmFtIHNlcGFyYXRvciBzZXBhcmF0b3IgKGRlZmF1bHQgaXMgXCIvXCIpXG5cdFx0XHQgKiAgICAgICAgQHBhcmFtIHJlY3VycmVudCBzaG91bGQgcHVibGlzaCBldmVudHMgYmUgYnViYmxlZCB0aHJvdWdoIG5hbWVzcGFjZVxuXHRcdFx0ICogICAgICAgIEBwYXJhbSBhc3luYyBzaG91bGQgcHVibGlzaCBldmVudHMgYmUgYXN5bmNocm9ub3VzIC0gbm90IGJsb2NraW5nIGZ1bmN0aW9uIGV4ZWN1dGlvblxuXHRcdFx0ICogICAgICAgIEBwYXJhbSBsb2cgY29uc29sZS53YXJuL2Vycm9yIGV2ZXJ5IHByb2JsZW1cblx0XHRcdCAqL1xuXHRcdFx0bmV3SW5zdGFuY2UgOiBmdW5jdGlvbihwYXJhbXMpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBQdWJzdWIocGFyYW1zKTtcblx0XHRcdH1cblx0XHR9OyAvL3JldHVybiBibG9ja1xuXHR9XG5cdHB1YnN1Ykluc3RhbmNlID0gbmV3IFB1YnN1YihwdWJzdWJDb25maWcpO1xuXG5cdC8vaWYgc2JkJ3MgdXNpbmcgcmVxdWlyZWpzIGxpYnJhcnkgdG8gbG9hZCBwdWJzdWIuanNcblx0aWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGRlZmluZShwdWJzdWJJbnN0YW5jZSk7XG5cdH1cblxuXHQvL25vZGUuanNcblx0aWYodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IHB1YnN1Ykluc3RhbmNlO1xuXHR9XG5cblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcblx0XHR3aW5kb3cucHVic3ViID0gcHVic3ViSW5zdGFuY2U7XG5cdFx0aWYod2luZG93ICE9PSBzY29wZSkge1xuXHRcdFx0c2NvcGUucHVic3ViID0gcHVic3ViSW5zdGFuY2U7XG5cdFx0fVxuXHR9XG59KSh0aGlzKTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHVic3ViIGZyb20gXCJwdWJzdWIuanNcIjtcbmltcG9ydCBOYXZDb250cm9sIGZyb20gXCIuL05hdkNvbnRyb2xcIjtcbmltcG9ydCBNZW1vcnkgZnJvbSBcIi4vTWVtb3J5XCI7XG5pbXBvcnQgTWFpbkNvbnRyb2wgZnJvbSBcIi4vTWFpbkNvbnRyb2xcIjtcblxuY29uc3QgRXZlbnRBZ2dyZWdhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgcHVic3ViLnN1YnNjcmliZShcIlByb2plY3RBZGRlZFwiLCAoZGF0YSkgPT4ge1xuICAgIE1lbW9yeS5hZGRUb1Byb2plY3RzKGRhdGEpO1xuICAgIE5hdkNvbnRyb2wudXBkYXRlTmF2U2VjdGlvbihNZW1vcnkpO1xuICB9KTtcblxuICBwdWJzdWIuc3Vic2NyaWJlKFwiUHJvamVjdERlbGV0ZWRcIiwgKGRhdGEpID0+IHtcbiAgICBNZW1vcnkucmVtb3ZlUHJvamVjdElkKGRhdGEpO1xuICAgIE5hdkNvbnRyb2wudXBkYXRlTmF2U2VjdGlvbihNZW1vcnkpO1xuICB9KTtcblxuICBwdWJzdWIuc3Vic2NyaWJlKFwiVG9nZ2xlQm9va21hcmtlZFwiLCAoaWQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gTWVtb3J5LmdldFByb2plY3RJZChpZCk7XG4gICAgaWYgKHByb2plY3QuaXNCb29rbWFya2VkKSB7XG4gICAgICBNZW1vcnkucmVtb3ZlRnJvbUJvb2ttYXJrZWQoaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBNZW1vcnkuYWRkVG9Cb29rbWFya2VkKGlkKTtcbiAgICB9XG4gICAgTmF2Q29udHJvbC51cGRhdGVOYXZTZWN0aW9uKE1lbW9yeSk7XG4gIH0pO1xuXG4gIHB1YnN1Yi5zdWJzY3JpYmUoXCJTZXRBY3RpdmVQcm9qZWN0XCIsIChpZCkgPT5cbiAgICBNYWluQ29udHJvbC51cGRhdGVNYWluKE1lbW9yeS5nZXRQcm9qZWN0SWQoaWQpKVxuICApO1xuXG4gIHB1YnN1Yi5zdWJzY3JpYmUoXCJBZGRQcm9qZWN0RGVzY1wiLCAoaWQsIGRlc2MpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gTWVtb3J5LmdldFByb2plY3RJZChpZCk7XG4gICAgcHJvamVjdC5zZXREZXNjcmlwdGlvbihkZXNjKTtcbiAgICBNYWluQ29udHJvbC51cGRhdGVNYWluKHByb2plY3QpO1xuICB9KTtcblxuICBwdWJzdWIuc3Vic2NyaWJlKFwiVG9nZ2xlSXNEb25lVG9kb1wiLCAodG9kbykgPT4ge1xuICAgIGNvbnN0IG9iaiA9IE1lbW9yeS5nZXRQcm9qZWN0SWQodG9kby5wcm9qZWN0SWQpLmdldFRvZG9JZCh0b2RvLmlkKTtcbiAgICBvYmoudG9nZ2xlRG9uZSgpO1xuICB9KTtcblxuICBwdWJzdWIuc3Vic2NyaWJlKFwiQ2hhbmdlVG9kb0Rlc2NyaXB0aW9uXCIsIChpZCwgZGVzYykgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHBhcnNlSW50KFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3RJZF1cIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0SWRcIilcbiAgICApO1xuICAgIGNvbnN0IHRvZG8gPSBNZW1vcnkuZ2V0VG9kb0lkKHByb2plY3RJZCwgaWQpO1xuICAgIHRvZG8uc2V0RGVzY3JpcHRpb24oZGVzYyk7XG4gICAgTWFpbkNvbnRyb2wudXBkYXRlTWFpbihNZW1vcnkuZ2V0UHJvamVjdElkKHByb2plY3RJZCkpO1xuICB9KTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50QWdncmVnYXRvcjtcbiIsImNvbnN0IEljb24gPSAoc3JjKSA9PiB7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuICBpY29uLnNyYyA9IHNyYztcblxuICByZXR1cm4gaWNvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgcHVic3ViIGZyb20gXCJwdWJzdWIuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RIZWFkZXIsIGNyZWF0ZVRvZG9zIH0gZnJvbSBcIi4vTWFpblZpZXdcIjtcblxuY29uc3QgTWFpbkNvbnRyb2wgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCB1cGRhdGVNYWluID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RIZWFkZXIocHJvamVjdCkpO1xuICAgIGlmIChwcm9qZWN0LnRvZG9MaXN0KSB7XG4gICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9zKHByb2plY3QpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2F2ZURlc2NyaXB0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ1tuYW1lPVwicHJvamVjdC1kZXNjcmlwdGlvblwiXSdcbiAgICApLnZhbHVlO1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwiQWRkUHJvamVjdERlc2NcIiwgW3BhcnNlSW50KHByb2plY3RJZCksIGRlc2NyaXB0aW9uXSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGVNYWluLFxuICAgIHNhdmVEZXNjcmlwdGlvbixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Db250cm9sO1xuIiwiaW1wb3J0IE1haW5Db250cm9sIGZyb20gXCIuL01haW5Db250cm9sXCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4vVG9kb1ZpZXdcIjtcbmltcG9ydCB7IGRpc3BsYXlEZWxldGUgfSBmcm9tIFwiLi9VdGlsc1wiO1xuXG5jb25zdCBjcmVhdGVUaXRsZSA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgdGl0bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocHJvamVjdC50aXRsZSkpO1xuICByZXR1cm4gdGl0bGU7XG59O1xuXG5jb25zdCBjcmVhdGVEZXNjID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1ncm91cC1kZXNjcmlwdGlvblwiKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBjb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvbiA/IHByb2plY3QuZGVzY3JpcHRpb24gOiBcIlwiO1xuICBjb25zdCBwcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcHJvbXB0LmNsYXNzTGlzdC5hZGQoXCJwcm9tcHRcIik7XG4gIGlmIChjb250ZW50KSB7XG4gICAgcHJvbXB0LnRleHRDb250ZW50ID0gXCJFZGl0IGRlc2NyaXB0aW9uXCI7XG4gICAgcHJvbXB0LmNsYXNzTGlzdC5hZGQoXCJmbG9hdC1yaWdodFwiKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9tcHQudGV4dENvbnRlbnQgPSBcIkFkZCBhIHByb2plY3QgZGVzY3JpcHRpb24uLi5cIjtcbiAgfVxuXG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSk7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHByb21wdCk7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBwcm9qZWN0LmlkKTtcblxuICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdGV4dGFyZWEubmFtZSA9IFwicHJvamVjdC1kZXNjcmlwdGlvblwiO1xuICB0ZXh0YXJlYS5wbGFjZWhvbGRlciA9IFwiRW50ZXIgeW91ciBwcm9qZWN0IGRlc2NyaXB0aW9uIGhlcmUuXCI7XG4gIHRleHRhcmVhLnZhbHVlID0gcHJvamVjdC5kZXNjcmlwdGlvbiA/IHByb2plY3QuZGVzY3JpcHRpb24gOiBcIlwiO1xuICB0ZXh0YXJlYS5yZXF1aXJlZCA9IHRydWU7XG4gIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1kZXNjcmlwdGlvblwiKTtcblxuICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2F2ZUJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNhdmVcIikpO1xuICBzYXZlQnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBzYXZlQnRuLmNsYXNzTGlzdC5hZGQoXCJzYXZlLWRlc2NyaXB0aW9uLWJ0blwiKTtcblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDYW5jZWxcIikpO1xuICBjYW5jZWxCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWRlc2NyaXB0aW9uLWJ0blwiKTtcblxuICBwcm9tcHQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgZGlzcGxheURlbGV0ZS5iaW5kKHdpbmRvdywgaW5wdXQsIGRlc2NyaXB0aW9uKVxuICApO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgZGlzcGxheURlbGV0ZS5iaW5kKHdpbmRvdywgZGVzY3JpcHRpb24sIGlucHV0KVxuICApO1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIE1haW5Db250cm9sLnNhdmVEZXNjcmlwdGlvbik7XG5cbiAgaW5wdXQuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuICBpbnB1dC5hcHBlbmRDaGlsZChzYXZlQnRuKTtcbiAgaW5wdXQuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgZGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RIZWFkZXIgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyXCIpO1xuICBkaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0SWRcIiwgcHJvamVjdC5pZCk7XG5cbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVUaXRsZShwcm9qZWN0KTtcbiAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZURlc2MocHJvamVjdCk7XG4gIGRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvZG9zID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvTGlzdC5pZCA9IFwidG9kby1saXN0XCI7XG4gIGZvciAoY29uc3QgdG9kbyBvZiBwcm9qZWN0LnRvZG9MaXN0KSB7XG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kbyh0b2RvKSk7XG4gIH1cbiAgcmV0dXJuIHRvZG9MaXN0O1xufTtcblxuY29uc3QgY3JlYXRlTWFpbiA9IChtZW1vcnkpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uaWQgPSBcIm1haW5cIjtcblxuICBjb25zdCBiYXNlUHJvamVjdCA9IG1lbW9yeS5nZXRQcm9qZWN0SWQoMSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEhlYWRlcihiYXNlUHJvamVjdCkpO1xuICBpZiAoYmFzZVByb2plY3QudG9kb0xpc3QpIHtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9zKGJhc2VQcm9qZWN0KSk7XG4gIH1cbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgeyBjcmVhdGVNYWluLCBjcmVhdGVQcm9qZWN0SGVhZGVyLCBjcmVhdGVUb2RvcyB9O1xuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xuaW1wb3J0IHsgcmVtb3ZlQnlJZCB9IGZyb20gXCIuL1V0aWxzXCI7XG5cbmNvbnN0IE1lbW9yeSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByb2plY3RzID0gW107XG4gIGNvbnN0IGJvb2ttYXJrZWRQcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IGFkZFRvUHJvamVjdHMgPSAocHJvamVjdCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGlmIChwcm9qZWN0LnR5cGUgIT09IFwiUHJvamVjdFwiKSBwcm9qZWN0ID0gUHJvamVjdChwcm9qZWN0KTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRvQm9va21hcmtlZCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcbiAgICBjb25zdCB0YXJnZXQgPSBwcm9qZWN0c1tpbmRleF07XG4gICAgdGFyZ2V0LnNldEJvb2ttYXJrZWQodHJ1ZSk7XG4gICAgYm9va21hcmtlZFByb2plY3RzLnB1c2godGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVGcm9tQm9va21hcmtlZCA9IChwcm9qZWN0SWQpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGJvb2ttYXJrZWRQcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkXG4gICAgKTtcbiAgICBjb25zdCB0YXJnZXQgPSBib29rbWFya2VkUHJvamVjdHNbaW5kZXhdO1xuICAgIHRhcmdldC5zZXRCb29rbWFya2VkKGZhbHNlKTtcbiAgICBib29rbWFya2VkUHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0SWQgPSAocHJvamVjdElkKSA9PiB7XG4gICAgcmVtb3ZlQnlJZChwcm9qZWN0cywgcHJvamVjdElkKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0SWQgPSAocHJvamVjdElkKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG5cbiAgICByZXR1cm4gcHJvamVjdHNbaW5kZXhdO1xuICB9O1xuXG4gIGNvbnN0IGdldFRvZG9JZCA9IChwcm9qZWN0SWQsIHRvZG9JZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0SWQocHJvamVjdElkKTtcbiAgICByZXR1cm4gcHJvamVjdC5nZXRUb2RvSWQodG9kb0lkKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHByb2plY3RzLFxuICAgIGJvb2ttYXJrZWRQcm9qZWN0cyxcbiAgICBhZGRUb1Byb2plY3RzLFxuICAgIHJlbW92ZVByb2plY3RJZCxcbiAgICBhZGRUb0Jvb2ttYXJrZWQsXG4gICAgcmVtb3ZlRnJvbUJvb2ttYXJrZWQsXG4gICAgZ2V0UHJvamVjdElkLFxuICAgIGdldFRvZG9JZCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbW9yeTtcbiIsImltcG9ydCBwdWJzdWIgZnJvbSBcInB1YnN1Yi5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdE5vZGUgfSBmcm9tIFwiLi9OYXZWaWV3XCI7XG5cbmNvbnN0IE5hdkNvbnRyb2wgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgY3VycmVudEFjdGl2ZSA9IDE7XG5cbiAgY29uc3QgdXBkYXRlQWN0aXZlTmF2ID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjdXJyZW50QWN0aXZlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgICBjb25zdCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXYgLmFjdGl2ZVwiKTtcbiAgICAgIHByZXYuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIHByZXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZUFjdGl2ZU5hdik7XG4gICAgfVxuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI25hdiBbZGF0YS1pZD1cIiR7Y3VycmVudEFjdGl2ZX1cIl1gKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBuYXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZUFjdGl2ZU5hdik7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJTZXRBY3RpdmVQcm9qZWN0XCIsIFtwYXJzZUludChjdXJyZW50QWN0aXZlKV0pO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUFkZFByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1mb3JtXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImRpc3BsYXktbm9uZVwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJkaXNwbGF5LW5vbmVcIik7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQm9va21hcmtlZCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHRhcmdldFByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG5cbiAgICBwdWJzdWIucHVibGlzaChcIlRvZ2dsZUJvb2ttYXJrZWRcIiwgW3BhcnNlSW50KHRhcmdldFByb2plY3RJZCldKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVOYXYgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZcIikuY2xhc3NMaXN0LnRvZ2dsZShcImRpc3BsYXktbm9uZVwiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cInByb2plY3QtdGl0bGVcIl1gKTtcbiAgICBwdWJzdWIucHVibGlzaChcIlByb2plY3RBZGRlZFwiLCBbdGl0bGUudmFsdWVdKTtcbiAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgdG9nZ2xlQWRkUHJvamVjdEZvcm0oKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVOYXZTZWN0aW9uID0gKG1lbW9yeSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHM+dWxcIik7XG4gICAgY29uc3QgYm9va21hcmtlZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWJvb2ttYXJrZWRcIik7XG5cbiAgICBwcm9qZWN0c0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBib29rbWFya2VkTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIG1lbW9yeS5wcm9qZWN0cykge1xuICAgICAgY29uc3QgcHJvamVjdE5vZGUgPSBjcmVhdGVQcm9qZWN0Tm9kZShwcm9qZWN0KTtcbiAgICAgIGlmIChwcm9qZWN0LmlzQm9va21hcmtlZCkge1xuICAgICAgICBib29rbWFya2VkTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0Tm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdE5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2ZU5hdigpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHRhcmdldFByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG5cbiAgICAvLyBJZiBkZWxldGUgY3VycmVudCBhY3RpdmUgbmF2LCBkZWZhdWx0IGJhY2sgdG8gaG9tZSBuYXZcbiAgICBpZiAoY3VycmVudEFjdGl2ZSA9PT0gdGFyZ2V0UHJvamVjdElkKSBjdXJyZW50QWN0aXZlID0gMTtcbiAgICBwdWJzdWIucHVibGlzaChcIlByb2plY3REZWxldGVkXCIsIFtwYXJzZUludCh0YXJnZXRQcm9qZWN0SWQpXSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgY3VycmVudEFjdGl2ZSgpIHtcbiAgICAgIHJldHVybiBjdXJyZW50QWN0aXZlO1xuICAgIH0sXG4gICAgdXBkYXRlQWN0aXZlTmF2LFxuICAgIHRvZ2dsZUFkZFByb2plY3RGb3JtLFxuICAgIHRvZ2dsZU5hdixcbiAgICB0b2dnbGVCb29rbWFya2VkLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICB1cGRhdGVOYXZTZWN0aW9uLFxuICAgIGhhbmRsZURlbGV0ZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkNvbnRyb2w7XG4iLCJpbXBvcnQgTmF2Q29udHJvbCBmcm9tIFwiLi9OYXZDb250cm9sXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9JY29uXCI7XG5pbXBvcnQgc3Rhckljb24gZnJvbSBcIi4vSWNvbnMvc3Rhci5zdmdcIjtcbmltcG9ydCBzdGFydE91dGxpbmVJY29uIGZyb20gXCIuL0ljb25zL3N0YXItb3V0bGluZS5zdmdcIjtcblxuY29uc3QgY3JlYXRlUHJvamVjdE5vZGUgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBpdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgcHJvamVjdC5pZCk7XG5cbiAgaWYgKHByb2plY3QuaWQgIT09IDEpIHtcbiAgICBjb25zdCBpY29uID0gcHJvamVjdC5pc0Jvb2ttYXJrZWQgPyBJY29uKHN0YXJJY29uKSA6IEljb24oc3RhcnRPdXRsaW5lSWNvbik7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTmF2Q29udHJvbC50b2dnbGVCb29rbWFya2VkKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGljb24pO1xuICB9XG5cbiAgaXRlbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwcm9qZWN0LnRpdGxlKSk7XG5cbiAgaWYgKHByb2plY3QuaWQgIT09IDEpIHtcbiAgICBjb25zdCBkbHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRsdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTtcbiAgICBkbHRCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICBkbHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE5hdkNvbnRyb2wuaGFuZGxlRGVsZXRlKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGRsdEJ0bik7XG4gIH1cblxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBOYXZDb250cm9sLnVwZGF0ZUFjdGl2ZU5hdik7XG4gIHJldHVybiBpdGVtO1xufTtcblxuY29uc3QgY3JlYXRlQm9va21hcmtlZFNlY3Rpb24gPSAobWVtb3J5KSA9PiB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB1bC5pZCA9IFwicHJvamVjdHMtYm9va21hcmtlZFwiO1xuXG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiBtZW1vcnkuYm9va21hcmtlZFByb2plY3RzKSB7XG4gICAgLy8gT25seSBzaG93cyBib29rbWFya2VkIHByb2plY3RzIGluIHRoZSB0b3Agb2YgbmF2IHNlY3Rpb25cbiAgICBjb25zdCBpdGVtID0gY3JlYXRlUHJvamVjdE5vZGUocHJvamVjdCk7XG5cbiAgICB1bC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfVxuXG4gIHJldHVybiB1bDtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RTZWN0aW9uID0gKG1lbW9yeSkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuaWQgPSBcInByb2plY3RzXCI7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgbWVtb3J5LnByb2plY3RzKSB7XG4gICAgLy8gc2tpcCBEZWZhdWx0IChIb21lKSBQcm9qZWN0XG4gICAgaWYgKHByb2plY3QuaXNCb29rbWFya2VkKSBjb250aW51ZTtcblxuICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVQcm9qZWN0Tm9kZShwcm9qZWN0KTtcblxuICAgIHVsLmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9XG4gIGRpdi5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZUFkZFByb2plY3RCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5pZCA9IFwiYWRkLXByb2plY3RcIjtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWJvbGRcIik7XG4gIGRpdi50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBOYXZDb250cm9sLnRvZ2dsZUFkZFByb2plY3RGb3JtKTtcblxuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5pZCA9IFwiYWRkLXByb2plY3QtZm9ybVwiO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW5vbmVcIik7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBpbnB1dC5uYW1lID0gXCJwcm9qZWN0LXRpdGxlXCI7XG4gIGlucHV0LmlkID0gXCJwcm9qZWN0LXRpdGxlXCI7XG4gIGlucHV0LnBsYWNlaG9sZGVyID0gXCJOZXcgUHJvamVjdCBUaXRsZVwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNhbmNlbEJ0bi5pZCA9IFwiY2FuY2VsLXByb2plY3QtYnRuXCI7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTmF2Q29udHJvbC50b2dnbGVBZGRQcm9qZWN0Rm9ybSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRCdG4udHlwZSA9IFwic3VibWl0XCI7XG4gIGFkZEJ0bi5pZCA9IFwiYWRkLXByb2plY3QtYnRuXCI7XG4gIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgTmF2Q29udHJvbC5oYW5kbGVTdWJtaXQpO1xuICByZXR1cm4gZm9ybTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5hdiA9IChtZW1vcnkpID0+IHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2LmlkID0gXCJuYXZcIjtcblxuICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlQm9va21hcmtlZFNlY3Rpb24obWVtb3J5KSk7XG4gIG5hdi5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0U2VjdGlvbihtZW1vcnkpKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZUFkZFByb2plY3RCdG4oKSk7XG4gIG5hdi5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0Rm9ybSgpKTtcbiAgcmV0dXJuIG5hdjtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU5hdiwgY3JlYXRlUHJvamVjdE5vZGUgfTtcbiIsImltcG9ydCB7IGNyZWF0ZU1haW4gfSBmcm9tIFwiLi9NYWluVmlld1wiO1xuaW1wb3J0IHsgY3JlYXRlTmF2IH0gZnJvbSBcIi4vTmF2Vmlld1wiO1xuaW1wb3J0IE5hdkNvbnRyb2wgZnJvbSBcIi4vTmF2Q29udHJvbFwiO1xuaW1wb3J0IE1lbW9yeSBmcm9tIFwiLi9NZW1vcnlcIjtcblxuY29uc3QgUGFnZVZpZXcgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBwYWdlTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnZS1tYWluXCIpO1xuICBjb25zdCBuYXZEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2LWRyb3Bkb3duXCIpO1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgbmF2RHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIE5hdkNvbnRyb2wudG9nZ2xlTmF2KTtcbiAgICBwYWdlTWFpbi5hcHBlbmRDaGlsZChjcmVhdGVOYXYoTWVtb3J5KSk7XG4gICAgcGFnZU1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbihNZW1vcnkpKTtcbiAgICBOYXZDb250cm9sLnVwZGF0ZUFjdGl2ZU5hdigpO1xuXG4gICAgLy8gQWx3YXlzIG1ha2VzIHRoZSBuYXYgYXBwZWFyIGlmIHdpbmRvdyB3aWR0aCBpcyA+PSA2NTBweFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA2NTApIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZcIikuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXktbm9uZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGluaXQsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlVmlldztcbiIsImltcG9ydCB7IHJlbW92ZUJ5SWQgfSBmcm9tIFwiLi9VdGlsc1wiO1xuXG5jb25zdCBQcm9qZWN0ID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICBjb25zdCBpZCA9IFByb2plY3QuZ2V0SWQoKTtcbiAgY29uc3QgdHlwZSA9IFwiUHJvamVjdFwiO1xuICBjb25zdCB0b2RvTGlzdCA9IFtdO1xuICBsZXQgdGl0bGUgPSBwcm9qZWN0VGl0bGU7XG4gIGxldCBpc0Jvb2ttYXJrZWQgPSBmYWxzZTtcbiAgbGV0IGRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHRvZG8ucHJvamVjdElkID0gaWQ7XG4gICAgdG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVUb2RvSWQgPSAodG9kb0lkKSA9PiB7XG4gICAgcmVtb3ZlQnlJZCh0b2RvTGlzdCwgdG9kb0lkKTtcbiAgfTtcblxuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gIH07XG5cbiAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAoZGVzYykgPT4ge1xuICAgIGRlc2NyaXB0aW9uID0gZGVzYztcbiAgfTtcblxuICBjb25zdCBzZXRCb29rbWFya2VkID0gKGJvb2wpID0+IHtcbiAgICBpc0Jvb2ttYXJrZWQgPSBib29sO1xuICB9O1xuXG4gIGNvbnN0IGdldFRvZG9JZCA9ICh0b2RvSWQpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRvZG9MaXN0LmZpbmRJbmRleCgodG9kbykgPT4gdG9kby5pZCA9PT0gdG9kb0lkKTtcblxuICAgIHJldHVybiB0b2RvTGlzdFtpbmRleF07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICB0eXBlLFxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9LFxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICB9LFxuICAgIGdldCB0b2RvTGlzdCgpIHtcbiAgICAgIHJldHVybiB0b2RvTGlzdDtcbiAgICB9LFxuICAgIGdldCBpc0Jvb2ttYXJrZWQoKSB7XG4gICAgICByZXR1cm4gaXNCb29rbWFya2VkO1xuICAgIH0sXG4gICAgYWRkVG9kbyxcbiAgICByZW1vdmVUb2RvSWQsXG4gICAgc2V0VGl0bGUsXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgc2V0Qm9va21hcmtlZCxcbiAgICBnZXRUb2RvSWQsXG4gIH07XG59O1xuXG4vLyBTZXQgUHJvamVjdCBzdGF0aWMgY291bnRlciBmb3IgaWRcblByb2plY3QuY291bnRlciA9IDE7XG5Qcm9qZWN0LmdldElkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjdXJyZW50ID0gUHJvamVjdC5jb3VudGVyO1xuICBQcm9qZWN0LmNvdW50ZXIgKz0gMTtcbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiY29uc3QgVG9kbyA9IGZ1bmN0aW9uIChfdGl0bGUpIHtcbiAgY29uc3QgdHlwZSA9IFwiVG9kb1wiO1xuICBjb25zdCBpZCA9IFRvZG8uZ2V0SWQoKTtcbiAgbGV0IHRpdGxlID0gX3RpdGxlO1xuICBsZXQgZGVzY3JpcHRpb247XG4gIGxldCBkdWVEYXRlO1xuICBsZXQgcHJpb3JpdHk7XG4gIGxldCBpc0RvbmUgPSBmYWxzZTtcblxuICBjb25zdCB0b2dnbGVEb25lID0gKCkgPT4ge1xuICAgIGlzRG9uZSA9ICFpc0RvbmU7XG4gIH07XG5cbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICB9O1xuXG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKGRlc2MpID0+IHtcbiAgICBkZXNjcmlwdGlvbiA9IGRlc2M7XG4gIH07XG5cbiAgY29uc3Qgc2V0RHVlRGF0ZSA9IChkYXRlKSA9PiB7XG4gICAgZHVlRGF0ZSA9IGRhdGU7XG4gIH07XG5cbiAgY29uc3Qgc2V0UHJpb3JpdHkgPSAocHJpbykgPT4ge1xuICAgIHByaW9yaXR5ID0gcHJpbztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9LFxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICB9LFxuICAgIGdldCBkdWVEYXRlKCkge1xuICAgICAgcmV0dXJuIGR1ZURhdGU7XG4gICAgfSxcbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgfSxcbiAgICBnZXQgaXNEb25lKCkge1xuICAgICAgcmV0dXJuIGlzRG9uZTtcbiAgICB9LFxuICAgIGlkLFxuICAgIHR5cGUsXG4gICAgdG9nZ2xlRG9uZSxcbiAgICBzZXRUaXRsZSxcbiAgICBzZXREZXNjcmlwdGlvbixcbiAgICBzZXREdWVEYXRlLFxuICAgIHNldFByaW9yaXR5LFxuICB9O1xufTtcblxuLy8gSW5pdGlhbGl6ZSBzdGF0aWMgY291bnQgZm9yIFRvZG9cblRvZG8uY291bnQgPSAxO1xuVG9kby5nZXRJZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY3VycmVudCA9IFRvZG8uY291bnQ7XG4gIFRvZG8uY291bnQgKz0gMTtcbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIiwiaW1wb3J0IHB1YnN1YiBmcm9tIFwicHVic3ViLmpzXCI7XG5cbmNvbnN0IFRvZG9Db250cm9sID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdG9nZ2xlRG9uZSA9ICh0b2RvKSA9PiB7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJUb2dnbGVJc0RvbmVUb2RvXCIsIFt0b2RvXSk7XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0RGVzY3JpcHRpb24gPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRvZG9JZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuICAgIGNvbnN0IGRlc2NWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtaWQ9XCIke3RvZG9JZH1cIl0+W25hbWU9XCJ0b2RvLWRlc2NyaXB0aW9uXCJdYFxuICAgICkudmFsdWU7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJDaGFuZ2VUb2RvRGVzY3JpcHRpb25cIiwgW3BhcnNlSW50KHRvZG9JZCksIGRlc2NWYWx1ZV0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdG9nZ2xlRG9uZSxcbiAgICBzdWJtaXREZXNjcmlwdGlvbixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9Db250cm9sO1xuIiwiaW1wb3J0IFRvZG9Db250cm9sIGZyb20gXCIuL1RvZG9Db250cm9sXCI7XG5pbXBvcnQgeyBkaXNwbGF5RGVsZXRlIH0gZnJvbSBcIi4vVXRpbHNcIjtcblxuY29uc3QgY3JlYXRlVGl0bGUgPSAodG9kbykgPT4ge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgcmV0dXJuIHRpdGxlO1xufTtcblxuY29uc3QgY3JlYXRlRHVlRGF0ZSA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kdWVEYXRlXCIpO1xuICBpZiAodG9kby5kdWVEYXRlKSBkdWVEYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuICBlbHNlIGR1ZURhdGUudGV4dENvbnRlbnQgPSBcIkFkZCBhIGR1ZSBkYXRlXCI7XG5cbiAgcmV0dXJuIGR1ZURhdGU7XG59O1xuXG5jb25zdCBjcmVhdGVDaGVja2JveCA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IGlzRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaXNEb25lLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNoZWNrYm94XCIpO1xuICBpc0RvbmUudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgaXNEb25lLmNoZWNrZWQgPSB0b2RvLmlzRG9uZTtcbiAgaXNEb25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBUb2RvQ29udHJvbC50b2dnbGVEb25lLmJpbmQod2luZG93LCB0b2RvKSk7XG5cbiAgcmV0dXJuIGlzRG9uZTtcbn07XG5cbmNvbnN0IGNyZWF0ZURlc2NyaXB0aW9uID0gKHRvZG8pID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBwcm9tcHQ7XG5cbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW5vbmVcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXNjXCIpO1xuICBpZiAodG9kby5kZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdG9kb0Rlc2MudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIGRlc2MuYXBwZW5kQ2hpbGQodG9kb0Rlc2MpO1xuXG4gICAgcHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJvbXB0LmNsYXNzTGlzdC5hZGQoXCJmbG9hdC1yaWdodFwiKTtcbiAgICBwcm9tcHQudGV4dENvbnRlbnQgPSBcIkVkaXQgZGVzY3JpcHRpb24gXCI7XG4gIH0gZWxzZSB7XG4gICAgcHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvbXB0LnRleHRDb250ZW50ID0gXCJBZGQgZGVzY3JpcHRpb25cIjtcbiAgfVxuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW5vbmVcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdG9kby5pZCk7XG5cbiAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRleHRhcmVhLm5hbWUgPSBcInRvZG8tZGVzY3JpcHRpb25cIjtcbiAgdGV4dGFyZWEucGxhY2Vob2xkZXIgPSBcIkVudGVyIHlvdXIgdG9kbyBkZXNjcmlwdGlvbiBoZXJlLlwiO1xuICB0ZXh0YXJlYS52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb24gPyB0b2RvLmRlc2NyaXB0aW9uIDogXCJcIjtcbiAgdGV4dGFyZWEucmVxdWlyZWQgPSB0cnVlO1xuICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtdG9kby1kZXNjcmlwdGlvblwiKTtcblxuICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2F2ZUJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNhdmVcIikpO1xuICBzYXZlQnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBzYXZlQnRuLmNsYXNzTGlzdC5hZGQoXCJzYXZlLWRlc2NyaXB0aW9uLWJ0blwiKTtcblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDYW5jZWxcIikpO1xuICBjYW5jZWxCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWRlc2NyaXB0aW9uLWJ0blwiKTtcblxuICBwcm9tcHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlEZWxldGUuYmluZCh3aW5kb3csIGlucHV0LCBkZXNjKSk7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheURlbGV0ZS5iaW5kKHdpbmRvdywgZGVzYywgaW5wdXQpKTtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBUb2RvQ29udHJvbC5zdWJtaXREZXNjcmlwdGlvbik7XG5cbiAgaW5wdXQuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuICBpbnB1dC5hcHBlbmRDaGlsZChzYXZlQnRuKTtcbiAgaW5wdXQuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICBwcm9tcHQuY2xhc3NMaXN0LmFkZChcInRleHQtZmFkZVwiKTtcbiAgZGVzYy5hcHBlbmRDaGlsZChwcm9tcHQpO1xuICBkZXNjLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgZGl2LmFwcGVuZENoaWxkKGRlc2MpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgY3JlYXRlVG9kbyA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBub2RlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gY3JlYXRlVGl0bGUodG9kbyk7XG4gIGNvbnN0IGR1ZURhdGUgPSBjcmVhdGVEdWVEYXRlKHRvZG8pO1xuICBjb25zdCBpc0RvbmUgPSBjcmVhdGVDaGVja2JveCh0b2RvKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVEZXNjcmlwdGlvbih0b2RvKTtcbiAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZShcImRpc3BsYXktbm9uZVwiKVxuICApO1xuXG4gIG5vZGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBub2RlLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICBub2RlLmFwcGVuZENoaWxkKGlzRG9uZSk7XG4gIG5vZGUuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICByZXR1cm4gbm9kZTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBjcmVhdGVUb2RvIH07XG4iLCJjb25zdCByZW1vdmVCeUlkID0gKGxpc3QsIG9iamVjdElkKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gbGlzdC5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09PSBvYmplY3RJZCk7XG4gIHJldHVybiBsaXN0LnNwbGljZShpbmRleCwgMSk7XG59O1xuXG5jb25zdCBkaXNwbGF5RGVsZXRlID0gKGRpc3BsYXlOb2RlLCBkZWxldGVOb2RlKSA9PiB7XG4gIGRpc3BsYXlOb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5LW5vbmVcIik7XG4gIGRlbGV0ZU5vZGUuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKTtcbn07XG5cbmV4cG9ydCB7IHJlbW92ZUJ5SWQsIGRpc3BsYXlEZWxldGUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL0V2ZW50QWdncmVnYXRvclwiO1xuaW1wb3J0IE1lbW9yeSBmcm9tIFwiLi9NZW1vcnlcIjtcbmltcG9ydCBQYWdlVmlldyBmcm9tIFwiLi9QYWdlVmlld1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vVG9kb1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgaG9tZVByb2plY3QgPSBQcm9qZWN0KFwiSG9tZVwiKTtcbmNvbnN0IGZpcnN0VG9kbyA9IFRvZG8oXCJJJ20gYSB0b2RvIGxvbFwiKTtcbmZpcnN0VG9kby5zZXREZXNjcmlwdGlvbihcIkhlbGxvLCBJJ20gYSBkZXNjcmlwdGlvblwiKTtcbmhvbWVQcm9qZWN0LnNldERlc2NyaXB0aW9uKFxuICBcIllvdXIgcGVyc29uYWwgZGVmYXVsdCBwcm9qZWN0IHRvIHN0b3JlIHlvdXIgdG9kb3MuXCJcbik7XG5ob21lUHJvamVjdC5hZGRUb2RvKGZpcnN0VG9kbyk7XG5ob21lUHJvamVjdC5hZGRUb2RvKFRvZG8oXCJBbm90aGVyIHRlc3QgdG9kb1wiKSk7XG5NZW1vcnkuYWRkVG9Qcm9qZWN0cyhob21lUHJvamVjdCk7XG5NZW1vcnkuYWRkVG9Cb29rbWFya2VkKGhvbWVQcm9qZWN0LmlkKTtcblxuY29uc3QgdGVzdFByb2plY3QgPSBQcm9qZWN0KFwiVGVzdCBQcm9qZWN0XCIpO1xuTWVtb3J5LmFkZFRvUHJvamVjdHModGVzdFByb2plY3QpO1xuXG5QYWdlVmlldy5pbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=