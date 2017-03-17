import markerManager from '../service/marker';

const params = {
  poistion: [],
  title: '',
  icon: ''
};

// prototype methods.
const proto = {
  create() {
    const node = document.createElement('div');
    const data = this.data.attr;
    markerManager.addMarker({
      position: data.position,
      icon: data.icon,
      title: data.title,
      ref: this.data.ref,
      events: {
        click: () => {
          this.dispatchEvent('click');
        }
      },
      map: window.Amap
    });
    return node;
  },
  updateAttrs(attrs) {
    const keys = Object.keys(attrs);
    const data = {
      ref: this.data.ref
    };
    keys.forEach((k) => {
      markerManager.updateMarker(data, k, attrs[k]);
    });
  }
};

const attr = {
  position(val) {
    console.log(val);
    console.log(this);
    if (Array.isArray(val) && val.length === 2) {
      params.position = val;
    }
  },
  icon(val) {
    params.icon = val;
  },
  title(val) {
    params.title = val;
  }
};

const event = {
  click: {
    extra() {
      return { isSuccess: true };
    }
  }
};

function init(Weex) {
  const Component = Weex.Component;
  const extend = Weex.utils.extend;

  function AmapMaker(data) {
    Component.call(this, data);
  }
  AmapMaker.prototype = Object.create(Component.prototype);
  extend(AmapMaker.prototype, proto);
  extend(AmapMaker.prototype, { attr });
  extend(AmapMaker.prototype, { event });
  Weex.registerComponent('weex-amap-marker', AmapMaker);
}

export default { init };
