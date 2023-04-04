import { Message } from '~/types/snackbar';

export type AppEvents = {
  'snackbar:show': Message,
  'snackbar:clear': void
}
