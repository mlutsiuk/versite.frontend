<template>
  <div class="flex w-full flex-row space-x-5">
    <div class="flex w-9/12 flex-row items-center">
      Перегляд уроку - {{ route.params.id }}
    </div>

    <div class="h-[30rem] w-3/12 rounded bg-white shadow">
      <h2 class="p-4 text-2xl">Завдання</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute('lessons-id');
</script>
