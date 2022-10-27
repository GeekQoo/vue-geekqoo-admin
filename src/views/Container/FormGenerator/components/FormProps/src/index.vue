<template>
    <n-card content-style="padding:0" hoverable>
        <div class="text-24px pl-20px pr-20px lh-60px">属性配置</div>
        <div class="pb-20px" style="height: calc(100vh - 225px)">
            <n-scrollbar>
                <div class="p-20px pt-0 pb-0">
                    <n-tabs type="line">
                        <n-tab-pane name="控件属性">
                            <n-form v-if="isChooseComponent" label-placement="left" label-width="auto">
                                <n-form-item label="组件栅格">
                                    <n-slider v-model:value="modelValue.row" :max="12" :min="1" :step="1" />
                                </n-form-item>
                                <n-form-item label="显示标签">
                                    <n-switch v-model:value="modelValue.showLabel" />
                                </n-form-item>
                                <n-form-item label="标签宽度">
                                    <n-input v-model:value="modelValue.labelWidth" placeholder="请输入标签宽度" />
                                </n-form-item>
                                <n-form-item label="标签文字">
                                    <n-input v-model:value="modelValue.label" placeholder="请输入标签文字" />
                                </n-form-item>
                                <n-form-item label="字段名称">
                                    <n-input v-model:value="modelValue.modelName" placeholder="请输入字段名称" />
                                </n-form-item>
                                <n-form-item label="是否必填">
                                    <n-switch v-model:value="modelValue.showRequireMark" />
                                </n-form-item>
                                <template v-if="modelValue.type === 'button'">
                                    <n-form-item label="按钮文字">
                                        <n-input v-model:value="modelValue.buttonText" placeholder="请输入按钮文字" />
                                    </n-form-item>
                                    <n-form-item label="按钮类型">
                                        <n-select
                                            v-model:value="modelValue.buttonType"
                                            :options="buttonTypeOptions"
                                            placeholder="请选择按钮类型"
                                        />
                                    </n-form-item>
                                </template>
                            </n-form>
                        </n-tab-pane>
                        <n-tab-pane name="表单属性" />
                    </n-tabs>
                </div>
            </n-scrollbar>
        </div>
    </n-card>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import { computed, reactive } from "vue";
import type { FormGeneratorProps } from "../../../components";

let props = defineProps({
    modelValue: {
        type: Object as PropType<FormGeneratorProps>,
        default: () => ({})
    }
});

// 是否选中组件
let isChooseComponent = computed(() => JSON.stringify(props.modelValue) !== "{}");

// 选项
let buttonTypeOptions = reactive([
    { label: "常规", value: "default" },
    { label: "次要", value: "tertiary" },
    { label: "主要", value: "primary" },
    { label: "信息", value: "info" },
    { label: "成功", value: "success" },
    { label: "警告", value: "warning" },
    { label: "错误", value: "error" }
]);
</script>
