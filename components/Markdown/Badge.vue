<template>
  <div class="inline-block">
    <div class="relative flex">
      <slot />
      <div :class="props.color" class="badge mr-0.5 mt-0.5">
        <div>{{ content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    content?: string | number;
    color?: string;
  }>(),
  {
    color: 'bg-gray-500'
  }
);
</script>

<style scoped>
.badge {
  @apply absolute right-0 top-0 flex h-5 min-w-[20px] -translate-y-1/2
  translate-x-1/2 select-none items-center
  justify-center rounded-full px-1.5 py-1 text-center indent-0 text-xs leading-none text-gray-200;
}
</style>
