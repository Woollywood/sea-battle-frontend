<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <VueQueryDevtools />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
</script>

<style scoped></style>
