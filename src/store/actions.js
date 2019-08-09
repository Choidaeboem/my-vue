const actions = {
  async getUser ({ commit }, user) {
    commit('setFirebaseLoaded')
    commit('setUser', user)
    if (!user) return null

    const token = await user.getIdToken()
    commit('setToken', token)
    const { claims } = await user.getIdTokenResult()
    commit('setClaims', claims)

    return true
  }
}

export default actions
