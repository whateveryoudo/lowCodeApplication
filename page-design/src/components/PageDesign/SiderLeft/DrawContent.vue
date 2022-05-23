<!--
 * @Author: ykx
 * @Date: 2022-05-23 15:52:40
 * @LastEditTime: 2022-05-23 19:41:43
 * @LastEditors: your name
 * @Description: 抽屉内容显示
 * @FilePath: \page-design\src\components\PageDesign\SiderLeft\DrawContent.vue
-->
<template>
  <!-- 绝对定位显示 -->
  <div
    class="draw-content-wrapper block-layout ml-px"
    v-if="drawLayout === 'block'"
  >
    <header class="flex pl-2 pr-2 justify-between items-center h-12">
      <span class="text-xl">{{ currentNav.title }}</span>
      <span class="operate-icons flex justify-between items-center">
        <svg class="icon" aria-hidden="true" @click="emitLayout('float')">
          <use :xlink:href="'#' + 'icon-removefixed'"></use>
        </svg>
        <CloseOutlined @click="emitDraw" />
      </span>
    </header>
    <div class="content pt-2">
      <DomTree v-if="currentNav.key === 'catalog'" />
      <ComponentPanel v-if="currentNav.key === 'component'" />
    </div>
  </div>
  <!-- 非绝对定位显示 -->
  <div class="draw-content-wrapper float-layout" v-if="drawLayout === 'float'">
    <header class="flex pl-2 pr-2 justify-between items-center h-12">
      <span class="text-xl">{{ currentNav.title }}</span>
      <span class="operate-icons flex justify-between items-center">
        <svg class="icon" aria-hidden="true" @click="emitLayout('block')">
          <use :xlink:href="'#' + 'icon-fixed_fill'"></use>
        </svg>
        <CloseOutlined @click="emitDraw" />
      </span>
    </header>
    <div class="content pt-2">
      <DomTree v-if="currentNav.key === 'catalog'" />
      <ComponentPanel v-if="currentNav.key === 'component'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "@vue/reactivity";
import { usePageDesignStore } from "@/store/modules/pageDesign";
import DomTree from "./DomTree.vue";
import ComponentPanel from "./Component.vue";
import { CloseOutlined } from "@ant-design/icons-vue";
const emit = defineEmits(["changeVisible", "changeLayout"]);
const props = defineProps({
  // 布局方式， 默认 block - 占用文档流，
  drawLayout: {
    type: String,
    default: "block",
  },
});
const pageDesignStore = usePageDesignStore();
const currentNav = computed(() => pageDesignStore.currentNav);
function emitDraw() {
  emit("changeVisible", false);
}
function emitLayout(type: string) {
  emit("changeLayout", type);
}
</script>

<style scoped lang="less">
.draw-content-wrapper {
  width: var(--left-draw-width);
  background-color: var(--color-panel-bg);
  .operate-icons {
    width: 40px;
    flex-shrink: 0;
    svg {
      cursor: pointer;
    }
  }
  .content {
    height: calc(100% - 48px);
    overflow-y: auto;
    border-top: 1px solid var(--color-line-normal);
  }
  &.float-layout {
    position: absolute;
    left: calc(var(--left-panel-width) + 1px);
    bottom: 0;
    top: 0;
    box-shadow: 4px 6px 6px 0 rgb(31 50 88 / 8%);
    z-index: 20;
  }
}
</style>
