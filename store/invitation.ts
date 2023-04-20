import { defineStore } from 'pinia';
import { Invitation } from '~/api/models';
import { invitations } from '~/api/repositories';

interface State {
  loaded: boolean;
  invitations: Invitation[];
}

export const useInvitationStore = defineStore('invitation', {
  state: (): State => ({
    loaded: false,
    invitations: []
  }),
  getters: {
    count: state => state.invitations.length
  },
  actions: {
    async fetchInvitations() {
      this.loaded = false;
      const { data } = await invitations.my.asyncData({
        query: {
          include: 'student.course.author'
        }
      });
      this.loaded = true;

      if (data.value) {
        this.invitations = data.value.data;
      }
    }
  }
});
