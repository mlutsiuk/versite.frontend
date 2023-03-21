<template>
  <div class="flex space-x-5 overflow-y-hidden">
    <!-- <div class="sticky top-0 w-5/12 h-screen bg-violet-100">
      <div class="text-2xl font-semibold select-none cursor-pointer mt-4 ml-16">
        Versite
      </div>
    </div> -->

<!--    TODO-->
    <div class="w-5/12 h-screen">
      <CourseCover class="w-full opacity-90"/>
    </div>

    <div class="w-7/12 h-screen pr-16 py-12 overflow-auto">
      <div class="text-lg ">#дизайн #uiux #figma</div>
      <h1 class="text-7xl">
        Як стартувати кар’єру ui/ux дизайнером
      </h1>

      <div class="text-xl mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      </div>

      <div class="flex flex-row h-36 w-[50%] mx-auto mt-12 divide-x">
        <div class="basis-1/3 flex justify-center items-center">
          <div class="text-center">
            3.5<br>
            місяців
          </div>
        </div>
        <div class="basis-1/3 flex justify-center items-center">
          <div class="text-center">
            88<br>
            уроків
          </div>
        </div>
        <div class="basis-1/3 flex justify-center items-center">
          <div class="text-center">
            88<br>
            уроків
          </div>
        </div>
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
  layout: 'clear'
});
</script>
