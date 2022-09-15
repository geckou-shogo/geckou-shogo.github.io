export const state = () => ({
  screen: '',
})

export const mutations = {
  addScreenState(state: any, screenState: string) {
    state.screen = screenState
  },
}
