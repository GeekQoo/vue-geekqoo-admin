import { defineStore } from "pinia";
import { getLocalStorage, setLocalStorage } from "@/utils/storage";

interface DesignProps {
    currentTheme: string;
    pageAnimation: string;
}

export const useStoreDesign = defineStore({
    id: "design",
    state: (): DesignProps => ({
        currentTheme: getLocalStorage("currentTheme") || "lightTheme",
        pageAnimation: getLocalStorage("pageAnimation") || "fade-slide"
    }),
    getters: {
        getCurrentTheme: (state): string => state.currentTheme,
        getPageAnimation: (state): string => state.pageAnimation
    },
    actions: {
        setCurrentTheme(value: string) {
            this.currentTheme = value;
            setLocalStorage("currentTheme", value);
        },
        setPageAnimation(value: string) {
            this.pageAnimation = value;
            setLocalStorage("pageAnimation", value);
        }
    }
});
