import { createRouter, createWebHashHistory } from "vue-router";
import Layout from '@/layout/index.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Layout,
        redirect: '/app/user',
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import("@/views/login/index.vue")
            },
            {
                path: "404",
                name: "NotFound",
                component: () => import("@/views/404.vue")
            },
            {
                path: "personal",
                name: "Personal",
                meta: {
                    requireAuth: true
                },
                component: () => import("@/views/personal/index.vue"),
                children: [
                    {
                        path: 'message',
                        name: "PersonalMessage",
                        meta: {
                            requireAuth: true
                        },
                        component: () => import("@/views/personal/Message.vue")
                    }
                ]
            },
            {
                path: "app",
                name: "App",
                meta: {
                    requireAuth: true
                },
                component: () => import("@/views/app/index.vue"),
                children: [
                    {
                        path: 'user',
                        name: "AppUser",
                        meta: {
                            requireAuth: true
                        },
                        component: () => import("@/views/app/User.vue")
                    },
                    {
                        path: 'dept',
                        name: "AppDept",
                        meta: {
                            requireAuth: true
                        },
                        component: () => import("@/views/app/Dept.vue")
                    },
                    {
                        path: 'role',
                        name: "AppRole",
                        meta: {
                            requireAuth: true
                        },
                        component: () => import("@/views/app/Role.vue")
                    },
                    {
                        path: 'resource',
                        name: "AppResource",
                        meta: {
                            requireAuth: true
                        },
                        component: () => import("@/views/app/Resource.vue")
                    }
                ]
            },
            {
                path: "sys",
                name: "Sys",
                meta: {
                    requireAuth: true
                },
                component: () => import("@/views/sys/index.vue"),
                children: [
                    {
                        path: 'user',
                        name: "SysUser",
                        meta: {
                            requireAuth: true
                        },
                        component: () => import("@/views/sys/User.vue")
                    },
                    {
                        path: 'notice',
                        name: "SysNotice",
                        meta: {
                            requireAuth: true
                        },
                        component: () => import("@/views/sys/Notice.vue")
                    }
                ]
            },
            {
                path: "logs",
                name: "Logs",
                meta: {
                    requireAuth: true
                },
                component: () => import("@/views/logs/index.vue"),
                children: [
                    {
                        path: 'visit',
                        name: "LogsVisit",
                        meta: {
                            requireAuth: true
                        },
                        component: () => import("@/views/logs/Visit.vue")
                    },
                    {
                        path: 'operation',
                        name: "LogsOperation",
                        meta: {
                            requireAuth: true
                        },
                        component: () => import("@/views/logs/Operation.vue")
                    }
                ]
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        redirect: '/404',
        component: () => import("@/views/404.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL || '/'),
    routes
})

router.beforeEach((to) => {
    const token = localStorage.getItem("pm_token");
    if (to.meta.requireAuth && !token) {
        return { name: 'Login' };
    }
    return true;
});

export default router