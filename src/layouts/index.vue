<template>
    <div class="geekqoo-admin">
        <n-layout has-sider>
            <layout-sider />
            <n-layout>
                <layout-header />
                <layout-main :class="{ 'layout-default-background': !isDarkTheme }" />
            </n-layout>
        </n-layout>
        <GlobalLoading v-if="storeDesign.globalLoading" />
    </div>
</template>

<script lang="ts" setup>
import { GlobalLoading } from "@/components/GlobalLoading";
import LayoutSider from "./LayoutSider/LayoutSider.vue";
import LayoutHeader from "./LayoutHeader/LayoutHeader.vue";
import LayoutMain from "./LayoutMain/LayoutMain.vue";
import { useStoreDesign, useStoreUser } from "@/store";
import { computed, onMounted, watch } from "vue";
import { usePublic } from "@/hooks";

const { $route } = usePublic();
const storeUser = useStoreUser();
const storeDesign = useStoreDesign();

// 判断当前是不是暗黑主题
const isDarkTheme = computed(() => storeDesign.currentTheme === "darkTheme");

onMounted(async () => {
    await storeUser.requestUserData();
});
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
