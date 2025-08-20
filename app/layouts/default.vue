<template>
  <div class="container mx-auto">
    <Header />
    <slot />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/shared/Header.vue'
</script>

<style scoped></style>
