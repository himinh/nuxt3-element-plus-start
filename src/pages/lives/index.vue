<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

interface IParams {
  slug: string
}

const { slug } = route.params as IParams

const page = ref<number>(route.query.page ? +route.query.page : 1)

const data: any[] = [
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/a86e1c2f5a12eda9eb7d.png',
    end_time: '2024-11-20T16:00:00.000Z',
    id: 5,
    price: '10.00',
    start_time: '2021-10-16T16:00:00.000Z',
    sub_count: 0,
    t_price: '100.00',
    title: '第二个直播',
    type: 'live',
  },
  {
    cover: 'http://dummyimage.com/200x100',
    end_time: '2021-04-03T17:00:00.000Z',
    id: 4,
    price: '9.98',
    start_time: '2021-04-02T17:00:00.000Z',
    sub_count: 0,
    t_price: '20.00',
    title: '第一个直播',
    type: 'live',
  },
  {
    cover: 'http://dummyimage.com/200x100',
    end_time: '2024-04-03T17:00:00.000Z',
    id: 3,
    price: '9.98',
    start_time: '2021-04-02T17:00:00.000Z',
    sub_count: 0,
    t_price: '20.00',
    title: '第一个直播',
    type: 'live',
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
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item capitalize>Lives</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- data list  -->
    <el-row :gutter="20">
      <el-col v-for="item in data" :key="item.id" :span="6">
        <!-- <CourseCard :item="item" /> -->
      </el-col>
    </el-row>

    <!-- pagination -->
    <div class="flex justify-center items-center mt-5 mb-10">
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
