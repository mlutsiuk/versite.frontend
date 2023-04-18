<template>
  <div class="space-y-2.5">
    <LessonAssignmentsListItem
      v-for="assignment in assignments"
      :key="assignment.id"
      :assignment="assignment"
    />
  </div>
</template>

<script lang="ts" setup>
import { Assignment } from '~/api/models';

const props = defineProps<{
  assignments: Assignment[];
}>();
</script>
