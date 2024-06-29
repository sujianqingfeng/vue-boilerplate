import { ComponentInternalInstance, VNode, render } from 'vue'
import BasicDialog from '~/components/ui/BasicDialog.vue'

type DialogContext<T> = {
  hide: () => void
  instance: ComponentInternalInstance | null | undefined
  startLoading: () => void
  stopLoading: () => void
  result?: T
}

type ShowDialogOptions<T, R> = {
  onCancel?: (dialogContext: DialogContext<R>) => void
  onConfirm?: (dialogContext: DialogContext<R>) => void
  showParams?: T
}

export function useTemplateDialog<T = any, R = any>(template: () => any) {
  const visible = ref(true)
  const loading = ref(false)

  let mountNode: HTMLElement | null = null

  const unmounted = () => {
    if (mountNode) {
      document.body.removeChild(mountNode)
      mountNode = null
    }
  }

  onUnmounted(unmounted)

  const showDialog = async (options: ShowDialogOptions<T, R>) => {
    visible.value = true
    loading.value = false

    const { showParams, onConfirm, onCancel, ...rest } = options
    const t = await template()
    console.log('🚀 ~ showDialog ~ t:', t)

    let slotVNode: VNode | null = null

    const hide = () => {
      visible.value = false
      unmounted()
    }

    const stopLoading = () => {
      loading.value = false
    }

    const startLoading = () => {
      loading.value = true
    }

    const getDialogContext = (): DialogContext<R> => {
      return {
        hide,
        instance: slotVNode?.component,
        startLoading,
        stopLoading
      }
    }

    if (mountNode) {
      unmounted()
    }
    mountNode = document.createElement('div')
    document.body.appendChild(mountNode)

    const dialog = h({
      setup() {
        onMounted(() => {
          nextTick(() => {
            const exposed = slotVNode?.component?.exposed
            if (exposed && exposed.show) {
              exposed.show(showParams)
            }
          })
        })

        return () =>
          h(
            BasicDialog,
            {
              modelValue: visible.value,
              loading: loading.value,
              ...rest,
              onCancel: () => {
                const dialogContext = getDialogContext()
                onCancel && onCancel(dialogContext)
              },
              onConfirm: () => {
                const dialogContext = getDialogContext()

                const _onConfirm = dialogContext.instance?.exposed?.onConfirm

                const executeOnConfirm = (context: DialogContext<R>) => {
                  onConfirm && onConfirm(context)
                }

                if (_onConfirm && typeof _onConfirm === 'function') {
                  const r = _onConfirm()
                  if (typeof r === 'undefined') {
                    executeOnConfirm(dialogContext)
                  } else if (r && r.then) {
                    r.then((result: any) => {
                      executeOnConfirm({
                        ...dialogContext,
                        result
                      })
                    })
                  } else {
                    executeOnConfirm({ ...dialogContext, result: r })
                  }
                } else {
                  executeOnConfirm(dialogContext)
                }
              }
            },
            () => [(slotVNode = h(t.default))]
          )
      }
    })

    render(dialog, mountNode)
  }

  return {
    showDialog
  }
}
