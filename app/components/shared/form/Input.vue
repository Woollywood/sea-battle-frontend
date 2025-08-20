<template>
  <FormField v-slot="{ componentField }" :name="name">
    <FormItem>
      <FormLabel v-if="hasLabel">{{ label }}</FormLabel>
      <FormControl>
        <Input v-bind="{ ...componentField, ...$attrs }" />
      </FormControl>
      <FormDescription v-if="hasDescription">
        {{ description }}
      </FormDescription>
      <FormMessage />
    </FormItem>
  </FormField>
</template>

<script setup lang="ts">
import type { IBaseInputFormProps } from '@/types/form'
import type { IInputProps } from '~/components/ui/input/types'

type IFormInputProps = IBaseInputFormProps & IInputProps

const { name, label, description } = defineProps<IFormInputProps>()
defineOptions({ inheritAttrs: false })

const { hasLabel, hasDescription } = useFormInput({
  label,
  description,
})
</script>

<style lang="scss" scoped></style>
