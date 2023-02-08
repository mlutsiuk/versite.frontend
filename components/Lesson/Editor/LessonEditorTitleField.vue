<template>
  <input
    v-model="content"
    v-autowidth="{ comfortZone: '6px' }"
    placeholder="Без назви"
    ref="input"
    type="text"
  />
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import { directive as vAutowidth } from "vue-input-autowidth"

const props = defineProps<{
  modelValue: string
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();
const content = useVModel(props, 'modelValue', emit);
</script>

<style scoped>
input {
  @apply text-2xl px-2 transition-colors outline-none
  border border-transparent rounded-sm
  hover:border-gray-200
  focus-visible:border-gray-400;
}
</style>
