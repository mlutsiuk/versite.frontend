<template>
  <div class="px-3">
    <template
      v-for="i in 2"
      :key="i"
    >
      <HeaderNotificationsItem/>

      <hr v-if="i !== 2" class="my-2">
    </template>
  </div>
</template>
