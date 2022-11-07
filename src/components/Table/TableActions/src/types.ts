export type TableButtonActions = {
    label: string; // 操作名称
    type?: "default" | "tertiary" | "primary" | "success" | "info" | "warning" | "error"; // 按钮类型
    color?: string; // 按钮颜色，设定 color 后会覆盖 type 的样式
    size?: "tiny" | "small" | "medium" | "large"; // 按钮大小
    onClick?: () => void; // 按钮点击事件
    disabled?: () => boolean; // 按钮是否禁用
}[];

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
