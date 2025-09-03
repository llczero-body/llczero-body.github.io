<script setup lang="ts">

</script>

<template>
    <div class="frostedGlass">
        <div class="frosted-calss"></div>
        <div class="frosted-cover"></div>
        <div class="frosted-cover"></div>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
/* 悬停效果 */
.frostedGlass:hover {
    background: #ffffff1a;
}



.frostedGlass {
    position: relative;
    overflow: hidden;
    background: #ffffff1a;
    border: 1px solid transparent;
    box-shadow:
        0 8px 32px 0 rgba(31, 38, 135, 0.15),
        inset 0 2px 2px 0 rgba(255, 255, 255, 0.2);

    border-radius: 40px;
    padding: 6px 0px;

    .frosted-cover {
        width: 100%;
        height: 100%;
        background: #ffffff1a;
        position: absolute;
        z-index: 3;
        top: 0;
        left: 0;
    }

    .frosted-calss {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
        top: 0;
        inset: 0;
        left: 0;
        // background: rgba(255, 255, 255, 0.25);
        filter: url(#glass-distortion);
        /* 背景模糊效果 - 苹果风格关键 */
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
    }
}
</style>