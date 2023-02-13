<template>
    <div class="workbench-page">
        <n-card :segmented="{ content: true }" content-style="padding: 0" hoverable size="small" title="工作台">
            <MineInfo />
        </n-card>
        <n-grid :cols="workbenchConfig.column === 1 ? 1 : '1 1000:2'" class="mt-4" x-gap="16" y-gap="16">
            <n-grid-item v-for="(pItem, pIndex) in workbenchList">
                <VueDraggable
                    v-model="workbenchList[pIndex]"
                    :animation="300"
                    :forceFallback="true"
                    class="draggable-default"
                    drag-class="draggable-drag"
                    ghost-class="draggable-ghost"
                    group="workbench"
                    item-key="index"
                    tag="div"
                >
                    <template #item="{ element, index }">
                        <n-card
                            :segmented="{ content: true }"
                            :title="element.title"
                            class="mt-4 first:mt-0"
                            content-style="padding: 0"
                            hoverable
                            size="small"
                        >
                            <template v-if="element.more" #header-extra>
                                <n-button size="tiny" text type="primary">查看更多</n-button>
                            </template>
                            <div class="draggable-item">
                                <Shortcuts v-if="element.component === 'Shortcuts'" />
                                <TaskList v-if="element.component === 'TaskList'" />
                            </div>
                        </n-card>
                    </template>
                </VueDraggable>
            </n-grid-item>
        </n-grid>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import VueDraggable from "vuedraggable";
import { MineInfo, Shortcuts, TaskList } from "./components";
import { usePublic } from "@/hooks";

let { $router } = usePublic();

let workbenchConfig = ref({
    column: 2
});

let workbenchList = ref([
    [{ title: "任务列表", component: "TaskList", more: "/user/list" }],
    [{ title: "快捷操作", component: "Shortcuts" }]
]);
</script>

<style lang="scss" scoped>
.workbench-page {
    .draggable-default {
        height: 100%;
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
}
</style>
