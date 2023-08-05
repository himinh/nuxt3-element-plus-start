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
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/2e96031726768d0d493f.png',
    end_time: '2024-09-29T16:00:00.000Z',
    flashsale_id: 29,
    id: 3,
    price: '0.10',
    s_num: 9000,
    start_time: '2021-08-05T16:00:00.000Z',
    t_price: '9.98',
    title: 'uni-app实战仿微信app开发',
    type: 'column',
    used_num: 7,
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
        <el-breadcrumb-item :to="{ path: '/flash-sales' }"
          >Flash sales</el-breadcrumb-item
        >
        <el-breadcrumb-item capitalize>{{ slug }}</el-breadcrumb-item>
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
