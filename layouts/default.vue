<template>
  <div class="flex min-h-screen flex-col bg-neutral-100">
    <Header />

    <main class="container mx-auto mb-4 mt-8 flex flex-grow">
      <slot />
    </main>
  </div>
</template>
