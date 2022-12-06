<template>
  <input
    v-model="content"
    ref="input"
    type="text"
  />
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';

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
  @apply text-2xl px-1 transition-all outline-none
  border border-transparent rounded-sm
  hover:border-gray-200
  focus-visible:border-gray-400;
}
</style>
