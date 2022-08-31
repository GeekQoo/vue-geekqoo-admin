<template>
    <div class="header-navigation">
        <div class="navigation-wrapper">
            <n-scrollbar x-scrollable>
                <n-space :wrap="false">
                    <n-tag
                        v-for="item in storeNavigation.getNavigation"
                        :closable="storeNavigation.getNavigation.length > 1"
                        :type="$route.name === item.name ? 'success' : 'default'"
                        closable
                        size="medium"
                        @click="navigationTo(item)"
                        @close.stop="deleteNavigation(item)"
                    >
                        {{ item.title }}
                    </n-tag>
                </n-space>
            </n-scrollbar>
        </div>
        <div class="navigation-settings">
            <n-dropdown :options="settingOptions" trigger="hover" @select="handelSetting">
                <n-button class="setting-button" text>
                    <n-icon size="22">
                        <BarsOutlined />
                    </n-icon>
                </n-button>
            </n-dropdown>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { NDropdown, NIcon, NScrollbar, NSpace, NTag, NButton } from "naive-ui";
import { BarsOutlined } from "@vicons/antd";
import { ref } from "vue";
import { useStoreNavigation } from "@/store";
import type { NavigationProps } from "./types";
import { usePubilc } from "@/hooks";

let { $route, $router } = usePubilc();
let storeNavigation = useStoreNavigation();

// 导航跳转
let navigationTo = (item: NavigationProps) => {
    $router.push({ name: item.name });
};

// 删除导航
let deleteNavigation = (item: NavigationProps) => {
    let nav = storeNavigation.getNavigation.filter((citem) => item !== citem);
    storeNavigation.setNavigation(nav);
    if ($route.name === item.name) navigationTo(nav[0]);
};

// 导航设置
let settingOptions = ref([
    {
        label: "关闭全部",
        key: "closeAll"
    }
]);

let handelSetting = (key: string | number) => {
    if (key === "closeAll") deleteAllNavigation();
};

// 删除全部
let deleteAllNavigation = () => {
    let nav = storeNavigation.getNavigation.filter((item: NavigationProps, index: number) => index === 0);
    storeNavigation.setNavigation(nav);
    navigationTo(nav[0]);
};
</script>

<style lang="scss" scoped>
.header-navigation {
    display: flex;
    align-items: center;

    .navigation-wrapper {
        width: calc(100% - 40px);
        display: flex;
        align-items: center;

        :deep(.n-scrollbar) {
            padding: 15px 0;

            .n-tag {
                cursor: pointer;
            }
        }
    }

    .navigation-settings {
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
