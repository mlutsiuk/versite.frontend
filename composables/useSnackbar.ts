import { Message } from '~/types/snackbar';

const { emit } = useMitt();

function add(message: Partial<Message>) {
  const { title, text, duration, dismissible } = message;

  emit('snackbar:show', {
    title,
    text,
    duration: duration ?? 5000,
    dismissible: dismissible ?? true
  });
}

function clear() {
  emit('snackbar:clear');
}

export function useSnackbar() {
  return {
    add,
    clear
  };
}
