<template>
  <Popover v-slot="{ open }" class="relative">
    <PopoverButton as="div">
      <HeaderAvatar />
    </PopoverButton>

    <transition name="dropdown-transition">
      <PopoverPanel
        class="absolute right-0 z-10 mt-6 rounded-md bg-white p-3 shadow-lg"
      >
        <div class="space-y-2.5">
          <div class="flex flex-row items-end">
            <HeaderAvatar size="52px" />

            <div class="ml-2">
              <div
                v-if="user?.nickname"
                class="text-sm text-gray-800"
                v-text="`@${user?.nickname}`"
              />
              <div class="whitespace-nowrap" v-text="user?.name" />
            </div>
          </div>

          <div class="separator"></div>

          <div class="dropdown-item">
            <Icon name="mdi:user-edit" size="24" />
            <span>Редагувати профіль</span>
          </div>

          <div class="dropdown-item">
            <Icon name="material-symbols:translate" size="24" />
            <span>Мова інтерфейсу</span>
          </div>

          <div class="dropdown-item">
            <Icon name="mdi:sun-moon-stars" size="24" />
            <span>Тема</span>
          </div>

          <div class="separator"></div>

          <div class="dropdown-item" @click="logout">
            <Icon name="material-symbols:logout" size="24" />
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
  @apply cursor-pointer space-x-4 whitespace-nowrap rounded-sm p-1.5 transition-colors hover:bg-gray-100;
}
</style>
