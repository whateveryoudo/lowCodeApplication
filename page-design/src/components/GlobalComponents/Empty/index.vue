<!--
 * @Author: ykx
 * @Date: 2022-05-07 10:45:16
 * @LastEditTime: 2022-05-15 10:20:23
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \workbenchConfig\src\components\globalComponents\empty\index.vue
-->
<template>
  <div class="empty-container">
    <div class="empty-content">
      <div class="logo" v-if="image">
        <img :src="image" />
      </div>
      <div class="desc">{{ desc }}</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DEmpty',
  props: {
    image: {
      type: String
    },
    desc: {
      type: String,
      default: '暂无数据...'
    },
    imageStyle: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
.empty-container {
  position: relative;
  height: 100%;
  min-height: 100px;
  .empty-content {
    width: 300px;
    top: 50%;
    left: 50%;
    text-align: center;
    position: absolute;
    z-index: 97;
    transform: translateY(-50%) translateX(-50%);
  }
}
</style>
