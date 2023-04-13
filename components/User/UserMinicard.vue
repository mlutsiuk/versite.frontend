<template>
  <div>
    <div class="flex select-none items-center">
      <img alt="Avatar" class="avatar" src="/avatar.jfif" />

      <div class="ml-4 flex flex-col self-end">
        <div class="text-lg italic text-black/50">@anna.romaniuk</div>
        <div class="text-3xl">Анна Романюк</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.avatar {
  @apply h-[90px]
  cursor-pointer rounded-bl-xl rounded-br-sm rounded-tl-sm
  rounded-tr-xl;
}
</style>
