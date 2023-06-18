<template>
  <div class="flex h-full w-full flex-row space-x-5 overflow-y-hidden">
    <div class="flex grow basis-8/12 flex-col">
      <LessonEditor :lesson-id="route.params.id" class="w-full" />
    </div>

    <div class="basis-1/4 space-y-2.5 rounded bg-white px-4 py-2.5 shadow">
      <h2 class="text-2xl">Завдання</h2>
      <hr />

      <LessonAssignmentsEditorList :lesson-id="route.params.id" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute('lessons-id-edit');
</script>
