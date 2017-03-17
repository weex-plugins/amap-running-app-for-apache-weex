// a lib to manage all marker
import amapManager from './map-manager';
import vendor from './vendor';

const markers = {};
module.exports = {
  changeMarker(arr, map) {
    for (let i = 0; i < arr.length; i++) {
      const data = arr[i];
      const marker = this.findMarker(data);
      if (!marker) {
        this.addMarker(data, map);
      } else {
        this.removeMarker(data);
      }
    }
  },
  addMarker(data) {
    const map = amapManager.getMap();
    if (!map) {
      return amapManager.addReadyCallback((mapIns) => {
        this.setMarker(data, mapIns);
      });
    }
    return this.setMarker(data, map);
  },
  setMarker(data, map) {
    let icon = null;
    if (data.icon) {
      icon = new AMap.Icon({
        image: data.icon,
        size: new AMap.Size(64, 64)
      });
    }
    const marker = new AMap.Marker({
      position: data.position,
      title: data.title,
      icon: icon,
      map: map,
    });
    markers[this.__getMid(data)] = marker;
    this.registerEvents(data.events, marker);
  },
  removeMaker(data) {
    const marker = this.findMarker(data);
    marker.setMap(null);
  },
  updateMarker(data, attr, val) {
    const marker = this.findMarker(data);
    if (!marker) {
      return false;
    }
    const method = vendor.setFirstLetterToUppercase(attr);
    marker['set' + method](val);
  },
  registerEvents(events, marker) {
    if (typeof events === 'object') {
      for (const key in events) {
        AMap.event.addListener(marker, key, events[key]);
      }
    }
  },
  removeMarker(data) {
    let marker = this.findMarker(data);
    if (marker) {
      marker.visible = true;
      marker = null;
    }
  },
  findMarker(data) {
    const mid = this.__getMid(data);
    return markers[mid];
  },
  __getMid(data) {
    return 'mid-' + data.ref || data.position.join('-');
  },
  __isMaker(obj) {
    return typeof obj === 'object' && obj.CLASS_NAME === 'AMap.Marker';
  }
};
