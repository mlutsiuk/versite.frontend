<template>
  <div>
    <div class="flex items-center space-x-2">
      <h2 class="text-xl font-medium">Уроки</h2>
    </div>

    <div v-if="lessons">
      <CourseLessonList :lessons="lessons.data" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { lessons as lessonRepository } from '~/api/repositories';

const route = useRoute('courses-id-lessons');

const { data: lessons, execute } =
  await lessonRepository.allFromCourse.asyncData({
    immediate: false,
    routeParams: {
      id: route.params.id
    }
  });

onMounted(() => {
  execute();
});
</script>
