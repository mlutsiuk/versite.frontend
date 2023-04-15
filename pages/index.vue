<template>
  <div class="container mx-auto flex min-h-screen flex-col p-8">
    <h1 class="text-2xl font-bold text-indigo-500">Hello World</h1>

    <NuxtLink to="/login">Login</NuxtLink>

    <NuxtLink to="/courses">Courses</NuxtLink>
    <NuxtLink to="/courses/advanced-uiux-design-in-figma">
      Course landing
    </NuxtLink>
    <NuxtLink to="/anna.romaniuk">Profile</NuxtLink>
    <NuxtLink to="/lessons/515151/edit">Edit lesson</NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  redirect: {
    name: 'courses-my-participated'
  }
});
</script>
