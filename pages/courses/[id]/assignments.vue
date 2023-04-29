<template>
  <div class="space-y-2.5 px-5 py-2.5">
    <div class="flex flex-row items-center justify-between">
      <h2 class="text-xl font-medium leading-8">Завдання</h2>
    </div>

    <hr />

    <div>
      <div v-if="pending">
        <SkeletonBone class="mb-2 h-4 w-32 rounded-full" />
      </div>
      <div v-else-if="data" class="space-y-4">
        <NuxtLink
          v-for="assignment in data.data"
          :key="assignment.id"
          :to="{
            name: 'assignments-id',
            params: {
              id: assignment.id
            }
          }"
          class="flex flex-col rounded bg-neutral-100 p-2 transition-colors hover:bg-neutral-200"
        >
          <div class="text-xl font-medium">{{ assignment.title }}</div>
          <div>{{ assignment.description }}</div>

          <div
            v-if="assignment.deadline"
            class="flex flex-row items-center space-x-2 rounded text-gray-600"
          >
            <span
              v-text="dayjs(assignment.deadline).format('DD.MM.YYYY HH:mm')"
            />
            <span class="text-gray-400">
              ({{ dayjs(assignment.deadline).fromNow() }})
            </span>
          </div>
        </NuxtLink>
      </div>
      <div v-else v-text="error" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import { assignments } from '~/api/repositories';

const route = useRoute('courses-id-assignments');

const { data, error, pending, execute } =
  await assignments.allFromCourse.asyncData({
    immediate: false,
    routeParams: {
      id: route.params.id
    }
  });

onMounted(execute);
</script>
