import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path:'/Test',
      name:'Test',
      component:()=>import('@/views/TestView.vue')
    },
    {
      path:'/From',
      name:'From',
      component:()=>import('@/views/FromView.vue')
    },
    {
      path:'/Login',
      name:'Login',
      component:()=>import('@/views/LoginView.vue')
    },
    {
      path:'/Register',
      name:'Register',
      component:()=>import('@/views/RegisterView.vue')
    }
  ],
})

export default router
