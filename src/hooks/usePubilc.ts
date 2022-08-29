import { useRoute, useRouter } from "vue-router";

export function usePubilc() {
    // 路由
    let $route = useRoute();
    let $router = useRouter();

    return {
        $route,
        $router
    };
}
