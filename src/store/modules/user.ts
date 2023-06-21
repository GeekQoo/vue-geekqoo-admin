import { defineStore } from "pinia";
import {
    clearSessionStorage,
    delCookie,
    getCookie,
    getSessionStorage,
    setCookie,
    setSessionStorage
} from "@/utils/storage";
import { GET_USERINFO } from "@/api/auth";
import { renderDynamicIcon } from "@/components/Dynamic";
import { useStoreDesign, useStoreNavigation } from "@/store";

interface StateProps {
    token: string;
    userData: App.UserDataProps;
    headerMenuActive: string;
}

export const useStoreUser = defineStore({
    id: "user",
    state: (): StateProps => ({
        token: getCookie("token") || "",
        userData: {},
        headerMenuActive: getSessionStorage("headerMenuActive")
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
            let getMenus = (menu: App.MenuProps[]) => {
                return menu.map((item) => {
                    if (item.icon) item.icon = renderDynamicIcon(item.icon as any);
                    if (item.children) item.children = getMenus(item.children);
                    return item;
                });
            };
            return new Promise((resolve) => {
                GET_USERINFO<App.UserDataProps>({}).then((res) => {
                    if (res.data.code === 1) {
                        let menus = getMenus(res.data.data!.menu!);
                        this.userData = {
                            ...res.data.data,
                            menu: menus as any
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
                // 清空顶部菜单activeIndex
                this.setHeaderMenuActive();
                // 清空用户信息
                this.setToken("");
                this.userData = {};
                resolve(true);
            });
        },
        setHeaderMenuActive(value?: string) {
            if (value || value === "0") {
                this.headerMenuActive = value;
                setSessionStorage("headerMenuActive", value);
            } else {
                this.headerMenuActive = "";
                clearSessionStorage("headerMenuActive");
            }
        }
    }
});
