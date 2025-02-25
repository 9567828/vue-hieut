<template>
  <Swiper ref="mySwiper" :options="swiperOptions" class="swiper-wrapper">
    <SwiperSlide>슬라이드1</SwiperSlide>
    <SwiperSlide>슬라이드2</SwiperSlide>
    <SwiperSlide>슬라이드3</SwiperSlide>
    <div v-if="pagination" class="swiper-pagination"></div>
    <div v-if="navigation" class="swiper-button-prev"></div>
    <div v-if="navigation" class="swiper-button-next"></div>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "SlideComponent11",
  components: { Swiper, SwiperSlide },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
      },
      pagination: false,
      navigation: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  height: 100vh;
}
</style>
