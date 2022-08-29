import { httpRequest } from "@/utils/request";
import { useStoreUser } from "@/store";

// 获取用户列表
export function GET_USER_LIST(params: object) {
    return httpRequest("/api/getUserList", "get", {
        params,
        headers: {
            token: useStoreUser().getToken
        }
    });
}
