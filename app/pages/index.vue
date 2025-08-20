<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center overflow-hidden"
  >
    <p>index page</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
</script>

<style scoped></style>
