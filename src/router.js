import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from './components/Home.vue'

Vue.use(Router)

const levelCheck = (to, from, next) => {
  if (!store.state.user) return next('/sign')
  if (!store.state.claims) return next('/userProfile')
  next()
}

const adminCheck = (to, form, next) => {
  if (!store.state.user) {
    if (to.path !== '/sign') return next('/sign')
  } else {
    if (!store.state.user.emailVerified) return next('/userProfile')
    if (store.state.claims.level > 0) throw Error('관리자만 들어갈 수 있습니다')
  }
  next()
}
const userCheck = (to, form, next) => {
  if (!store.state.user) {
    if (to.path !== '/sign') return next('/sign')
  } else {
    if (!store.state.user.emailVerified) return next('/userProfile')
    if (store.state.claims.level > 1) throw Error('사용자만 들어갈 수 있습니다')
  }
  next()
}
const guestCheck = (to, form, next) => {
  if (!store.state.user) {
    if (to.path !== '/sign') return next('/sign')
  } else {
    if (!store.state.user.emailVerified) return next('/userProfile')
    if (store.state.claims.level > 2) throw Error('손님만 들어갈 수 있습니다')
  }
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
      component: () => import('./components/sign.vue'),
      beforeEnter: (to, from, next) => {
        if (store.state.user) return next('/')
        next()
      }
    },
    {
      path: '/test/lv0',
      component: () => import('./components/test/lv0.vue'),
      beforeEnter: adminCheck
    },
    {
      path: '/test/lv1',
      component: () => import('./components/test/lv1.vue'),
      beforeEnter: userCheck
    },
    {
      path: '/test/lv2',
      component: () => import('./components/test/lv2.vue'),
      beforeEnter: guestCheck
    },
    {
      path: '/userProfile',
      component: () => import('./components/userProfile.vue'),
      beforeEnter: (to, from, next) => {
        if (!store.state.user) return next('/sign')
        next()
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/About.vue')
    },
    {
      path: '/about2',
      component: () => import('./components/About2.vue')
    },
    {
      path: '/n/:nid',
      name: 'note',
      component: () => import('./components/note.vue'),
      children: [
        {
          path: 'm/:mid',
          name: 'memo',
          component: () => import('./components/memo.vue')
        }
      ]
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('./components/notes.vue')
    },
    {
      path: '*',
      component: () => import('./components/e404.vue')
    }
  ]
})

const waitFirebase = () => {
  return new Promise((resolve, reject) => {
    let cnt = 0
    const tmr = setInterval(() => {
      if (store.state.firebaseLoaded) {
        clearInterval(tmr)
        resolve()
      } else if (cnt++ > 200) reject(Error('제한 시간 초과, 인터넷 연결을 확인하세요'))
    }, 10)
  })
}

router.beforeEach((to, from, next) => {
  Vue.prototype.$Progress.start()
  waitFirebase()
    .then(() => next())
    .catch(e => Vue.prototype.$toasted.global.error(e.message))
})

router.afterEach((to, from) => {
  Vue.prototype.$Progress.finish()
})

router.onError(e => {
  Vue.prototype.$Progress.finish()
  Vue.prototype.$toasted.global.error(e.message)
})

export default router
