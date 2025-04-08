import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OtherPageView from '@/views/OtherPageView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/other',
      name: 'other',
      component: OtherPageView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: PageNotFoundView,
    },
    
  ],
})

export default router
