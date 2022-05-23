/*
 * @Author: ykx
 * @Date: 2022-05-20 16:52:37
 * @LastEditTime: 2022-05-23 16:58:31
 * @LastEditors: your name
 * @Description:
 * @FilePath: \page-design\src\main.ts
 */
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import config from "./config";
import { setupStore } from './store'
import "virtual:windi.css";
import "@/assets/var.less";
import "@/assets/common.less";
import { setupAntd } from "./plugins";
const app = createApp(App);
// 注册全局常用的ant-design-vue组件
setupAntd(app);
// 注册store
setupStore(app);
app.config.globalProperties.$config = config;
app.use(router).mount("#app");
