const actions = {
  async getUser ({ commit }, user) {
    commit('setFirebaseLoaded')
    commit('setUser', user)
    if (!user) return false
    const token = await user.getIdToken()
    commit('setToken', token)
    const { claims } = await user.getIdTokenResult()
    commit('setClaims', claims)
  }
}

export default actions
