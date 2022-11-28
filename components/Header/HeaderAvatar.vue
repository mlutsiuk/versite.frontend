<template>
  <div class="flex items-center select-none">
    <img
      class="avatar"
      src="/avatar.jfif"
      alt="Avatar"
    />

    <div class="flex flex-col ml-1">
      <div class="text-gray-800 text-xs">@anna.romaniuk</div>
      <div>Анна Романюк</div>
    </div>
  </div>
</template>

<style scoped>
.avatar {
  @apply h-[40px]
    rounded-bl-xl rounded-tr-xl rounded-tl-sm rounded-br-sm
    cursor-pointer;
}
</style>
