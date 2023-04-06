<template>
  <Popover v-slot="{ open }" class="relative">
    <PopoverButton as="div">
      <HeaderNotificationsButton />
    </PopoverButton>

    <transition name="dropdown-transition">
      <PopoverPanel
        class="absolute -right-16 z-10 mt-6 w-[30rem] rounded-md bg-white shadow-lg"
      >
        <div class="space-y-2 py-3">
          <HeaderNotificationsInvitationsHeading />

          <hr />

          <HeaderNotificationsInvitationsList />

          <hr />

          <HeaderNotificationsList />
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
