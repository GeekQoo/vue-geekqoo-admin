import { defineStore } from "pinia";
import { clearLocalStorage, getLocalStorage, setLocalStorage } from "@/utils/storage";

export const useStoreNavigation = defineStore({
    id: "navigation",
    state: (): { navigation: Array<any> } => ({
        navigation: getLocalStorage("navigation") || [],
    }),
    getters: {
        getNavigation: (state): Array<any> => state.navigation,
    },
    actions: {
        setNavigation(value: Array<any>) {
            this.navigation = value;
            setLocalStorage("navigation", value);
        },
        clearNavigation() {
            this.navigation = [];
            clearLocalStorage("navigation");
        },
    },
});
