<template>
  <div class="space-y-2.5">
    <div v-for="i in 2" :key="i" class="rounded-sm bg-neutral-100 px-2 py-2 space-y-2">
      <div class="space-y-1">
        <SkeletonBone class="h-4 w-11/12 rounded-full" />
        <SkeletonBone class="h-4 w-7/12 rounded-full" />
      </div>

      <SkeletonBone class="mb-5 h-2.5 w-24 rounded-full" />

      <SkeletonBone class="h-2 w-36 rounded-full" />
    </div>
  </div>
</template>
