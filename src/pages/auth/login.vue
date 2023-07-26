<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
const title = 'Log In'

definePageMeta({
  layout: 'auth',
  // middleware: ['only-visitor'],
  title: 'Log In',
})

useHead({ title: 'Log In' })

interface FormData {
  email: string
  password: string
}

const formInstance = ref<FormInstance>()
const formData = ref<FormData>({
  email: '',
  password: '',
})
const formRules = reactive<FormRules<FormData>>({
  email: [
    {
      required: true,
      message: 'Please input email address',
      trigger: 'blur',
    },
    {
      type: 'email',
      message: 'Please input correct email address',
      trigger: ['blur', 'change'],
    },
  ],
  password: [
    {
      required: true,
      message: 'Please input password',
      trigger: 'blur',
    },
    {
      type: 'string',
      min: 6,
      max: 50,
      trigger: ['blur', 'change'],
    },
  ],
})

const handleLogin = (formEl: FormInstance | undefined) => {
  if (!formEl) return

  formEl.validate((valid) => {
    if (valid) {
      // console.log({ formData })
    }

    return false
  })
}
</script>

<template>
  <div class="w-[340px]">
    <el-alert
      title=""
      type="info"
      show-icon
      :closable="false"
    >
      The account demo:
      <el-tag class="ml-2">user@gmail.com</el-tag>
    </el-alert>

    <el-form
      ref="formInstance"
      :model="formData"
      status-icon
      :rules="formRules"
      size="large"
    >
      <el-form-item prop="email">
        <el-input
          v-model="formData.email"
          type="email"
          placeholder="Eg: user@gmail.com"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="formData.password"
          type="password"
          placeholder="Enter your password"
        />
      </el-form-item>

      <div class="flex justify-between">
        <el-button
          size="small"
          type="primary"
          link
          bg
          @click="navigateTo('/auth/register')"
          >Register</el-button
        >

        <el-button size="small" type="primary" link bg
          >Forgot password</el-button
        >
      </div>

      <el-form-item style="margin-top: 10px">
        <el-button
          size="default"
          type="primary"
          w-full
          mt-2
          @click="handleLogin(formInstance)"
          >Login</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.el-alert {
  margin-top: 12px;
}

.el-form-item {
  margin-top: 20px;
}
</style>
