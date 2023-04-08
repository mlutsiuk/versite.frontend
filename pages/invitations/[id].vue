<template>
  <div class="flex space-x-5 overflow-y-hidden">
    <!-- <div class="sticky top-0 w-5/12 h-screen bg-violet-100">
      <div class="text-2xl font-semibold select-none cursor-pointer mt-4 ml-16">
        Versite
      </div>
    </div> -->

    <!--    TODO-->
    <div class="h-screen w-5/12">
      <CourseCover class="w-full opacity-90" />
    </div>

    <div class="h-screen w-7/12 overflow-auto py-12 pr-16">
      <div class="text-lg">#дизайн #uiux #figma</div>
      <h1 class="text-7xl">Як стартувати кар’єру ui/ux дизайнером</h1>

      <div class="mt-8 text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut
      </div>

      <div class="mx-auto mt-12 flex h-36 w-[50%] flex-row divide-x">
        <div class="flex basis-1/3 items-center justify-center">
          <div class="text-center">
            3.5<br />
            місяців
          </div>
        </div>
        <div class="flex basis-1/3 items-center justify-center">
          <div class="text-center">
            88<br />
            уроків
          </div>
        </div>
        <div class="flex basis-1/3 items-center justify-center">
          <div class="text-center">
            88<br />
            уроків
          </div>
        </div>
      </div>

      <button
        class="mx-auto my-12 block h-[60px] w-2/3 rounded-md bg-indigo-500 px-4 font-normal"
      >
        <span class="text-white">Зареєструватися</span>
      </button>

      <UserMinicard />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'clear'
});
</script>
