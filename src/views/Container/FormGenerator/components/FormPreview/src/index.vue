<template>
    <n-card
        :segmented="{ content: true }"
        content-style="padding:0;height:calc(100% - 54px)"
        header-style="line-height:30px"
        hoverable
        size="small"
        title="表单预览"
    >
        <n-scrollbar>
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
                    <DraggableItem :element="element" />
                </template>
            </VueDraggable>
        </n-scrollbar>
    </n-card>
</template>

<script lang="ts" setup>
import { NCard, NScrollbar } from "naive-ui";
import { computed } from "vue";
import { DraggableItem } from "../../../components";
import VueDraggable from "vuedraggable";

let props = defineProps({
    dragList: {
        type: Array,
        default: () => []
    }
});

let emits = defineEmits(["update:dragList"]);

// 解决线上v-model报错的问题
// https://github.com/vuejs/core/issues/5584
let dragList = computed({
    get: () => props.dragList,
    set: (val: any) => emits("update:dragList", val)
});
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
