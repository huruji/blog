<h1 align="center">灰风GreyWind的技术部落格</h1
> PS：灰风也叫忽如寄

> 在这里将会记录我的源码分析历程、我的技术日志、我的生活感悟。

> 如果你对我的博客文章感兴趣，或许你也会喜欢我以前写过的文章，你可以在这里找到我以前的文章。[http://www.jianshu.com/u/351f85c16861](http://www.jianshu.com/u/351f85c16861)

#### 目录

#### 2019-03

- [async await 的错误处理 ](#61)

#### 2019-02

- [webpack 的 chunk ](#59)


#### 2019-01

- [如何让你的回调 Promise 化 ](#58)

- [通过 Webpack 的 compiler 对象的 Hooks 学会编写 Webpack 插件的编写](#57)

- [Webpack 的 stats 、Compilation、compiler 对象里都有啥](#56)

#### 2018-11
- [如何编写一个babel插件 ](#55)

- [webpack打包出来的文件都是啥](#54)

- [minipack源码解析](#53)

#### 2018-09

- [如何优雅地链式取值](#51)

- [图像处理的滤镜算法](#50)

#### 2018-08
- [IOS下box-shadow的诡异bug的修复](#47)

#### 2018-07
- [D2-天猫超市Mobile Web的极致体验优化 - 学习笔记](#45)




#### 2018-06
- [NumPy使用](#44)


#### 2018-05
- [一文带你了解babel-preset-env](#43)

- [关于Babel 6的 loose mode](#42)

- [Rollup初探](#41)

- [从ECMAscript标准文档看懂valueOf](#40)

- [一段柯里化函数代码阅读](#39)

- [Rails路由](#38)

- [Rails布局和视图渲染](#37)

- [Active Record 数据验证](#36)

- [Active Record 迁移](#35)

#### 2018-04

- [Active Record基础](#34)

- [使用rails实现最简单的CRUD](#33)

- [for循环异步操作问题小结](#29)

#### 2018-02

- [使用express-validator对你的Express应用的用户数据进行验证](#21)

- [使用validator.js对字符串数据进行验证](#20)

#### 2018-01

- [Shell的字符串处理](#19)

- [Shell编程快速入门指南](#18)

#### 2017-11

- [动手实现一个AMD模块加载器(三)](#17)

#### 2017-10

- [动手实现一个AMD模块加载器(二)](#16)

- [动手实现一个AMD模块加载器(一)](#13)

- [Node.js开发多进程应用](#15)

- [Node.js的进程process](#14)

- [使用Koa + mysql一小时搭建个人博客](#11)

#### 2017-09

- [动手实现一个JSONP](#9)

- [Webpack系列——关于Webpack-dev-server配置的点点滴滴](#10)

- [Webpack系列——手把手教你使用Webpack搭建简易的React开发环境](#8)

- [Webpack系列——Webpack + xxx配合使用](#7)

- [Webpack系列——快速入门](#3)

- [Android布局练习—计算器](#5)

- [Android布局笔记(未完待续)](#4)

#### 2017-08

- [使用react-router4.0实现重定向和404功能](#2)

- [动手实现一个最简单的redux](#1)



### 源码阅读计划

> 计划赶不上变化，orz

1.模板引擎类

- [ ] [aui/art-template](https://github.com/aui/art-template)
- [x] [tj/ejs](https://github.com/tj/ejs)，[ejs项目源码阅读](https://github.com/huruji/blog/issues/28)

2.React相关

- [x] [reactjs/redux](https://github.com/reactjs/redux)

3.Node.js项目

- [x] [welkinwong/nodercms](https://github.com/welkinwong/nodercms)，[nodercms项目源码阅读](https://github.com/huruji/blog/issues/22)

- [x] [substack/node-mkdirp](https://github.com/substack/node-mkdirp)，[node-mkdirp项目源码阅读](https://github.com/huruji/blog/issues/23)

- [x] [isaacs/pseudomap](https://github.com/isaacs/pseudomap)，[pseudomap项目源码阅读](https://github.com/huruji/blog/issues/24)

- [x] [developit/resource-router-middleware](https://github.com/developit/resource-router-middleware)，[resource-router-middleware项目源码阅读](https://github.com/huruji/blog/issues/25)

- [x] [expressjs/cookie-parser](https://github.com/expressjs/cookie-parser)，[cookie-parser项目源码阅读](https://github.com/huruji/blog/issues/27)

4.Vue相关
- [x] [bailicangdu/vue2-happyfri](https://github.com/bailicangdu/vue2-happyfri) Vue全家桶入门级项目

<h2 align="center">2019-03</h2>

<h3 id="59"><a href="https://github.com/huruji/blog/issues/61">async await 的错误处理</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/61">
  <img  width="100%" src="https://img14.360buyimg.com/jrmarketingcloud/jfs/t1/27599/30/9990/377761/5c8207c7Ed034d840/ccafbf0e8e8fac59.jpg" />
  </a>
</p>



<h2 align="center">2019-02</h2>

<h3 id="59"><a href="https://github.com/huruji/blog/issues/59">webpack 的 chunk </a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/59">
  <img  width="100%" src="https://upload-images.jianshu.io/upload_images/1641380-7aa6bf46649ef6ac.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
  </a>
</p>




<h2 align="center">2019-01</h2>

<h3 id="58"><a href="https://github.com/huruji/blog/issues/58">如何让你的回调 Promise 化  </a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/58">
  <img  width="100%" src="https://camo.githubusercontent.com/41ef57cf9b98e8d0d3a6b51134c1e4ae6722fb92/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d636130356261323762366436366632322e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>


<h3 id="57"><a href="https://github.com/huruji/blog/issues/57">通过 Webpack 的 compiler 对象的 Hooks 学会编写 Webpack 插件的编写 </a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/57">
  <img  width="100%" src="https://upload-images.jianshu.io/upload_images/1641380-7a53c2589896b578.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
  </a>
</p>

<h3 id="56"><a href="https://github.com/huruji/blog/issues/56">Webpack 的 stats 、Compilation、compiler 对象里都有啥 </a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/56">
  <img  width="100%" src="https://upload-images.jianshu.io/upload_images/1641380-5c2f42a03c9f0233.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
  </a>
</p>

<h2 align="center">2018-11</h2>

<h3 id="55"><a href="https://github.com/huruji/blog/issues/55">如何编写一个babel插件 </a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/55">
  <img  width="100%" src="https://user-images.githubusercontent.com/15937065/48671346-81fd0d00-eb61-11e8-8c32-da60d3bbe17a.jpg" />
  </a>
</p>


<h3 id="54"><a href="https://github.com/huruji/blog/issues/54">webpack打包出来的文件都是啥</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/54">
  <img  width="100%" src="https://user-images.githubusercontent.com/15937065/48826125-79e0df80-eda4-11e8-9ca3-86ff654f5fac.jpg" />
  </a>
</p>


<h3 id="53"><a href="https://github.com/huruji/blog/issues/53">minipack源码解析</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/53">
  <img  width="100%" src="https://user-images.githubusercontent.com/15937065/48826170-97ae4480-eda4-11e8-9185-504a2f3744a9.jpg" />
  </a>
</p>

-----



<h2 align="center">2018-09</h2>

<h3 id="51"><a href="https://github.com/huruji/blog/issues/50">如何优雅地链式取值 </a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/51">
  <img  width="100%" src="https://user-images.githubusercontent.com/15937065/45597944-66ad3e80-ba06-11e8-8042-26d00e4d4d73.jpg" />
  </a>
</p>


<h3 id="50"><a href="https://github.com/huruji/blog/issues/50">图像处理的滤镜算法 </a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/50">
  <img  width="100%" src="https://user-images.githubusercontent.com/15937065/45564506-3a1ce980-b883-11e8-9a13-77ddc786730d.jpg" />
  </a>
</p>

-----

<h2 align="center">2018-08</h2>


<h3 id="47"><a href="https://github.com/huruji/blog/issues/47">IOS下box-shadow的诡异bug的修复</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/47">
  <img  width="100%" src="https://camo.githubusercontent.com/e4ed9d36157360f10b9d1bafeeb118278a2b3c05/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d656230383536643761393931653135632e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----



<h2 align="center">2018-07</h2>


<h3 id="45"><a href="https://github.com/huruji/blog/issues/45">D2-天猫超市Mobile Web的极致体验优化 - 学习笔记</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/45">
  <img  width="100%" src="https://camo.githubusercontent.com/7763ff6aec3f1956a521dcc4b7f8c8987fce8f38/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d386230626465333035336264336530642e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----




<h2 align="center">2018-06</h2>


<h3 id="44"><a href="https://github.com/huruji/blog/issues/44">NumPy使用</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/44">
  <img  width="100%" src="https://camo.githubusercontent.com/39f057c3e55ce4722ecd6491d3c19556ed2dae7c/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d616534333535313938333138346335652e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----



<h2 align="center">2018-05</h2>


<h3 id="43"><a href="https://github.com/huruji/blog/issues/43">一文带你了解babel-preset-env</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/43">
  <img  width="100%" src="https://camo.githubusercontent.com/226cb1e161cc13d622fa20d4a9de5208bb2ea73a/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d383865383162383834646537393534322e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----




<h3 id="42"><a href="https://github.com/huruji/blog/issues/42">关于Babel 6的 loose mode</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/42">
  <img  width="100%" src="https://camo.githubusercontent.com/d01ca4e9c3e532ada4e435c3e83e2ef4b6444e6b/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d353566653036616261636361313462622e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----


<h3 id="41"><a href="https://github.com/huruji/blog/issues/41">Rollup初探</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/41">
  <img  width="100%" src="https://camo.githubusercontent.com/d4a290d0fda66130f70da41c4b9e017a068b4803/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d393930336263326439346331613864622e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----



<h3 id="40"><a href="https://github.com/huruji/blog/issues/40">从ECMAscript标准文档看懂valueOf</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/40">
  <img  width="100%" src="https://camo.githubusercontent.com/9bbb81b74c35ebf4bcf8c375e74cdd7d28ff63c7/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d353665633135336463356130373230622e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----


<h3 id="39"><a href="https://github.com/huruji/blog/issues/39">一段柯里化函数代码阅读</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/39">
  <img  width="100%" src="https://user-images.githubusercontent.com/15937065/40008491-0531d4d6-57d2-11e8-9d61-a1d20f98f649.jpg" />
  </a>
</p>

-----



<h3 id="38"><a href="https://github.com/huruji/blog/issues/38">Rails路由</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/38">
    <img  width="100%" src="https://camo.githubusercontent.com/809b556467c52bd28d04e4e7c176e06c89790ba9/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d313966643336343465623264633131392e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----



<h3 id="37"><a href="https://github.com/huruji/blog/issues/37">Rails布局和视图渲染</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/37">
    <img  width="100%" src="https://camo.githubusercontent.com/545e83ffef266266ee9a9188572f05e5cc90572b/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d333861613831383535653432346233662e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----



<h3 id="36"><a href="https://github.com/huruji/blog/issues/36">Active Record 数据验证</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/36">
    <img  width="100%" src="https://camo.githubusercontent.com/142d2f7875e3ef7e8530533d841dbae67c8e8424/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d643438333833643035616633383238642e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----



<h3 id="35"><a href="https://github.com/huruji/blog/issues/35">Active Record 迁移</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/35">
    <img  width="100%" src="https://camo.githubusercontent.com/8d4a91e30c7c00fadc0811333bb68dbf289c32a4/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d333335633733363539356132376661352e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----




<h2 align="center">2018-04</h2>



<h3 id="34"><a href="https://github.com/huruji/blog/issues/34">Active Record基础</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/34">
    <img  width="100%" src="https://camo.githubusercontent.com/0359bd5e5c1ab4b483f370abaa579b90fe5fa29b/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d396331643931306164353935306532382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----



<h3 id="33"><a href="https://github.com/huruji/blog/issues/33">使用rails实现最简单的CRUD</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/33">
    <img  width="100%" src="https://camo.githubusercontent.com/430c7c9350d98f72741ee3bba841f19da10fca30/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d656266323333653331303239313432662e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----



<h3 id="29"><a href="https://github.com/huruji/blog/issues/29">for循环异步操作问题小结</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/29">
    <img  width="100%" src="https://camo.githubusercontent.com/e46eb6337970c7e77b750fbd2ae11c32ede27a78/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d353566383232613062643063626466372e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----




<h2 align="center">2018-02</h2>



<h3 id="21"><a href="https://github.com/huruji/blog/issues/21">使用express-validator对你的Express应用的用户数据进行验证</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/21">
    <img  width="100%" src="https://camo.githubusercontent.com/e78ca6c95c04b3928d4a8ca15b22feff23605680/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d646139336361383135356435396231662e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>



<h3 id="20"><a href="https://github.com/huruji/blog/issues/20">使用validator.js对字符串数据进行验证</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/20">
    <img  width="100%" src="https://camo.githubusercontent.com/e78ca6c95c04b3928d4a8ca15b22feff23605680/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d646139336361383135356435396231662e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----




<h2 align="center">2018-01</h2>



<h3 id="19"><a href="https://github.com/huruji/blog/issues/19">Shell的字符串处理</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/19">
    <img  width="100%" src="https://camo.githubusercontent.com/119f27d4d791db9de32e3adf9413590e9995697b/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d396234373033623334633763633530362e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----



<h3 id="18"><a href="https://github.com/huruji/blog/issues/18">Shell编程快速入门指南</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/18">
    <img  width="100%" src="https://user-images.githubusercontent.com/15937065/34666912-95d978ac-f4a1-11e7-98b8-39b29a7fa31e.jpg" />
  </a>
</p>

-----




<h2 align="center">2017-11</h2>



<h3 id="17"><a href="https://github.com/huruji/blog/issues/17">动手实现一个AMD模块加载器(三)</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/17">
    <img  width="100%" src="https://user-images.githubusercontent.com/15937065/32406601-58498df6-c1b6-11e7-8ae3-ccbc60ced774.jpg" />
  </a>
</p>

-----




<h2 align="center">2017-10</h2>



<h3 id="16"><a href="https://github.com/huruji/blog/issues/16">动手实现一个AMD模块加载器(二)</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/16">
    <img  width="100%" src="https://camo.githubusercontent.com/e7cfc5f7db47298f9fdbced15f351bf9dcaa1d2e/68747470733a2f2f706963322e7a68696d672e636f6d2f38302f76322d39656564373937663934323064656631653730343564353532363863613233645f722e6a7067" />
  </a>
</p>

-----



<h3 id="13"><a href="https://github.com/huruji/blog/issues/13">动手实现一个AMD模块加载器(一)</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/13">
    <img  width="100%" src="https://user-images.githubusercontent.com/15937065/31510748-faed62b4-afb7-11e7-88fb-9838b82a367b.jpg" />
  </a>
</p>

-----




<h3 id="15"><a href="https://github.com/huruji/blog/issues/15">Node.js开发多进程应用</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/15">
    <img  width="100%" src="https://user-images.githubusercontent.com/15937065/31787867-9553d036-b53f-11e7-9541-733746595592.jpg" />
  </a>
</p>

-----




<h3 id="14"><a href="https://github.com/huruji/blog/issues/14">Node.js的进程process</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/14">
    <img  width="100%" src="https://user-images.githubusercontent.com/15937065/31680562-3cc45416-b3a7-11e7-9b85-d904fbae9ee0.jpg" />
  </a>
</p>

-----




<h3 id="11"><a href="https://github.com/huruji/blog/issues/11">使用Koa + mysql一小时搭建个人博客</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/11">
    <img  width="100%" src="https://user-images.githubusercontent.com/15937065/31680562-3cc45416-b3a7-11e7-9b85-d904fbae9ee0.jpg" />
  </a>
</p>

-----




<h2 align="center">2017-09</h2>




<h3 id="9"><a href="https://github.com/huruji/blog/issues/9">动手实现一个JSONP</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/9">
    <img  width="100%" src="https://camo.githubusercontent.com/558705a44e73ebf0d1bec93a1d04fb3d3493a562/687474703a2f2f736f686f696e7465726163746976652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031342f30322f6a736f6e702d6a736f6e2d776974682d70616464696e672e676966" />
  </a>
</p>

-----





<h3 id="10"><a href="https://github.com/huruji/blog/issues/10">Webpack系列——关于Webpack-dev-server配置的点点滴滴</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/10">
    <img  width="100%" src="https://camo.githubusercontent.com/8d4a91e30c7c00fadc0811333bb68dbf289c32a4/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d333335633733363539356132376661352e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----





<h3 id="8"><a href="https://github.com/huruji/blog/issues/8">Webpack系列——手把手教你使用Webpack搭建简易的React开发环境</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/8">
    <img  width="100%" src="https://camo.githubusercontent.com/8d4a91e30c7c00fadc0811333bb68dbf289c32a4/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d333335633733363539356132376661352e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----





<h3 id="7"><a href="https://github.com/huruji/blog/issues/7">Webpack系列——Webpack + xxx配合使用</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/7">
    <img  width="100%" src="https://camo.githubusercontent.com/8d4a91e30c7c00fadc0811333bb68dbf289c32a4/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d333335633733363539356132376661352e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----





<h3 id="3"><a href="https://github.com/huruji/blog/issues/3">Webpack系列——快速入门</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/3">
    <img  width="100%" src="https://camo.githubusercontent.com/8d4a91e30c7c00fadc0811333bb68dbf289c32a4/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d333335633733363539356132376661352e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----





<h3 id="5"><a href="https://github.com/huruji/blog/issues/5">Android布局练习—计算器</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/5">
    <img  width="100%" src="https://camo.githubusercontent.com/8d4a91e30c7c00fadc0811333bb68dbf289c32a4/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d333335633733363539356132376661352e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----





<h3 id="4"><a href="https://github.com/huruji/blog/issues/4">Android布局笔记(未完待续)</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/4">
    <img  width="100%" src="https://camo.githubusercontent.com/8d4a91e30c7c00fadc0811333bb68dbf289c32a4/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d333335633733363539356132376661352e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----




<h2 align="center">2017-08</h2>





<h3 id="2"><a href="https://github.com/huruji/blog/issues/2">使用react-router4.0实现重定向和404功能</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/2">
    <img  width="100%" src="https://camo.githubusercontent.com/8d4a91e30c7c00fadc0811333bb68dbf289c32a4/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d333335633733363539356132376661352e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>

-----





<h3 id="1"><a href="https://github.com/huruji/blog/issues/1">动手实现一个最简单的redux</a></h3>

<p style="text-align:center">
  <a href="https://github.com/huruji/blog/issues/1">
    <img  width="100%" src="https://camo.githubusercontent.com/8d4a91e30c7c00fadc0811333bb68dbf289c32a4/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313634313338302d333335633733363539356132376661352e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" />
  </a>
</p>
