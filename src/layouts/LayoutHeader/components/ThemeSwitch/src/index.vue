<template>
    <div class="theme-switch">
        <n-switch
            v-model:value="isDarkTheme"
            :rail-style="themeSwitchStyle"
            size="medium"
            @update:value="handleCurrentTheme"
        >
            <template #checked>
                <n-icon color="#ffd93b" size="20">
                    <WeatherSunny28Filled />
                </n-icon>
            </template>
            <template #unchecked>
                <n-icon color="#ffd93b" size="20">
                    <WeatherMoon16Filled />
                </n-icon>
            </template>
        </n-switch>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { WeatherMoon16Filled, WeatherSunny28Filled } from "@vicons/fluent";
import { useStoreDesign } from "@/store";

let storeDesign = useStoreDesign();

// 切换主题
let isDarkTheme = ref(storeDesign.currentTheme === "darkTheme");
let themeSwitchStyle = () => ({ background: "#333333" });
let handleCurrentTheme = (val: boolean) => {
    val ? storeDesign.setCurrentTheme("darkTheme") : storeDesign.setCurrentTheme("lightTheme");
};
</script>

<style lang="scss" scope>
.theme-switch {
    display: flex;
    align-items: center;
}
</style>
