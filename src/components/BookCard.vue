<script setup lang="ts">
interface IProp {
  item: {
    cover: string
    desc: string
    id: number
    price: string
    sub_count: number
    t_price: string
    title: string
  }
}

const props = defineProps<IProp>()

const open = () => {
  const path = `/books/${props.item.id}`

  navigateTo(path)
}
</script>

<template>
  <section
    class="flex p-5 items-stretch mb-5 bg-white shadow rounded"
  >
    <el-image
      :src="item.cover"
      fit="cover"
      style="width: 108px; height: 138px"
      class="rounded"
      lazy
    />

    <div class="flex flex-col pl-3 flex-1">
      <span class="w-full font-medium truncate py-3">
        {{ item.title }}
      </span>

      <div class="mt-auto flex items-center">
        <div class="flex items-end">
          <Price :value="item.price" />
          <Price
            :value="item.t_price"
            through
            class="mt-2"
          />
        </div>
        <el-button
          round
          type="primary"
          plain
          class="ml-auto"
          @click="open"
          >{{
            item.sub_count === 0
              ? 'Subscribe Now'
              : `${item.sub_count} People subscribe`
          }}</el-button
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
