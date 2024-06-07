import { ScaffoldProps } from '~/components/ui/Scaffold'

export function useScaffold<R = any, P = any>(props: ScaffoldProps<R, P>) {
  return {
    props
  }
}
