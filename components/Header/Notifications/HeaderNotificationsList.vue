<template>
  <div class="px-3">
    <template v-for="i in 1" :key="i">
      <HeaderNotificationsItem />

      <hr v-if="i !== 1" class="my-2" />
    </template>
  </div>
</template>
