<template>
  <div class="grow space-y-2.5 px-5 py-2.5">
    <div class="flex flex-row items-center">
      <h2 class="text-xl font-medium leading-8">Мої курси</h2>
    </div>

    <hr />

    <div v-if="pending" class="grid grid-cols-3 gap-3">
      <div v-for="i in 4" :key="i">
        <CourseCardSkeleton />
      </div>
    </div>
    <div v-else-if="error">
      <h2 class="text-3xl">ERRORRRR</h2>
      {{ error }}
    </div>
    <div v-else-if="data" class="grid grid-cols-3 gap-3">
      <NuxtLink
        v-for="course in data.data"
        :key="course.id"
        :to="{
          name: 'courses-id-lessons',
          params: { id: course.id }
        }"
      >
        <CourseCard :course="course" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { courses } from '~/api/repositories';

const { data, error, pending, execute } = await courses.participated.asyncData({
  immediate: false,
  params: {
    include: 'author,lessons,next_lesson.assignments'
  }
});

onMounted(execute);
</script>
