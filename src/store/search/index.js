import { reqGetSearchInfo } from "@/api";

// search模块的小仓库
const state = {
    searchList:{}
};
const mutations ={
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
};
const actions = {
    // 获取search模块数据
    async getSearchList({commit},params={}){
        // 当前这个reqGetSearchInfo函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
        // params形参，是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params);
        if(result.code == 200){
            commit('GETSEARCHLIST',result.data);
        }
    }
};
// 计算属性，简化数据而生
const getters = {
    goodsList(state){
        return state.searchList.goodsList || [];
    },
    trademarkList(){
        return state.searchList.trademarkList || [];
    },
    attrsList(){
        return state.searchList.attrsList || [];
    }

};

export default {
    state,
    mutations,
    getters,
    actions
}

