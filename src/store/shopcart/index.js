
import { reqCarList,reqDeleteCartById,reqUpdateCheckedByid } from "@/api";

const state = {
    cartList:[]
}
const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList
    }
}
const actions = {
    // 获取购物车列表数据
    async getCarList({commit}){
        let result = await reqCarList();
        if(result.code == 200){
            commit('GETCARTLIST',result.data);
        }
    },
    // 删除购物车某一个产品
    async deleteCartListBySkuId({commit},skuId){
        let result = await reqDeleteCartById(skuId);
    },
    // 修改购物车某一个产品的选中状态
    async updateCheckedById({commit},skuId){
        let result = await reqUpdateCheckedByid();
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    // 删除全部选中商品
    deleteAllCheckedCart({dispatch,getters}){
        // context:小仓库，commit【提交mutationsxiugaistate】getters【计算属性】dispatch【派发action】state【当前仓库数据】
        // 获取购物车中全部的产品(是一个数组)
        let PromiseAll = [];
        getters.carList.cartInfoList.forEach(item => {
            item.isChecked == 1? dispatch('deleteCartListBySkuId', item.skuId):'';
            // 将每一次返回的promise添加到数组当中
            PromiseAll.push(promise);
        })
        return Promise.all(PromiseAll);
    },
    // 修改全部产品的状态
    updateAllCartIsChecked({dispatch,state},isChecked){
        let promiseAll = []
        state.carList[0].cartInfoList.forEach(item => {
            let promise = dispatch('updateCheckedById',{skuId:item.skuId,isChecked});
            promiseAll.push(promise);
        })
        return Promise.all(promiseAll)
    }
    
}
const getters = {
    cartList(state){
        return state.cartList[0] || {}
    },
}

export default {
    state,
    mutations,
    getters,
    actions
}