import { defineStore } from "pinia";
import { delCookie, getCookie, setCookie } from "@/utils/storage";
import { GET_USERINFO } from "@/api/auth";
import { useStoreDesign, useStoreNavigation } from "@/store";
import type { UserDataProps } from "#/system";

interface StateProps {
    token: string;
    userData: UserDataProps;
}

export const useStoreUser = defineStore({
    id: "user",
    state: (): StateProps => ({
        token: getCookie("token") || "",
        userData: {}
    }),
    actions: {
        setToken(value?: string) {
            if (value) {
                this.token = value;
                setCookie("token", value, 2592000);
            } else {
                this.token = "";
                delCookie("token");
            }
        },
        requestUserData() {
            let storeDesign = useStoreDesign();
            storeDesign.setGlobalLoading(true);
            return new Promise((resolve) => {
                GET_USERINFO<UserDataProps>({}).then((res) => {
                    if (res.data.code === 1) {
                        this.userData = {
                            ...res.data.data,
                            menu: res.data.data?.menu ?? []
                        };
                        storeDesign.setGlobalLoading(false);
                        resolve(res.data.data);
                    }
                });
            });
        },
        logout() {
            return new Promise((resolve) => {
                // 清空导航菜单
                useStoreNavigation().clearNavigation();
                // 清空用户信息
                this.setToken("");
                this.userData = {};
                resolve(true);
            });
        }
    }
});
