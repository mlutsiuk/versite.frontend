<template>
  <div>
    <div class="flex select-none items-center">
      <UserAvatar
        :user="props.user"
        class="rounded-bl-xl rounded-br-sm rounded-tl-sm rounded-tr-xl"
        size="90px"
      />

      <div class="ml-4 flex flex-col self-end">
        <div class="text-lg italic text-black/50">
          @{{ props.user.nickname }}
        </div>
        <div class="text-3xl">{{ props.user.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { User } from '~/api/models';

const props = defineProps<{
  user: User;
}>();
</script>

<style scoped>
.avatar {
  @apply h-[90px]
  cursor-pointer;
}
</style>
