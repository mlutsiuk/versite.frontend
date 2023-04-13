<template>
  <div>
    <slot :open="open" name="activator" />

    <Teleport to="body">
      <Transition name="fade-transition">
        <div v-if="active" class="Dialog__Backdrop" @click.self="close">
          <div class="Dialog__Body">
            <slot :close="close" />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script lang="ts" setup>
const active = ref(false);

function open() {
  active.value = true;
}

function close() {
  active.value = false;
}
</script>

<style scoped>
.Dialog__Backdrop {
  @apply fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50;
}

.Dialog__Body {
  @apply min-w-[500px] rounded bg-white p-4;
}
</style>
