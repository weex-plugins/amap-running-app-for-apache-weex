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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)
	
	__weex_define__('@weex-component/2db5b02b2b2467ace4cdd68021452568', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/2db5b02b2b2467ace4cdd68021452568',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "weex-amap",
	      "classList": [
	        "map"
	      ],
	      "attr": {
	        "sdkKey": function () {return this.keys},
	        "zoom": function () {return this.zoom}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "map-controller"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "distance-wrap"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "distance"
	              ],
	              "attr": {
	                "value": function () {return this.runningData.distance}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "unit"
	              ],
	              "attr": {
	                "value": "公里"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "dashboard"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "dashboard-item"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "time-wrap"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "dashboard-title"
	                      ],
	                      "attr": {
	                        "value": "运动时间"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "number-lg"
	                      ],
	                      "attr": {
	                        "value": function () {return this.runningData.time}
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "dashboard-item"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "dashboard-title"
	                  ],
	                  "attr": {
	                    "value": "配速"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "number-lg"
	                  ],
	                  "attr": {
	                    "value": function () {return this.runningData.speed}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "dashboard-item"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "dashboard-title"
	                  ],
	                  "attr": {
	                    "value": "热量"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "number-lg"
	                  ],
	                  "attr": {
	                    "value": function () {return this.runningData.calories}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "btn-wrap"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "btn-circle",
	                "btn-red"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "btn-text"
	                  ],
	                  "attr": {
	                    "value": "开始"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "btn-circle",
	                "btn-green"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "btn-text"
	                  ],
	                  "attr": {
	                    "value": "暂停"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "top-message"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "top-message-text"
	          ],
	          "attr": {
	            "value": function () {return this.message}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "position": "relative",
	    "flex": 1,
	    "minHeight": 600
	  },
	  "map": {
	    "flex": 1,
	    "minHeight": 600
	  },
	  "map-controller": {
	    "zIndex": 2000,
	    "position": "absolute",
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "height": 500,
	    "backgroundColor": "rgba(255,255,255,1)",
	    "borderTopWidth": 2,
	    "borderTopColor": "rgba(0,0,0,0.25)"
	  },
	  "distance-wrap": {
	    "flex": 1,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "distance": {
	    "display": "inline-block",
	    "fontSize": 90,
	    "color": "#111111"
	  },
	  "unit": {
	    "fontSize": 22,
	    "color": "#333333",
	    "paddingTop": 30,
	    "paddingLeft": 20
	  },
	  "dashboard": {
	    "flex": 1,
	    "flexDirection": "row"
	  },
	  "dashboard-title": {
	    "color": "#999999",
	    "fontSize": 25,
	    "marginBottom": 20
	  },
	  "dashboard-item": {
	    "flex": 1,
	    "paddingLeft": 40,
	    "justifyContent": "center"
	  },
	  "number-lg": {
	    "fontSize": 42,
	    "color": "#222222"
	  },
	  "btn-wrap": {
	    "flex": 1,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "btn-circle": {
	    "width": 120,
	    "height": 120,
	    "marginLeft": 40,
	    "marginRight": 40,
	    "borderRadius": 120,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "backgroundColor": "#eeeeee"
	  },
	  "btn-text": {
	    "color": "#ffffff",
	    "fontSize": 20
	  },
	  "btn-red": {
	    "backgroundColor": "#ff626d"
	  },
	  "btn-green": {
	    "backgroundColor": "#21d45f"
	  },
	  "top-message": {
	    "zIndex": 2001,
	    "position": "absolute",
	    "left": 30,
	    "top": 30,
	    "height": 60,
	    "borderRadius": 30,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "backgroundColor": "#ffffff",
	    "alignItems": "center"
	  },
	  "top-message-text": {
	    "fontSize": 20
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    keys: {
	      h5: 'f4b99dcd51752142ec0f1bdcb9a8ec02',
	      ios: '',
	      android: 'db6a973159cb0c2639ad02c617a786ae'
	    },
	    zoom: 15,
	    runningData: {
	      distance: 0,
	      time: '00:00:00',
	      Seconds: 0,
	      speed: 0,
	      calories: 0
	    },
	    message: '正在运行'
	
	  }}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmEzODg0OWJkMDI2NjZjNjc0NzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LndlP2ZjYjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LndlP2RkZGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LndlPzg2ZmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LndlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOztBQUVELDJGOzs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLGlCQUFpQjtBQUNoRCw4QkFBNkI7QUFDN0I7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUM5TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7O0FDOENBOzs7V0FJQTtZQUNBO2dCQUVBO0FBSkE7V0FLQTs7aUJBRUE7YUFDQTtnQkFDQTtjQUNBO2lCQUVBO0FBTkE7Y0FTQTs7QUFoQkE7QUFEQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJhMzg4NDliZDAyNjY2YzY3NDc2IiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9pbmRleC53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9pbmRleC53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109L1VzZXJzL2FsaS0xMzAyNTduL3d3dy9hbWFwLXJ1bm5pbmctYXBwL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9L1VzZXJzL2FsaS0xMzAyNTduL3d3dy9hbWFwLXJ1bm5pbmctYXBwL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT0vVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FtYXAtcnVubmluZy1hcHAvbm9kZV9tb2R1bGVzL2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPS9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYW1hcC1ydW5uaW5nLWFwcC9ub2RlX21vZHVsZXMvYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2luZGV4LndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50LzJkYjViMDJiMmIyNDY3YWNlNGNkZDY4MDIxNDUyNTY4JywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cbl9fd2VleF9ib290c3RyYXBfXygnQHdlZXgtY29tcG9uZW50LzJkYjViMDJiMmIyNDY3YWNlNGNkZDY4MDIxNDUyNTY4Jyx1bmRlZmluZWQsdW5kZWZpbmVkKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LndlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ3ZWV4LWFtYXBcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJtYXBcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic2RrS2V5XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5rZXlzfSxcbiAgICAgICAgXCJ6b29tXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy56b29tfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibWFwLWNvbnRyb2xsZXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJkaXN0YW5jZS13cmFwXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImRpc3RhbmNlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5ydW5uaW5nRGF0YS5kaXN0YW5jZX1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ1bml0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5YWs6YeMXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiZGFzaGJvYXJkXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZGFzaGJvYXJkLWl0ZW1cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJ0aW1lLXdyYXBcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFzaGJvYXJkLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6L+Q5Yqo5pe26Ze0XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1iZXItbGdcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJ1bm5pbmdEYXRhLnRpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZGFzaGJvYXJkLWl0ZW1cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZGFzaGJvYXJkLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6YWN6YCfXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJudW1iZXItbGdcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJ1bm5pbmdEYXRhLnNwZWVkfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImRhc2hib2FyZC1pdGVtXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImRhc2hib2FyZC10aXRsZVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIueDremHj1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibnVtYmVyLWxnXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5ydW5uaW5nRGF0YS5jYWxvcmllc31cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJ0bi13cmFwXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYnRuLWNpcmNsZVwiLFxuICAgICAgICAgICAgICAgIFwiYnRuLXJlZFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJidG4tdGV4dFwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuW8gOWni1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYnRuLWNpcmNsZVwiLFxuICAgICAgICAgICAgICAgIFwiYnRuLWdyZWVuXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImJ0bi10ZXh0XCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5pqC5YGcXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRvcC1tZXNzYWdlXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRvcC1tZXNzYWdlLXRleHRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm1lc3NhZ2V9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvaW5kZXgud2Vcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGFpbmVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcIm1pbkhlaWdodFwiOiA2MDBcbiAgfSxcbiAgXCJtYXBcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwibWluSGVpZ2h0XCI6IDYwMFxuICB9LFxuICBcIm1hcC1jb250cm9sbGVyXCI6IHtcbiAgICBcInpJbmRleFwiOiAyMDAwLFxuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwiaGVpZ2h0XCI6IDUwMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IDIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcInJnYmEoMCwwLDAsMC4yNSlcIlxuICB9LFxuICBcImRpc3RhbmNlLXdyYXBcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImRpc3RhbmNlXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBcImZvbnRTaXplXCI6IDkwLFxuICAgIFwiY29sb3JcIjogXCIjMTExMTExXCJcbiAgfSxcbiAgXCJ1bml0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDIyLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDMwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMjBcbiAgfSxcbiAgXCJkYXNoYm9hcmRcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZGFzaGJvYXJkLXRpdGxlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwiZm9udFNpemVcIjogMjUsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMjBcbiAgfSxcbiAgXCJkYXNoYm9hcmQtaXRlbVwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiA0MCxcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJudW1iZXItbGdcIjoge1xuICAgIFwiZm9udFNpemVcIjogNDIsXG4gICAgXCJjb2xvclwiOiBcIiMyMjIyMjJcIlxuICB9LFxuICBcImJ0bi13cmFwXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJidG4tY2lyY2xlXCI6IHtcbiAgICBcIndpZHRoXCI6IDEyMCxcbiAgICBcImhlaWdodFwiOiAxMjAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDQwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogNDAsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogMTIwLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlZWVlZWVcIlxuICB9LFxuICBcImJ0bi10ZXh0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udFNpemVcIjogMjBcbiAgfSxcbiAgXCJidG4tcmVkXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZjYyNmRcIlxuICB9LFxuICBcImJ0bi1ncmVlblwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMjFkNDVmXCJcbiAgfSxcbiAgXCJ0b3AtbWVzc2FnZVwiOiB7XG4gICAgXCJ6SW5kZXhcIjogMjAwMSxcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogMzAsXG4gICAgXCJ0b3BcIjogMzAsXG4gICAgXCJoZWlnaHRcIjogNjAsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogMzAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAzMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAzMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInRvcC1tZXNzYWdlLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogMjBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL2luZGV4LndlXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDx3ZWV4LWFtYXAgY2xhc3M9XCJtYXBcIiBzZGsta2V5PVwie3trZXlzfX1cIiB6b29tPVwie3t6b29tfX1cIj48L3dlZXgtYW1hcD5cbiAgICA8ZGl2IGNsYXNzPVwibWFwLWNvbnRyb2xsZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkaXN0YW5jZS13cmFwXCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiZGlzdGFuY2VcIj57e3J1bm5pbmdEYXRhLmRpc3RhbmNlfX08L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidW5pdFwiPuWFrOmHjDwvdGV4dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImRhc2hib2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGFzaGJvYXJkLWl0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS13cmFwXCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImRhc2hib2FyZC10aXRsZVwiPui/kOWKqOaXtumXtDwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibnVtYmVyLWxnXCI+e3tydW5uaW5nRGF0YS50aW1lfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGFzaGJvYXJkLWl0ZW1cIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImRhc2hib2FyZC10aXRsZVwiPumFjemAnzwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cIm51bWJlci1sZ1wiPnt7cnVubmluZ0RhdGEuc3BlZWR9fTwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXNoYm9hcmQtaXRlbVwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZGFzaGJvYXJkLXRpdGxlXCI+54Ot6YePPC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibnVtYmVyLWxnXCI+e3tydW5uaW5nRGF0YS5jYWxvcmllc319PC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ0bi13cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tY2lyY2xlIGJ0bi1yZWRcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImJ0bi10ZXh0XCI+5byA5aeLPC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1jaXJjbGUgYnRuLWdyZWVuXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJidG4tdGV4dFwiPuaaguWBnDwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidG9wLW1lc3NhZ2VcIj5cbiAgICAgIDx0ZXh0IGNsYXNzPVwidG9wLW1lc3NhZ2UtdGV4dFwiPnt7bWVzc2FnZX19PC90ZXh0PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLmNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleDogMTtcbiAgICBtaW4taGVpZ2h0OiA2MDA7XG4gIH1cbiAgLm1hcHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi1oZWlnaHQ6IDYwMDtcbiAgfVxuICAubWFwLWNvbnRyb2xsZXJ7XG4gICAgei1pbmRleDogMjAwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiA1MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAyO1xuICAgIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwwLDAsLjI1KTtcbiAgfVxuICAuZGlzdGFuY2Utd3JhcHtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuZGlzdGFuY2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDkwO1xuICAgIGNvbG9yOiAjMTExO1xuICB9XG4gIC51bml0e1xuICAgIGZvbnQtc2l6ZTogMjI7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgcGFkZGluZy10b3A6IDMwO1xuICAgIHBhZGRpbmctbGVmdDogMjA7XG4gIH1cbiAgLmRhc2hib2FyZHtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLmRhc2hib2FyZC10aXRsZXtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBmb250LXNpemU6IDI1O1xuICAgIG1hcmdpbi1ib3R0b206IDIwO1xuICB9XG4gIC5kYXNoYm9hcmQtaXRlbXtcbiAgICBmbGV4OjE7XG4gICAgcGFkZGluZy1sZWZ0OiA0MDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAubnVtYmVyLWxne1xuICAgIGZvbnQtc2l6ZTogNDI7XG4gICAgY29sb3I6ICMyMjI7XG4gIH1cbiAgXG4gIC5idG4td3JhcHtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuYnRuLWNpcmNsZSB7XG4gICAgd2lkdGg6IDEyMDtcbiAgICBoZWlnaHQ6IDEyMDtcbiAgICBtYXJnaW4tbGVmdDogNDA7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MDtcbiAgICBib3JkZXItcmFkaXVzOiAxMjA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICB9XG4gIC5idG4tdGV4dHtcbiAgICBjb2xvcjojZmZmO1xuICAgIGZvbnQtc2l6ZTogMjA7XG4gIH1cbiAgLmJ0bi1yZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjI2ZDtcbiAgfVxuICAuYnRuLWdyZWVue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMWQ0NWY7XG4gIH1cbiAgXG4gIFxuICAudG9wLW1lc3NhZ2V7XG4gICAgei1pbmRleDogMjAwMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDozMDtcbiAgICB0b3A6MzA7XG4gICAgaGVpZ2h0OiA2MDtcbiAgICBib3JkZXItcmFkaXVzOiAzMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAudG9wLW1lc3NhZ2UtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMDtcbiAgfVxuICBcbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIFxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICBrZXlzOiB7XG4gICAgICAgIGg1OidmNGI5OWRjZDUxNzUyMTQyZWMwZjFiZGNiOWE4ZWMwMicsXG4gICAgICAgIGlvczogJycsXG4gICAgICAgIGFuZHJvaWQ6ICdkYjZhOTczMTU5Y2IwYzI2MzlhZDAyYzYxN2E3ODZhZSdcbiAgICAgIH0sXG4gICAgICB6b29tOiAxNSxcbiAgICAgIHJ1bm5pbmdEYXRhOiB7XG4gICAgICAgIGRpc3RhbmNlOiAwLFxuICAgICAgICB0aW1lOiAnMDA6MDA6MDAnLFxuICAgICAgICBTZWNvbmRzOiAwLFxuICAgICAgICBzcGVlZDogMCxcbiAgICAgICAgY2Fsb3JpZXM6IDBcbiAgICAgIH0sXG4gICAgICBtZXNzYWdlOiAn5q2j5Zyo6L+Q6KGMJ1xuICAgICAgXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC53ZT8zOGIyMDk4NSJdLCJzb3VyY2VSb290IjoiIn0=