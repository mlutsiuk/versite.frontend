<template>
  <Popover v-slot="{}">
    <PopoverButton
      class="flex cursor-pointer flex-row items-center space-x-2 rounded border-transparent px-1 text-gray-600 hover:border-gray-200 hover:bg-gray-100"
      as="div"
    >
      <Icon class="text-gray-600" name="mdi:calendar" />
      <span>03.12.2022</span>
    </PopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel class="absolute z-10 mt-3">
        <Datepicker inline />
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import Datepicker from 'vuejs3-datepicker';
</script>
