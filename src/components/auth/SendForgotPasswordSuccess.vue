<script setup lang="ts">
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()

const { forgotPassSent } = storeToRefs(authStore)
</script>

<template>
  <el-dialog
    v-model="forgotPassSent.isSent"
    title="Instructions Sent"
    class="min-w-xs max-w-md"
    align-center
  >
    <span
      >We sent instructions to change your password to
      <strong>{{ forgotPassSent.email }}</strong
      >, please check both your inbox and spam folder.</span
    >

    <template #footer>
      <span class="dialog-footer">
        <el-button
          type="primary"
          @click="() => authStore.setForgotPassSent(false)"
        >
          Okay
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
