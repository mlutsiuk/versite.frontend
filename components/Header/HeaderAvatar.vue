<template>
  <UserAvatar
    :size="props.size"
    :user="user"
    class="cursor-pointer rounded-md"
  />
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth';

const props = withDefaults(
  defineProps<{
    size?: string;
  }>(),
  {
    size: '40px'
  }
);

const authStore = useAuthStore();
const user = computed(() => authStore.user);
</script>
