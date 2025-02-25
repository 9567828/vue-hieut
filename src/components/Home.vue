<template>
  <div>
    <SlideComponent :swiper-options="swiperOptions" class="swiper">
      <template v-slot:swiper-slide>
        <SwiperSlide v-for="slide in slides" :key="slide.id" :class="['slide', slide.class]">
          <div class="inner">
            <div class="tit-wrap">
              <h1 class="tit">hieut</h1>
              <p class="sub-tit">
                프리미엄 아티스트 인테리어 플랫폼<br />
                더 이상 예쁜 인테리어만 하지 마세요<br />
                가치있는 작품으로 공간의 격을 올려보세요
              </p>
              <button class="about-btn">about us</button>
            </div>
          </div>
        </SwiperSlide>
      </template>
    </SlideComponent>
    <HomeIntro />
  </div>
</template>

<script>
import SlideComponent from "./config/Slide.vue";
import HomeIntro from "./HomeIntro.vue";
import { SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "HomeCompo",
  components: { SlideComponent, SwiperSlide, HomeIntro },
  data() {
    return {
      swiperOptions: {
        // loop: true,
        effect: "fade",
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },
      },

      slides: [
        { id: 1, class: "c1" },
        // { id: 2, class: "c2" },
        // { id: 3, class: "c3" },
      ],
    };
  },
};
</script>

<style lang="scss">
.container {
  width: initial;
}

.swiper {
  height: 100vh;
  .slide {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .c1 {
    background-image: url(/public/img/banner_main1.png);
  }
  .c2 {
    background-image: url(/public/img/banner_main2.jpg);
  }
  .c3 {
    background-image: url(/public/img/banner_main3.jpg);
  }
}

.tit-wrap {
  margin: 450px 240px 0;
  .tit {
    font-size: 70px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: 400;
    font-family: "Abril Fatface", serif;
    text-transform: uppercase;
  }
  .sub-tit {
    color: #fff;
    letter-spacing: -0.264px;
    line-height: 150%;
    font-size: 26px;
    font-weight: 400;
  }
  .about-btn {
    width: 150px;
    height: 58px;
    border-radius: 40px;
    background-color: #000;
    color: #fff;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    margin-top: 50px;
  }
}
</style>
