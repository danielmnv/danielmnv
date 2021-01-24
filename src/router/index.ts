import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('../views/Home.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
