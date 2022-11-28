<template>
  <div>
    <div class="flex flex-col">
      <img
        class="avatar mb-8"
        src="/avatar.jfif"
        alt="Avatar"
      />

      <div class="text-lg text-gray-800">@anna.romaniuk</div>
      <div class="text-2xl font-bold">Анна Романюк</div>

      <hr class="my-3"/>

      <div class="text-lg font-bold">
        Лінки
      </div>
      <div class="flex flex-row items-center justify-center space-x-3">
        <MdIcon class="cursor-pointer" :icon="figma" :height="35"/>
        <MdIcon class="cursor-pointer" :icon="github" :width="35"/>
        <MdIcon class="cursor-pointer" :icon="behance" :height="35"/>
      </div>
    </div>

    <div>

    </div>
  </div>
</template>

<script setup lang="ts">
import figma from '@iconify-icons/logos/figma';
import github from '@iconify-icons/logos/github-icon';
import behance from '@iconify-icons/mdi/behance';


</script>

<style scoped>
.avatar {
  @apply object-cover
  rounded-bl rounded-tr rounded-tl-3xl rounded-br-3xl;
}
</style>
