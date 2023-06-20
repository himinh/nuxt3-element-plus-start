<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

const page = ref<number>(
  route.query.page ? +route.query.page : 1
)

const data: any[] = [
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/d1c2fbe07e31d1e78b5a.png',
    end_time: '2024-06-01T13:26:31.000Z',
    group_id: 123,
    id: 1432,
    price: '43442.00',
    start_time: '2022-05-31T13:26:31.000Z',
    t_price: '0.00',
    title: '231',
    type: 'media',
  },
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/b688b9bf339a6ece9f54.png',
    end_time: '2024-06-29T16:00:00.000Z',
    group_id: 31,
    id: 25,
    price: '0.10',
    start_time: '2021-05-16T08:31:00.000Z',
    t_price: '10.00',
    title: 'uni-app实战在线教育类app开发',
    type: 'audio',
  },
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/2e96031726768d0d493f.png',
    end_time: '2024-06-22T16:00:00.000Z',
    group_id: 30,
    id: 3,
    price: '50.00',
    start_time: '2021-05-15T17:05:00.000Z',
    t_price: '9.98',
    title: 'uni-app实战仿微信app开发',
    type: 'column',
  },
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/10ccf3a973f5193bec3c.png',
    end_time: '2024-06-29T16:00:00.000Z',
    group_id: 29,
    id: 6,
    price: '5.00',
    start_time: '2021-05-15T17:04:00.000Z',
    t_price: '9.98',
    title: 'VueCli 实战在线教育后台系统',
    type: 'media',
  },
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/c948f4a7e402473337cb.png',
    end_time: '2024-06-29T16:00:00.000Z',
    group_id: 21,
    id: 11,
    price: '8.00',
    start_time: '2021-04-15T16:00:00.000Z',
    t_price: '90.00',
    title: 'uni-app实战直播app全栈开发',
    type: 'video',
  },
]

const handleCurrentChange = (val: number) => {
  // console.log('Size change:', val)
  page.value = val
  router.push({
    query: {
      page: val,
    },
  })
}
</script>
<template>
  <div>
    <!-- breadcrumb -->
    <div class="my-5">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }"
          >Home</el-breadcrumb-item
        >
        <el-breadcrumb-item>Groups</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- data list  -->
    <el-row :gutter="20">
      <el-col v-for="item in data" :key="item.id" :span="6">
        <CourseCard :item="item" />
      </el-col>
    </el-row>

    <!-- Pagination -->
    <div
      class="flex justify-center items-center mt-5 mb-10"
    >
      <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="100"
        :current-page="page"
        class="mt-4"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
