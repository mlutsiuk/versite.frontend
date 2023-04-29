<template>
  <div
    ref="trigger"
    :class="[isOpen ? 'bg-neutral-200' : 'bg-neutral-100']"
    class="cursor-pointer select-none space-y-1 rounded-sm px-2 py-2 transition-colors hover:bg-neutral-200"
    @click="toggle"
  >
    <DevOnly>
      <DevDataId :id="props.assignment.id" />
    </DevOnly>

    <div class="text-xl font-medium leading-snug">
      {{ props.assignment.title }}
    </div>

    <div class="text-base font-medium text-gray-600">
      {{ props.assignment.description }}
    </div>

    <div v-if="props.assignment.deadline" class="leading-tight">
      <div class="flex flex-row items-center space-x-2 rounded text-gray-600">
        <span
          v-text="dayjs(props.assignment.deadline).format('DD.MM.YYYY HH:mm')"
        />
        <span class="text-gray-400"
          >({{ dayjs(props.assignment.deadline).fromNow() }})</span
        >
      </div>
    </div>
  </div>

  <Teleport to="body">
    <Transition name="fade-transition">
      <div v-show="isOpen" ref="popover">
        <LessonAssignmentsEditorPopover
          :assignmnent-id="props.assignment.id"
          @save="emit('save')"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import { onClickOutside } from '@vueuse/core';
import { Assignment } from '~/api/models';

const props = defineProps<{
  assignment: Assignment;
}>();
const emit = defineEmits<{
  (e: 'save'): void;
}>();

const trigger = ref<HTMLElement>();
const popover = ref<HTMLElement>();

const { isOpen, toggle, close } = usePopper(trigger, popover, {
  placement: 'left',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 16]
      }
    },
    {
      name: 'preventOverflow',
      options: {
        padding: 32
      }
    }
  ]
});
onClickOutside(popover, close);
</script>
