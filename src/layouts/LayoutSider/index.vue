<template>
    <n-layout-sider
        :collapsed-width="80"
        :native-scrollbar="false"
        :width="200"
        collapse-mode="width"
        show-trigger="bar"
    >
        <n-menu v-model:value="menuActive" :collapsed-width="80" :options="menuOptions" :width="200" mode="vertical" />
    </n-layout-sider>
</template>

<script lang="ts" setup>
import { h, ref, watch } from "vue";
import { WeatherMoon16Filled } from "@vicons/fluent";
import type { MenuOption } from "naive-ui";
import { NLayoutSider, NMenu } from "naive-ui";
import { usePubilc } from "@/hooks/usePubilc";
import type { RouteRecordName } from "vue-router";
import { RouterLink } from "vue-router";

let { renderIcon, $route } = usePubilc();

// 菜单
let menuActive = ref<RouteRecordName | null | undefined>($route.name);

watch(
    () => $route,
    (val) => (menuActive.value = val.name),
    { immediate: true, deep: true }
);

let menuOptions = ref<MenuOption[]>([
    {
        label: "权限管理",
        key: 0,
        icon: renderIcon(WeatherMoon16Filled),
        children: [
            {
                label: () => {
                    return h(
                        RouterLink,
                        {
                            to: {
                                name: "UserList"
                            }
                        },
                        { default: () => "用户管理" }
                    );
                },
                key: "UserList"
            },
            {
                label: () => {
                    return h(
                        RouterLink,
                        {
                            to: {
                                name: "RoleList"
                            }
                        },
                        { default: () => "角色管理" }
                    );
                },
                key: "RoleList"
            }
        ]
    }
]);
</script>
