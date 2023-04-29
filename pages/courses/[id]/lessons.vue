<template>
  <div class="space-y-2.5 px-5 py-2.5">
    <div class="flex flex-row items-center justify-between">
      <h2 class="text-xl font-medium leading-8">Уроки</h2>

      <CourseLessonCreateDialog v-if="canEdit" :course-id="route.params.id" />
    </div>

    <hr />

    <div>
      <div v-if="pending">
        <SkeletonBone class="mb-2 h-4 w-32 rounded-full" />

        <CourseLessonListSkeleton />
      </div>
      <div v-else-if="lessons" class="space-y-4">
        <div v-if="futureLessons.length">
          <h2 class="mb-1 text-xl">Майбутні</h2>
          <CourseLessonList :lessons="futureLessons" />
        </div>

        <div v-if="pastLessons.length">
          <h2 class="mb-1 text-xl">Минулі</h2>
          <CourseLessonList :lessons="pastLessons" />
        </div>
      </div>
      <div v-else v-text="error" />
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import { lessons as lessonRepository } from '~/api/repositories';

const props = defineProps<{
  canEdit: boolean;
}>();

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
  },
  query: {
    include: 'assignments'
  }
});

const futureLessons = computed(() => {
  if (!lessons.value?.data) {
    return [];
  }

  return lessons.value.data
    .filter(lesson => {
      return dayjs(lesson.date).isAfter(dayjs());
    })
    .sort((a, b) => {
      return dayjs(a.date).isAfter(dayjs(b.date)) ? 1 : -1;
    });
});

const pastLessons = computed(() => {
  if (!lessons.value?.data) {
    return [];
  }

  // sort descending
  return lessons.value.data
    .filter(lesson => {
      return dayjs(lesson.date).isBefore(dayjs());
    })
    .sort((a, b) => {
      return dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1;
    });
});

onMounted(() => {
  execute();
});
</script>
