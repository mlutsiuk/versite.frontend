<template>
  <div class="flex grow flex-row items-stretch space-x-5 overflow-y-auto">
    <div class="basis-3/12 space-y-2.5 rounded-lg bg-white px-2.5 py-2.5">
      <h2 class="text-xl font-medium leading-8">Студенти</h2>
      <hr />

      <div class="flex flex-row items-center justify-between">
        <div class="text-xl">Подані роботи</div>
        <div class="text-sm text-gray-400">
          {{ studentsWithSubmission?.length }} / {{ students?.length }}
        </div>
      </div>
      <AssignmentStudentList
        v-if="studentsWithSubmission"
        v-model:selected-student-id="selectedStudentId"
        :students="studentsWithSubmission"
        :submissions="submissions"
      />

      <div class="flex flex-row items-center justify-between">
        <div class="text-xl">Без подання</div>
        <div class="text-sm text-gray-400">
          {{ studentsWithoutSubmission?.length }} / {{ students?.length }}
        </div>
      </div>
      <AssignmentStudentList
        v-if="studentsWithoutSubmission"
        v-model:selected-student-id="selectedStudentId"
        :students="studentsWithoutSubmission"
      />
    </div>

    <div
      class="flex grow basis-9/12 flex-col space-y-2.5 rounded-lg bg-white px-5 pt-2.5 shadow-lg"
    >
      <div class="flex flex-row items-center justify-between">
        <h2 class="text-xl font-medium leading-8">Завдання</h2>

        <NuxtLink
          v-if="assignment?.data.lesson?.data"
          :to="{
            name: 'lessons-id',
            params: { id: assignment?.data.lesson?.data?.id }
          }"
          class="flex cursor-pointer select-none flex-row rounded bg-gray-100 px-2 py-1 transition-colors hover:bg-gray-200"
        >
          <Icon class="mr-1" name="mdi:notebook-outline" size="24px" />

          Переглянути урок
        </NuxtLink>
      </div>
      <hr />

      <div v-if="assignment">
        <div class="text-2xl">{{ assignment.data.title }}</div>
        <div>{{ assignment.data.description }}</div>

        <div v-if="assignment.data.deadline" class="mt-2">
          <div
            class="flex flex-row items-center space-x-2 rounded text-gray-600"
          >
            <span
              v-text="
                dayjs(assignment.data.deadline).format('DD.MM.YYYY HH:mm')
              "
            />
            <span class="text-gray-400">
              ({{ dayjs(assignment.data.deadline).fromNow() }})
            </span>
          </div>
        </div>
      </div>

      <hr />

      <div class="relative grow overflow-auto">
        <div v-if="!selectedStudentId">Виберіть студента</div>
        <div
          v-else-if="selectedSubmission"
          class="Tiptap-LessonMaterial"
          v-html="selectedSubmission.content"
        />
        <div v-else>
          <div
            class="flex h-full flex-row items-center space-x-2.5 rounded bg-sky-100 px-8 py-4"
          >
            <Icon name="mdi:text-box-remove-outline" size="24px" />
            <div class="text-xl">Студент не подавав роботу</div>
          </div>
        </div>
      </div>

      <div class="rounded-b">
        <hr />

        <SubmissionResponseEditor v-model="responseText" class="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import { assignments as assignmentsRepository } from '~/api/repositories';

const route = useRoute('assignments-id');

const { data: assignment, execute: loadAssignment } =
  await assignmentsRepository.find.asyncData({
    immediate: false,
    routeParams: {
      id: route.params.id
    },
    query: {
      include: 'lesson.course.students.user,submissions.student.user'
    }
  });

const submissions = computed(() => {
  return assignment.value?.data.submissions?.data;
});

const students = computed(() => {
  return assignment.value?.data.lesson?.data?.course?.data?.students?.data;
});

const studentsWithSubmission = computed(() => {
  return students.value?.filter(student => {
    return submissions.value?.some(
      submission => submission.student?.data?.id === student.id
    );
  });
});

const studentsWithoutSubmission = computed(() => {
  return students.value?.filter(student => {
    return !submissions.value?.some(
      submission => submission.student?.data?.id === student.id
    );
  });
});

const selectedStudentId = ref<string | null>(null);
const selectedSubmission = computed(() => {
  return submissions.value?.find(
    submission => submission.student_id === selectedStudentId.value
  );
});

const responseText = ref<string>('');

onMounted(async () => {
  await loadAssignment();
});
</script>
