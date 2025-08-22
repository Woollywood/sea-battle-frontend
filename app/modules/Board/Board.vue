<template>
  <div class="flex">
    <Row
      :cells="computedSize.y"
      class="flex-col border border-transparent"
    >
      <Cell />
      <template #cell="{ cell }">
        <Cell>
          {{ cell }}
        </Cell>
      </template>
    </Row>

    <div>
      <Row class="border border-transparent" :cells="computedSize.x">
        <template #cell="{ cell }">
          <Cell>
            {{ cell }}
          </Cell>
        </template>
      </Row>
      <div
        :class="[
          'group inline-block border border-black',
          { 'pointer-events-none': disabled },
        ]"
      >
        <Row
          v-for="y of computedSize.y"
          :key="y"
          :y="y"
          :cells="computedSize.x"
        >
          <template #cell="{ cell }">
            <Cell
              :class="[
                'border border-black',
                {
                  'cursor-pointer hover:bg-amber-100': !disabled,
                },
              ]"
              @click="emit('cellClick', { x: cell, y })"
            />
          </template>
        </Row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IBoardEvents, IBoardProps } from './types'

import Cell from './components/Cell.vue'
import Row from './components/Row.vue'
import { convertNumberToArray } from './utils'

const { disabled, size } = defineProps<IBoardProps>()
const emit = defineEmits<IBoardEvents>()

const computedSize = computed(() => ({
  x: convertNumberToArray(size.x),
  y: convertNumberToArray(size.y),
}))
</script>
