<!--
 * @Author: ykx
 * @Date: 2022-05-24 17:44:17
 * @LastEditTime: 2022-05-24 18:33:30
 * @LastEditors: your name
 * @Description: iconfont字体图标
 * @FilePath: \page-design\src\components\GlobalComponents\SvgIcon.vue
-->
<template>
  <svg
    class="icon"
    aria-hidden="true"
    @click="emitLayout('block')"
    :style="{ 'font-size': fontSize + 'px' }"
  >
    <use :xlink:href="'#' + iconType"></use>
  </svg>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
defineOptions({
  name: "DSvgIcon",
});
defineProps({
  fontSize: {
    type: Number,
    default: 14,
  },
  iconType: {
    type: String,
    default: "",
  },
});
</script>

<style scoped></style>
