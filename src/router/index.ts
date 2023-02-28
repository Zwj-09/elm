import { createRouter, createWebHashHistory } from 'vue-router'

const routes: any[] = [{ path: '/', redirect: '/home' }]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
