<template>
  <div class="flex w-full flex-row space-x-5 overflow-y-hidden">
    <div
      class="flex basis-3/4 flex-col space-y-2.5 rounded bg-white px-5 py-2.5"
    >
      <div class="flex flex-row justify-between">
        <h1 class="text-2xl font-medium" v-text="lesson?.data.title" />

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
        <div
          class="Tiptap-LessonMaterial"
          v-html="lesson?.data.material?.data?.content"
        />
      </div>
    </div>

    <div class="h-[30rem] basis-1/4 rounded bg-white shadow">
      <h2 class="p-4 text-2xl">Завдання</h2>
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
    include: 'material'
  }
});

onMounted(execute);
</script>
