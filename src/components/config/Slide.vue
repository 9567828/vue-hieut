<template>
  <Swiper v-bind="swiperOptions" :modules="modules">
    <slot name="swiper-slide"></slot>
  </Swiper>
</template>

<script>
import { Swiper } from "vue-awesome-swiper";
import { Navigation, Pagination, Autoplay, EffectFade, FreeMode } from "swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "SlideComponent",
  components: { Swiper },
  props: {
    swiperOptions: {
      type: Object,
    },
  },
  data() {
    return {
      modules: [Pagination, Navigation, Autoplay, EffectFade, FreeMode],
    };
  },
};
</script>

<style lang="scss" scoped></style>
