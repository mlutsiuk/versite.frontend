<template>
  <div class="container m-3">

    <h1 class="text-2xl">Progress Circular</h1>
    <div class="h-24 bg-white p-4 flex justify-center items-center flex-wrap">
      <MdProgressCircular/>
    </div>

    <h1 class="text-2xl">Button disabled/loading states</h1>
    <div class="h-24 bg-white p-4 flex justify-center items-center flex-wrap">
      <MdButton
        @click="testClick('disable/enable')"
        class="text-[#3A84AD]"
        size="x-large"
        prepend-icon="mdi:google"
        append-icon="mdi:google"
        :disabled="buttonDisabled"
        :loading="buttonLoading"
      >
        Target button
      </MdButton>

      <MdButton
        class="text-[#6F5274] ml-2"
        size="x-large"
        @click="buttonDisabled = !buttonDisabled"
      >
        Disable/Enable target
      </MdButton>

      <MdButton
        class="text-[#6F5274] ml-2"
        size="x-large"
        @click="buttonLoading = !buttonLoading"
      >
        Switch loading
      </MdButton>
    </div>

    <h1 class="text-2xl">Button sizes</h1>
    <div class="h-24 bg-white space-x-2 p-4 flex justify-center items-center flex-wrap">
      <MdButton
        class="text-[#6F5274]"
        size="small"
        prepend-icon="mdi:google"
        :disabled="buttonDisabled"
        :loading="buttonLoading"
      >
        small
      </MdButton>

      <MdButton
        class="text-[#6F5274]"
        size="default"
        prepend-icon="mdi:google"
        :disabled="buttonDisabled"
        :loading="buttonLoading"
      >
        default
      </MdButton>

      <MdButton
        class="text-[#6F5274]"
        size="large"
        prepend-icon="mdi:google"
        :disabled="buttonDisabled"
        :loading="buttonLoading"
      >
        large
      </MdButton>

      <MdButton
        class="text-[#6F5274]"
        size="x-large"
        prepend-icon="mdi:google"
        :disabled="buttonDisabled"
        :loading="buttonLoading"
      >
        x-large
      </MdButton>
    </div>

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
        <Icon
          class="cursor-pointer"
          name="mdi:account"
        />
      </span>
    </div>

    <h1 class="text-2xl">Badge component</h1>
    <div class="bg-white p-4 flex justify-center items-center flex-wrap">
      <MdBadge content="9">
        <Icon
          class="cursor-pointer"
          name="mdi:bell-outline"
          size="24"
        />
      </MdBadge>
    </div>
    <hr>
  </div>
</template>

<script setup lang="ts">
const buttonDisabled = ref(false);
const buttonLoading = ref(false);

function testClick(text: string) {
  alert(text);
}
</script>
