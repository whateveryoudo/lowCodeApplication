/*
 * @Author: ykx
 * @Date: 2022-05-23 16:54:42
 * @LastEditTime: 2022-05-23 16:56:57
 * @LastEditors: your name
 * @Description:
 * @FilePath: \page-design\src\store\index.ts
 */
import { createPinia } from "pinia";
import type { App } from 'vue'
const store = createPinia();
export function setupStore(app: App<Element>) {
  app.use(store);
}
