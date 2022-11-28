<template>
  <Icon
    :icon="props.icon"
    :inline="props.inline"
    :width="props.width"
    :height="props.height"
  />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/offline';
import type { IconifyIcon } from '@iconify/types';

const props = withDefaults(defineProps<{
  icon: IconifyIcon,
  width?: number | 'auto',
  height?: number | 'auto',
  inline?: boolean
}>(), {
  inline: false
});
</script>
