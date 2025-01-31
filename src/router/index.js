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
      },
      {
        path: "/tiket",
        name: "TiketView",
        component: () => import("@/views/pages/TicketView.vue"),
        meta: {
          title: 'Karavista | Test',
          titleTemplate: '%s | Tiket',
          metaTags: [
            {
              name: 'description',
              content: 'Deskripsi untuk Tiket Karavista'
            },
            {
              property: 'og:description',
              content: 'Deskripsi untuk Tiket Karavista'
            }
          ]
        }
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
