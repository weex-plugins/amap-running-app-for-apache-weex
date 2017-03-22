// manage components

import amapManager from './map-manager';
import vendor from './vendor';

const components = {
  registerComponent(componentName, options, id, callback) {
    const opts = options || {};
    if (!this._components) {
      this._components = {};
    }
    amapManager.addReadyCallback((mapIns) => {
      opts.map = mapIns;
      // options.center = new AMap.LngLat(options.center[0],options.center[1]);
      const className = vendor.setFirstLetterToUppercase(componentName);
      if (opts.offset) {
        opts.offset = new AMap.Pixel(opts.offset[0], opts.offset[1]);
      } else {
        // this is a sdk bug polyfill
        opts.offset = new AMap.Pixel(0, 0);
      }
      console.log(id);
      this._components[id] = new AMap[className](opts);
      if (typeof callback === 'function') {
        callback(this._components[id], mapIns);
      }
    });
  },
  getComponent(id) {
    if (!this._components) {
      return null;
    }
    if (!id) {
      return vendor.getObjectFirstVal(this._components);
    }
    
    return this._components[id];
  },
  getComponentMap() {
    return amapManager.getMap();
  }
};

module.exports = components;
