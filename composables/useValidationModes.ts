import { FieldContext } from 'vee-validate';
import { modes } from '~/types/validation/interaction-modes';

export default function <FieldT = string>(
  ctx: FieldContext<FieldT>,
  mode: keyof typeof modes
) {
  return computed(() => {
    const on: Record<string, Function[]> = {
      blur: [ctx.handleBlur],
      // default input event to sync the value
      // the `false` here prevents validation
      input: [(e: Event) => ctx.handleChange(e, false)]
    };

    const triggerEvents = modes[mode](ctx);

    triggerEvents.forEach(eventName => {
      if (on[eventName]) {
        on[eventName].push((e: Event) => ctx.handleChange(e));
      } else {
        on[eventName] = [(e: Event) => ctx.handleChange(e)];
      }
    });

    return on;
  });
}
