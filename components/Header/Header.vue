<template>
  <div class="w-full bg-white py-3 shadow-sm">
    <div class="container relative mx-auto flex items-center justify-between">
      <NuxtLink class="cursor-pointer select-none text-2xl" to="/">
        Versite
      </NuxtLink>

      <div class="flex items-center">
        <HeaderCalendarButton class="mr-2" />
        <HeaderChatsButton class="mr-2" />
        <HeaderNotifications class="mr-6" />

        <HeaderDropdown />
      </div>
    </div>
  </div>
</template>
