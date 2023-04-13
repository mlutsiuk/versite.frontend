<template>
  <div class="flex flex-col space-y-2.5">
    <div
      v-for="i in 4"
      :key="i"
      class="flex flex-row space-x-2.5 rounded bg-neutral-100 p-2.5"
    >
      <SkeletonBone class="h-[50px] w-[50px] rounded-full" />

      <div class="grow">
        <div class="mb-2 flex flex-row items-center justify-between">
          <SkeletonBone class="h-4 w-52 rounded-full" />

          <Icon class="text-neutral-200" name="mdi:dots-vertical" size="24px" />
        </div>
        <SkeletonBone class="h-2.5 w-36 rounded-full" />
      </div>
    </div>
  </div>
</template>
