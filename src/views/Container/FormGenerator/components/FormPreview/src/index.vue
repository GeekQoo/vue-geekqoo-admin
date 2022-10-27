<template>
    <n-card content-style="padding:0" hoverable>
        <div class="text-24px pl-20px pr-20px lh-60px">布局排版</div>
        <div class="pb-20px" style="height: calc(100vh - 225px)">
            <n-scrollbar>
                <div class="p-20px pb-0">
                    <VueDraggable
                        v-model="previewList"
                        :animation="100"
                        :component-data="setNFormProps()"
                        :forceFallback="true"
                        chosen-class="draggable-chosen"
                        class="draggable-default grid grid-cols-12 gap-16px pb-50px"
                        clone-class="draggable-clone"
                        drag-class="draggable-drag"
                        fallbackTolerance="5"
                        ghost-class="draggable-ghost"
                        group="generator"
                        item-key="index"
                        tag="n-form"
                        @add="onAddComponent"
                        @choose="onChooseComponent"
                    >
                        <template #item="{ element, index }">
                            <div
                                :class="element.id === modelValue.id ? 'b-solid' : 'b-dashed'"
                                :style="`grid-column: span ${element.row} / span 12`"
                                class="relative p-2 pb-0 b-1px b-color-[var(--primary-color)]"
                            >
                                <div
                                    :class="element.id !== modelValue.id && 'hidden'"
                                    class="flex-center absolute bottom--11px right--11px"
                                >
                                    <n-button
                                        class="rd-0"
                                        size="tiny"
                                        type="primary"
                                        @click="onCopyComponent(element, index)"
                                    >
                                        <template #icon>
                                            <dynamic-icon icon="CopyOutlined" size="18" />
                                        </template>
                                    </n-button>
                                    <n-button
                                        class="ml-1 rd-0"
                                        size="tiny"
                                        type="error"
                                        @click="onDeleteComponent(element)"
                                    >
                                        <template #icon>
                                            <dynamic-icon icon="DeleteOutlined" size="18" />
                                        </template>
                                    </n-button>
                                </div>
                                <n-form-item
                                    :label="element.label"
                                    :label-width="element.labelWidth"
                                    :show-label="element.showLabel"
                                    :show-require-mark="element.showRequireMark"
                                >
                                    <template v-if="element.type === 'button'">
                                        <n-button :type="element.buttonType" block>
                                            {{ element.buttonText }}
                                        </n-button>
                                    </template>
                                    <template v-if="element.type === 'input'">
                                        <n-input :placeholder="`请输入${element.label}`" />
                                    </template>
                                    <template v-if="element.type === 'select'">
                                        <n-select
                                            :options="element.options"
                                            :placeholder="`请选择${element.label}`"
                                            label-field="label"
                                            value-field="value"
                                        />
                                    </template>
                                </n-form-item>
                            </div>
                        </template>
                    </VueDraggable>
                </div>
            </n-scrollbar>
        </div>
    </n-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import VueDraggable from "vuedraggable";
import { DynamicIcon } from "@/components/DynamicIcon";
import { cloneDeep } from "lodash-es";

let props = defineProps({
    modelValue: { type: Object, default: () => ({}) }
});

let emits = defineEmits(["update:modelValue"]);

// 预览列表
let previewList = ref<any[]>([]);

// 设置NForm属性
let setNFormProps = () => ({ labelPlacement: "left" });

// 选中控件
let onChooseComponent = (e: any) => {
    emits("update:modelValue", previewList.value[e.oldIndex]);
};

let onAddComponent = (e: any) => {
    emits("update:modelValue", previewList.value[e.newIndex]);
};

// 复制组件
let onCopyComponent = (element: any, index: number) => {
    previewList.value.splice(
        index + 1,
        0,
        cloneDeep({ ...element, id: new Date().getTime(), modelName: "fv" + new Date().getTime() })
    );
};

// 删除组件
let onDeleteComponent = (element: any) => {
    previewList.value = previewList.value.filter((item: any) => item.id !== element.id);
    emits("update:modelValue", {});
};
</script>

<style lang="scss" scoped>
:deep(.draggable-default) {
    .draggable-ghost {
        //grid-column: span 12 / span 12 !important;
        background: transparent !important;
        border: 1px dashed var(--primary-color) !important;
        //margin-bottom: 12px !important;

        div,
        span,
        label {
            opacity: 0 !important;
        }
    }
}
</style>
