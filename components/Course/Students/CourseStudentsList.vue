<template>
  <div>
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
