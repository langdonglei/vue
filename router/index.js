import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

VueRouter.beforeEach((to, from, next) => {
    if (to.path.startsWith('/login')) {
        window.localStorage.removeItem('user_token');
        window.localStorage.removeItem('store');
        store.commit('clean');
        next()
    } else {
        let user = window.localStorage.getItem('user_token');
        if (!user) {
            if (to.path.startsWith('/register') || to.path.startsWith('/forget')) {
                next()
            } else {
                next({
                    path: '/login'
                })
            }
        } else {
            next()
        }
    }
});


const index = new VueRouter({
    mode: "history",
    routes: [
        {path: "", redirect: "/home"},
        {path: "/home", component: () => import('../views/home.vue')},
        {
            path: "/auth", component: () => import('../views/auth.vue'), children: [
                {path: '', redirect: 'login'},
                {path: 'login', component: () => import('../components/login/index.vue')},
                {path: 'register', component: () => import('../components/register/index')},
            ]
        },
        {path: "/admin", component: () => import('../views/admin.vue')},
    ]
});

export default index;