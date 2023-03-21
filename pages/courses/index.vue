<template>
  <div class="w-full transition-all">
    <div v-if="pending">
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
    <div v-else-if="error">
      <h2 class="text-3xl">ERRORRRR</h2>
      {{ error }}
    </div>
    <div
      v-else-if="data"
      class="grid grid-cols-3"
    >
      <div
        v-for="course in data.data"
        class="border rounded p-2 bg-white m-2 flex flex-col justify-between"
      >
        <div>
          <div v-for="(value, key) in course">
            <span class="text-gray-400" v-text="key"/>: <span v-text="value"/>
          </div>
        </div>
        <MdButton
          :to="`/courses/${course.id}/edit`"
          block
          class="mt-2 text-[#6F5274]"
          variant="outline"
        >
          Edit
        </MdButton>

        <MdButton
          :to="`/courses/${course.id}`"
          block
          class="mt-2 text-[#6F5274]"
          variant="outline"
        >
          Open
        </MdButton>
      </div>
    </div>
    <div v-else>
      <h2 class="text-2xl text-red-600">ELSE ????????</h2>
    </div>

    <div>
      <MdButton
        block
        class="text-gray-400 mt-4"
        size="x-large"
        to="/courses/create"
        variant="outline"
      >
        Створити новий курс
      </MdButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { courses } from '~/api/courses/repositories';

const { data, error, pending, execute } = await courses.all.asyncData({
  key: 'courses:all',
  immediate: false
});

onMounted(execute);
</script>
