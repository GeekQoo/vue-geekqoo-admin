<template>
    <n-card
        :segmented="{ content: true }"
        class="h-100%"
        content-style="padding-top:0"
        hoverable
        size="small"
        title="组件选择"
    >
        <n-divider>选择组件</n-divider>
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
                    <div :style="{ flex: `0 0 ${(element.row / 6) * 100}%` }" class="default-item box-border p-2">
                        <n-button v-if="element.type === 'button'" block>{{ element.buttonText }}</n-button>
                        <n-input v-if="element.type === 'input'" />
                    </div>
                </template>
            </VueDraggable>
            <n-divider>组件属性</n-divider>
            <n-form v-for="item in componentProps" inline label-placement="left" label-width="auto">
                <n-grid :cols="24" :x-gap="16">
                    <n-form-item-gi :span="24" label="组件栅格">
                        <n-slider v-model:value="item.row" :max="6" :min="1" :step="1" />
                    </n-form-item-gi>
                    <template v-if="item.type === 'button'">
                        <n-form-item-gi :span="24" label="按钮文字">
                            <n-input v-model:value="item.buttonText" placeholder="请输入按钮文字" />
                        </n-form-item-gi>
                    </template>
                </n-grid>
            </n-form>
        </template>
    </n-card>
</template>

<script lang="ts" setup>
import { NButton, NCard, NDivider, NForm, NFormItemGi, NGrid, NInput, NSelect, NSlider } from "naive-ui";
import { ref } from "vue";
import { cloneDeep } from "lodash-es";
import VueDraggable from "vuedraggable";

let props = defineProps({});

let emits = defineEmits([]);

// 组件参数
let componentProps = ref<any[]>([]);

// 组件类型选择
let componentType = ref(null);
let componentTypeOptions = ref([
    { name: "输入框", type: "input", row: 6 },
    { name: "按钮", type: "button", row: 6, buttonText: "示例文字", buttonType: "default" }
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
