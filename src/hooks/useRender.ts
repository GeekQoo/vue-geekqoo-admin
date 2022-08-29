import type { Component } from "vue";
import { h } from "vue";
import { NIcon } from "naive-ui";

export function useRender() {
    // 处理icon
    let renderIcon = (icon: Component, props: object = {}) => {
        return () => h(NIcon, props, { default: () => h(icon) });
    };

    return {
        renderIcon
    };
}
