<!--
 * @Author: ykx
 * @Date: 2022-05-23 10:35:23
 * @LastEditTime: 2022-05-24 18:43:13
 * @LastEditors: your name
 * @Description: 左侧组件选择
 * @FilePath: \page-design\src\components\PageDesign\SiderLeft\index.vue
-->
<template>
  <div class="left-sider-outer-wrapper h-full flex">
    <div
      class="left-sider-wrapper h-full flex flex-col pt-2 pb-2 flex-shrink-0"
    >
      <ul>
        <li
          v-for="item in leftNavData"
          :key="item.key"
          class="nav-item"
          @click="showNavDraw(item.key)"
        >
          <a-tooltip placement="right">
            <template #title>{{ item.title }}</template>
            <span class="nav-item-icon flex justify-center items-center">
              <DSvgIcon :iconType="item.icon" />
            </span>
          </a-tooltip>
        </li>
      </ul>
    </div>
    <DrawContent
      v-if="drawVisible"
      :drawLayout="drawLayout"
      @changeVisible="handleChangeDraw"
      @changeLayout="handleChangeLayout"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "@vue/reactivity";
import DrawContent from "./DrawContent.vue";
import { usePageDesignStore } from "@/store/modules/pageDesign";
const pageDesignStore = usePageDesignStore();
const drawVisible = ref(true);
const drawLayout = ref("block");
const leftNavData = pageDesignStore.leftNavData;
const showNavDraw = (key) => {
  drawVisible.value = true;
  pageDesignStore.toggleNav(key);
};
function handleChangeDraw(flag: boolean = true) {
  drawVisible.value = flag;
}
function handleChangeLayout(type: string) {
  drawLayout.value = type;
}
</script>

<style scoped lang="less">
.left-sider-wrapper {
  width: var(--left-panel-width);
  background-color: var(--color-panel-bg);
  .nav-item {
    width: 46px;
    height: 46px;
    .nav-item-icon {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
