import { httpRequest } from "@/utils/request";
import { useStoreUser } from "@/store";

// 获取菜单列表
export function GET_MENU_LIST(params: object) {
    return httpRequest("/api/getMenuList", "get", {
        params,
        headers: {
            token: useStoreUser().getToken
        }
    });
}
