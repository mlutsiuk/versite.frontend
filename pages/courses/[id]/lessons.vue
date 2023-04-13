<template>
  <div class="space-y-2.5 px-5 py-2.5">
    <div class="flex flex-row items-center justify-between">
      <h2 class="text-xl font-medium">Уроки</h2>

      <div
        class="flex cursor-pointer select-none flex-row rounded bg-gray-100 px-2 py-1 transition-colors hover:bg-gray-200"
      >
        <Icon class="mr-1" name="mdi:plus" size="24px" />

        Створити
      </div>
    </div>

    <hr />

    <div>
      <h2 class="mb-1 text-xl">Майбутні</h2>

      <CourseLessonListSkeleton v-if="pending" />
      <CourseLessonList v-else-if="lessons" :lessons="lessons.data" />
      <div v-else v-text="error" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { lessons as lessonRepository } from '~/api/repositories';

const route = useRoute('courses-id-lessons');

const {
  data: lessons,
  error,
  pending,
  execute
} = await lessonRepository.allFromCourse.asyncData({
  immediate: false,
  routeParams: {
    id: route.params.id
  }
});

onMounted(() => {
  execute();
});
</script>
