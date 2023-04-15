<template>
  <div class="flex flex-col space-y-2.5">
    <CourseStudentsListItem
      v-for="student in props.students"
      :key="student.id"
      :student="student"
    />
  </div>
</template>

<script lang="ts" setup>
import { Student } from '~/api/models';

const props = defineProps<{
  students: Student[];
}>();
</script>
