<template>
  <MdIcon
    @click="emit('click')"
    :class="{
      'active': props.active
    }"
    class="button"
    :icon="icon"
    :height="24"
    :width="24"
  />
</template>

<script setup lang="ts">
import { IconifyIcon } from "@iconify/types";

const props = withDefaults(defineProps<{
  active?: boolean,
  icon: IconifyIcon,
}>(), {
  active: false
});

const emit = defineEmits<{
  (e: 'click'): void
}>();
</script>

<style scoped>
.button {
  @apply p-1
  text-gray-600 hover:bg-gray-200 rounded
  cursor-pointer transition-all;
}

.button.active {
  @apply bg-sky-100 text-sky-800;
}
</style>
