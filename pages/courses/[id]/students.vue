<template>
  <div class="space-y-2.5 px-5 py-2.5">
    <div class="flex flex-row items-center justify-between">
      <h2 class="text-xl font-medium leading-8">Студенти</h2>

      <CourseStudentsCreateDialog
        v-if="props.canEdit"
        :course-id="route.params.id"
        @create="refresh"
      />
    </div>

    <hr />

    <div>
      <CourseStudentsListSkeleton v-if="pending" />
      <CourseStudentsList
        v-else-if="data"
        :students="data.data"
        @create="refresh"
      />
      <div v-else v-text="error" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { students } from '~/api/repositories';

const props = defineProps<{
  canEdit: boolean;
}>();

const route = useRoute('courses-id-students');

const { data, error, execute, refresh, pending } =
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
