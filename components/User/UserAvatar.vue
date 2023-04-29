<template>
  <div
    v-if="!user"
    :style="{ width: props.size, height: props.size }"
    class="flex h-full w-full select-none items-center justify-center bg-gray-200"
  >
    <Icon class="text-gray-600" name="mdi:account" size="24px" />
  </div>

  <div
    v-else-if="props.user!.avatar"
    :style="{ width: props.size, height: props.size }"
  >
    <img :src="props.user!.avatar" alt="Avatar" class="rounded-[inherit]" />
  </div>

  <div
    v-else
    :style="{
      'background-color': avatarColor,
      width: props.size,
      height: props.size
    }"
    class="missing-avatar"
  >
    <div>
      {{ props.user!.name.charAt(0).toUpperCase() }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { User } from '~/api/models';

const props = withDefaults(
  defineProps<{
    user?: User | null;
    size?: string;
  }>(),
  {
    user: null,
    size: '40px'
  }
);

const avatarColor = computed(() => {
  if (!props.user) {
    return;
  }

  let hash = 0;
  for (let i = 0; i < props.user.nickname.length; i++) {
    hash = props.user.nickname.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h = hash % 360;
  const s = 40;
  const l = 65;
  return `hsl(${h}, ${s}%, ${l}%)`;
});
</script>

<style scoped>
.missing-avatar {
  @apply flex h-full w-full select-none items-center justify-center
  text-2xl font-medium text-white
  transition-colors;
}
</style>
