// load map sdk
const DEFAULT_CONFIG = {
  key: '',
  v: '1.3',
  url: 'https://webapi.amap.com/maps',
  callback: 'amapInitComponent'
};
const gengerateScriptUrl = function (obj) {
  const paramArr = [];
  for (const key in obj) {
    if (key !== 'url') {
      paramArr.push(encodeURI(key + '=' + obj[key]));
    }
  }
  const url = obj.url += '?' + paramArr.join('&');
  return url;
};

module.exports = {
  load(config, container, callback) {
    const newConfig = Object.assign({}, DEFAULT_CONFIG, config);
    const lib = document.createElement('script');
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
  loadTimeout(wrap) {
    setTimeout(() => {
      if (!window.Amap) {
        const el = document.createElement('button');
        el.appendChild(document.createTextNode('重新加载'));
        el.addEventListener('click', () => {
          location.reload();
        });
        wrap.childNodes[0].remove();
        wrap.appendChild(el);
      }
    }, 10000);
  }

};
