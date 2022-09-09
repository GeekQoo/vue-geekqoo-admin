<template>
    <n-layout-header>
        <div class="toolbar flex-y-center">
            <header-menu v-if="storeDesign.getMenuMode === 'linkage'" />
            <page-breadcrumb v-else />
            <n-space class="ml-a" align="center" size="medium">
                <full-screen />
                <global-settings />
                <current-user />
                <!--<theme-switch />-->
            </n-space>
        </div>
        <navigation-tags />
    </n-layout-header>
</template>

<script lang="ts" setup>
import { NLayoutHeader, NSpace } from "naive-ui";
import { HeaderMenu, NavigationTags, GlobalSettings, CurrentUser, FullScreen, PageBreadcrumb } from "./components";
import { useStoreDesign } from "@/store";

let storeDesign = useStoreDesign();
</script>
