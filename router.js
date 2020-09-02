import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {path: "", redirect: "/home"},
        {path: "/home", component: () => import('../views/home.vue')},
        {path: "/auth", component: () => import('../views/auth.vue'), children: [
            {path: '', redirect: 'login'},
            {path: 'login', component: () => import('../components/login/index.vue')},
            {path: 'register', component: () => import('../components/register/index')},
        ]},
        {path: "/admin", component: () => import('../views/admin.vue')},
    ]
});
