import { defineStore } from "pinia";
import {
    clearLocalStorage,
    delCookie,
    getCookie,
    getLocalStorage,
    getSessionStorage,
    setCookie,
    setLocalStorage,
    setSessionStorage
} from "@/utils/storage";
import type { MenuOption } from "naive-ui";

interface UserDataProps {
    username?: string;
    avatar?: string;
    menu?: MenuOption[];
}

interface StateProps {
    token: string;
    userData: object;
    headerMenuActive: string | number;
}

export const useStoreUser = defineStore({
    id: "user",
    state: (): StateProps => ({
        token: getCookie("token") || "",
        userData: getLocalStorage("userData") || {},
        headerMenuActive: getSessionStorage("headerMenuActive") || 0
    }),
    getters: {
        getToken: (state): string => state.token,
        getUserData: (state): UserDataProps => state.userData,
        getHeaderMenuActive: (state): string | number => state.headerMenuActive
    },
    actions: {
        setToken(value: string) {
            this.token = value;
            setCookie("token", value, 2592000);
        },
        setUserData(value: UserDataProps) {
            this.userData = value;
            setLocalStorage("userData", value);
        },
        clearToken() {
            this.token = "";
            delCookie("token");
        },
        clearUserData() {
            this.userData = {};
            clearLocalStorage("userData");
        },
        setHeaderMenuActive(value: string | number) {
            this.headerMenuActive = value;
            setSessionStorage("headerMenuActive", value);
        }
    }
});
