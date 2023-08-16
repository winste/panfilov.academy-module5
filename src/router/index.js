import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import HotelPage from '@/pages/HotelPage.vue'
import ReservePage from '@/pages/ReservePage.vue'
import SearchPage from '@/pages/SearchPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/hotel/detail/:id',
      name: 'hotel',
      component: HotelPage,
    },
    {
      path: '/order',
      name: 'reserve',
      component: ReservePage,
    },
    {
      path: '/hotel/search',
      name: 'search',
      component: SearchPage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
