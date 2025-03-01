<script setup>
import CustomMove from "../common/CutomMove.js";

const { moveToPage } = CustomMove();
</script>

<template>
  <div>
    <section class="dep1 inner">
      <img src="/img/aboutus/Hieut/5.png" alt="5" />
      <div class="txt_wrap">
        <div class="title">
          <p>프리미엄 인테리어 리모델링 플랫폼</p>
          <h1 class="tit">h i e u t</h1>
        </div>
        <div class="sub">
          <p>
            'HIEUT' 은 우리집 문제에 기초부터 대응하여 보기에만<br />
            예쁜 인테리어에서 보다 더 나아가 튼튼하고 합리적이며,<br />
            세련된 리모델링 생태계를 위해 고민하고 연구하였습니다.<br />
            <br />
            꾸미고/ 고치고/ 걱정없는 시공을 할 수 있도록,<br />
            좀 더 합리적이고 a/s 보장이 되는 인테리어 생태계를<br />
            위해 히읕이 당신의 믿음직한 파트너가 되어드리겠습니다.
          </p>
        </div>
        <button class="primary" @click.prevent="moveToPage('/error')">contact us</button>
      </div>
    </section>
    <section class="dep2">
      <div class="inner">
        <div class="tit_wrap">
          <h1>about <span class="tit">hieut</span></h1>
        </div>
        <div class="sub_tit">
          <p>
            우리집 인테리어 가장 중요한 것은 확실한<br />
            문제진단과 수리를 바탕으로 한 리모델링입니다.
          </p>
        </div>
        <div class="contents">
          <div class="top">
            <div class="img_wrap">
              <img src="/img/aboutus/Hieut/1.png" alt="1" />
              <img src="/img/aboutus/Hieut/3.png" alt="3" />
            </div>
            <p>
              비싼돈 들여 인테리어 했더니<br />
              수리때문에 다시 철거를 해야한다면,,,,
            </p>
          </div>
          <div class="middle">
            <p>
              오래된 아파트 싹 고쳐서 입주했는데<br />
              우리집 누수문제로 아랫집 보상에,,,<br />
              재공사까지 해야한다면,,,
            </p>
            <div class="img_wrap">
              <img src="/img/aboutus/Hieut/4.png" alt="4" />
              <img src="/img/aboutus/Hieut/2.png" alt="2" />
            </div>
          </div>
        </div>
        <div class="bottom">
          <p>
            생각만으로도 머리가 지끈거리는 우리집 문제<br />
            저희 hieut이 함께하겠습니다.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.dep1 {
  display: flex;
  justify-content: space-evenly;
  img {
    width: 718px;
    height: 467px;
  }
  .txt_wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .title {
      text-align: center;
      p {
        font-size: 22px;
        font-weight: 700;
        color: $main-black;
      }
      h1 {
        font-size: 60px;
        color: #e93e43;
      }
    }
    .sub {
      p {
        padding-top: 50px;
        font-size: 18px;
        line-height: 150%;
        color: #414141;
        text-transform: uppercase;
      }
    }
    .primary {
      font-weight: 500;
      border-radius: 10px;
      text-transform: capitalize;
      align-self: flex-end;
    }
  }
}

.dep2 {
  margin-top: 200px;
  .inner {
    color: #414141;
  }
  .tit_wrap {
    font-size: 50px;
    font-weight: 700;
    padding-bottom: 102px;
    h1 {
      text-transform: uppercase;
    }
    .tit {
      color: $main-color;
    }
  }
  .sub_tit p,
  .bottom p {
    font-size: 30px;
    font-weight: 700;
    line-height: 150%;
    text-align: center;
  }
  .bottom p {
    font-weight: 600;
  }
  .contents {
    padding: 90px 0 136px;
    .top {
      padding-bottom: 20px;
    }
    .top,
    .middle {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;
    }
    .top img:first-child,
    .middle img:first-child {
      padding-right: 25px;
    }
    .top p,
    .middle p {
      font-size: 20px;
      font-weight: 600;
    }
  }
}
</style>
