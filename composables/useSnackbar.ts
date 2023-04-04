import { Message } from '~/types/snackbar';

const { emit } = useMitt();

function add(message: Partial<Message>) {
  let {
    title,
    text,
    duration,
    dismissible,
  } = message;

  emit('snackbar:show', {
    title,
    text,
    duration: duration ?? 5000,
    dismissible: dismissible ?? true
  });
}

export function useSnackbar() {
  return {
    add
  };
}