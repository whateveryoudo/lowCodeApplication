/*
 * @Author: ykx
 * @Date: 2022-05-23 14:58:21
 * @LastEditTime: 2022-05-23 15:00:53
 * @LastEditors: your name
 * @Description: antd按需加载
 * @FilePath: \page-design\src\plugins\antd.ts
 */
import {
  Modal,
  Table,
  Menu,
  Input,
  Form,
  Card,
  Checkbox,
  Radio,
  Col,
  Row,
  Select,
  DatePicker,
  Tooltip,
} from "ant-design-vue";
import type { App } from "vue";
export function setupAntd(app: App<Element>) {
  app
    .use(Form)
    .use(Input)
    .use(Modal)
    .use(Table)
    .use(Menu)
    .use(Card)
    .use(Checkbox)
    .use(Radio)
    .use(Col)
    .use(Row)
    .use(Select)
    .use(Tooltip)
    .use(DatePicker);
}
