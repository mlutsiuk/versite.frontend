<template>
  <NuxtLink :to="{
    name: 'courses-my-calendar'
  }">
    <div class="p-1 hover:bg-gray-200 rounded-full transition-colors">
      <Icon
        class="text-gray-600"
        name="mdi:calendar-month-outline"
        size="28"
      />
    </div>
  </NuxtLink>
</template>
