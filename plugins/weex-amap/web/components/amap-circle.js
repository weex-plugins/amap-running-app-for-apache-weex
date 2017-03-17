import components from '../service/components';
import vendor from '../service/vendor';

const componentName = 'circle';
// prototype methods.
const proto = {
  create() {
    const node = document.createElement('div');
    const data = this.data.attr;
    const comId = data.ref || vendor.gengerateRandomId(componentName);
    if (data.center && Array.isArray(data.center)) {
      components.registerComponent(componentName, {
        center: data.center,
        radius: data.radius,
        fillColor: data.fillColor,
        filOpacity: data.fillOpacity,
        strokeWeight: data.strokeWidth,
        strokeOpacity: data.strokeOpacity,
        strokeColor: data.strokeColor,
        strokeStyle: data.strokeStyle,
        events: {
          click: () => {
            this.dispatchEvent('click');
          }
        },
      }, comId);
    } else {
      console.warn('attribute center must be an array.');
    }
    this._comId = comId;
    return node;
  }
};

const attr = {
  center(val) {
    const com = components.getComponent(this._comId);
    if (com) {
      com.setCenter(val);
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

  function AmapCircle(data) {
    Component.call(this, data);
  }
  AmapCircle.prototype = Object.create(Component.prototype);
  extend(AmapCircle.prototype, proto);
  extend(AmapCircle.prototype, { attr });
  extend(AmapCircle.prototype, { event });
  Weex.registerComponent('weex-amap-circle', AmapCircle);
}

export default { init };
