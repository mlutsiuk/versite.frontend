<template>
  <div
    class="TextField"
    :class="{
      'TextField--error': errorMessage,
      'TextField--focused': isFocused
    }"
  >
    <label
      v-if="props.label"
      v-text="props.label"
      :for="id"
      class="TextField_Label"
    />
    <div class="TextField_Field">
      <input
        v-on="validationHandlers"
        v-model="inputValue"
        @blur="blur"
        @focus="focus"
        :id="id"
        :name="props.name"
        :placeholder="props.placeholder"
        :disabled="disabled"
        :type="props.type"
        class="TextField_Input"
      />
      <div class="TextField_Outline"></div>
    </div>

    <div v-if="!props.hideDetails" class="TextField_Details">
      <DevOnly>
        <LazyDevValidationMeta :meta="meta" />
      </DevOnly>
      <span>
        {{ errorMessage }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO: Add input type prop
import { useField } from 'vee-validate';

const props = withDefaults(
  defineProps<{
    id?: string;
    disabled?: boolean;
    hideDetails?: boolean;
    placeholder?: string;
    label?: string;
    type: 'text' | 'password' | 'date' | 'datetime-local';

    name: string;

    modelValue?: string;
  }>(),
  {
    type: 'text',
    disabled: false,
    hideDetails: false
  }
);
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const uid = useUid().next();
const id = computed(() => props.id || `input-${uid}`);

const { isFocused, focus, blur } = useFocus();

/**
 *  @see https://vee-validate.logaretm.com/v4/guide/composition-api/caveats
 */
const { name } = toRefs(props);
const fieldContext = useField<string>(name, undefined, {
  validateOnMount: false,
  validateOnValueUpdate: false,
  initialValue: props.modelValue
});

const { value: inputValue, errorMessage, meta } = fieldContext;

const validationHandlers = useValidationModes(fieldContext, 'eager');
</script>

<style lang="postcss" scoped>
.TextField--error .TextField_Outline {
  @apply border-[#B91C1C];
}

.TextField--error .TextField_Details {
  @apply text-[#B91C1C];
}

.TextField--focused .TextField_Outline {
  @apply border-2 opacity-80;
}

.TextField_Field {
  @apply relative;
}

.TextField_Field:hover .TextField_Outline {
  @apply opacity-90;
}

.TextField_Outline {
  @apply pointer-events-none absolute left-0 top-0 h-full
  w-full
  rounded-md border border-black opacity-40 transition-opacity;
}

.TextField_Label {
  @apply mb-2 block text-left text-sm font-medium text-gray-900 dark:text-gray-300;
}

.TextField_Input {
  @apply block w-full rounded-md
  p-4 text-gray-900
  placeholder:text-black placeholder:opacity-50 focus:outline-none;
}

.TextField_Details {
  @apply min-h-[2em] pl-4 text-start text-xs leading-6;
}
</style>
