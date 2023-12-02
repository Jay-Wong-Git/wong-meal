<script setup>
import Meal from "./Meal.vue";

const props = defineProps(["meals"]);
</script>

<template>
    <!-- 所有汉堡的容器 -->
    <div class="meals">
        <!-- 显示商品信息 -->
        <Meal v-for="meal of props.meals" :meal="meal" :show-desc="$attrs.showDesc"></Meal>
        <!-- 未找到商品时显示信息 -->
        <div v-show="!props.meals||props.meals.length===0" style="font-size: 30rem">未找到相关商品</div>
    </div>
</template>

<style scoped>
.meals {
    /*减去搜索框的高度*/
    height: calc(100vh - 120rem);
    /*内容过多的时候自动出现滚动条*/
    overflow: auto;
    /*防止商品信息被底部购物车条遮住*/
    padding-bottom: 160rem;
}
</style>