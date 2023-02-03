import type { PropType as VuePropType } from "vue";

declare global {
    // 常见复用类型
    declare type UnKnownObject = Record<string, unknown>; // 未知对象
    declare type Nullable<T> = T | null;

    // vue类型
    declare type PropType<T> = VuePropType<T>;
}
