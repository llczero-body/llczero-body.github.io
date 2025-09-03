<script setup lang="ts">

const props = defineProps<{
    item: {
        title: string,
        img: string,
        content: string
        label: string
    }
}>()


let tag = computed((): any => {
    let obj = CONTENTLIST.find(row => +row.index === props.item.label)
    return obj || {}
})
onMounted(() => {
    // console.log(tag.value, '22222222')
})

</script>

<template>
    <div class="card-wrapper ">
        <img src="../../assets/crad/crad.png" alt="">
        <div class="content">
            <div class="title">{{ item.title }}</div>
            <div class="label">
                <el-tag round :color="tag.color">{{ tag.label }}</el-tag>
            </div>
            <div class="content-text">{{ item.content }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
    border-radius: 30px;
    border: 1px solid #e5e7eb;
    overflow: hidden;
    height: auto;
    margin-bottom: 20px;
    transform: all 1s ease;
       cursor: pointer;
    img {
        width: 100%;
        height: auto;
    }

    .content {

        padding: 10px 20px 20px;

        .title {
            font-size: 20px;
            display: -webkit-box;
            -webkit-line-clamp: 2; // 限制显示2行
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 3em;
        }

        .label {
            .el-tag {
                font-size: 20px;
            }
        }

        .content-text {
            // font-size: 16px;
            // margin-top: 10px;
            // height: 50px;
            // -webkit-line-clamp: 2; // 限制显示2行
            // -webkit-box-orient: vertical;
            // overflow: hidden;
            // height: 3em;
            margin-top: 10px;
            font-size: 15px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 3em;
        }
    }


}

.card-wrapper:hover {
    // transform: translateY(-10px) rotateX(5deg);
}
</style>