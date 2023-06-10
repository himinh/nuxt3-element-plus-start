<script lang="ts" setup></script>

<template>
  <h1 text="red-400 2xxl">About page</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Itaque, expedita.
  </p>
  <image
    style="width: 100px; height: 100px"
    :src="require(`assets/1.png`)"
  />
  <el-image
    style="width: 100px; height: 100px"
    src="/img/1.png"
    fit="cover"
  />
</template>
