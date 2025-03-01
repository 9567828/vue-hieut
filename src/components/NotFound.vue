<script setup>
import CustomMove from "../common/CutomMove";

const { moveToPage } = CustomMove();
</script>

<template>
  <div class="layout">
    <img src="/img/loading.svg" alt="loading" />
    <div class="tit-wrap">
      <div class="text">
        <h1>서비스 <span>준비중</span>입니다</h1>
        <div class="desc">
          <p>이용에 불편을 드려 죄송합니다.</p>
          <p>빠른 시일내에 준비하도록 하겠습니다.</p>
        </div>
      </div>
      <div class="line"></div>
    </div>
    <button class="primary" @click.prevent="moveToPage('/')">홈으로 이동</button>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
  img {
    width: 280px;
    height: 280px;
  }
}
.tit-wrap {
  .text {
    text-align: center;
    line-height: 1.5;
    h1 {
      font-size: 50px;
      font-weight: 800;
      span {
        color: $main-color;
      }
    }
    p {
      font-size: 18px;
      color: #555;
    }
  }
  .line {
    width: 800px;
    height: 1px;
    margin-top: 75px;
    background-color: #b0b0b0;
  }
}
.primary {
  font-size: 18px;
}
</style>
