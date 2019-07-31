import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from './components/Home.vue'

Vue.use(Router)

const levelCheck = (to, from, next) => {
  console.log(to)
  console.log(store.state.claims.level)
  if (store.state.claims.level === undefined) next('/userProfile')
  next()
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: levelCheck
    },
    {
      path: '/sign',
      name: 'sign',
      component: () => import('./components/sign.vue')
    },
    {
      path: '/userProfile',
      name: 'userProfile',
      component: () => import('./components/userProfile.vue')
    },
    {
      path: '/n/:nid',
      name: 'note',
      component: () => import('./components/note.vue')
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('./components/notes.vue')
    },
    {
      path: '/test/card',
      name: 'lecturs_card',
      component: () => import('./components/test/card.vue')
    },
    {
      path: '/test/layout',
      name: 'lecturs_layout',
      component: () => import('./components/test/layout.vue')
    },
    {
      path: '/test/axios',
      name: 'lecturs_axios',
      component: () => import('./components/test/axios.vue')
    },
    {
      path: '/test/vuex',
      name: 'test_vuex',
      component: () => import('./components/test/vuex.vue')
    },
    {
      path: '/test/threejs',
      name: 'test_vuex',
      component: () => import('./components/test/threejs.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import('./components/e404.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  Vue.prototype.$Progress.start()
  if (store.state.firebaseLoaded) next()
})

router.afterEach((to, from) => {
  Vue.prototype.$Progress.finish()
})

export default router
