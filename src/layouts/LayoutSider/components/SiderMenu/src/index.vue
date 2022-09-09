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
import { computed, ref } from "vue";
import { NMenu } from "naive-ui";
import type { MenuOption } from "naive-ui";
import { usePubilc } from "@/hooks";
import { useStoreUser } from "@/store";

let userStore = useStoreUser();
let { $route, $router } = usePubilc();

let menuActive = computed(() => $route.name as string);

let expandedKeys = ref<Array<string | number>>([]);

// 左侧单菜单模式
// let menuOptions = computed(() => userStore.getUserData.menu);
// 左上侧多菜单模式
let menuOptions = computed(() => {
    let currentMenu: MenuOption[] = [];
    userStore.getUserData.menu?.forEach((item) => {
        if (item.key === userStore.getHeaderMenuActive) {
            if (item.children && item.children.length > 0) {
                $router.push({ name: item.children[0].key as string });
            }
            expandedKeys.value = [userStore.getHeaderMenuActive];
            currentMenu = [item];
        }
    });
    return currentMenu;
});

// 菜单点击跳转
let handleUpdateMenu = (key: string) => $router.push({ name: key });
</script>
