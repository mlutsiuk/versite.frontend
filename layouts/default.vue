<template>
  <div class="flex h-screen max-h-screen w-full flex-col bg-neutral-100">
    <Header />

    <main
      class="container mx-auto flex grow flex-col overflow-y-hidden pb-4 pt-8"
    >
      <slot />
    </main>
  </div>
</template>
