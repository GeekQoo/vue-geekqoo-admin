import type { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { createRouterGuards } from "./guards";

import routes from "./routes";

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// 配置路由器
export function setupRouter(app: App<Element>) {
    app.use(router);
    // 创建路由守卫
    createRouterGuards(router);
}
