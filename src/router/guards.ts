import { useStoreNavigation } from "@/store";
import type { Router } from "vue-router";
import type { NavigationProps } from "#/system";

export function createRouterGuards(router: Router) {
    router.beforeEach((to, from, next) => {
        const storeNavigation = useStoreNavigation();
        const navigation: NavigationProps[] = storeNavigation.navigation;
        const navigationItem = {
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
