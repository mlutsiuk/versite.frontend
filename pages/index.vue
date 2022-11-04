<template>
  <div class="min-h-[300vh] container mx-auto">
    <h1 class="text-2xl font-bold text-indigo-500">Hello World</h1>

    <NuxtLink to="/login">Login</NuxtLink>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'auth',
});

</script>
