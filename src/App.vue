<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";

export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style lang="scss" scoped></style>
