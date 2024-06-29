import type { ShowParams } from './types'

const LazyAddUserDialogTemplate = defineComponent((_, { expose }) => {
  const onConfirm = () => {
    console.log('confirm')

    return {
      name: 'name'
    }
  }

  const show = (options: ShowParams) => {
    console.log('🚀 ~ show ~ options:', options)
  }

  expose({
    onConfirm,
    show
  })

  return () => {
    return <span>template</span>
  }
})

export default LazyAddUserDialogTemplate
