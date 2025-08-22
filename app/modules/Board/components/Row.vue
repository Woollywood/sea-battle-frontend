<template>
  <div class="flex">
    <slot />
    <slot
      v-for="cell in cells"
      :key="cell"
      name="cell"
      :cell="cell"
    />
  </div>
</template>

<script setup lang="ts">
interface IRowProps {
  cells: number[]
}

const { cells } = defineProps<IRowProps>()
</script>

<style scoped></style>
