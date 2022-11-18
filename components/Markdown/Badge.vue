<template>
  <div class="inline-block">
    <div class="flex relative">
      <slot />
      <span
        :class="badgeClass"
        class="badge"
      >
        {{ content }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  content?: string,
  color?: string
}>(), {
  color: 'bg-gray-500'
});

const badgeClass = computed(() => {
  return ['badge', props.color];
})
</script>

<style scoped>
.badge {
  @apply items-center rounded-full justify-center indent-0
    text-xs text-center leading-none
    h-5 min-w-[20px] py-1 px-1.5 absolute
    text-gray-200;

  bottom: calc(100% - 12px);
  left: calc(100% - 12px);
}
</style>
