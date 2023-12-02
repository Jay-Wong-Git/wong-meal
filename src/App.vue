<script setup>
import Meals from "@/components/Meals/Meals.vue";
import MealsFilter from "@/components/MealsFilter/MealsFilter.vue";
import CartBar from "@/components/Cart/CartBar.vue";
import {useMealsStore} from "@/store/meals";
// 加载 mealsStore
const mealsStore = useMealsStore();
</script>

<template>
    <MealsFilter></MealsFilter>
    <Meals :meals="mealsStore.filterMeals" :show-desc="true"></Meals>
    <CartBar></CartBar>
</template>

<style scoped>

</style>