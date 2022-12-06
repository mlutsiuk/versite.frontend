<template>
  <div>
    <NuxtLink
      active-class="active"
      :to="lessonsUrl"
    >
      lessons
    </NuxtLink>
    <NuxtLink
      active-class="active"
      :to="ratingUrl"
    >
      rating
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  courseSlug: string
}>();

const lessonsUrl = computed(() => `/courses/${props.courseSlug}/lessons`);
const ratingUrl = computed(() => `/courses/${props.courseSlug}/rating`);
</script>

<style scoped>
.active {
  @apply bg-red-500;
}
</style>
