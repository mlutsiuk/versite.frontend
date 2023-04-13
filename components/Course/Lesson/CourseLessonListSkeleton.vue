<template>
  <div class="space-y-2.5">
    <div v-for="i in 3" :key="i" class="rounded-sm bg-neutral-100 px-2 py-3">
      <div class="mb-2 flex flex-row items-center justify-between">
        <SkeletonBone class="h-4 w-52 rounded-full" />

        <Icon class="text-neutral-200" name="mdi:dots-vertical" size="24px" />
      </div>

      <SkeletonBone class="mb-5 h-2.5 w-24 rounded-full" />

      <div class="flex flex-col space-y-2">
        <SkeletonBone class="h-2 w-16 rounded-full" />

        <div class="flex flex-col space-y-1 pl-3">
          <SkeletonBone class="h-2 w-36 rounded-full" />
        </div>
      </div>
    </div>
  </div>
</template>
