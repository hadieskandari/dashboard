import { createWebHistory, createRouter, RouterOptions } from "vue-router";


//layout
import MainLayout from "@/layout/index.vue"
import DriverLayout from "@/layout/driverLayout.vue"
// pages
import Insight from "@/pages/insight.vue"
import Loads from "@/pages/loads/index.vue"
import Drivers from "@/pages/drivers.vue"
import Users from "@/pages/users.vue"
import LoadId from "@/pages/loads/id.vue"
import DriversLanding from "@/pages/driverLanding.vue"

const routes: any = [
    {
        path: "/",
        component: Insight,
        meta: { transition: 'fade', layout: MainLayout, },
    },
    {
        path: "/loads",
        component: Loads,
        name: "loads",
        meta: { transition: 'fade', layout: MainLayout },
    },
    {
        path: '/loads/:id',
        component: LoadId,
        name: "loads-id",
        meta: { transition: 'fade', layout: MainLayout },
        props: true
    },
    {
        path: "/drivers",
        component: Drivers,
        meta: { transition: 'fade', layout: MainLayout },
    },
    {
        path: "/users",
        component: Users,
        meta: { transition: 'fade', layout: MainLayout },
    },
    {
        path: "/landing",
        component: DriversLanding,
        meta: { transition: 'fade', layout: DriverLayout },
    },
]

export default createRouter({
    history: createWebHistory(),
    routes,
});
