<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
  <auth-send-forgot-password-success />

  <el-container
    class="min-h-screen flex justify-center items-center bg-gray-100"
    :class="{ 'bg-dark-100!': isDark }"
  >
    <div
      class="shadow-lg bg-white rounded px-8 py-5"
      :class="{ 'bg-dark-200!': isDark }"
    >
      <h4
        class="text-[#337ecc] font-medium m-0 text-xl text-center"
        @click="toggleDark(!isDark)"
      >
        {{ $route.meta.title || 'Log in' }}
      </h4>
      <slot />
    </div>
  </el-container>
</template>
