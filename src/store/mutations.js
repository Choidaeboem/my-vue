const mutations = {
  setTitle (state, p) {
    state.title = p
  },
  setUser (state, user) {
    state.user = user
  },
  setToken (state, token) {
    state.token = token
  },
  setClaims (state, claims) {
    state.claims = claims
  },
  setFirebaseLoaded (state) {
    state.firebaseLoaded = true
  }
}

export default mutations
