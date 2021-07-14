import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import(/* webpackChunkName: "calendar" */ '../components/Calendar.vue')
  },
  {
    path: '/messages',
    name: 'Messages',
    component: () => import(/* webpackChunkName: "messages" */ '../components/Messages.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "calendar" */ '../components/Account.vue')
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: () => import(/* webpackChunkName: "calendar" */ '../views/Onboarding.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
