<template>
  <div>
    <div class="text-3xl">
      Курси
    </div>

    <div class="grid grid-cols-2 gap-4 mt-4">
      <NuxtLink
        v-slot="{ navigate }"
        to="/courses/advanced-uiux-design-in-figma"
        custom
      >
        <div
          @click="navigate"
          class="flex flex-row py-2 pl-6 pr-2 border rounded select-none items-start cursor-pointer"
        >
          <div class="flex flex-col justify-between">
            <div class="font-semibold">Advanced UI/UX Design in Figma</div>
            <div class="text-gray-500">Learn new powerful techniques to create amazing user experience.</div>
          </div>

          <div class="bg-[#4caf50] text-white rounded-full p-2 ml-2">Завершений</div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
