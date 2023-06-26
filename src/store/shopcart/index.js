
import { reqCarList } from "@/api";

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