<script setup lang="ts">
const props = defineProps<{
  item: {
    title: string;
    img: string;
    content: string;
    label: string;
    id: number;
  };
}>();

let tag = computed((): any => {
  let obj = CONTENTLIST.find((row) => +row.index === props.item.label);
  return obj || {};
});
</script>

<template>
  <div class="card-wrapper">
    <img :src="item.img" alt="" />
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
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
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
      transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .label {
      .el-tag {
        font-size: 20px;
        transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
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
      transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
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
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  border-color: rgba(64, 158, 255, 0.5);
  .content-text,
  img,
  .title {
    transform: scale(1.05);
  }
  :deep(.el-tag) {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
}
</style>
