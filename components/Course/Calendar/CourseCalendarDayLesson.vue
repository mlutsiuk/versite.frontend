<template>
  <div>
    <div
      ref="trigger"
      :class="[isOpen ? 'bg-gray-200' : 'hover:bg-gray-100']"
      class="flex flex-shrink-0 cursor-pointer items-center rounded-sm px-1 py-0.5 text-sm"
      @click="toggle"
    >
      <div
        class="font-light leading-none"
        v-text="dayjs(lesson.date).format('HH:mm')"
      />
      <div
        class="ml-2 truncate font-medium leading-none"
        v-text="lesson.title"
      />
    </div>

    <Teleport to="body">
      <Transition name="fade-transition">
        <div
          v-show="isOpen"
          ref="popover"
          class="flex w-[24rem] flex-col rounded border bg-white p-2.5 shadow-lg"
        >
          <div class="text-sm" v-text="lesson.course?.data?.title" />
          <div class="mb-2 text-lg font-medium" v-text="lesson.title" />

          <div
            class="flex flex-row items-center space-x-2 rounded text-gray-600"
          >
            <Icon class="text-gray-600" name="mdi:calendar" />
            <span v-text="dayjs(lesson.date).format('DD.MM.YYYY')" />
          </div>

          <div
            class="flex flex-row items-center space-x-2 rounded text-gray-600"
          >
            <Icon class="text-gray-600" name="mdi:clock-outline" />
            <span v-text="dayjs(lesson.date).format('HH:mm')" />
          </div>

          <div
            v-if="lesson.assignments?.data.length"
            class="text-sm font-medium"
          >
            <div class="text-gray-400">Завдання</div>

            <ul class="pl-2">
              <li
                v-for="assignment in lesson.assignments.data"
                :key="assignment.id"
                class="list-inside list-disc"
              >
                {{ assignment.title }}*
              </li>
            </ul>
          </div>

          <div class="mt-2 flex flex-row justify-end">
            <MdButton
              :to="`/lessons/${lesson.id}`"
              class="text-gray-600"
              size="default"
              variant="outline"
            >
              Переглянути
            </MdButton>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import { Lesson } from '~/api/models';
import { onClickOutside } from '@vueuse/core';

const props = defineProps<{
  lesson: Lesson;
}>();

const trigger = ref<HTMLElement>();
const popover = ref<HTMLElement>();

const { isOpen, toggle, close } = usePopper(trigger, popover, {
  placement: 'left',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 8]
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
