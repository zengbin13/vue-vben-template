<template>
  <div class="w-full h-full px-4 relative login-wrap">
    <div class="container mx-auto h-full">
      <div class="flex h-full">
        <div class="h-full xl:w-6/12 flex items-center">
          <h1 class="text-white text-2xl">开箱即用的中后台管理系统</h1>
        </div>
        <div class="h-full xl:w-6/12 flex justify-center items-center">
          <LoginForm class="w-72" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from './LoginForm.vue';
</script>

<style lang="less" scoped>
.login-wrap::before {
  width: 100%;
  height: 100%;
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  background-image: url('../../../assets/svg/login-bg.svg');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 100%;
  margin-left: -48%;
}
</style>
