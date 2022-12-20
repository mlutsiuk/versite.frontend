<template>
  <div>
    <div class="text-3xl">
      Досягнення
    </div>

    <div class="grid grid-cols-3 gap-4 mt-4">
      <div
        v-for="id in 1"
        class="flex bg-gray-50 p-2 border-2 border-transparent hover:border-amber-200 rounded transition-all cursor-default"
      >
        <!-- <div class="bg-violet-100 h-16 w-16 rounded">{{ id }}</div> -->
        <img
          class="h-16 w-16 rounded"
          src="/img.png"
          alt="Avatar"
        />

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
