<template>
  <div class="container mx-auto">
    <Header />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Header } from '~/components/shared/Header'
</script>

<style scoped></style>
