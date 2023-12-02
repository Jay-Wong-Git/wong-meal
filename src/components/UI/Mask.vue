<script setup>
const props = defineProps(["isShow"]);
const emits = defineEmits(["hide"])
</script>

<template>
    <teleport to="body">
        <div :style="$attrs.style" class="mask" v-show="props.isShow" @click.self="emits('hide')">
            <slot></slot>
        </div>
    </teleport>
</template>

<style scoped>
.mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .3);
    z-index: 999;
}
</style>