<script setup>
import {useMealsStore} from "@/store/meals";
import Counter from "@/components/UI/Counter.vue";
import carBag from "@/assets/bag.png";

const props = defineProps(["isShow"]);
const emits = defineEmits(["close"]);
const mealsStore = useMealsStore();
</script>

<template>
    <div v-show="props.isShow" class="checkout">
        <div class="close">
            <i @click="emits('close')" class="ri-close-line"></i>
        </div>
        <!-- 订单详情 -->
        <div class="order-detail">
            <header>餐品详情</header>
            <div class="list">
                <div class="item" v-for="meal of mealsStore.cartMeals">
                    <div class="img-wrapper">
                        <img :src="meal.img" :alt="meal.title">
                    </div>
                    <div class="info">
                        <h2 class="title">{{ meal.title }}</h2>
                        <div class="count">
                            <Counter :meal="meal"></Counter>
                            <span class="amount">{{ meal.count * meal.price }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <footer><span>{{ mealsStore.totalAmount }}</span></footer>
        </div>

        <div class="checkout-bar">
            <div class="total-amount">
                <p v-show="mealsStore.totalCount>0" class="has-goods">{{ mealsStore.totalAmount }}</p>
                <p v-show="!mealsStore.totalCount>0" class="no-goods">未选购商品</p>
            </div>
            <button class="payment">去支付</button>
        </div>
    </div>
</template>

<style scoped>
.checkout {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-size: 40rem;
    background-color: rgb(240, 240, 240);
    z-index: 9999;
}

.close {
    height: 60rem;
    line-height: 60rem;
    padding-left: 20rem;
    font-size: 50rem;
    font-weight: bold;
}

.order-detail {
    background-color: #fff;
    margin: 0 20rem;
    border-radius: 40rem;
    padding: 0 20rem;
}

.order-detail header {
    height: 100rem;
    line-height: 100rem;
    font-size: 35rem;
    font-weight: bold;
    border-bottom: 1px dashed #e6e6e6;
}

.list {
    max-height: 800rem;
    overflow: auto;
}

.item {
    display: flex;
}

.img-wrapper {
    width: 200rem;
    margin-right: 20rem;
}

.info {
    flex: auto;
}

.title {
    margin: 25rem 0;
    font-size: 35rem;
}

.count {
    display: flex;
    justify-content: space-between;
}

.amount {
    font-size: 35rem;
    font-weight: bold;
}

.amount::before {
    content: "¥";
    font-size: 30rem;
    margin-right: 5rem;
    font-weight: normal;
}

.order-detail footer {
    position: relative;
    height: 150rem;
    line-height: 150rem;
    font-size: 28rem;
    text-align: right;
    border-top: 1px dashed #e6e6e6;
}

.order-detail footer::before,
.order-detail footer::after {
    position: absolute;
    content: "";
    width: 20rem;
    height: 20rem;
    background-color: rgb(240, 240, 240);
    border-radius: 10rem;
    left: -30rem;
    top: -10rem;
}

.order-detail footer::after {
    left: auto;
    right: -30rem;
}

.order-detail footer span {
    font-size: 35rem;
    font-weight: bold;
}

.order-detail footer span::before {
    content: "合计¥";
    font-size: 30rem;
    margin-right: 5rem;
    font-weight: normal;
}

.checkout-bar {
    width: 710rem;
    height: 100rem;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 40rem;
    margin: 0 auto;
    background-color: rgb(58, 58, 58);
    border-radius: 50rem;
}

.total-amount {
    margin-left: 40rem;
    line-height: 100rem;
}

.no-goods, .has-goods {
    color: rgb(148, 148, 148);
    font-size: 40rem;
    font-weight: bold;
}

.has-goods {
    color: #fff;
}

.has-goods::before {
    content: "合计¥";
    font-size: 30rem;
    margin-right: 10rem;
}

.payment {
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