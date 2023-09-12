import {createRouter, createWebHistory} from "vue-router";

const routes: any = [
    {path: '/', redirect: '/welcome'},
    {
        path: '/welcome',
        name: '欢迎',
        components: {
            default: () => import('@/components/VideoBackground.vue'),
        }
    }, {
        path: '/home',
        name: '首页',
        components: {
            default: () => import('@/views/home/index.vue'),
        },
        children: [
            {
                path: '',
                components: {
                    default: () => import('@/views/portfolios/index.vue'),
                }
            },
        ]
    }, {
        path: '/knowledge',
        name: '知识库',
        components: {
            default: () => import('@/views/knowledge-base/index.vue'),
        }
    }, {
        path: '/about-me',
        name: '关于我',
        components: {
            default: () => import('@/views/about-me/index.vue'),
        }
    }
]
const router = createRouter({
    history: createWebHistory(),  // 指定路由模式
    routes
});
export default router;