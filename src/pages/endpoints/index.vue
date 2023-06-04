<script setup lang="ts">
import { storeToRefs } from 'pinia'

const endpointStore = useEndpointStore()

const { data, limit, page, sort, pending } = storeToRefs(endpointStore)

const handleClick = () => {}

const handleSizeChange = (size: any) => {}

const handleCurrentChange = (size: any) => {}

const addNew = () => {
  const item = {
    _id: '6455461b949d74031662dd2b',
    method: 'DELETE',
    path: '/api/tokens/:ids/ids',
    createdAt: '2023-05-05T18:08:21.899Z',
    description: '',
    isPublic: false,
    name: 'new a',
    position: 1,
    updatedAt: '2023-05-28T05:12:45.244Z',
    userRoles: ['SUPER_ADMIN'],
  }

  endpointStore.create(item)
}
</script>

<template>
  <div class="container">
    <h1>Endpoints</h1>
    <span>loading...: {{ pending }}</span>
    <el-button type="primary" @click="addNew">Add new</el-button>
    <el-table :data="data?.data || []" style="width: 100%">
      <el-table-column prop="method" label="Method" width="120" />
      <el-table-column prop="path" label="Path" width="120" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick"
            >Detail</el-button
          >
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="page"
      v-model:page-size="limit"
      :page-sizes="[5, 10, 15]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="data?.pageInfo.totalData"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<style lang="scss" scoped></style>
