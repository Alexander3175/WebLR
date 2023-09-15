
import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../components/MainIndex.vue'
import lrOne from '../components/lrOne.vue'
import lrtwo from '../components/lrtwo.vue'
import lrtree from '../components/lrtree.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/lrOne/:id',
            component: lrOne
        },
        {
            path: '/lrTwo/:id',
            component: lrtwo
        },
        {
            path: '/lrtree/:id',
            component: lrtree
        }
    ]
})
export default router;