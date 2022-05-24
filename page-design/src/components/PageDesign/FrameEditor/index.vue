<!--
 * @Author: ykx
 * @Date: 2022-05-24 09:33:56
 * @LastEditTime: 2022-05-24 18:39:46
 * @LastEditors: your name
 * @Description: 主体编辑区
 * @FilePath: \page-design\src\components\PageDesign\FrameEditor\index.vue
-->
<template>
  <div class="frame-editor-wrapper flex-1">
    <Toolbar />
    <div class="overflow-y-auto inner-wrapper">主体编辑区</div>
  </div>
</template>

<script setup lang="ts">
import Toolbar from "./Toolbar.vue";
import { ref } from "@vue/reactivity";
</script>

<style scoped lang="less">
.frame-editor-wrapper {
  .inner-wrapper {
    height: calc(100% - var(--tool-height));
    padding: var(--editor-panel-pd);
  }
}
</style>
