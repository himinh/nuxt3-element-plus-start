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
const { loading, authUser } = storeToRefs(authStore)
const from = <string>route.query.form
const checked = ref(true)

const onSubmit = async (formEl?: FormInstance) => {
  if (!formEl) return

  await formEl.validate((valid) => {
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
  <div class="w-[390px]">
    <el-form
      ref="formInstance"
      :model="formData"
      status-icon
      :rules="registerRules"
      size="large"
      @submit.prevent="onSubmit(formInstance)"
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

      <el-form-item prop="gender" class="mb-2!">
        <el-radio-group
          v-model="formData.gender"
          style="width: 100%; display: flex; justify-content: space-between"
        >
          <el-radio :label="Gender.MALE">Male</el-radio>
          <el-radio :label="Gender.FEMALE">Female</el-radio>
          <el-radio :label="Gender.OTHER">Other</el-radio>
        </el-radio-group>
      </el-form-item>

      <div>
        <el-checkbox v-model="checked" class="whitespace-normal!" size="large">
          <el-text size="small" class="text-[#6b7078]! font-thin!"
            >(Optional) It’s okay to send me emails with HIM updates, tips, and
            special offers. You can opt out at any time.</el-text
          >
        </el-checkbox>
      </div>

      <el-form-item class="my-3!">
        <el-button
          size="default"
          type="primary"
          w-full
          mt-2
          native-type="submit"
          :loading="loading"
          >Register</el-button
        >
      </el-form-item>

      <el-text
        tag="p"
        size="small"
        class="text-[#6b7078]! font-thin! flex flex-wrap items-center"
      >
        By registering, you agree to HIM's
        <el-link
          :underline="false"
          type="primary"
          class="font-thin! text-xs! px-1!"
          >Terms of Service
        </el-link>
        and
        <el-link :underline="false" type="primary" class="font-thin!"
          >Privacy Policy</el-link
        >
      </el-text>

      <el-link
        type="primary"
        class="font-thin! text-xs!"
        mt-4
        :underline="false"
        @click="navigateTo(`/auth/login`)"
        >Already have an account?</el-link
      >
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
