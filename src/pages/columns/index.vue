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
      'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/0bcb9758bb9f49916df7.png',
    id: 184,
    price: '9.00',
    t_price: '198.00',
    title: 'VueCli 实战商城后台管理系统',
    try: 'VueCli 实战商城后台管理系统',
    type: 'column',
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
        <el-breadcrumb-item capitalize>Columns</el-breadcrumb-item>
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
