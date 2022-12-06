<template>
  <div class="min-h-screen flex flex-col bg-neutral-50">
    <Header/>

    <main class="container mx-auto mt-8 mb-4 flex flex-grow">
      <slot/>
    </main>
  </div>
</template>
