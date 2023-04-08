<template>
  <div class="space-y-4 rounded border border-gray-200 bg-white p-5 shadow-sm">
    <div>
      <DevOnly>
        <LazyDevDataId :id="props.course.id" />
      </DevOnly>
      <div class="text-xl font-bold" v-text="props.course.title" />
      <div
        class="text-lg font-bold text-neutral-400"
        v-text="props.course.author.data.name"
      />
    </div>

    <div
      v-if="nextLesson"
      class="relative rounded border border-neutral-400 p-3"
    >
      <span
        class="absolute top-0 -translate-y-1/2 select-none bg-white pb-0.5 align-middle text-sm text-neutral-400"
      >
        Наступний урок
      </span>

      <DevOnly>
        <LazyDevDataId :id="nextLesson.id" />
      </DevOnly>

      <div class="flex flex-row items-center justify-between">
        <div class="text-lg font-medium" v-text="nextLesson.title" />
        <Icon name="logos:google-meet" size="24px" />
      </div>

      <div
        class="mb-2 flex flex-row items-center space-x-2 rounded text-gray-600"
      >
        <Icon class="text-gray-600" name="mdi:calendar" />
        <span v-text="nextLessonDate" />
      </div>

      <div>Якийсь клятючий текст який написав автор, але ми його обр...</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Course } from '~/api/courses';
import dayjs from 'dayjs';

const props = defineProps<{
  course: Course;
}>();

const nextLesson = computed(() => {
  return props.course.next_lesson?.data;
});
// Format date to 22.03.2023 15:30
const nextLessonDate = computed(() => {
  return dayjs.unix(nextLesson.value!.date).format('DD.MM.YYYY HH:mm');
});
</script>
