import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/LoginForm.vue'
import Register from '../views/RegisterForm.vue'
import Context from '../views/ContextForm.vue'
import AdminDashboard from '../views/Admin/AdminDashBord.vue'
import UserDashboard from '../views/User/UserDashboard.vue'
import PageNotFount from '../views/404.vue'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Context',
    name: 'Context',
    component: Context
  },
  {
    path: '/UserDashboard',
    name: 'UserDashboard',
    component: UserDashboard
  },
  {
    path: '/AdminDashboard',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
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
