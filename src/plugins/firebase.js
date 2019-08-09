
import Vue from 'vue'
import * as firebase from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'
import store from '../store'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

Vue.prototype.$firebase = firebase

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch('getUser', user).then(r => console.log(r))
})
