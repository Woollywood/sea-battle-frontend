<template>
  <header class="flex items-center justify-between gap-12 py-6">
    <h1 class="text-4xl font-bold">Морской бой</h1>
    <div class="flex items-center gap-2">
      <Button v-if="isAuth" @click="signOut">Выход</Button>
      <!-- <Button v-else @click="signOut">Войти</Button> -->
    </div>
  </header>
</template>

<script setup lang="ts">
const { isAuth } = useAuth()
const { signOut } = useSignOut()
</script>

<style scoped></style>
