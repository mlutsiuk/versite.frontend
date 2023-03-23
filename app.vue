<template>
  <NuxtLayout>
    <NuxtLoadingIndicator/>

    <NuxtPage/>

    <Snackbar/>
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

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
