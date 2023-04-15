<template>
  <div
    :class="[props.inactive ? 'bg-neutral-100' : 'bg-white']"
    class="group relative flex flex-col"
  >
    <div class="flex flex-row">
      <div
        :class="[
          isCurrentDay ? 'bg-blue-600 text-white' : 'text-neutral-700',
          props.inactive ? 'text-neutral-400' : ''
        ]"
        class="mx-2 my-1 flex rounded-full text-sm font-bold"
      >
        <div
          class="w-[24px] text-center leading-6"
          v-text="props.date.get('date')"
        />
      </div>
    </div>

    <div class="flex flex-col overflow-auto px-1 py-1">
      <button
        class="flex h-5 flex-shrink-0 items-center px-1 text-xs hover:bg-gray-200"
      >
        <span class="ml-2 font-light leading-none">8:30am</span>
        <span class="ml-2 truncate font-medium leading-none"
          >An unconfirmed event</span
        >
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs, { Dayjs } from 'dayjs';

const props = withDefaults(
  defineProps<{
    date: Dayjs;
    inactive?: boolean;
  }>(),
  {
    inactive: false
  }
);

const isCurrentDay = computed(() => {
  return dayjs().isSame(props.date, 'day');
});
</script>

<style scoped></style>
