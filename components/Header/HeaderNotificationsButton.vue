<template>
  <MdBadge content="6" color="bg-[#4CAF50]" class="cursor-pointer">
    <MdIcon
      class="cursor-pointer text-gray-500"
      :icon="bellOutline"
      :width="28"
    />
  </MdBadge>
</template>

<script setup lang="ts">
import bellOutline from '@iconify-icons/mdi/bell-outline';

</script>
