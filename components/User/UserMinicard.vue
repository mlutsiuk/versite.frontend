<template>
  <div>
    <div class="flex items-center select-none">
      <img
        class="avatar"
        src="/avatar.jfif"
        alt="Avatar"
      />

      <div class="flex flex-col ml-1 self-end">
        <div class="text-black/50 text-lg italic">@anna.romaniuk</div>
        <div class="text-3xl">Анна Романюк</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.avatar {
  @apply h-[100px]
  rounded-bl-xl rounded-tr-xl rounded-tl-sm rounded-br-sm
  cursor-pointer;
}
</style>
