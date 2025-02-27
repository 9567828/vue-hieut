import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import AboutPage from "@/components/AboutPage.vue";
import ContactPage from "@/components/ContactPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: AboutPage },
  { path: "/contact", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
