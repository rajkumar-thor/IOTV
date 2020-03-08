import Vue from 'vue'
import Router from 'vue-router'
import home from "@/components/home.vue"
import analytics from "@/components/analytics.vue"
import stock from "@/components/stock.vue"
import machines from "@/components/machines.vue"
import locations from "@/components/locations.vue"
import profile from "@/components/profile.vue"
import four from "@/components/404.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component:home
    },
    {
      path: '/home',
      component:home
    },
    {
      path: '/analytics',
      component:analytics
    },
    {
      path: '/stock',
      component:stock
    },
    {
      path: '/machines',
      component:machines
    },
    {
      path: '/locations',
      component:locations
    },
    {
      path: '/profile',
      component:profile
    },
    {
      path: '*',
      component: four
    }
  ]
})