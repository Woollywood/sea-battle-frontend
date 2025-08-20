<template>
  <div>
    <h2 class="mb-3 text-4xl font-bold text-black">{{ title }}</h2>
    <p class="mb-8 text-lg text-gray-500">{{ description }}</p>
    <div class="space-y-8">
      <slot />
      <div class="text-center">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IAuthCardProps {
  title: string
  description: string
}

const { title, description } = defineProps<IAuthCardProps>()
</script>

<style scoped></style>
