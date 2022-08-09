import { defineStore } from "pinia";
import { clearLocalStorage, delCookie, getCookie, getLocalStorage, setCookie, setLocalStorage } from "@/utils/storage";

interface StateProps {
    token: string;
    userData: object;
}

export const useStoreUser = defineStore({
    id: "user",
    state: (): StateProps => ({
        token: getCookie("token") || "",
        userData: getLocalStorage("userData") || {},
    }),
    getters: {
        getToken: (state): string => state.token,
        getUserData: (state): object => state.userData,
    },
    actions: {
        setToken(value: string) {
            this.token = value;
            setCookie("token", value, 2592000);
        },
        setUserData(value: object) {
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
    },
});
