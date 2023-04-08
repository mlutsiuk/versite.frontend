<template>
  <div class="flex w-full flex-row space-x-5">
    <div class="basis-3/12">
      <CourseSidebarNavigation
        :course-id="route.params.id"
        :course-title="course?.data.title ?? ''"
        class="w-full"
      />
    </div>

    <div class="basis-9/12 rounded bg-white">
      <NuxtPage :page-key="route.fullPath"></NuxtPage>
    </div>

    <div class="basis-2/12 bg-white">іа</div>
  </div>
</template>

<script lang="ts" setup>
import { courses } from '~/api/repositories';

const route = useRoute('courses-id');

const { data: course } = await courses.find.asyncData({
  key: 'course:find',
  routeParams: {
    id: route.params.id
  }
});
</script>
