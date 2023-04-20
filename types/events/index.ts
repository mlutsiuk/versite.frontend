import { Message } from '~/types/snackbar';

export type AppEvents = {
  'auth:user-fetched': void;
  'auth:logout': void;

  'snackbar:show': Message;
  'snackbar:clear': void;
};
