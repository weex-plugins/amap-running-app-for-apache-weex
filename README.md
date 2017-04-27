# amap-running-app

<img width="360" src="http://img1.vued.vanthink.cn/vued1796109b79d25e79bf6eaa4a79c2f44f.png" />

Use [weex-amap](https://github.com/weex-plugins/weex-amap) to build a running app

### How to use

1.首先克隆这个项目(后面会写如何自己创建这样的项目). 确保你自己环境安装了[weex-toolkit](https://github.com/weexteam/weex-toolkit)

``` bash
git clone https://github.com/weex-plugins/amap-running-app
```

2.进入克隆的项目目录，然后执行 `npm install`


3.测试你的需要运行的平台，比如android 或者 ios

``` bash
weex platform add android
```

4.添加插件 [weex-amap](https://github.com/weex-plugins/weex-amap)

``` bash
weex plugin add weex-amap
```

这个时候你就可以运行命令看具体运行的效果了：

``` bash
weex run android
```

如果你自己使用weex-toolkit创建项目，你只需要这样做：

``` bash
weex create runningapp
cd runningapp && npm install
weex platform add android
weex plugin add weex-amap
weexpack run android

```

### 运行demo截图

**iOS 版**

<img src="https://gw.alicdn.com/tfs/TB1xKpkQpXXXXX.XVXXXXXXXXXX-640-1136.png"/>
 

**Android 版**

<img src="https://gw.alicdn.com/tfs/TB1KwM_QXXXXXcBaXXXXXXXXXXX-720-1280.png"/>


*截图数据仅供演示*







