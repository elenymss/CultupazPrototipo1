import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/psicologo',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/dashboard-admin/InicioAdmin.vue')
  },
  {
    path: '/admin/aprendices',
    name: 'aprendices',
    component: () => import('../views/dashboard-admin/AprendicesAdmin.vue')
  },
  {
    path: '/admin/administradores',
    name: 'administradores',
    component: () => import('../views/dashboard-admin/AdministradoresAdmin.vue')
  },
  {
    path: '/admin/artesanias',
    name: 'artesanias',
    component: () => import('../views/dashboard-admin/ArtesaniasAdmin.vue')
  },
  {
    path: '/admin/psicologos',
    name: 'psicologos',
    component: () => import('../views/dashboard-admin/PsicologosAdmin.vue')
  },
  {
    path: '/admin/registroPsicologo',
    name: 'registroPsicologs',
    component: () => import('../views/dashboard-admin/RegistroPsicologo.vue')
  },
  {
    path: '/admin/perfil',
    name: 'perfil',
    component: () => import('../views/dashboard-admin/PerfilAdmin.vue')

  },
  // login -registro
  {
    path: '/inicioSesion',
    name: 'inicioSesion',
    component: () => import('../views/Registro-Inicio/InicioSesion.vue')

  },
  {
    path: '/registroAprendiz',
    name: 'registroAprendiz',
    component: () => import('../views/Registro-Inicio/RegistroAprendiz.vue')

  },
    // Rutas-aprendiz
  {
    path: '/aprendiz',
    name: 'aprendiz',
    component: () => import('../views/aprendiz/InicioView.vue')

  },

  {
    path: '/aprendiz-juegos',
    name: 'aprendiz-juegos',
    component: () => import('../views/aprendiz/JuegosAprendiz.vue')

  },
  {
    path: '/Aprendiz-muro-virtual',
    name: 'Aprendiz-muro-virtual',
    component: () => import('../views/aprendiz/MuroVirtual.vue')

  },
  {
    path: '/Aprendiz-Psicologia',
    name: 'Aprendiz-Psicologia',
    component: () => import('../views/aprendiz/PsicologoAprendiz.vue')

  },{
    path: '/Aprendiz-artesanias',
    name: 'Aprendiz-artesanias',
    component: () => import('../views/aprendiz/ArtesaniasAprendiz.vue')

  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router



