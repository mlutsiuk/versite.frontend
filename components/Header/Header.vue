<template>
  <div class="sticky top-0 z-50 w-full bg-white py-3 px-4 shadow-sm">
    <div class="relative flex justify-between items-center">
      <NuxtLink
        class="text-2xl select-none cursor-pointer"
        to="/"
      >
        Versite
      </NuxtLink>

      <div class="flex items-center">
        <HeaderChatsButton class="mr-3"/>
        <HeaderNotificationsButton class="mr-6"/>

        <HeaderAvatar/>
        <HeaderLogout class="ml-4"/>
      </div>
    </div>
  </div>
</template>
