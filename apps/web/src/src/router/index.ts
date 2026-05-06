import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const routes = [
  {   path: '/',
    name: 'Login',
    component : Login
  },
  {   path: '/ForgotPassword',
    name: 'ForgotPassword',
    component : () => import('../views/ForgotPassword.vue')
  },
  {
    path: '/ResetPassword',
    name: 'ResetPassword',
    component : () => import('../views/ResetPassword.vue')  
  },
  {
    path: '/Registrasi',
    name: 'Registrasi',
    component : () => import('../views/Registrasi.vue') 
  },
  {
    path: '/Home',
    name: 'Home',
    component : () => import('../views/Home.vue') 
  } 

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router