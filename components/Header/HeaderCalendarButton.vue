<template>
  <NuxtLink
    :to="{
      name: 'courses-my-calendar'
    }"
  >
    <div class="rounded-full p-1 transition-colors hover:bg-gray-200">
      <Icon class="text-gray-600" name="mdi:calendar-month-outline" size="28" />
    </div>
  </NuxtLink>
</template>
