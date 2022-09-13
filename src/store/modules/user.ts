import { defineStore } from "pinia";
import { delCookie, getCookie, getSessionStorage, setCookie, setSessionStorage } from "@/utils/storage";
import { GET_USERINFO } from "@/api/auth";
import { renderDynamicIcon } from "@/components/DynamicIcon";
import type { MenuOption } from "naive-ui";
import { useStoreDesign } from "@/store";

interface UserDataProps {
    username?: string;
    avatar?: string;
    menu?: MenuOption[];
}

interface StateProps {
    token: string;
    userData: UserDataProps;
    headerMenuActive: string | number;
}

export const useStoreUser = defineStore({
    id: "user",
    state: (): StateProps => ({
        token: getCookie("token") || "",
        userData: {},
        headerMenuActive: getSessionStorage("headerMenuActive") || 0
    }),
    getters: {
        getToken: (state): string => state.token,
        getUserData: (state): UserDataProps => state.userData as any,
        getHeaderMenuActive: (state): string | number => state.headerMenuActive
    },
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
        setUserData(value: UserDataProps) {
            this.userData = value as any;
        },
        requestUserData() {
            let storeDesign = useStoreDesign();
            storeDesign.setGlobalLoading(true);
            let getMenus = (menu: any[]) => {
                return menu.map((item: any) => {
                    if (item.icon) item.icon = renderDynamicIcon(item.icon as any);
                    if (item.children) item.children = getMenus(item.children);
                    return item;
                });
            };
            return new Promise((resolve) => {
                GET_USERINFO({}).then((res) => {
                    if (res.data.code === 1) {
                        res.data.data.menu = getMenus(res.data.data.menu);
                        this.setUserData(res.data.data);
                        storeDesign.setGlobalLoading(false);
                        resolve(res.data.data);
                    }
                });
            });
        },
        setHeaderMenuActive(value: string | number) {
            this.headerMenuActive = value;
            setSessionStorage("headerMenuActive", value);
        }
    }
});
