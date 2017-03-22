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

	__webpack_require__(1);
	module.exports = __webpack_require__(15);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _web = __webpack_require__(2);
	
	var _web2 = _interopRequireDefault(_web);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.weex && window.weex.install(_web2.default);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _amap = __webpack_require__(3);
	
	var _amap2 = _interopRequireDefault(_amap);
	
	var _amap3 = __webpack_require__(7);
	
	var _amap4 = _interopRequireDefault(_amap3);
	
	var _amapMarker = __webpack_require__(10);
	
	var _amapMarker2 = _interopRequireDefault(_amapMarker);
	
	var _amapCircle = __webpack_require__(11);
	
	var _amapCircle2 = _interopRequireDefault(_amapCircle);
	
	var _amapPolygon = __webpack_require__(12);
	
	var _amapPolygon2 = _interopRequireDefault(_amapPolygon);
	
	var _amapPolyline = __webpack_require__(13);
	
	var _amapPolyline2 = _interopRequireDefault(_amapPolyline);
	
	var _amapInfoWindow = __webpack_require__(14);
	
	var _amapInfoWindow2 = _interopRequireDefault(_amapInfoWindow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import VueAmap from './vue-amap/index';
	var components = [_amap4.default, _amapMarker2.default, _amapCircle2.default, _amapPolygon2.default, _amapPolyline2.default, _amapInfoWindow2.default];
	
	function init(Weex) {
	  components.forEach(function (comp) {
	    comp.init(Weex);
	  });
	  (0, _amap2.default)(Weex);
	}
	module.exports = {
	  init: init
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _components = __webpack_require__(4);
	
	var _components2 = _interopRequireDefault(_components);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// AMap module
	var amap = {
	  /** get user loaction by browser and IP
	  * @param {function} callback
	  * @param {function} errorCallback
	  **/
	  getUserLocation: function getUserLocation(mapRef, callback) {
	    var self = this;
	    var geo = new AMap.Geolocation({
	      enableHighAccuracy: true,
	      timeout: 10000
	    });
	    geo.getCurrentPosition(function (status, res) {
	      if (status !== 'error') {
	        self.sender.performCallback(callback, {
	          data: {
	            position: [res.position.getLng(), res.position.getLat()]
	          },
	          result: 'success'
	        });
	      } else {
	        console.warn(res.message);
	      }
	    });
	  },
	
	  /** get distance between two position
	  * @param coor1
	  * @param corr2
	  * @param callback
	  **/
	  getLineDistance: function getLineDistance(coor1, coor2, callback) {
	    var lnglat = new AMap.LngLat(coor1[0], coor1[1]);
	    var result = lnglat.distance(coor2);
	    this.sender.performCallback(callback, {
	      result: !result ? 'fail' : 'success',
	      data: {
	        distance: result
	      }
	    });
	  },
	
	  /** tell if the marker in a polygon
	  * @param coor the marker position
	  * @param polygonRef
	  **/
	  polygonContainsMarker: function polygonContainsMarker(coor, polygonRef, callback) {
	    var polygonCom = _components2.default.getComponent(polygonRef);
	    var result = polygonCom.contains(coor);
	    this.sender.performCallback(callback, {
	      result: !result ? 'fail' : 'success',
	      data: result
	    });
	  }
	};
	
	var meta = {
	  amap: [{
	    name: 'getUserLocation',
	    args: ['string', 'function']
	  }, {
	    name: 'getLineDistance',
	    args: ['array', 'array', 'function']
	  }, {
	    name: 'polygonContainsMarker',
	    args: ['array', 'string']
	  }]
	};
	
	module.exports = function (Weex) {
	  Weex.registerApiModule('amap', amap, meta);
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mapManager = __webpack_require__(5);
	
	var _mapManager2 = _interopRequireDefault(_mapManager);
	
	var _vendor = __webpack_require__(6);
	
	var _vendor2 = _interopRequireDefault(_vendor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// manage components
	
	var components = {
	  registerComponent: function registerComponent(componentName, options, id, callback) {
	    var _this = this;
	
	    var opts = options || {};
	    if (!this._components) {
	      this._components = {};
	    }
	    _mapManager2.default.addReadyCallback(function (mapIns) {
	      opts.map = mapIns;
	      // options.center = new AMap.LngLat(options.center[0],options.center[1]);
	      var className = _vendor2.default.setFirstLetterToUppercase(componentName);
	      if (opts.offset) {
	        opts.offset = new AMap.Pixel(opts.offset[0], opts.offset[1]);
	      } else {
	        // this is a sdk bug polyfill
	        opts.offset = new AMap.Pixel(0, 0);
	      }
	      console.log(id);
	      _this._components[id] = new AMap[className](opts);
	      if (typeof callback === 'function') {
	        callback(_this._components[id], mapIns);
	      }
	    });
	  },
	  getComponent: function getComponent(id) {
	    if (!this._components) {
	      return null;
	    }
	    if (!id) {
	      return _vendor2.default.getObjectFirstVal(this._components);
	    }
	
	    return this._components[id];
	  },
	  getComponentMap: function getComponentMap() {
	    return _mapManager2.default.getMap();
	  }
	};
	
	module.exports = components;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	/** map instance manager
	* 20170204
	**/
	var callbackStack = [];
	module.exports = {
	  initMap: function initMap(id, map) {
	    if (!this.__maps) {
	      this.__maps = {};
	    }
	    this.__maps[id] = map;
	    callbackStack.forEach(function (cb) {
	      cb(map);
	    });
	    callbackStack = [];
	  },
	  getMap: function getMap(id) {
	    if (!this.__maps) {
	      return null;
	    }
	    if (!id) {
	      id = Object.keys(this.__maps)[0];
	    }
	    return this.__maps[id];
	  },
	  addReadyCallback: function addReadyCallback(callback) {
	    callbackStack.push(callback);
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	module.exports = {
	  gengerateRandomId: function gengerateRandomId(prefix) {
	    return prefix + new Date().getTime().toString().substring(9, 3) + parseInt(Math.random() * 10000, 10);
	  },
	  setFirstLetterToUppercase: function setFirstLetterToUppercase(str) {
	    return str.substr(0, 1).toUpperCase() + str.substring(1);
	  },
	  getObjectFirstVal: function getObjectFirstVal(obj) {
	    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	      return obj[Object.keys(obj)[0]];
	    }
	    return null;
	  },
	
	  // offset polyfill
	  calcOffset: function calcOffset(x, y) {
	    var halfY = y / 2;
	    var newX = x - halfY;
	    return [newX, y];
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _marker = __webpack_require__(8);
	
	var _marker2 = _interopRequireDefault(_marker);
	
	var _mapLoader = __webpack_require__(9);
	
	var _mapLoader2 = _interopRequireDefault(_mapLoader);
	
	var _mapManager = __webpack_require__(5);
	
	var _mapManager2 = _interopRequireDefault(_mapManager);
	
	var _vendor = __webpack_require__(6);
	
	var _vendor2 = _interopRequireDefault(_vendor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var loadingGif = 'http://img1.vued.vanthink.cn/vued2113eaa062abbaee0441d16a7848d23e.gif';
	var params = {
	  center: undefined,
	  zoom: 11,
	  toolbar: true,
	  scale: false,
	  geolocation: false,
	  resizeEnable: true,
	  search: false
	};
	var events = ['zoomchange', 'dragend'];
	// prototype methods.
	var proto = {
	  create: function create() {
	    this.mapwrap = document.createElement('div');
	    this.mapwrap.id = _vendor2.default.gengerateRandomId('map');
	    this.mapwrap.append(this.renderLoadingSpinner());
	    return this.mapwrap;
	  },
	  renderLoadingSpinner: function renderLoadingSpinner() {
	    var el = document.createElement('div');
	    el.style.height = 60;
	    el.style.margin = '20 auto';
	    el.style.textAlign = 'center';
	    var image = document.createElement('img');
	    image.src = loadingGif;
	    el.appendChild(image);
	    var text = document.createElement('div');
	    text.appendChild(document.createTextNode('高德地图加载中....'));
	    el.appendChild(text);
	    return el;
	  },
	  ready: function ready() {
	    var _this = this;
	
	    var self = this;
	    if (window.AMap) {
	      this.map = new AMap.Map(this.mapwrap.id, params);
	      AMap.plugin(['AMap.ToolBar', 'AMap.Geolocation'], function () {
	        if (params.scale) {
	          self.map.addControl(new AMap.ToolBar());
	        }
	        if (params.geolocation) {
	          self.map.addControl(new AMap.Geolocation());
	        }
	      });
	      if (params.search) {
	        AMap.service('AMap.PlaceSearch', function () {
	          _this.placeSearch = new AMap.PlaceSearch();
	        });
	      }
	      this.initEvents();
	      _mapManager2.default.initMap(this.mapwrap.id, this.map);
	    }
	  },
	  removeChild: function removeChild(child) {
	    _marker2.default.removeMaker(child.data);
	  },
	  initEvents: function initEvents() {
	    var _this2 = this;
	
	    events.forEach(function (eventName) {
	      AMap.event.addListener(_this2.map, eventName, function () {
	        _this2.dispatchEvent(eventName);
	      });
	    });
	  }
	};
	
	var attr = {
	  center: function center(val) {
	    if (Array.isArray(val) && val.length === 2) {
	      params.center = val;
	      if (window.AMap) {
	        this.map.setCenter(params.center);
	      }
	    }
	    if (typeof val === 'number') {
	      var geo = new AMap.Geolocation({
	        enableHighAccuracy: true
	      });
	      var self = this;
	      geo.getCurrentPosition();
	      AMap.event.AMap.event.addListener(geo, 'complete', function (data) {
	        params.center = [data.position.getLng(), data.position.getLat()];
	        self.map.setCenter(params.center);
	      });
	    }
	  },
	  zoom: function zoom(val) {
	    if (/^[0-9]+$/.test(val)) {
	      params.zoom = val;
	    }
	    if (window.AMap) {
	      this.map.setZoom(params.zoom);
	    }
	  },
	  scale: function scale(val) {
	    params.scale = val;
	  },
	  geolocation: function geolocation(val) {
	    params.geolocation = val;
	  },
	  sdkKey: function sdkKey(val) {
	    var _this3 = this;
	
	    var key = '';
	    if (val) {
	      key = val.h5;
	    }
	    _mapLoader2.default.load({
	      key: key
	    }, this.mapwrap, function () {
	      return _this3.ready();
	    });
	  },
	  search: function search(val) {
	    params.search = val;
	    if (window.AMap) {}
	  }
	};
	
	var event = {
	  zoomchange: {
	    extra: function extra() {
	      return { isSuccess: true };
	    }
	  },
	  dragend: {
	    extra: function extra() {
	      return { isSuccess: true };
	    }
	  }
	};
	
	function init(Weex) {
	  var Component = Weex.Component;
	  var extend = Weex.utils.extend;
	
	  function Amap(data) {
	    Component.call(this, data);
	  }
	  Amap.prototype = Object.create(Component.prototype);
	  extend(Amap.prototype, proto);
	  extend(Amap.prototype, { attr: attr });
	  extend(Amap.prototype, {
	    style: extend(Object.create(Component.prototype.style), {})
	  });
	  extend(Amap.prototype, { event: event });
	  Weex.registerComponent('weex-amap', Amap);
	}
	
	exports.default = { init: init };

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // a lib to manage all marker
	
	
	var _mapManager = __webpack_require__(5);
	
	var _mapManager2 = _interopRequireDefault(_mapManager);
	
	var _vendor = __webpack_require__(6);
	
	var _vendor2 = _interopRequireDefault(_vendor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var markers = {};
	module.exports = {
	  changeMarker: function changeMarker(arr, map) {
	    for (var i = 0; i < arr.length; i++) {
	      var data = arr[i];
	      var marker = this.findMarker(data);
	      if (!marker) {
	        this.addMarker(data, map);
	      } else {
	        this.removeMarker(data);
	      }
	    }
	  },
	  addMarker: function addMarker(data) {
	    var _this = this;
	
	    var map = _mapManager2.default.getMap();
	    if (!map) {
	      return _mapManager2.default.addReadyCallback(function (mapIns) {
	        _this.setMarker(data, mapIns);
	      });
	    }
	    return this.setMarker(data, map);
	  },
	  setMarker: function setMarker(data, map) {
	    var icon = null;
	    if (data.icon) {
	      icon = new AMap.Icon({
	        image: data.icon,
	        size: new AMap.Size(64, 64)
	      });
	    }
	    var marker = new AMap.Marker({
	      position: data.position,
	      title: data.title,
	      icon: icon,
	      map: map
	    });
	    markers[this.__getMid(data)] = marker;
	    this.registerEvents(data.events, marker);
	  },
	  removeMaker: function removeMaker(data) {
	    var marker = this.findMarker(data);
	    marker.setMap(null);
	  },
	  updateMarker: function updateMarker(data, attr, val) {
	    var marker = this.findMarker(data);
	    if (!marker) {
	      return false;
	    }
	    var method = _vendor2.default.setFirstLetterToUppercase(attr);
	    marker['set' + method](val);
	  },
	  registerEvents: function registerEvents(events, marker) {
	    if ((typeof events === 'undefined' ? 'undefined' : _typeof(events)) === 'object') {
	      for (var key in events) {
	        AMap.event.addListener(marker, key, events[key]);
	      }
	    }
	  },
	  removeMarker: function removeMarker(data) {
	    var marker = this.findMarker(data);
	    if (marker) {
	      marker.visible = true;
	      marker = null;
	    }
	  },
	  findMarker: function findMarker(data) {
	    var mid = this.__getMid(data);
	    return markers[mid];
	  },
	  __getMid: function __getMid(data) {
	    return 'mid-' + data.ref || data.position.join('-');
	  },
	  __isMaker: function __isMaker(obj) {
	    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.CLASS_NAME === 'AMap.Marker';
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	// load map sdk
	var DEFAULT_CONFIG = {
	  key: '',
	  v: '1.3',
	  url: 'https://webapi.amap.com/maps',
	  callback: 'amapInitComponent'
	};
	var gengerateScriptUrl = function gengerateScriptUrl(obj) {
	  var paramArr = [];
	  for (var key in obj) {
	    if (key !== 'url') {
	      paramArr.push(encodeURI(key + '=' + obj[key]));
	    }
	  }
	  var url = obj.url += '?' + paramArr.join('&');
	  return url;
	};
	
	module.exports = {
	  load: function load(config, container, callback) {
	    var newConfig = Object.assign({}, DEFAULT_CONFIG, config);
	    var lib = document.createElement('script');
	    lib.async = true;
	    lib.defer = true;
	    lib.src = gengerateScriptUrl(newConfig);
	    console.log(lib.src);
	    window.amapInitComponent = function () {
	      window.maploaded = true;
	      callback();
	    };
	    document.head.appendChild(lib);
	    this.loadTimeout(container);
	  },
	  loadTimeout: function loadTimeout(wrap) {
	    setTimeout(function () {
	      if (!window.Amap) {
	        var el = document.createElement('button');
	        el.appendChild(document.createTextNode('重新加载'));
	        el.addEventListener('click', function () {
	          location.reload();
	        });
	        wrap.childNodes[0].remove();
	        wrap.appendChild(el);
	      }
	    }, 10000);
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _marker = __webpack_require__(8);
	
	var _marker2 = _interopRequireDefault(_marker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var params = {
	  poistion: [],
	  title: '',
	  icon: ''
	};
	
	// prototype methods.
	var proto = {
	  create: function create() {
	    var _this = this;
	
	    var node = document.createElement('div');
	    var data = this.data.attr;
	    _marker2.default.addMarker({
	      position: data.position,
	      icon: data.icon,
	      title: data.title,
	      ref: this.data.ref,
	      events: {
	        click: function click() {
	          _this.dispatchEvent('click');
	        }
	      },
	      map: window.Amap
	    });
	    return node;
	  },
	  updateAttrs: function updateAttrs(attrs) {
	    var keys = Object.keys(attrs);
	    var data = {
	      ref: this.data.ref
	    };
	    keys.forEach(function (k) {
	      _marker2.default.updateMarker(data, k, attrs[k]);
	    });
	  }
	};
	
	var attr = {
	  position: function position(val) {
	    console.log(val);
	    console.log(this);
	    if (Array.isArray(val) && val.length === 2) {
	      params.position = val;
	    }
	  },
	  icon: function icon(val) {
	    params.icon = val;
	  },
	  title: function title(val) {
	    params.title = val;
	  }
	};
	
	var event = {
	  click: {
	    extra: function extra() {
	      return { isSuccess: true };
	    }
	  }
	};
	
	function init(Weex) {
	  var Component = Weex.Component;
	  var extend = Weex.utils.extend;
	
	  function AmapMaker(data) {
	    Component.call(this, data);
	  }
	  AmapMaker.prototype = Object.create(Component.prototype);
	  extend(AmapMaker.prototype, proto);
	  extend(AmapMaker.prototype, { attr: attr });
	  extend(AmapMaker.prototype, { event: event });
	  Weex.registerComponent('weex-amap-marker', AmapMaker);
	}
	
	exports.default = { init: init };

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _components = __webpack_require__(4);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _vendor = __webpack_require__(6);
	
	var _vendor2 = _interopRequireDefault(_vendor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var componentName = 'circle';
	// prototype methods.
	var proto = {
	  create: function create() {
	    var _this = this;
	
	    var node = document.createElement('div');
	    var data = this.data.attr;
	    var comId = data.ref || _vendor2.default.gengerateRandomId(componentName);
	    if (data.center && Array.isArray(data.center)) {
	      _components2.default.registerComponent(componentName, {
	        center: data.center,
	        radius: data.radius,
	        fillColor: data.fillColor,
	        filOpacity: data.fillOpacity,
	        strokeWeight: data.strokeWidth,
	        strokeOpacity: data.strokeOpacity,
	        strokeColor: data.strokeColor,
	        strokeStyle: data.strokeStyle,
	        events: {
	          click: function click() {
	            _this.dispatchEvent('click');
	          }
	        }
	      }, comId);
	    } else {
	      console.warn('attribute center must be an array.');
	    }
	    this._comId = comId;
	    return node;
	  }
	};
	
	var attr = {
	  center: function center(val) {
	    var com = _components2.default.getComponent(this._comId);
	    if (com) {
	      com.setCenter(val);
	    }
	  }
	};
	
	var event = {
	  click: {
	    extra: function extra() {
	      return { isSuccess: true };
	    }
	  }
	};
	
	function init(Weex) {
	  var Component = Weex.Component;
	  var extend = Weex.utils.extend;
	
	  function AmapCircle(data) {
	    Component.call(this, data);
	  }
	  AmapCircle.prototype = Object.create(Component.prototype);
	  extend(AmapCircle.prototype, proto);
	  extend(AmapCircle.prototype, { attr: attr });
	  extend(AmapCircle.prototype, { event: event });
	  Weex.registerComponent('weex-amap-circle', AmapCircle);
	}
	
	exports.default = { init: init };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _components = __webpack_require__(4);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _vendor = __webpack_require__(6);
	
	var _vendor2 = _interopRequireDefault(_vendor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var componentName = 'polygon';
	// prototype methods.
	var proto = {
	  create: function create() {
	    var _this = this;
	
	    var node = document.createElement('div');
	    var data = this.data.attr;
	    var comId = this.data.ref || _vendor2.default.gengerateRandomId(componentName);
	    if (data.path && Array.isArray(data.path)) {
	      _components2.default.registerComponent(componentName, {
	        path: data.path,
	        fillColor: data.fillColor,
	        filOpacity: data.fillOpacity,
	        strokeWeight: data.strokeWidth,
	        strokeOpacity: data.strokeOpacity,
	        strokeColor: data.strokeColor,
	        strokeStyle: data.strokeStyle,
	        events: {
	          click: function click() {
	            _this.dispatchEvent('click');
	          }
	        }
	      }, comId);
	    } else {
	      console.warn('attribute path must be an array.');
	    }
	    this._comId = comId;
	    return node;
	  }
	};
	
	var attr = {};
	
	var event = {
	  click: {
	    extra: function extra() {
	      return { isSuccess: true };
	    }
	  }
	};
	
	function init(Weex) {
	  var Component = Weex.Component;
	  var extend = Weex.utils.extend;
	
	  function AmapPolygon(data) {
	    Component.call(this, data);
	  }
	  AmapPolygon.prototype = Object.create(Component.prototype);
	  extend(AmapPolygon.prototype, proto);
	  extend(AmapPolygon.prototype, { attr: attr });
	  extend(AmapPolygon.prototype, { event: event });
	  Weex.registerComponent('weex-amap-polygon', AmapPolygon);
	}
	
	exports.default = { init: init };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _components = __webpack_require__(4);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _vendor = __webpack_require__(6);
	
	var _vendor2 = _interopRequireDefault(_vendor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var componentName = 'polyline';
	
	var data = {};
	// prototype methods.
	var proto = {
	  create: function create() {
	    var _this = this;
	
	    var node = document.createElement('div');
	    data = this.data.attr;
	    var comId = data.ref || _vendor2.default.gengerateRandomId(componentName);
	    if (data.path && Array.isArray(data.path)) {
	      _components2.default.registerComponent(componentName, {
	        path: data.path,
	        strokeWeight: data.strokeWidth,
	        strokeOpacity: data.strokeOpacity,
	        strokeColor: data.strokeColor,
	        strokeStyle: data.strokeStyle,
	        lineJoin: 'round',
	        events: {
	          click: function click() {
	            _this.dispatchEvent('click');
	          }
	        }
	      }, comId, function (com) {
	        com.setPath(data.path);
	      });
	    } else {
	      console.warn('attribute path must be an array.');
	    }
	    this._comId = comId;
	    return node;
	  }
	};
	
	var attr = {
	  path: function path(val) {
	    if (Array.isArray(val) && val.length >= 2) {
	      data.path = val;
	      var com = _components2.default.getComponent(this._comId);
	      if (com) {
	        com.setPath(val);
	      }
	    }
	  }
	};
	
	var event = {
	  click: {
	    extra: function extra() {
	      return { isSuccess: true };
	    }
	  }
	};
	
	function init(Weex) {
	  var Component = Weex.Component;
	  var extend = Weex.utils.extend;
	
	  function AmapPolygon(opts) {
	    Component.call(this, opts);
	  }
	  AmapPolygon.prototype = Object.create(Component.prototype);
	  extend(AmapPolygon.prototype, proto);
	  extend(AmapPolygon.prototype, { attr: attr });
	  extend(AmapPolygon.prototype, { event: event });
	  Weex.registerComponent('weex-amap-polyline', AmapPolygon);
	}
	
	exports.default = { init: init };

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _components = __webpack_require__(4);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _vendor = __webpack_require__(6);
	
	var _vendor2 = _interopRequireDefault(_vendor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var componentName = 'InfoWindow';
	// prototype methods.
	var proto = {
	  create: function create() {
	    var _this = this;
	
	    var node = document.createElement('div');
	    node.style.opacity = 0;
	    var data = this.data.attr;
	    var comId = this.data.ref || _vendor2.default.gengerateRandomId(componentName);
	    this.addAppendHandler(function () {
	      if (data.position && Array.isArray(data.position)) {
	        _components2.default.registerComponent(componentName, {
	          position: data.position,
	          offset: data.offset,
	          isCustom: true
	        }, comId, function (com, map) {
	          var content = data.content;
	          if (_this.node.innerHTML.length > 0) {
	            content = _this.node.innerHTML;
	          }
	          if (content) {
	            com.setContent(content);
	          }
	          if (data.open && content) {
	            com.open(map, _this.data.attr.position);
	          } else {
	            com.close();
	          }
	        });
	      } else {
	        console.warn('attribute center must be an array.');
	      }
	    });
	    this._comId = comId;
	    return node;
	  }
	};
	
	var attr = {
	  open: function open(val) {
	    var com = _components2.default.getComponent(this.data.ref);
	    var map = _components2.default.getComponentMap();
	    if (com) {
	      if (val) {
	        com.open(map, this.data.attr.position);
	      } else {
	        com.close();
	      }
	    }
	  }
	};
	
	var event = {};
	
	function init(Weex) {
	  var Component = Weex.Component;
	  var extend = Weex.utils.extend;
	
	  function AmapInfoWindow(data) {
	    Component.call(this, data);
	  }
	  AmapInfoWindow.prototype = Object.create(Component.prototype);
	  extend(AmapInfoWindow.prototype, proto);
	  extend(AmapInfoWindow.prototype, { attr: attr });
	  extend(AmapInfoWindow.prototype, { event: event });
	  Weex.registerComponent('weex-amap-info-window', AmapInfoWindow);
	}
	
	exports.default = { init: init };

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Init weex instance depending on the url params.
	 * There are three ways to load weex bundles, depends on the
	 * parameter 'loader' in the url:
	 *
	 *   + xhr: use XMLHttpRequest. Parameter 'page' should be
	 *   the bundle's url.
	 *   + source: use the transformed code itself. 'page' should
	 *   be the transformed weex bundle.
	 *
	 * @param {String} bundle - It has different meaning depends on
	 *   the type of loader.
	 */
	
	(function () {
	  function getUrlParam(key) {
	    var reg = new RegExp('[?|&]' + key + '=([^&]+)');
	    var match = location.search.match(reg);
	    return match && match[1];
	  }
	  var loader = getUrlParam('loader') || 'xhr';
	  var page = getUrlParam('page') || '../dist/index.js';
	  window.weex.init({
	    appId: location.href,
	    loader: loader,
	    source: page,
	    rootId: 'weex'
	  });
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGU5MTMwYTNhNWIyMTRjN2Y3YTYiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy9wbHVnaW5fYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvbW9kdWxlL2FtYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS9tYXAtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS92ZW5kb3IuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS9tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvbWFwLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLW1hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLWNpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLXBvbHlnb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC1wb2x5bGluZS5qcyIsIndlYnBhY2s6Ly8vLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLWluZm8td2luZG93LmpzIiwid2VicGFjazovLy8uL3dlYi9qcy9pbml0LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIndlZXgiLCJpbnN0YWxsIiwiY29tcG9uZW50cyIsImluaXQiLCJXZWV4IiwiZm9yRWFjaCIsImNvbXAiLCJtb2R1bGUiLCJleHBvcnRzIiwiYW1hcCIsImdldFVzZXJMb2NhdGlvbiIsIm1hcFJlZiIsImNhbGxiYWNrIiwic2VsZiIsImdlbyIsIkFNYXAiLCJHZW9sb2NhdGlvbiIsImVuYWJsZUhpZ2hBY2N1cmFjeSIsInRpbWVvdXQiLCJnZXRDdXJyZW50UG9zaXRpb24iLCJzdGF0dXMiLCJyZXMiLCJzZW5kZXIiLCJwZXJmb3JtQ2FsbGJhY2siLCJkYXRhIiwicG9zaXRpb24iLCJnZXRMbmciLCJnZXRMYXQiLCJyZXN1bHQiLCJjb25zb2xlIiwid2FybiIsIm1lc3NhZ2UiLCJnZXRMaW5lRGlzdGFuY2UiLCJjb29yMSIsImNvb3IyIiwibG5nbGF0IiwiTG5nTGF0IiwiZGlzdGFuY2UiLCJwb2x5Z29uQ29udGFpbnNNYXJrZXIiLCJjb29yIiwicG9seWdvblJlZiIsInBvbHlnb25Db20iLCJnZXRDb21wb25lbnQiLCJjb250YWlucyIsIm1ldGEiLCJuYW1lIiwiYXJncyIsInJlZ2lzdGVyQXBpTW9kdWxlIiwicmVnaXN0ZXJDb21wb25lbnQiLCJjb21wb25lbnROYW1lIiwib3B0aW9ucyIsImlkIiwib3B0cyIsIl9jb21wb25lbnRzIiwiYWRkUmVhZHlDYWxsYmFjayIsIm1hcElucyIsIm1hcCIsImNsYXNzTmFtZSIsInNldEZpcnN0TGV0dGVyVG9VcHBlcmNhc2UiLCJvZmZzZXQiLCJQaXhlbCIsImxvZyIsImdldE9iamVjdEZpcnN0VmFsIiwiZ2V0Q29tcG9uZW50TWFwIiwiZ2V0TWFwIiwiY2FsbGJhY2tTdGFjayIsImluaXRNYXAiLCJfX21hcHMiLCJjYiIsIk9iamVjdCIsImtleXMiLCJwdXNoIiwiZ2VuZ2VyYXRlUmFuZG9tSWQiLCJwcmVmaXgiLCJEYXRlIiwiZ2V0VGltZSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwic3RyIiwic3Vic3RyIiwidG9VcHBlckNhc2UiLCJvYmoiLCJjYWxjT2Zmc2V0IiwieCIsInkiLCJoYWxmWSIsIm5ld1giLCJsb2FkaW5nR2lmIiwicGFyYW1zIiwiY2VudGVyIiwidW5kZWZpbmVkIiwiem9vbSIsInRvb2xiYXIiLCJzY2FsZSIsImdlb2xvY2F0aW9uIiwicmVzaXplRW5hYmxlIiwic2VhcmNoIiwiZXZlbnRzIiwicHJvdG8iLCJjcmVhdGUiLCJtYXB3cmFwIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kIiwicmVuZGVyTG9hZGluZ1NwaW5uZXIiLCJlbCIsInN0eWxlIiwiaGVpZ2h0IiwibWFyZ2luIiwidGV4dEFsaWduIiwiaW1hZ2UiLCJzcmMiLCJhcHBlbmRDaGlsZCIsInRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsInJlYWR5IiwiTWFwIiwicGx1Z2luIiwiYWRkQ29udHJvbCIsIlRvb2xCYXIiLCJzZXJ2aWNlIiwicGxhY2VTZWFyY2giLCJQbGFjZVNlYXJjaCIsImluaXRFdmVudHMiLCJyZW1vdmVDaGlsZCIsImNoaWxkIiwicmVtb3ZlTWFrZXIiLCJldmVudE5hbWUiLCJldmVudCIsImFkZExpc3RlbmVyIiwiZGlzcGF0Y2hFdmVudCIsImF0dHIiLCJ2YWwiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJzZXRDZW50ZXIiLCJ0ZXN0Iiwic2V0Wm9vbSIsInNka0tleSIsImtleSIsImg1IiwibG9hZCIsInpvb21jaGFuZ2UiLCJleHRyYSIsImlzU3VjY2VzcyIsImRyYWdlbmQiLCJDb21wb25lbnQiLCJleHRlbmQiLCJ1dGlscyIsIkFtYXAiLCJjYWxsIiwicHJvdG90eXBlIiwibWFya2VycyIsImNoYW5nZU1hcmtlciIsImFyciIsImkiLCJtYXJrZXIiLCJmaW5kTWFya2VyIiwiYWRkTWFya2VyIiwicmVtb3ZlTWFya2VyIiwic2V0TWFya2VyIiwiaWNvbiIsIkljb24iLCJzaXplIiwiU2l6ZSIsIk1hcmtlciIsInRpdGxlIiwiX19nZXRNaWQiLCJyZWdpc3RlckV2ZW50cyIsInNldE1hcCIsInVwZGF0ZU1hcmtlciIsIm1ldGhvZCIsInZpc2libGUiLCJtaWQiLCJyZWYiLCJqb2luIiwiX19pc01ha2VyIiwiQ0xBU1NfTkFNRSIsIkRFRkFVTFRfQ09ORklHIiwidiIsInVybCIsImdlbmdlcmF0ZVNjcmlwdFVybCIsInBhcmFtQXJyIiwiZW5jb2RlVVJJIiwiY29uZmlnIiwiY29udGFpbmVyIiwibmV3Q29uZmlnIiwiYXNzaWduIiwibGliIiwiYXN5bmMiLCJkZWZlciIsImFtYXBJbml0Q29tcG9uZW50IiwibWFwbG9hZGVkIiwiaGVhZCIsImxvYWRUaW1lb3V0Iiwid3JhcCIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwibG9jYXRpb24iLCJyZWxvYWQiLCJjaGlsZE5vZGVzIiwicmVtb3ZlIiwicG9pc3Rpb24iLCJub2RlIiwiY2xpY2siLCJ1cGRhdGVBdHRycyIsImF0dHJzIiwiayIsIkFtYXBNYWtlciIsImNvbUlkIiwicmFkaXVzIiwiZmlsbENvbG9yIiwiZmlsT3BhY2l0eSIsImZpbGxPcGFjaXR5Iiwic3Ryb2tlV2VpZ2h0Iiwic3Ryb2tlV2lkdGgiLCJzdHJva2VPcGFjaXR5Iiwic3Ryb2tlQ29sb3IiLCJzdHJva2VTdHlsZSIsIl9jb21JZCIsImNvbSIsIkFtYXBDaXJjbGUiLCJwYXRoIiwiQW1hcFBvbHlnb24iLCJsaW5lSm9pbiIsInNldFBhdGgiLCJvcGFjaXR5IiwiYWRkQXBwZW5kSGFuZGxlciIsImlzQ3VzdG9tIiwiY29udGVudCIsImlubmVySFRNTCIsInNldENvbnRlbnQiLCJvcGVuIiwiY2xvc2UiLCJBbWFwSW5mb1dpbmRvdyIsImdldFVybFBhcmFtIiwicmVnIiwiUmVnRXhwIiwibWF0Y2giLCJsb2FkZXIiLCJwYWdlIiwiYXBwSWQiLCJocmVmIiwic291cmNlIiwicm9vdElkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtB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LFlBQU8zQyxTQUFTNEMsSUFERDtBQUViSCxhQUFRQSxNQUZLO0FBR2JJLGFBQVFILElBSEs7QUFJYkksYUFBUTtBQUpLLElBQWpCO0FBTUQsRUFkRCxJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGU5MTMwYTNhNWIyMTRjN2Y3YTYiLCJpbXBvcnQgYW1hcCBmcm9tIFwiL1VzZXJzL2FsaS0xMzAyNTduL3d3dy9hbWFwLXJ1bm5pbmctYXBwL3BsdWdpbnMvd2VleC1hbWFwL3dlYlwiO1xyXG53aW5kb3cud2VleCAmJiB3aW5kb3cud2VleC5pbnN0YWxsKGFtYXApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvcGx1Z2luX2J1bmRsZS5qcyIsImltcG9ydCBhbWFwTW9kdWxlUmVnIGZyb20gJy4vbW9kdWxlL2FtYXAnO1xuaW1wb3J0IEFtYXAgZnJvbSAnLi9jb21wb25lbnRzL2FtYXAnO1xuaW1wb3J0IEFtYXBNYXJrZXIgZnJvbSAnLi9jb21wb25lbnRzL2FtYXAtbWFya2VyJztcbmltcG9ydCBBbWFwQ2lyY2xlIGZyb20gJy4vY29tcG9uZW50cy9hbWFwLWNpcmNsZSc7XG5pbXBvcnQgQW1hcFBvbHlnb24gZnJvbSAnLi9jb21wb25lbnRzL2FtYXAtcG9seWdvbic7XG5pbXBvcnQgQW1hcFBvbHlsaW5lIGZyb20gJy4vY29tcG9uZW50cy9hbWFwLXBvbHlsaW5lJztcbmltcG9ydCBBbWFwSW5mb1dpbmRvdyBmcm9tICcuL2NvbXBvbmVudHMvYW1hcC1pbmZvLXdpbmRvdyc7XG4vLyBpbXBvcnQgVnVlQW1hcCBmcm9tICcuL3Z1ZS1hbWFwL2luZGV4JztcbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIEFtYXAsXG4gIEFtYXBNYXJrZXIsXG4gIEFtYXBDaXJjbGUsXG4gIEFtYXBQb2x5Z29uLFxuICBBbWFwUG9seWxpbmUsXG4gIEFtYXBJbmZvV2luZG93XG5dO1xuXG5mdW5jdGlvbiBpbml0KFdlZXgpIHtcbiAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wKSA9PiB7XG4gICAgY29tcC5pbml0KFdlZXgpO1xuICB9KTtcbiAgYW1hcE1vZHVsZVJlZyhXZWV4KTtcbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvaW5kZXguanMiLCJpbXBvcnQgY29tcG9uZW50cyBmcm9tICcuLi9zZXJ2aWNlL2NvbXBvbmVudHMnO1xuLy8gQU1hcCBtb2R1bGVcbmNvbnN0IGFtYXAgPSB7XG4gIC8qKiBnZXQgdXNlciBsb2FjdGlvbiBieSBicm93c2VyIGFuZCBJUFxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICogQHBhcmFtIHtmdW5jdGlvbn0gZXJyb3JDYWxsYmFja1xuICAqKi9cbiAgZ2V0VXNlckxvY2F0aW9uKG1hcFJlZiwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBnZW8gPSBuZXcgQU1hcC5HZW9sb2NhdGlvbih7XG4gICAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWUsXG4gICAgICB0aW1lb3V0OiAxMDAwMFxuICAgIH0pO1xuICAgIGdlby5nZXRDdXJyZW50UG9zaXRpb24oKHN0YXR1cywgcmVzKSA9PiB7XG4gICAgICBpZiAoc3RhdHVzICE9PSAnZXJyb3InKSB7XG4gICAgICAgIHNlbGYuc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFjaywge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbcmVzLnBvc2l0aW9uLmdldExuZygpLCByZXMucG9zaXRpb24uZ2V0TGF0KCldXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXN1bHQ6ICdzdWNjZXNzJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihyZXMubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIC8qKiBnZXQgZGlzdGFuY2UgYmV0d2VlbiB0d28gcG9zaXRpb25cbiAgKiBAcGFyYW0gY29vcjFcbiAgKiBAcGFyYW0gY29ycjJcbiAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgKiovXG4gIGdldExpbmVEaXN0YW5jZShjb29yMSwgY29vcjIsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbG5nbGF0ID0gbmV3IEFNYXAuTG5nTGF0KGNvb3IxWzBdLCBjb29yMVsxXSk7XG4gICAgY29uc3QgcmVzdWx0ID0gbG5nbGF0LmRpc3RhbmNlKGNvb3IyKTtcbiAgICB0aGlzLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2ssIHtcbiAgICAgIHJlc3VsdDogIXJlc3VsdCA/ICdmYWlsJyA6ICdzdWNjZXNzJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZGlzdGFuY2U6IHJlc3VsdFxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICAvKiogdGVsbCBpZiB0aGUgbWFya2VyIGluIGEgcG9seWdvblxuICAqIEBwYXJhbSBjb29yIHRoZSBtYXJrZXIgcG9zaXRpb25cbiAgKiBAcGFyYW0gcG9seWdvblJlZlxuICAqKi9cbiAgcG9seWdvbkNvbnRhaW5zTWFya2VyKGNvb3IsIHBvbHlnb25SZWYsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcG9seWdvbkNvbSA9IGNvbXBvbmVudHMuZ2V0Q29tcG9uZW50KHBvbHlnb25SZWYpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHBvbHlnb25Db20uY29udGFpbnMoY29vcik7XG4gICAgdGhpcy5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrLCB7XG4gICAgICByZXN1bHQ6ICFyZXN1bHQgPyAnZmFpbCcgOiAnc3VjY2VzcycsXG4gICAgICBkYXRhOiByZXN1bHRcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgbWV0YSA9IHtcbiAgYW1hcDogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdnZXRVc2VyTG9jYXRpb24nLFxuICAgICAgYXJnczogWydzdHJpbmcnLCAnZnVuY3Rpb24nXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdnZXRMaW5lRGlzdGFuY2UnLFxuICAgICAgYXJnczogWydhcnJheScsICdhcnJheScsICdmdW5jdGlvbiddXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAncG9seWdvbkNvbnRhaW5zTWFya2VyJyxcbiAgICAgIGFyZ3M6IFsnYXJyYXknLCAnc3RyaW5nJ11cbiAgICB9XG4gIF1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFdlZXgpIHtcbiAgV2VleC5yZWdpc3RlckFwaU1vZHVsZSgnYW1hcCcsIGFtYXAsIG1ldGEpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9tb2R1bGUvYW1hcC5qcyIsIi8vIG1hbmFnZSBjb21wb25lbnRzXG5cbmltcG9ydCBhbWFwTWFuYWdlciBmcm9tICcuL21hcC1tYW5hZ2VyJztcbmltcG9ydCB2ZW5kb3IgZnJvbSAnLi92ZW5kb3InO1xuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICByZWdpc3RlckNvbXBvbmVudChjb21wb25lbnROYW1lLCBvcHRpb25zLCBpZCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIXRoaXMuX2NvbXBvbmVudHMpIHtcbiAgICAgIHRoaXMuX2NvbXBvbmVudHMgPSB7fTtcbiAgICB9XG4gICAgYW1hcE1hbmFnZXIuYWRkUmVhZHlDYWxsYmFjaygobWFwSW5zKSA9PiB7XG4gICAgICBvcHRzLm1hcCA9IG1hcElucztcbiAgICAgIC8vIG9wdGlvbnMuY2VudGVyID0gbmV3IEFNYXAuTG5nTGF0KG9wdGlvbnMuY2VudGVyWzBdLG9wdGlvbnMuY2VudGVyWzFdKTtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHZlbmRvci5zZXRGaXJzdExldHRlclRvVXBwZXJjYXNlKGNvbXBvbmVudE5hbWUpO1xuICAgICAgaWYgKG9wdHMub2Zmc2V0KSB7XG4gICAgICAgIG9wdHMub2Zmc2V0ID0gbmV3IEFNYXAuUGl4ZWwob3B0cy5vZmZzZXRbMF0sIG9wdHMub2Zmc2V0WzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoaXMgaXMgYSBzZGsgYnVnIHBvbHlmaWxsXG4gICAgICAgIG9wdHMub2Zmc2V0ID0gbmV3IEFNYXAuUGl4ZWwoMCwgMCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICB0aGlzLl9jb21wb25lbnRzW2lkXSA9IG5ldyBBTWFwW2NsYXNzTmFtZV0ob3B0cyk7XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrKHRoaXMuX2NvbXBvbmVudHNbaWRdLCBtYXBJbnMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBnZXRDb21wb25lbnQoaWQpIHtcbiAgICBpZiAoIXRoaXMuX2NvbXBvbmVudHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoIWlkKSB7XG4gICAgICByZXR1cm4gdmVuZG9yLmdldE9iamVjdEZpcnN0VmFsKHRoaXMuX2NvbXBvbmVudHMpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50c1tpZF07XG4gIH0sXG4gIGdldENvbXBvbmVudE1hcCgpIHtcbiAgICByZXR1cm4gYW1hcE1hbmFnZXIuZ2V0TWFwKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29tcG9uZW50cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9zZXJ2aWNlL2NvbXBvbmVudHMuanMiLCIvKiogbWFwIGluc3RhbmNlIG1hbmFnZXJcbiogMjAxNzAyMDRcbioqL1xubGV0IGNhbGxiYWNrU3RhY2sgPSBbXTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0TWFwKGlkLCBtYXApIHtcbiAgICBpZiAoIXRoaXMuX19tYXBzKSB7XG4gICAgICB0aGlzLl9fbWFwcyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLl9fbWFwc1tpZF0gPSBtYXA7XG4gICAgY2FsbGJhY2tTdGFjay5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgY2IobWFwKTtcbiAgICB9KTtcbiAgICBjYWxsYmFja1N0YWNrID0gW107XG4gIH0sXG4gIGdldE1hcChpZCkge1xuICAgIGlmICghdGhpcy5fX21hcHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoIWlkKSB7XG4gICAgICBpZCA9IE9iamVjdC5rZXlzKHRoaXMuX19tYXBzKVswXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX19tYXBzW2lkXTtcbiAgfSxcbiAgYWRkUmVhZHlDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrU3RhY2sucHVzaChjYWxsYmFjayk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvc2VydmljZS9tYXAtbWFuYWdlci5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBnZW5nZXJhdGVSYW5kb21JZChwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkudG9TdHJpbmcoKS5zdWJzdHJpbmcoOSwgMykpICsgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwMDAwLCAxMCk7XG4gIH0sXG4gIHNldEZpcnN0TGV0dGVyVG9VcHBlcmNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHJpbmcoMSk7XG4gIH0sXG4gIGdldE9iamVjdEZpcnN0VmFsKG9iaikge1xuICAgIGlmKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gb2JqW09iamVjdC5rZXlzKG9iailbMF1dXG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9LFxuICAvLyBvZmZzZXQgcG9seWZpbGxcbiAgY2FsY09mZnNldCh4LCB5KSB7XG4gICAgdmFyIGhhbGZZID0geSAvIDI7XG4gICAgdmFyIG5ld1ggPSB4IC0gaGFsZlk7XG4gICAgcmV0dXJuIFtuZXdYLCB5XTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9zZXJ2aWNlL3ZlbmRvci5qcyIsImltcG9ydCBtYXJrZXJNYW5hZ2UgZnJvbSAnLi4vc2VydmljZS9tYXJrZXInO1xuaW1wb3J0IG1hcExvYWRlciBmcm9tICcuLi9zZXJ2aWNlL21hcC1sb2FkZXInO1xuaW1wb3J0IGFtYXBNYW5hZ2VyIGZyb20gJy4uL3NlcnZpY2UvbWFwLW1hbmFnZXInO1xuaW1wb3J0IHZlbmRvciBmcm9tICcuLi9zZXJ2aWNlL3ZlbmRvcic7XG5cblxuY29uc3QgbG9hZGluZ0dpZiA9ICdodHRwOi8vaW1nMS52dWVkLnZhbnRoaW5rLmNuL3Z1ZWQyMTEzZWFhMDYyYWJiYWVlMDQ0MWQxNmE3ODQ4ZDIzZS5naWYnO1xuY29uc3QgcGFyYW1zID0ge1xuICBjZW50ZXI6IHVuZGVmaW5lZCxcbiAgem9vbTogMTEsXG4gIHRvb2xiYXI6IHRydWUsXG4gIHNjYWxlOiBmYWxzZSxcbiAgZ2VvbG9jYXRpb246IGZhbHNlLFxuICByZXNpemVFbmFibGU6IHRydWUsXG4gIHNlYXJjaDogZmFsc2Vcbn07XG5jb25zdCBldmVudHMgPSBbXG4gICd6b29tY2hhbmdlJyxcbiAgJ2RyYWdlbmQnXG5dO1xuLy8gcHJvdG90eXBlIG1ldGhvZHMuXG5jb25zdCBwcm90byA9IHtcbiAgY3JlYXRlKCkge1xuICAgIHRoaXMubWFwd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMubWFwd3JhcC5pZCA9IHZlbmRvci5nZW5nZXJhdGVSYW5kb21JZCgnbWFwJyk7XG4gICAgdGhpcy5tYXB3cmFwLmFwcGVuZCh0aGlzLnJlbmRlckxvYWRpbmdTcGlubmVyKCkpO1xuICAgIHJldHVybiB0aGlzLm1hcHdyYXA7XG4gIH0sXG4gIHJlbmRlckxvYWRpbmdTcGlubmVyKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gNjA7XG4gICAgZWwuc3R5bGUubWFyZ2luID0gJzIwIGF1dG8nO1xuICAgIGVsLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gbG9hZGluZ0dpZjtcbiAgICBlbC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ+mrmOW+t+WcsOWbvuWKoOi9veS4rS4uLi4nKSk7XG4gICAgZWwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgcmV0dXJuIGVsO1xuICB9LFxuICByZWFkeSgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAod2luZG93LkFNYXApIHtcbiAgICAgIHRoaXMubWFwID0gbmV3IEFNYXAuTWFwKHRoaXMubWFwd3JhcC5pZCwgcGFyYW1zKTtcbiAgICAgIEFNYXAucGx1Z2luKFsnQU1hcC5Ub29sQmFyJywgJ0FNYXAuR2VvbG9jYXRpb24nXSwgKCkgPT4ge1xuICAgICAgICBpZiAocGFyYW1zLnNjYWxlKSB7XG4gICAgICAgICAgc2VsZi5tYXAuYWRkQ29udHJvbChuZXcgQU1hcC5Ub29sQmFyKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgICBzZWxmLm1hcC5hZGRDb250cm9sKG5ldyBBTWFwLkdlb2xvY2F0aW9uKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChwYXJhbXMuc2VhcmNoKSB7XG4gICAgICAgIEFNYXAuc2VydmljZSgnQU1hcC5QbGFjZVNlYXJjaCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnBsYWNlU2VhcmNoID0gbmV3IEFNYXAuUGxhY2VTZWFyY2goKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICAgIGFtYXBNYW5hZ2VyLmluaXRNYXAodGhpcy5tYXB3cmFwLmlkLCB0aGlzLm1hcCk7XG4gICAgfVxuICB9LFxuICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgIG1hcmtlck1hbmFnZS5yZW1vdmVNYWtlcihjaGlsZC5kYXRhKTtcbiAgfSxcbiAgaW5pdEV2ZW50cygpIHtcbiAgICBldmVudHMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgICBBTWFwLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFwLCBldmVudE5hbWUsICgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgYXR0ciA9IHtcbiAgY2VudGVyKHZhbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA9PT0gMikge1xuICAgICAgcGFyYW1zLmNlbnRlciA9IHZhbDtcbiAgICAgIGlmICh3aW5kb3cuQU1hcCkge1xuICAgICAgICB0aGlzLm1hcC5zZXRDZW50ZXIocGFyYW1zLmNlbnRlcik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgY29uc3QgZ2VvID0gbmV3IEFNYXAuR2VvbG9jYXRpb24oe1xuICAgICAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWVcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICBnZW8uZ2V0Q3VycmVudFBvc2l0aW9uKCk7XG4gICAgICBBTWFwLmV2ZW50LkFNYXAuZXZlbnQuYWRkTGlzdGVuZXIoZ2VvLCAnY29tcGxldGUnLCAoZGF0YSkgPT4ge1xuICAgICAgICBwYXJhbXMuY2VudGVyID0gW2RhdGEucG9zaXRpb24uZ2V0TG5nKCksIGRhdGEucG9zaXRpb24uZ2V0TGF0KCldO1xuICAgICAgICBzZWxmLm1hcC5zZXRDZW50ZXIocGFyYW1zLmNlbnRlcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHpvb20odmFsKSB7XG4gICAgaWYgKC9eWzAtOV0rJC8udGVzdCh2YWwpKSB7XG4gICAgICBwYXJhbXMuem9vbSA9IHZhbDtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5BTWFwKSB7XG4gICAgICB0aGlzLm1hcC5zZXRab29tKHBhcmFtcy56b29tKTtcbiAgICB9XG4gIH0sXG4gIHNjYWxlKHZhbCkge1xuICAgIHBhcmFtcy5zY2FsZSA9IHZhbDtcbiAgfSxcbiAgZ2VvbG9jYXRpb24odmFsKSB7XG4gICAgcGFyYW1zLmdlb2xvY2F0aW9uID0gdmFsO1xuICB9LFxuICBzZGtLZXkodmFsKSB7XG4gICAgbGV0IGtleSA9ICcnO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIGtleSA9IHZhbC5oNTtcbiAgICB9XG4gICAgbWFwTG9hZGVyLmxvYWQoe1xuICAgICAga2V5OiBrZXlcbiAgICB9LCB0aGlzLm1hcHdyYXAsICgpID0+IHRoaXMucmVhZHkoKSk7XG4gIH0sXG4gIHNlYXJjaCh2YWwpIHtcbiAgICBwYXJhbXMuc2VhcmNoID0gdmFsO1xuICAgIGlmICh3aW5kb3cuQU1hcCkge1xuICAgICAgICBcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGV2ZW50ID0ge1xuICB6b29tY2hhbmdlOiB7XG4gICAgZXh0cmEoKSB7XG4gICAgICByZXR1cm4geyBpc1N1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG4gIH0sXG4gIGRyYWdlbmQ6IHtcbiAgICBleHRyYSgpIHtcbiAgICAgIHJldHVybiB7IGlzU3VjY2VzczogdHJ1ZSB9O1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gaW5pdChXZWV4KSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IFdlZXguQ29tcG9uZW50O1xuICBjb25zdCBleHRlbmQgPSBXZWV4LnV0aWxzLmV4dGVuZDtcblxuICBmdW5jdGlvbiBBbWFwKGRhdGEpIHtcbiAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfVxuICBBbWFwLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIGV4dGVuZChBbWFwLnByb3RvdHlwZSwgcHJvdG8pO1xuICBleHRlbmQoQW1hcC5wcm90b3R5cGUsIHsgYXR0ciB9KTtcbiAgZXh0ZW5kKEFtYXAucHJvdG90eXBlLCB7XG4gICAgc3R5bGU6IGV4dGVuZChPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUuc3R5bGUpLCB7fSlcbiAgfSk7XG4gIGV4dGVuZChBbWFwLnByb3RvdHlwZSwgeyBldmVudCB9KTtcbiAgV2VleC5yZWdpc3RlckNvbXBvbmVudCgnd2VleC1hbWFwJywgQW1hcCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC5qcyIsIi8vIGEgbGliIHRvIG1hbmFnZSBhbGwgbWFya2VyXG5pbXBvcnQgYW1hcE1hbmFnZXIgZnJvbSAnLi9tYXAtbWFuYWdlcic7XG5pbXBvcnQgdmVuZG9yIGZyb20gJy4vdmVuZG9yJztcblxuY29uc3QgbWFya2VycyA9IHt9O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNoYW5nZU1hcmtlcihhcnIsIG1hcCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXJyW2ldO1xuICAgICAgY29uc3QgbWFya2VyID0gdGhpcy5maW5kTWFya2VyKGRhdGEpO1xuICAgICAgaWYgKCFtYXJrZXIpIHtcbiAgICAgICAgdGhpcy5hZGRNYXJrZXIoZGF0YSwgbWFwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTWFya2VyKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgYWRkTWFya2VyKGRhdGEpIHtcbiAgICBjb25zdCBtYXAgPSBhbWFwTWFuYWdlci5nZXRNYXAoKTtcbiAgICBpZiAoIW1hcCkge1xuICAgICAgcmV0dXJuIGFtYXBNYW5hZ2VyLmFkZFJlYWR5Q2FsbGJhY2soKG1hcElucykgPT4ge1xuICAgICAgICB0aGlzLnNldE1hcmtlcihkYXRhLCBtYXBJbnMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNldE1hcmtlcihkYXRhLCBtYXApO1xuICB9LFxuICBzZXRNYXJrZXIoZGF0YSwgbWFwKSB7XG4gICAgbGV0IGljb24gPSBudWxsO1xuICAgIGlmIChkYXRhLmljb24pIHtcbiAgICAgIGljb24gPSBuZXcgQU1hcC5JY29uKHtcbiAgICAgICAgaW1hZ2U6IGRhdGEuaWNvbixcbiAgICAgICAgc2l6ZTogbmV3IEFNYXAuU2l6ZSg2NCwgNjQpXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgbWFya2VyID0gbmV3IEFNYXAuTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiBkYXRhLnBvc2l0aW9uLFxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICBpY29uOiBpY29uLFxuICAgICAgbWFwOiBtYXAsXG4gICAgfSk7XG4gICAgbWFya2Vyc1t0aGlzLl9fZ2V0TWlkKGRhdGEpXSA9IG1hcmtlcjtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKGRhdGEuZXZlbnRzLCBtYXJrZXIpO1xuICB9LFxuICByZW1vdmVNYWtlcihkYXRhKSB7XG4gICAgY29uc3QgbWFya2VyID0gdGhpcy5maW5kTWFya2VyKGRhdGEpO1xuICAgIG1hcmtlci5zZXRNYXAobnVsbCk7XG4gIH0sXG4gIHVwZGF0ZU1hcmtlcihkYXRhLCBhdHRyLCB2YWwpIHtcbiAgICBjb25zdCBtYXJrZXIgPSB0aGlzLmZpbmRNYXJrZXIoZGF0YSk7XG4gICAgaWYgKCFtYXJrZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgbWV0aG9kID0gdmVuZG9yLnNldEZpcnN0TGV0dGVyVG9VcHBlcmNhc2UoYXR0cik7XG4gICAgbWFya2VyWydzZXQnICsgbWV0aG9kXSh2YWwpO1xuICB9LFxuICByZWdpc3RlckV2ZW50cyhldmVudHMsIG1hcmtlcikge1xuICAgIGlmICh0eXBlb2YgZXZlbnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZXZlbnRzKSB7XG4gICAgICAgIEFNYXAuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCBrZXksIGV2ZW50c1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJlbW92ZU1hcmtlcihkYXRhKSB7XG4gICAgbGV0IG1hcmtlciA9IHRoaXMuZmluZE1hcmtlcihkYXRhKTtcbiAgICBpZiAobWFya2VyKSB7XG4gICAgICBtYXJrZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICBtYXJrZXIgPSBudWxsO1xuICAgIH1cbiAgfSxcbiAgZmluZE1hcmtlcihkYXRhKSB7XG4gICAgY29uc3QgbWlkID0gdGhpcy5fX2dldE1pZChkYXRhKTtcbiAgICByZXR1cm4gbWFya2Vyc1ttaWRdO1xuICB9LFxuICBfX2dldE1pZChkYXRhKSB7XG4gICAgcmV0dXJuICdtaWQtJyArIGRhdGEucmVmIHx8IGRhdGEucG9zaXRpb24uam9pbignLScpO1xuICB9LFxuICBfX2lzTWFrZXIob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iai5DTEFTU19OQU1FID09PSAnQU1hcC5NYXJrZXInO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL3NlcnZpY2UvbWFya2VyLmpzIiwiLy8gbG9hZCBtYXAgc2RrXG5jb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcbiAga2V5OiAnJyxcbiAgdjogJzEuMycsXG4gIHVybDogJ2h0dHBzOi8vd2ViYXBpLmFtYXAuY29tL21hcHMnLFxuICBjYWxsYmFjazogJ2FtYXBJbml0Q29tcG9uZW50J1xufTtcbmNvbnN0IGdlbmdlcmF0ZVNjcmlwdFVybCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgY29uc3QgcGFyYW1BcnIgPSBbXTtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGtleSAhPT0gJ3VybCcpIHtcbiAgICAgIHBhcmFtQXJyLnB1c2goZW5jb2RlVVJJKGtleSArICc9JyArIG9ialtrZXldKSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHVybCA9IG9iai51cmwgKz0gJz8nICsgcGFyYW1BcnIuam9pbignJicpO1xuICByZXR1cm4gdXJsO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvYWQoY29uZmlnLCBjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbmV3Q29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9DT05GSUcsIGNvbmZpZyk7XG4gICAgY29uc3QgbGliID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgbGliLmFzeW5jID0gdHJ1ZTtcbiAgICBsaWIuZGVmZXIgPSB0cnVlO1xuICAgIGxpYi5zcmMgPSBnZW5nZXJhdGVTY3JpcHRVcmwobmV3Q29uZmlnKTtcbiAgICBjb25zb2xlLmxvZyhsaWIuc3JjKTtcbiAgICB3aW5kb3cuYW1hcEluaXRDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cubWFwbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpYik7XG4gICAgdGhpcy5sb2FkVGltZW91dChjb250YWluZXIpO1xuICB9LFxuICBsb2FkVGltZW91dCh3cmFwKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXdpbmRvdy5BbWFwKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCfph43mlrDliqDovb0nKSk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgd3JhcC5jaGlsZE5vZGVzWzBdLnJlbW92ZSgpO1xuICAgICAgICB3cmFwLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwMCk7XG4gIH1cblxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsdWdpbnMvd2VleC1hbWFwL3dlYi9zZXJ2aWNlL21hcC1sb2FkZXIuanMiLCJpbXBvcnQgbWFya2VyTWFuYWdlciBmcm9tICcuLi9zZXJ2aWNlL21hcmtlcic7XG5cbmNvbnN0IHBhcmFtcyA9IHtcbiAgcG9pc3Rpb246IFtdLFxuICB0aXRsZTogJycsXG4gIGljb246ICcnXG59O1xuXG4vLyBwcm90b3R5cGUgbWV0aG9kcy5cbmNvbnN0IHByb3RvID0ge1xuICBjcmVhdGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEuYXR0cjtcbiAgICBtYXJrZXJNYW5hZ2VyLmFkZE1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogZGF0YS5wb3NpdGlvbixcbiAgICAgIGljb246IGRhdGEuaWNvbixcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgcmVmOiB0aGlzLmRhdGEucmVmLFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjbGljaycpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWFwOiB3aW5kb3cuQW1hcFxuICAgIH0pO1xuICAgIHJldHVybiBub2RlO1xuICB9LFxuICB1cGRhdGVBdHRycyhhdHRycykge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhdHRycyk7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHJlZjogdGhpcy5kYXRhLnJlZlxuICAgIH07XG4gICAga2V5cy5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBtYXJrZXJNYW5hZ2VyLnVwZGF0ZU1hcmtlcihkYXRhLCBrLCBhdHRyc1trXSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGF0dHIgPSB7XG4gIHBvc2l0aW9uKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwubGVuZ3RoID09PSAyKSB7XG4gICAgICBwYXJhbXMucG9zaXRpb24gPSB2YWw7XG4gICAgfVxuICB9LFxuICBpY29uKHZhbCkge1xuICAgIHBhcmFtcy5pY29uID0gdmFsO1xuICB9LFxuICB0aXRsZSh2YWwpIHtcbiAgICBwYXJhbXMudGl0bGUgPSB2YWw7XG4gIH1cbn07XG5cbmNvbnN0IGV2ZW50ID0ge1xuICBjbGljazoge1xuICAgIGV4dHJhKCkge1xuICAgICAgcmV0dXJuIHsgaXNTdWNjZXNzOiB0cnVlIH07XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBpbml0KFdlZXgpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gV2VleC5Db21wb25lbnQ7XG4gIGNvbnN0IGV4dGVuZCA9IFdlZXgudXRpbHMuZXh0ZW5kO1xuXG4gIGZ1bmN0aW9uIEFtYXBNYWtlcihkYXRhKSB7XG4gICAgQ29tcG9uZW50LmNhbGwodGhpcywgZGF0YSk7XG4gIH1cbiAgQW1hcE1ha2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIGV4dGVuZChBbWFwTWFrZXIucHJvdG90eXBlLCBwcm90byk7XG4gIGV4dGVuZChBbWFwTWFrZXIucHJvdG90eXBlLCB7IGF0dHIgfSk7XG4gIGV4dGVuZChBbWFwTWFrZXIucHJvdG90eXBlLCB7IGV2ZW50IH0pO1xuICBXZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCd3ZWV4LWFtYXAtbWFya2VyJywgQW1hcE1ha2VyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLW1hcmtlci5qcyIsImltcG9ydCBjb21wb25lbnRzIGZyb20gJy4uL3NlcnZpY2UvY29tcG9uZW50cyc7XG5pbXBvcnQgdmVuZG9yIGZyb20gJy4uL3NlcnZpY2UvdmVuZG9yJztcblxuY29uc3QgY29tcG9uZW50TmFtZSA9ICdjaXJjbGUnO1xuLy8gcHJvdG90eXBlIG1ldGhvZHMuXG5jb25zdCBwcm90byA9IHtcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLmF0dHI7XG4gICAgY29uc3QgY29tSWQgPSBkYXRhLnJlZiB8fCB2ZW5kb3IuZ2VuZ2VyYXRlUmFuZG9tSWQoY29tcG9uZW50TmFtZSk7XG4gICAgaWYgKGRhdGEuY2VudGVyICYmIEFycmF5LmlzQXJyYXkoZGF0YS5jZW50ZXIpKSB7XG4gICAgICBjb21wb25lbnRzLnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudE5hbWUsIHtcbiAgICAgICAgY2VudGVyOiBkYXRhLmNlbnRlcixcbiAgICAgICAgcmFkaXVzOiBkYXRhLnJhZGl1cyxcbiAgICAgICAgZmlsbENvbG9yOiBkYXRhLmZpbGxDb2xvcixcbiAgICAgICAgZmlsT3BhY2l0eTogZGF0YS5maWxsT3BhY2l0eSxcbiAgICAgICAgc3Ryb2tlV2VpZ2h0OiBkYXRhLnN0cm9rZVdpZHRoLFxuICAgICAgICBzdHJva2VPcGFjaXR5OiBkYXRhLnN0cm9rZU9wYWNpdHksXG4gICAgICAgIHN0cm9rZUNvbG9yOiBkYXRhLnN0cm9rZUNvbG9yLFxuICAgICAgICBzdHJva2VTdHlsZTogZGF0YS5zdHJva2VTdHlsZSxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY2xpY2snKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LCBjb21JZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignYXR0cmlidXRlIGNlbnRlciBtdXN0IGJlIGFuIGFycmF5LicpO1xuICAgIH1cbiAgICB0aGlzLl9jb21JZCA9IGNvbUlkO1xuICAgIHJldHVybiBub2RlO1xuICB9XG59O1xuXG5jb25zdCBhdHRyID0ge1xuICBjZW50ZXIodmFsKSB7XG4gICAgY29uc3QgY29tID0gY29tcG9uZW50cy5nZXRDb21wb25lbnQodGhpcy5fY29tSWQpO1xuICAgIGlmIChjb20pIHtcbiAgICAgIGNvbS5zZXRDZW50ZXIodmFsKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGV2ZW50ID0ge1xuICBjbGljazoge1xuICAgIGV4dHJhKCkge1xuICAgICAgcmV0dXJuIHsgaXNTdWNjZXNzOiB0cnVlIH07XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBpbml0KFdlZXgpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gV2VleC5Db21wb25lbnQ7XG4gIGNvbnN0IGV4dGVuZCA9IFdlZXgudXRpbHMuZXh0ZW5kO1xuXG4gIGZ1bmN0aW9uIEFtYXBDaXJjbGUoZGF0YSkge1xuICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9XG4gIEFtYXBDaXJjbGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb21wb25lbnQucHJvdG90eXBlKTtcbiAgZXh0ZW5kKEFtYXBDaXJjbGUucHJvdG90eXBlLCBwcm90byk7XG4gIGV4dGVuZChBbWFwQ2lyY2xlLnByb3RvdHlwZSwgeyBhdHRyIH0pO1xuICBleHRlbmQoQW1hcENpcmNsZS5wcm90b3R5cGUsIHsgZXZlbnQgfSk7XG4gIFdlZXgucmVnaXN0ZXJDb21wb25lbnQoJ3dlZXgtYW1hcC1jaXJjbGUnLCBBbWFwQ2lyY2xlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbHVnaW5zL3dlZXgtYW1hcC93ZWIvY29tcG9uZW50cy9hbWFwLWNpcmNsZS5qcyIsImltcG9ydCBjb21wb25lbnRzIGZyb20gJy4uL3NlcnZpY2UvY29tcG9uZW50cyc7XG5pbXBvcnQgdmVuZG9yIGZyb20gJy4uL3NlcnZpY2UvdmVuZG9yJztcblxuY29uc3QgY29tcG9uZW50TmFtZSA9ICdwb2x5Z29uJztcbi8vIHByb3RvdHlwZSBtZXRob2RzLlxuY29uc3QgcHJvdG8gPSB7XG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YS5hdHRyO1xuICAgIGNvbnN0IGNvbUlkID0gdGhpcy5kYXRhLnJlZiB8fCB2ZW5kb3IuZ2VuZ2VyYXRlUmFuZG9tSWQoY29tcG9uZW50TmFtZSk7XG4gICAgaWYgKGRhdGEucGF0aCAmJiBBcnJheS5pc0FycmF5KGRhdGEucGF0aCkpIHtcbiAgICAgIGNvbXBvbmVudHMucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50TmFtZSwge1xuICAgICAgICBwYXRoOiBkYXRhLnBhdGgsXG4gICAgICAgIGZpbGxDb2xvcjogZGF0YS5maWxsQ29sb3IsXG4gICAgICAgIGZpbE9wYWNpdHk6IGRhdGEuZmlsbE9wYWNpdHksXG4gICAgICAgIHN0cm9rZVdlaWdodDogZGF0YS5zdHJva2VXaWR0aCxcbiAgICAgICAgc3Ryb2tlT3BhY2l0eTogZGF0YS5zdHJva2VPcGFjaXR5LFxuICAgICAgICBzdHJva2VDb2xvcjogZGF0YS5zdHJva2VDb2xvcixcbiAgICAgICAgc3Ryb2tlU3R5bGU6IGRhdGEuc3Ryb2tlU3R5bGUsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NsaWNrJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSwgY29tSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2F0dHJpYnV0ZSBwYXRoIG11c3QgYmUgYW4gYXJyYXkuJyk7XG4gICAgfVxuICAgIHRoaXMuX2NvbUlkID0gY29tSWQ7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn07XG5cbmNvbnN0IGF0dHIgPSB7XG5cbn07XG5cbmNvbnN0IGV2ZW50ID0ge1xuICBjbGljazoge1xuICAgIGV4dHJhKCkge1xuICAgICAgcmV0dXJuIHsgaXNTdWNjZXNzOiB0cnVlIH07XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBpbml0KFdlZXgpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gV2VleC5Db21wb25lbnQ7XG4gIGNvbnN0IGV4dGVuZCA9IFdlZXgudXRpbHMuZXh0ZW5kO1xuXG4gIGZ1bmN0aW9uIEFtYXBQb2x5Z29uKGRhdGEpIHtcbiAgICBDb21wb25lbnQuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfVxuICBBbWFwUG9seWdvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENvbXBvbmVudC5wcm90b3R5cGUpO1xuICBleHRlbmQoQW1hcFBvbHlnb24ucHJvdG90eXBlLCBwcm90byk7XG4gIGV4dGVuZChBbWFwUG9seWdvbi5wcm90b3R5cGUsIHsgYXR0ciB9KTtcbiAgZXh0ZW5kKEFtYXBQb2x5Z29uLnByb3RvdHlwZSwgeyBldmVudCB9KTtcbiAgV2VleC5yZWdpc3RlckNvbXBvbmVudCgnd2VleC1hbWFwLXBvbHlnb24nLCBBbWFwUG9seWdvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC1wb2x5Z29uLmpzIiwiaW1wb3J0IGNvbXBvbmVudHMgZnJvbSAnLi4vc2VydmljZS9jb21wb25lbnRzJztcbmltcG9ydCB2ZW5kb3IgZnJvbSAnLi4vc2VydmljZS92ZW5kb3InO1xuXG5jb25zdCBjb21wb25lbnROYW1lID0gJ3BvbHlsaW5lJztcblxubGV0IGRhdGEgPSB7fTtcbi8vIHByb3RvdHlwZSBtZXRob2RzLlxuY29uc3QgcHJvdG8gPSB7XG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0YSA9IHRoaXMuZGF0YS5hdHRyO1xuICAgIGNvbnN0IGNvbUlkID0gZGF0YS5yZWYgfHwgdmVuZG9yLmdlbmdlcmF0ZVJhbmRvbUlkKGNvbXBvbmVudE5hbWUpO1xuICAgIGlmIChkYXRhLnBhdGggJiYgQXJyYXkuaXNBcnJheShkYXRhLnBhdGgpKSB7XG4gICAgICBjb21wb25lbnRzLnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudE5hbWUsIHtcbiAgICAgICAgcGF0aDogZGF0YS5wYXRoLFxuICAgICAgICBzdHJva2VXZWlnaHQ6IGRhdGEuc3Ryb2tlV2lkdGgsXG4gICAgICAgIHN0cm9rZU9wYWNpdHk6IGRhdGEuc3Ryb2tlT3BhY2l0eSxcbiAgICAgICAgc3Ryb2tlQ29sb3I6IGRhdGEuc3Ryb2tlQ29sb3IsXG4gICAgICAgIHN0cm9rZVN0eWxlOiBkYXRhLnN0cm9rZVN0eWxlLFxuICAgICAgICBsaW5lSm9pbjogJ3JvdW5kJyxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY2xpY2snKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LCBjb21JZCwgKGNvbSkgPT4ge1xuICAgICAgICBjb20uc2V0UGF0aChkYXRhLnBhdGgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignYXR0cmlidXRlIHBhdGggbXVzdCBiZSBhbiBhcnJheS4nKTtcbiAgICB9XG4gICAgdGhpcy5fY29tSWQgPSBjb21JZDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufTtcblxuY29uc3QgYXR0ciA9IHtcbiAgcGF0aCh2YWwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbC5sZW5ndGggPj0gMikge1xuICAgICAgZGF0YS5wYXRoID0gdmFsO1xuICAgICAgY29uc3QgY29tID0gY29tcG9uZW50cy5nZXRDb21wb25lbnQodGhpcy5fY29tSWQpO1xuICAgICAgaWYgKGNvbSkge1xuICAgICAgICBjb20uc2V0UGF0aCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZXZlbnQgPSB7XG4gIGNsaWNrOiB7XG4gICAgZXh0cmEoKSB7XG4gICAgICByZXR1cm4geyBpc1N1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb25zdCBDb21wb25lbnQgPSBXZWV4LkNvbXBvbmVudDtcbiAgY29uc3QgZXh0ZW5kID0gV2VleC51dGlscy5leHRlbmQ7XG5cbiAgZnVuY3Rpb24gQW1hcFBvbHlnb24ob3B0cykge1xuICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIG9wdHMpO1xuICB9XG4gIEFtYXBQb2x5Z29uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIGV4dGVuZChBbWFwUG9seWdvbi5wcm90b3R5cGUsIHByb3RvKTtcbiAgZXh0ZW5kKEFtYXBQb2x5Z29uLnByb3RvdHlwZSwgeyBhdHRyIH0pO1xuICBleHRlbmQoQW1hcFBvbHlnb24ucHJvdG90eXBlLCB7IGV2ZW50IH0pO1xuICBXZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCd3ZWV4LWFtYXAtcG9seWxpbmUnLCBBbWFwUG9seWdvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC1wb2x5bGluZS5qcyIsImltcG9ydCBjb21wb25lbnRzIGZyb20gJy4uL3NlcnZpY2UvY29tcG9uZW50cyc7XG5pbXBvcnQgdmVuZG9yIGZyb20gJy4uL3NlcnZpY2UvdmVuZG9yJztcblxuY29uc3QgY29tcG9uZW50TmFtZSA9ICdJbmZvV2luZG93Jztcbi8vIHByb3RvdHlwZSBtZXRob2RzLlxuY29uc3QgcHJvdG8gPSB7XG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm9kZS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLmF0dHI7XG4gICAgY29uc3QgY29tSWQgPSB0aGlzLmRhdGEucmVmIHx8IHZlbmRvci5nZW5nZXJhdGVSYW5kb21JZChjb21wb25lbnROYW1lKTtcbiAgICB0aGlzLmFkZEFwcGVuZEhhbmRsZXIoKCkgPT4ge1xuICAgICAgaWYgKGRhdGEucG9zaXRpb24gJiYgQXJyYXkuaXNBcnJheShkYXRhLnBvc2l0aW9uKSkge1xuICAgICAgICBjb21wb25lbnRzLnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudE5hbWUsIHtcbiAgICAgICAgICBwb3NpdGlvbjogZGF0YS5wb3NpdGlvbixcbiAgICAgICAgICBvZmZzZXQ6IGRhdGEub2Zmc2V0LFxuICAgICAgICAgIGlzQ3VzdG9tOiB0cnVlLFxuICAgICAgICB9LCBjb21JZCwgKGNvbSwgbWFwKSA9PiB7XG4gICAgICAgICAgbGV0IGNvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZS5pbm5lckhUTUwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29udGVudCA9IHRoaXMubm9kZS5pbm5lckhUTUw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICBjb20uc2V0Q29udGVudChjb250ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGRhdGEub3BlbiAmJiBjb250ZW50KSB7XG4gICAgICAgICAgICBjb20ub3BlbihtYXAsIHRoaXMuZGF0YS5hdHRyLnBvc2l0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tLmNsb3NlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignYXR0cmlidXRlIGNlbnRlciBtdXN0IGJlIGFuIGFycmF5LicpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX2NvbUlkID0gY29tSWQ7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn07XG5cbmNvbnN0IGF0dHIgPSB7XG4gIG9wZW4odmFsKSB7XG4gICAgY29uc3QgY29tID0gY29tcG9uZW50cy5nZXRDb21wb25lbnQodGhpcy5kYXRhLnJlZik7XG4gICAgY29uc3QgbWFwID0gY29tcG9uZW50cy5nZXRDb21wb25lbnRNYXAoKTtcbiAgICBpZiAoY29tKSB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGNvbS5vcGVuKG1hcCwgdGhpcy5kYXRhLmF0dHIucG9zaXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBldmVudCA9IHtcbn07XG5cbmZ1bmN0aW9uIGluaXQoV2VleCkge1xuICBjb25zdCBDb21wb25lbnQgPSBXZWV4LkNvbXBvbmVudDtcbiAgY29uc3QgZXh0ZW5kID0gV2VleC51dGlscy5leHRlbmQ7XG5cbiAgZnVuY3Rpb24gQW1hcEluZm9XaW5kb3coZGF0YSkge1xuICAgIENvbXBvbmVudC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9XG4gIEFtYXBJbmZvV2luZG93LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIGV4dGVuZChBbWFwSW5mb1dpbmRvdy5wcm90b3R5cGUsIHByb3RvKTtcbiAgZXh0ZW5kKEFtYXBJbmZvV2luZG93LnByb3RvdHlwZSwgeyBhdHRyIH0pO1xuICBleHRlbmQoQW1hcEluZm9XaW5kb3cucHJvdG90eXBlLCB7IGV2ZW50IH0pO1xuICBXZWV4LnJlZ2lzdGVyQ29tcG9uZW50KCd3ZWV4LWFtYXAtaW5mby13aW5kb3cnLCBBbWFwSW5mb1dpbmRvdyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGx1Z2lucy93ZWV4LWFtYXAvd2ViL2NvbXBvbmVudHMvYW1hcC1pbmZvLXdpbmRvdy5qcyIsIiAvKipcbiAgKiBJbml0IHdlZXggaW5zdGFuY2UgZGVwZW5kaW5nIG9uIHRoZSB1cmwgcGFyYW1zLlxuICAqIFRoZXJlIGFyZSB0aHJlZSB3YXlzIHRvIGxvYWQgd2VleCBidW5kbGVzLCBkZXBlbmRzIG9uIHRoZVxuICAqIHBhcmFtZXRlciAnbG9hZGVyJyBpbiB0aGUgdXJsOlxuICAqXG4gICogICArIHhocjogdXNlIFhNTEh0dHBSZXF1ZXN0LiBQYXJhbWV0ZXIgJ3BhZ2UnIHNob3VsZCBiZVxuICAqICAgdGhlIGJ1bmRsZSdzIHVybC5cbiAgKiAgICsgc291cmNlOiB1c2UgdGhlIHRyYW5zZm9ybWVkIGNvZGUgaXRzZWxmLiAncGFnZScgc2hvdWxkXG4gICogICBiZSB0aGUgdHJhbnNmb3JtZWQgd2VleCBidW5kbGUuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gYnVuZGxlIC0gSXQgaGFzIGRpZmZlcmVudCBtZWFuaW5nIGRlcGVuZHMgb25cbiAgKiAgIHRoZSB0eXBlIG9mIGxvYWRlci5cbiAgKi9cbiAgXG5cbiAgXG4gKGZ1bmN0aW9uICgpIHtcbiAgIGZ1bmN0aW9uIGdldFVybFBhcmFtKGtleSkge1xuICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cCgnWz98Jl0nICsga2V5ICsgJz0oW14mXSspJylcbiAgICAgdmFyIG1hdGNoID0gbG9jYXRpb24uc2VhcmNoLm1hdGNoKHJlZylcbiAgICAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdXG4gICB9XG4gICB2YXIgbG9hZGVyID0gZ2V0VXJsUGFyYW0oJ2xvYWRlcicpIHx8ICd4aHInO1xuICAgdmFyIHBhZ2UgPSBnZXRVcmxQYXJhbSgncGFnZScpIHx8ICcuLi9kaXN0L2luZGV4LmpzJztcbiAgIHdpbmRvdy53ZWV4LmluaXQoe1xuICAgICBhcHBJZDogbG9jYXRpb24uaHJlZlxuICAgICAsIGxvYWRlcjogbG9hZGVyXG4gICAgICwgc291cmNlOiBwYWdlXG4gICAgICwgcm9vdElkOiAnd2VleCdcbiAgIH0pXG4gfSkoKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2ViL2pzL2luaXQuanMiXSwic291cmNlUm9vdCI6IiJ9