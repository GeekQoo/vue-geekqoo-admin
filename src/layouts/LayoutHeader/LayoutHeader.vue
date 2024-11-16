<template>
    <n-layout-header>
        <div class="toolbar flex-y-center">
            <page-breadcrumb />
            <n-space class="ml-a" align="center" size="medium">
                <full-screen />
                <global-settings />
                <current-user />
            </n-space>
        </div>
        <navigation-tags />
    </n-layout-header>
</template>

<script lang="ts" setup>
import { NavigationTags, GlobalSettings, CurrentUser, FullScreen, PageBreadcrumb } from "./components";
</script>
