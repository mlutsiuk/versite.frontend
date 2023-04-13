<template>
  <div class="flex w-full flex-row space-x-5">
    <div class="basis-3/12">
      <CourseSidebarNavigation
        :course-id="route.params.id"
        :course-title="course?.data.title"
        class="w-full"
      />
    </div>

    <div class="basis-8/12 rounded bg-white">
      <NuxtPage :page-key="route.fullPath"></NuxtPage>
    </div>

    <div class="h-min basis-3/12 space-y-2.5 rounded bg-white p-2.5">
      <h2 class="text-2xl font-medium">Необхідно виконати</h2>

      <hr />

      <div
        class="flex flex-row items-center space-x-6 rounded-2xl border border-neutral-400 px-3 py-2"
      >
        <div>
          <div class="text-xl font-medium">Introduction to UI/UX design</div>

          <div class="text-sm">
            The "Introduction to UI/UX Design" lesson provides an overview of
            the fundamental principles and co...
          </div>
        </div>

        <div
          class="flex h-min cursor-pointer justify-center rounded-full p-1 align-middle transition-colors hover:bg-gray-200"
        >
          <Icon name="material-symbols:arrow-forward-ios" size="30px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { courses } from '~/api/repositories';

const route = useRoute('courses-id-lessons');

const { data: course, execute } = await courses.find.asyncData({
  immediate: false,
  key: 'course:find',
  routeParams: {
    id: route.params.id
  }
});

onMounted(() => {
  execute();
});
</script>
