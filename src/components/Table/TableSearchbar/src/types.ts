import type { SelectGroupOption, SelectOption } from "naive-ui";

export type TableSearchbarConfig = Array<{
    label: string; // 当前项名称
    labelWidth?: string; // 当前项名称宽度
    prop: string; // 对应字段名
    type: string; // 类型
    labelField?: string; // 选项标签字段名
    valueField?: string; // 选项值字段名
    dateFormat?: string; // 时间格式，适用于date/datetime/datetimerange，如不设置，默认为时间戳
    span?: number; // 占用列数，默认为1
}>;

export type TableSearchbarOptions = {
    [key: string]: (SelectOption | SelectGroupOption)[];
};

export type TableSearchbarData = {
    [key: string]: Nullable<unknown>; // 参数
};
