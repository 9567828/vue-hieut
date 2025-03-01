const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
      }),
    ],
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @use "@/assets/scss/_variables.scss" as *;
          @use "@/assets/scss/abstracts/mixin.scss" as *;
        `,
      },
    },
  },
});
