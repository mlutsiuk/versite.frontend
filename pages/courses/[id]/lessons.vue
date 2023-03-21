<template>
  <div class="flex flex-row h-full space-x-5">
    <div class="basis-2/12 h-full bg-gray-100">
      <CourseSidebar :course-slug="$route.params.id"/>
    </div>

    <div class="basis-10/12 bg-gray-100">
      <div class="flex flex-col mt-4 m-2 space-y-2">
        <div
          v-for="id in 4"
          class="flex flex bg-white pr-2 border rounded"
        >
          <div class="bg-violet-100 h-20 w-16"></div>

          <div class="ml-2">
            <div class="font-semibold">1.{{ id }} Auto layout</div>
            <div class="text-gray-500">Learn new powerful techniques to create amazing user experience</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
