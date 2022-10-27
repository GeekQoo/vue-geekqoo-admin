<template>
    <n-card content-style="padding:0" hoverable>
        <div class="text-24px pl-20px pr-20px lh-60px">控件管理</div>
        <div class="pb-20px" style="height: calc(100vh - 525px)">
            <n-scrollbar>
                <div class="p-20px pb-0">
                    <n-collapse default-expanded-names="1">
                        <n-collapse-item name="1" title="基础控件">
                            <VueDraggable
                                v-model="dragList"
                                :animation="300"
                                :clone="cloneComponent"
                                :forceFallback="true"
                                :group="{ name: 'generator', pull: 'clone', put: false }"
                                :sort="false"
                                chosen-class="draggable-chosen"
                                class="draggable-default grid grid-cols-24 gap-10px"
                                drag-class="draggable-drag"
                                ghost-class="draggable-ghost"
                                group="generator"
                                item-key="index"
                                tag="div"
                            >
                                <template #item="{ element, index }">
                                    <n-tag
                                        :style="`grid-column: span 12 / span 24`"
                                        class="flex-y-center"
                                        size="large"
                                        type="primary"
                                    >
                                        <template #icon>
                                            <dynamic-icon class="mr-2" icon="AppstoreOutlined" size="20" />
                                        </template>
                                        <span>{{ element.name }}</span>
                                    </n-tag>
                                </template>
                            </VueDraggable>
                        </n-collapse-item>
                        <n-collapse-item name="2" title="其他控件"></n-collapse-item>
                    </n-collapse>
                </div>
            </n-scrollbar>
        </div>
    </n-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { DynamicIcon } from "@/components/DynamicIcon";
import VueDraggable from "vuedraggable";
import { cloneDeep } from "lodash-es";

let dragList = ref([
    {
        id: "",
        modelName: "",
        showRequireMark: false,
        name: "输入框",
        type: "input",
        row: 12,
        showLabel: true,
        labelWidth: "",
        label: "标签文字"
    },
    {
        id: "",
        modelName: "",
        showRequireMark: false,
        name: "下拉框",
        type: "select",
        row: 12,
        showLabel: true,
        labelWidth: "",
        label: "标签文字",
        options: [
            { label: "测试一", value: 1 },
            { label: "测试二", value: 2 }
        ]
    },
    {
        id: "",
        name: "按钮",
        showRequireMark: false,
        type: "button",
        row: 12,
        showLabel: false,
        label: "标签文字",
        labelWidth: "",
        buttonText: "按钮文字",
        buttonType: "default"
    }
]);

let cloneComponent = (origin: any) => {
    return cloneDeep({
        ...origin,
        id: new Date().getTime(),
        modelName: "fv" + new Date().getTime()
    });
};
</script>
