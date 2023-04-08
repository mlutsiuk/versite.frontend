<template>
  <div class="rounded bg-white">
    <div class="px-3.5 py-2.5 text-2xl font-medium">
      {{ props.courseTitle }}
    </div>

    <hr />

    <div class="flex flex-col space-y-2 p-2">
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
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  courseId: string;
  courseTitle: string;
}>();
</script>

<style scoped>
.link {
  @apply cursor-pointer space-x-4 whitespace-nowrap rounded-sm px-1.5 py-3 text-xl transition-colors hover:bg-gray-200;
}

.active {
  @apply bg-gray-100;
}
</style>
