<template>
  <div>
    <div class="text-3xl">Досягнення</div>

    <div class="mt-4 grid grid-cols-3 gap-4">
      <div
        v-for="id in 1"
        class="flex cursor-default rounded border-2 border-transparent bg-gray-50 p-2 transition-all hover:border-amber-200"
      >
        <!-- <div class="bg-violet-100 h-16 w-16 rounded">{{ id }}</div> -->
        <img alt="Avatar" class="h-16 w-16 rounded" src="/img.png" />

        <div class="ml-2">
          <div class="font-semibold">Бідося</div>
          <div class="text-gray-500">Сесію ти здав, але якою ціною...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
