<script lang="ts" setup>
import { AuthType } from '../enums/auth-type'
import { authApi } from '../api/auth.api'

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
</script>

<template>
  <div class="container text-center">
    <h1 class="text-xl">Counter: {{ count }}</h1>

    <el-button type="danger">Decrement</el-button>

    <el-button type="primary">Increment</el-button>
  </div>
</template>
