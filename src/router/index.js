import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/LoginForm.vue'
import Register from '../views/RegisterForm.vue'
import Context from '../views/ContextForm.vue'
import AdminDashboard from '../views/Admin/AdminDashBord.vue'
import UserDashboard from '../views/User/UserDashboard.vue'
import PageNotFount from '../views/404.vue'
import AdminUserList from '../views/Admin/AdminUserlist'
import AdminQuizCreate from '../views/Admin/AdminQuizCreate'
import Quiz from '../views/User/UserQuiz'
import QuizEdit from '../views/Admin/AdminQiuzEdit'
import User from '../views/Admin/AdminUserEdit'




const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Context',
    name: 'Context',
    component: Context,
  },
  {
    path: '/UserDashboard',
    name: 'UserDashboard',
    component: UserDashboard,

  },
  {
    path: '/AdminDashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,

  },
  {
    path: '/AdminUserList',
    name: 'AdminUserList',
    component: AdminUserList,

  },
  {
    path: '/AdminQuizCreate',
    name: 'AdminQuizCreate',
    component: AdminQuizCreate,

  },
  {
    path: '/Quiz/:ID',
    name: 'Quiz',
    component: Quiz,
    props: true
  },
  {
    path: '/QuizEdit/:quizID',
    name: 'QuizEdit',
    component: QuizEdit,
    props: true,
 
  },
  {
    path: '/UserEdit/:email',
    name: 'User',
    component: User,
    props: true,

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
