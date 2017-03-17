<template>
  <div class="container">
    <div class="map">
      <weex-amap :scale="true" :geolocation="true" :zoom="5" :center="pos" >
        <weex-amap-marker onclick=""></weex-amap-marker>
      </weex-amap>
    </div>
    <div onclick="addPoints"><text class="btn">add points</text></div>
  </div>
</template>

<style>
  .container{
    position: relative;
    height: 500;
    
  }
  .map{
    height:300;
    background-color: #fff;
  }
  .btn{
    margin: 10;
    padding: 10;
    width:240;
    background-color: #1ba1e2;
    border-radius: 10;
    color: #fff; 
    text-align:center;
    cursor: pointer;
    font-size: 18;
  }
</style>

<script>
  import weexAmap from './weex-amap.vue';
  module.exports = {
    
    data: function() {
      return {
        pos: [116.487, 40.00003],
      }
    },
    
    components:{
      'weex-amap': weexAmap
    },
    
    methods: {
      changeCenter() {
        this.pos = [100 + Math.random()*10,20 + Math.random()*20];
      },
        
      addPoints() {
        this.pointArr.push({pos:[80 + Math.random()*30,20 + Math.random()*20],title:'' + Math.random()*1000});
        console.log(this.pointArr);
        this.pointArr = Array.from( this.pointArr);
        
      },
      
      getLocation() {
            
      }
      
      
      
    },
    
    created () {
     // console.log(this.$vm('map2017'));
    },
    
  }
</script>
