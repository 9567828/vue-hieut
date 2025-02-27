<template>
  <Header />
  <router-view class="container"></router-view>
  <Footer />
</template>

<script>
import Header from "./components/common/HeaderMain.vue";
import Footer from "./components/common/Footer.vue";

export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style lang="scss" scoped></style>
