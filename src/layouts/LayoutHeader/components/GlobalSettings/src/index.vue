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
                <div class="flex-y-center mb">
                    <span>切换动画</span>
                    <n-select
                        :options="pageAnimationPreset"
                        :value="storeDesign.pageAnimation"
                        class="ml-a w-36"
                        @update:value="changePageAnimation"
                    />
                </div>
                <div class="flex-y-center mb">
                    <span>主题颜色</span>
                    <n-color-picker
                        :show-alpha="false"
                        :swatches="themeColorPreset"
                        :value="storeDesign.themeColor"
                        class="ml-a w-36"
                        @update:value="changeThemeColor"
                    />
                </div>
                <div class="flex-y-center mb">
                    <span>页面大小</span>
                    <n-select
                        :options="pageZoomPreset"
                        :value="storeDesign.pageZoom"
                        class="ml-a w-36"
                        @update:value="changePageZoom"
                    />
                </div>
            </n-drawer-content>
        </n-drawer>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Settings28Regular } from "@vicons/fluent";
import { ThemeSwitch } from "../../ThemeSwitch";
import { useStoreDesign } from "@/store";
import { pageAnimationPreset, pageZoomPreset, themeColorPreset } from "@/setttings/theme";

let storeDesign = useStoreDesign();

// 设置面板抽屉开关
let settingsActive = ref(false);

let changePageAnimation = (val: string) => {
    storeDesign.setPageAnimation(val);
};

// 主题颜色
let changeThemeColor = (val: string) => {
    storeDesign.setThemeColor(val);
};

// 页面缩放
let changePageZoom = (val: number) => {
    document.body.style.cssText = `zoom: ${val}`;
    storeDesign.setPageZoom(val);
};
</script>
