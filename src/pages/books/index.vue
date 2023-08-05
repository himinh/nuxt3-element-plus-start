<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

interface IParams {
  slug: string
}

const { slug } = route.params as IParams

const page = ref<number>(route.query.page ? +route.query.page : 1)

const data = [
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/e1b0fe12ee7e46bce61a.jpg',
    desc: '',
    id: 32,
    price: '0.10',
    sub_count: 7,
    t_price: '398.00',
    title: 'uni-app实战直播app全栈开发',
  },
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/1a717a3d9bd0807ea9b6.jpg',
    desc: '',
    id: 31,
    price: '10.00',
    sub_count: 0,
    t_price: '498.00',
    title: 'uni-app实战仿微信app开发',
  },
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/cf136c159db6a42ade99.jpg',
    desc: '',
    id: 30,
    price: '10.00',
    sub_count: 0,
    t_price: '398.00',
    title: 'uni-app多端企业网盘全栈开发',
  },
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/89931fbb1c848a5a7338.jpg',
    desc: '',
    id: 29,
    price: '10.00',
    sub_count: 0,
    t_price: '298.00',
    title: 'uni-app实战视频点播app小程序',
  },
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/b1f1a9f6d2082f7a4952.jpg',
    desc: '',
    id: 28,
    price: '10.00',
    sub_count: 0,
    t_price: '298.00',
    title: 'uni-app实战商城类app和小程序',
  },
  {
    cover:
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/70ac91ed028b155de5a2.jpg',
    desc: '',
    id: 27,
    price: '10.00',
    sub_count: 0,
    t_price: '198.00',
    title: 'uni-app实战社区交友类app开发',
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
        <el-breadcrumb-item capitalize>Books</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- data list  -->
    <el-row :gutter="20">
      <el-col v-for="item in data" :key="item.id" :span="12">
        <BookCard :item="item" />
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
