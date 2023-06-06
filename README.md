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

