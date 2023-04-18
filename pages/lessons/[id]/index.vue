<template>
  <div class="flex w-full flex-row space-x-5 overflow-y-hidden">
    <div
      class="flex basis-3/4 flex-col space-y-2.5 rounded bg-white px-5 py-2.5"
    >
      <div class="flex flex-row justify-between">
        <SkeletonBone v-if="pending" class="mt-2 h-6 w-96 rounded-full" />
        <h1 v-else class="text-2xl font-medium" v-text="lesson?.data.title" />

        <NuxtLink
          :to="{ name: 'lessons-id-edit', params: { id: route.params.id } }"
          class="flex cursor-pointer flex-row items-center rounded bg-gray-100 px-2 py-1 transition-colors hover:bg-gray-200"
        >
          <Icon class="mr-1" name="mdi:pencil" size="24px" />
          Редагувати
        </NuxtLink>
      </div>

      <hr />

      <div class="grow overflow-auto">
        <div v-if="pending" class="h-full">
          <SkeletonBone class="mb-2 h-5/6 w-full rounded" />
        </div>
        <div
          v-else
          class="Tiptap-LessonMaterial"
          v-html="lesson?.data.material?.data?.content"
        />
      </div>
    </div>

    <div class="basis-1/4 space-y-2.5 rounded bg-white px-4 py-2.5 shadow">
      <h2 class="text-2xl">Завдання</h2>
      <hr />

      <LessonAssignmentsListSkeleton v-if="pending" />
      <LessonAssignmentsList
        v-else-if="lesson?.data.assignments"
        :assignments="lesson?.data.assignments.data"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { lessons } from '~/api/repositories';

const route = useRoute('lessons-id');

const {
  data: lesson,
  pending,
  error,
  execute
} = await lessons.find.asyncData({
  immediate: false,
  routeParams: {
    id: route.params.id
  },
  query: {
    include: 'material,assignments'
  }
});

onMounted(execute);
</script>
