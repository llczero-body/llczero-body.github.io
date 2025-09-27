<script setup lang="ts">
import mdList from "@/mock/md.ts";
const route = useRoute();
const markdown = ref(null);
let obj = reactive({});
onMounted(() => {
  const md = mdList.find((item) => item.id === +route.params.id);
  obj = md;
  markdown.value = md.component;
});
</script>

<template>
  <div class="md-details-wrapper module">
    <div class="md-details-title">{{ obj.title }}</div>
    <component :is="markdown"></component>
  </div>
</template>

<style scoped lang="scss">
.md-details-title {
  text-align: center;
  font-size: 30px;
}
.md-details-wrapper {
  margin-bottom: 30px;
}
</style>