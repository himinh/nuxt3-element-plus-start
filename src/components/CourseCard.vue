<script setup lang="ts">
interface IProp {
  item: {
    id: number
    title: string
    cover: string
    try?: string
    content?: string
    price: string
    t_price: string
    type: string
    school_id?: number
    status?: number
    sub_count?: number
    is_single?: number
    created_time?: string
    updated_time?: string
    group_id?: undefined
    flashsale_id?: undefined
    start_time?: undefined
    end_time?: undefined
  }
}

defineProps<IProp>()
</script>

<template>
  <div class="cursor-pointer bg-white rounded shadow mb-4">
    <!-- image -->
    <el-image
      :src="item.cover"
      class="w-full h-[150px] rounded-t"
      fit="cover"
    />

    <!-- content -->
    <div class="py-3 px-3">
      <span class="w-full font-medium truncate py-3">
        {{ item.title }}
      </span>

      <div class="py-3 flex items-end">
        <Price :value="item.price" />
        <Price :value="item.t_price" through class="ml-2" />
      </div>
    </div>

    <!-- footer -->
    <template v-if="item.group_id || item.flashsale_id">
      <ClientOnly>
        <div
          class="bg-yellow-500 flex items-center p-3 text-xs rounded-b text-white"
        >
          <span>{{
            item.group_id ? 'Group' : 'Spike'
          }}</span>

          <div class="ml-auto flex items-center">
            <SecondsKill :end-time="item.end_time" />
          </div>
        </div>
      </ClientOnly>
    </template>
  </div>
</template>
