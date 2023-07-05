# TableActions 数据表格基础交互组件 V0.0.2

## 介绍

TableActions 是一个基础的数据表格交互组件，用于快速配置 n-data-table 的 render 函数，目前支持基础功能的按钮组和开关组。

## 参数

### type

交互类型，目前支持`button`。

### buttonActions

当`type`为`button`时，用于配置按钮列表。

#### 配置项参考

```typescript
export type TableButtonActions = {
    label: string; // 操作名称
    secondary?: boolean; // 次要按钮
    tertiary?: boolean; // 次次级按钮
    type?: "default" | "tertiary" | "primary" | "success" | "info" | "warning" | "error"; // 按钮类型
    color?: string; // 按钮颜色，设定 color 后会覆盖 type 的样式
    size?: "tiny" | "small" | "medium" | "large"; // 按钮大小
    onClick?: () => void; // 按钮点击事件
    disabled?: () => boolean; // 按钮是否禁用
}[];
```

#### demo

```typescript
return h(TableActions, {
    type: "button",
    buttonActions: [
        {
            label: "编辑",
            onClick: () => {
                console.log(111, row);
            }
        },
        {
            label: "删除",
            type: "error",
            onClick: () => {
                console.log(222, row);
            }
        }
    ]
});
```
