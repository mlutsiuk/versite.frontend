<template>
  <div>
    <NuxtLoadingIndicator
      color="repeating-linear-gradient(to right,#46a1d3 0%,#3a84ad 50%,#285d7a 100%)"
    />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <Snackbar />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.1s;
}
.page-enter-from,
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
