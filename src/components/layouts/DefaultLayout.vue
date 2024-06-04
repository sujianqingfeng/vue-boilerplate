<script setup lang="ts">
const isCollapse = ref(false)
</script>

<template>
  <el-container class="h-full">
    <el-aside
      class="transition-width duration-300 ease-in bg-white"
      :width="isCollapse ? '65px' : '200px'"
      style="--el-menu-border-color: white"
    >
      <TheNav :collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header style="--el-header-padding: 0">
        <TheHeader v-model:collapse="isCollapse" />
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>
