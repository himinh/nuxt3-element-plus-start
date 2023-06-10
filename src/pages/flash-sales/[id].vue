<script lang="ts" setup>
const route = useRoute()

interface IParams {
  id: string
}

const { id } = route.params as IParams
</script>
<template>
  <h1>Flash sales Page {{ id }}</h1>
</template>
