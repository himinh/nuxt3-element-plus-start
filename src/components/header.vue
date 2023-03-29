<script setup lang="ts">
const router = useRouter()

const navigateTo = (path: string) => router.push(path)
</script>

<template>
  <header flex items-center justify-between bg-gray-100 p-4>
    <el-avatar
      :size="60"
      shape="square"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png?20221012140704"
    />
    <span class="py-2 bg-black"> items </span>

    <div>
      <button
        class="text-white font-bold py-2 px-4 rounded mr-4"
        bg="blue-500 hover:blue-700"
        hover="cursor-pointer"
        md="bg-red-500"
        @click="navigateTo('/login')"
      >
        Login
        <el-icon
          class="p-2 bg-red-300 hover:bg-red-400 hover:cursor-pointer"
          size="20"
        >
          <el-icon-circle-plus />
        </el-icon>
      </button>
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        @click="navigateTo('/logout')"
      >
        Logout
      </button>
    </div>
  </header>
</template>
