<script lang="ts" setup>
const data = [
  {
    src: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/5f63baebb94c35eab781.jpg',
    type: 'course',
    course_title: '我是音频123',
    course_id: 539,
    url: '',
    id: 1,
  },
]
</script>
<template>
  <el-image
    v-for="item in data"
    :key="item.id"
    :src="item.src"
    :lazy="true"
    class="w-full h-[120px] rounded mb-6 cursor-pointer"
    mb-6
    @click="$commonOpen(item)"
  />
</template>
