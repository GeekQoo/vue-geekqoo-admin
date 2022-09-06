<template>
    <n-layout-header>
        <div class="toolbar flex-y-center">
            <page-breadcrumb />
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
import { PageBreadcrumb, NavigationTags, GlobalSettings, CurrentUser, FullScreen, ThemeSwitch } from "./components";
</script>
