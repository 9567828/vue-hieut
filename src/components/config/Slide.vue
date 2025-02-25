<template>
  <Swiper :options="swiperOptions" class="swiper-wrapper">
    <slot name="swiper-slide"></slot>
    <div v-if="pagination" class="swiper-pagination"></div>
    <div v-if="navigation" class="swiper-button-prev"></div>
    <div v-if="navigation" class="swiper-button-next"></div>
  </Swiper>
</template>

<script>
import { Swiper } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "SlideComponent",
  components: { Swiper },
  props: {
    pagination: {
      type: Boolean,
      default: false,
    },
    navigation: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  height: 100vh;
}
</style>
