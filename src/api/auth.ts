import { httpRequest } from "@/utils/request";
import { useStoreUser } from "@/store";

// 账号密码登录
export function AUTH_LOGIN(params: object) {
    return httpRequest("/api/login", "post", {
        data: params
    });
}

// 获取登录用户信息
export function GET_USERINFO(params: object) {
    return httpRequest("/api/getUserinfo", "get", {
        params,
        headers: {
            token: useStoreUser().token
        }
    });
}
