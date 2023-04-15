<template>
  <div class="flex h-screen min-h-screen flex-col bg-neutral-100">
    <Header />

    <main class="container mx-auto flex flex-1 overflow-y-hidden pb-4 pt-8">
      <slot />
    </main>
  </div>
</template>
