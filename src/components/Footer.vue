<script lang="ts" setup>
const footerLinks = [
  {
    name: 'Github',
    url: 'https://github.com/himinh/nuxt3-element-plus-start/tree/master',
  },
  {
    name: 'Projects',
    url: 'https://github.com/himinh/nuxt3-element-plus-start/tree/master',
  },
  {
    name: 'Blogs',
    url: 'https://github.com/himinh/nuxt3-element-plus-start/tree/master',
  },
  {
    name: 'News',
    url: 'https://github.com/himinh/nuxt3-element-plus-start/tree/master',
  },
]

const handleClick = (path: string) => {
  navigateTo(path)
}
</script>

<template>
  <div mx-auto class="w-full mt-auto bg-dark-400 text-light-500">
    <div class="flex items-center justify-center py-6">
      <el-link
        v-for="(link, index) in footerLinks"
        :key="index"
        class="!p-3 !text-light-500 text-sm"
        @click="handleClick(link.url)"
        >{{ link.name }}</el-link
      >
    </div>

    <div class="bg-gray w-full h-[1px]" />

    <div class="h-[80px] !py-4 text-center text-xs mx-auto">
      <span> Copyright© 2022 Classmate Da Zhao E ICP No. 1000000-1 </span>
    </div>
  </div>
</template>
