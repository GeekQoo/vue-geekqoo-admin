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
        <template v-if="type === 'switch'">
            <n-switch
                v-for="item in switchActions"
                :checked-value="item.checkedValue"
                :default-value="item.defaultValue"
                :disabled="item.disabled ? item.disabled() : false"
                :size="item.size || 'small'"
                :unchecked-value="item.uncheckedValue"
                @update:value="item.onChange"
            >
                <template v-if="item.checkedText" #checked>{{ item.checkedText }}</template>
                <template v-if="item.uncheckedText" #unchecked>{{ item.uncheckedText }}</template>
            </n-switch>
        </template>
    </n-space>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import type { TableButtonActions, TableSwitchActions } from "./types";

let props = defineProps({
    type: {
        type: String as PropType<"button" | "switch">,
        default: "button"
    },
    buttonActions: {
        type: Array as PropType<TableButtonActions>,
        default: []
    },
    switchActions: {
        type: Array as PropType<TableSwitchActions>,
        default: []
    }
});
</script>
