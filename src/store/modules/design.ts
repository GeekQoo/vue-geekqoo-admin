import { defineStore } from "pinia";
import { getLocalStorage, setLocalStorage } from "@/utils/storage";
import { defaultThemeConfig } from "@/setttings/theme";

export const useStoreDesign = defineStore({
    id: "design",
    state: (): App.DesignProps => ({
        currentTheme: getLocalStorage("currentTheme") || defaultThemeConfig.currentTheme,
        pageAnimation: getLocalStorage("pageAnimation") || defaultThemeConfig.pageAnimation,
        themeColor: getLocalStorage("themeColor") || defaultThemeConfig.themeColor,
        pageZoom: 1,
        menuMode: getLocalStorage("menuMode") || defaultThemeConfig.menuMode,
        globalLoading: false
    }),
    actions: {
        setCurrentTheme(value: string) {
            this.currentTheme = value;
            setLocalStorage<string>("currentTheme", value);
        },
        setPageAnimation(value: string) {
            this.pageAnimation = value;
            setLocalStorage<string>("pageAnimation", value);
        },
        setThemeColor(value: string) {
            this.themeColor = value;
            setLocalStorage<string>("themeColor", value);
        },
        setPageZoom(value: number) {
            this.pageZoom = value;
        },
        setMenuMode(value: string) {
            this.menuMode = value;
            setLocalStorage<string>("menuMode", value);
        },
        setGlobalLoading(value: boolean) {
            this.globalLoading = value;
        }
    }
});
