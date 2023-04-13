<template>
  <div>
    <div class="flex flex-col">
      <img alt="Avatar" class="avatar mb-8" src="/avatar.jfif" />

      <div class="text-lg text-gray-800">@anna.romaniuk</div>
      <div class="text-2xl font-bold">Анна Романюк</div>

      <hr class="my-3" />

      <div class="text-lg font-bold">Лінки</div>
      <div class="flex flex-row items-center space-x-3 pt-2">
        <Icon class="cursor-pointer" name="mdi:behance" size="38" />
        <Icon class="cursor-pointer" name="logos:figma" size="26" />
        <Icon class="cursor-pointer" name="logos:github-icon" size="26" />
      </div>
    </div>

    <div></div>
  </div>
</template>

<style scoped>
.avatar {
  @apply rounded-bl
  rounded-br-3xl rounded-tl-3xl rounded-tr object-cover;
}
</style>
