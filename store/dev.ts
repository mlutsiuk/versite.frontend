import { defineStore } from "pinia";

interface State {
  validation: {
    showIsValid: boolean
  }
}

export const useDevStore = defineStore("dev", {
  state: (): State => ({
    validation: {
      showIsValid: false
    }
  })
});
