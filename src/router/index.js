import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/layout/LayoutView.vue"),
    children: [
      {
        path: "/",
        name: "HomeView",
        component: () => import("@/views/HomeView.vue"),
        meta: {
          title: 'Home Page - Example App',
        }
      },
      {
        path: "/tiket",
        name: "TiketView",
        component: () => import("@/views/pages/TicketView.vue"),
    },
    ],
  },
  {
    path: "/",
    component: () => import("@/views/layout/LayoutBlank.vue"),
    children: [
	{
		path: "*",
		name: "404",
		component: () => import("@/views/pages/Error/404.vue"),
	},
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});


export default router;
