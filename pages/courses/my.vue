<template>
  <div class="flex w-full grow flex-row space-x-5">
    <div class="basis-3/12">
      <CourseMySidebarNavigation class="w-full" />
    </div>

    <div class="flex basis-9/12 overflow-y-auto rounded bg-white">
      <NuxtPage :page-key="$route.fullPath"></NuxtPage>
    </div>
  </div>
</template>
