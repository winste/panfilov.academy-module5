import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HotelView from '@/views/HotelView.vue'
import ReserveView from '@/views/ReserveView.vue'
import SearchView from '@/views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hotel/detail/:id',
      name: 'hotel',
      component: HotelView
    },
    {
      path: '/order',
      name: 'reserve',
      component: ReserveView
    },
    {
      path: '/hotel/search',
      name: 'search',
      component: SearchView
    }
  ]
})

export default router
