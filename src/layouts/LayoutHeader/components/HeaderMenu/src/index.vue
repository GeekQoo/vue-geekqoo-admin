<template>
    <div class="header-menu">
        <n-menu :options="menuOptions" :value="menuActive" mode="horizontal" @update:value="handleUpdateMenu" />
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStoreUser } from "@/store";
import { usePubilc } from "@/hooks";

let storeUser = useStoreUser();
let { $router } = usePubilc();

let menuActive = computed(() => storeUser.getHeaderMenuActive);

let menuOptions = computed(() => {
    return storeUser.getUserData.menu?.map((item) => {
        return {
            label: item.label,
            key: item.key,
            icon: item.icon
        };
    });
});

let handleUpdateMenu = (key: string | number) => {
    // storeUser.setHeaderMenuActive(key);
    storeUser.getUserData.menu?.forEach((item) => {
        if (key === item.key && item.children && item.children.length) {
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
