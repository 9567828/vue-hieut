import { createWebHashHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import NotFound from "@/pages/NotFound.vue";
import StoryPage from "@/pages/about/StoryPage.vue";
import AppPage from "@/pages/about/AppPage.vue";

const routes = [
  { path: "/", component: HomePage },
  {
    path: "/about",
    // 컴포넌트를 설정하지 않으면 중첩없이 사용할 수 있음
    children: [
      { path: "", component: AboutPage },
      { path: "story", component: StoryPage },
      { path: "app", component: AppPage },
    ],
  },
  { path: "/contact", component: ContactPage },
  { path: "/:pathMatch(.*)*", component: NotFound },
  { path: "/error", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
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
