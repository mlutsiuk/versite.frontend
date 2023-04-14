<template>
  <div class="flex h-screen flex-col bg-neutral-100">
    <Header />

    <main class="container mx-auto flex grow overflow-hidden pb-4 pt-8">
      <slot />
    </main>
  </div>
</template>
