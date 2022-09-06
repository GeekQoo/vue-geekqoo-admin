<template>
    <div class="header-menu">
        <n-menu :options="menuOptions" :value="menuActive" mode="horizontal" @update:value="handleUpdateMenu" />
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { UserOutlined } from "@vicons/antd";
import type { MenuOption } from "naive-ui";
import { NMenu } from "naive-ui";
import { usePubilc, useRender } from "@/hooks";

let { $route, $router } = usePubilc();
let { renderIcon } = useRender();

let menuActive = computed(() => $route.name as string);

let menuOptions: MenuOption[] = [
    {
        label: "用户管理",
        key: 0,
        icon: renderIcon(UserOutlined)
    }
];

let handleUpdateMenu = (key: string, item: MenuOption) => {
    $router.push({ name: key });
};
</script>
