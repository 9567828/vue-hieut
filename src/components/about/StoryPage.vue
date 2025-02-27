<script setup>
import ArtistSlides from "./ArtistSlides.vue";
</script>

<template>
  <div>
    <section class="intro">
      <div class="tit_wrap">
        <h1><span>hieut</span> story</h1>
      </div>
      <div class="content">
        <img src="/img/imgLogo.svg" class="logo" alt="logo" />
        <div class="text-wrap">
          <h1>
            공간에 대해 더 발전된 고민하는<br />
            모든 창작자들과 함께 하겠습니다.
          </h1>
          <p>
            인테리어를 할 때 예쁜 사진 속 자재들은 왜 모두<br />
            해외에만 있을까? 라는 의문점에서 시작되었습니다.<br />
            <br />
            히읕은 국내의 기술자와 공예작가의 창의력으로 다양하고<br />
            더 나다운 공간에 대한 우리만의 자재로 "K스타일링" 을<br />
            실현하는 것을 목표로 하고있습니다.
          </p>
        </div>
      </div>
    </section>
    <section class="artist">
      <h1>hieut artist</h1>
      <div class="art-wrap">
        <ArtistSlides />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
* {
  color: $main-black;
  text-transform: uppercase;
}
h1 {
  font-size: 56px;
  font-weight: 700;
  text-align: center;
}
.intro {
  .tit_wrap {
    padding-bottom: 130px;
    span {
      color: $main-color;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 250px;
    .text-wrap {
      h1 {
        font-size: 30px;
        font-weight: 700;
        text-align: center;
        padding-bottom: 76px;
      }
      p {
        font-size: 20px;
        line-height: 150%;
      }
    }
  }
}

.artist {
  margin-top: 200px;
  h1 {
    padding-bottom: 195px;
  }
  .art-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 80px 90px;
  }
}
</style>
