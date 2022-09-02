# TableActions 数据表格基础交互组件 V0.0.1

## 介绍

TableActions 是一个基础的数据表格交互组件，用于快速配置 n-data-table 的 render 函数，目前支持基础功能的按钮组和开关组。

## 参数

### type

交互类型，目前支持`button`和`switch`。

### buttonActions

当`type`为`button`时，用于配置按钮列表。

#### 配置项参考

```typescript
export type TableButtonActions = {
    label: string; // 操作名称
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

### switchActions

当`type`为`switch`时，用于配置开关列表。

#### 配置项参考

```typescript
export type TableSwitchActions = {
    defaultValue: boolean | string | number; // 非受控模式下的默认值
    checkedValue?: boolean | string | number; // 选中时的值
    uncheckedValue?: boolean | string | number; // 未选中时的值
    checkedText?: string; // 选中时的文本,
    uncheckedText?: string; // 未选中时的文本,
    onChange?: (value: boolean | string | number) => void; // 变化时回调函数
    disabled?: () => boolean; // 是否禁用
    size?: "small" | "medium" | "large"; // 大小
}[];
```

#### demo

```typescript
return h(TableActions, {
    type: "switch",
    switchActions: [
        {
            checkedValue: 1,
            uncheckedValue: 0,
            defaultValue: 0,
            checkedText: "启用",
            uncheckedText: "禁用",
            size: "medium",
            onChange: (value: any) => {
                window.$message.info(`当前状态：${value}`);
            }
        }
    ]
});
```
