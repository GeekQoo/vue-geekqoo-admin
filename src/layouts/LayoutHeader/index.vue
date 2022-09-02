<template>
    <n-layout-header>
        <div class="toolbar">
            <n-breadcrumb>
                <n-breadcrumb-item>测试菜单1</n-breadcrumb-item>
                <n-breadcrumb-item>测试菜单1-1</n-breadcrumb-item>
            </n-breadcrumb>
            <n-space align="center" size="medium">
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
import { NBreadcrumb, NBreadcrumbItem, NLayoutHeader, NSpace } from "naive-ui";
import { NavigationTags } from "./components/NavigationTags";
import { GlobalSettings } from "./components/GlobalSettings";
import { CurrentUser } from "./components/CurrentUser";
import { FullScreen } from "./components/FullScreen";
// import { ThemeSwitch } from "./components/ThemeSwitch";
</script>
