<template>
  <div class="w-full rounded bg-white p-6 shadow-lg">
    <div class="flex flex-row items-center justify-between">
      <h2 class="text-3xl font-medium">Мої курси</h2>
      <!--      <TextField-->
      <!--        class="w-[400px]"-->
      <!--        placeholder="Пошук"-->
      <!--        hide-details-->
      <!--      />-->
    </div>

    <div v-if="pending">
      <h2 class="text-3xl">Loading</h2>
    </div>
    <div v-else-if="error">
      <h2 class="text-3xl">ERRORRRR</h2>
      {{ error }}
    </div>
    <div v-else-if="data">
      <div class="grid grid-cols-3 gap-3">
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
  </div>
</template>

<script setup lang="ts">
import { courses } from '~/api/courses/repositories';

const { data, error, pending, execute } = await courses.all.asyncData({
  immediate: false,
  params: {
    include: 'author,lessons,next_lesson'
  }
});

onMounted(execute);
</script>
