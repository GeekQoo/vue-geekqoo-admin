import { defineStore } from "pinia";
import { clearLocalStorage, getLocalStorage, setLocalStorage } from "@/utils/storage";
import type { NavigationProps } from "#/system";

export const useStoreNavigation = defineStore({
    id: "navigation",
    state: (): { navigation: NavigationProps[] } => ({
        navigation: getLocalStorage("navigation") || []
    }),
    actions: {
        setNavigation(value: NavigationProps[]) {
            this.navigation = value;
            setLocalStorage<NavigationProps[]>("navigation", value);
        },
        clearNavigation() {
            this.navigation = [];
            clearLocalStorage("navigation");
        }
    }
});
