<template>
  <div>
    <SlideComponent />
  </div>
</template>

<script>
import SlideComponent from "./config/Slide23.vue";

export default {
  name: "HomeCompo",
  components: { SlideComponent },
  data() {
    return {
      // swiperOptions: {
      //   loop: true,
      // },
      // pagination: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
