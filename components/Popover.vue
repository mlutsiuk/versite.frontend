<template>
  <div ref="trigger" class="cursor-pointer" @click="toggle">
    <slot :isOpen="isOpen" name="activatior" />
  </div>

  <Teleport to="body">
    <Transition name="fade-transition">
      <div v-show="isOpen" ref="popover">
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { Placement } from '@popperjs/core';
import { onClickOutside } from '@vueuse/core';

const props = withDefaults(
  defineProps<{
    placement?: Placement;
    offset?: [number, number];
    padding?: number;
  }>(),
  {
    placement: 'left',
    padding: 32
  }
);

const trigger = ref<HTMLElement>();
const popover = ref<HTMLElement>();

const { isOpen, toggle, close } = usePopper(trigger, popover, {
  placement: props.placement,
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: props.offset
      }
    },
    {
      name: 'preventOverflow',
      options: {
        padding: props.padding
      }
    }
  ]
});
onClickOutside(popover, close);
</script>
