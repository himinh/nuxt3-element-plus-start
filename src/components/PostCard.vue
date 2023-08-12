<script setup lang="ts">
import { ChatRound } from '@element-plus/icons-vue'

interface IProps {
  post: {
    bbs_id: number
    comment_count: number
    created_time: string
    desc: {
      text: string
      images: any[]
    }
    id: number
    is_top: number
    issupport: boolean
    support_count: number
    user: {
      id: number
      avatar: string
      sex: string
      name: string
    }
    user_id: number
  }
}

interface IEmits {
  (e: 'on-like', id: number): void
}

const props = defineProps<IProps>()
const emit = defineEmits<IEmits>()

const handleLike = () => {
  emit('on-like', props.post.id)
}
</script>

<template>
  <div class="border-b p-5 mb-3 rounded">
    <div class="cursor-pointer">
      <el-tag v-if="post.is_top" size="small" type="success">Top</el-tag>
      <el-text>{{ post.desc.text }}</el-text>
    </div>

    <div class="mt-3 cursor-pointer max-w-[500px] flex">
      <el-image
        v-for="(image, index) in post.desc.images"
        :key="index"
        :src="image"
        :width="post.desc.images.length == 1 ? 300 : 150"
        :height="post.desc.images.length === 1 ? 200 : 100"
        class="mr-3 mb-2 rounded"
      />
    </div>

    <div class="flex mt-5">
      <el-button
        size="small"
        text
        bg
        :type="post.issupport ? 'primary' : ''"
        @click.stop="handleLike"
      >
        <el-icon class="mr-1">
          <svg
            v-if="post.issupport"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style="fill: #62affe"
          >
            <path
              d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"
            ></path>
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style="fill: #8f9195"
          >
            <path
              d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"
            ></path>
          </svg>
        </el-icon>

        {{ post.support_count || 0 }}
      </el-button>

      <el-button size="small" text bg>
        <el-icon class="mr-1"><ChatRound /></el-icon>
        {{ post.comment_count || 0 }}
      </el-button>

      <el-button text bg size="small"> Author: {{ post.user.name }} </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
