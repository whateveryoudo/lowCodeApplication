/*
 * @Author: ykx
 * @Date: 2022-05-24 11:03:49
 * @LastEditTime: 2022-05-24 11:03:50
 * @LastEditors: your name
 * @Description:
 * @FilePath: \page-design\src\utils\index.ts
 */
export const getUuid = (length: number = 8) => {
  return Number(
    Math.random().toString().substr(3, length) + Date.now()
  ).toString(36);
};
