<script lang="ts" setup>
const data = [
  {
    course_id: '',
    id: 1,
    course_title: '',
    src: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/2dfadbac5e513dc8efd0.png',
    type: 'webview',
    url: 'https://study.163.com/course/courseMain.htm?courseId=1212775807&share=2&shareId=480000001892585',
  },

  {
    course_id: 539,
    id: 2,
    course_title: '我是音频123',
    src: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/714ba6c6749576f2b6dd.png',
    type: 'webview',
    url: 'https://study.163.com/course/courseMain.htm?courseId=1209487898&share=2&shareId=480000001892585',
  },
  {
    course_id: '',
    id: 3,
    course_title: '',
    src: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/ed8feebed7989b39a4ad.png',
    type: 'webview',
    url: 'https://study.163.com/course/courseMain.htm?courseId=1209644880&share=2&shareId=480000001892585',
  },
]
</script>

<template>
  <el-carousel height="400px" trigger="click" mb-6>
    <el-carousel-item v-for="item in data" :key="item.id">
      <el-image
        class="w-full h-[400px]"
        fit="cover"
        :src="item.src"
        @click="$commonOpen(item)"
      />
    </el-carousel-item>
  </el-carousel>
</template>
