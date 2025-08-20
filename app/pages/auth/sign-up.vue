<template>
  <AuthCard
    title="Sign up"
    description="Sign up to enjoy the feature of Revolutie"
  >
    <template #footer>
      <p>
        Already have an account?
        <Button as-child variant="link">
          <NuxtLink :to="{ path: signInUrl, query }">
            Sign in
          </NuxtLink>
        </Button>
      </p>
    </template>
    <SignUpForm />
  </AuthCard>
</template>

<script setup lang="ts">
import { AuthCard } from '~/components/shared/AuthCard'
import { SignUpForm } from '~/modules/SignUpForm'

definePageMeta({ layout: 'auth' })

const {
  public: { signInUrl },
} = useRuntimeConfig()
const { query } = useRoute()
</script>

<style scoped></style>
