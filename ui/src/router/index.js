import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
import ContactView from '../views/ContactView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'
import CreateResourceView from '../views/CreateResourceView.vue'
import CreateUserView from '../views/CreateUserView.vue'
import TestView from '../views/TestView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/main',
    name: 'main',
    component: MainView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/create-resource',
    name: 'create-resource',
    component: CreateResourceView
  },
  {
    path: '/create-user',
    name: 'create-user',
    component: CreateUserView
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
