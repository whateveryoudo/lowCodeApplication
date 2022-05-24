/*
 * @Author: ykx
 * @Date: 2022-05-24 10:36:11
 * @LastEditTime: 2022-05-24 17:26:10
 * @LastEditors: your name
 * @Description: 导出部分数据源
 * @FilePath: \page-design\src\components\PageDesign\configData.ts
 */
import { cloneDeep } from "lodash-es";
import { getUuid } from "@/utils";
// 公共属性（支持传入默认属性配置）
type Unit = {
  value: string | number;
  unit: string | number;
};

interface Gauge {
  base: Unit;
  top: Unit;
  bottom: Unit;
  left: Unit;
  right: Unit;
}
interface OptionType {
  width?: Unit;
  height?: Unit;
  minHeight?: Unit;
  layoutType?: string;
  justifyContent?: string;
  align?: string;
  direction?: string;
  openFlexProport?: boolean;
  flexProport?: Unit;
  margin?: Gauge;
  marginBt?: Unit;
  paddingBs?: Unit;
  paddingTp?: Unit;
  paddingRt?: Unit;
  paddingLt?: Unit;
  paddingBt?: Unit;
}

// <T extends OptionType>(defaultOptions: T)
const commonOptions = (defaultOptions: OptionType) => {
  return {
    width: { value: "auto", unit: "auto" },
    height: { value: "auto", unit: "auto" },
    minHeight: { value: "auto", unit: "auto" },
    layoutType: "block",
    justifyContent: "flex-start",
    align: "flex-start",
    direction: defaultOptions.direction || "column", // 单容器默认纵向拖拽
    openFlexProport: false,
    flexProport: { value: "auto", unit: "auto" },
    margin: {
      base: { value: "auto", unit: "px" },
      top: { value: "auto", unit: "px" },
      // 栅格默认不添加间距
      bottom: defaultOptions.marginBt || { value: "auto", unit: "px" },
      left: { value: "auto", unit: "px" },
      right: { value: "auto", unit: "px" },
    },
    padding: {
      // TODO:无padding影响切换如何处理？(未想到好的办法)
      base: defaultOptions.paddingBs || { value: "auto", unit: "auto" },
      top: defaultOptions.paddingTp || { value: "auto", unit: "auto" },
      bottom: defaultOptions.paddingBt || { value: "auto", unit: "auto" },
      left: defaultOptions.paddingLt || { value: "auto", unit: "auto" },
      right: defaultOptions.paddingRt || { value: "auto", unit: "auto" },
    },
  };
};
// 获取单个容器配置
export const getPerBaseJson = (options = {}) =>
  cloneDeep({
    type: "Base",
    classify: "layout",
    list: [],
    key: `Base_${getUuid()}`,
    options: {
      ...commonOptions(options),
      flexWidth: { value: "100", unit: "%" },
      flexHeight: { value: "auto", unit: "auto" },
    },
  });

export const tupleComs = [
  {
    title: "布局",
    id: 1,
    children: [
      {
        type: "Grid",
        classify: "layout",
        title: "布局容器",
        icon: 'icon-m-hangrongqi',
        options: {
          ...commonOptions({
            direction: "row",
            marginBt: { value: 8, unit: "px" },
          }),
          gutter: 0,
          layoutType: "grid",
          rowGutter: 0,
          colGutter: 0,
          justifyContent: "flex-start",
        },
        children: [
          {
            ...getPerBaseJson(),
            title: "布局",
            span: 12,
          },
          {
            ...getPerBaseJson(),
            title: "布局",
            span: 12,
            
          },
        ],
      },
      {
        ...getPerBaseJson({
          marginBt: { value: 8, unit: "px" },
        }),
        title: "容器",
        icon: 'icon-42danlanbuju'
      },
    ],
  },
];
