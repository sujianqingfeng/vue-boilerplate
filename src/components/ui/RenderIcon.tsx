import { DataBoard, User } from '@element-plus/icons-vue'
import { ElIcon } from 'element-plus'

const IconMap: Record<string, any> = {
  DataBoard,
  User
}

export const RenderIcon = defineComponent({
  name: 'RenderIcon',
  props: {
    size: {
      type: Number,
      default: 16
    },
    icon: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    return () => {
      const { icon, size } = props
      if (!icon) {
        return null
      }
      const Icon = IconMap[icon]
      if (!Icon) {
        return null
      }
      return <ElIcon size={size}>{<Icon />}</ElIcon>
    }
  }
})
