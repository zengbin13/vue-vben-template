<template>
  <div>
    <a-input v-model:value="username" placeholder="Basic usage" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
</script>

<style lang="less" scoped></style>
