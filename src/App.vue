<template>
    <naive-provider>
        <router-view />
    </naive-provider>
</template>

<script lang="ts" setup>
import { NaiveProvider } from "@/components/NaiveProvider";
// 模拟获取用户信息
import { GET_USERINFO } from "@/api/auth";
import { onMounted } from "vue";
import { useStoreUser } from "@/store";
import type { MenuOption } from "naive-ui";
import { renderDynamicIcon } from "@/components/DynamicIcon";

let storeUser = useStoreUser();

onMounted(() => {
    getUserInfo();
});

let getMenus = (menu: MenuOption[]) => {
    return menu.map((item: MenuOption) => {
        if (item.icon) {
            item.icon = renderDynamicIcon(item.icon as any);
        }
        if (item.children) {
            item.children = getMenus(item.children);
        }
        return item;
    });
};

let getUserInfo = () => {
    GET_USERINFO({}).then((res) => {
        res.data.data.menu = getMenus(res.data.data.menu);
        storeUser.setUserData(res.data.data);
        console.log(1111, res.data.data);
    });
};
</script>

<style lang="scss"></style>
