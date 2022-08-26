import type { SelectGroupOption, SelectOption } from "naive-ui";

export type TableSearchbarConfig = Array<{
    label: string; // 当前项名称
    prop: string; // 对应字段名
    type: string; // 类型
    dateFormat?: string; // 时间格式，适用于date/datetime/datetimerange，如不设置，默认为时间戳
}>;

export type TableSearchbarOptions = {
    [propName: string]: Array<SelectOption | SelectGroupOption>;
};
export type TableSearchbarData = {
    [propName: string]: any; // 参数
};
