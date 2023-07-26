<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { Gender } from '~/enums/gender'
import { Register } from '~/types/auth'

definePageMeta({
  layout: 'auth',
  // middleware: ['only-visitor'],
  title: 'Register',
})

useHead({ title: 'Register' })

const authStore = useAuthStore()
const formInstance = ref<FormInstance>()
const formData = ref<Register>({
  username: '',
  phone: '',
  email: '',
  password: '',
  fullName: '',
  dateOfBirth: '',
  gender: '',
})
const formRules = reactive<FormRules<Register>>({
  username: [
    {
      required: true,
      message: 'Please input username',
      trigger: 'blur',
    },
    {
      min: 4,
      message: 'Please input correct username',
      trigger: ['blur', 'change'],
    },
  ],
  phone: [
    {
      required: true,
      message: 'Please input your phone',
      trigger: 'blur',
    },
    {
      min: 10,
      message: 'Please input correct phone',
      trigger: ['blur', 'change'],
    },
  ],
  fullName: [
    {
      required: true,
      message: 'Please input your name',
      trigger: 'blur',
    },
    {
      min: 2,
      message: 'Please input correct name',
      trigger: ['blur', 'change'],
    },
  ],
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
  dateOfBirth: [
    {
      required: true,
      message: 'Please input date of birth',
      trigger: ['blur', 'change'],
    },
  ],
  gender: [
    {
      required: true,
      message: 'Please select gender',
      trigger: 'change',
    },
  ],
})

const handleRegister = (
  formEl: FormInstance | undefined
) => {
  if (!formEl) return

  formEl.validate((valid) => {
    if (valid) {
      return authStore.register(formData.value)
    }
    return false
  })
}
</script>

<template>
  <div class="w-[340px]">
    <el-form
      ref="formInstance"
      :model="formData"
      status-icon
      :rules="formRules"
      size="large"
    >
      <el-form-item prop="fullName">
        <el-input
          v-model="formData.fullName"
          type="text"
          placeholder="Eg: User Test"
        />
      </el-form-item>

      <el-form-item prop="username">
        <el-input
          v-model="formData.username"
          type="username"
          placeholder="Eg: usertest"
        />
      </el-form-item>

      <el-form-item prop="phone">
        <el-input
          v-model="formData.phone"
          type="phone"
          placeholder="Eg: 0387776243"
        />
      </el-form-item>

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
          value-format="YYYY-MM-DD"
          :default-value="new Date(2000, 9, 9)"
        />
      </el-form-item>

      <el-form-item prop="gender">
        <el-radio-group
          v-model="formData.gender"
          style="
            width: 100%;
            display: flex;
            justify-content: space-between;
          "
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
          @click="handleRegister(formInstance)"
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
