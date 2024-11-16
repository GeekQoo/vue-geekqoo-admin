<template>
    <n-menu
        v-model:expanded-keys="expandedKeys"
        :collapsed-width="80"
        :options="menuOptions"
        :value="menuActive"
        :width="200"
        mode="vertical"
        @update:value="handleUpdateMenu"
    />
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { usePublic } from "@/hooks";
import { useStoreUser } from "@/store";
import { renderDynamicIcon } from "@/components/Dynamic";
import type { MenuOption } from "naive-ui";

const storeUser = useStoreUser();
const { $route, $router } = usePublic();

// 当前选中
const menuActive = computed(() => $route.name as string);

// 当前展开
const expandedKeys = ref<string[]>([]);

const getExpandedKeys = (menu: App.MenuProps[]): string[] => {
    let keys: string[] = [];
    menu.forEach((item) => {
        if (item.children && item.children.length > 0) {
            keys.push(item.key);
            keys = keys.concat(getExpandedKeys(item.children));
        }
    });
    return keys;
};

// 菜单点击跳转
const handleUpdateMenu = (key: string) => $router.push({ name: key });

// 菜单内容
const menuOptions = ref<MenuOption[]>([]);

const setMenu = () => {
    let getMenus = (menu: App.MenuProps[]): MenuOption[] => {
        return (menu ?? []).map((item) => {
            return {
                label: item.label,
                key: item.key,
                icon: item.icon ? renderDynamicIcon(item.icon) : undefined,
                children: item.children ? getMenus(item.children) : undefined
            };
        });
    };

    menuOptions.value = getMenus(storeUser.userData.menu ?? []);
    expandedKeys.value = getExpandedKeys(storeUser.userData.menu ?? []);
};

watch(
    () => [storeUser],
    () => setMenu(),
    { deep: true, immediate: true }
);
</script>
