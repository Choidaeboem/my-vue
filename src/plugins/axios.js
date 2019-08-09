import Vue from 'vue'
import axios from 'axios'
import store from '../store'

const firbaseAPI = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://us-central1-daiboom-my-vue.cloudfunctions.net/admin' : 'http://localhost:5000/daiboom-my-vue/us-central1/',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' }
})

firbaseAPI.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers.authorization = store.state.token
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

Vue.prototype.$axios = firbaseAPI
