<template>
    <n-form-item label="按钮文字"> </n-form-item>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { FormGeneratorProps } from "../../../types";

let props = defineProps({
    modelValue: {
        type: Object as PropType<FormGeneratorProps>,
        default: () => ({})
    }
});
</script>
