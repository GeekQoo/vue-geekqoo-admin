<template>
    <n-menu
        :collapsed-width="80"
        :options="menuOptions"
        :value="menuActive"
        :width="200"
        mode="vertical"
        @update:value="handleUpdateMenu"
    />
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
        icon: () => h(DynamicIcon, { icon: "UserOutlined" }),
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
