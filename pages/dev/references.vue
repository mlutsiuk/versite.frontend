<template>
  <div class="container m-3">
    <h1 class="text-2xl">Course card</h1>
    <div class="flex flex-wrap items-center justify-center bg-neutral-50 p-4">
      <MdBadge color="bg-blue-600" content="6">
        <CourseCard />
      </MdBadge>
    </div>

    <h1 class="text-2xl">Header dropdown</h1>
    <div class="flex flex-wrap items-center justify-center bg-neutral-50 p-4">
      <HeaderDropdown />
    </div>

    <h1 class="text-2xl">Progress Circular</h1>
    <div class="flex h-24 flex-wrap items-center justify-center bg-white p-4">
      <MdProgressCircular />
    </div>

    <h1 class="text-2xl">Button disabled/loading states</h1>
    <div class="flex h-24 flex-wrap items-center justify-center bg-white p-4">
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
        class="ml-2 text-[#6F5274]"
        size="x-large"
        @click="buttonDisabled = !buttonDisabled"
      >
        Disable/Enable target
      </MdButton>

      <MdButton
        class="ml-2 text-[#6F5274]"
        size="x-large"
        @click="buttonLoading = !buttonLoading"
      >
        Switch loading
      </MdButton>
    </div>

    <h1 class="text-2xl">Button sizes</h1>
    <div
      class="flex h-24 flex-wrap items-center justify-center space-x-2 bg-white p-4"
    >
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
    <div class="flex h-24 flex-wrap items-center justify-center bg-white p-4">
      <LessonEditorPublicationDatePopover />
    </div>

    <CourseCover class="w-[500px]" />

    <h1 class="text-2xl">Badge</h1>
    <div class="flex flex-wrap items-center justify-center bg-white p-4">
      <span class="mr-2 inline-block h-2 w-2 rounded-full bg-purple-600"></span>
      <span
        class="mr-2 inline-flex items-center justify-center rounded-full bg-purple-600 px-2 py-1 text-xs font-bold leading-none text-purple-100"
      >
        9
      </span>
      <span
        class="inline-flex items-center justify-center rounded-full bg-purple-600 px-2 py-1 text-xs font-bold leading-none text-purple-100"
      >
        99+
      </span>
    </div>
    <hr />

    <h1 class="text-2xl">Icon</h1>
    <div class="flex flex-wrap items-center justify-center bg-white p-4">
      Some text
      <span>
        <Icon class="cursor-pointer" name="mdi:account" />
      </span>
    </div>

    <h1 class="text-2xl">Badge component</h1>
    <div class="flex flex-wrap items-center justify-center bg-white p-4">
      <MdBadge content="9">
        <Icon class="cursor-pointer" name="mdi:bell-outline" size="24" />
      </MdBadge>
    </div>
    <hr />
  </div>
</template>

<script setup lang="ts">
const buttonDisabled = ref(false);
const buttonLoading = ref(false);

function testClick(text: string) {
  alert(text);
}
</script>
