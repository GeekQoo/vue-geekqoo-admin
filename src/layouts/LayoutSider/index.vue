<template>
    <n-layout-sider
        :collapsed-width="80"
        :native-scrollbar="false"
        :width="200"
        collapse-mode="width"
        show-trigger="bar"
    >
        <n-menu
            :collapsed-width="80"
            :options="menuOptions"
            :value="menuActive"
            :width="200"
            mode="vertical"
            @update:value="handleUpdateMenu"
        />
    </n-layout-sider>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { WeatherMoon16Filled } from "@vicons/fluent";
import type { MenuOption } from "naive-ui";
import { NLayoutSider, NMenu } from "naive-ui";
import { usePubilc } from "@/hooks/usePubilc";

let { renderIcon, $route, $router } = usePubilc();

// 菜单
let menuActive = computed(() => $route.name as string);

let menuOptions: MenuOption[] = [
    {
        label: "权限管理",
        key: 0,
        icon: renderIcon(WeatherMoon16Filled),
        children: [
            {
                label: "用户管理",
                key: "UserList"
            },
            {
                label: "角色管理",
                key: "RoleList"
            }
        ]
    }
];

let handleUpdateMenu = (key: string, item: MenuOption) => {
    $router.push({ name: key });
};
</script>
