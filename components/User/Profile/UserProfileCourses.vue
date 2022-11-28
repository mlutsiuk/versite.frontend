<template>
  <div>
    <div class="text-3xl">
      Курси
    </div>

    <div class="grid grid-cols-2 gap-4 mt-4">
      <NuxtLink
        v-for="id in 4"
        v-slot="{ navigate }"
        to="/courses/advanced-uiux-design-in-figma"
        custom
      >
        <div
          @click="navigate"
          class="flex flex pr-2 border rounded select-none cursor-pointer"
        >
          <div class="bg-violet-100 h-20 w-16"></div>

          <div class="ml-2">
            <div class="font-semibold">Advanced UI/UX Design in Figma</div>
            <div class="text-gray-500">Learn new powerful techniques to create amazing user experience</div>
          </div>

        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
