<template>
  <div class="w-full max-w-60">
    <h2 class="mb-8 text-2xl font-bold text-black">
      Введите ваше имя:
    </h2>
    <form class="mb-8 flex flex-col gap-4" @submit="onSubmit">
      <div>
        <Input
          :disabled="isSubmitting"
          name="username"
          label="Имя"
          placeholder="Имя"
        />
      </div>
      <Button>Начать игру</Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'

import { Input } from '~/components/shared/form/Input'
import { signUpSchema } from '~/schemas/signUpSchema'

const { onSignUp } = useSignUp()
const { handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(signUpSchema),
})

const onSubmit = handleSubmit(async (dto) => {
  await onSignUp(dto, '/game')
})
</script>

<style scoped></style>
