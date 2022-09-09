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
import { computed } from "vue";
import { NMenu } from "naive-ui";
import { usePubilc } from "@/hooks";
import { useStoreUser } from "@/store";

let userStore = useStoreUser();
let { $route, $router } = usePubilc();

let menuActive = computed(() => $route.name as string);
let menuOptions = computed(() => userStore.getUserData.menu);

// 菜单点击跳转
let handleUpdateMenu = (key: string) => $router.push({ name: key });
</script>
