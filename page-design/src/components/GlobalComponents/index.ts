/*
 * @Author: ykx
 * @Date: 2022-05-15 10:20:58
 * @LastEditTime: 2022-05-24 18:10:46
 * @LastEditors: your name
 * @Description: 部分全局组件(尽量存放不带有副作用的组件)
 * @FilePath: \page-design\src\components\GlobalComponents\index.ts
 */
import type { App } from "vue";
import Empty from "./Empty/index.vue";
import SvgIcon from "./SvgIcon.vue";
const globalComs = [Empty, SvgIcon];

let installed = false;
const install = (app: App<Element>) => {
  if (installed) {
    return;
  }
  globalComs.forEach((com) => {
    app.component(com.name, com);
    installed = true;
  });
};
export default { install };
