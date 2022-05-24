<!--
 * @Author: ykx
 * @Date: 2022-05-20 17:31:16
 * @LastEditTime: 2022-05-24 10:01:46
 * @LastEditors: your name
 * @Description: 界面设计器
 * @FilePath: \page-design\src\components\PageDesign\index.vue
-->
<template>
  <div class="page-design-container flex flex-col h-screen">
    <Header />
    <div class="page-design-body relative flex flex-1 m-h-0">
      <SiderLeft />
      <FrameEditor/>
      <SiderRight />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import SiderLeft from "./SiderLeft/index.vue";
import SiderRight from "./SiderRight/index.vue";
import FrameEditor from "./FrameEditor/index.vue";
import Header from "./Header/index.vue";
</script>

<style scoped lang="less">
.page-design-container {
  background-color: #edeff3;
}
</style>
