import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },

        // rutas de modulos
        {
            path: '/solicitudes',
            name: 'solicitudes',
            component: () => import('@/views/solicitudes/Solicitud.vue')
        },
        {
            path: '/actas',
            name: 'actas',
            component: () => import('@/views/actas/Actas.vue')
        },
        {
            path: '/actas/crear',
            name: 'crear_actas',
            component: () => import('@/views/actas/CrearActas.vue')
        },
        {
            path: '/sesiones',
            name: 'sesiones',
            component: () => import('@/views/sesiones/Sesion.vue')
        },
        {
            path: '/sesiones/crear',
            name: 'crear_sesiones',
            component: () => import('@/views/sesiones/CrearSesion.vue')
        },        
        {
            path: '/invitados',
            name: 'invitados',
            component: () => import('@/views/invitados/Invitados.vue')
        },
        {
            path: '/invitados/crear',
            name: 'crear_invitados',
            component: () => import('@/views/invitados/CrearInvitados.vue')
        }
    ]
})

export default router