import { reqGoodsInfo } from "@/api";
const state = {
    goodInfo: {}
};
const mutations = {
    GETGOODINFO(state, goodInfo){
        state.goodInfo = goodInfo;
    }
};
const actions = {
    // 获取产品信息的action
    async getGoodInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId);
        if(result.code === 200){
            commit('GETGOODINFO',result.data);
        }
    }
};
const getters = {
    // 路劲导航简化的数据
    categoryView(state){
        // 比如：state.goodInfo初始值为空对象，空对象的categoryView属性值undefined
        return state.goodInfo.categoryView || {};
    },
    // 简化产品信息的数据
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    },
    // 产品的售卖属性的简化
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || [];
    }

};

export default {
    state,
    mutations,
    getters,
    actions
}