<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import type { FormInstance } from 'element-plus'
import { loginRules } from '~/validations/auth.rules'
import { Login } from '~/types/auth'
import { getErrorMessage } from '~/helpers/get-error-message'

const authStore = useAuthStore()
const { loginState } = storeToRefs(authStore)

definePageMeta({
  layout: 'auth',
  middleware: ['only-visitor'],
})

const formRef = ref<FormInstance>()
const inputs = reactive<Login>({
  email: 'minh12@gmail.com',
  password: 'minhchiu.it.01',
})

const handleLogin = async (
  formEl: FormInstance | undefined
) => {
  if (!formEl) return

  await formEl.validate((valid) => {
    if (!valid) return

    authStore.login(inputs)
  })
}

// Handle response error from server
watch(
  () => loginState.value.error,
  () => {
    if (loginState.value.error) {
      const { data } = loginState.value.error
      const message = getErrorMessage(data)

      ElNotification({
        title: data.title,
        message,
        dangerouslyUseHTMLString: true,
        type: 'error',
      })
    }
  }
)
</script>

<template>
  <el-form
    ref="formRef"
    :model="inputs"
    :rules="loginRules"
    label-position="top"
    label-width="100px"
    class="min-w-[380px]"
    status-icon
  >
    <h2>{{ loginState.pending }}</h2>
    <!-- email -->
    <el-form-item label="Email" prop="email">
      <el-input
        v-model="inputs.email"
        placeholder="Enter email..."
      />
    </el-form-item>

    <!-- password -->
    <el-form-item label="Password" prop="password">
      <el-input
        v-model="inputs.password"
        type="password"
        placeholder="Enter password..."
      />
    </el-form-item>

    <!-- submit -->
    <el-form-item class="mt-8">
      <el-button
        class="w-full"
        type="primary"
        :loading="loginState.pending"
        @click="handleLogin(formRef)"
      >
        Sign In
      </el-button>
    </el-form-item>
  </el-form>
</template>
