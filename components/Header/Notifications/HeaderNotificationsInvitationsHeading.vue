<template>
  <div class="flex flex-row justify-between px-3 text-gray-400">
    <div class="text-sm font-semibold">
      Запрошень: {{ invitationStore.count }}
    </div>
    <!--
        <div class="cursor-pointer text-sm transition-all hover:underline">
          Прихованих: 4
        </div> -->
  </div>
</template>

<script lang="ts" setup>
import { useInvitationStore } from '~/store/invitation';

const invitationStore = useInvitationStore();
</script>
