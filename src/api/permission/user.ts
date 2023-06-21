import { httpRequest } from "@/utils/request";
import { useStoreUser } from "@/store";

// 获取用户列表
export function GET_USER_LIST<T = unknown>(params: object) {
    return httpRequest<T>("/api/user", "get", {
        params,
        headers: {
            token: useStoreUser().token
        }
    });
}

// 删除用户
export function DELETE_USERS<T = unknown>(params: object) {
    return httpRequest<T>("/api/user", "delete", {
        params,
        headers: {
            token: useStoreUser().token
        }
    });
}
