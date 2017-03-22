import components from '../service/components';
import vendor from '../service/vendor';

const componentName = 'polyline';

let data = {};
// prototype methods.
const proto = {
  create() {
    const node = document.createElement('div');
    data = this.data.attr;
    const comId = data.ref || vendor.gengerateRandomId(componentName);
    if (data.path && Array.isArray(data.path)) {
      components.registerComponent(componentName, {
        path: data.path,
        strokeWeight: data.strokeWidth,
        strokeOpacity: data.strokeOpacity,
        strokeColor: data.strokeColor,
        strokeStyle: data.strokeStyle,
        lineJoin: 'round',
        events: {
          click: () => {
            this.dispatchEvent('click');
          }
        },
      }, comId, (com) => {
        com.setPath(data.path);
      });
    } else {
      console.warn('attribute path must be an array.');
    }
    this._comId = comId;
    return node;
  }
};

const attr = {
  path(val) {
    if (Array.isArray(val) && val.length >= 2) {
      data.path = val;
      const com = components.getComponent(this._comId);
      if (com) {
        com.setPath(val);
      }
    }
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

  function AmapPolygon(opts) {
    Component.call(this, opts);
  }
  AmapPolygon.prototype = Object.create(Component.prototype);
  extend(AmapPolygon.prototype, proto);
  extend(AmapPolygon.prototype, { attr });
  extend(AmapPolygon.prototype, { event });
  Weex.registerComponent('weex-amap-polyline', AmapPolygon);
}

export default { init };
