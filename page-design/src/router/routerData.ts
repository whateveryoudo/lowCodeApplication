/*
 * @Author: ykx
 * @Date: 2022-05-20 17:02:45
 * @LastEditTime: 2022-05-20 17:13:45
 * @LastEditors: your name
 * @Description:
 * @FilePath: \page-design\src\router\routerData.ts
 */
export default [
  {
    path: "/design",
    name: "design",
    component: () => import("@/views/design/index.vue"),
  },
];
