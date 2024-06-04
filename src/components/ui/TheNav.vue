<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { RenderIcon } from './RenderIcon'

defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})

type Menu = {
  path: string
  title?: string
  icon?: string
  children?: Menu[]
}

const menus: Menu[] = []
const defaultLayout = routes.find((item) => item.name === 'default-layout')

const walk = (
  routes: RouteRecordRaw[] = [],
  menus: Menu[],
  basePath: string
) => {
  if (routes.length === 0) {
    return []
  }
  routes.forEach(({ children, path, meta }) => {
    const p = `${basePath}${path}`
    menus.push({
      path: p,
      title: meta?.title,
      icon: meta?.icon,
      children: walk(children, [], `${p}/`)
    })
  })
  return menus
}

if (defaultLayout && defaultLayout.children?.length) {
  walk(defaultLayout.children, menus, '/')
}

const [DefineMenuItem, ReuseMenuItem] = createReusableTemplate<{
  items: Menu[]
}>()

const router = useRouter()
const onSelect = (index: string) => {
  router.push(index)
}
</script>

<template>
  <DefineMenuItem v-slot="{ items }">
    <template v-for="(menu, index) in items">
      <el-menu-item
        v-if="!menu.children?.length"
        :key="menu.path"
        :index="menu.path"
      >
        <RenderIcon :icon="menu.icon" />
        <template #title>{{ menu.title }}</template>
      </el-menu-item>

      <el-sub-menu v-else :key="index" :index="menu.path">
        <template #title>
          <RenderIcon :icon="menu.icon" />
          <span>{{ menu.title }}</span>
        </template>
        <ReuseMenuItem :items="menu.children" />
      </el-sub-menu>
    </template>
  </DefineMenuItem>

  <div class="">
    <el-menu
      :default-active="$route.path"
      :collapse="collapse"
      @select="onSelect"
    >
      <ReuseMenuItem :items="menus" />
    </el-menu>
  </div>
</template>
