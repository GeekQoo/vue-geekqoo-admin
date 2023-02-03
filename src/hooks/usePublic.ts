import { useRoute, useRouter } from "vue-router";

export function usePublic() {
    // 路由
    let $route = useRoute();
    let $router = useRouter();

    return {
        $route,
        $router
    };
}
