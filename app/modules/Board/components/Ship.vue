<template>
  <div class="flex items-center justify-between">
    <Cell
      v-for="cell in shipsSizes[type]"
      :key="cell"
      class="outline -outline-offset-0 outline-black"
    />
  </div>
</template>

<script setup lang="ts">
import type { IShipProps } from '../types'

import { shipsSizes } from '../constants'

import Cell from './Cell.vue'

const { type } = defineProps<IShipProps>()
</script>

<style scoped></style>
