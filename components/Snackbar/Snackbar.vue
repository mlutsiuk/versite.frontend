<template>
  <div class="fixed right-0 bottom-0 mr-15 mb-7 w-[450px]">
    <transition-group name="snackbar" tag="div">
      <SnackbarMessage
        v-for="(message, index) in messages"
        :key="message.key"
        :message="message"
        class="mb-5"
        @dismiss="removeMessage(index)"
      />
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { Message } from '~/types/snackbar';

interface KeyedMessage extends Message {
  key: number;
}

const { next: nextUid } = useUid();

const messages = reactive<KeyedMessage[]>([]);

const { on, off } = useMitt();

function addMessage(message: Message) {
  messages.unshift({
    key: nextUid(),

    ...message
  });
}

function removeMessage(index: number) {
  messages.splice(index, 1);
}

function clearMessages() {
  messages.splice(0, messages.length);
}

onMounted(() => {
  on('snackbar:show', addMessage);
  on('snackbar:clear', clearMessages);
});
onUnmounted(() => {
  off('snackbar:show', addMessage);
  off('snackbar:clear', clearMessages);
});
</script>
