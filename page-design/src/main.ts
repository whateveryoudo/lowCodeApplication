/*
 * @Author: ykx
 * @Date: 2022-05-20 16:52:37
 * @LastEditTime: 2022-05-20 17:09:59
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \page-design\src\main.ts
 */
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
