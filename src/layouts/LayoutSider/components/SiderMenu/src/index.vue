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
import { usePubilc } from "@/hooks";
import { useStoreDesign, useStoreUser } from "@/store";

let storeUser = useStoreUser();
let storeDesign = useStoreDesign();
let { $route, $router } = usePubilc();

// 当前选中
let menuActive = computed(() => $route.name as string);

// 当前展开
let expandedKeys = ref<any[]>([]);

// 菜单点击跳转
let handleUpdateMenu = (key: string) => $router.push({ name: key });

// 菜单内容
let menuOptions = ref<any[]>([]);

let setMenu = () => {
    expandedKeys.value = [storeUser.getHeaderMenuActive];
    if (storeDesign.getMenuMode === "linkage") {
        let currentMenu: any[] = [];
        storeUser.getUserData.menu?.forEach((item) => {
            if (item.key === storeUser.getHeaderMenuActive) currentMenu.push(item);
        });
        menuOptions.value = currentMenu;
    } else {
        menuOptions.value = storeUser.getUserData.menu as any[];
    }
};

watch(
    () => [storeUser, storeDesign.getMenuMode],
    () => setMenu(),
    { deep: true, immediate: true }
);
</script>
