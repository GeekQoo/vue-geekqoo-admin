import { defineStore } from "pinia";
import { clearLocalStorage, getLocalStorage, setLocalStorage } from "@/utils/storage";

export const useStoreNavigation = defineStore({
    id: "navigation",
    state: (): { navigation: App.NavigationProps[] } => ({
        navigation: getLocalStorage("navigation") || []
    }),
    actions: {
        setNavigation(value: App.NavigationProps[]) {
            this.navigation = value;
            setLocalStorage("navigation", value);
        },
        clearNavigation() {
            this.navigation = [];
            clearLocalStorage("navigation");
        }
    }
});
