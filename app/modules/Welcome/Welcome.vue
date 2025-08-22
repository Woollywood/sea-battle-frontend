<template>
  <div class="flex h-full items-center justify-center">
    <Form v-if="!isAuth" />
    <Button v-else as-child class="w-full max-w-60">
      <NuxtLink to="/game">Начать игру</NuxtLink>
    </Button>
  </div>
</template>

<script setup lang="ts">
import Form from './components/Form.vue'

const { isAuth } = useAuth()
</script>

<style scoped></style>
