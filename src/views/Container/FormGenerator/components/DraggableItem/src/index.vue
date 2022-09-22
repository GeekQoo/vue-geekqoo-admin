<template>
    <div :style="{ flex: `0 0 ${(element.row / 6) * 100}%` }" class="default-item flex-y-center box-border p-2">
        <span
            v-if="element.showLabel"
            :style="{ flex: `0 0 ${element.labelWidth ? element.labelWidth + 'px' : 'auto'}` }"
            class="text-right mr-4"
        >
            {{ element.label }}
        </span>
        <template v-if="element.type === 'button'">
            <n-button block class="flex-1">
                {{ element.buttonText }}
            </n-button>
        </template>
        <template v-if="element.type === 'input'">
            <n-input class="flex-1" />
        </template>
    </div>
</template>

<script lang="ts" setup>
import { NButton, NInput } from "naive-ui";

let props = defineProps({
    element: {
        type: Object,
        default: () => ({})
    }
});

let emits = defineEmits(["update:element"]);
</script>
