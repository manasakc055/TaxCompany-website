import { createApp } from 'vue'
//import App from './App.vue/'
// import { useRoute } from 'vue-router'
// import {Router} from "vue-router"
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
// import AppHeader from '../components/Layouts/AppHeader.vue'
import AppHome from '../components/Layouts/AppHome.vue'
// import AppAbout from '../components/Layouts/AppAbout.vue'
// import AppServices from '../components/Layouts/AppServices.vue'
// import AppSubservice from '../components/Layouts/AppSubservice.vue'
// import AppContact from '../components/Layouts/AppContact.vue'

// Vue.use(Router)

// const router = new Router({
//     routes:[
//         {
//             path: "/home",
//             name: "AppHome",
//             component:AppHome
//         },
//         {
//             path: "/about",
//             name: "AppAbout",
//             component:AppAbout
//         },
//         {
//             path: "/services",
//             name: "AppServices",
//             component:AppServices
//         },
//         {
//             path: "/sub",
//             name: "AppSubservice",
//             component:AppSubservice
//         },
//         {
//             path: "/contact",
//             name: "AppContact",
//             component:AppContact
//         },


//     ]
// })

const routes = [
    {
        path: "/",
        component: AppHome
    },
    {
        path: "/about",
        name: "AppAbout",
        component: ()=> import(/*webpackChunkName:mmmt*/ "../components/Layouts/AppAbout.vue"),
    },
    {
        path: "/service",
        component: ()=> import("../components/Layouts/AppServices.vue"),

    },
    {
        path: "/sub",
        component: ()=> import("../components/Layouts/AppSubservice.vue"),
       
    },
    {
        path: "/sub/:id",
        component: ()=> import("../components/Layouts/info.vue"),
       
    },
    {
        path: "/contact",
        component: ()=> import("../components/Layouts/AppContact.vue"),

    },
    {
        path: "/",
        component: ()=> import("../components/Layouts/AppContact.vue"),

    },


]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router