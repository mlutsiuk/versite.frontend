<template>
  <Popover v-slot="{ open }" class="relative">
    <PopoverButton as="div">
      <HeaderNotificationsButton/>
    </PopoverButton>

    <transition name="notifications-transition">
      <PopoverPanel
        class="absolute -right-16 z-10 mt-6 shadow-lg bg-white rounded-md w-[30rem]"
      >
        <div class="space-y-2 py-3">
          <HeaderNotificationsInvitationsHeading/>

          <hr>

          <HeaderNotificationsInvitationsList/>

          <hr>

          <HeaderNotificationsList/>
<!--          <div class="flex justify-center items-center">-->
<!--            <div class="text-gray-400">-->
<!--              Немає сповіщень-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
</script>

<style lang="postcss" scoped>
.notifications-transition {
  &-enter-active {
    @apply transition duration-200 ease-out;
  }

  &-leave-active {
    @apply transition duration-150 ease-in;
  }

  &-enter-from, &-leave-to {
    @apply translate-y-1 opacity-0;
  }

  &-enter-to, &-leave-from {
    @apply translate-y-0 opacity-100;
  }
}

</style>
