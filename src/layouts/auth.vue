<template>
  <el-container
    class="min-h-screen flex justify-center items-center bg-gray-100"
  >
    <div class="shadow-lg bg-white rounded-lg p-5">
      <h4 class="pb-4 text-xl text-primary text-center">
        {{ $route.meta.title || 'Đăng Nhập' }}
      </h4>
      <slot />
    </div>
  </el-container>
</template>
