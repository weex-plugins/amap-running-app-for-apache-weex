import amapModuleReg from './module/amap';
import Amap from './components/amap';
import AmapMarker from './components/amap-marker';
import AmapCircle from './components/amap-circle';
import AmapPolygon from './components/amap-polygon';
import AmapPolyline from './components/amap-polyline';
import AmapInfoWindow from './components/amap-info-window';
// import VueAmap from './vue-amap/index';
const components = [
  Amap,
  AmapMarker,
  AmapCircle,
  AmapPolygon,
  AmapPolyline,
  AmapInfoWindow
];

function init(Weex) {
  components.forEach((comp) => {
    comp.init(Weex);
  });
  amapModuleReg(Weex);
}
module.exports = {
  init
};

