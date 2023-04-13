import { defineStore } from 'pinia';

interface State {
  data: {
    showId: boolean;
  };
  validation: {
    showIsValid: boolean;
  };
}

export const useDevStore = defineStore('dev', {
  state: (): State => ({
    data: {
      showId: false
    },
    validation: {
      showIsValid: false
    }
  })
});
