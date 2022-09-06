<template>
    <n-layout-header>
        <div class="toolbar flex-y-center">
            <!--<page-breadcrumb />-->
            <header-menu />
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
import { HeaderMenu, NavigationTags, GlobalSettings, CurrentUser, FullScreen } from "./components";
</script>
