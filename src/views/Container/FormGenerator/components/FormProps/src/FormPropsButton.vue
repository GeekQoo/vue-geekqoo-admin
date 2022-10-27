<template>
    <n-form-item label="按钮文字">
        <n-input v-model:value="modelValue.buttonText" placeholder="请输入按钮文字" />
    </n-form-item>
    <n-form-item label="按钮类型">
        <n-select v-model:value="modelValue.buttonType" :options="buttonTypeOptions" placeholder="请选择按钮类型" />
    </n-form-item>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import { reactive } from "vue";
import type { FormGeneratorProps } from "../../../types";

let props = defineProps({
    modelValue: {
        type: Object as PropType<FormGeneratorProps>,
        default: () => ({})
    }
});

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
