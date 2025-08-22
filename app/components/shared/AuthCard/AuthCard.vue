<template>
  <div>
    <h2 class="mb-8 text-4xl font-bold text-black">{{ title }}</h2>
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
}

const { title } = defineProps<IAuthCardProps>()
</script>

<style scoped></style>
