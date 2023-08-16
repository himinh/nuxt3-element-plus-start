<script lang="ts" setup>
const { count, dec, inc } = useCount()
// const {data, pending, error} =  await useAsyncData('data', () => authApi.login({authType: AuthType.EMAIL, authKey: "minh@gmail.com", password: 'minh'}))
// const {data, pending,error } =  await useFetch('https://api.nuxtjs.dev/mountains?param1=value1&param2=value2', {

// })

// const {data, pending, error} = await authApi.register({authType: AuthType.EMAIL, authKey: "minh@gmail.com", password: 'minh'})

// console.log({data,pending, error})

//  const loadLogin = async () => {
//  }

//  const loadLazy =async () => {
//   await authApi.register({authType: AuthType.EMAIL, authKey: "minh@gmail.com", password: 'minh'})
// }

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div class="container text-center">
    <h1 class="text-xl">Counter: {{ count }}</h1>

    <el-button type="danger">Decrement</el-button>

    <el-button type="primary">Increment</el-button>

    <el-row class="tac">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>

          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
          <el-menu-item index="1-3">item three</el-menu-item>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>

        <el-menu-item index="3">
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>

        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-row>
  </div>
</template>
