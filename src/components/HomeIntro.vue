<template>
  <section class="inner">
    <div class="about_menu">
      <ul class="menu_list">
        <li @click="menuOn('app')" :class="{ active: isAppOn }">application</li>
        <li @click="menuOn('story')" :class="{ active: isStroyOn }">our story</li>
        <li @click="menuOn('intro')" :class="{ active: isIntroOn }">introduction</li>
      </ul>
      <div class="info_wrap">
        <div v-show="isAppOn" ref="app" class="content">
          <div class="tit_wrap">
            <h1>가치를 알아보는 당신의 공간의 격을 올리다</h1>
          </div>
          <div class="box">
            <div class="img_wrap">
              <img src="img/banner3.png" alt="img3" />
            </div>
            <div class="txt_wrap">
              <h1>
                욕실만, 주방만, 거실 아트월만,<br />
                예쁜 자재구매와 시공신청을 간편하게
              </h1>
              <p class="sub_tit">
                왜 예쁘고 다양한 자재는 왜 다 수입해야 할까요?<br />
                <br />
                국내작가들이 제작한 다양한 자재들을<br />
                구매/시공/설치까지 쉽고 간편하게 이용해보세요
              </p>
              <div class="img_box">
                <a href="#" @click.prevent="moveTopage"><img src="img/google-play.svg" alt="google" /></a>
                <a href="#" @click.prevent="moveTopage"><img src="img/app-store-icon.svg" alt="apple" /></a>
              </div>
            </div>
          </div>
        </div>
        <div v-show="isStroyOn" ref="story" class="content">
          <div class="tit_wrap">
            <h1>내가 하고싶은 인테리어 <span class="tit">hieut</span> 이 꿈을 이루어 드리겠습니다.</h1>
          </div>
          <div class="box">
            <div class="img_wrap">
              <img src="img/banner2.png" alt="img2" />
            </div>
            <div class="txt_wrap">
              <h1>
                필요한 부분만 고치고 싶은데...<br />
                셀프는 비전문가라 무서워...
              </h1>
              <p class="sub_tit">
                셀프/부분/올수리 리모델링이까지<br />
                히읕과 함께라면 정말 간편해질꺼에요<br />
                <br />
                시공데이터 분석을 통한 체계적인 올수리진단과<br />
                시공으로 인테리어 시공시 문제발생에<br />
                저희 시공팀은 빠른대처와 a/s가 가능합니다.
              </p>
              <router-link to="" class="btn">view more</router-link>
            </div>
          </div>
        </div>
        <div v-show="isIntroOn" ref="intro" class="content">
          <div class="tit_wrap">
            <h1>올수리부터 리모델링까지 <span class="tit">hieut</span> 이 함께하겠습니다.</h1>
          </div>
          <div class="box">
            <div class="img_wrap">
              <img src="img/banner1.png" alt="img1" class="con_img c1" />
            </div>
            <div class="txt_wrap">
              <h1>
                큰 비용 들인 인테리어<br />
                이번엔 수리가 또 문제야?
              </h1>
              <p class="sub_tit">
                올수리부터 리모델링 시공까지<br />
                발품팔 필요없이 한번에 할 수 있도록,<br />
                좀 더 합리적비용과 함께 a/s 보장되는<br />
                인테리어 생태계를 히읕이 앞장서겠습니다.
              </p>
              <router-link to="" class="btn">contact us</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";

const isAppOn = ref(true);
const isStroyOn = ref(false);
const isIntroOn = ref(false);

const menuOn = (menu) => {
  // 초기화
  isAppOn.value = false;
  isStroyOn.value = false;
  isIntroOn.value = false;

  console.log(menu);

  // 클릭된 메뉴 활성화
  if (menu === "app") {
    isAppOn.value = true;
  } else if (menu === "story") {
    isStroyOn.value = true;
  } else if (menu === "intro") {
    isIntroOn.value = true;
  }
};

const moveTopage = () => {
  router.push("/error");
};
</script>

<style lang="scss" scoped>
.inner {
  margin: 169px auto 0;
}
.about_menu {
  display: grid;
  grid-template-columns: 200px auto;
  align-items: center;
  gap: 20px;
  .menu_list {
    li {
      height: 50px;
      padding-left: 20px;
      border: none;
      border-left: 2px solid #dbdbdb;
      text-align: left;
      font-size: 32px;
      text-transform: capitalize;
      line-height: 50px;
      color: #a2a0a0;
      cursor: pointer;
    }
    li.active {
      color: #f24822;
      border-left: 4px solid #f24822;
    }
  }
}
.tit_wrap {
  position: relative;
  text-align: center;
  margin-bottom: 154px;
  h1 {
    color: $main-black;
    font-size: 36px;
    font-weight: 700;
    span {
      color: #f24822;
      line-height: 3rem;
      text-transform: uppercase;
    }
  }
  &::after {
    position: absolute;
    content: "";
    top: 105px;
    left: 47%;
    width: 96px;
    height: 6px;
    background-color: $main-gray;
  }
}

.box {
  display: flex;
  gap: 20px;
  img:not(.img_box img) {
    width: 744px;
    height: 457px;
  }
}

.txt_wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 130%;
    color: #414141;
  }
  .sub_tit {
    font-size: 18px;
    line-height: 130%;
  }
  .btn {
    padding-left: 20px;
    font-size: 20px;
    font-weight: 700;
    text-transform: capitalize;
    color: #656565;
    background-color: #fff;
  }
}

.img_box {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    width: 170px;
    height: 60px;
  }
}
</style>
