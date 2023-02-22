import { FieldContext } from 'vee-validate';

type InteractionEventGetter = (ctx: FieldContext<any>) => string[];

// Validates on submit only
const passive = () => [];

const lazy: InteractionEventGetter = () => {
  return ['change'];
};

const aggressive: InteractionEventGetter = () => ['input'];

const eager: InteractionEventGetter = ({ errorMessage }) => {
  if (errorMessage.value) {
    return ['change', 'input'];
  }

  return ['change', 'blur'];
};

export const modes = {
  passive,
  lazy,
  aggressive,
  eager
};
