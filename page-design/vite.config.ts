/*
 * @Author: ykx
 * @Date: 2022-05-20 16:52:37
 * @LastEditTime: 2022-05-24 18:15:11
 * @LastEditors: your name
 * @Description:
 * @FilePath: \page-design\vite.config.ts
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import DefineOptions from "unplugin-vue-define-options/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import WindiCSS from "vite-plugin-windicss";
const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    WindiCSS(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "ant-design-vue/dist/antd.less";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src") + "/",
      "@pDesign": path.resolve(__dirname, "src/components/PageDesign") + "/",
    },
  },
});
