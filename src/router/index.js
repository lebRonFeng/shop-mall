// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';
// 使用插件
Vue.use(VueRouter)

import store from '@/store'
// 先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写push|replace
// 第一个参数：告诉原来push方法，你往哪里跳转（传递哪些参数）
// 第二个参数：成功的回调
// 第三个参数：失败的回调
// call 、apply区别
// 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
// 不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    } else {
        originPush.call(this,location,()=>{},()=>{});
    }
}

VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    } else {
        originReplace.call(this,location,()=>{},()=>{});
    }
}
// 配置路由
let router = new VueRouter({
    routes,
    // 滚动行为
    scrollBehavior (to, from, savedPosition) {
    //    返回的这个y=0，代表的滚动条在最上方
    return {y:0};
    }
})

// 全局守卫，前置守卫（在路由跳转之间进行判断）
router.beforeEach(async (to,from,next) =>{
    // next:放行函数 next()放行 next(path)放行到指定路由 next(false)
    // next();
    let token = store.state.user.token;
    if(token){
        if(to.path == '/login'||to.path == '/register'){
            next('/')
        }else{
            // 登录了，但是去的不是login【home|search|detail|shopcart】
            // 如果用户名已有 
            if(name){
                next();
            }else{
                // 没有用户信息，派发action让仓库存储用户信息在跳转
                try {
                    await store.dispatch('getUserInfo')
                } catch (error) {
                    alert(error.message)
                    // token失效了，获取不到用户信息
                    // 清除token
                    await store.dispatch('userLogout');
                    next('/login');
                }
            }
            next();
        }
    }else{
        // 未登录,不能去交易相关、支付线管、个人中心
        let toPath = to.path;
        if(toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1 || toPath.indexOf('/center')!=-1){
            next('/login?redirect='+toPath)
        }else{
            next();
        }
        
    }                                                                                                                                                                                                                                     

})
export default router;