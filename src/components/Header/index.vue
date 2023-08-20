<script setup lang="ts">
import { storeToRefs } from 'pinia'

const route = useRoute()
const authStore = useAuthStore()

const menuItems = [
  {
    id: 10,
    title: 'Menu 10',
    level: 2,
    position: 1,
    parentId: 6,
  },
  {
    id: 1,
    title: 'Menu 1',
    level: 1,
    position: 1,
  },
  {
    parentId: 1,
    id: 2,
    title: 'Menu 2',
    level: 2,
    position: 1,
  },
  {
    parentId: 1,
    id: 3,
    title: 'Menu 3',
    level: 2,
    position: 2,
  },
  {
    parentId: 2,
    id: 4,
    title: 'Menu 4',
    level: 3,
    position: 1,
  },
  {
    parentId: 2,
    id: 5,
    title: 'Menu 5',
    level: 3,
    position: 2,
  },
  {
    title: 'Menu 6',
    id: 6,
    level: 1,
    position: 2,
  },
  {
    title: 'Menu 7',
    id: 7,
    level: 1,
    position: 3,
  },
  {
    title: 'Menu 8',
    id: 8,
    level: 1,
    position: 1,
  },
  {
    id: 9,
    title: 'Menu 9',
    level: 2,
    position: 1,
    parentId: 6,
  },
]

const buildMenuTree = (menuItems: any[]) => {
  const menuMap: any = {}
  const rootMenus: any[] = []

  // Build a map of menus by their IDs
  menuItems.forEach((menu) => {
    menu.subMenus = []
    menuMap[menu.id] = menu
  })

  // Populate the subMenus array of each menu
  menuItems.forEach((menu) => {
    if (menu.parentId) {
      menuMap[menu.parentId].subMenus.push(menu)
    } else {
      rootMenus.push(menu)
    }
  })

  // Sort subMenus arrays by position
  const sortSubMenus = (menu: any) => {
    menu.subMenus.sort((a: any, b: any) => a.position - b.position)
    menu.subMenus.forEach(sortSubMenus)
  }

  rootMenus.sort((a, b) => a.position - b.position)
  rootMenus.forEach(sortSubMenus)

  return rootMenus
}

const menusWithSubMenus = buildMenuTree(menuItems)

const { authUser } = storeToRefs(authStore)
const mainPath = `/${route.fullPath.split('/')[1]}`
const activeIndex = ref(mainPath)

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
    <header class="fixed top-0 left-0 z-100 w-full shadow h-[60px]">
      <div class="max-w-[1140px] mx-auto">
        <div container mx-auto class="flex justify-between items-center h-full">
          <!-- logo -->
          <div class="cursor-pointer">
            <h4 class="text" @click="goHome">IT programming</h4>
          </div>
          <!-- end log -->

          <!-- Center -->
          <div class="flex-1 ml-8">
            <!-- menus -->
            <el-menu
              :default-active="activeIndex"
              mode="horizontal"
              style="border-bottom: 0"
              @select="handleSelectMenu"
            >
              <!-- ===== Menu level 1 ===== -->
              <template v-for="menu1 in menusWithSubMenus" :key="menu1.title">
                <!-- SubMenu-1 -->
                <el-sub-menu
                  v-if="menu1.subMenus.length"
                  :index="`${menu1.id}`"
                >
                  <template #title> {{ menu1.title }} </template>

                  <!-- ===== Menu level 2 ===== -->
                  <template v-for="menu2 in menu1.subMenus" :key="menu2.title">
                    <!-- subMenu-2 -->
                    <el-sub-menu
                      v-if="menu2.subMenus.length"
                      :index="`${menu2.id}`"
                    >
                      <template #title> {{ menu2.title }} </template>

                      <!-- ===== Menu level 3 ===== -->
                      <el-menu-item
                        v-for="menu3 in menu2.subMenus"
                        :key="menu3.title"
                        :index="`${menu3.id}`"
                        >{{ menu3.title }}</el-menu-item
                      >
                      <!-- ===== End Menu level 3 ===== -->
                    </el-sub-menu>
                    <!-- end subMenu-2 -->

                    <!-- Item-2 -->
                    <el-menu-item v-else :index="`${menu2.id}`">{{
                      menu2.title
                    }}</el-menu-item>
                  </template>
                  <!-- ===== End Menu level 2 ===== -->
                </el-sub-menu>
                <!-- End subMenu 1 -->

                <!-- Item-1 -->
                <el-menu-item v-else :index="`${menu1.id}`">{{
                  menu1.title
                }}</el-menu-item>
                <!-- end Item-1 -->
              </template>
              <!-- ===== End level 1 ===== -->
            </el-menu>
            <!-- end menus -->
          </div>
          <!-- end center -->

          <!-- nav right -->
          <div class="flex items-center">
            <el-dropdown v-if="authUser" @command="handleSelectUserOption">
              <el-avatar
                :size="32"
                shape="circle"
                class="cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/fa/2/2b/Starship_Entertainment.png"
              />
              <template #dropdown> </template>
            </el-dropdown>

            <el-button v-else plain @click="goLogin"> Log in </el-button>
          </div>
          <!-- end right -->
        </div>
      </div>
    </header>
  </client-only>
</template>
