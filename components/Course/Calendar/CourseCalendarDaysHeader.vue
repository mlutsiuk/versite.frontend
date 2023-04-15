<template>
  <div class="mt-4 grid grid-cols-7 gap-px bg-gray-200">
    <div
      v-for="day in days"
      class="text bg-white py-2 text-center font-semibold"
      v-text="day"
    />
  </div>
</template>

<script lang="ts" setup>
const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
</script>
