<template>
  <div>
    <div
      class="flex min-w-[16rem] flex-row rounded-md border bg-white px-4 py-5 shadow"
    >
      <div class="grow">
        <div v-if="props.message.title" class="text-lg font-medium">
          {{ props.message.title }}
        </div>

        <div v-if="props.message.text">
          {{ props.message.text }}
        </div>
      </div>

      <div
        class="cursor-pointer select-none self-start rounded-full transition-colors hover:bg-gray-100"
        @click="dismiss"
      >
        <Icon name="mdi:close" size="24" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Message } from '~/types/snackbar';

const props = defineProps<{
  message: Message;
}>();
const emit = defineEmits<{
  (e: 'dismiss'): void;
}>();

function dismiss() {
  emit('dismiss');
}

onMounted(() => {
  setTimeout(dismiss, props.message.duration);
});
</script>
