<template>
  <div
    class="group space-y-4 rounded border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:bg-neutral-100"
  >
    <div>
      <DevOnly>
        <LazyDevDataId :id="props.course.id" />
      </DevOnly>
      <div class="text-xl font-bold" v-text="props.course.title" />
      <div
        class="text-lg font-bold text-neutral-400"
        v-text="props.course.author!.data!.name"
      />
    </div>

    <div
      v-if="nextLesson"
      class="rounded bg-neutral-100 p-3 transition-colors group-hover:bg-neutral-200"
    >
      <DevOnly>
        <LazyDevDataId :id="nextLesson.id" />
      </DevOnly>

      <div class="select-none text-xs leading-none text-neutral-400">
        Наступний урок
      </div>

      <div class="flex flex-row items-center justify-between">
        <div class="text-lg font-medium leading-5" v-text="nextLesson.title" />
        <Icon name="logos:google-meet" size="24px" />
      </div>

      <div
        class="mb-2 flex flex-row items-center space-x-2 rounded text-gray-600"
      >
        <Icon class="text-gray-600" name="mdi:calendar" />
        <span v-text="nextLessonDate" />
      </div>

      <div
        v-if="nextLesson.assignments?.data.length"
        class="text-sm font-medium"
      >
        <div class="text-gray-400">Завдання</div>

        <ul class="pl-2">
          <li
            v-for="assignment in nextLesson.assignments.data"
            :key="assignment.id"
            class="list-inside list-disc"
          >
            {{ assignment.title }}
          </li>
        </ul>
      </div>
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
  return dayjs(nextLesson.value!.date).format('DD.MM.YYYY HH:mm');
});
</script>
