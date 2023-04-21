<template>
  <div class="flex space-x-5 overflow-y-hidden">
    <!-- <div class="sticky top-0 w-5/12 h-screen bg-violet-100">
      <div class="text-2xl font-semibold select-none cursor-pointer mt-4 ml-16">
        Versite
      </div>
    </div> -->

    <!--    TODO-->
    <div class="h-screen w-5/12">
      <CourseCover class="w-full opacity-90" />
    </div>

    <div
      v-if="course"
      class="h-screen w-7/12 overflow-auto pb-12 pl-8 pr-16 pt-28"
    >
      <div class="mb-32 text-center text-2xl">
        <span class="font-bold">{{ course?.author?.data?.name }}</span> запрошує
        вас на курс
      </div>

      <h1 class="text-6xl">{{ course?.title }}</h1>

      <div class="mt-8 text-xl">
        {{ course?.description }}
      </div>

      <div class="mx-auto mt-16 w-3/5">
        <MdButton
          :disabled="accepting"
          :loading="accepting"
          block
          class="text-[#3A84AD]"
          size="x-large"
          variant="filled"
          @click="accept"
        >
          Прийняти
        </MdButton>
      </div>

      <div class="mt-2 flex flex-row justify-center">
        <NuxtLink
          :to="{
            name: 'index'
          }"
          class="cursor-pointer text-neutral-400 underline transition-all hover:text-neutral-700"
        >
          Пізніше
        </NuxtLink>
        <div class=""></div>
      </div>

      <UserMinicard :user="(course.author!.data as User)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { User } from '~/api/models';
import { invitations } from '~/api/repositories';

definePageMeta({
  layout: 'clear'
});

const route = useRoute('invitations-id');

const { data } = await invitations.find.fetch({
  routeParams: {
    id: route.params.id
  },
  query: {
    include: 'student.course.author'
  }
});
const course = computed(() => data.value?.data.student?.data?.course?.data);

const accepting = ref(false);

async function accept() {
  accepting.value = true;

  await invitations.accept.asyncData({
    routeParams: {
      id: route.params.id
    }
  });

  accepting.value = false;

  navigateTo({
    name: 'courses-id-lessons',
    params: {
      id: course.value?.id
    }
  });
}
</script>
