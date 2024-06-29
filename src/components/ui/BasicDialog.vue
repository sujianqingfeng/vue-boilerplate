<script lang="ts" setup>
type BasicDialogProps = {
  loading?: boolean
  showFooter?: boolean
  width?: string
}

withDefaults(defineProps<BasicDialogProps>(), {
  loading: false,
  showFooter: true,
  width: '30rem'
})

const emit = defineEmits<{
  confirm: []
  cancel: []
}>()

const dialogVisible = defineModel({ type: Boolean, default: false })
const attrs = useAttrs()

const onCancel = () => {
  dialogVisible.value = false
  emit('cancel')
}
const onConfirm = () => {
  emit('confirm')
}
</script>

<template>
  <el-dialog v-bind="attrs" v-model="dialogVisible" :width="width">
    <slot></slot>

    <template v-if="showFooter" #footer>
      <div class="text-right">
        <el-button @click="onCancel">取消</el-button>
        <el-button type="primary" :loading="loading" @click="onConfirm">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
