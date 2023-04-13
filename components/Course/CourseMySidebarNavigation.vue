<template>
  <div class="flex flex-col space-y-2 rounded bg-white p-2">
    <NuxtLink
      :to="{
        name: 'courses-my-participated'
      }"
      active-class="active"
      class="link"
    >
      <Icon name="mdi:school-outline" size="24" />
      <span>Мої курси</span>
    </NuxtLink>

    <NuxtLink
      :to="{
        name: 'courses-my-authored'
      }"
      active-class="active"
      class="link"
    >
      <Icon name="mdi:human-male-board" size="24" />
      <span>Авторські курси</span>
    </NuxtLink>

    <hr />

    <NuxtLink
      :to="{
        name: 'courses-my-create'
      }"
      active-class="active"
      class="link"
    >
      <Icon name="mdi:plus" size="24" />
      <span>Створити</span>
    </NuxtLink>
  </div>
</template>

<style scoped>
.link {
  @apply cursor-pointer space-x-4 whitespace-nowrap rounded px-1.5 py-3 text-xl transition-colors hover:bg-gray-200;
}

.active {
  @apply bg-gray-100;
}
</style>
