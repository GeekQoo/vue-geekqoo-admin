import type { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import { useStoreNavigation } from "@/store";

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// 配置路由器
export function setupRouter(app: App<Element>) {
    app.use(router);
}

// 路由守卫
router.beforeEach((to, from, next) => {
    let storeNavigation = useStoreNavigation();
    let navigation: App.NavigationProps[] = storeNavigation.navigation;
    let navigationItem = {
        title: to.meta.title as string,
        name: to.name as string
    };

    if (navigationItem.title) {
        if (navigation.length > 0) {
            let isExist: boolean = false;
            navigation.forEach((item) => {
                if (item.title === navigationItem.title) isExist = true;
            });
            if (!isExist) navigation.push(navigationItem);
        } else {
            navigation.push(navigationItem);
        }
    }

    storeNavigation.setNavigation(navigation);

    next();
});
