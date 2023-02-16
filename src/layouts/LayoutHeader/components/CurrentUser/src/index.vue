<template>
    <div class="current-user">
        <n-dropdown :options="settingOptions" trigger="hover" @select="handelSetting">
            <div class="flex-y-center cursor-pointer">
                <n-avatar round size="small" :src="storeUser.userData.avatar" />
                <span class="ml-2">{{ storeUser.userData.username }}</span>
            </div>
        </n-dropdown>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useStoreUser } from "@/store";
import { renderDynamicIcon } from "@/components/DynamicIcon";
import { usePublic } from "@/hooks";

let storeUser = useStoreUser();
let { $router } = usePublic();

let settingOptions = ref([
    { label: "用户中心", key: "userCenter", icon: renderDynamicIcon("UserOutlined") },
    { label: "退出登录", key: "logout", icon: renderDynamicIcon("LogoutOutlined") }
]);

let handelSetting = (key: string | number) => {
    if (key === "logout") {
        storeUser.logout().then(() => $router.push("/login"));
    }
};
</script>
