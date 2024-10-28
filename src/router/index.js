import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Projects from "@/views/Projects.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { transition: "slide-right" },
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: { transition: "slide-left" },
  },
  // Catch all 404 - define a 404 page component if you want to show a custom 404 page
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
