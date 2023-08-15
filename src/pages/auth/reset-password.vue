<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { storeToRefs } from 'pinia'

useHead({ title: 'Reset Password' })
definePageMeta({
  layout: 'auth',
  middleware: ['only-visitor'],
  title: 'Reset Password',
})

const route = useRoute()
const authStore = useAuthStore()
const formInstance = ref<FormInstance>()

const formData = reactive({
  password: '',
  passwordConfirm: '',
})

const { loading } = storeToRefs(authStore)
const token = <string>route.query.token

const onSubmit = async (formEl?: FormInstance) => {
  if (!formEl) return

  await formEl.validate(async (valid) => {
    if (!valid) return

    const res = await authStore.resetPassword({
      token,
      password: formData.password,
    })

    if (res) {
      formEl.resetFields()

      ElNotification({
        message: 'Reset password success!',
        type: 'success',
        position: 'bottom-right',
        duration: 2000,
      })

      navigateTo('/')
    }
  })
}

const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (formData.passwordConfirm !== '') {
      if (!formInstance.value) return

      formInstance.value.validateField('passwordConfirm', () => null)
    }

    callback()
  }
}
const validatePasswordConfirm = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== formData.password) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const formRules = reactive<FormRules<typeof formData>>({
  password: [{ validator: validatePassword, trigger: 'blur' }],
  passwordConfirm: [{ validator: validatePasswordConfirm, trigger: 'blur' }],
})
</script>

<template>
  <div class="w-[340px]">
    <el-form
      ref="formInstance"
      :model="formData"
      status-icon
      :rules="formRules"
      size="large"
      @submit.prevent="onSubmit(formInstance)"
    >
      <el-form-item prop="password">
        <el-input
          v-model="formData.password"
          type="password"
          placeholder="Enter password"
        />
      </el-form-item>

      <el-form-item prop="passwordConfirm">
        <el-input
          v-model="formData.passwordConfirm"
          type="password"
          placeholder="Enter password confirm"
        />
      </el-form-item>

      <div class="flex justify-between">
        <el-button
          size="small"
          type="primary"
          link
          bg
          @click="navigateTo('/auth/login')"
          >Log In</el-button
        >

        <el-button
          size="small"
          type="primary"
          link
          bg
          @click="navigateTo('/auth/register')"
          >Register</el-button
        >
      </div>

      <el-form-item style="margin-top: 10px">
        <el-button
          size="default"
          type="primary"
          w-full
          mt-2
          native-type="submit"
          :loading="loading"
          >Reset password</el-button
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
