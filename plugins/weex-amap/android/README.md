# 如何开发
如果想要开发amap，首先要准备好开发环境。 如果一开始clone仓库时缺少 --recursive 选项

$ git clone --recursive https://github.com/weex-plugins/weex-amap.git

则submodule并未同步下来，请在android目录下运行

$ git submodule init

$ git submodule update

接下来，执行如下脚本，以patch的方式设置好工程依赖

$ sh android_dev.sh

该命令行执行完毕后进入dev目录，使用Android Studio打开settings.gradle导入android工程。导入完毕后可以看到主要有以下几个工程。

![picture](https://img.alicdn.com/tps/TB1ZQkIPpXXXXcqXXXXXXXXXXXX-338-400.png)

其中plugin即为开发的插件所在的工程，你可以在这里进行插件开发。如果创建新的module或者component类，则需要在weexplugin的src/main/res/xml/config.xml中进行配置。

## 插件开发的两个基本部分

### 组件或者模块开发
这里是纯功能的开发，与普通的weex组件或者模块扩展无异，测试时需要在weexplugin的src/main/res/xml/config.xml中正确的配置才能成功加载。

### 配置文件
这里主要是修改插件根目录下的plugin.xml和.npmignore。其中
 * plugin.xml 该文件主要用来设置插件安装过程中要copy的代码、依赖的库文件及权限等。
 * .npmignore 该文件主要是用来配置哪些文件需要忽略不需要打包到插件中，如dev目录下的所有内容，和plugin下的build目录等。

# 如何发布
如果已经完成了插件开发，则在插件根目录下执行 `weexpack plugin publish` 命令即可完成发布。
