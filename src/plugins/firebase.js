import Vue from 'vue'
import * as firebase from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'
import store from '../store'
import router from '../router'

// Add the Firebase services that you want to use
import 'firebase/auth'
import 'firebase/firestore'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// firebase.firestore().collection('test').add({ test: new Date() })
//   .then(r => console.log(r))
//   .catch(e => console.log(e))

Vue.prototype.$firebase = firebase
Vue.prototype.$isFireBaseAuth = false

firebase.auth().onAuthStateChanged((user) => {
  console.log(user)
  Vue.prototype.$isFireBaseAuth = true
  if (user) {
    router.push('/')
  } else {
    router.push('/sign')
  }

  //   store.commit('setUser', user)
  store.dispatch('getUser', user)
})
