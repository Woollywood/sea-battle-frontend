<template>
  <div class="flex min-h-screen w-full items-center justify-center">
    <main class="w-full max-w-96">
      <slot />
    </main>
    <Toaster />
  </div>
</template>

<script setup lang="ts">
import 'vue-sonner/style.css'

import { Toaster } from '@/components/ui/sonner'
</script>

<style scoped></style>
