<template>
  <footer class="inner">
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
        <router-link to="">회사소개</router-link>
        <router-link to="">채용정보</router-link>
        <router-link to="">공지사항</router-link>
        <router-link to="">입점신청</router-link>
        <router-link to="">제휴/광고문의</router-link>
        <router-link to="">사업자 구매 회원</router-link>
      </div>
      <div class="right">
        <p>
          주식회사 히읕 | 대표 : 이한경 | 서울특별시 중랑구 상봉중앙로 32 2층<br />
          | 사업자등록증 : 606-86-65542 | Tel : 02)433-5984<br />
          | E-mail : hihieut5984@gmail.com
        </p>
        <h1>social</h1>
        <div class="social">
          <a href="https://www.instagram.com/hieut_zip?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank">
            <img src="/img/footer/instagram_white.svg" alt="instagram" />
          </a>
        </div>
        <p>Copyright by. 2023 HIEUT Co.</p>
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
footer.inner {
  padding-top: 60px;
  .top {
    display: flex;
    align-items: center;
  }
  .center {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-top: 20px;
    .left {
      .tel {
        display: flex;
        align-items: center;
        p {
          font-size: 18px;
          line-height: 150%;
          &:nth-of-type(1) {
            font-size: 28px;
            font-weight: 700;
            padding-right: 20px;
          }
        }
      }
      .btn {
        display: block;
        border-radius: 5px;
        border: 1px solid #edeaea;
        font-size: 20px;
        font-weight: 600;
        line-height: 50px;
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
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, min-content);
      grid-auto-flow: column;
      gap: 20px 10px;
      a {
        display: block;
        font-size: 18px;
        font-weight: 600;
        line-height: 200%;
        color: #fff;
      }
    }
    .right {
      p {
        font-size: 18px;
        font-weight: 600;
        line-height: 150%;
      }
    }
  }
}
</style>
