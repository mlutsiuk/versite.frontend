<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity .2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
