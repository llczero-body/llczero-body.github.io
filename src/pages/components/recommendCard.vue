<script setup lang="ts">

const props = defineProps<{
    item: {
        title: string,
        img: string,
        content: string
        label: string
    }
}>()

</script>

<template>
    <div class="card-wrapper">
        <img src="../../assets/crad/crad.png" alt="">
        <div class="content">
            <div class="title">{{ item.title }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
    display: flex;
    padding: 10px;
    border-radius: 20px;
    overflow: hidden;
    height: auto;
    margin-bottom: 12px;
    transform: all 1s ease;
    cursor: pointer;
    img {
        width: 64px;
        height: 64px;
            object-fit: cover;
        border-radius: 20px;
    }

    .content {
        padding: 0 20px;

        .title {
            font-size: 14px;
            display: -webkit-box;
            -webkit-line-clamp: 2; // 限制显示2行
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 3em;
        }

    }


}

.card-wrapper:hover {
  background-color:rgb(249 ,115, 22,1);
  color: #fff;
  box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08)
}
</style>