<template>
  <div class="min-h-[300vh] container mx-auto flex flex-col">
    <h1 class="text-2xl font-bold text-indigo-500">Hello World</h1>

    <NuxtLink to="/login">Login</NuxtLink>

    <NuxtLink to="/courses/advanced-uiux-design-in-figma">Course landing</NuxtLink>
    <NuxtLink to="/anna.romaniuk">Profile</NuxtLink>
    <NuxtLink to="/lessons/515151/edit">Edit lesson</NuxtLink>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'auth',
});

</script>
