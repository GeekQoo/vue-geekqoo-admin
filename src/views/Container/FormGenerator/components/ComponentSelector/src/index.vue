<template>
    <n-card
        :segmented="{ content: true }"
        content-style="padding:0;height:calc(100% - 54px)"
        header-style="line-height:30px"
        hoverable
        size="small"
        title="组件配置"
    >
        <n-scrollbar>
            <div class="p4 box-border">
                <n-divider class="important-mt-0">选择组件</n-divider>
                <n-select
                    v-model:value="componentType"
                    :options="componentTypeOptions"
                    label-field="name"
                    placeholder="请选择组件类型"
                    value-field="type"
                    @update:value="changeComponentType"
                />
                <template v-if="componentProps.length > 0">
                    <n-divider>组件预览</n-divider>
                    <VueDraggable
                        v-model="componentProps"
                        :animation="300"
                        :clone="cloneComponent"
                        :forceFallback="true"
                        :group="{ name: 'generator', pull: 'clone', put: false }"
                        :sort="false"
                        class="draggable-default h-a flex flex-wrap items-center -m-2"
                        drag-class="draggable-drag"
                        ghost-class="draggable-ghost"
                        item-key="index"
                        tag="div"
                    >
                        <template #item="{ element, index }">
                            <DraggableItem :element="element" />
                        </template>
                    </VueDraggable>
                    <n-divider>组件属性</n-divider>
                    <n-grid v-for="item in componentProps" :x-gap="16" :y-gap="16" cols="2" item-responsive>
                        <n-grid-item class="flex-y-center" span="2">
                            <span class="min-w-80px">组件栅格</span>
                            <n-slider v-model:value="item.row" :max="6" :min="1" :step="1" class="ml-4" />
                        </n-grid-item>
                        <n-grid-item class="flex-y-center" span="2 500:1">
                            <span class="min-w-80px">显示标签</span>
                            <n-switch v-model:value="item.showLabel" />
                        </n-grid-item>
                        <n-grid-item class="flex-y-center" span="2 500:1">
                            <span class="min-w-80px">标签文字</span>
                            <n-input v-model:value="item.label" class="ml-4" placeholder="请输入标签文字" />
                        </n-grid-item>
                        <n-grid-item class="flex-y-center" span="2 500:1">
                            <span class="min-w-80px">标签宽度</span>
                            <n-input v-model:value="item.labelWidth" class="ml-4" placeholder="请输入标签宽度" />
                        </n-grid-item>
                        <template v-if="item.type === 'button'">
                            <n-grid-item class="flex-y-center" span="2 500:1">
                                <span class="min-w-80px">按钮文字</span>
                                <n-input v-model:value="item.buttonText" class="ml-4" placeholder="请输入按钮文字" />
                            </n-grid-item>
                        </template>
                    </n-grid>
                </template>
            </div>
        </n-scrollbar>
    </n-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { cloneDeep } from "lodash-es";
import VueDraggable from "vuedraggable";
import { DraggableItem } from "../../../components";

// 组件参数
let componentProps = ref<any[]>([]);

// 组件类型选择
let componentType = ref(null);
let componentTypeOptions = ref([
    { name: "输入框", type: "input", row: 6, showLabel: true, labelWidth: "80", label: "标签文字", modelValue: null },
    {
        name: "下拉框",
        type: "select",
        row: 6,
        showLabel: true,
        labelWidth: "80",
        label: "标签文字",
        modelValue: null,
        options: [
            { label: "测试一", value: 1 },
            { label: "测试二", value: 2 }
        ]
    },
    {
        name: "按钮",
        type: "button",
        row: 6,
        showLabel: false,
        label: "标签文字",
        buttonText: "按钮文字",
        buttonType: "default"
    }
]);
let changeComponentType = (type: string) => {
    componentProps.value = componentTypeOptions.value.filter((item) => item.type === type);
};

let cloneComponent = (origin: any) => {
    return cloneDeep(origin);
};
</script>

<style lang="scss" scoped>
.draggable-default {
}

.draggable-drag {
    opacity: 0.1;
}

.draggable-ghost {
    background: rgba(#000000, 0);
    border: 1px dashed #999999;
    width: 100%;

    :deep(.n-card-header) {
        opacity: 0;
    }

    :deep(.n-card__content) {
        border-color: transparent;
        opacity: 0;
    }
}
</style>
