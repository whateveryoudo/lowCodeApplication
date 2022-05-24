<!--
 * @Author: ykx
 * @Date: 2022-05-24 09:34:54
 * @LastEditTime: 2022-05-24 15:54:08
 * @LastEditors: your name
 * @Description: 右侧属性设置面板
 * @FilePath: \page-design\src\components\PageDesign\SiderRight\index.vue
-->
<template>
  <a-tabs
    v-model:activeKey="activeKey"
    class="right-sider-wrapper flex-shrink-0"
  >
    <a-tab-pane key="props" tab="属性">属性编辑器</a-tab-pane>
    <a-tab-pane key="style" tab="样式">样式编辑区</a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
const activeKey = ref("props");
</script>

<style scoped lang="less">
.right-sider-wrapper {
  width: var(--right-panel-width);
  background-color: var(--color-panel-bg);
}
</style>
