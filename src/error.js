import Vue from 'vue'

Vue.config.errorHandler = e => {
  console.log('here')
  Vue.prototype.$toasted.global.error(e.message)
}
