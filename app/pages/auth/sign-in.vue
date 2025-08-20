<template>
  <AuthCard
    title="Sign in"
    description="Please login to continue to your account"
  >
    <template #footer>
      <p>
        Need an account?
        <Button as-child variant="link">
          <NuxtLink :to="{ path: signUpUrl, query }">
            Create one
          </NuxtLink>
        </Button>
      </p>
    </template>
    <SignInForm />
  </AuthCard>
</template>

<script setup lang="ts">
import AuthCard from '~/components/shared/AuthCard.vue'
import SignInForm from '~/modules/SignInForm/SignInForm.vue'

definePageMeta({
  layout: 'auth',
})

const {
  public: { signUpUrl },
} = useRuntimeConfig()
const { query } = useRoute()
</script>

<style scoped></style>
