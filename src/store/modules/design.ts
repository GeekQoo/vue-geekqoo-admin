import { defineStore } from "pinia";
import { getLocalStorage, setLocalStorage } from "@/utils/storage";

interface DesignProps {
    currentTheme: string;
}

export const useStoreDesign = defineStore({
    id: "design",
    state: (): DesignProps => ({
        currentTheme: getLocalStorage("currentTheme") || "lightTheme"
    }),
    getters: {
        getCurrentTheme: (state): string => state.currentTheme
    },
    actions: {
        setCurrentTheme(value: string) {
            this.currentTheme = value;
            setLocalStorage("currentTheme", value);
        }
    }
});
