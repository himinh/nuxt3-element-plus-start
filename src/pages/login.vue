<script lang="ts" setup>
// const { login } = useAuthStore()

// await login('minhchiu@gmail.com', 'minh123123')
</script>

<template>
  <form class="max-w-sm mx-auto mt-8">
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="email">
        Email
      </label>
      <input
        id="email"
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500"
        type="email"
        placeholder="Email"
      />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 font-bold mb-2" for="password">
        Mật khẩu
      </label>
      <input
        id="password"
        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline border-red-500"
        type="password"
        placeholder="Mật khẩu"
      />
      <p class="text-red-500 text-xs italic">Vui lòng nhập mật khẩu.</p>
    </div>
    <div class="flex items-center justify-between">
      <el-button> Đăng nhập </el-button>
      <a
        class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        href="#"
      >
        Quên mật khẩu?
      </a>
    </div>
  </form>
</template>
