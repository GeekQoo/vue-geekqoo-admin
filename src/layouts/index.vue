<template>
    <div class="geekqoo-admin">
        <n-layout has-sider>
            <layout-sider />
            <n-layout>
                <layout-header />
                <layout-main :class="{ 'layout-default-background': !isDarkTheme }" />
            </n-layout>
        </n-layout>
    </div>
</template>

<script lang="ts" setup>
import type { MenuOption } from "naive-ui";
import { LayoutSider } from "./LayoutSider";
import { LayoutHeader } from "./LayoutHeader";
import { LayoutMain } from "./LayoutMain";
import { useStoreDesign, useStoreUser } from "@/store";
import { computed, onMounted, watch } from "vue";
import { usePublic } from "@/hooks";

let { $route } = usePublic();
let storeUser = useStoreUser();
let storeDesign = useStoreDesign();

// 判断当前是不是暗黑主题
let isDarkTheme = computed(() => storeDesign.getCurrentTheme === "darkTheme");

// 刷新获取用户信息
onMounted(async () => {
    await storeUser.requestUserData();
    updateHeaderMenuActive();
});

// 更新headerMenuActive
let updateHeaderMenuActive = () => {
    storeUser.getUserData?.menu?.forEach((item: MenuOption) => {
        item.children?.forEach((citem) => {
            if ($route.name === citem.key) storeUser.setHeaderMenuActive(item.key);
        });
    });
};

watch(
    () => $route.name,
    () => updateHeaderMenuActive()
);
</script>

<style lang="scss">
.geekqoo-admin {
    .n-layout-sider {
        position: relative;
        z-index: 999;
        height: 100vh;
        box-shadow: 0 1px 4px rgba(#000000, 0.1);
    }

    .n-layout-header {
        position: relative;
        z-index: 888;
        padding: 0 15px;
        box-shadow: 0 1px 4px rgba(#000000, 0.1);

        .toolbar {
            height: 56px;
            border-bottom: 1px solid var(--n-border-color);

            .n-breadcrumb {
                margin-right: auto;
            }
        }
    }

    .n-layout-content {
        height: calc(100vh - 115px);

        .page-container {
            padding: 15px 15px 15px 15px;
        }
    }

    .layout-default-background {
        background: #f8f8f8;
    }
}
</style>
