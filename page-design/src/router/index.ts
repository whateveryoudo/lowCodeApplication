/*
 * @Author: ykx
 * @Date: 2022-05-20 16:58:40
 * @LastEditTime: 2022-05-20 17:05:04
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \page-design\src\router\index.ts
 */
import { createRouter, RouteRecordRaw, createWebHashHistory} from 'vue-router'
import routerData from './routerData'
export default createRouter({
    history: createWebHashHistory(),
    routes: <RouteRecordRaw[]>(routerData)
})