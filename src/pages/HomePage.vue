<script setup>
import SlideComponent from "../components/config/Slide.vue";
import HomeIntro from "../components/HomeIntro.vue";
import { SwiperSlide } from "vue-awesome-swiper";
import CustomMove from "../common/CutomMove";

const { moveToPage } = CustomMove();

const heroSlideOption = {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
};
const heroSlides = [
  { id: 1, class: "c1" },
  { id: 2, class: "c2" },
  { id: 3, class: "c3" },
];
const introSlideOptions = {
  loop: true,
  navigation: true,
};
const projectSlides = [
  {
    id: 1,
    img: "/img/project/1.png",
    title: "_북한산래미안아파트",
    desc: "매트한 질감에 입자가 느껴지는 세라믹 타일로 무디한 느낌을 살리면서 졸리컷으로 시공해 호텔과 같은 욕실의 분위기로 꾸몄습니다.",
  },
  {
    id: 2,
    img: "/img/project/2.png",
    title: "_은평 래미안아파트",
    desc: "전체적으로 크리미한 컬러감과 멜란지 타일의 글로시한 느낌을 포인트로 살려 자연스러운 멋과 세련됨을 보여주었습니다.",
  },
  {
    id: 3,
    img: "/img/project/3.png",
    title: "_북한산래미안아파트",
    desc: "전체적으로 크리미한 컬러감과 멜란지 타일의 글로시한 느낌을 포인트로 살려 자연스러운 멋과 세련됨을 보여주었습니다.",
  },
  {
    id: 4,
    img: "/img/project/4.png",
    title: "_상봉 도예공방",
    desc: "도예 특성상 먼지가 많이 쌓여 작업할 수 있는 공간과 사무공간을 분리해 사용의 편의성을 높이고 “1”자 형태가 아닌 약간의 사선형태로 공간을 분리해 개방감을 높였습니다.",
  },
  {
    id: 5,
    img: "/img/project/5.png",
    title: "_상봉 도예공방",
    desc: "도예 특성상 먼지가 많이 쌓여 작업할 수 있는 공간과 사무공간을 분리해 사용의 편의성을 높이고 “1”자 형태가 아닌 약간의 사선형태로 공간을 분리해 개방감을 높였습니다.",
  },
  {
    id: 6,
    img: "/img/project/6.png",
    title: "_이화파밀리에 아파트",
    desc: "미팅이 잦아 현관에 신발이 나와 있더라도 정리된 쾌적함이 느껴질 수 있게 신발장 하단의 공간과 매립조명을 설치하여 개방감을 주었습니다.",
  },
  {
    id: 7,
    img: "/img/project/7.png",
    title: "_이화파밀리에 아파트",
    desc: "미팅이 잦아 현관에 신발이 나와 있더라도 정리된 쾌적함이 느껴질 수 있게 신발장 하단의 공간과 매립조명을 설치하여 개방감을 주었습니다.",
  },
  {
    id: 8,
    img: "/img/project/8.png",
    title: "_북한산래미안아파트",
    desc: "cozy한 분위기를 더 하기 위해 천장에 간접조명을 매립해 개방감을 살리고 깔끔한 공간으로 완성했습니다.",
  },
];
</script>

<template>
  <div>
    <SlideComponent :swiper-options="heroSlideOption" class="hero-swiper">
      <template v-slot:swiper-slide>
        <SwiperSlide v-for="slide in heroSlides" :key="slide.id" :class="['hero-slide', slide.class]">
          <div class="inner">
            <div class="tit-wrap">
              <h1 class="tit">hieut</h1>
              <p class="sub-tit">
                프리미엄 아티스트 인테리어 플랫폼<br />
                더 이상 예쁜 인테리어만 하지 마세요<br />
                가치있는 작품으로 공간의 격을 올려보세요
              </p>
              <button @click.prevent="moveToPage('/about')" class="about-btn">about us</button>
            </div>
          </div>
        </SwiperSlide>
      </template>
    </SlideComponent>
    <HomeIntro />
    <section class="project inner">
      <SlideComponent :swiper-options="introSlideOptions">
        <template v-slot:swiper-slide>
          <SwiperSlide v-for="slide in projectSlides" :key="slide.id">
            <div class="slide-wrap">
              <div class="img_wrap">
                <img :src="[slide.img]" :alt="[`img${slide.id}`]" />
              </div>
              <div class="tit_wrap">
                <h1 class="subject">new project</h1>
                <div class="txt_wrap">
                  <span>{{ slide.title }}</span>
                  <p>
                    {{ slide.desc }}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </template>
      </SlideComponent>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: initial;
  padding-top: 0;
}

:deep(.hero-swiper) {
  height: 100vh;
  .hero-slide {
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
  margin-top: 450px;
  .tit {
    font-size: 70px;
    color: #fff;
    margin-bottom: 40px;
  }
  .sub-tit {
    color: #fff;
    letter-spacing: -0.264px;
    line-height: 150%;
    @include font-style(26px, 400);
  }
  .about-btn {
    width: 150px;
    height: 58px;
    border-radius: 40px;
    background-color: #000;
    color: #fff;
    text-transform: uppercase;
    @include font-style(20px, 700);
    margin-top: 50px;
  }
}

// 프로젝트 슬라이드
.project.inner {
  width: initial;
}
.project {
  margin-top: 246px;
  padding: 58px 0;
  background-color: #ededed;
  .slide-wrap {
    @include flex-style(null, center, stretch, 28px);
  }
  .img_wrap {
    width: 823px;
    height: 510px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .tit_wrap {
    width: 420px;
    @include flex-style(column, space-between, center, null);
    color: $main-black;
    .subject {
      padding-top: 50px;
      @include font-style(40px, 700);
      text-transform: uppercase;
    }
    .txt_wrap {
      font-size: 18px;
      span {
        font-weight: 600;
      }
      p {
        margin-top: 5px;
        line-height: 1.2;
      }
    }
  }
}
:deep(.project .swiper-button-next:after),
:deep(.project .swiper-button-prev:after) {
  display: none;
}

:deep(.project .swiper-button-next),
:deep(.project .swiper-button-prev) {
  width: 39px;
  height: 147px;
  background-repeat: no-repeat;
  background-size: contain;
}

:deep(.project .swiper-button-prev) {
  margin-left: 150px;
  background-image: url(/public/img/arrow_left.png);
}
:deep(.project .swiper-button-next) {
  margin-right: 150px;
  background-image: url(/public/img/arrow_right.png);
}
</style>
