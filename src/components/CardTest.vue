<script setup lang="ts">
interface IProps {
  test: {
    id: number
    title: string
    total_score: number
    pass_score: number
    expire: number
    question_count: number
  }
}

defineProps<IProps>()
</script>

<template>
  <div class="rounded shadow mb-5 p-5">
    <div class="flex items-center justify-between">
      <span class="text-sm">
        {{ test.title }}
      </span>

      <span class="text-xs text-rose-500">
        Duration: {{ test.expire }} minutes
      </span>
    </div>

    <p class="text-sm font-normal">
      Question count:
      <span class="font-medium"> {{ test.question_count }}</span>

      Total score:
      <span class="font-medium"> {{ test.total_score }}</span>

      Pass score:
      <span class="font-medium"> {{ test.pass_score }}</span>
    </p>

    <div class="flex justify-end">
      <el-button type="primary">Test</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
