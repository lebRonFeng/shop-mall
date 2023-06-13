<template>
    <div>
        <!-- <h1>params参数{{ $route.params.keyword }}==========={{ k }}</h1>
        <h1>query参数{{ $route.query.k }}</h1> -->
        search组件
        <TypeNav></TypeNav>
    </div>
</template>

<script>
export default {
    name: "search",
    // 路由组件可以传递props
    props:['keyword','k']
}
</script>

<style scoped>

</style>