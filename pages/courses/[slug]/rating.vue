<template>
  <div class="flex flex-row h-full space-x-5">
    <div class="basis-2/12 h-full bg-violet-100">
      <CourseSidebar :course-slug="$route.params.slug"/>
    </div>

    <div class="basis-10/12">

    </div>
  </div>
</template>
