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
                        v-model:value="pageAnimation.active"
                        :options="pageAnimation.options"
                        class="ml-a w-36"
                        @update:value="changePageAnimation"
                    />
                </div>
            </n-drawer-content>
        </n-drawer>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { NDrawer, NDrawerContent, NIcon, NSelect } from "naive-ui";
import { Settings28Regular } from "@vicons/fluent";
import { ThemeSwitch } from "../../ThemeSwitch";
import { useStoreDesign } from "@/store";

let storeDesign = useStoreDesign();

// 设置面板抽屉开关
let settingsActive = ref(false);

// 设置页面切换动画
let pageAnimation = ref({
    active: storeDesign.getPageAnimation,
    options: [
        { label: "滑动", value: "fade-slide" },
        { label: "消退", value: "fade" },
        { label: "底部消退", value: "fade-bottom" },
        { label: "缩放消退", value: "fade-scale" },
        { label: "渐变", value: "zoom-fade" },
        { label: "闪现", value: "zoom-out" }
    ]
});

let changePageAnimation = (val: string) => {
    storeDesign.setPageAnimation(val);
};
</script>
