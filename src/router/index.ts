import type { Router, RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('../views/Layout/index.vue'),
    children: [
      {
        path: '/home',
        component: () => import('../views/Home/index.vue')
      },
      {
        path: '/rank',
        component: () => import('../views/Rank/index.vue')
      },
      {
        path: '/learn',
        component: () => import('../views/Learn/index.vue')
      }
    ]
  }
]
const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
