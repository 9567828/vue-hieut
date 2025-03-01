<script setup>
import SlideComponent from "./config/Slide.vue";
import { SwiperSlide } from "vue-awesome-swiper";

const slidesLtr = [
  { id: 1, src: "/img/contact/interior/은평_북한산래미안 거실11 7.jpeg" },
  { id: 2, src: "img/contact/interior/은평_북한산래미안 주방2_11 7.jpeg" },
  { id: 3, src: "img/contact/interior/은평_북한산래미안 주방3_11 7.jpeg" },
  { id: 4, src: "img/contact/interior/은평_북한산래미안 주방_11 7.jpeg" },
  { id: 5, src: "img/contact/interior/이화파밀리에_현관.jpeg" },
  { id: 6, src: "img/contact/interior/인테리어.jpeg" },
  { id: 7, src: "img/contact/interior/인테리어2.jpeg" },
  { id: 8, src: "img/contact/interior/인테리어3.jpeg" },
  { id: 9, src: "img/contact/interior/인테리어4.jpeg" },
  { id: 10, src: "img/contact/interior/인테리어5.jpeg" },
  { id: 11, src: "img/contact/interior/인테리어6.jpeg" },
  { id: 12, src: "img/contact/interior/인테리어7.jpeg" },
  { id: 13, src: "img/contact/interior/인테리어8.jpeg" },
  { id: 14, src: "img/contact/interior/인테리어9.jpeg" },
  { id: 15, src: "img/contact/interior/인테리어10.jpeg" },
  { id: 16, src: "img/contact/interior/인테리어11.jpeg" },
  { id: 17, src: "img/contact/interior/인테리어12.jpeg" },
  { id: 18, src: "img/contact/interior/인테리어13.jpeg" },
  { id: 19, src: "img/contact/interior/인테리어14.jpeg" },
  { id: 20, src: "img/contact/interior/인테리어15.jpeg" },
];

const slidesRtl = [
  { id: 1, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-21 001.jpeg" },
  { id: 2, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-21 002.jpeg" },
  { id: 3, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-21 003.jpeg" },
  { id: 4, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-21 004.png" },
  { id: 5, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-21 005.jpeg" },
  { id: 6, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-21 006.jpeg" },
  { id: 7, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-21 007.jpeg" },
  { id: 8, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-21 008.jpeg" },
  { id: 9, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-21 009.jpeg" },
  { id: 10, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-22 010.jpeg" },
  { id: 11, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-22 011.jpeg" },
  { id: 12, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-22 012.jpeg" },
  { id: 13, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-22 013.jpeg" },
  { id: 14, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-22 015.jpeg" },
  { id: 15, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-22 020.jpeg" },
  { id: 16, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-22 021.jpeg" },
  { id: 17, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-22 022.jpeg" },
  { id: 18, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-23 023.jpeg" },
  { id: 19, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-23 024.jpeg" },
  { id: 20, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-23 025.jpeg" },
  { id: 21, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-23 026.jpeg" },
  { id: 22, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-23 027.jpeg" },
  { id: 23, src: "img/contact/home_part/KakaoTalk_Photo_2024-01-05-12-21-23 028.jpeg" },
  { id: 24, src: "img/contact/home_part/집수리&부분시공.jpeg" },
  { id: 25, src: "img/contact/home_part/집수리&부분시공2.jpeg" },
  { id: 26, src: "img/contact/home_part/집수리.jpeg" },
];

const slideOption = {
  loop: true,
  speed: 3000,
  slidesPerView: "auto",
  spaceBetween: 20,
  // observer: false,
  // observeParents: true,
  autoplay: {
    delay: 0, //add
    disableOnInteraction: false,
  },
  navigation: true,
};
</script>

<template>
  <div class="con-slide">
    <div class="txt">
      <span>인테리어 & 리모델링</span>
    </div>
    <SlideComponent :swiper-options="slideOption" class="ltr swiper-size">
      <template v-slot:swiper-slide>
        <SwiperSlide v-for="s in slidesLtr" :key="s.id" class="swiper-slide">
          <img :src="s.src" :alt="s.id" />
        </SwiperSlide>
      </template>
    </SlideComponent>
    <div class="txt">
      <span>집수리 & 부분시공</span>
    </div>
    <SlideComponent :swiper-options="slideOption" dir="rtl" class="rtl swiper-size">
      <template v-slot:swiper-slide>
        <SwiperSlide v-for="s in slidesRtl" :key="s.id" class="swiper-slide">
          <img :src="s.src" :alt="s.id" />
        </SwiperSlide>
      </template>
    </SlideComponent>
  </div>
</template>

<style lang="scss" scoped>
.txt {
  span {
    @include font-style(30px, 600);
  }
}

::v-deep .swiper-wrapper {
  transition-timing-function: linear;
}

.swiper-size {
  height: 233px;
}

.swiper-slide {
  width: 311px;
  height: 233px;
  img {
    width: 100%;
    height: 100%;
  }
}

.ltr {
  margin-bottom: 60px;
}

.con-slide {
  :deep(.swiper-button-next::after),
  :deep(.swiper-button-prev::after) {
    display: none;
  }
  .ltr,
  .rtl {
    :deep(.swiper-button-next),
    :deep(.swiper-button-prev),
    :deep(.swiper-button-next),
    :deep(.swiper-button-prev) {
      width: 150px;
      height: 233px;
    }
  }
  .ltr {
    :deep(.swiper-button-next) {
      top: 22px;
      right: 0;
      background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, white 100%);
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, white 100%);
      /* background-color: #000; */
    }
    :deep(.swiper-button-prev) {
      top: 22px;
      left: 0;
      background: -webkit-linear-gradient(left, white 0%, rgba(255, 255, 255, 0) 100%);
      background: linear-gradient(90deg, white 0%, rgba(255, 255, 255, 0) 100%);
      /* background-color: #000; */
    }
  }
  .rtl {
    :deep(.swiper-button-prev) {
      top: 22px;
      right: 0;
      background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, white 100%);
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, white 100%);
      /* background-color: #000; */
    }
    :deep(.swiper-button-next) {
      top: 22px;
      left: 0;
      background: -webkit-linear-gradient(left, white 0%, rgba(255, 255, 255, 0) 100%);
      background: linear-gradient(90deg, white 0%, rgba(255, 255, 255, 0) 100%);
      /* background-color: #000; */
    }
  }
}
</style>
