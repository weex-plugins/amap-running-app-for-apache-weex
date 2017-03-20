module.exports = {
  setTimeFormat(time) {
    const h = this.setZero(Math.floor(time / 3600));
    const i = this.setZero(Math.floor((time % 3600) / 60));
    const s = this.setZero(time % 60);
    return h + ':' + i + ':' + s;
  },
  setZero(number) {
    return number < 10 ? '0' + number : number;
  },
  calcSpeed(distance, time) {
    return ((distance / time) * 3.6).toFixed(2);
  },
  setBundleUrl(url, jsFile) {
    const bundleUrl = url;
    let host = '';
    let path = '';
    let nativeBase;
    const isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
    const isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
      nativeBase = 'file://assets/';
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
  }
};
