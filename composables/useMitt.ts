import mitt from 'mitt';
import { AppEvents } from '~/types/events';

export function useMitt() {
  return mitt<AppEvents>();
}
