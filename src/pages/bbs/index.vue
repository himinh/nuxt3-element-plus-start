<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const page = ref<number>(route.query.page ? +route.query.page : 1)
const sorted = ref<string>(
  route.query.sort_by ? route.query.sort_by.toString() : 'new'
)

const sortMenus = ref<string[]>(['new', 'top'])
const data = ref([
  {
    bbs_id: 69,
    comment_count: 0,
    created_time: '2023-06-18 00:50:56',
    desc: { text: 'rrrrr', images: Array(0) },
    id: 856,
    is_top: 1,
    issupport: false,
    support_count: 2,
    user: {
      id: 6590,
      avatar: '',
      sex: '男',
      name: 'aaaabb',
    },
    user_id: 6590,
  },
  {
    bbs_id: 67,
    comment_count: 0,
    created_time: '2023-06-18 00:38:11',
    desc: { text: 'ffffff', images: Array(1) },
    id: 855,
    is_top: 0,
    issupport: false,
    support_count: 1,
    user: {
      id: 6590,
      avatar: '',
      sex: '男',
      name: 'aaaabb',
    },
    user_id: 6590,
  },
  {
    bbs_id: 69,
    comment_count: 0,
    created_time: '2023-06-17 03:16:27',
    desc: { text: 'zzzzz', images: Array(0) },
    id: 851,
    is_top: 0,
    issupport: false,
    support_count: 0,
    user: {
      id: 6590,
      avatar: '',
      sex: '男',
      name: 'aaaabb',
    },
    user_id: 6590,
  },
  {
    bbs_id: 67,
    comment_count: 0,
    created_time: '2023-06-17 03:12:52',
    desc: { text: 'aaaaa', images: Array(0) },
    id: 850,
    is_top: 0,
    issupport: false,
    support_count: 1,
    user: {
      id: 6590,
      avatar: '',
      sex: '男',
      name: 'aaaabb',
    },
    user_id: 6590,
  },
  {
    bbs_id: 67,
    comment_count: 0,
    created_time: '2023-06-17 03:07:05',
    desc: { text: '123', images: Array(0) },
    id: 849,
    is_top: 0,
    issupport: false,
    support_count: 0,
    user: {
      id: 6590,
      avatar: '',
      sex: '男',
      name: 'aaaabb',
    },
    user_id: 6590,
  },
  {
    bbs_id: 70,
    comment_count: 1,
    created_time: '2023-06-15 00:45:48',
    desc: { text: 'www', images: Array(1) },
    id: 842,
    is_top: 0,
    issupport: false,
    support_count: 1,
    user: {
      id: 6667,
      avatar: '',
      sex: '未知',
      name: 'tomi23456',
    },
    user_id: 6667,
  },
  {
    bbs_id: 71,
    comment_count: 0,
    created_time: '2023-06-15 00:45:02',
    desc: { text: 'www', images: Array(0) },
    id: 841,
    is_top: 0,
    issupport: false,
    support_count: 0,
    user: {
      id: 6667,
      avatar: '',
      sex: '未知',
      name: 'tomi23456',
    },
    user_id: 6667,
  },
  {
    bbs_id: 71,
    comment_count: 0,
    created_time: '2023-06-15 00:38:01',
    desc: { text: 'www', images: Array(0) },
    id: 840,
    is_top: 0,
    issupport: false,
    support_count: 0,
    user: {
      id: 6667,
      avatar: '',
      sex: '未知',
      name: 'tomi23456',
    },
    user_id: 6667,
  },
  {
    bbs_id: 71,
    comment_count: 1,
    created_time: '2023-06-15 00:30:52',
    desc: { text: 'www', images: Array(0) },
    id: 839,
    is_top: 0,
    issupport: false,
    support_count: 0,
    user: {
      id: 6667,
      avatar: '',
      sex: '未知',
      name: 'tomi23456',
    },
    user_id: 6667,
  },
  {
    bbs_id: 71,
    comment_count: 5,
    created_time: '2023-06-08 00:01:15',
    desc: { text: 'test one', images: Array(3) },
    id: 838,
    is_top: 0,
    issupport: false,
    support_count: 0,
    user: {
      id: 6639,
      avatar:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/7d283d9353678a78d890.jpg',
      sex: '女',
      name: 'balala',
    },
    user_id: 6639,
  },
])

const dataTop = ref([
  {
    bbs_id: 70,
    comment_count: 63,
    created_time: '2022-02-24 17:26:52',
    desc: {
      text: '7878',
      images: [
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/e04bb1b1928b720284d5.jpg',
      ],
    },
    id: 122,
    is_top: 1,
    issupport: true,
    support_count: 16,
    user: {
      id: 765,
      avatar:
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/00de1f6332d3e85d65f8.jpg',
      sex: '男',
      name: '关',
    },
    user_id: 76,
  },
  {
    bbs_id: 69,
    comment_count: 147,
    created_time: '2021-09-09 23:22:14',
    desc: {
      text: '说到银耳，小时候并不喜欢吃，因为在我的认知里它非常难吃，记得第一次喝银耳汤是妈妈煮的，汤里除了甜味可…来是银耳未出胶，一点不粘稠。如今我学会了煮银耳汤的方法，教给了妈妈，她一周要煮四五次，总也吃不够。',
      images: [
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/619d4e5bf360110c7a2d.png',
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/83649546e93e38db81d6.png',
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/a0a6e8fb819d99cf455e.png',
      ],
    },
    id: 33,
    is_top: 1,
    issupport: false,
    support_count: 33,
    user: {
      id: 1,
      avatar: '',
      sex: '未知',
      name: 'ceshi1',
    },
    user_id: 1,
  },
  {
    bbs_id: 69,
    comment_count: 34,
    created_time: '2021-09-09 22:33:59',
    desc: {
      text: '扣肉是川渝地区的一道名菜，也是家家户户，红白喜事中的八大碗之一，此菜咸鲜味美，肉质软烂，肥而不腻，吃一块唇齿留香，是基本上所有的爱吃肉的朋友们的最爱。',
      images: [
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/9396d188f7794a6170ca.jpg',
      ],
    },
    id: 30,
    is_top: 1,
    issupport: false,
    support_count: 13,
    user: {
      id: 1,
      avatar: '',
      sex: '未知',
      name: 'ceshi1',
    },
    user_id: 1,
  },
  {
    bbs_id: 69,
    comment_count: 0,
    created_time: '2023-06-18 00:50:56',
    desc: { text: 'rrrrr', images: [] },
    id: 856,
    is_top: 0,
    issupport: true,
    support_count: 2,
    user: {
      id: 6590,
      avatar: '',
      sex: '男',
      name: 'aaaabb',
    },
    user_id: 6590,
  },
  {
    bbs_id: 67,
    comment_count: 0,
    created_time: '2023-06-18 00:38:11',
    desc: {
      text: 'ffffff',
      images: [
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/f751e7c6b91dcb3506c6.jpeg',
      ],
    },
    id: 855,
    is_top: 0,
    issupport: true,
    support_count: 1,
    user: {
      id: 6590,
      avatar: '',
      sex: '男',
      name: 'aaaabb',
    },
    user_id: 6590,
  },
  {
    bbs_id: 69,
    comment_count: 0,
    created_time: '2023-06-17 03:16:27',
    desc: { text: 'zzzzz', images: [] },
    id: 851,
    is_top: 0,
    issupport: false,
    support_count: 0,
    user: {
      id: 6590,
      avatar: '',
      sex: '男',
      name: 'aaaabb',
    },
    user_id: 6590,
  },
  {
    bbs_id: 67,
    comment_count: 0,
    created_time: '2023-06-17 03:12:52',
    desc: { text: 'aaaaa', images: [] },
    id: 850,
    is_top: 0,
    issupport: true,
    support_count: 1,
    user: {
      id: 6590,
      avatar: '',
      sex: '男',
      name: 'aaaabb',
    },
    user_id: 6590,
  },
  {
    bbs_id: 67,
    comment_count: 0,
    created_time: '2023-06-17 03:07:05',
    desc: { text: '123', images: [] },
    id: 849,
    is_top: 0,
    issupport: false,
    support_count: 0,
    user: {
      id: 6590,
      avatar: '',
      sex: '男',
      name: 'aaaabb',
    },
    user_id: 6590,
  },
  {
    bbs_id: 70,
    comment_count: 1,
    created_time: '2023-06-15 00:45:48',
    desc: {
      text: 'www',
      images: [
        'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/3d8bdea7915c42e5551e.jpeg',
      ],
    },
    id: 842,
    is_top: 0,
    issupport: false,
    support_count: 1,
    user: {
      id: 6667,
      avatar: '',
      sex: '未知',
      name: 'tomi23456',
    },
    user_id: 6667,
  },
  {
    bbs_id: 71,
    comment_count: 0,
    created_time: '2023-06-15 00:45:02',
    desc: { text: 'www', images: [] },
    id: 841,
    is_top: 0,
    issupport: false,
    support_count: 0,
    user: {
      id: 6667,
      avatar: '',
      sex: '未知',
      name: 'tomi23456',
    },
    user_id: 6667,
  },
])

const handleSort = (sortBy: string) => {
  sorted.value = sortBy
  page.value = 1

  router.push({
    query: {
      sort_by: sortBy,
    },
  })
}

const handleCurrentChange = (val: number) => {
  // console.log('Size change:', val)
  page.value = val
  router.push({
    query: {
      ...route.query,
      page: val,
    },
  })
}

const handleLike = (id: number) => {
  const index = dataTop.value.findIndex((dat) => dat.id === id)
  if (index !== -1) {
    dataTop.value[index].issupport = !dataTop.value[index].issupport

    if (dataTop.value[index].issupport) {
      dataTop.value[index].support_count += 1
    } else {
      dataTop.value[index].support_count -= 1
    }
  }
}
</script>

<template>
  <div>
    <!-- Tabs -->
    <BbsTabs />

    <el-row :gutter="20">
      <!-- Main -->
      <el-col :span="18">
        <!-- sort -->
        <div class="flex items-center rounded mb-8">
          <el-text
            v-for="sort in sortMenus"
            :key="sort"
            :class="{ active: sort === sorted }"
            @click="handleSort(sort)"
            >{{ sort }}</el-text
          >
        </div>

        <!-- contents -->
        <PostCard
          v-for="post in sorted === 'top' ? dataTop : data"
          :key="post.id"
          :post="post"
          @on-like="handleLike"
        />

        <!-- Pagination -->
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
      </el-col>

      <!-- Right  -->
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.el-text {
  padding-inline: 14px;
  margin-inline: 2px;
  padding-block: 16px;
  transition: 300ms cubic-bezier(0.2, 0, 0, 1);
  border-bottom: 2px solid transparent;
  text-transform: capitalize;
}

.el-text.active {
  color: var(--el-color-primary);
  border-bottom-color: var(--el-color-primary);
}

.el-text:where(:hover, :focus-visible) {
  color: var(--el-color-primary);
  cursor: pointer;
  border-bottom-color: var(--el-color-primary);
}
</style>
