<template>
    <n-space justify="center">
        <template v-for="item in actions">
            <n-button
                v-if="!item.actionType || item.actionType === 'button'"
                :color="item.color || undefined"
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
import type { TableActionsProps } from "./types";

let props = defineProps({
    actions: {
        type: Array as PropType<TableActionsProps>,
        default: []
    }
});

let emits = defineEmits([]);
</script>
