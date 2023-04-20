<template>
  <div class="px-2">
    <NuxtLink
      v-for="invitation in invitations"
      :to="{
        name: 'invitations-id',
        params: {
          id: invitation.id
        }
      }"
      class="block cursor-pointer rounded-sm px-2 py-2 transition-colors hover:bg-neutral-100"
    >
      <div class="text-lg font-bold leading-tight">
        {{ invitation.student?.data?.course?.data?.title }}
      </div>
      <div class="mb-2 font-bold leading-tight text-neutral-400">
        {{ invitation.student?.data?.course?.data?.author?.data?.name }}
      </div>

      <p class="leading-snug">
        {{ invitation.student?.data?.course?.data?.description }}
      </p>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { useInvitationStore } from '~/store/invitation';

const invitationStore = useInvitationStore();
const invitations = computed(() => invitationStore.invitations);
</script>
