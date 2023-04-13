<template>
  <div class="sticky top-0 z-30 w-full bg-white py-3 shadow-sm">
    <div class="container mx-auto relative flex justify-between items-center">
      <NuxtLink
        class="text-2xl select-none cursor-pointer"
        to="/"
      >
        Versite
      </NuxtLink>

      <div class="flex items-center">
        <HeaderChatsButton class="mr-3"/>
        <HeaderNotifications class="mr-6"/>

        <HeaderDropdown/>
      </div>
    </div>
  </div>
</template>
