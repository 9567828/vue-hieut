<script setup>
import { onMounted, ref } from "vue";
const isMenuOn = ref(false);
const head = ref(null);
const scrollY = ref(0);
const lastScroll = ref(0);
const headerHeight = ref(0);
const isScrollDown = ref(false);

const updateScroll = () => {
  scrollY.value = window.scrollY;
  if (scrollY.value >= headerHeight.value) {
    if (scrollY.value > lastScroll.value && lastScroll.value > 0) {
      isScrollDown.value = true;
    } else {
      isScrollDown.value = false;
    }
  }
  lastScroll.value = scrollY.value;
};

onMounted(() => {
  headerHeight.value = head.value.offsetHeight;
  window.addEventListener("scroll", updateScroll);
});
</script>

<template>
  <header ref="head" :class="['header', { scrolling: isScrollDown }]">
    <div class="head-inner">
      <router-link to="/" class="logo">
        <img src="/img/hieut.svg" alt="로고" />
      </router-link>
      <nav>
        <ul>
          <li>
            <router-link to="/" active-class="active">home</router-link>
          </li>
          <li @mouseenter="isMenuOn = true" @mouseleave="isMenuOn = false">
            <router-link to="/about" active-class="active">about us</router-link>
            <ul v-if="isMenuOn" class="sub_menu">
              <li><router-link to="/about">회사소개</router-link></li>
              <li><router-link to="/about/story">our story</router-link></li>
              <li><router-link to="/about/app">App</router-link></li>
            </ul>
          </li>
          <li>
            <router-link to="/contact" active-class="active">contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header.header {
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease-in-out; /* transform에 transition을 추가 */
  z-index: 20;
}

.head-inner {
  width: initial;
  @include flex-style(null, space-between, center, null);
  height: 100%;
  margin: 0 240px;
}

:global(header.header.scrolling) {
  transform: translateY(-100%);
}

.logo {
  img {
    width: 123px;
    height: 54px;
  }
}
nav {
  ul {
    @include flex-style(null, space-between, center, 55px);
    li {
      position: relative;
      padding: 40px 0;
      a {
        font-size: 20px;
        text-transform: capitalize;
      }
    }
  }
  .sub_menu {
    position: absolute;
    top: 75px;
    width: 100px;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid rgba(109, 109, 109, 0.137);
    li {
      padding: 0;
      a {
        font-size: 16px;
        &:hover {
          color: $main-color;
          font-weight: 600;
        }
      }
    }
  }
}

nav li:hover a:not(.sub_menu a),
a.active {
  font-weight: 600;
  color: $main-color;
}
</style>
