<template>
    <div class="workbench-page">
        <vue-draggable
            v-model="draggableList"
            :animation="300"
            :forceFallback="true"
            class="draggable-default flex flex-wrap -m-2"
            drag-class="draggable-drag"
            ghost-class="draggable-ghost"
            item-key="index"
            tag="div"
        >
            <template #item="{ element, index }">
                <n-card
                    :class="`m-2 h-a span-${element.span}`"
                    :content-style="{ padding: 0 }"
                    :segmented="{ content: true }"
                    :title="element.title"
                    hoverable
                    size="small"
                >
                    <template #header-extra v-if="element.more">
                        <n-button size="tiny" type="primary" text>查看更多</n-button>
                    </template>
                    <div class="draggable-item">
                        <component :is="element.component" />
                    </div>
                </n-card>
            </template>
        </vue-draggable>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { NCard, NButton } from "naive-ui";
import VueDraggable from "vuedraggable";
import { MineInfo, Shortcuts, TaskList } from "./components";

let draggableList = ref([
    { title: "工作台", span: 2, component: MineInfo },
    { title: "快捷操作", span: 1, component: Shortcuts },
    { title: "任务列表", span: 1, component: TaskList, more: "/user/list" }
]);
</script>

<style lang="scss" scoped>
.workbench-page {
    .draggable-default {
        .span-1 {
            flex: 0 0 calc(50% - 1rem);
        }

        .span-2 {
            flex: 0 0 calc(100% - 1rem);
        }
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
