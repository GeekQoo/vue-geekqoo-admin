<template>
    <div class="workbench-page">
        <n-card :content-style="{ padding: 0 }" :segmented="{ content: true }" hoverable size="small" title="工作台">
            <MineInfo />
        </n-card>
        <n-grid class="mt-4" :cols="workbenchConfig.column === 1 ? 1 : '1 1000:2'" x-gap="16" y-gap="16">
            <n-grid-item v-for="(item, index) in workbenchList">
                <vue-draggable
                    v-model="workbenchList[index]"
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
                            :content-style="{ padding: 0 }"
                            :segmented="{ content: true }"
                            :title="element.title"
                            class="mt-4 first:mt-0"
                            hoverable
                            size="small"
                        >
                            <template v-if="element.more" #header-extra>
                                <n-button
                                    size="tiny"
                                    text
                                    type="primary"
                                    @click="
                                        () => {
                                            $router.path(item.more);
                                        }
                                    "
                                >
                                    查看更多
                                </n-button>
                            </template>
                            <div class="draggable-item">
                                <Shortcuts v-if="element.component === 'Shortcuts'" />
                                <TaskList v-if="element.component === 'TaskList'" />
                            </div>
                        </n-card>
                    </template>
                </vue-draggable>
            </n-grid-item>
        </n-grid>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { NButton, NCard, NGrid, NGridItem } from "naive-ui";
import VueDraggable from "vuedraggable";
import { MineInfo, Shortcuts, TaskList } from "./components";
import { usePubilc } from "@/hooks";

let { $router } = usePubilc();

let workbenchConfig = ref({
    column: 2
});

let workbenchList = ref([
    [
        { title: "快捷操作", component: "Shortcuts" },
        { title: "任务列表", component: "TaskList", more: "/user/list" }
    ],
    [
        { title: "任务列表", component: "TaskList", more: "/user/list" },
        { title: "快捷操作", component: "Shortcuts" }
    ]
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

        .draggable-item {
            opacity: 0;
        }
    }
}
</style>
