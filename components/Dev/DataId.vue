<template>
  <span
    v-if="devStore.data.showId"
    class="select-none rounded bg-red-400 px-1 text-white"
  >
    Id: {{ props.id }}
  </span>
</template>

<script lang="ts" setup>
import { useDevStore } from '~/store/dev';

const props = defineProps<{
  id: number | string;
}>();

const devStore = useDevStore();
</script>
