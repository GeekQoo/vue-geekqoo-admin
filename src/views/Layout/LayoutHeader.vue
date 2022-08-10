<template>
    <n-layout-header>
        <div class="toolbar">
            <n-breadcrumb>
                <n-breadcrumb-item>测试菜单1</n-breadcrumb-item>
                <n-breadcrumb-item>测试菜单1-1</n-breadcrumb-item>
            </n-breadcrumb>
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
        <layout-navigation />
    </n-layout-header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { WeatherMoon16Filled, WeatherSunny28Filled } from "@vicons/fluent";
import { NBreadcrumb, NBreadcrumbItem, NIcon, NLayoutHeader, NSwitch } from "naive-ui";
import { LayoutNavigation } from "./components/LayoutNavigation";
import { useStoreDesign } from "@/store/modules/design";

let storeDesign = useStoreDesign();

// 切换主题
let isDarkTheme = ref(storeDesign.getCurrentTheme === "darkTheme");
let themeSwitchStyle = () => ({ background: "#333333" });
let handleCurrentTheme = (val: boolean) => {
    val ? storeDesign.setCurrentTheme("darkTheme") : storeDesign.setCurrentTheme("lightTheme");
};
</script>
