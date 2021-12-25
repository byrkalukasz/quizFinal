import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../views/LoginForm.vue'
import AdminDashboard from '../views/Admin/AdminDashBord.vue'
import PageNotFount from '../views/404.vue'


const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/AdminDashboard',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFount',
    component: PageNotFount
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
