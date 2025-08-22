<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="(count, type) in shipsConfig"
      :key="type"
      class="flex items-center justify-start"
    >
      <ClientOnly>
        <Ship v-for="ship in count" :key="ship" :type="type" />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { shipsConfig } from '../constants'

import Ship from './Ship.vue'
</script>

<style scoped></style>
