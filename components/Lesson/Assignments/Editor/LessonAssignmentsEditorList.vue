<template>
  <LessonAssignmentsListSkeleton v-if="pending" />
  <div v-else class="space-y-2.5">
    <LessonAssignmentsEditorListItem
      v-for="assignment in assignments?.data"
      :key="assignment.id"
      :assignment="assignment"
      @save="refresh"
    />

    <LessonAssignmentsEditorCreateButton
      :lesson-id="props.lessonId"
      @create="refresh"
    />
  </div>
</template>

<script lang="ts" setup>
import { assignments as assignmentRepository } from '~/api/repositories';

const props = defineProps<{
  lessonId: string;
}>();

const {
  data: assignments,
  error,
  pending,
  refresh,
  execute
} = await assignmentRepository.allFromLesson.asyncData({
  immediate: false,
  routeParams: {
    id: props.lessonId
  }
});

onMounted(execute);
</script>
