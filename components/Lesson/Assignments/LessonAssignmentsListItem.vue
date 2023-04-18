<template>
  <div
    class="space-y-1 rounded-sm bg-neutral-100 px-2 py-2 transition-colors hover:bg-neutral-200"
  >
    <DevOnly>
      <DevDataId :id="assignment.id" />
    </DevOnly>

    <div class="text-xl font-medium leading-snug">
      {{ assignment.title }}
    </div>

    <div class="text-base font-medium text-gray-600">
      {{ assignment.description }}
    </div>

    <div v-if="assignment.deadline" class="leading-tight">
      <div class="flex flex-row items-center space-x-2 rounded text-gray-600">
        <span v-text="dayjs(assignment.deadline).format('DD.MM.YYYY HH:mm')" />
        <span class="text-gray-400"
          >({{ dayjs(assignment.deadline).fromNow() }})</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Assignment } from '~/api/models';
import dayjs from 'dayjs';

const props = defineProps<{
  assignment: Assignment;
}>();
</script>
