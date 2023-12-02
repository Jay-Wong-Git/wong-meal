<script setup>
import Mask from "@/components/UI/Mask.vue";

const props = defineProps(["msg"]);
const emits = defineEmits(["confirmClear", "hide"]);
</script>

<template>
    <Mask>
        <div class="dialog">
            <p class="msg">{{ props.msg }}</p>
            <div class="btn">
                <button @click="emits('hide')" class="cancel">取消</button>
                <button @click="()=>{emits('confirmClear');emits('hide')}" class="ok">确认</button>
            </div>
        </div>
    </Mask>
</template>

<style scoped>
.dialog {
    position: absolute;
    width: 600rem;
    height: 350rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 400rem;
    background-color: #fff;
    margin: auto;
    border-radius: 40rem;
}

.msg {
    height: 240rem;
    font-size: 40rem;
    text-align: center;
    line-height: 240rem;
}

.btn {
    display: flex;
    justify-content: space-around;
}

.cancel, .ok {
    width: 250rem;
    height: 80rem;
    border-radius: 40rem;
    border: 1px solid black;
    background-color: #fff;
    font-size: 35rem;
}

.ok {
    background-color: rgb(248, 188, 0);
    border: none;
}
</style>