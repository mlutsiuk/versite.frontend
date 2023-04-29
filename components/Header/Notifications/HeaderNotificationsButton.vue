<template>
  <MdBadge :color="badgeColor" :content="badgeNumber" class="cursor-pointer">
    <div
      class="cursor-pointer rounded-full p-1 transition-all hover:bg-gray-200"
    >
      <Icon class="text-gray-600" name="mdi:bell-outline" size="28" />
    </div>
  </MdBadge>
</template>

<script lang="ts" setup>
import { useInvitationStore } from '~/store/invitation';

const invitationStore = useInvitationStore();

const badgeNumber = computed(() => {
  const notificationsCount = 2; // Static number of notifications

  return invitationStore.count + notificationsCount;
});

const badgeColor = computed(() => {
  if (invitationStore.count > 0) {
    return 'bg-red-500';
  } else {
    return 'bg-[#4CAF50]';
  }
});
</script>
