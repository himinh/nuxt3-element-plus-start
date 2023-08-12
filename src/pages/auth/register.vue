<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { storeToRefs } from 'pinia'
import { Gender } from '~/utils/enums/gender'
import { registerRules } from '~/utils/validations'

useHead({ title: 'Register' })
definePageMeta({
  layout: 'auth',
  middleware: ['only-visitor'],
  title: 'Register',
})

const route = useRoute()
const authStore = useAuthStore()
const formInstance = ref<FormInstance>()

const { formData, resetFormData } = useAuthForm()
const { authLoading, authUser } = storeToRefs(authStore)
const from = <string>route.query.form

const onSubmit = (formEl?: FormInstance) => {
  if (!formEl) return

  formEl.validate((valid) => {
    if (valid) authStore.register(formData.value)
  })
}

watch(
  () => authUser.value,
  () => {
    if (authUser.value) {
      navigateTo(from, { replace: true })

      ElNotification({
        message: 'Register success!',
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
    <el-form
      ref="formInstance"
      :model="formData"
      status-icon
      :rules="registerRules"
      size="large"
      @submit="onSubmit(formInstance)"
    >
      <el-form-item prop="fullName">
        <el-input
          v-model="formData.fullName"
          type="text"
          placeholder="Enter full name"
        />
      </el-form-item>

      <el-form-item prop="username">
        <el-input
          v-model="formData.username"
          type="username"
          placeholder="Enter username"
        />
      </el-form-item>

      <el-form-item prop="phone">
        <el-input
          v-model="formData.phone"
          type="phone"
          placeholder="Enter your phone"
        />
      </el-form-item>

      <el-form-item prop="email">
        <el-input
          v-model="formData.email"
          type="email"
          placeholder="Enter email"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="formData.password"
          type="password"
          placeholder="Enter password"
        />
      </el-form-item>

      <el-form-item prop="dateOfBirth">
        <el-date-picker
          v-model="formData.dateOfBirth"
          style="width: 100%"
          type="date"
          placeholder="Date of birth"
          w-full
          format="DD/MM/YYYY"
          value-format="x"
          :default-value="new Date(2000, 9, 9)"
        />
      </el-form-item>

      <el-form-item prop="gender">
        <el-radio-group
          v-model="formData.gender"
          style="width: 100%; display: flex; justify-content: space-between"
        >
          <el-radio :label="Gender.MALE">Male</el-radio>
          <el-radio :label="Gender.FEMALE">Female</el-radio>
          <el-radio :label="Gender.OTHER">Other</el-radio>
        </el-radio-group>
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
          native-type="submit"
          :loading="authLoading.isLoading"
          @click="onSubmit(formInstance)"
          >Register</el-button
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
