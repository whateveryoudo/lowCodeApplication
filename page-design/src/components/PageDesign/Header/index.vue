<!--
 * @Author: ykx
 * @Date: 2022-05-23 10:46:14
 * @LastEditTime: 2022-05-23 18:53:17
 * @LastEditors: your name
 * @Description: 头部组件
 * @FilePath: \page-design\src\components\PageDesign\Header\index.vue
-->
<template>
  <header class="header-container flex pl-4 pr-4 items-center mb-px">
    <div class="logo-info font-bold text-2xl">{{ $config.title }}</div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
</script>

<style scoped lang="less">
.header-container {
  height: var(--top-header-height);
  background-color: var(--color-panel-bg);
}
</style>
