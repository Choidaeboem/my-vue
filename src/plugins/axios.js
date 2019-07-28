import Vue from 'vue'
import axios from 'axios'

const firbaseAPI = axios.create({
  baseURL: 'http://localhost:5000/daiboom-my-vue/us-central1/',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' }
})

firbaseAPI.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers.authorization = Math.random()
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

Vue.prototype.$axios = firbaseAPI
