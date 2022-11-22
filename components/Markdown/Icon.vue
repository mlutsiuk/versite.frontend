<template>
  <Icon
    :icon="props.icon"
    :inline="props.inline"
    :width="props.width"
  />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/offline';
import type { IconifyIcon } from '@iconify/types';

const props = withDefaults(defineProps<{
  icon: IconifyIcon,
  width?: number,
  inline?: boolean
}>(), {
  width: 24,
  inline: false
});
</script>
