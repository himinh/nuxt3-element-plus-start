<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

const page = ref<number>(
  route.query.page ? +route.query.page : 1
)

const data = [
  {
    id: 211,
    title: '测试11',
    total_score: 100,
    pass_score: 60,
    expire: 60,
    question_count: 1,
  },
  {
    id: 210,
    title: '测试试卷',
    total_score: 100,
    pass_score: 60,
    expire: 60,
    question_count: 1,
  },
  {
    id: 182,
    title: '111',
    total_score: 100,
    pass_score: 60,
    expire: 90,
    question_count: 0,
  },
  {
    id: 181,
    title: '11',
    total_score: 100,
    pass_score: 60,
    expire: 90,
    question_count: 0,
  },
  {
    id: 180,
    title: '111',
    total_score: 100,
    pass_score: 60,
    expire: 90,
    question_count: 0,
  },
  {
    id: 179,
    title: '11',
    total_score: 101,
    pass_score: 61,
    expire: 91,
    question_count: 0,
  },
  {
    id: 173,
    title: 'rrrrrrrr',
    total_score: 100,
    pass_score: 60,
    expire: 30,
    question_count: 0,
  },
  {
    id: 161,
    title: 'yangmr12',
    total_score: 100,
    pass_score: 60,
    expire: 10,
    question_count: 10,
  },
  {
    id: 160,
    title: 'yangmr1',
    total_score: 100,
    pass_score: 60,
    expire: 10,
    question_count: 10,
  },
  {
    id: 159,
    title: 'yangmr',
    total_score: 100,
    pass_score: 60,
    expire: 10,
    question_count: 10,
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
  <el-row :gutter="20">
    <el-col :span="18">
      <!-- Test cards -->
      <CardTest
        v-for="test in data"
        :key="test.id"
        :test="test"
      />

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
    </el-col>

    <el-col :span="6"><HotCourseList /> </el-col>
  </el-row>
</template>
