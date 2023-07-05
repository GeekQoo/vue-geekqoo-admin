<template>
    <n-space justify="center">
        <template v-if="type === 'button'">
            <n-button
                v-for="item in buttonActions"
                :color="item.color || undefined"
                :disabled="item.disabled ? item.disabled() : false"
                :secondary="item.secondary"
                :size="item.size || 'small'"
                :tertiary="item.tertiary"
                :type="item.type || 'primary'"
                @click="item.onClick"
            >
                {{ item.label }}
            </n-button>
        </template>
    </n-space>
</template>

<script lang="ts" setup>
import type { TableButtonActions } from "./types";

let props = defineProps({
    type: {
        type: String as PropType<"button">,
        default: "button"
    },
    buttonActions: {
        type: Array as PropType<TableButtonActions>,
        default: []
    }
});
</script>
