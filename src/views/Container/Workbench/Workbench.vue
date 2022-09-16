<template>
    <div class="workbench-page">
        <vue-draggable
            v-model="draggableList"
            :animation="300"
            :forceFallback="true"
            class="draggable-default flex flex-wrap items-start -m-2"
            drag-class="draggable-drag"
            ghost-class="draggable-ghost"
            item-key="index"
            tag="div"
        >
            <template #item="{ element, index }">
                <n-card :class="`m-2 h-a span-${element.span}`" hoverable>
                    <div class="draggable-item">
                        <p>{{ element.title }}</p>
                    </div>
                </n-card>
            </template>
        </vue-draggable>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { NCard } from "naive-ui";
import VueDraggable from "vuedraggable";

let draggableList = ref([
    { title: "测试模块1", span: 1, name: "test1" },
    { title: "测试模块2", span: 1, name: "test2" },
    { title: "测试模块3", span: 2, name: "test3" },
    { title: "测试模块4", span: 1, name: "test4" },
    { title: "测试模块5", span: 1, name: "test5" }
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
