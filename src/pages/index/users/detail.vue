<script setup lang="ts">
import { useRequest } from '~/composables/use-request'
import { fetchUserApi } from '~/features/user/api'

definePage({
  meta: {
    title: 'Detail'
  }
})

const { data } = useRequest({
  apiFn: fetchUserApi
})
</script>

<template>
  <Scaffold />
</template>
