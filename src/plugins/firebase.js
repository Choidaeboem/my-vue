
import Vue from 'vue'
import * as firebase from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'
import store from '../store'
import router from '../router'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// firebase.firestore().collection('test').add({ test: 'aaa' })
//   .then(r => console.log(r))
//   .catch(e => console.error(e))

Vue.prototype.$firebase = firebase
Vue.prototype.$isFirebaseAuth = false

firebase.auth().onAuthStateChanged((user) => {
  console.log('in onAuthStateChanged')
  Vue.prototype.$isFirebaseAuth = true
  // console.log(user)

  // store.commit('setUser', user)
  store.dispatch('getUser', user)
    .then(() => {
      if (user) {
        console.log('store.dispatch(user)', user)
        router.push('/')
      } else {
        router.push('/sign')
      }
    })
})
