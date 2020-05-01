import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tools from '@/components/Tools'
import PPT from '@/components/Ppt'
import api from '@/const/api'

Vue.prototype.ConstApi = api
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/web',
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/tools',
      component: Tools,
      children: [
        {
          path: '/',
          component: () => import('@/components/tools/Home.vue')
        },
        {
          path: 'calrelations',
          component: () => import('@/components/tools/other/CalRelations.vue')
        },
        {
          path: 'mask',
          component: () => import('@/components/tools/picture/Mask.vue')
        }
      ]
    },
    {
      path: '/ppt',
      component: PPT,
      children: [
        {
          path: '/',
          component: () => import('@/components/ppt/Home.vue')
        },
        {
          path: 'grammar',
          component: () => import('@/components/ppt/english/Grammar.vue')
        }
      ]
    }
  ]
})
