<template>
  <button
    class="Button"
    :class="{
      'Button--filled': props.variant == 'filled',
      'Button--outline': props.variant == 'outline',
      'Button--disabled': props.disabled,

      'Button--block': props.block,

      'Button--size-small': props.size == 'small',
      'Button--size-default': props.size == 'default',
      'Button--size-large': props.size == 'large',
      'Button--size-x-large': props.size == 'x-large'
    }"
    :disabled="props.disabled"
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
        <slot/>
      </span>

      <Icon
        v-if="props.appendIcon"
        class="Button_AppendIcon"
        :name="props.appendIcon"
        size="1.25em"
      />
    </span>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  prependIcon?: string,
  appendIcon?: string,
  variant?: 'filled' | 'outline',
  size?: 'small' | 'default' | 'large' | 'x-large',
  block?: boolean,
  disabled?: boolean
}>(), {
  variant: 'filled',
  size: 'default',
  block: false,
  disabled: false
});
</script>

<style lang="postcss" scoped>
.Button {
  @apply relative items-center justify-center
  font-normal rounded-md box-border
  select-none transition-all;
}

.Button--filled {
  @apply bg-current;
}
.Button--outline {
  @apply border border-current;
}
.Button--disabled {
  @apply pointer-events-none;
}
.Button.Button--disabled {
  @apply bg-gray-200;

  .Button_Content {
    @apply text-gray-400
  }
}

.Button--size-small {
  @apply px-3 min-w-[50px] h-[28px]
    text-xs;
}
.Button--size-default {
  @apply px-4 min-w-[64px] h-[36px]
  text-sm;
}
.Button--size-large {
    @apply px-5 min-w-[78px] h-[44px]
      text-base;
}
.Button--size-x-large {
    @apply px-6 min-w-[92px] h-[52px]
    text-lg;
}


.Button--block {
  @apply flex grow shrink-0 min-w-full;
}

.Button--filled .Button_Highlighter {
  @apply text-white;
}

.Button_Highlighter {
  @apply absolute top-0 left-0 w-full h-full pointer-events-none
  opacity-0;
  /*transition-opacity transition-colors duration-200 ease-in-out;*/
  border-radius: inherit;

  transition: background-color .3s cubic-bezier(.25,.8,.5,1), opacity .4s cubic-bezier(.25,.8,.5,1);
}

/* On button hover */
.Button:hover .Button_Highlighter {
  @apply bg-current opacity-5;
}

.Button_Content {
  @apply flex items-center transition-all;
}

.Button--filled .Button_Content {
   @apply text-white;
 }

.Button_PrependIcon {
  @apply mr-1.5 -ml-0.5;
}

.Button_AppendIcon {
  @apply ml-1.5 -mr-0.5;
}
</style>
