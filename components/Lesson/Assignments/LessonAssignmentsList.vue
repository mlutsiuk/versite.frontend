<template>
  <div class="space-y-2.5">
    <LessonAssignmentsListItem
      v-for="assignment in props.assignments"
      :key="assignment.id"
      :assignment="assignment"
      @create:submission="emit('reload')"
    />
  </div>
</template>

<script lang="ts" setup>
import { Assignment } from '~/api/models';

const props = defineProps<{
  assignments: Assignment[];
}>();
const emit = defineEmits<{
  (e: 'reload'): void;
}>();
</script>
