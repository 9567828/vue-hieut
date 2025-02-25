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
        `,
      },
      // CSS Modules을 사용할 수 있도록 설정
      // css: {
      //   modules: {
      //     localIdentName: "[name]_[local]_[hash:base64:5]",
      //     exportLocalsConvention: "camelCaseOnly",
      //   },
      // },
    },
  },
});
