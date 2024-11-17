<template>
    <div class="full-screen">
        <n-icon class="block cursor-pointer" size="22" @click="toggleFullScreen">
            <FullscreenExitOutlined v-if="isFullScreen" />
            <FullscreenOutlined v-else />
        </n-icon>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { FullscreenOutlined, FullscreenExitOutlined } from "@vicons/antd";

// 切换全屏图标
const isFullScreen = ref(false);

const toggleFullScreenIcon = () => {
    isFullScreen.value = document.fullscreenElement !== null;
};

// 监听全屏切换事件
document.addEventListener("fullscreenchange", toggleFullScreenIcon);

// 全屏切换
const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
    }
};
</script>
