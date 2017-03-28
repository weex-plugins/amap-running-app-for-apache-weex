## 通过Weex 300行代码开发一款简易的跑步App

[Weex](https://weex.apache.org/cn/)正如它的目标，

> 一套构建高性能、可扩展的原生应用的跨平台开发方案

Weex 给大家带来的无疑是客户端开发效率的提升，我们可以通过一套代码，实现web，android, iOS的三个平台上运行。自己最近尝试了一次借助weex的插件机制，使用[Weex-Amap地图插件](https://github.com/weex-plugins/weex-amap) 可以开发 LBS 相关的应用。

首先我们先来看下运行的效果吧:

**iOS 版**

<img src="https://gw.alicdn.com/tfs/TB1xKpkQpXXXXX.XVXXXXXXXXXX-640-1136.png"/>
 

**Android 版**

<img src="https://gw.alicdn.com/tfs/TB1KwM_QXXXXXcBaXXXXXXXXXXX-720-1280.png"/>

*截图数据仅供参考*

它大概具备下面的一些功能;

+ 统计用户在运动过程中的距离累计，时间计算等。
+ 存储用户的运动数据
+ 使用地图定位和距离计算的API，实现距离统计。
+ 显示地图折线，通过对定位的数据地理位置进行折线绘制
+ 统计用户运动的数据，计算总距离和时间
+ 点击用户的历史记录，可以查看轨迹

感觉和大家所用到的app功能相差不多了，但实际上我们借助 Weex 和 Weex-Amap 插件可以非常快速的实现这些功能，下面我们来看下具体怎么实现吧。 

### 使用 weex-toolkit 创建项目

首先我们按照官网的教程安装[weex-toolkit](https://weex.apache.org/cn/guide/set-up-env.html)。如果已经安装过请忽略。

``` bash
$ npm install -g weex-toolit
```

安装完成后，我们创建一个项目目录，比如`running-app`。

``` bash
weex create running-app
```

大家可能会看到下面的提示，输入`y`安装即可。

``` bash
This command need to install weexpack. Install now? Yes
```

项目创建完成后，我们需要添加我们的运行平台比如android或者ios，这里我们添加 android 平台。

``` bash
weex platform add android
```

添加成功后，我们在通过weex的插件机制，安装[weex-amap](https://github.com/weex-plugins/weex-amap)高德的地图依赖。

``` bash
weex plugin add weex-amap
```
安装完成后，你可以到项目目录 `plugins` 里面看下是否有新增的 `weex-amap` 的项目目录，如果存在即表示插件安装成功。

### 设计原理

[weex-amap]结合了[高德地图](http://lbs.amap.com)多个功能，比如定位，地图缩放，绘制折现，进行点的标记等常用功能。实现一款跑步应用，我们需要解决最核心的问题就是：

> 统计一个在运动过程的总距离 (s)

当我们能够获取到总距离(s)的时候，和运动时间(t) 通过小学物理知识，我们知道:

``` bash
速度(v) = 总路程(s) / 总时间(t)
```
在结合一些公式，我们还可以计算出我们的 卡路里(c);

其中 weex-amap 正好可以解决上面最为核心的问题，我们可以通过定位，然后在通过比较两个连续点之间的距离，进行累加(微分累计)，从而获取总距离。(当然这只是最为简单的实现原理，做成完整的app还需要更加科学化的算法)

[weex-amap] 其中提供了这么两个API

+ `getUserLocation` 用于获取用户的当前位置地理位置,用户会获取经纬度 [Long, Lat]

+ `getLineDistance` 用户获取传入的两个地理位置的直线距离

除了这两个API，我们还需要用到地图的一个组件, 就是折线绘制 `weex-amap-polyline` 。它可以通过path属性接收到一组地理位置坐标值，从而在地图上绘制连续的折线。比如:

``` weex
<weex-amap-polyline stroke-color="#1ba1e2" stroke-width="3" path="{{your_path}}"></weex-amap-polylone>
```
其中 `your_path` 指定类似这样的数据： [[116.487, 40.00003],[113.487, 40.0002]...]

关于更多的如何使用[weex-amap](https://github.com/weex-plugins/weex-amap) 插件，可以参考这篇 [文章]() 以及 官方[Demos](https://github.com/weex-plugins/weex-amap/tree/master/demos)


### 设计页面功能和逻辑

大家也都用过跑步的APP,常见的界面布局如下:

<img width="320" src="http://img1.vued.vanthink.cn/vuede21bf6eea99256eb24b8517c94e97093.png" />

那么我们页面的基本结构就已经出来了:

``` bash
<template>
  <div class="container">
    <weex-amap id="map2017" geolocation="true" center="{{pos}}" class="map" sdk-key="{{keys}}" zoom="{{zoom}}">
      
    </weex-amap>
    <div class="map-controller" if="{{status!=4}}">
      <div class="distance-wrap">
      </div>
      <div class="dashboard">
      </div>
      <div class="btn-wrap">
      </div>
    </div>
  </div>
</template>

<scritp>
<script>
  module.exports = {
    data: {
      keys: {
        h5:'f4b99dcd51752142ec0f1bdcb9a8ec02',
        ios: 'c551f83e1e5b19af89c74096f1c0f007',
        android: 'db6a973159cb0c2639ad02c617a786ae'
      },
      zoom: 16,
      pos: [116.48635, 40.00079],
      status: 1,
      polylinePath: []
      
    },
    
    methods: {
    
    }
  }
</script>
```
其中 我们使用了`weex-amap`组件，其中一些属性:

+ `zoom` 表示设置的地图的缩放级别
+ `geolocation` 添加地图定位插件没如果你需要定位功能，必须设置
+ `sdk-key` 设置地图的密钥，这是地图开发必须申请 (前往[高德地图申请](http://lbs.amap.com/))
+ `center` 设置地图的中心，需要设置一个数组，传入地理位置坐标[116.487, 40.00003]第一个数字表示经度，第二个值表示纬度



其中的样式参考如下,当然你也可以自己实现一个布局：

``` css
.container{
  position: relative;
  flex: 1;
  min-height: 600;
  background-color: #eee;
}
.map{
  flex: 1;
  min-height: 600;
}
.map-controller{
  z-index: 10000;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 500;
  background-color: rgba(255,255,255,1);
  border-top-width: 2;
  border-top-color: rgba(0,0,0,.25);
}
.distance-wrap{
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.dashboard{
  flex: 1;
  flex-direction: row;
}

.btn-wrap{
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

```

### 定义数据模型

我们需要在界面里显示四组数据:

+ 运动距离 
+ 运动时间
+ 运动消耗
+ 运动配速

自己设计的runningData里面包含了下面一些数据:

``` js
runningData: {
  distance: 0,  // 表示运动的累计距离
  miles: 0,    // 表示运动的累计距离，单位是公里用于界面显示
  path: [],    // 运动坐标数据
  time: '00:00:00',  // 用于界面的运动时间显示
  seconds: 0,   // 运动的时间，单位：秒
  speed: 0,    // 配速 
  calories: 0,  // 运动的消耗，单位千卡
}


```

处于计算的方便其中我设计了几个用于数据格式的转换和计算，在我的 [utils.js](https://github.com/weex-plugins/amap-running-app/blob/master/src/lib/utils.js) 里面。

这个时候我们需要在模板里面添加一些代码用于显示这些数据;

``` weex
<template>
<div class="distance-wrap">
  <text class="distance">{{runningData.miles}}</text>
  <text class="unit">公里</text>
</div>
<div class="dashboard">
  <div class="dashboard-item">
    <div class="time-wrap">
      <text class="dashboard-title">运动时间</text>
      <text class="number-lg">{{runningData.time}}</text>
    </div>
  </div>
  <div class="dashboard-item">
    <text class="dashboard-title">配速</text>
    <text class="number-lg">{{runningData.speed}}</text>
  </div>
  <div class="dashboard-item">
    <text class="dashboard-title">热量</text>
    <text class="number-lg">{{runningData.calories}}</text>
  </div>
</div>
</template>
```

### 添加地图折线polyline

``` weex
<weex-amap id="map2017" geolocation="true" center="{{pos}}" class="map" sdk-key="{{keys}}" zoom="{{zoom}}">
  <weex-amap-polyline path="{{polylinePath}}" stroke-opacity="0.9"  stroke-style="solid" stroke-width="8" stroke-color="#1ba1e2"></weex-amap-polyline>
</weex-amap>
```

### 添加流程控制

在我们进行跑步的过成功无疑就是这么几个状态，我将它定义在了 [status.js](https://github.com/weex-plugins/amap-running-app/blob/master/src/lib/status.js)

``` javascript
module.exports = {
  RUNNING_READY: 1, // 跑步开始前
  RUNNING_DOING: 2, // 跑步进行中
  RUNNING_PAUSE: 3, // 跑步暂停中
  RUNNING_END: 4  // 跑步结束,
  RUNNING_PREVIEW: 5 // 数据预览
};
```
我们通过这几个状态来实现对界面的操作，比如开始或者暂停。这个时候我们需要添加一一些用于界面控制的按钮。

``` weex
<template>
  ...
  <div class="btn-wrap">
    <div class="btn-circle btn-green" if="{{status==1}}" onclick="start">
      <image class="btn-icon" src="https://gw.alicdn.com/tfs/TB1sGrEQXXXXXc4XVXXXXXXXXXX-60-60.png"></image>
    </div>
    <div class="btn-circle btn-midnight" if="{{status==2 || status == 3}}" onclick="end">
      <image class="btn-icon" src="https://gw.alicdn.com/tfs/TB1uEnqQXXXXXcdapXXXXXXXXXX-60-60.png"></image>
    </div>
    <div class="btn-circle btn-green" if="{{status == 3}}" onclick="continue">
      <image class="btn-icon" src="https://gw.alicdn.com/tfs/TB1sGrEQXXXXXc4XVXXXXXXXXXX-60-60.png"></image>
    </div>
    <div class="btn-circle btn-red" if="{{status==2}}" onclick="stop">
      <image class="btn-icon" src="https://gw.alicdn.com/tfs/TB1A6vJQXXXXXa0XVXXXXXXXXXX-60-60.png"></image>
    </div>
  </div>
<template>

```
### 实现流程

我们接下来，按照流程来实现我们的程序逻辑：
``` js
const status = require('./lib/status');
...
module.exports = {
  // ...
  methods() {
    start() {

    },
    stop() {

    },
    continue() {

    },
    end() {

    },
  }
}
```

#### start

开始的业务逻辑很简单，就是更改页面状态到运行中，然后执行程序。

``` js
start() {
  this.status = status.RUNNING_DOING;
  this.runningAmapGeolocation();
}

```

#### stop

暂停的话，我们需要清除掉页面的计时器。

``` js
stop() {
  this.status = status.RUNNING_PAUSE;
  clearInterval(this.timeRecorder); // 计算时间
  clearInterval(this.amapRecorder); // 计算定位
}
```
#### end

点击结束按钮，我们需要清除计时器，然后显示出累计的数据就行了，当然做的复杂一点，还可以进行数据的存储等。

``` js
end() {
  clearInterval(this.timeRecorder);
  clearInterval(this.amapRecorder);
  /* 使用存储
  * storage.getItem('runningData', (res) => {
  * ...  
  * }) 
  */
}
```





#### 实现地图定位

在添加完 weex-amap 模块后，我们就可以实现地图的定位和距离计算。

``` javascript
// 引入 amap 模块
const Amap = require('@weex-module/amap');

etUserLocation(callback) {
  Amap.getUserLocation(this.$el('map2017').ref, callback);
}

```

其中callback回调中会返回一个对象:

``` js
{
  result: 'success' or 'fail', // 接口调用是否成功
  data: {
    position: [Long, Lat] // 返回经纬度
  }
}
```

### 实现地图距离计算

```
// 我们引入第三发utils文件，用于一些计算

const utils = require('./lib/utils');


calcDistanceAndSpeed() {
  const len = this.runningData.path.length
  if(len > 1) {
    // 计算两个点之前的距离
    Amap.getLineDistance(this.runningData.path[len-1], this.runningData.path[len-2], (res) => {
      if(res.result == 'success') {
        console.log(res.data.distance);
        this.runningData.distance += res.data.distance;
      }
      // 将总长度转化为千米
      this.runningData.miles = utils.mtoKm(this.runningData.distance);
       // 初略的计算卡路里 
      this.runningData.calories = (this.runningData.distance / 1000).toFixed(2);
      // 速度换算
      this.runningData.speed = utils.calcSpeed(this.runningData.distance, this.runningData.seconds);
    });
  }
}
```
其中 utils.js 的实现可以参考 [这里](https://github.com/weex-plugins/amap-running-app/blob/master/src/lib/utils.js)。


### 让程序自动采集数据

大家写JS一定都实现过一个倒计时的程序，常用的解决方案就是 `setInterval` (关于setInterval 时间的执行的问题可以看[这里](http://javascript.info/tutorial/settimeout-setinterval)) 。

当点击开始按钮后，我们需要设置一个计时器，用户进行用户时间的计算：

``` js
countDownTime() {
  this.timeRecorder = setInterval(() => {
    this.runningData.seconds ++;
    // 进行格式转化 12s => 00:00:12
    this.runningData.time = utils.setTimeFormat(this.runningData.seconds);
  }, 1000);  
},

// 设置定位的计时器
 runningAmapGeolocation() {
  this.setUserLocation((res) => {
    if(res.result == 'success') {
      this.pos = res.data.position;
      this.runningData.path.push(res.data.position);
    }  
  }); 
  this.amapRecorder= setInterval(() => {
    this.setUserLocation((res) => {
      if(res.result == 'success') {
        this.runningData.path.push(res.data.position);  
        this.polylinePath = Array.from(this.runningData.path);
        this.pos = utils.setPosition(this.runningData.path);
        this.calcDistanceAndSpeed();
      }
    });
  }, 10000);
}, 

```

透过代码我们可以看到程序会大约每隔十秒进行一次定位，然后再进行计算和距离累加。

[文件源代码](https://github.com/weex-plugins/amap-running-app/blob/master/src/simple.we)

### 打包运行

开发完毕后，我们可以运行命令，让它安装到我们的测试手机上。

``` bash
weex run android
```

*PS: 当然如果你要做出一个 科学 的跑步程序，还需要你加入大量测试和数据的纠正，比如我们在使用过程会遇到定位的偏差，断网， 用户没有开启定位权限等问题，这些都是我们需要考虑和应对的*




### 运行 Github 上项目


如果大家在实现过程中遇到问题可以参考 Github 上这个项目的一些代码。相对刚刚这个简单的功能，它完善了存储和数据预览，以及倒计时等小细节。

1.首先克隆这个项目(后面会写如何自己创建这样的项目). 确保你自己环境安装了[weex-toolkit](https://github.com/weexteam/weex-toolkit)

``` bash
git clone https://github.com/weex-plugins/amap-running-app
```

2.进入克隆的项目目录，然后执行 `npm install`


3.测试你的需要运行的平台，比如android 或者 ios

``` bash
weex plaform add android
```

4.添加插件 [weex-amap](https://github.com/weex-plugins/weex-amap)

``` bash
weex plugin add weex-amap
```

这个时候你就可以运行命令看具体运行的效果了：

``` bash
weex run android
```

[amap-running-app](https://github.com/weex-plugins/amap-running-app),也欢迎PR，拍砖。
  

### 扩展阅读

+ [weex-amap](https://github.com/weex-plugins/weex-amap)

+ [跑步消耗卡路里的计算公式、指数K是怎么计算的](https://zhidao.baidu.com/question/129562286.html)

