<template>
  <div>
    <div class="divide-y">
      <CourseLessonListItem
        v-for="lesson in props.lessons"
        :key="lesson.id"
        :lesson="lesson"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Lesson } from '~/api/lesson';

const props = defineProps<{
  lessons: Lesson[];
}>();
</script>

<style scoped></style>
