<template>
  <div>
    <el-form ref="ruleFormRef" :model="loginData" :rules="rules">
      <el-form-item prop="username">
        <el-input v-model="loginData.username" placeholder="账号" size="large"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginData.password"
          type="password"
          placeholder="密码"
          size="large"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="w-full"
          size="large"
          :loading="loading"
          @click="handleLogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { ElForm } from 'element-plus';
import { useMessage } from '@/hooks/web/useMessage';
import { useUserStore } from '@/store/modules/user';
import type { LoginParams } from '#/store';

type FormInstance = InstanceType<typeof ElForm>;
const ruleFormRef = ref<FormInstance>();
const { createMessage } = useMessage();
// 数据
const loginData = reactive<LoginParams>({
  username: '',
  password: '',
});
const rules = reactive({
  username: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur',
    },
    {
      min: 3,
      max: 6,
      message: '账号长度为3-6位',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
    {
      min: 6,
      max: 20,
      message: '账号长度为6-20位',
      trigger: 'blur',
    },
  ],
});
const loading = ref(false);
const userStore = useUserStore();

// 登录前端校验
const validForm = (formEl: FormInstance | undefined): boolean => {
  if (!formEl) return false;
  let validRes = false;
  formEl.validate(valid => (validRes = !!valid));
  return validRes;
};
const handleLogin = async () => {
  const validFormRes = validForm(ruleFormRef.value);
  if (!validFormRes) return;
  try {
    loading.value = true;
    const userInfo = await userStore.login(loginData);
  } catch (error) {
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="less" scoped></style>
