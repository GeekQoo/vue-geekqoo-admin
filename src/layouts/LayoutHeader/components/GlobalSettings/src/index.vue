<template>
    <div class="global-settings">
        <n-icon size="22" @click="settingsActive = !settingsActive">
            <Settings28Regular />
        </n-icon>
        <n-drawer v-model:show="settingsActive" :width="300" placement="right">
            <n-drawer-content title="设置面板"></n-drawer-content>
        </n-drawer>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { NDrawer, NDrawerContent, NIcon } from "naive-ui";
import { Settings28Regular } from "@vicons/fluent";

// 设置面板抽屉开关
let settingsActive = ref(false);
</script>
