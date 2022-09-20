<template>
    <n-card :segmented="{ content: true }" class="h-100%" hoverable size="small" title="组件列表">
        <VueDraggable
            v-model="dragList"
            :animation="300"
            :forceFallback="true"
            :group="{ name: 'generator', pull: 'clone', put: false }"
            :sort="false"
            class="draggable-default flex flex-wrap"
            drag-class="draggable-drag"
            ghost-class="draggable-ghost"
            item-key="index"
            tag="div"
        >
            <template #item="{ element, index }">
                <n-button block class="mb-4 last:mb-0">{{ element.name }}</n-button>
            </template>
        </VueDraggable>
    </n-card>
</template>

<script lang="ts" setup>
import { NButton, NCard } from "naive-ui";
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
