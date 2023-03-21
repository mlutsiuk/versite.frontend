<template>
  <Popover v-slot="{ open }">
    <PopoverButton
      as="div"
      class="flex flex-row space-x-2 items-center text-gray-600 border-transparent px-1 cursor-pointer rounded"
    >
      <HeaderAvatar/>
    </PopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel
        class="absolute right-0 max-w-full z-10 mt-4"
      >
        <div class="bg-white rounded-md shadow-lg p-3 flex flex-col space-y-2.5">
          <div class="flex items-end select-none">
            <HeaderAvatar size="52px"/>
            <div class="flex flex-col ml-2">
              <div
                v-if="user?.nickname"
                class="text-gray-800 text-xs"
                v-text="`@${user?.nickname}`"
              />
              <div v-text="user?.name"/>
            </div>
          </div>

          <div class="separator"></div>

          <div class="dropdown-item">
            <Icon name="mdi:user-edit" size="24"/>
            <span>Редагувати профіль</span>
          </div>

          <div class="dropdown-item">
            <Icon name="material-symbols:translate" size="24"/>
            <span>Мова інтерфейсу</span>
          </div>

          <div class="dropdown-item">
            <Icon name="mdi:sun-moon-stars" size="24"/>
            <span>Тема</span>
          </div>

          <div class="separator"></div>

          <div class="dropdown-item" @click="logout">
            <Icon name="material-symbols:logout" size="24"/>
            <span>Вийти</span>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();
const user = computed(() => authStore.user);

function logout() {
  useAuthStore().logout();

  navigateTo('/login');
}
</script>

<style scoped>
.separator {
  @apply border-t border-gray-100;
}

.dropdown-item {
  @apply space-x-4 cursor-pointer hover:bg-gray-100 transition-colors rounded-sm p-1.5;
}
</style>
