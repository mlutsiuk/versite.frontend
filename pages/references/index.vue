<template>
  <div class="container m-3">

    <h1 class="text-2xl">Lesson Editor Publication Date Popover</h1>
    <div class="h-24 bg-white p-4 flex justify-center items-center flex-wrap">
      <LessonEditorPublicationDatePopover/>
    </div>

   <CourseCover class="w-[500px]"/>

    <h1 class="text-2xl">Badge</h1>
    <div class="bg-white p-4 flex justify-center items-center flex-wrap">
      <span
        class="inline-block w-2 h-2 mr-2 bg-purple-600 rounded-full"
      ></span>
      <span
        class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-purple-100 bg-purple-600 rounded-full"
      >
        9
      </span>
      <span
        class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-purple-100 bg-purple-600 rounded-full"
      >
        99+
      </span>
    </div>
    <hr>

    <h1 class="text-2xl">Icon</h1>
    <div class="bg-white p-4 flex justify-center items-center flex-wrap">
      Some text
      <span>
        <MdIcon
          class="cursor-pointer"
          :icon="account"
          inline
        />
      </span>
    </div>

    <h1 class="text-2xl">Badge component</h1>
    <div class="bg-white p-4 flex justify-center items-center flex-wrap">
      <MdBadge content="9">
        <MdIcon
          class="cursor-pointer"
          :icon="bellOutline"
          :width="24"
          inline
        />
      </MdBadge>
    </div>
    <hr>
  </div>
</template>

<script setup lang="ts">
import account from '@iconify-icons/mdi/account';
import bellOutline from '@iconify-icons/mdi/bell-outline';

</script>
