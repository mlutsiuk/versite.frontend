<template>
  <div class="flex flex-col space-y-2.5">
    <CourseStudentsListItem
      v-for="student in props.students"
      :key="student.id"
      :student="student"
      @create="emit('create')"
    />
  </div>
</template>

<script lang="ts" setup>
import { Student } from '~/api/models';

const props = defineProps<{
  students: Student[];
}>();
const emit = defineEmits<{
  (e: 'create'): void;
}>();
</script>
