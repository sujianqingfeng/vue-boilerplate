<script setup lang="ts">
import { Fold, Expand } from '@element-plus/icons-vue'
const collapse = defineModel<boolean>('collapse')

const onToggle = () => {
  collapse.value = !collapse.value
}

const onCommand = (command: string) => {
  console.log('🚀 ~ onCommand ~ command:', command)
}
</script>

<template>
  <div class="h-full flex justify-between items-center border-b bg-white px-4">
    <div>
      <el-icon class="cursor-pointer" size="25" @click="onToggle">
        <Expand v-if="collapse" />
        <Fold v-else />
      </el-icon>
    </div>
    <div>
      <el-dropdown trigger="click" @command="onCommand">
        <el-avatar :size="30">U</el-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout">logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
