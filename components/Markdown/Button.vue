<template>
  <NuxtLink
    class="Button"
    :to="props.to"
    :class="{
      'Button--filled': props.variant == 'filled',
      'Button--outline': props.variant == 'outline',
      'Button--tonal': props.variant == 'tonal',
      'Button--disabled': props.disabled,
      'Button--loading': props.loading,

      'Button--block': props.block,

      'Button--size-small': props.size == 'small',
      'Button--size-default': props.size == 'default',
      'Button--size-large': props.size == 'large',
      'Button--size-x-large': props.size == 'x-large'
    }"
  >
    <span class="Button_Highlighter"></span>
    <span class="Button_Content">
      <Icon
        v-if="props.prependIcon"
        class="Button_PrependIcon"
        :name="props.prependIcon"
        size="1.25em"
      />

      <span>
        <slot />
      </span>

      <Icon
        v-if="props.appendIcon"
        class="Button_AppendIcon"
        :name="props.appendIcon"
        size="1.25em"
      />
    </span>
    <span class="Button_Loader">
      <MdProgressCircular v-if="props.loading" />
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    prependIcon?: string;
    appendIcon?: string;
    variant?: 'filled' | 'outline' | 'tonal';
    size?: 'small' | 'default' | 'large' | 'x-large';
    block?: boolean;
    disabled?: boolean;
    loading?: boolean;

    to?: string;
  }>(),
  {
    variant: 'filled',
    size: 'default',
    block: false,
    disabled: false,
    loading: false
  }
);
</script>

<style lang="scss" scoped>
.Button {
  @apply relative box-border inline-flex cursor-pointer
  select-none items-center justify-center
  rounded-md font-normal transition-colors;
}

.Button--filled {
  @apply bg-current;

  .Button_Content,
  .Button_Loader {
    @apply text-white;
  }

  .Button_Highlighter {
    @apply text-white;
  }
}

.Button--tonal {
  @apply bg-current;

  .Button_Content,
  .Button_Loader {
    @apply text-gray-700;
  }

  .Button_Highlighter {
    @apply text-gray-700;
  }
}

.Button--outline {
  @apply border border-current;
}

.Button--disabled {
  @apply pointer-events-none;
}

.Button.Button--disabled {
  @apply bg-gray-200;

  .Button_Content,
  .Button_Loader {
    @apply text-gray-400;
  }
}

.Button--loading {
  @apply pointer-events-none;

  .Button_Content {
    @apply opacity-0;
  }
}

.Button.Button--block {
  @apply flex min-w-full shrink-0;
}

.Button--size-small {
  @apply h-[28px] min-w-[50px] px-3
  text-xs;
}

.Button--size-default {
  @apply h-[36px] min-w-[64px] px-4
  text-base;
}

.Button--size-large {
  @apply h-[44px] min-w-[78px] px-5
  text-base;
}

.Button--size-x-large {
  @apply h-[52px] min-w-[92px] px-6
  text-lg;
}

.Button:hover .Button_Highlighter {
  @apply bg-current opacity-10;
}

.Button_Highlighter {
  @apply pointer-events-none absolute left-0 top-0 h-full w-full
  opacity-0;
  /*transition-opacity transition-colors duration-200 ease-in-out;*/
  border-radius: inherit;

  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
    opacity 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.Button_Content {
  @apply flex items-center transition-all;
}

.Button_PrependIcon {
  @apply -ml-0.5 mr-1.5;
}

.Button_AppendIcon {
  @apply -mr-0.5 ml-1.5;
}

.Button_Loader {
  @apply absolute left-0 top-0 flex h-full
  w-full justify-center align-middle;
}
</style>
