<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { storeToRefs } from 'pinia'
import { loginRules } from '~/utils/validations'

useHead({ title: 'Log In' })
definePageMeta({
  layout: 'auth',
  middleware: ['only-visitor'],
  title: 'Log In',
})

const route = useRoute()
const authStore = useAuthStore()
const formInstance = ref<FormInstance>()

const { formData, resetFormData } = useAuthForm()
const { loading, authUser } = storeToRefs(authStore)
const from = <string>route.query.form || ''

const onSubmit = async (formEl?: FormInstance) => {
  if (!formEl) return

  await formEl.validate((valid: boolean) => {
    if (!valid) return false

    const user = {
      email: formData.value.email,
      password: formData.value.password,
    }

    authStore.login(user)
  })
}

const sendForgotPassword = async (formEl?: FormInstance) => {
  if (!formEl) return

  await formEl.validate(async (valid: boolean) => {
    if (!valid) return false

    await authStore.forgotPassword(formData.value.email)
  })
}

watch(
  () => authUser.value,
  () => {
    if (authUser.value) {
      navigateTo(from, { replace: true })

      ElNotification({
        message: 'Login success!',
        type: 'success',
        position: 'bottom-right',
        duration: 2000,
      })

      resetFormData()
    }
  }
)
</script>

<template>
  <div class="w-[340px]">
    <el-alert title="" type="info" show-icon :closable="false">
      The account demo:
      <el-tag class="ml-2">user@gmail.com</el-tag>
    </el-alert>

    <el-form
      ref="formInstance"
      :model="formData"
      status-icon
      :rules="loginRules"
      size="large"
      @submit.prevent="onSubmit(formInstance)"
    >
      <el-form-item prop="email">
        <el-input
          v-model="formData.email"
          type="text"
          placeholder="Email/phone/username"
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

        <el-button
          size="small"
          type="primary"
          link
          bg
          :loading="loading"
          @click="sendForgotPassword(formInstance)"
          >Forgot password</el-button
        >
      </div>

      <el-form-item style="margin-top: 10px">
        <el-button
          size="default"
          type="primary"
          native-type="submit"
          w-full
          mt-2
          :loading="loading"
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
