<template>
  <div class="flex w-full grow flex-row space-x-5">
    <div class="basis-1/5">
      <CourseSidebarNavigation
        :course-id="route.params.id"
        :course-title="course?.data.title"
        class="w-full"
      />
    </div>

    <div class="grow basis-3/5 overflow-auto rounded bg-white">
      <NuxtPage :can-edit="isAuthor" :page-key="route.fullPath"></NuxtPage>
    </div>

    <div class="h-min basis-1/5 space-y-2.5 rounded bg-white p-2.5">
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
import { useAuthStore } from '~/store/auth';

const route = useRoute('courses-id-lessons');

const { data: course, execute } = await courses.find.asyncData({
  immediate: false,
  routeParams: {
    id: route.params.id
  }
});

const auth = useAuthStore();

const isAuthor = computed(() => {
  return course.value?.data.author_id === auth.user?.id;
});

onMounted(() => {
  execute();
});
</script>
