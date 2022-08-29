<template>
    <n-space justify="center">
        <template v-for="item in actions">
            <n-button
                v-if="!item.actionType || item.actionType === 'button'"
                :disabled="item.disabled ? item.disabled() : false"
                :type="item.type || 'primary'"
                :size="item.size || 'small'"
                @click="item.onClick"
            >
                {{ item.label }}
            </n-button>
        </template>
    </n-space>
</template>

<script lang="ts" setup>
import { NSpace, NButton } from "naive-ui";
import { PropType } from "vue";

interface ActionProps {
    actionType?: "button";
    type?: "default" | "tertiary" | "primary" | "success" | "info" | "warning" | "error";
    size?: "tiny" | "small" | "medium" | "large";
    onClick?: () => void;
    disabled?: () => boolean;
}

let props = defineProps({
    actions: {
        type: Array as PropType<ActionProps[]>,
        default: []
    }
});

let emits = defineEmits([]);
</script>
