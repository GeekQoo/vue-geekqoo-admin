<template>
    <n-layout-header>
        <div class="toolbar">
            <n-breadcrumb>
                <n-breadcrumb-item>测试菜单1</n-breadcrumb-item>
                <n-breadcrumb-item>测试菜单1-1</n-breadcrumb-item>
            </n-breadcrumb>
            <n-space size="small">
                <global-settings />
                <!--<theme-switch />-->
            </n-space>
        </div>
        <navigation-tags />
    </n-layout-header>
</template>

<script lang="ts" setup>
import { NLayoutHeader, NBreadcrumb, NBreadcrumbItem, NSpace } from "naive-ui";
import { NavigationTags } from "./components/NavigationTags";
import { GlobalSettings } from "./components/GlobalSettings";
// import { ThemeSwitch } from "./components/ThemeSwitch";
</script>
