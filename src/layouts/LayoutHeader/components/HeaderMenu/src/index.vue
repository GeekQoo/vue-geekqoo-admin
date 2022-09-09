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
import { renderDynamicIcon } from "@/components/DynamicIcon";

let { $route, $router } = usePubilc();

let menuActive = computed(() => $route.name as string);

let menuOptions: MenuOption[] = [
    {
        label: "用户管理",
        key: 0,
        icon: renderDynamicIcon("UserOutlined")
    }
];

let handleUpdateMenu = (key: string, item: MenuOption) => {
    $router.push({ name: key });
};
</script>

<style lang="scss" scoped>
.header-menu {
    :deep(.n-menu) {
        .n-menu-item {
            .n-menu-item-content {
                &:first-child {
                    padding-left: 0;
                }
            }
        }
    }
}
</style>
