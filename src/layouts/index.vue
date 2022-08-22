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
import { NLayout } from "naive-ui";
import { LayoutSider } from "./LayoutSider";
import { LayoutHeader } from "./LayoutHeader";
import { LayoutMain } from "./LayoutMain";
import { useStoreDesign } from "@/store";
import { computed } from "vue";

let storeDesign = useStoreDesign();
let isDarkTheme = computed(() => storeDesign.getCurrentTheme === "darkTheme");
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
            display: flex;
            align-items: center;
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
