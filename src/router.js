import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        console.log(to)
        next()
      }

    },
    {
      path: '/sign',
      name: 'sign',
      component: () => import('./views/sign.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/about2',
      name: 'about2',
      component: () => import('./views/About2.vue')
    },
    {
      path: '/lectures/card',
      name: 'lecturs_card',
      component: () => import('./views/lectures/card.vue')
    },
    {
      path: '/lectures/layout',
      name: 'lecturs_layout',
      component: () => import('./views/lectures/layout.vue')
    },
    {
      path: '/lectures/notes',
      name: 'lecturs_notes',
      component: () => import('./views/lectures/notes.vue')
    },
    {
      path: '/lectures/axios',
      name: 'lecturs_axios',
      component: () => import('./views/lectures/axios.vue')
    },
    {
      path: '/lectures/mother',
      name: 'lecturs_mother',
      component: () => import('./views/lectures/mother.vue')
    },
    {
      path: '/lectures/vuex',
      name: 'lecturs_vuex',
      component: () => import('./views/lectures/vuex.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import('./views/e404.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  Vue.prototype.$Progress.start()
  if (Vue.prototype.$isFirebaseAuth) next()
})

router.afterEach((to, from) => {
  Vue.prototype.$Progress.finish()
})

export default router
