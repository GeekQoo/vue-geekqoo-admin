import { defineStore } from "pinia";
import { getLocalStorage, setLocalStorage } from "@/utils/storage";
import { defaultThemeConfig } from "@/setttings/theme";

interface DesignProps {
    currentTheme: string;
    pageAnimation: string;
    themeColor: string;
}

export const useStoreDesign = defineStore({
    id: "design",
    state: (): DesignProps => ({
        currentTheme: getLocalStorage("currentTheme") || defaultThemeConfig.currentTheme,
        pageAnimation: getLocalStorage("pageAnimation") || defaultThemeConfig.pageAnimation,
        themeColor: getLocalStorage("themeColor") || defaultThemeConfig.themeColor
    }),
    getters: {
        getCurrentTheme: (state): string => state.currentTheme,
        getPageAnimation: (state): string => state.pageAnimation,
        getThemeColor: (state): string => state.themeColor
    },
    actions: {
        setCurrentTheme(value: string) {
            this.currentTheme = value;
            setLocalStorage("currentTheme", value);
        },
        setPageAnimation(value: string) {
            this.pageAnimation = value;
            setLocalStorage("pageAnimation", value);
        },
        setThemeColor(value: string) {
            this.themeColor = value;
            setLocalStorage("themeColor", value);
        }
    }
});
