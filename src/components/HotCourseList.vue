<script setup lang="ts">
const data = [
  {
    id: 25,
    title: 'uni-app实战在线教育类app开发',
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/b688b9bf339a6ece9f54.png',
    price: '10.00',
    t_price: '20.00',
    type: 'audio',
    sub_count: 59,
  },
  {
    id: 6,
    title: 'VueCli 实战在线教育后台系统',
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/10ccf3a973f5193bec3c.png',
    price: '9.98',
    t_price: '20.00',
    type: 'media',
    sub_count: 2,
  },
  {
    id: 11,
    title: 'uni-app实战直播app全栈开发',
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/c948f4a7e402473337cb.png',
    price: '90.00',
    t_price: '100.00',
    type: 'video',
    sub_count: 0,
  },
  {
    id: 7,
    title: 'uni-app实战视频点播app小程序',
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/47d1aa930177515cd95e.png',
    price: '9.98',
    t_price: '20.00',
    type: 'media',
    sub_count: 0,
  },
]
</script>

<template>
  <section class="shadow bg-white rounded mb-5">
    <div class="p-3 title-box">
      <h4 class="text-sm font-medium m-0">Recommended</h4>
    </div>

    <div class="p-3">
      <template v-for="item in data" :key="item.id">
        <!-- <CourseCard :item="item" /> -->
      </template>
    </div>
  </section>
</template>

<style lang="scss" setup>
.title-box {
  border-bottom: 1px solid #e5e7eb;
}
</style>
