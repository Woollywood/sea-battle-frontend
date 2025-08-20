<template>
  <form @submit="onSubmit">
    <div class="mb-8 flex flex-col gap-4">
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input type="password" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </div>
    <div>
      <Button :disabled="isSubmitting" class="w-full">Sign in</Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'

import { signInSchema } from '@/schemas/signInSchema'

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(signInSchema),
})

const { signIn } = useSignIn()

const onSubmit = handleSubmit(signIn)
</script>

<style scoped></style>
