import { createWebHistory, createRouter } from "vue-router";
import { nextTick } from "vue";
import Home from "@/components/Home.vue";
import AboutPage from "@/components/AboutPage.vue";
import ContactPage from "@/components/ContactPage.vue";
import NotFound from "@/components/NotFound.vue";
import StoryPage from "@/components/about/StoryPage.vue";
import AppPage from "@/components/about/AppPage.vue";

const routes = [
  { path: "/", component: Home },
  {
    path: "/about",
    // component: AboutPage, 컴포넌트를 설정하지 않으면 중첩없이 사용할 수 있음
    children: [
      { path: "", component: AboutPage },
      { path: "story", component: StoryPage },
      { path: "app", component: AppPage },
    ],
  },
  // { path: "/about/story", component: StoryPage },
  // { path: "/about/app", component: AppPage },
  { path: "/contact", component: ContactPage },
  { path: "/:pathMatch(.*)*", component: NotFound },
  { path: "/error", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach(() => {
  window.scrollTo(0, 0);
  const isScroll = document.querySelector(".scrolling");
  if (!isScroll) {
    return;
  } else {
    isScroll.classList.remove("scrolling");
  }
});

router.beforeEach((to, from, next) => {
  const isValidRoute = router.getRoutes().some((route) => route.path === to.path);

  if (!isValidRoute) {
    next("/error"); // 유효하지 않으면 '/error'로 리다이렉트
  } else {
    next(); // 유효한 경로이면 정상 처리
  }
});

export default router;
