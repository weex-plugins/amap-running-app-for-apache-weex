module.exports = {
  calcTotal(arr, k) {
    let sum = 0;
    arr.forEach((item) => {
      if (k) {
        sum += 1 * item[k];
      } else {
        sum += item;
      }
    });
    return sum;
  },
  setTimeFormat(time) {
    const h = this.setZero(Math.floor(time / 3600));
    const i = this.setZero(Math.floor((time % 3600) / 60));
    const s = this.setZero(time % 60);
    return h + ':' + i + ':' + s;
  },
  kmtom(miles) {
    return (miles / 1000).toFixed(2);
  },
  getDate() {
    const d = new Date();
    const datestring = d.getFullYear() + '-' + ('0' + (1 + d.getMonth())).slice('-2') + '-' + ('0' + d.getDate()).slice(-2)
     + ' ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
    return datestring;
  },
  setZero(number) {
    return number < 10 ? '0' + number : number;
  },
  calcSpeed(distance, time) {
    return ((distance / time) * 3.6).toFixed(2);
  },
  setPosition(path) {
    const l = path.length;
    let longitudes = 0;
    let latitudes = 0;
    path.forEach((item) => {
      longitudes += item[1];
      latitudes += item[0];
    });
    return [(latitudes / l).toFixed(6), (longitudes / l).toFixed(6)];
  },
  extend(obj1, obj2) {
    for (const p in obj2) {
      try {
        if (obj2[p].constructor === Object) {
          obj1[p] = this.extend(obj1[p], obj2[p]);
        } else {
          obj1[p] = obj2[p];
        }
      } catch (e) {
        obj1[p] = obj2[p];
      }
    }
    return obj1;
  },
  setBundleUrl(url, jsFile) {
    const bundleUrl = url;
    let host = '';
    let path = '';
    let nativeBase;
    const isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
    const isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
      nativeBase = 'file://assets/dist';
    } else if (isiOSAssets) {
      // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
      // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
      nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    } else {
      const matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
      const matchFirstPath = /\/\/.+\/([^\/]+?)\//.exec(bundleUrl);
      if (matches && matches.length >= 2) {
        host = matches[1];
      }
      if (matchFirstPath && matchFirstPath.length >= 2) {
        path = matchFirstPath[1];
      }
      nativeBase = 'http://' + host + '/';
    }
    const h5Base = './index.html?page=';
    // in Native
    let base = nativeBase;
    if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
      // check if in weexpack project
      if (path === 'web' || path === 'dist') {
        base = h5Base + '/dist/';
      } else {
        base = h5Base + '';
      }
    } else {
      base = nativeBase + path + '/';
    }

    const newUrl = base + jsFile;
    return newUrl;
  },
  getUrlParam(url, key) {
    const reg = new RegExp('[?|&]' + key + '=([^&]+)');
    const match = url.match(reg);
    return match && match[1];
  }
};
