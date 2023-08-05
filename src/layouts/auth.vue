<template>
  <el-container
    class="min-h-screen flex justify-center items-center bg-gray-100"
  >
    <div class="shadow-lg bg-white rounded px-8 py-5">
      <h4 class="text-[#337ecc] font-medium m-0 text-xl text-center">
        {{ $route.meta.title || 'Log in' }}
      </h4>
      <slot />
    </div>
  </el-container>
</template>
