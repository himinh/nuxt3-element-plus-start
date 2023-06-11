<script lang="ts" setup>
const data = [
  {
    src: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/aa355e2b0a7d2d9a41b9.png',
    name: 'vuecli在线教育实战',
    type: 'webview',
    url: 'https://study.163.com/course/courseMain.htm?courseId=1210894808&share=2&shareId=480000001892585',
    page_id: 5,
    page_title: '新页面',
    course_title: '',
    course_id: '',
    id: 1,
  },
  {
    src: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/8929566783b5762d4c39.png',
    name: 'uniapp在线教育实战',
    type: 'webview',
    url: 'https://study.163.com/course/courseMain.htm?courseId=1211586802&share=2&shareId=480000001892585',
    page_id: 0,
    page_title: '',
    course_title: '我是音频123',
    course_id: 539,
    id: 2,
  },
  {
    src: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/2990ec3d15e99c496c3b.png',
    name: '8大实战项目',
    type: 'webview',
    url: 'https://study.163.com/series/1202883608.htm',
    page_id: 0,
    page_title: '',
    course_title: '',
    course_id: '',
    id: 3,
  },
  {
    src: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/6774f0f775396ac0009f.png',
    name: 'uniapp实战系列',
    type: 'webview',
    url: 'https://study.163.com/provider/480000001892585/index.htm?share=2&shareId=480000001892585',
    page_id: 5,
    page_title: '新页面',
    course_title: '',
    course_id: '',
    id: 4,
  },
]
</script>
<template>
  <el-row :gutter="16" mb-6>
    <el-col v-for="item in data" :key="item.id" :span="6">
      <div
        class="shadow rounded cursor-pointer bg-white"
        @click="$commonOpen(item)"
      >
        <el-image
          :key="item.id"
          class="w-full h-[115px]"
          fit="cover"
          :src="item.src"
        />

        <div class="py-4">
          <p my-0 text-center class="text-sm">
            {{ item.name }}
          </p>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
