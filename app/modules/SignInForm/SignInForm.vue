<template>
  <form @submit="onSubmit">
    <div class="mb-8 flex flex-col gap-4">
      <Input name="email" label="Email" />
      <Input name="password" label="Password" />
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
import { Input } from '~/components/shared/form/Input'

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(signInSchema),
})

const { signIn } = useSignIn()

const onSubmit = handleSubmit(signIn)
</script>

<style scoped></style>
