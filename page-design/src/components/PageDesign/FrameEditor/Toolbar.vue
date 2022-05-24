<!--
 * @Author: ykx
 * @Date: 2022-05-24 17:31:36
 * @LastEditTime: 2022-05-24 18:40:07
 * @LastEditors: your name
 * @Description: 工具条
 * @FilePath: \page-design\src\components\PageDesign\FrameEditor\Toolbar.vue
-->
<template>
  <div class="toolbar-wrapper flex items-center pl-2 pr-2 ml-0.5 mr-0.5">
      <DSvgIcon iconType="icon-keyboard" :fontSize="24"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
</script>

<style scoped lang="less">
.toolbar-wrapper {
  min-height: var(--toolbar-height);
  background-color: var(--color-panel-bg);
}
</style>
