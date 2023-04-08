<template>
  <div>
    <div class="text-lg font-medium">
      {{ lesson.title }}
    </div>
    <div
      class="mb-2 flex flex-row items-center space-x-2 rounded text-gray-600"
    >
      <Icon class="text-gray-600" name="mdi:calendar" />
      <span v-text="date" />
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
  return dayjs.unix(props.lesson.date).format('DD.MM.YYYY HH:mm');
});
</script>
