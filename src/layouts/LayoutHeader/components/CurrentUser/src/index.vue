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
import { ref } from "vue";
import { NDropdown, NAvatar } from "naive-ui";
import { UserOutlined, LogoutOutlined } from "@vicons/antd";
import { useRender } from "@/hooks";
import { useStoreUser } from "@/store";

let { renderIcon } = useRender();
let storeUser = useStoreUser();

let settingOptions = ref([
    { label: "用户中心", key: "userCenter", icon: renderIcon(UserOutlined) },
    { label: "退出登录", key: "logout", icon: renderIcon(LogoutOutlined) }
]);

let handelSetting = (key: string | number) => {};
</script>
