export * from "./FormPreview";
export * from "./ComponentSelector";
export * from "./FormProps";

// 类型
export interface FormGeneratorProps {
    // 共有类型
    name?: string; // 组件名称
    type?: string; // 组件类型
    row?: number; // 组件所占栅格，总数12
    showLabel?: boolean; // 是否显示标签
    labelWidth?: string; // 标签宽度
    label?: string; // 标签文字
    modelName?: any; // 字段名称
    showRequireMark?: boolean; // 是否显示必填标识
    // 按钮类型
    buttonText?: string; // 按钮文本
    buttonType?: "default" | "tertiary" | "primary" | "success" | "info" | "warning" | "error"; // 按钮类型，同NButton
}
