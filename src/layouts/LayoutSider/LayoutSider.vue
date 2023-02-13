<template>
    <n-layout-sider
        :collapsed-width="80"
        :native-scrollbar="false"
        :width="200"
        collapse-mode="width"
        show-trigger="bar"
    >
        <sider-menu />
    </n-layout-sider>
</template>

<script lang="ts" setup>
import { SiderMenu } from "./components/SiderMenu";
</script>
