<template>
    <n-layout-header>
        <div class="toolbar">
            <n-breadcrumb>
                <n-breadcrumb-item>测试菜单1</n-breadcrumb-item>
                <n-breadcrumb-item>测试菜单1-1</n-breadcrumb-item>
            </n-breadcrumb>
            <global-settings />
            <theme-switch />
        </div>
        <navigation-tags />
    </n-layout-header>
</template>

<script lang="ts" setup>
import { NBreadcrumb, NBreadcrumbItem, NLayoutHeader } from "naive-ui";
import { NavigationTags } from "./components/NavigationTags";
import { GlobalSettings } from "./components/GlobalSettings";
import { ThemeSwitch } from "./components/ThemeSwitch";
</script>
