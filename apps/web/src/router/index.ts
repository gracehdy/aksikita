import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login.vue'

const routes = [
  {   path: '/',
    name: 'Login',
    component : Login
  },
  {   path: '/forgotPassword',
    name: 'forgotPassword',
    component : () => import('../views/forgotPassword.vue')
  },
  {
    path: '/resetPassword',
    name: 'resetPassword',
    component : () => import('../views/resetPassword.vue')  
  },
  {
    path: '/registrasi',
    name: 'registrasi',
    component : () => import('../views/registrasi.vue') 
  },
  {
    path: '/home',
    name: 'home',
    component : () => import('../views/home.vue') 
  },
  {
    path: '/profile',
    name: 'profile',
    component : () => import('../views/profile.vue') 
  },
  {
    path: '/komunitas',
    name: 'komunitas',
    component : () => import('../views/komunitas.vue') 
  },
  {
    path: '/buatLaporan',
    name: 'buatLaporan',
    component : () => import('../views/buatLaporan.vue')
  },
  {
    path: '/detailLaporan/:id',
    name: 'detailLaporan',
    component : () => import('../views/detailLaporan.vue') 
  }, 
  {
    path: '/daftarRelawan', 
    name: 'daftarRelawan',
    component : () => import('../views/daftarRelawan.vue')
  },
  {
  path: '/detailAksi/:id',
  name: 'detailAksi', 
  component: () => import('../views/detailAksi.vue')
  }
  

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router