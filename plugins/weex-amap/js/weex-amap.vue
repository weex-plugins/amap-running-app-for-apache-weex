<template>
  <el-amap :vid="'amap-vue'" :center="center" :zoom="zoom">
  </el-amap>
</template>

<style>
  
</style>

<script>
  
 import weexMap from 'vue-amap';
  Vue.use(weexMap);
  Vue.use(weexMap);
  weexMap.initAMapApiLoader({
    key: 'your amap key',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
  });
  
  module.exports = {
    props: {
      center:{
        type: Array,
      },
      zoom: {
        type: Number,
        default: 11,
      },
      zooms: {
        type: Array,
      },
      zoomEnable: {
        type: Boolean,
        default: true
      },
      dobuleClickZoom: {
        type: Boolean,
        default: true,
      }
    },
    
    data() {
      return {
        
      }  
    },
    
    methods: {
      setCenter() {
        
      },
      setZoomEnable() {
        
      },
      getGeolocation() {
        
      },
      addMarker() {
        
      },
    },
    
    created() {
      console.log(this.center);
    },
  }
</script>
