<template>
  <div
    class="group space-y-6 rounded border border-gray-200 bg-white px-5 pb-5 pt-6 shadow-sm transition-colors"
  >
    <div>
      <SkeletonBone class="mb-3 h-6 w-60 rounded-full" />
      <SkeletonBone class="h-4 w-36 rounded-full" />
    </div>

    <div class="grow rounded bg-neutral-100 px-3 py-5">
      <div class="mb-1 flex flex-row items-center justify-between">
        <SkeletonBone class="h-4 w-52 rounded-full" />
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
