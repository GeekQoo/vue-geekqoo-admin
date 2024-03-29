import { useStoreNavigation } from "@/store";
import type { Router } from "vue-router";

export function createRouterGuards(router: Router) {
    router.beforeEach((to, from, next) => {
        let storeNavigation = useStoreNavigation();
        let navigation: App.NavigationProps[] = storeNavigation.navigation;
        let navigationItem = {
            title: to.meta.title as string,
            name: to.name as string
        };

        if (navigationItem.title && !navigation.some((item) => item.title === navigationItem.title)) {
            navigation.push(navigationItem);
        }

        storeNavigation.setNavigation(navigation);

        next();
    });
}
