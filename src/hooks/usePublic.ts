import { useRoute, useRouter } from "vue-router";

export function usePublic() {
    // 路由
    const $route = useRoute();
    const $router = useRouter();

    return {
        $route,
        $router
    };
}
