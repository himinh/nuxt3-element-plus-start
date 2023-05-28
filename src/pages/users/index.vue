<script setup lang="ts">
// const { pending, error } = usersStore.getUsers()
const { data, pending, error } = useFetch<any[]>(
  'https://jsonplaceholder.typicode.com/users'
)

// console.log({ data, pending: pending.value, error })

// const { data, pending, error } = useGetAllUsers()

const handleDeleteUser = (id: string) => {
  return id
}
</script>

<template>
  <span>{{ pending }}</span>
  <div v-if="data">
    <el-table v-loading="pending" :data="data" style="width: 100%">
      <el-table-column prop="email" label="Email" width="180" />
      <el-table-column prop="phone" label="Pone" width="180" />
      <el-table-column prop="name" label="Name" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click.prevent="handleDeleteUser(scope.row.id)">
            Remove
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped></style>
