<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'

const route = useRoute()
const authStore = useAuthStore()

interface IMenu {
  name: string
  path: string
  subMenus?: { name: string; path: string }[]
}
interface IUserOption {
  label: string
  path: string
}

const menus: IMenu[] = [
  { name: 'Home', path: '/' },
  { name: 'Tests', path: '/tests' },
  { name: 'Groups', path: '/groups' },
  {
    name: 'Flash Sales',
    path: '/flash-sales',
    subMenus: [
      { name: 'Hot', path: '/flash-sales/hot' },
      { name: 'New', path: '/flash-sales/new' },
    ],
  },
  { name: 'Lives', path: '/lives' },
  { name: 'Columns', path: '/columns' },
  { name: 'Books', path: '/books' },
  { name: 'BBS', path: '/bbs' },
  { name: 'Courses', path: '/courses' },
]
const userOptions: IUserOption[] = [
  { label: 'Profile', path: '/profile' },
  { label: 'Logout', path: 'logout' },
]
const { authUser } = storeToRefs(authStore)
const mainPath = `/${route.fullPath.split('/')[1]}`
const activeIndex = ref(mainPath)

const handleLogout = () => authStore.logout()
const goHome = () => navigateTo('/')
const goLogin = () => navigateTo('/auth/login')
const handleSelectMenu = (path: string) => navigateTo(path)
const handleSelectUserOption = (path: string) => {
  // handle logout
  if (path === 'logout') {
    authStore.logout()
    return
  }

  navigateTo(path)
  activeIndex.value = path
}
</script>

<template>
  <client-only>
    <header class="fixed top-0 left-0 z-100 w-full shadow">
      <div
        container
        mx-auto
        class="flex justify-between items-center"
      >
        <!-- logo -->
        <div class="cursor-pointer">
          <h4 class="text" @click="goHome">
            IT programming
          </h4>
        </div>

        <!-- menus -->
        <div class="flex-1 ml-8">
          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            style="border-bottom: 0"
            @select="handleSelectMenu"
          >
            <template
              v-for="menu in menus"
              :key="menu.name"
            >
              <!-- sub menu -->
              <el-sub-menu
                v-if="menu.subMenus"
                :index="menu.path"
              >
                <template #title>
                  {{ menu.name }}
                </template>
                <el-menu-item
                  v-for="subMenu in menu.subMenus!"
                  :key="subMenu.path"
                  :index="subMenu.path"
                  >{{ subMenu.name }}</el-menu-item
                >
              </el-sub-menu>

              <!-- menu -->
              <el-menu-item v-else :index="menu.path">{{
                menu.name
              }}</el-menu-item>
            </template>
          </el-menu>
        </div>

        <!-- nav right -->
        <div class="flex items-center">
          <el-button :icon="Search" circle class="mr-2" />

          <!-- users -->
          <el-dropdown
            v-if="authUser"
            @command="handleSelectUserOption"
          >
            <el-avatar
              :size="32"
              shape="circle"
              class="cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/fa/2/2b/Starship_Entertainment.png"
            />

            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="option in userOptions"
                  :key="option.path"
                  :command="option.path"
                  >{{ option.label }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <el-button v-else plain @click="goLogin">
            Log in
          </el-button>
        </div>

        <!-- users -->
      </div>
    </header>
  </client-only>
</template>
