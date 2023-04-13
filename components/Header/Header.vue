<template>
  <div class="sticky top-0 z-30 w-full bg-white py-3 shadow-sm">
    <div class="container relative mx-auto flex items-center justify-between">
      <NuxtLink class="cursor-pointer select-none text-2xl" to="/">
        Versite
      </NuxtLink>

      <div class="flex items-center">
        <HeaderChatsButton class="mr-3" />
        <HeaderNotifications class="mr-6" />

        <HeaderDropdown />
      </div>
    </div>
  </div>
</template>
