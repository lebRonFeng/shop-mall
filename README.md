## 1.项目（app）

> 1.项目设置
```
<!-- Project setup -->
npm install
```

> 2.为开发进行编译和热重载
```
<!-- Compiles and hot-reloads for development -->
npm run serve
```

> 3.用于生产的压缩和编译
```
<!-- Compiles and minifies for production -->
npm run build
```

> 4.格式化文件
```
<!-- Lints and fixes files -->
npm run lint
```

> 5.自定义配置（）

```
<!-- Customize configuration -->
```
See [Configuration Reference](https://cli.vuejs.org/config/).

## 2.项目目录结构

- vue-cli：脚手架初始化项目。
- node + webpack + 淘宝镜像
- node_modules文件夹：项目依赖文件
- public文件夹：一般放置一些静态资源（图片），需要注意，放在public文件夹中的静态资源，webpack进行打包的时候，会原封不动打包到dist文件夹中。
- src文件夹（程序员源代码文件夹）：
    - assets文件夹：一般也是放置静态资源（一般放置多个组件共用的静态资源），需要注意，放置在assets文件夹里面的静态资源，在webpack打包的时候，webpack会把静态资源当作一个模块，打包js文件里面。
    - components文件夹：一般放置的是非路由组件（全局组件）
    - App.vue：唯一的根组件，Vue当中的组件(.vue)
    - main.js：程序入口文件，也是整个程序当中最先执行的文件

- babel.config.js：配置文件（babel相关）
- package.json文件：认为项目的‘身份证’，记录项目叫什么、项目当中有哪些依赖、项目怎么运行。
- package-lock.json：缓存性文件
- README.md：说明性文件


## 3.项目的其他配置

> 1.项目运行起来的时候，让浏览器自动打开

    ```
    <!-- package.json -->
    "scripts": {
        "serve": "vue-cli-service serve --open",
        "build": "vue-cli-service build",
        "lint": "vue-cli-service lint"
    }
    ```

> 2.eslint检验功能关闭

```
在根目录下，创建一个vue.config.js
比如：声明变量但是没有使用eslint校验工具报错。

module.exports = {
    // 关闭eslint
    lintOnSave: false
}
```

> 3.src文件夹简写方法，配置别名。

    ```
    jsconfig.json配置别名@提示
    {
        "compilerOptions": {
            "baseUrl": "./",
            "paths" : {
                "@/*": ["src/*"]
            }
        },
        "exclude": ["node_modules", "dist"]
    }
    ```

## 路由

> 项目路由的分析


- vue-router
    - 前端所谓路由：kv键值对。
    - key：URL（地址栏中的路径）
    - value：相应的路由组件
- 注意：项目上中下结构


- 路由组件：
    - Home首页路由组件、search路由组件、login登录路由、Refister注册路由
- 非路由组件：
    - Hrader【首页、搜索页】
    - Footer【在首页、搜索页】，但是在登录|注册页面没有

## 开发

> 1.完成非路由组件Header与Footer业务

在项目开发中，不再以HTML+CSS为主，主要搞业务、逻辑

> 在开发的时候：

- 1.书写静态页面（HTML+CSS）
- 2.拆分组件
- 3.获取服务器的数据动态展示
- 4.完成相应的动态业务逻辑

> 注意事项

- 注意1：创建组件的时候，组件结构 + 组件样式 + 图片资源
- 注意2：咱们项目采用的less样式，浏览器不识别less样式，需要通过less、less-loader进行处理less，把less样式变为css样式，浏览器才可以识别。
- 注意3：如果想让组件识别less样式，需要在style标签的身上加上lang=less

> 1.1使用组件的步骤（非路由组件）

- 创建或者定义
- 引入
- 注册
- 使用

> 路由组件的搭建

vue-router
在上面分析的时候，路由组件应该有四个：Home、Search、Login、Register

- components文件夹：经常放置的非路由组件（共用全局组件）
- pages|views文件夹：经常放置路由组件

1.路由配置
 - 项目当中配置的路由一般配置在router文件夹中

2.路由小总结

- 路由组件与非路由组件的区别？
    - 1.路由组件一般放置在pages|views文件夹，非路由组件一般放置componets文件夹中
    - 2.路由组件一般需要在router文件夹中进行注册（使用的即为组件的名字），非路由组件在使用的时候，一般都是以标签的形式使用。
    - 3.注册完路由，不管路由组件、还是非路由组件身上都有$route、$router属性
        - $route:一般获取路由信息【路径、query/params等等】
        - $router:一般进行编程式导航进行路由跳转【pash|replace】

3.路由的跳转？
路由的跳转有两种形式：声明式导航router-link，可以进行路由的跳转
编程式导航push|replace，可以进行路由跳转

### 6.Footer组件显示与隐藏

显示或者隐藏组件：v-if|v-show
Footer组件：在Home、Search显示Footer组件
Footer组件：在登录、注册时候是隐藏的

#### 6.1 我们可以根据组件自身上的$route获取当前路由的信息，通过路由路径判断Footer显示与隐藏。
#### 6.2 配置路由的时候，可以给路由添加路由元信息【meta】，路由需要配置对象，它的key不能乱写。

### 8.路由传参

#### 8.1：路由跳转的几种方式？

比如：A->B
声明式导航：router-link（务必要有to属性），可以实现路由的跳转
编程式导航：利用的是组件实例的$router.push|replace方法，可以实现路由的跳转。

#### 8.2：路由传参，参数有几种写法？

params参数：属于路径当中的一部分，需要注意，在配置路由的时候，需要占位
query参数：不属于路径中的一部分，类似于ajax中的queryString /home?k=v&v=,不需要占位。

### 9.路由参数相关的面试题

#### 1.路由传递参数（对象写法）path是否可以结合params参数一起使用？
#### 2.如何指定params参数可传可不传？

> 比如：配置路由的时候，占位了（params参数），但是路由跳转的时候就不传递。路径会出问题。
http://localhost:8080/#/?k=QWE

http://localhost:8080/#/search?k=QWE
#### 3.params参数可以传递也可以不传递，但是如果传递是空串，如何解决？
#### 4.路由组件能不能传递props数据？


## day2

1.编程式路由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicated的警告错误？
--路由跳转有两种形式：声明式导航、编程式导航
--声明式导航没有这类问题的，因为vue-router底层已经处理好了
1.1为什么编程式导航进行路由跳转的时候，就会有这种警告错误呢？
"vue-router":"^3.5.3":最新的vue-router引入promise

1.2通过给push方法传递相应的成功、失败的回调函数，可以捕获到当前错误，可以解决。

1.3通过底部的代码，可以实现解决错误
this.$router.push({name:"search",params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}},()=>{},()=>{});

1.4 this:当前组件实例（search）
this.$router属性：当前这个属性，属性值VueRouter类的一个实例，当在入口文件注册路由的时候，给组件实例添加$router|$route属性。
push:VueRouter类的一个实例

function VueRouter(){}

<!-- 原型对象方法 -->
VueRouter.prototype.push = function(){
    //函数的上下文为VueRouter类的一个实例
}

let $router = new VueRouter();
$router.push(xxx);

2：Home模块组件拆分
--先把静态页面完成
--拆分出静态组件
--获取服务器的数据进行展示
--动态业务

3：三级联动组件完成
---由于三级联动，在Home、Search、Detail，把三级联动注册为全局组件。
好处：只需要注册一次，旧可以在项目中任意地方使用

4：完成其余静态组件
HTML + CSS + 图片资源 ---信息【结构、样式、图片资源】