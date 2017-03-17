/** map instance manager
* 20170204
**/
let callbackStack = [];
module.exports = {
  initMap(id, map) {
    if (!this.__maps) {
      this.__maps = {};
    }
    this.__maps[id] = map;
    callbackStack.forEach((cb) => {
      cb(map);
    });
    callbackStack = [];
  },
  getMap(id) {
    if (!this.__maps) {
      return null;
    }
    if (!id) {
      id = Object.keys(this.__maps)[0];
    }
    return this.__maps[id];
  },
  addReadyCallback(callback) {
    callbackStack.push(callback);
  }
};
