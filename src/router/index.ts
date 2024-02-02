const router = createRouter({
    history: createWebHistory('/game-develop-template'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Game/Home.vue')
        }
    ]
})

export default router
