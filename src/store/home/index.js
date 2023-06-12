import { reqCategoryList } from "@/api";
// home模块的小仓库
const state = {
    //state中数据默认初始值别乱写
    categoryList:[]
};
const mutations ={
    CATEGRORYLIST(sate,categoryList){
        state.categoryList = categoryList
    }
};
const actions = {
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code == 200){
            commit('CATEGRORYLIST',result.data)
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    getters,
    actions
}

