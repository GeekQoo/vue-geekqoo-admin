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
import { useStoreDesign, useStoreUser } from "@/store";

let storeUser = useStoreUser();
let storeDesign = useStoreDesign();
let { $route, $router } = usePublic();

// 当前选中
let menuActive = computed(() => $route.name as string);

// 当前展开
let expandedKeys = ref<string[]>([]);

// 菜单点击跳转
let handleUpdateMenu = (key: string) => $router.push({ name: key });

// 菜单内容
let menuOptions = ref<App.MenuProps[]>([]);

let setMenu = () => {
    expandedKeys.value = [storeUser.headerMenuActive];
    if (storeDesign.menuMode === "linkage") {
        menuOptions.value =
            storeUser.userData.menu?.filter((item) => {
                return item.key === storeUser.headerMenuActive;
            }) || [];
    } else {
        menuOptions.value = storeUser.userData.menu || [];
    }
};

watch(
    () => [storeUser, storeDesign.menuMode],
    () => setMenu(),
    { deep: true, immediate: true }
);
</script>
