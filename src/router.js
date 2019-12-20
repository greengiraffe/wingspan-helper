import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
// import i18n from './i18n'
import Scoresheet from './views/Scoresheet.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/:lang*', // allow a language prefix
      name: 'scoresheet',
      component: Scoresheet
    }
    // {
    //   path: '/automata',
    //   name: 'automata',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/Automata.vue')
    // }
  ]
})

router.beforeEach((to, from, next) => {
  const routeParamLang = to.params.lang ? to.params.lang.toLowerCase() : undefined
  const stateLang = store.state.language

  if (
    routeParamLang &&
    routeParamLang !== stateLang &&
    ['en', 'de'].includes(routeParamLang)
  ) {
    // set language based on router param
    store.dispatch('setLanguage', routeParamLang)
  } else if (store.state.language === null) {
    // set language based on user system locale
    const isGerman = navigator.language.toLowerCase().includes('de')
    store.dispatch('setLanguage', isGerman ? 'de' : 'en')
  }

  next()
})

export default router
