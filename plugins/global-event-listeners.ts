import { useInvitationStore } from '~~/store/invitation';

const { on } = useMitt();

on('auth:user-fetched', () => {
  useInvitationStore().fetchInvitations();
});

export default defineNuxtPlugin(() => {});
