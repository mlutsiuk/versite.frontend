<template>
  <div
    :class="[props.inactive ? 'bg-neutral-100' : 'bg-white']"
    class="group relative flex flex-col p-1"
  >
    <div class="mb-1 flex flex-row justify-between">
      <div
        :class="[
          isCurrentDay ? 'bg-blue-600 text-white' : '',
          props.inactive ? 'text-neutral-400' : ''
        ]"
        class="flex rounded-full font-bold"
      >
        <div
          class="w-[24px] text-center leading-6"
          v-text="props.date.get('date')"
        />
      </div>

      <div
        v-if="todayLessons.length !== 0"
        class="w-[24px] text-end text-sm font-semibold leading-6 text-neutral-600"
        v-text="todayLessons.length"
      />
    </div>

    <div class="flex flex-col space-y-0.5 overflow-auto">
      <CourseCalendarDayLesson
        v-for="lesson in todayLessons"
        :key="lesson.id"
        :lesson="lesson"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs, { Dayjs } from 'dayjs';
import { Lesson } from '~/api/models';

const props = withDefaults(
  defineProps<{
    date: Dayjs;
    lessons: Record<string, Lesson[]>;
    inactive?: boolean;
  }>(),
  {
    inactive: false
  }
);

const isCurrentDay = computed(() => {
  return dayjs().isSame(props.date, 'day');
});

const todayLessons = computed(() => {
  let todayLessons = props.lessons[props.date.format('YYYY-MM-DD')] || [];

  todayLessons.sort((a, b) => {
    return dayjs(a.date).isBefore(dayjs(b.date)) ? -1 : 1;
  });

  return todayLessons;
});
</script>
