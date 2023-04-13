<template>
  <div class="space-y-2.5">
    <NuxtLink
      v-for="lesson in props.lessons"
      :key="lesson.id"
      :to="{
        name: 'lessons-id',
        params: { id: lesson.id }
      }"
      class="block"
    >
      <CourseLessonListItem :lesson="lesson" />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { Lesson } from '~/api/lesson';

const props = defineProps<{
  lessons: Lesson[];
}>();
</script>
