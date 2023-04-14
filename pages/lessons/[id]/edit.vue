<template>
  <div class="flex w-full flex-row space-x-5 overflow-y-hidden">
    <div class="flex grow basis-8/12 flex-col">
      <LessonEditor :lesson-id="route.params.id" class="w-full" />
    </div>

    <div class="h-[30rem] basis-1/4 rounded bg-white shadow">
      <h2 class="p-4 text-2xl">Завдання</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute('lessons-id-edit');
</script>
