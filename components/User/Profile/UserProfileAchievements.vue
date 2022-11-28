<template>
  <div>
    <div class="text-3xl">
      Досягнення
    </div>

    <div class="grid grid-cols-3 gap-4 mt-4">
      <div
        v-for="id in 6"
        class="flex flex bg-gray-50 p-2 border-2 border-amber-200 rounded"
      >
        <div class="bg-violet-100 h-16 w-16 rounded">{{ id }}</div>

        <div class="ml-2">
          <div class="font-semibold">Бідося</div>
          <div class="text-gray-500">Сесію ти здав, але якою ціною...</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
