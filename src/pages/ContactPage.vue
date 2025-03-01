<script setup>
import ContactSlide from "@/components/ContactSlide.vue";
</script>

<template>
  <section class="con_hero">
    <div class="inner">
      <div class="main">
        <h1>contact <span>us</span></h1>
      </div>
      <ContactSlide />
      <div class="sub_wrap">
        <div class="sub">
          <span class="sub_txt"> 부분인테리어 / 리모델링 </span>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfkVSAvzaZ-8oh5DzUWPigc1ccHHfR6uHXyMSISs0bcU04ABw/viewform"
            target="_blank"
            class="primary-btn"
            >인테리어 견적 >></a
          >
        </div>
        <div class="sub">
          <span class="sub_txt"> 올수리 / 집수리 신청 </span>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScHuj7YpIEBvGDJVM7filQhRIKCqtX3yYpl8gMUATP0FOQNfw/viewform"
            target="_blank"
            class="primary-btn"
            >견적 신청하기 >></a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main {
  h1 {
    @include font-style(50px, 700);
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 100px;
  }
  span {
    color: #e4251f;
  }
}
.sub_wrap {
  @include flex-style(null, center, center, 40px);
  margin: 200px 0;
  .sub {
    @include flex-style(column, center, center, 20px);
    .sub_txt {
      @include font-style(22px, 600);
    }
    .primary-btn {
      @include font-style(20px, 500);
    }
  }
}
</style>
