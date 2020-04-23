import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tools from '@/components/Tools'
import api from '@/const/api'

Vue.prototype.ConstApi = api
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tools',
      name: 'Tools',
      component: Tools,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/components/tools/Home.vue')
        },
        {
          path: 'calrelations',
          name: 'calrelations',
          component: () => import('@/components/tools/other/CalRelations.vue')
        }
      ]
    }
  ]
})
