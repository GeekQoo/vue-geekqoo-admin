<template>
    <n-card
        :segmented="{ content: true }"
        class="h-100%"
        content-style="padding:0"
        hoverable
        size="small"
        title="表单预览"
    >
        <VueDraggable
            v-model="dragList"
            :animation="300"
            :forceFallback="true"
            class="draggable-default h-a flex flex-wrap items-start p-4"
            drag-class="draggable-drag"
            ghost-class="draggable-ghost"
            group="generator"
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
    </n-card>
</template>

<script lang="ts" setup>
import { NButton, NCard, NInput } from "naive-ui";
import VueDraggable from "vuedraggable";

let props = defineProps({
    dragList: {
        type: Array,
        default: () => []
    }
});

let emits = defineEmits(["update:dragList"]);
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
