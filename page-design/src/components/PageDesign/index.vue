<!--
 * @Author: ykx
 * @Date: 2022-05-20 17:31:16
 * @LastEditTime: 2022-05-23 19:19:49
 * @LastEditors: your name
 * @Description: 界面设计器
 * @FilePath: \page-design\src\components\PageDesign\index.vue
-->
<template>
  <div class="page-design-container flex flex-col h-screen">
    <Header />
    <div class="page-design-body relative flex-1 m-h-0">
      <SiderLeft />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import SiderLeft from "./SiderLeft/index.vue";
import Header from "./Header/index.vue";
</script>

<style scoped lang="less">
.page-design-container {
  background-color: #edeff3;
}
</style>
