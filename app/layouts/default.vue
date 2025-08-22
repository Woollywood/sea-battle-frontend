<template>
  <div
    class="container mx-auto grid min-h-screen grid-rows-[auto_1fr]"
  >
    <Header />
    <main class="py-12">
      <slot />
    </main>
    <Toaster />
  </div>
</template>

<script setup lang="ts">
import 'vue-sonner/style.css'

import { Toaster } from '@/components/ui/sonner'
import { Header } from '~/components/shared/Header'
</script>

<style scoped></style>
