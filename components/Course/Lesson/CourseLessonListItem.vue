<template>
  <div
    class="rounded-sm bg-neutral-100 px-2 py-3 transition-colors hover:bg-neutral-200"
  >
    <DevOnly>
      <DevDataId :id="lesson.id" />
    </DevOnly>

    <div class="mb-1 text-xl font-medium">
      {{ lesson.title }}
    </div>

    <div class="mb-2 flex flex-row items-center space-x-2 text-gray-600">
      <Icon class="text-gray-600" name="mdi:calendar" />
      <span v-text="date" />
    </div>

    <div v-if="lesson.assignments?.data.length" class="text-sm font-medium">
      <div class="text-gray-400">Завдання</div>

      <ul class="pl-2">
        <li
          v-for="assignment in lesson.assignments?.data"
          :key="assignment.id"
          class="list-inside list-disc"
        >
          {{ assignment.title }}*
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import { Lesson } from '~/api/lesson';

const props = defineProps<{
  lesson: Lesson;
}>();

const date = computed(() => {
  return dayjs(props.lesson.date).format('DD.MM.YYYY HH:mm');
});
</script>
