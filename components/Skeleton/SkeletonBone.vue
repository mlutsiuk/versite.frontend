<template>
  <div class="skeleton-bone"></div>
</template>

<style lang="scss" scoped>
.skeleton-bone {
  @apply relative overflow-hidden bg-neutral-200;

  animation: skeleton-bone 1.5s ease-in-out infinite;

  &::after {
    animation: loading 1.5s infinite;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;

    background: linear-gradient(
      90deg,
      rgba(#fff, 0),
      rgba(#fff, 0.3),
      rgba(#fff, 0)
    );
  }
}

@keyframes loading {
  100% {
    transform: translateX(100%);
  }
}
</style>
