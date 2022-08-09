import type { Component } from "vue";
import { h } from "vue";
import { useRoute, useRouter } from "vue-router";
import { NIcon } from "naive-ui";

export function usePubilc() {
    // 路由
    let $route = useRoute();
    let $router = useRouter();

    // 处理icon
    let renderIcon = (icon: Component, props: object = {}) => {
        return () => h(NIcon, props, { default: () => h(icon) });
    };

    return {
        renderIcon,
        $route,
        $router
    };
}
