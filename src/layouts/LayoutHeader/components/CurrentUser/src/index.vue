<template>
    <div class="current-user">
        <n-dropdown :options="settingOptions" trigger="hover" @select="handelSetting">
            <div class="flex-y-center cursor-pointer">
                <n-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                <span class="ml-2">超级管理员</span>
            </div>
        </n-dropdown>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { NDropdown, NAvatar } from "naive-ui";
import { UserOutlined, LogoutOutlined } from "@vicons/antd";
import { useRender } from "@/hooks";

let { renderIcon } = useRender();

let settingOptions = ref([
    { label: "用户中心", key: "userCenter", icon: renderIcon(UserOutlined) },
    { label: "退出登录", key: "logout", icon: renderIcon(LogoutOutlined) }
]);

let handelSetting = (key: string | number) => {};
</script>
