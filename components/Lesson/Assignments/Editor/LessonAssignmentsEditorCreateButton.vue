<template>
  <div
    :class="[loading ? 'cursor-default opacity-50' : 'cursor-pointer']"
    class="rounded bg-neutral-100 py-4 text-center text-lg transition-colors hover:bg-neutral-200"
    @click="create"
  >
    <MdProgressCircular v-if="loading" />
    <template v-else> Додати</template>
  </div>
</template>

<script lang="ts" setup>
import { assignments } from '~/api/repositories';

const props = defineProps<{
  lessonId: string;
}>();
const emit = defineEmits<{
  (e: 'create'): void;
}>();

const loading = ref(false);

async function create() {
  loading.value = true;
  await assignments.create.asyncData({
    body: {
      lesson_id: props.lessonId,
      title: 'Нове завдання'
    }
  });
  loading.value = false;

  emit('create');
}
</script>
