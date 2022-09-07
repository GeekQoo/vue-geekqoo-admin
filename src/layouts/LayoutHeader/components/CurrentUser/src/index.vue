<template>
    <div class="current-user">
        <n-dropdown :options="settingOptions" trigger="hover" @select="handelSetting">
            <div class="flex-y-center cursor-pointer">
                <n-avatar round size="small" :src="storeUser.getUserData.avatar" />
                <span class="ml-2">{{ storeUser.getUserData.username }}</span>
            </div>
        </n-dropdown>
    </div>
</template>

<script lang="ts" setup>
import { h, ref } from "vue";
import { NDropdown, NAvatar } from "naive-ui";
import { useStoreUser } from "@/store";
import { DynamicIcon } from "@/components/DynamicIcon";

let storeUser = useStoreUser();

let settingOptions = ref([
    { label: "用户中心", key: "userCenter", icon: () => h(DynamicIcon, { icon: "UserOutlined" }) },
    { label: "退出登录", key: "logout", icon: () => h(DynamicIcon, { icon: "LogoutOutlined" }) }
]);

let handelSetting = (key: string | number) => {};
</script>
