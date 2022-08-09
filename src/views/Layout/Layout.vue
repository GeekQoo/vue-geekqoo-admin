<template>
    <div class="geekqoo-admin">
        <n-config-provider :date-locale="dateZhCN" :locale="zhCN" :theme="currentTheme">
            <n-layout has-sider>
                <layout-sider />
                <n-layout>
                    <layout-header v-model:current-theme="currentTheme" />
                    <layout-main />
                </n-layout>
            </n-layout>
        </n-config-provider>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { dateZhCN, NConfigProvider, NLayout, zhCN } from "naive-ui";
import LayoutSider from "./LayoutSider.vue";
import LayoutHeader from "./LayoutHeader.vue";
import LayoutMain from "./LayoutMain.vue";

// 当前主题
let currentTheme = ref(null);
</script>

<style lang="scss" scoped>
.geekqoo-admin {
    :deep(.n-layout-sider) {
        position: relative;
        z-index: 999;
        height: 100vh;
        box-shadow: 0 1px 4px rgba(#000000, 0.1);
    }

    :deep(.n-layout-header) {
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

    :deep(.n-layout-content) {
        height: calc(100vh - 115px);

        .page-container {
            padding: 15px 15px 15px 15px;
        }
    }
}
</style>
