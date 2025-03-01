<script setup>
import SlideComponent from "./config/Slide.vue";
import { SwiperSlide } from "vue-awesome-swiper";

const slides = [
  {
    id: 1,
    src: [
      { id: 1, path: "/img/aboutus/artist/박장미1.jpeg" },
      { id: 2, path: "/img/aboutus/artist/박장미2.jpeg" },
      { id: 3, path: "/img/aboutus/artist/박장미3.jpeg" },
    ],
    name: "박장미",
    title: "도예작가 (현) jm 1250 ceramic art 대표",
    career: [
      { id: 1, title: "경북 산업디자인 공모전 입선" },
      { id: 2, title: "2014 인천 현대도예 공모전 입선" },
      { id: 3, title: "한양 예술대전 특선", class: true },
      { id: 4, title: "(사) 여류도예가협회 도예 공모전 입선", class: true },
    ],
  },
  {
    id: 2,
    src: [
      { id: 1, path: "/img/aboutus/artist/강주연1.jpeg" },
      { id: 2, path: "/img/aboutus/artist/강주연2.jpeg" },
      { id: 3, path: "/img/aboutus/artist/강주연3.jpeg" },
    ],
    name: "강주연",
    title: "도예작가 (현) 이응세라믹 대표",
    career: [
      { id: 1, title: "홍익대학교 대학원 졸업" },
      { id: 2, title: "2019 franz rising star project award 수상" },
      { id: 3, title: "2019 contemporary ceramic art in aisa 참가" },
      { id: 4, title: "2022 홈테이블데코페어 참가" },
      { id: 5, title: "크래프트서울 참가", class: true },
      { id: 6, title: "2023 트렌드페어 참가" },
    ],
  },
  {
    id: 3,
    src: [
      { id: 1, path: "/img/aboutus/artist/이성민1.jpeg" },
      { id: 2, path: "/img/aboutus/artist/이성민2.jpeg" },
      { id: 3, path: "/img/aboutus/artist/이성민3.jpeg" },
    ],
    name: "이성민",
    title: "도예작가 (현) lsm ceramic studio 대표",
    career: [
      { id: 1, title: "리빙편집브랜드 봉00 콜라보" },
      { id: 2, title: "f&b 브랜드 요000 테이블 웨어 제작" },
      { id: 3, title: "불교전시관 브랜드 비000 오브제 제작" },
      { id: 4, title: "반려동물 유골함 오브제 제작" },
      { id: 5, title: "향수브랜드 뮤0 오브제 제작" },
      { id: 6, title: "카페 심00 테이블 웨어 제작 및 팝업" },
      { id: 7, title: "업사이클 브랜드 제00 오브제 작업 및 실험자문" },
    ],
  },
  {
    id: 4,
    src: [
      { id: 1, path: "/img/aboutus/artist/이한경1.jpeg" },
      { id: 2, path: "/img/aboutus/artist/이한경2.jpeg" },
    ],
    name: "이한경",
    title: "도예작가 (현) hieut ceramic 대표",
    career: [
      { id: 1, title: "커스텀멜로우 공모전 특별상 수상" },
      { id: 2, title: "(주)사쿠라 갤리롤 일러스트공모전 입상" },
      { id: 3, title: "2016 핸드메이드페어 참가" },
      { id: 4, title: "2017 서른 / 홍익아트센터 단체전" },
      { id: 5, title: "2020 시몬느핸드백뮤지엄 디자인 공모전 최우수상" },
    ],
  },
  {
    id: 5,
    src: [
      { id: 1, path: "/img/aboutus/artist/윤지인1.jpeg" },
      { id: 2, path: "/img/aboutus/artist/윤지인2.jpeg" },
      { id: 3, path: "/img/aboutus/artist/윤지인3.jpeg" },
    ],
    name: "윤지인",
    title: "회화작가",
    career: [
      { id: 1, title: "건국대학교 회화과 졸업" },
      { id: 2, title: "2017 갤러리 라메르- 건국대학교 단체전" },
    ],
  },
  {
    id: 6,
    src: [
      { id: 1, path: "/img/aboutus/artist/조유진1.jpeg" },
      { id: 2, path: "/img/aboutus/artist/조유진2.jpeg" },
    ],
    name: "조유진",
    title: "도예작가",
    career: [
      { id: 1, title: "2015 트렌드페어 참가" },
      { id: 2, title: "커스텀 멜로우 공모전 특별상 수상" },
    ],
  },
  {
    id: 7,
    src: [
      { id: 1, path: "/img/aboutus/artist/안소리1.png" },
      { id: 2, path: "/img/aboutus/artist/안소리2.png" },
      { id: 2, path: "/img/aboutus/artist/안소리3.png" },
    ],
    name: "안소리",
    title: "회화작가",
    career: [
      { id: 1, title: "갤러리 라메르 방백 단체전시" },
      { id: 2, title: "춘천마임축제 축전" },
    ],
  },
  {
    id: 8,
    src: [],
    name: "정혜인",
    title: "도예작가 (현) 메이크데일리유즈 대표",
    career: [],
  },
  {
    id: 9,
    src: [],
    name: "신승봉",
    title: "도예작가",
    career: [],
  },
];

const slideOption = {
  loop: true,
  pagination: { clickable: true },
};
</script>

<template>
  <div class="artist-list" v-for="slide in slides" :key="slide.id">
    <div v-if="slide.src.length === 0">
      <img src="/img/aboutus/artist/준비중.png" alt="img" />
    </div>
    <SlideComponent v-else :swiper-options="slideOption">
      <template v-slot:swiper-slide>
        <SwiperSlide class="swiper" v-for="img in slide.src" :key="img.id">
          <img :src="img.path" :alt="'img' + img.id" />
        </SwiperSlide>
      </template>
    </SlideComponent>
    <div class="tit-wrap">
      <h3>
        ARTIST <span>{{ slide.name }}</span>
      </h3>
      <h4>- {{ slide.title }}</h4>
      <div class="career-wrap" v-for="c in slide.career" :key="c.id">
        <p :class="{ indent: c.class }">{{ c.class || slide.career.length === 0 ? "" : "• " }} {{ c.title }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper {
  width: 420px;
  height: 452px;
  img {
    width: 100%;
    height: 100%;
  }
}
::v-deep .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: $main-color;
}

.artist-list {
  text-transform: uppercase;
  .tit-wrap {
    margin-top: 20px;
    h3 {
      span {
        letter-spacing: 5px;
      }
    }
    h3,
    h4 {
      @include font-style(22px, 600);
      padding-bottom: 30px;
    }
    .career-wrap {
      p {
        font-size: 18px;
        text-transform: capitalize;
        line-height: 1.2;
      }
    }
  }
}
.indent {
  text-indent: 54px;
}
</style>
