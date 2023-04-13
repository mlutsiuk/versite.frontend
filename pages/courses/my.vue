<template>
  <div class="flex w-full flex-row space-x-5">
    <div class="basis-1/5">
      <CourseMySidebarNavigation class="w-full" />
    </div>

    <div class="basis-4/5 rounded bg-white">
      <NuxtPage :page-key="$route.fullPath"></NuxtPage>
    </div>
  </div>
</template>
