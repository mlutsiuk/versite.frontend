import { createPopper, Instance, Options } from '@popperjs/core';

export function usePopper(
  triggerNode: Ref,
  popperNode: Ref,
  options: Partial<Options>
) {
  const state = reactive({
    popper: null as Instance | null,
    isOpen: false
  });

  const open = () => {
    if (state.isOpen) {
      return;
    }
    state.isOpen = true;
  };

  const close = () => {
    if (!state.isOpen) {
      return;
    }
    state.isOpen = false;
  };

  const toggle = () => {
    state.isOpen = !state.isOpen;
  };

  watch(
    () => state.isOpen,
    async isOpen => {
      if (isOpen) {
        await nextTick();
        state.popper?.update();
      }
    }
  );

  onMounted(() => {
    if (triggerNode.value && popperNode.value) {
      state.popper = createPopper(triggerNode.value, popperNode.value, options);
    }
  });

  onBeforeUnmount(() => {
    state.popper?.destroy();
  });

  return {
    ...toRefs(state),
    open,
    close,
    toggle
  };
}
