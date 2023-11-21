import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/restaurant-marketing",
    name: "RestaurantMarketing",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RestaurantMarketing.vue")
  },
  {
    path: "/restaurant-mobile-web-apps",
    name: "Restaurant-Mobile-Web-Apps",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Restaurant-Mobile-Web-Apps.vue"
      )
  },
  {
    path: "/restaurant-faq",
    name: "Faq",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Faq.vue")
  },
  {
    path: "/restaurant-support",
    name: "Support",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Support.vue")
  },
  {
    path: "/restaurant-pricing",
    name: "RestaurantPricing",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Restaurant-Pricing.vue")
  },
  {
    path: "/how-it-works",
    name: "Restaurant-How",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Restaurant-How.vue")
  },
  {
    path: "/get-started",
    target: "_blank",
    name: "startri",
    meta: { requiresAuth: true },
    beforeEnter() {
      location.href = "https://calendly.com/netstudios/netsitesonline";
    }
  },
  {
    path: "/get-started2",
    target: "_blank",
    name: "startri",
    meta: { requiresAuth: true },
    beforeEnter() {
      location.href = "https://calendly.com/netstudios/netsitesonline";
    }
  },
  {
    path: "/ticket",
    target: "_blank",
    beforeEnter() {
      location.href = "/restaurant-mobile-web-apps";
    }
  },
  {
    path: "/greenville-sc-italian-restaurant",
    target: "_blank",
    beforeEnter() {
      location.href = "#";
    }
  },
  {
    path: "/self",
    target: "_blank",
    beforeEnter() {
      location.href = "https://calendly.com/netstudios/netsitesonline";
    }
  },
  {
    path: "/full",
    target: "_blank",
    beforeEnter() {
      location.href = "https://calendly.com/netstudios/netsitesonline";
    }
  },
  {
    path: "/videos",
    target: "_blank",
    beforeEnter() {
      location.href = "https://nearme.restaurantimage.com/tag/restaurant-pos";
    }
  },
  {
    path: "/insiders",
    target: "_blank",
    name: "insiders",
    meta: { requiresAuth: true },
    beforeEnter() {
      location.href = "https://nearme.restaurantimage.com";
    }
  },
  {
    path: "/get-started",
    target: "_blank",
    name: "startri",
    meta: { requiresAuth: true },
    beforeEnter() {
      location.href = "https://calendly.com/netstudios/netsitesonline";
    }
  },
  {
    path: "/license",
    target: "_blank",
    beforeEnter() {
      location.href =
        "https://www.yumapos.com/restaurant-pos/software-licensing/";
    }
  },
  {
    path: "/terms",
    target: "_blank",
    beforeEnter() {
      location.href = "https://www.yumapos.com/restaurant-pos/terms-2/";
    }
  },
  {
    path: "/privacy",
    target: "_blank",
    beforeEnter() {
      location.href = "https://www.yumapos.com/restaurant-pos/privacy/";
    }
  },
  {
    path: "/ticket",
    target: "_blank",
    beforeEnter() {
      location.href = "https://calendly.com/netstudios/netsitesonline";
    }
  },
  {
    path: "/ticket",
    target: "_blank",
    beforeEnter() {
      location.href = "https://calendly.com/netstudios/netsitesonline";
    }
  },
  {
    path: "/consult",
    target: "_blank",
    beforeEnter() {
      location.href =
        "https://calendly.com/netstudios/netsitesonline";
    }
  },
  {
    path: "/brochure",
    target: "_blank",
    beforeEnter() {
      location.href =
        "https://indd.adobe.com/view/ed30c5bd-e43b-4b90-906e-67ce39610d38";
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
