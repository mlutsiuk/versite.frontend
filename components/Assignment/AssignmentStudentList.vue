<template>
  <div class="space-y-2">
    <div
      v-for="{ student, submission } in studentsWithSubmission"
      :key="student.id"
      :class="[
        selectedStudentId === student.id
          ? 'bg-blue-50'
          : 'bg-neutral-50 hover:bg-neutral-100'
      ]"
      class="flex cursor-pointer select-none flex-col rounded p-2 transition-colors"
      @click="selectedStudentId = student.id"
    >
      <div class="flex flex-row space-x-2">
        <UserAvatar
          :user="student?.user?.data"
          class="rounded-full"
          size="50px"
        />
        <div>
          <div class="text-lg">
            {{ student.user?.data ? student.user?.data.name : student.name }}
          </div>
          <div v-if="submission" class="text-base text-gray-400">
            Здано: {{ dayjs(submission.created_at).format('DD.MM.YYYY HH:mm') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useVModel } from '@vueuse/core';
import dayjs from 'dayjs';
import { AssignmentSubmission, Student } from '~/api/models';

const props = withDefaults(
  defineProps<{
    students: Student[];
    submissions?: AssignmentSubmission[];
    selectedStudentId: string | null;
  }>(),
  {
    submissions: () => []
  }
);

const emit = defineEmits<{
  (e: 'update:selectedStudentId', value: string | null): void;
}>();

const selectedStudentId = useVModel(props, 'selectedStudentId', emit);

const studentsWithSubmission = computed(() => {
  const res: { student: Student; submission: AssignmentSubmission | null }[] =
    [];

  for (const student of props.students) {
    const submission =
      props.submissions?.find(
        submission => submission.student_id === student.id
      ) ?? null;

    res.push({
      student,
      submission
    });
  }

  return res;
});
</script>
