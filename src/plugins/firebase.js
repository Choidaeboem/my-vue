import Vue from 'vue'
import * as firebase from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'
import store from '../store'

// Add the Firebase services that you want to use
import 'firebase/auth'
import 'firebase/firestore'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// firebase.firestore().collection('test').add({ test: new Date() })
//   .then(r => console.log(r))
//   .catch(e => console.log(e))

Vue.prototype.$firebase = firebase

firebase.auth().onAuthStateChanged((user) => {
  console.log('here?')
  console.log(user)
  //   store.commit('setUser', user)
  store.dispatch('getUser', user)
//   if (user) {
//     // User is signed in.
//   } else {
//     // No user is signed in.
//   }
})
