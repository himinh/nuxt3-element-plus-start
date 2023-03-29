<script lang="ts" setup>
import { authService } from '../services/auth.service'

// definePageMeta({
//   middleware: ['auth'],
// })
const { data, pending, error } = await authService.refreshToken('asdf')
</script>

<template>
  <div class="flex justify-content-center flex-column">WE;;</div>
</template>
