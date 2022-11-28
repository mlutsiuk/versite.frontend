<template>
  <div class="flex flex-row space-x-5">
    <div class="basis-5/12 h-screen bg-violet-100">
      <div class="text-2xl font-semibold select-none cursor-pointer mt-4 ml-16">
        Versite
      </div>
    </div>

    <div class="basis-7/12 flex flex-col justify-center pr-16">
      <div class="text-lg">#дизайн #uiux #figma</div>
      <h1 class="text-7xl">
        Як стартувати кар’єру ui/ux дизайнером
      </h1>

      <div class="text-xl mt-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      </div>

      <div class="h-36 bg-violet-100 w-[20vw] mx-auto mt-12">
        sososo
      </div>

      <button class="block w-2/3 mx-auto px-4 my-12 h-[60px] font-normal rounded-md bg-indigo-500">
        <span class="text-white">Зареєструватися</span>
      </button>

      <UserMinicard/>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'clear',
});
</script>
