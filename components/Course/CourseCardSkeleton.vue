<template>
  <div class="space-y-6 rounded border border-gray-200 bg-white px-5 pb-5 pt-6 shadow-sm transition-colors group">
    <div>
      <SkeletonBone class="w-60 h-6 rounded-full mb-3" />
      <SkeletonBone class="w-36 h-4 rounded-full" />
    </div>


    <div class="bg-neutral-100 px-3 py-5 grow rounded">
      <div class="flex flex-row justify-between items-center mb-1">
        <SkeletonBone class="w-52 h-4 rounded-full" />
      </div>

      <SkeletonBone class="w-24 h-2.5 rounded-full mb-5" />

      <div class="flex flex-col space-y-2">
        <SkeletonBone class="w-16 h-2 rounded-full" />

        <div class="flex flex-col space-y-1 pl-3">
          <SkeletonBone class="w-36 h-2 rounded-full" />
        </div>
      </div>
    </div>
  </div>
</template>
