<script lang="ts" setup>
interface IProps {
  data: {
    title?: string
    type?: string
    data: any[]
  }
}

defineProps<IProps>()
</script>
<template>
  <div class="mb-6">
    <div class="flex mb-2">
      <span class="font-medium text-lg">{{
        data.title
      }}</span>
      <el-button text bg class="ml-auto"
        >See More</el-button
      >
    </div>

    <el-row :gutter="20">
      <el-col
        v-for="item in data.data"
        :key="item.id"
        :span="6"
      >
        <CourseCard :item="item" />
      </el-col>
    </el-row>
  </div>
</template>
