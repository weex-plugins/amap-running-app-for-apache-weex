/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(170)
	
	/* script */
	__vue_exports__ = __webpack_require__(172)
	
	/* template */
	var __vue_template__ = __webpack_require__(174)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/ali-130257n/www/app/src/vue/input.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-25568cf2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-25568cf2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] input.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(165);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(167)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e9d72cf6!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./panel.vue", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e9d72cf6!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./panel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(166)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  /*border: 1px solid transparent;*/\n  /*border-radius: 10px;*/\n  /*-webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n  /*box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n  border-color: #dddddd;\n  border-width: 1px;\n}\n.panel-default {\n}\n.panel-primary {\n  border-color: rgb(40, 96, 144);\n}\n.panel-success {\n  border-color: rgb(76, 174, 76);\n}\n.panel-info {\n  border-color: rgb(70, 184, 218);\n}\n.panel-warning {\n  border-color: rgb(238, 162, 54);\n}\n.panel-danger {\n  border-color: rgb(212, 63, 58);\n}\n.panel-header {\n  background-color: #f5f5f5;\n  font-size: 40px;\n  /*padding-left: 12px;*/\n  /*padding-right: 12px;*/\n  /*padding-top: 20px;*/\n  /*padding-bottom: 20px;*/\n  color: #333;\n}\n.panel-header-default {\n}\n.panel-header-primary {\n  background-color: rgb(40, 96, 144);\n  color: #ffffff;\n}\n.panel-header-success {\n  background-color: rgb(92, 184, 92);\n  color: #ffffff;\n}\n.panel-header-info {\n  background-color: rgb(91, 192, 222);\n  color: #ffffff;\n}\n.panel-header-warning {\n  background-color: rgb(240, 173, 78);\n  color: #ffffff;\n}\n.panel-header-danger {\n  background-color: rgb(217, 83, 79);\n  color: #ffffff;\n}\n.panel-body {\n  /*padding-left: 12px;*/\n  /*padding-right: 12px;*/\n  /*padding-top: 20px;*/\n  /*padding-bottom: 20px;*/\n}\n.panel-body-default {\n}\n.panel-body-primary {\n}\n.panel-body-success {\n}\n.panel-body-info {\n}\n.panel-body-warning {\n}\n.panel-body-danger {\n}\n", "", {"version":3,"sources":["/./src/vue/include/panel.vue?66cb0698"],"names":[],"mappings":";AAuCA;EACA,oBAAA;EACA,uBAAA;EACA,kCAAA;EACA,wBAAA;EACA,kDAAA;EACA,0CAAA;EACA,sBAAA;EACA,kBAAA;CACA;AACA;CACA;AACA;EACA,+BAAA;CACA;AACA;EACA,+BAAA;CACA;AACA;EACA,gCAAA;CACA;AACA;EACA,gCAAA;CACA;AACA;EACA,+BAAA;CACA;AACA;EACA,0BAAA;EACA,gBAAA;EACA,uBAAA;EACA,wBAAA;EACA,sBAAA;EACA,yBAAA;EACA,YAAA;CACA;AACA;CACA;AACA;EACA,mCAAA;EACA,eAAA;CACA;AACA;EACA,mCAAA;EACA,eAAA;CACA;AACA;EACA,oCAAA;EACA,eAAA;CACA;AACA;EACA,oCAAA;EACA,eAAA;CACA;AACA;EACA,mCAAA;EACA,eAAA;CACA;AACA;EACA,uBAAA;EACA,wBAAA;EACA,sBAAA;EACA,yBAAA;CACA;AACA;CACA;AACA;CACA;AACA;CACA;AACA;CACA;AACA;CACA;AACA;CACA","file":"panel.vue","sourcesContent":["<template>\n  <div\n    :class=\"['panel', 'panel-' + type]\"\n    :style=\"{ borderWidth: border }\">\n    <text\n      :class=\"['panel-header', 'panel-header-' + type]\"\n      :style=\"{\n        paddingTop: paddingHead,\n        paddingBottom: paddingHead,\n        paddingLeft: paddingHead*1.5,\n        paddingRight: paddingHead*1.5\n      }\">{{title}}</text>\n    <div\n      :class=\"['panel-body', 'panel-body-' + type]\"\n      :style=\"{\n        paddingTop: paddingBody,\n        paddingBottom: paddingBody,\n        paddingLeft: paddingBody*1.5,\n        paddingRight: paddingBody*1.5\n      }\">\n      <slot></slot>\n    </div>\n  </div>\n</template>\n\n<script>\n  module.exports = {\n    props: {\n      type: { default: 'default' },\n      title: { default: '' },\n      paddingBody: { default: 20 },\n      paddingHead: { default: 20 },\n      dataClass: { default: '' }, // FIXME transfer class\n      border:{ default: 0 }\n    }\n  }\n</script>\n\n<style>\n  .panel {\n    margin-bottom: 20px;\n    background-color: #fff;\n    /*border: 1px solid transparent;*/\n    /*border-radius: 10px;*/\n    /*-webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n    /*box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n    border-color: #dddddd;\n    border-width: 1px;\n  }\n  .panel-default {\n  }\n  .panel-primary {\n    border-color: rgb(40, 96, 144);\n  }\n  .panel-success {\n    border-color: rgb(76, 174, 76);\n  }\n  .panel-info {\n    border-color: rgb(70, 184, 218);\n  }\n  .panel-warning {\n    border-color: rgb(238, 162, 54);\n  }\n  .panel-danger {\n    border-color: rgb(212, 63, 58);\n  }\n  .panel-header {\n    background-color: #f5f5f5;\n    font-size: 40px;\n    /*padding-left: 12px;*/\n    /*padding-right: 12px;*/\n    /*padding-top: 20px;*/\n    /*padding-bottom: 20px;*/\n    color: #333;\n  }\n  .panel-header-default {\n  }\n  .panel-header-primary {\n    background-color: rgb(40, 96, 144);\n    color: #ffffff;\n  }\n  .panel-header-success {\n    background-color: rgb(92, 184, 92);\n    color: #ffffff;\n  }\n  .panel-header-info {\n    background-color: rgb(91, 192, 222);\n    color: #ffffff;\n  }\n  .panel-header-warning {\n    background-color: rgb(240, 173, 78);\n    color: #ffffff;\n  }\n  .panel-header-danger {\n    background-color: rgb(217, 83, 79);\n    color: #ffffff;\n  }\n  .panel-body {\n    /*padding-left: 12px;*/\n    /*padding-right: 12px;*/\n    /*padding-top: 20px;*/\n    /*padding-bottom: 20px;*/\n  }\n  .panel-body-default {\n  }\n  .panel-body-primary {\n  }\n  .panel-body-success {\n  }\n  .panel-body-info {\n  }\n  .panel-body-warning {\n  }\n  .panel-body-danger {\n  }\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 166:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },

/***/ 168:
/***/ function(module, exports) {

	'use strict';
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
	  props: {
	    type: { default: 'default' },
	    title: { default: '' },
	    paddingBody: { default: 20 },
	    paddingHead: { default: 20 },
	    dataClass: { default: '' }, // FIXME transfer class
	    border: { default: 0 }
	  }
	};

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['panel', 'panel-' + _vm.type],
	    style: ({
	      borderWidth: _vm.border
	    })
	  }, [_c('text', {
	    class: ['panel-header', 'panel-header-' + _vm.type],
	    style: ({
	      paddingTop: _vm.paddingHead,
	      paddingBottom: _vm.paddingHead,
	      paddingLeft: _vm.paddingHead * 1.5,
	      paddingRight: _vm.paddingHead * 1.5
	    })
	  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
	    class: ['panel-body', 'panel-body-' + _vm.type],
	    style: ({
	      paddingTop: _vm.paddingBody,
	      paddingBottom: _vm.paddingBody,
	      paddingLeft: _vm.paddingBody * 1.5,
	      paddingRight: _vm.paddingBody * 1.5
	    })
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-e9d72cf6", module.exports)
	  }
	}

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(171);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(167)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-25568cf2!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./input.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-25568cf2!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./input.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(166)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.input {\n  font-size: 60px;\n  height: 80px;\n  width: 400px;\n}\n", "", {"version":3,"sources":["/./src/vue/input.vue?6609833a"],"names":[],"mappings":";AAkBA;EACA,gBAAA;EACA,aAAA;EACA,aAAA;CACA","file":"input.vue","sourcesContent":["<template>\n  <scroller>\n    <panel title=\"input\" type=\"primary\">\n      <input\n        type=\"text\"\n        placeholder=\"Text Input\"\n        class=\"input\"\n        value=\"\"\n        @change=\"onchange\"\n        @input=\"oninput\"\n      />\n      <text>oninput: {{txtInput}}</text>\n      <text>onchange: {{txtChange}}</text>\n    </panel>\n  </scroller>\n</template>\n\n<style>\n  .input {\n    font-size: 60px;\n    height: 80px;\n    width: 400px;\n  }\n</style>\n\n<script>\n  var modal = weex.requireModule('modal')\n  module.exports = {\n    data: function () {\n      return {\n        txtInput: '',\n        txtChange: ''\n      }\n    },\n    components: {\n      panel: require('./include/panel.vue')\n    },\n    methods: {\n      onchange: function(event) {\n        this.txtChange = event.value;\n        modal.toast({\n          message: 'onchange: ' + event.value,\n          duration: 2\n        })\n      },\n      oninput: function(event) {\n        this.txtInput = event.value;\n        modal.toast({\n          message: 'onitput: ' + event.value,\n          duration: 1\n        })\n      }\n    }\n  };\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	var modal = weex.requireModule('modal');
	module.exports = {
	  data: function data() {
	    return {
	      txtInput: '',
	      txtChange: ''
	    };
	  },
	  components: {
	    panel: __webpack_require__(173)
	  },
	  methods: {
	    onchange: function onchange(event) {
	      this.txtChange = event.value;
	      modal.toast({
	        message: 'onchange: ' + event.value,
	        duration: 2
	      });
	    },
	    oninput: function oninput(event) {
	      this.txtInput = event.value;
	      modal.toast({
	        message: 'onitput: ' + event.value,
	        duration: 1
	      });
	    }
	  }
	};

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(164)
	
	/* script */
	__vue_exports__ = __webpack_require__(168)
	
	/* template */
	var __vue_template__ = __webpack_require__(169)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/ali-130257n/www/app/src/vue/include/panel.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e9d72cf6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e9d72cf6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] panel.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', [_c('panel', {
	    attrs: {
	      "title": "input",
	      "type": "primary"
	    }
	  }, [_c('input', {
	    staticClass: "input",
	    attrs: {
	      "type": "text",
	      "placeholder": "Text Input",
	      "value": ""
	    },
	    domProps: {
	      "value": ""
	    },
	    on: {
	      "change": _vm.onchange,
	      "input": _vm.oninput
	    }
	  }), _vm._v(" "), _c('text', [_vm._v("oninput: " + _vm._s(_vm.txtInput))]), _vm._v(" "), _c('text', [_vm._v("onchange: " + _vm._s(_vm.txtChange))])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-25568cf2", module.exports)
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGNmNjY1ODk3ZTYxODg3ZmRjNzc/NDQzYyoqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvdnVlL2lucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdnVlL2luY2x1ZGUvcGFuZWwudnVlP2JhNzkqIiwid2VicGFjazovLy8uL3NyYy92dWUvaW5jbHVkZS9wYW5lbC52dWU/Nzg0ZCoiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbGktMTMwMjU3bi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzPzg2MGIiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcz9jMmZjIiwid2VicGFjazovLy9wYW5lbC52dWU/NTFmOSIsIndlYnBhY2s6Ly8vLi9zcmMvdnVlL2luY2x1ZGUvcGFuZWwudnVlP2I5NWIqIiwid2VicGFjazovLy8uL3NyYy92dWUvaW5wdXQudnVlP2I5YjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Z1ZS9pbnB1dC52dWU/Yjk3YSIsIndlYnBhY2s6Ly8vaW5wdXQudnVlIiwid2VicGFjazovLy8uL3NyYy92dWUvaW5jbHVkZS9wYW5lbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Z1ZS9pbnB1dC52dWU/NDY4ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBc0QsbURBQW1ELElBQUk7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7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QUFDRCxrQ0FBaUM7O0FBRWpDOzs7Ozs7OztBQ3hDQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6InZ1ZS9pbnB1dC52dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0Y2Y2NjU4OTdlNjE4ODdmZGM3NyIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0yNTU2OGNmMiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5wdXQudnVlXCIpXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbnB1dC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTI1NTY4Y2YyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2lucHV0LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FwcC9zcmMvdnVlL2lucHV0LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjU1NjhjZjJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjU1NjhjZjJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBpbnB1dC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92dWUvaW5wdXQudnVlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxOSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZTlkNzJjZjYhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhbmVsLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZTlkNzJjZjYhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhbmVsLnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWU5ZDcyY2Y2IS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYW5lbC52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS9Vc2Vycy9hbGktMTMwMjU3bi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZTlkNzJjZjYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvdnVlL2luY2x1ZGUvcGFuZWwudnVlXG4vLyBtb2R1bGUgaWQgPSAxNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCAxOSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnBhbmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgLypib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsqL1xcbiAgLypib3JkZXItcmFkaXVzOiAxMHB4OyovXFxuICAvKi13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KTsqL1xcbiAgLypib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpOyovXFxuICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuLnBhbmVsLWRlZmF1bHQge1xcbn1cXG4ucGFuZWwtcHJpbWFyeSB7XFxuICBib3JkZXItY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XFxufVxcbi5wYW5lbC1zdWNjZXNzIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDc2LCAxNzQsIDc2KTtcXG59XFxuLnBhbmVsLWluZm8ge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNzAsIDE4NCwgMjE4KTtcXG59XFxuLnBhbmVsLXdhcm5pbmcge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjM4LCAxNjIsIDU0KTtcXG59XFxuLnBhbmVsLWRhbmdlciB7XFxuICBib3JkZXItY29sb3I6IHJnYigyMTIsIDYzLCA1OCk7XFxufVxcbi5wYW5lbC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXFxuICAvKnBhZGRpbmctcmlnaHQ6IDEycHg7Ki9cXG4gIC8qcGFkZGluZy10b3A6IDIwcHg7Ki9cXG4gIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG4ucGFuZWwtaGVhZGVyLWRlZmF1bHQge1xcbn1cXG4ucGFuZWwtaGVhZGVyLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4ucGFuZWwtaGVhZGVyLXN1Y2Nlc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCAxODQsIDkyKTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4ucGFuZWwtaGVhZGVyLWluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAxOTIsIDIyMik7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLnBhbmVsLWhlYWRlci13YXJuaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE3MywgNzgpO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5wYW5lbC1oZWFkZXItZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDgzLCA3OSk7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLnBhbmVsLWJvZHkge1xcbiAgLypwYWRkaW5nLWxlZnQ6IDEycHg7Ki9cXG4gIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xcbiAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xcbiAgLypwYWRkaW5nLWJvdHRvbTogMjBweDsqL1xcbn1cXG4ucGFuZWwtYm9keS1kZWZhdWx0IHtcXG59XFxuLnBhbmVsLWJvZHktcHJpbWFyeSB7XFxufVxcbi5wYW5lbC1ib2R5LXN1Y2Nlc3Mge1xcbn1cXG4ucGFuZWwtYm9keS1pbmZvIHtcXG59XFxuLnBhbmVsLWJvZHktd2FybmluZyB7XFxufVxcbi5wYW5lbC1ib2R5LWRhbmdlciB7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdnVlL2luY2x1ZGUvcGFuZWwudnVlPzY2Y2IwNjk4XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF1Q0E7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0NBQ0E7QUFDQTtDQUNBO0FBQ0E7RUFDQSwrQkFBQTtDQUNBO0FBQ0E7RUFDQSwrQkFBQTtDQUNBO0FBQ0E7RUFDQSxnQ0FBQTtDQUNBO0FBQ0E7RUFDQSxnQ0FBQTtDQUNBO0FBQ0E7RUFDQSwrQkFBQTtDQUNBO0FBQ0E7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0NBQ0E7QUFDQTtDQUNBO0FBQ0E7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7Q0FDQTtBQUNBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0NBQ0E7QUFDQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtDQUNBO0FBQ0E7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7Q0FDQTtBQUNBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0NBQ0E7QUFDQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0NBQ0E7QUFDQTtDQUNBO0FBQ0E7Q0FDQTtBQUNBO0NBQ0E7QUFDQTtDQUNBO0FBQ0E7Q0FDQTtBQUNBO0NBQ0FcIixcImZpbGVcIjpcInBhbmVsLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2XFxuICAgIDpjbGFzcz1cXFwiWydwYW5lbCcsICdwYW5lbC0nICsgdHlwZV1cXFwiXFxuICAgIDpzdHlsZT1cXFwieyBib3JkZXJXaWR0aDogYm9yZGVyIH1cXFwiPlxcbiAgICA8dGV4dFxcbiAgICAgIDpjbGFzcz1cXFwiWydwYW5lbC1oZWFkZXInLCAncGFuZWwtaGVhZGVyLScgKyB0eXBlXVxcXCJcXG4gICAgICA6c3R5bGU9XFxcIntcXG4gICAgICAgIHBhZGRpbmdUb3A6IHBhZGRpbmdIZWFkLFxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogcGFkZGluZ0hlYWQsXFxuICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZ0hlYWQqMS41LFxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nSGVhZCoxLjVcXG4gICAgICB9XFxcIj57e3RpdGxlfX08L3RleHQ+XFxuICAgIDxkaXZcXG4gICAgICA6Y2xhc3M9XFxcIlsncGFuZWwtYm9keScsICdwYW5lbC1ib2R5LScgKyB0eXBlXVxcXCJcXG4gICAgICA6c3R5bGU9XFxcIntcXG4gICAgICAgIHBhZGRpbmdUb3A6IHBhZGRpbmdCb2R5LFxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogcGFkZGluZ0JvZHksXFxuICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZ0JvZHkqMS41LFxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nQm9keSoxLjVcXG4gICAgICB9XFxcIj5cXG4gICAgICA8c2xvdD48L3Nsb3Q+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XFxuICAgIHByb3BzOiB7XFxuICAgICAgdHlwZTogeyBkZWZhdWx0OiAnZGVmYXVsdCcgfSxcXG4gICAgICB0aXRsZTogeyBkZWZhdWx0OiAnJyB9LFxcbiAgICAgIHBhZGRpbmdCb2R5OiB7IGRlZmF1bHQ6IDIwIH0sXFxuICAgICAgcGFkZGluZ0hlYWQ6IHsgZGVmYXVsdDogMjAgfSxcXG4gICAgICBkYXRhQ2xhc3M6IHsgZGVmYXVsdDogJycgfSwgLy8gRklYTUUgdHJhbnNmZXIgY2xhc3NcXG4gICAgICBib3JkZXI6eyBkZWZhdWx0OiAwIH1cXG4gICAgfVxcbiAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4gIC5wYW5lbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7Ki9cXG4gICAgLypib3JkZXItcmFkaXVzOiAxMHB4OyovXFxuICAgIC8qLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpOyovXFxuICAgIC8qYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KTsqL1xcbiAgICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgfVxcbiAgLnBhbmVsLWRlZmF1bHQge1xcbiAgfVxcbiAgLnBhbmVsLXByaW1hcnkge1xcbiAgICBib3JkZXItY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XFxuICB9XFxuICAucGFuZWwtc3VjY2VzcyB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDc2LCAxNzQsIDc2KTtcXG4gIH1cXG4gIC5wYW5lbC1pbmZvIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzAsIDE4NCwgMjE4KTtcXG4gIH1cXG4gIC5wYW5lbC13YXJuaW5nIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM4LCAxNjIsIDU0KTtcXG4gIH1cXG4gIC5wYW5lbC1kYW5nZXIge1xcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTIsIDYzLCA1OCk7XFxuICB9XFxuICAucGFuZWwtaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAvKnBhZGRpbmctbGVmdDogMTJweDsqL1xcbiAgICAvKnBhZGRpbmctcmlnaHQ6IDEycHg7Ki9cXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xcbiAgICAvKnBhZGRpbmctYm90dG9tOiAyMHB4OyovXFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgfVxcbiAgLnBhbmVsLWhlYWRlci1kZWZhdWx0IHtcXG4gIH1cXG4gIC5wYW5lbC1oZWFkZXItcHJpbWFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgfVxcbiAgLnBhbmVsLWhlYWRlci1zdWNjZXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCAxODQsIDkyKTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICB9XFxuICAucGFuZWwtaGVhZGVyLWluZm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDE5MiwgMjIyKTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICB9XFxuICAucGFuZWwtaGVhZGVyLXdhcm5pbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxNzMsIDc4KTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICB9XFxuICAucGFuZWwtaGVhZGVyLWRhbmdlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDgzLCA3OSk7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgfVxcbiAgLnBhbmVsLWJvZHkge1xcbiAgICAvKnBhZGRpbmctbGVmdDogMTJweDsqL1xcbiAgICAvKnBhZGRpbmctcmlnaHQ6IDEycHg7Ki9cXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xcbiAgICAvKnBhZGRpbmctYm90dG9tOiAyMHB4OyovXFxuICB9XFxuICAucGFuZWwtYm9keS1kZWZhdWx0IHtcXG4gIH1cXG4gIC5wYW5lbC1ib2R5LXByaW1hcnkge1xcbiAgfVxcbiAgLnBhbmVsLWJvZHktc3VjY2VzcyB7XFxuICB9XFxuICAucGFuZWwtYm9keS1pbmZvIHtcXG4gIH1cXG4gIC5wYW5lbC1ib2R5LXdhcm5pbmcge1xcbiAgfVxcbiAgLnBhbmVsLWJvZHktZGFuZ2VyIHtcXG4gIH1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL2FsaS0xMzAyNTduL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1lOWQ3MmNmNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy92dWUvaW5jbHVkZS9wYW5lbC52dWVcbi8vIG1vZHVsZSBpZCA9IDE2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4IDE5IiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9hbGktMTMwMjU3bi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCAxOSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW87XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gbWVtbztcblx0XHR9O1xuXHR9LFxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG5cdFx0aWYobmV3T2JqKSB7XG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlcztcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdGlmIChtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG5cdFx0Ly8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuXHRcdGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJztcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCAxOSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIDpjbGFzcz1cIlsncGFuZWwnLCAncGFuZWwtJyArIHR5cGVdXCJcbiAgICA6c3R5bGU9XCJ7IGJvcmRlcldpZHRoOiBib3JkZXIgfVwiPlxuICAgIDx0ZXh0XG4gICAgICA6Y2xhc3M9XCJbJ3BhbmVsLWhlYWRlcicsICdwYW5lbC1oZWFkZXItJyArIHR5cGVdXCJcbiAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ0hlYWQsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IHBhZGRpbmdIZWFkLFxuICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZ0hlYWQqMS41LFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmdIZWFkKjEuNVxuICAgICAgfVwiPnt7dGl0bGV9fTwvdGV4dD5cbiAgICA8ZGl2XG4gICAgICA6Y2xhc3M9XCJbJ3BhbmVsLWJvZHknLCAncGFuZWwtYm9keS0nICsgdHlwZV1cIlxuICAgICAgOnN0eWxlPVwie1xuICAgICAgICBwYWRkaW5nVG9wOiBwYWRkaW5nQm9keSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogcGFkZGluZ0JvZHksXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nQm9keSoxLjUsXG4gICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZ0JvZHkqMS41XG4gICAgICB9XCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHR5cGU6IHsgZGVmYXVsdDogJ2RlZmF1bHQnIH0sXG4gICAgICB0aXRsZTogeyBkZWZhdWx0OiAnJyB9LFxuICAgICAgcGFkZGluZ0JvZHk6IHsgZGVmYXVsdDogMjAgfSxcbiAgICAgIHBhZGRpbmdIZWFkOiB7IGRlZmF1bHQ6IDIwIH0sXG4gICAgICBkYXRhQ2xhc3M6IHsgZGVmYXVsdDogJycgfSwgLy8gRklYTUUgdHJhbnNmZXIgY2xhc3NcbiAgICAgIGJvcmRlcjp7IGRlZmF1bHQ6IDAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLnBhbmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLypib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsqL1xuICAgIC8qYm9yZGVyLXJhZGl1czogMTBweDsqL1xuICAgIC8qLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpOyovXG4gICAgLypib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpOyovXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkZGRkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICB9XG4gIC5wYW5lbC1kZWZhdWx0IHtcbiAgfVxuICAucGFuZWwtcHJpbWFyeSB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xuICB9XG4gIC5wYW5lbC1zdWNjZXNzIHtcbiAgICBib3JkZXItY29sb3I6IHJnYig3NiwgMTc0LCA3Nik7XG4gIH1cbiAgLnBhbmVsLWluZm8ge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDcwLCAxODQsIDIxOCk7XG4gIH1cbiAgLnBhbmVsLXdhcm5pbmcge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDIzOCwgMTYyLCA1NCk7XG4gIH1cbiAgLnBhbmVsLWRhbmdlciB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjEyLCA2MywgNTgpO1xuICB9XG4gIC5wYW5lbC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXJpZ2h0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cbiAgICBjb2xvcjogIzMzMztcbiAgfVxuICAucGFuZWwtaGVhZGVyLWRlZmF1bHQge1xuICB9XG4gIC5wYW5lbC1oZWFkZXItcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAucGFuZWwtaGVhZGVyLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgMTg0LCA5Mik7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgLnBhbmVsLWhlYWRlci1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDE5MiwgMjIyKTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAucGFuZWwtaGVhZGVyLXdhcm5pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE3MywgNzgpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIC5wYW5lbC1oZWFkZXItZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCA4MywgNzkpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIC5wYW5lbC1ib2R5IHtcbiAgICAvKnBhZGRpbmctbGVmdDogMTJweDsqL1xuICAgIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xuICAgIC8qcGFkZGluZy10b3A6IDIwcHg7Ki9cbiAgICAvKnBhZGRpbmctYm90dG9tOiAyMHB4OyovXG4gIH1cbiAgLnBhbmVsLWJvZHktZGVmYXVsdCB7XG4gIH1cbiAgLnBhbmVsLWJvZHktcHJpbWFyeSB7XG4gIH1cbiAgLnBhbmVsLWJvZHktc3VjY2VzcyB7XG4gIH1cbiAgLnBhbmVsLWJvZHktaW5mbyB7XG4gIH1cbiAgLnBhbmVsLWJvZHktd2FybmluZyB7XG4gIH1cbiAgLnBhbmVsLWJvZHktZGFuZ2VyIHtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGFuZWwudnVlPzY2Y2IwNjk4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsncGFuZWwnLCAncGFuZWwtJyArIF92bS50eXBlXSxcbiAgICBzdHlsZTogKHtcbiAgICAgIGJvcmRlcldpZHRoOiBfdm0uYm9yZGVyXG4gICAgfSlcbiAgfSwgW19jKCd0ZXh0Jywge1xuICAgIGNsYXNzOiBbJ3BhbmVsLWhlYWRlcicsICdwYW5lbC1oZWFkZXItJyArIF92bS50eXBlXSxcbiAgICBzdHlsZTogKHtcbiAgICAgIHBhZGRpbmdUb3A6IF92bS5wYWRkaW5nSGVhZCxcbiAgICAgIHBhZGRpbmdCb3R0b206IF92bS5wYWRkaW5nSGVhZCxcbiAgICAgIHBhZGRpbmdMZWZ0OiBfdm0ucGFkZGluZ0hlYWQgKiAxLjUsXG4gICAgICBwYWRkaW5nUmlnaHQ6IF92bS5wYWRkaW5nSGVhZCAqIDEuNVxuICAgIH0pXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IFsncGFuZWwtYm9keScsICdwYW5lbC1ib2R5LScgKyBfdm0udHlwZV0sXG4gICAgc3R5bGU6ICh7XG4gICAgICBwYWRkaW5nVG9wOiBfdm0ucGFkZGluZ0JvZHksXG4gICAgICBwYWRkaW5nQm90dG9tOiBfdm0ucGFkZGluZ0JvZHksXG4gICAgICBwYWRkaW5nTGVmdDogX3ZtLnBhZGRpbmdCb2R5ICogMS41LFxuICAgICAgcGFkZGluZ1JpZ2h0OiBfdm0ucGFkZGluZ0JvZHkgKiAxLjVcbiAgICB9KVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZTlkNzJjZjZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWU5ZDcyY2Y2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdnVlL2luY2x1ZGUvcGFuZWwudnVlXG4vLyBtb2R1bGUgaWQgPSAxNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCAxOSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjU1NjhjZjIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2lucHV0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjU1NjhjZjIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2lucHV0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI1NTY4Y2YyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbnB1dC52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS9Vc2Vycy9hbGktMTMwMjU3bi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjU1NjhjZjIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvdnVlL2lucHV0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTkiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5pbnB1dCB7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdnVlL2lucHV0LnZ1ZT82NjA5ODMzYVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBa0JBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJpbnB1dC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPHNjcm9sbGVyPlxcbiAgICA8cGFuZWwgdGl0bGU9XFxcImlucHV0XFxcIiB0eXBlPVxcXCJwcmltYXJ5XFxcIj5cXG4gICAgICA8aW5wdXRcXG4gICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICBwbGFjZWhvbGRlcj1cXFwiVGV4dCBJbnB1dFxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCJcXG4gICAgICAgIHZhbHVlPVxcXCJcXFwiXFxuICAgICAgICBAY2hhbmdlPVxcXCJvbmNoYW5nZVxcXCJcXG4gICAgICAgIEBpbnB1dD1cXFwib25pbnB1dFxcXCJcXG4gICAgICAvPlxcbiAgICAgIDx0ZXh0Pm9uaW5wdXQ6IHt7dHh0SW5wdXR9fTwvdGV4dD5cXG4gICAgICA8dGV4dD5vbmNoYW5nZToge3t0eHRDaGFuZ2V9fTwvdGV4dD5cXG4gICAgPC9wYW5lbD5cXG4gIDwvc2Nyb2xsZXI+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c3R5bGU+XFxuICAuaW5wdXQge1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgfVxcbjwvc3R5bGU+XFxuXFxuPHNjcmlwdD5cXG4gIHZhciBtb2RhbCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnbW9kYWwnKVxcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcXG4gICAgICByZXR1cm4ge1xcbiAgICAgICAgdHh0SW5wdXQ6ICcnLFxcbiAgICAgICAgdHh0Q2hhbmdlOiAnJ1xcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgY29tcG9uZW50czoge1xcbiAgICAgIHBhbmVsOiByZXF1aXJlKCcuL2luY2x1ZGUvcGFuZWwudnVlJylcXG4gICAgfSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgIG9uY2hhbmdlOiBmdW5jdGlvbihldmVudCkge1xcbiAgICAgICAgdGhpcy50eHRDaGFuZ2UgPSBldmVudC52YWx1ZTtcXG4gICAgICAgIG1vZGFsLnRvYXN0KHtcXG4gICAgICAgICAgbWVzc2FnZTogJ29uY2hhbmdlOiAnICsgZXZlbnQudmFsdWUsXFxuICAgICAgICAgIGR1cmF0aW9uOiAyXFxuICAgICAgICB9KVxcbiAgICAgIH0sXFxuICAgICAgb25pbnB1dDogZnVuY3Rpb24oZXZlbnQpIHtcXG4gICAgICAgIHRoaXMudHh0SW5wdXQgPSBldmVudC52YWx1ZTtcXG4gICAgICAgIG1vZGFsLnRvYXN0KHtcXG4gICAgICAgICAgbWVzc2FnZTogJ29uaXRwdXQ6ICcgKyBldmVudC52YWx1ZSxcXG4gICAgICAgICAgZHVyYXRpb246IDFcXG4gICAgICAgIH0pXFxuICAgICAgfVxcbiAgICB9XFxuICB9O1xcbjwvc2NyaXB0PlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL2FsaS0xMzAyNTduL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yNTU2OGNmMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy92dWUvaW5wdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxOSIsIjx0ZW1wbGF0ZT5cbiAgPHNjcm9sbGVyPlxuICAgIDxwYW5lbCB0aXRsZT1cImlucHV0XCIgdHlwZT1cInByaW1hcnlcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVGV4dCBJbnB1dFwiXG4gICAgICAgIGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgIEBjaGFuZ2U9XCJvbmNoYW5nZVwiXG4gICAgICAgIEBpbnB1dD1cIm9uaW5wdXRcIlxuICAgICAgLz5cbiAgICAgIDx0ZXh0Pm9uaW5wdXQ6IHt7dHh0SW5wdXR9fTwvdGV4dD5cbiAgICAgIDx0ZXh0Pm9uY2hhbmdlOiB7e3R4dENoYW5nZX19PC90ZXh0PlxuICAgIDwvcGFuZWw+XG4gIDwvc2Nyb2xsZXI+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gIC5pbnB1dCB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIHZhciBtb2RhbCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnbW9kYWwnKVxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eHRJbnB1dDogJycsXG4gICAgICAgIHR4dENoYW5nZTogJydcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIHBhbmVsOiByZXF1aXJlKCcuL2luY2x1ZGUvcGFuZWwudnVlJylcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIG9uY2hhbmdlOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICB0aGlzLnR4dENoYW5nZSA9IGV2ZW50LnZhbHVlO1xuICAgICAgICBtb2RhbC50b2FzdCh7XG4gICAgICAgICAgbWVzc2FnZTogJ29uY2hhbmdlOiAnICsgZXZlbnQudmFsdWUsXG4gICAgICAgICAgZHVyYXRpb246IDJcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBvbmlucHV0OiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICB0aGlzLnR4dElucHV0ID0gZXZlbnQudmFsdWU7XG4gICAgICAgIG1vZGFsLnRvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiAnb25pdHB1dDogJyArIGV2ZW50LnZhbHVlLFxuICAgICAgICAgIGR1cmF0aW9uOiAxXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGlucHV0LnZ1ZT82NjA5ODMzYSIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1lOWQ3MmNmNiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFuZWwudnVlXCIpXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wYW5lbC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWU5ZDcyY2Y2IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3BhbmVsLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FwcC9zcmMvdnVlL2luY2x1ZGUvcGFuZWwudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1lOWQ3MmNmNlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lOWQ3MmNmNlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHBhbmVsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Z1ZS9pbmNsdWRlL3BhbmVsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTczXG4vLyBtb2R1bGUgY2h1bmtzID0gMTkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3Njcm9sbGVyJywgW19jKCdwYW5lbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcImlucHV0XCIsXG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCJcbiAgICB9XG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlRleHQgSW5wdXRcIixcbiAgICAgIFwidmFsdWVcIjogXCJcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogXCJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IF92bS5vbmNoYW5nZSxcbiAgICAgIFwiaW5wdXRcIjogX3ZtLm9uaW5wdXRcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dCcsIFtfdm0uX3YoXCJvbmlucHV0OiBcIiArIF92bS5fcyhfdm0udHh0SW5wdXQpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dCcsIFtfdm0uX3YoXCJvbmNoYW5nZTogXCIgKyBfdm0uX3MoX3ZtLnR4dENoYW5nZSkpXSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTI1NTY4Y2YyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yNTU2OGNmMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3Z1ZS9pbnB1dC52dWVcbi8vIG1vZHVsZSBpZCA9IDE3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDE5Il0sInNvdXJjZVJvb3QiOiIifQ==