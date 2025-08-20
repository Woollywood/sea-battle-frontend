<template>
  <form @submit="onSubmit">
    <div class="mb-8 flex flex-col gap-4">
      <Input
        name="username"
        label="Username"
        placeholder="Username"
      />
      <Input name="email" label="Email" placeholder="Email" />
      <Input name="password" type="password" label="Password" />
      <Input
        name="confirmPassword"
        type="password"
        label="Confirm Password"
      />
    </div>
    <div>
      <Button :disabled="isSubmitting" class="w-full">Sign up</Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'

import { signUpSchema } from '@/schemas/signUpSchema'
import { Input } from '~/components/shared/form/Input'

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(signUpSchema),
})

const { onSignUp } = useSignUp()

const onSubmit = handleSubmit(onSignUp)
</script>

<style scoped></style>
