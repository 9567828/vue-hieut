<script setup>
import CustomMove from "../../common/CutomMove";

const { moveToPage } = CustomMove();
</script>

<template>
  <div>
    <section class="app_hero">
      <div class="bg">
        <div class="grid">
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
                <a href="" @click.prevent="moveToPage('/error')"><img src="/img/google.svg" alt="google" /></a>
                <a href="" @click.prevent="moveToPage('/error')"><img src="/img/apple.svg" alt="apple" /></a>
              </div>
            </div>
          </div>
          <div class="bg_wrap">
            <img src="/img/aboutus/Apps/Group 11.png" alt="mobile" />
          </div>
        </div>
      </div>
    </section>
    <section class="app_dep1">
      <div class="inner">
        <div class="img_wrap">
          <img src="/img/aboutus/Apps/mobil_mokup.png" alt="mob" />
          <div class="circle"></div>
        </div>
        <div class="right">
          <div class="txt">
            <p>가치를 알아보는 당신의 공간의 격을 올리다</p>
            <h1>어떤 스타일로 인테리어 해볼까요?</h1>
          </div>
          <div class="sub_txt">
            <p>
              직접 디자인한 작가의 작품을 우리집 어디에서나 전시될 수 있도록,<br />
              저희 히읕은 <span>인테리어 하자 걱정없이</span> 시공하실수 있게<br />
              전문기술자로 이루어진
              <span>자체시공팀이 시공까지 함께 하고있습니다.</span>
              <br /><br />
              <span>'ㅎ' 과 함께 공간에 대한 생각을 기록하고, 소통하며 나만의 공간을 인테리어 해보세요.</span>
            </p>
          </div>
          <div class="btn_wrap">
            <button class="pink-btn" @click.prevent="moveToPage('/error')">시공신청</button>
            <button class="pink-btn" @click.prevent="moveToPage('/error')">자재구매</button>
            <button class="pink-btn" @click.prevent="moveToPage('/error')">커뮤니티</button>
          </div>
        </div>
      </div>
    </section>
    <section class="app_dep2">
      <div class="inner">
        <div class="box b1">
          <div class="txt_wrap">
            <h1>
              내 스타일에 맞는<br />
              자재구매
            </h1>
            <p>
              내 스타일에 맞는 작가들의<br />
              인테리어 상품들을 구매하실 수 있어요
            </p>
          </div>
          <div class="img_wrap">
            <img src="/img/aboutus/Apps/dep2_1.png" alt="dep2_1" />
          </div>
        </div>
        <div class="box b2">
          <div class="txt_wrap">
            <h1>
              간편하고 확실한<br />
              올수리,리모델링 신청
            </h1>
            <p>
              고장난 집부터 인테리어가 필요한 우리집까지<br />
              간단한신청으로 시공이 가능해요!
            </p>
          </div>
          <div class="img_wrap">
            <img src="/img/aboutus/Apps/dep2_2.png" alt="dep2_2" />
          </div>
        </div>
        <div class="box b3">
          <div class="txt_wrap">
            <h1>
              공간에 대한<br />
              다양한 소통
            </h1>
            <p>
              나만의 공간에 담은 이야기를<br />
              다양한 사람들과 소통해보세요
            </p>
          </div>
          <div class="img_wrap">
            <img src="/img/aboutus/Apps/dep2_3.png" alt="dep2_3" />
          </div>
        </div>
      </div>
    </section>
    <section class="app_dep3">
      <div class="left">
        <div class="img_box">
          <img src="/img/aboutus/Apps/dep3_1.png" alt="1" />
          <img src="/img/aboutus/Apps/dep3_2.png" alt="2" />
          <img src="/img/aboutus/Apps/dep3_3.png" alt="3" />
        </div>
        <div class="txt_wrap">
          <p>
            <span>히읕</span>에서 손쉽게 작품구입하고<br />
            <span>집수리부터 인테리어까지</span> 신청해보세요!<br />
            <br />
            <span>전문 기술자들로</span> 꾸려진 <span>자체 시공팀</span>이<br />
            인테리어<span>A/S 걱정없이</span> 확실하게 고쳐해드려요.
          </p>
        </div>
      </div>
      <div class="right">
        <div class="txt_wrap">
          <p>
            당신만을 위해<br />
            준비된<br />
            리모델링 플랫폼
          </p>
        </div>
        <div class="img_box">
          <img src="/img/aboutus/Apps/dep3_4.png" alt="4" />
          <img src="/img/aboutus/Apps/dep3_5.png" alt="5" />
          <img src="/img/aboutus/Apps/dep3_6.png" alt="6" />
        </div>
      </div>
    </section>
    <section class="app_dep4">
      <div class="top">
        <h1 class="tit">hieut</h1>
        <div class="mob_wrap">
          <div class="img_wrap">
            <a @click.prevent="moveToPage('/error')" href="#"><img src="/img/apple.svg" alt="apple" /></a>
            <a @click.prevent="moveToPage('/error')" href="#"><img src="/img/google.svg" alt="google" /></a>
          </div>
          <p>
            우리집 꾸미고/고치고/ 관리걱정없이 시공할 수 있도록,<br />
            저희 히읕이 당신의 믿음직한 집관리자가 되어드리겠습니다.
          </p>
        </div>
      </div>
      <div class="bottom">
        <h1 class="tit">hieut</h1>
        <p>프리미엄 아티스트 인테리어 플랫폼 히읕과 색다른 인테리어를 만나보세요</p>
        <p>당신을 위해 준비된 다양한 서비스를 맘편히 이용해보세요</p>
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
.app_hero::-webkit-scrollbar {
  display: none;
}
.app_hero {
  color: #fff;
  height: 100vh;
  overflow-x: hidden;
  .txt_wrap {
    .tit {
      font-size: 83px;
    }
    .sub_wrap {
      position: relative;
      padding-top: 80px;
      &::before {
        position: absolute;
        content: "";
        top: 36px;
        width: 93px;
        height: 9px;
        background-color: #fff;
      }
    }
    p {
      font-size: 23px;
      line-height: 1.5;
    }
  }
}
.bg {
  width: 100%;
  height: 850px;
  background: linear-gradient(105deg, #d52525 37.06%, #d600c1 89.35%);
}
.grid {
  height: 100%;
  padding-left: 240px;
  display: grid;
  grid-template-columns: auto 1500px;
  align-items: center;
}
.bg_wrap {
  position: relative;
  img {
    width: 100%;
    position: absolute;
    top: -867px;
    left: -29px;
  }
}
.appdownicon {
  padding-top: 50px;
  @include flex-style(null, null, center, null);
  gap: 20px;
  img {
    width: 185px;
    height: 60px;
  }
}

.app_dep1 {
  margin-top: 100px;
  .inner {
    @include flex-style(null, space-around, center, null);
    .img_wrap {
      img {
        margin-bottom: -470px;
        margin-left: 110px;
        width: 317px;
        height: 630px;
      }
      .circle {
        width: 560px;
        height: 560px;
        border-radius: 100%;
        background: linear-gradient(180deg, #d52525 0%, #e13684 99.98%, rgba(213, 133, 148, 0) 99.99%, #e13684 100%);
      }
    }
    .btn_wrap {
      @include flex-style(null, null, center, 12px);
      .pink-btn {
        font-weight: 600;
      }
    }
    .right {
      .txt {
        padding-bottom: 40px;
        font-weight: 600;
        p {
          font-size: 24px;
        }
        h1 {
          font-size: 40px;
        }
      }
      .sub_txt {
        margin-bottom: 20px;
        font-size: 18px;
        span {
          font-weight: 600;
        }
      }
    }
  }
}

.app_dep2 {
  height: 100vh;
  margin-top: 200px;
  background-color: #ededf1;
  .inner {
    height: 100%;
    @include flex-style(null, center, center, 30px);
    .box {
      width: 500px;
      height: 744px;
      border-radius: 50px;
      overflow: hidden;
      background-color: #fff;
      text-align: center;
      .txt_wrap {
        position: relative;
        margin-top: 107px;
        &::before {
          position: absolute;
          content: "";
          top: -30px;
          left: 210px;
          width: 38px;
          height: 12px;
          background-color: #d52525;
        }
        h1 {
          @include font-style(30px, 600);
          padding-bottom: 20px;
        }
        p {
          font-size: 18px;
        }
      }
      .img_wrap {
        img {
          padding-right: 20px;
          padding-top: 60px;
        }
      }
    }
  }
}

.app_dep3 {
  @include flex-style(null, space-evenly, center, null);
  margin: 200px 0;
  .left,
  .right {
    @include flex-style(column, null, null, 10px);
  }
  .left {
    align-items: flex-end;
    .img_box {
      img {
        padding-right: 20px;
      }
    }
    .txt_wrap {
      p {
        font-size: 18px;
        padding-right: 20px;
      }
      span {
        font-weight: 600;
      }
    }
  }
  .right {
    p {
      @include font-style(40px, 700);
      padding-left: 50px;
    }
    .img_box {
      img {
        padding-left: 20px;
      }
    }
  }
}

.app_dep4 {
  height: 100vh;
  .top,
  .bottom {
    @include flex-style(column, center, center, null);
    text-align: center;
    height: calc(100vh - 50%);
  }
  .tit {
    font-size: 83px;
  }
  .top {
    width: 100%;
    background: linear-gradient(105deg, #d52525 37.06%, #d600c1 89.35%);
    color: #fff;
    p {
      font-size: 23px;
    }
    .img_wrap {
      @include flex-style(null, center, center, 20px);
      padding: 30px 0;
      img {
        width: 200px;
        height: 70px;
      }
    }
  }
  .bottom {
    p {
      &:nth-of-type(1) {
        font-size: 32px;
        padding: 30px 0;
      }
    }
  }
}
</style>
