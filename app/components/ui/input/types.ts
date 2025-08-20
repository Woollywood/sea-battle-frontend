import type { HTMLAttributes } from 'vue'

export interface IInputProps {
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}
