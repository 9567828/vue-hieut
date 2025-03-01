<script setup></script>

<template>
  <div>
    <section class="app_hero">
      <div class="bg">
        <div class="txt_wrap">
          <h1 class="tit">hieut</h1>
          <div class="sub_wrap">
            <p>
              프리미엄 아티스트 인테리어 플랫폼<br />
              <br />
              내스타일에 맞는 색다른 자재구입부터<br />
              견적 • 수리 • 시공을 한번에 쉽고 간편하게<br />
              공간스타일링 히읕과 함께 하세요
            </p>
            <div class="appdownicon">
              <a href="#"><img src="/img/google-play 1.svg" alt="google" /></a>
              <a href="#"><img src="/img/apple.png" alt="apple" /></a>
            </div>
          </div>
        </div>
        <div class="bg_wrap">
          <img src="/img/aboutus/Apps/Group 11.png" alt="mobile" />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 0;
  margin: 0;
  width: 100%;
}
.app_hero {
  /* overflow-x: hidden; */
}
.bg {
  display: grid;
  grid-template-columns: 1fr 1350px;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: calc(100vh - 130px);
  background: linear-gradient(105deg, #d52525 37.06%, #d600c1 89.35%);
  /* img {
    position: relative;
    width: 1500px;
    top: calc(100vh - 180%);
    left: calc(100vw - 70%);
  } */
  .bg_wrap {
    img {
      width: 100%;
    }
  }
  .appdownicon {
    img {
      width: 185px;
      height: 60px;
    }
  }
}
</style>
