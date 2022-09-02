<template>
    <n-config-provider
        :date-locale="dateZhCN"
        :locale="zhCN"
        :theme="currentTheme"
        :theme-overrides="getThemeOverrides"
    >
        <n-loading-bar-provider>
            <n-dialog-provider>
                <n-notification-provider>
                    <n-message-provider>
                        <slot name="default" />
                        <naive-provider-content />
                    </n-message-provider>
                </n-notification-provider>
            </n-dialog-provider>
        </n-loading-bar-provider>
    </n-config-provider>
</template>

<script lang="ts" setup>
import { computed, defineComponent, h } from "vue";
import {
    darkTheme,
    dateZhCN,
    lightTheme,
    NConfigProvider,
    NLoadingBarProvider,
    NDialogProvider,
    NNotificationProvider,
    NMessageProvider,
    zhCN,
    useLoadingBar,
    useDialog,
    useMessage,
    useNotification
} from "naive-ui";
import { useStoreDesign } from "@/store";
import { lighten } from "@/utils/theme";

const storeDesign = useStoreDesign();

// 当前主题
let currentTheme = computed(() => {
    return storeDesign.getCurrentTheme === "darkTheme" ? darkTheme : lightTheme;
});

let themeColor = "#409eff";

let getThemeOverrides = computed(() => {
    return {
        common: {
            primaryColor: themeColor,
            primaryColorHover: lighten(themeColor, 6),
            primaryColorPressed: lighten(themeColor, 6)
        },
        LoadingBar: {
            colorLoading: themeColor
        }
    };
});

// 全局挂载
const registerNaiveTools = () => {
    window.$loadingBar = useLoadingBar();
    window.$dialog = useDialog();
    window.$message = useMessage();
    window.$notification = useNotification();
};

const NaiveProviderContent = defineComponent({
    name: "NaiveProviderContent",
    setup() {
        registerNaiveTools();
    },
    render() {
        return h("div", { class: "naive-provider-content" });
    }
});
</script>
