/*
 * @Author: ykx
 * @Date: 2022-05-23 17:00:32
 * @LastEditTime: 2022-05-24 15:24:56
 * @LastEditors: your name
 * @Description:
 * @FilePath: \page-design\src\store\modules\pageDesign.ts
 */
import { defineStore } from "pinia";
import { cloneDeep } from "lodash-es";
interface NavRow {
  title: string;
  key: string;
  icon: string;
}
interface PageDesignState {
  leftNavData: NavRow[];
  currentNav: object | undefined;
}
export const usePageDesignStore = defineStore({
  id: "page-design",
  state: (): PageDesignState => {
    return {
      leftNavData: [
        { title: "目录树", key: "catalog", icon: "icon-tree",  },
        { title: "组件", key: "component", icon: "icon-component" },
      ],
      currentNav: { title: "组件", key: "component", icon: "icon-component" },
    };
  },
  actions: {
    toggleNav(key: string) {
      const target = cloneDeep(this.leftNavData).find(
        (item: NavRow) => item.key === key
      );
      this.currentNav = target;
    },
  },
});
