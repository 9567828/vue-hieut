const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    // production 환경일 때만 플래그 설정
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(
        new webpack.DefinePlugin({
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "true",
        })
      );
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @use "@/assets/scss/_variables.scss" as *;
        `,
      },
    },
  },
});
