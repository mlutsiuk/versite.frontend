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
import { directive as vAutowidth } from 'vue-input-autowidth';

const props = defineProps<{
  modelValue: string;
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
const content = useVModel(props, 'modelValue', emit);
</script>

<style scoped>
input {
  @apply rounded-sm border border-transparent px-1
  text-2xl outline-none transition-colors
  hover:border-gray-200
  focus-visible:border-gray-400;
}
</style>
