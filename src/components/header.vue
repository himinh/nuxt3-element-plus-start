<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'

const router = useRouter()
const authStore = useAuthStore()

const { authUser } = storeToRefs(authStore)
const menus = [
  { name: "Home", path: "/" },
  { name: "Test", path: "/paper" },
  { name: "Groups", path: "/list/groups" },
  { name: "Flash Sale", path: "/list/flash-sale" },
  { name: "Live", path: "/list/live" },
  { name: "Column", path: "/list/column" },
  { name: "Book", path: "/list/book" },
  { name: "BBS", path: "/list/bbs" },
  { name: "Courses", path: "/list/courses" },
]
const activeIndex = ref('0')

const navigateTo = (path: string) => router.push(path)

const handleLogout = () => authStore.logout()
const goHome = () => navigateTo("/")
const goLogin = () => navigateTo("")
const handleSelect = (key: string, keyPath: string[]) => {
  console.log({ key, keyPath })
}

</script>

<template>
  <header class="header-box shadow">
    <div container mx-auto class="flex justify-between items-center h-full">
      <!-- logo -->
      <div class="logo-box">
        <h4 class="text" @click="goHome">IT programming</h4>
      </div>

      <!-- menus -->
      <div class="menu-box">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
          <el-menu-item v-for="(menu, index) in menus" :key="index" :index="`${index}`" @click="navigateTo(menu.path)">{{
            menu.name
          }}</el-menu-item>
        </el-menu>
      </div>

      <div class="nav-right">
        <el-button :icon="Search" circle />
        <el-button plain @click=""> Log in </el-button>
      </div>

      <!-- users -->
    </div>
    <el-avatar :size="60" shape="square"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png?20221012140704"
      @click="navigateTo('/')" />
    <span class="py-2 bg-black"> items </span>

    <span class="px-4 py-2 bg-red-400 cursor-pointer" @click="navigateTo('/users')">users</span>

    <div>
      <el-button v-if="authUser" type="primary" @click="handleLogout">
        Logout
      </el-button>

      <el-button v-else type="primary" @click="navigateTo('/auth/login')">
        Login
        <el-icon size="20">
          <el-icon-circle-plus />
        </el-icon>
      </el-button>

    </div>
  </header>
</template>
<style scoped lang="scss">
.header-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
}

.logo-box {
  >.text {
    font-size: 20px;
    font-weight: 700;
    padding: 0;
    margin: 0;
  }
}
</style>