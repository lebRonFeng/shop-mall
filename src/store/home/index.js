import { reqCategoryList, reqGetBannerList } from "@/api";
// home模块的小仓库
const state = {
    //state中数据默认初始值别乱写
    categoryList:[],
    bannerList:[]
};
const mutations ={
    GETCATEGRORYLIST(sate,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    }
};
const actions = {
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code == 200){
            commit('GETCATEGRORYLIST',result.data)
        }
    },
    // 获取首页轮播图数据
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        if(result.code == 200){
            commit('GETBANNERLIST', result.data)
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

