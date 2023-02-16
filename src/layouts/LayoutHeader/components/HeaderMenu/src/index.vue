<template>
    <div class="header-menu">
        <n-menu :options="menuOptions" :value="menuActive" mode="horizontal" @update:value="handleUpdateMenu" />
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStoreUser } from "@/store";
import { usePublic } from "@/hooks";

let storeUser = useStoreUser();
let { $router } = usePublic();

let menuActive = computed(() => storeUser.headerMenuActive);

let menuOptions = computed(() => {
    return storeUser.getUserData.menu?.map((item) => {
        return {
            label: item.label,
            key: item.key,
            icon: item.icon
        };
    });
});

let handleUpdateMenu = (key: string) => {
    storeUser.getUserData.menu?.forEach((item) => {
        if (key === item.key && item.children && item.children.length > 0) {
            $router.push({ name: item.children[0].key as string });
        }
    });
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
