<script setup lang="ts">
const markdown = ref(null);
</script>
<template>
  <div class="md-wrapper">
    <component :is="markdown"></component>
  </div>
</template>
<style lang="scss" scoped></style>
