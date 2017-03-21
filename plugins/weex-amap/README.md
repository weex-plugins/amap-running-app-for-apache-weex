# weex-amap

<img width="320" src="https://img.alicdn.com/tps/TB19sYlPFXXXXaRaXXXXXXXXXXX-600-450.png" />


一款高德地图weex插件，当前版本支持定位，缩放，显示信息窗体等地图常用操作。

### 快速开始

编辑你的weex文件

``` we
<template>
  <div class="container">
      <weex-amap class="map" id="map2017" scale="true" geolocation="true" center="{{pos}}" >
        <weex-amap-marker position="{{point.position}}" title="{{point.title}}"></weex-amap-marker>
      </weex-amap>
  </div>
</template>

<style>
  .container{
    position: relative;
    flex:1; 
    background-color: #fff;
  }
  .map{
    flex: 1;
    position: relative;
    background-color: #fff;
    min-height: 600;
  }
</style>

<script>

  module.exports = {
    data: {
      pos:[116.487, 40.00003],
      point: {
        position: [112,36],
        title: 'this is a marker'
      }
    },
    
  }
</script>

```


### API

#### weex-amap 属性

| 属性        | 类型         | Demo  | 描述  |
| ------------- |:-------------:| -----:|----------:|
| center     | array | [116.487, 40.00003] | 传入地理位置坐标[x,y] 默认为当前定位位置 |
| zoom      | number     |  11 | 缩放级别 |
| zoomEnable | boolean  | true | 是否允许缩放
| marker |  array | [`{position:[116,12]}]` |  点标记物的属性
| geolocation  | boolean | true | 添加定位控件
| sdkKey   | object | {ios:'xxx',android: 'xxx',h5: 'xxx'} | 指定开发者的 SDK 密匙 

*建议你前往[高德开发者社区](http://lbs.amap.com/)申请你对应产品的Key，保证地图正常工作*

#### weex-amap 事件
|事件    |     描述   |
| ------------- |----------:|
|zoomchange | 用户缩放改变  | 
|dragend | 用户拖拽完成  | 



#### weex-amap-marker 属性 

| 属性        | 类型         | Demo  | 描述  |
| ------------- |:-------------:| -----:|----------:|
| position     | array | [116.487, 40.00003] | 传入地理位置坐标[x,y] 默认为当前定位位置 |
| icon | string     |    some_icon_url | 图标的url地址 |
| title | string   |   'this is a marker' | 坐标点的名称 |

#### weex-amap-marker 事件
|事件    |     描述   |
| ------------- |----------:|
|click | 用户点击标记物 | 


#### weex-amap-polyline 属性

在地图上绘制折线

| 属性        | 类型         | Demo  | 描述  |
| ------------- |:-------------:| -----:|----------:|
| path     | array | [[116.487, 40.00003],[113.487, 40.0002]...]| 折线的节点坐标数组 |
| stroke-color | string     |    #000 | 线条颜色 |
| stroke-width | number   |   2 | 线条宽度 |
| stroke-opacity | number  | 0.5  | 线条透明度[0-1]
| stroke-style   | string  | solid | 线条的样式 实线:solid，虚线:dashed

code example：

``` bash
<weex-amap-polyline path="path" stroke-color="#000" stroke-weight="2"></weex-amap-polyline>

<script>
module.exports = {
  data: {
    path: [  
      [116.368904, 39.913423],
      [116.382122, 39.901176],
      [116.387271, 39.912501],
      [116.398258, 39.904600]
    ],
  
  }
}
</script>
```


#### weex-amap-polygon 属性

在地图上绘制多边形


| 属性        | 类型         | Demo  | 描述  |
| ------------- |:-------------:| -----:|----------:|
| path     | array | [[116.487, 40.00003],[113.487, 40.0002]...]| 多边形轮廓线的节点坐标数组 |
| fill-color | string     |    #000 | 多边形填充颜色 |
| fill-opacity | string     |    #000 | 多边形填充透明度 |
| stroke-color | string     |    #000 | 线条颜色 |
| stroke-width | number   |   2 | 线条宽度 |
| stroke-opacity | number  | 0.5  | 线条透明度[0-1]
| stroke-style   | string  | solid | 线条的样式 实线:solid，虚线:dashed


#### weex-amap-circle 属性

在地图上绘制圆形


| 属性        | 类型         | Demo  | 描述  |
| ------------- |:-------------:| -----:|----------:|
| center     | array | [116.346, 40.234234]| 圆形位置 |
| radius | number     |    50 | 圆的半径 |
| fill-color | string     |    #000 | 圆的填充颜色 |
| fill-opacity | string     |    #000 | 圆的填充透明度 |
| stroke-color | string     |    #000 | 圆的轮廓线条颜色 |
| stroke-width | number   |   2 | 圆的轮廓线条宽度 |
| stroke-opacity | number  | 0.5  | 圆的轮廓线条透明度[0-1]
| stroke-style   | string  | solid | 圆的轮廓线条的样式 实线:solid，虚线:dashed


####  weex-amap-info-window 属性

在地图上显示自定义窗体

| 属性        | 类型         | Demo  | 描述  |
| ------------- |:-------------:| -----:|----------:|
| position     | array | [[116.487, 40.00003]| 在地图上的位置 |
| open | boolean     |    true | 是否在地图上打开 |
| offset | array     |    偏移 | 相对定位点坐标偏移 |
| children | weex comonnet     |    <text>This is a info window</text> | 窗体的内容 |

*SDK限制，一个地图只允许显示一个infoWindow*


#### amap 模块

它支持下面的方法：

#####  getUserLocation(completeFunc,errorFunc)

获取用户的位置信息

+ completeFunc 定位成功后的回调函数，返回的数据:
```
{ 
  data:{
    position: []
  },
  result: 'success' 
}
```
##### getLineDistance(coor1, coor2, callback)

计算两个标记点的距离

该方法接收三个参数 进行计算比如:

@param `coor1` 坐标1

@param `coor2` 坐标2

@param `callback` 计算完成后的回调 会返回一个计算出的具体距离，单位 米

``` js
//...
amap.getLineDistance(this.marker1.position, this.marker2.position, (res) => {
  if (res.result == 'success') {
    this.distance = '两点相距' + res.data + '米';
    console.log(res.data.distance + '米');
  } else {
    console.log('计算失败');
  }
})   
```

##### polygonContainsMarker(coor, polygonRef, callbcak)

判断几何形是否包含某个点 

该方法接收两个参数，返回一个boolean值

@param `coor` 点的坐标

@param `polygonRef` 多边形的ref

@param  `callbcak` 计算完成后的回调 会返回一个运算的结果,其中data字段是个boolean，表示是否包含


``` 
amap.polygonContainsMarker([114.23423, 43.2222], this.$ref('polygon2017'), (res) => {
  if (res.result == 'success') {
    console.log(res.data ? '存在' : '不存在' );
  }
})

```

##### 如何使用amap模块

``` html 
<template>
  <weex-amap class="map" id="map2017" center="{{pos}}" ></weex-amap>
  <div class="btn-wrap">
    <div onclick="setUserLocation" class="btnbox"><text class="btn" >set location </text></div>
    <text class="tips">进行当前定位</text>
  </div>
</template>

<script>
  const Amap = require('@weex-module/amap');
  module.exports = {
    data: {
      pos:[116.487, 40.00003]
    },
    
    methods: {
      setUserLocation() {
        const self = this;
        Amap.getUserLocation(this.$el('map2017').ref, function (data) {
          if(data.result == 'success') {
            self.pos = data.data.position;
          }
        });  
    }
  };
  
</script>
```

### Demo

#### H5 demo 

直接点击[Demo](https://weex-plugins.github.io/weex-amap/)可以演示当前版本支持的功能

#### 用weexpack运行demo(Android／iOS／H5)

参考weexpack命令([网址](https://github.com/weexteam/weex-pack))来测试地图组件demo:

1.安装weexpack

npm install -g weexpack

2.创建工程，如MyApp

weexpack create MyApp

3.创建运行平台

cd MyApp & weexpack platform add ios (/android)

4.添加地图插件，有两种方式

－从插件市场下载安装：
weexpack plugin add weex-amap

－地图插件代码clone到本地后安装，
weexpack plugin add /users/abcd/Code/weex-plugins/weex-amap  (这后面是地图插件本地代码的目录)

5.编译和运行demo

把demo文件（所有在目录plugins/weex-amap/demos/下的文件）拷贝到项目工程MyApp/src下，然后：

对H5用如下命令：weexpack build web & weexpack run web

对安卓和iOS用命令：weexpack run ios (/android) 可在模拟器或者device上运行

ios demo 如下所示


<img src="https://img.alicdn.com/tps/TB1c5BKQXXXXXckXpXXXXXXXXXX-367-633.gif">




### 集成插件

如何将地图插件集成到自己的项目呢，请参考[weexpack文档说明](https://github.com/weexteam/weex-pack/tree/dev#5现有应用集成插件--组件容器)
