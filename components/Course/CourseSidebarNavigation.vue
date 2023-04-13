<template>
  <div class="flex flex-col space-y-2 rounded bg-white p-2">
    <div v-if="props.courseTitle">
      <div class="text-sm text-gray-400">Курс</div>
      <div class="text-2xl font-medium" v-text="props.courseTitle" />
    </div>
    <div v-else>
      <SkeletonBone class="mt-1 h-3 w-16 rounded-full" />
      <SkeletonBone class="mt-2 h-6 w-10/12 rounded-full" />
    </div>

    <hr />

    <NuxtLink
      :to="{
        name: 'courses-id-lessons',
        params: { id: props.courseId }
      }"
      active-class="active"
      class="link"
    >
      <Icon name="mdi:notebook-outline" size="24" />
      <span>Уроки</span>
    </NuxtLink>

    <NuxtLink
      :to="{
        name: 'courses-id-students',
        params: { id: props.courseId }
      }"
      active-class="active"
      class="link"
    >
      <Icon name="mdi:account-group-outline" size="24" />
      <span>Студенти</span>
    </NuxtLink>

    <NuxtLink
      :to="{
        name: 'courses-id-rating',
        params: { id: props.courseId }
      }"
      active-class="active"
      class="link"
    >
      <Icon name="mdi:file-chart-outline" size="24" />
      <span>Рейтинг</span>
    </NuxtLink>

    <hr />

    <NuxtLink
      :to="{
        name: 'courses-id-unckecked-assignments',
        params: { id: props.courseId }
      }"
      active-class="active"
      class="link"
    >
      <Icon name="mdi:text-box-check-outline" size="24" />
      <span>Завдання</span>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  courseId: string;
  courseTitle?: string;
}>();
</script>

<style scoped>
.link {
  @apply cursor-pointer space-x-4 whitespace-nowrap rounded px-1.5 py-3 text-xl transition-colors hover:bg-gray-200;
}

.active {
  @apply bg-gray-100;
}
</style>
