<template>
  <div>
    <div class="text-3xl">Курси</div>

    <div class="mt-4 grid grid-cols-2 gap-4">
      <NuxtLink
        v-slot="{ navigate }"
        to="/courses/advanced-uiux-design-in-figma"
        custom
      >
        <div
          @click="navigate"
          class="flex cursor-pointer select-none flex-row items-start rounded border py-2 pl-6 pr-2"
        >
          <div class="flex flex-col justify-between">
            <div class="font-semibold">Advanced UI/UX Design in Figma</div>
            <div class="text-gray-500">
              Learn new powerful techniques to create amazing user experience.
            </div>
          </div>

          <div class="ml-2 rounded-full bg-[#4caf50] p-2 text-white">
            Завершений
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
