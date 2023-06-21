import { httpRequest } from "@/utils/request";
import { useStoreUser } from "@/store";

// 获取菜单列表
export function GET_MENU_LIST<T = unknown>(params: object) {
    return httpRequest<T>("/api/menu", "get", {
        params,
        headers: {
            token: useStoreUser().token
        }
    });
}
