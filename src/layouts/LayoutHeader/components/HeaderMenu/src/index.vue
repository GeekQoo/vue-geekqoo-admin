<template>
    <div class="header-menu">
        <n-menu :options="menuOptions" :value="menuActive" mode="horizontal" @update:value="handleUpdateMenu" />
    </div>
</template>

<script lang="ts" setup>
import { computed, h } from "vue";
import type { MenuOption } from "naive-ui";
import { NMenu } from "naive-ui";
import { usePubilc } from "@/hooks";
import { DynamicIcon } from "@/components/DynamicIcon";

let { $route, $router } = usePubilc();

let menuActive = computed(() => $route.name as string);

let menuOptions: MenuOption[] = [
    {
        label: "用户管理",
        key: 0,
        icon: () => h(DynamicIcon, { icon: "UserOutlined" })
    }
];

let handleUpdateMenu = (key: string, item: MenuOption) => {
    $router.push({ name: key });
};
</script>
