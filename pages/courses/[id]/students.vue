<template>
  <div class="space-y-2.5 px-5 py-2.5">
    <div class="flex flex-row items-center justify-between">
      <h2 class="text-xl font-medium">Студенти</h2>

      <div
        class="flex cursor-pointer select-none flex-row rounded bg-gray-100 px-2 py-1 transition-colors hover:bg-gray-200"
      >
        <Icon class="mr-1" name="mdi:plus" size="24px" />

        Створити
      </div>
    </div>

    <hr />

    <div>
      <CourseStudentsListSkeleton v-if="pending" />
      <CourseStudentsList v-else-if="data" :students="data.data" />
      <div v-else v-text="error" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { students } from '~/api/repositories';

const route = useRoute('courses-id-students');

const { data, error, execute, pending } =
  await students.allFromCourse.asyncData({
    immediate: false,
    routeParams: {
      id: route.params.id
    },
    query: {
      include: 'user,invitation.receiver'
    }
  });

onMounted(execute);
</script>
