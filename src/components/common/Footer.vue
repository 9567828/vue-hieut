<template>
  <footer>
    <div class="inner">
      <div class="top">
        <h1 class="tit">hieut</h1>
        <p>고객센터</p>
      </div>
      <div class="center">
        <div class="left">
          <div class="tel">
            <p>02)433-5984</p>
            <p>09:00~17:00</p>
          </div>
          <p>• 점심시간 12:00 ~ 13:00</p>
          <p>• 평일 : 전체문의 상담</p>
          <p>• 토요일, 공휴일 : 히읕 자체상품, 시공, 제품설치 문의 상담.</p>
          <p>• 일요일 : 휴무</p>
          <a href="https://pf.kakao.com/_YxlxefG" target="_blank" class="btn b1">카톡 상담(평일 09:00~17:00)</a>
          <router-link to="#" class="btn b2">이메일 문의</router-link>
        </div>
        <div class="middle">
          <router-link to="/about">회사소개</router-link>
          <router-link to="null">채용정보</router-link>
          <router-link to="null">공지사항</router-link>
          <router-link to="null">입점신청</router-link>
          <router-link to="null">제휴/광고문의</router-link>
          <router-link to="null">사업자 구매 회원</router-link>
        </div>
        <div class="right">
          <p>
            주식회사 히읕 | 대표 : 이한경 | 서울특별시 중랑구 상봉중앙로 32 2층<br />
            | 사업자등록증 : 606-86-65542 | Tel : 02)433-5984<br />
            | E-mail : hihieut5984@gmail.com
          </p>
          <h1>social</h1>
          <a class="social" href="https://www.instagram.com/hieut_zip?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank">
            <img src="/img/footer/instagram_white.svg" alt="instagram" />
          </a>
          <p>Copyright by. 2023 HIEUT Co.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: 150px;
  background-color: #000;
  color: #fff;
  font-size: 18px;
  .tit {
    padding-right: 20px;
    font-size: 40px;
  }
  .inner {
    padding: 60px 0;
    .top {
      @include flex-style(null, null, center, null);
      p {
        @include font-style(28px, 700);
      }
    }
    .center {
      @include flex-style(null, space-between, null, null);
      padding-top: 20px;
      .left {
        .tel {
          @include flex-style(null, null, center, null);
          font-size: 28px;
          p:first-child {
            font-weight: 700;
            padding-right: 20px;
          }
        }
        p {
          line-height: 150%;
          padding-bottom: 5px;
        }
        .btn {
          display: block;
          border-radius: 5px;
          border: 1px solid #edeaea;
          @include font-style(20px, 600);
          line-height: 50px;
          color: #fff;
          text-align: center;
        }
        .b1 {
          width: 277px;
          height: 50px;
          margin: 20px 0;
        }
        .b2 {
          width: 117px;
          height: 50px;
        }
      }
      .middle {
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, min-content);
        grid-auto-flow: column;
        gap: 20px 10px;
        a {
          display: block;
          font-weight: 600;
          line-height: 200%;
          color: #fff;
        }
        &::after,
        &::before {
          position: absolute;
          content: "";
          top: 0;
          width: 1px;
          height: 305px;
          background-color: #b7b7b7;
        }
        &::before {
          left: -75px;
        }
        &::after {
          right: -75px;

          background-color: #b7b7b7;
        }
      }
      .right {
        @include flex-style(column, space-between, center, null);
        p {
          font-weight: 600;
          line-height: 150%;
          &:last-child {
            align-self: flex-end;
          }
        }
        h1 {
          @include font-style(30px, 600);
          text-transform: capitalize;
          text-align: center;
        }
        .social {
          display: block;
          width: 40px;
          height: 40px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
