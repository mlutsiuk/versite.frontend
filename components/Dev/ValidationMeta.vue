<template>
  <span
    v-if="devStore.validation.showIsValid"
    :class="[meta.valid ? 'bg-green-500' : 'bg-red-500']"
    class="select-none rounded px-1 text-white"
  >
    {{ meta.valid ? 'valid' : 'invalid' }}
  </span>
</template>

<script setup lang="ts">
import { FieldMeta } from 'vee-validate';
import { useDevStore } from '~/store/dev';

const props = defineProps<{
  meta: FieldMeta<any>;
}>();

const devStore = useDevStore();
</script>
