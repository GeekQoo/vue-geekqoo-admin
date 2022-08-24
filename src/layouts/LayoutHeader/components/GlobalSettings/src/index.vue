<template>
    <div class="global-settings">
        <n-icon class="block cursor-pointer" size="22" @click="settingsActive = !settingsActive">
            <Settings28Regular />
        </n-icon>
        <n-drawer v-model:show="settingsActive" :width="300" placement="right">
            <n-drawer-content title="设置面板">
                <div class="flex-y-center mb">
                    <span>主题模式</span>
                    <theme-switch class="ml-a" />
                </div>
            </n-drawer-content>
        </n-drawer>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { NDrawer, NDrawerContent, NIcon } from "naive-ui";
import { Settings28Regular } from "@vicons/fluent";
import { ThemeSwitch } from "../../ThemeSwitch";

// 设置面板抽屉开关
let settingsActive = ref(false);
</script>
