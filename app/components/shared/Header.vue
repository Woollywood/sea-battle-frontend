<template>
  <header class="flex items-center justify-between gap-12 py-6">
    <NuxtLink to="/">Home</NuxtLink>
    <div class="flex items-center gap-2">
      <template v-if="isAuth">
        <Button @click="signOut">Sign out</Button>
      </template>
      <template v-else>
        <Button as-child>
          <NuxtLink to="/auth/sign-in">Sign in</NuxtLink>
        </Button>
        <Button as-child>
          <NuxtLink to="/auth/sign-up">Sign up</NuxtLink>
        </Button>
      </template>
    </div>
  </header>
</template>

<script setup lang="ts">
const { isAuth } = useAuth()
const { signOut } = useSignOut()
</script>

<style scoped></style>
