import type { ButtonProps } from 'element-plus'

export type Action = Partial<ButtonProps> & {
  title: string
  show?: () => boolean
  onClick?: () => void
}

export type ActionsProps = {
  spaceSize?: number
  list: Action[]
}
