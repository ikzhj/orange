import {createRouter, createWebHistory} from "vue-router";

const routes: any = [
    {
        path: '/',
        name: '首页',
        components: {
            default: () => import('@/views/home/index.vue'),
            video: () => import('@/components/VideoBackground.vue'),
        }
    }, {
        path: '/portfolios',
        name: '作品集',
        components: {
            default: () => import('@/views/portfolios/index.vue'),
        }
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