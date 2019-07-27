// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import Vue from 'vue'
import * as firebase from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'

// Add the Firebase services that you want to use
// import 'firebase/auth'
import 'firebase/firestore'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// firebase.firestore().collection('test').add({ test: new Date() })
//   .then(r => console.log(r))
//   .catch(e => console.log(e))

Vue.prototype.$firebase = firebase
