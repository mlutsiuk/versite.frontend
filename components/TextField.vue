<template>
  <div>
    <div>
      <label
        v-if="props.label"
        v-text="props.label"
        :for="id"
      />
      <input
        v-model="content"
        :id="id"
        :placeholder="props.placeholder"
        :disabled="disabled"
        type="text"
      />
    </div>

    <div v-if="!props.hideDetails" class="TextField_Details"></div>
  </div>
</template>

<script setup lang="ts">
// TODO: Add input type prop
import { useVModel } from "@vueuse/core";

const props = withDefaults(defineProps<{
  id?: string
  disabled?: boolean,
  hideDetails?: boolean,
  placeholder?: string,
  label?: string,

  modelValue?: string
}>(), {
  disabled: false,
  hideDetails: false
});
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const { uid } = useUid();
const id = computed(() => props.id || `input-${uid}`);

const content = useVModel(props, 'modelValue', emit);
</script>

<style lang="postcss" scoped>
label {
  @apply block text-left mb-2 text-sm font-medium text-gray-900 dark:text-gray-300;
}

input {
  @apply block w-full p-4
  focus:outline-none border border-gray-300 rounded-md
  text-gray-900 text-sm placeholder-gray-400;
}

.TextField {
  &_Details {
    @apply min-h-[14px];
  }
}
</style>
