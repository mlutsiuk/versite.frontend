<template>
  <div>
    <div
      class="min-w-[16rem] px-4 py-5 bg-white rounded-md shadow border flex flex-row"
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
        class="cursor-pointer rounded-full hover:bg-gray-100 transition-colors select-none self-start"
        @click="dismiss"
      >
        <Icon name="mdi:close" size="24"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Message } from '~/types/snackbar';

const props = defineProps<{
  message: Message
}>();
const emit = defineEmits<{
  (e: 'dismiss'): void
}>();

function dismiss() {
  emit('dismiss');
}

onMounted(() => {
  setTimeout(dismiss, props.message.duration);
});
</script>
