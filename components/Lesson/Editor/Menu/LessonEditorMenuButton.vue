<template>
  <Icon
    @click="emit('click')"
    :class="{
      'active': props.active
    }"
    class="button"
    :name="icon"
    size="2em"
  />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  active?: boolean,
  icon: string,
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
  @apply bg-sky-100 hover:bg-sky-200 text-sky-800;
}
</style>
