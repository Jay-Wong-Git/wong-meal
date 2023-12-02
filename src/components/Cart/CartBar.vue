<script setup>
import carBag from "@/assets/bag.png";
import CartDetail from "@/components/Cart/CartDetail.vue";
import {useMealsStore} from "@/store/meals";
import {ref} from "vue";
import Checkout from "@/components/Checkout/Checkout.vue";

const mealsStore = useMealsStore();
const showDetail = ref(false);
const showCheckout = ref(false);
</script>

<template>
    <Checkout :is-show="showCheckout" @close="showCheckout=false"></Checkout>
    <CartDetail :is-show="showDetail" @hide="showDetail=false"></CartDetail>
    <div class="cart-bar">
        <div class="cart-bag">
            <img :src="carBag" alt="cart-bag">
            <span v-show="mealsStore.totalCount>0" class="total-count">{{ mealsStore.totalCount }}</span>
        </div>
        <div class="total-amount">
            <p v-show="mealsStore.totalCount>0" class="has-goods" @click="showDetail=true">{{
                    mealsStore.totalAmount
                }}</p>
            <p v-show="!mealsStore.totalCount>0" class="no-goods">未选购商品</p>
        </div>
        <button @click="showCheckout=mealsStore.totalCount>0" class="to-checkout">去结算</button>
    </div>
</template>

<style scoped>
.cart-bar {
    width: 710rem;
    height: 100rem;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 40rem;
    margin: 0 auto;
    background-color: rgb(58, 58, 58);
    border-radius: 50rem;
    z-index: 999;
}

.cart-bag {
    position: absolute;
    top: -24rem;
    width: 100rem;
}

.total-count {
    position: absolute;
    right: -10rem;
    background-color: red;
    height: 40rem;
    width: 40rem;
    border-radius: 50%;
    color: #fff;
    line-height: 40rem;
    text-align: center;
    font-size: 30rem;
}

.total-amount {
    margin-left: 140rem;
    line-height: 100rem;
}

.no-goods, .has-goods {
    color: rgb(148, 148, 148);
    font-size: 35rem;
    font-weight: bold;
}

.has-goods {
    color: #fff;
}

.has-goods::before {
    content: "¥";
    font-size: 30rem;
    margin-right: 10rem;
}

.to-checkout {
    position: absolute;
    top: 0;
    right: 0;
    width: 200rem;
    height: 100%;
    border-radius: 50rem;
    border: none;
    background-color: rgb(248, 188, 0);
    font-size: 40rem;
}
</style>