# TableSearchbar 列表搜索栏 V0.0.1

## 介绍

TableSearchbar 是一个基于 naive-ui 封装的基础列表搜索栏组件，目前支持输入框、下拉框、时间日期选择器。

## 现有功能

-   输入框：基于[n-input](https://www.naiveui.com/zh-CN/light/components/input)
-   下拉框：基于[n-select](https://www.naiveui.com/zh-CN/light/components/select)
-   时间日期选择器：基于[n-date-picker](https://www.naiveui.com/zh-CN/light/components/date-picker)

## 参数

### config

搜索条件配置项。

#### 配置项参考

```typescript
export type TableSearchbarConfig = Array<{
    label: string; // 当前项名称
    labelWidth?: string; // 当前项名称宽度，不设置则自适应
    prop: string; // 对应字段名
    type: string; // 类型
    dateFormat?: string; // 时间格式，适用于date/datetime/datetimerange，如不设置，默认为时间戳
    span?: number; // 占用列数，默认为1
}>;
```

#### demo

```typescript
let searchConfig = ref<TableSearchbarConfig>([
    {
        prop: "demoInput",
        type: "input",
        label: "输入框"
    },
    {
        prop: "demoSelect",
        type: "select",
        label: "下拉框"
    },
    {
        prop: "demoDate",
        type: "date",
        label: "日期选择",
        dateFormat: "yyyy-MM-dd"
    },
    {
        prop: "demoDatetime",
        type: "datetime",
        label: "日期时间",
        dateFormat: "yyyy-MM-dd HH:mm:ss"
    },
    {
        prop: "demoDatetimerange",
        type: "datetimerange",
        label: "日期区间",
        dateFormat: "yyyy-MM-dd HH:mm:ss",
        span: 2
    }
]);
```

### options

搜索条件列表，目前仅用于下拉框。如果配置了没生效，有可能是下面两种情况：

1. 配置项中的类型不是`select`
2. 配置项中的字段名未和`propName`保持一致

#### 配置项参考

```typescript
export type TableSearchbarOptions = {
    [propName: string]: Array<SelectOption | SelectGroupOption>;
};
```

[SelectOption、SelectGroupOption 类型参考](https://www.naiveui.com/zh-CN/light/components/select#Select-Props)

#### demo

```typescript
let searchbarOptions = ref<TableSearchbarOptions>({
    demoSelect: [
        { label: "测试1", value: 1 },
        { label: "测试2", value: 2 }
    ]
});
```

### data

搜索条件数据，`propName`需要和配置项参数名保持一致。

#### 配置项参考

```typescript
export type TableSearchbarData = {
    [propName: string]: any; // 参数
};
```

#### demo

```typescript
let searchForm = ref<TableSearchbarData>({
    demoInput: null,
    demoSelect: null,
    demoDate: null,
    demoDatetime: null,
    demoDatetimerange: null
});
```

## 类型定义

组件导出以下类型定义：

```typescript
import type { TableSearchbarConfig, TableSearchbarOptions, TableSearchbarData } from "@/components/Table";
```
