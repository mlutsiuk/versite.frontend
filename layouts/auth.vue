<template>
  <div class="flex">
    <div class="basis-1/2 flex justify-center items-center">
      <div class="bg-gray-400 text-white w-[350px] text-center py-4 px-4 rounded-md">
        <slot />
      </div>
    </div>

    <div class="min-h-screen basis-1/2 bg-gray-200"></div>
  </div>
</template>

<script setup lang="ts">

</script>
