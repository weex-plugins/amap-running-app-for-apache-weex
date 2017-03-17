import components from '../service/components';
// AMap module
const amap = {
  /** get user loaction by browser and IP
  * @param {function} callback
  * @param {function} errorCallback
  **/
  getUserLocation(mapRef, callback) {
    const self = this;
    const geo = new AMap.Geolocation({
      enableHighAccuracy: true,
      timeout: 10000
    });
    geo.getCurrentPosition((status, res) => {
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
  getLineDistance(coor1, coor2, callback) {
    const lnglat = new AMap.LngLat(coor1[0], coor1[1]);
    const result = lnglat.distance(coor2);
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
  polygonContainsMarker(coor, polygonRef, callback) {
    const polygonCom = components.getComponent(polygonRef);
    const result = polygonCom.contains(coor);
    this.sender.performCallback(callback, {
      result: !result ? 'fail' : 'success',
      data: result
    });
  }
};

const meta = {
  amap: [
    {
      name: 'getUserLocation',
      args: ['string', 'function'],
    },
    {
      name: 'getLineDistance',
      args: ['array', 'array', 'function']
    },
    {
      name: 'polygonContainsMarker',
      args: ['array', 'string']
    }
  ]
};

module.exports = function (Weex) {
  Weex.registerApiModule('amap', amap, meta);
};
