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
