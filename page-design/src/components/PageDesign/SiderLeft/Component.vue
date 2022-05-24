<!--
 * @Author: ykx
 * @Date: 2022-05-23 15:55:50
 * @LastEditTime: 2022-05-24 18:41:26
 * @LastEditors: your name
 * @Description: 组件集合
 * @FilePath: \page-design\src\components\PageDesign\SiderLeft\Component.vue
-->
<template>
  <a-input-search
    class="search-wrapper pl-1 pr-1"
    v-model="searchVal"
    placeholder="请输入组件名字"
    @select="onSelect"
    @search="onSearch"
    @change="onChange"
  />
  <div class="search-body overflow-y-auto text-xs">
    <ul v-if="groupedList.length > 0">
      <li v-for="(group, index) in groupedList" :key="index">
        <div class="group-title font-bold h-5 leading-5 mb-2">
          {{ group.title }}
        </div>
        <draggable
          :list="group.children"
          class="collapse-component-wrapper flex flex-wrap justify-between"
          v-bind="{
            group: { name: 'dragForm', pull: 'clone', put: false },
            sort: false,
            'ghost-class': 'ghost',
          }"
        >
          <template #item="{ element }">
            <div
              :class="[
                element.id === 2 && 'block',
                'collapse-component-item h-9 leading-9',
              ]"
              :key="element.id"
            >
              <!-- 普通组件渲染 -->
              <div
                class="com-item-wrapper flex items-center"
                v-if="group.id === 1"
              >
                <DSvgIcon :iconType="element.icon" class="mr-1" />
                <span>
                  {{
                    element.title.substr(0, element.title.indexOf(searchVal))
                  }}
                  <span style="color: #f50">{{ searchVal }}</span>
                  {{
                    element.title.substr(
                      element.title.indexOf(searchVal) + searchVal.length
                    )
                  }}
                </span>
              </div>
              <!-- 区分tpl渲染 -->
              <div class="tpl-item-wrapper" v-if="group.id === 2">
                <img :src="element.thumbImg" />
                <span>
                  {{
                    element.title.substr(0, element.title.indexOf(searchVal))
                  }}
                  <span style="color: #f50">{{ searchVal }}</span>
                  {{
                    element.title.substr(
                      element.title.indexOf(searchVal) + searchVal.length
                    )
                  }}
                </span>
              </div>
            </div>
          </template>
        </draggable>
      </li>
    </ul>
    <DEmpty v-else desc="未搜索到相关组件" />
  </div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import { ref, computed } from "@vue/reactivity";
import { tupleComs } from "@pDesign/configData.ts";
import { flatMap, groupBy } from "lodash-es";
const searchVal = ref("");
const flatedList = flatMap(tupleComs, (item) => {
  return item.children;
});
const filterList = computed(() => {
  return searchVal.value
    ? flatedList.filter((item) => item.title.includes(searchVal.value))
    : flatedList;
});
const groupedList = computed(() => {
  const groupedObj =
    filterList.value.length > 0 ? groupBy(filterList.value, "classify") : null;
  const result = [];
  groupedObj &&
    Object.keys(groupedObj).forEach((k) => {
      if (k === "layout") {
        result.push({
          title: "布局",
          id: 1,
          children: groupedObj[k],
        });
      }
      if (k === "block") {
        result.push({
          title: "模板",
          id: 2,
          children: groupedObj[k],
        });
      }
    });
  return result;
});
</script>

<style scoped lang="less">
.search-body {
  height: calc(100% - 48px);
  padding: 10px;
  .collapse-component-item {
    width: 47%;
  }
  .com-item-wrapper {
    border: 1px solid var(--color-line-gray);
    padding: 0 10px;
    border-radius: 3px;
    transition: all 0.2s;
    &:hover {
      border: 1px solid @primary-color;
      color: @primary-color;
    }
  }
}
</style>
