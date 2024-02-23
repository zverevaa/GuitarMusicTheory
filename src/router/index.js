import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'GuitarView',
            component: () => import('../views/GuitarView.vue')
        },
        {
            path: '/eartrainer',
            name: 'EarTrainerView',
            component: () => import('../views/EarTrainerView.vue')
        }
    ]
})

export default router
