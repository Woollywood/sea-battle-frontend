import type { IBaseInputFormProps } from '~/types/form'

export const useFormInput = ({
  label,
  description,
}: Pick<IBaseInputFormProps, 'label' | 'description'>) => {
  const hasLabel = computed(() => !!label?.length)
  const hasDescription = computed(() => !!description?.length)

  return { hasLabel, hasDescription }
}
