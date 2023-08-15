<script setup lang="ts">
const route = useRoute()
const router = useRouter()

interface ITab {
  id: number
  title: string
  slug: string
}

const activeTab = ref<string>('')
const tabs = ref<ITab[]>([
  { id: 0, title: 'All', slug: '' },
  { id: 72, title: 'Fashion', slug: 'fashion' },
  { id: 71, title: 'Games', slug: 'games' },
  { id: 70, title: 'Travels', slug: 'travels' },
  { id: 69, title: 'Gourmet Food', slug: 'gourmet-food' },
  { id: 67, title: 'Sports', slug: 'sports' },
])

const handleClick = (slug: string) => {
  activeTab.value = slug

  const query = { ...route.query }

  if (slug) query.category = slug
  else delete query.category

  router.push({ query })
}
</script>

<template>
  <div class="flex items-center rounded mb-5">
    <el-text
      v-for="tab in tabs"
      :key="tab.id"
      :class="{ active: tab.slug === activeTab }"
      @click="handleClick(tab.slug)"
      >{{ tab.title }}</el-text
    >
  </div>
</template>

<style lang="scss" scoped>
.el-text {
  padding-inline: 14px;
  margin-inline: 2px;
  padding-block: 16px;
  transition: 300ms cubic-bezier(0.2, 0, 0, 1);
  border-bottom: 2px solid transparent;
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
