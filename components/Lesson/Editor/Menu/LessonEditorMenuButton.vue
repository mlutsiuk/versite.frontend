<template>
  <Icon
    :class="{
      active: props.active
    }"
    class="button"
    :name="icon"
    size="2em"
    @click="emit('click')"
  />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    active?: boolean;
    icon: string;
  }>(),
  {
    active: false
  }
);

const emit = defineEmits<{
  (e: 'click'): void;
}>();
</script>

<style scoped>
.button {
  @apply cursor-pointer
  rounded p-1 text-gray-600
  transition-all hover:bg-gray-200;
}

.button.active {
  @apply bg-sky-100 text-sky-800 hover:bg-sky-200;
}
</style>
