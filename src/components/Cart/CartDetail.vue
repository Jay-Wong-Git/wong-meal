<script setup>
import Mask from "@/components/UI/Mask.vue"
import Meals from "@/components/Meals/Meals.vue";
import {useMealsStore} from "@/store/meals";
import Dialog from "@/components/UI/Dialog.vue";
import {ref} from "vue";

const mealsStore = useMealsStore();
const showDialog = ref(false);
const emits = defineEmits(["hide"]);

const confirmClearHandler = () => {
    /*所有商品数量归零*/
    mealsStore.clearCart();
    /*隐藏购物车详情页面*/
    emits("hide");
}
</script>

<template>
    <Mask style="z-index: 99">
        <Dialog :msg="'确认要清空购物车吗?'" :is-show="showDialog" @hide="showDialog=false"
                @confirm-clear="confirmClearHandler"></Dialog>
        <div class="cart-detail">
            <div class="header">
                <h2>餐品详情</h2>
                <a href="javascript:;" @click="showDialog=true">
                    <i class="ri-delete-bin-line"></i>
                    清空购物车
                </a>
            </div>
            <Meals :meals="mealsStore.cartMeals" :show-desc="false"></Meals>
        </div>
    </Mask>
</template>

<style scoped>
.cart-detail {
    position: absolute;
    width: 100%;
    bottom: 0;
    font-size: 40rem;
    background-color: #fff;
    border-top-left-radius: 30rem;
    border-top-right-radius: 30rem;
}

.meals {
    height: auto;
    max-height: calc(280rem * 4);
}

.header {
    display: flex;
    justify-content: space-between;
    padding: 20rem 30rem 0 40rem;
}

.header h2 {
    font-size: 30rem;
}

.header a {
    display: flex;
    align-items: center;
    font-size: 30rem;
    color: #9f9f9f;
}

.header i {
    margin-right: 10rem;
}
</style>