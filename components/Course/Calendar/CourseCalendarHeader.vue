<template>
  <div class="flex items-center">
    <div class="flex">
      <button class="month-change-button" @click="emit('click-previous')">
        <Icon name="mdi:chevron-left" size="36px" />
      </button>
      <button class="month-change-button" @click="emit('click-next')">
        <Icon name="mdi:chevron-right" size="36px" />
      </button>
    </div>
    <h2 class="ml-2 text-xl font-bold leading-none">{{ formatted }}</h2>
  </div>
</template>

<script lang="ts" setup>
import { Dayjs } from 'dayjs';
import { capitalize } from 'lodash-es';

const props = defineProps<{
  date: Dayjs;
}>();
const emit = defineEmits<{
  (event: 'click-previous'): void;
  (event: 'click-next'): void;
}>();

const formatted = computed(() => {
  return capitalize(props.date.format('MMMM, YYYY'));
});

// TODO: Ripple effect on click
</script>

<style scoped>
.month-change-button {
  @apply rounded-full transition-colors hover:bg-neutral-200;
}
</style>
