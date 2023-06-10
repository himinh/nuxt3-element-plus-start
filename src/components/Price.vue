<script lang="ts" setup>
interface IProps {
  value: string | number
  through: boolean
}

withDefaults(defineProps<IProps>(), {
  value: 0,
  through: false,
})
</script>

<template>
  <span
    :class="
      through
        ? 'text-gray-500 text-xs line-through'
        : 'text-rose-500 font-semibold'
    "
  >
    {{
      parseFloat(`${value}`) === 0 ? '免费' : '¥' + value
    }}
  </span>
</template>
