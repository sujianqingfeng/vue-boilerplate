import type { InjectScaffoldRootContext, ScaffoldProps } from './types'
import type { InjectionKey } from 'vue'

export const SCAFFOLD_ROOT_KEY = Symbol(
  'InjectScaffoldRootContext'
) as InjectionKey<InjectScaffoldRootContext>

export function useProvideScaffold(props: ScaffoldProps) {
  provide(SCAFFOLD_ROOT_KEY, {
    schemas: props.queryConfig.schemas
  })
}

export function useScaffoldContext() {
  const context = inject(SCAFFOLD_ROOT_KEY, null)

  if (!context) {
    throw new Error('SCAFFOLD_ROOT_KEY not provide')
  }

  return context
}
