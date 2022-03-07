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
        <el-button type="primary" class="w-full" size="large" @click="submitLoginForm(ruleFormRef)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { ElForm } from 'element-plus';
import { notification } from '@/hooks/web/useMessage';

type FormInstance = InstanceType<typeof ElForm>;
const ruleFormRef = ref<FormInstance>();

interface LoginData {
  username: string;
  password: string;
}
const loginData = reactive<LoginData>({
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
      max: 8,
      message: '账号长度为6-8位',
      trigger: 'blur',
    },
  ],
});

const submitLoginForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(valid => {
    if (valid) {
      notification({
        title: '登录成功',
        type: 'success',
      });
    } else {
      console.log('error submit!');
      return false;
    }
  });
};
</script>

<style lang="less" scoped></style>
